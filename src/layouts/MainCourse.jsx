import React from "react";
import CourseCard from "../components/CourseCard";

export default function MainCourse() {
  return (
    <div className=" h-fit bg-C-white pt-20">
      <div className="flex justify-between px-10">
        <h1 className="text-xl text-C-blue2 font-medium">คอร์สเรียนหลัก</h1>
        <a href="/maincourse" className=" hover:text-C-yellow3">
          ดูทั้งหมด
        </a>
      </div>

      <div className="px-10  carousel carousel-center w-full">
        {/* <div className="px-10 py-8 carousel carousel-center w-full overflow-x-scroll"> */}
        {/* CARD */}

        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        {/* ////////////// */}
      </div>
    </div>
  );
}
