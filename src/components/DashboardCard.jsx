import React from 'react';
import { BarChart3 } from 'lucide-react'; // or any icon library you prefer

const DashboardCard = ({ title, value, icon: Icon, bgColor }) => {
  return (
    <div className="bg-white p-5 rounded shadow flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
      <div className={`p-3 rounded-full ${bgColor}`}>
        <Icon className="text-white w-6 h-6" />
      </div>
    </div>
  );
};

export default DashboardCard;
