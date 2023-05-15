import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { useEffect } from 'react';
var Latex = require('react-latex');

const Determinanordo2 = () => {
  //State Awal Matrix & Hasil Determinan
  const [matrixDetOrdo2, setMatrixDetOrdo2] = useState([
    ['', ''],
    ['', '']
  ]);
  
  const [determinanOrdo2, setDeterminanOrdo2] = useState(null);
  
  // Mengambil Data Dari Local Storage & Menambahkan Data Baru
  const [dataDetOrdo2, setDataDetOrdo2] = useState(() => {
    const storedDataDetOrdo2 = localStorage.getItem('DetOrdo2');
    return storedDataDetOrdo2 ? JSON.parse(storedDataDetOrdo2) : [];
  });

  //Mengatur Input Masukan
  function mengaturInputMasuk(event, row, col) {
    const value = parseFloat(event.target.value);
    const newMatrix = [...matrixDetOrdo2];
    newMatrix[row][col] = isNaN(value) ? 0 : value;

    setMatrixDetOrdo2(newMatrix);
  }

  // Mengatur Simpan, Hitung, Hasil
  const SimpanDetOrdo2 = (e) => {
    e.preventDefault();

    let dataDetOrdo2Obj = {
      ID: 'Determinan Ordo 2',
      MatrixDetOrdo2: matrixDetOrdo2,
      DeterminanOrdo2: determinanOrdo2
    };
  
    setDataDetOrdo2((prevDataDetOrdo2) => [...prevDataDetOrdo2, dataDetOrdo2Obj]);
  };
  
  useEffect(() => {
    localStorage.setItem('DetOrdo2', JSON.stringify(dataDetOrdo2));
  }, [dataDetOrdo2]);

  const ResetDetOrdo2 = () => {
    setDeterminanOrdo2(null);
    setMatrixDetOrdo2([['',''],['','']])
  }

  function menghitungDeterminan() {
    const [a, b] = matrixDetOrdo2[0];
    const [c, d] = matrixDetOrdo2[1];

    const hasilDeterminan = a * d - b * c;

    setDeterminanOrdo2(hasilDeterminan);
  }

  //Menampilkan Perhitungan
  const menampilkanPerhitungan = () => {
    const [a, b] = matrixDetOrdo2[0];
    const [c, d] = matrixDetOrdo2[1];

    const det =
      a * d - b * c;

    return (
      <div>
        <h2>Alur Perhitungan:</h2>
        <p> = &gt; ({a} x {d}) - ({b} x {c}) </p>
        <p> = &gt; {det} </p>
        <p>Determinan matriks adalah: {det}</p>
      </div>
    );
  };

  //Menampilkan Matrix Dari Inputan
  const a1b2 = `$$\\begin{bmatrix} ${matrixDetOrdo2[0][0]} & ${matrixDetOrdo2[1][1]} \\end{bmatrix}$$`;
  const a2b1 = `$$\\begin{bmatrix} ${matrixDetOrdo2[0][1]} & ${matrixDetOrdo2[1][0]} \\end{bmatrix}$$`;
  
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
                Determinan Ordo 2x2
              </Typography>
            </div>
          </div>
          <div className='max-w-md mx-auto mt-10 bg-[#E09132] px-4 py-2 rounded-lg'>
            <table className="table-fixed mx-auto max-w-lg">
              <thead>
                <tr>
                  <th className="w-1/2 text-black">A</th>
                  <th className="w-1/2 text-black">B</th>
                </tr>
              </thead>
              <tbody>
                {matrixDetOrdo2.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>
                        <input
                          type="number"
                          value={cell}
                          onChange={(event) => mengaturInputMasuk(event, i, j)}
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
            <button onClick={menghitungDeterminan} className="px-4 py-2 bg-[#E09132] text-white rounded-full">
              Hitung  →
            </button>
            <button onClick={ResetDetOrdo2} className="px-4 py-2 bg-red-600 text-white rounded-full">
              Reset  →
            </button>
            <form>
              <button onClick={SimpanDetOrdo2} className="px-4 py-2 bg-green-600 text-white rounded-full">
                Simpan  →
              </button>
            </form>
          </div>
          <div>
            {determinanOrdo2 !== null && (
              <div className='flex flex-wrap mt-[50px]'>
                <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                  Hasil dari determinan yang anda cari adalah: <strong>{determinanOrdo2}</strong>
                </Typography>
                <div className='flex flex-col items-center justify-center mt-5'>
                  <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                    Proses & tahapan pengerjaan sebagai berikut :
                  </Typography>
                  <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                    Langkah 1 : menggambarkan matrix 
                  </Typography>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixDetOrdo2.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                  <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                    Langkah 2 : mengoperasikan matrix [a1 x b2] - [b1 -a2]
                  </Typography>
                    <div className='flex'>
                      <Latex>{a1b2}</Latex>
                        <p> - </p>
                      <Latex>{a2b1}</Latex>
                    </div>
                    <div>
                      {menampilkanPerhitungan()}
                    </div>
                </div>
              </div>
            )}
          </div>
        </div>
      <div className='bg-[#FFF8F2] h-[900px] w-[200px] shadow-xl mt-4 sm:mt-0'>
        test (right)
      </div>
    </div>
    </>
  );
};

export default Determinanordo2;
