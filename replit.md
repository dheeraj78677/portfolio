# Portfolio Application

## Overview

This is a full-stack personal portfolio application built for Dheeraj Singh Bisht, a Salesforce Developer and Full Stack Engineer. The application showcases professional experience, skills, projects, and provides a contact form for potential clients and employers.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: Radix UI components with custom shadcn/ui styling
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js 20
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL storage
- **API Design**: RESTful API endpoints under `/api` prefix

### Database Schema
- **Users Table**: Basic user authentication (id, username, password)
- **Contact Messages Table**: Stores contact form submissions (id, name, email, message, created_at)
- **ORM**: Drizzle ORM with TypeScript-first approach and Zod schema validation

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling to sections
- **Hero Section**: Professional introduction with call-to-action buttons
- **About Section**: Personal background and journey
- **Skills Section**: Interactive skill bars with progress animations
- **Experience Section**: Timeline-based work history display
- **Projects Section**: Featured project showcase with technologies
- **Education Section**: Academic background
- **Contact Section**: Form with validation and API integration
- **Footer**: Social links and contact information

### Backend Components
- **Contact API**: Handles form submissions and stores messages
- **Resume Download**: Serves resume file (currently redirects to placeholder)
- **Database Storage**: Abstracted storage layer with memory fallback
- **Request Logging**: Comprehensive API request logging middleware
- **Error Handling**: Centralized error handling with proper HTTP status codes

## Data Flow

1. **Client Request**: User interacts with React components
2. **Form Validation**: Zod schemas validate input on client-side
3. **API Call**: TanStack Query manages HTTP requests to Express backend
4. **Server Processing**: Express routes handle business logic
5. **Database Operations**: Drizzle ORM executes PostgreSQL queries
6. **Response**: JSON responses sent back to client
7. **State Update**: TanStack Query updates component state
8. **UI Feedback**: Toast notifications inform users of success/error states

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, ReactDOM
- **Routing**: wouter
- **State Management**: @tanstack/react-query
- **UI Components**: @radix-ui/* components
- **Form Handling**: react-hook-form, @hookform/resolvers
- **Validation**: zod, drizzle-zod
- **Styling**: tailwindcss, class-variance-authority, clsx
- **Icons**: lucide-react
- **Utilities**: date-fns, embla-carousel-react

### Backend Dependencies
- **Server Framework**: express
- **Database**: @neondatabase/serverless, drizzle-orm
- **Session Management**: connect-pg-simple
- **Development**: tsx, esbuild
- **Database Migrations**: drizzle-kit

### Development Tools
- **Build System**: Vite with React plugin
- **TypeScript**: Full TypeScript support with strict mode
- **Linting**: ESLint configuration
- **Development Server**: Concurrent frontend and backend development
- **Environment**: Replit-optimized with custom plugins

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations applied via `npm run db:push`

### Environment Configuration
- **Development**: `npm run dev` - runs server with tsx and Vite dev server
- **Production**: `npm run start` - serves built application
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Replit Configuration
- **Modules**: nodejs-20, web, postgresql-16
- **Deployment**: Autoscale deployment target
- **Port**: Application serves on port 5000, mapped to external port 80
- **Build Process**: Automated build and deployment pipeline

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
- June 27, 2025. Added Splitwise Clone project with PDF documentation download
- June 27, 2025. Added Shopping Cart App project with video streaming functionality
- June 27, 2025. Updated LinkedIn profile URL and resume download functionality
- June 27, 2025. Added TeachTeam GitHub repository link
- June 28, 2025. Fixed video playback issues by implementing professional download modal for AVI format compatibility
- June 28, 2025. Ready for deployment with complete portfolio functionality
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```