import Link from "next/link";

export default function PracticePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold text-blue-600">
          MATHTUKULE • PRACTICE
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-900">
          Practice Mathematics
        </h1>

        <p className="mt-3 text-slate-600">
          Choose a Grade 7 Mathematics topic to practise.
        </p>
        <Link
  href="/practice/whole-numbers"
  className="mt-6 block rounded-2xl bg-white p-5 shadow-sm"
>
  <p className="text-lg font-bold text-slate-900">
    Whole Numbers
  </p>

  <p className="mt-1 text-sm text-slate-600">
    Practise place value, operations and number skills.
  </p>
</Link>

        <Link
          href="/"
          className="mt-8 inline-block rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}