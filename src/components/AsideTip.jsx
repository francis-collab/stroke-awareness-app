import React from "react";

function AsideTip() {
  return (
    <aside className="bg-gray-100 p-4 rounded border-l-4 border-green-600 mt-8">
      <h4 className="font-bold text-lg mb-2">Did You Know?</h4>
      <p>
        Every 40 seconds, someone experiences a stroke. Awareness and education can reduce this number significantly.
      </p>
      <img
	  src="https://images.unsplash.com/photo-1588776814546-7a69b4d9c67a?auto=format&fit=crop&w=800&q=80"
	  alt="Doctor examining brain scans"
	  className="rounded shadow-lg w-full max-w-lg mx-auto"
	  />
	  </aside>
  );
}

export default AsideTip;
