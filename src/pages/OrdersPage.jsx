import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
const OrdersPage = () => {
  // Dummy order data

  // const orders = [
  //   {
  //     id: 'ORD001',
  //     customer: 'Rahul Sharma',
  //     total: 2499,
  //     status: 'Delivered',
  //     date: '2025-08-06'
  //   },
  //   {
  //     id: 'ORD002',
  //     customer: 'Sneha Patel',
  //     total: 1299,
  //     status: 'Processing',
  //     date: '2025-08-05'
  //   },
  //   {
  //     id: 'ORD003',
  //     customer: 'Amit Verma',
  //     total: 499,
  //     status: 'Cancelled',
  //     date: '2025-08-04'
  //   }
  // ];
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('https://ecommerce-backend-2-79ub.onrender.com/api/orders/getallorders', {
        withCredentials: true, // Ensure cookies are sent with the request)
      });
      console.log("Fetched Orders:", response.data);
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Order ID</th>
              <th className="p-2 border">Customer</th>
              <th className="p-2 border">Total (₹)</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="p-2 border">{order.id}</td>
                <td className="p-2 border">{order.customer}</td>
                <td className="p-2 border">₹{order.total}</td>
                <td className="p-2 border">{order.status}</td>
                <td className="p-2 border">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
