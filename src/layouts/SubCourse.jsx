import React from "react";
import SubCourseCard from "../components/SubCourseCard";
import MockDataSubCourseCard from "../components/MockDataSubCourseCard";

export default function SubCourse() {
  return (
    <div className=" h-fit bg-C-white py-10">
      <div className="flex justify-between px-10">
        <h1 className="text-xl text-C-blue2 font-medium">คอร์สเรียนบทย่อย</h1>
        <a href="/subcourse" className=" hover:text-C-yellow3">
          ดูทั้งหมด
        </a>
      </div>

      <div className="px-10 carousel carousel-center w-full overflow-x-scroll">
        {/* CARD */}
        {/* <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard /> */}
        {/* <SubCourseCard /> */}
        <MockDataSubCourseCard />
        {/* ////////////// */}
      </div>
    </div>
  );
}
