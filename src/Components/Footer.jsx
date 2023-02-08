import React from 'react'
import logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <div className='w-full '>
        {/* <div className='flex justify-center items-center p-10'>

            <div className='flex flex-col'>
                
                
            </div>
            <div>

            </div>
        </div> */}
        <hr className=' h-2 '/>
    <div className='flex flex-col md:flex-row items-center justify-evenly p-10'>
        <div className=''>
<img src={logo} alt="" />
        </div>
        <div className='flex w-full items-center justify-evenly '>
            <ul className='flex flex-col' >
                <li>Phone number</li>
                <li> Email</li>
                <li>linkedin</li>
                <li>facebook</li>
            </ul>
            <ul className='flex flex-col' >
                <li>Address</li>
                <li> 121 tolu james street</li>
                <li>lagos nigeria</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Footer