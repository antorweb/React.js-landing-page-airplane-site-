import React from "react";
import fesimg from "../assets/images/fes-img.png";
import brazil from '../assets/images/brazil.png'
import japan from '../assets/images/japan.png'
import india from '../assets/images/india.png'

const Festivals = () => {
  return (
    <>
      <section id="festivals" className="pt-[80px] pb-[83px]">
        <div className="container">
          <div>
            <div> <h2 className="text-[44px] font-bold font-poppins text-primary">Up coming festivals</h2>  </div>

            <div className="pt-[26px] flex justify-between ">

              <div className="w-[872px] h-[596px] rounded-[16px] hover:shadow-[5px_5px_10px_0px_rgba(0,_0,_0,_0.1)]  border-2 border-primary">
                <div className="px-[20px] pt-[20px] pb-[27px]">
                <div> <img src={fesimg} alt="fes-img" />   </div>
                <div className="pt-[21px] pb-[13px]">   <p className="text-[16px] font-normal font-poppins text-main">June 15-20, 2025</p> </div>
                <div> <h2 className="text-[24px] font-bold font-poppins text-main">Songkran Water Festival</h2></div>
                <div className="w-[651px] pt-[7px] pb-[11px]"> <p className="text-[16px] font-normal font-poppins text-main"> Experience the joy of Thailand's most famous festival with water fights, traditional ceremonies, and cultural  performances.  </p> </div>
                <div className="flex gap-[10px] items-center">
                    <div className="w-[35px] h-[35px] rounded-full bg-primary"></div>
                    <div>
                    <h2 className="text-[16px] font-semibold font-roboto text-main">Bangkok, Thailand</h2>
                    <p className="text-[16px] font-normal font-poppins text-main">15 days remaining</p>
                    </div>
                </div>
                </div>
              </div>

              <div>

                <div className="w-[424px] border rounded-[16px]">
                    <div className="py-[18px] flex justify-around items-center">
                        <div><img src={brazil} alt="brazil-img" /></div>
                        <div>
                            <p className="text-[16px] font-normal font-poppins text-main">June 15-20, 2025</p>
                            <h2 className="text-[16px] font-semibold font-roboto pt-[10px] pb-[4px] text-main">Rio Carnival</h2>
                            <p className="text-[16px] font-normal font-poppins text-main">Rio de Janeiro, Brazil</p>
                        </div>
                    </div>
                </div>

               <div className="w-[424px] my-[20px] border rounded-[16px]">
                    <div className="py-[18px] flex justify-around items-center">
                        <div><img src={japan} alt="brazil-img" /></div>
                        <div>
                            <p className="text-[16px] font-normal font-poppins text-main">August 15-17, 2025</p>
                            <h2 className="text-[16px] font-semibold font-roboto pt-[10px] pb-[4px] text-main">Obon Festival</h2>
                            <p className="text-[16px] font-normal font-poppins text-main">Kyoto, Japan</p>
                        </div>
                    </div>
                </div>

               <div className="w-[424px] border rounded-[16px]">
                    <div className="py-[18px] flex justify-around items-center">
                        <div><img src={india} alt="brazil-img" /></div>
                        <div>
                            <p className="text-[16px] font-normal font-poppins text-main">September 4-6, 2025</p>
                            <h2 className="text-[16px] font-semibold font-roboto pt-[10px] pb-[4px] text-main">Holi Festival</h2>
                            <p className="text-[16px] font-normal font-poppins text-main">New Delhi, India</p>
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
