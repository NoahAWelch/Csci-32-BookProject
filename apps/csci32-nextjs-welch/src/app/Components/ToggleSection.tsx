// src/components/ToggleSection.tsx
import React from 'react'
import { Button } from '@repo/ui/button'
import SignUp from '../Components/Books/Misc/signUp'
import SignInForm from '../Components/Books/Misc/signInForm'

export default function ToggleSection({
  toggleVisibility,
  isVisible,
}: {
  toggleVisibility: () => void
  isVisible: boolean
}) {
  return (
    <div>
      <Button onClick={toggleVisibility}>{isVisible ? 'Hide Section' : 'Show Section'}</Button>
      {isVisible && (
        <div>
          <SignUp
            onUserCreated={function (userId: string): void {
              throw new Error('Function not implemented.')
            }}
          />
          <SignInForm />
        </div>
      )}
    </div>
  )
}
