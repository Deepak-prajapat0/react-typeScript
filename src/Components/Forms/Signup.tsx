import React, { useState } from 'react'

export default function Signup() {

    const [user,setUser]= useState({
        name:'',
        email:'',
        password:''
    })

    const handleChange =(e:any)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const submit=(e:any)=>{
         e.preventDefault()
        console.log(user);
        
    }

  return (
    <>
        <form className='m-auto mt-12 p-6 max-w-sm h-max flex flex-col gap-5 shadow-lg border rounded-md' onSubmit={submit}>
        <h2 className='text-center text-xl '>Signup</h2>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={user.name}
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={user.email}
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  onChange={handleChange}
                  value={user.password}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <button className='w-max m-auto px-6 py-1 border text-white rounded-md bg-sky-500 hover:bg-sky-600 transition-colors delay-75 '>Submit</button>
        </form>
    </>
  )
}
