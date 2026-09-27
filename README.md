# Travel Website

A modern, multi-language tour, travel, and event management website built with **React** and **Vite**. This project was built as a front-end development showcase, demonstrating a full multi-page marketing site with routing, internationalization, and interactive booking/enquiry forms.

## Live Demo

Deployed on [Vercel](https://vercel.com/).

## Features

- **Multi-page site** — Home, Tours & Packages, Package Details, Travel Services, Event Management, Corporate Bookings, Gallery, and Contact pages
- **Client-side routing** with `react-router-dom`
- **Internationalization (i18n)** — supports 18 languages (English, Spanish, French, Hindi, Japanese, Korean, Portuguese, Russian, Arabic, German, Italian, Chinese, Swedish, Bengali, Vietnamese, Thai, Turkish, Dutch) via `i18next`
- **Interactive tour package customization form** with a WhatsApp-based enquiry flow
- **Embedded map** showing the (demo) office location
- **Responsive design** across mobile, tablet, and desktop
- **Sample TripAdvisor-style reviews widget**

## Tech Stack

- [React 18](https://react.dev/)
- [Vite 7](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [react-i18next](https://react.i18next.com/)
- [react-icons](https://react-icons.github.io/react-icons/)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable components (Navbar, Footer, Hero, etc.)
├── pages/          # Page components (Home, Tours, Contact, etc.)
├── i18n/           # Language configuration and translation files
├── data/           # Static tour/package data
├── App.jsx         # Main app component with routing
├── main.jsx        # Entry point
└── index.css       # Global styles
```

## Note

All contact details (phone, WhatsApp number) shown in this project are placeholders for demonstration purposes only.
