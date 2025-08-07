import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Topbar = () => {
  return (
    <header className="w-full h-16 bg-white shadow-md flex items-center justify-between px-6">
      {/* Left: Page Title or App Name */}
      <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>

      {/* Right: Admin Name + Icon (No logic yet) */}
      <div className="flex items-center gap-3">
        <span className="text-gray-700 font-medium">Admin</span>
        <FaUserCircle className="text-2xl text-gray-600" />
      </div>
    </header>
  );
};

export default Topbar;
