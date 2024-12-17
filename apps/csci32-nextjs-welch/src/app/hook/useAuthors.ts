import useSWR from 'swr'

export type CreateCommentProps = {
  // book: {
  // book_name?: string
  //  book_description?: string
  book_id: string | null
  comments: string
  //}
}

export type CreateUserProps = {
  email: string
  user_name: string
  password: string
}

export type CreateAuthorProps = {
  author_name: string
  author_id?: string
  //delete: boolean
  book: {
    book_name: string
    book_description: string
  }[]
  book_properties: {
    genre: string
    book_reccomendation: string
    book_rating: number
    book_synopsis: string
  }[]

  flag: boolean
  author_description: string
}

export type UpdateAuthorProps = {
  author_id?: string | null
  author_name: string
  book: {
    book_name: string
    book_description: string
    //comment?: string
  }[]
  book_properties: {
    genre: string
    book_reccomendation: string
    book_rating: number
    book_synopsis: string
  }[]
  //delete?: boolean
  flag: boolean
  author_description: string
}

async function postHelper({ path, body }: { path: string; body: string }) {
  console.log('API URL:', process.env.NEXT_PUBLIC_BOOK_API_URL)
  return fetch(`${process.env.NEXT_PUBLIC_BOOK_API_URL}${path}`, {
    method: 'POST',
    body,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  })
}

export function createUser(params: CreateUserProps) {
  return postHelper({ path: '/users', body: JSON.stringify(params) })
}

export function createAuthor(params: CreateAuthorProps) {
  return postHelper({ path: '/authors', body: JSON.stringify(params) })
}

export function createComment(params: CreateCommentProps) {
  return postHelper({ path: '/books', body: JSON.stringify(params) })
}

export function updateAuthor({ author_id, params }: { author_id: string; params: UpdateAuthorProps }) {
  return postHelper({ path: `/authors/:id${author_id}`, body: JSON.stringify(params) })
}
/*
export function updateAuthor(params: UpdateAuthorProps) {
  return postHelper({ path: `/authors`, body: JSON.stringify(params) })
}*/

async function putHelper({ path, params }: { path: string; params: UpdateAuthorProps }) {
  return fetch(`${process.env.NEXT_PUBLIC_RECIPESTACKER_API_URL}${path}`, {
    method: 'PUT',
    body: JSON.stringify(params),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  })
}

export function getAuthor(author_id: string) {
  return fetcher({ path: `/authors/${author_id}` })
}
/*
export function deleteAuthor(author_id: string) {
  return putHelper({ path: `/authors/${author_id}`, params: {delete: false })
}*/

async function fetcher({ path, urlParams }: { path: string; urlParams?: string }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BOOK_API_URL}${path}${urlParams ? `?${urlParams}` : ''}`, {
    headers: { 'Access-Control-Allow-Origin': '*' },
  })
  return res.json()
}

type SearchProps = {
  books?: string
  author_name?: string
}

export function useAuthors(params?: SearchProps) {
  const urlParams = new URLSearchParams(params).toString()
  return useSWR(['/authors', urlParams], ([path, urlParams]) => fetcher({ path, urlParams }))
}
