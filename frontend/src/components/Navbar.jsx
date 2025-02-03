import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">My Blog</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/create" className="hover:underline">Create Post</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
