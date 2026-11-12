# Implementation Plan: MMQH SOLUTION — Premium Unified International B2B Website

**Branch**: `001-MMQH-b2b-website` | **Date**: 2026-07-20 | **Spec**: [spec.md](./spec.md)

## Summary

Build a static-first, international-English B2B acquisition website for MMQH SOLUTION. The site presents Financial Operations & Accounting and Digital Architecture & Web Development with equal prominence and supplies accessible service, portfolio, contact, booking, privacy, secure-transfer, CMS-preview, and operational journeys.

The implementation uses one Next.js application with strict TypeScript, React Server Components by default, Tailwind semantic design tokens, shared Zod schemas with authoritative server validation, and provider-neutral ports for CMS, analytics, calendar, secure storage, bot protection, and monitoring. Local adapters make development and tests runnable without sending data to external providers. Production provider activation remains a release gate.

## Technical Context

**Language/Version**: TypeScript in strict mode on the current supported Node.js LTS at implementation time

**Primary Dependencies**: Next.js App Router and React; Tailwind CSS; Zod; Vitest and Testing Library; Playwright; axe-core; Lighthouse CI. Prefer native Web APIs and small internal adapters before adding dependencies.

**Storage**: Provider-neutral repository interfaces with deterministic local test adapters. Production inquiry, consent, CMS, audit, upload, and DSR stores require approved encrypted providers and are not selected by this plan.

**Testing**: Vitest unit/component/integration tests, Playwright critical-journey E2E tests, axe accessibility automation, production-build bundle analysis, and Lighthouse CI

**Target Platform**: Modern evergreen desktop and mobile browsers; Node.js server/edge-compatible Next.js deployment with the production platform selected after review

**Project Type**: Single full-stack web application

**Performance Goals**: Lighthouse ≥95 for Performance, Accessibility, Best Practices, and SEO; p75 LCP <2.5s, CLS <0.10, INP <200ms, TTI <3s; initial route JavaScript ≤170KB compressed and key-route transfer ≤1MB

**Constraints**: Static-first rendering; international English and no regional paths; WCAG 2.2 AA; consent before non-essential telemetry; server-side validation; signed upload authorisations ≤15 minutes; encrypted production storage; no PII, inquiry free text, document names, financial data, secrets, or direct identifiers in analytics/logs; external providers remain behind reviewed adapters

**Scale/Scope**: Six approved top-level routes (`/`, `/financial-services`, `/web-development`, `/portfolio`, `/about`, `/contact`), dynamic portfolio detail routes, a nested privacy-request route, API routes, and an authorised editorial preview boundary

## Constitution Check

*GATE: Passed before Phase 0 and re-checked after Phase 1 design.*

| Area | Plan response | Status |
|---|---|---|
| Scope and routes | Keeps exactly the six approved top-level routes. `/privacy/request` is a nested operational route. No regional routes, blog, portal, calculator, or localisation are introduced. | PASS |
| Dual-engine proposition and claims | Home gives both services equal visual and semantic prominence. Evidence requires approval, source, date, and review state. Financial tax content carries the advisory/not-a-law-firm disclaimer. | PASS |
| Quality and performance | Static-first RSC routes, route splitting, image optimisation, budget checks, Lighthouse CI, and RUM ports enforce §3. | PASS |
| Security and privacy | Shared Zod schemas, authoritative server validation, rate-limit and bot ports, bounded signed uploads, malware handoff, consent-gated telemetry, redacted logs, and retention metadata satisfy §4. | PASS |
| Technical and CMS guardrails | Public content is pre-rendered/cached; CMS content is authoritative; preview is authorised and no-store; provider SDKs cannot leak into UI/routes. | PASS |
| UX and accessibility | Semantic structure, keyboard tests, visible focus, status announcements, reflow, reduced motion, equal consent choices, and accessible fallbacks are required. | PASS |
| Analytics and observability | Versioned allowlisted events, sanitised errors, monitors, alerts, owner/runbook metadata, and consent categories satisfy §8. | PASS |
| SDLC and release | Formatting, lint, strict type checks, coverage, E2E, accessibility, dependency/secret scanning, production build, budgets, rollback, and independent review are gates. | PASS |
| Sponsor decisions | On 2026-07-20 the sponsor approved deep blue, existing §3 budgets and 99.9% SLO, 24/30/90-day retention defaults, disabled exit intent, provider-neutral adapters, and role-based owners. | PASS |

### Accountable roles

- **Product Owner**: production release approval and scope decisions.
- **Privacy Owner**: DSR, consent, retention, and privacy-provider accountability.
- **Compliance Reviewer**: financial, legal, compliance, security, and quantified-claim review.
- **Security Incident Commander**: security incident response, upload abuse, and remediation.

Concrete providers and deployment infrastructure remain deliberately unselected. Selection must pass Constitution §§4, 6, 8, and 9 before production activation.

### Post-design re-evaluation

Phase 1 models and contracts include authoritative validation, idempotency, no-store personal responses, upload expiry and quarantine, consent metadata, editorial review states, privacy-safe telemetry allowlists, retention deadlines, and accessible fallback outcomes. No unresolved MUST/NOT ALLOWED conflict or exception remains.

## Project Structure

### Documentation

```text
specs/001-MMQH-b2b-website/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── http-api.md
│   └── provider-ports.md
└── tasks.md
```

### Source code

```text
src/
├── app/
│   ├── api/
│   │   ├── contact/route.ts
│   │   ├── preview/route.ts
│   │   ├── privacy/request/route.ts
│   │   └── upload/
│   │       ├── url/route.ts
│   │       └── verify/route.ts
│   ├── contact/page.tsx
│   ├── financial-services/page.tsx
│   ├── portfolio/
│   │   ├── [slug]/page.tsx
│   │   └── page.tsx
│   ├── privacy/request/page.tsx
│   ├── web-development/page.tsx
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── cms/
│   ├── audit.ts
│   └── schemas/index.ts
├── components/
├── config/env.ts
├── context/TelemetryContext.tsx
├── hooks/useTelemetry.ts
└── lib/
    ├── alerts.ts
    ├── cms.ts
    ├── consent.ts
    ├── logger.ts
    └── monitors.ts

tests/
├── integration/
├── unit/
└── setup.ts

docs/
├── accessibility-audit.md
└── performance-audit.md
```

**Structure Decision**: Use one Next.js App Router project. Public marketing content is server-rendered/static by default. Only filters, consent, booking, upload, and contact interactions are client components. Provider interfaces stay outside route UI, and domain schemas are shared without coupling to production SDKs.

## Complexity Tracking

No Constitution violations require tracking.
