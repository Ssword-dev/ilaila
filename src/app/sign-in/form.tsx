'use client';

import { signIn } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function SignInForm() {
  return (
    <div className="mx-auto max-w-md rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-sm">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--primary)]">
          Welcome back
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-[color:var(--foreground)]">
          Log in to continue
        </h1>
      </div>

      <div className="space-y-4 w-full">
        <Button className="w-full p-2 rounded-md text-primary-foreground" variant="default" onClick={() => signIn("google")}>
          Login with Google
        </Button>
      </div>

      <p className="mt-6 text-sm text-[color:var(--text-secondary)]">
        New here?{" "}
        <Link
          href="/register"
          className="font-semibold text-[color:var(--primary)]"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}

export default SignInForm;