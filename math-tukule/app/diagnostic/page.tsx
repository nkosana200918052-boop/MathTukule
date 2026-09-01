"use client";

import { useState } from "react";

const questions = [
  {
    topic: "Whole Numbers",
    question: "What is the value of the digit 7 in 572 846?",
    options: ["7 000", "70 000", "700", "700 000"],
    answer: "70 000",
  },
  {
    topic: "Whole Numbers",
    question: "Calculate: 48 + 37",
    options: ["75", "85", "95", "105"],
    answer: "85",
  },
  {
    topic: "Fractions & Decimals",
    question: "What is 3/4 written as a decimal?",
    options: ["0.25", "0.34", "0.75", "1.25"],
    answer: "0.75",
  },
  {
    topic: "Algebra",
    question: "Solve: x + 8 = 15",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    topic: "Geometry",
    question: "How many degrees are in a straight angle?",
    options: ["90°", "120°", "180°", "360°"],
    answer: "180°",
  },
];

export default function DiagnosticPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const [topicResults, setTopicResults] = useState<
    Record<string, { correct: number; total: number }>
  >({});

  const question = questions[currentQuestion];

  function chooseAnswer(option: string) {
    const isCorrect = option === question.answer;

    if (isCorrect) {
      setScore((oldScore) => oldScore + 1);
    }

    setTopicResults((oldResults) => {
      const currentTopic = oldResults[question.topic] || {
        correct: 0,
        total: 0,
      };

      return {
        ...oldResults,
        [question.topic]: {
          correct: currentTopic.correct + (isCorrect ? 1 : 0),
          total: currentTopic.total + 1,
        },
      };
    });

    if (currentQuestion === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrentQuestion((oldQuestion) => oldQuestion + 1);
    }
  }

  function getLevel(correct: number, total: number) {
    const percentage = (correct / total) * 100;

    if (percentage >= 80) return "Strong";
    if (percentage >= 50) return "Developing";

    return "Needs Practice";
  }

  function getWeakestTopic() {
  const entries = Object.entries(topicResults);

  if (entries.length === 0) {
    return null;
  }

  let weakestTopic = entries[0][0];
  let weakestPercentage =
    (entries[0][1].correct / entries[0][1].total) * 100;

  for (const [topic, result] of entries) {
    const percentage = (result.correct / result.total) * 100;

    if (percentage < weakestPercentage) {
      weakestPercentage = percentage;
      weakestTopic = topic;
    }
  }

  return weakestTopic;
}

  if (finished) {
    const weakestTopic = getWeakestTopic();
    return (
      <main className="min-h-screen bg-slate-50 px-5 py-10">
        <div className="mx-auto max-w-md">
          <div className="text-center">
            <div className="text-6xl">🎉</div>

            <h1 className="mt-5 text-3xl font-bold text-slate-900">
              Diagnostic Complete
            </h1>

            <p className="mt-4 text-5xl font-bold text-blue-600">
              {score} / {questions.length}
            </p>
          </div>

          <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              Your Topic Results
            </h2>

            <div className="mt-5 space-y-4">
              {Object.entries(topicResults).map(([topic, result]) => (
                <div
                  key={topic}
                  className="rounded-2xl border border-slate-200 p-4"
                >
                  <div className="flex justify-between gap-4">
                    <span className="font-semibold text-slate-900">
                      {topic}
                    </span>

                    <span className="font-semibold text-blue-600">
                      {getLevel(result.correct, result.total)}
                    </span>
                  </div>
<div className="mt-6 rounded-3xl bg-blue-600 p-6 text-white shadow-sm">
  <p className="text-sm font-semibold text-blue-100">
    RECOMMENDED NEXT STEP
  </p>

  <h2 className="mt-2 text-2xl font-bold">
    📚 Learn {weakestTopic}
  </h2>

  <p className="mt-2 text-blue-100">
    MathTukule recommends practising this topic first based on your
    diagnostic results.
  </p>
</div>
                  <p className="mt-2 text-sm text-slate-500">
                    {result.correct} correct out of {result.total}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <p className="text-sm font-semibold text-blue-600">
          {question.topic}
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          MathTukule Diagnostic
        </h1>

        <p className="mt-2 text-slate-500">
          Question {currentQuestion + 1} of {questions.length}
        </p>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold leading-8 text-slate-900">
            {question.question}
          </h2>

          <div className="mt-6 space-y-3">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => chooseAnswer(option)}
                className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-left font-semibold text-slate-800 hover:bg-blue-50"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-blue-600"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </main>
  );
}