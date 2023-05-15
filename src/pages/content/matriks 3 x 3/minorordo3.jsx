import React, { useState } from 'react'
import { Typography } from '@mui/material'

const Minorordo3 = () => {
  const [matrix,setMatrix] = useState([
    ['','',''],
    ['','',''],
    ['','',''],
  ])

  const [minor,setMinor] = useState([''])

  function handleInputChange(event,row,col){
    const value = parseFloat(event.target.value)
    const newMatrix = [...matrix]
    newMatrix[row][col]= isNaN(value) ? 0 : value
    setMatrix(newMatrix)
  }

  function handleMinorOrdo3(){
    const [a,b,c] = matrix[0]
    const [d,e,g] = matrix[1]
    const [h,i,j] = matrix[2]

    const m11 = e * j - g * i

    const m12 = d * j - g * h

    const m13 = d * i - e * h

    const m21 = b * j - c * i

    const m22 = a * j - c * h

    const m23 = a * i - b * h

    const m31 = b * g - c * e

    const m32 = a * g - c * d

    const m33 = a * e - b * d
    
    const hasil = [m11,m12,m13,m21,m22,m23,m31,m32,m33]

    setMinor(hasil)
  }
  return (
    <div>
      <>
      <div className='flex flex-col items-center sm:flex-row sm:items-start justify-center'>
        <div className='bg-[#FFF8F2] h-[900px] w-[200px] shadow-xl mt-4 sm:mt-0 sm:mr-4'>
          test (right)
        </div>
        <div className='w-full md:max-w-[697px] p-6 bg-[#FFF8F2] shadow-xl rounded-lg'>
          <div className='justify-center'>
            <div className='rounded-3xl py-2 max-h-screen bg-[#423232] text-center w-full'>
              <Typography className="text-[#F0EAC0] text-[36px] font-normal" variant='p' sx={{ fontFamily: 'Crimson Text' }}>
                Minor Ordo 3x3
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
        onClick={handleMinorOrdo3}
        className="px-4 py-2 bg-[#E09132] text-white rounded-full"
        >
          Tentukan Minor  →
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
          Minor nya: <strong>{minor[0]} {minor[1]} {minor[2]} {minor[3]}{minor[4]}{minor[5]}{minor[6]}{minor[7]}{minor[8]}{minor[9]}</strong>
        </p>
          </div>
        </div>
      <div className='bg-[#FFF8F2] h-[900px] w-[200px] shadow-xl mt-4 sm:mt-0'>
        test (right)
      </div>
    </div>
      </>
    </div>
  )
}

export default Minorordo3