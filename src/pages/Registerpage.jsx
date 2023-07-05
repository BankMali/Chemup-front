import React, { useState } from "react";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import ButtonBlue from "../components/ButtonBlue";
import ButtonGhost from "../components/ButtonGhost";
import Inputbar from "../components/Inputbar";
import LoginTextLink from "../components/LoginTextLink";
import axios from "axios";
import InputErrorMessage from "../components/InputErrorMessage";
import InputTextArea from "./InputTextArea";
import { register } from "../api/chemupApi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Registerpage() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    address: "",
    password: "",
    confirmPassword: "",
    email: "",
    mobile: "",
    schoolName: "",
  });

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = (e) => {
    const {
      firstName,
      lastName,
      address,
      password,
      confirmPassword,
      email,
      mobile,
      schoolName,
    } = input;
    e.preventDefault();

    register({
      firstName,
      lastName,
      address,
      password,
      email,
      mobile,
      schoolName,
      confirmPassword,
    })
      .then((rs) => {
        console.log(rs);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  //   const [name, setName] = useState("");
  //   const [surname, setSurName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confirmpassword, setConfirmPassword] = useState("");
  //   const [mobile, setMobile] = useState("");
  //   const [school, setSchool] = useState("");
  //   const [address, setAddress] = useState("");

  //   ///// set error
  //   const [errorName, setErrorName] = useState(); //
  //   const [errorSurname, setErrorSurname] = useState(); //
  //   const [errorConfirmPassword, setErrorConfirmPassword] = useState(); //
  //   const [errorMobile, setErrorMobile] = useState();
  //   const [errorSchool, setErrorSchool] = useState();
  //   const [errorAddress, setErrorAddress] = useState();
  //   const [errorEmail, setErrorEmail] = useState(); //
  //   const [errorPassword, setErrorPassword] = useState(); //

  //   ///handle change

  //   const handleChangeFirstnameForm = (event, setEvent) => {
  //     setEvent(event.target.value);
  //     // console.log(event);
  //     if (!event.target.value.trim() && event.target.name === "firstname") {
  //       setErrorName("Firstname is required");
  //     } else {
  //       setErrorName("");
  //     }
  //   };

  //   const handleChangeSurnameForm = (event, setEvent) => {
  //     setEvent(event.target.value);
  //     // console.log(event);
  //     if (!event.target.value.trim() && event.target.name === "lastname") {
  //       setErrorSurname("Lastname is required");
  //     } else {
  //       setErrorSurname("");
  //     }
  //   };

  //   const handleChangeMobileForm = (event, setEvent) => {
  //     setEvent(event.target.value);
  //     // console.log(event);
  //     if (!event.target.value.trim() && event.target.name === "mobile") {
  //       setErrorMobile("Mobile is required");
  //     } else {
  //       setErrorMobile("");
  //     }
  //   };

  //   const handleChangeAddressForm = (event, setEvent) => {
  //     setEvent(event.target.value);
  //     // console.log(event);
  //     if (!event.target.value.trim() && event.target.name === "address") {
  //       setErrorAddress("Address is required");
  //     } else {
  //       setErrorAddress("");
  //     }
  //   };

  //   const handleChangeSchoolForm = (event, setEvent) => {
  //     setEvent(event.target.value);
  //     // console.log(event);
  //     // if (!event.target.value.trim() && event.target.name === "school") {
  //     //   setErrorSchool("School is required");
  //     // } else {
  //     //   setErrorSchool("");
  //     // }
  //   };

  //   const handleChangeConfirmPasswordForm = (event, setEvent) => {
  //     setEvent(event.target.value);
  //     // console.log(event);
  //     if (!event.target.value.trim() && event.target.name === "confirmpassword") {
  //       setErrorConfirmPassword("Confirm Passowrd is required");
  //     } else if (event.target.value !== password)
  //       setErrorConfirmPassword("Confirm Password should be equle to Password");
  //     else {
  //       setErrorConfirmPassword("");
  //     }
  //   };

  //   const handleChangePasswordForm = (event, setEvent) => {
  //     setEvent(event.target.value);

  //     if (!event.target.value.trim() && event.target.name === "password") {
  //       setErrorPassword("Password is required");
  //     }
  //     // else if (event.target.value !== confirmpassword)
  //     //   setErrorPassword("Confirm Password should be equle to Password");
  //     else {
  //       setErrorPassword("");
  //     }
  //   };

  //   const handleChangeEmailForm = (event, setEvent) => {
  //     setEvent(event.target.value);
  //     // console.log(event);
  //     if (!event.target.value.trim() && event.target.name === "email") {
  //       setErrorEmail("Email is required");
  //     } else {
  //       setErrorEmail("");
  //     }
  //   };

  //   //   const onChangeForm = (event, setFormName) => {
  //   //     setFormName(event.target.value);
  //   //   };

  //   const validateform = () => {
  //     if (!name.trim()) {
  //       return false;
  //     }
  //     if (!surname.trim()) {
  //       return false;
  //     }
  //     return true;
  //   };

  //   const onClickSubmitForm = async (event) => {
  //     event.preventDefault();
  //     const params = {
  //       firstName: name,
  //       lastName: surname,
  //       password: password,
  //       email: email,
  //       confirmPassword: confirmpassword,
  //       mobile: mobile,
  //       address: address,
  //       schoolName: school,
  //     };
  //     try {
  //       if (validateform()) {
  //         const res = await axios.post(
  //           "http://localhost:8888/auth/register",
  //           params
  //         );
  //         console.log(res);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  return (
    <div>
      <div>
        <Navbar />

        <form onSubmit={hdlSubmit}>
          <div className="w-full h-full bg-C-white flex flex-col justify-start items-center py-10">
            <div className=" bg-white p-10 rounded-xl shadow-md w-[450px] flex flex-col justify-center items-center gap-1">
              <p className=" text-C-gray3 text-lg font-bold pb-4">
                สมัครสมาชิก
              </p>
              <div className="flex justify-center items-center">
                <div className=" mr-2">
                  <Inputbar
                    value={input.firstName}
                    onChange={hdlChangeInput}
                    title="ชื่อ*"
                    // error={errorName}
                    name="firstName"
                  />
                  <InputErrorMessage message="" />
                </div>
                <div>
                  <Inputbar
                    value={input.lastName}
                    // error={errorSurname}
                    onChange={hdlChangeInput}
                    name="lastName"
                    title="นามสกุล*"
                  />
                  <InputErrorMessage message="" />
                </div>
              </div>

              <Inputbar
                value={input.email}
                onChange={hdlChangeInput}
                // error={errorEmail}
                name="email"
                title="Email"
              />
              <InputErrorMessage message="" />
              <Inputbar
                value={input.password}
                onChange={hdlChangeInput}
                type="password"
                title="Password*"
                // error={errorPassword}
                name="password"
              />
              <InputErrorMessage message="" />
              <Inputbar
                value={input.confirmPassword}
                onChange={hdlChangeInput}
                type="confirmPassword"
                title="Confirm Password*"
                // error={errorConfirmPassword}
                name="confirmPassword"
              />
              <InputErrorMessage message="" />

              <InputTextArea
                value={input.address}
                onChange={hdlChangeInput}
                // error={errorAddress}
                name="address"
                placeholder="ที่อยู่สำหรับจัดส่ง*"
              />
              <InputErrorMessage message="" />
              <Inputbar
                value={input.mobile}
                // error={errorMobile}
                name="mobile"
                onChange={hdlChangeInput}
                title="เบอร์ติดต่อ*"
              />
              <InputErrorMessage message="" />
              <Inputbar
                value={input.schoolName}
                // error={errorSchool}
                name="schoolName"
                onChange={hdlChangeInput}
                title="โรงเรียน หรือ บริษัท"
              />
              <InputErrorMessage message="" />

              <div className=" flex gap-5 text-center justify-center">
                <ButtonBlue type="submit">สมัครสมาชิก</ButtonBlue>
                <Link to="/">
                  <ButtonGhost type="button">ยกเลิก</ButtonGhost>
                </Link>
              </div>
              <div className=" flex gap-2 justify-end w-full pt-5">
                <LoginTextLink />
              </div>
            </div>
          </div>
        </form>

        <Footer />
      </div>
    </div>
  );
}
