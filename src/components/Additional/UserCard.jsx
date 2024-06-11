import React from "react";

function UserCard({ user_name, avatar_card }) {
  return (
    <>
      <ul className="flex gap-4 items-center py-2 px-4 rounded-lg bg-slate-700 hover:bg-slate-600">
        <li>
          <img src={avatar_card} alt="" className="h-12" />
        </li>
        <li>{user_name}</li>
      </ul>
    </>
  );
}

export default UserCard;
