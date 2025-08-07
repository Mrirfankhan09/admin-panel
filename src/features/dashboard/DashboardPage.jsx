import React from 'react';
import DashboardCard from '../../components/DashboardCard';
import { ShoppingCart, Users, Package, DollarSign } from 'lucide-react';

const DashboardPages = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <DashboardCard
        title="Total Orders"
        value="120"
        icon={ShoppingCart}
        bgColor="bg-blue-600"
      />
      <DashboardCard
        title="Users"
        value="48"
        icon={Users}
        bgColor="bg-green-600"
      />
      <DashboardCard
        title="Products"
        value="34"
        icon={Package}
        bgColor="bg-purple-600"
      />
      <DashboardCard
        title="Revenue"
        value="₹1.2L"
        icon={DollarSign}
        bgColor="bg-yellow-600"
      />
    </div>
  );
};

export default DashboardPages;
