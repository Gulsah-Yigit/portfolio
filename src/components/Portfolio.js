import React from "react";
import Project from "../components/Project";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1000px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            My lastes work
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            laoreet libero, a pretium augue. Curabitur ac purus sed neque
            lobortis consequat id eget massa.
          </p>
        </div>
        <Project />
      </div>
    </section>
  );
};

export default Portfolio;
