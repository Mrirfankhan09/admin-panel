import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/dashboard" element={<AdminLayout />}>
          <Route index element={<DashboardPages />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="add-product" element={<AddProductPage />} />
          <Route path="edit-product/:id" element={<ProductEditPage />} />
          <Route path='orders' element={<OrdersPage/>} />
          <Route path='Users' element={<UsersPage/>} />
          <Route path='Profile' element={<ProfilePage/>} />
          <Route path = 'categories' element={<CategoriesPage/>} />
          <Route path='settings' element={<SettingsPage/>} />
        </Route>

        {/* Add more routes like orders, users later */}
      </Routes>
    </Router>
  );
}

export default App;
