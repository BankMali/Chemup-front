import CourseCard from "../components/CourseCard";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import SubHeader from "../layouts/SubHeader";

export default function MainCoursepage() {
  return (
    <div>
      <Navbar />
      <SubHeader>คอร์สเรียนหลัก</SubHeader>

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
