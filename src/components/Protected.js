import React from 'react'
import { Navigate } from 'react-router-dom';


const role = JSON.parse(localStorage.getItem("role"));

function Protected({ children }) {
  if (role === 1) { 
    return <Navigate to="/login" replace />
  }
  return children
}
export default Protected;