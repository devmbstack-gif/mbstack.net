import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center section-padding">
      <div className="page-container max-w-lg text-center">
        <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">
          404
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mb-3">
          Page not found
        </h1>
        <p className="text-stone-500 text-sm sm:text-base mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto min-h-12 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand text-white font-semibold hover:bg-brand-dark transition-colors touch-manipulation"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto min-h-12 inline-flex items-center justify-center px-6 py-3 rounded-xl border border-stone-200 text-stone-700 font-semibold hover:bg-stone-50 transition-colors touch-manipulation"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
