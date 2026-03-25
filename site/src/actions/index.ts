import { defineAction } from "astro:actions";
import { z } from "astro/zod";

const greet = defineAction({
  input: z.string(),
  handler: async (input) => {
    return `Hello, ${input}!`;
  },
});

export const server = { greet };
