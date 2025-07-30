import React from 'react'
import CommonHead from './common/CommonHead'
import italy from '../assets/images/italy.png'
import canada from '../assets/images/canada.png'
import kyoto from '../assets/images/kyoto.png'
import phuket from '../assets/images/phuket.png'
import { FiClock } from "react-icons/fi";

const Itinerary = () => {
  return (
    <>
    
    
    <section id='itinary' className='py-[80px]' >
        <div className="container">
        

            <div className='flex gap-[10px] items-center'><FiClock className='text-[38px]' /> <CommonHead h2={'Places to Visit in 1 Day'} /></div>
          
            <div className='pt-[43px]'>

                        <div className='flex  justify-between items-center'>
                
                            <div className='w-[309px] rounded-[6px] hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] h-[296px] border border-primary'>
                                <div className='py-[14px] px-[9px]'>
                
                                    <div className=' pb-[15px]'><img src={italy} alt="maldiv-omg" /></div>
                                    <div className='pb-[6px]'>
                                        <h2 className='text-[16px] font-bold font-poppins text-main'>Historic City Center</h2>
                                        <p className='text-[12px] font-normal font-poppins pt-[6px] pb-[7px] text-main'>Rome, Italy</p>
                                        <p className='text-[12px] font-normal font-poppins flex gap-[5px] items-center text-main'><FiClock /> 8 hours</p>
                                    </div>
                                    <button className='w-[281px] py-[8px] rounded-[4px] bg-primary text-[12px] font-normal font-poppins text-white'>View Itinerary</button>
                
                
                
                                </div>
                
                            </div>

                               <div className='w-[309px] rounded-[6px] hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] h-[296px] border border-primary'>
                                <div className='py-[14px] px-[9px]'>
                
                                    <div className=' pb-[15px]'><img src={canada} alt="maldiv-omg" /></div>
                                    <div className='pb-[6px]'>
                                        <h2 className='text-[16px] font-bold font-poppins text-main'>National Park Trail</h2>
                                        <p className='text-[12px] font-normal font-poppins pt-[6px] pb-[7px] text-main'>Vancouver, Canada</p>
                                        <p className='text-[12px] font-normal font-poppins flex gap-[5px] items-center text-main'><FiClock /> 6 hours</p>
                                    </div>
                                    <button className='w-[281px] py-[8px] rounded-[4px] bg-primary text-[12px] font-normal font-poppins text-white'> View Itinerary</button>
                                </div>  
                            </div>
                

                              <div className='w-[309px] rounded-[6px] hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] h-[296px] border border-primary'>
                                <div className='py-[14px] px-[9px]'>
                
                                    <div className=' pb-[15px]'><img src={kyoto} alt="maldiv-omg" /></div>
                                    <div className='pb-[6px]'>
                                        <h2 className='text-[16px] font-bold font-poppins text-main'>Cultural Heritage</h2>
                                        <p className='text-[12px] font-normal font-poppins pt-[6px] pb-[7px] text-main'>Kyoto, Japan</p>
                                        <p className='text-[12px] font-normal font-poppins flex gap-[5px] items-center text-main'><FiClock /> 8 hours</p>
                                    </div>
                                    <button className='w-[281px] py-[8px] rounded-[4px] bg-primary text-[12px] font-normal font-poppins text-white'>View Itinerary</button>
                
                
                
                                </div>
                
                            </div>
                

                              <div className='w-[309px] rounded-[6px] hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] h-[296px] border border-primary'>
                                <div className='py-[14px] px-[9px]'>
                
                                    <div className=' pb-[15px]'><img src={phuket} alt="maldiv-omg" /></div>
                                    <div className='pb-[6px]'>
                                        <h2 className='text-[16px] font-bold font-poppins text-main'>Island Boat Tour</h2>
                                        <p className='text-[12px] font-normal font-poppins pt-[6px] pb-[7px] text-main'>Phuket, Thailand</p>
                                        <p className='text-[12px] font-normal font-poppins flex gap-[5px] items-center text-main'><FiClock /> 8 hours</p>
                                    </div>
                                    <button className='w-[281px] py-[8px] rounded-[4px] bg-primary text-[12px] font-normal font-poppins text-white'>View Itinerary</button>
                
                
                
                                </div>
                
                            </div>
                
                

                
                           </div>

            </div>
        </div>
    </section>
    
    
    
    
    
    
    </>
  )
}

export default Itinerary