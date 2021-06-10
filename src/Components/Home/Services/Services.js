import React from "react";
import breakfast from "../../../images/breakfast.jpg";
import lunch from "../../../images/lunch.jpg";
import dinner from "../../../images/dinner.jpg";
import others from "../../../images/other-food.jpg";

const services = [
  {
    title: "Breakfast",
    Image: breakfast,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry been the industry’s stan",
  },
  {
    title: "Lunch",
    Image: lunch,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry been the industry’s stan",
  },
  {
    title: "Dinner",
    Image: dinner,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry been the industry’s stan",
  },
  {
    title: "Others",
    Image: others,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry been the industry’s stan",
  },
];
const Services = () => {
  return (
    <section className="p-10 border-t-2 md:mt-10">
      <h2 className="text-indigo-500 font-black text-4xl">Our Services</h2>
      <h3 className="text-gray-400 font-bold text-xl">What We Offer</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {services.map((service) => (
          <div
            className="mt-5 border p-3 rounded md:w-full"
            key={service.title}
          >
            <h1 className="font-bold text-gray-600 text-lg">{service.title}</h1>
            <img className="rounded h-60 w-full" src={service.Image} />
            <p className="text-gray-500 font-light">{service.des}</p>
            <button className="transition transform duration-300 border p-2 text-white font-medium rounded mt-8 bg-blue-400 hover:-translate-y-1">
              View Menu
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
