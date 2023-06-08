export default function UserCard() {
  return (
    <div className="flex justify-between w-[400px] p-5 bg-C-white text-C-gray3 rounded-2xl border-t-[30px] border-t-C-blue1 shadow-md">
      <div className="flex-[2] text-xs px-3">
        <img
          src="/src/assets/ChemUplogo.png"
          alt="pic"
          className=" pl-1 h-10 min-w-fit"
        />
        <ul className="pl-1 pt-7">
          <li className="text-sm font-bold">พิทัน รันพิมพา</li>
          <li>Pitunnana@gmail.com</li>
          <li>0123456789</li>
          <li className="pt-4">
            719 ถนน พระราม 6 แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <div className="border-2 border-C-blue1 w-[150px] h-[150px] rounded-full bg-black bg-[url('/src/assets/studentpic.png')] bg-cover bg-center">
          {/* <img src="src/assets/studentpic.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
}
