import React from "react";

function Section({ title, children, id, highlighted }) {
  return (
    <section
      id={id}
      className={`p-4 my-6 rounded shadow-md ${
        highlighted ? "bg-red-100 border-l-4 border-red-600" : "bg-white"
      }`}
    >
      <h3 className="text-2xl font-semibold">{title}</h3>
      <div className="mt-2 text-justify">{children}</div>
    </section>
  );
}

export default Section;
