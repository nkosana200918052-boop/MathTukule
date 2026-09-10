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
    <Link
  href="/practice/fractions"
  className="mt-4 block rounded-2xl bg-white p-5 shadow-sm"
>
  <p className="text-lg font-bold text-slate-900">
    Fractions & Decimals
  </p>
  <Link
  href="/practice/algebra"
  className="mt-4 block rounded-2xl bg-white p-5 shadow-sm"
>
  <p className="text-lg font-bold text-slate-900">
    Algebra
  </p>

  <p className="mt-1 text-sm text-slate-600">
    Practise equations and basic algebra skills.
  </p>
  <Link
  href="/practice/geometry"
  className="mt-4 block rounded-2xl bg-white p-5 shadow-sm"
>
  <p className="text-lg font-bold text-slate-900">
    Geometry
  </p>
  <Link
  href="/practice/data-handling"
  className="mt-4 block rounded-2xl bg-white p-5 shadow-sm"
>
  <p className="text-lg font-bold text-slate-900">
    Data Handling
  </p>
<Link
  href="/practice/measurement"
  className="mt-4 block rounded-2xl bg-white p-5 shadow-sm"
>
  <p className="text-lg font-bold text-slate-900">
    Measurement
  </p>
  <Link
  href="/practice/probability"
  className="mt-4 block rounded-2xl bg-white p-5 shadow-sm"
>
  <p className="text-lg font-bold text-slate-900">
    Probability
  </p>
  <Link
  href="/practice/patterns-functions"
  className="mt-4 block rounded-2xl bg-white p-5 shadow-sm"
>
  <p className="text-lg font-bold text-slate-900">
    Patterns and Functions
  </p>

  <p className="mt-1 text-sm text-slate-600">
    Practise number patterns, rules and sequences.
  </p>
</Link>

  <p className="mt-1 text-sm text-slate-600">
    Practise simple probability and chance.
  </p>
</Link>

  <p className="mt-1 text-sm text-slate-600">
    Practise length conversions and measurement skills.
  </p>
</Link>
  <p className="mt-1 text-sm text-slate-600">
    Practise mean, median and data skills.
  </p>
</Link>

  <p className="mt-1 text-sm text-slate-600">
    Practise angles and basic geometry skills.
  </p>
</Link>
</Link>

  <p className="mt-1 text-sm text-slate-600">
    Practise fractions, decimals and equivalent values.
  </p>
</Link>
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