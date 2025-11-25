import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blog_data, comments_data } from '../assets/assets';
import gradientBackground from '../assets/gradientBackground.png';
import Moment from 'moment';
import Navbar from '../components/Navbar';
import user_icon from '../assets/user_icon.svg';
import facebook_icon from '../assets/facebook_icon.svg';
import twitter_icon from '../assets/twitter_icon.svg';
import googleplus_icon from '../assets/googleplus_icon.svg';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Blog = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  // Generate random time within the last 30 days
  const getRandomDate = () => {
    const daysAgo = Math.floor(Math.random() * 30);
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString();
  };

  // Fetch blog and comments
  useEffect(() => {
    const fetchBlogData = () => {
      const blog = blog_data.find((item) => item._id === id);
      setData(blog);
    };

    const fetchComments = () => {
      // Clone and assign realistic times dynamically
      const updatedComments = comments_data.map((comment) => ({
        ...comment,
        createdAt: getRandomDate(),
      }));
      setComments(updatedComments);
    };

    fetchBlogData();
    fetchComments();
  }, [id]);

  const addComment = (e) => {
    e.preventDefault();
    // logic to add comment (optional for now)
  };

  return data ? (
    <div className="relative">
      {/* Background gradient */}
      <img
        src={gradientBackground}
        alt="gradient background"
        className="absolute -top-12 -z-10 opacity-50 w-full"
      />

      <Navbar />

      {/* Blog Header */}
      <div className="text-center mt-20 text-gray-600 px-4">
        <p className="text-primary py-4 font-medium">
          Published on {Moment(data.createdAt).format('MMMM Do YYYY')}
        </p>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
          {data.title}
        </h1>
        <h2 className="my-5 text-gray-500 max-w-lg mx-auto">{data.subTitle}</h2>
        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/25 bg-primary/5 font-medium text-primary">
          Michael Brown
        </p>
      </div>

      {/* Blog Image & Description */}
      <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
        <img
          src={data.image}
          alt={data.title}
          className="w-full md:w-[80%] lg:w-[70%] mx-auto h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-3xl mb-8 shadow-md"
        />

        {/* Rich-text content */}
        <div
          className="rich-text max-w-3xl mx-auto text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
      </div>

      {/* Comments Section */}
      <div className="mt-14 mb-10 max-w-3xl mx-auto">
        <p className="font-semibold text-lg text-gray-800 mb-6">
          Comments ({comments.length})
        </p>

        <div className="flex flex-col gap-3">
          {comments.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-start bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm"
            >
              {/* Left side - User info */}
              <div className="flex items-start gap-3">
                <img src={user_icon} alt="user" className="w-6 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.content}</p>
                </div>
              </div>

              {/* Right side - Time */}
              <div className="text-xs text-gray-500 whitespace-nowrap">
                {Moment(item.createdAt).fromNow()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Comment Box */}
      <div className="max-w-3xl mx-auto mt-8">
        <p className="font-semibold mb-4 text-gray-800">Add your comment</p>
        <form
          onSubmit={addComment}
          className="flex flex-col gap-4 items-start max-w-lg"
        >
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="w-full p-2 border border-gray-300 rounded outline-none"
            placeholder="Your name"
          />
          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder="Write your comment..."
            className="w-full p-2 border border-gray-300 rounded outline-none h-32 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-[#1717a9] transition-all"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Share Buttons */}
      <div className="my-24 max-w-3xl mx-auto">
        <p className="font-semibold my-4 text-gray-800">
          Share this article on social media
        </p>
        <div className="flex gap-4 items-center">
          <img src={facebook_icon} width={40} alt="Facebook" />
          <img src={twitter_icon} width={40} alt="Twitter" />
          <img src={googleplus_icon} width={40} alt="Google Plus" />
        </div>
      </div>

      <Footer />
    </div>
  ) : (
    <Loader />
  );
};

export default Blog;
