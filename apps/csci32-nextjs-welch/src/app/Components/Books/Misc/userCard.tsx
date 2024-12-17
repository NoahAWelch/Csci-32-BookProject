'use client'
export type User = {
  user_id: string
  user_name: string
  password: string
  email?: string
}
export default function UserCard({ user_id, user_name, email }: User) {
  return (
    <div className="justify-between p-2 gap-2 flex-wrap rounded-lg">
      <div className="rounded-lg">
        <ul>
          <h2 className="cursor-pointer text-purple-700 hover:underline">{user_name}</h2>
          <div className="mt-2 p-2 bg-orange-500 rounded-lg shadow-md hover:scale-110 hover:bg-red-400 bg-gradient-to-r from-yellow-600 to-red-600' grow">
            <h3 className="font-bold text-purple-700"> {user_id}</h3>
            <p> {email || 'No description available'}</p>
          </div>
        </ul>
      </div>
    </div>
  )
}
