"use client";

import { useState } from "react";
import Link from "next/link";

export default function PatternsFunctionsPracticePage() {
  const questions = [
    {
      question: "What are the next two numbers in the pattern 5, 10, 15, 20?",
      options: ["21, 22", "25, 30", "30, 35", "24, 28"],
      answer: "25, 30",
    },
    {
      question: "What is the rule for the pattern 3, 7, 11, 15, 19?",
      options: ["Add 2", "Add 3", "Add 4", "Add 5"],
      answer: "Add 4",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [practiceSaved, setPracticeSaved] = useState(false);

  function getLevel(score: number, total: number) {
    const percentage = (score / total) * 100;

    if (percentage >= 80) return "Strong";
    if (percentage >= 50) return "Developing";
    return "Needs Practice";
  }
function savePracticeResult(finalScore: number) {
  localStorage.setItem(
    "patternsFunctionsPractice",
    JSON.stringify({
      score: finalScore,
      total: questions.length,
    })
  );

  setPracticeSaved(true);
}
  const question = questions[currentQuestion];

  function chooseAnswer(option: string) {
    const isCorrect = option === question.answer;

    if (isCorrect) {
      setScore((oldScore) => oldScore + 1);
    }

    if (currentQuestion === questions.length - 1) {
  const finalScore = isCorrect ? score + 1 : score;

  savePracticeResult(finalScore);
  setFinished(true);
} else {
      setCurrentQuestion((oldQuestion) => oldQuestion + 1);
    }
  }

  if (finished) {
    return (
      <main className="min-h-screen bg-slate-50 px-5 py-10">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-semibold text-blue-600">
            MATHTUKULE • PRACTICE
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Practice Complete
          </h1>

          <p className="mt-6 text-3xl font-bold text-blue-600">
            {score} / {questions.length}
          </p>

          <p className="mt-3 text-xl font-bold text-slate-900">
            Level: {getLevel(score, questions.length)}
          </p>
          {practiceSaved && (
  <p className="mt-2 text-sm font-semibold text-green-700">
    ✓ Practice result saved to My Progress
  </p>
)}

          {getLevel(score, questions.length) === "Needs Practice" && (
            <Link
              href="/learn/patterns-functions"
              className="mt-6 inline-block rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white"
            >
              Review Patterns and Functions Lesson
            </Link>
          )}

          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setFinished(false);
            }}
            className="ml-3 mt-6 rounded-2xl bg-slate-800 px-6 py-3 font-semibold text-white"
          >
            Try Again
          </button>

          <div>
            <Link
              href="/practice"
              className="mt-8 inline-block rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white"
            >
              ← Back to Practice
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold text-blue-600">
          MATHTUKULE • PRACTICE
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-900">
          Patterns and Functions Practice
        </h1>

        <p className="mt-3 text-sm font-semibold text-slate-500">
          Question {currentQuestion + 1} of {questions.length}
        </p>

        <p className="mt-4 text-lg text-slate-700">
          {question.question}
        </p>

        <div className="mt-6 space-y-3">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => chooseAnswer(option)}
              className="block w-full rounded-2xl bg-white p-4 text-left font-semibold text-slate-900 shadow-sm"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}