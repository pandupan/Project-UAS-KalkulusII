import React, { useState } from 'react'
import { Typography } from '@mui/material'

const Minorordo2 = () => {
  const[matrix,setMatrix] = useState([
    ['',''],
    ['','']
  ])

  const [minor,setMinor] = useState([''])

  function handleInputChange(event, row, col){
    const value = parseFloat(event.target.value);
    const newMatrix = [...matrix];
    newMatrix[row][col] = isNaN(value) ? 0 : value; 
    
    setMatrix(newMatrix)
  }

  function handleMinor(){
    const [a,b] = matrix[0]
    const [c,d] = matrix[1]

    const m11 = d

    const m12 = c

    const m21 = b

    const m22 = a
    
    const hasil = [m11,m12,m21,m22]

    setMinor(hasil)
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
                Minor Ordo 2x2
              </Typography>
            </div>
          </div>
          <div className='max-w-md mx-auto mt-10 bg-[#E09132] px-4 py-2 rounded-lg'>

             <table className='table-fixed mx-auto max-w-lg'>
          <thead>
            <tr>
              <th className='w-1/2 text-black'>A</th>
              <th className='w-1/2 text-black'>B</th>
            </tr>
          </thead>
          <tbody>
            {matrix.map((row, i)=>(
              <tr key={i}>
                {row.map((cell,j)=>(
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
        onClick={handleMinor}
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
         <p className="mt-4">
          Minor nya: <strong>{minor[0]}, {minor[1]}, {minor[2]}, {minor[3]}</strong>
        </p>
        </div>
      <div className='bg-[#FFF8F2] h-[900px] w-[200px] shadow-xl mt-4 sm:mt-0'>
        test (right)
      </div>
    </div>
    </>
  )
}

export default Minorordo2