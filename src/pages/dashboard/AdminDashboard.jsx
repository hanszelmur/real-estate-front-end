import { useState } from 'react';
import { properties, agents, mockUser, propertyStatuses, blacklistedUsers, competingOffers } from '../../data/mockData';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const user = mockUser.admin;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'agents', label: 'Agent Management', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { id: 'customers', label: 'Customer Assignment', icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z' },
    { id: 'properties', label: 'Property Status', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { id: 'offers', label: 'Race Model / Offers', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { id: 'blacklist', label: 'Blacklist', icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-gray-300">Welcome back, {user.name}</p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-600 text-white">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Administrator
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
                      ? 'bg-gray-800 text-white'
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
                        <p className="text-sm text-gray-500">Total Properties</p>
                        <p className="text-3xl font-bold text-gray-900">{properties.length}</p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Active Agents</p>
                        <p className="text-3xl font-bold text-gray-900">{agents.length}</p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Total Customers</p>
                        <p className="text-3xl font-bold text-gray-900">156</p>
                      </div>
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Pending Offers</p>
                        <p className="text-3xl font-bold text-gray-900">{competingOffers[0]?.offers.length || 0}</p>
                      </div>
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* System Status */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">System Status</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-green-700 font-medium">All Systems Operational</span>
                      </div>
                      <p className="text-sm text-green-600 mt-1">Last checked: 2 mins ago</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-blue-700 font-medium">Database Connected</span>
                      </div>
                      <p className="text-sm text-blue-600 mt-1">Response time: 45ms</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-purple-700 font-medium">API Active</span>
                      </div>
                      <p className="text-sm text-purple-600 mt-1">Uptime: 99.9%</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    (System status is simulated - would show real backend health in production)
                  </p>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">New customer John Doe assigned to Sarah Johnson</p>
                        <p className="text-xs text-gray-500">10 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">Property #4 status changed to "On Hold"</p>
                        <p className="text-xs text-gray-500">1 hour ago</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                      <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">New offer received for Waterfront Villa ($1,225,000)</p>
                        <p className="text-xs text-gray-500">3 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-red-50 rounded-lg">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">User "Bad Actor" added to blacklist</p>
                        <p className="text-xs text-gray-500">Yesterday</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Agent Management Tab */}
            {activeTab === 'agents' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">Agent Management</h2>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    + Add New Agent
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Agent</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Specialization</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customers</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {agents.map(agent => (
                        <tr key={agent.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img className="w-10 h-10 rounded-full object-cover" src={agent.image} alt="" />
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{agent.name}</div>
                                <div className="text-sm text-gray-500">{agent.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {agent.specialization}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {5 + agent.id * 3}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-sm text-gray-900">{agent.rating}</span>
                              <svg className="w-4 h-4 text-yellow-400 ml-1 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                            <button className="text-red-600 hover:text-red-800">Suspend</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  Agent approval requires admin verification. New agents are reviewed before activation.
                </p>
              </div>
            )}

            {/* Customer Assignment Tab */}
            {activeTab === 'customers' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Customer-Agent Assignment</h2>
                  <p className="text-gray-600 mb-6">
                    Assign customers to agents based on workload, specialization, and customer preferences.
                    The system can auto-assign or you can manually assign customers.
                  </p>
                  
                  {/* Assignment Form */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Select Customer</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        <option>-- Select Customer --</option>
                        <option>John Doe (Unassigned)</option>
                        <option>Jane Smith (Sarah Johnson)</option>
                        <option>Bob Wilson (Sarah Johnson)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Assign to Agent</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        <option>-- Select Agent --</option>
                        {agents.map(agent => (
                          <option key={agent.id}>{agent.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex items-end">
                      <button 
                        onClick={() => alert('Customer assigned! (Simulated)')}
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Assign Customer
                      </button>
                    </div>
                  </div>

                  {/* Current Assignments */}
                  <h3 className="font-medium text-gray-900 mb-3">Current Assignments</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assigned Agent</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {mockUser.agent.assignedCustomers.map(customer => (
                          <tr key={customer.id}>
                            <td className="px-4 py-3">{customer.name}</td>
                            <td className="px-4 py-3">Sarah Johnson</td>
                            <td className="px-4 py-3">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {customer.status}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <button className="text-blue-600 hover:text-blue-800 text-sm mr-2">Reassign</button>
                              <button className="text-gray-600 hover:text-gray-800 text-sm">View</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Property Status Tab */}
            {activeTab === 'properties' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Property Status Management</h2>
                  
                  {/* Status Flow */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-3">Status Flow</h3>
                    <div className="flex flex-wrap gap-2">
                      {propertyStatuses.map((status, index) => (
                        <div key={status} className="flex items-center">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {status}
                          </span>
                          {index < propertyStatuses.length - 1 && (
                            <svg className="w-4 h-4 text-gray-400 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Properties Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Property</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Agent</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Current Status</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Change Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {properties.map(property => (
                          <tr key={property.id}>
                            <td className="px-4 py-3">
                              <div className="flex items-center">
                                <img src={property.image} alt="" className="w-12 h-12 rounded-lg object-cover" />
                                <span className="ml-3 font-medium text-gray-900">{property.title}</span>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-gray-900">${property.price.toLocaleString()}</td>
                            <td className="px-4 py-3 text-gray-500">{property.agent.name}</td>
                            <td className="px-4 py-3">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                property.status === 'Available' ? 'bg-green-100 text-green-800' : 
                                property.status === 'On Hold' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-blue-100 text-blue-800'
                              }`}>
                                {property.status}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <select 
                                className="px-3 py-1 border border-gray-300 rounded text-sm"
                                defaultValue={property.status}
                                onChange={() => alert('Status updated! (Simulated)')}
                              >
                                {propertyStatuses.map(status => (
                                  <option key={status} value={status}>{status}</option>
                                ))}
                              </select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Race Model / Offers Tab */}
            {activeTab === 'offers' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Race Model - Competing Offers</h2>
                  <p className="text-gray-600 mb-6">
                    When multiple customers are interested in the same property, offers are managed using a race model.
                    The first qualified offer or highest bid wins based on the seller's preference.
                  </p>

                  {/* Active Competing Offers */}
                  {competingOffers.map(competition => {
                    const property = properties.find(p => p.id === competition.propertyId);
                    return (
                      <div key={competition.propertyId} className="border rounded-lg p-4 mb-4">
                        <div className="flex items-center mb-4">
                          <img src={property?.image} alt="" className="w-20 h-20 rounded-lg object-cover" />
                          <div className="ml-4">
                            <h3 className="font-semibold text-gray-900">{property?.title}</h3>
                            <p className="text-gray-500">{property?.location}</p>
                            <p className="text-blue-600 font-bold">Asking: ${property?.price.toLocaleString()}</p>
                          </div>
                        </div>
                        
                        <h4 className="font-medium text-gray-900 mb-3">Competing Offers ({competition.offers.length})</h4>
                        <div className="space-y-3">
                          {competition.offers.map((offer, index) => (
                            <div key={offer.id} className={`p-3 rounded-lg ${index === 0 ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'}`}>
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="font-medium text-gray-900">Customer #{offer.customerId}</p>
                                  <p className="text-sm text-gray-500">Submitted: {new Date(offer.timestamp).toLocaleString()}</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-lg font-bold text-gray-900">${offer.amount.toLocaleString()}</p>
                                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                    index === 1 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {index === 1 ? 'Highest Bid' : offer.status}
                                  </span>
                                </div>
                              </div>
                              <div className="mt-3 flex space-x-2">
                                <button 
                                  onClick={() => alert('Offer accepted! (Simulated)')}
                                  className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                                >
                                  Accept
                                </button>
                                <button className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700">
                                  Reject
                                </button>
                                <button className="px-3 py-1 border border-gray-300 text-gray-600 rounded text-sm hover:bg-gray-50">
                                  Counter
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Race Model Rules</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Offers are timestamped when received</li>
                      <li>• Seller can choose first qualified offer or highest bid</li>
                      <li>• All competing customers are notified of outcome</li>
                      <li>• Property is placed "On Hold" during offer review</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Blacklist Tab */}
            {activeTab === 'blacklist' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-gray-900">Blacklist Management</h2>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm">
                      + Add to Blacklist
                    </button>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Manage users who have been blocked from the platform due to policy violations,
                    fraudulent activity, or other issues.
                  </p>

                  {/* Blacklisted Users Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-red-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-red-800 uppercase">User</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-red-800 uppercase">Reason</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-red-800 uppercase">Date Added</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-red-800 uppercase">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {blacklistedUsers.map(user => (
                          <tr key={user.id} className="bg-red-50/50">
                            <td className="px-4 py-4">
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-red-200 rounded-full flex items-center justify-center">
                                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                  </svg>
                                </div>
                                <div className="ml-3">
                                  <p className="font-medium text-gray-900">{user.name}</p>
                                  <p className="text-sm text-gray-500">ID: {user.id}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-red-700">{user.reason}</td>
                            <td className="px-4 py-4 text-gray-500">{user.date}</td>
                            <td className="px-4 py-4">
                              <button 
                                onClick={() => alert('User removed from blacklist! (Simulated)')}
                                className="text-blue-600 hover:text-blue-800 text-sm mr-3"
                              >
                                Remove
                              </button>
                              <button className="text-gray-600 hover:text-gray-800 text-sm">
                                View Details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-medium text-yellow-800 mb-2">Blacklist Guidelines</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Blacklisted users cannot create new accounts</li>
                      <li>• All active appointments are automatically cancelled</li>
                      <li>• Removal requires admin approval and review</li>
                      <li>• Actions are logged for audit purposes</li>
                    </ul>
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

export default AdminDashboard;
