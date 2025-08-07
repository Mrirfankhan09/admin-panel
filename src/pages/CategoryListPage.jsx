import React, { useState } from 'react';

const CategoryListPage = () => {
  const [categories, setCategories] = useState([
    'Electronics',
    'Clothing',
    'Footwear',
    'Books',
    'Beauty',
  ]);
  const [newCategory, setNewCategory] = useState('');

  const addCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim() !== '') {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>

      <form onSubmit={addCategory} className="flex gap-2 mb-6">
        <input
          type="text"
          className="flex-1 border px-3 py-2 rounded"
          placeholder="Add new category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {categories.map((cat, idx) => (
          <li key={idx} className="border p-2 rounded flex justify-between items-center">
            {cat}
            <button
              onClick={() =>
                setCategories(categories.filter((c, i) => i !== idx))
              }
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryListPage;
