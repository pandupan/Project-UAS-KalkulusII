import React from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div className='flex mx-0 justify-center mt-100 auto'>
      <div className="sm:flex flex-wrap items-stretch justify-center text-center gap-8 mt-10">
                <div className="card w-80 my-10 text-gray-800 bg-white shadow-xl">
                    <figure><img src="https://i.ibb.co/s1DLFbf/Landing-page-amico.png" alt="Materi" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Materi Page</h2>
                        <p className="mb-5">Silahkan Klik Untuk Mengakses Materi Tersedia</p>
                        <div className="card-actions  justify-end">
                        <button className="btn btn-warning bg-[#E09132]">
                            <Link className='text-white' to='/materi'>Click Here  →</Link>
                            </button>
                        </div>
                    </div>
                    </div>
                <div className="card w-80 my-10 text-gray-800 bg-white shadow-xl">
                    <figure><img src="https://i.ibb.co/3C4kP9Y/Teaching-pana.png" alt="List-Data" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Determinan Ordo 2</h2>
                        <p className='mb-5'>Menampilkan Kalkulator Untuk Menyelesaikan Determinan Ordo 2</p>
                        <div className="card-actions  justify-end">
                        <button className="btn btn-warning bg-[#E09132]">
                        <Link className='text-white' to='/determinan2'>Click Here  →</Link>
                        </button>
                        </div>
                    </div>
                    </div>
                <div className="card w-80 my-10 text-gray-800 bg-white shadow-xl">
                    <figure><img src="https://i.ibb.co/3B1Fq0W/Teacher-amico.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Minor Ordo 2</h2>
                        <p className='mb-5'>Menampilkan Kalkulator Untuk Menyelesaikan Determinan Ordo 2</p>
                        <div className="card-actions  justify-end">
                        <button className="btn btn-warning bg-[#E09132]">
                        <Link className='text-white' to='/minor2'>Click Here  →</Link>
                        </button>
                        </div>
                    </div>

                    </div>
                <div className="card w-80 my-10 text-gray-800 bg-white shadow-xl">
                    <figure><img src="https://i.ibb.co/23ydP9Y/Teacher-rafiki.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Kofaktor Ordo 2</h2>
                        <p className='mb-5'>Menampilkan Kalkulator Untuk Menyelesaikan Kofaktor Ordo 2</p>
                        <div className="card-actions  justify-end">
                        <button className="btn btn-warning bg-[#E09132]">
                        <Link className='text-white' to='/kofaktor2'>Click Here  →</Link>
                        </button>
                        </div>
                    </div>
                </div>

                <div className="card w-80 my-10 text-gray-800 bg-white shadow-xl">
                    <figure><img src="https://i.ibb.co/QjcyW3P/Teacher-cuate.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Adjoin Ordo2 </h2>
                        <p className='mb-5'>Menampilkan Kalkulator Untuk Menyelesaikan Adjoin Ordo 2</p>
                        <div className="card-actions  justify-end">
                        <button className="btn btn-warning bg-[#E09132]">
                        <Link className='text-white' to='/adjoin2'>Click Here  →</Link>
                        </button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 my-10 text-gray-800 bg-white shadow-xl">
                    <figure><img src="https://i.ibb.co/3C4kP9Y/Teaching-pana.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Determinan Ordo 3 </h2>
                        <p className='mb-5'>Menampilkan Kalkulator Untuk Menyelesaikan Determinan Ordo 3</p>
                        <div className="card-actions  justify-end">
                        <button className="btn btn-warning bg-[#E09132]">
                        <Link className='text-white' to='/determinan3'>Click Here  →</Link>
                        </button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 my-10 text-gray-800 bg-white shadow-xl">
                    <figure><img src="https://i.ibb.co/3B1Fq0W/Teacher-amico.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Minor Ordo 3</h2>
                        <p className='mb-5'>Menampilkan Kalkulator Untuk Menyelesaikan Adjoin Ordo 3</p>
                        <div className="card-actions  justify-end">
                        <button className="btn btn-warning bg-[#E09132]">
                        <Link className='text-white' to='/minor3'>Click Here  →</Link>
                        </button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 my-10 text-gray-800 bg-white shadow-xl">
                    <figure><img src="https://i.ibb.co/23ydP9Y/Teacher-rafiki.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Kofaktor Ordo 3</h2>
                        <p className='mb-5'>Menampilkan Kalkulator Untuk Menyelesaikan Kofaktor Ordo 3</p>
                        <div className="card-actions  justify-end">
                        <button className="btn btn-warning bg-[#E09132]">
                        <Link className='text-white' to='/kofaktor3'>Click Here  →</Link>
                        </button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 my-10 text-gray-800 bg-white shadow-xl">
                    <figure><img src="https://i.ibb.co/QjcyW3P/Teacher-cuate.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Adjoin Ordo 3 </h2>
                        <p className='mb-5'>Menampilkan Kalkulator Untuk Menyelesaikan Adjoin Ordo 3</p>
                        <div className="card-actions  justify-end">
                        <button className="btn btn-warning bg-[#E09132]">
                        <Link className='text-white' to='/adjoin3'>Click Here  →</Link>
                        </button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 my-10 text-gray-800 bg-white shadow-xl">
                    <figure><img src="https://i.ibb.co/hfmv779/Reading-list-bro.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Riwayat</h2>
                        <p className='mb-5'>Menampilkan Riwayat Dari Penggunaan Kalkulator Anda</p>
                        <div className="card-actions  justify-end">
                        <button className="btn btn-warning bg-[#E09132]">
                        <Link className='text-white' to='/adjoin3'>Click Here  →</Link>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Dashboard
