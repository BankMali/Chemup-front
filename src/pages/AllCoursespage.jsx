// // import { addLesson } from "../api/chemupApi";
// import ButtonYellow from "../components/ButtonYellow";
// import CourseCard from "../components/CourseCard";
// import Inputbar from "../components/Inputbar";
import SubCourseCard from "../components/SubCourseCard";
// import MockDataCourseCard from "../components/mockDataCourseCard";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import SubHeader from "../layouts/SubHeader";
import { getAllCourse } from "../api/chemupApi";
import { useState, useEffect } from "react";
import CourseCard from "../components/CourseCard";

export default function AllCoursespage() {
  const [course, setCourse] = useState([]);

  const hdlRemove = (index) => {
    const list = [...course];
    deleteCourse(list[index].id);
    list.splice(index, 1);
    setCourse(list);
    console.log(list);
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
        {course.map((el, index) => (
          <>
            <CourseCard
              // id=""
              key={index}
              courseName={el.name}
              courseDescription={el.description}
              courseTimeMax={el.timeMax}
              coursePrice={el.price}
              lesson={el.Lessons.map((el) => (
                <li>{el.lessonName}</li>
              ))}
              onClickRemove={() => hdlRemove(index)}
              onClickEdit=""
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
