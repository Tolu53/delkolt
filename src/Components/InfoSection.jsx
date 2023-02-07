import React,{useState} from 'react'
import home from '../homeimgs/Dhome7.jpg'
import home2 from '../homeimgs/Dhome3.png'
import home3 from '../homeimgs/Dhome8.jpg'
import home4 from '../homeimgs/Dhome5.jpg'

const InfoSection = () => {

  return (
    <div className='w-full min-h-screen flex justify-center flex-col relative  items-center p-4'>
        <div className=''>
            <h1 className='text-4xl md:text-7xl m-4 '> Our Homes</h1>
        </div>
        <div className=' flex flex-col items-center '>
        <div className=' my-4 bg-slate-500 p-4 flex flex-col md:flex-row'>
        <div className='basis-1/2 w-full'>
            <img src={home} alt="" className='h-full w-full'/>
        </div>
            <div className=' basis-1/2  flex flex-col items-center justify-center'>
                <h1 className='text-4xl md:text-5xl'>3 Bedroom suite</h1>
                <p className='px-4'> 3 bdroom apartment fully equipped with all accessories</p>
                <button className='p-4 w-32 bg-black text-white hover:bg-purple-800'>See this</button>
            </div>
        </div>
        <div className='p-4 w-full flex flex-col my-4 md:flex-row-reverse items-center bg-zinc-800 text-white '>
        <div className='  basis-1/2'>
            <img src={home3} alt="" className='w-full'/>
        </div>
            <div className=' basis-1/2 flex flex-col  items-center  justify-center '>
                <h1 className='text-4xl md:text-5xl '>3 Bedroom suite</h1>
                <p className='px-4'> 3 bdroom apartment fully equipped with all accessories</p>
                <button className='p-4  w-32 bg-black text-white hover:bg-purple-800'>See this</button>
            </div>
        </div>
        <div className='bg-blue-300 my-4 flex flex-col md:flex-row p-4'>
        <div className=' basis-1/2 h-auto'>
            <img src={home4} alt="" className=' w-full' />
        </div>
            <div className=' basis-1/2  flex flex-col items-center justify-center'>
                <h1 className='text-4xl md:text-5xl'>3 Bedroom suite</h1>
                <p className='px-4'> 3 bdroom apartment fully equipped with all accessories</p>
                <button className='p-4 w-32 bg-black text-white hover:bg-purple-800 '>See this</button>
            </div>
        </div>
      
        </div>
    </div>
  )
}

export default InfoSection