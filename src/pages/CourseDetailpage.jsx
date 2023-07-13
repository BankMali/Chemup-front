import BoxLeason from "../components/BoxLeason";
import BoxSm from "../components/BoxSm";
import ButtonBlueXs from "../components/ButtonBlueXs";
import ButtonYellowXs from "../components/ButtonYellowXs";
import CourseCard from "../components/CourseCard";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import SubHeader from "../layouts/SubHeader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { getAllCourse } from "../api/chemupApi";

export default function CourseDetailpage() {
  const [course, setCourse] = useState();
  const { user } = useAuth();
  const { id } = useParams();
  console.log("check id", id);

  // const courses = course.map((course) => {
  //   const list = [...course];
  //   console.log(list[2].id);
  //   return;
  // });

  // console.log(course.id);
  // console.log(course.name);

  useEffect(() => {
    getAllCourse().then((rs) => {
      console.log(rs.data);
      setCourse(rs.data);
    });
  }, []);

  console.log("Check course", course?.Lessons);

  // let allcourse = { ...course };
  // console.log("check el", allcourse);

  return (
    <div>
      <Navbar />
      <SubHeader>รายละเอียด คอร์สเรียน เคมม.ต้น</SubHeader>
      {course
        ?.filter((el) => {
          if (el.id) {
            console.log("CCC", el?.id == id);
            return el?.id == id;
          }
          return true;
        })
        ?.map((el) => (
          <div className="px-10 py-8 flex flex-wrap justify-center items-start gap-10 bg-C-white">
            {/* /////// col1 */}
            <div className="flex-1 flex flex-col gap-5 justify-around items-center">
              <div className="flex gap-3">
                {/* <CourseCard /> */}

                <CourseCard
                  // key={index}
                  courseName={el.name}
                  courseDescription={el.description}
                  courseTimeMax={el.timeMax}
                  coursePrice={el.price}
                  lesson={el.Lessons.map((el) => (
                    <li>{el.lessonName}</li>
                  ))}
                  onClickRemove={() => hdlRemove(index)}
                />
              </div>
            </div>
            {/* //////// */}
            <div className="flex-[2] flex flex-col pt-6 gap-6">
              {/* ////// 1 */}
              <div className="flex gap-5">
                <BoxSm>เรียนได้ 360 วัน</BoxSm>
                <BoxSm>จำกัดเวลา 60 ชม.</BoxSm>
                <BoxSm>วีดีโอรวม {el.timeMax} ชม.</BoxSm>
                <BoxSm>34 บทเรียน</BoxSm>
                <BoxSm>เอกสาร PDF Book</BoxSm>
              </div>
              {/* ////// 2 */}
              <div className=" text-C-gray3">
                <p>โดย ดร. จักษวัชร์ สง่าวิทยากร</p>
                <p className=" font-bold">
                  ราคา {Number(el?.price).toLocaleString()} บาท
                </p>
                <div className="flex gap-3 py-3">
                  <ButtonYellowXs>เพิ่มลงตะกร้า</ButtonYellowXs>
                  {user ? (
                    <></>
                  ) : (
                    <ButtonBlueXs>เข้าสู่ระบบเพื่อเริ่มเรียน</ButtonBlueXs>
                  )}

                  {/* <ButtonBlueXs>เข้าสู่ระบบเพื่อเริ่มเรียน</ButtonBlueXs> */}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="collapse collapse-arrow bg-C-white border text-C-gray3 border-C-gray3">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-xl font-medium">
                    เกี่ยวกับ คอร์สเรียน {el.name}
                  </div>
                  <div className="collapse-content">
                    <ul className=" text-sm list-disc px-5">
                      <li>
                        คอร์สเคมี ม. ต้น เหมาะสำหรับน้อง ๆ ม. ต้น
                        ที่ต้องการเตรียมตัวสอบเข้า ม. 4 โรงเรียนชั้นนำทั่วประเทศ
                        เช่น โรงเรียนเตรียมอุดม โรงเรียนมหิดลวิทยานุสรณ์
                        โดยในคอร์สนี้จะสรุปเนื้อหาวิชาเคมีและฝึกทำข้อสอบเก่า
                      </li>
                    </ul>
                  </div>
                </div>
                บทเรียน
                {/* <div className="collapse collapse-arrow bg-C-white border text-C-gray3 border-C-gray3">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-xl font-medium">
                    บทที่ 1 การจำแนกสาร
                  </div>
                  <div className="collapse-content">
                    <ul className=" text-sm px-5 list-decimal">
                      <li>การจำแนกสารรอบตัว</li>
                      <li>สารละลาย</li>
                      <li>สารบริสุทธิ์</li>
                      <li>การตรวจสอบสารละลายและสารบริสุทธิ์</li>
                      <li>ความเข้มข้นของสารละลาย</li>
                    </ul>
                  </div>
                </div> */}
                {el?.Lessons?.map((el) => (
                  <BoxLeason
                    LessonName={el?.lessonName}
                    subLessonName={el?.SubLessons?.map((el) => (
                      <li>{el?.name}</li>
                    ))}
                  />
                ))}
                {/* <BoxLeason>บทที่ 3 สารละลายกรด-เบส</BoxLeason>
                <BoxLeason>บทที่ 4 การแยกสาร</BoxLeason>
                <BoxLeason>บทที่ 5 การเปลี่ยนแปลงของสาร</BoxLeason>
                <BoxLeason>ตะลุยข้อสอบ</BoxLeason> */}
              </div>

              {/* /////// */}
            </div>
          </div>
        ))}
      <Footer />
    </div>
  );
}
