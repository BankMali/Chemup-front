import React from "react";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import ButtonBlue from "../components/ButtonBlue";
import ButtonGhost from "../components/ButtonGhost";
import Inputbar from "../components/Inputbar";
import OrderItem from "../layouts/OrderItem";

export default function Registerpage() {
  return (
    <div>
      <div>
        <Navbar />
        {/* <div className=" bg-C-blue1 text-C-white text-xl h-[80px] flex justify-center items-center">
        <p>เข้าสู่ระบบ</p>
      </div> */}
        <div className="w-full h-full bg-C-white flex flex-col justify-start items-center py-10">
          <div className=" bg-white p-10 rounded-xl shadow-md w-[450px] flex flex-col justify-center items-center gap-4">
            <p className=" text-C-gray3 text-lg font-bold pb-4">สมัครสมาชิก</p>
            <div className="flex justify-center items-center gap-4">
              <Inputbar title="ชื่อ*" />
              <Inputbar title="นามสกุล*" />
            </div>

            <Inputbar title="Email*" />
            <Inputbar type="password" title="Password*" />
            <Inputbar type="password" title="Confirm Password*" />
            <textarea
              placeholder="ที่อยู่สำหรับจัดส่ง*"
              className="text-C-gray3 border rounded-xl py-2 px-4 w-full bg-white border-C-gray1 hover:outline-C-gray1 hover:outline outline-2 focus-within:outline-none hover:border-C-blue1"
            />
            <Inputbar title="เบอร์ติดต่อ*" />
            <Inputbar title="โรงเรียน หรือ บริษัท" />

            <div className=" flex gap-5 text-center justify-center">
              <ButtonBlue>เข้าสู่ระบบ</ButtonBlue>
              <ButtonGhost>ทดลองเรียน</ButtonGhost>
            </div>
            <div className=" flex gap-2 justify-end w-full"></div>
          </div>
        </div>

        <div className="w-full h-full bg-C-white flex flex-col justify-start items-center py-10">
          <div className=" bg-white p-10 rounded-xl shadow-md w-[450px] flex flex-col justify-center items-center gap-4">
            <p className=" text-C-gray3 text-lg font-bold pb-4">ตะกร้าของฉัน</p>
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <div className=" flex gap-5 text-center justify-center">
              <ButtonBlue>เข้าสู่ระบบ</ButtonBlue>
              <ButtonGhost>ทดลองเรียน</ButtonGhost>
            </div>
            <div className=" flex gap-2 justify-end w-full"></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
