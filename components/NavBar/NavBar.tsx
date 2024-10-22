import React from "react";
import Logo from "../Logo/Logo";

const NavBar = () => {
  return (
    <nav className="flex w-full items-center justify-between p-4 px-8 h-[3.75rem]">
      <Logo />
    </nav>
  );
};

export default NavBar;
