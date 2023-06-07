import React from "react";

export default function ButtonBlue({ children }) {
  return (
    <button className="flex  text-C-white font-bold tracking-wider bg-C-blue1  w-fit rounded-[20px] px-10 py-2 hover:bg-C-blue2 transition duration-300 active:scale-90">
      {children}
    </button>
  );
}
