import GoBack from "@/components/GoBack";
import React from "react";

const UserDetail = ({ params }) => {
  const { userId } = params;
  return (
    <div>
      <h1 className="text-3xl text-center"> User {userId} </h1>
      <GoBack />
    </div>
  );
};

export default UserDetail;
