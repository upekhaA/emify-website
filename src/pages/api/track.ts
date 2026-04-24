export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const body = await request.json();
    const { variant, sessionId, event, path, timestamp } = body;

    if (!variant || !sessionId || !event) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const kv = locals.runtime?.env?.EMIFY_AB_EVENTS;
    if (!kv) {
      // Not available in local dev without wrangler — silently succeed
      return new Response(JSON.stringify({ ok: true }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const key = `${sessionId}:${timestamp ?? Date.now()}`;
    const value = JSON.stringify({ variant, sessionId, event, path, timestamp: timestamp ?? Date.now() });

    await kv.put(key, value, { expirationTtl: 60 * 60 * 24 * 90 }); // 90 days

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
