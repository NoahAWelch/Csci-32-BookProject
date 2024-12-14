import { Field } from '@repo/ui/field'
import { Flex } from '@repo/ui/flex'
import { Header } from '@repo/ui/header'
import { Label } from '@repo/ui/label'
import Input from '@repo/ui/input'
import { AuthorContext } from '../../../context/authorContext'
import { useContext } from 'react'

export default function BookSearch() {
  const { setBooks, setAuthorNameQuery, books } = useContext(AuthorContext || "")
  return (
    <>
      <Header className="justify-between">Search Books</Header>
      <Flex className="flex-col gap-y-2">
        <Field>
          <Label>Books</Label>
          <Input
            name="book-search-query"
            id="book-query"
            //value={"" || newBook}
            onEnter={(newBook) => {
              setBooks([...books, newBook || ""])
            }}
          />
        </Field>
        </Flex>
        </>
        )}
