import React from 'react'
import CommonHead from './common/CommonHead'
import { Link } from 'react-router'
import hotel from '../assets/images/hotel.png'
import plan from '../assets/images/plan.png'
import packag from '../assets/images/pacage.png'
import { LuCalendar } from "react-icons/lu";
import { PiQrCode } from "react-icons/pi";
import { LuHotel } from "react-icons/lu";



const Latest = () => {
  return (
    <>
    
    <section id='latest' className='pt-[76px] pb-[80px]'>
        <div className="container">
            <div className='flex justify-between items-center'>
            <div><CommonHead h2={'Latest offers'} /></div>
<Link className='w-[100px] py-[10px] px-[20px] text-[16px] font-medium font-roboto text-main border border-[#5927E5] rounded-[6px]' >View All</Link>

            </div>

<div className='pt-[28px] flex justify-between'>



    <div className='w-[424px] h-[544px] hover:shadow-[5px_5px_0px_0px_rgba(0,_0,_0,_0.5)] border rounded-[8px] border-[#5927E5]'>
        <div className='py-[36px] px-[13px]'>
        <div className='w-[60px] h-[60px] bg-primary rounded-[8px] flex justify-center items-center'><LuCalendar className='text-[24px] text-white' /></div>
        <div className='flex justify-between items-center pt-[16px] pb-[4px]'>
            <h2 className='text-[24px] font-bold font-poppins text-main'>beach resort Weakend</h2>
            <div className='w-[81px] bg-primary py-[4px] px-[8px] rounded-[20px] text-[16px] font-normal font-poppins text-[#fff]'>30% OFF</div>
        </div>
        <div><p className='text-[16px] font-normal font-poppins text-main'>Hotel</p></div>
        <div className='pt-[24px] pb-[15px]'><img src={hotel} alt="hotel-img" /></div>
        <div className='flex gap-[7px] items-center'>
            <h2 className='text-[24px] font-bold font-poppins text-main'>$299</h2>
            <p className='text-[16px] font-normal font-poppins line-through text-main'>$380.6</p>
        </div>
        <button className='w-[381px] bg-primary rounded-[6px] py-[10px] mt-[20px] text-[16px] font-normal font-poppins text-white'>View Details</button>
        </div>
    </div>


    <div className='w-[424px] h-[544px] hover:shadow-[5px_5px_0px_0px_rgba(0,_0,_0,_0.5)] border rounded-[8px] border-[#5927E5]'>
        <div className='py-[36px] px-[13px]'>
        <div className='w-[60px] h-[60px] bg-primary rounded-[8px] flex justify-center items-center'><PiQrCode className='text-[24px] text-[#fff]' /></div>
        <div className='flex justify-between items-center pt-[16px] pb-[4px]'>
            <h2 className='text-[24px] font-bold font-poppins text-main'>International flight deal</h2>
            <div className='w-[81px] bg-primary py-[4px] px-[8px] rounded-[20px] text-[16px] font-normal font-poppins text-[#fff]'>30% OFF</div>
        </div>
        <div><p className='text-[16px] font-normal font-poppins text-main'>Air Ticket</p></div>
        <div className='pt-[24px] pb-[15px]'><img src={plan} alt="hotel-img" /></div>
        <div className='flex gap-[7px] items-center'>
            <h2 className='text-[24px] font-bold font-poppins text-main'>$299</h2>
            <p className='text-[16px] font-normal font-poppins line-through text-main'>$380.6</p>
        </div>
        <button className='w-[381px] bg-primary rounded-[6px] py-[10px] mt-[20px] text-[16px] font-normal font-poppins text-white'>View Details</button>

        </div>
    </div>



    <div className='w-[424px] h-[544px] hover:shadow-[5px_5px_0px_0px_rgba(0,_0,_0,_0.5)] border rounded-[8px] border-[#5927E5]'>
        <div className='py-[36px] px-[13px]'>
        <div className='w-[60px] h-[60px] bg-primary rounded-[8px] flex justify-center items-center'><LuHotel className='text-[24px] text-white' /></div>
        <div className='flex justify-between items-center pt-[16px] pb-[4px]'>
            <h2 className='text-[24px] font-bold font-poppins text-main'>Mountain Treking point</h2>
            <div className='w-[81px] bg-primary py-[4px] px-[8px] rounded-[20px] text-[16px] font-normal font-poppins text-[#fff]'>30% OFF</div>
        </div>
        <div><p className='text-[16px] font-normal font-poppins text-main'>Tour pakage</p></div>
        <div className='pt-[24px] pb-[15px]'><img src={packag} alt="hotel-img" /></div>
        <div className='flex gap-[7px] items-center'>
            <h2 className='text-[24px] font-bold font-poppins text-main'>$399</h2>
            <p className='text-[16px] font-normal font-poppins line-through text-main'>$518.6</p>
        </div>
        <button className='w-[381px] bg-primary rounded-[6px] py-[10px] mt-[20px] text-[16px] font-normal font-poppins text-white'>View Details</button>

        </div>
    </div>








</div>










        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Latest