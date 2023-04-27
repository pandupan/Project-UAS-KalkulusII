import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="bg-blue-600 container mx-auto">
      <h1 className="text-3xl font-bold underline">
      Halaman Home
      </h1>
      <Link to="/dashboard">
        <p>
          Pindah ke dashboard
        </p>
      </Link>
    </div>
    );
}

export default Home;