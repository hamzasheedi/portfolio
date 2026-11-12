# Tasks: MMQH SOLUTION — Premium Unified International B2B Website

**Input**: Design documents from `specs/001-MMQH-b2b-website/`

**Prerequisites**: [plan.md](./plan.md), [spec.md](./spec.md), [research.md](./research.md), [data-model.md](./data-model.md), [contracts/](./contracts/), [quickstart.md](./quickstart.md)

**Tests**: Tests are required by the feature specification and Constitution. Within each story, write the listed tests first, run them to establish the expected failure, then implement the story. Coverage, accessibility, performance, security, privacy, analytics, observability, and critical-journey checks are release gates.

**Organization**: Tasks are grouped by user story so each story can be implemented and tested as an independent increment after the shared foundation.

## Format: `[ID] [P?] [Story?] Description with file path`

- **[P]**: May run in parallel because it targets different files and has no dependency on another incomplete task in the same phase.
- **[Story]**: Required only in user-story phases and maps directly to `US-01` through `US-11` in [spec.md](./spec.md).
- Every task names an exact repository-relative file path.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Scaffold the approved single Next.js application and establish executable quality gates.

- [ ] T001 Initialize the Next.js App Router project with strict TypeScript and required scripts in `package.json`, `tsconfig.json`, and `next.config.ts`
- [ ] T002 Configure Tailwind CSS and PostCSS for semantic design tokens in `tailwind.config.ts` and `postcss.config.mjs`
- [ ] T003 [P] Configure ESLint flat config with framework, TypeScript, accessibility, and ignore rules in `eslint.config.mjs`
- [ ] T004 [P] Configure Prettier and formatting exclusions in `.prettierrc.json` and `.prettierignore`
- [ ] T005 [P] Configure Vitest, Testing Library, jsdom, and global cleanup in `vitest.config.ts` and `tests/setup.ts`
- [ ] T006 [P] Configure Playwright projects for desktop, mobile, reduced motion, and critical journeys in `playwright.config.ts`
- [ ] T007 [P] Configure Lighthouse CI and Constitution performance budgets in `lighthouserc.json` and `performance-budget.json`
- [ ] T008 Create synthetic local environment documentation with no production secrets in `.env.example`
- [ ] T009 Verify the scaffold with one smoke test and document the exact install/check commands in `tests/unit/setup.test.ts` and `README.md`

**Checkpoint**: The application installs, starts, formats, lints, type-checks, tests, and builds through committed scripts.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create the shared accessible shell, typed boundaries, local adapters, consent-safe telemetry, and error handling required by every story.

**CRITICAL**: No user-story implementation starts until this phase passes its tests and build.

- [ ] T010 Write failing unit tests for environment parsing, production adapter requirements, and secret-safe failures in `tests/unit/env.test.ts`
- [ ] T011 Implement strict Zod environment parsing with local adapter defaults and production fail-fast rules in `src/config/env.ts`
- [ ] T012 [P] Write failing tests for structured redaction and prohibited-field removal in `tests/unit/logger.test.ts`
- [ ] T013 [P] Write failing accessibility tests for the global layout, skip link, header, footer legal links, and cookie-preference trigger in `tests/integration/layout.test.tsx`
- [ ] T014 [P] Define shared API error, consent, telemetry, audit, and adapter result types in `src/lib/types.ts`
- [ ] T015 Implement structured privacy-safe logging and sanitised error serialization in `src/lib/logger.ts`
- [ ] T016 Implement the semantic root layout, metadata defaults, skip link, and global providers in `src/app/layout.tsx`
- [ ] T017 [P] Implement keyboard-accessible primary navigation with exactly the six approved top-level routes in `src/components/Header.tsx`
- [ ] T018 [P] Implement the global footer with Privacy Policy, Terms, cookie preferences, and DPA references in `src/components/Footer.tsx`
- [ ] T019 Implement the deep-blue semantic token system, visible focus, reflow, and reduced-motion defaults in `src/app/globals.css`
- [ ] T020 Implement versioned allowlisted telemetry registration and consent checks in `src/lib/telemetry.ts`, `src/context/TelemetryContext.tsx`, and `src/hooks/useTelemetry.ts`
- [ ] T021 Implement the global client error boundary with accessible recovery and sanitised logging in `src/app/error.tsx`
- [ ] T022 Implement the static accessible About page using approved international positioning in `src/app/about/page.tsx`
- [ ] T023 Run the foundational test, type-check, lint, and production-build scripts and record the checkpoint in `specs/001-MMQH-b2b-website/quickstart.md`

