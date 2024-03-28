import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"


const Home = () => {

  const [users, setUsers] = useState([
    // { name: "joko", age: 22, email: "joko@gmail.com" },
    // { name: "jeric", age: 24, email: "jeric@gmail.com" },
    // { name: "jovan", age: 17, email: "jovan@gmail.com" },
    ])

  useEffect(() => {
    axios.get("http://localhost:4000/api/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error))
  },[]) 

  const handleDelete = (id) => {
    axios.delete("http://localhost:4000/api/delete/"+id)
      .then((response) => {console.log(response.data)
       window.location.reload();
      })
      .catch((error) => console.log(error))
  }

  return(
    <div className="create">
        <h1>Create</h1>
          <div>
            <Link to="/create"> <button> Create New User </button> </Link>
          </div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
              {
                users.map((user) => {
                  return (
                    <tr key={user._id}>
                      <td>{user.name}</td>
                      <td>{user.age}</td>
                      <td>{user.email}</td>
                      <td>
                        <Link to={`/update/${user._id}`}><button>Update</button></Link>
                        <button onClick={(e) => handleDelete(user._id)}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              } 
              </tbody>
            </table>
    </div>

  );
};
export default Home;