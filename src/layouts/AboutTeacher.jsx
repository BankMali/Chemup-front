import React from "react";

export default function AboutTeacher() {
  return (
    <div className=" h-fit w-auto bg-C-white p-10 py-20 flex justify-around text-C-gray3 gap-5">
      <div className=" flex-1">
        <img
          src="/src/assets/teacherpic.jpeg"
          alt="pic"
          className="h-fit w-fit rounded-3xl overflow-hidden"
        />
      </div>
      <div className="flex-1">
        <div className="px-4">
          <p className=" text-4xl text-C-blue1">รู้จักกับ พี่เต้</p>
          <p>ดร. จักษวัชร์ สง่าวิทยากร</p>
        </div>

        <div className="collapse collapse-arrow bg-C-white border mt-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            ประวัติการศึกษา
          </div>
          <div className="collapse-content">
            <ul className=" text-sm list-disc px-5">
              <li>ปริญญาตรี วิทยาศาสตร์บัณฑิต สาขาวิชาเคมี มหาวิทยาลัยบูรพา</li>
              <li>
                ปริญญาเอก ปรัชญาดุษฎีบัณฑิต สาขาวิชาเคมี (หลักสูตรนานาชาติ)
                มหาวิทยาลัยมหิดล
              </li>
              <li>
                นักศึกษาโครงการพัฒนากำลังคนด้านวิทยาศาสตร์
                (ทุนเรียนดีวิทยาศาสตร์แห่งประเทศไทย)นักศึกษาโครงการพัฒนากำลังคนด้านวิทยาศาสตร์
                (ทุนเรียนดีวิทยาศาสตร์แห่งประเทศไทย)
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-C-white border mt-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            ประสบการณ์สอน
          </div>
          <div className="collapse-content">
            <ul className=" text-sm list-disc px-5">
              <li>
                วิทยากรติวสอบกลางภาคและปลายภาครายวิชาเคมีทั่วไป คณะวิทยาศาสตร์
                มหาวิทยาลัยบูรพา (พ.ศ. 2556-2558)
              </li>
              <li>
                ผู้ช่วยสอนนักศึกษาปริญญาตรีและปริญญาโทรายวิชาปฏิบัติการเคมีทั่วไป
                ปฏิบัติการเคมีวิเคราะห์และปฏิบัติการการวิเคราะห์เชิงเครื่องมือ
                คณะวิทยาศาสตร์ มหาวิทยาลัยมหิดล (พ.ศ. 2560-2564)
              </li>
              <li>
                สอนพิเศษให้กับนักเรียน ม.ต้น ม.ปลาย
                และนักศึกษามหาวิทยาลัยเป็นเวลากว่า 10 ปี (2555-ปัจจุบัน)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
