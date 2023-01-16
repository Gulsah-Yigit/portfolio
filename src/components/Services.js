import React from "react";
import { services } from "../data";

const Services = () => {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            What can I do for you
          </h2>
          <p className="subtitle">
            I've always found crafting usefull user interactions that gratify
            and happy users to be the most rewarding and engaging task. In order
            to do this, it is necessary both to pay attention to details and to
            be a good problem solver. I think I'm good at both of these things.
            <br />
            Some of my core skills include⬇
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className="bg-secondary p-4 rounded-2xl" key={index}>
                <div className="text-accent rounded-sm w-10 h-10 flex justify-center items-center mb-20 text-[20px]">
                  {icon}
                </div>
                <h4 className="text-xl font-medium mb-[20px] items-center">
                  {name}
                </h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
