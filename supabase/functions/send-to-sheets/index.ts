import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const GOOGLE_SCRIPT_URL = Deno.env.get("GOOGLE_SCRIPT_URL") || "";

serve(async (req) => {
  try {
    if (req.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }
    const body = await req.json();
    
    // Forward the data to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    
    const text = await response.text();
    return new Response(text, { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
});
