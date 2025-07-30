import React from 'react'
import CommonHead from './common/CommonHead'
import { FaPeopleGroup } from "react-icons/fa6";

const Service = () => {
  return (
    <>
    

    <section id='service' className='pb-[56px]'>
        <div className="container">
            <div className='flex justify-center'>

            <div className=' text-center flex gap-2  items-center '><FaPeopleGroup className='text-[44px]' /> <CommonHead h2={'Why Choose Us'} /></div>
            </div>
            <div className='flex justify-center'>

            <div className='w-[606px] text-center'><p className='text-[16px] font-normal font-poppins text-main'>We are committed to providing exceptional service and making your travel experience 
unforgettable.</p></div>
            </div>
            <div className='pt-[34px] flex justify-between items-center'>

                <div className='w-[322px]  border rounded-[16px]'>
<div className='py-[42px] px-[70px]'>

                    <div className='w-[32px] h-[32px] rounded-full bg-[#FFA807] flex justify-center items-center text-[16px] font-medium font-poppins text-white'>1</div>
                    <div className='py-[10px]'><h2 className='text-[16px] font-bold font-poppins text-main'>Best Price Guarantee</h2></div>
                    <div className='w-[200px]'><p>We offer the best prices on the market with price matching and special discounts.</p></div>

                </div>

               </div>

                        <div className='w-[322px]  border rounded-[16px]'>
<div className='py-[42px] px-[70px]'>

                    <div className='w-[32px] h-[32px] rounded-full bg-[#FFA807] flex justify-center items-center text-[16px] font-medium font-poppins text-white'>2</div>
                    <div className='py-[10px]'><h2 className='text-[16px] font-bold font-poppins text-main'>24/7 Customer Support</h2></div>
                    <div className='w-[200px]'><p>Our customer service team
is available around the 
clock to assist you.</p></div>

                </div>

               </div>

                        <div className='w-[322px]  border rounded-[16px]'>
<div className='py-[42px] px-[70px]'>

                    <div className='w-[32px] h-[32px] rounded-full bg-[#FFA807] flex justify-center items-center text-[16px] font-medium font-poppins text-white'>3</div>
                    <div className='py-[10px]'><h2 className='text-[16px] font-bold font-poppins text-main'>Verified Reviews</h2></div>
                    <div className='w-[200px]'><p>Real reviews from real 
travelers to help you make
the right choice.</p></div>

                </div>

               </div>

                        <div className='w-[322px]  border rounded-[16px]'>
<div className='py-[42px] px-[70px]'>

                    <div className='w-[32px] h-[32px] rounded-full bg-[#FFA807] flex justify-center items-center text-[16px] font-medium font-poppins text-white'>4</div>
                    <div className='py-[10px]'><h2 className='text-[16px] font-bold font-poppins text-main'>Secure Booking</h2></div>
                    <div className='w-[200px]'><p>Your payment and 
personal information ar
e protected with our secure
system.</p></div>

                </div>

               </div>





            </div>
        </div>
    </section>
    
    
    
    
    
    </>
  )
}

export default Service