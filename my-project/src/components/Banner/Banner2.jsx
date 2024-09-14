import Banner1 from "../../assets/banner2.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const Banner2 = () => {
  return (
    <>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* text section */}
          <div className="space-y-5 flex flex-col justify-center xl:max-w-[500px]">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-serif"
            >
              Simple way to make stylish living room
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 text-sm leading-7"
            >
              Transform your home with personalized hall and living room
              interior design ideas, Discover tailored interior designs.
            </motion.p>
            <motion.div
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="flex gap-3"
            >
              <div className="max-w-[90px] space-y-1">
                <p className="text-xl font-bold font-serif">15</p>
                <p className="text-gray-500 text-sm">Years of Experience</p>
              </div>
              <div className="max-w-[90px] space-y-1">
                <p className="text-xl font-bold font-serif">350</p>
                <p className="text-gray-500 text-sm">Projects Completed</p>
              </div>
              <div className="max-w-[90px] space-y-1">
                <p className="text-xl font-bold font-serif">25</p>
                <p className="text-gray-500 text-sm">Awards Gained</p>
              </div>
            </motion.div>
            <div>
              <motion.button
                variants={SlideUp(0.8)}
                initial="initial"
                whileInView="animate"
                className="primary-btn bg-black text-white shadow-[5px_5px_0_0_#6c6c6c]"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
          {/* image section */}
          <div className="flex flex-col justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              src={Banner1}
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner2;
