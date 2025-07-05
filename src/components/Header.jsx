import React from "react";

function Header() {
  return (
    <header className="bg-blue-900 text-white p-5 text-center">
      <h1 className="text-4xl font-bold">Stroke Awareness Hub</h1>
      <nav className="mt-3 space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/symptoms" className="hover:underline">Symptoms</a>
        <a href="/prevention" className="hover:underline">Prevention</a>
        <a href="/treatment" className="hover:underline">Treatment</a>
      </nav>
      <hr className="mt-4 border-white" />
    </header>
  );
}

export default Header;
