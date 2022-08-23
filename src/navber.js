import React from "react";
import { Link } from "react-router-dom";
export default function Navber() {
  return (
    <div>
      <div className=" px-2 sm:px-4 py-2.5 bg-black h-16">
        <div className="container flex flex-wrap justify-between items-center mx-auto ">
          <h1 className=" text-gray-100 py-4">WORLDS COLLIDE</h1>

          <div className="w-100 sm:px-4 ">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium  ">
              <li className=" text-gray-100 text-base">
                <Link to="/Home">Home</Link>
              </li>
              <Link to="/brand">
                <li className=" text-gray-100 text-base font-sans">
                  The brand
                </li>
              </Link>

              <Link to="/contact ">
                <li className=" text-gray-100 text-base">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
