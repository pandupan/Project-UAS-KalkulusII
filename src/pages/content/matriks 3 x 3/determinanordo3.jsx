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

  //Variabel tampung hasil
  const [determinanOrdo3, setDeterminanOrdo3] = useState(null);

  //Validasi sudah dihitung
  const [isClicked, setIsClicked] = useState(false);

  //Validasi sudah diinput 
  const [isMatrixChanged, setIsMatrixChanged] = useState(false);

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
    setIsMatrixChanged(true)
  }

  // Mengatur Simpan, Hitung, Hasil
  const SimpanDetOrdo3 = (e) => {
    e.preventDefault();
  
    if (matrixDetOrdo3 !== null && determinanOrdo3 !== null) {
      const isDataExist = dataDetOrdo3.some((data) =>
        JSON.stringify(data.MatrixDetOrdo3) === JSON.stringify(matrixDetOrdo3)
      );
  
      if (isDataExist) {
        toast.warning(
          'Perhitungan sudah disimpan, tidak dapat menyimpan perhitungan yang sama 💔✨ ',
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          }
        );
      } else {
        toast.success('Perhitungan disimpan 🙂✨ ', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
  
        let dataDetOrdo3Obj = {
          ID: 'Determinan Ordo 3',
          MatrixDetOrdo3: matrixDetOrdo3,
          DeterminanOrdo3: determinanOrdo3,
        };
  
        setDataDetOrdo3((prevDataDetOrdo3) => [...prevDataDetOrdo3, dataDetOrdo3Obj]);
      }
    } else {
      toast.warning('Silakan Lakukan perhitungan terlebih dahulu sebelum menyimpan ⛔', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };  

  useEffect(() => {
    localStorage.setItem('DetOrdo3', JSON.stringify(dataDetOrdo3));
  }, [dataDetOrdo3]);

  const ResetDetOrdo3 = () => {
    // Cek apakah data matriks sudah kosong
    if (matrixDetOrdo3.flat().every(val => val === '')) {
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

    //Lakukan reset
    setDeterminanOrdo3(null);
    setIsClicked(false)
    setMatrixDetOrdo3([['', '', ''], ['', '', ''], ['', '', '']]);
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
  }

  function menghitungDeterminan() {
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
      <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black flex mb-3">
        <div className='flex justify-center items-center flex-col'>
          <p>= ({a} x {e} x {i}) + ({b} x {f} x {g}) + ({c} x {d} x {h}) - ({c} x {e} x {g}) - ({b} x {d} x {i}) - ({a} x {f} x {h})</p>
          <p>= {a * e * i} + {b * f * g} + {c * d * h} - { c * e * g } - {b * d * i} - {a * f * h}</p>
          <p>= {det}</p>
   
        </div>
      </Typography>
    );
  };

  const rumusUmum = ` A=$$\\begin{bmatrix} a & b & c\\\\\\ d & e & f \\\\\\ g & h & i \\end{bmatrix} $$`;
  const rumusUmumdet = `$$\\begin{bmatrix} a & b & c\\\\\\ d & e & f \\\\\\ g & h & i \\end{bmatrix} $$ $$\\begin{array}{cc}a & b \\\\\\  d & e \\\\\\  g & h \\end{array}$$`;
  return (
    <>
      <div className='flex flex-col items-center sm:flex-row sm:items-start justify-center'>
        <div className='bg-[#FFF8F2] sm:max-h-auto md:min-h-[890px] text-sm w-[90%] mb-5 sm:w-[200px] shadow-xl p-4 mt-4 sm:mt-0 sm:mr-4'>
          <div className='flex '>
            <Typography variant='p' sx={{fontFamily : 'Merriweather'}}><strong>Petunjuk Penggunaan :</strong></Typography>
          </div>
          <br/>
          <Typography variant='p' sx ={{fontFamily : 'Merriweather'}} >
            <ol style={{listStyleType:'decimal'}}>
              <li>Masukan angka-angka matriks pada kotak yang tersedia</li>
              <li>Pastikan Anda menginput angka pada determinan ordo 3 x 3 dengan benar agar hasilnya tepat</li>
              <li>Klik tombol "Hitung" untuk mendapatkan hasil determinan dari matriks yang Anda Inputkan</li>
              <li>Hasil determinan akan ditampilkan dilayar kalkulator</li>
              <li>CalMath akan menampilkan langkah penyelesaian untuk hasil perhitungan determinan</li>
              <li>Hasil operasi hitung determinan dapat Anda simpan dan ditampilkan dalam Riwayat</li>
              <li>Jika Anda ingin menghitung determinan matriks lain, Anda bisa klik tombol "Reset" dan ulangi langkah-langkah sebelumnya</li>
            </ol>
          </Typography>
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
                <>
                <div className=' shadow-md bg-[#FFF8F2] p-4 relative justify-center flex flex-wrap mt-[50px] border rounded-lg'>
                <div className='top-[-10px] border shadow-md p-2 bg-[#FFF8F2] rounded-lg'>
                  <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                    Hasil dari determinan yang anda cari adalah: <strong>{determinanOrdo3}</strong>
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
                        {`$$\\begin{bmatrix} ${matrixDetOrdo3.map(row => row.join(' & ')).join(' \\\\ ')} \\end{bmatrix}$$`}
                      </Latex>
                    </div>
                  </div>
                  
                  <div className='bg-[#FFF8F2] max-w-[290px] max-h-[280px] flex flex-wrap flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
            
                      <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                        Langkah 2 : mengoperasikan matrix 
                        
                        <div className='flex flex-wrap'>
                        <p>
                          [A1 x B2 x C3 ] + [B1 x C2 x A3] +
                        </p>
                        <p>
                          [C1 x A2 x B3] - [C3 x B2 x A3] - 
                        </p> 
                        <p>
                          [A1 x C2 x B3] - [B1 x A2 x C3]
                        </p>
                        </div>
                      </Typography> 
                
                  </div>
                  <div className='bg-[#FFF8F2] max-w-auto h-auto flex flex-col justify-center p-4 items-center shadow-lg rounded-lg'>
                    <div className='mb-4'>
                      <Typography variant='p' sx={{fontFamily : 'Merriweather'}} className="text-black">
                        Langkah 3 : Mengoprasikan Perhitungan
                      </Typography>
                    </div>
                    <div className='mb-6'>
                    <div className='flex justify-center flex-wrap flex-col mb-8'>
                    {menampilkanPerhitungan()}
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              </>
              )}
            </div>
          
        </div>
  <div className='bg-[#FFF8F2] sm:max-h-auto text-sm w-[90%] mb-5 sm:w-[200px] shadow-xl p-2 mt-4 sm:mt-0 sm:ml-4'>
  <div className='justify-center flex '>
          <Typography variant='p' sx={{fontFamily : 'Merriweather'}}><strong>
			Materi Pembahasan
		</strong></Typography>
          </div>
          <br/>
          <Typography variant='p' sx ={{fontFamily : 'Merriweather'}} >
            <ol style={{listStyleType:'decimal'}}>
          <p>
            &nbsp; Determinan adalah nilai yang dapat dihitung dari unsur-unsur suatu matriks persegi,
          determinan dari matriks A dinotasikan dengan det (A) atau |A|
         </p>
         <div className='flex py-2'>
        <Typography variant='p' sx={{fontFamily : 'Merriweather'}}><strong>
         &nbsp; Matriks Ordo 3 x 3
		    </strong></Typography>
         </div>
         <p>
         &nbsp; Rumus Umum :
          Matriks <Latex>{rumusUmum}</Latex>

          <p>
            |A|<Latex>{rumusUmumdet}</Latex>
          </p>
          <p> |A|(aei)+(bfg)+(cdh)-(ceg)-(afh)-(bdi)</p>
         </p>
         <div className='flex py-2'>
         <Typography variant='p' sx ={{fontFamily : 'Merriweather'}} ><strong>
            <ol style={{listStyleType:'decimal'}}>
         &nbsp; Ketentuan Determinan Ordo 3 x 3 :
            </ol>
         </strong>
          </Typography>
         </div>
         <p>1. Jika nilai determinan suatu matriks ordo 3x3 adalah nol, maka matriks tersebut disebut matriks singular atau matriks tidak memiliki invers.</p>
         <p>2. Jika matriks A dan B adalah matriks ordo 3x3, maka determinan dari hasil perkalian AB sama dengan hasil perkalian determinan dari matriks A dan B, yaitu det(AB) = det(A) x det(B).</p>
            </ol>
          </Typography>
    </div>
</div>

             

    </>
  );
};

export default Determinanordo3;