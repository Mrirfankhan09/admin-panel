import React, { useState } from 'react';

const SettingsPage = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [siteMode, setSiteMode] = useState('live');

  const handleSave = (e) => {
    e.preventDefault();
    alert('Settings updated successfully!');
    // TODO: Save settings to backend
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <form onSubmit={handleSave} className="space-y-5">

        <div>
          <label className="block font-medium mb-1">Business Name</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            defaultValue="My E-Commerce"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Enable Notifications</label>
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
            className="mr-2"
          />
          {notificationsEnabled ? 'On' : 'Off'}
        </div>

        <div>
          <label className="block font-medium mb-1">Site Mode</label>
          <select
            className="w-full border px-3 py-2 rounded"
            value={siteMode}
            onChange={(e) => setSiteMode(e.target.value)}
          >
            <option value="live">Live</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
