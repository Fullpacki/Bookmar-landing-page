import React, { useState } from "react";
import Logo from "../components/images/logo-bookmark.svg";
import MenuSvg from "../components/images/menu-icon.svg";
import MenuActive from "./MenuActive";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex flex-row items-center justify-between relative box-border py-10 px-5">
      <img src={Logo} alt="Logo" />
      {menu ? (
        <MenuActive handleMenu={handleMenu} />
      ) : (
        <img onClick={handleMenu} className="w-5" src={MenuSvg} alt="Menu" />
      )}
    </div>
  );
}

export default Navbar;
