import React from 'react'
import logo from '../../assets/logo.svg'
import { useNavigate, Outlet } from 'react-router-dom'

import Sidebar from "../../components/admin/Sidebar"

// ✅ Import Sidebar (you forgot this)

const Layout = () => {
  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
  }

  return (
    <>
      {/* Top Navbar */}
      <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
        <img
          src={logo}
          alt='Logo'
          onClick={() => navigate('/')}
          className='w-32 sm:w-40 cursor-pointer'
        />
        {/* ✅ Fixed spelling of "button" */}
        <button
          onClick={logout}
          className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'
        >
          Logout
        </button>
      </div>

      {/* Main Layout: Sidebar + Page Outlet */}
      <div className='flex h-[calc(100vh-70px)]'>
        <Sidebar />
        <div className='flex-1 overflow-y-auto'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
