// Mock Data for TES Properties Real Estate Platform

export const properties = [
  {
    id: 1,
    title: "Luxury Penthouse Suite",
    type: "Apartment",
    price: 850000,
    location: "Downtown Metro City",
    bedrooms: 3,
    bathrooms: 2,
    area: 2200,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    featured: true,
    status: "Available",
    description: "Stunning penthouse with panoramic city views, modern finishes, and premium amenities.",
    agent: { id: 1, name: "Sarah Johnson" }
  },
  {
    id: 2,
    title: "Modern Family Home",
    type: "House",
    price: 650000,
    location: "Greenview Suburbs",
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    featured: true,
    status: "Available",
    description: "Spacious family home with modern kitchen, large backyard, and excellent school district.",
    agent: { id: 2, name: "Michael Chen" }
  },
  {
    id: 3,
    title: "Cozy Studio Apartment",
    type: "Apartment",
    price: 220000,
    location: "Arts District",
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    featured: true,
    status: "Available",
    description: "Perfect starter home in vibrant neighborhood with cafes and galleries nearby.",
    agent: { id: 1, name: "Sarah Johnson" }
  },
  {
    id: 4,
    title: "Waterfront Villa",
    type: "Villa",
    price: 1250000,
    location: "Seaside Heights",
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    featured: false,
    status: "On Hold",
    description: "Exclusive waterfront property with private dock, infinity pool, and breathtaking ocean views.",
    agent: { id: 3, name: "Amanda Torres" }
  },
  {
    id: 5,
    title: "Urban Loft",
    type: "Loft",
    price: 380000,
    location: "Industrial Quarter",
    bedrooms: 2,
    bathrooms: 1,
    area: 1400,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    featured: false,
    status: "Available",
    description: "Converted warehouse loft with exposed brick, high ceilings, and open floor plan.",
    agent: { id: 2, name: "Michael Chen" }
  },
  {
    id: 6,
    title: "Garden Townhouse",
    type: "Townhouse",
    price: 475000,
    location: "Rose Park",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800",
    featured: false,
    status: "Available",
    description: "Charming townhouse with private garden, updated kitchen, and community amenities.",
    agent: { id: 1, name: "Sarah Johnson" }
  }
];

export const agents = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@tesproperties.com",
    phone: "(555) 123-4567",
    specialization: "Luxury Apartments",
    rating: 4.9,
    salesCount: 127,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@tesproperties.com",
    phone: "(555) 234-5678",
    specialization: "Family Homes",
    rating: 4.8,
    salesCount: 98,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
  },
  {
    id: 3,
    name: "Amanda Torres",
    email: "amanda.torres@tesproperties.com",
    phone: "(555) 345-6789",
    specialization: "Waterfront Properties",
    rating: 4.7,
    salesCount: 85,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400"
  }
];

export const mockUser = {
  customer: {
    id: 1,
    name: "John Doe",
    email: "john.doe@email.com",
    role: "customer",
    assignedAgent: agents[0],
    savedProperties: [1, 3],
    appointments: [
      {
        id: 1,
        propertyId: 1,
        date: "2024-02-15",
        time: "10:00 AM",
        status: "Confirmed",
        type: "Viewing"
      },
      {
        id: 2,
        propertyId: 3,
        date: "2024-02-18",
        time: "2:00 PM",
        status: "Pending",
        type: "Viewing"
      }
    ]
  },
  agent: {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@tesproperties.com",
    role: "agent",
    assignedCustomers: [
      { id: 1, name: "John Doe", status: "Active" },
      { id: 2, name: "Jane Smith", status: "Active" },
      { id: 3, name: "Bob Wilson", status: "On Hold" }
    ],
    listings: [1, 3, 6],
    appointments: [
      {
        id: 1,
        customerName: "John Doe",
        propertyId: 1,
        date: "2024-02-15",
        time: "10:00 AM",
        status: "Confirmed",
        type: "Viewing"
      },
      {
        id: 2,
        customerName: "Jane Smith",
        propertyId: 3,
        date: "2024-02-16",
        time: "11:00 AM",
        status: "Pending",
        type: "Viewing"
      }
    ]
  },
  admin: {
    id: 1,
    name: "Admin User",
    email: "admin@tesproperties.com",
    role: "admin"
  }
};

// Status flow stages for properties
export const propertyStatuses = [
  "Available",
  "On Hold",
  "Under Review",
  "Pending Offer",
  "Offer Accepted",
  "In Contract",
  "Sold"
];

// Appointment types
export const appointmentTypes = [
  "Viewing",
  "Open House",
  "Virtual Tour",
  "Consultation",
  "Contract Signing"
];

// Mock blacklist (for demonstration)
export const blacklistedUsers = [
  { id: 99, name: "Bad Actor", reason: "Fraudulent activity", date: "2024-01-15" }
];

// Race model simulation - competing offers
export const competingOffers = [
  {
    propertyId: 4,
    offers: [
      { id: 1, customerId: 1, amount: 1200000, status: "Pending", timestamp: "2024-02-10T10:30:00" },
      { id: 2, customerId: 2, amount: 1225000, status: "Pending", timestamp: "2024-02-10T11:45:00" }
    ]
  }
];
