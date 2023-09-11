import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom';

function Update() {

  const [name , setName] = useState("");
  const [age , setAge] = useState(0);
  const [email , setEmail] = useState("");
  const {id} = useParams();

  const updateUsers = () => {
      Axios.put("http://localhost:8080/update/" + id , {
        name : name ,
        age : age ,
        email : email ,
        id : id
      }).then(() => {
        console.log("Updated");
      })
  }

  return (
    <div className='bg-blue-500 h-screen p-0 m-0 flex justify-center items-center'>
      <form className='w-auto h-auto bg-white rounded-md p-6'>
        <div className='text-2xl text-center font-bold'>Update Users</div>
        <div className='p-3'>
        <label>
            Name
          </label>
        <input type='text' placeholder='Name...' className='border border-gray-600 p-2 rounded-lg block outline-none' onChange={(e) => {setName(e.target.value)}}></input>
        </div>
          
        <div className='p-3'>
        <label>
          Age
        </label>
        <input type='number' placeholder='Age...' className='border border-gray-600 p-2 rounded-lg block outline-none' onChange={(e) => {setAge(e.target.value)}}></input>
        </div>

        <div className='p-3'>
        <label>
          Email
        </label>
        <input type='email' placeholder='Email...' className='border border-gray-600 p-2 rounded-lg block outline-none' onChange={(e) => {setEmail(e.target.value)}}></input>
        </div>
         

        <button className="block p-1 mt-4 ml-auto mr-auto w-20 rounded-xl bg-green-500" onClick={updateUsers}>
            Update
          </button>
        
        
      </form>
    </div>
  )
}

export default Update
