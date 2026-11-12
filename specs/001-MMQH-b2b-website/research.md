# Phase 0 Research — MMQH SOLUTION Website

## Decision: Next.js App Router with strict TypeScript

**Rationale**: The feature combines static marketing pages, dynamic portfolio routes, secure server boundaries, and progressively enhanced interactions. One typed App Router application supports static-first delivery, route splitting, server validation, and coherent testing. React Server Components are the default; client components are limited to filters, forms, consent, booking, and uploads.

**Alternatives considered**: A static-only site cannot authoritatively validate forms, issue upload authorisations, or guard preview routes. A separate SPA and API adds deployment and authentication complexity without a stated need.

## Decision: Tailwind CSS with semantic tokens and deep-blue accent

**Rationale**: Semantic CSS variables constrain Tailwind utilities to a consistent, contrast-compliant system. The sponsor approved deep blue on 2026-07-20. Tokens cover foregrounds, backgrounds, focus, status, spacing, typography, and reduced motion.

**Alternatives considered**: A large component library adds JavaScript and visual constraints. CSS modules remain available for exceptional styles but are not the base system.

## Decision: Shared Zod schemas with authoritative server validation

**Rationale**: Shared schemas reduce drift in contact, privacy, content, and upload metadata. API routes independently parse raw input; client validation only improves feedback and never determines acceptance.

**Alternatives considered**: Client-only validation violates Constitution §4. Ad-hoc validation risks inconsistent privacy and field rules.

## Decision: Provider-neutral ports with local adapters

**Rationale**: CMS, analytics, calendar, storage, malware scanning, bot protection, and monitoring carry privacy, accessibility, security, resilience, and performance implications. Deterministic local adapters support development and tests. Production activation requires a documented provider review.

**Alternatives considered**: Selecting vendors before review makes unapproved services part of the design. Direct SDK calls in routes or UI make replacement and consent enforcement unsafe.

## Decision: Static public content with controlled revalidation

**Rationale**: Marketing and portfolio content should be pre-rendered or cached. Published CMS content is authoritative. Repository fixtures are labelled local/resilience adapters, not a second editorial workflow. Preview is dynamic, authorised, no-store, and unable to expose drafts publicly.

**Alternatives considered**: Fully dynamic content adds latency and availability risk. Duplicated editorial content violates Constitution §§2 and 6.

## Decision: Versioned allowlisted telemetry gated by consent

**Rationale**: Every event has a version, purpose, owner, consent category, trigger, KPI mapping, and explicit allowed properties. Payload builders accept route/context primitives and reject free text, names, emails, file names, financial values, secrets, and direct identifiers. Essential operational security records are separated from non-essential analytics.

**Alternatives considered**: Generic event payloads risk prohibited-data leakage. Loading analytics before consent violates Constitution §4.

## Decision: Expiring secure-transfer authorisation

**Rationale**: The client requests a bounded write-only upload authorisation valid for no more than 15 minutes. The server checks eligibility, file type, size, rate limit, and bot signal; storage creates a non-public target. Verification checks integrity and hands the object to malware scanning/quarantine. Telemetry and logs exclude file names.

**Alternatives considered**: General multipart form attachments increase exposure and do not satisfy secure transfer. Public or unbounded URLs violate Constitution §4.

## Decision: Layered abuse controls and idempotency

**Rationale**: Contact and privacy-request APIs combine schema validation, origin policy, rate limiting, a bot-protection port with accessible fallback, and opaque idempotency keys. Server-side replay prevention protects against duplicate records and ambiguous network retries.

**Alternatives considered**: CAPTCHA-only controls can create accessibility and tracking problems. Client-only duplicate prevention cannot protect an API.

## Decision: Vitest, Testing Library, Playwright, axe, and Lighthouse CI

**Rationale**: Vitest covers schemas and components; Testing Library checks accessible semantics; Playwright covers critical browser journeys; axe catches common automated accessibility failures; Lighthouse CI and bundle reports enforce measurable release budgets. Manual keyboard, screen-reader, zoom/reflow, and reduced-motion audits remain required.

**Alternatives considered**: Unit tests alone do not prove URL state, consent gating, route behaviour, upload boundaries, or fallback journeys. Lighthouse alone does not validate interaction correctness.

## Decision: Role-based governance with approved defaults

**Rationale**: The sponsor assigned Product Owner, Privacy Owner, Compliance Reviewer, and Security Incident Commander responsibilities. Existing performance budgets, 99.9% SLO, and 24-month inquiry/30-day upload/90-day backup retention defaults are binding. Exit intent remains disabled.

**Alternatives considered**: Unassigned ownership makes operational duties unenforceable. Exit intent adds unapproved conversion and accessibility complexity.
