# Quickstart and Validation Guide

This guide defines the runnable proof expected after implementation. It references [plan.md](./plan.md), [data-model.md](./data-model.md), and [contracts/](./contracts/) rather than duplicating implementation details.

## Prerequisites

- Current supported Node.js LTS
- The package manager and exact scripts committed by implementation
- Synthetic local content and provider adapters enabled
- No production secrets or personal data

The repository is not scaffolded at planning time. The command names below are required script contracts for implementation; they become runnable after setup tasks create `package.json`.

## Install and configure

```powershell
npm ci
Copy-Item .env.example .env.local
```

Use synthetic/local adapter values only. Startup must fail clearly when a required environment variable is absent or malformed.

## Run locally

```powershell
npm run dev
```

Verify `/`, `/financial-services`, `/web-development`, `/portfolio`, `/about`, and `/contact` render in international English. No external analytics, calendar, CMS, storage, bot, or monitoring provider should receive data under local adapters.

## Automated quality gates

```powershell
npm run format:check
npm run lint
npm run typecheck
npm run test:coverage
npm run test:e2e
npm run build
npm run audit:a11y
npm run audit:performance
```

Expected results:

- Strict type checking, formatting, linting, tests, and production build pass.
- Changed business/validation logic has at least 80% line and branch coverage.
- Security, consent, contact, booking, and upload modules have at least 90% branch coverage.
- Lighthouse scores are at least 95 and production budgets in Constitution §3 pass.
- No dependency or secret scan has an unresolved release-blocking result.

## Critical journey validation

### Service discovery

1. Open `/` using keyboard only and with reduced motion enabled.
2. Confirm Financial and Web services have equal heading/CTA prominence.
3. Activate each CTA and confirm the correct service route.
4. Confirm the financial tax-support statement says MMQH SOLUTION provides support and is not a law firm.

### Portfolio to contact

1. Open `/portfolio`, apply project type, technology, and industry filters, and change sort order.
2. Confirm results and an announced count update without a full reload.
3. Copy the URL, open it in a fresh context, and confirm valid state restores.
4. Open a case study and verify current attributable evidence; expired evidence must be absent.
5. Activate its CTA and confirm `/contact` preselects editable Web Development interest.

### Contact submission

1. Exercise Financial, Web, and General branches and confirm irrelevant fields are absent.
2. Submit invalid data and verify programmatically associated errors retain safe values.
3. Submit valid synthetic data twice with the same idempotency key; only one inquiry is created.
4. Decline analytics consent and verify submission still succeeds without non-essential events.

### Secure transfer

1. Request upload authorisation for allowed synthetic metadata and verify expiry is within 15 minutes and write-only.
2. Verify unsupported, oversized, expired, reused, and infected fixtures are rejected accessibly.
3. Confirm quarantine precedes availability and logs/telemetry contain no file name or content.
4. Confirm provider failure offers the approved secure alternative.

### Booking

1. Start from Financial and Web contexts and verify the matching 30-minute journey.
2. Confirm detected IANA timezone is visible and manually editable.
3. Simulate provider failure and verify accessible contact fallback and no completion event.

### Consent and privacy request

1. Confirm non-essential dispatch is blocked before consent and Reject/Accept controls are equally available.
2. Change categories and verify policy version, timestamp, and category state update.
3. Submit each DSR type using synthetic data and verify an opaque reference and verification step.
4. Confirm no personal data is returned before verification.

### Editorial and operations

1. Verify drafts are absent from public portfolio queries and available only through authorised no-store preview.
2. Verify unapproved, incomplete, stale, or unauthorised claims cannot publish.
3. Exercise rollback and confirm version, author, reviewer, and audit history remain traceable.
4. Simulate monitor thresholds and confirm alerts include severity, owner role, runbook, and escalation.

## Manual release evidence

Record keyboard, screen-reader, 200%/400% zoom and reflow, reduced-motion, consent, fallback, and responsive checks in `docs/accessibility-audit.md`. Record median-of-three Lighthouse results, compressed route transfers, image/font/third-party budgets, and bundle findings in `docs/performance-audit.md`. Production activation additionally requires approved providers, accountable owner sign-off, independent review, and a tested rollback path.
