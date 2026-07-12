# LeadFlow CRM

A professional, production-ready **Client Lead Management System (Mini CRM)** for tracking, managing, and converting client leads. Built with a modern SaaS dashboard aesthetic inspired by HubSpot and Zoho CRM.

---

## Project Overview

LeadFlow CRM is a full-stack lead management application where authenticated admins can manage client leads submitted through a website contact form. The system provides a complete lead lifecycle — from new inquiries to contacted prospects to converted clients — with real-time analytics, follow-up notes, and a polished dashboard.

**Default Admin Login:**
- **Email:** `admin@leadflow.com`
- **Password:** `Admin@123`

---

## Features

### Authentication
- JWT-based secure login (passwords hashed with bcrypt)
- Protected routes — all pages require authentication
- Session persistence with automatic token refresh
- Default admin account auto-seeded on first run

### Dashboard
- Stat cards: Total Leads, New Leads, Contacted Leads, Converted Leads
- Conversion rate banner
- Bar chart — leads by source
- Pie chart — lead status distribution
- Recent leads table

### Leads Management
- Full CRUD (Create, Read, Update, Delete) operations
- Searchable table (name, email, company, phone)
- Filter by status (All / New / Contacted / Converted)
- Sort by newest or oldest
- Pagination (8 leads per page)
- Color-coded status badges (Blue = New, Orange = Contacted, Green = Converted)
- Delete confirmation modal
- Export leads to CSV

### Lead Details
- Full contact information display
- Inline status changer
- Follow-up notes timeline (chronological)
- Add notes with timestamps
- Activity history

### Analytics
- 14-day lead activity trend (area chart)
- Leads by source (horizontal bar chart)
- Status distribution (pie chart with labels)
- KPI cards: Total, Conversion Rate, In Pipeline, Won

### UI/UX
- Professional SaaS dashboard design
- White cards with soft shadows and rounded corners
- Gradient buttons
- Sidebar navigation (collapsible on mobile)
- Smooth hover animations and micro-interactions
- Loading spinners
- Toast notifications (success, error, info)
- Dark mode toggle (persisted to localStorage)
- Profile dropdown with sign-out
- Fully responsive — mobile, tablet, and desktop

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js (Vite) + TypeScript |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Icons | Lucide React |
| Routing | React Router v6 |
| Backend | Supabase (PostgreSQL + Auth + Edge Functions) |
| Database | PostgreSQL (via Supabase) |
| Auth | Supabase Auth (JWT + bcrypt password hashing) |
| Data Access | Supabase JS Client |

> **Note:** This project was originally specced as MERN (MongoDB/Express/Node/React). It has been implemented on **Supabase** (PostgreSQL + managed auth) for production-grade reliability. All requested features — JWT auth, bcrypt password hashing, protected routes, REST-style CRUD, and data models — are fully implemented using Supabase's managed backend.

---

## Installation

### Prerequisites
- Node.js 18+
- npm

### Clone & Install
```bash
git clone <repository-url>
cd leadflow-crm
npm install
```

---

## Running the Frontend

```bash
npm run dev
```
The app runs at `http://localhost:5173`.

### Build for Production
```bash
npm run build
npm run preview
```

### Type Checking
```bash
npm run typecheck
```

---

## Running the Backend

The backend is powered by **Supabase** — no local server to run. The database, auth, and edge functions are managed in the cloud.

### Database Setup
The schema is applied via Supabase migrations. A `seed` edge function is also deployed to auto-create the default admin and 15 sample leads on first run.

### Environment Variables

The following are pre-configured in `.env`:

