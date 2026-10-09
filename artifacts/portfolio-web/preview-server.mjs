import { createServer, request as requestSite } from "node:http";

// Register a website Preview without replacing or duplicating the Jekyll site.
// Jekyll remains the root service; the frame uses that same-origin service.
const port = Number(process.env.PORT);
const basePath = process.env.BASE_PATH?.replace(/\/$/, "");
if (!Number.isInteger(port) || port <= 0 || port > 65535 || !basePath) {
  throw new Error("Preview requires valid PORT and BASE_PATH settings.");
}

function escapeAttribute(value) {
  return value.replace(/[&"<>]/g, (character) => ({
    "&": "&amp;", '"': "&quot;", "<": "&lt;", ">": "&gt;",
  })[character]);
}

createServer((request, response) => {
  const url = new URL(request.url, "http://preview.invalid");
  if (!["GET", "HEAD"].includes(request.method)) {
    response.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }
  if (url.pathname !== basePath && !url.pathname.startsWith(`${basePath}/`)) {
    // The router sends root URLs to Jekyll. Forward them here too so that
    // direct-port browsers display the same site as the workspace Preview.
    const upstream = requestSite({
      hostname: "127.0.0.1",
      port: 5000,
      path: url.pathname + url.search,
      method: request.method,
      headers: { ...request.headers, host: "127.0.0.1:5000" },
    }, (siteResponse) => {
      response.writeHead(siteResponse.statusCode, siteResponse.headers);
      siteResponse.pipe(response);
    });
    upstream.on("error", () => {
      response.writeHead(502, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Jekyll is unavailable. Start the Jekyll Preview workflow.");
    });
    upstream.setTimeout(10000, () => upstream.destroy());
    request.pipe(upstream);
    return;
  }
  const pagePath = url.pathname.slice(basePath.length) || "/";
  const source = escapeAttribute(pagePath + url.search);
  response.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  });
  response.end(request.method === "HEAD" ? undefined : `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Taylor Dahlgren Portfolio — Preview</title>
<style>html,body{width:100%;height:100%;margin:0}iframe{display:block;width:100%;height:100dvh;border:0}</style>
</head><body><iframe src="${source}" title="Taylor Dahlgren portfolio"></iframe></body></html>`);
}).listen(port, "0.0.0.0", () => {
  console.log(`Portfolio website Preview listening on port ${port} at ${basePath}/`);
});
