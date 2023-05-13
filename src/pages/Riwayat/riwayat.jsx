import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material';
import Latex from 'react-latex';

const Riwayat = () => {
  return (
    <div className='relative bg-[#FFF8F2] mx-auto justify-center mt-100 max-w-[1400px] rounded-3xl'>
      <div className='flex justify-center static mx-auto'>
          <div className='absolute rounded-3xl py-2 top-[-14px] w-[697px] h-[77px] bg-[#423232] text-center'>
              <Typography className="text-[#F0EAC0] text-[36px] font-normal" variant='p' sx={{fontFamily : 'Crimson Text'}}>
                Riwayat Penggunaan         
              </Typography>
          </div>
        </div>
    <div className="sm:flex gap-10 flex-wrap items-stretch justify-center text-center mt-10">
              <div className="card w-80 my-10 text-gray-800 bg-white shadow-xl">
                  <figure>
                      <p> save inputan</p>
                  </figure>
                  <div className="card-body static">
                      <h2 className="card-title">Penyelesaian</h2>
                      <p className="mb-5">Penyelesaian</p>
                      <div className="card-actions  justify-end">
                      <div className="btn btn-warning bg-[#E09132]">
                          <p className='text-white'>test</p>
                      </div>
                      <div className='absolute top-2 right-[-15px] pt-3 rounded-lg bg-[#E09132] h-[40px] w-[55px]'>
                      <Typography className="text-white font-bold text-center" variant='p' sx={{fontFamily : 'crimsonText'}}>
                        #1
                      </Typography>
                      </div>
                      </div>
                  </div>
                  </div>
                  <div className="card w-80 my-10 text-gray-800 bg-white shadow-xl">
                  <figure>
                      <p> save inputan</p>
                  </figure>
                  <div className="card-body static">
                      <h2 className="card-title">Penyelesaian</h2>
                      <p className="mb-5">Penyelesaian</p>
                      <div className="card-actions  justify-end">
                      <div className="btn btn-warning bg-[#E09132]">
                          <p className='text-white'>test</p>
                      </div>
                      <div className='absolute top-2 right-[-15px] pt-3 rounded-lg bg-[#E09132] h-[40px] w-[55px]'>
                      <Typography className="text-white font-bold text-center" variant='p' sx={{fontFamily : 'crimsonText'}}>
                        #1
                      </Typography>
                      </div>
                      </div>
                  </div>
                  </div>
                  <div className="card w-80 my-10 text-gray-800 bg-white shadow-xl">
                  <figure>
                      <p> save inputan</p>
                  </figure>
                  <div className="card-body static">
                      <h2 className="card-title">Penyelesaian</h2>
                      <p className="mb-5">Penyelesaian</p>
                      <div className="card-actions  justify-end">
                      <div className="btn btn-warning bg-[#E09132]">
                          <p className='text-white'>test</p>
                      </div>
                      <div className='absolute top-2 right-[-15px] pt-3 rounded-lg bg-[#E09132] h-[40px] w-[55px]'>
                      <Typography className="text-white font-bold text-center" variant='p' sx={{fontFamily : 'crimsonText'}}>
                        #1
                      </Typography>
                      </div>
                      </div>
                  </div>
                  </div>
    </div>
    </div>
  )
}

export default Riwayat