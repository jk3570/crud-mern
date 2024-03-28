import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const Create = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/api/create", {name, age, email})
      .then((response) => navigate("/"))
      .catch((error) => console.error(error))
  }

  return (
    <div className='create'>
      <h1>Create New User</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button type="submit">Create</button>
        </form>
    </div>

  );
};

export default Create;