import React from 'react'
import { useState } from 'react'


const Adjoinordo3 = () => {

  const [matrix,setMatrix] = useState([
    ['','',''],
    ['','',''],
    ['','',''],
  ])

  const [adjoin,setAdjoin] = useState([''])

  function handleInputChange(event,row,col){
    const value = parseFloat(event.target.value)
    const newMatrix = [...matrix]
    newMatrix[row][col]= isNaN(value) ? 0 : value
    setMatrix(newMatrix)
  }

  function handleAdjoinOrdo3(){
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
  
    const adj = [...hasil]

    const nilaiAdjoin = [
      adj[0],adj[3],adj[6],
      adj[1],adj[4],adj[7],
      adj[2],adj[5],adj[8]
     ]

    setAdjoin(nilaiAdjoin)
  }


  return (
    <div>
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
        onClick={handleAdjoinOrdo3}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Tentukan Kofaktor
        </button>

        <p className="mt-4">
          Kofaktornya nya: <strong>{adjoin[0]} {adjoin[1]} {adjoin[2]} {adjoin[3]}{adjoin[4]}{adjoin[5]}{adjoin[6]}{adjoin[7]}{adjoin[8]}{adjoin[9]}</strong>
        </p>

    </div>
  )
}

export default Adjoinordo3