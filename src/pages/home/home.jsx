import React from 'react'
import Typography from '@mui/material/Typography';
import HeroImage from '../../asset/image/amico.png'
import { Link } from 'react-router-dom';
import questionmark from '../../asset/image/question-mark.png'
import clock from '../../asset/image/clock.png'
import check from '../../asset/image/check.png'

export const Home = () => {
  return (
    <>

      {/* Hero Section */}
      <div className='bg-gradient-to-tr from-[#D17422] via-[#EA8D29] to-[#FDC27A]'>
        <div className='max-w-screen-xl mx-auto container  px-4 lg:px-20'>
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

      {/* Profit Section */}
      <div className='bg-gradient-to-b from-[#F1CA7F] to-[#FFF4DF] '>
        <div className='max-w-screen-xl mx-auto py-20'>
          <div className='bg-[#BC6C25] mx-auto text-center rounded-full max-h-[74px] max-w-[756px]'>
            <Typography className="text-[#FAFAFA] mt-4 text-[24px]" variant='p' sx={{fontFamily : 'Merriweather'}}>
              Profit Kamu Menggunakan CalMath
            </Typography>
          </div> 
          <div className='sm:gap-16 mt-44 mb-20 flex flex-wrap mx-auto justify-center relative '>
            <div class="flex bg-[#BC6C25] pt-10 pb-20 rounded-lg shadow md:flex-row w-[343px] h-[310px]">
              <img class="object-cover h-1/2 rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg" src={questionmark} alt=""/>
              <div class="flex flex-wrap justify-between p-4 leading-normal">
                <Typography className="text-[#FEFAE0] text-[23px]" variant='p' sx={{fontFamily : 'Merriweather'}}>
                    Memudahkan Analisis Matriks
                </Typography>
                  <div className='pt-4'>
                    <Typography className="text-[#F0EAC0] text-[18px] font-semibold" variant='p' sx={{fontFamily : 'Montserrat'}}>
                      Apakah matriks tersebut dapat diinvers atau tidak ?              
                    </Typography>
                  </div>
              </div>
            </div>
            <div class="flex bg-[#EFDCAC]  py-10 px-6 rounded-lg shadow md:flex-row w-[343px] h-[310px]">
              <img class="object-cover h-1/2 rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg" src={clock} alt=""/>
              <div class="flex flex-wrap justify-between p-4 leading-normal">
                <Typography className="text-[#3F0707] text-[24px]" variant='p' sx={{fontFamily : 'Merriweather'}}>
                  Efisiensi Waktu
                </Typography>
                <div className='pt-4'>
                  <Typography className="text-[#934602] text-[18px] font-semibold" variant='p' sx={{fontFamily : 'Montserrat'}}>
                    CalMath dapat memberikan hasil perhitungan dengan cepat dan akurat             
                  </Typography>
                </div>
              </div>
            </div>
            <div class="flex py-10 bg-[#BC6C25] rounded-lg shadow md:flex-row w-[343px] h-[310px]">
              <img class="object-cover h-1/2 rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg" src={check} alt=""/>
              <div class="flex flex-col justify-between p-4 leading-normal">
                <Typography className="text-[#FEFAE0] text-[24px]" variant='p' sx={{fontFamily : 'Merriweather'}}>
                  Meningkatkan Akurasi
                </Typography>
                <div className='pt-4'>
                  <Typography className="text-[#F0EAC0] text-[18px] font-semibold" variant='p' sx={{fontFamily : 'Montserrat'}}>
                    Perhitungan dilakukan secara otomatis tanpa adanya kesalahan manusia            
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learn Together Section */}
      <div className='relative bg-[#E09132]'>
        <div className='flex justify-center static mx-auto m-auto w-full max-w-screen-xl h-40'>
          <div className='absolute rounded-3xl xl:pt-[25px] top-[-14px] max-w-[90%] md:w-[697px] md:h-[200px] max-h-[115px] bg-[#423232] text-center'>
              <Typography className="text-[#F0EAC0] text-[36px] font-normal " variant='p' sx={{fontFamily : 'Crimson Text'}}>
                Let's Learn Together         
              </Typography>
          </div>
        </div>
        <div className='flex-wrap pt-54 pb-10 mx-auto md:px-[20px]'>
          <div className='flex flex-wrap w-full justify-center relative '>
            <div className='flex flex-wrap justify-center md: w-[1000px] gap-[40px]'>
              <div className='h-[300px] md:w-[384px] bg-[#EFDCAC] text-center p-10 rounded-lg'>
                <Typography className="text-black text-[32px]" variant='p' sx={{fontFamily : 'Merriweather'}}>
                  Determinan
                </Typography>
                  <div className='pt-4 text-left'>
                    <Typography className="text-black text-[24px] font-normal" variant='p' sx={{fontFamily : 'Montserrat'}}>
                    Determinan adalah bilangan khusus yang dapat dihitung dari matriks.          
                    </Typography>
                  </div>
              </div>
              <div className='h-[300px] md:w-[384px] bg-[#FEFAE0] text-center p-10 rounded-lg'>
                <Typography className="text-black text-[32px]" variant='p' sx={{fontFamily : 'Merriweather'}}>
                  Minor
                </Typography>
                  <div className='pt-4 text-left'>
                    <Typography className="text-black text-[24px] font-normal" variant='p' sx={{fontFamily : 'Montserrat'}}>
                      Menghapus satu baris & satu kolom dari suatu matriks           
                    </Typography>
                  </div>
              </div>
              <div className='h-[300px] md:w-[384px] bg-[#FEFAE0] text-center p-10 rounded-lg'>
                <Typography className="text-black text-[32px]" variant='p' sx={{fontFamily : 'Merriweather'}}>
                  Kofaktor
                </Typography>
                <div className='pt-4 text-left'>
                  <Typography className="text-black text-[24px] font-normal" variant='p' sx={{fontFamily : 'Montserrat'}}>
                    Perkalian minor suatu elemen matriks         
                  </Typography>
                </div>
              </div>
              <div className='h-[300px] md:w-[384px] bg-[#EFDCAC] text-center p-10 rounded-lg'>
                <Typography className="text-black text-[32px]" variant='p' sx={{fontFamily : 'Merriweather'}}>
                  Adjoin
                </Typography>
                <div className='pt-4 text-left'>
                  <Typography className="text-black text-[24px] font-normal" variant='p' sx={{fontFamily : 'Montserrat'}}>
                    Mentranposekan semua elemen dari matriks sebelumnya           
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;