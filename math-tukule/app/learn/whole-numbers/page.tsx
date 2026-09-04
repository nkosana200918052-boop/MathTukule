"use client";

import { useState } from "react";
export default function WholeNumbersLesson() {
    const [answer, setAnswer] = useState("");
const [feedback, setFeedback] = useState("");
const [questionNumber, setQuestionNumber] = useState(1);
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold text-blue-600">
          MATHTUKULE • LEARN
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-900">
          Whole Numbers
        </h1>

        <p className="mt-3 text-slate-600">
          Learn how to read, understand and work with whole numbers.
        </p>
        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
  <h2 className="text-2xl font-bold text-slate-900">
    Place Value
  </h2>

  <p className="mt-4 text-slate-600">
    The value of a digit depends on its position in the number.
  </p>

  <div className="mt-5 rounded-2xl bg-blue-50 p-5">
    <p className="text-3xl font-bold text-blue-700">
      572 846
    </p>

    <p className="mt-2 text-slate-700">
      The digit 7 has a value of 70 000.
    </p>
    <p className="mt-3 text-slate-600">
  This is because the 7 is in the ten-thousands place.
</p>
  </div>
</div>
      </div>
      <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
  <h2 className="text-2xl font-bold text-slate-900">
    Try this
  </h2>

  <p className="mt-4 text-lg font-semibold text-slate-800">
    {questionNumber === 1
  ? "What is the value of the digit 6 in 364 219?"
  : "Calculate: 4 825 + 3 679"}
  </p>
  <div className="mt-5 space-y-3">
  {(questionNumber === 1
  ? ["600", "6 000", "60 000", "600 000"]
  : ["8 404", "8 504", "8 604", "9 504"]
).map((option) => (
    <button
      key={option}
      onClick={() => {
  setAnswer(option);

  const correctAnswer =
  questionNumber === 1 ? "60 000" : "8 504";

if (option === correctAnswer) {
  setFeedback("Correct! 🎉");
} else {
  setFeedback("Try again.");
}
}}
      className="w-full rounded-2xl border border-slate-200 p-4 text-left font-semibold"
    >
      {option}
    </button>
  ))}
</div>
{feedback && (
  <p className="mt-4 font-semibold text-slate-700">
    {feedback}
  </p>
)}
{feedback === "Correct! 🎉" && questionNumber === 1 && (
  <button
    onClick={() => {
      setQuestionNumber(2);
      setAnswer("");
      setFeedback("");
    }}
    className="mt-5 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white"
  >
    Next Question →
  </button>
)}
{feedback === "Correct! 🎉" && questionNumber === 2 && (
  <div className="mt-5 rounded-2xl bg-green-50 p-5">
    <h3 className="text-xl font-bold text-green-700">
      Lesson Complete! 🎉
    </h3>

    <p className="mt-2 text-slate-700">
      Great work. You completed this Whole Numbers practice.
    </p>
  </div>
)}
</div>
    </main>
  );
  }
