import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AsideTip from "./components/AsideTip";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Symptoms from "./pages/Symptoms";
import Prevention from "./pages/Prevention";
import Treatment from "./pages/Treatment";

function App() {
  const [highlighted, setHighlighted] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handles highlighting content
  const handleLearnClick = () => {
    setHighlighted(true);
  };

  // Handles newsletter form submission
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setMessage(`Thank you for subscribing, ${email}!`);
    } else {
      setMessage("Please enter a valid email.");
    }
  };

  return (
    <Router>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection onLearnClick={handleLearnClick} />

      {/* Pages Routing */}
      <Routes>
        <Route path="/" element={<Home highlighted={highlighted} />} />
        <Route path="/symptoms" element={<Symptoms highlighted={highlighted} />} />
        <Route path="/prevention" element={<Prevention highlighted={highlighted} />} />
        <Route path="/treatment" element={<Treatment highlighted={highlighted} />} />
      </Routes>

      {/* Tips Sidebar */}
      <div className="py-20 px-4 sm:px-8 md:px-16 lg:px-32">
	  <AsideTip />
	  </div>

      {/* Newsletter Subscription */}
      <section
        id="newsletter"
        className="bg-gray-100 p-6 my-10 mx-4 sm:mx-8 md:mx-16 lg:mx-32 rounded shadow"
      >
        <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 px-4 py-2 rounded w-full sm:w-auto"
            placeholder="Your email address"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
        {message && (
          <p className="mt-4 text-green-700 font-medium">{message}</p>
        )}
      </section>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;

