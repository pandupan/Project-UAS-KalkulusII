import React from 'react'
import { Navbar } from 'flowbite-react'
import Logo from '../asset/image/kalkulatorprojek-removebg-preview 1.png'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

const NavigationBar = () => {
  return (
    <Navbar className='bg-yellow-100 h-[90px]' fluid={true} rounded={true}>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <div className='flex items-center'>
          <img
            src={Logo}
            className="w-[54px] -mt-2 mr-3 sm:w-[64px] sm:-mt-2"
            alt="Logo Kalkulator"
          />
          <Typography className='self-center whitespace-nowrap text-2xl font-semibold text-[#423232]' variant="h5" sx={{ fontFamily: 'Crimson Text' }}>
            CalMath
          </Typography>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse className='flex flex-wrap items-center gap-2 sm:gap-4'>
          <Navbar.Link>
            <Link to="/dashboard">
              <button className="btn btn-warning bg-[#BC6C25] h-10 w-15 text-white">Menu</button>
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to='/riwayat'>
              <button className="btn btn-warning bg-[#BC6C25] h-10 w-15 text-white">Riwayat</button>
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default NavigationBar
