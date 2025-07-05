import React from "react";

function HeroSection({ onHighlight }) {
  return (
    <section className="bg-yellow-100 p-6 text-center shadow-md animate-pulse">
      <h2 className="text-3xl font-bold">Understanding Stroke</h2>
      <p className="mt-4 text-lg">
        Stroke is a medical emergency. Recognizing symptoms early can save lives. Explore this site to learn how.
      </p>
      <button
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={onHighlight}
      >
        Highlight Key Info
      </button>
    </section>
  );
}

export default HeroSection;
