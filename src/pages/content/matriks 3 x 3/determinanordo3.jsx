import React, { useState } from 'react';
import { Typography } from '@mui/material';
var Latex = require('react-latex')

const Determinanordo3 = () => { 
  const [matrix, setMatrix] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]); 

  const [determinant, setDeterminant] = useState(null);

  function handleInputChange(event, row, col) {
    const value = parseFloat(event.target.value);
    const newMatrix = [...matrix];
    newMatrix[row][col] = isNaN(value) ? 0 : value;
    setMatrix(newMatrix);
  }

  function menghitungDeterminan() {
    const [a, b, c] = matrix[0];
    const [d, e, f] = matrix[1];
    const [g, h, i] = matrix[2];

    const det =
      a * e * i +
      b * f * g +
      c * d * h -
      a * f * h -
      b * d * i -
      c * e * g;

    setDeterminant(det);
  }

  function menampilkanPerhitungan(){
    const [a, b, c] = matrix[0];
    const [d, e, f] = matrix[1];
    const [g, h, i] = matrix[2];

    const det =
      a * e * i +
      b * f * g +
      c * d * h -
      a * f * h -
      b * d * i -
      c * e * g;

      return (
        <div>
          <h2>Alur Perhitungan:</h2>
          <p> = &gt; ({a} x {e} x {i}) + ({b} x {f} x {g}) + ({c} x {d} x {h}) - ({a} x {f} x {h}) - ({b} x {d} x {i}) - ({c} x {e} x {g}) </p>
          <p> = &gt; ({a*e*i}) + ({b*f*g}) + ({c*d*h}) - ({a*f*h}) - ({b*d*i}) - ({c*e*g}) </p>
          <p> = &gt; ({a*e*i+b*f*g}) + ({c*d*h-a*f*h}) - ({b*d*i-c*e*g}) </p>
          <p>Determinan matriks adalah: {det}</p>
        </div>
      );
  }

  return (
    <>
     <div className=' mt-11 flex'>
        <div className='bg-[#FFF8F2] mx-auto h-[900px] w-[200px] shadow-xl'>
          test
        </div>
          
        <div className='w-[800px] max-h-xl static p-6 bg-[#FFF8F2] shadow-xl rounded-lg justify-center mx-auto'>
        <div className='flex justify-center static mx-auto'>
          <div className='absolute rounded-3xl py-2 top-[100px] w-[697px] h-[77px] bg-[#423232] text-center'>
              <Typography className="text-[#F0EAC0] text-[36px] font-normal" variant='p' sx={{fontFamily : 'Crimson Text'}}>
                Determinan Ordo 3x3      
              </Typography>
          </div>
        </div>
          <div className='max-w-md mx-auto mt-20 bg-[#E09132] shadow-xl px-4 py-2 rounded-lg'>

          
          <table className="table-fixed mx-auto max-w-lg">
        <thead>
          <tr>
            <th className="w-1/3">A</th>
            <th className="w-1/3">B</th>
            <th className="w-1/3">C</th>
          </tr>
        </thead>
        <tbody>
          {matrix.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>
                  <input
                    type="number"
                    value={cell}
                    onChange={(event) => handleInputChange(event, i, j)}
                    className="w-full h-full text-center rounded-lg"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
          </div>

          <div className='justify-center flex flex-wrap gap-5'>
          
          
          </div>
      <div className='justify-center flex wrap gap-10'>

      <div className='flex flex-col'>
      <div className='justify-center flex mt-5'>
              <Latex>
                {`$$\\begin{bmatrix} ${matrix.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
              </Latex>
          </div>

          <button
        onClick={menghitungDeterminan}
        className="mt-4 px-4 py-2 bg-[#E09132] text-white rounded-full"
        >
        Hitung Determinan
      </button>
      

          </div>

      {determinant !== null && (
        <p className="mt-4 my-6">
          Determinan matriks adalah: <strong>{determinant}</strong>
        </p>
      )}

            </div>

          <div>
      {menampilkanPerhitungan()}
      </div>          
        </div>
        <div className='bg-[#FFF8F2] mx-auto h-[900px] w-[200px] shadow-xl'>
          test
        </div>
      </div>
    <div>

        
    </div>
    </>
  );
};

export default Determinanordo3;
