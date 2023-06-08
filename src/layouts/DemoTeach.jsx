export default function DemoTeach() {
  return (
    <div className=" h-fit bg-gradient-to-b from-C-blue4 to-C-blue1 px-10 py-20">
      <div className="flex justify-between items-baseline">
        <h1 className="text-xl text-C-white font-medium">ตัวอย่างการสอน</h1>
        <a href="/demoteach" className=" hover:text-C-yellow3">
          ดูทั้งหมด
        </a>
      </div>
      <div className="flex justify-center flex-wrap gap-8 pt-10">
        <iframe
          src="https://www.youtube.com/embed/0okuAwqTHs0"
          className=" rounded-3xl w-[45%] h-[300px] min-w-[300px]"></iframe>
        <iframe
          src="https://www.youtube.com/embed/TX9qSaGXFyg"
          className=" rounded-3xl w-[45%] h-[300px] min-w-[300px]"></iframe>
        <iframe
          src="https://www.youtube.com/embed/lEPdf1BMNSk"
          className=" rounded-3xl w-[45%] h-[300px] min-w-[300px]"></iframe>
        <iframe
          src="https://www.youtube.com/embed/aPT26Dd3OzE"
          className=" rounded-3xl w-[45%] h-[300px] min-w-[300px]"></iframe>
      </div>
    </div>
  );
}
