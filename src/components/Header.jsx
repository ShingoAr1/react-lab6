import React from "react";

const HeaderOne = ({ user, setUser }) => {
  return (
    <>
    <div className="flex flex-row  bg-green-500 p-2 justify-evenly ">
    <h4 className="text-inherit text-center align-middle">Welcome, <span className="font-bold">{user}</span></h4>
      <button onClick={() => setUser('')} className=" p-1 bg-zinc-200 text-black border-solid border border-emerald-800 hover:text-red-600 hover:border-red-600 hover:border-dashed">Logout</button>
      
    </div>
      
    </>
  );
};

export default HeaderOne;
