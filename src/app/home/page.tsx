import type { Metadata } from "next";
import { AppShell } from "../../components/app-shell";

export const metadata: Metadata = {
  title: "Home",
};

const featuredPlaces = [
  {
    name: "Baker's Corner",
    description: "Warm pastries, modern coffee, and a cozy neighborhood feel.",
  },
  {
    name: "The Lantern Cart",
    description: "Street food favorites with nightly specials and handmade sauces.",
  },
];

export default function HomePage() {
  return (
    <AppShell title="Ilaila">
      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-sm ring-1 ring-[color:var(--border)]/70">
        <div className="mb-6 inline-flex rounded-full bg-[color:var(--primary-muted)] px-3 py-1 text-sm font-medium text-[color:var(--primary)]">
          Featured today
        </div>
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
          Welcome to the home page
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)]">
          This is a polished placeholder card for the main experience while the real food business content is being built.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {featuredPlaces.map((place) => (
            <div
              key={place.name}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--muted)]/70 p-5"
            >
              <h2 className="text-lg font-semibold text-[color:var(--foreground)]">{place.name}</h2>
              <p className="mt-2 text-sm leading-7 text-[color:var(--text-secondary)]">
                {place.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
