import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => {
    return {
      status: {
        code: 200,
        message: "Success fetching the API",
      },
      data: null,
    };
  });

try {
  app.listen(8080);
} catch (e) {
  process.exit(1);
}

console.log(`[SERVER] 🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
