document.addEventListener("DOMContentLoaded", async () => {

  // 1️⃣ Save blog article content
  const blogContent = document.querySelector('article');
  const contentHTML = blogContent ? blogContent.outerHTML : document.body.innerHTML;

  // 2️⃣ Load header_footer.html
  const layoutHTML = await fetch("/header_footer.html").then(r => r.text());

  // 3️⃣ Replace body with layout
  document.body.innerHTML = layoutHTML;

  // 4️⃣ Inject blog content into content-slot
  const slot = document.getElementById("content-slot");
  if (slot) {
    slot.innerHTML = contentHTML;
  }

});