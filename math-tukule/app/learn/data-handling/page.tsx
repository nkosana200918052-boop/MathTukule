"use client";

import { useState } from "react";

export default function DataHandlingLesson() {
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
          Data Handling
        </h1>

        <p className="mt-3 text-slate-600">
          Learn how to organise, read and understand data.
        </p>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            What is Data?
          </h2>

          <p className="mt-4 text-slate-600">
            Data is information that we collect. It can be shown using
            tables, graphs and charts.
          </p>

          <div className="mt-5 rounded-2xl bg-blue-50 p-5">
            <p className="font-semibold text-slate-800">
              Example:
            </p>

            <p className="mt-2 text-slate-700">
              Test scores: 6, 8, 7, 9, 10
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Try this
          </h2>

          <p className="mt-4 text-lg font-semibold text-slate-800">
            {questionNumber === 1
              ? "What is the mean of 4, 6, 8, 10 and 12?"
              : "What is the median of 3, 5, 7, 9 and 11?"}
          </p>

          <div className="mt-5 space-y-3">
            {["6", "7", "8", "9"].map((option) => (
              <button
                key={option}
                onClick={() => {
                  setAnswer(option);

                  const correctAnswer =
                    questionNumber === 1 ? "8" : "7";

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
                Great work. You completed this Data Handling practice.
              </p>
              <a
  href="/diagnostic"
  className="mt-4 inline-block rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white"
>
  Back to Diagnostic
</a>
<a
  href="/progress"
  className="ml-3 mt-4 inline-block rounded-2xl bg-slate-800 px-6 py-3 font-semibold text-white"
>
  View My Progress
</a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}