export async function GET() {
    const pages = [
      { url: "https://www.raevdesign.com/", lastModified: "2025-02-01" },
      { url: "https://www.raevdesign.com/za-nas", lastModified: "2025-02-01" },
      { url: "https://www.raevdesign.com/kontakti", lastModified: "2025-02-01" },
      { url: "https://www.raevdesign.com/galeria", lastModified: "2025-02-01" } // Corrected date format
    ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${page.url}</loc>
      <lastmod>${page.lastModified}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join("")}
  </urlset>`;
  
    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml"
      }
    });
  }
  