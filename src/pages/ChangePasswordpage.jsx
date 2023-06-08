import ButtonBlue from "../components/ButtonBlue";
import ButtonGhost from "../components/ButtonGhost";
import ButtonYellow from "../components/ButtonYellow";
import ForgotPasswordTextLink from "../components/ForgotPasswordTextLink";
import Inputbar from "../components/Inputbar";
import LoginTextLink from "../components/LoginTextLink";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

export default function ChangePasswordpage() {
  return (
    <div>
      <Navbar />

      {/* <div className=" bg-C-blue1 text-C-white text-xl h-[80px] flex justify-center items-center">
        <p>เข้าสู่ระบบ</p>
      </div> */}
      <div className="w-full h-full bg-C-white flex flex-col justify-start items-center py-10">
        <div className=" bg-white p-10 rounded-xl shadow-md w-[450px] flex flex-col justify-center items-center gap-4">
          <p className=" text-C-gray3 text-lg font-bold pb-4">
            เปลี่ยนรหัสผ่าน
          </p>
          <Inputbar title="Email"></Inputbar>
          <Inputbar title="Old Password"></Inputbar>
          <Inputbar title="New Password"></Inputbar>
          <Inputbar title="ConFirm New Password"></Inputbar>
          <div className=" flex gap-5 text-center justify-center">
            <ButtonBlue>ยืนยัน</ButtonBlue>
            <ButtonGhost>ยกเลิก</ButtonGhost>
          </div>
          <div className=" flex gap-2 justify-end w-full">
            <LoginTextLink />
            <ForgotPasswordTextLink />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
