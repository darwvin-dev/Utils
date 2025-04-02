# 🔁 Powerful `.htaccess` URL Rewrite Rules for SEO & Clean URLs

This `.htaccess` snippet provides a set of advanced and SEO-friendly rewrite rules designed to improve the structure, readability, and indexing of your URLs. Ideal for Apache servers hosting HTML-based or static websites, these rules ensure that URLs are clean, consistent, and compatible with search engine best practices.

---

## 🧩 Why Use This?

Search engines and users both prefer **clean and descriptive URLs**. The default behavior of Apache may expose `.html` extensions or allow inconsistent URL patterns like trailing slashes. This configuration:

- ✅ Automatically redirects URLs without a trailing slash to a proper directory-like format.
- ✅ Adds `.html` extension dynamically (if needed) without revealing it in the URL.
- ✅ Prevents broken links due to missing trailing slashes or file extensions.
- ✅ Helps in **avoiding duplicate content**, one of the top SEO pitfalls.
- ✅ Enhances **crawlability** and user experience.

---

## ⚙️ How It Works

```apache
RewriteEngine On

# Add .html if not present
RewriteRule ^([^/]+)/$ $1.html

# Only rewrite if the file doesn't exist
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^([^/]+)/$ $1.html

# Handle nested directories
RewriteRule ^([^/]+)/([^/]+)/$ /$1/$2.html

# Final redirect for URLs without file extension or trailing slash
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !(\.[a-zA-Z0-9]{1,5}|/)$
RewriteRule (.*)$ /$1/ [R=301,L]
