/*import React from 'react'
import { Button } from '@repo/ui/button'
import SignUp from './Books/Misc/signUp'
import SignInForm from './Books/Misc/signInForm'

export default function HideSection({ hideVisibility, isVisible }: { hideVisibility: () => void; isVisible: boolean }) {
  return (
    <div>
      <div>
        <Button onClick={hideVisibility}>{isVisible ? 'Hide Section' : 'Show Section'}</Button>
        {isVisible && (
          <div>
            <SignUp
              onUserCreated={function (userId: string): void {
                throw new Error('Function not implemented.')
              }}
            />
          </div>
        )}
      </div>
      <div>
        <Button onClick={hideLogin}>{isVisible ? 'Hide Section' : 'Show Section'}</Button>
        {isVisible && (
          <div>
            <SignInForm />
          </div>
        )}
      </div>
    </div>
  )
}
*/
import React from 'react'
import { Button } from '@repo/ui/button'
import CreateUserForm from './Books/Misc/signUp'
import SignInForm from './Books/Misc/signInForm'

export default function HideSection({
  hideVisibility,
  isVisible,
  hideLogin,
  isLoginVisible,
}: {
  hideVisibility: () => void
  isVisible: boolean
  hideLogin: () => void
  isLoginVisible: boolean
}) {
  return (
    <div>
      <div>
        <Button onClick={hideVisibility}>{isVisible ? 'Hide Section' : 'Show Create user'}</Button>
        {isVisible && (
          <div>
            <CreateUserForm
              onUserCreated={(userId: string) => {
                console.log(`User created with ID: ${userId}`)
              }}
            />
          </div>
        )}
      </div>
      <div>
        <Button onClick={hideLogin}>{isLoginVisible ? 'Hide Login' : 'Show Login'}</Button>
        {isLoginVisible && (
          <div>
            <SignInForm />
          </div>
        )}
      </div>
    </div>
  )
}
