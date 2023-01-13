import React from "react";
import "../style/header.css";
import Image from "../assets/img/sn.png";

const About = () => {
  return (
    <section id="about" className="section bg-secondary flex flex-col w-full ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl "
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about  relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Gülşah Yiğit
              </h2>
              <p className="mb-4 text-teal-600">Junior Front-End Developer</p>
              <hr className="mb-8 opacity-5" />

              <p className="about-pr">
                Hello. My name is Gülşah, I’m a junior front-end developer based
                Istanbul, Turkey. I enjoy creating things that to turn designs
                into reality via code. <br /> I have passionate about
                cutting-edge, beautiful interfaces and minimal/effective ux.
                With a mission to build interface elegant, easy to use, fast,
                and secure I love the pursue the new experiences and designs.{" "}
                <br /> I'm quietly confident, naturally curious, and I love
                creating reusable solutions to problems. <br />
                What excites me most about working in front-end development is
                being able to design and create things that have purpose and
                solve real problems and interacting with people.
                <br /> If you want to know more about me, you can take a look at
                my resume↓
              </p>
            </div>
            <a
              download
              href="https://drive.google.com/file/d/1FZkUaNcKqDKSSp11TB1BW__kaue65Nk0/view?usp=share_link"
            >
              <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all rounded-md mt-[13px]">
                Download Resume
              </button>{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
