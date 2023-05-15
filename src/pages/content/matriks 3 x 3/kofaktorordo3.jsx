import React from 'react'
import { useState } from 'react' 
import { Typography } from '@mui/material'

const Kofaktor3 = () => {

  const [matrix,setMatrix] = useState([
    ['','',''],
    ['','',''],
    ['','',''],
  ])
  
  const [kofaktor,setKofaktor] = useState([''])
  
  function handleInputChange(event,row,col){
    const value = parseFloat(event.target.value)
    const newMatrix = [...matrix]
    newMatrix[row][col]= isNaN(value) ? 0 : value
    setMatrix(newMatrix)
  }
  
  function handleKofaktorOrdo3(){
    const [a,b,c] = matrix[0]
    const [d,e,g] = matrix[1]
    const [h,i,j] = matrix[2]

    const m11 = (e * j - g * i) * 1

    const m12 = (d * j - g * h) * -1

    const m13 = (d * i - e * h) * 1

    const m21 = (b * j - c * i) * -1

    const m22 = (a * j - c * h) * 1

    const m23 = (a * i - b * h) * -1

    const m31 = (b * g - c * e) * 1

    const m32 = (a * g - c * d) * -1

    const m33 = (a * e - b * d) * 1
    
    const hasil = [m11,m12,m13,m21,m22,m23,m31,m32,m33]

    setKofaktor(hasil)
  }
  
  return (
    <>
 <div className='flex flex-col items-center sm:flex-row sm:items-start justify-center'>
        <div className='bg-[#FFF8F2] h-[900px] w-[200px] shadow-xl mt-4 sm:mt-0 sm:mr-4'>
          test (right)
        </div>
        <div className='w-full md:max-w-[697px] p-6 bg-[#FFF8F2] shadow-xl rounded-lg'>
          <div className='justify-center'>
            <div className='rounded-3xl py-2 max-h-screen bg-[#423232] text-center w-full'>
              <Typography className="text-[#F0EAC0] text-[36px] font-normal" variant='p' sx={{ fontFamily: 'Crimson Text' }}>
                Kofaktor Ordo 3x3
              </Typography>
            </div>
          </div>
          <div className='max-w-md mx-auto mt-10 bg-[#E09132] px-4 py-2 rounded-lg'>
      <table className="table-fixed mx-auto max-w-lg">
        <thead>
          <tr>
            <th className="w-1/3 text-black">A</th>
            <th className="w-1/3 text-black">B</th>
            <th className="w-1/3 text-black">C</th>
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
                    className="text-center rounded-lg w-[6rem] md:w-20"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
          </div>
          <div className='flex justify-center gap-5 mt-4'>
                  <button
        onClick={handleKofaktorOrdo3}
        className="px-4 py-2 bg-[#E09132] text-white rounded-full"
        >
          Tentukan Kofaktor
        </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-full">
              Reset  →
            </button>
            <form>
              <button className="px-4 py-2 bg-green-600 text-white rounded-full">
                Simpan  →
              </button>
            </form>
          </div>
          <div>
	<p className="mt-4">
          Kofaktornya nya: <strong>{kofaktor[0]} {kofaktor[1]} {kofaktor[2]} {kofaktor[3]}	{kofaktor[4]}{kofaktor[5]}{kofaktor[6]}{kofaktor[7]}{kofaktor[8]}{kofaktor[9]}</strong>
        </p>
          </div>
        </div>
      <div className='bg-[#FFF8F2] h-[900px] w-[200px] shadow-xl mt-4 sm:mt-0'>
        test (right)
      </div>
    </div>
      </>
  )
}

export default Kofaktor3