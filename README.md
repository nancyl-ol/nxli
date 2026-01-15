# nxli

Personal portfolio website.

## Overview

A modern, single-page portfolio built with Next.js and Tailwind CSS. Features include:

- Hero section with banner and avatar
- Personal bio with interactive cursor styling
- Projects showcase (2015-2025)
- Contact links (GitHub, LinkedIn, email)
- Responsive design with subtle animations

### Tech Stack

- **Next.js** - React framework with static export
- **React 19** - UI library
- **Tailwind CSS 4** - Utility-first styling
- **TypeScript** - Type safety

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nxli
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The page auto-updates as you edit files.

## Deploy on Firebase

This project is configured for Firebase Hosting as a static site.

### Prerequisites

- [Firebase CLI](https://firebase.google.com/docs/cli) installed globally:
  ```bash
  npm install -g firebase-tools
  ```

- Logged into Firebase:
  ```bash
  firebase login
  ```

### Deployment Steps

1. Build the static export:
   ```bash
   npm run build
   ```
   This generates static files in the `out/` directory.

2. Deploy to Firebase Hosting:
   ```bash
   firebase deploy --only hosting
   ```

The site will be deployed to the configured Firebase project (`nxli-adf02`).
