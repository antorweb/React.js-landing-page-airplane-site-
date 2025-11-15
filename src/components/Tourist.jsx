import React from "react";
import woman from "../assets/images/woman.png";
import div from "../assets/images/div.png";

const Tourist = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container px-4 sm:px-6">
          <div className="pt-[50px] sm:pt-[70px] lg:pt-[85px] pb-[60px] sm:pb-[80px] lg:pb-[90px]">
            <div className="pb-[24px] sm:pb-[32px] mb-6">
              <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-bold font-poppins text-white">
                Tourist of the month
              </h2>
            </div>

            <div className="min-h-[336px] bg-white rounded-[12px] sm:rounded-[16px] overflow-hidden">
              <div className="flex flex-col lg:flex-row py-[20px] sm:py-[30px] px-[16px] sm:px-[24px] lg:px-[40px] justify-around items-center gap-6 sm:gap-8">
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={woman}
                    alt="woman-img"
                    className="h-[200px] sm:h-[240px] lg:h-auto w-auto"
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-auto text-center lg:text-left">
                  <h2 className="text-[20px] sm:text-[24px] font-bold font-poppins text-main">
                    sarah jonah
                  </h2>
                  <p className="text-[14px] sm:text-[16px] pt-[6px] font-normal font-poppins text-main">
                    Traveled to: Bali , Indonesia.
                  </p>

                  <div className="max-w-full lg:max-w-[638px] pt-[16px] pb-[12px] sm:pb-[6px]">
                    <p className="pl-[16px] sm:pl-[31px] border-l-2 border-main text-[14px] sm:text-[16px] italic font-poppins text-main">
                      "My trip to Bali was an unforgettable experience. The
                      beautiful beaches, friendly locals, and amazing food made
                      this journey truly special. I can't wait to go back and
                      explore more of this paradise island."
                    </p>
                  </div>

                  <div>
                    <img src={div} alt="div-img" className="mt-[12px] h-auto" />
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

export default Tourist;
