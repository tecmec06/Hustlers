'use client';

import { CheckCircle2 } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left Side */}
        <div className="lg:w-1/2 text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            See Cyware in Action
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-xl">
            Our cybersecurity experts will show you how Cyware enables you to:
          </p>

          {/* Feature bullets */}
          <ul className="mt-6 space-y-5">
            <li className="flex items-start">
              <CheckCircle2 className="text-emerald-400 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
              <span className="text-white text-base">
                Operationalize Threat Intelligence
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="text-emerald-400 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
              <span className="text-white text-base">
                Hyper-Orchestrate and Automate Threat Response
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="text-emerald-400 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
              <span className="text-white text-base">
                Collaborate and Share Intelligence Securely
              </span>
            </li>
          </ul>
        </div>

        {/* Right Side - Fixed width, auto height, centered */}
        <div className="w-full lg:w-[520px] flex justify-center">
          <div className="w-full h-full rounded-xl border border-white/20 bg-black/60 backdrop-blur-sm p-6 sm:p-8 shadow-[0_0_40px_5px_rgba(168,85,247,0.5)]">
            {/* Form will be added here next */}
            <form className="space-y-4 text-white">
  <div className="flex gap-4">
    <input
      type="text"
      placeholder="First Name*"
      className="form-field flex-1"
    />
    <input
      type="text"
      placeholder="Last Name*"
      className="form-field flex-1"
    />
  </div>
  <input type="email" placeholder="Work Email*" className="form-field" />
  <input type="text" placeholder="Organization*" className="form-field" />
  <select className="form-field appearance-none pr-10">
    <option>Region*</option>
    <option>North America</option>
    <option>Europe</option>
    <option>Asia-Pacific</option>
  </select>
  <input type="text" placeholder="Job Title" className="form-field" />
  <input type="tel" placeholder="Phone number" className="form-field" />
  <textarea
    placeholder="Comments"
    className="form-field resize-none rounded-full h-24"
  ></textarea>

  <button
    type="submit"
    className="w-full mt-4 flex justify-between items-center px-6 py-2.5 rounded-full border border-white text-white hover:bg-white/10 transition text-sm"
  >
    Submit <span className="text-lg">→</span>
  </button>
</form>

          </div>
        </div>
      </div>
    </section>
  );
}
