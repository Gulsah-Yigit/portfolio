import React from "react";
import Project from "../components/Project";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1000px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            My latest works
          </h2>
          <p className="subtitle">
            You can find some of my recent projects below ⬇️
          </p>
        </div>
        <Project />
      </div>
    </section>
  );
};

export default Portfolio;
