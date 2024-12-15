/*import React, { createContext, ReactNode, useState } from 'react'
import { useAuthors } from '../hook/useAuthors'

export type Book = {
  book_id?: string
  book_name: string
  book_description: string
  comment?: string
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
  book_properties: BookProperties[]
}

export type AuthorContextType = {
  authors: AuthorType[]
  mutate: () => void
  authorNameQuery: string
  setAuthorNameQuery: (query: string) => void
  books: string[]
  removeBook: (index : string) => void
  setBooks: (books: string[]) => void
  showAuthorForm: boolean
  setShowAuthorForm: (showAuthorForm: boolean) => void
  removeAuthor: (author_id: string) => void;
}

const AuthorContext = createContext<AuthorContextType>({
  authors: [],
  mutate: () => {},
  authorNameQuery: '',
  setAuthorNameQuery: () => {},
  books: [],
  removeBook: () => {},
  setBooks: () => {},
  showAuthorForm: false,
  setShowAuthorForm: () => {},
  removeAuthor: () => {},
})



    const AuthorProvider = ({ children }: { children: ReactNode }) => {
      function removeBook(book_name: string) {
        const newBooks = books.filter((book) => book !== book_name);
        console.log('books', newBooks);
        setBooks(newBooks);
      }
      const [authores, setAuthors] = useState<AuthorType[]>([]);
      const [showAuthorForm, setShowAuthorForm] = useState(false);
      const [authorNameQuery, setAuthorNameQuery] = useState('');
      const [books, setBooks] = useState<string[]>([]);
const { data: authors, mutate } = useAuthors({ author_name: authorNameQuery, books: books.join(',') });

const removeAuthor = (author_id: string) => {
  const updatedAuthors = authors.filter((author: { author_id: string }) => author.author_id !== author_id);
  // Assuming mutate is used to refetch or update the authors list from a server or database
  mutate();
  setAuthors(updatedAuthors); // Update the state with filtered authors
};



      // Sort the authors' book_properties by book_rating in descending order
      const sortedAuthors  = Array.isArray(authors)
      ? authors.map((author) => ({
        ...author,
        book_properties: author.book_properties
          ?.sort((a, b) => (b.book_rating || 0) - (a.book_rating || 0)) // Descending order by book_rating
          .slice(0, 10), // Take the top 10 books if needed
      }))
      : [];


      return (
        <AuthorContext.Provider
          value={{
            authors: sortedAuthors,
            mutate,
            authorNameQuery,
            setAuthorNameQuery,
            books,
            removeBook,
            setBooks,
            showAuthorForm,
            setShowAuthorForm,
            removeAuthor,
          }}
        >
          {children}
        </AuthorContext.Provider>
      );
}
export { AuthorContext, AuthorProvider }*/

/*
export type authorContextType = {
  authors: authorType[]
  mutate: () => void
  authorNameQuery: string
  setAuthorNameQuery: (query: string) => void
  books: string[]
  removeBook: (index: string) => void
  setBooks: (books: string[]) => void
  authorId: string | null
  setAuthorId: (id: string | null) => void
  author: authorType | null
  setAuthor: (author: authorType | null) => void
  showAuthorForm: boolean
  setShowAuthorForm: (showAuthorForm: boolean) => void
}
const authorContext = createContext<authorContextType>({
  authors: [],
  mutate: () => {},
  authorNameQuery: '',
  setAuthorNameQuery: () => {},
  books: [],
  removeBook: () => {},
  setBooks: () => {},
  showAuthorForm: false,
  setShowAuthorForm: () => {},
  author: null,
  setAuthor: () => {},
  authorId: null,
  setAuthorId: () => {},
})
const authorProvider = ({ children }: { children: ReactNode }) => {
  function removeBook(name: string) {
    const newBooks = books.filter((book) => book !== name)
    console.log('books', newBooks)
    setBooks(newBooks)
  }

  const [authorId, setAuthorId] = useState<string | null>(null)
  const [author, setAuthor] = useState<authorType | null>(null)
  const [showAuthorForm, setShowAuthorForm] = useState(false)
  const [authorNameQuery, setAuthorNameQuery] = useState('')
  const [books, setBooks] = useState<string[]>([])
  const { data: authors, mutate } = useAuthors({ name: authorNameQuery, books: books.join(',') })
  return (
    <authorContext.Provider
      value={{
        author,
        setAuthor,
        authorId,
        setAuthorId,
        authors,
        mutate,
        authorNameQuery,
        setauthorNameQuery,
        books,
        removeBook,
        setBooks,
        showAuthorForm,
        setShowAuthorForm,
      }}
    >
      {children}
    </authorContext.Provider>
  )
}
export { authorContext, authorProvider } */

