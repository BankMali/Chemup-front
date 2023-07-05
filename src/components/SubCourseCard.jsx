import React from "react";
import ButtonYellow from "./ButtonYellow";
import { BiTimeFive } from "react-icons/bi";

export default function SubCourseCard({
  lcourseName,
  lcourseDescription,
  lcourseTimeMax,
  lcoursePrice,
  lesson,
}) {
  return (
    <div className="h-auto w-[280px] flex flex-col items-center gap-5 scale-90 ">
      <a href="/coursedetail">
        <div className="h-auto w-[280px] flex flex-col justify-between  rounded-3xl shadow-lg hover:scale-105 active:scale-100 transition duration-200 carousel-item">
          <div className=" h-[80px] rounded-t-3xl bg-[url('/src/assets/cardbg.jpg')] bg-cover relative">
            <div className=" flex justify-center w-full absolute top-[18px] right-0 left-0 bottom-0 ">
              <img
                src="src/assets/ChemUplogoC.png"
                alt="Clogo"
                className="h-32 "
              />
            </div>
          </div>
          <div className=" bg-C-gray2 h-[270px] pt-20 text-center px-5">
            <p className=" text-2xl font-bold text-C-white">{lcourseName}</p>

            <p className=" text-C-yellow3">{lcourseDescription}</p>

            <ul className=" text-left text-sm text-C-white pt-3 overflow-auto h-28">
              {lesson?.map((item) => (
                <li>{item.name}</li>
              ))}
            </ul>
          </div>
          <div className=" bg-C-gray3 h-[35px] rounded-b-3xl flex justify-between items-center px-5 text-sm">
            <div className="flex items-center gap-1 text-C-white">
              <BiTimeFive />
              {lcourseTimeMax} ชั่วโมง
            </div>
            <p className=" text-C-yellow3 text-base">ราคา {lcoursePrice}.-</p>
          </div>
        </div>
      </a>
      <ButtonYellow>เพิ่มลงตะกร้า</ButtonYellow>
    </div>
  );
}
