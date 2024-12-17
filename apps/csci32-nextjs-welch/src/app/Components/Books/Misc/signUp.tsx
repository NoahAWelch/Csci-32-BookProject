import React, { useState, useContext } from 'react'
import { AuthorContext } from '../../../context/authorContext'
import { CreateUserProps, createUser } from '../../../hook/useAuthors'
import Input from '@repo/ui/input'
import { Button } from '@repo/ui/button'
import { Field } from '@repo/ui/field'
import { FieldGroup } from '@repo/ui/fieldGroup'
import { Flex } from '@repo/ui/flex'
import { Header } from '@repo/ui/header'
import { Label } from '@repo/ui/label'
import { Variants } from '@repo/ui/variant'

const CreateUserForm = ({ onUserCreated }: { onUserCreated: (userId: string) => void }) => {
  const { setShowAuthorForm, mutate } = useContext(AuthorContext)
  const [userFormData, setUserFormData] = useState({
    user_name: '',
    password: '',
    email: '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!userFormData.user_name || !userFormData.password) {
      return alert('Please fill out all required fields.')
    }

    const payload: CreateUserProps = {
      user_name: userFormData.user_name,
      password: userFormData.password,
      email: userFormData.email,
    }

    try {
      await createUser(payload)
      alert(`User "${userFormData.user_name}" created successfully!`)

      setUserFormData({ user_name: '', password: '', email: '' })
      mutate()
      setShowAuthorForm(false)
    } catch (error) {
      console.error('Error creating user:', error)
      alert('Failed to create user. Please try again.')
    }
  }

  return (
    <div>
      <Header variant="h3">Create User</Header>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FieldGroup>
          <Field>
            <Label>User Name</Label>
            <Input
              id="a"
              name=""
              placeholder="Enter your username"
              value={userFormData.user_name}
              onChange={(value) => setUserFormData({ ...userFormData, user_name: value })}
            />
          </Field>
          <Field>
            <Label>Password</Label>
            <Input
              id="a"
              name=""
              type="password"
              placeholder="Enter your password"
              value={userFormData.password}
              onChange={(value) => setUserFormData({ ...userFormData, password: value })}
            />
          </Field>
          <Field>
            <Label>Email (optional)</Label>
            <Input
              id="a"
              name=""
              type="email"
              placeholder="Enter your email"
              value={userFormData.email}
              onChange={(value) => setUserFormData({ ...userFormData, email: value })}
            />
          </Field>
        </FieldGroup>

        <Flex className="justify-end gap-2">
          <Button type="submit" variant={Variants.Secondary2}>
            Create User
          </Button>
        </Flex>
      </form>
    </div>
  )
}
export default CreateUserForm
