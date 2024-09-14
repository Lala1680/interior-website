import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
const Newsletter = () => {
  return (
    <div className="max-w-[500px] mx-auto space-y-5 text-center py-14">
      <motion.h1
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className="text-3xl font-bold font-serif"
      >
        Subscribe to our Newsletter
      </motion.h1>
      <motion.p
        variants={SlideUp(0.4)}
        initial="initial"
        whileInView="animate"
        className="max-w-[350px] mx-auto text-gray-500 text-sm text-center"
      >
        Bring your dream home to life with one-on-one design and hand picked
        products
      </motion.p>
      <motion.div
        variants={SlideUp(0.6)}
        initial="initial"
        whileInView="animate"
        className="flex justify-center !mt-8"
      >
        <input
          type="text"
          placeholder="Enter your mail"
          className="p-4 border-[1px] border-black"
        />
        <button className="bg-black text-white px-6 py-3 uppercase">
          Subscribe
        </button>
      </motion.div>
    </div>
  );
};

export default Newsletter;
