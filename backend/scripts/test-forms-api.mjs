/**
 * End-to-end API test for contact + consultancy forms.
 * Requires Postgres + backend running on PORT (default 3701).
 */

const API = process.env.API_URL ?? `http://localhost:${process.env.PORT ?? 3701}/api`;

async function request(pathname, body) {
  const res = await fetch(`${API}${pathname}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

async function main() {
  console.log("Checking API health at", API);
  const health = await fetch(`${API}/health`);
  if (!health.ok) {
    console.error("FAIL: Backend not reachable. Run: npm run db:up && npm run db:setup && npm run dev:backend");
    process.exit(1);
  }
  console.log("OK:", await health.json());

  console.log("\n1. Contact form...");
  const contact = await request("/contact", {
    name: "API Test User",
    email: "test@mbstack.net",
    message: "Automated end-to-end contact form test.",
  });
  if (!contact.ok || !contact.data.success) {
    console.error("FAIL contact:", contact.status, contact.data);
    process.exit(1);
  }
  console.log("OK:", contact.data.message);

  console.log("\n2. Consultancy form...");
  const consultancy = await request("/consultancy", {
    name: "API Test User",
    email: "test@mbstack.net",
    type: "Web Development",
    budget: "$5,000 - $10,000",
    description: "Automated end-to-end consultancy test.",
  });
  if (!consultancy.ok || !consultancy.data.success) {
    console.error("FAIL consultancy:", consultancy.status, consultancy.data);
    process.exit(1);
  }
  console.log("OK:", consultancy.data.message);

  console.log("\nAll API form tests passed.");
}

main().catch((err) => {
  console.error("FAIL:", err.message);
  process.exit(1);
});
