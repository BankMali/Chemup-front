import React from "react";

export default function Inputbar({ title, type }) {
  return (
    <input
      type={type || "text"}
      placeholder={title}
      className="text-C-gray3 border rounded-xl py-2 px-4 w-full bg-white border-C-gray1 hover:outline-C-gray1 hover:outline outline-2 focus-within:outline-none hover:border-C-blue1"
    />
  );
}
