import React from 'react'
import footerimg from '../assets/images/footer_img.png'
import { Link } from 'react-router'
import { GoMail } from "react-icons/go";


const Footer = () => {
  return (
    <>
    
    
    <section id='footer' className='bg-primary '>
        <div className="container">
            <div className='flex justify-between  pt-[66px] pb-[42px]'>

                <div><img src={footerimg} alt="footer-img" />
                <div className='w-[199px] pt-[20px]'><p className='text-[16px] font-normal font-poppins text-white'>Discover the world with us. We provide
the best travel experiences with
affordable prices.</p></div>
                </div>

                <div className='flex flex-col'>
                    <div><h2 className='text-[16px] font-medium font-poppins text-white'>Quick Links</h2></div>
                    <div className='pt-[30px] flex flex-col gap-[11px]'>

                    <Link  className='text-[16px] font-normal font-poppins text-white'>About us</Link>
                    <Link className='text-[16px] font-normal font-poppins text-white' >Contact us</Link>
                    <Link  className='text-[16px] font-normal font-poppins text-white'>Terms & Conditions</Link>
                    <Link className='text-[16px] font-normal font-poppins text-white' >Privacy & Policy</Link>

                    </div>
                </div>
                                <div className='flex flex-col'>
                    <div><h2 className='text-[16px] font-medium font-poppins text-white'>Services</h2></div>
                    <div className='pt-[30px] flex flex-col gap-[11px]'>

                    <Link  className='text-[16px] font-normal font-poppins text-white'>Hotels & Resorts</Link>
                    <Link  className='text-[16px] font-normal font-poppins text-white'>Flight Booking</Link>
                    <Link className='text-[16px] font-normal font-poppins text-white' >Tour Pakages</Link>
                    <Link className='text-[16px] font-normal font-poppins text-white' >Travel insurance</Link>

                    </div>
                </div>
                                <div className='flex flex-col'>
                    <div><h2 className='text-[16px] font-medium font-poppins text-white'>Subscribe to  Newsletter</h2></div>
                    <div className='pt-[10px] pb-[20px]'><p className='text-[16px] font-normal font-poppins text-white'>Get weekly updates and new offers</p></div>
                    <div className='w-[248px] bg-[#fff] rounded-[4px] flex '>
                        <input className='w-[80%] py-[10px] px-[20px] border-none outline-none bg-white ' type="text" placeholder='Your email' />
                        <button className='w-[20%] bg-black py-[10px] text-[#fff] flex text-center  justify-center items-center'><GoMail /></button> 
                    </div>
         

                </div>

             
            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Footer