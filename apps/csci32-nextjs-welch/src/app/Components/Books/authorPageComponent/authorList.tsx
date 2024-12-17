'use client'
import { Flex } from '@repo/ui/flex'
import { Tag } from '@repo/ui/tag'
import { useContext } from 'react'
import { AuthorContext } from '../../../context/authorContext'
import { Variants } from '@repo/ui/variant'

export function AuthorList() {
  const { authors, removeAuthor } = useContext(AuthorContext)

  return (
    <Flex className="gap-4 bg-blue-300 p-4 rounded-lg">
      {authors.map((author) => (
        <Tag key={author.author_id} variant={Variants.TertiaryReview} onClickX={() => removeAuthor(author.author_id)}>
          {author.author_name}
        </Tag>
      ))}
    </Flex>
  )
}
