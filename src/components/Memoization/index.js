import React, { useEffect, useState } from "react";
import { UserList } from "./UserList";

const USERS = [
  {
    id: "idDB-1",
    name: "Juan",
  },
  {
    id: "idDB-2",
    name: "Maria",
  },
];

export const Memoization = () => {
  const [users, setUsers] = useState(USERS);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Memoization Component - render");
  });

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    setUsers([...users, { id: `idDB-${users.length+1}`, name, }]);
  };

  return (
    <>
      <h2 className="text-center mb-3 pb-3 border-bottom">Memoization</h2>
      <div className="controls mb-3">
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Ingrese el nombre"
        />
        <button onClick={handleClick} disabled={!name}>
          Agregar
        </button>
      </div>

      <UserList users={users} />
    </>
  );
};
