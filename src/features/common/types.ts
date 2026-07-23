type ActionResult<TResult> = Promise<
  | { type: "success"; data: TResult }
  | {
      type: "failure";
      failureReason: "validation";

      // Field-level errors mapped directly from Zod: { fieldName: ["Error 1", "Error 2"] }
      fieldErrors?: Record<string, string[]>;
    }
  | {
      type: "failure";
      failureReason: "unauthorized" | "not_found" | "generic";
      message?: string;
    }
>;

export type { ActionResult };
