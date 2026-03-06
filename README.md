# 🎤 Antihero PR Website

A modern public relations agency website built with Next.js, TypeScript, and Sass.
The site showcases services, artist roster, press coverage, downloadable media assets, and a working contact form.

Designed as a real-world PR agency website, the project focuses on clean editorial design, responsive layouts, and structured content for media and industry professionals.

---

## 🚀 Live Demo

Coming soon.

---

## ✨ Features

- 🎨 Modern editorial-style layout
- 📱 Fully responsive design
- 🎤 Artist roster section
- 📰 Press coverage archive with dynamic article pages
- 📸 Featured press images and campaign highlights
- 📦 Media Kit page with downloadable assets
- 📬 Contact form with server-side API route
- 🔗 Active navigation highlighting
- 📄 Dynamic metadata for press articles
- ⚡ Static generation for press pages via generateStaticParams

---

## 🧰 Tech Stack

### Framework

- Next.js (App Router)

### Language

- TypeScript

### Styling

- Sass / SCSS Modules

### UI / Interaction

- Swiper (carousel components)
- Lucide React (icons)
- Framer Motion (optional animation)

### Email

- Resend (contact form email delivery)

### Image Optimization

- Next.js next/image

---

## 📂 Project Structure

```txt
src
├─ app
│  ├─ about
│  ├─ contact
│  ├─ media-kit
│  ├─ press
│  │  └─ [slug]
│  ├─ roster
│  ├─ services
│  └─ api
│     └─ contact
│
├─ components
│  ├─ contact
│  ├─ home
│  ├─ layout
│  ├─ media-kit
│  ├─ press
│  ├─ roster
│  ├─ services
│  └─ shared
│
├─ data
│  ├─ mediaKit.ts
│  ├─ press.ts
│  ├─ roster.ts
│  └─ services.ts
│
├─ styles
│
public
├─ images
│  ├─ bands
│  └─ press
└─ media-kit
```

## 📰 Press System

Press releases are stored as structured data:

    src/data/press.ts

Each entry contains:

- slug
- title
- date
- excerpt
- featured image
- article content

Dynamic pages are generated using:

    generateStaticParams()

Resulting routes look like:

    /press/obsidian-throne-announces-new-album
    /press/grave-static-confirms-spring-tour

Each article includes:

- featured image
- article body
- previous/next navigation
- back-to-press link
- SEO metadata

---

## 📦 Media Kit

The Media Kit page provides resources for journalists and partners:

- downloadable PDF media kit
- logo packs
- press photos
- approved company boilerplate
- quick company facts

Files are served from:

    public/media-kit/

---
