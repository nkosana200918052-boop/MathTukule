"use client";

import { useEffect, useState } from "react";
export default function ProgressPage() {
    const [completedTopics, setCompletedTopics] = useState<string[]>([]);
    useEffect(() => {
  const savedProgress = localStorage.getItem("completedTopics");

  if (savedProgress) {
    setCompletedTopics(JSON.parse(savedProgress));
  }
}, []);
  useEffect(() => {
  const savedProgress = localStorage.getItem("completedTopics");

  if (savedProgress) {
    setCompletedTopics(JSON.parse(savedProgress));
  }
}, []);
    const topics = [
    "Whole Numbers",
    "Fractions & Decimals",
    "Algebra",
    "Geometry",
    "Data Handling",
    "Measurement",
    "Probability",
    "Patterns and Functions",
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold text-blue-600">
          MATHTUKULE • PROGRESS
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-900">
          My Progress
        </h1>

        <p className="mt-3 text-slate-600">
          Track the Grade 7 Mathematics topics you are learning.
        </p>

        <div className="mt-8 space-y-4">
          {topics.map((topic) => (
            <div
              key={topic}
              className="rounded-2xl bg-white p-5 shadow-sm"
            >
              <p className="font-semibold text-slate-900">
                {topic}
              </p>

              
              <p className="mt-1 text-sm text-slate-500">
  {completedTopics.includes(topic)
    ? "Completed ✅"
    : "Not completed yet"}
</p>
            </div>
          ))}
          <a
  href="/"
  className="mt-8 inline-block rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white"
>
  ← Back to Home
</a>
        </div>
      </div>
    </main>
  );
}