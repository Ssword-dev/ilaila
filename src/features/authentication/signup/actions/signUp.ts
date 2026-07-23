"use server";
import crypto from "node:crypto";
import { ActionResult } from "@/features/common/types";
import type z from "zod";
import schema from "../schema";
import { hash } from "@/features/authentication/lib/password";
import { prisma } from "@/lib/prisma";
import { User } from "@/generated/prisma/client";

async function signUp(
  data: z.infer<typeof schema>,
): ActionResult<Omit<User, "passwordHash">> {
  const formValidation = schema.safeParse(data);

  if (!formValidation.success) {
    return {
      type: "failure",
      failureReason: "validation",
      fieldErrors: formValidation.error.flatten().fieldErrors,
    };
  }

  const form = formValidation.data;
  const passwordHash = hash(form.password);

  try {
    const user = await prisma.user.create({
      data: {
        id: crypto.randomUUID(),
        userName: form.userName,
        email: form.email,
        passwordHash: passwordHash,
        role: "user",
      },
    });

    return {
      type: "success",
      data: {
        id: user.id,
        userName: user.userName,
        email: user.email,
        role: user.role,
      },
    };
  } catch (_) {
    return {
      type: "failure",
      failureReason: "generic",
    };
  }
}

export default signUp;
