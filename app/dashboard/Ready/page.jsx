import React from "react";

function HowToPrepare() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-900">How to Prepare for Your Interview</h1>
      <p className="text-center text-gray-600 mt-2">
        Get ready for your next interview with structured practice and AI-driven insights.
      </p>

      <div className="mt-8 space-y-6">
        <div className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold text-indigo-600">📌 Understand the Interview Format</h2>
          <p className="text-gray-700 mt-2">
            Research the type of interview you’ll be facing. It could be **technical, behavioral, system design, or case study-based**.  
            Understanding the format helps you focus on the right areas during your preparation.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold text-indigo-600">🎯 Practice with Realistic Questions</h2>
          <p className="text-gray-700 mt-2">
            Use our platform to **simulate real interview scenarios**. Select relevant **questions based on your role** and 
            practice under timed conditions to build confidence.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold text-indigo-600">📝 Structure Your Answers Effectively</h2>
          <p className="text-gray-700 mt-2">
            For **behavioral interviews**, use the **STAR method** (Situation, Task, Action, Result).  
            For **technical interviews**, break down your approach **step-by-step** to show logical thinking.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold text-indigo-600">💡 Get AI-Powered Feedback</h2>
          <p className="text-gray-700 mt-2">
            Receive insights on **clarity, structure, and completeness** of your answers. Use this feedback to refine your responses 
            and improve your **communication skills**.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold text-indigo-600">📚 Review Key Concepts</h2>
          <p className="text-gray-700 mt-2">
            Brush up on important concepts related to your field. If you're preparing for a coding interview, 
            **practice algorithms, data structures, and system design**.  
            For behavioral interviews, focus on **storytelling and clear communication**.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold text-indigo-600">🔄 Keep Practicing & Stay Confident</h2>
          <p className="text-gray-700 mt-2">
            Confidence comes from **consistent practice**. Keep refining your answers, take multiple mock interviews, 
            and approach your real interview with a **calm and prepared mindset**.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowToPrepare;