import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
var Latex = require('react-latex');

const Riwayat = () => {
  const [riwayatDetOrdo2, setriwayatDetOrdo2] = useState([]);
  const [riwayatMinorOrdo2, setriwayatMinorOrdo2] = useState([]);
  const [riwayatKofOrdo2, setriwayatKofOrdo2] = useState([]);
  const [riwayatAdjOrdo2, setriwayatAdjOrdo2] = useState([]);
  const [riwayatDetOrdo3, setriwayatDetOrdo3] = useState([]);
  const [riwayatMinorOrdo3, setriwayatMinorOrdo3] = useState([]);
  const [riwayatKofOrdo3, setriwayatKofOrdo3] = useState([]);
  const [riwayatAdjOrdo3, setriwayatAdjOrdo3] = useState([]);

  useEffect(() => {
    const dataDetOrdo2 = localStorage.getItem('DetOrdo2');
    const dataMinorOrdo2 = localStorage.getItem('MinorOrdo2');
    const dataKofOrdo2 = localStorage.getItem('KofOrdo2');
    const dataAdjOrdo2 = localStorage.getItem('AdjOrdo2');
    const dataDetOrdo3 = localStorage.getItem('DetOrdo3');
    const dataMinorOrdo3 = localStorage.getItem('MinorOrdo3');
    const dataKofOrdo3 = localStorage.getItem('KofOrdo3');
    const dataAdjOrdo3 = localStorage.getItem('AdjOrdo3');

    if (dataDetOrdo2) {
      setriwayatDetOrdo2(JSON.parse(dataDetOrdo2));
    }
    if(dataMinorOrdo2){
      setriwayatMinorOrdo2(JSON.parse(dataMinorOrdo2))
    }
    if(dataKofOrdo2){
      setriwayatKofOrdo2(JSON.parse(dataKofOrdo2))
    }
    if(dataAdjOrdo2){
      setriwayatAdjOrdo2(JSON.parse(dataAdjOrdo2))
    }
    if (dataDetOrdo3) {
      setriwayatDetOrdo3(JSON.parse(dataDetOrdo3));
    }
    if(dataMinorOrdo3){
      setriwayatMinorOrdo3(JSON.parse(dataMinorOrdo3))
    }
    if(dataKofOrdo3){
      setriwayatKofOrdo3(JSON.parse(dataKofOrdo3))
    }
    if(dataAdjOrdo3){
      setriwayatAdjOrdo3(JSON.parse(dataAdjOrdo3))
    }

  }, []);



  return (
    <>
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
                  {`$$\\begin{bmatrix} ${data.MatrixMinorOrdo2[0][0]} & ${data.MatrixMinorOrdo2[0][1]} \\\\ ${data.MatrixMinorOrdo2[1][0]} & ${data.MatrixMinorOrdo2[1][1]} \\end{bmatrix}$$`}
                </Latex>
              </div>
            </figure>
            <div className="card-body static">
              <p className="mb-4">Maka Hasil Minor adalah :</p>
              <div className="card-actions justify-center">
                <div className="rounded-lg max-h-[200px] w-44 border shadow">
                  <p className='text-black'>
                    <p>
                      M1, M2, M3, M4 =
                    </p>
                    <Latex>
                      {data.MinorOrdo2 !== null ? (
                        `$$\\begin{bmatrix} ${data.MinorOrdo2[0]} & ${data.MinorOrdo2[1]} \\\\ ${data.MinorOrdo2[2]} & ${data.MinorOrdo2[3]} \\end{bmatrix}$$`
                      ) : "0"}
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
              <p className="mb-4">Maka Hasil Kofaktor adalah :</p>
              <div className="card-actions justify-center">
                <div className="rounded-lg h-auto w-auto px-5 py-5 border shadow">
                  <p className='text-black'>
                  <Latex>
                    {`$$\\begin{bmatrix} ${data.KofaktorOrdo2[0]} & ${data.KofaktorOrdo2[1]} \\\\ ${data.KofaktorOrdo2[2]} & ${data.KofaktorOrdo2[3]} \\end{bmatrix}$$`}
                  </Latex>
                  {console.log(data.KofaktorOrdo2)}
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
        {riwayatAdjOrdo2.map((data, index) => (
          <div key={data.ID} className="card w-full sm:w-80 my-10 text-gray-800 bg-white shadow-xl">
            <div className='flex justify-center border-b-2 pt-2'>
              <Typography className="card-title" variant='p' sx={{ fontFamily: 'Crimson Text'}}>
                {data.ID}
              </Typography>
            </div>
            <figure>
              <div className='mt-4'>
              <Latex>
              {`$$\\begin{bmatrix} ${data.MatrixAdjoinOrdo2.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
            </Latex> 
              </div>
            </figure>
            <div className="card-body static">
              <p className="mb-4">Maka Hasil Adjoin adalah :</p>
              <div className="card-actions justify-center">
                <div className="rounded-lg h-auto w-auto px-5 py-5 border shadow">
                  <p className='text-black'>
                  <Latex>
                  {`$$\\begin{bmatrix} ${data.AdjoinOrdo2[0]} & ${data.AdjoinOrdo2[2]} \\\\ ${data.AdjoinOrdo2[1]} & ${data.AdjoinOrdo2[3]} \\end{bmatrix}$$`}
                </Latex>
                  </p>
                  {console.log(data.MatrixAdjoinOrdo2)}
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
        {riwayatDetOrdo3.map((data, index) => (
          <div key={data.ID} className="card w-full sm:w-80 my-10 text-gray-800 bg-white shadow-xl">
            <div className='flex justify-center border-b-2 pt-2'>
              <Typography className="card-title" variant='p' sx={{ fontFamily: 'Crimson Text'}}>
                {data.ID}
              </Typography>
            </div>
            <figure>
              <div className='mt-4'>
            <Latex>
              {`$$\\begin{bmatrix} ${data.MatrixDetOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
            </Latex> 
              </div>
            </figure>
            <div className="card-body static">
              <p className="mb-4">Maka Hasil Determinanya Adalah :</p>
              <div className="card-actions justify-center">
                <div className="rounded-lg h-6 w-44 border shadow">
                  <p className='text-black'>{data.DeterminanOrdo3}</p>
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
        {riwayatMinorOrdo3.map((data, index) => (
          <div key={data.ID} className="card w-full sm:w-80 my-10 text-gray-800 bg-white shadow-xl">
            <div className='flex justify-center border-b-2 pt-2'>
              <Typography className="card-title" variant='p' sx={{ fontFamily: 'Crimson Text'}}>
                {data.ID}
              </Typography>
            </div>
            <figure>
              <div className='mt-4'>
            <Latex>
              {`$$\\begin{bmatrix} ${data.MatrixMinorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
            </Latex> 
              </div>
            </figure>
            <div className="card-body static">
              <p className="mb-4">Maka Hasil Minor adalah :</p>
              <div className="card-actions justify-center">
                <div className=" flex flex-wrap rounded-lg h-auto w-44 border shadow">
                  <p className='text-black text-center max-w-[170px]'>
                    <p className=' text-center max-w-[170px]'>
                    </p>
                    <div className='flex flex-wrap justify-center gap-2 '>
                    <Latex>
                     {`$$\\begin{bmatrix} M11 & M12  & M13 \\\\ M21 & M22 & M23 \\\\ M31 & M32 & M33 \\end{bmatrix}$$`}
                    </Latex>
                      <Latex>
                        {`$$\\begin{bmatrix} ${data.MinorOrdo3[0]} & ${data.MinorOrdo3[1]}  & ${data.MinorOrdo3[2]} \\\\ ${data.MinorOrdo3[3]} & ${data.MinorOrdo3[4]} & ${data.MinorOrdo3[5]} \\\\ ${data.MinorOrdo3[6]} & ${data.MinorOrdo3[7]} & ${data.MinorOrdo3[8]} \\end{bmatrix}$$`}
                      </Latex>
                    </div>
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
        {riwayatKofOrdo3.map((data, index) => (
          <div key={data.ID} className="card w-full sm:w-80 my-10 text-gray-800 bg-white shadow-xl">
            <div className='flex justify-center border-b-2 pt-2'>
              <Typography className="card-title" variant='p' sx={{ fontFamily: 'Crimson Text'}}>
                {data.ID}
              </Typography>
            </div>
            <figure>
              <div className='mt-4'>
            <Latex>
              {`$$\\begin{bmatrix} ${data.MatrixKofaktorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
            </Latex> 
            {console.log(data.MatrixKofOrdo3)}
              </div>
            </figure>
            <div className="card-body static">
              <p className="mb-4">Maka Hasil Kofakttor adalah :</p>
              <div className="card-actions justify-center">
                <div className="rounded-lg h-auto w-auto py-5 px-5 border shadow">
                  <p className='text-black'>
                  <Latex>
                    {`$$\\begin{bmatrix} ${data.KofaktorOrdo3[0]} & ${data.KofaktorOrdo3[1]}  & ${data.KofaktorOrdo3[2]} \\\\ ${data.KofaktorOrdo3[3]} & ${data.KofaktorOrdo3[4]} & ${data.KofaktorOrdo3[5]} \\\\ ${data.KofaktorOrdo3[6]} & ${data.KofaktorOrdo3[7]} & ${data.KofaktorOrdo3[8]} \\end{bmatrix}$$`}
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
        {riwayatAdjOrdo3.map((data, index) => (
          <div key={data.ID} className="card w-full sm:w-80 my-10 text-gray-800 bg-white shadow-xl">
            <div className='flex justify-center border-b-2 pt-2'>
              <Typography className="card-title" variant='p' sx={{ fontFamily: 'Crimson Text'}}>
                {data.ID}
              </Typography>
            </div>
            <figure>
              <div className='mt-4'>
              <Latex>
              {`$$\\begin{bmatrix} ${data.MatrixAdjoinOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
            </Latex> 
              </div>
            </figure>
            <div className="card-body static">
              <p className="mb-4">Maka Hasil Adjoin adalah :</p>
              <div className="card-actions justify-center">
                <div className="rounded-lg h-auto w-auto px-5 py-5 border shadow">
                  <p className='text-black'>
                  <Latex>
                   {`$$\\begin{bmatrix} ${data.AdjoinOrdo3[0]} & ${data.AdjoinOrdo3[1]}  & ${data.AdjoinOrdo3[2]} \\\\ ${data.AdjoinOrdo3[3]} & ${data.AdjoinOrdo3[4]} & ${data.AdjoinOrdo3[5]} \\\\ ${data.AdjoinOrdo3[6]} & ${data.AdjoinOrdo3[7]} & ${data.AdjoinOrdo3[8]} \\end{bmatrix}$$`}
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

      
      

    </div>
    </>

  );
};

export default Riwayat;
