import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductEditPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
    description: '',
  });

  // Fetch existing product info (dummy for now)
  useEffect(() => {
    // Simulate API fetch
    const fetchedProduct = {
      id,
      name: 'iPhone 15',
      price: 99999,
      category: 'Mobile',
      image: 'https://via.placeholder.com/100',
      description: 'Latest iPhone with A17 chip',
    };
    setProduct(fetchedProduct);
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send updated product to API
    console.log('Updated Product:', product);
    alert('Product updated successfully!');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProductEditPage;
