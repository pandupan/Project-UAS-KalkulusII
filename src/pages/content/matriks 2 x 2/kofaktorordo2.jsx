import React from 'react'
import { useState } from 'react'

const  Kofaktorordo2 = () => {
  const[matrix,setMatrix] = useState([
    ['',''],
    ['','']
  ])

  const [kofaktor,setKofaktor] = useState([''])

  function handleInputChange(event, row, col){
    const value = parseFloat(event.target.value);
    const newMatrix = [...matrix];
    newMatrix[row][col] = isNaN(value) ? 0 : value; 
    
    setMatrix(newMatrix)
  }

  function handleKofaktor(){
    const [a,b] = matrix[0]
    const [c,d] = matrix[1]

    const m11 = d * 1

    const m12 = c * -1

    const m21 = b * -1

    const m22 = a * 1
    
    const hasil = [m11,m12,m21,m22]

    setKofaktor(hasil)
  }
  return (
    <>
      <div>
        <table className='table-fixed'>
          <thead>
            <tr>
              <th className='w-1/5'>A</th>
              <th className='w-1/5'>B</th>
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
                    className="w-full h-full text-center"
                  />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <button
        onClick={handleKofaktor}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Tentukan Kofaktor        </button>

        <p className="mt-4">
          Kofaktor nya: <strong>{kofaktor[0]}, {kofaktor[1]}, {kofaktor[2]}, {kofaktor[3]}</strong>
        </p>

      </div>
    </>
  )
}

export default Kofaktorordo2