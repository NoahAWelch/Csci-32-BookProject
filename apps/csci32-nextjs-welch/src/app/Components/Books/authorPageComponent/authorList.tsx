/*import { Flex } from '@repo/ui/flex';
import { Tag } from '@repo/ui/tag';
import { useContext } from 'react';
import { AuthorContext } from '../../../context/authorContext';
import { Variants } from '@repo/ui/variant';

export function AuthorList() {
  const { authors, removeAuthor } = useContext(AuthorContext);

  return (
    <Flex className="gap-4 bg-blue-300 p-4 rounded-lg">
      {authors.map((author, index) => (
        <Tag
          key={index}
          variant={Variants.TertiaryReview}
          onClickX={() => removeAuthor(author)}
        >
          {author}
        </Tag>
      ))}
    </Flex>
  );
}*/
'use client'
import { Flex } from '@repo/ui/flex';
import { Tag } from '@repo/ui/tag';
import { useContext } from 'react';
import { AuthorContext } from '../../../context/authorContext';
import { Variants } from '@repo/ui/variant';

export function AuthorList() {
  const { authors, removeAuthor } = useContext(AuthorContext);

  return (
    <Flex className="gap-4 bg-blue-300 p-4 rounded-lg">
      {authors.map((author) => (
        <Tag
          key={author.author_id}  // Use author_id as the key
          variant={Variants.TertiaryReview}
          onClickX={() => removeAuthor(author.author_id)}  // Pass author_id to removeAuthor
        >
          {author.author_name}
        </Tag>
      ))}
    </Flex>
  );
}
