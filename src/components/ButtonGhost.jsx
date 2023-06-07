import React from "react";

export default function ButtonGhost({ children }) {
  return (
    <button className="flex  text-C-gray3 font-bold tracking-wider border border-C-gray3 w-fit rounded-[20px] px-10 py-2 hover:text-C-blue1 hover:border-C-blue1 transition duration-300 hover:bg-C-gray1 active:scale-90">
      {children}
    </button>
  );
}
