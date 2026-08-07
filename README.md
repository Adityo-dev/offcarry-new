# 🛍️ OffCarry - Modern E-Commerce Platform

![OffCarry Banner](/public/logo/offcarry.svg)

[![Next.js](https://img.shields.io/badge/Next.js-16.1.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-Package_Manager-orange?style=for-the-badge&logo=pnpm)](https://pnpm.io/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**OffCarry** is a state-of-the-art, responsive E-Commerce platform built with **Next.js 16 (App Router & Turbopack)**, **TypeScript**, and **Tailwind CSS v4**. It features an elegant shopping experience, modern navigation components, interactive UI elements, and a clean, production-grade architecture.

---

## ✨ Features

- ⚡ **Next.js 16 & Turbopack**: Blazing fast server-side rendering, static generation, and instant HMR.
- 🎨 **Modern Design System**: Styled with Tailwind CSS v4, Glassmorphism, smooth animations, and curated color palettes.
- 🧩 **Shadcn UI & Radix UI Primitives**: Accessible UI components including Buttons, Tabs, Sheets, Navigation Menus, and Dialogs.
- 📱 **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop screen sizes with dedicated Mobile Navigation.
- ✉️ **Newsletter Integration**: Built-in newsletter subscription component with real-time feedback.
- 🔒 **Authentication Ready**: Integrated AuthProvider state structure with NextAuth setup.
- 🧹 **Production-Grade Cleanliness**: Strict ESLint, Prettier, Husky pre-commit hooks, and TypeScript configuration.

---

## 🛠️ Tech Stack

| Technology | Description |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Form Handling & Validation** | React Hook Form + Zod |
| **Package Manager** | [pnpm](https://pnpm.io/) |
| **Linting & Code Quality** | ESLint + Prettier + Husky + lint-staged |

---

## 🚀 Getting Started

Follow these steps to run **OffCarry** locally on your machine:

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0 or later)
- [pnpm](https://pnpm.io/) (v9.0 or later)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Adityo-dev/offcarry-new.git
   cd offcarry-new
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📜 Available Scripts

In the project directory, you can run:

- `pnpm dev` – Starts the development server with Turbopack.
- `pnpm build` – Builds the application for production.
- `pnpm start` – Runs the built production application.
- `pnpm lint` – Runs ESLint check across all files.
- `pnpm lint:fix` – Automatically fixes ESLint errors and warnings.
- `pnpm format` – Checks code formatting with Prettier.
- `pnpm format:fix` – Formats code with Prettier.
- `pnpm typecheck` – Runs TypeScript compiler check (`tsc --noEmit`).

---

## 📁 Project Structure

```text
offcarry-new/
├── public/                     # Static assets (logos, images, icons)
├── scripts/                    # CI/CD and pre-commit hook scripts
├── src/
│   ├── app/                    # Next.js App Router (pages & layouts)
│   │   ├── (auth)/             # Authentication routes
│   │   ├── (main)/             # Main application layout & pages
│   │   │   └── (home)/         # Home page components
│   │   ├── dashboard/          # Admin / User dashboard routes
│   │   ├── globals.css         # Global Tailwind CSS styles
│   │   └── layout.tsx          # Root layout & metadata
│   ├── components/
│   │   ├── main/               # Main layout components (Navbar, Footer, Newsletter)
│   │   └── ui/                 # Reusable UI components (Button, Sheet, Tabs, etc.)
│   ├── lib/                    # Utility functions (cn helper, etc.)
│   └── providers/              # Context providers (Auth, Theme)
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

---

## 👤 Author

Developed by **[Aditto Dev Barmon (Adityo-dev)](https://github.com/Adityo-dev)**.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
