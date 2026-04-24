import { defineMiddleware } from "astro:middleware";
import { getOrAssignVariant, buildCookieHeader } from "./workers/ab-router";

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.url.pathname !== "/") return next();

  const cookieHeader = context.request.headers.get("cookie");
  const { variant, isNew } = getOrAssignVariant(cookieHeader);

  if (isNew) {
    context.cookies.set("emify_variant", variant, {
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
      sameSite: "lax",
      secure: true,
    });
  }

  // Rewrite to the variant page — URL stays at / in the browser
  return context.rewrite(variant === "A" ? "/index-a" : "/index-b");
});
