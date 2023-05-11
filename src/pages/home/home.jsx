import React from 'react'
import amico from '../../asset/image/amico.png'

export const Home = () => {
  return (
    <section className="bg-[#E09132] dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-8 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">
              Determinan 
            </h1>
            <h1 className='max-w-2xl mb-8 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white'>
              Calculus II
            </h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Job Seeker Website Terbaik Dalam Menyediakan Lowongan Pekerjaan Secara Up To Date dan Relevan  
            </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img className="ml-40 h-96 w-96" src={amico} alt="mockup"/>
        </div>                
    </div>
</section>
    );
}

export default Home;