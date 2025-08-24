// testimonial data
const CertificateData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];


import {Swiper,SwiperSlide} from 'swiper/react'
//image
import Image from 'next/image'
//import swiper style
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'


//import required modules
import {Pagination} from 'swiper'

//icons 
import {BsArrowRight} from 'react-icons/bs'
const CertificateSlider = () => {
  return <Swiper 
  spaceBetween={10}
  simulateTouch={true}
  grabCursor={true}
  pagination={{
    clickable:true
  }}
  modules={[Pagination]}
  scrollbar={{draggable:true}}
  className='h-[280px] sm:h-[480px]'>{CertificateData.map((certificate,index)=>{
    return <SwiperSlide key={index}>
       <div>
          avatar , name ,position
       </div>
    </SwiperSlide>
  })}</Swiper>;
};

export default CertificateSlider;


