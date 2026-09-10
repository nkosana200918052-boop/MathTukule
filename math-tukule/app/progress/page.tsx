"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function ProgressPage() {
    const [completedTopics, setCompletedTopics] = useState<string[]>([]);
    const [diagnosticScore, setDiagnosticScore] = useState<{
      score: number;
  total: number;
} | null>(null);
const [recommendedTopic, setRecommendedTopic] = useState<string | null>(null);
const [wholeNumbersPractice, setWholeNumbersPractice] = useState<{
  score: number;
  total: number;
} | null>(null);
  const [fractionsPractice, setFractionsPractice] = useState<{
  score: number;
  total: number;
} | null>(null);
const [algebraPractice, setAlgebraPractice] = useState<{
  score: number;
  total: number;
} | null>(null);
  useEffect(() => {
  const savedProgress = localStorage.getItem("completedTopics");

  if (savedProgress) {
    setCompletedTopics(JSON.parse(savedProgress));
  }

  const savedDiagnostic = localStorage.getItem("diagnosticScore");

  if (savedDiagnostic) {
    setDiagnosticScore(JSON.parse(savedDiagnostic));
  }
  const savedRecommendedTopic = localStorage.getItem("recommendedTopic");

if (savedRecommendedTopic) {
  setRecommendedTopic(savedRecommendedTopic);
}
const savedWholeNumbersPractice = localStorage.getItem(
  "wholeNumbersPractice"
);

if (savedWholeNumbersPractice) {
  setWholeNumbersPractice(JSON.parse(savedWholeNumbersPractice));
}
const savedFractionsPractice = localStorage.getItem(
  "fractionsPractice"
);

if (savedFractionsPractice) {
  setFractionsPractice(JSON.parse(savedFractionsPractice));
}
const savedAlgebraPractice = localStorage.getItem(
  "algebraPractice"
);

if (savedAlgebraPractice) {
  setAlgebraPractice(JSON.parse(savedAlgebraPractice));
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
        <p className="mt-2 text-sm font-semibold text-blue-600">
  Your MathTukule Learning Dashboard
</p>

        <p className="mt-3 text-slate-600">
          Track the Grade 7 Mathematics topics you are learning.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
        {diagnosticScore && (
  <div className="rounded-2xl bg-white p-5 shadow-sm">
    <p className="text-sm font-semibold text-slate-500">
      Diagnostic Score
    </p>
    {wholeNumbersPractice && (
  <div className="rounded-2xl bg-white p-5 shadow-sm">
    <p className="text-sm font-semibold text-slate-500">
      Whole Numbers Practice
    </p>

    <p className="mt-2 text-3xl font-bold text-blue-600">
      {wholeNumbersPractice.score} / {wholeNumbersPractice.total}
    </p>
  </div>
)}
{fractionsPractice && (
  <div className="rounded-2xl bg-white p-5 shadow-sm">
    <p className="text-sm font-semibold text-slate-500">
      Fractions & Decimals Practice
    </p>

    <p className="mt-2 text-3xl font-bold text-blue-600">
      {fractionsPractice.score} / {fractionsPractice.total}
    </p>
  </div>
)}
{algebraPractice && (
  <div className="rounded-2xl bg-white p-5 shadow-sm">
    <p className="text-sm font-semibold text-slate-500">
      Algebra Practice
    </p>

    <p className="mt-2 text-3xl font-bold text-blue-600">
      {algebraPractice.score} / {algebraPractice.total}
    </p>
  </div>
)}

    <p className="mt-2 text-3xl font-bold text-blue-600">
      {diagnosticScore.score} / {diagnosticScore.total}
    </p>
      </div>
)}
{recommendedTopic && (
  <Link
    href={
      recommendedTopic === "Fractions & Decimals"
        ? "/learn/fractions"
        : recommendedTopic === "Whole Numbers"
        ? "/learn/whole-numbers"
        : recommendedTopic === "Algebra"
        ? "/learn/algebra"
        : recommendedTopic === "Geometry"
        ? "/learn/geometry"
        : recommendedTopic === "Data Handling"
        ? "/learn/data-handling"
        : recommendedTopic === "Measurement"
        ? "/learn/measurement"
        : recommendedTopic === "Probability"
        ? "/learn/probability"
        : recommendedTopic === "Patterns and Functions"
        ? "/learn/patterns-functions"
        : "/progress"
    }
    className="block rounded-2xl bg-blue-50 p-5"
  >
    <p className="text-sm font-semibold text-blue-600">
      Recommended Topic
    </p>

    <p className="mt-2 text-xl font-bold text-slate-900">
      📚 {recommendedTopic}
    </p>

    <p className="mt-2 text-sm text-blue-700">
      Tap here to continue learning
    </p>
    <div className="mt-4 inline-block rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white">
  Continue Learning →
</div>
  </Link>
)}
</div>
        <div className="mt-6 rounded-2xl bg-blue-50 p-5">
  <p className="text-lg font-bold text-blue-700">
    {completedCount} of {topics.length} topics completed
  </p>

  <p className="mt-1 text-slate-700">
  {progressPercentage}% complete
</p>

<p className="mt-4 text-slate-700">
  You have completed {completedCount} of {topics.length} topics.
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