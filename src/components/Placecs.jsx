import React from "react";
import maldiv from "../assets/images/maldives.png";
import sw from "../assets/images/sw.png";
import dubai from "../assets/images/dubai.png";
import greece from "../assets/images/greece.png";
import { FaCalendarMinus } from "react-icons/fa";

const Placecs = () => {
  return (
    <>
      <section id="places" className="py-[50px] sm:py-[65px] lg:py-[81px]">
        <div className="container px-4 sm:px-6">
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4">
              <div>
                <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold font-poppins text-main">
                  Places for <span className="text-primary">Summer Season</span>
                </h2>
              </div>
              <div>
                <h2 className="text-[13px] sm:text-[14px] lg:text-[16px] font-medium font-poppins text-main flex gap-[10px] items-center whitespace-nowrap">
                  <FaCalendarMinus /> June - August 2025
                </h2>
              </div>
            </div>
            <div className="pt-[12px] sm:pt-[15px] lg:pt-[9px] pb-[20px] sm:pb-[25px] lg:pb-[30px]">
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal font-poppins text-main">
                Best destinations to visit in the upcoming season
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="rounded-[6px] hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] border border-primary transition-shadow flex flex-col h-full">
                <div className="py-[20px] sm:py-[22px] px-[16px] sm:px-[9px] flex flex-col h-full">
                  <div>
                    <h2 className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold font-poppins text-main">
                      Tropical Beach Resorts
                    </h2>
                    <p className="text-[12px] sm:text-[11px] lg:text-[10px] font-normal font-poppins text-main">
                      Maldives
                    </p>
                  </div>
                  <div className="pt-[12px] sm:pt-[15px] lg:pt-[17px] pb-[12px] sm:pb-[13px] lg:pb-[15px] flex-grow">
                    <img
                      src={maldiv}
                      alt="maldiv-img"
                      className="w-full h-auto"
                    />
                  </div>
                  <button className="w-full py-[8px] rounded-[4px] bg-primary text-[11px] sm:text-[12px] font-normal font-poppins text-white hover:bg-[#4620d0] transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              <div className="rounded-[6px] hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] border border-primary transition-shadow flex flex-col h-full">
                <div className="py-[20px] sm:py-[22px] px-[16px] sm:px-[9px] flex flex-col h-full">
                  <div>
                    <h2 className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold font-poppins text-main">
                      Mountain Retreats
                    </h2>
                    <p className="text-[12px] sm:text-[11px] lg:text-[10px] font-normal font-poppins text-main">
                      Switzerland
                    </p>
                  </div>
                  <div className="pt-[12px] sm:pt-[15px] lg:pt-[17px] pb-[12px] sm:pb-[13px] lg:pb-[15px] flex-grow">
                    <img
                      src={sw}
                      alt="switzerland-img"
                      className="w-full h-auto"
                    />
                  </div>
                  <button className="w-full py-[8px] rounded-[4px] bg-primary text-[11px] sm:text-[12px] font-normal font-poppins text-white hover:bg-[#4620d0] transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              <div className="rounded-[6px] hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] border border-primary transition-shadow flex flex-col h-full">
                <div className="py-[20px] sm:py-[22px] px-[16px] sm:px-[9px] flex flex-col h-full">
                  <div>
                    <h2 className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold font-poppins text-main">
                      Desert Safaris
                    </h2>
                    <p className="text-[12px] sm:text-[11px] lg:text-[10px] font-normal font-poppins text-main">
                      Dubai
                    </p>
                  </div>
                  <div className="pt-[12px] sm:pt-[15px] lg:pt-[17px] pb-[12px] sm:pb-[13px] lg:pb-[15px] flex-grow">
                    <img
                      src={dubai}
                      alt="dubai-img"
                      className="w-full h-auto"
                    />
                  </div>
                  <button className="w-full py-[8px] rounded-[4px] bg-primary text-[11px] sm:text-[12px] font-normal font-poppins text-white hover:bg-[#4620d0] transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              <div className="rounded-[6px] hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] border border-primary transition-shadow flex flex-col h-full">
                <div className="py-[20px] sm:py-[22px] px-[16px] sm:px-[9px] flex flex-col h-full">
                  <div>
                    <h2 className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold font-poppins text-main">
                      Island Getaways
                    </h2>
                    <p className="text-[12px] sm:text-[11px] lg:text-[10px] font-normal font-poppins text-main">
                      Greece
                    </p>
                  </div>
                  <div className="pt-[12px] sm:pt-[15px] lg:pt-[17px] pb-[12px] sm:pb-[13px] lg:pb-[15px] flex-grow">
                    <img
                      src={greece}
                      alt="greece-img"
                      className="w-full h-auto"
                    />
                  </div>
                  <button className="w-full py-[8px] rounded-[4px] bg-primary text-[11px] sm:text-[12px] font-normal font-poppins text-white hover:bg-[#4620d0] transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Placecs;
