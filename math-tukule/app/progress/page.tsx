"use client";

import { useEffect, useState } from "react";
export default function ProgressPage() {
    const [completedTopics, setCompletedTopics] = useState<string[]>([]);
    const [diagnosticScore, setDiagnosticScore] = useState<{
  score: number;
  total: number;
} | null>(null);
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

  const savedDiagnostic = localStorage.getItem("diagnosticScore");

  if (savedDiagnostic) {
    setDiagnosticScore(JSON.parse(savedDiagnostic));
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
  const completedCount = topics.filter((topic) =>
  completedTopics.includes(topic)
).length;

const progressPercentage = Math.round(
  (completedCount / topics.length) * 100
);

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
        {diagnosticScore && (
  <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
    <p className="text-sm font-semibold text-slate-500">
      Diagnostic Score
    </p>

    <p className="mt-2 text-3xl font-bold text-blue-600">
      {diagnosticScore.score} / {diagnosticScore.total}
    </p>
  </div>
)}
        <div className="mt-6 rounded-2xl bg-blue-50 p-5">
  <p className="text-lg font-bold text-blue-700">
    {completedCount} of {topics.length} topics completed
  </p>

  <p className="mt-1 text-slate-700">
    {progressPercentage}% complete
  </p>
  <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-200">
  <div
    className="h-full rounded-full bg-blue-600 transition-all"
    style={{ width: `${progressPercentage}%` }}
  />
</div>
</div>

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