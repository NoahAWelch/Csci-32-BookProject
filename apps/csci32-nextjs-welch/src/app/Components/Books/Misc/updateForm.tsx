/*import Input from '@repo/ui/input'
import { Flex } from '@repo/ui/flex'
import { Label } from '@repo/ui/label'
import { Field } from '@repo/ui/field'
import { FieldGroup } from '@repo/ui/fieldGroup'
import { useContext, useState } from 'react'
import { Button } from '@repo/ui/button'
import { Variants } from '@repo/ui/variant'
import { Header } from '@repo/ui/header'
import { AuthorContext } from '../../../context/authorContext'
import { CreateAuthorProps, UpdateAuthorProps, createAuthor, updateAuthor } from '../../../hook/useAuthors'

export function UpdateForm() {
  const { setShowAuthorForm, mutate, author, authorId } = useContext(AuthorContext)
  const [authorFormData, setAuthorFormData] = useState(author ||{
    author_name: '',
    author_description: '',
  })
  const [bookProperties, setBookProperties] = useState(
    author?.book_properties ||[
    {
      book:{
      book_name: '',
      book_description: '',
      },
      book_id: '',
        genre: '',
        book_rating: 0,
        book_synopsis: '',
        book_reccomendation: '',
    },
  ])*/

/*
  const bookPropertyChange = (index: number, field: string, value: string | number) => {
  const updatedBooks = bookProperties.map((book, idx) =>
      idx === index ? { ...book, [field]: value } : book
    )
    setBookProperties(updatedBooks)
  }

    const bookChange = (
      index: number, field: string, value: string | number) => {
      const updatedBooks = bookProperties.map((book, idx) =>
        idx === index
          ? { ...book, book: { ...book.book, [field]: value } }
          : book
      );
      setBookProperties(updatedBooks);
    };

  const addBook = () => {
    setBookProperties([
      ...bookProperties,
      {
        book:{
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

  const Submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!authorFormData.author_name || !authorFormData.author_description) {
      return alert('Please fill out all required fields for the author.')
    }

    const formattedBooks = bookProperties.map((book) => ({
      ...book,
      ...book.book,
      book: undefined,
    }));

    const authorData: CreateAuthorProps = {
      ...authorFormData,
      book_properties: formattedBooks
      ,
      book: []
    }
    console.log('Payload to Backend:', authorData)

    await createAuthor(authorData)
    setAuthorFormData({ author_name: '', author_description: '' })
    setBookProperties([{
      book:{
      book_name: '',
      book_description: '',
      },
      genre: '',
      book_rating: 0,
      book_synopsis: '',
      book_reccomendation: '',
    },])
    mutate()
    setShowAuthorForm(false)
    alert(`Your author "${authorFormData.author_name}" has been added successfully!`)
  }

  return (
    <div>
      <Header variant="h3">Create Author</Header>
      <form className="flex flex-col gap-4" onSubmit={Submit}>
        <FieldGroup>
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
        </FieldGroup>

        <p className="text-xl font-bold">Books</p>
        {bookProperties.map((book, index) => (
          <FieldGroup key={index} className="ml-4 bg-gray-200 shadow-md rounded-lg p-4">
            <Flex>
              <Label>Book {index + 1}</Label>
              {bookProperties.length > 1 && (
                <Button
                  variant={Variants.TertiaryReview}
                  onClick={() => removeBook(index)}
                >
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
          <Button type="submit" variant={Variants.Secondary2}>
            Submit
          </Button>
          <Button type="submit" variant={Variants.Secondary2}>
            Update
          </Button>
        </Flex>
      </form>
    </div>
  )
}*/

