import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { set } from 'mongoose';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    name: 'Admin User',
    role: 'Admin',
    password: '',
  });

  const handleChange = (e) => {

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const getUserProfile = async () => {
    try {

      const response = await axios.get('https://ecommerce-backend-2-79ub.onrender.com/api/users/profile', {
        withCredentials: true, // Ensure cookies are sent with the request
      });
      setFormData(response.data);
      console.log('User Profile:', response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  }
  const updateuserProfile = async () => {
    try {
      const response = await axios.put('https://ecommerce-backend-2-79ub.onrender.com/api/users/profile', formData, {
        withCredentials: true, // Ensure cookies are sent with the request
      });
      console.log('Profile updated:', response.data);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };




  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Call API to update 
    if (confirm('if you update your login password will be changed and you will be logged out')) {
      updateuserProfile();
      alert('Profile updated successfully!');
      logoutUser();
      window.location.href = '/login'; // Redirect to login page after logout


    }
    else {
      alert('Profile update cancelled.');
    }

  };
  useEffect(() => {
    getUserProfile();
  }, []);

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

        {/* <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border px-3 py-2 rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div> */}

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
