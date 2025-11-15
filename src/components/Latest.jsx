import React from "react";
import CommonHead from "./common/CommonHead";
import { Link } from "react-router";
import hotel from "../assets/images/hotel.png";
import plan from "../assets/images/plan.png";
import packag from "../assets/images/pacage.png";
import { LuCalendar } from "react-icons/lu";
import { PiQrCode } from "react-icons/pi";
import { LuHotel } from "react-icons/lu";

const Latest = () => {
  return (
    <>
      <section
        id="latest"
        className="pt-[40px] sm:pt-[60px] lg:pt-[76px] pb-[60px] sm:pb-[80px]"
      >
        <div className="container px-4 sm:px-6">
            <div>
              <CommonHead h2={"Latest offers"} />
            </div>
          <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4 sm:gap-0 mb-8">
            <Link className="w-auto py-[10px] px-[20px] text-[14px] sm:text-[16px] font-medium font-roboto text-main border border-[#5927E5] rounded-[6px] hover:bg-[#5927E5] hover:text-white transition-colors whitespace-nowrap">
              View All
            </Link>
          </div>

          <div className="pt-[28px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="min-h-[544px] hover:shadow-[5px_5px_0px_0px_rgba(0,_0,_0,_0.5)] border rounded-[8px] border-[#5927E5] transition-shadow flex flex-col">
              <div className="py-[24px] sm:py-[36px] px-[16px] sm:px-[13px] flex flex-col h-full">
                <div className="w-[60px] h-[60px] bg-primary rounded-[8px] flex justify-center items-center">
                  <LuCalendar className="text-[24px] text-white" />
                </div>
                <div className="flex justify-between items-start gap-3 pt-[16px] pb-[4px]">
                  <h2 className="text-[18px] sm:text-[24px] font-bold font-poppins text-main">
                    beach resort Weakend
                  </h2>
                  <div className="bg-primary py-[4px] px-[8px] rounded-[20px] text-[12px] sm:text-[16px] font-normal font-poppins text-[#fff] whitespace-nowrap flex-shrink-0">
                    30% OFF
                  </div>
                </div>
                <div>
                  <p className="text-[14px] sm:text-[16px] font-normal font-poppins text-main">
                    Hotel
                  </p>
                </div>
                <div className="pt-[16px] sm:pt-[24px] pb-[12px] sm:pb-[15px] flex-grow">
                  <img src={hotel} alt="hotel-img" className="w-full h-auto" />
                </div>
                <div className="flex gap-[7px] items-center mb-[20px]">
                  <h2 className="text-[20px] sm:text-[24px] font-bold font-poppins text-main">
                    $299
                  </h2>
                  <p className="text-[14px] sm:text-[16px] font-normal font-poppins line-through text-main">
                    $380.6
                  </p>
                </div>
                <button className="w-full bg-primary rounded-[6px] py-[10px] text-[14px] sm:text-[16px] font-normal font-poppins text-white hover:bg-[#4620d0] transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="min-h-[544px] hover:shadow-[5px_5px_0px_0px_rgba(0,_0,_0,_0.5)] border rounded-[8px] border-[#5927E5] transition-shadow flex flex-col">
              <div className="py-[24px] sm:py-[36px] px-[16px] sm:px-[13px] flex flex-col h-full">
                <div className="w-[60px] h-[60px] bg-primary rounded-[8px] flex justify-center items-center">
                  <PiQrCode className="text-[24px] text-[#fff]" />
                </div>
                <div className="flex justify-between items-start gap-3 pt-[16px] pb-[4px]">
                  <h2 className="text-[18px] sm:text-[24px] font-bold font-poppins text-main">
                    International flight deal
                  </h2>
                  <div className="bg-primary py-[4px] px-[8px] rounded-[20px] text-[12px] sm:text-[16px] font-normal font-poppins text-[#fff] whitespace-nowrap flex-shrink-0">
                    30% OFF
                  </div>
                </div>
                <div>
                  <p className="text-[14px] sm:text-[16px] font-normal font-poppins text-main">
                    Air Ticket
                  </p>
                </div>
                <div className="pt-[16px] sm:pt-[24px] pb-[12px] sm:pb-[15px] flex-grow">
                  <img src={plan} alt="hotel-img" className="w-full h-auto" />
                </div>
                <div className="flex gap-[7px] items-center mb-[20px]">
                  <h2 className="text-[20px] sm:text-[24px] font-bold font-poppins text-main">
                    $299
                  </h2>
                  <p className="text-[14px] sm:text-[16px] font-normal font-poppins line-through text-main">
                    $380.6
                  </p>
                </div>
                <button className="w-full bg-primary rounded-[6px] py-[10px] text-[14px] sm:text-[16px] font-normal font-poppins text-white hover:bg-[#4620d0] transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="min-h-[544px] hover:shadow-[5px_5px_0px_0px_rgba(0,_0,_0,_0.5)] border rounded-[8px] border-[#5927E5] transition-shadow flex flex-col">
              <div className="py-[24px] sm:py-[36px] px-[16px] sm:px-[13px] flex flex-col h-full">
                <div className="w-[60px] h-[60px] bg-primary rounded-[8px] flex justify-center items-center">
                  <LuHotel className="text-[24px] text-white" />
                </div>
                <div className="flex justify-between items-start gap-3 pt-[16px] pb-[4px]">
                  <h2 className="text-[18px] sm:text-[24px] font-bold font-poppins text-main">
                    Mountain Treking point
                  </h2>
                  <div className="bg-primary py-[4px] px-[8px] rounded-[20px] text-[12px] sm:text-[16px] font-normal font-poppins text-[#fff] whitespace-nowrap flex-shrink-0">
                    30% OFF
                  </div>
                </div>
                <div>
                  <p className="text-[14px] sm:text-[16px] font-normal font-poppins text-main">
                    Tour pakage
                  </p>
                </div>
                <div className="pt-[16px] sm:pt-[24px] pb-[12px] sm:pb-[15px] flex-grow">
                  <img src={packag} alt="hotel-img" className="w-full h-auto" />
                </div>
                <div className="flex gap-[7px] items-center mb-[20px]">
                  <h2 className="text-[20px] sm:text-[24px] font-bold font-poppins text-main">
                    $399
                  </h2>
                  <p className="text-[14px] sm:text-[16px] font-normal font-poppins line-through text-main">
                    $518.6
                  </p>
                </div>
                <button className="w-full bg-primary rounded-[6px] py-[10px] text-[14px] sm:text-[16px] font-normal font-poppins text-white hover:bg-[#4620d0] transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Latest;
