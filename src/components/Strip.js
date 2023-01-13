import React from "react";
// import { brands } from "../data";
import i1 from "../assets/img/brands/i1.png";
import i2 from "../assets/img/brands/i2.png";
import i3 from "../assets/img/brands/i3.png";
import i4 from "../assets/img/brands/i4.png";
import i5 from "../assets/img/brands/i5.png";
import i6 from "../assets/img/brands/i6.png";
import i7 from "../assets/img/brands/i7.png";

// import { FiGithub, FiMail } from "react-icons/fi";

const Strip = () => {
  return (
    <section className="min-h-[50px] bg-tertiary flex items-center ">
      <div className=" container mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
        {/* <FiGithub className="w-[30px] h-[30px]" />
        <FiMail className="w-[30px] h-[30px]" />
        <CiLinkedin className="w-[30px] h-[30px]" /> */}
        <img className="w-[30px]" src={i1} alt="" />
        <img className="w-[30px]" src={i2} alt="" />
        <img className="w-[30px]" src={i3} alt="" />
        <img className="w-[30px]" src={i4} alt="" />
        <img className="w-[30px]" src={i5} alt="" />
        <img className="w-[30px]" src={i6} alt="" />
        <img className="w-[30px]" src={i7} alt="" />
        {/* {brands.map((brand, index) => {
          return (
            <div key={index}>
              <img src={brand.img} alt="" />
            </div>
          );
        })} */}
      </div>
    </section>
  );
};

export default Strip;
