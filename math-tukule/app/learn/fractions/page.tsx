export default function FractionsLesson() {
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
            What is 1/2 written as a decimal?
          </p>

          <p className="mt-4 text-slate-600">
            Think about dividing 1 by 2.
          </p>
        </div>
      </div>
    </main>
  );
}