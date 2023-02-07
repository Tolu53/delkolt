import React , {useState}  from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import home from '../homeimgs/Dhome5.jpg'
import home2 from '../homeimgs/Dhome6.jpg'
import home3 from '../homeimgs/Dhome7.jpg'
import home4 from '../homeimgs/Dhome8.jpg'


const Home = () => {
    const heroimg =[
        {
            id:1,
            src:home,
            text:" This beautiful home could be yours" ,
        }, {
            id:2,
            src:home4,
            text:" This beautiful home could be yours" ,
        } ,{
            id:3,
            src:home2,
            text:" This beautiful home could be yours" ,
        }, {
            id:4,
            src:home3,
            text:" This beautiful home could be yours" ,
        }
    ]
    const [currentIndex, setCurrentIndex] = useState(0)
const prevSlide = () => {
const isFirstSlide = currentIndex ===0;
const newIndex = isFirstSlide ? heroimg.length -1:currentIndex-1;
setCurrentIndex(newIndex);
}
const nextSlide = () => {
    const isLastSlide = currentIndex === heroimg.length-1;
    const newIndex = isLastSlide ? 0 : currentIndex +1;
    setCurrentIndex(newIndex);
}
  return (
    <div className=' h-screen flex  flex-col justify-center relative mx-auto text-white ' >
        <div className='  h-full w-full flex justify-center  relative items-center flex-col group'>
         
        <div 
  style={{ backgroundImage:`url(${heroimg[currentIndex].src})` }} 
   className='w-full h-full bg-center bg-cover flex flex-col ' >  
   <h1 className='text-4xl md:text-6xl absolute top-[50%] w-1/3  left-[10%] mx-10 translate-y-[-50%]   '>{heroimg[currentIndex].text} </h1>      
   <button className='px-6 py-4 bg-black absolute top-[60%] left-[12%]  '> see more</button>
  </div>


  <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-lg p-2
 bg-black/20 text-white cursor-pointer hover:bg-black'>
  
    {/* prev and next button */}
    <BsChevronCompactLeft onClick={prevSlide} size={50} />
</div>
<div className=' absolute top-[50%] right-5 -translate-x-0 text-2xl p-2 rounded-lg bg-black/20 translate-y-[-50%] cursor-pointer hidden group-hover:block hover:bg-black'>
<BsChevronCompactRight onClick={nextSlide} size={50} />
</div>
        </div>
        
    </div>


  )
}

export default Home