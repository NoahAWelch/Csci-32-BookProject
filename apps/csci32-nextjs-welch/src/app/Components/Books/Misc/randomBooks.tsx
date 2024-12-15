'use client'
import { Flex } from '@repo/ui/flex'
import { useContext } from 'react'
import { AuthorContext } from '../../../context/authorContext'
import RandomBookCard from './randomBookCard'

export default function PublicBookResults() {
  const { authors } = useContext(AuthorContext)
  console.log(authors);
  return (
    <Flex className="gap-2 flex-wrap">
  {Array.isArray(authors) &&
    authors.filter(({ flag }) => flag === false)
    .map(({ author_id, author_name, author_description, book_properties }) => (
      <RandomBookCard
        key={author_id}
        author_id={author_id}
        author_name={author_name}
        author_description={author_description}
        book_properties={book_properties}
      />
    ))}
</Flex>

  )
}
