import React, { useState } from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [toogle, setToogle] = useState(true);

  const handleToggle = () => {
    setToogle(!toogle);
  };

  return (
    <div className="navbar text-white flex justify-between items-center h-22  mx-auto max-w-[1240px] px-4">
      <NavLink path="/">
        <h1 className="w-full text-yellow-500 text-3xl font-mono">
          WebTech Dezine..
        </h1>
      </NavLink>

      <ul className="hidden md:flex">
        <NavLink to="/">
          <li className="p-4 font-bold text-lg font-serif">Home</li>
        </NavLink>

        <NavLink to="/about">
          <li className="p-4 font-bold text-lg font-serif">About</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="p-4 font-bold text-lg font-serif">Contact</li>
        </NavLink>
        <NavLink to="/services">
          <li className="p-4 font-bold text-lg font-serif">Services</li>
        </NavLink>
        <NavLink to="/portfoliyo">
          <li className="p-4 font-bold text-lg font-serif">Portfoliyo</li>
        </NavLink>
      </ul>

      <div className="block md:hidden" onClick={handleToggle}>
        {!toogle ? <AiOutlineClose size={20} /> : <AiOutlineBars size={20} />}
      </div>
      <div
        className={
          !toogle
            ? "fixed left-0 top-0 w-[50%] border-r border-r-gray-600 bg-gray-900 h-full"
            : "fixed left-[-100] hidden"
        }
      >
        <h1 className="w-full text-yellow-500 text-3xl m-3">React...</h1>
        <ul className=" p-4 uppercase">
          <NavLink to="/">
            <li className="p-4 font-bold text-lg font-serif">Home</li>
          </NavLink>

          <NavLink to="/about">
            <li className="p-4 font-bold text-lg font-serif">About</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="p-4 font-bold text-lg font-serif">Contact</li>
          </NavLink>
          <NavLink to="/services">
            <li className="p-4 font-bold text-lg font-serif">Services</li>
          </NavLink>
          <NavLink to="/portfoliyo">
            <li className="p-4 font-bold text-lg font-serif">Portfoliyo</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
