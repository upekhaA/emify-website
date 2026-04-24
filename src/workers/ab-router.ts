/**
 * A/B router — core logic used by src/middleware.ts in the Astro/Cloudflare build.
 *
 * The default export is also a valid standalone Cloudflare Worker that can be
 * deployed as a separate proxy in front of the Pages deployment if needed.
 */

export const COOKIE_NAME = "emify_variant";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export type Variant = "A" | "B";

export function getOrAssignVariant(cookieHeader: string | null): {
  variant: Variant;
  isNew: boolean;
} {
  if (cookieHeader) {
    const match = cookieHeader.match(new RegExp(`${COOKIE_NAME}=([AB])(?:;|$)`));
    if (match) return { variant: match[1] as Variant, isNew: false };
  }
  const variant: Variant = Math.random() < 0.5 ? "A" : "B";
  return { variant, isNew: true };
}

export function buildCookieHeader(variant: Variant): string {
  return `${COOKIE_NAME}=${variant}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax; Secure`;
}

// Standalone Worker export — wraps a Pages deployment acting as an upstream.
// Not used in the Astro hybrid build; middleware.ts handles routing there.
export interface StandaloneEnv {
  ASSETS: Fetcher;
  EMIFY_AB_EVENTS: KVNamespace;
}

export default {
  async fetch(request: Request, env: StandaloneEnv): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname !== "/") {
      return env.ASSETS.fetch(request);
    }

    const { variant, isNew } = getOrAssignVariant(request.headers.get("cookie"));

    const variantUrl = new URL(request.url);
    variantUrl.pathname = variant === "A" ? "/index-a" : "/index-b";

    const response = await env.ASSETS.fetch(new Request(variantUrl.toString(), request));

    if (!isNew) return response;

    const next = new Response(response.body, response);
    next.headers.append("Set-Cookie", buildCookieHeader(variant));
    return next;
  },
};
