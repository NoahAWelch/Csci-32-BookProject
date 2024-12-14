/*'use client'
import React, { useState } from 'react'
import PageTitle from '../../PageTitle'
import Input from '@repo/ui/input'

export default function Comments() {
  return (
    <div>
      <div
        className="text-black text-center min-w-min max-w-max min-h-screen p-8 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
 <PageTitle title="Comments" />


<div className="flex flex-col p-12 transition-all bg-gray-300 shadow-lg border border-gray-300 rounded-lg hover:scale-110 hover:bg-red-400 bg-gradient-to-r from-yellow-600 to-red-600' grow">
<Input
              name={`Comment-${index}`}
              id={`Comment-${index}`}
              placeholder="Comment"
              value={book.book_synopsis}
              onChange={(value) => bookCommentChange(index, 'book_synopsis', value)}
            />
</div>


      </div>

    </div>
  )
}*//*
'use client'
import React, { useContext, useState } from 'react';
import Input from '@repo/ui/input';
import { Button } from '@repo/ui/button';
import { Flex } from '@repo/ui/flex';
import { Variants } from '@repo/ui/variant';

export default function Comments() {

  const [books, setBook] = useState([
    {
      book: {
        book_name: 'Book 1',
        book_description: 'Description of Book 1',
        comment: '',
      },

    },
  ]);

  const bookCommentChange = (index: number, field: string, value: string | number) => {
    const updatedBooks = books.map((book, idx) =>
      idx === index ? { ...book, [field]: value } : book
    );
    setBook(updatedBooks);
  };


  const Submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const addBook = () => {
      setBook([
        ...books,
        {
          book:{
          book_name: '',
          book_description: '',
          comment: '',
          },

        },
      ])
    }

  return (
    <div>
       <form className="flex flex-col gap-4" onSubmit={Submit}>
      <div className="text-black text-center min-w-min max-w-max min-h-screen p-8 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        {books.map((book, index) => (
          <div
            key={index}
            className="flex flex-col p-12 transition-all bg-gray-300 shadow-lg border border-gray-300 rounded-lg hover:scale-110 hover:bg-red-400 bg-gradient-to-r from-yellow-600 to-red-600 grow mb-4"
          >
            <Input
              name={`Comment-${index}`}
              id={`Comment-${index}`}
              placeholder="Enter your comment"
              value={book.comment}
              onChange={(value) => bookCommentChange(index, 'comment', value)}
            />
          </div>
        ))}
      </div>
      <Flex className="justify-end gap-2">
          <Button variant={Variants.Secondary2} onClick={addBook}>
            Add Another Book
          </Button>
          <Button type="submit" variant={Variants.Secondary2}>
            Submit
          </Button>
        </Flex>
      </form>
    </div>
  );
}

}*/

'use client';
import React, { useContext, useState } from 'react';
import Input from '@repo/ui/input';
import { Button } from '@repo/ui/button';
import { Flex } from '@repo/ui/flex';
import { Variants } from '@repo/ui/variant';
import { AuthorContext } from '../../../context/authorContext'
import { CreateAuthorProps, createAuthor } from '../../../hook/useAuthors'

export default function Comments() {
  const [comments, setComments] = useState([{ text: '' }]);


  // Function to handle comment changes
  const handleCommentChange = (index: number, value: string) => {
    const updatedComments = comments.map((comment, idx) =>
      idx === index ? { text: value } : comment
    );
    setComments(updatedComments);
  };

  // Function to add a new comment field
  const addComment = () => {
    setComments([...comments, { text: '' }]);
  };

  // Form submission logic
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate sending comments to an API
    console.log('Submitted comments:', comments);
  };

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="p-8 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="flex flex-col p-4 mb-4 border border-gray-300 rounded-lg"
            >
              <Input
                name={`Comment-${index}`}
                id={`Comment-${index}`}
                placeholder="Enter your comment"
                value={comment.text}
                onChange={(value) => handleCommentChange(index, value)}
              />
            </div>
          ))}
        </div>
        <Flex className="justify-end gap-2">
          <Button variant={Variants.Secondary2} onClick={addComment} type="button">
            Add Another Comment
          </Button>
          <Button type="submit" variant={Variants.Secondary2}>
            Submit
          </Button>
        </Flex>
      </form>
    </div>
  );
}
/*
'use client';
import React, { useContext, useState } from 'react';
import Input from '@repo/ui/input';
import { Button } from '@repo/ui/button';
import { Flex } from '@repo/ui/flex';
import { Variants } from '@repo/ui/variant';
import { AuthorContext } from '../../../context/authorContext';
import { CreateAuthorProps, createAuthor } from '../../../hook/useAuthors';

export default function Comments() {
  const { setShowAuthorForm, mutate } = useContext(AuthorContext);

  const [bookData, setBookData] = useState({
    book_name: '',
    book_description: '',
    comments: [{ text: '' }],
  });

  // Function to handle field changes
  const handleFieldChange = (field: string, value: string) => {
    setBookData((prev) => ({ ...prev, [field]: value }));
  };

  // Function to handle comment changes
  const handleCommentChange = (index: number, value: string) => {
    const updatedComments = bookData.comments.map((comment, idx) =>
      idx === index ? { text: value } : comment
    );
    setBookData((prev) => ({ ...prev, comments: updatedComments }));
  };

  // Function to add a new comment field
  const addComment = () => {
    setBookData((prev) => ({
      ...prev,
      comments: [...prev.comments, { text: '' }],
    }));
  };

  // Form submission logic
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const authorPayload: CreateAuthorProps = {
      author_name: 'Author Name', // Replace with actual value if necessary
      author_description: 'Author Description', // Replace with actual value if necessary
      book_properties: [
        {
          // book_name: bookData.book_name,
          // book_description: bookData.book_description,
          genre: 'Fiction', // Add or adjust as needed
          book_reccomendation: 'Highly Recommended', // Add or adjust as needed
          book_rating: 5, // Add or adjust as needed
          book_synopsis: 'A gripping tale of adventure.', // Add or adjust as needed
          comment: bookData.comments.map((comment) => comment.text).join('; '),
        },
      ],
      book: [],
      flag: false
    };

    console.log('Payload:', authorPayload);
    await createAuthor(authorPayload);
    mutate();

    // Reset state
    setBookData({
      book_name: '',
      book_description: '',
      comments: [{ text: '' }],
    });
    setShowAuthorForm(false);
    alert('Book with comments has been submitted successfully!');
  };

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="p-8 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

          {bookData.comments.map((comment, index) => (
            <div
              key={index}
              className="flex flex-col p-4 mb-4 border border-gray-300 rounded-lg"
            >
              <Input
                name={`Comment-${index}`}
                id={`Comment-${index}`}
                placeholder="Enter your comment"
                value={comment.text}
                onChange={(value) => handleCommentChange(index, value)}
              />
            </div>
          ))}
        </div>
        <Flex className="justify-end gap-2">
          <Button variant={Variants.Secondary2} onClick={addComment} type="button">
            Add Another Comment
          </Button>
          <Button type="submit" variant={Variants.Secondary2}>
            Submit
          </Button>
        </Flex>
      </form>
    </div>
  );
}*/
