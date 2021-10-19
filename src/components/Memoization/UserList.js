import React, { useEffect } from "react";
import { UserListItem } from "./UserListItem";

export const UserList = ({ users }) => {
  useEffect(() => {
    console.log("UserList Component - render");
  });

  return (
    <ul>
      {users.map((user) => (
        <UserListItem key={user.id} user={user} />
      ))}
    </ul>
  );
};
