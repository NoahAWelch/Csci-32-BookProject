'use client'
import AuthorHome from '../Components/Books/authorPageComponent/authorHome'
import { AuthorProvider } from '../context/authorContext'
import Navbar from '../Components/Navbar'
export default function CreatePublish() {
  return (
    <div>
      <div
        className="text-black text-center min-w-screen min-h-screen p-8 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        style={{ backgroundImage: `url('/240_F_791820291_tB5m1LGSA7TN9X0cYVoLpYX02Qei6fzJ.jpg')` }}
      >
        <div>
          <Navbar />
        </div>
        <AuthorProvider>
          <AuthorHome />
        </AuthorProvider>
      </div>
    </div>
  )
}
