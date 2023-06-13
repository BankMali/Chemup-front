import AboutTeacher from "../layouts/AboutTeacher";
import Footer from "../layouts/Footer";
import HeadContent from "../layouts/HeadContent";
import MainCourse from "../layouts/MainCourse";
import Navbar from "../layouts/Navbar";
import ReviewTeacher from "../layouts/ReviewTeacher";
import SubCourse from "../layouts/SubCourse";
import Subbar from "../layouts/Subbar";
import DemoTeach from "../layouts/DemoTeach";

export default function Homepage() {
  return (
    <div>
      <div className=" h-fit bg-C-white">
        <Navbar />
        <HeadContent />
        <Subbar />
        <MainCourse />
        <SubCourse />
        <DemoTeach />
        <AboutTeacher />
        <ReviewTeacher />
        <Footer />
        {/* 
        <div className=" h-28 w-28  ">
          <div className=" bg-[url('/src/assets/eye.png')] h-fit w-fit flex bg-cover bg-center">
            <div className="flex-1 h-fit w-fit animate-spin">
              <img src="src/assets/reacticon.png" alt="" className="scale-50" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
