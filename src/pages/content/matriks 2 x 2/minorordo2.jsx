import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var Latex = require('react-latex');

const Minorordo2 = () => {
  //State Awal Matrix & Hasil Minor
  const [matrixMinorOrdo2, setMatrixMinorOrdo2] = useState([
    ['', ''],
    ['', '']
  ]);

  //Variabel tampung hasil
  const [minorOrdo2, setMinorOrdo2] = useState(null);

    //Validasi sudah dihitung
    const [isClicked, setIsClicked] = useState(false);

    //Validasi sudah diinput 
    const [isMatrixChanged, setIsMatrixChanged] = useState(false);

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
    setIsMatrixChanged(true)
  }

  // Mengatur Simpan, Hitung, Hasil
  const SimpanMinorOrdo2 = (e) => {
    e.preventDefault();
  
    if (matrixMinorOrdo2 !== null && minorOrdo2 !== null) {
      const isDataExist = dataMinorOrdo2.some((data) =>
        JSON.stringify(data.MatrixMinorOrdo2) === JSON.stringify(matrixMinorOrdo2)
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
  
        let dataMinorOrdo2Obj = {
          ID: 'Minor Ordo 2',
          MatrixMinorOrdo2: matrixMinorOrdo2,
          MinorOrdo2: minorOrdo2
        };
  
        setDataMinorOrdo2((prevDataMinorOrdo2) => [...prevDataMinorOrdo2, dataMinorOrdo2Obj]);
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
    localStorage.setItem('MinorOrdo2', JSON.stringify(dataMinorOrdo2));
  }, [dataMinorOrdo2]);

  const ResetMinorOrdo2 = () => {
    // Cek apakah data matriks sudah kosong
    if (matrixMinorOrdo2.length === 0 ||
      matrixMinorOrdo2[0].every(val => val === '') || 
      matrixMinorOrdo2[1].every(val => val === '') 
     ) {
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

    setMinorOrdo2(null);
    setMatrixMinorOrdo2([['', ''], ['', '']]);
    setIsClicked(false);
    setIsMatrixChanged(false);

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

  function handleMinorOrdo2() {
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

    const [a, b] = matrixMinorOrdo2[0];
    const [c, d] = matrixMinorOrdo2[1];

    const m11 = d;
    const m12 = c;
    const m21 = b;
    const m22 = a;

    const hasil = [m11, m12, m21, m22];

    setMinorOrdo2(hasil);
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

  const m11 = `M11 = $$\\begin{bmatrix} ${minorOrdo2 ? minorOrdo2[0] : 0} \\end{bmatrix}$$`;
  const m12 = `M12 = $$\\begin{bmatrix} ${minorOrdo2 ? minorOrdo2[1] : 0} \\end{bmatrix}$$`;
  const m21 = `M21 = $$\\begin{bmatrix} ${minorOrdo2 ? minorOrdo2[2] : 0} \\end{bmatrix}$$`;
  const m22 = `M22 = $$\\begin{bmatrix} ${minorOrdo2 ? minorOrdo2[3] : 0} \\end{bmatrix}$$`;
  const minorOrdo2x2 = ` A=$$\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$$`;

  return (
    <>
      <div className='flex flex-col items-center sm:flex-row sm:items-start justify-center'>
        <div className='bg-[#FFF8F2] sm:max-h-auto md:h-[1130px] lg:min-h-[90%] text-sm w-[90%] mb-5 sm:w-[200px] shadow-xl p-4 mt-4 sm:mt-0 sm:mr-4'>
          <div className='flex '>
            <Typography variant='p' sx={{fontFamily : 'Merriweather'}}><strong>Petunjuk Penggunaan :</strong></Typography>
          </div>
          <br/>
          <Typography variant='p' sx ={{fontFamily : 'Merriweather'}} >
          <ol style={{listStyleType:'decimal'}}>
            <li>
              Masukkan nilai-nilai elemen matriks 2 x 2 ke dalam kotak yang sesuai
            </li>
            <li>
              Setelah memasukkan semua nilai elemen matriks, lalu klik tombol 'Tentukan Minor' untuk memulai proses perhitungan
            </li>
            <li>
              CalMath akan menjalankan algoritma yang tepat untuk menghitung minor ordo 2 x 2 berdasarkan nilai-nilai yang Anda masukkan
            </li>
            <li>
              Setelah proses perhitungan selesai, hasil minor ordo 2 x 2 akan ditampilkan di layar kalkulator
            </li>
            <li>
              CalMath akan menampilkan langkah penyelesaian untuk hasil perhitungan minor ordo 2 x 2
            </li>
            <li>
              Hasil operasi hitung minor ordo 2 x 2 dapat Anda simpan dan ditampilkan dalam Riwayat
            </li>
            <li>
              Jika Anda ingin menghitung nilai dari minor ordo 2 x 2 yang lain, Anda bisa klik tombol "Reset" dan ulangi langkah-langkah sebelumnya
            </li>
          </ol>
          </Typography>
        </div>
        <div className='w-full md:max-w-[697px] p-6 bg-[#FFF8F2] shadow-xl rounded-lg mr-4'>
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
                    Langkah 1 : menentukan M11
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
                      Langkah 2 : Menentukan M12
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
                      Langkah 2 : Menentukan M21
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
                      Langkah 2 : Menentukan M22
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
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='bg-[#FFF8F2] sm:max-h-auto text-sm w-[90%] mb-5 sm:w-[200px] shadow-xl p-4 mt-4 sm:mt-0 sm:mr-4'>
        <Typography variant='p' sx={{fontFamily : 'Merriweather'}}><strong>Materi Pembahasan</strong></Typography>
          <Typography variant='p' sx={{fontFamily : 'Merriweather'}}>
            <p className='mt-4'>Untuk matriks ordo 2 x 2, terdapat 4 minor ordo 2 x 2 yang masing-masing terbentuk dengan menghapus satu baris dan satu kolom</p>
            <p className='py-2'><strong>Rumus :</strong></p>
            <p>det |A| = (a.d) - (b.c)</p>
            <p>Dalam rumus ini, elemen-elemen matriks digunakan dalam perhitungan minor ordo 2 x 2</p>
            <p className='py-2'>
              <strong>Misalkan :</strong>
            </p>
            <p>
              <Latex>
              {minorOrdo2x2}
              </Latex>
            </p>
            <p className='mt-4'><strong>Minor ordo 2 x 2 yang terbentuk adalah :</strong></p>
            <>
              <li>Minor M11 :</li>
            </>
            <p>Minor M11 terbentuk dengan menghapus baris pertama dan kolom pertama dari matriks A. Minor M11 adalah matriks 1x1 yang terdiri dari elemen d</p>
              <li>Minor M12 :</li>
            <p>Minor M12 terbentuk dengan menghapus baris pertama dan kolom kedua dari matriks A. Minor M12 adalah matriks 1x1 yang terdiri dari elemen c</p>
              <li>
                Minor M21 :
              </li>
            <p>Minor M21 terbentuk dengan menghapus baris kedua dan kolom pertama dari matriks A. Minor M21 adalah matriks 1x1 yang terdiri dari elemen b</p>
              <li>
                Minor M22 :
              </li>
            <p>Minor M22 terbentuk dengan menghapus baris kedua dan kolom kedua dari matriks A. Minor M22 adalah matriks 1x1 yang terdiri dari elemen a</p>
          </Typography>
        </div>
      </div>
    </>
  )
}

export default Minorordo2