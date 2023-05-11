import React, { useState } from 'react'




const Determinanordo2 = () => {
  const [matrix, setMatrix] = useState([
    ['',''],
    ['','']
  ])
  
  const [determinant, setDeterminant] = useState(null);
  
  function handleInputChange(event, row, col){
    const value = parseFloat(event.target.value);
    const newMatrix = [...matrix];
    newMatrix[row][col] = isNaN(value) ? 0 : value; 

    setMatrix(newMatrix)
  }

  function menghitungDeterminan(){
    const [a,b] = matrix[0]
    const [c,d] = matrix[1]

    const hasilDeterminan = 
    a * d -
    b * c

    setDeterminant(hasilDeterminan)
  }
  
  return ( 
    <>
    
    <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/3">A</th>
            <th className="w-1/3">B</th>
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
        onClick={menghitungDeterminan}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Hitung Determinan
      </button>
      {determinant !== null && (
        <p className="mt-4">
          Determinan matriks adalah: <strong>{determinant}</strong>
        </p>
      )}
    </>

    

  )
}

export default Determinanordo2