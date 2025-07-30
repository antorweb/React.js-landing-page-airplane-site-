import React from 'react'
import logo from '../assets/images/Brand-logo.png'
import { Link } from 'react-router'
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <>
    
    <section className='py-[26px]'>
        <div className="container">
            <div className="navbar_row flex justify-between items-center">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className=''>
                <ul className='flex gap-[32px]'>
                    <li><Link className='text-[16px] font-normal font-roboto text-main'>Home</Link></li>
                    <li><Link className='text-base font-normal font-roboto flex gap-[5px] items-center text-main'>Divisions <MdKeyboardArrowDown /></Link></li>
                    <li><Link className='text-base font-normal font-roboto  text-main'>Destination  </Link></li>
                    <li><Link className='text-base font-normal font-roboto text-main'>Hotel & Resort</Link></li>
                    <li><Link className='text-base font-normal font-roboto text-main'>Service</Link></li>
                    <li><Link className='text-base font-normal font-roboto text-main'>Shop</Link></li>
                    <li><Link className='text-base font-normal font-roboto text-main'>Blog</Link></li>
                   
                </ul>

                
                </div>
                <div className='flex  gap-[16px] '>

                <Link className='py-[10px] px-[20px] bg-[#5927E5] rounded-[4px]'><p className='text-base font-normal  font-roboto text-[#fff]'>Login</p></Link>
                <div className='flex  items-center  relative'>
                <input  className='w-[118px] border  py-[10px] px-[20px] text-base font-normal font-roboto text-[#808080]' type="text" placeholder='search'  />
                <IoIosSearch className='text-[18px] absolute left-[83px]' />

                </div>

                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Navbar