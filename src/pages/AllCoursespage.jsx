// // import { addLesson } from "../api/chemupApi";
// import ButtonYellow from "../components/ButtonYellow";
// import CourseCard from "../components/CourseCard";
// import Inputbar from "../components/Inputbar";
import SubCourseCard from "../components/SubCourseCard";
// import MockDataCourseCard from "../components/mockDataCourseCard";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import SubHeader from "../layouts/SubHeader";
import { getAllCourse, deleteCourse } from "../api/chemupApi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CourseCard from "../components/CourseCard";
import MockDataCourseCard from "../components/mockDataCourseCard";

export default function AllCoursespage() {
  const [course, setCourse] = useState([]);

  const hdlRemove = (index) => {
    const list = [...course];
    console.log(list[1].id);
    deleteCourse(list[index].id);
    list.splice(index, 1);
    setCourse(list);
    // console.log(list);
  };

  // const hdlRemove

  useEffect(() => {
    getAllCourse().then((rs) => {
      console.log(rs.data);
      setCourse(rs.data);
    });
  }, []);
  return (
    <div>
      <Navbar />

      <SubHeader>คอร์สเรียนทั้งหมด</SubHeader>

      <div className="px-10 py-8 flex flex-wrap gap-10 bg-C-white">
        <MockDataCourseCard />
      </div>

      <SubHeader>คอร์สเรียนบทย่อย</SubHeader>

      <div className="px-10 py-8 flex flex-wrap gap-10 bg-C-white">
        {" "}
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
      </div>

      <Footer />
    </div>
  );
}

{
  /* <div className="Card">
        {course}
        {lesson}
      </div> */
}

{
  /* <div className="px-10 py-8 flex flex-wrap gap-10 bg-C-white">
        <MockDataCourseCard />
      </div> */
}
{
  /* <SubHeader>คอร์สเรียนบทย่อย</SubHeader> */
}
{
  /* 
      <div className="px-10 py-8 flex flex-wrap gap-10 bg-C-white"> */
}
{
  /* <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
      </div>
      // <Footer /> */
}
