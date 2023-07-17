import React from "react";

export default function ConfirmOrderItem({ courseName, price, count, id }) {
  return (
    <div
      key={id}
      className="flex justify-center items-center gap-4 w-full h-20 border-b px-4">
      <div className=" flex-[2] flex  items-center w-full h-full gap-2">
        <div className=" w-full flex-1 h-full flex justify-center items-center">
          <img src="/src/assets/ChemUplogoC.png" alt="" className=" h-fit" />
        </div>
        <div className=" w-full flex flex-col flex-[3]">
          <p className=" text-C-gray3">{courseName || "course name"}</p>
          <p className=" text-C-blue1">
            ฿ {price?.toLocaleString() || "price"}
          </p>
        </div>
      </div>
      <div className=" flex-[1.5] flex justify-end items-center">
        <div className="flex justify-end">
          {/* <button
          onClick={hdlClickDecrese}
          className="hover:bg-gray-100 cursor-pointer w-8 h-8 flex justify-center items-center text-C-gray3 border border-C-gray1 rounded-full transition-color duration-50">
          -
        </button> */}
          <div className="mx-1 w-full h-8 text-lg flex justify-end items-center text-C-gray3">
            x {count || "x 1"}
          </div>
          {/* <button
          onClick={hdlClickIncrese}
          className="hover:bg-gray-100 cursor-pointer w-8 h-8 flex justify-center items-center text-C-gray3 border border-C-gray1 rounded-full transition-color duration-50">
          +
        </button> */}
        </div>
      </div>
    </div>
  );
}