**Checkpoint**: The shared shell is WCAG-oriented, production configuration fails safely, telemetry cannot accept prohibited properties, and all stories can use stable typed infrastructure.

---

## Phase 3: User Story 1 — Understand the dual-engine proposition (Priority: P1) MVP

**Goal**: Present Financial Operations & Accounting and Digital Architecture & Web Development with equal prominence on `/`.

**Independent Test**: Open `/` with keyboard and reduced motion, confirm both service engines have equivalent heading/CTA structure, activate each CTA, and verify only approved evidence is displayed.

### Tests for User Story 1

- [ ] T024 [P] [US1] Write failing integration tests for equal service prominence, semantic headings, keyboard CTAs, reduced motion, and approved proof in `tests/integration/home.test.tsx`
- [ ] T025 [P] [US1] Write failing telemetry tests for consent-safe `service_view` payloads on the home route in `tests/unit/home-telemetry.test.ts`

### Implementation for User Story 1

- [ ] T026 [P] [US1] Implement semantic dual-service cards with equivalent structure and approved route links in `src/components/DualServiceHero.tsx`
- [ ] T027 [P] [US1] Implement attributable proof, expertise, trust, and featured-case-study sections in `src/components/HomeProof.tsx`
- [ ] T028 [US1] Compose the static home page and dispatch allowlisted service-view context in `src/app/page.tsx`

**Checkpoint**: US1 passes independently and is the suggested first deployable MVP.

---

## Phase 4: User Story 2 — Evaluate financial services (Priority: P1)

**Goal**: Present the financial proposition, trust controls, four pillars, process, advisory boundary, and consultation CTA on `/financial-services`.

**Independent Test**: Open the route with a screen reader, verify all four pillars including Financial Systems & Data Automation, confirm the visible/programmatic not-a-law-firm disclaimer, and activate the consultation CTA.

### Tests for User Story 2

- [ ] T029 [P] [US2] Write failing integration tests for the four pillars, security statement, disclaimer association, CTA, and reduced-motion behavior in `tests/integration/financial-services.test.tsx`
- [ ] T030 [P] [US2] Write failing telemetry tests for the Financial service-view allowlist in `tests/unit/financial-services-telemetry.test.ts`

### Implementation for User Story 2

- [ ] T031 [P] [US2] Implement the persistent, programmatically labelled advisory boundary in `src/components/TaxDisclaimer.tsx`
- [ ] T032 [US2] Implement the static Financial Services route with four pillars, approved security language, process, disclaimer, CTA, and telemetry in `src/app/financial-services/page.tsx`

**Checkpoint**: US2 is independently accessible and never implies that MMQH SOLUTION is a law firm.

---

## Phase 5: User Story 3 — Evaluate web development services (Priority: P1)

**Goal**: Present an evidence-led Web Development proposition with measurable outcomes and direct portfolio/contact paths.

**Independent Test**: Open `/web-development`, inspect each dated and attributable metric, then use keyboard and pointer input to reach `/portfolio` and `/contact?interest=web` without losing consent state.

### Tests for User Story 3

- [ ] T033 [P] [US3] Write failing integration tests for approved outcome evidence, portfolio/contact CTAs, consent-state preservation, and accessible navigation in `tests/integration/web-development.test.tsx`
- [ ] T034 [P] [US3] Write failing telemetry tests for the Web service-view allowlist in `tests/unit/web-development-telemetry.test.ts`

### Implementation for User Story 3

- [ ] T035 [P] [US3] Implement reusable current-evidence presentation with source, context, and review date in `src/components/OutcomeEvidence.tsx`
- [ ] T036 [US3] Implement the static Web Development route with approved propositions, outcomes, CTAs, and telemetry in `src/app/web-development/page.tsx`

**Checkpoint**: US3 independently establishes technical authority and links to proof and inquiry paths.

---

## Phase 6: User Story 4 — Find relevant portfolio evidence (Priority: P1)

**Goal**: Deliver a metadata-driven portfolio hub with accessible filters, sorting, URL-preserved state, and no full-page reload.

**Independent Test**: Apply each filter and sort option, confirm announced result changes and URL updates, reload/share the URL to restore state, and reset an empty combination.

