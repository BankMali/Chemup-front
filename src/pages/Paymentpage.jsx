import React from "react";
import Navbar from "../layouts/Navbar";
import SubHeader from "../layouts/SubHeader";
import Inputbar from "../components/Inputbar";
import Footer from "../layouts/Footer";
import ButtonYellow from "../components/ButtonYellow";
import OrderItem from "../layouts/OrderItem";

export default function Paymentpage() {
  return (
    <div className=" w-full h-screen bg-C-white">
      <Navbar />
      <SubHeader>Payment</SubHeader>
      <div className=" w-full flex justify-center h-full bg-C-white gap-5">
        <div className=" w-[40%] flex-col flex gap-5 text-center h-fit justify-center items-center p-5 bg-C-white rounded-lg my-5 border shadow-lg">
          <p className="text-C-gray3 font-bold">Order</p>
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>
        <div className=" w-[40%] flex-col flex gap-5 text-center justify-center items-center h-fit p-5 bg-C-white rounded-lg my-5 border shadow-lg">
          <p className="text-C-gray3 font-bold">Payment</p>

          <Inputbar name="payment" title="Payment Method" />
          <Inputbar name="payment" title="Bank" />
          <Inputbar name="payment" title="Name" />
          <Inputbar name="payment" title="Card No." />
          <div className="flex gap-5">
            <Inputbar name="payment" title="Exp Date xx/xx" />
            <Inputbar name="payment" title="CCV" />
          </div>
          <ButtonYellow>Submit</ButtonYellow>
        </div>
      </div>
      <Footer />
    </div>
  );
}
