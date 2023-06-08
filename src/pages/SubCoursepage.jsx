import SubCourseCard from "../components/SubCourseCard";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import SubHeader from "../layouts/SubHeader";

export default function SubCoursepage() {
  return (
    <div>
      <Navbar />
      <SubHeader>คอร์สเรียนบทย่อย</SubHeader>

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
