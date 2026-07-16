import type { Metadata } from "next";
import { AppShell } from "../../components/app-shell";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <AppShell title="Ilaila">
      <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--primary)]">
              Account
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-[color:var(--foreground)]">
              Profile overview
            </h1>
          </div>
          <div className="rounded-full bg-[color:var(--muted)] px-4 py-2 text-sm font-medium text-[color:var(--text-secondary)]">
            Authenticated user
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--muted)]/70 p-5">
            <p className="text-sm font-medium text-[color:var(--text-secondary)]">Name</p>
            <p className="mt-2 text-lg font-semibold text-[color:var(--foreground)]">Alex Rivera</p>
          </div>
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--muted)]/70 p-5">
            <p className="text-sm font-medium text-[color:var(--text-secondary)]">Email</p>
            <p className="mt-2 text-lg font-semibold text-[color:var(--foreground)]">alex@example.com</p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
