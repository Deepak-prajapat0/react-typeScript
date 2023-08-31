import { useEffect, useState } from 'react'

interface User{
  id:number,
  firstName:string,
  lastName:string,
  username:string,
  email:string,
  image:string,
}

export default function UserApi () {
  const [users, setusers] = useState<User[]>([])


  async function getUsers () {
    await fetch('https://dummyjson.com/users').then(async (res: any) => {
      let data = await res.json()
      // console.log(data.users);
      
      setusers(data.users)
    })
    .catch(async(err:any)=>{
      console.log(err);
    })
  }

  function deleteUser(id:number){
    setusers(users.filter((x:User)=>x.id !== id))
  }


  useEffect(() => {
    getUsers()
  }, [])

  return <div className='p-4'>
    <h1 className='p-3 text-4xl text-center'>Fetch api data</h1>
<ul role="list" className="p-4 flex flex-row flex-wrap gap-3 justify-center">
      {users.map((person) => (
        <li key={person.email} className="p-4 w-56 flex justify-between gap-x-6 py-5 border border-gray-300">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.image} alt={person.username} />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.firstName}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
            </div>
          </div>
          <button onClick={()=>deleteUser(person.id)} title='Delete' className='hover:scale-125'>	&#128465;</button>
        </li>
      ))}
    </ul>
  </div>
}
