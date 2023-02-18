import React from 'react'
import { Link } from 'react-router-dom'
import DarkMode from './DarkMode'

function Navbar() {
  return (
    <header className='flex justify-between dark:bg-[#2B3945] bg-[#FFFFFF] px-12 py-6 rounded-lg drop-shadow-lg mb-8'>
        <h1><Link to="/">Where is the world?</Link></h1>
        <DarkMode/>
    </header>
  )
}

export default Navbar