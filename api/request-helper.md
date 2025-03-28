# 🌐 Axios Request Wrapper for API Calls

A reusable helper for making HTTP requests in your frontend (e.g., React/Next.js).  
It handles success, error responses, and toast notifications out of the box.

---

## ✨ Features

- ✅ Supports all HTTP methods (`GET`, `POST`, `PATCH`, `DELETE`, etc.)
- ✅ Automatically shows toast errors (except for excluded routes)
- ✅ Handles `FormData` and `JSON` payloads
- ✅ Supports full or relative URLs
- ✅ Sends cookies with `withCredentials`

---

## 📦 Usage

```ts
import request from "@/utils/api/request";

const res = await request("/cart", "GET");

if (res.success) {
  console.log("Cart Data:", res.data);
} else {
  console.error("API Error:", res.error);
}