### Tests for User Story 4

- [ ] T037 [P] [US4] Write failing schema tests for published-only case studies, controlled metadata, current evidence, and safe query parsing in `tests/unit/case-study-schema.test.ts`
- [ ] T038 [P] [US4] Write failing integration tests for filters, sorting, URL/history restoration, invalid values, empty state, keyboard use, and no full reload in `tests/integration/portfolio-filters.test.tsx`
- [ ] T039 [P] [US4] Write failing telemetry tests that reject non-allowlisted portfolio-filter properties in `tests/unit/portfolio-telemetry.test.ts`

### Implementation for User Story 4

- [ ] T040 [US4] Define the CaseStudy public schema and controlled filter metadata in `src/cms/schemas/case-study.ts`
- [ ] T041 [US4] Implement the provider-neutral published-content repository with deterministic local fixtures in `src/lib/cms.ts` and `src/cms/fixtures/case-studies.ts`
- [ ] T042 [P] [US4] Implement accessible URL-driven filters, sort controls, live result count, and history updates in `src/components/PortfolioFilters.tsx`
- [ ] T043 [P] [US4] Implement the accessible no-results reset path in `src/components/PortfolioEmptyState.tsx`
- [ ] T044 [US4] Implement the static portfolio route with validated search parameters, published results, unavailable fallback, and telemetry in `src/app/portfolio/page.tsx`

**Checkpoint**: US4 restores valid shared state, handles unavailable/empty data, and never reveals drafts or stale evidence.

---

## Phase 7: User Story 5 — Assess a case study (Priority: P1)

**Goal**: Render a credible case-study narrative with current evidence, optional authorised social proof, resilient media, and a preselected Web contact CTA.

**Independent Test**: Open a published case study, verify problem/strategy/outcomes/evidence metadata, simulate missing media and absent testimonial, and confirm the final CTA opens editable Web Development interest.

### Tests for User Story 5

- [ ] T045 [P] [US5] Write failing integration tests for published case-study blocks, current evidence, optional social proof, media failure, and contact preselection in `tests/integration/case-study.test.tsx`
- [ ] T046 [P] [US5] Write failing tests for stale/unapproved evidence suppression and case-study telemetry allowlists in `tests/unit/case-study-evidence.test.ts`

### Implementation for User Story 5

- [ ] T047 [P] [US5] Implement accessible performance evidence with source, context, audit date, and expiry suppression in `src/components/PerformanceBadge.tsx`
- [ ] T048 [P] [US5] Implement optional authorised testimonial rendering with resilient headshot fallback in `src/components/Testimonial.tsx`
- [ ] T049 [P] [US5] Implement responsive media that preserves textual evidence and CTA on failure or reduced motion in `src/components/CaseStudyMedia.tsx`
- [ ] T050 [US5] Implement generated metadata, published-only lookup, case narrative, preselected CTA, and privacy-safe view/click telemetry in `src/app/portfolio/[slug]/page.tsx`

**Checkpoint**: US5 remains complete without optional media/social proof and withholds stale or unauthorised claims.

---

## Phase 8: User Story 6 — Submit a tailored inquiry (Priority: P1)

**Goal**: Provide dynamic Financial, Web, and General contact branches with authoritative validation, abuse controls, idempotency, and accessible results.

**Independent Test**: Exercise every branch, submit invalid and valid synthetic requests, retry with the same idempotency key, simulate bot/rate-limit/dependency failures, and confirm analytics consent is not required.

### Tests for User Story 6

- [ ] T051 [P] [US6] Write failing unit tests for discriminated inquiry schemas and prohibited cross-branch fields in `tests/unit/inquiry-schema.test.ts`
- [ ] T052 [P] [US6] Write failing contract tests for `POST /api/contact` validation, idempotency, rate limits, bot fallback, no-store responses, and safe errors in `tests/contract/contact-api.test.ts`
- [ ] T053 [P] [US6] Write failing integration tests for branch switching, accessible field errors/status, safe value retention, preselection, and duplicate prevention in `tests/integration/contact-form.test.tsx`
- [ ] T054 [P] [US6] Write failing tests for contact funnel telemetry consent and prohibited-property rejection in `tests/unit/contact-telemetry.test.ts`

### Implementation for User Story 6

