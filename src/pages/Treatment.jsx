import React from "react";
import Section from "../components/Section";
import AsideTip from "../components/AsideTip";

function Treatment({ highlighted }) {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32">
      {/* Overview Section */}
      <Section id="treatment-overview" title="Treatment and Recovery After Stroke" highlighted={highlighted}>
        <article>
          <h1 className="text-3xl font-bold text-purple-700">Life After a Stroke</h1>
          <p className="mt-4 text-lg">
            Stroke recovery is different for everyone. Treatment begins immediately at the hospital and may continue for months or years, depending on the severity. The goal is to minimize damage, restore function, and prevent future strokes.
          </p>
          <br />
          <p>
            Medical professionals use a combination of emergency treatment, physical therapy, and lifestyle changes to guide patients toward recovery. Below is a breakdown of the typical phases and treatments involved.
          </p>
          <hr className="my-6" />
        </article>
      </Section>

      {/* Emergency Treatment Options */}
      <Section id="stroke-care" title="Emergency Stroke Treatments" highlighted={highlighted}>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Clot-dissolving medications:</strong> tPA (tissue plasminogen activator) for ischemic stroke within 3–4 hours.</li>
          <li><strong>Mechanical thrombectomy:</strong> Surgical removal of large clots using a catheter.</li>
          <li><strong>Surgery:</strong> For hemorrhagic strokes or to relieve brain pressure.</li>
          <li><strong>ICU monitoring:</strong> Vital signs, oxygen, glucose, and neurological functions tracked intensively.</li>
        </ul>
        <br />
        <aside className="bg-red-50 p-4 rounded border-l-4 border-red-500">
          <h5 className="font-semibold">Quick Note:</h5>
          <p>Time is critical—every minute of delay risks more brain damage.</p>
        </aside>
      </Section>

      {/* Rehabilitation Path */}
      <Section id="recovery-steps" title="Rehabilitation and Ongoing Support" highlighted={highlighted}>
        <h2 className="text-xl font-bold text-green-700">Recovery Isn't Linear—It's Personal</h2>
        <p className="mt-2">
          After emergency care, patients usually enter a rehabilitation plan tailored to their needs. Recovery involves physical, mental, and emotional components.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-100 p-4 rounded shadow">
            <h4 className="font-semibold">Physical Therapy</h4>
            <p>Helps restore movement, strength, and coordination through exercises and assistive devices.</p>
          </div>
          <div className="bg-blue-100 p-4 rounded shadow">
            <h4 className="font-semibold">Speech Therapy</h4>
            <p>Rebuilds speech, language, and swallowing ability for those affected by brain damage.</p>
          </div>
          <div className="bg-green-100 p-4 rounded shadow">
            <h4 className="font-semibold">Occupational Therapy</h4>
            <p>Guides patients in relearning everyday tasks—dressing, eating, personal care.</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded shadow">
            <h4 className="font-semibold">Mental Health Support</h4>
            <p>Stroke survivors often face depression and anxiety. Counseling and community support are vital.</p>
          </div>
        </div>
      </Section>

      {/* Long-Term Strategy */}
      <Section id="future-health" title="Long-Term Recovery and Prevention" highlighted={highlighted}>
        <p>
          Even after rehabilitation, stroke survivors must manage their health vigilantly:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Continue medications as prescribed (blood thinners, statins, etc.)</li>
          <li>Attend follow-up appointments with neurologists and therapists</li>
          <li>Monitor blood pressure and sugar daily</li>
          <li>Maintain physical activity and a stroke-safe diet</li>
          <li>Stay connected with support groups or peer networks</li>
        </ul>
        <div className="mt-6 text-center">
          <a
            href="https://www.stroke.org/en/life-after-stroke"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
              Explore Life After Stroke
            </button>
          </a>
        </div>
      </Section>
    </main>
  );
}

export default Treatment;

