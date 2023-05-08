import React, { useState } from 'react';

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

      <div>
      {menampilkanPerhitungan()}
      </div>


        
    </div>
  );
};

export default Determinanordo3;
