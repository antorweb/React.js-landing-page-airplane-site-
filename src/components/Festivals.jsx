import React from "react";
import fesimg from "../assets/images/fes-img.png";
import brazil from "../assets/images/brazil.png";
import japan from "../assets/images/japan.png";
import india from "../assets/images/india.png";

const Festivals = () => {
  return (
    <>
      <section
        id="festivals"
        className="pt-[50px] sm:pt-[65px] lg:pt-[80px] pb-[60px] sm:pb-[75px] lg:pb-[83px]"
      >
        <div className="container px-4 sm:px-6">
          <div>
            <div className="mb-8">
              <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-bold font-poppins text-primary">
                Up coming festivals
              </h2>
            </div>

            <div className="pt-[16px] sm:pt-[20px] lg:pt-[26px] flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
              {/* Main Festival Card */}
              <div className="w-full lg:w-[872px] rounded-[12px] sm:rounded-[16px] hover:shadow-[5px_5px_10px_0px_rgba(0,_0,_0,_0.1)] border-2 border-primary transition-shadow overflow-hidden">
                <div className="px-[16px] sm:px-[20px] pt-[16px] sm:pt-[20px] pb-[20px] sm:pb-[27px]">
                  <div className="overflow-hidden rounded-[8px]">
                    <img src={fesimg} alt="fes-img" className="w-full h-auto" />
                  </div>
                  <div className="pt-[16px] sm:pt-[21px] pb-[10px] sm:pb-[13px]">
                    <p className="text-[14px] sm:text-[16px] font-normal font-poppins text-main">
                      June 15-20, 2025
                    </p>
                  </div>
                  <div>
                    <h2 className="text-[20px] sm:text-[24px] font-bold font-poppins text-main">
                      Songkran Water Festival
                    </h2>
                  </div>
                  <div className="max-w-full lg:w-[651px] pt-[8px] sm:pt-[7px] pb-[12px] sm:pb-[11px]">
                    <p className="text-[14px] sm:text-[16px] font-normal font-poppins text-main">
                      Experience the joy of Thailand's most famous festival with
                      water fights, traditional ceremonies, and cultural
                      performances.
                    </p>
                  </div>
                  <div className="flex gap-[12px] sm:gap-[10px] items-center">
                    <div className="w-[35px] h-[35px] rounded-full bg-primary flex-shrink-0"></div>
                    <div>
                      <h2 className="text-[14px] sm:text-[16px] font-semibold font-roboto text-main">
                        Bangkok, Thailand
                      </h2>
                      <p className="text-[13px] sm:text-[16px] font-normal font-poppins text-main">
                        15 days remaining
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Festival Cards */}
              <div className="w-full lg:w-auto flex flex-col gap-4 sm:gap-5 lg:gap-0">
                {/* Card 1 */}
                <div className="w-full sm:w-[424px] border rounded-[12px] sm:rounded-[16px] hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] transition-shadow">
                  <div className="py-[16px] sm:py-[18px] px-[16px] sm:px-[12px] flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-around items-start sm:items-center">
                    <div className="w-full sm:w-auto flex-shrink-0">
                      <img
                        src={brazil}
                        alt="brazil-img"
                        className="w-20 sm:w-auto h-auto"
                      />
                    </div>
                    <div className="w-full sm:flex-1">
                      <p className="text-[13px] sm:text-[16px] font-normal font-poppins text-main">
                        June 15-20, 2025
                      </p>
                      <h2 className="text-[14px] sm:text-[16px] font-semibold font-roboto pt-[8px] sm:pt-[10px] pb-[2px] sm:pb-[4px] text-main">
                        Rio Carnival
                      </h2>
                      <p className="text-[13px] sm:text-[16px] font-normal font-poppins text-main">
                        Rio de Janeiro, Brazil
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="w-full sm:w-[424px] border rounded-[12px] sm:rounded-[16px] hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] transition-shadow">
                  <div className="py-[16px] sm:py-[18px] px-[16px] sm:px-[12px] flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-around items-start sm:items-center">
                    <div className="w-full sm:w-auto flex-shrink-0">
                      <img
                        src={japan}
                        alt="japan-img"
                        className="w-20 sm:w-auto h-auto"
                      />
                    </div>
                    <div className="w-full sm:flex-1">
                      <p className="text-[13px] sm:text-[16px] font-normal font-poppins text-main">
                        August 15-17, 2025
                      </p>
                      <h2 className="text-[14px] sm:text-[16px] font-semibold font-roboto pt-[8px] sm:pt-[10px] pb-[2px] sm:pb-[4px] text-main">
                        Obon Festival
                      </h2>
                      <p className="text-[13px] sm:text-[16px] font-normal font-poppins text-main">
                        Kyoto, Japan
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="w-full sm:w-[424px] border rounded-[12px] sm:rounded-[16px] hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] transition-shadow">
                  <div className="py-[16px] sm:py-[18px] px-[16px] sm:px-[12px] flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-around items-start sm:items-center">
                    <div className="w-full sm:w-auto flex-shrink-0">
                      <img
                        src={india}
                        alt="india-img"
                        className="w-20 sm:w-auto h-auto"
                      />
                    </div>
                    <div className="w-full sm:flex-1">
                      <p className="text-[13px] sm:text-[16px] font-normal font-poppins text-main">
                        September 4-6, 2025
                      </p>
                      <h2 className="text-[14px] sm:text-[16px] font-semibold font-roboto pt-[8px] sm:pt-[10px] pb-[2px] sm:pb-[4px] text-main">
                        Holi Festival
                      </h2>
                      <p className="text-[13px] sm:text-[16px] font-normal font-poppins text-main">
                        New Delhi, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Festivals;
