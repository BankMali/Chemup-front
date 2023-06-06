import React from "react";
import SubCourseCard from "../components/SubCourseCard";

export default function SubCourse() {
  return (
    <div className=" h-fit bg-C-white py-20">
      <div className="flex justify-between px-10">
        <h1 className="text-xl text-C-blue2 font-medium">คอร์สเรียนบทย่อย</h1>
        <a href="" className=" hover:text-C-yellow3">
          ดูทั้งหมด
        </a>
      </div>

      <div className="px-10 py-8 carousel carousel-center w-full">
        {/* CARD */}
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />

        {/* ////////////// */}
      </div>
    </div>
  );
}
