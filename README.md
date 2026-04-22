# 🚀 Harsh Agrawal — Portfolio

Personal portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.  
Design inspired by bold editorial aesthetics — yellow/black/white color scheme.

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css        ← All global styles & animations
│   │   ├── layout.tsx         ← Root layout + Vercel Analytics
│   │   └── page.tsx           ← Main page (assembles all sections)
│   ├── components/
│   │   ├── Navbar.tsx         ← Fixed top navigation
│   │   ├── Hero.tsx           ← Landing / hero section
│   │   ├── About.tsx          ← Bio, education, certifications
│   │   ├── Skills.tsx         ← Skills grid + marquee strip
│   │   ├── Projects.tsx       ← Project cards with GitHub/live links
│   │   ├── Contact.tsx        ← Contact + social links
│   │   ├── Footer.tsx         ← Footer
│   │   └── Cursor.tsx         ← Custom animated cursor
│   └── data/
│       └── portfolio.ts       ← ⭐ ALL YOUR DATA LIVES HERE
├── public/
│   └── resume.pdf             ← Drop your resume PDF here
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## 🛠️ Local Setup

### 1. Install Node.js
Download from https://nodejs.org (version 18 or higher)

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open http://localhost:3000 — your portfolio is live locally!

---

## ➕ How to Add a New Project

Open `src/data/portfolio.ts` and find the `projects` array.  
Copy this block and fill in your details:

```ts
{
  title: "Your Project Name",
  description: "One or two lines about what it does and what problem it solves.",
  tech: ["Python", "React", "Node.js"],          // tech stack tags
  github: "https://github.com/HarshCode05/repo", // your repo link
  live: "https://your-project.vercel.app",        // live URL or "#" if none
  featured: false,                                // set true to show FEATURED badge
},
```

That's it — save the file and the card appears automatically. No other files to touch.

---

## 🔗 How to Update Social Links

Open `src/data/portfolio.ts` → find the `social` object:

```ts
social: {
  github: "https://github.com/HarshCode05",
  linkedin: "https://linkedin.com/in/harshagrawal050903/",
  email: "mailto:harshagrawal050903@gmail.com",
  instagram: "https://instagram.com/YOUR_HANDLE",  // ← update this
},
```

---

## 📄 How to Add Your Resume PDF

1. Export your resume as a PDF
2. Rename it to `resume.pdf`
3. Drop it inside the `public/` folder
4. The "Download CV" button in the hero section will work automatically

---

## 🌐 Deploying to Vercel (Free)

### First time setup:

**Step 1** — Push your code to GitHub
```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/HarshCode05/portfolio.git
git push -u origin main
```

**Step 2** — Deploy on Vercel
1. Go to https://vercel.com and sign up with GitHub
2. Click **"Add New Project"**
3. Select your `portfolio` repository
4. Click **"Deploy"** — Vercel auto-detects Next.js, no config needed
5. Your site is live at `https://your-name.vercel.app` in ~2 minutes!

**Step 3** — Every future update
```bash
git add .
git commit -m "add new project"
git push
```
Vercel auto-redeploys on every push. 🎉

---

## 📊 Visitor Analytics (Who's Visiting Your Portfolio)

Analytics is already set up using **Vercel Analytics** (free).

After deploying:
1. Go to https://vercel.com → your project
2. Click the **"Analytics"** tab
3. You'll see: page views, unique visitors, countries, devices, top pages

> No API keys or extra config needed — it works automatically once deployed.

---

## 🎨 Customization

| What to change | Where |
|---|---|
| Your name, bio, tagline | `src/data/portfolio.ts` |
| Add/edit projects | `src/data/portfolio.ts` → `projects` array |
| Add/edit skills | `src/data/portfolio.ts` → `skills` array |
| Colors | `src/app/globals.css` → `:root` variables |
| Fonts | `src/app/globals.css` → `@import` + `body` |
| Nav links | `src/components/Navbar.tsx` → `navLinks` array |

---

## 🐛 Common Issues

**`npm install` fails** → Make sure Node.js 18+ is installed: `node -v`

**Custom cursor not showing** → Normal on mobile. Works on desktop only.

**Analytics not showing data** → It only works after deploying to Vercel, not in local dev.

**`resume.pdf` 404** → Make sure the file is in `/public/resume.pdf` exactly.

---

Built with ❤️ by Harsh Agrawal
