import React from 'react'
import { useState, useEffect } from 'react' 
import { Typography } from '@mui/material'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Latex from 'react-latex'

const Kofaktor3 = () => {
  //State Awal Matrix & Hasil KOfaktor
  const [matrixKofaktorOrdo3, setMatrixKofaktorOrdo3] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);

  //Variable tampung tampil
  const [tampilKofaktorOrdo3, setTampilKofaktorOrdo3] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);

  //Variable tampung hasil
  const [kofaktorOrdo3,setKofaktorOrdo3] = useState([''])

  //Validasi sudah dihitung
  const [isClicked, setIsClicked] = useState(false);

  //Validasi sudah diinput
  const [isMatrixChanged, setIsMatrixChanged] = useState(false);

  //Mengatur Inputan
  function handleInputChange(event,row,col){
    const value = parseFloat(event.target.value)
    const newMatrix = [...matrixKofaktorOrdo3]
    newMatrix[row][col]= isNaN(value) ? 0 : value

    setMatrixKofaktorOrdo3(newMatrix)
    setIsMatrixChanged(true)
  }
   
  function handleKofaktorOrdo3(){
    if (!isMatrixChanged) {
      toast('Input matriks kosong, tambahkan data terlebih dahulu 🙂', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return; // Berhenti jika data kosong
    }

    const [a,b,c] = matrixKofaktorOrdo3[0]
    const [d,e,g] = matrixKofaktorOrdo3[1]
    const [h,i,j] = matrixKofaktorOrdo3[2]

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

    setKofaktorOrdo3(hasil)
    setIsClicked(true);
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

    // Mengambil Data Dari Local Storage & Menambahkan Data Baru
  const [dataKofOrdo3, setDataKofOrdo3] = useState(() => {
    const storedDataKofOrdo3 = localStorage.getItem('KofOrdo3');
    return storedDataKofOrdo3 ? JSON.parse(storedDataKofOrdo3) : [];
  });

  // Mengatur Simpan, Hitung, Hasil
  const SimpanKofOrdo3 = (e) => {
    e.preventDefault();
  
    if (!isMatrixChanged) {
      toast.warning("Belum ada Input pada matriks, lakukan perhitungan terlebih dahulu ⚠️", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
  
    if (matrixKofaktorOrdo3 !== null && kofaktorOrdo3 !== null) {
      const isDataExist = dataKofOrdo3.some((data) =>
        JSON.stringify(data.MatrixKofaktorOrdo3) === JSON.stringify(matrixKofaktorOrdo3)
      );
  
      if (isDataExist) {
        toast.warning('Perhitungan sudah disimpan, tidak dapat menyimpan perhitungan yang sama 💔✨ ', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
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
  
        let dataKofOrdo3Obj = {
          ID: 'Kofaktor Ordo 3',
          MatrixKofaktorOrdo3: matrixKofaktorOrdo3,
          KofaktorOrdo3: kofaktorOrdo3
        };
  
        setDataKofOrdo3((prevDataKofOrdo3) => [...prevDataKofOrdo3, dataKofOrdo3Obj]);
      }
    } else {
      toast.warning('Silakan Lakukan perhitungan terlebih dahulu sebelum menyimpan ⛔', {
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
  };

  useEffect(() => {
    localStorage.setItem('KofOrdo3', JSON.stringify(dataKofOrdo3));
  }, [dataKofOrdo3]);

  const ResetKofOrdo3 = () => {
     //Cek apakah data matriks sudah kosong
     if (matrixKofaktorOrdo3.flat().every(val => val === '')) {
      toast.error('Input matriks sudah kosong. Tidak dapat mereset 🚫', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return; // Berhenti jika data matriks kosong
    }
    setKofaktorOrdo3(null);
    setMatrixKofaktorOrdo3([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
    setTampilKofaktorOrdo3([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
    setIsClicked(false)
    setIsMatrixChanged(false)
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

  useEffect(() => {
    if (kofaktorOrdo3 !== null && kofaktorOrdo3 !== 0) {
      if (kofaktorOrdo3.length > 0) {
        setTampilKofaktorOrdo3([

          [kofaktorOrdo3[0], kofaktorOrdo3[1], kofaktorOrdo3[2]],
          [kofaktorOrdo3[3], kofaktorOrdo3[4], kofaktorOrdo3[5]],
          [kofaktorOrdo3[6], kofaktorOrdo3[7], kofaktorOrdo3[8]]
        ]);
      }
    }
  }, [kofaktorOrdo3]);
  
  const hasilMinor = ` $$\\begin{bmatrix} M11 & M12 & M13 \\\\ M21 & M22 & M23 \\\\ M31 & M32 & M33 \\end{bmatrix}$$`;
  const rumusKofaktor = ` $$\\begin{bmatrix} + & - & + \\\\ - & + & - \\\\ + & - & + \\end{bmatrix}$$`;
  const polaKofaktor = ` A=$$\\begin{bmatrix} + & - & +\\\\\\ - & + & - \\\\\\ + & - & + \\end{bmatrix} $$`;
  const polaCofaktor = ` A=$$\\begin{bmatrix} A11 & A12 & A13 \\\\\\ A21 & A22 & A23 \\\\\\ A31 & A32 & A33 \\end{bmatrix} $$`;

  return (
    <>
      <div className='flex flex-col items-center sm:flex-row sm:items-start justify-center'>
      <div className='bg-[#FFF8F2] sm:max-h-auto md:min-h-[890px] text-sm w-[90%] mb-5 sm:w-[200px] shadow-xl p-4 mt-4 sm:mt-0 sm:mr-4'>
        <div className='flex '>
            <Typography variant='p' sx={{fontFamily : 'Merriweather'}}><strong>
              Petunjuk Penggunaan :
            </strong></Typography>
          </div>
          <br/>
          <Typography variant='p' sx ={{fontFamily : 'Merriweather'}} >
            <ol style={{listStyleType:'decimal'}}>
          <li>
          Masukkan setiap elemen matriks 3 x 3
           ke dalam kotak input yang tersedia
          </li>
          <li>
          Setelah mengisi semua nilai elemen matriks, lalu tekan tombol 'Tentukan Kofaktor' untuk mengaktifkan perhitungan
          </li>
          <li>
          Setelah Anda mengaktifkan perhitungan, CalMath akan menampilkan hasil kofaktor dari matriks yang Anda masukkan
          </li>
          <li>
          CalMath akan menampilkan  langkah penyelesaian untuk perhitungan kofaktor ordo 3 x 3 di layar kalkulator
          </li>
          <li>
          Hasil operasi hitung kofaktor ordo 3 x 3 dapat Anda simpan dan ditampilkan dalam Riwayat
          </li>
          <li>
          Jika Anda ingin menghitung nilai dari kofaktor ordo 3 x 3 yang lain, Anda bisa klik tombol "Reset" dan ulangi langkah-langkah sebelumnya
          </li>
            </ol>
          </Typography>

        </div>
        <div className='w-full md:max-w-[697px] p-6 bg-[#FFF8F2] shadow-xl rounded-lg'>
          <div className='justify-center'>
            <div className='rounded-3xl py-2 max-h-screen bg-[#423232] text-center w-full'>
              <Typography className="text-[#F0EAC0] text-[36px] font-normal" variant='p' sx={{ fontFamily: 'Crimson Text' }}>
                Kofaktor Ordo 3x3
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
          {matrixKofaktorOrdo3.map((row, i) => (
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
        onClick={()=>{
          handleKofaktorOrdo3();
        }}
        className="px-4 py-2 bg-[#E09132] text-white rounded-full"
        >
          Tentukan Kofaktor →
        </button>
            <button onClick={ResetKofOrdo3} className="px-4 py-2 bg-red-600 text-white rounded-full">
              Reset  →
            </button>
            <form>
              <button onClick={SimpanKofOrdo3} className="px-4 py-2 bg-green-600 text-white rounded-full">
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
                <div className='top-[-10px] border shadow-md p-2 bg-[#FFF8F2] rounded-lg flex flex-col'>
                <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                  Hasil dari kofaktor yang anda cari adalah:
                </Typography>
                <div>
                <Latex>
                      {`$$\\begin{bmatrix} ${tampilKofaktorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                </div>
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
                      {`$$\\begin{bmatrix} ${matrixKofaktorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
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
                      {`$$\\begin{bmatrix} ${matrixKofaktorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${kofaktorOrdo3 ? kofaktorOrdo3[0] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                </div>

                <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 3 : Menentukan M12
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixKofaktorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${kofaktorOrdo3 ? kofaktorOrdo3[1]*-1 : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                  </div>

                  <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 4 : Menentukan M13
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixKofaktorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${kofaktorOrdo3 ? kofaktorOrdo3[2] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                  </div>

                  <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 5 : Menentukan M21
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixKofaktorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${kofaktorOrdo3 ? kofaktorOrdo3[3]*-1 : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                  </div>

                  <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 6 : Menentukan M22
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixKofaktorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${kofaktorOrdo3 ? kofaktorOrdo3[4] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                  </div>

                  <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 7 : Menentukan M23
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixKofaktorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${kofaktorOrdo3 ? kofaktorOrdo3[5]*-1 : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                  </div>

                  <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 7 : Menentukan M31
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixKofaktorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${kofaktorOrdo3 ? kofaktorOrdo3[6] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                  </div>

                  <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 8 : Menentukan M32
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixKofaktorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${kofaktorOrdo3 ? kofaktorOrdo3[7]*-1 : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                  </div>

                  <div className='bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 9 : Menentukan M33
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                    <Latex>
                      {`$$\\begin{bmatrix} ${matrixKofaktorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                    <Latex>
                      {`= $$\\begin{bmatrix} ${kofaktorOrdo3 ? kofaktorOrdo3[8] : 0} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                  </div>

                  <div className='bg-[#FFF8F2] max-w-[280px] h-auto flex flex-col flex-wrap justify-center p-4 items-center shadow-lg rounded-lg '>
                  <div className='mb-[32px]'>
                    <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                      Langkah 10 : Mengalikan hasil minor dengan pola kofaktor
                    </Typography> 
                  </div>
                  <div className='mb-6 flex flex-wrap justify-center items-center gap-3'>
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
                      Langkah 11 : Hasil Kofaktor yang didapatkan adalah
                    </Typography> 
                  </div>
                  <div className='mb-6'>
                  <Latex>
                      {`$$\\begin{bmatrix} ${tampilKofaktorOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                    </Latex>
                  </div>
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>
        <div className='bg-[#FFF8F2] sm:max-h-auto text-sm w-[90%] mb-5 sm:w-[200px] shadow-xl p-4 mt-4 sm:mt-0 sm:ml-4'>
        <div className='justify-center flex mb-[14px]'>
          <Typography variant='p' sx={{fontFamily : 'Merriweather'}}><strong>
            Materi Pembahasan
          </strong></Typography>
          </div>
          <Typography variant='p' sx={{fontFamily: 'Merriweather'}}>
        <p>
        &nbsp; Kofaktor suatu elemen matriks adalah determinan matriks yang diperoleh dari matriks yang dihasilkan setelah menghapus baris dan kolom yang mengandung elemen tersebut
        </p>
        <p>
        &nbsp; Kofaktor dinyatakan dengan simbol Cij, diman i sebagai baris dan j sebagai kolom elemen yang bersangkutan
        </p>
        <p>
        &nbsp; Untuk tandanya, menggunakan tanda positif - negatif yang saling bergantian
        </p>
        <p>
        <Latex>
          {polaKofaktor}
        </Latex>
       </p>
       <p>
        Misalnya :
       </p>
       <Latex>
        {polaCofaktor}
       </Latex>
       <p>
       &nbsp; langkah-langkah untuk menghitung kofaktor dari elemen Aij sebagai berikut :
       </p>
       <li>
       Tentukan matriks minor Mij dengan menghapus baris ke-i dan kolom ke-j dari matriks A
       </li>
       <li>
       Hitung determinan dari matriks minor Mij. Notasikan dengan det(Mij)
       </li>
       <li>
       Kofaktor Cij dari elemen aij adalah hasil perkalian det(Mij) dengan faktor penentu (-1)^(i+j)
       </li>
          </Typography>
      </div>
    </div>
      </>
  )
}

export default Kofaktor3