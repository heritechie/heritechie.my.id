# Heriyanto — Software Engineer Portfolio

A dark, technical portfolio built with React, TypeScript and Vite.

## Run locally

Requirements:
- Node.js 20+

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Deploy

The project is static after build and can be deployed to:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

## Cloudflare Pages Deployment

- **GitHub repository:** [heritechie/heritechie.my.id](https://github.com/heritechie/heritechie.my.id)
- **Framework preset:** None required (Vite build is inferred)
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node.js version:** `^20.19.0 || >=22.12.0` (set `NODE_VERSION` in the project build settings)
- **Environment variables:** none required at build time

To deploy:

1. In the Cloudflare dashboard, create a new **Pages** project and connect the GitHub repository above.
2. Set the build command to `npm run build` and the output directory to `dist`.
3. Confirm the Node.js version in the build settings satisfies the requirement above (default is usually fine).
4. Deploy. The site is fully static — no Workers runtime or functions configuration is needed.

## Before publishing

1. Replace any project descriptions that need correction.
2. Add the real repository URLs for public projects and the Siberin project when appropriate.
3. Add a real CV file if you want the "Download CV" action.
4. Review the professional project wording to ensure no confidential company information is exposed.
5. Add analytics only if actually needed.

## Positioning

The portfolio intentionally emphasizes:
- Backend engineering
- API design
- Redis caching
- Asynchronous processing
- Workflow orchestration
- External system integration
- Docker/containerization
- Testing

It avoids presenting private professional work as an open-source project.

## Assets
Project visuals are local SVG assets under `public/assets/projects/`, so the site has no external image dependency.
