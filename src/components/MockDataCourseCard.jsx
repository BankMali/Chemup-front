// import CourseCard from "./CourseCard";
import { getAllCourse, deleteCourse } from "../api/chemupApi";
import { useState, useEffect } from "react";
import CourseCard from "../components/CourseCard";

export default function MockDataCourseCard() {
  // const mockData = [
  //   {
  //     courseId: 1,
  //     name: "เคมีม.ต้น",
  //     description: "วิชาเคมีระดับชั้น มัธยมต้น",
  //     price: 2900,
  //     time_max: 44,
  //     status: false,
  //     course_img: "src/assets/cardbg.jpg",
  //     color: "bg-[ffffff]",
  //     lessonId: 1,
  //     lesson: [
  //       {
  //         name: "บทที่ 1 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 1,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "การจำแนกสารรอบตัว",
  //             description: "...",
  //             file: "...",
  //             time: 6,
  //           },
  //           {
  //             name: "test2",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test3",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test4",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test5",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },
  //       {
  //         name: "บทที่ 2 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 1,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "การจำแนกสารรอบตัว",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test2",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test3",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test4",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test5",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },

  //       {
  //         name: "บทที่ 3 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 2,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "สารละลาย",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },
  //       {
  //         name: "บทที่ 2 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 1,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "การจำแนกสารรอบตัว",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test2",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test3",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test4",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test5",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },

  //       {
  //         name: "บทที่ 3 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 2,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "สารละลาย",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     courseId: 2,
  //     name: "เคมีม.4-1",
  //     description: "วิชาเคมีระดับชั้น มัธยม 4 เทอม 1",
  //     price: 2900,
  //     time_max: 44,
  //     status: false,
  //     course_img: "src/assets/cardbg.jpg",
  //     lessonId: 1,
  //     lesson: [
  //       {
  //         name: "บทที่ 1 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 1,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "การจำแนกสารรอบตัว",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test2",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test3",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test4",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test5",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },
  //       {
  //         name: "บทที่ 2 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 1,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "การจำแนกสารรอบตัว",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test2",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test3",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test4",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test5",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },

  //       {
  //         name: "บทที่ 3 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 2,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "สารละลาย",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },
  //       {
  //         name: "บทที่ 1 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 1,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "การจำแนกสารรอบตัว",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test2",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test3",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test4",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test5",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },
  //       {
  //         name: "บทที่ 2 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 1,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "การจำแนกสารรอบตัว",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test2",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test3",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test4",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test5",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },

  //       {
  //         name: "บทที่ 3 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 2,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "สารละลาย",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     courseId: 3,
  //     name: "เคมีม.4-2",
  //     description: "วิชาเคมีระดับชั้น มัธยม 4 เทอม 2",
  //     price: 2900,
  //     time_max: 44,
  //     status: false,
  //     course_img: "src/assets/cardbg.jpg",
  //     lessonId: 1,
  //     lesson: [
  //       {
  //         name: "บทที่ 1 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 1,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "การจำแนกสารรอบตัว",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test2",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test3",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test4",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test5",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },
  //       {
  //         name: "บทที่ 2 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 1,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "การจำแนกสารรอบตัว",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test2",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test3",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test4",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test5",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },

  //       {
  //         name: "บทที่ 3 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 2,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "สารละลาย",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     courseId: 4,
  //     name: "เคมีม.5-1",
  //     description: "วิชาเคมีระดับชั้น มัธยม 5 เทอม 1",
  //     price: 2900,
  //     time_max: 44,
  //     status: false,
  //     course_img: "src/assets/cardbg.jpg",
  //     lessonId: 1,
  //     lesson: [
  //       {
  //         name: "บทที่ 1 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 1,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "การจำแนกสารรอบตัว",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test2",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test3",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test4",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test5",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     courseId: 5,
  //     name: "เคมีม.5-2",
  //     description: "วิชาเคมีระดับชั้น มัธยม 5 เทอม 2",
  //     price: 2900,
  //     time_max: 44,
  //     status: false,
  //     course_img: "src/assets/cardbg.jpg",
  //     lessonId: 1,
  //     lesson: [
  //       {
  //         name: "บทที่ 1 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 1,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "การจำแนกสารรอบตัว",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test2",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test3",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test4",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test5",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },
  //       {
  //         name: "บทที่ 2 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 1,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "การจำแนกสารรอบตัว",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test2",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test3",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test4",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test5",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },

  //       {
  //         name: "บทที่ 3 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 2,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "สารละลาย",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     courseId: 6,
  //     name: "เคมีม.6",
  //     description: "วิชาเคมีระดับชั้น มัธยม 6",
  //     price: 2900,
  //     time_max: 44,
  //     status: false,
  //     course_img: "src/assets/cardbg.jpg",
  //     lessonId: 1,
  //     lesson: [
  //       {
  //         name: "บทที่ 1 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 1,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "การจำแนกสารรอบตัว",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test2",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test3",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test4",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test5",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },
  //       {
  //         name: "บทที่ 2 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 1,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "การจำแนกสารรอบตัว",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test2",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test3",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test4",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test5",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },

  //       {
  //         name: "บทที่ 3 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 2,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "สารละลาย",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     courseId: 5,
  //     name: "เคมี A-level",
  //     description: "วิชาเคมี เตรียมสอบเข้ามหาวิทยาลัย",
  //     price: 2900,
  //     time_max: 44,
  //     status: false,
  //     course_img: "src/assets/cardbg.jpg",
  //     lessonId: 1,
  //     lesson: [
  //       {
  //         name: "บทที่ 1 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 1,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "การจำแนกสารรอบตัว",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test2",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test3",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test4",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test5",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },
  //       {
  //         name: "บทที่ 2 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 1,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "การจำแนกสารรอบตัว",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test2",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test3",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test4",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //           {
  //             name: "test5",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },

  //       {
  //         name: "บทที่ 3 การจำแนกสาร",
  //         description: "..",
  //         subLeasonId: 2,
  //         time: 10,
  //         subLeason: [
  //           {
  //             name: "สารละลาย",
  //             description: "...",
  //             file: "...",

  //             time: 6,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  const [course, setCourse] = useState([]);
  //  const input = {id}

  // const hdlRemove = (index) => {
  //   const list = [...course];
  //   deleteCourse(list[index].id);
  //   list.splice(index, 1);
  //   setCourse(list);
  // };

  // const hdlRemove = (index) => {
  //   const list = [...course];
  //   list.splice(index, 1);
  //   setCourse(list);
  // };

  useEffect(() => {
    getAllCourse().then((rs) => {
      // console.log(rs.data);
      setCourse(rs.data);
    });
  }, []);

  return (
    <>
      {course.map((el, index) => (
        <>
          <CourseCard
            key={index}
            courseName={el.name}
            courseDescription={el.description}
            courseTimeMax={el.timeMax}
            coursePrice={el.price}
            lesson={el.Lessons.map((el) => (
              <li>{el.lessonName}</li>
            ))}
            // onClickRemove={() => hdlRemove(index)}
            onClickEdit=""

            // name="id"
          />

          {/* loop container */}
          {/* <div key={index}>
            <h2>{el.name}</h2>
            <h2>{el.description}</h2>
            <h2>{el.Lessons.map((el) => el.lessonName)}</h2>
            <h2>{el.price}</h2>
            <h2>{el.timeMax}</h2>
            <button onClick={() => hdlRemove(index)}>Remove</button>
          </div> */}
        </>
      ))}
    </>
  );
}
