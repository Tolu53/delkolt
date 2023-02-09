import React , {useState , useEffect}  from 'react'
import video1 from '../homeimgs/hero.mp4'


const Home = () => {

   
  return (
    <div className=' h-screen w-full ' >
        <div className='bg-black/20 w-full h-full   '>
        <video src={video1} autoPlay loop muted className='w-full h-full object-cover'></video>
        </div>
   
    </div>


  )
}

export default Home