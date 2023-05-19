import React from 'react'
import { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Latex from 'react-latex'

const Adjoinordo3 = () => {

  const [matrixAdjOrdo3, setMatrixAdjOrdo3] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  
  const [adjoinOrdo3, setAdjoinOrdo3] = useState(['']);

  const [isClicked, setIsClicked] = useState(false);

  
  const resetAdjoinOrdo3 = () => {
    setAdjoinOrdo3(['']);
    setMatrixAdjOrdo3([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
    setIsClicked(false)

    toast.error('Perhitungan Telah Dihapus ❌', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  
  const [dataAdjOrdo3, setDataAdjOrdo3] = useState(() => {
    const storedDataAdjOrdo3 = localStorage.getItem('AdjOrdo3');
    return storedDataAdjOrdo3 ? JSON.parse(storedDataAdjOrdo3) : [];
  });
  
  const simpanAdjoinOrdo3 = (e) => {
    e.preventDefault();

    toast.success('Perhitungan disimpan 🙂✨ ', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  
    let dataAdjoinOrdo3Obj = {
      ID: 'Adjoin Ordo 3',
      MatrixAdjoinOrdo3: matrixAdjOrdo3,
      AdjoinOrdo3: adjoinOrdo3,
    };
  
    setDataAdjOrdo3((prevDataAdjOrdo3) => [...prevDataAdjOrdo3, dataAdjoinOrdo3Obj]);
  };
  
  useEffect(() => {
    localStorage.setItem('AdjOrdo3', JSON.stringify(dataAdjOrdo3));
  }, [dataAdjOrdo3]);
  
  function handleInputChange(event, row, col) {
    const value = parseFloat(event.target.value);
    const newMatrix = [...matrixAdjOrdo3];
    newMatrix[row][col] = isNaN(value) ? 0 : value;
    setMatrixAdjOrdo3(newMatrix);
  }
  
  function handleAdjoinOrdo3(){
    const [a,b,c] = matrixAdjOrdo3[0]
    const [d,e,g] = matrixAdjOrdo3[1]
    const [h,i,j] = matrixAdjOrdo3[2]

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

    setAdjoinOrdo3(nilaiAdjoin)
    setIsClicked(true)

    toast('🚀 Perhitungan Berhasil !!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const hasilMinor = ` $$\\begin{bmatrix} M11 & M12 & M13 \\\\ M21 & M22 & M23 \\\\ M31 & M32 & M33 \\end{bmatrix}$$`;
  const rumusKofaktor = ` $$\\begin{bmatrix} + & - & + \\\\ - & + & - \\\\ + & - & + \\end{bmatrix}$$`;
  const matriksAdj3x3 = ` A=$$\\begin{bmatrix} A11 & A12 & A13\\\\\\ A21 & A22 & A23 \\\\\\ A31 & A32 & A33 \\end{bmatrix} $$`;
  const kofaktorAdj3 = `A=$$\\begin{bmatrix} C11 & C12 & C13 \\\\\\ C21 & C22 & C23 \\\\\\ C31 & C32 & C33 \\end{bmatrix} $$`;
  const hasilAdjoin3 = `A=$$\\begin{bmatrix} C11 & C21 & C31 \\\\\\ C12 & C22 & C32 \\\\\\ C13 & C23 & C33 \\end{bmatrix} $$`;


  return (
  <>
   <div className='flex flex-col items-center sm:flex-row sm:items-start justify-center'>
   <div className='bg-[#FFF8F2] sm:max-h-auto md:min-h-[890px] text-sm w-[90%] mb-5 sm:w-[200px] shadow-xl p-4 mt-4 sm:mt-0 sm:mr-4'>
   <div className='flex '>
          <Typography variant='p' sx={{fontFamily : 'Merriweather'}}><strong>
			Petunjuk Penggunaan :
		</strong></Typography>
          </div>
          <Typography variant='p' sx ={{fontFamily : 'Merriweather'}} >
            <ol style={{listStyleType:'decimal'}}>         
              <li>
              Masukkan elemen-elemen matriks ordo 3 x 3 ke dalam kolom atau baris yang sesuai dengan kotak yang tersedia
              </li>
              <li>
              Setelah memasukkan nilai-nilai elemen matriks, lalu tekan tombol 'Tentukan Adjoin' untuk mengaktifkan perhitungan
              </li>
              <li>
              CalMath akan menampilkan hasil dan langkah penyelesaian adjoin ordo 3 x 3 dari matriks yang Anda masukkan di layar kalkulator
              </li>
              <li>
                Hasil operasi hitung adjoin ordo 3 x 3 dapat Anda simpan dan ditampilkan dalam Riwayat
              </li>
              <li>
                Jika Anda ingin menghitung nilai dari adjoin ordo 3 x 3 yang lain, Anda bisa klik tombol "Reset" dan ulangi langkah-langkah sebelumnya
              </li>
            </ol>
          </Typography>
  </div>
  <div className='w-full md:max-w-[697px] p-6 bg-[#FFF8F2] shadow-xl rounded-lg'>
    <div className='justify-center'>
      <div className='rounded-3xl py-2 max-h-screen bg-[#423232] text-center w-full'>
        <Typography className="text-[#F0EAC0] text-[36px] font-normal" variant='p' sx={{ fontFamily: 'Crimson Text' }}>
          Adjoin Ordo 3x3
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
          {matrixAdjOrdo3.map((row, i) => (
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
        onClick={handleAdjoinOrdo3}
        className="px-4 py-2 bg-[#E09132] text-white rounded-full"
      >
        Tentukan Adjoinya →
      </button>
      <button onClick={resetAdjoinOrdo3} className="px-4 py-2 bg-red-600 text-white rounded-full">
        Reset →
      </button>
      <form>
        <button onClick={simpanAdjoinOrdo3} className="px-4 py-2 bg-green-600 text-white rounded-full">
          Simpan →
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
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    <ToastContainer />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    <ToastContainer />
    <div>
      {isClicked && (
    <div className=' shadow-md bg-[#FFF8F2] p-4 relative justify-center flex flex-wrap mt-[50px] border rounded-lg'>
                <div className='top-[-10px] border shadow-md p-2 bg-[#FFF8F2] rounded-lg'>
                <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                Hasil dari adjoin yang anda cari adalah: 
                </Typography>
                <Latex>
        {`$$\\begin{bmatrix} ${adjoinOrdo3[0]} & ${adjoinOrdo3[1]}  & ${adjoinOrdo3[2]} \\\\ ${adjoinOrdo3[3]} & ${adjoinOrdo3[4]} & ${adjoinOrdo3[5]} \\\\ ${adjoinOrdo3[6]} & ${adjoinOrdo3[7]} & ${adjoinOrdo3[8]} \\end{bmatrix}$$`}
      </Latex>
                </div>
                <div className='flex flex-wrap items-center gap-4 justify-center mt-5'>

                <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-4'>

                  <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                    Langkah 1 : mengambarkan Matrix 
                  </Typography>
                  </div>
                  <div className='mb-6'>
                  <Latex>
                      {`$$\\begin{bmatrix} ${matrixAdjOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                </div>

                <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-4'>

                  <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                    Langkah 2 : menentukan M11
                  </Typography>
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixAdjOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${adjoinOrdo3 ? adjoinOrdo3[0] : 0} \\end{bmatrix}$$`}
                    </Latex>
                    {console.log(adjoinOrdo3)}
                  </div>
                </div>

                <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-4'>

                  <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                    Langkah 3 : menentukan M12
                  </Typography>
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixAdjOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${adjoinOrdo3 ? adjoinOrdo3[3]* -1 : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                </div>

                <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-4'>

                  <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                    Langkah 4 : menentukan M13
                  </Typography>
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixAdjOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${adjoinOrdo3 ? adjoinOrdo3[6] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                </div>

                <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-4'>

                  <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                    Langkah 5 : menentukan M21
                  </Typography>
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixAdjOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${adjoinOrdo3 ? adjoinOrdo3[1]*-1 : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                </div>

                <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-4'>

                  <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                    Langkah 6 : menentukan M22
                  </Typography>
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixAdjOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${adjoinOrdo3 ? adjoinOrdo3[4] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                </div>

                <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-4'>

                  <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                    Langkah 7 : menentukan M23
                  </Typography>
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixAdjOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${adjoinOrdo3 ? adjoinOrdo3[7]*-1 : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                </div>

                <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-4'>

                  <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                    Langkah 8 : menentukan M31
                  </Typography>
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixAdjOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${adjoinOrdo3 ? adjoinOrdo3[2] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                </div>

                <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-4'>

                  <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                    Langkah 9 : menentukan M32
                  </Typography>
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixAdjOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${adjoinOrdo3 ? adjoinOrdo3[5]*-1 : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                </div>

                <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-4'>

                  <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                    Langkah 10 : menentukan M33
                  </Typography>
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixAdjOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${adjoinOrdo3 ? adjoinOrdo3[8] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                </div>

                <div className='bg-[#FFF8F2] max-w-[280px] h-auto flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 11 : Mengalikan hasil minor dengan pola kofaktor
                    </Typography> 
                  </div>
                  <div className='mb-6 flex flex-col justify-center items-center gap-3'>
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
                      Langkah 12 : Mendapatkan hasil kofaktor
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                  <Latex>
        {`$$\\begin{bmatrix} ${adjoinOrdo3[0]} & ${adjoinOrdo3[3]}  & ${adjoinOrdo3[6]} \\\\ ${adjoinOrdo3[1]} & ${adjoinOrdo3[4]} & ${adjoinOrdo3[7]} \\\\ ${adjoinOrdo3[2]} & ${adjoinOrdo3[5]} & ${adjoinOrdo3[8]} \\end{bmatrix}$$`}
      </Latex>

                  </div>
                  </div>

                <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 7 : Melakukan Tranpose hasil kofaktor
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                  <Latex>
        {`$$\\begin{bmatrix} ${adjoinOrdo3[0]} & ${adjoinOrdo3[1]}  & ${adjoinOrdo3[2]} \\\\ ${adjoinOrdo3[3]} & ${adjoinOrdo3[4]} & ${adjoinOrdo3[5]} \\\\ ${adjoinOrdo3[6]} & ${adjoinOrdo3[7]} & ${adjoinOrdo3[8]} \\end{bmatrix}$$`}
      </Latex>

                  </div>
                  </div>

                  
                  
                </div>
              </div>

      )}
    </div>

  
  
  </div>
  <div className='bg-[#FFF8F2] sm:max-h-auto text-sm w-[90%] mb-5 sm:w-[200px] shadow-xl p-4 mt-4 sm:mt-0 sm:mr-4'>
  <div className='justify-center flex mb-[14px]'>
          <Typography variant='p' sx={{fontFamily : 'Merriweather'}}><strong>
            Materi Pembahasan
          </strong></Typography>
          </div>
          <Typography variant='p' sx={{fontFamily: 'Merriweather'}}>
    <p>
      &nbsp; Adjoin adalah matriks kofaktor yang di transposkan (baris jadi kolom, kolom jadi baris)
    </p>
    <p>
      &nbsp; Adjoin dari matriks ordo 3 x 3 adalah matriks yang diperoleh dengan mengubah tanda elemen-elemen di luar diagonal utama dan menghasilkan matriks transpose dari kofaktor matriks tersebut
    </p>
    <p>
      &nbsp; Misalnya terdapat matriks ordo 3 x 3 sebagai berikut :
    </p>
    <p>
      <Latex>
        {matriksAdj3x3}
      </Latex>
    </p>
    <p>
     &nbsp; Adjoin dari matriks A dinyatakan sebagai adj(A) dapat ditentukan dengan menghitung kofaktor untuk setiap elemen matriks A
    </p>
    <p>
    <Latex>{kofaktorAdj3}</Latex>
    </p>
    <p>
      &nbsp; Kofaktor Cij diperoleh dengan menghapus baris ke-i dan kolom ke-j dari matriks A, dan mengalikan sisa matriks dengan faktor penentu (-1)^(i+j)
    </p>
    <p>
      &nbsp; Faktor penentu ini berguna untuk mengubah tanda kofaktor secara bergantian
    </p>
    <p>
      &nbsp; Maka, matriks adjoin dapat diperoleh dengan mentransposisikan matriks kofaktor
    </p> 
    <p>
      &nbsp; Artinya, tukar elemen-elemen diagonal utama dan elemen-elemen sejajar dengan diagonal utama
    </p>
    <p>
      <Latex>{hasilAdjoin3}</Latex>
    </p>   
          </Typography>
  </div>
</div>

  </>
  )
}

export default Adjoinordo3