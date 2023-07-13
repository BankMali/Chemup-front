import React from "react";
import ButtonYellow from "./ButtonYellow";
import { BiTimeFive } from "react-icons/bi";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import pic from "../assets/ChemUplogoC.png";

export default function CourseCard({
  courseName,
  courseDescription,
  courseTimeMax,
  coursePrice,
  lesson,
  key,
  id,
}) {
  const { user } = useAuth();

  return (
    <div
      key={key}
      className="h-auto w-[280px] flex flex-col items-center gap-5 scale-90">
      <Link to={`/coursedetail/${id}`}>
        <div className="h-auto w-[280px] flex flex-col justify-between  rounded-3xl shadow-lg hover:scale-105 active:scale-100 transition duration-200 carousel-item">
          <div className=" h-[80px] rounded-t-3xl bg-[url('/src/assets/cardbg.jpg')] bg-cover relative">
            <div className=" flex justify-center w-full absolute top-[18px] right-0 left-0 bottom-0 ">
              <img src={pic} alt="Clogo" className="h-32 " />
            </div>
          </div>
          <div className=" bg-[#038ECE] h-[270px] pt-20 text-center px-5">
            <p className=" text-2xl font-bold text-C-white">{courseName}</p>
            <p className=" text-C-yellow3">{courseDescription}</p>
            <ul className=" text-left text-sm text-C-white pt-3 overflow-auto h-28">
              {/* {lesson?.map((item) => (
                <li>{item.name}</li>
              ))} */}
              {lesson}
            </ul>
          </div>
          <div className=" bg-C-gray3 h-[35px] rounded-b-3xl flex justify-between items-center px-5 text-sm">
            <div className="flex items-center gap-1 text-C-white">
              <BiTimeFive />
              {courseTimeMax} ชั่วโมง
            </div>
            <p className=" text-C-yellow3 text-base">
              ราคา {Number(coursePrice).toLocaleString()}
            </p>
          </div>
        </div>
      </Link>
      <ButtonYellow>เพิ่มลงตะกร้า</ButtonYellow>
    </div>
  );
}
