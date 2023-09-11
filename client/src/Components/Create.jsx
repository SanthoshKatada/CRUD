import React from 'react'
import {useState} from 'react'
import Axios from 'axios'

function Create() {

  const [name , setName] = useState("");
  const [age , setAge] = useState(0);
  const [email , setEmail] = useState("");

  const addUser = () => {
      Axios.post('http://localhost:8080/create' , {
        name : name ,
        age : age ,
        email : email
      }).then(() => {
        console.log("Success.")
      })
  }

  return (
    <div className='bg-blue-500 h-screen p-0 m-0 flex justify-center items-center'>
      <form className='w-auto h-auto bg-white rounded-md p-6'>
        <div className='text-2xl text-center font-bold'>Add Users</div>
        <div className='p-3'>
        <label>
            Name
          </label>
        <input type='text' placeholder='Name...' className='border border-gray-600 p-2 rounded-lg block outline-none' onChange={(e) => {
          setName(e.target.value)
        }}></input>
        </div>
          
        <div className='p-3'>
        <label>
          Age
        </label>
        <input type='number' placeholder='Age...' className='border border-gray-600 p-2 rounded-lg block outline-none' onChange={(e) => {
          setAge(e.target.value)
        }}></input>
        </div>

        <div className='p-3'>
        <label>
          Email
        </label>
        <input type='email' placeholder='Email...' className='border border-gray-600 p-2 rounded-lg block outline-none' onChange={(e) => {
          setEmail(e.target.value)
        }}></input>
        </div>
         

        <button className="block p-1 mt-4 ml-auto mr-auto w-20 rounded-xl bg-yellow-500" onClick={addUser}>
            Create
          </button>
        
        
      </form>
    </div>
  )
}

export default Create
