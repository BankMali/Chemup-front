import AboutTeacher from "../layouts/AboutTeacher";
import Footer from "../layouts/Footer";
import HeadContent from "../layouts/HeadContent";
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
        <HeadContent />
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
