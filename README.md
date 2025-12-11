# AI QA Consulting

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/simidin95-gmailcoms-projects/v0-ai-qa-consulting)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/pXVsrLlm7Rj)

## Overview

AI QA Consulting is a modern application for AI Quality Assurance consulting. It streamlines creation, deployment, and iteration of AI QA workflows and chat-based tools, staying in sync with your deployments on v0.app.

## Local Setup

Follow these steps to run the project locally:

1. Clone the repository
   - SSH: `git clone git@github.com:YOUR_ORG/v0-ai-qa-consulting.git`
   - HTTPS: `git clone https://github.com/YOUR_ORG/v0-ai-qa-consulting.git`
2. Change into the project directory: `cd v0-ai-qa-consulting`
3. Install dependencies
   - Using npm: `npm install`
   - Or using pnpm: `pnpm install`
   - Or using yarn: `yarn`
4. Create a `.env.local` file at the project root and add required environment variables (see Configuration below)
5. Start the local development server
   - Using npm: `npm run dev`
   - Using pnpm: `pnpm dev`
   - Using yarn: `yarn dev`
6. Open http://localhost:3000 in your browser

## Deployment

Your project is live at:

**[https://vercel.com/simidin95-gmailcoms-projects/v0-ai-qa-consulting](https://vercel.com/simidin95-gmailcoms-projects/v0-ai-qa-consulting)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/pXVsrLlm7Rj](https://v0.app/chat/pXVsrLlm7Rj)**

## Configuration

Set your environment variables in a `.env.local` file at the root of the project. Typical variables include:

- `OPENAI_API_KEY` or other LLM provider keys
- Any third-party service keys used by components in `lib/` or `app/`
- App-specific configuration flags

Notes:
- Never commit secrets to version control.
- Vercel projects should configure these variables in the Vercel dashboard (Project Settings → Environment Variables).

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository