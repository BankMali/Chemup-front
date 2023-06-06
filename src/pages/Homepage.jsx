import ButtonBlue from "../components/ButtonBlue";
import MainCourse from "../layouts/MainCourse";
import Navbar from "../layouts/Navbar";
import SubCourse from "../layouts/SubCourse";
import Subbar from "../layouts/Subbar";
import TestStudy from "../layouts/TestStudy";

export default function Homepage() {
  return (
    <div>
      <div className=" h-screen bg-C-white">
        <Navbar />
        <ButtonBlue>เข้าสู่ระบบ</ButtonBlue>

        <div className=" h-[500px]"> head content</div>

        <Subbar />
        <MainCourse />
        <SubCourse />
        <TestStudy />

        <div className=" h-[400px] bg-C-white">
          <div>pic</div>
          <div>info</div>
        </div>
        <div className=" h-[100px] bg-C-blue2">review</div>
        <footer className=" h-[200px] bg-C-gray3">footer</footer>
      </div>
    </div>
  );
}
