'use client'
import React, { useState } from 'react'
import Input from '@repo/ui/input'
import { Button } from '@repo/ui/button'
import { Flex } from '@repo/ui/flex'
import { Variants } from '@repo/ui/variant'
import { createComment } from '../../../hook/useAuthors'
import CommentResults from './commentResults'

export default function Comments() {
  const [comments, setComments] = useState('')
  const [bookId, setBookId] = useState('')

  const handleCommentChange = (value: string) => {
    setComments(value)
  }

  const handleBookIdChange = (value: string) => {
    setBookId(value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const result = await createComment({ comments, book_id: bookId })
      console.log('Comment submission result:', result)
    } catch (error) {
      console.error('Error submitting comments:', error)
    }
  }

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="p-8 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col p-4 mb-4 border border-gray-300 rounded-lg">
            <Input
              name="comments"
              id="comments"
              placeholder="Enter your comments"
              value={comments}
              onChange={(value) => handleCommentChange(value)}
            />
          </div>
        </div>
        <div className="p-4">
          <Input
            name="book_id"
            id="book_id"
            placeholder="Enter the Book ID"
            value={bookId}
            onChange={(value) => handleBookIdChange(value)}
          />
        </div>
        <Flex className="justify-end gap-2">
          <Button type="submit" variant={Variants.Secondary2}>
            Submit
          </Button>
        </Flex>
      </form>
      <div></div>
    </div>
  )
}
/* <Flex className="justify-end gap-2">
          <Button type="submit" variant={Variants.Secondary2}>
            Submit
          </Button>
        </Flex>
      </form>
      <div>
        //<CommentResults />
      </div>
    </div> */
