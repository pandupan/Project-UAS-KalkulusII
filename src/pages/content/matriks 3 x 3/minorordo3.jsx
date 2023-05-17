import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
var Latex = require('react-latex');

const Minorordo3 = () => {
  const [matrixMinorOrdo3, setMatrixMinorOrdo3] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  
  const [minorOrdo3, setMinorOrdo3] = useState(null);
  
  // Mengambil Data Dari Local Storage & Menambahkan Data Baru
  const [dataMinorOrdo3, setDataMinorOrdo3] = useState(() => {
    const storedDataMinorOrdo3 = localStorage.getItem('MinorOrdo3');
    return storedDataMinorOrdo3 ? JSON.parse(storedDataMinorOrdo3) : [];
  });
  
  function handleInputChange(event, row, col) {
    const value = parseFloat(event.target.value);
    const newMatrix = [...matrixMinorOrdo3];
    newMatrix[row][col] = isNaN(value) ? 0 : value;
    setMatrixMinorOrdo3(newMatrix);
  }
  
  // Mengatur Simpan, Hitung, Hasil
  const simpanMinorOrdo3 = (e) => {
    e.preventDefault();
  
    let dataMinorOrdo3Obj = {
      ID: 'Minor Ordo 3',
      MatrixMinorOrdo3: matrixMinorOrdo3,
      MinorOrdo3: minorOrdo3
    };
  
    setDataMinorOrdo3((prevDataMinorOrdo3) => [...prevDataMinorOrdo3, dataMinorOrdo3Obj]);
  };
  
  useEffect(() => {
    localStorage.setItem('MinorOrdo3', JSON.stringify(dataMinorOrdo3));
  }, [dataMinorOrdo3]);
  
  const resetMinorOrdo3 = () => {
    setMinorOrdo3(null);
    setMatrixMinorOrdo3([['', '', ''], ['', '', ''], ['', '', '']]);
  };
  
  function handleMinorOrdo3(){
    const [a,b,c] = matrixMinorOrdo3[0]
    const [d,e,g] = matrixMinorOrdo3[1]
    const [h,i,j] = matrixMinorOrdo3[2]

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

    setMinorOrdo3(hasil)
  }

    const m11 = `M11 = $$\\begin{bmatrix} ${minorOrdo3 ? minorOrdo3[0] : 0} \\end{bmatrix}$$`;
    const m12 = `M12 = $$\\begin{bmatrix} ${minorOrdo3 ? minorOrdo3[1] : 0} \\end{bmatrix}$$`;
    const m13 = `M13 = $$\\begin{bmatrix} ${minorOrdo3 ? minorOrdo3[2] : 0} \\end{bmatrix}$$`;
    const m21 = `M21 = $$\\begin{bmatrix} ${minorOrdo3 ? minorOrdo3[3] : 0} \\end{bmatrix}$$`;
    const m22 = `M22 = $$\\begin{bmatrix} ${minorOrdo3 ? minorOrdo3[4] : 0} \\end{bmatrix}$$`;
    const m23 = `M23 = $$\\begin{bmatrix} ${minorOrdo3 ? minorOrdo3[5] : 0} \\end{bmatrix}$$`;
    const m31 = `M31 = $$\\begin{bmatrix} ${minorOrdo3 ? minorOrdo3[6] : 0} \\end{bmatrix}$$`;
    const m32 = `M32 = $$\\begin{bmatrix} ${minorOrdo3 ? minorOrdo3[7] : 0} \\end{bmatrix}$$`;
    const m33 = `M33 = $$\\begin{bmatrix} ${minorOrdo3 ? minorOrdo3[8] : 0} \\end{bmatrix}$$`;

  return (
    <div>
      <>
      <div className='flex flex-col items-center sm:flex-row sm:items-start justify-center'>
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
                Minor Ordo 3x3
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
          {matrixMinorOrdo3.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
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
        <button
          onClick={handleMinorOrdo3}
          className="px-4 py-2 bg-[#E09132] text-white rounded-full"
        >
          Tentukan Minor  →
        </button>
            <button onClick={resetMinorOrdo3} className="px-4 py-2 bg-red-600 text-white rounded-full">
              Reset  →
            </button>
            <form>
              <button onClick={simpanMinorOrdo3} className="px-4 py-2 bg-green-600 text-white rounded-full">
                Simpan  →
              </button>
            </form>
          </div>
          <div>
            {minorOrdo3 !== null && (
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
                    {m13}
                  </Latex>
                  <Latex>
                    {m21}
                  </Latex>
                  <Latex>
                    {m22}
                  </Latex>
                  <Latex>
                    {m23}
                  </Latex>
                  <Latex>
                    {m31}
                  </Latex>
                  <Latex>
                    {m32}
                  </Latex>
                  <Latex>
                    {m33}
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
                      {`$$\\begin{bmatrix} ${matrixMinorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${minorOrdo3 ? minorOrdo3[0] : 0} \\end{bmatrix}$$`}
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
                      {`$$\\begin{bmatrix} ${matrixMinorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${minorOrdo3 ? minorOrdo3[1] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                  </div>

                  <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 3 : Menentukan M3
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixMinorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${minorOrdo3 ? minorOrdo3[2] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                  </div>

                  <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 4 : Menentukan M4
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixMinorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${minorOrdo3 ? minorOrdo3[3] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                  </div>

                  <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 5 : Menentukan M5
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixMinorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${minorOrdo3 ? minorOrdo3[4] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                  </div>

                  <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 6 : Menentukan M6
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixMinorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${minorOrdo3 ? minorOrdo3[5] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                  </div>

                  <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 7 : Menentukan M7
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixMinorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${minorOrdo3 ? minorOrdo3[6] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                  </div>

                  <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 8 : Menentukan M8
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixMinorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${minorOrdo3 ? minorOrdo3[7] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                  </div>

                  <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 9 : Menentukan M9
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixMinorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${minorOrdo3 ? minorOrdo3[8] : 0} \\end{bmatrix}$$`}
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
      <div className='bg-[#FFF8F2] h-[900px] w-[200px] shadow-xl mt-4 sm:mt-0'>
        <h1>
          Materi Pembahasan
        </h1>
        <p>
          Minor ordo 3x3 dihasilkan dengan menghilangkan baris dan kolom yang terkait dengan elemen utama yang sedang dihitung.
        </p>
        <p>
          Misalnya, untuk menghitung minor M_ij, kita menghilangkan baris ke-i dan kolom ke-j dari matriks utama
        </p>
        <p>
          
        </p>
      </div>
    </div>
      </>
    </div>
  )
}

export default Minorordo3