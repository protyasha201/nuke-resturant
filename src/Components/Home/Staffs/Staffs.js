import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import chef1 from "../../../images/chef-1.jpg";
import chef2 from "../../../images/chef-2.jpg";
import chef3 from "../../../images/chef-3.jpg";
import chef4 from "../../../images/chef-4.jpg";

const staffs = [
  {
    nameIs: "Masum Rana",
    img: chef1,
    title: "A experienced chef making breakfast",
  },
  {
    nameIs: "David Kim",
    img: chef2,
    title: "Experienced in making delicious lunch",
  },
  {
    nameIs: "Jannatul Ferdous",
    img: chef3,
    title: "Dinner is made by Jannatul",
  },
  {
    nameIs: "Rashed Kabir",
    img: chef4,
    title: "Holding up other delicious stuffs",
  },
];
const Staffs = () => {
  return (
    <section className="mt-10 p-10">
      <h2 className="text-green-400 font-bold text-4xl">Meet Our Staffs</h2>
      <h3 className="text-gray-400 font-thin">Who are Experienced</h3>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-5">
        {staffs.map((chef) => (
          <div
            className="m-auto p-5 w-full text-center flex flex-col justify-center align-center mt-10 shadow-xl hover:shadow-2xl"
            key={chef.nameIs}
          >
            <img className="m-auto w-2/4" src={chef.img} />
            <h3 className="font-bold text-gray-700">{chef.nameIs}</h3>
            <p classNam="">{chef.title}</p>
            <div className="flex justify-around w-40 m-auto mt-5">
              <FontAwesomeIcon
                className="cursor-pointer text-blue-400 text-xl"
                icon={faFacebook}
              />
              <FontAwesomeIcon
                className="cursor-pointer text-red-400 text-xl"
                icon={faInstagram}
              />
              <FontAwesomeIcon
                className="cursor-pointer text-blue-500 text-xl"
                icon={faTwitter}
              />
              <FontAwesomeIcon
                className="cursor-pointer text-xl"
                icon={faPinterest}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Staffs;
