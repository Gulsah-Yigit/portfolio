import React from "react";
import "../style/header.css";
import WomanImg from "../assets/img/pp_transparent.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[93vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-39 lg:py-0 overflow-hidden pl-[25px]"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* left side */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent mt-[80px] mb-[2px]">
              Hey, I'm Gülşah 👋
            </p>
            <h1 className="text-2xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I'm a Front-End <br /> Developer.
            </h1>
            <p className="pt-6 pb-8 md:pt-6 md:pb-10 max-w-[480px] text-md text-center lg:text-center leading-7">
              I've passion for modern front-end development and I eager to truly
              learn and grow. If you are interested in my projects and you want
              to work with someone who is disciplined, open to learning and
              determined, contact me⬇️
            </p>

            <a href="#contact">
              <button className="btn btn-md bg-teal-600 hover:bg-accent-hover md:btn-lg transition-all rounded-lg">
                Contact me!
              </button>
            </a>
          </div>
          {/* right side */}
          <div className="hidden lg:flex flex-1 justify-end items-center ">
            <div className="profile-container ">
              <img src={WomanImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
