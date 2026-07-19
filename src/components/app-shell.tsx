import Link from "next/link";
import type { ReactNode } from "react";

type AppShellProps = {
  title: string;
  children?: ReactNode;
  hero?: ReactNode;
};

export function AppShell({ title, children, hero }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <nav className="border-b border-[color:var(--border)] bg-[color:var(--surface)]/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-[color:var(--primary)]"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--primary)] text-sm font-semibold text-white">
              I
            </span>
            {title}
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/sign-in"
              className="rounded-full border border-[color:var(--border)] px-4 py-2 text-sm font-medium text-[color:var(--text-secondary)] transition hover:bg-[color:var(--muted)]"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      {hero ? (
        <main className="mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center">
          {hero}
        </main>
      ) : (
        <main className="mx-auto max-w-5xl px-6 py-16">{children}</main>
      )}
    </div>
  );
}
