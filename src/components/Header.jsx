import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-900 text-white p-5 text-center">
      <h1 className="text-4xl font-bold">Stroke Awareness Hub</h1>
      <nav className="mt-3 space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/symptoms" className="hover:underline">Symptoms</Link>
        <Link to="/prevention" className="hover:underline">Prevention</Link>
        <Link to="/treatment" className="hover:underline">Treatment</Link>
      </nav>
      <hr className="mt-4 border-white" />
    </header>
  );
}

export default Header;
