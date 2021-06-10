import React from "react";
import coverImage from "../../../images/coverimage.jpg";

const About = () => {
  return (
    <section className="p-10 flex justify-around mt-20 flex-col md:flex-row">
      <div className="w-full md:w-2/5">
        <img className="rounded" src={coverImage} />
      </div>
      <div className="w-full md:w-2/5 p-10">
        <h2 className="text-gray-600 font-black text-4xl">About Us</h2>
        <h3 className="text-green-600 font-bold text-xl">We are Tasty</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's stan dard dummy text
          ever since the 1500s,when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting.
        </p>
        <button className="transition transform duration-300 border p-2 text-white font-medium rounded mt-8 bg-green-500 hover:-translate-y-1">
          Know More
        </button>
      </div>
    </section>
  );
};

export default About;
