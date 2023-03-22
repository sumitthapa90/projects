import React from "react";
import "./newsletter.css";

function NewsLetter() {
  return (
    <div className="newsLetter text-white w-full mx-auto py-16 px-10">
      <div className="mx-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center item-cnter ">
          <div className="">
            <p className="font-mono text-orange-600 font-bold text-5xl mb-2 mt-5 ">
              Dream it, build it.
            </p>
            <h4 className="sm:text-3xl  md:text-2xl lg:text-2xl xl:text-2xl text-2xl  mt-5">
              Start with a stunning theme
            </h4>
            <p>
              Our layouts make it simple to get started. Fresh designs make it
              easy to make a beautiful, responsive website for any industry.
            </p>
          </div>
          <div>
            <h4 className="sm:text-3xl  md:text-2xl lg:text-2xl xl:text-2xl text-2xl  mt-5">
              Customize with your own content
            </h4>
            <p>
              Add and customize sections. Choose font pairings, add images, and
              customize with your own text to make your website your own.
            </p>
          </div>

          <div>
            <h4 className="sm:text-3xl  md:text-2xl lg:text-2xl xl:text-2xl text-2xl  mt-5">
              Be found online
            </h4>
            <p>
              Grow your audience with your perfect domain name, SEO tools,
              social media and third party features.
            </p>
          </div>
        </div>
        <img
          className="analize-img w-[300px] mx-auto my-4 object-cover h-auto"
          src="./assets/bisness.png"
          alt="1"
        />
      </div>
    </div>
  );
}

export default NewsLetter;
