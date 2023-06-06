import React from "react";

export default function Subbar() {
  return (
    <div className=" h-24 bg-C-blue1  w-full relative">
      <div className="flex justify-around flex-wrap gap-2 mt-[-100px] absolute bottom-0 top-[130px] right-0 left-0 px-10">
        <button className="font-semibold rounded-2xl bg-C-blue3 border-4 h-[100px] w-[250px] min-w-[200px] border-C-yellow3 text-C-white hover:bg-C-blue2 hover:scale-105 transition duration-100 ">
          <p className=" text-sm">คอร์ส</p>{" "}
          <p className="text-2xl">เคมี ม.ต้น</p>
        </button>
        <button className="font-semibold rounded-2xl bg-C-blue3 border-4 h-[100px] w-[250px] min-w-[200px] border-C-yellow3 text-C-white hover:bg-C-blue2 hover:scale-105 transition duration-100">
          <p className=" text-sm">คอร์ส</p>{" "}
          <p className="text-2xl">เคมี ม.ปลาย</p>
        </button>
        <button className="font-semibold rounded-2xl bg-C-blue3 border-4 h-[100px] w-[250px] min-w-[200px] border-C-yellow3 text-C-white hover:bg-C-blue2 hover:scale-105 transition duration-100">
          <p className=" text-sm">คอร์ส</p>{" "}
          <p className="text-2xl">เตรียมเข้ามหาลัย</p>
        </button>
      </div>
    </div>
  );
}
