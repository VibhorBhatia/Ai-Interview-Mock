import planData from '@/utils/planData'; // Ensure correct path
import React from 'react';

function Upgrade() {
  if (!planData || !Array.isArray(planData)) {
    return <p className="text-center text-red-500">No plans available.</p>;
  }

  return (
    <div className="p-10">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          {planData.map((plan) => (
            <div key={plan.id} className="rounded-2xl border border-gray-200 p-6 shadow-xs sm:px-8 lg:p-12">
              <div className="text-center">
                <h2 className="text-lg font-medium text-gray-900">{plan.name} Plan</h2>
                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    ${plan.cost}
                  </strong>
                  <span className="text-sm font-medium text-gray-700"> /month </span>
                </p>
              </div>

              <ul className="mt-6 space-y-2">
                {plan.offering.map((feature, i) => (
                  <li key={i} className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-gray-700">{feature.value}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.paymentLink || "#"}
                className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:ring-3 focus:outline-hidden"
              >
                {plan.paymentLink ? "Upgrade Now" : "Free Plan"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
