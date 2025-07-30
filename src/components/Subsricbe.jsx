import React from 'react'
import { GoMail } from "react-icons/go";

const Subsricbe = () => {
  return (
    <>
    
    
    <section className='pb-[80px]'>
        <div className="container">
            <div className='h-[420px] rounded-[16px] bg-primary'>


                <div className='py-[52px] text-center'>

<div className='flex justify-center'>

                <div className='w-[86px] h-[86px] rounded-full bg-white flex justify-center items-center'><GoMail className='text-[36px]' /> </div>
</div>
                <div className='pt-[10px]'>
                    <h2 className='text-[44px] font-bold font-poppins text-white'>Subscribe to Our Newsletter</h2>
                    <p className='text-[16px] font-normal font-poppins text-white'>Stay updated with our latest travel deals, new blog posts, and exclusive offers.</p>
                    <div className='flex justify-center gap-[15px] mt-[30px] mb-[21px]'>
                        <div className='w-[420px]  bg-white py-[15px] pl-[20px] rounded-[8px]'  ><input className='w-[80%] text-[16px] font-normal font-poppins text-main border-none outline-none' type="text" placeholder='Enter your email' /> </div>
                        <button className='w-[200px] text-[16px] font-semibold font-roboto text-[#D9D9D9] py-[15px] bg-main rounded-[8px]'>Subscribe Now</button>
                    </div>
                    <div><p className='text-[16px] font-normal font-poppins text-white'>By subscribing, you agree to our Privacy Policy and  to receive updates.</p></div>

                </div>

                </div>
            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Subsricbe