# T-Jay Teogangco — E-Portfolio

A single-page responsive portfolio built with React, Vite, Tailwind CSS v4, and Lucide icons.

## Requirements
- Node.js 20.19+ or 22.12+ recommended for current Vite releases
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed in your terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production output is created in `dist/`.

## Deploy to Vercel (GitHub method)
1. Create a new public GitHub repository named `teogangco-portfolio`.
2. Extract this folder, open a terminal in this project directory, and run:

```bash
git init
git add .
git commit -m "Build e-portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/teogangco-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. Create the repository on GitHub first, and do not add a README there if you already have this README locally.

3. Sign in at https://vercel.com/ and choose **Add New → Project**.
4. Import the `teogangco-portfolio` GitHub repository.
5. Confirm the detected framework is **Vite**. Build command: `npm run build`; output directory: `dist`; install command: `npm install`.
6. Click **Deploy**. When complete, open the generated `.vercel.app` URL in a new browser tab and test it.
7. To update the live site after editing, run `git add .`, `git commit -m "Update portfolio"`, and `git push`. Vercel will deploy the new commit.

## Alternative: Vercel CLI

```bash
npm install
npm run build
npm install -g vercel
vercel
vercel --prod
```

Follow the CLI prompts and open the production URL it returns.

## Before submitting
- Replace `your.email@example.com` in `src/App.jsx` with your real email.
- Update `public/sample-cv.txt` with accurate personal, education, skills, and project information.
- Replace the profile placeholder with a real photo if desired.
- Replace generic GitHub/LinkedIn links with your own profiles.
- Add real screenshots, repository URLs, and deployed links for projects you have actually completed.
- The contact form currently validates fields locally only; it does not deliver messages. Connect a form backend/service if real message delivery is required.
- Test navigation, mobile menu, View details buttons, About/Skills toggles, CV download, invalid form entries, valid form entries, and the deployed URL on desktop and mobile.
