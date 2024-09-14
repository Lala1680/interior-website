import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/animate";
const TestimonialData = [
  {
    id: 1,
    name: "John",
    designation: "developer",
    img: "https://images.generated.photos/CGRcRCaXKzcqF9oaFD0Z6OI9xiz70S-b3-O2xfrQJPM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTI5NjE5LmpwZw.jpg",
    text: "Interior has made our flat into a home, a home which we always wanted. They understood us and gave us our dream home.",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Kevin",
    designation: "Designer",
    img: "https://images.generated.photos/tGHubInlYQSUapLmz6IdvNuew4iOgEMbgEtV0u_WB2s/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTkzNTE4LmpwZw.jpg",
    text: "Overall an excellent piece of work by Interior. Truly overwhelmed by the complete Design and execution of the project.....",
    delay: 0.4,
  },
  {
    id: 3,
    name: "Janice",
    designation: "Manager",
    img: "https://images.generated.photos/L4sviu6YgqrIRIv-Qd7Zaw9NRkML8F1-AClp9nnuwF4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODk1NDY3LmpwZw.jpg",
    text: "I am delighted with the Designs and the support I received from all the teams involved in shaping my dream house.",
    delay: 0.6,
  },
];
const Testimonial = () => {
  return (
    <div className="py-14">
      {/* header text  */}
      <div className="text-center space-y-4 max-w-[550px] mx-auto mb-8">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-3xl font-bold font-serif"
        >
          Words from our customers
        </motion.h1>
        <motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-gray-500 text-sm max-w-[350px] mx-auto"
        >
          Bring your dream home to life with one-on-one design and hand picked
          products
        </motion.p>
      </div>
      {/* Testimonial cards */}
      <div className="bg-black py-12 container ">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
          {TestimonialData.map((card) => {
            return (
              <motion.div
                variants={SlideLeft(card.delay)}
                initial="initial"
                whileInView="animate"
                key={card.id}
                className="border-[1px] border-gray-500 px-5  py-10 text-white group hover:bg-white duration-300"
              >
                <div className="flex gap-3 items-center">
                  <img
                    src={card.img}
                    alt=""
                    className="w-[60px] rounded-full"
                  />

                  <div>
                    <p className="text-sm font-bold font-serif group-hover:text-black">
                      {card.name}
                    </p>
                    <p className="text-gray-400 text-xs">{card.designation}</p>

                    <div className="text-xs mt-2">⭐️⭐️⭐️⭐️⭐️</div>
                  </div>
                </div>
                <div className="mt-5 border-t-2 border-gray-500/40 pt-5 w-[300px] ">
                  <p className="text-gray-300 text-xs group-hover:text-black duration-300">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
