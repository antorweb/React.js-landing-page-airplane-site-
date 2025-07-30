import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import bannerImg from '../assets/images/bannerImg.png'

const Banner = () => {
  return (
    <>
      <section style={{ background: `#3C2086` }}>
        <div className="container">
          <div className="banner_row py-[88px] flex  justify-between items-center">
            <div>
              <h1 className="w-[608px] leading-[120%] mb-[16px] text-[56px] font-bold font-poppins text-white">
                Discover Amazing places around the world
              </h1>
              <p className="w-[601px] mb-[16px] text-[20px] font-normal font-poppins text-white">
                Find and book hotel rooms, flight tickets, and tour packages at
                the best prices.
              </p>
              <button className="w-[182px] py-[10px] px-[20px] flex justify-between items-center bg-white text-[16px] font-normal font-roboto text-[#3C2086] rounded-[6px]">Explore services <FaArrowRightLong /> </button>
            </div>
            <div>
                <img src={bannerImg} alt="banner-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
