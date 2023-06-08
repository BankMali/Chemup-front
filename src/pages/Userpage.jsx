import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import SubHeader from "../layouts/SubHeader";
import ButtonYellow from "../components/ButtonYellow";
import ButtonGhost from "../components/ButtonGhost";
import ButtonYellowXs from "../components/ButtonYellowXs";
import ButtonGhostXs from "../components/ButtonGhostXs";
import CourseCard from "../components/CourseCard";
import UserCard from "../components/UserCard";

export default function Userpage() {
  return (
    <div>
      <Navbar />
      <SubHeader>คอร์สเรียนบทย่อย</SubHeader>
      <div className="px-10 py-8 flex flex-wrap justify-center items-start gap-10 bg-C-white">
        {/* /////// col1 */}
        <div className="flex-1 flex flex-col gap-5 justify-around items-center">
          <UserCard />
          <div className="flex gap-3">
            <ButtonYellowXs>แก้ไขข้อมูล</ButtonYellowXs>
            <ButtonGhostXs>เปลี่ยนรหัสผ่าน</ButtonGhostXs>
          </div>
        </div>
        {/* //////// */}
        {/* <div className="flex-[2] flex flex-wrap">feature static</div> */}
      </div>
      <div className="flex justify-between px-10 bg-C-white pt-5">
        <h1 className="text-xl text-C-blue2 font-medium">คอร์สเรียนของฉัน</h1>
      </div>
      <div className="px-10 py-8 flex flex-wrap gap-10 bg-C-white">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <Footer />
    </div>
  );
}
