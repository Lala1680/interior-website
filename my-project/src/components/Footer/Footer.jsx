import Logo from "../../assets/logo.png";
import { FaMessage, FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";

const Footer = () => {
  return (
    <motion.footer
      variants={SlideLeft(0.2)}
      initial="initial"
      whileInView="animate"
    >
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div className="space-y-3 font-semibold">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="" className="w-6" />
              <span className="text-2xl font-semibold">Interior</span>
            </div>
            <p>Belagavi, Karnataka, India</p>
            <p>@ 2024 TCJ all rights reserved</p>
          </div>
          {/* Footer links */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">About Us</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">Our story</a>
                </li>
                <li>
                  <a href="#">Designer</a>
                </li>
                <li>
                  <a href="#">Craftsmanship</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Care guide</a>
                </li>
                <li>
                  <a href="#">Warranty</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Contacr section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact Us</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="#">+91 123456789</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaMessage />
                <a href="#">xyz@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright section */}
        <p className="text-center text-xs font-semibold border-t-2 mt-5 pt-2">
          <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a> |{" "}
          <a href="#">India code</a>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
