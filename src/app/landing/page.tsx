import Link from "next/link";
import type { Metadata } from "next";
import { AppShell } from "../../components/app-shell";

export const metadata: Metadata = {
  title: "Landing",
};

export default function LandingPage() {
  return (
    <AppShell
      title="Ilaila"
      hero={
        <>
          <span className="mb-4 rounded-full bg-[color:var(--primary-muted)] px-3 py-1 text-sm font-medium text-[color:var(--primary)]">
            Discover great food businesses
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[color:var(--foreground)] sm:text-5xl">
            Showcase and explore food businesses in one place.
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)]">
            Find standout cafés, bakeries, food trucks, and local eateries with a simple, warm, and modern experience.
          </p>
          <Link
            href="/home"
            className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Browse businesses
          </Link>
        </>
      }
    />
  );
}
