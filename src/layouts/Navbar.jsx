import React, { useEffect } from "react";
import Cart from "./Cart";
import { useAuth } from "../contexts/AuthContext";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const hdlLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="sticky top-0 z-40">
      <header className="sticky top-0 shadow-md">
        <div className="navbar bg-C-white px-10 py-3 flex-wrap">
          <a href="/" className="flex-1">
            {/* <a className="btn btn-ghost normal-case text-xl"></a> */}
            <img
              src="/src/assets/ChemUplogo.png"
              alt="pig"
              className=" h-14 min-w-fit"
            />
          </a>

          <ul className="menu menu-horizontal text-C-blue2">
            <li>
              <a
                href="/"
                className="menu hover:text-C-yellow3 font-semibold rounded-full hover:scale-110 h-full ">
                หน้าแรก
              </a>
            </li>
            <li>
              <a
                href="/allcourse"
                className=" hover:text-C-yellow3 font-semibold rounded-full hover:scale-110 ">
                คอร์สเรียน
              </a>
            </li>
            <li>
              <a
                href="/demoteach"
                className=" hover:text-C-yellow3 font-semibold rounded-full hover:scale-110 ">
                ตัวอย่างการสอน
              </a>
            </li>
          </ul>

          {/* ////// cart */}
          <div className="flex-none">
            <div className="dropdown dropdown-end mr-2 ">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle hover:scale-110">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-C-gray3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>

                  <span className="badge badge-sm indicator-item bg-red-600 border-none text-white">
                    8
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 rounded-xl backdrop-blur-sm dropdown-content w-fit shadow top-[2rem]">
                <Cart />
                {/* <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div> */}
              </div>
            </div>

            <div className="flex items-center a">
              <div className="dropdown dropdown-end ctive:scale-100 duration-150 hover:scale-105">
                <label
                  tabIndex={0}
                  className="rounded-full avatar cursor-pointer">
                  <div href="/login" className="w-10 rounded-full border-2">
                    <img src="/src/assets/blank.png" className=" " />
                  </div>
                </label>
                {/* <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul> */}
              </div>
              <div className="ctive:scale-100 duration-150 hover:scale-105">
                {user ? (
                  <button onClick={hdlLogout} className=" menu font-semibold">
                    ออกจากระบบ
                  </button>
                ) : (
                  <a href="/login" className=" menu font-semibold">
                    เข้าสู่ระบบ
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
