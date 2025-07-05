import React from "react";
import Section from "../components/Section";
import AsideTip from "../components/AsideTip";

function Prevention({ highlighted }) {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32">
      {/* Header & Introduction */}
      <Section id="prevention-intro" title="Preventing Stroke: Knowledge is Power" highlighted={highlighted}>
        <article>
          <h1 className="text-3xl font-bold text-green-700">Take Control of Your Health</h1>
          <p className="mt-4 text-lg">
            Stroke prevention begins with lifestyle awareness and early action. Studies show that over 80% of strokes can be prevented with proactive care and healthy habits. This guide offers a breakdown of physical, dietary, and behavioral strategies to reduce risk.
          </p>
          <br />
          <hr className="my-6" />
        </article>
      </Section>

      {/* Lifestyle Changes Section */}
      <Section id="lifestyle-tips" title="Healthy Lifestyle Tips" highlighted={highlighted}>
        <h2 className="text-2xl font-semibold">Build a Foundation of Wellness</h2>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li><strong>Stay Active:</strong> Aim for 30 minutes of moderate activity daily. Walking, biking, and swimming are low-impact ways to maintain circulation.</li>
          <li><strong>Monitor Blood Pressure:</strong> Hypertension is a leading stroke risk. Check your readings regularly.</li>
          <li><strong>Control Blood Sugar:</strong> Diabetes can damage blood vessels and elevate stroke chances.</li>
          <li><strong>Lower Cholesterol:</strong> Choose foods rich in fiber and healthy fats.</li>
          <li><strong>Limit Alcohol & Tobacco:</strong> Excessive drinking and smoking accelerate artery damage.</li>
        </ul>
        <br />
        <p>
          These changes may seem simple, but they add up to powerful protection. Begin with one habit and grow from there.
        </p>
      </Section>

      {/* Dietary Advice Section */}
      <Section id="food-guidelines" title="Eat Smart for Stroke Prevention" highlighted={highlighted}>
        <article>
          <h3 className="text-xl font-semibold text-amber-700">Your Plate Matters</h3>
          <p className="mt-2">
            A balanced diet reduces stroke risk. Include lean proteins, leafy greens, and heart-friendly fats like avocado and olive oil.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <h4 className="text-lg font-bold">Best Foods</h4>
              <ul className="list-disc ml-6 mt-2">
                <li>Berries and citrus fruits</li>
                <li>Whole grains (like quinoa and oats)</li>
                <li>Legumes and nuts</li>
                <li>Low-fat dairy</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded border border-red-200">
              <h4 className="text-lg font-bold text-red-600">Avoid These</h4>
              <ul className="list-disc ml-6 mt-2">
                <li>Processed meats (like bacon or sausages)</li>
                <li>Deep-fried foods</li>
                <li>Excess salt and sodium</li>
                <li>Sugary drinks and snacks</li>
              </ul>
            </div>
          </div>
        </article>
      </Section>

      {/* Quick Tips & CTA */}
      <Section id="action-plan" title="Simple Habits, Big Results" highlighted={highlighted}>
        <aside className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
          <h5 className="font-semibold mb-2">Quick Checklist:</h5>
          <ul className="list-disc ml-6">
            <li>✔ Check blood pressure monthly</li>
            <li>✔ Choose low-sodium groceries</li>
            <li>✔ Walk 10,000 steps daily</li>
            <li>✔ Schedule annual health checkups</li>
          </ul>
        </aside>
        <br />
        <p>
          Prevention isn’t just about avoiding risk—it’s about building resilience. You have the power to make smart choices today that your future self will thank you for.
        </p>
        <div className="mt-6 text-center">
          <a href="https://www.stroke.org/en/life-after-stroke/preventing-another-stroke" target="_blank" rel="noreferrer">
            <button className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition">
              Learn More Prevention Strategies
            </button>
          </a>
        </div>
      </Section>
    </main>
  );
}

export default Prevention;

