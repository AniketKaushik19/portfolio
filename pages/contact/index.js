import Circles from '../../components/Circles'
import {BsArrowRight} from 'react-icons/bs'

//framer 
import {motion} from 'framer-motion'

//variants 
import {fadeIn} from '../../variants'
const Contact = () => {
  return (
    <div className='min-h-screen bg-primary/30 flex flex-col'>
      <Circles />

      {/* Scrollable content wrapper */}
      <div className='flex-1 overflow-y-auto px-4'>
        <div className='container mx-auto py-32 text-center xl:text-left'>
          <div className='flex flex-col w-full max-w-[700px]'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 text-center mb-12'
            >
              Let&apos;s <span className='text-accent'>connect.</span>
            </motion.h2>

            <motion.form
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='flex flex-col gap-6 w-full mx-auto h-[1500px] '
            >
              <div className='flex gap-x-6 w-full'>
                <input type='text' placeholder='Name' className='input' />
                <input type='email' placeholder='Email' className='input' />
              </div>
              <input type='text' placeholder='Subject' className='input' />
              <textarea placeholder='message' className='textarea'></textarea>

              <button className='relative btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                <span className='group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                  Let&apos;s talk
                </span>
                <BsArrowRight className='absolute -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 text-[22px]' />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
