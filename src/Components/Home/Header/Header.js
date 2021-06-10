import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-screen header">
      <div className="flex flex-col justify-center items-center headerContainer w-full h-full">
        <h1 className="md:text-7xl text-4xl text-white font-black">
          NUKE RESTURANT
        </h1>
        <p className="text-white">Book your Favorite Food Now</p>
        <button className="transition transform duration-300 border p-2 text-white font-medium rounded mt-8 bg-black hover:bg-transparent hover:-translate-y-1">
          Order Foods
        </button>
      </div>
    </section>
  );
};

export default Header;
