export default function ProgressPage() {
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

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold text-blue-600">
          MATHTUKULE • PROGRESS
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-900">
          My Progress
        </h1>

        <p className="mt-3 text-slate-600">
          Track the Grade 7 Mathematics topics you are learning.
        </p>

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
                Not completed yet
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}