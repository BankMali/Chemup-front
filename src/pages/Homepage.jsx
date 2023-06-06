import ButtonBlue from "../components/ButtonBlue";
import AboutTeacher from "../layouts/AboutTeacher";
import Footer from "../layouts/Footer";
import MainCourse from "../layouts/MainCourse";
import Navbar from "../layouts/Navbar";
import ReviewTeacher from "../layouts/ReviewTeacher";
import SubCourse from "../layouts/SubCourse";
import Subbar from "../layouts/Subbar";
import TestStudy from "../layouts/TestStudy";

export default function Homepage() {
  return (
    <div>
      <div className=" h-screen bg-C-white">
        <Navbar />
        <div className=" h-[350px] bg-slate-500"> head content</div>

        <Subbar />
        <MainCourse />
        <SubCourse />
        <TestStudy />
        <AboutTeacher />
        <ReviewTeacher />

        <Footer />
      </div>
    </div>
  );
}
