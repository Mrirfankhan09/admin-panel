import React from 'react';

const UsersPage = () => {
  // Dummy users data
  const users = [
    {
      id: 1,
      name: 'Ankit Mehta',
      email: 'ankit@example.com',
      role: 'Admin',
      joined: '2023-11-01'
    },
    {
      id: 2,
      name: 'Priya Jain',
      email: 'priya@example.com',
      role: 'Customer',
      joined: '2024-05-21'
    },
    {
      id: 3,
      name: 'Ravi Kumar',
      email: 'ravi@example.com',
      role: 'Customer',
      joined: '2025-02-10'
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Role</th>
              <th className="p-2 border">Joined Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="p-2 border">{user.name}</td>
                <td className="p-2 border">{user.email}</td>
                <td className="p-2 border">{user.role}</td>
                <td className="p-2 border">{user.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
