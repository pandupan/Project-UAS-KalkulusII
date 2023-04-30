import React, { useState } from 'react';

const Matriks2 = () => {
  const [matrix, setMatrix] = useState([
    ['', ''],
    ['', ''],
  ]);

  const [determinant, setDeterminant] = useState(null);

  function handleInputChange(event, row, col) {
    const value = parseInt(event.target.value);
    const newMatrix = [...matrix];
    newMatrix[row][col] = isNaN(value) ? 0 : value;
    setMatrix(newMatrix);
  }

  function menghitungDeterminan() {
    const [a, b] = matrix[0];
    const [c, d] = matrix[1];

    const det = a * d - b * c;

    setDeterminant(det);
  }

  function menampilkanPerhitungan(){
    const [a, b] = matrix[0];
    const [c, d] = matrix[1];

    const det = a * d - b * c;

    return (
      <div>
        <h2>Alur Perhitungan:</h2>
        <p>Det = a x d - b x c = {a} x {d} - {b} x {c} = {a * d - b * c}</p>
        <p>Determinan matriks adalah: {det}</p>
      </div>
    )
  }

  return (
    <div>
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/2">a</th>
            <th className="w-1/2">b</th>
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
                    className="w-full"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={menghitungDeterminan}>Hitung Determinan</button>
      {determinant !== null && menampilkanPerhitungan()}
    </div>
  );
};

export default Matriks2;
