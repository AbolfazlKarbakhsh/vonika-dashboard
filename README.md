# ⚡️ Vonika Dash

> **An Open-Source, Scalable, and Modern Dashboard built with React, TypeScript, Shadcn/UI, and TailwindCSS.**

Vonika Dash is a **modern, extensible, and multilingual dashboard template** built for developers who want to create professional admin panels, analytics dashboards, or data-driven applications.  
It features a clean architecture, modular structure, and reusable UI components — built for speed, clarity, and scalability.  
💬 **Fully supports Persian (Farsi) and English languages out of the box.**

---

# ⚡️ ونیکا دش (Vonika Dash)

> **یک داشبورد مدرن، متن‌باز و مقیاس‌پذیر ساخته‌شده با React، TypeScript، Shadcn/UI و TailwindCSS**

ونیکا دش یک **الگوی داشبورد مدرن، توسعه‌پذیر و چندزبانه** است که برای توسعه‌دهندگانی طراحی شده که می‌خواهند پنل‌های مدیریتی حرفه‌ای، داشبوردهای تحلیلی یا اپلیکیشن‌های داده‌محور بسازند.  
این پروژه دارای معماری تمیز، ساختار ماژولار و کامپوننت‌های قابل‌استفاده‌مجدد است — ساخته‌شده برای سرعت، وضوح و مقیاس‌پذیری.  
💬 **به‌صورت پیش‌فرض از زبان‌های فارسی و انگلیسی پشتیبانی می‌کند.**

---

## 🚀 Key Features / ویژگی‌های کلیدی

- 🧱 **Modular Architecture / معماری ماژولار** — ساختار پوشه‌ای تمیز و قابل توسعه  
- 🎨 **Elegant Design / طراحی زیبا** — ساخته‌شده با Shadcn/UI و TailwindCSS  
- 📊 **Recharts Integration / پشتیبانی از نمودارها و تحلیل داده**  
- ⚙️ **TypeScript-first / تمرکز بر تایپ‌سیفتی با TypeScript**  
- 🧩 **Reusable UI Components / کامپوننت‌های رابط کاربری قابل استفاده مجدد**  
- ⚡️ **Vite-based build system / سیستم ساخت سریع با Vite**  
- 🔓 **100% Open Source (MIT License) / کاملاً متن‌باز با لایسنس MIT**

---

## 🧩 Architecture Philosophy / فلسفه معماری

Vonika Dash follows a **feature-based modular architecture**, designed for scalability and clarity.

ونیکا دش از یک **معماری ماژولار مبتنی بر ویژگی‌ها (Feature-based)** پیروی می‌کند که برای مقیاس‌پذیری و خوانایی طراحی شده است.

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

این ساختار باعث می‌شود توسعه‌دهندگان بتوانند پروژه را به‌آسانی گسترش دهند، منطق هر بخش را جدا نگه دارند و کامپوننت‌ها را مجدداً استفاده کنند.

---

## ⚙️ Tech Stack / پشته فناوری

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

## 🧪 Getting Started / شروع کار

```bash
# Clone the repository / کلون کردن ریپازیتوری
git clone https://github.com/AbolfazlKarbakhsh/vonika-dash.git
cd vonika-dash

# Install dependencies / نصب وابستگی‌ها
npm install

# Run development server / اجرای سرور توسعه
npm run dev
