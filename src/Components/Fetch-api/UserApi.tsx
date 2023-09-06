import { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface User{
  id:number,
  firstName:string,
  lastName:string,
  username:string,
  email:string,
  image:string,
}

export default function UserApi () {
  const [searchUsers, setSearchUsers] = useState<User[]>([])
 const [search,setSearch]=useState<string>('')

//  function searchData(e:any){
//     setSearch(e)    
//     if(search.length){
//       setSearchUsers(users.filter((x:User)=>x.firstName.toLowerCase().includes(e.toLowerCase())))
//     }
//     let data = search.length ? searchUsers : users
//     setusers(data)
// }

   async function getUsers() {
    return axios.get('https://dummyjson.com/users').then(res=>res.data)
  }

  // function deleteUser(id:number){
  //   setusers(users.filter((x:User)=>x.id !== id))
  // }

  const { data, isLoading, status, error } = useQuery( ["users"],  getUsers ,{ staleTime: 5000*10 })

  if(isLoading ) return <h2>Loading ...</h2>

  return <div className='p-4'>
    <h1 className='p-3 text-4xl text-center'>Fetch api data</h1>
    {/* <SearchBar searchData={searchData} search={search}/> */}
<ul role="list" className="p-4 flex flex-row flex-wrap gap-3 justify-center">
      {data && data.users.map((person:any) => (
        <li key={person.email} className="p-4 w-56 flex justify-between gap-x-6 py-5 border border-gray-300 rounded-md">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.image} alt={person.username} />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.firstName}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
            </div>
          </div>
          {/* <button onClick={()=>deleteUser(person.id)} title='Delete' className='hover:scale-125'>	&#128465;</button> */}
        </li>
      ))}
    </ul>
  </div>
}