- [ ] T055 [US6] Implement discriminated Financial, Web, and General inquiry schemas in `src/lib/schemas/inquiry.ts`
- [ ] T056 [P] [US6] Implement local InquiryRepository idempotency and retention behavior behind the provider port in `src/lib/adapters/inquiry-repository.ts`
- [ ] T057 [P] [US6] Implement rate-limit and accessible bot-protection local adapters in `src/lib/adapters/abuse-protection.ts`
- [ ] T058 [US6] Implement authoritative contact processing with bounded errors, no-store responses, and idempotent creation in `src/app/api/contact/route.ts`
- [ ] T059 [US6] Implement the accessible branching contact form with server results, safe retry, optional secure-transfer entry, and consent-safe telemetry in `src/components/ContactForm.tsx`
- [ ] T060 [US6] Implement the contact route with validated editable interest preselection and confirmation/booking context in `src/app/contact/page.tsx`

**Checkpoint**: US6 accepts only valid minimised inquiries, resists duplicate/abusive submissions, and remains usable without analytics consent.

---

## Phase 9: User Story 7 — Transfer documents securely (Priority: P1)

**Goal**: Issue bounded write-only upload authorisations, validate files, quarantine for malware screening, and provide accessible secure alternatives.

**Independent Test**: Verify allowed upload flow plus unsupported, oversized, expired, reused, interrupted, and infected cases; confirm 15-minute maximum expiry, no public read access, and no file names in telemetry/logs.

### Tests for User Story 7

- [ ] T061 [P] [US7] Write failing unit tests for allowed MIME types, byte limits, expiry, single use, retention, and privacy-safe metadata in `tests/unit/upload-schema.test.ts`
- [ ] T062 [P] [US7] Write failing contract tests for upload authorisation, callback replay, quarantine, malware states, no-store, and safe errors in `tests/contract/upload-api.test.ts`
- [ ] T063 [P] [US7] Write failing integration tests for keyboard file selection, client guidance, progress/status announcements, failures, and secure fallback in `tests/integration/secure-upload.test.tsx`
- [ ] T064 [P] [US7] Write failing tests that prohibit file names and content from logger and upload telemetry payloads in `tests/unit/upload-privacy.test.ts`

### Implementation for User Story 7

- [ ] T065 [US7] Implement upload request and verification schemas with controlled MIME, size, expiry, and state rules in `src/lib/schemas/upload.ts`
- [ ] T066 [P] [US7] Implement deterministic private object-store, signed-authorisation, quarantine, and malware-scan local adapters in `src/lib/adapters/secure-upload.ts`
- [ ] T067 [US7] Implement the bounded write-only authorisation endpoint in `src/app/api/upload/url/route.ts`
- [ ] T068 [US7] Implement repeat-safe upload verification and malware handoff in `src/app/api/upload/verify/route.ts`
- [ ] T069 [US7] Implement the accessible secure-transfer component with validation, status, alternatives, and privacy-safe telemetry in `src/components/SecureUpload.tsx`

**Checkpoint**: US7 never exposes credentials/public reads, never accepts unscreened objects, and enforces upload retention and privacy rules.

---

## Phase 10: User Story 8 — Book a routed consultation (Priority: P1)

**Goal**: Route visitors to the correct 30-minute consultation with visible timezone detection, manual override, and an accessible provider fallback.

**Independent Test**: Start from Financial and Web contexts, verify matching sessions and timezone, override timezone manually, simulate provider failure, and ensure completion telemetry fires only after confirmation and consent.

### Tests for User Story 8

- [ ] T070 [P] [US8] Write failing unit tests for Financial/Web routing, IANA timezone validation, and provider result states in `tests/unit/booking-schema.test.ts`
- [ ] T071 [P] [US8] Write failing integration tests for detection, manual timezone selection, 30-minute context, keyboard use, provider failure, and fallback in `tests/integration/booking.test.tsx`
- [ ] T072 [P] [US8] Write failing tests for booking telemetry consent and confirmation-only completion events in `tests/unit/booking-telemetry.test.ts`

### Implementation for User Story 8

- [ ] T073 [P] [US8] Implement the provider-neutral deterministic calendar adapter and failure controls in `src/lib/adapters/calendar.ts`
- [ ] T074 [P] [US8] Implement the accessible calendar-unavailable contact path in `src/components/BookingFallback.tsx`
- [ ] T075 [US8] Implement the 30-minute routed booking widget with detected/confirmed timezone and consent-safe events in `src/components/BookingWidget.tsx`

