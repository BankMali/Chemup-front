import { useState, useEffect } from "react";
import ButtonYellow from "../components/ButtonYellow";
import Inputbar from "../components/Inputbar";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import SubHeader from "../layouts/SubHeader";
import { BiTimeFive } from "react-icons/bi";
// import MockDataCourseCard from "../components/mockDataCours/eCard";
import {
  getCourseById,
  getLessonById,
  updateCourse,
  updateLesson,
} from "../api/chemupApi";
import { useNavigate, useParams } from "react-router-dom";
import ButtonGhostXs from "../components/ButtonGhostXs";
// import MockDataCourseCard from "../components/mockDataCourseCard";

export default function EditCourse() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [input, setInput] = useState({
    name: "",
    description: "",
    price: "",
    timeMax: "",
  });

  const [lesson, setLesson] = useState([{ lessonName: "" }]);

  useEffect(() => {
    getCourseById(id).then((rs) => {
      setInput(rs.data);
      console.log(rs.data);
    });
    getLessonById(id).then((rs) => {
      setLesson(rs.data);
    });
  }, [id]);

  const hdlChangeLesson = (e, index) => {
    const { name, value } = e.target;
    const list = [...lesson];
    list[index][name] = value;
    setLesson(list);
    // console.log(value);
  };

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  const hdlAddclick = () => {
    // console.log("dwdwdwdwwwdwdwdwdwdwdw");
    setLesson([...lesson, { lessonName: "" }]);
  };

  const hdlRemove = (index) => {
    const list = [...lesson];
    list.splice(index, 1);
    setLesson(list);
  };

  const hdlSubmit = (e) => {
    // let { name, description, price, timeMax } = input;
    // let token = localStorage.getItem("token");

    e.preventDefault();
    updateCourse(id, {
      name: input.name,
      description: input.description,
      price: input.price,
      timeMax: input.timeMax,
    })
      .then(updateLesson(id, lesson))
      .then((rs) => {
        console.log(rs);
        navigate("/admin");
      });
  };

  return (
    <div>
      <Navbar />
      <SubHeader>EDIT</SubHeader>
      <form>
        <div className="flex justify-center gap-5 m-10">
          <div className="flex flex-col w-[35%] text-center gap-2">
            <p>แก้ไขคอร์สเรียนใหม่</p>
            <div className="">
              <Inputbar
                value={input.name}
                // error={errorSurname}
                onChange={hdlChangeInput}
                name="name"
                title="ชื่อคอร์ส"
              />
            </div>
            <div className="">
              <Inputbar
                value={input.description}
                // error={errorSurname}
                onChange={hdlChangeInput}
                name="description"
                title="คำอธิบาย"
              />
            </div>
            <div className="gap-2 fle flex-col">
              <label for="cars">เพิ่มบท</label>

              {lesson.map((item, index) => (
                <div className="flex-col gap-2" key={index}>
                  <div>
                    <Inputbar
                      value={item.lessonName}
                      // error={errorSurname}
                      onChange={(e) => hdlChangeLesson(e, index)}
                      name="lessonName"
                      title="name"
                    />
                  </div>
                  <div className="flex justify-around my-2">
                    {lesson.length - 1 === index && (
                      <ButtonGhostXs onClick={hdlAddclick}>เพิ่ม</ButtonGhostXs>
                    )}
                    {lesson.length !== 1 && (
                      <ButtonGhostXs onClick={() => hdlRemove(index)}>
                        ลบ
                      </ButtonGhostXs>
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-4 flex gap-5">
                <Inputbar
                  value={input.timeMax}
                  // error={errorSurname}
                  onChange={hdlChangeInput}
                  name="timeMax"
                  title="ชั่วโมงเรียน"
                />
                <Inputbar
                  value={input.price}
                  // error={errorSurname}
                  onChange={hdlChangeInput}
                  name="price"
                  title="ราคา"
                />
              </div>
            </div>
          </div>

          <div className="h-auto w-[280px] flex flex-col items-center gap-5 scale-90 ">
            <div className="h-auto w-[280px] flex flex-col justify-between  rounded-3xl shadow-lg hover:scale-105 active:scale-100 transition duration-200 carousel-item">
              <div className=" h-[80px] rounded-t-3xl bg-[url('/src/assets/cardbg.jpg')] bg-cover relative">
                <div className=" flex justify-center w-full absolute top-[18px] right-0 left-0 bottom-0 ">
                  <img
                    src="src/assets/ChemUplogoC.png"
                    alt="Clogo"
                    className="h-32 "
                  />
                </div>
              </div>
              <div className=" bg-[#038ECE] h-[270px] pt-20 text-center px-5">
                <p className=" text-2xl font-bold text-C-white">
                  {input.name || "ชื่อคอร์ส"}
                </p>
                <p className=" text-C-yellow3">
                  {" "}
                  {input.description || "รายละเอียดคอร์ส"}
                </p>
                <ul className=" text-left text-sm text-C-white pt-3">
                  {/* {lesson.map((el) => (
                      <li>{el.value}</li>
                    ))} */}
                  {/* <li>{lesson.map}</li> */}
                  <li>lesson list</li>
                </ul>
              </div>
              <div className=" bg-C-gray3 h-[35px] rounded-b-3xl flex justify-between items-center px-5 text-sm">
                <div className="flex items-center gap-1 text-C-white">
                  <BiTimeFive />
                  {input.timeMax || "เวลาใช้เรียน"} ชั่วโมง
                </div>
                <p className=" text-C-yellow3 text-base">
                  ราคา {input.price}.-
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <ButtonYellow onclick={hdlSubmit}>สร้าง</ButtonYellow>
              <ButtonYellow type="reset">ล้าง</ButtonYellow>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
