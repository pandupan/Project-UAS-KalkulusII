import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var Latex = require('react-latex')

const Determinanordo3 = () => { 
  // State Awal Matrix & Hasil Determinan
  const [matrixDetOrdo3, setMatrixDetOrdo3] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);

  const [determinanOrdo3, setDeterminanOrdo3] = useState(null);

  // Mengambil Data Dari Local Storage & Menambahkan Data Baru
  const [dataDetOrdo3, setDataDetOrdo3] = useState(() => {
    const storedDataDetOrdo3 = localStorage.getItem('DetOrdo3');
    return storedDataDetOrdo3 ? JSON.parse(storedDataDetOrdo3) : [];
  });

  // Mengatur Input Masukan
  function mengaturInputMasuk(event, row, col) {
    const value = parseFloat(event.target.value);
    const newMatrix = [...matrixDetOrdo3];
    newMatrix[row][col] = isNaN(value) ? 0 : value;

    setMatrixDetOrdo3(newMatrix);
  }

  // Mengatur Simpan, Hitung, Hasil
  const SimpanDetOrdo3 = (e) => {
    e.preventDefault();

    toast.success('Perhitungan Anda telah disimpan !!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    let dataDetOrdo3Obj = {
      ID: 'Determinan Ordo 3',
      MatrixDetOrdo3: matrixDetOrdo3,
      DeterminanOrdo3: determinanOrdo3
    };

    setDataDetOrdo3((prevDataDetOrdo3) => [...prevDataDetOrdo3, dataDetOrdo3Obj]);
  };

  useEffect(() => {
    localStorage.setItem('DetOrdo3', JSON.stringify(dataDetOrdo3));
  }, [dataDetOrdo3]);

  const ResetDetOrdo3 = () => {
    setDeterminanOrdo3(null);
    setMatrixDetOrdo3([['', '', ''], ['', '', ''], ['', '', '']]);
  }

  function menghitungDeterminan() {
    const [a, b, c] = matrixDetOrdo3[0];
    const [d, e, f] = matrixDetOrdo3[1];
    const [g, h, i] = matrixDetOrdo3[2];
  
    const hasilDeterminan =
      (a * e * i) +
      (b * f * g) +
      (c * d * h) -
      (c * e * g) -
      (b * d * i) -
      (a * f * h);
  
    setDeterminanOrdo3(hasilDeterminan);
  }
  
  // Menampilkan Perhitungan
  const menampilkanPerhitungan = () => {
    const [a, b, c] = matrixDetOrdo3[0];
    const [d, e, f] = matrixDetOrdo3[1];
    const [g, h, i] = matrixDetOrdo3[2];
  
    const det =
      (a * e * i) +
      (b * f * g) +
      (c * d * h) -
      (c * e * g) -
      (b * d * i) -
      (a * f * h);
  
    return (
      <div>
        <h2>Alur Perhitungan:</h2>
        <p>= ({a} x {e} x {i}) + ({b} x {f} x {g}) + ({c} x {d} x {h}) - ({c} x {e} x {g}) - ({b} x {d} x {i}) - ({a} x {f} x {h})</p>
        <p>= {det}</p>
        <p>Determinan matriks adalah: {det}</p>
      </div>
    );
  };

  // Menampilkan Matrix Dari Inputan
  const a1b2c3 = `$$\\begin{bmatrix} ${matrixDetOrdo3[0][0]} & ${matrixDetOrdo3[1][1]} & ${matrixDetOrdo3[2][2]} \\end{bmatrix}$$`;
  const b1c2a3 = `$$\\begin{bmatrix} ${matrixDetOrdo3[0][0]} & ${matrixDetOrdo3[1][2]} & ${matrixDetOrdo3[2][1]} \\end{bmatrix}$$`;
  const c1a2b3 = `$$\\begin{bmatrix} ${matrixDetOrdo3[0][1]} & ${matrixDetOrdo3[1][0]} & ${matrixDetOrdo3[2][2]} \\end{bmatrix}$$`;
  const a3b2c1 = `$$\\begin{bmatrix} ${matrixDetOrdo3[0][1]} & ${matrixDetOrdo3[1][2]} & ${matrixDetOrdo3[2][0]} \\end{bmatrix}$$`;
  const b3c2a1 = `$$\\begin{bmatrix} ${matrixDetOrdo3[0][2]} & ${matrixDetOrdo3[1][0]} & ${matrixDetOrdo3[2][1]} \\end{bmatrix}$$`;
  const c3a2b1 = `$$\\begin{bmatrix} ${matrixDetOrdo3[0][2]} & ${matrixDetOrdo3[1][1]} & ${matrixDetOrdo3[2][0]} \\end{bmatrix}$$`;

  return (
    <>
      <div className='flex flex-col items-center sm:flex-row sm:items-start justify-center'>
  <div className='bg-[#FFF8F2] h-[900px] w-[200px] shadow-xl mt-4 sm:mt-0 sm:mr-4'>
    test (left)
  </div>
  <div className='w-full md:max-w-[697px] p-6 bg-[#FFF8F2] shadow-xl rounded-lg'>
    <div className='justify-center'>
      <div className='rounded-3xl py-2 max-h-screen bg-[#423232] text-center w-full'>
        <Typography className="text-[#F0EAC0] text-[36px] font-normal" variant='p' sx={{ fontFamily: 'Crimson Text' }}>
          Determinan Ordo 3x3
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
          {matrixDetOrdo3.map((row, i) => (
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
      <div className='flex justify-center items-center gap-5 mt-4'>
        <button onClick={menghitungDeterminan} className="px-4 py-2 bg-[#E09132] text-white rounded-full">
          Hitung  →
        </button>
        <button onClick={ResetDetOrdo3} className="px-4 py-2 bg-red-600 text-white rounded-full">
          Reset  →
        </button>
        <form>
          <button onClick={SimpanDetOrdo3} className="px-4 py-2 bg-green-600 text-white rounded-full">
            Simpan  →
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        progress={undefined}
        theme="light"
      />
      <div>
        {determinanOrdo3 !== null && (
          <div className='flex flex-wrap mt-4'>
            <Typography variant='p' sx={{ fontFamily: 'Merriweather' }} className="text-black">
              Hasil dari determinan yang anda cari adalah: <strong>{determinanOrdo3}</strong>
            </Typography>
            <div className='flex flex-col items-center justify-center mt-5'>
            <Typography variant='p' sx={{ fontFamily: 'Merriweather' }} className="text-black">
                Proses & tahapan pengerjaan sebagai berikut :
              </Typography>
              <Typography variant='p' sx={{ fontFamily: 'Merriweather' }} className="text-black">
                Langkah 1: Menggambarkan matriks
              </Typography>
              <Latex>
                {`$$\\begin{bmatrix} ${matrixDetOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
              </Latex>
              <Typography variant='p' sx={{ fontFamily: 'Merriweather' }} className="text-black">
                Langkah 2: Mengoperasikan matriks dengan aturan
              </Typography>
              <div className='flex'>
                <Latex>{a1b2c3}</Latex>
                <p>+</p>
                <Latex>{b1c2a3}</Latex>
                <p>+</p>
                <Latex>{c1a2b3}</Latex>
              </div>
              <div className='flex'>
                <p>-</p>
                <Latex>{a3b2c1}</Latex>
                <p>-</p>
                <Latex>{b3c2a1}</Latex>
                <p>-</p>
                <Latex>{c3a2b1}</Latex>
              </div>
              <Typography variant='p' sx={{ fontFamily: 'Merriweather' }} className="text-black">
                Langkah 3: Melakukan perhitungan
              </Typography>
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

export default Determinanordo3;