/*
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    const authorName = data.get('author-name')
    const authorDescription = data.get('author-description')
    const bookProperties = []
    for (const key of data.keys()) {
      if (key.includes('ingredient-name')) {
        const book_properties = data.get(key) as string
        const genre = data.get(key.replace('genre', 'genre')) as string
        const book_name = Number(data.get(key.replace('book-name', 'book-unit')))
        const book_description = Number(data.get(key.replace('book-name', 'book-unit')))
        const book_synopsis = Number(data.get(key.replace('book-name', 'book-unit')))
        const book_reccomendation = Number(data.get(key.replace('book-name', 'book-unit')))
        const book_id= Number(data.get(key.replace('book-name', 'book-unit')))
        const book_rating = Number(data.get(key.replace('book-name', 'book-unit')))
        if (!book_properties || !genre || !book_name || !book_description || !book_rating || !book_reccomendation || !book_synopsis || !book_id) {
          continue
        }
        book_properties.push({
          book_id: author?.book_properties.find(
            (book) => book.book.book_name === book_properties,
          )?.book.book_id,
          book_properties,
          genre,
          book_name,
          book_rating,
          book_reccomendation,
          book_synopsis,
          book_description,
        })
      }
    }

    if (typeof authorName !== 'string' || typeof authorDescription !== 'string') {
      return alert('Please fill out all fields!')
    }
    if (bookProperties.length === 0) {
      return alert('Please add at least one ingredient!')
    }

    const authorData: CreateAuthorProps = {
      author_name: authorName,
      author_description: authorDescription,
      book_properties,
    }
    if (authorId) {
      await updateAuthor({ author_id: authorId, params: authorData })
      alert(`Your author ${authorName} has been updated!`)
    } else {
      await createAuthor(authorData)
      alert(`Your author ${authorName} has been created!`)
    }
    await createAuthor(authorData)
    setAuthorFormData({ author_name: '', author_description: '' })
    mutate()
    setShowAuthorForm(false)
    alert(`Your author ${authorName} has been added`)
  }

  return (
    <div>
      <Header variant="h2">Create authors</Header>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <FieldGroup>
          <Field>
            <Label htmlFor="author-name">author name</Label>
            <Input
              name="author-name"
              id="author-name"
              placeholder="Enter a author name"
              value={authorFormData.author_name}
              onChange={(newName) => {
                setAuthorFormData({ ...authorFormData, author_name: newName })
              }}
            />
          </Field>
          <Field>
            <Label htmlFor="author-description">author description</Label>
            <Input
              name="author-description"
              id="author-description"
              placeholder="Enter a author description"
              value={authorFormData.author_description}
              onChange={(newDescription) => {
                setAuthorFormData({ ...authorFormData, author_description: newDescription })
              }}
            />
          </Field>
        </FieldGroup>
        {bookProperties.map(({ book, book_rating, book_synopsis, book_reccomendation, genre, book_id }, index) => {
          return (
            <FieldGroup key={index} className="ml-4 bg-gray-200 shadow-md rounded-lg p-4">
              <Flex>
                <Label> ingredient {index + 1}</Label>
                {bookProperties.length > 1 && (
                  <Button
                    variant={Variants.TertiaryReview}
                    onClick={() => {
                      const newBookProperties = bookProperties.filter((item, idx) => index !== idx)
                      setBookProperties(newBookProperties)
                    }}
                  >
                    Remove{' '}
                  </Button>
                )}
              </Flex>

              <Input
                name={`ingredient-name-${index}`}
                value={book.book_name}
                id={`book-name-${index}`}
                onChange={(newbookName) => {
                  const newbookProperties = [
                    ...bookProperties.slice(0, index),
                    {
                      ...bookProperties[index],
                      book: {
                        ...bookProperties[index]?.book,
                        name: newbookName,
                        description: bookProperties[index]?.book?.book_description ?? '',
                      },
                      genre: bookProperties[index]?.genre ?? '',
                      book_rating: bookProperties[index]?.book_rating ?? '',
                      book_reccomendation: bookProperties[index]?.book_reccomendation ?? '',
                      book_synopsis: bookProperties[index]?.book_rating ?? '',
                    },
                    ...bookProperties.slice(index + 1),
                  ]
                  setbookProperties(newbookProperties)
                }}
                placeholder="Enter an book name"
              />

              <Input
                name={`book-quantity-${index}`}
                value={book.book_description}
                variant={Variants.Secondary}
                id={`book-quantity-${index}`}
                onChange={(newBookDescription) => {
                  const newbookProperties = [
                    ...bookProperties.slice(0, index),
                    {
                      ...bookProperties[index],
                      book: {
                        ...bookProperties[index]?.book,
                        book_name: bookProperties[index]?.book?.book_name ?? '',
                        book_description: newBookDescription,
                      },
                      genre: bookProperties[index]?.genre ?? '',
                      book_rating: bookProperties[index]?.book_rating ?? '',
                      book_reccomendation: bookProperties[index]?.book_reccomendation ?? '',
                      book_synopsis: bookProperties[index]?.book_rating ?? '',
                    },
                    ...bookProperties.slice(index + 1),
                  ]
                  setBookProperties(newbookProperties)
                }}
                placeholder="Enter an book quantity"
              />

              <Input
                name={`book-unit-${index}`}
                value={genre}
                variant={Variants.Secondary}
                id={`book-unit-${index}`}
                onChange={(newGenre) => {
                  const newbookProperties = [
                    ...bookProperties.slice(0, index),
                    {
                      ...bookProperties[index],
                      book: {
                        ...bookProperties[index]?.book,
                        book_name: bookProperties[index]?.book?.book_name ?? '',
                        book_description: bookProperties[index]?.book?.book_description ?? ''
                      },
                      genre: newGenre,
                      book_rating: bookProperties[index]?.book_rating ?? '',
                      book_reccomendation: bookProperties[index]?.book_reccomendation ?? '',
                      book_synopsis: bookProperties[index]?.book_rating ?? '',
                    },
                    ...bookProperties.slice(index + 1),
                  ]
                  setBookProperties(newbookProperties)
                }}
                placeholder="Enter an book unit"
              />

              <Input
                name={`book-unit-${index}`}
                value={book_rating}
                variant={Variants.Secondary}
                id={`book-unit-${index}`}
                onChange={(newRating) => {
                  const newbookProperties = [
                    ...bookProperties.slice(0, index),
                    {
                      ...bookProperties[index],
                      book: {
                        ...bookProperties[index]?.book,
                        book_name: bookProperties[index]?.book?.book_name ?? '',
                        book_description: bookProperties[index]?.book?.book_description ?? ''
                      },
                      genre: bookProperties[index]?.genre?? '',
                      book_rating: newRating,
                      book_reccomendation: bookProperties[index]?.book_reccomendation ?? '',
                      book_synopsis: bookProperties[index]?.book_rating ?? '',
                    },
                    ...bookProperties.slice(index + 1),
                  ]
                  setBookProperties(newbookProperties)
                }}
                placeholder="Enter an book unit"
              />
                <Input
                name={`book-unit-${index}`}
                value={book_reccomendation}
                variant={Variants.Secondary}
                id={`book-unit-${index}`}
                onChange={(newBookReccomendation) => {
                  const newbookProperties = [
                    ...bookProperties.slice(0, index),
                    {
                      ...bookProperties[index],
                      book: {
                        ...bookProperties[index]?.book,
                        book_name: bookProperties[index]?.book?.book_name ?? '',
                        book_description: bookProperties[index]?.book?.book_description ?? ''
                      },
                      genre: bookProperties[index]?.genre?? '',
                      book_rating: bookProperties[index]?.book_rating ?? '',
                      book_reccomendation: newBookReccomendation,
                      book_synopsis: bookProperties[index]?.book_rating ?? '',
                    },
                    ...bookProperties.slice(index + 1),
                  ]
                  setBookProperties(newbookProperties)
                }}
                placeholder="Enter an book unit"
              />
                <Input
                name={`book-unit-${index}`}
                value={book_synopsis}
                variant={Variants.Secondary}
                id={`book-unit-${index}`}
                onChange={(newSynopsis) => {
                  const newbookProperties = [
                    ...bookProperties.slice(0, index),
                    {
                      ...bookProperties[index],
                      book: {
                        ...bookProperties[index]?.book,
                        book_name: bookProperties[index]?.book?.book_name ?? '',
                        book_description: bookProperties[index]?.book?.book_description ?? ''
                      },
                      genre: bookProperties[index]?.genre?? '',
                      book_rating: bookProperties[index]?.book_rating ?? '',
                      book_reccomendation: bookProperties[index]?.book_reccomendation ?? '',
                      book_synopsis: newSynopsis,
                    },
                    ...bookProperties.slice(index + 1),
                  ]
                  setBookProperties(newbookProperties)
                }}
                placeholder="Enter an book unit"
              />
            </FieldGroup>
          )
        })}

        <Flex className="justify-end gap-2">
          <Button
            variant={Variants.Secondary2}
            onClick={() => {
              setBookProperties([
                ...bookProperties,
                {
                  book: {
                    book_name: '',
                    book_description: '',
                  },
                 book_id: '',
                 book_rating: 0,
                 book_reccomendation: '',
book_synopsis: '',
genre: '',
                },
              ])
            }}
          >
            Add an book
          </Button>

          <Button type="submit" variant={Variants.Secondary2}>
            Enter
          </Button>
        </Flex>
      </form>
    </div>
  )
}*/
import Input from '@repo/ui/input'
import { Flex } from '@repo/ui/flex'
import { Label } from '@repo/ui/label'
import { Field } from '@repo/ui/field'
import { FieldGroup } from '@repo/ui/fieldGroup'
import { useContext, useState } from 'react'
import { Button } from '@repo/ui/button'
import { Variants } from '@repo/ui/variant'
import { Header } from '@repo/ui/header'
import { AuthorContext, BookProperties } from '../../../context/authorContext'
import { CreateAuthorProps, UpdateAuthorProps, createAuthor, updateAuthor } from '../../../hook/useAuthors'

