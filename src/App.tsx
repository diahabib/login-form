import React from "react";
import "./App.css";
import { useState } from "react";
//import bgImage from "./assets/luffy-gear5.png";

function App() {
  const icon1 = "https://img.icons8.com/sf-ultralight-filled/25/visible.png";
  const icon2 = "https://img.icons8.com/sf-regular-filled/48/invisible.png";
  const [showOption, setShowOption] = useState("SHOW");
  const [showIcon, setShowIcon] = useState("icon1");
  const showOrHide = () => {
    const { opt, icon } =
      showOption === "SHOW"
        ? { opt: "HIDE", icon: icon2 }
        : { opt: "SHOW", icon: icon1 };

    setShowOption(opt);
    setShowIcon(icon);
  };
  return (
    <>
      <div className="container text-white h-104 p-10 border border-white-500 w-screen md:w-[45vw] lg:w-[30vw] ">
        <h2 className="text-2xl font-bold text-center">Login Form</h2>
        <div className="mt-8 max-w-md mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-white-700">Full name</span>
              <div className="flex">
                <span className="bg-white h-9 w-8 grid place-content-center">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-rounded/24/user.png"
                    alt="user"
                  />
                </span>
                <input
                  type="text"
                  className="mt-0 block w-64 h-9 px-0.5 border-0 border-b-2 border-white focus:ring-0 focus:border-black caret-black-700 text-black focus:text-black"
                  placeholder=""
                />
              </div>
            </label>
            <label className="block">
              <span className="text-white-700">Email address</span>
              <div className="flex">
                <span className="bg-white h-9 w-8 grid place-content-center">
                  <img
                    width="24"
                    height="40"
                    src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-at-digital-marketing-tanah-basah-glyph-tanah-basah.png"
                    alt="external-at-digital-marketing-tanah-basah-glyph-tanah-basah"
                  />
                </span>
                <input
                  type="email"
                  className="mt-0 block w-64 h-9 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black text-black focus:text-black"
                  placeholder="john@example.com"
                />
              </div>
            </label>
            <label className="block">
              <span className="text-white-700">Password</span>
              <div className="flex">
                <span className="bg-white h-9 w-8 grid place-content-center">
                  <img
                    width="24"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/lock--v1.png"
                    alt="lock--v1"
                  />
                </span>
                <input
                  type={showOption === "SHOW" ? "password" : "text"}
                  className="mt-0 block w-56 h-9 px-0.5  focus:border-none caret-col2 text-black focus:text-black"
                  placeholder=""
                />
                <span className="show bg-white text-black w-8 grid place-content-center text-xs leading-none text-left font-bold">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      showOrHide();
                    }}
                  >
                    <img src={showIcon} alt="visible" width="20" height="25" />
                    {/*showOption*/}
                  </button>
                </span>
              </div>
            </label>
            <button className="mt-4 mb-2 bg-gradient-to-r from-col2 via-col1 to-col3 p-2 w-72 rounded-lg mx-auto">
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
