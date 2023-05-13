import React, { useState } from 'react';
import { Typography } from '@mui/material';
var Latex = require('react-latex');

const Determinanordo2 = () => {
  const [matrixOrdo2, setMatrixOrdo2] = useState([
    ['', ''],
    ['', '']
  ]);

  const [determinanOrdo2, setDeterminanOrdo2] = useState(null);

  function mengaturInputMasuk(event, row, col) {
    const value = parseFloat(event.target.value);
    const newMatrix = [...matrixOrdo2];
    newMatrix[row][col] = isNaN(value) ? 0 : value;

    setMatrixOrdo2(newMatrix);
  }

  function menghitungDeterminan() {
    const [a, b] = matrixOrdo2[0];
    const [c, d] = matrixOrdo2[1];

    const hasilDeterminan = a * d - b * c;

    setDeterminanOrdo2(hasilDeterminan);
  }

  return (
    <>
      <div className=' mt-11 flex'>
        <div className='bg-white mx-auto h-[900px] w-[200px] shadow-xl'>
          test
        </div>

        <div className='w-[800px] max-h-xl static p-6 bg-white shadow-xl rounded-lg justify-center mx-auto'>
        <div className='flex justify-center static mx-auto'>
          <div className='absolute rounded-3xl py-2 top-[100px] w-[697px] h-[77px] bg-[#423232] text-center'>
              <Typography className="text-[#F0EAC0] text-[36px] font-normal" variant='p' sx={{fontFamily : 'Crimson Text'}}>
                Determinan Ordo 2x2      
              </Typography>
          </div>
        </div>
          <div className=' max-w-md mx-auto mt-20 bg-[#E09132] px-4 py-2 rounded-lg'>

          <table className="table-fixed mx-auto max-w-lg ">
            <thead>
              <tr>
                <th className="w-1/3 text-black">A</th>
                <th className="w-1/3 text-black">B</th>
              </tr>
            </thead>
            <tbody className='gap-10'>
              {matrixOrdo2.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>
                      <input
                        type="number"
                        value={cell}
                        onChange={(event) => mengaturInputMasuk(event, i, j)}
                        className=" text-center rounded-lg"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <div className='justify-center flex mt-5'>
              <Latex>
                {`$$\\begin{bmatrix} ${matrixOrdo2.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
              </Latex>
          </div>
          <div className='justify-center flex flex-wrap gap-5'>
          


          <button onClick={menghitungDeterminan} className=" mt-4 px-4 py-2 bg-[#E09132] text-white rounded-full">
            Hitung Determinan
          </button>

          <div className='py-2'>

          {determinanOrdo2 !== null && (
            <p className="mt-4 text-end text-black">
              Determinan matriks adalah: <strong>{determinanOrdo2}</strong>
            </p>
          )}

          </div>
            
          </div>
          
        </div>
        <div className='bg-white mx-auto h-[900px] w-[200px] shadow-xl'>
          test
        </div>
      </div>
    </>
  );
};

export default Determinanordo2;
