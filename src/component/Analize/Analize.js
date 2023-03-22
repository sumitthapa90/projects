import React from "react";
import "./analize.css";

function Analize() {
  return (
    <div className="analize w-full mx-auto py-16 px-4 bg-white ">
      <div className="mx-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="analize-img w-[400px] mx-auto my-4"
          src="./assets/unique-img.png"
          alt="1"
        />

        <div className="flex flex-col justify-center">
          <p className="font-mono text-orange-600 font-bold text-5xl mb-2 mt-5 ">
            Make your own website. <br />
            Dream it, build it.
          </p>
          <h3 className="sm:text-3xl  md:text-2xl lg:text-2xl xl:text-2xl text-2xl text-black mt-5">
            Whether you're growing your business, selling online or establishing
            an online presence - discover the easiest way to get online with the
            Website.com website builder.
          </h3>

          <button className="w-[300px] bg-orange-600 rounded-md p-2 hover:bg-sky-700 mt-5 ">
            Get Started
          </button>
          {/* <div className="handshake sm:absolute top-0 pt-5">
            <img
              src="./assets/handShake.jpg"
              alt="2"
              className="sm:text-3xl  md:text-2xl lg:text-2xl xl:text-2xl text-2xl w-[400px]  mx-auto h-40 object-cover"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Analize;