```
VITE_SUPABASE_URL=<your-supabase-project-url>
VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

> Do not expose the service role key in the frontend.

---

## API Endpoints

Data access is handled through the Supabase JS client. The equivalent REST-style operations:

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/login` | Sign in (Supabase Auth) |
| GET | `/api/leads` | Fetch all leads |
| GET | `/api/leads/:id` | Fetch a single lead |
| POST | `/api/leads` | Create a new lead |
| PUT | `/api/leads/:id` | Update a lead |
| DELETE | `/api/leads/:id` | Delete a lead |
| PUT | `/api/leads/:id/status` | Update lead status |
| POST | `/api/leads/:id/notes` | Add a follow-up note |

All lead operations require a valid JWT (authenticated session).

---

## Database Schema

### `leads` Table
| Column | Type | Description |
|--------|------|-------------|
| id | uuid (PK) | Unique identifier |
| name | text | Lead's full name |
| email | text | Lead's email |
| phone | text | Lead's phone number |
| company | text | Lead's company |
| source | text | Lead source (Website, Referral, etc.) |
| status | text | New / Contacted / Converted |
| notes | jsonb | Array of `{ text, createdAt }` objects |
| created_at | timestamptz | Record creation |
| updated_at | timestamptz | Last modification |

### Admin (Supabase Auth)
| Field | Value |
|-------|-------|
| Email | `admin@leadflow.com` |
| Password | `Admin@123` (bcrypt-hashed) |
| Metadata | `{ name: "Admin", role: "admin" }` |

### Row Level Security (RLS)
- RLS enabled on `leads` table
- All CRUD policies scoped to `authenticated` role only
- Unauthenticated (anon) requests are blocked

---

## Folder Structure

```
leadflow-crm/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── EmptyState.tsx
│   │   ├── Layout.tsx       # Sidebar + topbar layout
│   │   ├── Modal.tsx
│   │   ├── Pagination.tsx
│   │   ├── ProtectedRoute.tsx
│   │   ├── Spinner.tsx
│   │   ├── StatCard.tsx
│   │   └── StatusBadge.tsx
│   ├── contexts/            # React contexts
│   │   ├── AuthContext.tsx
│   │   ├── ThemeContext.tsx
│   │   └── ToastContext.tsx
│   ├── hooks/
│   │   └── useLeads.ts      # Data fetching hook
│   ├── lib/
│   │   └── supabase.ts      # Supabase client
│   ├── pages/               # Page components
│   │   ├── AnalyticsPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── LeadDetailsPage.tsx
│   │   ├── LeadFormPage.tsx
│   │   ├── LeadsPage.tsx
│   │   └── LoginPage.tsx
│   ├── services/
│   │   └── leadService.ts   # Data access layer
│   ├── types/
│   │   └── lead.ts          # TypeScript types & constants
│   ├── utils/
│   │   └── format.ts        # Date formatting & CSV export
│   ├── App.tsx              # Routes & providers
│   ├── main.tsx
│   └── index.css            # Tailwind + custom styles
├── supabase/
│   └── functions/
│       └── seed/            # Edge function: auto-seed admin & leads
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Screenshots

> Add screenshots of the following pages after running the app:

1. **Login Page** — Split-screen design with brand panel and sign-in form
2. **Dashboard** — Stat cards, conversion banner, charts, recent leads
3. **Leads Page** — Full table with search, filter, sort, pagination
4. **Lead Details** — Contact info, status changer, notes timeline
5. **Add/Edit Lead** — Validated form with icon inputs
6. **Analytics** — Trend chart, source breakdown, status distribution
7. **Dark Mode** — Full dark theme across all pages

---

## Future Improvements

- Multi-user support with role-based access (admin, sales rep)
- Drag-and-drop kanban board for lead status
- Email integration (send emails directly from the CRM)
- Lead scoring and priority flags
- Customizable pipeline stages
- Activity reminders and follow-up scheduling
- Webhook integrations (Slack, Zapier)
- Bulk lead import via CSV upload
- Advanced reporting with date range filters
- Lead assignment to team members
- Two-factor authentication

---

## License

MIT — Built for portfolio demonstration.
#   F U T U R E _ F S _ 0 1  
 