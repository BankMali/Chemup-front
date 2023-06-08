import React from "react";

export default function Subbar() {
  return (
    <div className=" h-20 bg-C-blue1  w-full relative">
      <div className="flex justify-center flex-nowrap gap-10  absolute bottom-0 top-[30px] right-0 left-0 px-10 ">
        <a href="/maincourse">
          <button className="font-semibold rounded-2xl bg-C-blue3 border-4 h-[100px] w-[250px] min-w-[200px] border-C-yellow3 text-C-white hover:bg-C-blue2 hover:scale-105 transition duration-100 active:scale-100">
            <p className=" text-sm">คอร์ส</p>{" "}
            <p className="text-2xl">เคมี ม.ต้น</p>
          </button>
        </a>
        <a href="/maincourse">
          <button
            href="/maincourse"
            className="font-semibold rounded-2xl bg-C-blue3 border-4 h-[100px] w-[250px] min-w-[200px] border-C-yellow3 text-C-white hover:bg-C-blue2 hover:scale-105 transition duration-100 active:scale-100">
            <p className=" text-sm">คอร์ส</p>{" "}
            <p className="text-2xl">เคมี ม.ปลาย</p>
          </button>
        </a>
        <a href="/maincourse">
          <button
            href="/maincourse"
            className="font-semibold rounded-2xl bg-C-blue3 border-4 h-[100px] w-[250px] min-w-[200px] border-C-yellow3 text-C-white hover:bg-C-blue2 hover:scale-105 transition duration-100 active:scale-100">
            <p className=" text-sm">คอร์ส</p>{" "}
            <p className="text-2xl">เตรียมเข้ามหาลัย</p>
          </button>
        </a>
      </div>
    </div>
  );
}
