import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import LoginPage from './pages/LoginPage';
import AdminLayout from './components/AdminLayout';
import DashboardPages from './pages/DashboardPages';
import ProductsPage from './pages/ProductsPage';
import AddProductPage from './pages/AddProductPages';
import ProductEditPage from './pages/ProductEditPage';
import OrdersPage from './pages/OrdersPage';
import UsersPage from './pages/UserPage';
import ProfilePage from './pages/ProfilePage';
import CategoriesPage from './pages/CategoryListPage';
import SettingsPage from './pages/SettingsPage';
function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [profile, setProfile] = useState({});
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState('');
  const [admin, setAdmin] = useState(false);

  // Fetch initial data
  const fetchData = async () => {
    try {
      const response = await axios.get('https://ecommerce-backend-2-79ub.onrender.com/api/products');
      console.log(response.data.products);
      setProducts(response.data.products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/dashboard" element={<AdminLayout />}>
          <Route index element={<DashboardPages />} />
          <Route path="products" element={<ProductsPage products={products} />} />
          <Route path="add-product" element={<AddProductPage />} />
          <Route path="edit-product/:id" element={<ProductEditPage />} />
          <Route path='orders' element={<OrdersPage />} />
          <Route path='Users' element={<UsersPage />} />
          <Route path='Profile' element={<ProfilePage />} />
          <Route path='categories' element={<CategoriesPage />} />
          <Route path='settings' element={<SettingsPage />} />
        
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/login" element={<LoginPage />} />

        {/* Add more routes like orders, users later */}
      </Routes>
    </Router>
  );
}

export default App;
