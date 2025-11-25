import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email:', email)
    console.log('Password:', password)
    // You can add your login logic here (API call, validation, etc.)
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-full py-6 text-center'>
            <h1 className='text-3xl font-bold'>
              <span className='text-primary'>Admin</span> Login
            </h1>
            <p className='font-light'>Enter your credentials to access admin panel</p>
          </div>

          <form onSubmit={handleSubmit} className='w-full'>
            <div className='flex flex-col'>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                type='email'
                required
                placeholder='your email id'
                value={email}
                onChange={handleEmailChange}
                className='border-b-2 border-gray-300 p-2 outline-none mb-6 w-full'
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type='password'
                required
                placeholder='password'
                value={password}
                onChange={handlePasswordChange}
                className='border-b-2 border-gray-300 p-2 outline-none mb-6 w-full'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-primary py-3 rounded font-medium text-white cursor-pointer transition-all hover:bg-primary/90'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
