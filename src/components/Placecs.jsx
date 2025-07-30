import React from 'react'
import maldiv from '../assets/images/maldives.png'
import sw from '../assets/images/sw.png'
import dubai from '../assets/images/dubai.png'
import greece from '../assets/images/greece.png'
import { FaCalendarMinus } from "react-icons/fa";

const Placecs = () => {
  return (
    <>
    
    
    
    <section id='places' className='py-[81px]'>
        <div className="container">
            <div>
                <div className='flex justify-between items-center'>
                    <div><h2 className='text-[44px] font-bold font-poppins text-main'>Places for <span className='text-primary'>Summer Season</span></h2></div>
                    <div><h2 className='text-[16px] font-medium font-poppins text-main flex gap-[10px] items-center '><FaCalendarMinus /> June - August 2025</h2></div>
                </div>
                <div className='pt-[9px] pb-[30px]'><p className='text-[16px] font-normal font-poppins text-main'>Best destinations to visit in the upcoming season</p></div>
           
           

           <div className='flex justify-between items-center'>

            <div className='w-[309px] rounded-[6px] hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] h-[296px] border border-primary'>
                <div className='py-[22px] px-[9px]'>

                    <div>
                        <h2 className='text-[16px] font-bold font-poppins text-main'>Tropical Beach Resorts</h2>
                        <p className='text-[10px] font-normal font-poppins text-main'>Maldives</p>
                    </div>
                    <div className='pt-[17px] pb-[15px]'><img src={maldiv} alt="maldiv-omg" /></div>
                    <button className='w-[281px] py-[8px] rounded-[4px] bg-primary text-[12px] font-normal font-poppins text-white'> View Details</button>



                </div>

            </div>

            <div className='w-[309px] rounded-[6px] hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] h-[296px] border border-primary'>
                <div className='py-[22px] px-[9px]'>

                    <div>
                        <h2 className='text-[16px] font-bold font-poppins text-main'>Mountain Retreats</h2>
                        <p className='text-[10px] font-normal font-poppins text-main'>Switzerland</p>
                    </div>
                    <div className='pt-[17px] pb-[15px]'><img src={sw} alt="maldiv-omg" /></div>
                    <button className='w-[281px] py-[8px] rounded-[4px] bg-primary text-[12px] font-normal font-poppins text-white'> View Details</button>



                </div>

            </div>

            <div className='w-[309px] rounded-[6px] hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] h-[296px] border border-primary'>
                <div className='py-[22px] px-[9px]'>

                    <div>
                        <h2 className='text-[16px] font-bold font-poppins text-main'>Desert Safaris</h2>
                        <p className='text-[10px] font-normal font-poppins text-main'>Dubai</p>
                    </div>
                    <div className='pt-[17px] pb-[15px]'><img src={dubai} alt="maldiv-omg" /></div>
                    <button className='w-[281px] py-[8px] rounded-[4px] bg-primary text-[12px] font-normal font-poppins text-white'> View Details</button>



                </div>

            </div>

            <div className='w-[309px] rounded-[6px] hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] h-[296px] border border-primary'>
                <div className='py-[22px] px-[9px]'>

                    <div>
                        <h2 className='text-[16px] font-bold font-poppins text-main'>Island Getaways</h2>
                        <p className='text-[10px] font-normal font-poppins text-main'>Greece</p>
                    </div>
                    <div className='pt-[17px] pb-[15px]'><img src={greece} alt="maldiv-omg" /></div>
                    <button className='w-[281px] py-[8px] rounded-[4px] bg-primary text-[12px] font-normal font-poppins text-white'> View Details</button>



                </div>

            </div>

           </div>
            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Placecs