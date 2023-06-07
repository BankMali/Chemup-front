import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

export default function DemoTeachpage() {
  return (
    <div>
      <Navbar />
      <div className=" bg-C-blue1 text-C-white text-xl h-[80px] flex justify-center items-center">
        <p>ตัวอย่างการสอน</p>
      </div>
      <div className="flex justify-center flex-wrap gap-8 py-10">
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
      <Footer />
    </div>
  );
}
