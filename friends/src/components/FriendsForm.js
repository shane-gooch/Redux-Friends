import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../helper/axiosWithAuth";
import uuid from "uuid";

export default function FriendsForm({ setFriendsList }) {
  const [initialFormState, setInitialFormState] = useState({
    name: "",
    age: "",
    email: ""
  });
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: ""
  });

  const [isAdding, setIsAdding] = useState(false);

  const changeHandler = e => {
    setFormData({
      ...formData,
      id: uuid(),
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsAdding(!isAdding);
  };

  useEffect(() => {
    const url = "http://localhost:5000/api/friends";
    axiosWithAuth()
      .post(url, formData)
      .then(res => {
        setFriendsList(res.data);
        setFormData(initialFormState);
      })
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
