export async function GET() {
  return new Response(
    "google-site-verification: google2a6e0be24fb60ebc.html",
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
