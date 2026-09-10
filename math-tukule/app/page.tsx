import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold text-blue-600">
          MATHTUKULE
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-900">
          Grade 7 Mathematics Tutor
        </h1>

        <p className="mt-3 text-slate-600">
          Learn, practise and track your Grade 7 Mathematics progress.
        </p>

        <div className="mt-8 space-y-4">
          <Link
            href="/diagnostic"
            className="block rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white"
          >
            Start Diagnostic
          </Link>
          <Link
  href="/practice"
  className="block rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 shadow-sm"
>
  Practice Mathematics
</Link>

          <Link
            href="/progress"
            className="block rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 shadow-sm"
          >
            My Progress
          </Link>
        </div>
      </div>
    </main>
  );
}