'use client'
import React, { createContext, ReactNode, useState } from 'react'
import { useAuthors } from '../hook/useAuthors'

export type Book = {
  book_id?: string
  book_name: string
  book_description: string
  //comment?: string;
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
  // comments?: Comment[];
  book_properties: BookProperties[]
}

export type AuthorContextType = {
  authors: AuthorType[]
  mutate: () => void
  authorNameQuery: string
  setAuthorNameQuery: (query: string) => void
  books: string[]
  removeBook: (book_name: string) => void
  setBooks: (books: string[]) => void
  showAuthorForm: boolean
  setShowAuthorForm: (show: boolean) => void
  authorId: string | null
  setAuthorId: (id: string | null) => void
  author: AuthorType | null
  setAuthor: (author: AuthorType | null) => void
  removeAuthor: (author_id: string) => void // Ensure removeAuthor expects a string
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
  books: [],
  removeBook: () => {},
  setBooks: () => {},
  showAuthorForm: false,
  setShowAuthorForm: () => {},
  removeAuthor: () => {}, // Default for removeAuthor
  author: null,
  setAuthor: () => {},
  authorId: null,
  setAuthorId: () => {},
  user: null,
  setUser: () => {},
  userId: null,
  setUserId: () => {},
})

export const AuthorProvider = ({ children }: { children: ReactNode }) => {
  const [authors, setAuthors] = useState<AuthorType[]>([]) // Add state for authors
  const [showAuthorForm, setShowAuthorForm] = useState(false)
  const [authorNameQuery, setAuthorNameQuery] = useState('')
  const [books, setBooks] = useState<string[]>([])
  const [authorId, setAuthorId] = useState<string | null>(null)
  const [author, setAuthor] = useState<AuthorType | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const [user, setUser] = useState<User | null>(null)

  const { data: authorsFromApi, mutate } = useAuthors({
    author_name: authorNameQuery,
    books: books.join(','),
  })

  const removeBook = (book_name: string) => {
    const updatedBooks = books.filter((book) => book !== book_name)
    setBooks(updatedBooks)
  }

  const removeAuthor = (author_id: string) => {
    const updatedAuthors = authors.filter((author) => author.author_id !== author_id)
    setAuthors(updatedAuthors) // Update the authors state with the filtered authors
    mutate() // Call mutate to re-fetch data if necessary
  }

  // Sort authors by book_rating (descending) and limit to top 10 books
  const sortedAuthors = Array.isArray(authorsFromApi)
    ? authorsFromApi.map((author) => ({
        ...author,
        book_properties: author.book_properties
          ?.sort((a: BookProperties, b: BookProperties) => (b.book_rating || 0) - (a.book_rating || 0)) // Sort by book_rating (descending)
          .slice(0, 10), // Take top 10 books (optional)
      }))
    : []

  return (
    <AuthorContext.Provider
      value={{
        authors: sortedAuthors,
        mutate,
        authorNameQuery,
        setAuthorNameQuery,
        books,
        removeBook,
        setBooks,
        showAuthorForm,
        setShowAuthorForm,
        removeAuthor, // Pass the removeAuthor function
        author,
        setAuthor,
        authorId,
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
