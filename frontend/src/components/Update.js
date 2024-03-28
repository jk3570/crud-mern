import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

    useEffect(() => {
      axios.get("http://localhost:4000/api/user/"+id)
        .then((response) => {
          console.log(response)
          setName(response.data.name)
          setAge(response.data.age)
          setEmail(response.data.email)
        })
        .catch((error) => console.log(error))
  },[]) 

  const handleSubmit = async (e) => {
    e.preventDefault();
        axios.put("http://localhost:4000/api/update/"+id, {name, age, email})
      .then((response) => navigate("/"))
      .catch((error) => console.error(error))

  }

  return (
    
    <div className='update'>
      <h1>Update User</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="age">Age:</label>
              <input type="number" id="age" name="age" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="submit">Update</button>
          </form>
    </div>

  );
};

export default Update;