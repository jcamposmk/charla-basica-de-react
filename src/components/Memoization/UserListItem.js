import React, { useEffect } from "react";

export const UserListItem = ({ user }) => {
  useEffect(() => {
    // simulate cloud backend fetch
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
        console.log("UserListItem - render " + user.name);
      }, 100);
    });
  }, [user]);

  return <li>{user.name}</li>;
};
