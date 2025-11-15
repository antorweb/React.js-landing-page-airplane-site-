import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import bannerImg from "../assets/images/bannerImg.png";

const Banner = () => {
  return (
    <>
      <section style={{ background: `#3C2086` }}>
        <div className="container px-4 sm:px-6">
          <div className="banner_row py-[40px] sm:py-[60px] lg:py-[88px] flex flex-col-reverse lg:flex-row justify-between items-center gap-8 sm:gap-12 lg:gap-0">
            <div className="w-full lg:w-auto text-center lg:text-left">
              <h1 className="max-w-full lg:w-[608px] leading-[120%] mb-[16px] text-[32px] sm:text-[42px] lg:text-[56px] font-bold font-poppins text-white">
                Discover Amazing places around the world
              </h1>
              <p className="max-w-full lg:w-[601px] mb-[24px] text-[16px] sm:text-[18px] lg:text-[20px] font-normal font-poppins text-white">
                Find and book hotel rooms, flight tickets, and tour packages at
                the best prices.
              </p>
              <button className="py-[10px] px-[20px] sm:px-[24px] flex justify-center sm:justify-between items-center gap-2 sm:gap-3 bg-white text-[14px] sm:text-[16px] font-normal font-roboto text-[#3C2086] rounded-[6px] hover:bg-gray-100 transition-colors w-full sm:w-auto">
                Explore services <FaArrowRightLong />
              </button>
            </div>
            <div className="w-full lg:w-auto flex justify-center lg:justify-end">
              <img
                src={bannerImg}
                alt="banner-img"
                className="max-w-full h-auto w-[280px] sm:w-[350px] lg:w-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
