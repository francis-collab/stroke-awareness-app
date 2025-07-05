import React from "react";
import Section from "../components/Section";
import AsideTip from "../components/AsideTip";

function Home({ highlighted }) {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32">
      {/* Introduction */}
      <Section id="home-intro" title="Welcome to Stroke Awareness Hub" highlighted={highlighted}>
        <article>
          <h1 className="text-4xl font-bold text-blue-700">Understanding Stroke</h1>
          <p className="mt-4 text-lg">
            Stroke is a medical emergency that occurs when blood flow to the brain is blocked or reduced. It can cause permanent damage, disability, or even death. Knowledge about stroke is vital for prevention, recognition, and recovery.
          </p>
          <br />
          <p className="text-base">
            Whether you're a student, a caregiver, or someone curious about health, this website aims to empower you with detailed insights. We cover every angle—from symptoms and causes to lifestyle tips and treatments that work.
          </p>
        </article>
        <hr className="my-6" />
        
        {/* Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div>
            <h2 className="text-2xl font-semibold">Stroke Types</h2>
            <ul className="list-disc ml-6 mt-2">
              <li><strong>Ischemic Stroke:</strong> Caused by a clot that blocks blood flow.</li>
              <li><strong>Hemorrhagic Stroke:</strong> Caused by a ruptured blood vessel.</li>
              <li><strong>Transient Ischemic Attack:</strong> A mini-stroke with temporary symptoms.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">FAST Response</h2>
            <ol className="list-decimal ml-6 mt-2">
              <li><strong>Face:</strong> Does one side droop?</li>
              <li><strong>Arms:</strong> Is one arm weak or numb?</li>
              <li><strong>Speech:</strong> Is speech slurred or confusing?</li>
              <li><strong>Time:</strong> Call emergency services immediately!</li>
            </ol>
          </div>
        </div>
      </Section>

      {/* Prevention Motivation */}
      <Section id="lifestyle" title="Why Awareness Matters" highlighted={highlighted}>
        <p>
          Stroke can affect anyone—but proactive steps reduce your risk dramatically. Learning the signs, understanding your personal health, and making lifestyle changes form the foundation of prevention.
        </p>
        <br />
        <article>
          <h3 className="text-lg font-semibold text-green-700">You Have the Power to Protect Your Brain</h3>
          <p>
            Your brain controls everything—from movement and emotions to memory and communication. A stroke threatens that balance. This platform equips you with reliable knowledge to act before it's too late.
          </p>
        </article>
      </Section>

      {/* External Resources */}
      <Section id="learn-more" title="Explore More Resources" highlighted={highlighted}>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="https://www.stroke.org/en/about-stroke"
            target="_blank"
            rel="noreferrer"
            className="block bg-blue-50 hover:bg-blue-100 border border-blue-300 rounded p-4 shadow transition transform hover:scale-105"
          >
            <h4 className="text-xl font-bold">American Stroke Association</h4>
            <p>Learn about stroke types, symptoms, and treatments.</p>
          </a>
          <a
            href="https://www.who.int/news-room/fact-sheets/detail/stroke"
            target="_blank"
            rel="noreferrer"
            className="block bg-green-50 hover:bg-green-100 border border-green-300 rounded p-4 shadow transition transform hover:scale-105"
          >
            <h4 className="text-xl font-bold">WHO Stroke Facts</h4>
            <p>Global data and prevention strategies from the World Health Organization.</p>
          </a>
        </div>
      </Section>

    </main>
  );
}

export default Home;

