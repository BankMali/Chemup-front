import React from "react";
import ButtonYellow from "./ButtonYellow";

export default function CourseCard() {
  return (
    <div className="h-auto w-[280px] flex flex-col items-center mx-3 gap-5">
      <div className="h-auto w-[280px] flex flex-col justify-between  rounded-3xl shadow-lg hover:scale-105 transition duration-200 carousel-item">
        <div className=" h-[80px] rounded-t-3xl bg-[url('/src/assets/cardbg.jpg')] bg-cover relative">
          <div className=" flex justify-center w-full absolute top-[18px] right-0 left-0 bottom-0 ">
            <img
              src="src/assets/ChemUplogoC.png"
              alt="Clogo"
              className="h-32 "
            />
          </div>
        </div>
        <div className=" bg-[#038ECE] h-[270px] pt-20 text-center px-5">
          <p className=" text-2xl font-bold text-C-white">เคมี ม.ต้น</p>
          <p className=" text-C-yellow3">วิชาเคมีระดับชั้น มัธยมต้น</p>
          <ul className=" text-left text-sm text-C-white pt-3">
            <li>บทที่ 1 การจำแนกสาร </li>
            <li>บทที่ 2 ธาตุและสารประกอบ </li>
            <li>บทที่ 3 สารละลายกรด-เบส </li>
            <li>บทที่ 4 การแยกสาร</li>
            <li>บทที่ 5 การเปลี่ยนแปลงของสาร</li>
          </ul>
        </div>
        <div className=" bg-C-gray3 h-[35px] rounded-b-3xl flex justify-between items-center px-5 text-sm">
          <p>
            <span>icon</span>
            44 ชั่วโมง
          </p>
          <p className=" text-C-yellow3 text-base">ราคา 2,990.-</p>
        </div>
      </div>
      <ButtonYellow>เพิ่มลงตะกร้า</ButtonYellow>
    </div>
  );
}
