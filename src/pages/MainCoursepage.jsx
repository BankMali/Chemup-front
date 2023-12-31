import CourseCard from "../components/CourseCard";
import Inputbar from "../components/Inputbar";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import SubHeader from "../layouts/SubHeader";

export default function MainCoursepage() {
  const mockData = [
    {
      courseId: 1,
      name: "เคมีม.ต้น",
      description: "วิชาเคมีระดับชั้น มัธยมต้น",
      price: 2900,
      time_max: 44,
      status: false,
      course_img: "src/assets/cardbg.jpg",
      leasonId: 1,
      leason: [
        {
          name: "บทที่ 1 การจำแนกสาร",
          description: "..",
          subLeasonId: 1,
          subLeason: [
            {
              name: "การจำแนกสารรอบตัว",
              description: "...",
              file: "...",
              video: "...",
            },
            {
              name: "test2",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test3",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test4",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test5",
              description: "...",
              file: "...",
              video: "....",
            },
          ],
        },
        {
          name: "บทที่ 2 การจำแนกสาร",
          description: "..",
          subLeasonId: 1,
          subLeason: [
            {
              name: "การจำแนกสารรอบตัว",
              description: "...",
              file: "...",
              video: "...",
            },
            {
              name: "test2",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test3",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test4",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test5",
              description: "...",
              file: "...",
              video: "....",
            },
          ],
        },

        {
          name: "บทที่ 3 การจำแนกสาร",
          description: "..",
          subLeasonId: 2,
          subLeason: [
            {
              name: "สารละลาย",
              description: "...",
              file: "...",
              video: "...",
            },
          ],
        },
        {
          name: "บทที่ 2 การจำแนกสาร",
          description: "..",
          subLeasonId: 1,
          subLeason: [
            {
              name: "การจำแนกสารรอบตัว",
              description: "...",
              file: "...",
              video: "...",
            },
            {
              name: "test2",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test3",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test4",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test5",
              description: "...",
              file: "...",
              video: "....",
            },
          ],
        },

        {
          name: "บทที่ 3 การจำแนกสาร",
          description: "..",
          subLeasonId: 2,
          subLeason: [
            {
              name: "สารละลาย",
              description: "...",
              file: "...",
              video: "...",
            },
          ],
        },
      ],
    },
    {
      courseId: 2,
      name: "เคมีม.4-1",
      description: "วิชาเคมีระดับชั้น มัธยม 4 เทอม 1",
      price: 2900,
      time_max: 44,
      status: false,
      course_img: "src/assets/cardbg.jpg",
      leasonId: 1,
      leason: [
        {
          name: "บทที่ 1 การจำแนกสาร",
          description: "..",
          subLeasonId: 1,
          subLeason: [
            {
              name: "การจำแนกสารรอบตัว",
              description: "...",
              file: "...",
              video: "...",
            },
            {
              name: "test2",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test3",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test4",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test5",
              description: "...",
              file: "...",
              video: "....",
            },
          ],
        },
        {
          name: "บทที่ 2 การจำแนกสาร",
          description: "..",
          subLeasonId: 1,
          subLeason: [
            {
              name: "การจำแนกสารรอบตัว",
              description: "...",
              file: "...",
              video: "...",
            },
            {
              name: "test2",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test3",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test4",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test5",
              description: "...",
              file: "...",
              video: "....",
            },
          ],
        },

        {
          name: "บทที่ 3 การจำแนกสาร",
          description: "..",
          subLeasonId: 2,
          subLeason: [
            {
              name: "สารละลาย",
              description: "...",
              file: "...",
              video: "...",
            },
          ],
        },
        {
          name: "บทที่ 1 การจำแนกสาร",
          description: "..",
          subLeasonId: 1,
          subLeason: [
            {
              name: "การจำแนกสารรอบตัว",
              description: "...",
              file: "...",
              video: "...",
            },
            {
              name: "test2",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test3",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test4",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test5",
              description: "...",
              file: "...",
              video: "....",
            },
          ],
        },
        {
          name: "บทที่ 2 การจำแนกสาร",
          description: "..",
          subLeasonId: 1,
          subLeason: [
            {
              name: "การจำแนกสารรอบตัว",
              description: "...",
              file: "...",
              video: "...",
            },
            {
              name: "test2",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test3",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test4",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test5",
              description: "...",
              file: "...",
              video: "....",
            },
          ],
        },

        {
          name: "บทที่ 3 การจำแนกสาร",
          description: "..",
          subLeasonId: 2,
          subLeason: [
            {
              name: "สารละลาย",
              description: "...",
              file: "...",
              video: "...",
            },
          ],
        },
      ],
    },
    {
      courseId: 3,
      name: "เคมีม.4-2",
      description: "วิชาเคมีระดับชั้น มัธยม 4 เทอม 2",
      price: 2900,
      time_max: 44,
      status: false,
      course_img: "src/assets/cardbg.jpg",
      leasonId: 1,
      leason: [
        {
          name: "บทที่ 1 การจำแนกสาร",
          description: "..",
          subLeasonId: 1,
          subLeason: [
            {
              name: "การจำแนกสารรอบตัว",
              description: "...",
              file: "...",
              video: "...",
            },
            {
              name: "test2",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test3",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test4",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test5",
              description: "...",
              file: "...",
              video: "....",
            },
          ],
        },
        {
          name: "บทที่ 2 การจำแนกสาร",
          description: "..",
          subLeasonId: 1,
          subLeason: [
            {
              name: "การจำแนกสารรอบตัว",
              description: "...",
              file: "...",
              video: "...",
            },
            {
              name: "test2",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test3",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test4",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test5",
              description: "...",
              file: "...",
              video: "....",
            },
          ],
        },

        {
          name: "บทที่ 3 การจำแนกสาร",
          description: "..",
          subLeasonId: 2,
          subLeason: [
            {
              name: "สารละลาย",
              description: "...",
              file: "...",
              video: "...",
            },
          ],
        },
      ],
    },
    {
      courseId: 4,
      name: "เคมีม.5-1",
      description: "วิชาเคมีระดับชั้น มัธยม 5 เทอม 1",
      price: 2900,
      time_max: 44,
      status: false,
      course_img: "src/assets/cardbg.jpg",
      leasonId: 1,
      leason: [
        {
          name: "บทที่ 1 การจำแนกสาร",
          description: "..",
          subLeasonId: 1,
          subLeason: [
            {
              name: "การจำแนกสารรอบตัว",
              description: "...",
              file: "...",
              video: "...",
            },
            {
              name: "test2",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test3",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test4",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test5",
              description: "...",
              file: "...",
              video: "....",
            },
          ],
        },
        // {
        //   name: "บทที่ 2 การจำแนกสาร",
        //   description: "..",
        //   subLeasonId: 1,
        //   subLeason: [
        //     {
        //       name: "การจำแนกสารรอบตัว",
        //       description: "...",
        //       file: "...",
        //       video: "...",
        //     },
        //     {
        //       name: "test2",
        //       description: "...",
        //       file: "...",
        //       video: "....",
        //     },
        //     {
        //       name: "test3",
        //       description: "...",
        //       file: "...",
        //       video: "....",
        //     },
        //     {
        //       name: "test4",
        //       description: "...",
        //       file: "...",
        //       video: "....",
        //     },
        //     {
        //       name: "test5",
        //       description: "...",
        //       file: "...",
        //       video: "....",
        //     },
        //   ],
        // },

        // {
        //   name: "บทที่ 3 การจำแนกสาร",
        //   description: "..",
        //   subLeasonId: 2,
        //   subLeason: [
        //     {
        //       name: "สารละลาย",
        //       description: "...",
        //       file: "...",
        //       video: "...",
        //     },
        //   ],
        // },
      ],
    },
    {
      courseId: 5,
      name: "เคมีม.5-2",
      description: "วิชาเคมีระดับชั้น มัธยม 5 เทอม 2",
      price: 2900,
      time_max: 44,
      status: false,
      course_img: "src/assets/cardbg.jpg",
      leasonId: 1,
      leason: [
        {
          name: "บทที่ 1 การจำแนกสาร",
          description: "..",
          subLeasonId: 1,
          subLeason: [
            {
              name: "การจำแนกสารรอบตัว",
              description: "...",
              file: "...",
              video: "...",
            },
            {
              name: "test2",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test3",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test4",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test5",
              description: "...",
              file: "...",
              video: "....",
            },
          ],
        },
        {
          name: "บทที่ 2 การจำแนกสาร",
          description: "..",
          subLeasonId: 1,
          subLeason: [
            {
              name: "การจำแนกสารรอบตัว",
              description: "...",
              file: "...",
              video: "...",
            },
            {
              name: "test2",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test3",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test4",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test5",
              description: "...",
              file: "...",
              video: "....",
            },
          ],
        },

        {
          name: "บทที่ 3 การจำแนกสาร",
          description: "..",
          subLeasonId: 2,
          subLeason: [
            {
              name: "สารละลาย",
              description: "...",
              file: "...",
              video: "...",
            },
          ],
        },
      ],
    },
    {
      courseId: 6,
      name: "เคมีม.6",
      description: "วิชาเคมีระดับชั้น มัธยม 6",
      price: 2900,
      time_max: 44,
      status: false,
      course_img: "src/assets/cardbg.jpg",
      leasonId: 1,
      leason: [
        {
          name: "บทที่ 1 การจำแนกสาร",
          description: "..",
          subLeasonId: 1,
          subLeason: [
            {
              name: "การจำแนกสารรอบตัว",
              description: "...",
              file: "...",
              video: "...",
            },
            {
              name: "test2",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test3",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test4",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test5",
              description: "...",
              file: "...",
              video: "....",
            },
          ],
        },
        {
          name: "บทที่ 2 การจำแนกสาร",
          description: "..",
          subLeasonId: 1,
          subLeason: [
            {
              name: "การจำแนกสารรอบตัว",
              description: "...",
              file: "...",
              video: "...",
            },
            {
              name: "test2",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test3",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test4",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test5",
              description: "...",
              file: "...",
              video: "....",
            },
          ],
        },

        {
          name: "บทที่ 3 การจำแนกสาร",
          description: "..",
          subLeasonId: 2,
          subLeason: [
            {
              name: "สารละลาย",
              description: "...",
              file: "...",
              video: "...",
            },
          ],
        },
      ],
    },
    {
      courseId: 5,
      name: "เคมี A-level",
      description: "วิชาเคมี เตรียมสอบเข้ามหาวิทยาลัย",
      price: 2900,
      time_max: 44,
      status: false,
      course_img: "src/assets/cardbg.jpg",
      leasonId: 1,
      leason: [
        {
          name: "บทที่ 1 การจำแนกสาร",
          description: "..",
          subLeasonId: 1,
          subLeason: [
            {
              name: "การจำแนกสารรอบตัว",
              description: "...",
              file: "...",
              video: "...",
            },
            {
              name: "test2",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test3",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test4",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test5",
              description: "...",
              file: "...",
              video: "....",
            },
          ],
        },
        {
          name: "บทที่ 2 การจำแนกสาร",
          description: "..",
          subLeasonId: 1,
          subLeason: [
            {
              name: "การจำแนกสารรอบตัว",
              description: "...",
              file: "...",
              video: "...",
            },
            {
              name: "test2",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test3",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test4",
              description: "...",
              file: "...",
              video: "....",
            },
            {
              name: "test5",
              description: "...",
              file: "...",
              video: "....",
            },
          ],
        },

        {
          name: "บทที่ 3 การจำแนกสาร",
          description: "..",
          subLeasonId: 2,
          subLeason: [
            {
              name: "สารละลาย",
              description: "...",
              file: "...",
              video: "...",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <Navbar />

      <SubHeader>คอร์สเรียนหลัก</SubHeader>

      <div className="px-10 py-8 flex flex-wrap gap-10 bg-C-white">
        {mockData.map((item) => (
          <CourseCard
            courseName={item.name}
            courseDescription={item.description}
            courseTimeMax={item.time_max}
            coursePrice={item.price}
            leason={item.leason}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
