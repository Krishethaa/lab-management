import React from 'react';

const Home = () => {
  const labTypes = [
    { name: 'Computer Labs', icon: '💻' },
    { name: 'Hardware Labs', icon: '🔧' },
    { name: 'Chemical Labs', icon: '🧪' },
    { name: 'Electrical Labs', icon: '⚡' },
    { name: 'Mechanical Labs', icon: '⚙️' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Welcome to Lab Management System
          </h1>
          <p className="text-gray-600 text-lg">
            Efficiently manage and allocate laboratory resources across departments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">For Faculty</h2>
            <div className="space-y-2">
              <p>• Request lab access for your courses</p>
              <p>• Track request status in real-time</p>
              <p>• View lab allocation schedule</p>
              <p>• Manage course requirements</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">For Students</h2>
            <div className="space-y-2">
              <p>• View allocated lab schedules</p>
              <p>• Check upcoming lab sessions</p>
              <p>• Access lab resources</p>
              <p>• Track attendance</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Available Laboratory Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {labTypes.map((lab, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-2">{lab.icon}</div>
                <h3 className="font-medium text-gray-800">{lab.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;