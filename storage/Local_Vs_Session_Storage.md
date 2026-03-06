# Web Storage API: localStorage vs sessionStorage

## Overview
Both `localStorage` and `sessionStorage` allow you to store key–value pairs in the browser.  
The main difference lies in **lifetime** and **scope**.

---

## Comparison Table

| Feature                  | localStorage | sessionStorage |
|---------------------------|--------------|----------------|
| **Lifetime**              | Persistent — data stays until explicitly removed (via code or clearing site data). | Temporary — data is cleared when the tab or browser window is closed. |
| **Scope**                 | Shared across all tabs/windows from the same origin (protocol + host + port). | Unique to each tab/window. Opening the same site in a new tab starts fresh. |
| **Capacity**              | ~5MB per origin (varies by browser). | ~5MB per origin (same limit as localStorage). |
| **API Methods**           | `setItem(key, value)`, `getItem(key)`, `removeItem(key)`, `clear()`. | Same API methods as localStorage. |
| **Use Cases**             | Saving user preferences, themes, tokens, or data that should persist across sessions. | Temporary state like form drafts, shopping cart for one tab, or login state for a single session. |
| **Accessibility**         | Only accessible from the same origin (protocol, host, port). | Same origin restriction applies. |
| **Persistence Across Tabs** | Yes — multiple tabs from the same origin share the same localStorage. | No — each tab has its own isolated sessionStorage. |
| **Persistence Across Browser Restarts** | Yes — survives browser restarts. | No — cleared when the tab/browser closes. |

---

## Summary
- **localStorage** → Long‑term storage, shared across tabs, survives browser restarts.  
- **sessionStorage** → Short‑term storage, isolated per tab, cleared when the tab closes.  

Both localStorage and sessionStorage are scoped to the origin, which is defined by the combination of:

Protocol: (http vs https)
Host: (domain name, e.g., example.com)
Port: (e.g., :80, :443, or a custom port like :3000)

🔑 What That Means
If you save something in https://example.com:443, it’s only accessible to pages loaded from that exact origin.

http://example.com (different protocol) → cannot access it.

https://sub.example.com (different host) → cannot access it.

https://example.com:3000 (different port) → cannot access it.
