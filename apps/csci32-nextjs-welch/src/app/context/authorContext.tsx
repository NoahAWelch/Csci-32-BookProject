'use client'
import React, { createContext, ReactNode, useState } from 'react'
import { useAuthors } from '../hook/useAuthors'

export type Book = {
  book_id?: string
  book_name: string
  book_description: string
  comment: string
}

export type User = {
  user_id: string
  user_name: string
  email?: string
  password: string
}

export type BookProperties = {
  book: Book
  book_id: string
  genre: string
  book_reccomendation: string | null
  book_rating: number | null
  book_synopsis: string
}

export type AuthorType = {
  author_id: string
  author_name: string
  author_description: string
  flag: boolean
  book_properties: BookProperties[]
}

export type AuthorContextType = {
  authors: AuthorType[]
  mutate: () => void
  authorNameQuery: string
  setAuthorNameQuery: (query: string) => void
  book: Book[]
  books: string[]
  removeBook: (book_name: string) => void
  setBooks: (books: string[]) => void
  showAuthorForm: boolean
  setShowAuthorForm: (show: boolean) => void
  authorId: string | null
  bookId: string | null
  setBookId: (id: string | null) => void
  setAuthorId: (id: string | null) => void
  author: AuthorType | null
  setAuthor: (author: AuthorType | null) => void
  removeAuthor: (author_id: string) => void
  userId: string | null
  setUserId: (id: string | null) => void
  user: User | null
  setUser: (user: User | null) => void
}

const AuthorContext = createContext<AuthorContextType>({
  authors: [],
  mutate: () => {},
  authorNameQuery: '',
  setAuthorNameQuery: () => {},
  book: [],
  books: [],
  removeBook: () => {},
  setBooks: () => {},
  showAuthorForm: false,
  setShowAuthorForm: () => {},
  removeAuthor: () => {},
  author: null,
  setAuthor: () => {},
  authorId: null,
  bookId: null,
  setBookId: () => {},
  setAuthorId: () => {},
  user: null,
  setUser: () => {},
  userId: null,
  setUserId: () => {},
})

export const AuthorProvider = ({ children }: { children: ReactNode }) => {
  const [authors, setAuthors] = useState<AuthorType[]>([])
  const [book] = useState<Book[]>([])
  const [showAuthorForm, setShowAuthorForm] = useState(false)
  const [authorNameQuery, setAuthorNameQuery] = useState('')
  const [books, setBooks] = useState<string[]>([])
  const [authorId, setAuthorId] = useState<string | null>(null)
  const [bookId, setBookId] = useState<string | null>(null)
  const [author, setAuthor] = useState<AuthorType | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const [user, setUser] = useState<User | null>(null)

  const { data: authorsForSorting, mutate } = useAuthors({
    author_name: authorNameQuery,
    books: books.join(','),
  })

  const removeBook = (book_name: string) => {
    const updatedBooks = books.filter((book) => book !== book_name)
    setBooks(updatedBooks)
  }

  const removeAuthor = (author_id: string) => {
    const updatedAuthors = authors.filter((author) => author.author_id !== author_id)
    setAuthors(updatedAuthors)
    mutate()
  }

  const sortedAuthors = Array.isArray(authorsForSorting)
    ? authorsForSorting.map((author) => ({
        ...author,
        book_properties: author.book_properties
          ?.sort((a: BookProperties, b: BookProperties) => (b.book_rating || 0) - (a.book_rating || 0))
          .slice(0, 10),
      }))
    : []

  return (
    <AuthorContext.Provider
      value={{
        authors: sortedAuthors,
        mutate,
        authorNameQuery,
        setAuthorNameQuery,
        book,
        books,
        removeBook,
        setBooks,
        showAuthorForm,
        setShowAuthorForm,
        removeAuthor,
        author,
        setAuthor,
        authorId,
        bookId,
        setBookId,
        setAuthorId,
        user,
        setUser,
        userId,
        setUserId,
      }}
    >
      {children}
    </AuthorContext.Provider>
  )
}

export { AuthorContext }
