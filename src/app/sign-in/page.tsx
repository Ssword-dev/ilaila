import type { Metadata } from "next";
import { AppShell } from "../../components/app-shell";
import SignInForm from "./form";

export const metadata: Metadata = {
  title: "Login",
};

export default function SignInPage() {
  return <AppShell title="Ilaila">
    <SignInForm />
  </AppShell>;
}
