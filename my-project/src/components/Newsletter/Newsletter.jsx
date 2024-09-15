import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
const Newsletter = () => {
  return (
    <div className="max-w-[500px] mx-auto space-y-5 py-14">
      <motion.h1
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className="text-3xl font-bold font-serif text-center"
      >
        Subscribe to our Newsletter
      </motion.h1>
      <motion.p
        variants={SlideUp(0.4)}
        initial="initial"
        whileInView="animate"
        className="max-w-[300px] mx-auto text-gray-500 text-sm text-center"
      >
        Bring your dream home to life with one-on-one design and hand picked
        products
      </motion.p>
      <motion.div
        variants={SlideUp(0.6)}
        initial="initial"
        whileInView="animate"
        className="flex justify-center !mt-10"
      >
        <input
          type="text"
          placeholder="Enter your mail"
          className="p-4 ring-1 ring-gray-300"
        />
        <button className="bg-black text-white px-6 py-4 uppercase">
          Subscribe
        </button>
      </motion.div>
    </div>
  );
};

export default Newsletter;
