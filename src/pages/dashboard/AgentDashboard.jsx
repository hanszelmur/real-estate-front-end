import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockUser, properties, appointmentTypes } from '../../data/mockData';

function AgentDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const user = mockUser.agent;
  const agentListings = properties.filter(p => user.listings.includes(p.id));

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'customers', label: 'My Customers', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { id: 'listings', label: 'My Listings', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { id: 'appointments', label: 'Appointments', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { id: 'performance', label: 'Performance', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Agent Dashboard</h1>
              <p className="text-blue-100">Welcome back, {user.name}</p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Verified Agent
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <nav className="bg-white rounded-xl shadow-lg p-4 sticky top-24">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left mb-2 transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                  </svg>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Active Customers</p>
                        <p className="text-3xl font-bold text-gray-900">{user.assignedCustomers.filter(c => c.status === 'Active').length}</p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Active Listings</p>
                        <p className="text-3xl font-bold text-gray-900">{user.listings.length}</p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Pending Appointments</p>
                        <p className="text-3xl font-bold text-gray-900">{user.appointments.filter(a => a.status === 'Pending').length}</p>
                      </div>
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">This Month Sales</p>
                        <p className="text-3xl font-bold text-gray-900">3</p>
                      </div>
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Today's Appointments */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Today's Appointments</h2>
                  <div className="space-y-4">
                    {user.appointments.map(apt => {
                      const property = properties.find(p => p.id === apt.propertyId);
                      return (
                        <div key={apt.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-semibold">{apt.customerName.charAt(0)}</span>
                            </div>
                            <div className="ml-4">
                              <p className="font-semibold text-gray-900">{apt.customerName}</p>
                              <p className="text-sm text-gray-500">{property?.title} • {apt.time}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              apt.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {apt.status}
                            </span>
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Recent Customer Activity */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Customer Activity</h2>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">J</div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">John Doe viewed Luxury Penthouse Suite</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm">J</div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">Jane Smith saved Garden Townhouse</p>
                        <p className="text-xs text-gray-500">5 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm">B</div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">Bob Wilson requested a viewing</p>
                        <p className="text-xs text-gray-500">Yesterday</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Customers Tab */}
            {activeTab === 'customers' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Assigned Customers</h2>
                  <div className="flex items-center space-x-2">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                      <option>All Status</option>
                      <option>Active</option>
                      <option>On Hold</option>
                    </select>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Customer</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Last Activity</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {user.assignedCustomers.map((customer, index) => (
                        <tr key={customer.id}>
                          <td className="px-4 py-4">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <span className="text-gray-600 font-medium">{customer.name.charAt(0)}</span>
                              </div>
                              <div className="ml-3">
                                <p className="font-medium text-gray-900">{customer.name}</p>
                                <p className="text-sm text-gray-500">customer{customer.id}@email.com</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {customer.status}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500">
                            {index === 0 ? '2 hours ago' : index === 1 ? 'Yesterday' : '3 days ago'}
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex items-center space-x-2">
                              <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
                              <button className="text-green-600 hover:text-green-800 text-sm">Message</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 text-center mt-6">
                  Customer management is simulated. Admin assigns customers to agents based on workload and specialization.
                </p>
              </div>
            )}

            {/* Listings Tab */}
            {activeTab === 'listings' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">My Listings</h2>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    + Add New Listing
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {agentListings.map(property => (
                    <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{property.title}</h3>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            property.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {property.status}
                          </span>
                        </div>
                        <p className="text-blue-600 font-bold">${property.price.toLocaleString()}</p>
                        <p className="text-sm text-gray-500 mb-3">{property.location}</p>
                        <div className="flex justify-between text-sm text-gray-500 border-t pt-3">
                          <span>{property.bedrooms} Beds</span>
                          <span>{property.bathrooms} Baths</span>
                          <span>{property.area} sqft</span>
                        </div>
                        <div className="mt-3 flex space-x-2">
                          <Link
                            to={`/properties/${property.id}`}
                            className="flex-1 text-center px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                          >
                            View
                          </Link>
                          <button className="px-3 py-2 border border-gray-300 text-gray-600 rounded-lg text-sm hover:bg-gray-50">
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Appointments Tab */}
            {activeTab === 'appointments' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Appointments</h2>
                  <div className="flex items-center space-x-2">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                      <option>All Types</option>
                      {appointmentTypes.map(type => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                      <option>All Status</option>
                      <option>Pending</option>
                      <option>Confirmed</option>
                      <option>Completed</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  {user.appointments.map(apt => {
                    const property = properties.find(p => p.id === apt.propertyId);
                    return (
                      <div key={apt.id} className="border rounded-lg p-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-semibold">{apt.customerName.charAt(0)}</span>
                            </div>
                            <div className="ml-4">
                              <p className="font-semibold text-gray-900">{apt.customerName}</p>
                              <p className="text-sm text-gray-500">{property?.title}</p>
                              <div className="flex items-center mt-1 text-sm text-gray-500">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {apt.date} at {apt.time}
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 sm:mt-0 flex items-center space-x-3">
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                              {apt.type}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              apt.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {apt.status}
                            </span>
                            {apt.status === 'Pending' && (
                              <button className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">
                                Confirm
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Performance Tab */}
            {activeTab === 'performance' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-sm text-gray-500 mb-2">Total Sales (This Year)</h3>
                    <p className="text-3xl font-bold text-gray-900">$2.4M</p>
                    <p className="text-sm text-green-600 mt-2">↑ 12% from last year</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-sm text-gray-500 mb-2">Properties Sold</h3>
                    <p className="text-3xl font-bold text-gray-900">18</p>
                    <p className="text-sm text-green-600 mt-2">↑ 3 more than last year</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-sm text-gray-500 mb-2">Average Rating</h3>
                    <p className="text-3xl font-bold text-gray-900">4.9/5</p>
                    <div className="flex text-yellow-400 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Sales Performance</h2>
                  <div className="h-64 flex items-end justify-between space-x-2">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => {
                      const heights = [40, 60, 45, 80, 65, 90, 75, 85, 70, 95, 60, 50];
                      return (
                        <div key={month} className="flex flex-col items-center flex-1">
                          <div 
                            className="w-full bg-blue-500 rounded-t"
                            style={{ height: `${heights[index]}%` }}
                          ></div>
                          <span className="text-xs text-gray-500 mt-2">{month}</span>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-4">
                    (Simulated performance data for demonstration)
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Customer Reviews</h2>
                  <div className="space-y-4">
                    {[
                      { name: 'John D.', rating: 5, comment: 'Excellent service! Sarah helped us find our dream home.' },
                      { name: 'Emma R.', rating: 5, comment: 'Very professional and responsive. Highly recommend!' },
                      { name: 'Michael S.', rating: 4, comment: 'Great experience overall. Very knowledgeable agent.' }
                    ].map((review, index) => (
                      <div key={index} className="border-b pb-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium text-gray-900">{review.name}</p>
                          <div className="flex text-yellow-400">
                            {[...Array(review.rating)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentDashboard;
