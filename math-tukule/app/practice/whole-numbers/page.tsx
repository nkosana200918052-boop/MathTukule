"use client";

import { useState } from "react";
import Link from "next/link";

export default function WholeNumbersPracticePage() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const correctAnswer = "60 000";

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold text-blue-600">
          MATHTUKULE • PRACTICE
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-900">
          Whole Numbers Practice
        </h1>

        <p className="mt-3 text-slate-600">
          What is the value of the digit 6 in 364 219?
        </p>

        <div className="mt-6 space-y-3">
          {["6 000", "60 000", "600", "600 000"].map((option) => (
            <button
              key={option}
              onClick={() => setSelectedAnswer(option)}
              className="block w-full rounded-2xl bg-white p-4 text-left font-semibold text-slate-900 shadow-sm"
            >
              {option}
            </button>
          ))}
        </div>

        {selectedAnswer && (
          <p className="mt-6 text-lg font-semibold">
            {selectedAnswer === correctAnswer
              ? "Correct ✅"
              : "Try again ❌"}
          </p>
        )}

        <Link
          href="/practice"
          className="mt-8 inline-block rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white"
        >
          ← Back to Practice
        </Link>
      </div>
    </main>
  );
}