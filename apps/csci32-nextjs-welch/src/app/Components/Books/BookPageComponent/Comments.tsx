/*import { useContext, useState } from 'react'
import { AuthorContext, Book } from '../../../context/authorContext'

export default function CommentCard() {
   const [commentsIndex, setCommentsIndex] = useState<boolean>(false)
  const { book } = useContext(AuthorContext)

  const toggleCommentsVisibility = () => {
    setCommentsIndex(!commentsIndex)
  }

  return (
    <div className="justify-between p-2 gap-2 flex-wrap rounded-lg">
      <div className="rounded-lg">
        <ul>
          <li>
            <div
              className="mt-2 p-2 bg-orange-500 rounded-lg shadow-md hover:scale-110 hover:bg-red-400 bg-gradient-to-r from-yellow-600 to-red-600 grow"
              onClick={toggleCommentsVisibility}
            >
              {commentsIndex && book.comment && <h3 className="font-bold text-purple-700">Comments: {book.comment}</h3>}
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}*/
