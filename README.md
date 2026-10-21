# Edilberto Rodriguez | Infrastructure & Security Engineering

[![Portfolio](https://img.shields.io/badge/Live_Portfolio-Cloudflare_Pages-0ea5e9?style=flat-square)](https://edilberto-portfolio.pages.dev/)
[![GitHub](https://img.shields.io/badge/GitHub-edilbertorodriguez-181717?style=flat-square&logo=github)](https://github.com/edilbertorodriguez)

**Infrastructure · Cybersecurity · Networking · Automation · Satellite-connected systems**

This repository contains my personal engineering portfolio, built to present hands-on infrastructure and defensive security work through interactive case studies and a browser-based Linux-style terminal.

**[Explore the live portfolio →](https://edilberto-portfolio.pages.dev/)**

## Featured engineering projects

| Project | Engineering focus | Evidence in the portfolio |
| --- | --- | --- |
| **Security Operations Laboratory** | Wazuh, Security Onion, Velociraptor, MISP | Interactive SOC overview and a documented Wazuh real-time file integrity monitoring test with sanitized evidence |
| **Segmented Homelab Infrastructure** | Proxmox VE, VLANs, routing, secure remote access | Interactive logical network architecture and implementation details |
| **Automated VM Provisioning** | Terraform, Ubuntu cloud-init, Proxmox | Provisioning architecture, verified lab outcomes, and an illustrative sanitized configuration example |
| **Aegis Control** | Ubuntu, Docker, OpenClaw, controller/worker APIs | Early-stage security automation architecture and lab implementation status |
| **TerraTech** | ESP32-C6, Raspberry Pi, Starlink, IoT telemetry | Proposed sensor-to-dashboard architecture and component-level design |

**Project status matters:** Some case studies document deployed laboratory systems; others describe prototypes or proposed architectures. The portfolio distinguishes demonstrated functionality from work in development.

## Interactive terminal

The portfolio includes a **simulated, client-side terminal** for exploring professional information and projects. Example commands:

```bash
help
whoami
skills
projects
project terratech
cd projects
ls
cat certs.txt
github
resume
neofetch
```

Command history and Tab completion are supported. The terminal **does not execute OS commands, provide SSH access, or connect to my private homelab**. The `resume` command currently presents a résumé center; downloadable PDFs are planned.

## Technology stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **Build tooling:** Vite, npm, ESLint
- **Hosting:** Cloudflare Pages with GitHub-connected deployments
- **Design:** Responsive dark UI, interactive technical architecture components, accessible keyboard navigation

## Run locally

Prerequisites: Node.js and npm compatible with the version of Vite specified in `package.json`.

```bash
git clone https://github.com/edilbertorodriguez/edilberto-portfolio.git
cd edilberto-portfolio
npm ci
npm run dev
```

Open the local URL shown by Vite (typically `http://localhost:5173/`).

To test the production build:

```bash
npm run lint
npm run build
npm run preview
```

## Deployment

The production branch is `main`. Cloudflare Pages builds the Vite application using:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Framework | React (Vite) |

The public site is currently hosted at **https://edilberto-portfolio.pages.dev/**.

## Security and disclosure

This is a public, static portfolio. Network diagrams are simplified and do not include private administrative endpoints or credentials. Screenshots used as supporting evidence are intended to be sanitized before publication. Any security examples and investigation exercises are performed in controlled, authorized laboratory environments.

## Professional profile

I'm **Edilberto Rodriguez**, an infrastructure and cybersecurity engineering professional with experience in systems engineering education, networking, Linux, virtualization, Blue Team operations, and automation. I'm also developing **Aegis Shield**, an early-stage cybersecurity venture, and **Aegis Control**, its security orchestration prototype.

- **Portfolio:** https://edilberto-portfolio.pages.dev/
- **GitHub:** https://github.com/edilbertorodriguez

---

*Built to show how systems are designed, operated, investigated, and improved—not only to list technologies.*
