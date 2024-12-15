'use client'
import { Button } from '@repo/ui/button';
import { AuthorContext, BookProperties } from '../../../context/authorContext'
import { useContext, useState } from 'react';
import { Variants } from '@repo/ui/variant';
import { Sizes } from '@repo/ui/size';
import { deleteAuthor } from '../../../hook/useAuthors';
export type AuthorCardProps = {
  author_id: string
  author_name: string | null
  author_description: string | null
  book_properties: BookProperties[] | null
}

export default function AuthorCard({  author_description, author_name, book_properties, author_id }: AuthorCardProps) {
  const [expansionIndex, setExpansionIndex] = useState<number | null>(null);
const {mutate, setShowAuthorForm, setAuthorId, setAuthor,} = useContext(AuthorContext)
  const toggleDetails = (index: number) => {
    setExpansionIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex justify-between p-2 gap-2 flex-wrap rounded-lg">
      <div className="rounded-lg">
        <ul>
          {book_properties?.map(({ book }, index) => (
            <li key={index}>
              <h2
                className="cursor-pointer text-purple-700 hover:underline"
                onClick={() => toggleDetails(index)}
              >
                {author_name || 'Name of author'}
              </h2>
              {expansionIndex === index && (
                <div className="mt-2 p-2 bg-orange-500 rounded-lg shadow-md hover:scale-110 hover:bg-red-400 bg-gradient-to-r from-yellow-600 to-red-600' grow">
                  <h3 className="font-bold text-purple-700">description: {author_description}</h3>
                  <p>Book {index +1}: {book?.book_name || 'No book available'}</p>
                  <Button size={Sizes.XSMALL}
                    variant={Variants.Secondary}
                    onClick={async () => {await deleteAuthor(author_id)
          mutate()
          alert(`Author${author_name} deleted`)
                    }}
          >
            Delete
                  </Button>

                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
/*
<Button
variant={Variants.Secondary}
size={Sizes.XSMALL}
onClick={async () => {
  const newAuthor = await setAuthor(AuthorType) //setAuthor(author_id)
  setAuthorId(author_id)
  setAuthor(newAuthor)
  setShowAuthorForm(true)
}}
>
Update
</Button>*/
