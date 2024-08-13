import { getUsers } from "@/helpers/apiFunctions";
import React from "react";

const Team = async () => {
  const users = await getUsers();
  console.log(users);
  return (
    <div className="text-2xl text-center">
      <h1>Team</h1>
    </div>
  );
};

export default Team;
