import AuthorForm from '../Misc/authorForm'
import { AuthorContext } from '../../../context/authorContext'
import { Wrapper } from '@repo/ui/wrapper'
import { Flex } from '@repo/ui/flex'
import { useContext } from 'react'
import { Button } from '@repo/ui/button'
import { Variants } from '@repo/ui/variant'
import { Header } from '@repo/ui/header'
import React from 'react'
import { UpdateForm } from '../Misc/updateForm'

export default function AuthorHome() {
  const { showAuthorForm, setShowAuthorForm } = useContext(AuthorContext)
  return (
    <Wrapper>
      <Header variant="h1" className="text-center my-1">
        Welcome! Create your Authors and Books here!
      </Header>
      <Button
        variant={Variants.Secondary}
        onClick={() => {
          setShowAuthorForm(!showAuthorForm)
        }}
      >
        {showAuthorForm ? 'Update Authors' : 'Create Author/Book'}
      </Button>
      <Flex className="flex-col gap-y-8 mt-8">{showAuthorForm ? <AuthorForm /> : <UpdateForm />}</Flex>
    </Wrapper>
  )
}
