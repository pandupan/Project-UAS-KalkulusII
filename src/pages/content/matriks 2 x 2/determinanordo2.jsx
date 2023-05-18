import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
        <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black flex mb-3">
          Langkah 3 : Pengoprasian
        </Typography>
        <Typography className='flex flex-col justify-center items-center' variant='p' sx={{fontFamily : 'Merriweather'}} >
        <p>  ({a} x {d}) - ({b} x {c}) </p>
        <p>  {det} </p>
        <p>Hasil determinan matrix: {det}</p>
        </Typography>
      </div>
    );
  };

  //Menampilkan Matrix Dari Inputan
  const a1b2 = `$$\\begin{bmatrix} ${matrixDetOrdo2[0][0]} & ${matrixDetOrdo2[1][1]} \\end{bmatrix}$$`;
  const a2b1 = `$$\\begin{bmatrix} ${matrixDetOrdo2[0][1]} & ${matrixDetOrdo2[1][0]} \\end{bmatrix}$$`;

  const rumusUmum = ` A=$$\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$$`;
  const contohRumus = '  A=$$\\begin{bmatrix} 1 & -2 \\\\ 3 & 4 \\end{bmatrix}$$';
  const inversOrdo2x2 = '  A=$$\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$$';
  
  return (
    <>
      <div className='flex flex-col items-center sm:flex-row sm:items-start justify-center'>
        <div className='bg-[#FFF8F2] sm:max-h-auto md:h-[830px] text-sm w-[90%] mb-5 sm:w-[200px] shadow-xl p-4 mt-4 sm:mt-0 sm:mr-4'>
          <div className='flex '>
          <Typography variant='p' sx={{fontFamily : 'Merriweather'}}><strong>Petunjuk Penggunaan :</strong></Typography>
          </div>
          <br/>
          <Typography variant='p' sx ={{fontFamily : 'Merriweather'}} >
            <ol style={{listStyleType:'decimal'}}>
              <li>
                Masukan angka-angka matriks pada kotak yang tersedia
              </li>
              <li>
                Pastikan Anda menginput angka pada determinan ordo 2 x 2 dengan benar agar hasilnya tepat
              </li>
              <li>
                Klik tombol "Hitung" untuk mendapatkan hasil determinan dari matriks yang Anda Inputkan
              </li>
              <li>
                Hasil determinan akan ditampilkan dilayar kalkulator
              </li>
              <li>
                CalMath akan menampilkan langkah penyelesaian untuk hasil perhitungan determinan
              </li>
              <li>
                Hasil operasi hitung determinan dapat Anda simpan dan ditampilkan dalam Riwayat
              </li>
              <li>
                Jika Anda ingin menghitung determinan matriks lain, Anda bisa klik tombol "Reset" dan ulangi langkah-langkah sebelumnya
              </li>
            </ol>
          </Typography>
        </div>
        <div className='w-full bg-[#FFF8F2] md:max-w-[697px] p-6 shadow-xl rounded-lg mr-4'>
          <div className='justify-center'>
            <div className='rounded-3xl py-2 max-h-screen bg-[#423232] text-center w-full'>
              <Typography className="text-[#F0EAC0] text-[36px] font-normal" variant='p' sx={{ fontFamily: 'Crimson Text' }}>
                Determinan Ordo 2x2
              </Typography>
            </div>
          </div>
          <div className='max-w-md mx-auto mt-10 shadow-md bg-[#E09132] px-4 py-2 rounded-lg'>
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
            {determinanOrdo2 !== null && (
              <div className=' shadow-md bg-[#FFF8F2] p-4 relative justify-center flex flex-wrap mt-[50px] border rounded-lg'>
                <div className='top-[-10px] border shadow-md p-2 bg-[#FFF8F2] rounded-lg'>
                <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                  Hasil dari determinan yang anda cari adalah: <strong>{determinanOrdo2}</strong>
                </Typography>
                </div>
                <div className='flex flex-wrap items-center gap-4 justify-center mt-5'>

                <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-4'>

                  <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                    Langkah 1 : menggambarkan matrix 
                  </Typography>
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixDetOrdo2.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>

                  </div>
                </div>
                <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 2 : mengoperasikan matrix [A1 x B2] - [B1 x A2]
                    </Typography> 
                  </div>
                    <div className='flex mb-8'>
                      <Latex>{a1b2}</Latex>
                        <p>&nbsp;-&nbsp; </p>
                      <Latex>{a2b1}</Latex>
                    </div>
                  </div>
                  <div>
                    {menampilkanPerhitungan()}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='bg-[#FFF8F2] sm:max-h-auto text-sm w-[90%] mb-5 sm:w-[200px] shadow-xl p-4 mt-4 sm:mt-0 sm:mr-4'>
          <div className='flex mb-[14px]'>
          <Typography variant='p' sx={{fontFamily : 'Merriweather'}}><strong>Materi Pembahasan</strong></Typography>
          </div>
          <Typography variant='p' sx={{fontFamily: 'Merriweather'}}>
          <p>
            &nbsp; Determinan adalah nilai yang dapat dihitung dari unsur-unsur suatu matriks persegi,
            Faktor skala transformasi yang digambarkan oleh matriks juga disebut dengan determinan,
            lalu determinan dari matriks A dinotasikan dengan det (A) atau |A|.
          </p>
          <h2 className='mt-2 mb-1'>
          &nbsp; <strong>Matriks Ordo 2 x 2</strong>
          </h2>
          </Typography>
          <div>
          <Typography variant='p' sx={{fontFamily: 'Merriweather'}}>
            <p>Rumus Umum :</p>
            <Latex>
            {rumusUmum}
            </Latex>
            <p className='my-1'>
              det (A) = |A| = a.d - b.c
            </p>
            <p>
            &nbsp;<strong>Contoh :</strong>
              <p className='py-2 mb-1'>
                Misal Matriks A = <Latex>{contohRumus}</Latex>
              </p>
              <p className='py2'>
                |A| = <Latex>{contohRumus}</Latex>
              </p>
              <p className='py-2'>4-6 = -2 </p>
              <p>
                <strong>Ketentuan Determinan Ordo 2 x 2 :</strong>
              <p>1. Jika determinan matriks ordo 2 x 2 adalah nol, maka matriks tersebut tidak memiliki invers</p>
              <p>2. Jika determinan matriks ordo 2 x 2 tidak sama dengan nol, maka matriks tersebut memiliki invers. Yaitu :</p>
              <p> <Latex>{inversOrdo2x2}</Latex></p>
              </p>
            </p>
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Determinanordo2;
