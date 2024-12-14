
  import { Flex } from '@repo/ui/flex'
import { Wrapper } from '@repo/ui/wrapper'
import AuthorSearch from '../Components/Books/authorPageComponent/authorSearch'
import AuthorResults from '../Components/Books/authorPageComponent/authorResults'
import { Header } from '@repo/ui/header'
import { AuthorProvider } from '../context/authorContext'
import BookResults from '../Components/Books/BookPageComponent/bookResults'


export default function SearchHome() {

    return (
      <Wrapper>
        <Flex className=" items-center w-full justify-between">
          <Header variant="h1">Welcome to Search</Header>
        </Flex>

        <Flex className="flex-col gap-y-8 mt-8">
<AuthorProvider>
            <>
              <AuthorSearch />
              <AuthorResults />
              <BookResults/>
            </>
            </AuthorProvider>
        </Flex>
      </Wrapper>
    )
  }


