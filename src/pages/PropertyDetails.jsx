import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/mockData';

function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    type: 'Viewing',
    message: ''
  });

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Property Not Found</h1>
          <Link to="/properties" className="text-blue-600 hover:text-blue-700">
            ← Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const handleBooking = (e) => {
    e.preventDefault();
    alert('Booking request submitted! (This is a simulated action - in production, this would send to the backend)');
    setShowBookingModal(false);
    setBookingData({ date: '', time: '', type: 'Viewing', message: '' });
  };

  const statusColors = {
    'Available': 'bg-green-100 text-green-800',
    'On Hold': 'bg-yellow-100 text-yellow-800',
    'Under Review': 'bg-blue-100 text-blue-800',
    'Pending Offer': 'bg-purple-100 text-purple-800',
    'Offer Accepted': 'bg-indigo-100 text-indigo-800',
    'In Contract': 'bg-orange-100 text-orange-800',
    'Sold': 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/properties" className="hover:text-blue-600">Properties</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{property.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2">
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden mb-6">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-64 sm:h-96 object-cover"
              />
              <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${statusColors[property.status]}`}>
                {property.status}
              </span>
              {property.featured && (
                <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
              )}
            </div>

            {/* Title and Price */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                  <p className="text-gray-500 flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {property.location}
                  </p>
                </div>
                <div className="mt-4 sm:mt-0">
                  <p className="text-3xl font-bold text-blue-600">${property.price.toLocaleString()}</p>
                  <p className="text-gray-500 text-sm">{property.type}</p>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 border-t border-b py-4 mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{property.bedrooms}</p>
                  <p className="text-gray-500 text-sm">Bedrooms</p>
                </div>
                <div className="text-center border-x">
                  <p className="text-2xl font-bold text-gray-900">{property.bathrooms}</p>
                  <p className="text-gray-500 text-sm">Bathrooms</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{property.area}</p>
                  <p className="text-gray-500 text-sm">Sq Ft</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>
            </div>

            {/* Property Status Flow (Simulated) */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Property Status Flow</h2>
              <p className="text-sm text-gray-500 mb-4">
                (Simulated visualization of property stages)
              </p>
              <div className="flex flex-wrap gap-2">
                {['Available', 'On Hold', 'Pending Offer', 'Offer Accepted', 'In Contract', 'Sold'].map((status, index) => (
                  <div
                    key={status}
                    className={`flex items-center ${index < ['Available', 'On Hold', 'Pending Offer', 'Offer Accepted', 'In Contract', 'Sold'].indexOf(property.status) + 1 ? 'text-blue-600' : 'text-gray-400'}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      status === property.status ? 'bg-blue-600 text-white' : 
                      index < ['Available', 'On Hold', 'Pending Offer', 'Offer Accepted', 'In Contract', 'Sold'].indexOf(property.status) ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'
                    }`}>
                      {index + 1}
                    </div>
                    <span className="ml-2 text-sm hidden sm:inline">{status}</span>
                    {index < 5 && <span className="mx-2 hidden sm:inline">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Agent & Actions */}
          <div className="lg:col-span-1">
            {/* Agent Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Listed By</h2>
              <div className="flex items-center mb-4">
                <img
                  src={`https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100`}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{property.agent.name}</p>
                  <p className="text-blue-600 text-sm">TES Properties Agent</p>
                </div>
              </div>
              <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors mb-2">
                Contact Agent
              </button>
              <p className="text-xs text-gray-500 text-center">
                (Contact form simulated - would send to backend)
              </p>
            </div>

            {/* Book Viewing */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Schedule a Viewing</h2>
              <p className="text-gray-600 text-sm mb-4">
                Book an appointment to see this property in person.
              </p>
              <button
                onClick={() => setShowBookingModal(true)}
                className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Appointment
              </button>
            </div>

            {/* Save Property */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Save Property
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                (Requires login - simulated)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Book Appointment</h3>
              <button 
                onClick={() => setShowBookingModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleBooking}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Appointment Type</label>
                <select
                  value={bookingData.type}
                  onChange={(e) => setBookingData({...bookingData, type: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Viewing">Property Viewing</option>
                  <option value="Virtual Tour">Virtual Tour</option>
                  <option value="Consultation">Consultation</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                <input
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                <select
                  value={bookingData.time}
                  onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  value={bookingData.message}
                  onChange={(e) => setBookingData({...bookingData, message: e.target.value})}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any special requests..."
                ></textarea>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowBookingModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Request
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-3">
                This is a simulated booking flow. In production, this would connect to the backend.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyDetails;
