# ERP System Demo

A web-based ERP (Enterprise Resource Planning) system built with HTML, CSS, JavaScript, Node.js, Express, and SQLite.

## Features

- **Dashboard**: Overview of key metrics and recent activities
- **Inventory Management**: Track stock levels and manage inventory transactions
- **Product Management**: Add, edit, and delete products
- **Supplier Management**: Manage supplier information
- **Order Management**: Create and track customer orders
- **User Authentication**: Secure login system

## System Requirements

- Node.js (v14 or higher)
- NPM (v6 or higher)

## Installation

1. Clone the repository or download the source code
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Running the Application

Start the server:

```bash
npm start
```

The application will be available at http://localhost:3000

## Default Login Credentials

- **Username**: admin
- **Password**: admin

## Project Structure

- `server.js`: Main server file with Express configuration and API routes
- `public/`: Frontend files
  - `index.html`: Login page
  - `dashboard.html`: Main dashboard
  - `products.html`: Product management
  - `suppliers.html`: Supplier management
  - `inventory.html`: Inventory management
  - `purchase-orders.html`: Order management
  - `css/`: Stylesheet files
  - `js/`: JavaScript files for frontend functionality
- `database.db`: SQLite database file (created automatically on first run)

## API Endpoints

- `/api/login`: User authentication
- `/api/logout`: User logout
- `/api/user`: Get current user information
- `/api/products`: Product CRUD operations
- `/api/suppliers`: Supplier CRUD operations
- `/api/orders`: Order CRUD operations
- `/api/transactions`: Inventory transaction operations
- `/api/dashboard`: Dashboard data

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: SQLite
- **Authentication**: Express Session

## Mobile Responsiveness

The application is designed to be responsive and work on various screen sizes, including mobile devices.

## Security Features

- Session-based authentication
- Password protection
- Role-based access control
