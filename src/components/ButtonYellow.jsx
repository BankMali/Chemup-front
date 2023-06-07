import React from "react";

export default function ButtonYellow({ children }) {
  return (
    <button className="flex  text-C-gray3 font-bold tracking-wider bg-C-yellow2  w-fit rounded-[20px] px-10 py-2 hover:bg-C-yellow1 transition duration-300 active:scale-90">
      {children}
    </button>
  );
}
