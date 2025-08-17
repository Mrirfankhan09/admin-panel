import React from 'react';
import DashboardCard from '../components/DashboardCard';
import { ShoppingCart, Users, Package, DollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardPages = () => {
  const [userCount, setUserCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [revenue, setRevenue] = useState(0);
  // Fetch counts from API or state management
  const fetchuserCount = async (req, res) => {
    const response = await axios.get('https://ecommerce-backend-2-79ub.onrender.com/api/users/usercount', {
      withCredentials: true, // Ensure cookies are sent with the request  );
    })
    console.log("User Count:", response.data)
    setUserCount(response.data.count);
  }
  const fetchOrderCount = async () => {
    const response = await axios.get('https://ecommerce-backend-2-79ub.onrender.com/api/orders/ordercount', {
      withCredentials: true, // Ensure cookies are sent with the request
    });
    console.log("Order Count:", response.data);
    setOrderCount(response.data.count);
  };
  const fetchProductCount = async () => {
    const response = await axios.get('https://ecommerce-backend-2-79ub.onrender.com/api/products/getproductsCount', {
      withCredentials: true, // Ensure cookies are sent with the request
    });
    console.log("Product Count:", response.data);
    setProductCount(response.data.count);
  }
  const fetchRevenue = async () => {
    const response = await axios.get('https://ecommerce-backend-2-79ub.onrender.com/api/orders/totalrevenue', {
      withCredentials: true, // Ensure cookies are sent with the request
    });
    console.log("Total Revenue:", response.data);
    setRevenue(response.data.totalRevenue);
  };

  // Call fetch functions on component mount
  useEffect(() => {
    fetchuserCount();
    fetchOrderCount();
    fetchProductCount();
    fetchRevenue();
  }, []);

  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
      <p className="text-gray-600 mb-6">Here is a quick summary of your store performance.</p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <DashboardCard
          title="Total Orders"
          value={orderCount}
          icon={ShoppingCart}
          bgColor="bg-blue-600"
        />
        <DashboardCard
          title="Users"
          value={userCount}
          icon={Users}
          bgColor="bg-green-600"
        />
        <DashboardCard
          title="Products"
          value={productCount}
          icon={Package}
          bgColor="bg-purple-600"
        />
        <DashboardCard
          title="Revenue"
          value={revenue}
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
