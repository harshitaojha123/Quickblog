import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Public pages
import Home from './pages/Home'
import Blog from './pages/Blog'

// Admin pages
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/AddBlog'
import BlogList from './pages/admin/BlogList'
import Comments from './pages/admin/Comments'
import Login from './components/admin/Login'
import 'quill/dist/quill.snow.css'

const App = () => {
  return (
    <div>
      <Routes>
        {/* Public routes */}
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />

        {/* Admin routes */}
        <Route path='/admin' element={ true? <Layout />:<Login/>}>
          <Route index element={<Dashboard />} />
          <Route path='addblog' element={<AddBlog />} />
          <Route path='bloglist' element={<BlogList />} />
          <Route path='comments' element={<Comments />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
