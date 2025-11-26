# TES Properties - Real Estate Platform Frontend

A modern, responsive real estate platform frontend built with React and Tailwind CSS. This application serves as the foundation for the TES Properties real estate platform, featuring customer, agent, and admin dashboards with simulated business logic flows.

![TES Properties](https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173`

## 📋 Table of Contents

- [Features](#features)
- [Business Logic & Flows](#business-logic--flows)
- [Application Architecture](#application-architecture)
- [Pages & Routes](#pages--routes)
- [Simulated Features](#simulated-features)
- [Backend API Notes](#backend-api-notes)
- [Development Guide](#development-guide)
- [Project Structure](#project-structure)

## ✨ Features

### Core Features
- **Modern Landing Page** - Hero section, featured properties, company information, and agent showcase
- **Property Listings** - Filterable property grid with search, type, price, and status filters
- **Property Details** - Full property information with booking modal and status flow visualization
- **User Authentication** - Login and registration pages with role selection (Customer/Agent)
- **Role-Based Dashboards** - Separate dashboards for customers, agents, and administrators

### Technical Features
- React 18 with Vite for fast development
- Tailwind CSS for responsive styling
- React Router for client-side navigation
- Mobile-first responsive design
- Clean, professional UI/UX

## 🔄 Business Logic & Flows

### User Roles

#### 1. Customer
- Browse and search properties
- Save favorite properties
- Book property viewings
- View assigned agent information
- Manage appointments
- Update profile preferences

#### 2. Agent
- Manage assigned customers
- Handle property listings
- Confirm/reschedule appointments
- View performance metrics
- Track customer activity

#### 3. Administrator
- Manage all agents and customers
- Assign customers to agents
- Update property statuses
- Handle competing offers (race model)
- Manage blacklist

### Customer-Agent Assignment Flow

```
1. Customer Registration
   ↓
2. Admin Reviews New Customer
   ↓
3. Admin Assigns Agent Based On:
   - Agent workload
   - Agent specialization
   - Customer preferences
   - Geographic location
   ↓
4. Customer Notified of Assigned Agent
   ↓
5. Agent Receives Customer in Dashboard
```

### Appointment/Booking System

```
1. Customer Browses Properties
   ↓
2. Customer Requests Viewing
   - Select appointment type (Viewing, Virtual Tour, Consultation)
   - Choose preferred date/time
   - Add optional message
   ↓
3. Agent Receives Booking Request (Status: Pending)
   ↓
4. Agent Confirms/Reschedules (Status: Confirmed)
   ↓
5. Both Parties Notified
   ↓
6. Appointment Takes Place
   ↓
7. Follow-up Actions (Offer, Another Viewing, etc.)
```

### Property Status Flow (Hold/Stages)

```
Available → On Hold → Under Review → Pending Offer → Offer Accepted → In Contract → Sold
```

**Status Definitions:**
- **Available**: Property is on the market
- **On Hold**: Temporarily reserved (usually during viewing period)
- **Under Review**: Multiple interested parties, reviewing options
- **Pending Offer**: Offer submitted, awaiting response
- **Offer Accepted**: Offer accepted, proceeding to contract
- **In Contract**: Legal paperwork in progress
- **Sold**: Transaction complete

### Race Model (Competing Offers)

When multiple customers are interested in the same property:

```
1. Multiple Offers Received on Same Property
   ↓
2. Property Status → "On Hold"
   ↓
3. Admin/Agent Reviews All Offers
   - Timestamp of submission
   - Offer amount
   - Buyer qualifications
   ↓
4. Seller's Decision:
   - Option A: First Qualified Offer wins
   - Option B: Highest Bid wins
   - Option C: Best Terms wins
   ↓
5. Winner Notified → Status → "Offer Accepted"
   ↓
6. Other Customers Notified (Offer Not Accepted)
   ↓
7. Process Continues with Winning Customer
```

### Blacklist System

Users can be blacklisted for:
- Fraudulent activity
- Multiple no-shows
- Policy violations
- Abusive behavior

**Blacklist Effects:**
- Cannot create new accounts
- All active appointments cancelled
- Cannot submit offers
- Flagged in system for all agents/admin

## 📱 Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with hero, featured properties, agents |
| `/properties` | Properties | Property listing with filters |
| `/properties/:id` | PropertyDetails | Individual property details and booking |
| `/login` | Login | User authentication |
| `/register` | Register | New user registration |
| `/about` | About | Company information |
| `/contact` | Contact | Contact form and info |
| `/dashboard/customer` | CustomerDashboard | Customer portal |
| `/dashboard/agent` | AgentDashboard | Agent portal |
| `/dashboard/admin` | AdminDashboard | Admin portal |

## 🎭 Simulated Features

The following features are simulated in the frontend and would connect to a backend API in production:

### Authentication
- Login/logout (simulated with local state)
- Registration (form validation only)
- Role-based access (demo accounts provided)

**Demo Accounts:**
- `customer@demo.com` → Customer Dashboard
- `agent@demo.com` → Agent Dashboard
- `admin@demo.com` → Admin Dashboard
- Use any password to login

### Data Management
- Property listings (mock data in `src/data/mockData.js`)
- User profiles (mock data)
- Appointments (mock data)
- Saved properties (mock data)

### Actions
- Booking appointments (shows alert, no persistence)
- Saving properties (no persistence)
- Profile updates (no persistence)
- Status changes (no persistence)
- Customer-agent assignment (visual only)
- Offer management (visual only)
- Blacklist management (visual only)

## 🔌 Backend API Notes

### Required Endpoints for Full Implementation

#### Authentication
```
POST /api/auth/login
POST /api/auth/register
POST /api/auth/logout
GET  /api/auth/me
```

#### Users
```
GET    /api/users/:id
PUT    /api/users/:id
GET    /api/users/customers
GET    /api/users/agents
POST   /api/users/blacklist
DELETE /api/users/blacklist/:id
```

#### Properties
```
GET    /api/properties
GET    /api/properties/:id
POST   /api/properties
PUT    /api/properties/:id
PATCH  /api/properties/:id/status
GET    /api/properties/featured
```

#### Appointments
```
GET    /api/appointments
POST   /api/appointments
PUT    /api/appointments/:id
DELETE /api/appointments/:id
PATCH  /api/appointments/:id/status
```

#### Assignments
```
POST   /api/assignments
GET    /api/assignments/agent/:agentId
GET    /api/assignments/customer/:customerId
PUT    /api/assignments/:id
```

#### Offers
```
GET    /api/offers/property/:propertyId
POST   /api/offers
PUT    /api/offers/:id
PATCH  /api/offers/:id/status
```

### Database Schema Suggestions

```sql
-- Users table (customers, agents, admins)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  role ENUM('customer', 'agent', 'admin') NOT NULL,
  is_verified BOOLEAN DEFAULT FALSE,
  is_blacklisted BOOLEAN DEFAULT FALSE,
  blacklist_reason TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Properties table
CREATE TABLE properties (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  type VARCHAR(50),
  price DECIMAL(12,2),
  bedrooms INT,
  bathrooms INT,
  area INT,
  location VARCHAR(255),
  status ENUM('available', 'on_hold', 'under_review', 'pending_offer', 'offer_accepted', 'in_contract', 'sold'),
  agent_id INT REFERENCES users(id),
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Customer-Agent Assignments
CREATE TABLE assignments (
  id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES users(id),
  agent_id INT REFERENCES users(id),
  status ENUM('active', 'on_hold', 'completed'),
  assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Appointments
CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES users(id),
  agent_id INT REFERENCES users(id),
  property_id INT REFERENCES properties(id),
  appointment_type VARCHAR(50),
  scheduled_date DATE,
  scheduled_time TIME,
  status ENUM('pending', 'confirmed', 'cancelled', 'completed'),
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Offers
CREATE TABLE offers (
  id SERIAL PRIMARY KEY,
  property_id INT REFERENCES properties(id),
  customer_id INT REFERENCES users(id),
  amount DECIMAL(12,2),
  status ENUM('pending', 'accepted', 'rejected', 'countered'),
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Saved Properties
CREATE TABLE saved_properties (
  id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES users(id),
  property_id INT REFERENCES properties(id),
  saved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🛠 Development Guide

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation
```bash
git clone <repository-url>
cd real-estate-front-end
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Linting
```bash
npm run lint
```

### Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Navigation component
│   ├── Footer.jsx        # Footer component
│   └── PropertyCard.jsx  # Property listing card
├── pages/
│   ├── Home.jsx          # Landing page
│   ├── Properties.jsx    # Property listing
│   ├── PropertyDetails.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── dashboard/
│       ├── CustomerDashboard.jsx
│       ├── AgentDashboard.jsx
│       └── AdminDashboard.jsx
├── data/
│   └── mockData.js       # Mock data for simulation
├── App.jsx               # Main app with routing
├── main.jsx              # Entry point
└── index.css             # Tailwind CSS imports
```

### Adding New Features

1. **New Page**: Create component in `src/pages/`, add route in `App.jsx`
2. **New Component**: Create in `src/components/`
3. **New Data**: Add to `src/data/mockData.js`

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing (4, 6, 8 for padding/margin)
- Use blue-600/700 for primary actions
- Use gray-50/100 for backgrounds

## 📝 Environment Variables

Create a `.env` file for backend integration:

```env
VITE_API_URL=http://localhost:3001/api
VITE_APP_NAME=TES Properties
```

## 🤝 Contributing

1. Create a feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

## 📄 License

MIT License - Feel free to use this code for your projects.

---

Built with ❤️ for TES Properties
