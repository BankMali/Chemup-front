import React from "react";
import MockDataCourseCard from "../components/mockDataCourseCard";

export default function MainCourse() {
  //   const mockData = [
  //     {
  //       courseId: 1,
  //       name: "เคมีม.ต้น",
  //       description: "วิชาเคมีระดับชั้น มัธยมต้น",
  //       price: 2900,
  //       time_max: 44,
  //       status: false,
  //       course_img: "src/assets/cardbg.jpg",
  //       leasonId: 1,
  //       leason: [
  //         {
  //           name: "บทที่ 1 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 1,
  //           subLeason: [
  //             {
  //               name: "การจำแนกสารรอบตัว",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //             {
  //               name: "test2",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test3",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test4",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test5",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //           ],
  //         },
  //         {
  //           name: "บทที่ 2 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 1,
  //           subLeason: [
  //             {
  //               name: "การจำแนกสารรอบตัว",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //             {
  //               name: "test2",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test3",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test4",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test5",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //           ],
  //         },

  //         {
  //           name: "บทที่ 3 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 2,
  //           subLeason: [
  //             {
  //               name: "สารละลาย",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //           ],
  //         },
  //         {
  //           name: "บทที่ 2 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 1,
  //           subLeason: [
  //             {
  //               name: "การจำแนกสารรอบตัว",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //             {
  //               name: "test2",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test3",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test4",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test5",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //           ],
  //         },

  //         {
  //           name: "บทที่ 3 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 2,
  //           subLeason: [
  //             {
  //               name: "สารละลาย",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       courseId: 2,
  //       name: "เคมีม.4-1",
  //       description: "วิชาเคมีระดับชั้น มัธยม 4 เทอม 1",
  //       price: 2900,
  //       time_max: 44,
  //       status: false,
  //       course_img: "src/assets/cardbg.jpg",
  //       leasonId: 1,
  //       leason: [
  //         {
  //           name: "บทที่ 1 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 1,
  //           subLeason: [
  //             {
  //               name: "การจำแนกสารรอบตัว",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //             {
  //               name: "test2",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test3",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test4",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test5",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //           ],
  //         },
  //         {
  //           name: "บทที่ 2 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 1,
  //           subLeason: [
  //             {
  //               name: "การจำแนกสารรอบตัว",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //             {
  //               name: "test2",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test3",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test4",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test5",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //           ],
  //         },

  //         {
  //           name: "บทที่ 3 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 2,
  //           subLeason: [
  //             {
  //               name: "สารละลาย",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //           ],
  //         },
  //         {
  //           name: "บทที่ 1 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 1,
  //           subLeason: [
  //             {
  //               name: "การจำแนกสารรอบตัว",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //             {
  //               name: "test2",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test3",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test4",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test5",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //           ],
  //         },
  //         {
  //           name: "บทที่ 2 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 1,
  //           subLeason: [
  //             {
  //               name: "การจำแนกสารรอบตัว",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //             {
  //               name: "test2",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test3",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test4",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test5",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //           ],
  //         },

  //         {
  //           name: "บทที่ 3 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 2,
  //           subLeason: [
  //             {
  //               name: "สารละลาย",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       courseId: 3,
  //       name: "เคมีม.4-2",
  //       description: "วิชาเคมีระดับชั้น มัธยม 4 เทอม 2",
  //       price: 2900,
  //       time_max: 44,
  //       status: false,
  //       course_img: "src/assets/cardbg.jpg",
  //       leasonId: 1,
  //       leason: [
  //         {
  //           name: "บทที่ 1 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 1,
  //           subLeason: [
  //             {
  //               name: "การจำแนกสารรอบตัว",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //             {
  //               name: "test2",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test3",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test4",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test5",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //           ],
  //         },
  //         {
  //           name: "บทที่ 2 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 1,
  //           subLeason: [
  //             {
  //               name: "การจำแนกสารรอบตัว",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //             {
  //               name: "test2",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test3",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test4",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test5",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //           ],
  //         },

  //         {
  //           name: "บทที่ 3 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 2,
  //           subLeason: [
  //             {
  //               name: "สารละลาย",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       courseId: 4,
  //       name: "เคมีม.5-1",
  //       description: "วิชาเคมีระดับชั้น มัธยม 5 เทอม 1",
  //       price: 2900,
  //       time_max: 44,
  //       status: false,
  //       course_img: "src/assets/cardbg.jpg",
  //       leasonId: 1,
  //       leason: [
  //         {
  //           name: "บทที่ 1 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 1,
  //           subLeason: [
  //             {
  //               name: "การจำแนกสารรอบตัว",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //             {
  //               name: "test2",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test3",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test4",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test5",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //           ],
  //         },
  //         // {
  //         //   name: "บทที่ 2 การจำแนกสาร",
  //         //   description: "..",
  //         //   subLeasonId: 1,
  //         //   subLeason: [
  //         //     {
  //         //       name: "การจำแนกสารรอบตัว",
  //         //       description: "...",
  //         //       file: "...",
  //         //       video: "...",
  //         //     },
  //         //     {
  //         //       name: "test2",
  //         //       description: "...",
  //         //       file: "...",
  //         //       video: "....",
  //         //     },
  //         //     {
  //         //       name: "test3",
  //         //       description: "...",
  //         //       file: "...",
  //         //       video: "....",
  //         //     },
  //         //     {
  //         //       name: "test4",
  //         //       description: "...",
  //         //       file: "...",
  //         //       video: "....",
  //         //     },
  //         //     {
  //         //       name: "test5",
  //         //       description: "...",
  //         //       file: "...",
  //         //       video: "....",
  //         //     },
  //         //   ],
  //         // },

  //         // {
  //         //   name: "บทที่ 3 การจำแนกสาร",
  //         //   description: "..",
  //         //   subLeasonId: 2,
  //         //   subLeason: [
  //         //     {
  //         //       name: "สารละลาย",
  //         //       description: "...",
  //         //       file: "...",
  //         //       video: "...",
  //         //     },
  //         //   ],
  //         // },
  //       ],
  //     },
  //     {
  //       courseId: 5,
  //       name: "เคมีม.5-2",
  //       description: "วิชาเคมีระดับชั้น มัธยม 5 เทอม 2",
  //       price: 2900,
  //       time_max: 44,
  //       status: false,
  //       course_img: "src/assets/cardbg.jpg",
  //       leasonId: 1,
  //       leason: [
  //         {
  //           name: "บทที่ 1 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 1,
  //           subLeason: [
  //             {
  //               name: "การจำแนกสารรอบตัว",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //             {
  //               name: "test2",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test3",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test4",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test5",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //           ],
  //         },
  //         {
  //           name: "บทที่ 2 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 1,
  //           subLeason: [
  //             {
  //               name: "การจำแนกสารรอบตัว",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //             {
  //               name: "test2",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test3",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test4",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test5",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //           ],
  //         },

  //         {
  //           name: "บทที่ 3 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 2,
  //           subLeason: [
  //             {
  //               name: "สารละลาย",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       courseId: 6,
  //       name: "เคมีม.6",
  //       description: "วิชาเคมีระดับชั้น มัธยม 6",
  //       price: 2900,
  //       time_max: 44,
  //       status: false,
  //       course_img: "src/assets/cardbg.jpg",
  //       leasonId: 1,
  //       leason: [
  //         {
  //           name: "บทที่ 1 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 1,
  //           subLeason: [
  //             {
  //               name: "การจำแนกสารรอบตัว",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //             {
  //               name: "test2",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test3",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test4",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test5",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //           ],
  //         },
  //         {
  //           name: "บทที่ 2 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 1,
  //           subLeason: [
  //             {
  //               name: "การจำแนกสารรอบตัว",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //             {
  //               name: "test2",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test3",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test4",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test5",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //           ],
  //         },

  //         {
  //           name: "บทที่ 3 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 2,
  //           subLeason: [
  //             {
  //               name: "สารละลาย",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       courseId: 5,
  //       name: "เคมี A-level",
  //       description: "วิชาเคมี เตรียมสอบเข้ามหาวิทยาลัย",
  //       price: 2900,
  //       time_max: 44,
  //       status: false,
  //       course_img: "src/assets/cardbg.jpg",
  //       leasonId: 1,
  //       leason: [
  //         {
  //           name: "บทที่ 1 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 1,
  //           subLeason: [
  //             {
  //               name: "การจำแนกสารรอบตัว",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //             {
  //               name: "test2",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test3",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test4",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test5",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //           ],
  //         },
  //         {
  //           name: "บทที่ 2 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 1,
  //           subLeason: [
  //             {
  //               name: "การจำแนกสารรอบตัว",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //             {
  //               name: "test2",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test3",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test4",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //             {
  //               name: "test5",
  //               description: "...",
  //               file: "...",
  //               video: "....",
  //             },
  //           ],
  //         },

  //         {
  //           name: "บทที่ 3 การจำแนกสาร",
  //           description: "..",
  //           subLeasonId: 2,
  //           subLeason: [
  //             {
  //               name: "สารละลาย",
  //               description: "...",
  //               file: "...",
  //               video: "...",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ];

  return (
    <div className=" h-fit bg-C-white py-20">
      <div className="flex justify-between px-10">
        <h1 className="text-xl text-C-blue2 font-medium">คอร์สเรียนหลัก</h1>
        <a href="/maincourse" className=" hover:text-C-yellow3">
          ดูทั้งหมด
        </a>
      </div>

      {/* <div className="px-10 carousel carousel-center w-full overflow-x-scroll"> */}
      <div className="px-10 carousel flex flex-wrap w-full">
        <MockDataCourseCard />
      </div>
    </div>
  );
}
