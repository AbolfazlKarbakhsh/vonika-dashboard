# ⚡️ Vonika Dash

> **An Open-Source, Scalable, and Modern Dashboard built with React, TypeScript, Shadcn/UI, and TailwindCSS.**

Vonika Dash is a **modern, extensible, and multilingual dashboard template** built for developers who want to create professional admin panels, analytics dashboards, or data-driven applications.  
It features a clean architecture, modular structure, and reusable UI components — built for speed, clarity, and scalability.

---

## 🚀 Key Features

- 🧱 **Modular Architecture** — clean, scalable folder structure  
- 🎨 **Elegant Design** — built with Shadcn/UI + TailwindCSS  
- 🌗 **Dark & Light Themes** out of the box  
- 🌐 **Bilingual Ready (FA / EN)**  
- 📊 **Recharts Integration** for analytics and visualization  
- ⚙️ **TypeScript-first** approach for safety and clarity  
- 🧩 **Reusable UI Components** (Button, Drawer, Sidebar, Tooltip, etc.)  
- ⚡️ **Vite-based build system** for blazing-fast development  
- 🔓 100% **Open Source (MIT License)**

---


---

## 🧩 Architecture Philosophy

Vonika Dash follows a **feature-based modular architecture**, designed for scalability and clarity.

| Layer | Description |
|-------|--------------|
| **components/ui/** | Atomic and reusable Shadcn-based UI components |
| **features/** | Feature-based pages (e.g., Home, Analytics, Users) |
| **core/** | Core logic such as app constants, types, and utilities |
| **layouts/** | High-level layout compositions (e.g., Sidebar, Header) |
| **store/** | State management layer (Zustand or React Context) |
| **lib/** | Utility and helper functions |
| **hooks/** | Custom React hooks |
| **router.tsx** | Centralized app routing configuration |

This modular approach allows developers to scale the project easily, reuse components, and keep logic isolated per feature.

---

## ⚙️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | **React 18 + TypeScript** |
| Build Tool | **Vite** |
| UI Library | **Shadcn/UI + TailwindCSS** |
| Charts | **Recharts** |
| State Management | **Zustand / TanStack Query** |
| Linting | **ESLint + Prettier** |
| Deployment | **Vercel / Netlify** |

---

## 🧪 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/vonika-dash.git
cd vonika-dash

# Install dependencies
npm install

# Run development server
npm run dev
