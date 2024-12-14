'use client'

import AuthorHome from "../Components/Books/authorPageComponent/authorHome"
import { AuthorProvider } from "../context/authorContext"

export default function CreatePublish() {
  return (
    <AuthorProvider>
      <AuthorHome />
    </AuthorProvider>
  )
}
