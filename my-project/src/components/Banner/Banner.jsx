import Banner1 from "../../assets/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const Banner = () => {
  return (
    <>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* image section */}
          <div className="flex flex-col justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Banner1}
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
          {/* text section */}
          <div className="space-y-5 flex flex-col justify-center xl:max-w-[500px]">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-serif"
            >
              We believe that a team makes any project better
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 text-sm leading-7"
            >
              Teamwork is the ability to work together toward a common vision.
              The ability to direct individual accomplishments toward
              organizational objectives.
            </motion.p>
            <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn bg-black text-white shadow-[5px_5px_0_0_#6c6c6c]"
              >
                Discover Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
