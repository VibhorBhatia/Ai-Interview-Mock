import React from "react";

function HowItWorks() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-900">How It Works?</h1>
      <p className="text-center text-gray-600 mt-2">
        Master your interview skills with AI-powered mock interviews.
      </p>

      <div className="mt-8 space-y-8">
        {/* Step 1 */}
        <div className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold text-indigo-600">🚀 Step 1: Sign Up & Access Your Dashboard</h2>
          <p className="text-gray-700 mt-2">
            Click <strong>"Sign Up"</strong> to create an account or log in if you already have one. 
            Once logged in, you’ll be redirected to your <strong>Dashboard</strong>, where you can start your interview journey.
          </p>
        </div>

        {/* Step 2 */}
        <div className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold text-indigo-600">🎯 Step 2: Choose Your Plan</h2>
          <p className="text-gray-700 mt-2">
            Get started for <strong>free</strong> with 3 mock interviews. Upgrade to unlock 
            <strong> unlimited practice</strong>, <strong>exclusive features</strong>, and <strong>advanced AI feedback</strong>.
          </p>
        </div>

        {/* Step 3 */}
        <div className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold text-indigo-600">🎙️ Step 3: Start a Mock Interview</h2>
          <p className="text-gray-700 mt-2">
            Select an interview <strong>category</strong> (e.g., Software Engineering, Data Science, Product Management). 
            Choose your <strong>difficulty level</strong> based on your experience. Our AI-powered system generates 
            <strong> real-world</strong> interview questions.
          </p>
        </div>

        {/* Step 4 */}
        <div className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold text-indigo-600">📊 Step 4: Receive Instant Feedback</h2>
          <p className="text-gray-700 mt-2">
            Get detailed insights into your <strong>answers</strong>, <strong>communication skills</strong>, and <strong>areas for improvement</strong>. 
            Track your progress and refine your interview technique.
          </p>
        </div>

        {/* Step 5 */}
        <div className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold text-indigo-600">🎓 Step 5: Get Ready for Your Real Interview</h2>
          <p className="text-gray-700 mt-2">
            Use our AI-driven practice sessions to build confidence. When you're ready, ace your real interviews with 
            <strong> enhanced skills</strong> and <strong>strategic preparation</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;