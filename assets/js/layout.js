document.addEventListener("DOMContentLoaded", async () => {

  // 1️⃣ Save blog body content
  const blogContent = document.body.innerHTML;

  // 2️⃣ Load layout (header + footer)
  const layoutHTML = await fetch("/layout.html").then(r => r.text());

  // 3️⃣ Replace body with layout
  document.body.innerHTML = layoutHTML;

  // 4️⃣ Inject blog content into layout
  const slot = document.getElementById("content-slot");
  if (slot) {
    slot.innerHTML = blogContent;
  }

});
