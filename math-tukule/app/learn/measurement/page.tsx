"use client";

import { useState } from "react";
export default function MeasurementLesson() {
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
          Measurement
        </h1>

        <p className="mt-3 text-slate-600">
          Learn about length, mass, capacity and conversions.
        </p>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Units of Measurement
          </h2>

          <p className="mt-4 text-slate-600">
            We use millimetres (mm), centimetres (cm), metres (m) and kilometres (km)
            to measure length.
          </p>

          <div className="mt-5 rounded-2xl bg-blue-50 p-5">
            <p className="font-semibold text-slate-800">
              Example:
            </p>

            <p className="mt-2 text-slate-700">
              100 cm = 1 m
            </p>
          </div>
        </div>
<div className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
  <h2 className="text-2xl font-bold text-slate-900">
    Try this
  </h2>

  <p className="mt-4 text-lg font-semibold text-slate-800">
    {questionNumber === 1
  ? "Convert 3.5 metres to centimetres."
  : "Convert 2 kilometres to metres."}
  </p>

  <div className="mt-5 space-y-3">
   {(questionNumber === 1
  ? ["35 cm", "350 cm", "3 500 cm", "0.35 cm"]
  : ["200 m", "2 000 m", "20 000 m", "200 000 m"]
).map((option) => (
      <button
        key={option}
        onClick={() => {
          setAnswer(option);

          const correctAnswer =
  questionNumber === 1 ? "350 cm" : "2 000 m";

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
      Great work. You completed this Measurement practice.
    </p>
  </div>
)}
</div>


      </div>
    </main>
  );
}