export function UpdateForm() {
  const { setShowAuthorForm, mutate, author, authorId } = useContext(AuthorContext)

  const [authorFormData, setAuthorFormData] = useState(
    author || {
      author_name: '',
      author_description: '',
    },
  )

  const [bookProperties, setBookProperties] = useState<BookProperties[]>(
    author?.book_properties || [
      {
        book: {
          book_name: '',
          book_description: '',
        },
        book_id: '',
        genre: '',
        book_rating: 0,
        book_synopsis: '',
        book_reccomendation: '',
      },
    ],
  )

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    const authorName = data.get('author-name') as string
    const authorDescription = data.get('author-description') as string
    const newBookProperties = bookProperties.map((_, index) => ({
      book_id: data.get(`book-id-${index}`) as string,
      genre: data.get(`book-unit-${index}`) as string,
      book_rating: Number(data.get(`book-rating-${index}`)),
      book_reccomendation: data.get(`book-reccomendation-${index}`) as string,
      book_synopsis: data.get(`book-synopsis-${index}`) as string,
      book: {
        book_name: data.get(`book-name-${index}`) as string,
        book_description: data.get(`book-description-${index}`) as string,
      },
    }))

    if (!authorName || !authorDescription || newBookProperties.length === 0) {
      return alert('Please fill out all fields and add at least one book!')
    }

    const authorData: CreateAuthorProps = {
      author_name: authorName,
      author_description: authorDescription,
      book_properties: newBookProperties,
      book: [],
      flag: false,
    }

    try {
      if (authorId) {
        await updateAuthor({ author_id: authorId, params: authorData })
        alert(`Your author "${authorName}" has been updated!`)
      } else {
        await createAuthor(authorData)
        alert(`Your author "${authorName}" has been created!`)
      }

      setAuthorFormData({ author_name: '', author_description: '' })
      mutate()
      setShowAuthorForm(false)
    } catch (error) {
      console.error('Error updating author:', error)
      alert('An error occurred while saving the author.')
    }
  }

  return (
    <div>
      <Header variant="h2">Create authors</Header>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <FieldGroup>
          <Field>
            <Label htmlFor="author-name">Author Name</Label>
            <Input
              name="author-name"
              id="author-name"
              placeholder="Enter an author name"
              value={authorFormData.author_name}
              onChange={(newName) => setAuthorFormData({ ...authorFormData, author_name: newName })}
            />
          </Field>
          <Field>
            <Label htmlFor="author-description">Author Description</Label>
            <Input
              name="author-description"
              id="author-description"
              placeholder="Enter an author description"
              value={authorFormData.author_description}
              onChange={(newDescription) =>
                setAuthorFormData({
                  ...authorFormData,
                  author_description: newDescription,
                })
              }
            />
          </Field>
        </FieldGroup>
        {bookProperties.map((bookProperty, index) => (
          <FieldGroup key={index} className="ml-4 bg-gray-200 shadow-md rounded-lg p-4">
            <Flex>
              <Label>Book {index + 1}</Label>
              {bookProperties.length > 1 && (
                <Button
                  variant={Variants.TertiaryReview}
                  onClick={() => {
                    const updatedBookProperties = bookProperties.filter((_, idx) => idx !== index)
                    setBookProperties(updatedBookProperties)
                  }}
                >
                  Remove
                </Button>
              )}
            </Flex>

            <Input
              name={`book-name-${index}`}
              id="author-description"
              value={bookProperty.book?.book_name}
              placeholder="Enter a book name"
              onChange={(newBookName) => {
                //const updatedBooks = [...(bookProperties || null || [])]

                //updatedBooks[index].book.book_name = newBookName
                // setBookProperties(updatedBooks)
                const updatedBooks = [...(bookProperties || [])]

                if (updatedBooks[index]?.book) {
                  updatedBooks[index].book.book_name = newBookName
                  setBookProperties(updatedBooks)
                }
              }}
            />

            <Input
              name={`book-description-${index}`}
              id="author-description"
              value={bookProperty.book.book_description}
              placeholder="Enter a book description"
              onChange={(newBookDescription) => {
                //  const updatedBooks = [...bookProperties ]
                //   updatedBooks[index].book.book_description = newBookDescription
                //  setBookProperties(updatedBooks)
                const updatedBooks = [...(bookProperties || [])]

                if (updatedBooks[index]?.book) {
                  updatedBooks[index].book.book_description = newBookDescription
                  setBookProperties(updatedBooks)
                }
              }}
            />

            <Input
              name={`book-unit-${index}`}
              id="author-description"
              value={bookProperty.genre}
              placeholder="Enter a book genre"
              onChange={(newGenre) => {
                //   const updatedBooks = [...bookProperties]
                //   updatedBooks[index].genre = newGenre
                //  setBookProperties(updatedBooks)
                const updatedBooks = [...(bookProperties || [])]

                if (updatedBooks[index]?.book) {
                  updatedBooks[index].book.book_description = newGenre
                  setBookProperties(updatedBooks)
                }
              }}
            />

            <Input
              name={`book-rating-${index}`}
              id="author-description"
              value={bookProperty.book_rating}
              placeholder="Enter a book rating"
              type="number"
              onChange={(newRating) => {
                // const updatedBooks = [...bookProperties]
                // updatedBooks[index].book_rating = Number(newRating)
                // setBookProperties(updatedBooks)
                const updatedBooks = [...(bookProperties || [])]

                if (updatedBooks[index]?.book) {
                  updatedBooks[index].book.book_description = newRating
                  setBookProperties(updatedBooks)
                }
              }}
            />

            <Input
              name={`book-reccomendation-${index}`}
              id="author-description"
              value={bookProperty.book_reccomendation}
              placeholder="Enter a book recommendation"
              onChange={(newRec) => {
                //const updatedBooks = [...bookProperties]
                // updatedBooks[index].book_reccomendation = newRec
                //setBookProperties(updatedBooks)
                const updatedBooks = [...(bookProperties || [])]

                if (updatedBooks[index]?.book) {
                  updatedBooks[index].book.book_description = newRec
                  setBookProperties(updatedBooks)
                }
              }}
            />

            <Input
              name={`book-synopsis-${index}`}
              id="author-description"
              value={bookProperty.book_synopsis}
              placeholder="Enter a book synopsis"
              onChange={(newSynopsis) => {
                //   const updatedBooks = [...bookProperties]
                //  updatedBooks[index].book_synopsis = newSynopsis
                //  setBookProperties(updatedBooks)
                const updatedBooks = [...(bookProperties || [])]

                if (updatedBooks[index]?.book) {
                  updatedBooks[index].book.book_description = newSynopsis
                  setBookProperties(updatedBooks)
                }
              }}
            />
          </FieldGroup>
        ))}

        <Flex className="justify-end gap-2">
          <Button
            variant={Variants.Secondary2}
            onClick={() => {
              setBookProperties([
                ...bookProperties,
                {
                  book: {
                    book_name: '',
                    book_description: '',
                  },
                  book_id: '',
                  genre: '',
                  book_rating: 0,
                  book_reccomendation: '',
                  book_synopsis: '',
                },
              ])
            }}
          >
            Add a Book
          </Button>
          <Button type="submit" variant={Variants.Secondary2}>
            Submit
          </Button>
        </Flex>
      </form>
    </div>
  )
}
