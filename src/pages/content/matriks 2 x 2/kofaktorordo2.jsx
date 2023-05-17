import React from 'react'
import { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import Latex from 'react-latex'

const  Kofaktorordo2 = () => {
  //State Awal Matrix & Hasil Determinan
  const[matrixKofaktorOrdo2,setMatrixKofaktorOrdo2] = useState([
    ['',''],
    ['','']
  ])

  const [tampilKofaktorOrdo2, setTampilKofaktorOrdo2] = useState([['',''],['','']])
  const [kofaktorOrdo2,setKofaktorOrdo2] = useState([''])

  function handleKofaktor(){
    const [a,b] = matrixKofaktorOrdo2[0]
    const [c,d] = matrixKofaktorOrdo2[1]

    const m11 = d * 1

    const m12 = c * -1

    const m21 = b * -1

    const m22 = a * 1
    
    const hasil = [m11,m12,m21,m22]

    setKofaktorOrdo2(hasil)
  } 

  function handleInputChange(event, row, col){
    const value = parseFloat(event.target.value);
    const newMatrix = [...matrixKofaktorOrdo2];
    newMatrix[row][col] = isNaN(value) ? 0 : value; 
    
    setMatrixKofaktorOrdo2(newMatrix)
  }
  // Mengambil Data Dari Local Storage & Menambahkan Data Baru
  const [dataKofOrdo2, setDataKofOrdo2] = useState(() => {
    const storedDataKofOrdo2 = localStorage.getItem('KofOrdo2');
    return storedDataKofOrdo2 ? JSON.parse(storedDataKofOrdo2) : [];
  });

  //Mengatur Simpan,Hitung, Hasil 
  const SimpanKofOrdo2 = (e) => {
    e.preventDefault();

    let dataKofOrdo2Obj = {
      ID: 'Kofaktor Ordo 2',
      MatrixKofOrdo2: matrixKofaktorOrdo2,
      KofaktorOrdo2: kofaktorOrdo2
    };
  
    setDataKofOrdo2((prevDataKofOrdo2) => [...prevDataKofOrdo2, dataKofOrdo2Obj]);
  };
  
  useEffect(() => {
    localStorage.setItem('KofOrdo2', JSON.stringify(dataKofOrdo2));
  }, [dataKofOrdo2]);

  const ResetKofOrdo2 = () => {
    setKofaktorOrdo2(null);
    setMatrixKofaktorOrdo2([['',''],['','']])
    setTampilKofaktorOrdo2([['',''],['','']])
  }

  useEffect(() => {
      if(kofaktorOrdo2 !== null && kofaktorOrdo2 !== 0){
        if (kofaktorOrdo2.length > 0) {
          setTampilKofaktorOrdo2([[kofaktorOrdo2[0], kofaktorOrdo2[1]], [kofaktorOrdo2[2], kofaktorOrdo2[3]]]);
        }
      }
  }, [kofaktorOrdo2]);

  const hasilMinor = ` $$\\begin{bmatrix} M11 & M12 \\\\ M21 & M22 \\end{bmatrix}$$`;
  const rumusKofaktor = ` =$$\\begin{bmatrix} + & - \\\\ - & + \\end{bmatrix}$$`;

  return (
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
                Kofaktor Ordo 2
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
               {matrixKofaktorOrdo2.map((row, i)=>(
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
        <button
        onClick={handleKofaktor}
        className="px-4 py-2 bg-[#E09132] text-white rounded-full"
        >
          Tentukan Kofaktor  →      
        </button>
            <button onClick={ResetKofOrdo2} className="px-4 py-2 bg-red-600 text-white rounded-full">
              Reset  →
            </button>
            <form>
              <button onClick={SimpanKofOrdo2} className="px-4 py-2 bg-green-600 text-white rounded-full">
                Simpan  →
              </button>
            </form>
          </div>
          <div>
            {kofaktorOrdo2 !== [''] && (
              <div className=' shadow-md bg-[#FFF8F2] p-4 relative justify-center flex flex-wrap mt-[50px] border rounded-lg'>
                <div className='top-[-10px] border shadow-md p-2 bg-[#FFF8F2] rounded-lg flex flex-col'>
                <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                  Hasil dari kofaktor yang anda cari adalah:
                </Typography>
                <div>
                <Latex>
                      {`$$\\begin{bmatrix} ${tampilKofaktorOrdo2.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                </div>
                </div>
                <div className='flex flex-wrap items-center gap-4 justify-center mt-5'>

                <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-4'>

                  <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                    Langkah 0 : mengambarkan Matrix 
                  </Typography>
                  </div>
                  <div className='mb-6'>
                  <Latex>
                      {`$$\\begin{bmatrix} ${matrixKofaktorOrdo2.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                </div>

                <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-4'>

                  <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                    Langkah 1 : menentukan M1 
                  </Typography>
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixKofaktorOrdo2.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${kofaktorOrdo2 ? kofaktorOrdo2[0] : 0} \\end{bmatrix}$$`}
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
                      {`$$\\begin{bmatrix} ${matrixKofaktorOrdo2.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${kofaktorOrdo2 ? kofaktorOrdo2[1]*-1 : 0} \\end{bmatrix}$$`}
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
                      {`$$\\begin{bmatrix} ${matrixKofaktorOrdo2.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${kofaktorOrdo2 ? kofaktorOrdo2[2]*-1 : 0} \\end{bmatrix}$$`}
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
                      {`$$\\begin{bmatrix} ${matrixKofaktorOrdo2.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${kofaktorOrdo2 ? kofaktorOrdo2[3] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                  </div>

                  <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 5 : Mengalikan hasil minor dengan pola kofaktor
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {hasilMinor}
                    </Latex>
                  <Latex>
                      {rumusKofaktor}
                    </Latex>
                  
                  </div>
                  </div>

                  <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 6 : Hasil Kofaktor yang didapatkan adalah
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                  <Latex>
                      {`$$\\begin{bmatrix} ${tampilKofaktorOrdo2.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
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

export default Kofaktorordo2