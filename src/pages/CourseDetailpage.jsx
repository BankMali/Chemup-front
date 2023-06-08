import BoxLeason from "../components/BoxLeason";
import BoxSm from "../components/BoxSm";
import ButtonBlueXs from "../components/ButtonBlueXs";
import ButtonYellowXs from "../components/ButtonYellowXs";
import CourseCard from "../components/CourseCard";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import SubHeader from "../layouts/SubHeader";

export default function CourseDetailpage() {
  return (
    <div>
      <Navbar />
      <SubHeader>รายละเอียด คอร์สเรียน เคมีม.ต้น</SubHeader>
      <div className="px-10 py-8 flex flex-wrap justify-center items-start gap-10 bg-C-white">
        {/* /////// col1 */}
        <div className="flex-1 flex flex-col gap-5 justify-around items-center">
          <div className="flex gap-3">
            <CourseCard />
          </div>
        </div>
        {/* //////// */}
        <div className="flex-[2] flex flex-col pt-6 gap-6">
          {/* ////// 1 */}
          <div className="flex gap-5">
            <BoxSm>เรียนได้ 360 วัน</BoxSm>
            <BoxSm>จำกัดเวลา 60 ชม.</BoxSm>
            <BoxSm>วีดีโอรวม 44 ชม.</BoxSm>
            <BoxSm>34 บทเรียน</BoxSm>
            <BoxSm>เอกสาร PDF Book</BoxSm>
          </div>
          {/* ////// 2 */}
          <div className=" text-C-gray3">
            <p>โดย ดร. จักษวัชร์ สง่าวิทยากร</p>
            <p className=" font-bold">ราคา 2,990 บาท</p>
            <div className="flex gap-3 py-3">
              <ButtonYellowXs>เพิ่มลงตะกร้า</ButtonYellowXs>
              <ButtonBlueXs>เข้าสู่ระบบเพื่อเริ่มเรียน</ButtonBlueXs>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="collapse collapse-arrow bg-C-white border text-C-gray3 border-C-gray3">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                เกี่ยวกับ คอร์สเรียน เคมีม.ต้น
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
            <div className="collapse collapse-arrow bg-C-white border text-C-gray3 border-C-gray3">
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
            </div>
            <BoxLeason>บทที่ 3 สารละลายกรด-เบส</BoxLeason>
            <BoxLeason>บทที่ 4 การแยกสาร</BoxLeason>
            <BoxLeason>บทที่ 5 การเปลี่ยนแปลงของสาร</BoxLeason>
            <BoxLeason>ตะลุยข้อสอบ</BoxLeason>
          </div>

          {/* /////// */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
