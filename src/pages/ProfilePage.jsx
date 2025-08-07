import React, { useState } from 'react';

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'Admin',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Call API to update profile
    alert('Profile updated successfully!');
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border px-3 py-2 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border px-3 py-2 rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Role</label>
          <input
            type="text"
            name="role"
            className="w-full border px-3 py-2 rounded bg-gray-100 cursor-not-allowed"
            value={formData.role}
            disabled
          />
        </div>

        <div>
          <label className="block font-medium mb-1">New Password</label>
          <input
            type="password"
            name="password"
            className="w-full border px-3 py-2 rounded"
            value={formData.password}
            onChange={handleChange}
            placeholder="Leave blank to keep current password"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
