import React from "react";
import "./hero.css";
import Typed from "react-typed";

function Hero() {
  console.log("hello")
  return (
    <div className="hero text-white text-center">
      <div className="mx-w-[800]  w-full h-screen mx-auto flex flex-col justify-center ">
        <h2 className="text-yellow-500  font-bold  md:text-7xl sm:text-6xl text-4xl md:py-6">
          Welcome to WebTech...
        </h2>
        <div>
          <Typed
            className="type text-2xl"
            strings={["Create a beautiful website for any device."]}
            typeSpeed={70}
            backSpeed={70}
            loop
          />

          <p className="texed mx-w-[800] sm:text-2xl r md:text-3xl lg:text-2xl xl:text-2xl mb-4 text-xl">
            <Typed
              className="type text-2xl"
              strings={[
                "Quickly create a professional website that looks stunning on desktops,.",
              ]}
              typeSpeed={60}
              backSpeed={60}
              loop
            />
            <br />
            <Typed
              className="type text-2xl"
              strings={[
                "tablets and even mobile devices with Website.com website builder.",
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </p>
        </div>

        

        <button className="w-[200px] bg-orange-600 rounded-md p-2 mx-auto hover:bg-sky-700">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
