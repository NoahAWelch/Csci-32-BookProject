'use client'
import React, { useState } from 'react'
import HomeResults from './Components/Books/homePageComponents/HomeResults'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import PageTitle from './Components/PageTitle'
import { AuthorProvider } from './context/authorContext'
import HideSection from './Components/hideSection'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoginVisible, setLoginVisible] = useState(false)
  const hideVisibility = () => {
    setIsVisible((prev) => !prev)
  }
  const hideLogin = () => {
    setLoginVisible((prev) => !prev)
  }
  return (
    <div>
      <div
        className="text-black text-center min-w-screen min-h-screen p-8 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        style={{ backgroundImage: `url('/240_F_791820291_tB5m1LGSA7TN9X0cYVoLpYX02Qei6fzJ.jpg')` }}
      >
        <PageTitle title="Home" />
        <HideSection
          hideVisibility={hideVisibility}
          isVisible={isVisible}
          hideLogin={hideLogin}
          isLoginVisible={isLoginVisible}
        />
        <Navbar />
        <div className="flex flex-col p-12 m-40 transition-all bg-gray-300 shadow-lg border border-gray-300 rounded-lg hover:scale-110 hover:bg-red-400 bg-gradient-to-r from-yellow-600 to-red-600 grow">
          <p>Top ten or at least above 7 rating</p>
          <AuthorProvider>
            <HomeResults />
          </AuthorProvider>
        </div>
      </div>
      <Footer />
    </div>
  )
}
