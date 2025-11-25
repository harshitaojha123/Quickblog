import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets'
import Blogitemtable from '../../components/admin/Blogitemtable'

const BlogList = () => {
  const [blogs, setBlogs] = useState([])

  const fetchBlogs = async () => {
    setBlogs(blog_data)
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
      <h1 className='text-xl font-semibold mb-4'>All Blogs</h1>

      <div className='max-w-4xl relative h-4/5 mt-4 overflow-x-auto shadow rounded-lg scroll-bar-hide'>
        <table className='w-full text-sm text-gray-600'>
          <thead className='text-xs text-gray-600 text-left uppercase'>
            <tr>
              <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
              <th scope='col' className='px-2 py-4'>Blog title</th>
              <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
              <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
              <th scope='col' className='px-2 py-4'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog, index) => (
              <Blogitemtable
                key={blog._id}
                blog={blog}
                fetchBlogs={fetchBlogs}
                index={index + 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BlogList
