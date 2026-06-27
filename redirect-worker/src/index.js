export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === "/lumo" || path.startsWith("/lumo/")) {
      const rest = path.slice("/lumo".length);
      const dest = `https://lumo.kaseinopro.com${rest || "/"}${url.search}`;
      return Response.redirect(dest, 301);
    }

    return fetch(request);
  },
};
