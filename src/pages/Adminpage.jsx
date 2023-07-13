import { useState } from "react";
import ButtonYellow from "../components/ButtonYellow";
import Inputbar from "../components/Inputbar";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import SubHeader from "../layouts/SubHeader";
import { BiTimeFive } from "react-icons/bi";
// import MockDataCourseCard from "../components/mockDataCours/eCard";
import { addCourse } from "../api/chemupApi";
import ButtonGhostXs from "../components/ButtonGhostXs";
import MockDataCourseCard from "../components/mockDataCourseCard";
import pic from "../assets/ChemUplogoC.png";

export default function Adminpage() {
  const [input, setInput] = useState({
    name: "",
    description: "",
    price: "",
    timeMax: "",
  });

  const [lesson, setLesson] = useState([{ lessonName: "" }]);

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
    // console.log(input);
    addCourse(input, lesson);
    // console.log(lesson);
    // console
    //   .log(lesson)
    //   .then((rs) => {
    //     console.log(rs);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <SubHeader>ADmin</SubHeader>

      <div className="px-10 py-8 flex flex-wrap justify-center items-start gap-10 bg-C-white">
        {/* Create form ///////// */}
        <form>
          <div className="flex justify-center gap-5 m-10">
            <div className="flex flex-col w-[35%] text-center gap-2">
              <p>สร้างคอร์สเรียนใหม่</p>
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
                        <ButtonGhostXs onClick={hdlAddclick}>
                          เพิ่ม
                        </ButtonGhostXs>
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
                    <img src={pic} alt="Clogo" className="h-32 " />
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
                    {lesson.map((el) => (
                      <li>{el.lessonName}</li>
                    ))}
                    {/* <li>{lesson.map}</li> */}
                    {/* <li>lesson list</li> */}
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
                {/* <ButtonYellow type="reset">ล้าง</ButtonYellow> */}
              </div>
            </div>
          </div>
        </form>

        <MockDataCourseCard />

        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>address</th>
                <th>mobile</th>
                <th>Last Login</th>
                <th>Courses</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Littel, Schaden and Vandervort</td>
                <td>Canada</td>
                <td>12/16/2020</td>
                <td>
                  <p>m3</p>
                  <p>m4</p>
                  <p>m5</p>
                </td>
                <td>
                  <p>done</p>
                  <p>pedding</p>
                  <p>fail</p>
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>United States</td>
                <td>12/5/2020</td>
                <td>Purple</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Carroll Group</td>
                <td>China</td>
                <td>8/15/2020</td>
                <td>Red</td>
              </tr>
              <tr>
                <th>4</th>
                <td>Marjy Ferencz</td>
                <td>Office Assistant I</td>
                <td>Rowe-Schoen</td>
                <td>Russia</td>
                <td>3/25/2021</td>
                <td>Crimson</td>
              </tr>
              <tr>
                <th>5</th>
                <td>Yancy Tear</td>
                <td>Community Outreach Specialist</td>
                <td>Wyman-Ledner</td>
                <td>Brazil</td>
                <td>5/22/2020</td>
                <td>Indigo</td>
              </tr>
              <tr>
                <th>6</th>
                <td>Irma Vasilik</td>
                <td>Editor</td>
                <td>Wiza, Bins and Emard</td>
                <td>Venezuela</td>
                <td>12/8/2020</td>
                <td>Purple</td>
              </tr>
              <tr>
                <th>7</th>
                <td>Meghann Durtnal</td>
                <td>Staff Accountant IV</td>
                <td>Schuster-Schimmel</td>
                <td>Philippines</td>
                <td>2/17/2021</td>
                <td>Yellow</td>
              </tr>
              <tr>
                <th>8</th>
                <td>Sammy Seston</td>
                <td>Accountant I</td>
                <td>O'Hara, Welch and Keebler</td>
                <td>Indonesia</td>
                <td>5/23/2020</td>
                <td>Crimson</td>
              </tr>
              <tr>
                <th>9</th>
                <td>Lesya Tinham</td>
                <td>Safety Technician IV</td>
                <td>Turner-Kuhlman</td>
                <td>Philippines</td>
                <td>2/21/2021</td>
                <td>Maroon</td>
              </tr>
              <tr>
                <th>10</th>
                <td>Zaneta Tewkesbury</td>
                <td>VP Marketing</td>
                <td>Sauer LLC</td>
                <td>Chad</td>
                <td>6/23/2020</td>
                <td>Green</td>
              </tr>
              <tr>
                <th>11</th>
                <td>Andy Tipple</td>
                <td>Librarian</td>
                <td>Hilpert Group</td>
                <td>Poland</td>
                <td>7/9/2020</td>
                <td>Indigo</td>
              </tr>
              <tr>
                <th>12</th>
                <td>Sophi Biles</td>
                <td>Recruiting Manager</td>
                <td>Gutmann Inc</td>
                <td>Indonesia</td>
                <td>2/12/2021</td>
                <td>Maroon</td>
              </tr>
              <tr>
                <th>13</th>
                <td>Florida Garces</td>
                <td>Web Developer IV</td>
                <td>Gaylord, Pacocha and Baumbach</td>
                <td>Poland</td>
                <td>5/31/2020</td>
                <td>Purple</td>
              </tr>
              <tr>
                <th>14</th>
                <td>Maribeth Popping</td>
                <td>Analyst Programmer</td>
                <td>Deckow-Pouros</td>
                <td>Portugal</td>
                <td>4/27/2021</td>
                <td>Aquamarine</td>
              </tr>
              <tr>
                <th>15</th>
                <td>Moritz Dryburgh</td>
                <td>Dental Hygienist</td>
                <td>Schiller, Cole and Hackett</td>
                <td>Sri Lanka</td>
                <td>8/8/2020</td>
                <td>Crimson</td>
              </tr>
              <tr>
                <th>16</th>
                <td>Reid Semiras</td>
                <td>Teacher</td>
                <td>Sporer, Sipes and Rogahn</td>
                <td>Poland</td>
                <td>7/30/2020</td>
                <td>Green</td>
              </tr>
              <tr>
                <th>17</th>
                <td>Alec Lethby</td>
                <td>Teacher</td>
                <td>Reichel, Glover and Hamill</td>
                <td>China</td>
                <td>2/28/2021</td>
                <td>Khaki</td>
              </tr>
              <tr>
                <th>18</th>
                <td>Aland Wilber</td>
                <td>Quality Control Specialist</td>
                <td>Kshlerin, Rogahn and Swaniawski</td>
                <td>Czech Republic</td>
                <td>9/29/2020</td>
                <td>Purple</td>
              </tr>
              <tr>
                <th>19</th>
                <td>Teddie Duerden</td>
                <td>Staff Accountant III</td>
                <td>Pouros, Ullrich and Windler</td>
                <td>France</td>
                <td>10/27/2020</td>
                <td>Aquamarine</td>
              </tr>
              <tr>
                <th>20</th>
                <td>Lorelei Blackstone</td>
                <td>Data Coordiator</td>
                <td>Witting, Kutch and Greenfelder</td>
                <td>Kazakhstan</td>
                <td>6/3/2020</td>
                <td>Red</td>
              </tr>
            </tbody>
            {/* <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>company</th>
                <th>location</th>
                <th>Last Login</th>
                <th>Favorite Color</th>
              </tr>
            </tfoot> */}
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
