import { useState } from "react";
import ButtonBlue from "../components/ButtonBlue";
import ButtonGhost from "../components/ButtonGhost";
import ForgotPasswordTextLink from "../components/ForgotPasswordTextLink";
import Inputbar from "../components/Inputbar";
import RegisterTextLink from "../components/RegisterTextLink";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import axios from "axios";
import InputErrorMessage from "../components/InputErrorMessage";
import { useAuth } from "../contexts/AuthContext";
import { login, getMe } from "../api/chemupApi";
import { useNavigate } from "react-router-dom";

export default function Loginpage() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
    // validation

    login(input)
      .then((rs) => {
        // console.log(rs.data.token)
        localStorage.setItem("token", rs.data.token);
        let token = localStorage.getItem("token");
        return getMe(token);
      })
      .then((rs) => {
        console.log(rs.data);
        setUser(rs.data);
        navigate("/");
        // console.log(rs.data);
      })
      //   .catch((err) => alert(err.response.data.error || err.message));
      .catch((err) => alert("Error JA"));
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={hdlSubmit}>
        <div className="w-full h-full bg-C-white flex flex-col justify-start items-center py-10">
          <div className=" bg-white p-10 rounded-xl shadow-md w-[450px] flex flex-col justify-center items-center gap-1">
            <p className=" text-C-gray3 text-lg font-bold pb-4">เข้าสู่ระบบ</p>
            <Inputbar
              value={input.email}
              onChange={hdlChangeInput}
              //   error={errorEmail}
              name="email"
              title="Email"
            />
            <InputErrorMessage message={""} />
            <Inputbar
              value={input.password}
              onChange={hdlChangeInput}
              //   error={errorPassword}
              name="password"
              title="Password"></Inputbar>
            <InputErrorMessage message={""} />
            <div className=" flex gap-5 text-center justify-center">
              <ButtonBlue type="submit">เข้าสู่ระบบ</ButtonBlue>
              <ButtonGhost type="button">ยกเลิก</ButtonGhost>
            </div>
            <div className=" flex gap-2 justify-end w-full pt-5">
              <RegisterTextLink />
              <ForgotPasswordTextLink />
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
