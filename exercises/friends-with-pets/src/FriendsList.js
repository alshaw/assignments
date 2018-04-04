import React from "react";
import Friend from "./Friend";
import Pet from "./Pet";
import friends from "./data";

function FriendsList() {
  const friendsLis = friends.map((person, i) => (
    <Friend key={person.name + i} human={person} />
  ));
  return <div>{friendsLis}</div>;
}

export default FriendsList;
