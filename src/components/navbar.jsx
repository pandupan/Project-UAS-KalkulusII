import React from 'react'
import { Navbar } from 'flowbite-react'
import Logo from '../asset/image/web-logo.png'
import { Link } from 'react-router-dom'


const NavigationBar = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <Link to='/' className='flex items-center'>
          <img
            src={Logo}
            className="mr-3 h-6 sm:h-9"
            alt="Logo Kalkulator"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-gray-900 ">
            Kalkulator Kalkulus II
          </span>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link >
            <Link to="/dashboard">
            <button class="btn btn-success h-10 w-15 -mx-2 text-white">Menu</button>
            </Link>
          </Navbar.Link>
          <Navbar.Link >
            <Link to='/riwayat'>
            <button class="btn btn-success h-10 w-15 -mx-2 text-white">Riwayat</button>
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default NavigationBar