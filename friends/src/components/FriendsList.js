import React, { useState } from "react";
import FriendsForm from "./FriendsForm";

export default function FriendsList(props) {
  const [friendsList, setFriendsList] = useState([{}]);
  console.log(friendsList);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className="friendsList">
      <h3>Friends List</h3>
      <button onClick={logoutHandler}>Log Out</button>
      <FriendsForm setFriendsList={setFriendsList} />
      {friendsList.map(friend => {
        return (
          <div key={friend.id}>
            <h4>{friend.name}</h4>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        );
      })}
    </div>
  );
}
