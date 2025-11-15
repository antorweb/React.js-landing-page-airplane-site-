import React from "react";
import CommonHead from "./common/CommonHead";
import italy from "../assets/images/italy.png";
import canada from "../assets/images/canada.png";
import kyoto from "../assets/images/kyoto.png";
import phuket from "../assets/images/phuket.png";
import { FiClock } from "react-icons/fi";

const Itinerary = () => {
  return (
    <>
      <section id="itinary" className="py-[50px] sm:py-[65px] lg:py-[80px]">
        <div className="container px-4 sm:px-6">
          <div className="flex gap-[8px] sm:gap-[10px] items-center">
            <FiClock className="text-[28px] sm:text-[32px] lg:text-[38px]" />{" "}
            <CommonHead h2={"Places to Visit in 1 Day"} />
          </div>

          <div className="pt-[32px] sm:pt-[38px] lg:pt-[43px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="rounded-[6px] hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] min-h-[296px] border border-primary transition-shadow flex flex-col">
                <div className="py-[12px] sm:py-[14px] px-[12px] sm:px-[9px] flex flex-col h-full">
                  <div className="pb-[12px] sm:pb-[15px]">
                    <img
                      src={italy}
                      alt="maldiv-omg"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="pb-[12px] sm:pb-[6px] flex-grow">
                    <h2 className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold font-poppins text-main">
                      Historic City Center
                    </h2>
                    <p className="text-[11px] sm:text-[12px] font-normal font-poppins pt-[4px] sm:pt-[6px] pb-[5px] sm:pb-[7px] text-main">
                      Rome, Italy
                    </p>
                    <p className="text-[11px] sm:text-[12px] font-normal font-poppins flex gap-[5px] items-center text-main">
                      <FiClock /> 8 hours
                    </p>
                  </div>
                  <button className="w-full py-[8px] rounded-[4px] bg-primary text-[11px] sm:text-[12px] font-normal font-poppins text-white hover:bg-[#4620d0] transition-colors">
                    View Itinerary
                  </button>
                </div>
              </div>

              <div className="rounded-[6px] hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] min-h-[296px] border border-primary transition-shadow flex flex-col">
                <div className="py-[12px] sm:py-[14px] px-[12px] sm:px-[9px] flex flex-col h-full">
                  <div className="pb-[12px] sm:pb-[15px]">
                    <img
                      src={canada}
                      alt="maldiv-omg"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="pb-[12px] sm:pb-[6px] flex-grow">
                    <h2 className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold font-poppins text-main">
                      National Park Trail
                    </h2>
                    <p className="text-[11px] sm:text-[12px] font-normal font-poppins pt-[4px] sm:pt-[6px] pb-[5px] sm:pb-[7px] text-main">
                      Vancouver, Canada
                    </p>
                    <p className="text-[11px] sm:text-[12px] font-normal font-poppins flex gap-[5px] items-center text-main">
                      <FiClock /> 6 hours
                    </p>
                  </div>
                  <button className="w-full py-[8px] rounded-[4px] bg-primary text-[11px] sm:text-[12px] font-normal font-poppins text-white hover:bg-[#4620d0] transition-colors">
                    {" "}
                    View Itinerary
                  </button>
                </div>
              </div>

              <div className="rounded-[6px] hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] min-h-[296px] border border-primary transition-shadow flex flex-col">
                <div className="py-[12px] sm:py-[14px] px-[12px] sm:px-[9px] flex flex-col h-full">
                  <div className="pb-[12px] sm:pb-[15px]">
                    <img
                      src={kyoto}
                      alt="maldiv-omg"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="pb-[12px] sm:pb-[6px] flex-grow">
                    <h2 className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold font-poppins text-main">
                      Cultural Heritage
                    </h2>
                    <p className="text-[11px] sm:text-[12px] font-normal font-poppins pt-[4px] sm:pt-[6px] pb-[5px] sm:pb-[7px] text-main">
                      Kyoto, Japan
                    </p>
                    <p className="text-[11px] sm:text-[12px] font-normal font-poppins flex gap-[5px] items-center text-main">
                      <FiClock /> 8 hours
                    </p>
                  </div>
                  <button className="w-full py-[8px] rounded-[4px] bg-primary text-[11px] sm:text-[12px] font-normal font-poppins text-white hover:bg-[#4620d0] transition-colors">
                    View Itinerary
                  </button>
                </div>
              </div>

              <div className="rounded-[6px] hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] min-h-[296px] border border-primary transition-shadow flex flex-col">
                <div className="py-[12px] sm:py-[14px] px-[12px] sm:px-[9px] flex flex-col h-full">
                  <div className="pb-[12px] sm:pb-[15px]">
                    <img
                      src={phuket}
                      alt="maldiv-omg"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="pb-[12px] sm:pb-[6px] flex-grow">
                    <h2 className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold font-poppins text-main">
                      Island Boat Tour
                    </h2>
                    <p className="text-[11px] sm:text-[12px] font-normal font-poppins pt-[4px] sm:pt-[6px] pb-[5px] sm:pb-[7px] text-main">
                      Phuket, Thailand
                    </p>
                    <p className="text-[11px] sm:text-[12px] font-normal font-poppins flex gap-[5px] items-center text-main">
                      <FiClock /> 8 hours
                    </p>
                  </div>
                  <button className="w-full py-[8px] rounded-[4px] bg-primary text-[11px] sm:text-[12px] font-normal font-poppins text-white hover:bg-[#4620d0] transition-colors">
                    View Itinerary
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

export default Itinerary;
