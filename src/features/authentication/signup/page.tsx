"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import z from "zod";
import schema from "./schema";
import { useTransition } from "react";
import signUp from "./actions/signUp";
import { Input } from "@/components/ui/input";

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.input<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  // 2. Handle form submission
  const onSubmit = (data: z.input<typeof schema>) => {
    startTransition(async () => {
      const result = await signUp(data);

      if (result.type === "failure") {
        console.log("Server validation or generic error:", result);
      } else {
        console.log("Success! User created:", result.data);
      }
    });
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Card className="p-2 min-w-60">
        <CardHeader>
          <CardTitle>Sign up</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel>User Name</FieldLabel>
                <Input {...register("userName")} type="text" />
              </Field>
              <Field>
                <FieldLabel>Whateva</FieldLabel>
                <Input {...register("email")} type="text" />
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
