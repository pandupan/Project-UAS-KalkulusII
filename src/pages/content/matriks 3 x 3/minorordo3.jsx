import React, { useState } from 'react'

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
      <table className="table-fixed">
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
                    className="w-full h-full text-center"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleMinorOrdo3}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Tentukan Minor
        </button>

        <p className="mt-4">
          Minor nya: <strong>{minor[0]} {minor[1]} {minor[2]} {minor[3]}{minor[4]}{minor[5]}{minor[6]}{minor[7]}{minor[8]}{minor[9]}</strong>
        </p>
      </>
    </div>
  )
}

export default Minorordo3