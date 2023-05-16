import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
var Latex = require('react-latex');

const Riwayat = () => {
  const [riwayatDetOrdo2, setriwayatDetOrdo2] = useState([]);
  const [riwayatDetOrdo3, setriwayatDetOrdo3] = useState([]);
  const [riwayatMinorOrdo2, setriwayatMinorOrdo2] = useState([]);
  const [riwayatKofOrdo2, setriwayatKofOrdo2] = useState([]);

  useEffect(() => {
    const dataDetOrdo2 = localStorage.getItem('DetOrdo2');
    const dataDetOrdo3 = localStorage.getItem('DetOrdo3');
    const dataMinorOrdo2 = localStorage.getItem('MinorOrdo2');
    const dataKofOrdo2 = localStorage.getItem('KofOrdo2');

    if (dataDetOrdo2) {
      setriwayatDetOrdo2(JSON.parse(dataDetOrdo2));
    }
    if (dataDetOrdo3) {
      setriwayatDetOrdo3(JSON.parse(dataDetOrdo3));
    }
    if(dataMinorOrdo2){
      setriwayatMinorOrdo2(JSON.parse(dataMinorOrdo2))
    }
    if(dataKofOrdo2){
      setriwayatKofOrdo2(JSON.parse(dataKofOrdo2))
    }

  }, []);



  return (
    <div className='relative bg-[#FFF8F2] mx-auto justify-center mt-100 max-w-[1400px] rounded-3xl'>
      <div className='flex justify-center static mx-auto'>
        <div className=' rounded-3xl py-2 top-[-14px] w-[90%] md:w-[697px] max-h-[125px] bg-[#423232] text-center '>
          <Typography className="text-[#F0EAC0] text-[36px] font-normal" variant='p' sx={{ fontFamily: 'Crimson Text' }}>
            Riwayat Penggunaan
          </Typography>
        </div>
      </div>

      <div className="sm:flex gap-10 flex-wrap items-stretch justify-center  text-center mt-10">
        {riwayatDetOrdo2.map((data, index) => (
          
          <div key={data.ID} className="card w-full sm:w-80 my-10 text-gray-800 bg-white shadow-xl">
            <div className='flex justify-center border-b-2 pt-2'>

              <Typography className="card-title" variant='p' sx={{ fontFamily: 'Crimson Text'}}>
                {data.ID}
              </Typography>
            </div>
            <figure>
              <div className='mt-4'>
            <Latex>
              {`$$\\begin{bmatrix} ${data.MatrixDetOrdo2.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
            </Latex> 
              </div>
            </figure>
            <div className="card-body static">
              <p className="mb-4">Maka Hasil Determinanya Adalah :</p>
              <div className="card-actions justify-center">
                <div className="rounded-lg h-6 w-44 border shadow">
                  <p className='text-black'>{data.DeterminanOrdo2}</p>
                </div>
                <div className='absolute top-2 right-[-15px] pt-3 rounded-lg bg-[#E09132] h-[40px] w-[55px]'>
                  <Typography className="text-white font-bold text-center" variant='p' sx={{ fontFamily: 'crimsonText' }}>
                    #{index + 1}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sm:flex gap-10 flex-wrap items-stretch justify-center  text-center mt-10">
        {riwayatMinorOrdo2.map((data, index) => (
          <div key={data.ID} className="card w-full sm:w-80 my-10 text-gray-800 bg-white shadow-xl">
            <div className='flex justify-center border-b-2 pt-2'>
              <Typography className="card-title" variant='p' sx={{ fontFamily: 'Crimson Text'}}>
                {data.ID}
              </Typography>
            </div>
            <figure>
              <div className='mt-4'>
            <Latex>
              {`$$\\begin{bmatrix} ${data.MatrixMinorOrdo2.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
            </Latex> 
              </div>
            </figure>
            <div className="card-body static">
              <p className="mb-4">Maka Hasil Minor adalah :</p>
              <div className="card-actions justify-center">
                <div className="rounded-lg h-6 w-44 border shadow">
                  <p className='text-black'>
                    <p>
                      M1, M2, M3, M4 =
                    </p>
                  <Latex>
                   {`$$\\begin{bmatrix}${data.MinorOrdo2.map(row => `[${row}]`).join(' ')} \\end{bmatrix}$$`}
                  </Latex>
                  </p>
                </div>
                <div className='absolute top-2 right-[-15px] pt-3 rounded-lg bg-[#E09132] h-[40px] w-[55px]'>
                  <Typography className="text-white font-bold text-center" variant='p' sx={{ fontFamily: 'crimsonText' }}>
                    #{index + 1}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sm:flex gap-10 flex-wrap items-stretch justify-center  text-center mt-10">
        {riwayatKofOrdo2.map((data, index) => (
          <div key={data.ID} className="card w-full sm:w-80 my-10 text-gray-800 bg-white shadow-xl">
            <div className='flex justify-center border-b-2 pt-2'>
              <Typography className="card-title" variant='p' sx={{ fontFamily: 'Crimson Text'}}>
                {data.ID}
              </Typography>
            </div>
            <figure>
              <div className='mt-4'>
            <Latex>
              {`$$\\begin{bmatrix} ${data.MatrixKofOrdo2.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
            </Latex> 
              </div>
            </figure>
            <div className="card-body static">
              <p className="mb-4">Maka Hasil Minor adalah :</p>
              <div className="card-actions justify-center">
                <div className="rounded-lg h-6 w-44 border shadow">
                  <p className='text-black'>
                  <Latex>
                   {`$$\\begin{bmatrix}${data.KofaktorOrdo2.map(row => `[${row}]`).join(' ')} \\end{bmatrix}$$`}
                  </Latex>
                  </p>
                </div>
                <div className='absolute top-2 right-[-15px] pt-3 rounded-lg bg-[#E09132] h-[40px] w-[55px]'>
                  <Typography className="text-white font-bold text-center" variant='p' sx={{ fontFamily: 'crimsonText' }}>
                    #{index + 1}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sm:flex gap-10 flex-wrap items-stretch justify-center text-center mt-10">
        {riwayatDetOrdo3.map((data, index) => (
          <div key={data.ID} className="card w-full sm:w-80 my-10 text-gray-800 bg-white shadow-xl">
              <h2 className="card-title">{data.ID}</h2>
            <figure>
            <Latex>
              {`$$\\begin{bmatrix} ${data.MatrixDetOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
            </Latex> 
            </figure>
            <div className="card-body static">
              <p className="mb-5">Maka Hasil Determinanya Adalah :</p>
              <div className="card-actions justify-end">
                <div className="btn btn-warning bg-[#E09132]">
                  <p className='text-white'>{data.DeterminanOrdo3}</p>
                </div>
                <div className='absolute top-2 right-[-15px] pt-3 rounded-lg bg-[#E09132] h-[40px] w-[55px]'>
                  <Typography className="text-white font-bold text-center" variant='p' sx={{ fontFamily: 'crimsonText' }}>
                    #{index + 1}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Riwayat;
