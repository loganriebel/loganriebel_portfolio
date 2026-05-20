# Logan Riebel Portfolio

Personal portfolio site for [loganriebel.com](https://loganriebel.com), built with Next.js and React.

## Stack

- Next.js App Router
- React
- TypeScript
- Static export for DigitalOcean Static Sites

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production static export is written to `out/`.

## Deployment Notes

Use these settings for DigitalOcean Static Sites:

- Build command: `npm run build`
- Output directory: `out`
- Node version: 22

The site intentionally does not publish a resume PDF. Public site copy anonymizes media spend figures while preserving scope.
