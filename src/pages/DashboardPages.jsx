import React from 'react';
import DashboardCard from '../components/DashboardCard';
import { ShoppingCart, Users, Package, DollarSign } from 'lucide-react';

const DashboardPages = () => {
  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
      <p className="text-gray-600 mb-6">Here is a quick summary of your store performance.</p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <DashboardCard
          title="Total Orders"
          value="120"
          icon={ShoppingCart}
          bgColor="bg-blue-600"
        />
        <DashboardCard
          title="Users"
          value="48"
          icon={Users}
          bgColor="bg-green-600"
        />
        <DashboardCard
          title="Products"
          value="34"
          icon={Package}
          bgColor="bg-purple-600"
        />
        <DashboardCard
          title="Revenue"
          value="₹1.2L"
          icon={DollarSign}
          bgColor="bg-yellow-600"
        />
      </div>

      {/* Recent Activity - Placeholder */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
        <ul className="text-gray-700 list-disc ml-5 space-y-1">
          <li>Order #1234 placed by user John</li>
          <li>New product "Bluetooth Headphones" added</li>
          <li>Revenue updated by ₹12,000 today</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardPages;
