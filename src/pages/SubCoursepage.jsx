import SubCourseCard from "../components/SubCourseCard";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

export default function SubCoursepage() {
  return (
    <div>
      <Navbar />
      <div className=" bg-C-blue1 text-C-white text-xl h-[80px] flex justify-center items-center">
        <p>คอร์สเรียนบทย่อย</p>
      </div>
      <div className="px-10 py-8 flex flex-wrap gap-10 bg-C-white">
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
