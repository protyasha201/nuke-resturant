import React from "react";

const Contact = () => {
  return (
    <section className="bg-blue-300 p-10 flex flex-col justify-center align-center">
      <h1 className="font-bold text-gray-600 text-red text-3xl font-mono flex justify-center align-center">
        Contact Us
      </h1>
      <form className="m-auto mt-5 flex flex-col justify-center items-center border p-5 rounded w-full md:w-1/3 shadow">
        <p className="text-gray-600 relative top-5 text-xl">Your email</p>
        <input
          type="email"
          className="w-full mt-5 shadow-xl rounded p-2 text-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="email..."
        />
        <p className="text-gray-600 relative top-5 text-xl">
          Write your message
        </p>
        <textarea
          type="text"
          className="w-full mt-5 shadow-xl rounded p-2 text-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="message..."
        />
        <button className="transition transform duration-300 border p-2 text-white font-medium rounded mt-8 hover:-translate-y-1 bg-red-400">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
