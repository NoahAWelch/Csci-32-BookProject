'use client'
import { Flex } from '@repo/ui/flex'
import { Tag } from '@repo/ui/tag'
import { useContext } from 'react'
import { AuthorContext } from '../../../context/authorContext'
import { Variants } from '@repo/ui/variant'

export function BookList() {
  const { books, removeBook } = useContext(AuthorContext)

  return (
    <Flex className="gap-4 bg-blue-300">
      {books.map((book, index) => (
        <Tag key={index} variant={Variants.TertiaryReview} onClickX={() => removeBook(book)}>
          {book}
        </Tag>
      ))}
    </Flex>
  )
}




     /* {authors.map((author) => (
        <Tag
          key={author.author_id}  // Use author_id as the key
          variant={Variants.TertiaryReview}
          onClickX={() => removeAuthor(author.author_id)}  // Pass author_id to removeAuthor
        >
          {author.author_name}  // Display author_name instead of the whole author object
        </Tag>
      ))}*/

