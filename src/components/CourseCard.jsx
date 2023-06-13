import React from "react";
import ButtonYellow from "./ButtonYellow";
import { BiTimeFive } from "react-icons/bi";
import { useAuth } from "../contexts/AuthContext";

export default function CourseCard({
  courseName,
  courseDescription,
  courseTimeMax,
  coursePrice,
  lesson,
}) {
  const { user } = useAuth();
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

            <div className=" flex justify-center w-full absolute top-[5px] right-0 left-[120px] bottom-0 ">
              {user ? (
                <button className=" bg-C-gray2  hover:bg-C-gray3 w-7 h-7 flex justify-center pt-[2px] rounded-full text-white">
                  X
                </button>
              ) : (
                <button className=" bg-C-gray2  hover:bg-C-gray3 w-7 h-7 flex justify-center pt-[2px] rounded-full text-white invisible">
                  X
                </button>
              )}
            </div>
            <div className=" flex justify-center w-fit absolute top-[5px] right-0 left-[10px] bottom-0">
              {user ? (
                <button className=" bg-C-gray2 hover:bg-C-gray3 w-fit h-7 flex justify-center pt-[2px] rounded-xl px-2 text-white ">
                  edit
                </button>
              ) : (
                <button className=" bg-C-gray2 hover:bg-C-gray3 w-fit h-7 flex justify-center pt-[2px] rounded-xl px-2 text-white invisible">
                  edit
                </button>
              )}
            </div>
          </div>
          <div className=" bg-[#038ECE] h-[270px] pt-20 text-center px-5">
            <p className=" text-2xl font-bold text-C-white">{courseName}</p>
            <p className=" text-C-yellow3">{courseDescription}</p>
            <ul className=" text-left text-sm text-C-white pt-3">
              {lesson?.map((item) => (
                <li>{item.name}</li>
              ))}
            </ul>
          </div>
          <div className=" bg-C-gray3 h-[35px] rounded-b-3xl flex justify-between items-center px-5 text-sm">
            <div className="flex items-center gap-1 text-C-white">
              <BiTimeFive />
              {courseTimeMax} ชั่วโมง
            </div>
            <p className=" text-C-yellow3 text-base">ราคา {coursePrice}.-</p>
          </div>
        </div>
      </a>
      <ButtonYellow>เพิ่มลงตะกร้า</ButtonYellow>
    </div>
  );
}
