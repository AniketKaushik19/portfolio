import {Swiper,SwiperSlide} from 'swiper/react'

//import swiper style
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

//icons 
import {
   RxCrop,
   RxDesktop,
   RxPencil2,
   RxReader,
   RxRocket,
   RxArrowTopRight
} from 'react-icons/rx'
//import required modules
import {FreeMode,Pagination} from 'swiper'

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Helping make brand bigger and popular globally.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Excellent design with uniqueness.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'From Scratch to Advance features.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'All content are copyright by the developers .',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Website with good global ranking. ',
  },
];

const ServiceSlider = () => {
  return <Swiper breakpoints={{
320: { slidesPerView: 1.2, spaceBetween: 15 },
  640: { slidesPerView: 2, spaceBetween: 15 },
  768: { slidesPerView: 2.5, spaceBetween: 20 },
  1024: { slidesPerView: 3, spaceBetween: 25 },

}}

  freeMode={true}
  simulateTouch={true}
  grabCursor={true}
  pagination={{
    clickable:true
  }}
  modules={[FreeMode,Pagination]}
  scrollbar={{draggable:true}}
  className='h-[240px] sm:h-[340px]'>{serviceData.map((item,index)=>{
    return <SwiperSlide key={index}>
      <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
        {/* icon  */}
        <div className='text-4xl text-accent mb-4'>{item.icon}</div>
        {/* title &  desc  */}
        <div className='mb-8 ' >
          <div className='mb-2 text-lg'>{item.title}</div>
          <p className='max-w-[350px] leading-normal'>{item.description}</p>
        </div>
        {/* arrow  */}
        <div className='text-3xl'>
          <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
        </div>
      </div>
    </SwiperSlide>
  })}</Swiper>;
};

export default ServiceSlider;
