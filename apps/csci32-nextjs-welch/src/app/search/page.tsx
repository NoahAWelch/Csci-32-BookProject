import { Flex } from '@repo/ui/flex'
import { Wrapper } from '@repo/ui/wrapper'
import AuthorSearch from '../Components/Books/authorPageComponent/authorSearch'
import AuthorResults from '../Components/Books/authorPageComponent/authorResults'
import { Header } from '@repo/ui/header'
import { AuthorProvider } from '../context/authorContext'
import BookResults from '../Components/Books/BookPageComponent/bookResults'
import Navbar from '../Components/Navbar'

export default function SearchHome() {
  return (
    <div
      className="text-black text-center min-w-screen min-h-screen p-8 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      style={{ backgroundImage: `url('/240_F_791820291_tB5m1LGSA7TN9X0cYVoLpYX02Qei6fzJ.jpg')` }}
    >
      <Navbar />
      <Wrapper>
        <Flex className=" items-center w-full justify-between">
          <Header variant="h1">Welcome to Search</Header>
        </Flex>
        <Flex className="flex-col gap-y-8 mt-8">
          <AuthorProvider>
            <>
              <AuthorSearch />
              <div className="flex flex-col p-12 m-40 transition-all bg-gray-300 shadow-lg border border-gray-300 rounded-lg hover:scale-110 hover:bg-red-400 bg-gradient-to-r from-blue-300 to-red-600 grow">
                <AuthorResults />
                <BookResults />
              </div>
            </>
          </AuthorProvider>
        </Flex>
      </Wrapper>
    </div>
  )
}
