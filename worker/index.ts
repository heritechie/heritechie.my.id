const CREDORA_PREFIX = "/oss/credora";

interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (
      url.pathname === CREDORA_PREFIX ||
      url.pathname.startsWith(CREDORA_PREFIX + "/")
    ) {
      const rest = url.pathname.slice(CREDORA_PREFIX.length);
      const path = rest === "" ? "/" : rest;
      const target = "https://credora.heritechie.workers.dev" + path + url.search;

      const headers = new Headers(request.headers);
      headers.delete("host");

      return fetch(new Request(target, {
        method: request.method,
        headers,
        body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
        redirect: "manual",
      }));
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