**Checkpoint**: US8 remains usable with manual timezone selection and during calendar-provider failure.

---

## Phase 11: User Story 9 — Control privacy choices and exercise data rights (Priority: P1)

**Goal**: Block non-essential tracking before consent, make rejection as easy as acceptance, support preference changes, and begin verified GDPR/CCPA requests.

**Independent Test**: Accept, reject, customise, and withdraw categories; verify dispatch behavior and consent metadata; submit each DSR type and confirm no personal data is disclosed before verification.

### Tests for User Story 9

- [ ] T076 [P] [US9] Write failing unit tests for default-deny consent state, policy versions, category changes, withdrawal, and adapter failure in `tests/unit/consent.test.ts`
- [ ] T077 [P] [US9] Write failing contract tests for privacy-request validation, deadlines, abuse controls, no-store, opaque references, and verification-required responses in `tests/contract/privacy-request-api.test.ts`
- [ ] T078 [P] [US9] Write failing integration tests for equal Accept/Reject prominence, keyboard preference changes, non-essential dispatch blocking, and persistent preference access in `tests/integration/consent-banner.test.tsx`
- [ ] T079 [P] [US9] Write failing integration tests for DSR types, accessible validation, reference status, and identity-verification messaging in `tests/integration/privacy-request.test.tsx`

### Implementation for User Story 9

- [ ] T080 [P] [US9] Implement versioned consent records, default-deny category state, persistence, and withdrawal in `src/lib/consent.ts`
- [ ] T081 [P] [US9] Implement DSR schemas, jurisdiction deadlines, verification states, and lawful-retention outcomes in `src/lib/schemas/privacy-request.ts`
- [ ] T082 [US9] Implement the equally actionable consent banner and persistent preference controls in `src/components/ConsentBanner.tsx`
- [ ] T083 [US9] Implement the minimised privacy-request API with abuse checks, opaque references, no-store, and audit records in `src/app/api/privacy/request/route.ts`
- [ ] T084 [US9] Implement the accessible Data Subject Request page with verification and deadline guidance in `src/app/privacy/request/page.tsx`

**Checkpoint**: US9 keeps non-essential processing off until consent and provides traceable privacy requests without premature disclosure.

---

## Phase 12: User Story 10 — Manage approved public content (Priority: P1)

**Goal**: Define controlled CMS schemas and workflows for drafts, review, publication, scheduling, preview, revisions, rollback, and audit.

**Independent Test**: Create an incomplete draft, verify it stays private and fails review; approve/publish a complete synthetic case; preview an authorised draft; reject unauthorised preview; and roll back while preserving history.

### Tests for User Story 10

- [ ] T085 [P] [US10] Write failing schema tests for CaseStudy, ServiceContent, GlobalSettings, evidence currency, designated review, and publication states in `tests/unit/cms-schemas.test.ts`
- [ ] T086 [P] [US10] Write failing workflow tests for revision conflicts, rejection, scheduling, publication, rollback, and immutable audit provenance in `tests/unit/cms-workflow.test.ts`
- [ ] T087 [P] [US10] Write failing contract tests for signed preview expiry, audience/path validation, no-store, redirect allowlist, and draft non-disclosure in `tests/contract/preview-api.test.ts`

### Implementation for User Story 10

- [ ] T088 [US10] Implement CaseStudy, ServiceContent, GlobalSettings, revision, and evidence schemas in `src/cms/schemas/index.ts`
- [ ] T089 [US10] Implement editorial state transitions, designated-review gates, optimistic revision checks, scheduling, and rollback in `src/cms/workflow.ts`
- [ ] T090 [P] [US10] Implement immutable sanitised editorial audit records in `src/cms/audit.ts`
- [ ] T091 [US10] Implement the short-lived authorised no-store preview entry point with internal redirect allowlisting in `src/app/api/preview/route.ts`

**Checkpoint**: US10 prevents drafts, stale evidence, unauthorised claims, and unauthorised users from changing public content.

---

## Phase 13: User Story 11 — Operate reliable critical journeys (Priority: P1)

**Goal**: Observe availability, errors, Core Web Vitals, and critical journeys and route threshold breaches to accountable owners and runbooks.

**Independent Test**: Simulate each Constitution alert threshold, verify two-region journey checks and privacy-safe records, and confirm production budgets and Lighthouse gates block regressions.

### Tests for User Story 11

