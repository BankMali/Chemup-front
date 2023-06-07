import CourseCard from "../components/CourseCard";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

export default function MainCoursepage() {
  return (
    <div>
      <Navbar />
      <div className=" bg-C-blue1 text-C-white text-xl h-[80px] flex justify-center items-center">
        <p>คอร์สเรียนหลัก</p>
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
