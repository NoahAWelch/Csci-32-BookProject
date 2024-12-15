/*import { Field } from '@repo/ui/field'
import { Flex } from '@repo/ui/flex'
import { Header } from '@repo/ui/header'
import { Label } from '@repo/ui/label'
import Input from '@repo/ui/input'
import { AuthorList } from '../authorPageComponent/authorList'
import { AuthorContext } from '../../../context/authorContext'
import { useContext, useState } from 'react'

export default function AuthorSearch() {
  const { setBooks, authorNameQuery, setAuthorNameQuery, books } = useContext(AuthorContext || "")

  const [bookQuery, setBookQuery] = useState(""); // Local state for book search
  const [authorName, setAuthorName] = useState("");

  return (
    <>
      <Header className="justify-between">Search Authors</Header>
      <Flex className="flex-col gap-y-2 text-black">
      <Field>
          <Label >Books</Label>
          <Input
            name="book-search-query"
            id="book-query"
            value={bookQuery}
            onEnter={(newBook) => {
              setBooks([...books, newBook])
            }}
          />
        </Field>



        <Field>
          <Label>Author name</Label>
          <Input
            name="author-name-query"
            id="author-search"
            // setValue
            onEnter={(authorNameQuery) => setAuthorNameQuery(authorNameQuery || "")}
          />
        </Field>
        <AuthorList />
      </Flex>
    </>
  )
}*/
'use client'
import React, { useContext, useState } from "react";
import { AuthorContext } from "../../../context/authorContext";
import { Field } from "@repo/ui/field";
import { Flex } from "@repo/ui/flex";
import { Header } from "@repo/ui/header";
import { Label } from "@repo/ui/label";

import { BookList } from "../Misc/bookList";
import Input from "@repo/ui/input";
import { AuthorList } from "./authorList";

export default function AuthorSearch() {
  const { setBooks, setAuthorNameQuery, books } = useContext(AuthorContext);

  const [bookQuery, setBookQuery] = useState(""); // Local state for book search
  const [authorName, setAuthorName] = useState(""); // Local state for author search

  return (
    <>
      <Header className="justify-between">Search Authors</Header>
      <Flex className="flex-col gap-y-2">
        <Field>
          <Label>Books</Label>
          <Input
            name="book-search-query"
            id="book-query"
            value={bookQuery} // Controlled value
            onChange={(newBook) => setBookQuery(newBook)} // Update local state
            onEnter={() => {
              setBooks([...books, bookQuery]); // Update context
              setBookQuery(""); // Clear the input
            }}
          />
        </Field>

        <BookList />

        <Field>
          <Label>Author Name</Label>
          <Input
            name="author-name-query"
            id="author-search"
            value={authorName} // Controlled value
            onChange={(newValue) => setAuthorName(newValue)} // Update local state
            onEnter={() => {
              setAuthorNameQuery(authorName); // Update context
              setAuthorName(""); // Clear the input
            }}
          />
        </Field>
      </Flex>

    </>
  );
}