- [ ] T092 [P] [US11] Write failing unit tests for sanitised monitor results, two-region consecutive failures, and journey availability calculations in `tests/unit/monitors.test.ts`
- [ ] T093 [P] [US11] Write failing unit tests for availability, error-rate, LCP, security/privacy severity, owner, runbook, and escalation rules in `tests/unit/alerts.test.ts`
- [ ] T094 [P] [US11] Write failing production-build gate tests for route JavaScript, image, font, third-party, transfer, and Lighthouse thresholds in `tests/integration/performance-gates.test.ts`

### Implementation for User Story 11

- [ ] T095 [US11] Implement privacy-safe home, portfolio, contact, booking, and upload synthetic journey definitions in `src/lib/monitors.ts`
- [ ] T096 [US11] Implement Constitution threshold evaluation and role/runbook escalation routing in `src/lib/alerts.ts`
- [ ] T097 [US11] Integrate release, route, device-class, and consent-safe Core Web Vitals collection in `src/components/WebVitals.tsx`

**Checkpoint**: US11 detects specified availability, journey, error, performance, security, and privacy conditions without collecting prohibited data.

---

## Phase 14: Polish & Cross-Cutting Concerns

**Purpose**: Execute the complete release gate, document evidence, and reconcile implementation with all approved design artifacts.

- [ ] T098 [P] Add Playwright happy, failure, validation, keyboard, and reduced-motion coverage for all six critical journeys in `tests/e2e/critical-journeys.spec.ts`
- [ ] T099 [P] Add automated axe checks for every approved top-level route, representative case study, consent, contact, booking, upload, and DSR views in `tests/e2e/accessibility.spec.ts`
- [ ] T100 [P] Configure dependency and secret scanning scripts and remediation policy in `package.json` and `docs/security-audit.md`
- [ ] T101 Run manual WCAG 2.2 AA keyboard, screen-reader, zoom/reflow, focus, target-size, contrast, and reduced-motion checks and record evidence in `docs/accessibility-audit.md`
- [ ] T102 Run production Lighthouse and compressed transfer audits for every key route and record median-of-three results in `docs/performance-audit.md`
- [ ] T103 Verify coverage thresholds, production provider gates, rollback controls, role approvals, and all quickstart scenarios in `specs/001-MMQH-b2b-website/quickstart.md`
- [ ] T104 Reconcile setup, environment, local-adapter, validation, audit, and release instructions in `README.md`

**Checkpoint**: All automated and manual Constitution release gates pass, documentation matches implementation, and independent approval evidence is ready.

---

## Dependencies & Execution Order

### Phase dependencies

- **Phase 1 Setup**: Starts immediately.
- **Phase 2 Foundational**: Depends on Phase 1 and blocks every user story.
- **Phases 3–13**: Depend on Phase 2. They may proceed in parallel by story except for explicit integration dependencies below.
- **Phase 14 Polish**: Depends on all stories selected for release; a complete MVP release requires all Constitution-mandated critical journeys and gates.

### User-story dependency graph

```text
Setup → Foundation ─┬→ US1 Home (MVP)
                    ├→ US2 Financial Services
                    ├→ US3 Web Development
                    ├→ US4 Portfolio ─→ US5 Case Study
                    ├→ US6 Contact ─┬→ US7 Secure Transfer
                    │               └→ US8 Booking
                    ├→ US9 Consent and DSR
                    ├→ US10 CMS Governance
                    └→ US11 Operations

US3 + US4 + US5 + US6 converge at the portfolio-to-contact journey.
US6 supplies inquiry eligibility/context to US7 and confirmation context to US8.
US9 consent enforcement applies to telemetry in every story but its local default-deny port exists in Foundation.
US10 production content replaces the local CMS adapter without changing public story contracts.
US11 observes all completed journeys and is required before production release.
```

### Story independence and integration notes

- **US1, US2, US3**: Independently render and navigate after Foundation.
- **US4**: Independently filters local published fixtures; US5 depends on its CaseStudy schema/repository.
- **US5**: Depends on US4 public content schema and uses US6’s documented query contract; it can be tested with the contact route absent by asserting the URL.
- **US6**: Independently handles inquiries with local adapters.
- **US7**: Depends on US6 inquiry eligibility/reference semantics, not its UI.
- **US8**: Independently accepts service context; integration with US6 confirmation is additive.
- **US9**: Independently controls consent and DSR; Foundation provides the initial deny-by-default telemetry seam.
- **US10**: Independently validates editorial workflow; public stories continue through the ContentRepository port.
- **US11**: Monitor/alert rules test independently with synthetic results, then integrate with all journeys.

