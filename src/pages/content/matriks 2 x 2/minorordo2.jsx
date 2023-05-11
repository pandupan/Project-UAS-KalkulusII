import React, { useState } from 'react'

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
        onClick={handleMinor}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Tentukan Minor
        </button>

        <p className="mt-4">
          Minor nya: <strong>{minor[0]}, {minor[1]}, {minor[2]}, {minor[3]}</strong>
        </p>

      </div>
    </>
  )
}

export default Minorordo2