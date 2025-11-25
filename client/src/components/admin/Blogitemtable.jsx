import React from 'react'
import cross_icon from "../../assets/cross_icon.svg"

const Blogitemtable = ({ blog, fetchblog, index }) => {
  const { title, createdAt, isPublished } = blog;
  const BlogDate = new Date(createdAt);

  return (
    <tr className='border-y border-gray-300'>
      <th className='px-2 py-4'>{index}</th>
      <td className='px-2 py-4'>{title}</td>
      <td className='px-2 py-4 max-sm:hidden'>
        {BlogDate.toDateString()}
        <p className={`${isPublished ? "text-green-600" : "text-orange-600"}`}>
          {isPublished ? "Published" : "Unpublished"}
        </p>
      </td>
      <td className='px-2 py-4 flex text-xs gap-3'>
        <button className='border px-2 py-0.5 mt-1 rounded cursor-pointer'>
          {isPublished ? "Unpublish" : "Publish"}
        </button>
        <img
          src={cross_icon}
          className='w-8 hover:scale-110 transition-all cursor-pointer'
          alt="delete"
        />
      </td>
    </tr>
  )
}

export default Blogitemtable


