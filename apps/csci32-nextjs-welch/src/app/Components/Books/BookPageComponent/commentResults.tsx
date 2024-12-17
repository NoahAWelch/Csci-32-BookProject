/*'use client'
import { Flex } from '@repo/ui/flex'
import { useContext } from 'react'
import { AuthorContext } from '../../../context/authorContext'
import CommentCard from './Comments'

export default function CommentResults() {
  const { book } = useContext(AuthorContext)
  console.log(book)
  return (
    <Flex className="gap-2 flex-wrap">
      {Array.isArray(book) && book.map(({ book_id, comment }) => <CommentCard />)}
    </Flex>
  )
}*/
