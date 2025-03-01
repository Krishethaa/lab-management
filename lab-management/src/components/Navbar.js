import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Lab Management</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/login" className="hover:text-gray-200">Login</Link>
          <Link to="/admin" className="hover:text-gray-200">Admin</Link>
          <Link to="/faculty" className="hover:text-gray-200">Faculty</Link>
          <Link to="/student" className="hover:text-gray-200">Student</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
