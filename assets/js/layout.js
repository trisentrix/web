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

  // 5️⃣ Fix Cloudflare email obfuscation
  document.querySelectorAll('[data-cfemail]').forEach(el => {
    el.textContent = 'contactus@trisentrix.com';
    el.closest('a').href = 'mailto:contactus@trisentrix.com';
  });

  // 5️⃣ Reload plugins and theme JS AFTER body is replaced
  const plugins = document.createElement('script');
  plugins.src = '/assets/js/plugins.js';
  document.body.appendChild(plugins);

  plugins.onload = () => {
    const theme = document.createElement('script');
    theme.src = '/assets/js/theme.js';
    document.body.appendChild(theme);
  };
  

});