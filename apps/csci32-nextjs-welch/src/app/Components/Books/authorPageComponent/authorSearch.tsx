'use client'
import React, { useContext, useState } from 'react'
import { AuthorContext } from '../../../context/authorContext'
import { Field } from '@repo/ui/field'
import { Flex } from '@repo/ui/flex'
import { Header } from '@repo/ui/header'
import { Label } from '@repo/ui/label'
import { BookList } from '../Misc/bookList'
import Input from '@repo/ui/input'

export default function AuthorSearch() {
  const { setBooks, setAuthorNameQuery, books } = useContext(AuthorContext)

  const [bookQuery, setBookQuery] = useState('')
  const [authorName, setAuthorName] = useState('')

  return (
    <>
      <Header className="justify-between">Search Authors</Header>
      <Flex className="flex-col gap-y-2">
        <Field>
          <Label>Books</Label>
          <Input
            name="book-search-query"
            id="book-query"
            value={bookQuery}
            onChange={(newBook) => setBookQuery(newBook)}
            onEnter={() => {
              setBooks([...books, bookQuery])
              setBookQuery('')
            }}
          />
        </Field>

        <BookList />

        <Field>
          <Label>Author Name</Label>
          <Input
            name="author-name-query"
            id="author-search"
            value={authorName}
            onChange={(newValue) => setAuthorName(newValue)}
            onEnter={() => {
              setAuthorNameQuery(authorName)
              setAuthorName('')
            }}
          />
        </Field>
      </Flex>
    </>
  )
}
