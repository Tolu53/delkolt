import React, {useState} from 'react'
import logo from '../assets/Logo.png'
import {AiOutlineBars} from 'react-icons/ai'
import {FaTimes} from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState (false);

  return (
    <div className=' flex w-full items-center justify-between mx-auto text-white bg-zinc-800'>
        
            <ul className='md:flex p-4 justify-end hidden'>
                <li className='m-4  hover:scale-105 hover:text-white'>Home</li>
                <li className='m-4 w-20 hover:scale-105 hover:text-white'>About us</li>
                <li className='m-4 hover:scale-105 hover:text-white'>Projects</li>
            </ul>
               <div className='self-center h-auto absolute right-[45%] flex'>
                <img src={logo} alt="" className='w-20 m-4'/>
               </div>
       
               <div className='m-6 '>
        <a href="#">
         <button className='p-2 bg-gradient-to-b from-blue-500  to-transparent  w-20 '> Contact</button>
        </a>

         </div>
          {/* switch from strokes to drop down  */}
          
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden   '>
        { nav ? < FaTimes size={30}/>: <AiOutlineBars size={30} />
        }
      </div>
      {nav &&(
 <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-1/3 bg-black text-white rounded-2xl'>

<li className='m-4  hover:scale-105 hover:text-white'>Home</li>
                <li className='m-4 w-20 hover:scale-105 hover:text-white'>About us</li>
                <li className='m-4 hover:scale-105 hover:text-white'>Projects</li>
 </ul>
      )}
    </div>
  )
}

export default Navbar