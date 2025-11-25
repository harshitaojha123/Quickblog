import React from 'react';
   const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <h2 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600 animate-pulse">
        Loading your blog...
      </h2>
    </div>
  );
};
export default Loader;