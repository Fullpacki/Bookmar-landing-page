import React from "react";
import LogoNavActive from "../components/images/logo-menu-active.svg";
import Close from "../components/images/close.svg";
import IconFacebook from "../components/images/icon-facebook.svg";
import IconTwitter from "../components/images/icon-twitter.svg";

function MenuActive({ handleMenu }) {
  // Acceptez handleMenu en tant que prop
  return (
    <div className="flex flex-col absolute w-full top-0 left-0 h-screen bg-[#252B46]/90 gap-10 py-10 px-5">
      <div className="flex flex-row items-center justify-between">
        <img src={LogoNavActive} alt="Active Logo" />
        <img onClick={handleMenu} className="w-6" src={Close} alt="Close" />
      </div>
      <ul className="flex flex-col items-center text-white">
        <li className="border-t w-full text-center py-5 text-2xl tracking-widest">
          FEATURES
        </li>
        <li className="border-t w-full text-center py-5 text-2xl tracking-widest">
          PRICING
        </li>
        <li className="border-t w-full text-center py-5 text-2xl tracking-widest">
          CONTACT
        </li>
        <li className="border-t w-full text-center py-8 text-2xl tracking-widest">
          <button className="border-2 w-full rounded-lg p-2 tracking-widest font-semibold">
            LOGIN
          </button>
        </li>
      </ul>
      <div className="flex flex-row w-full items-center justify-center gap-10 mt-20">
        <img src={IconFacebook} alt="Facebook" />
        <img src={IconTwitter} alt="Twitter" />
      </div>
    </div>
  );
}

export default MenuActive;
