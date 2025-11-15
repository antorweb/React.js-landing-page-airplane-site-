import React from "react";
import footerimg from "../assets/images/footer_img.png";
import { Link } from "react-router";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="bg-primary ">
        <div className="container px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row justify-between pt-[40px] sm:pt-[66px] pb-[24px] sm:pb-[42px] gap-8 lg:gap-0 items-start">
            <Link to={"/"} className="flex-shrink-0">
              <img
                src={footerimg}
                alt="footer-img"
                className="max-w-[120px] sm:max-w-[160px] lg:max-w-[199px]"
              />
              <div className="w-full sm:w-[199px] pt-[12px] sm:pt-[20px]">
                <p className="text-[14px] sm:text-[16px] font-normal font-poppins text-white">
                  Discover the world with us. We provide the best travel
                  experiences with affordable prices.
                </p>
              </div>
            </Link>

            <div className="flex flex-col">
              <div>
                <h2 className="text-[16px] font-medium font-poppins text-white">
                  Quick Links
                </h2>
              </div>
              <div className="pt-[20px] sm:pt-[30px] flex flex-col gap-[10px]">
                <Link className="text-[14px] sm:text-[16px] font-normal font-poppins text-white">
                  About us
                </Link>
                <Link className="text-[14px] sm:text-[16px] font-normal font-poppins text-white">
                  Contact us
                </Link>
                <Link className="text-[14px] sm:text-[16px] font-normal font-poppins text-white">
                  Terms & Conditions
                </Link>
                <Link className="text-[14px] sm:text-[16px] font-normal font-poppins text-white">
                  Privacy & Policy
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <h2 className="text-[16px] font-medium font-poppins text-white">
                  Services
                </h2>
              </div>
              <div className="pt-[20px] sm:pt-[30px] flex flex-col gap-[10px]">
                <Link className="text-[14px] sm:text-[16px] font-normal font-poppins text-white">
                  Hotels & Resorts
                </Link>
                <Link className="text-[14px] sm:text-[16px] font-normal font-poppins text-white">
                  Flight Booking
                </Link>
                <Link className="text-[14px] sm:text-[16px] font-normal font-poppins text-white">
                  Tour Pakages
                </Link>
                <Link className="text-[14px] sm:text-[16px] font-normal font-poppins text-white">
                  Travel insurance
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <h2 className="text-[16px] font-medium font-poppins text-white">
                  Subscribe to Newsletter
                </h2>
              </div>
              <div className="pt-[10px] pb-[20px]">
                <p className="text-[14px] sm:text-[16px] font-normal font-poppins text-white">
                  Get weekly updates and new offers
                </p>
              </div>
              <div className="w-full bg-[#fff] rounded-[4px] flex flex-col">
                <input
                  className="w-full py-[10px] px-[16px] border-none outline-none bg-white rounded-[4px]"
                  type="email"
                  placeholder="Your email"
                />
                <button className="w-full bg-black py-[10px] text-[#fff] flex justify-center items-center rounded-[4px] mt-2">
                  <GoMail />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
