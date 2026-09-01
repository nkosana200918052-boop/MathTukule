"use client";

import { useState } from "react";

const questions = [
  {
    question: "What is the value of the digit 7 in 572 846?",
    options: ["7 000", "70 000", "700", "700 000"],
    answer: "70 000",
  },
  {
    question: "Calculate: 48 + 37",
    options: ["75", "85", "95", "105"],
    answer: "85",
  },
  {
    question: "What is 3/4 written as a decimal?",
    options: ["0.25", "0.34", "0.75", "1.25"],
    answer: "0.75",
  },
];

export default function DiagnosticPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQuestion];

  function chooseAnswer(option: string) {
    if (option === question.answer) {
      setScore((oldScore) => oldScore + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrentQuestion((oldQuestion) => oldQuestion + 1);
    }
  }

  if (finished) {
    return (
      <main className="min-h-screen bg-slate-50 px-5 py-10">
        <div className="mx-auto max-w-md text-center">
          <div className="text-6xl">🎉</div>

          <h1 className="mt-5 text-3xl font-bold">
            Diagnostic Complete
          </h1>

          <p className="mt-6 text-4xl font-bold text-blue-600">
            {score} / {questions.length}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <h1 className="text-3xl font-bold">
          MathTukule Diagnostic
        </h1>

        <p className="mt-2 text-slate-500">
          Question {currentQuestion + 1} of {questions.length}
        </p>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">
            {question.question}
          </h2>

          <div className="mt-6 space-y-3">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => chooseAnswer(option)}
                className="w-full rounded-2xl border border-slate-200 p-4 text-left"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}