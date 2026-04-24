import { defineMiddleware } from "astro:middleware";

// A/B routing is handled directly in src/pages/index.astro.
// This middleware is a passthrough kept for future edge logic.
export const onRequest = defineMiddleware(async (_context, next) => next());
