import React from "react";
import Section from "../components/Section";

function Symptoms({ highlighted }) {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32">
      {/* Intro Section */}
      <Section id="symptoms-overview" title="Stroke Symptoms Overview" highlighted={highlighted}>
        <article>
          <h1 className="text-3xl font-bold text-red-700">Recognizing the Signs of Stroke</h1>
          <p className="mt-4">
            Stroke symptoms often appear suddenly and can vary depending on the part of the brain affected. Immediate recognition and action are vital to minimize damage.
          </p>
          <br />
          <p>
            In many cases, quick medical intervention can prevent long-term disabilities or save a life. Below are commonly observed symptoms, with tips on when and how to respond.
          </p>
          <hr className="my-6" />
        </article>
      </Section>

      {/* FAST Breakdown */}
      <Section id="fast-method" title="Use the F.A.S.T. Method" highlighted={highlighted}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold">F – Face Drooping</h2>
            <p>Is one side of the face numb or drooping? Ask the person to smile.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">A – Arm Weakness</h2>
            <p>Is one arm weak or numb? Ask the person to raise both arms.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">S – Speech Difficulty</h2>
            <p>Is speech slurred or strange? Ask the person to repeat a simple sentence.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">T – Time to Call</h2>
            <p>If any signs are observed, call emergency services immediately.</p>
          </div>
        </div>
      </Section>

      {/* Additional Symptoms */}
      <Section id="other-symptoms" title="Other Common Symptoms" highlighted={highlighted}>
        <h3 className="text-lg font-bold">Some strokes may present less obvious symptoms:</h3>
        <ul className="list-disc ml-6 mt-3">
          <li>Sudden confusion or inability to understand language</li>
          <li>Vision changes – blurry, double, or loss of vision in one eye</li>
          <li>Loss of balance, coordination, or dizziness</li>
          <li>Severe headache with no known cause</li>
          <li>Fatigue or temporary memory loss</li>
        </ul>
        <br />
        <aside className="bg-yellow-100 p-4 rounded border-l-4 border-yellow-500 mt-4">
          <h5 className="font-semibold">Quick Tip:</h5>
          <p>If symptoms disappear within minutes, it could be a transient ischemic attack (TIA)—a warning sign for future strokes.</p>
        </aside>
      </Section>

      {/* Visual Example */}
      <Section id="symptom-visuals" title="Visual Representation of Symptoms" highlighted={highlighted}>
        <div className="text-center mt-6">
          <iframe
            className="w-full h-64 md:h-96 rounded shadow-md"
            src="https://www.youtube.com/embed/6o-6bGvddbc"
            title="Learn the F.A.S.T. signs of stroke"
            allowFullScreen
          ></iframe>
          <p className="text-sm text-gray-600 mt-2">
            Watch this demonstration of real stroke symptoms and how to respond using the F.A.S.T. method.
          </p>
        </div>
      </Section>
    </main>
  );
}

export default Symptoms;

