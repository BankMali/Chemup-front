import ButtonYellow from "../components/ButtonYellow";
import OrderItem from "./OrderItem";
import { useAuth } from "../contexts/AuthContext";

export default function Cart() {
  const { user } = useAuth();

  return (
    <div className="bg-white rounded-xl  w-full h-full flex flex-col justify-start items-center ">
      <div className="p-10  rounded-xl shadow-md w-[450px] flex flex-col justify-center items-center gap-4">
        <p className=" text-C-gray3 text-lg font-bold pb-4">ตะกร้าของฉัน</p>
        <div className="w-fit overflow-auto touch-auto max-h-[300px]">
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>
        <div className=" flex gap-5 text-center justify-between w-full">
          <p>รวม</p>
          <p className=" text-C-blue1 text-lg">฿ 10,000</p>
        </div>
        <a href={user ? "/payment" : "/register"}>
          <ButtonYellow>ชำระเงิน</ButtonYellow>
        </a>
        <div className=" flex gap-2 justify-end w-full"></div>
      </div>
    </div>
  );
}
