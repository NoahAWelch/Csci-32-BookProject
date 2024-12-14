'use client'
import { AuthorProvider } from "../context/authorContext"
import Navbar from '../Components/Navbar'
import PageTitle from '../Components/PageTitle'
import Footer from '../Components/Footer'
import BookResults from "../Components/Books/BookPageComponent/bookResults"
import React from 'react'
import Comments from "../Components/Books/BookPageComponent/bookCommentsCard"

export default function allBooks() {



  return (
    <div>
      <div
        className="text-black text-center min-w-screen min-h-screen p-8 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        style={{ backgroundImage: `url('/240_F_791820291_tB5m1LGSA7TN9X0cYVoLpYX02Qei6fzJ.jpg')` }}
      >
 <PageTitle title="All Books" />
<Navbar/>
        <div className="flex flex-col p-12 m-40 transition-all bg-gray-300 shadow-lg border border-gray-300 rounded-lg hover:scale-110 hover:bg-red-400 bg-gradient-to-r from-yellow-600 to-red-600' grow"

        >

            <div>

          </div>
<AuthorProvider>
          <BookResults />
          </AuthorProvider>


        </div>
      </div>
      <Footer />
    </div>
  )
}

/*
'use client';
import React, { useState } from 'react';
import { AuthorProvider } from "../context/authorContext";
import Navbar from '../Components/Navbar';
import PageTitle from '../Components/PageTitle';
import Footer from '../Components/Footer';
import BookResults from "../Components/Books/BookPageComponent/bookResults";
import { Button } from '@repo/ui/button';
import { Variants } from '@repo/ui/variant';

export default function AllBooks() {
  return (
    <div>
      <PageTitle title="All Books" />
      <Navbar />
      <ToggleSection />
      <div
        className="flex flex-col p-12 m-40 transition-all bg-gray-300 shadow-lg border border-gray-300 rounded-lg hover:scale-110 hover:bg-red-400 bg-gradient-to-r from-yellow-600 to-red-600 grow"
      >
        <AuthorProvider>
          <BookResults />
        </AuthorProvider>
      </div>
      <Footer />
    </div>
  );
}
  return (
    <div>

        <div
          className="text-black text-center min-w-screen min-h-screen p-8 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          style={{ backgroundImage: `url('/240_F_791820291_tB5m1LGSA7TN9X0cYVoLpYX02Qei6fzJ.jpg')` }}
        >
          <div>
            <BookResults />
          </div>
        </div>

    </div>
  );
}*/
