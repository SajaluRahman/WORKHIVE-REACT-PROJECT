import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ children, allowedRoles }) => {
  // Get the token from cookies
  const token = Cookies.get('token');

  // If token not found, redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    // Decode the token
    const decoded = jwtDecode(token);

    // Check if the user role is allowed
    if (allowedRoles.includes(decoded.role)) {
      return children; // Access granted
    } else {
      return <Navigate to="/unauthorized" replace />; // Role not allowed
    }

  } catch (error) {
    console.error("Invalid token:", error);
    return <Navigate to="/login" replace />; // Token decode error
  }
};

export default ProtectedRoute;
