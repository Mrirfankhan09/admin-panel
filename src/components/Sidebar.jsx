import React from 'react';
import {
  FaBox,
  FaChartBar,
  FaUsers,
  FaClipboardList,
  FaSignOutAlt,
  FaPlus,
  FaTags,
  FaUserCircle,
  FaCog
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-8 text-center">Admin Panel</h2>

      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/dashboard"
              className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded"
            >
              <FaChartBar /> Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/products"
              className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded"
            >
              <FaBox /> Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/add-product"
              className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded"
            >
              <FaPlus /> Add Product
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/categories"
              className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded"
            >
              <FaTags /> Categories
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/orders"
              className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded"
            >
              <FaClipboardList /> Orders
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/users"
              className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded"
            >
              <FaUsers /> Users
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/profile"
              className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded"
            >
              <FaUserCircle /> Profile
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/settings"
              className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded"
            >
              <FaCog /> Settings
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="mt-auto">
        <button className="w-full flex items-center gap-3 p-2 hover:bg-gray-700 rounded">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
