import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductsPage = ({ products }) => {
  console.log(products)
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
            {products.map((product, index) => (
              <tr key={product._id || index}>
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{product.name}</td>
                <td className="px-4 py-2 border">{product.category}</td>
                <td className="px-4 py-2 border">₹{product.price}</td>
                <td className="px-4 py-2 border">
                  <button className="text-blue-600 mr-2">
                    <NavLink to={`/dashboard/edit-product/${product._id}`}>
                      Edit
                    </NavLink>
                  </button>
                  <button
                    className="text-red-600"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsPage;
