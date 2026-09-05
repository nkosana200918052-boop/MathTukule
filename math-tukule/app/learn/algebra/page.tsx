"use client";

import { useState } from "react";
export default function AlgebraLesson() {
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
          Algebra
        </h1>

        <p className="mt-3 text-slate-600">
          Learn how to use letters and numbers to solve simple problems.
        </p>
        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
  <h2 className="text-2xl font-bold text-slate-900">
    What is a variable?
  </h2>

  <p className="mt-4 text-slate-600">
    A variable is a letter that represents an unknown number.
  </p>

  <div className="mt-5 rounded-2xl bg-blue-50 p-5">
    <p className="text-3xl font-bold text-blue-700">
      x + 8 = 15
    </p>

    <p className="mt-2 text-slate-700">
      Here, x represents the number we need to find.
    </p>
    <p className="mt-4 font-semibold text-slate-800">
  x + 8 = 15
</p>

<p className="mt-2 text-slate-600">
  Subtract 8 from both sides.
</p>

<p className="mt-2 font-bold text-blue-700">
  x = 7
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
  ? "Solve: x + 5 = 12"
  : "Solve: 2x = 14"}
  </p>
  <div className="mt-5 space-y-3">
  {(questionNumber === 1
  ? ["5", "6", "7", "8"]
  : ["5", "6", "7", "8"]
).map((option) => (
    <button
      key={option}
      onClick={() => {
  setAnswer(option);

  if (option === "7") {
    setFeedback("Correct! 🎉");
  } else {
    setFeedback("Try again. Subtract 5 from both sides.");
  }
}}
      className="w-full rounded-2xl border border-slate-200 p-4 text-left font-semibold"
    >
      {option}
    </button>
  ))}
</div>
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
    {feedback === "Correct! 🎉" && questionNumber === 2 && (
  <div className="mt-5 rounded-2xl bg-green-50 p-5">
    <h3 className="text-xl font-bold text-green-700">
      Lesson Complete! 🎉
    </h3>

    <p className="mt-2 text-slate-700">
      Great work. You completed this Algebra practice.
    </p>
  </div>
)}
  </button>
)}
    </main>
  );
}