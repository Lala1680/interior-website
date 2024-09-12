import React from "react";
import { FaSquareWebAwesomeStroke } from "react-icons/fa6";
import { AiOutlineDollar } from "react-icons/ai";
import { PiFlowerTulipFill } from "react-icons/pi";

const ServiceCard = [
  {
    id: 1,
    title: "Luxury Facilities",
    description:
      "Exclusive spas, fully-equipped gymnasium, indoor swimming pools, tennis court etc",
    icon: <FaSquareWebAwesomeStroke />,
    link: "#",
  },
  {
    id: 2,
    title: "Affordable Prices",
    description:
      "boasting a cost of living index of 85, rendering it the most affordable option.",
    icon: <AiOutlineDollar />,
    link: "#",
  },
  {
    id: 3,
    title: "Best Services",
    description:
      "We offer the best services for our clients, through our team and partners.",
    icon: <PiFlowerTulipFill />,
    link: "#",
  },
];
const Services = () => {
  return (
    <div>
      <div className="container py-20">
        {/* heading section */}
        <div className="text-center space-y-2 max-w-[350px] mx-auto mb-8">
          <h1 className="text-3xl font-bold font-serif">What we provide</h1>
          <p className="text-gray-500 text-sm">
            Bring your dream home to life with one-on-one design and hand picked
            products
          </p>
        </div>

        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ServiceCard.map((card) => {
            return (
              <div
                key={card.id}
                className="space-y-4 border-[1px] border-black/30 p-6 hover:bg-black hover:text-white hover:shadow-[7px_7px_0_0_#6c6c6c] duration-300"
              >
                <span className="inline-block text-xl border-black border-[1px] rounded-full p-3">
                  {card.icon}
                </span>
                <p className="text-2xl font-bold font-serif">{card.title}</p>
                <p className="text-gray-400 text-xs">{card.description}</p>
                <a
                  href={card.link}
                  className="inline-block border-b border-black"
                >
                  Learn More
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
