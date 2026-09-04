"use client";
import { useState } from "react";
export default function FractionsLesson() {
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
          Fractions & Decimals
        </h1>

        <p className="mt-3 text-slate-600">
          Learn how fractions and decimals represent parts of a whole.
        </p>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            What is a fraction?
          </h2>
          
          <p className="mt-4 text-lg font-semibold text-slate-800">
          
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            A fraction represents part of a whole.
          </p>

          <div className="mt-5 rounded-2xl bg-blue-50 p-5">
            <p className="text-3xl font-bold text-blue-700">
              3/4
            </p>

            <p className="mt-2 text-slate-700">
              The number 3 is the numerator.
            </p>

            <p className="text-slate-700">
              The number 4 is the denominator.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Fractions and decimals
          </h2>

          <p className="mt-4 text-slate-600">
            Fractions can also be written as decimals.
          </p>

          <div className="mt-5 space-y-3">
            <div className="rounded-2xl border p-4">
              1/2 = 0.5
            </div>

            <div className="rounded-2xl border p-4">
              1/4 = 0.25
            </div>

            <div className="rounded-2xl border p-4">
              3/4 = 0.75
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Try this
          </h2>

          <p className="mt-4 text-lg font-semibold text-slate-800">
            {questionNumber === 1
  ? "What is 1/2 written as a decimal?"
  : "What is 3/4 written as a decimal?"}
          </p>

         <div className="mt-5 space-y-3">
  {(questionNumber === 1
  ? ["0.2", "0.5", "1.2", "2.0"]
  : ["0.25", "0.5", "0.75", "1.5"]
).map((option) => (
    <button
      key={option}
      onClick={() => {
        setAnswer(option);

        const correctAnswer = questionNumber === 1 ? "0.5" : "0.75";

if (option === correctAnswer) {
  setFeedback("Correct! 🎉");
} else {
  setFeedback("Try again.");
}
      }}
     className={`w-full rounded-2xl border p-4 text-left font-semibold ${
  answer === option ? "border-blue-500 bg-blue-50" : "border-slate-200"
}`}
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
  if (questionNumber === 1) {
    setQuestionNumber(2);
    setAnswer("");
    setFeedback("");
  }
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
      Great work. You completed this fractions practice.
    </p>
  </div>
)}
        </div>
      </div>
    </main>
  );
}