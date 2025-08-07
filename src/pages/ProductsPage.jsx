import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">All Products</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Later this will be mapped from real data */}
            <tr>
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">Demo Product</td>
              <td className="px-4 py-2 border">Electronics</td>
              <td className="px-4 py-2 border">₹999</td>
              <td className="px-4 py-2 border">

                <button className="text-blue-600 mr-2">
                  <NavLink to="/dashboard/edit-product/1">
                    Edit
                  </NavLink>
                </button>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsPage;
