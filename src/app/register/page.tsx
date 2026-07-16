import Link from "next/link";
import type { Metadata } from "next";
import { AppShell } from "../../components/app-shell";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <AppShell title="Ilaila">
      <div className="mx-auto max-w-md rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-sm">
        <div className="mb-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--primary)]">
            Start with Ilaila
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[color:var(--foreground)]">
            Create your account
          </h1>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-[color:var(--foreground)]" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--primary)]"
              placeholder="Alex Rivera"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-[color:var(--foreground)]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--primary)]"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-[color:var(--foreground)]" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--primary)]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[color:var(--secondary)] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Sign up
          </button>
        </form>

        <p className="mt-6 text-sm text-[color:var(--text-secondary)]">
          Already have an account? <Link href="/login" className="font-semibold text-[color:var(--primary)]">Log in</Link>
        </p>
      </div>
    </AppShell>
  );
}
