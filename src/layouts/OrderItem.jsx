import { ImBin2 } from "react-icons/im";

export default function OrderItem() {
  return (
    <div className="flex justify-center items-center gap-4 w-full h-20 border-b px-4">
      <div className=" flex-[2] flex  items-center w-full h-full gap-2">
        <div className=" w-full flex-1 h-full flex justify-center items-center">
          <img src="/src/assets/ChemUplogoC.png" alt="" className=" h-fit" />
        </div>
        <div className=" w-full flex flex-col flex-[3]">
          <p className=" text-C-gray3">name course</p>
          <p className=" text-C-blue1">฿ 2,000.-</p>
        </div>
      </div>
      <div className=" flex-[1.5] flex justify-between items-center">
        <div className="flex">
          <div className="hover:bg-gray-100 cursor-pointer w-8 h-8 flex justify-center items-center text-C-gray3 border border-C-gray1 rounded-full transition-color duration-50">
            -
          </div>
          <div className="mx-1 w-8 h-8 text-lg flex justify-center items-center text-C-gray3">
            1
          </div>
          <div className="hover:bg-gray-100 cursor-pointer w-8 h-8 flex justify-center items-center text-C-gray3 border border-C-gray1 rounded-full transition-color duration-50">
            +
          </div>
        </div>
        <ImBin2 className=" text-C-gray3 hover:scale-110 hover:text-red-700 transition duration-150 active:scale-90 cursor-pointer" />
      </div>
    </div>
  );
}
