import React from "react";
import { projectsImg } from "../data";

const Project = () => {
  return (
    <div id="project" className="mx-auto">
      <div className="mb-5 shadow-md grid lg:grid-cols-3 gap-3 gap-y-[40px] place-items-center text-center">
        {projectsImg.map((item) => {
          return (
            <div>
              <img className="rounded-2xl w-[250px] " src={item.image} alt="" />

              <div className="inline-flex mt-3 gap-2">
                <a className="text-base" href={item.href} target={item.target}>
                  <button className="btn btn-md hover:bg-accent-hover border-solid border-2 border-accent transition-all rounded-md ">
                    See live
                  </button>
                </a>

                <a
                  className="text-base"
                  href={item.github}
                  target={item.target}
                >
                  <button className="btn btn-md hover:bg-accent-hover transition-all rounded-md ">
                    Source code
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
