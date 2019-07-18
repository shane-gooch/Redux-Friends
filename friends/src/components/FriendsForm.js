import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../helper/axiosWithAuth";

export default function FriendsForm() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    email: ""
  });

  const [isAdding, setIsAdding] = useState(false);

  const changeHandler = () => {
    console.log("conencted");
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsAdding(!isAdding);
  };

  useEffect(() => {
    const url = "http://localhost:5000/api/friends";
    axiosWithAuth()
      .post(url, formData)
      .then(res => console.log(res))
      .catch(err => console.log(err.response.data));
  }, [isAdding]);

  return (
    <div className="friendsForm">
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={formData.name}
          onChange={changeHandler}
        />
        <input
          type="number"
          placeholder="Enter age"
          name="age"
          value={formData.age}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
