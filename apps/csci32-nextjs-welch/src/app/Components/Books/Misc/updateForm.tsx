import React, { useContext, useState } from 'react'
import { Flex } from '@repo/ui/flex'
import Input from '@repo/ui/input'
import { Label } from '@repo/ui/label'
import { Field } from '@repo/ui/field'
import { FieldGroup } from '@repo/ui/fieldGroup'
import { Button } from '@repo/ui/button'
import { Variants } from '@repo/ui/variant'
import { Header } from '@repo/ui/header'
import { AuthorContext } from '../../../context/authorContext'
import { CreateAuthorProps, UpdateAuthorProps, createAuthor, getAuthor, updateAuthor } from '../../../hook/useAuthors'

export function UpdateForm() {
  const { setShowAuthorForm, mutate, setAuthorId, setAuthor, author, authorId } = useContext(AuthorContext)
  const [authorFormData, setAuthorFormData] = useState({
    author_name: '',
    author_description: '',
    author_id: '',
    flag: false,
    delete: false,
  })
  const [bookProperties, setBookProperties] = useState([
    {
      book: {
        book_name: '',
        book_description: '',
      },
      genre: '',
      book_rating: 0,
      book_synopsis: '',
      book_reccomendation: '',
    },
  ])

  const bookPropertyChange = (index: number, field: string, value: string | number) => {
    const updatedBooks = bookProperties.map((book, idx) => (idx === index ? { ...book, [field]: value } : book))
    setBookProperties(updatedBooks)
  }

  const bookChange = (index: number, field: string, value: string | number) => {
    const updatedBooks = bookProperties.map((book, idx) =>
      idx === index ? { ...book, book: { ...book.book, [field]: value } } : book,
    )
    setBookProperties(updatedBooks)
  }

  const addBook = () => {
    setBookProperties([
      ...bookProperties,
      {
        book: {
          book_name: '',
          book_description: '',
        },
        genre: '',
        book_rating: 0,
        book_synopsis: '',
        book_reccomendation: '',
      },
    ])
  }

  const removeBook = (index: number) => {
    setBookProperties(bookProperties.filter((_, idx) => idx !== index))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!authorFormData.author_name || !authorFormData.author_description) {
      return alert('Please fill out all required fields for the author.')
    }

    const formattedBooks = bookProperties.map((book) => ({
      ...book,
      ...book.book,
      book: undefined,
    }))

    const authorData: UpdateAuthorProps = {
      ...authorFormData,
      book_properties: formattedBooks,
      book: [],
    }

    console.log('Payload to Backend:', authorData)

    // await updateAuthor(authorData)
    setAuthorFormData({ author_name: '', author_description: '', author_id: '', flag: false, delete: false })
    setBookProperties([
      {
        book: {
          book_name: '',
          book_description: '',
        },
        genre: '',
        book_rating: 0,
        book_synopsis: '',
        book_reccomendation: '',
      },
    ])
    mutate()
    setShowAuthorForm(false)
    alert(`Your author "${authorFormData.author_name}" has been added successfully!`)
  }

  return (
    <div>
      <Header variant="h3">Create Author</Header>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <FieldGroup>
          <Field>
            <Label htmlFor="author-Id">Author Id</Label>
            <Input
              id="author-Id"
              name="author-id"
              placeholder="Enter author id"
              value={authorFormData.author_id}
              onChange={(value) => setAuthorFormData({ ...authorFormData, author_id: value })}
            />
          </Field>
          <Field>
            <Label htmlFor="author-name">Author Name</Label>
            <Input
              id="author-name"
              name="author-name"
              placeholder="Enter author name"
              value={authorFormData.author_name}
              onChange={(value) => setAuthorFormData({ ...authorFormData, author_name: value })}
            />
          </Field>
          <Field>
            <Label htmlFor="author-description">Author Description</Label>
            <Input
              id="author-description"
              name="author-description"
              placeholder="Enter author description"
              value={authorFormData.author_description}
              onChange={(value) => setAuthorFormData({ ...authorFormData, author_description: value })}
            />
          </Field>
          <Field>
            <Label htmlFor="flag">Public/Private Flag</Label>
            <Input
              name="flag"
              id="flag"
              placeholder="Make public"
              value={authorFormData.flag ? 'Yes' : 'No'}
              onChange={(value) => setAuthorFormData({ ...authorFormData, flag: value === 'Yes' })}
            />
          </Field>
        </FieldGroup>

        <p className="text-xl font-bold">Books</p>
        {bookProperties.map((book, index) => (
          <FieldGroup key={index} className="ml-4 bg-gray-200 shadow-md rounded-lg p-4">
            <Flex>
              <Label>Book {index + 1}</Label>
              {bookProperties.length > 1 && (
                <Button variant={Variants.TertiaryReview} onClick={() => removeBook(index)}>
                  Remove
                </Button>
              )}
            </Flex>

            <Input
              name={`book-name-${index}`}
              id={`book-name-${index}`}
              placeholder="Book Name"
              value={book.book.book_name}
              onChange={(value) => bookChange(index, 'book_name', value)}
            />
            <Input
              name={`book-description-${index}`}
              id={`book-description-${index}`}
              placeholder="Book Description"
              value={book.book.book_description}
              onChange={(value) => bookChange(index, 'book_description', value)}
            />
            <Input
              name={`book-genre-${index}`}
              id={`book-genre-${index}`}
              placeholder="Genre"
              value={book.genre}
              onChange={(value) => bookPropertyChange(index, 'genre', value)}
            />
            <Input
              name={`book-rating-${index}`}
              id={`book-rating-${index}`}
              placeholder="Rating"
              value={book.book_rating}
              onChange={(value) => bookPropertyChange(index, 'book_rating', Number(value))}
            />
            <Input
              name={`book-synopsis-${index}`}
              id={`book-synopsis-${index}`}
              placeholder="Synopsis"
              value={book.book_synopsis}
              onChange={(value) => bookPropertyChange(index, 'book_synopsis', value)}
            />
            <Input
              name={`book-reccomendation-${index}`}
              id={`book-reccomendation-${index}`}
              placeholder="Recommendation"
              value={book.book_reccomendation}
              onChange={(value) => bookPropertyChange(index, 'book_reccomendation', value)}
            />
          </FieldGroup>
        ))}

        <Flex className="justify-end gap-2">
          <Button variant={Variants.Secondary2} onClick={addBook}>
            Add Another Book
          </Button>
          <Button
            type="submit"
            variant={Variants.Secondary2}
            onClick={async () => {
              //   const newAuthor = await getAuthor(authorId)
              setAuthorId(authorId)
              // setAuthor(newAuthor)
              setShowAuthorForm(true)
            }}
          >
            Submit
          </Button>
        </Flex>
      </form>
    </div>
  )
}
