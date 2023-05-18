import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var Latex = require('react-latex');

const Minorordo2 = () => {
  const [matrixMinorOrdo2, setMatrixMinorOrdo2] = useState([
    ['', ''],
    ['', '']
  ]);

  const [minorOrdo2, setMinorOrdo2] = useState(null);

  // Mengambil Data Dari Local Storage & Menambahkan Data Baru
  const [dataMinorOrdo2, setDataMinorOrdo2] = useState(() => {
    const storedDataMinorOrdo2 = localStorage.getItem('MinorOrdo2');
    return storedDataMinorOrdo2 ? JSON.parse(storedDataMinorOrdo2) : [];
  });

  function handleInputChange(event, row, col) {
    const value = parseFloat(event.target.value);
    const newMatrix = [...matrixMinorOrdo2];
    newMatrix[row][col] = isNaN(value) ? 0 : value;

    setMatrixMinorOrdo2(newMatrix);
  }

  // Mengatur Simpan, Hitung, Hasil
  const SimpanMinorOrdo2 = (e) => {
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

    let dataMinorOrdo2Obj = {
      ID: 'Minor Ordo 2',
      MatrixMinorOrdo2: matrixMinorOrdo2,
      MinorOrdo2: minorOrdo2
    };

    setDataMinorOrdo2((prevDataMinorOrdo2) => [...prevDataMinorOrdo2, dataMinorOrdo2Obj]);
  };

  useEffect(() => {
    localStorage.setItem('MinorOrdo2', JSON.stringify(dataMinorOrdo2));
  }, [dataMinorOrdo2]);

  const ResetMinorOrdo2 = () => {
    setMinorOrdo2(null);
    setMatrixMinorOrdo2([['', ''], ['', '']]);
  };

  function handleMinorOrdo2() {
    const [a, b] = matrixMinorOrdo2[0];
    const [c, d] = matrixMinorOrdo2[1];

    const m11 = d;
    const m12 = c;
    const m21 = b;
    const m22 = a;

    const hasil = [m11, m12, m21, m22];

    setMinorOrdo2(hasil);
  }

  const m11 = `M11 = $$\\begin{bmatrix} ${minorOrdo2 ? minorOrdo2[0] : 0} \\end{bmatrix}$$`;
  const m12 = `M12 = $$\\begin{bmatrix} ${minorOrdo2 ? minorOrdo2[1] : 0} \\end{bmatrix}$$`;
  const m21 = `M21 = $$\\begin{bmatrix} ${minorOrdo2 ? minorOrdo2[2] : 0} \\end{bmatrix}$$`;
  const m22 = `M22 = $$\\begin{bmatrix} ${minorOrdo2 ? minorOrdo2[3] : 0} \\end{bmatrix}$$`;

  return (
    <>
      <div className='flex flex-col
       items-center sm:flex-row sm:items-start justify-center'>
      <div className='bg-[#FFF8F2] sm:max-h-auto h-[905px] text-sm w-[90%] mb-5 sm:w-[200px] shadow-xl p-4 mt-4 sm:mt-0 sm:mr-4'>
          <h1>Petunjuk Penggunaan :</h1>
          <li>
            Masukan angka-angka matriks pada kotak yang tersedia
          </li>
          <li>
            Pastikan Anda menginput angka pada determinan ordo 3 x 3 dengan benar agar hasilnya tepat
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
        </div>
        <div className='w-full md:max-w-[697px] p-6 bg-[#FFF8F2] shadow-xl rounded-lg'>
          <div className='justify-center'>
            <div className='rounded-3xl py-2 max-h-screen bg-[#423232] text-center w-full'>
              <Typography className="text-[#F0EAC0] text-[36px] font-normal" variant='p' sx={{ fontFamily: 'Crimson Text' }}>
                Minor Ordo 2x2
              </Typography>
            </div>
          </div>
          <div className='max-w-md mx-auto mt-10 bg-[#E09132] px-4 py-2 rounded-lg'>
             <table className='table-fixed mx-auto max-w-lg'>
          <thead>
            <tr>
              <th className='w-1/2 text-black'>A</th>
              <th className='w-1/2 text-black'>B</th>
            </tr>
          </thead>
          <tbody>
            {matrixMinorOrdo2.map((row, i)=>(
              <tr key={i}>
                {row.map((cell,j)=>(
                  <td key={j}>
                  <input
                    type="number"
                    value={cell}
                    onChange={(event) => handleInputChange(event, i, j)}
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
          <button onClick={handleMinorOrdo2} className="px-4 py-2 bg-[#E09132] text-white rounded-full">
              Tentukan Minor  →
          </button>
            <button onClick={ResetMinorOrdo2} className="px-4 py-2 bg-red-600 text-white rounded-full">
              Reset  →
            </button>
            <form>
              <button onClick={SimpanMinorOrdo2} className="px-4 py-2 bg-green-600 text-white rounded-full">
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
            {minorOrdo2 !== null && (
              <div className=' shadow-md bg-[#FFF8F2] p-4 relative justify-center flex flex-wrap mt-[50px] border rounded-lg'>
                <div className='top-[-10px] border shadow-md p-2 bg-[#FFF8F2] rounded-lg flex flex-col'>
                <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                  Hasil dari Minor yang anda cari adalah:
                </Typography>
                <div>
                  <Latex>
                    {m11}
                  </Latex>
                  <Latex>
                    {m12}
                  </Latex>
                  <Latex>
                    {m21}
                  </Latex>
                  <Latex>
                    {m22}
                  </Latex>
                </div>
                </div>
                <div className='flex flex-wrap items-center gap-4 justify-center mt-5'>

                <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-4'>

                  <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                    Langkah 1 : menentukan M1 
                  </Typography>
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixMinorOrdo2.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${minorOrdo2 ? minorOrdo2[0] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                </div>
                <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 2 : Menentukan M2
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixMinorOrdo2.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${minorOrdo2 ? minorOrdo2[1] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                  </div>
                  <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 2 : Menentukan M3
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixMinorOrdo2.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${minorOrdo2 ? minorOrdo2[2] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                  </div>
                  <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 2 : Menentukan M4
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixMinorOrdo2.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${minorOrdo2 ? minorOrdo2[3] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                  </div>
                  <div>
                    {/* {menampilkanPerhitungan()} */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='bg-[#FFF8F2] sm:max-h-auto h-[905px] text-sm w-[90%] mb-5 sm:w-[200px] shadow-xl p-4 mt-4 sm:mt-0 sm:mr-4'>
        test (right)
      </div>
    </div>
    </>
  )
}

export default Minorordo2