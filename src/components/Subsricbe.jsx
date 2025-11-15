import React from "react";
import { GoMail } from "react-icons/go";

const Subsricbe = () => {
  return (
    <>
      <section className="pb-[40px] sm:pb-[60px] lg:pb-[80px]">
        <div className="container px-4 sm:px-6">
          <div className="min-h-[420px] sm:min-h-[360px] lg:min-h-[420px] rounded-[16px] bg-primary">
            <div className="py-[36px] sm:py-[48px] lg:py-[52px] text-center">
              <div className="flex justify-center">
                <div className="w-[64px] h-[64px] sm:w-[86px] sm:h-[86px] rounded-full bg-white flex justify-center items-center">
                  <GoMail className="text-[28px] sm:text-[36px]" />{" "}
                </div>
              </div>
              <div className="pt-[10px]">
                <h2 className="text-[24px] sm:text-[32px] lg:text-[44px] font-bold font-poppins text-white">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-[14px] sm:text-[16px] font-normal font-poppins text-white">
                  Stay updated with our latest travel deals, new blog posts, and
                  exclusive offers.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-[15px] mt-[24px] sm:mt-[30px] mb-[21px]">
                  <div className="w-full sm:w-[420px] bg-white py-[12px] sm:py-[15px] pl-[16px] sm:pl-[20px] rounded-[8px]">
                    <input
                      className="w-full sm:w-[80%] text-[14px] sm:text-[16px] font-normal font-poppins text-main border-none outline-none"
                      type="email"
                      placeholder="Enter your email"
                    />{" "}
                  </div>
                  <button className="w-full sm:w-[200px] text-[14px] sm:text-[16px] font-semibold font-roboto text-[#D9D9D9] py-[12px] sm:py-[15px] bg-main rounded-[8px]">
                    Subscribe Now
                  </button>
                </div>
                <div>
                  <p className="text-[14px] sm:text-[16px] font-normal font-poppins text-white">
                    By subscribing, you agree to our Privacy Policy and to
                    receive updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subsricbe;
