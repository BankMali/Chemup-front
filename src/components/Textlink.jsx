import React from "react";

export default function Textlink({ children }) {
  return <a className="text-xs hover:underline cursor-pointer">{children}</a>;
}
