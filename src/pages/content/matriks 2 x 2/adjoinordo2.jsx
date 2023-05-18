import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Latex from "react-latex";

const Adjoinordo2 = () => {
  const [matrixAdjOrdo2, setMatrixAdjOrdo2] = useState([
    ["", ""],
    ["", ""],
  ]);

  const [adjoinOrdo2, setAdjoinOrdo2] = useState([""]);

  const [kofaktorOrdo2, setKofaktorOrdo2] = useState([]);

  const [isClicked, setIsClicked] = useState(false);

  function handleKofaktor() {
    const [a, b] = matrixAdjOrdo2[0];
    const [c, d] = matrixAdjOrdo2[1];

    const m11 = d * 1;

    const m12 = c * -1;

    const m21 = b * -1;

    const m22 = a * 1;

    const hasil = [m11, m12, m21, m22];

    setKofaktorOrdo2(hasil);
    setIsClicked(true);
  }

  function handleInputChange(event, row, col) {
    const value = parseFloat(event.target.value);
    const newMatrix = [...matrixAdjOrdo2];
    newMatrix[row][col] = isNaN(value) ? 0 : value;
    setMatrixAdjOrdo2(newMatrix);
  }

  function handleAdjoinOrdo2() {

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
    
    const [a, b] = matrixAdjOrdo2[0];
    const [c, d] = matrixAdjOrdo2[1];

    const m11 = d * 1;

    const m12 = c * -1;

    const m21 = b * -1;

    const m22 = a * 1;

    const hasil = [m11, m12, m21, m22];

    const adj = [...hasil];

    const nilaiAdjoin = [adj[0], adj[1], adj[2], adj[3]];

    setAdjoinOrdo2(nilaiAdjoin);
  }

  // Mengambil Data Dari Local Storage & Menambahkan Data Baru
  const [dataAdjOrdo2, setDataAdjOrdo2] = useState(() => {
    const storedDataAdjOrdo2 = localStorage.getItem("AdjOrdo2");
    return storedDataAdjOrdo2 ? JSON.parse(storedDataAdjOrdo2) : [];
  });

  useEffect(() => {
    const storedDataAdjOrdo2 = localStorage.getItem("AdjOrdo2");
    if (storedDataAdjOrdo2) {
      setDataAdjOrdo2(JSON.parse(storedDataAdjOrdo2));
    }
  }, []);

  const resetAdjoinOrdo2 = () => {
    setAdjoinOrdo2([""]);
    setMatrixAdjOrdo2([
      ["", ""],
      ["", ""],
    ]);
    setIsClicked(false);

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

  const simpanAdjoinOrdo2 = (e) => {
    e.preventDefault();

    toast.success("Perhitungan disimpan 🙂✨ ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    let dataAdjoinOrdo2Obj = {
      ID: "Adjoin Ordo 2",
      MatrixAdjoinOrdo2: matrixAdjOrdo2,
      AdjoinOrdo2: adjoinOrdo2,
    };

    setDataAdjOrdo2((prevDataAdjOrdo2) => [
      ...prevDataAdjOrdo2,
      dataAdjoinOrdo2Obj,
    ]);
  };

  useEffect(() => {
    localStorage.setItem("AdjOrdo2", JSON.stringify(dataAdjOrdo2));
  }, [dataAdjOrdo2]);

  const hasilMinor = ` $$\\begin{bmatrix} M11 & M12 \\\\ M21 & M22 \\end{bmatrix}$$`;
  const rumusKofaktor = ` =$$\\begin{bmatrix} + & - \\\\ - & + \\end{bmatrix}$$`;
  const matriksAdj2 = ` A=$$\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$$`;
  const matriksKofaktor = `A=$$\\begin{bmatrix} d & -c \\\\ -b & a \\end{bmatrix}$$`;
  const matriksAdjoin = ` =$$\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$$`;

  return (
    <>
      <div className="flex flex-col items-center sm:flex-row sm:items-start justify-center">
        <div className="bg-[#FFF8F2] sm:max-h-auto md:h-[1105px] lg:min-h-[90%] text-sm w-[90%] mb-5 sm:w-[200px] shadow-xl p-4 mt-4 sm:mt-0 sm:mr-4">
          <div className="flex ">
            <Typography variant="p" sx={{ fontFamily: "Merriweather" }}>
              <strong>Petunjuk Penggunaan :</strong>
            </Typography>
          </div>
          <br />
          <Typography variant="p" sx={{ fontFamily: "Merriweather" }}>
            <ol style={{ listStyleType: "decimal" }}>
              <li>
                Masukkan elemen-elemen matriks ordo 2 x 2 ke dalam kolom atau
                baris yang sesuai dengan kotak yang tersedia
              </li>
              <li>
                Setelah memasukkan nilai-nilai elemen matriks, lalu tekan tombol
                'Tentukan Adjoin' untuk mengaktifkan perhitungan
              </li>
              <li>
                CalMath akan menampilkan hasil dan langkah penyelesaian adjoin
                ordo 2 x 2 dari matriks yang Anda masukkan di layar kalkulator
              </li>
              <li>
                Hasil operasi hitung adjoin ordo 2 x 2 dapat Anda simpan dan
                ditampilkan dalam Riwayat
              </li>
              <li>
                Jika Anda ingin menghitung nilai dari adjoin ordo 2 x 2 yang
                lain, Anda bisa klik tombol "Reset" dan ulangi langkah-langkah
                sebelumnya
              </li>
            </ol>
          </Typography>
        </div>
        <div className="w-full md:max-w-[697px] p-6 bg-[#FFF8F2] shadow-xl rounded-lg mr-4">
          <div className="justify-center">
            <div className="rounded-3xl py-2 max-h-screen bg-[#423232] text-center w-full">
              <Typography
                className="text-[#F0EAC0] text-[36px] font-normal"
                variant="p"
                sx={{ fontFamily: "Crimson Text" }}
              >
                Adjoin Ordo 2x2
              </Typography>
            </div>
          </div>
          <div className="max-w-md mx-auto mt-10 bg-[#E09132] px-4 py-2 rounded-lg">
            <table className="table-fixed mx-auto max-w-lg">
              <thead>
                <tr>
                  <th className="w-1/2 text-black">A</th>
                  <th className="w-1/2 text-black">B</th>
                </tr>
              </thead>
              <tbody>
                {matrixAdjOrdo2.map((row, i) => (
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
          <div className="flex justify-center gap-5 mt-4">
            <button
              onClick={() => {
                handleAdjoinOrdo2();
                handleKofaktor();
              }}
              className="px-4 py-2 bg-[#E09132] text-white rounded-full"
            >
              Tentukan Adjoin →{" "}
            </button>
            <button
              onClick={resetAdjoinOrdo2}
              className="px-4 py-2 bg-red-600 text-white rounded-full"
            >
              Reset →
            </button>
            <form>
              <button
                onClickCapture={simpanAdjoinOrdo2}
                className="px-4 py-2 bg-green-600 text-white rounded-full"
              >
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
          <div>
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
            {isClicked && (
              <div className=" shadow-md bg-[#FFF8F2] p-4 relative justify-center flex flex-wrap mt-[50px] border rounded-lg">
                <div className="top-[-10px] border shadow-md p-2 bg-[#FFF8F2] rounded-lg">
                  <Typography
                    variant="p"
                    sx={{ fontFamily: "Merriweather" }}
                    className="text-black"
                  >
                    Hasil dari adjoin yang anda cari adalah:
                  </Typography>
                  <Latex>
                    {`$$\\begin{bmatrix} ${adjoinOrdo2[0]} & ${adjoinOrdo2[2]} \\\\ ${adjoinOrdo2[1]} & ${adjoinOrdo2[3]} \\end{bmatrix}$$`}
                  </Latex>
                </div>
                <div className="flex flex-wrap items-center gap-4 justify-center mt-5">
                  <div className="bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg">
                    <div className="mb-4">
                      <Typography
                        variant="p"
                        sx={{ fontFamily: "Merriweather" }}
                        className="text-black"
                      >
                        Langkah 0 : mengambarkan Matrix
                      </Typography>
                    </div>
                    <div className="mb-6">
                      <Latex>
                        {`$$\\begin{bmatrix} ${matrixAdjOrdo2
                          .map((row) => row.join(" & "))
                          .join(" \\\\ ")} \\end{bmatrix}$$`}
                      </Latex>
                    </div>
                  </div>

                  <div className="bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg">
                    <div className="mb-4">
                      <Typography
                        variant="p"
                        sx={{ fontFamily: "Merriweather" }}
                        className="text-black"
                      >
                        Langkah 1 : menentukan M1
                      </Typography>
                    </div>
                    <div className="mb-6">
                      <Latex>
                        {`$$\\begin{bmatrix} ${matrixAdjOrdo2
                          .map((row) => row.join(" & "))
                          .join(" \\\\ ")} \\end{bmatrix}$$`}
                      </Latex>
                      <Latex>
                        {`= $$\\begin{bmatrix} ${
                          matrixAdjOrdo2 ? matrixAdjOrdo2[1][1] : 0
                        } \\end{bmatrix}$$`}
                      </Latex>
                    </div>
                  </div>

                  <div className="bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg">
                    <div className="mb-4">
                      <Typography
                        variant="p"
                        sx={{ fontFamily: "Merriweather" }}
                        className="text-black"
                      >
                        Langkah 2 : menentukan M2
                      </Typography>
                    </div>
                    <div className="mb-6">
                      <Latex>
                        {`$$\\begin{bmatrix} ${matrixAdjOrdo2
                          .map((row) => row.join(" & "))
                          .join(" \\\\ ")} \\end{bmatrix}$$`}
                      </Latex>
                      <Latex>
                        {`= $$\\begin{bmatrix} ${
                          matrixAdjOrdo2 ? matrixAdjOrdo2[1][0] : 0
                        } \\end{bmatrix}$$`}
                      </Latex>
                    </div>
                  </div>

                  <div className="bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg">
                    <div className="mb-4">
                      <Typography
                        variant="p"
                        sx={{ fontFamily: "Merriweather" }}
                        className="text-black"
                      >
                        Langkah 3 : menentukan M3
                      </Typography>
                    </div>
                    <div className="mb-6">
                      <Latex>
                        {`$$\\begin{bmatrix} ${matrixAdjOrdo2
                          .map((row) => row.join(" & "))
                          .join(" \\\\ ")} \\end{bmatrix}$$`}
                      </Latex>
                      <Latex>
                        {`= $$\\begin{bmatrix} ${
                          matrixAdjOrdo2 ? matrixAdjOrdo2[0][1] : 0
                        } \\end{bmatrix}$$`}
                      </Latex>
                    </div>
                  </div>

                  <div className="bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg">
                    <div className="mb-4">
                      <Typography
                        variant="p"
                        sx={{ fontFamily: "Merriweather" }}
                        className="text-black"
                      >
                        Langkah 4 : menentukan M4
                      </Typography>
                    </div>
                    <div className="mb-6">
                      <Latex>
                        {`$$\\begin{bmatrix} ${matrixAdjOrdo2
                          .map((row) => row.join(" & "))
                          .join(" \\\\ ")} \\end{bmatrix}$$`}
                      </Latex>
                      <Latex>
                        {`= $$\\begin{bmatrix} ${
                          matrixAdjOrdo2 ? matrixAdjOrdo2[0][0] : 0
                        } \\end{bmatrix}$$`}
                      </Latex>
                    </div>
                  </div>

                  <div className="bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg">
                    <div className="mb-[32px]">
                      <Typography
                        variant="p"
                        sx={{ fontFamily: "Merriweather" }}
                        className="text-black"
                      >
                        Langkah 5 : Mengalikan hasil minor dengan pola kofaktor
                      </Typography>
                    </div>
                    <div className="mb-6">
                      <Latex>{hasilMinor}</Latex>
                      <Latex>{rumusKofaktor}</Latex>
                    </div>
                  </div>
                  <div className="bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg">
                    <div className="mb-[32px]">
                      <Typography
                        variant="p"
                        sx={{ fontFamily: "Merriweather" }}
                        className="text-black"
                      >
                        Langkah 6 : Mendapatkan hasil kofaktor
                      </Typography>
                    </div>
                    <div className="mb-6">
                      <Latex>
                        {`$$\\begin{bmatrix} ${kofaktorOrdo2[0]} & ${kofaktorOrdo2[1]} \\\\ ${kofaktorOrdo2[2]} & ${kofaktorOrdo2[3]} \\end{bmatrix}$$`}
                      </Latex>
                    </div>
                  </div>

                  <div className="bg-[#FFF8F2] max-w-[280px] h-[200px] flex flex-col justify-center p-4 items-center shadow-lg rounded-lg">
                    <div className="mb-[32px]">
                      <Typography
                        variant="p"
                        sx={{ fontFamily: "Merriweather" }}
                        className="text-black"
                      >
                        Langkah 7 : Melakukan Tranpose hasil kofaktor
                      </Typography>
                    </div>
                    <div className="mb-6">
                      <Latex>
                        {`$$\\begin{bmatrix} ${adjoinOrdo2[0]} & ${adjoinOrdo2[2]} \\\\ ${adjoinOrdo2[1]} & ${adjoinOrdo2[3]} \\end{bmatrix}$$`}
                      </Latex>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-[#FFF8F2] sm:max-h-auto text-sm w-[90%] mb-5 sm:w-[200px] shadow-xl p-4 mt-4 sm:mt-0 sm:mr-4">
          <Typography variant="p" sx={{ fontFamily: "Merriweather" }}>
            <strong>Materi Pembahasan</strong>
          </Typography>
          <Typography variant="p" sx={{ fontFamily: "Merriweather" }}>
            <p className="py-2">
              &nbsp; Adjoin adalah matriks kofaktor yang di transposkan (baris
              jadi kolom, kolom jadi baris)
            </p>
            <p className="pb-2">
              &nbsp; Adjoin matriks ordo 2 x 2 adalah matriks yang diperoleh
              dengan menukar elemen-elemen pada diagonal utama (elemen diagonal
              dari kiri atas ke kanan bawah) dan mengubah tanda elemen-elemen di
              luar diagonal
            </p>
            <p className="pb-2">
              &nbsp; Misalkan terdapat matriks <Latex>{matriksAdj2}</Latex>
            </p>
            <p className="pb-2">
              &nbsp; Langkah pertama dalam menghitung adjoin ordo 2 x 2 adalah
              menghitung matriks kofaktor
            </p>
            <p>
              <Latex>{matriksKofaktor}</Latex>
            </p>
            <p className="py-2">
              &nbsp; Langkah berikutnya adalah mentranspos matriks kofaktor.
              Transpos matriks adalah operasi yang menukar baris menjadi kolom
              dan kolom menjadi baris.
            </p>
            <p className="py-2">&nbsp; Matriks adjoin dari matriks A adalah:</p>
            <p>
              <Latex>{matriksAdjoin}</Latex>
            </p>
            <p className="mt-4">
              &nbsp; Jadi, jika terdapat matriks A dengan ordo 2x2, matriks
              adjoin dari A adalah matriks dengan elemen-elemen yang ditukar
              antara elemen diagonal utama (a dan d) dan elemen diagonal
              sekunder (-b dan -c).
            </p>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Adjoinordo2;
