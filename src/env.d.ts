/// <reference types="astro/client" />

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

interface Env {
  EMIFY_AB_EVENTS: KVNamespace;
}

declare namespace App {
  interface Locals extends Runtime {}
}
