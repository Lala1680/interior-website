import React from "react";
import Banner1 from "../../assets/banner.png";

const Banner = () => {
  return (
    <>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* image section */}
          <div className="flex flex-col justify-center">
            <img src={Banner1} alt="" className="w-[95%] md:w-full mx-auto" />
          </div>
          {/* text section */}
          <div className="space-y-5 flex flex-col justify-center">
            <h1 className="text-4xl font-bold font-serif">
              We believe that a team makes any project better
            </h1>
            <p className="text-gray-500 text-sm leading-7">
              Teamwork is the ability to work together toward a common vision.
              The ability to direct individual accomplishments toward
              organizational objectives.
            </p>
            <div>
              <button className="primary-btn bg-black text-white shadow-[5px_5px_0_0_#6c6c6c]">
                Discover Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
