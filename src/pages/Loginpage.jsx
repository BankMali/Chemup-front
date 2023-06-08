import ButtonBlue from "../components/ButtonBlue";
import ButtonGhost from "../components/ButtonGhost";
import ButtonYellow from "../components/ButtonYellow";
import ForgotPasswordTextLink from "../components/ForgotPasswordTextLink";
import Inputbar from "../components/Inputbar";
import RegisterTextLink from "../components/RegisterTextLink";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

export default function Loginpage() {
  return (
    <div>
      <Navbar />

      {/* <div className=" bg-C-blue1 text-C-white text-xl h-[80px] flex justify-center items-center">
        <p>เข้าสู่ระบบ</p>
      </div> */}
      <div className="w-full h-full bg-C-white flex flex-col justify-start items-center py-10">
        <div className=" bg-white p-10 rounded-xl shadow-md w-[450px] flex flex-col justify-center items-center gap-4">
          <p className=" text-C-gray3 text-lg font-bold pb-4">เข้าสู่ระบบ</p>
          <Inputbar title="Email"></Inputbar>
          <Inputbar title="Password"></Inputbar>
          <div className=" flex gap-5 text-center justify-center">
            <ButtonBlue>เข้าสู่ระบบ</ButtonBlue>
            <ButtonGhost>ยกเลิก</ButtonGhost>
          </div>
          <div className=" flex gap-2 justify-end w-full">
            <RegisterTextLink />
            <ForgotPasswordTextLink />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
