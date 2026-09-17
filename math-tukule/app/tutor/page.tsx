"use client";

import { useState } from "react";
export default function TutorPage() {
    const [question, setQuestion] = useState("");
    const [submittedQuestion, setSubmittedQuestion] = useState("");
    const [answer, setAnswer] = useState("");
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold text-blue-600">
          MATHTUKULE • AI TUTOR
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-900">
          Ask MathTukule
        </h1>

        <p className="mt-3 text-slate-600">
          Your Grade 7 Mathematics learning assistant.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
  <label className="font-semibold text-slate-900">
    What would you like help with?
  </label>

  <textarea
  value={question}
  onChange={(event) => setQuestion(event.target.value)}
  placeholder="Example: I don't understand how to add fractions."
  className="mt-4 min-h-32 w-full rounded-2xl border border-slate-300 p-4 text-slate-900"
/>

<button
onClick={() => {
  setSubmittedQuestion(question);
  setAnswer("I received your question. Soon I will explain it step by step.");
}}
  className="mt-4 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white"
>
  Ask MathTukule
</button>
</div>
      </div>
      {submittedQuestion && (
  <div className="mt-6 rounded-2xl bg-blue-50 p-6">
    <p className="text-sm font-semibold text-blue-600">
      YOUR QUESTION
    </p>

    <p className="mt-2 text-slate-900">
      {submittedQuestion}
    </p>
    {answer && (
  <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
    <p className="text-sm font-semibold text-blue-600">
      MATHTUKULE
    </p>

    <p className="mt-2 text-slate-900">
      {answer}
    </p>
  </div>
)}
  </div>
)}
    </main>
  );
}