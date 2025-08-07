import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content on the right */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Topbar */}
        <Topbar />

        {/* Main content area */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
