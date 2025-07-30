import React from 'react'
import woman from '../assets/images/woman.png'
import div from '../assets/images/div.png'

const Tourist = () => {
  return (
    <>


    <section className='bg-primary'>
        <div className="container">
            <div className='pt-[85px] pb-[90px]'>

                <div className='pb-[32px]'><h2 className='text-[44px] font-bold font-poppins text-white'>Tourist of the month</h2></div>
            <div className='h-[336px]  bg-white rounded-[16px]'>
                <div className='flex py-[20px]  justify-around items-center'>
                    <div><img src={woman} alt="woman-img" /></div>
                    <div>
                        <h2 className='text-[24px] font-bold font-poppins text-main'>sarah jonah</h2>
                        <p className='text-[16px] pt-[6px] font-normal font-poppins text-main'>Traveled to: Bali , Indonesia. </p>
                        <div className='w-[638px]  pt-[16px] pb-[6px]'>

                        <p className='pl-[31px] border-l-2 border-w-[23px] text-[16px] italic font-poppins text-main'>"My trip to Bali was an unforgettable experience. The beautiful beach
es, friendly locals, and amazing food made this journey truly special.
 I can't wait to go back and explore more of this paradise island."
</p>
                        </div>
<div><img src={div} alt="div-img" /></div>
                    </div>
                </div>

            </div>

            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    
    </>
  )
}

export default Tourist