### Within each story

1. Write and run listed tests; confirm they fail for the missing behavior.
2. Implement schemas/models before adapters and services.
3. Implement adapters/services before endpoints and UI integration.
4. Run the story tests, affected shared tests, type-check, lint, and production build.
5. Do not start dependent stories until the checkpoint passes.

---

## Parallel Execution Examples

### US1

```text
T024 home integration tests || T025 home telemetry tests
T026 dual-service hero || T027 proof sections
T028 page composition after T026 and T027
```

### US2

```text
T029 route tests || T030 telemetry tests
T031 disclaimer component, then T032 route composition
```

### US3

```text
T033 route tests || T034 telemetry tests
T035 evidence component, then T036 route composition
```

### US4

```text
T037 schema tests || T038 filter integration tests || T039 telemetry tests
T042 filter UI || T043 empty state after T040 query metadata is stable
T044 route composition after T040–T043
```

### US5

```text
T045 case-study integration tests || T046 evidence/telemetry tests
T047 performance badge || T048 testimonial || T049 media
T050 dynamic route after T047–T049
```

### US6

```text
T051 schema tests || T052 API contract tests || T053 form tests || T054 telemetry tests
T056 inquiry repository || T057 abuse adapters after T055 schemas
T058 API, then T059 form, then T060 route
```

### US7

```text
T061 schema tests || T062 API contract tests || T063 UI tests || T064 privacy tests
T066 secure-upload adapters after T065 schemas
T067 authorisation API || T068 verification API after T066
T069 component after API contracts stabilize
```

### US8

```text
T070 routing tests || T071 widget tests || T072 telemetry tests
T073 calendar adapter || T074 fallback
T075 widget after T073 and T074
```

### US9

```text
T076 consent tests || T077 privacy API tests || T078 banner tests || T079 DSR page tests
T080 consent helper || T081 DSR schemas
T082 banner after T080; T083 API then T084 page after T081
```

### US10

```text
T085 schema tests || T086 workflow tests || T087 preview contract tests
T090 audit records can proceed after T088 types stabilize
T089 workflow after T088; T091 preview after workflow authorization rules
```

### US11

```text
T092 monitor tests || T093 alert tests || T094 performance-gate tests
T095 monitors || T096 alerts
T097 Web Vitals integration after telemetry foundation
```

---

## Implementation Strategy

### MVP first

1. Complete Setup and Foundational phases.
2. Complete US1 only.
3. Run the US1 checkpoint on localhost/preview with keyboard and reduced motion.
4. Demonstrate the dual-engine proposition before expanding scope.

US1 is the smallest product-value MVP, but it is not production releasable alone because the Constitution requires privacy controls, critical journeys, observability, and release gates for the complete approved MVP.

### Incremental delivery

1. **Foundation + US1**: Dual-engine proposition.
2. **US2 + US3**: Full service evaluation.
3. **US4 + US5**: Evidence and portfolio-to-contact path.
4. **US6 + US7 + US8**: Inquiry, secure transfer, and booking.
5. **US9 + US10 + US11**: Privacy rights, editorial governance, and operations.
6. **Polish**: Full release evidence and independent approval.

### Parallel team strategy

After Foundation passes, assign non-overlapping story groups:

- Stream A: US1–US3 service discovery.
- Stream B: US4–US5 portfolio evidence.
- Stream C: US6–US8 acquisition journeys.
- Stream D: US9 privacy and consent.
- Stream E: US10 CMS governance.
- Stream F: US11 operations and release gates.

Coordinate shared-file changes explicitly: `src/lib/telemetry.ts`, `src/lib/cms.ts`, `src/app/contact/page.tsx`, `package.json`, and global configuration files must be edited sequentially.

---

## Notes

- `[P]` means different files and no incomplete same-phase dependency; it does not override the phase or dependency graph.
- Tests precede implementation and must demonstrate the expected failure before code is added.
- Use synthetic data and local adapters until production providers pass required reviews.
- Mark each task `[X]` only after its stated file change and relevant verification pass.
- Preserve one authoritative schema/content source and do not duplicate provider-specific logic into route UI.
