import React from 'react';

const Unauthorized = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col text-center">
      <h1 className="text-4xl font-bold text-red-600">Unauthorized</h1>
      <p className="text-gray-600 mt-2">You don’t have permission to view this page.</p>
    </div>
  );
};

export default Unauthorized;
    