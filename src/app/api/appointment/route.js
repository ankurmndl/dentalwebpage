export async function POST(req) {
    try {
      const body = await req.json();
  
      const res = await fetch("https://script.google.com/macros/s/AKfycbyDstljLVMdMJPPmzfbAAeFokqBIudX69M3muXNVwCjr09m5sci0dBMNeVbwThaekXn/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
  
      const data = await res.json();
  
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (err) {
      console.error("Error in API route:", err);
      return new Response(JSON.stringify({ status: "error", message: err.message }), { status: 500 });
    }
  }
  