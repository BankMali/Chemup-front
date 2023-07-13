import ButtonYellow from "../components/ButtonYellow";
import { getOrderById } from "../api/chemupApi";

import OrderItem from "./OrderItem";
import { useAuth } from "../contexts/AuthContext";

import { useState, useEffect } from "react";

export default function Cart() {
  const [order, setOrder] = useState([]);
  const { user } = useAuth();
  // console.log("cc", user.id);
  const id = user.id;

  useEffect(() => {
    getOrderById(id).then((rs) => {
      // console.log("what i get", rs.data);
      setOrder(rs.data);
    });
  }, []);

  // console.log("sss", order);
  let totalPriceSum = 0;

  order.forEach((order) => {
    const coursePrice = parseFloat(order.Course.price);
    totalPriceSum += coursePrice;
  });

  // console.log("TETE", totalPriceSum);

  return (
    <div className="bg-white rounded-xl  w-full h-full flex flex-col justify-start items-center ">
      <div className="p-10  rounded-xl shadow-md w-[450px] flex flex-col justify-center items-center gap-4">
        <p className=" text-C-gray3 text-lg font-bold pb-4">ตะกร้าของฉัน</p>
        <div className="w-fit overflow-auto touch-auto max-h-[300px]">
          {order.map((el, index) => (
            <OrderItem
              key={index}
              //   // hdlClickDecrese={hdlClickDecrese}
              //   // hdlClickIncrese={hdlClickIncrese}
              price={el?.Course?.price}
              courseName={el?.Course?.name}
              hdlRemove={() => hdlRemove(index)}
            />
          ))}

          {/* <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem /> */}
        </div>
        <div className=" flex gap-5 text-center justify-between w-full">
          <p>รวม</p>
          <p className=" text-C-blue1 text-lg">
            ฿ {Number(totalPriceSum).toLocaleString()}
          </p>
        </div>
        <a href={user ? "/payment" : "/register"}>
          <ButtonYellow>ชำระเงิน</ButtonYellow>
        </a>
        <div className=" flex gap-2 justify-end w-full"></div>
      </div>
    </div>
  );
}
