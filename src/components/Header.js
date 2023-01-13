import React from "react";
import { useEffect, useState } from "react";

import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Socials from "../components/Socials";
import "../style/header.css";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <div className="my-logo">Gülşah Yiğit</div>

        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* socials */}
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/* navMobile */}
        <div className="lg:block">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
