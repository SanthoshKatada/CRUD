import React from "react";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import Axios from 'axios';

function Users() {

  const [user , setUser] = useState([])
  
 

  useEffect(() => {
      Axios.get('http://localhost:8080/show')
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err))
  })

  
  const deleteUser = async (id) => {
      try {
        await Axios.delete('http://localhost:8080/delete/' + id)
        window.location.reload()
      } catch(err) {
        console.log(err);
      }
  }
  
 
  return (
    <div className="bg-blue-500 h-screen p-0 m-0">
      <div className="flex justify-center items-center h-screen">
        <table className="w-3/4 border text-center border-black bg-slate-200">
        <Link to="/create" className="flex">
          <button className="p-1 m-2 w-20 rounded-xl bg-yellow-500">
            Create
          </button>
        </Link>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>

          <tbody>
            {user.map((i) => {
              return (
                <tr>
                  <td className="border border-black">{i.id}</td>
                  <td className="border border-black">{i.name}</td>
                  <td className="border border-black">{i.age}</td>
                  <td className="border border-black">{i.email}</td>
                  <td className="border border-black">
                    <Link to={`/update/${i.id}`}>
                    <button className="p-1 m-2 w-20 rounded-xl bg-green-500">
                      Edit
                    </button>
                    </Link>
                    
                    <button className="p-1 m-2 w-20 rounded-xl bg-red-500" onClick={e => deleteUser(i.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default Users;
