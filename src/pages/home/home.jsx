import React from 'react'
import Typography from '@mui/material/Typography';
import HeroImage from '../../asset/image/amico.png'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <div className='min-h-screen bg-gradient-to-tr from-[#D17422] via-[#EA8D29] to-[#FDC27A] '>
        <div className='container mx-auto px-4 lg:px-20'>
            <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-between py-10 lg:py-20'>
              <div className='text-center lg:text-left lg:w-1/2'>
                <Typography className="text-[#FAFAFA] font-bold" variant='h3' sx={{fontFamily : 'crimsonText'}}>
                  The Way to Solve Properly About Determinant
                </Typography>
                <Typography className="text-[#FAFAFA] mt-4 " variant='p' sx={{fontFamily : 'Merriweather'}}>
                  Determinan  membantu kita menemukan invers dari suatu matriks, memberi tahu kita tentang matriks yang berfungsi dalam menentukan sistem persamaan linear, menghitung volume dan banyak lagi.
                </Typography>
                <div className='mt-4'>
                  <Link to="/dashboard">
                  <button className= 'mt-4 w-[240px] h-[60px] bg-yellow-100 rounded-[10px]'>
                    <Typography className='text-[#3F0707] font-weight-900' variant='h4' sx={{fontFamily : 'Merriweather'}}>Mulai</Typography>
                  </button>
                  </Link>
                </div>
              </div>
              <div className='mt-10 lg:mt-'>
                <img src={HeroImage}
                  className="h-auto max-w-full lg:max-w-[345px]"
                  alt="Hero Section"
                />
              </div>
            </div>
        </div>
      </div>
      <div className='min-h-screen bg-gradient-to-b from-[#F1CA7F] to-[#FFF4DF] '>
        <div className='container mx-auto px-4 lg:px-20'>
            
        </div>
      </div>
      <div className='min-h-screen bg-[#E09132]'>
        <div className='container mx-auto px-4 lg:px-20'>
            
        </div>
      </div>
    </>
  );
}

export default Home;