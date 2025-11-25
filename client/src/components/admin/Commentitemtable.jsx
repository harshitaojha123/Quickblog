import React from 'react';
import tick_icon from "../../assets/tick_icon.svg";
import bin_icon from "../../assets/bin_icon.svg";

const Commentitemtable = ({ comment, fetchComments }) => {
  const { blog, createdAt } = comment;

  return (
    <tr className='border-y border-gray-300'>
      <td className='px-6 py-4'>
        <b className='font-medium text-gray-600'>Blog:</b> {blog.title}
        <br /><br />
        <b className='font-medium text-gray-600'>Name:</b> {comment.name}
        <br />
        <b className='font-medium text-gray-600'>Comment:</b> {comment.content}
      </td>

      <td className='px-6 py-4 max-sm:hidden'>
        {new Date(createdAt).toLocaleString()}
      </td>

      <td>
        <div className='inline-flex items-center gap-4'>
          {!comment.isApproved ? (
            <img
              src={tick_icon}
              alt='approve'
              className='w-5 hover:scale-110 transition-all cursor-pointer'
              onClick={() => console.log("Approved clicked for", comment._id)}
            />
          ) : (
            <p className='text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1'>
              Approved
            </p>
          )}

          <img
            src={bin_icon}
            alt='delete'
            className='w-5 hover:scale-110 transition-all cursor-pointer'
            onClick={() => console.log("Delete clicked for", comment._id)}
          />
        </div>
      </td>
    </tr>
  );
};

export default Commentitemtable;
