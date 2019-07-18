import React from "react";
import FriendsForm from "./FriendsForm";

export default function FriendsList(props) {
  const logoutHandler = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className="friendsList">
      <h3>Friends List</h3>
      <button onClick={logoutHandler}>Log Out</button>
      <FriendsForm />
    </div>
  );
}
