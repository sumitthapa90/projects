import React from "react";

function Form() {
  return (
    <div className="w-full py-16 text-white bg-stone-700 px-4 ">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="md:text-4xl sm:text-3xl text-2xl py-2 font-bold text-white">
            Want tips and tricks to optimise the form
          </h2>
          <p>Sing up to the newsLetter and Stay up to date</p>
        </div>

        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-3">
            <input
              type="text"
              placeholder="enter email"
              className="form text-black flex w-full p-3 rounded-md "
            />

            <button className="w-[200px] bg-orange-600 rounded-md p-3  hover:bg-sky-700  ml-4 ">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our Privact Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Form;
