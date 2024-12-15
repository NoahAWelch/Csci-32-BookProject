'use client'
import { AuthorProvider } from "../context/authorContext"
import Navbar from '../Components/Navbar'
import PageTitle from '../Components/PageTitle'
import Footer from '../Components/Footer'
import AuthorResults from '../Components/Books/authorPageComponent/authorResults'
import React from 'react'

export default function allAuthors() {
  return (
    <div>

      <div
        className="text-black text-center min-w-screen min-h-screen p-8 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        style={{ backgroundImage: `url('/240_F_791820291_tB5m1LGSA7TN9X0cYVoLpYX02Qei6fzJ.jpg')` }}
      >
 <PageTitle title="All Authors" />
<Navbar/>
        <div className="flex flex-col p-12 m-40 transition-all bg-gray-300 shadow-lg border border-gray-300 rounded-lg hover:scale-110 hover:bg-red-400 bg-gradient-to-r from-yellow-600 to-red-600' grow" >
        <AuthorProvider>
          <AuthorResults/>
          </AuthorProvider>
        </div>
      </div>
      <Footer />
    </div>
  )
}


/*
'use client';
import React from 'react';
import { AuthorProvider } from '../context/authorContext';
import Navbar from '../Components/Navbar';
import PageTitle from '../Components/PageTitle';
import Footer from '../Components/Footer';
import AuthorResults from '../Components/Books/authorPageComponent/authorResults';

export default function AllAuthors() {
  return (
    <div className="text-black text-center min-w-screen min-h-screen p-8 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    style={{ backgroundImage: `url('/240_F_791820291_tB5m1LGSA7TN9X0cYVoLpYX02Qei6fzJ.jpg')` }}>
      <PageTitle title="All Authors" />
      <Navbar />

      <div
        className="flex flex-col p-12 m-40 transition-all bg-gray-300 shadow-lg border border-gray-300 rounded-lg hover:scale-110 hover:bg-red-400 bg-gradient-to-r from-yellow-600 to-red-600 grow"
      >
        <AuthorProvider>
          <AuthorResults />
        </AuthorProvider>
      </div>
      <Footer />
    </div>
  );
}*/

/*export function ToggleSection() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <Button onClick={toggleVisibility} variant={Variants.Secondary2}>
        {isVisible ? 'Hide Section' : 'Show Section'}
      </Button>
      {isVisible && (
        <div
        >
     <AuthorSearch/>

   <AuthorResults/>

        </div>
      )}
    </div>
  );*/


