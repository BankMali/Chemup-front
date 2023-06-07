import ButtonBlue from "../components/ButtonBlue";
import ButtonYellow from "../components/ButtonYellow";

export default function HeadContent() {
  return (
    <div className=" h-[400px] bg-slate-500 ">
      <div className=" bg-[url('/src/assets/cardbg.jpg')] h-full w-full bg-fixed flex">
        <div className="flex-1 h-full flex justify-end flex-col min-w-[200px] overflow-visible">
          <img src="src/assets/women.png" alt="" className="h-fit" />
        </div>
        <div className="flex flex-col flex-1 bg-gradient-to-l  from-white justify-center items-center">
          <div className=" w-fit align-middle text-center">
            <div className="mb-5">
              <p className="stroke-C-y stroke-1 text-3xl font-bold text-C-blue2">
                เรียน เคมีออนไลน์
              </p>
              <p className=" text-C-gray3">
                กับ ดร. จักษวัชร์ สง่าวิทยากร (พี่เต้)
              </p>
            </div>

            <div className=" flex gap-5 flex-wrap text-center justify-center">
              <ButtonBlue>เข้าสู่ระบบ</ButtonBlue>
              <ButtonYellow>สมัครสมาชิก</ButtonYellow>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
