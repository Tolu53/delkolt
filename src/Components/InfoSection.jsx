import React,{useRef , useEffect} from 'react'
import home from '../homeimgs/Dhome7.jpg'
// import home2 from '../homeimgs/Dhome3.png'
import home3 from '../homeimgs/Dhome8.jpg'
import home4 from '../homeimgs/Dhome5.jpg'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const InfoSection = () => {
//   checks if object is in view 
   const{ref, inView}= useInView({
    threshold:0.3
   });

   const animationL = useAnimation();
   const animationR = useAnimation();

   useEffect(()=>{
    if(inView){
        animationR.start({y:0})
    }
    if (!inView) {
        animationR.start({y:-30})
    }
   },[inView]
   );
   useEffect(()=> {
    if(inView){
        // if inview = true bring in view 
        animationL.start({y:0});}
        // if inview is false remove
    if(!inView){
        animationL.start({
            y:30});
    }},[inView]);

    return (
        <div className='w-full min-h-screen flex justify-center flex-col relative  items-center p-4'>
            <div className=''>
                <h1 className='text-4xl md:text-7xl m-4 '> Development</h1>
            </div>
            <div ref={ref} className=' flex flex-col items-center '>
 
    <motion.div  className=' my- bg-slate-5 p- flex flex-col duration-1000 md:flex-row'
           
           animate={animationL} >
           <div className='basis-1/2 w-full'>
               <img src={home} alt="" className='h-full w-full'/>
           </div>
               <div className=' basis-1/2  flex flex-col items-center justify-center'>
                   <h1 className='text-4xl md:text-5xl'>3 Bedroom suite</h1>
                   <p className='px-4'> 3 bdroom apartment fully equipped with all accessories</p>
                   <button className='p-4 w-32 bg-black text-white hover:bg-purple-800 my-3'>See this</button>
               </div>
           </motion.div>
 
          
            <motion.div className='p- w-full duration-1000 flex flex-col my- md:flex-row-reverse items-center b-zinc-800  '
            animate= {animationR}>
            <div className='  basis-1/2'>
                <img src={home3} alt="" className='w-full'/>
            </div>
                <div className=' basis-1/2 flex flex-col  items-center  justify-center '>
                    <h1 className='text-4xl md:text-5xl '>3 Bedroom suite</h1>
                    <p className='px-4'> 3 bdroom apartment fully equipped with all accessories</p>
                    <button className='p-4  w-32 bg-black text-white hover:bg-purple-800 my-3'>See this</button>
                </div>
            </motion.div>
            <motion.div className='g-blue-300 my- flex duration-700 flex-col md:flex-row p-'
            animate ={animationL} >
            <div className=' basis-1/2 h-auto'>
                <img src={home4} alt="" className=' w-full' />
            </div>
                <div className=' basis-1/2  flex flex-col items-center justify-center'>
                    <h1 className='text-4xl md:text-5xl'>3 Bedroom suite</h1>
                    <p className='px-4'> 3 bdroom apartment fully equipped with all accessories</p>
                    <button className='p-4 w-32 bg-black text-white hover:bg-purple-800 my-3 '>See this</button>
                </div>
            </motion.div>
          
            </div>
        </div>
      )
    }
    

 

export default InfoSection