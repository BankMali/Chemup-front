// import { addLesson } from "../api/chemupApi";
import ButtonYellow from "../components/ButtonYellow";
import CourseCard from "../components/CourseCard";
import Inputbar from "../components/Inputbar";
import SubCourseCard from "../components/SubCourseCard";
import MockDataCourseCard from "../components/mockDataCourseCard";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import SubHeader from "../layouts/SubHeader";

export default function AllCoursespage() {
  return (
    <div>
      <Navbar />

      <SubHeader>คอร์สเรียนทั้งหมด</SubHeader>

      {/* <div className="Card">
        {course}
        {lesson}
      </div> */}

      {/* <div className="px-10 py-8 flex flex-wrap gap-10 bg-C-white">
        <MockDataCourseCard />
      </div> */}
      {/* <SubHeader>คอร์สเรียนบทย่อย</SubHeader> */}
      {/* 
      <div className="px-10 py-8 flex flex-wrap gap-10 bg-C-white"> */}
      {/* <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
        <SubCourseCard />
      </div>
      <Footer /> */}
    </div>
  );
}
