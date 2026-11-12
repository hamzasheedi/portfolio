<!--
Sync Impact Report
- Version change: template (unratified) → 1.0.0
- Modified principles:
  - Placeholder principles → Purpose, non-negotiables, measurable quality, security,
    technical, content, UX, observability, and delivery guardrails
- Added sections:
  - 1. Purpose & Scope Alignment
  - 2. Non-Negotiables
  - 3. Quality Bars (Measurable Targets)
  - 4. Security, Privacy & Compliance
  - 5. Technical Guardrails (Tech-Agnostic with Conditional Mapping)
  - 6. Content & CMS Governance
  - 7. UX, Brand & Accessibility Guardrails
  - 8. Analytics, Observability & SRE
  - 9. SDLC, Quality Gates & Release Policy
  - 10. Risks, Assumptions & Dependencies
  - 11. Open Questions (for Sponsor Approval)
  - 12. Approval Gate & Next Step
- Removed sections:
  - Generic Core Principles and placeholder sections
  - Standalone Governance section; governance is incorporated into Section 12
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md
  - ✅ .specify/templates/spec-template.md
  - ✅ .specify/templates/tasks-template.md
  - ✅ .qwen/commands/speckit.*.md reviewed; no constitution-specific contradiction
- Follow-up TODOs:
  - Sponsor decisions listed in Section 11
-->
# Project Constitution — Portfolio Website For FinWeb Solution

## 1. Purpose & Scope Alignment

- The website MUST position FINWEB SOLUTION as one premium international B2B agency with two
  equal engines: Financial Operations & Accounting and Digital Architecture & Web Development.
- The primary audiences are US, UK, and EU SMEs, DTC and B2B e-commerce brands, corporate
  firms, and funded startups; priority decision-makers are CFOs, Finance Managers, Founders,
  CTOs, and COOs.
- The experience MUST establish financial rigour within 30 seconds, technical authority within
  60 seconds, and a credible path to consultation through measurable proof, enterprise trust,
  and a unified international proposition.

## 2. Non-Negotiables

- One global domain and one international proposition are REQUIRED. Regional subfolders such
  as `/us`, `/uk`, and `/eu`, regionalised messaging, and automatic currency switching are NOT
  ALLOWED.
- International English is REQUIRED. Monetary examples MAY use USD and GBP. Booking MUST detect
  the visitor's timezone automatically.
- The MVP top-level routes are limited to `/`, `/financial-services`, `/web-development`,
  `/portfolio`, `/about`, and `/contact`. Additional top-level routes are NOT ALLOWED without a
  constitution amendment.
- Financial and web services MUST receive equal prominence on the home page. Financial systems
  automation MUST be presented as strategic finance engineering, not commodity spreadsheet work.
- Claims MUST be attributable and quantifiable. Unverified performance, compliance, client, or
  outcome claims are NOT ALLOWED.
- The tax offering MUST state that FINWEB SOLUTION provides support and is not a law firm.
- Portfolio evidence MUST include the business problem, technical strategy, measurable impact,
  dated performance evidence, social proof where authorised, and a direct web-development CTA.
- Contact intake MUST adapt to Financial, Web, and General inquiries, validate data server-side,
  protect against bots, and provide a secure document-transfer path.
- Sensitive documents MUST NOT be stored unencrypted. Ordinary form attachment handling is NOT
  an acceptable substitute for signed upload URLs or an approved secure portal.
- Heavy parallax and performance-costly scroll tracking are NOT ALLOWED. Animation is limited to
  the approved patterns in Section 7 and MUST respect reduced-motion preferences.
- Phase 2 and Phase 3 capabilities—including Insights, gated content, an ROI calculator, client
  portal, and multilingual expansion—are OUT OF MVP SCOPE unless separately approved.
- Requirements, content, schemas, and implementation rules MUST have one authoritative source.
  Duplication that can diverge is NOT ALLOWED; other artifacts MUST reference the source.

## 3. Quality Bars (Measurable Targets)

### Acquisition and Conversion

| Measure | Release target | Measurement |
|---|---:|---|
| Organic lead conversion | 2.5%–4.0% | Qualified organic sessions that submit a valid inquiry, monthly |
| Contact form completion | ≥35% | Valid submissions divided by form starts, rolling 30 days |
| Portfolio-to-contact CTR | ≥12% | Unique portfolio CTA clicks divided by portfolio viewers, monthly |

### Technical Performance

| Measure | Release target | Measurement |
|---|---:|---|
| Lighthouse Performance | ≥95 | Mobile profile, production build, median of 3 runs per key route |
| Lighthouse Accessibility, Best Practices, SEO | ≥95 each | Same release audit as Performance |
| LCP | <2.5 seconds | p75 real-user mobile and desktop traffic over 28 days |
| CLS | <0.10 | p75 real-user mobile and desktop traffic over 28 days |
| INP | <200 milliseconds | p75 real-user mobile and desktop traffic over 28 days |
| TTI | <3.0 seconds | Mobile lab profile for each key route before release |

When field data is unavailable or below the reporting threshold, release decisions MUST use the
specified laboratory audits until representative real-user data exists.

### Engagement

| Measure | Target | Measurement |
|---|---:|---|
| Average engaged time on case studies | >2 minutes 30 seconds | Analytics average, excluding bots, monthly |
| Service-page scroll depth | >65% | Median maximum depth for engaged sessions, monthly |

### Performance Budgets

- Initial compressed JavaScript per route MUST NOT exceed 170 KB; no single asynchronously loaded
  interactive component MAY exceed 100 KB without written approval.
- Above-the-fold images MUST NOT exceed 250 KB combined per route. No individual delivered image
  MAY exceed 200 KB unless its documented visual purpose cannot be met within the budget.
- Initial compressed font transfer MUST NOT exceed 100 KB, and no more than two font families MAY
  be loaded.
- Initial compressed transfer for a key marketing route MUST NOT exceed 1 MB. Third-party scripts
  MUST total no more than 100 KB compressed and MUST load only where required.
- Budgets MUST be measured against production builds in CI. A regression beyond any budget blocks
  release unless the sponsor approves a time-bounded exception with an owner and remediation date.

## 4. Security, Privacy & Compliance

- The service MUST implement GDPR and CCPA transparency, lawful-purpose disclosure, data
  minimisation, access, correction, deletion, portability where applicable, and sale/share opt-out.
  GDPR requests MUST be fulfilled within 30 days and CCPA requests within 45 days, subject to
  lawful extensions and verified identity.
- Lead and inquiry records MUST be deleted or anonymised after 24 months of inactivity unless a
  contract, legal duty, dispute, or documented consent requires longer retention. Uploaded intake
  documents MUST be deleted within 30 days unless moved into an approved client system under an
  active engagement. Backups MUST expire within 90 days.
- Personal data MUST use TLS 1.2 or later in transit and industry-standard encryption at rest.
  Secrets MUST be held outside source control and rotated after suspected exposure.
- Uploads MUST use signed URLs or an approved secure portal, restrict file type and size, expire
  authorisation within 15 minutes, scan for malware before access, isolate objects from public
  access, and record auditable access events without logging document content.
- Public forms MUST have server-side validation, rate limiting, spam and bot controls, and abuse
  monitoring. Bot protection MUST minimise tracking and provide an accessible fallback.
- Data-subject request workflows MUST support identity verification, request logging, search,
  export, deletion or justified refusal, deadline tracking, and completion evidence.
- Non-essential cookies and tracking MUST remain disabled until valid consent where required.
  Visitors MUST be able to reject as easily as accept, change preferences later, and receive a
  current cookie notice. Consent records MUST include policy version, timestamp, and categories.
- The footer MUST expose Privacy Policy, Terms, cookie preferences, and a DPA reference. Vendors
  processing personal data MUST have an approved purpose, data-processing terms, retention rules,
  and documented cross-border transfer safeguards where applicable.

## 5. Technical Guardrails (Tech-Agnostic with Conditional Mapping)

- Delivery MUST be static-first. Marketing and portfolio content MUST be pre-rendered or cached
  where practical; runtime rendering requires a documented freshness or personalisation need.
- JavaScript MUST be limited to interactions that cannot be delivered accessibly without it.
  Route-based code splitting is REQUIRED, and heavy filters, visualisations, calendars, mockups,
  and animation modules MUST use dynamic loading.
- Responsive images MUST be correctly sized, modern-formatted where supported, lazy-loaded below
  the fold, and protected against layout shift. Critical images MAY be prioritised only when they
  improve LCP.
- Public content MUST use explicit cache policies, immutable fingerprinted assets, and safe cache
  invalidation. Personal or upload-related responses MUST NOT be publicly cached.
- Forms MUST use shared typed schemas for client ergonomics and authoritative server-side
  validation. Client validation alone is NOT sufficient.
- Portfolio filters MUST preserve state in URL query parameters, use CMS metadata, and respond
  without full-page reloads. Prefetching and memoisation MAY be used only when they improve
  measured responsiveness without breaching budgets.
- The selected stack MUST support accessibility, observability, secure server execution, content
  preview, automated quality gates, and the budgets in Section 3. Stack popularity alone is not a
  selection criterion.

If Next.js, React, TypeScript, Tailwind CSS, and Framer Motion are selected later, the mapping is:

- React Server Components by default; Client Components only for forms, filters, embeds, or other
  proven interactions.
- Static generation for marketing routes and static generation with controlled revalidation for
  portfolio content.
- `next/image` or an equivalent image pipeline for responsive optimisation and layout stability.
- TypeScript strict mode and shared typed form schemas across client and server boundaries.
- Tailwind usage constrained by semantic design tokens and reusable primitives rather than
  duplicated arbitrary values.
- Framer Motion dynamically loaded where material; its use remains limited to Section 7.

This mapping becomes binding only if that stack is approved during Stage 3.

## 6. Content & CMS Governance

- A headless CMS MUST allow authorised editors to add and update portfolio and service content
  without developer support, with preview, draft, review, publish, scheduled publication where
  supported, revision history, rollback, and role-based access.
- Required models are Case Study, Financial Services Content Blocks, Web Development Content
  Blocks, and Global Settings. Shared content MUST be referenced, not copied.
- Each case study MUST support client identity and authorisation state, industry, project type,
  technology metadata, problem, strategy, measurable outcomes, performance score, audit date,
  media, testimonial, role, optional headshot, CTA, SEO fields, and publication state.
- Performance evidence MUST include source, audit date, measurement context, and expiry or review
  date. Stale or unverifiable claims MUST be unpublished.
- Global Settings MUST own navigation, contact details, consultation links, legal references,
  reusable trust statements, social profiles, and default SEO metadata.
- The CMS is the single source of truth for managed content. Repository fallbacks MAY exist for
  resilience but MUST identify provenance and MUST NOT create a second editorial workflow.
- Every published change MUST retain author, timestamp, version, and review status. Legal,
  compliance, security, and quantified outcome claims require designated reviewer approval.
- MVP content is International English only. German, French, and other localisation are deferred;
  content models MUST avoid blocking future localisation but MUST NOT introduce regional URLs or
  duplicate regional copy in MVP.

## 7. UX, Brand & Accessibility Guardrails

- The brand MUST communicate a balanced dual-engine proposition: stability, precision, and trust
  for financial services; performance, engineering, and innovation for web development.
- Copy MUST use neutral international corporate English, concise evidence-led statements, and
  role-relevant outcomes. Unsupported superlatives, guarantees, jargon-heavy claims, and
  region-specific idioms are NOT ALLOWED.
- The visual system MUST use high whitespace, a disciplined grid, modern sans-serif typography,
  strong hierarchy, and numeric emphasis. The base palette is white and charcoal with one
  approved deep-blue or emerald accent; contrast MUST remain compliant in all modes.
- Allowed animation: short scroll reveals, portfolio filter transitions, subtle hover scaling,
  restrained page transitions, and accessible financial-chart transitions. Animation MUST be
  optional, non-blocking, and disabled or simplified for `prefers-reduced-motion`.
- Disallowed animation: heavy parallax, continuous decorative motion, scroll-jacking,
  performance-costly scroll tracking, autoplay motion that obscures content, or motion required
  to understand information.
- All released journeys MUST meet WCAG 2.2 AA, including keyboard access, visible focus, semantic
  structure, text alternatives, labelled errors, status announcements, minimum target sizes,
  contrast, zoom/reflow, reduced motion, and accessible calendar, consent, filter, and upload
  interactions.
- Persistent and sticky CTAs MUST not obscure content or keyboard focus. Desktop exit-intent MAY
  offer a strategy call only when it is dismissible, shown at most once per consented session,
  and does not degrade performance or accessibility.

## 8. Analytics, Observability & SRE

- Analytics MUST use a versioned event taxonomy with, at minimum: `service_view`,
  `case_study_view`, `portfolio_filter`, `portfolio_cta_click`, `contact_form_start`,
  `contact_form_submit`, `contact_form_error`, `booking_start`, `booking_complete`,
  `secure_upload_start`, and `secure_upload_complete`.
- Every event MUST define purpose, trigger, allowed properties, owner, consent category, and KPI
  mapping. Event payloads MUST NOT contain free-text messages, document names, financial data,
  or direct identifiers unless explicitly approved and legally justified.
- Real-user monitoring MUST capture LCP, CLS, INP, route, device class, and release version.
  Error tracking MUST capture sanitised client and server failures with environment and release
  context. Logs MUST be structured, access-controlled, retained for 30 days by default, and
  redact secrets and personal data.
- Production availability has a monthly SLO of 99.9%, excluding approved maintenance. Synthetic
  monitoring MUST test the home page, portfolio, contact form availability, booking handoff, and
  secure-upload initiation from at least two target-market regions.
- Alerts MUST trigger when availability is below 99.9% over a rolling 30-day window, a critical
  journey fails twice consecutively from two regions, server error rate exceeds 2% for 5 minutes,
  or p75 LCP exceeds 2.5 seconds for 30 minutes at sufficient sample volume.
- Critical security, privacy, or total-service incidents require immediate paging. Other alerts
  MUST route by severity with an owner, runbook, and escalation path. Monthly reviews MUST cover
  SLOs, KPI integrity, performance regressions, errors, and privacy-safe data quality.

## 9. SDLC, Quality Gates & Release Policy

### Definition of Done

A change is done only when its acceptance criteria are met; affected documentation and CMS schema
references are current; automated tests pass; WCAG checks and keyboard review pass; Section 3
budgets pass; analytics and observability are verified; security and privacy impacts are reviewed;
and an independent reviewer approves the change.

### Quality Gates

- CI MUST run formatting, linting, strict type checking where supported, unit tests, integration
  tests for changed boundaries, end-to-end tests for affected critical journeys, dependency and
  secret scanning, production build, accessibility automation, and performance-budget checks.
- Changed business and validation logic MUST maintain at least 80% line and branch coverage.
  Security, consent, contact, booking-routing, and upload modules MUST maintain at least 90% branch
  coverage. Coverage does not replace scenario-based tests.
- Critical journeys—service discovery, portfolio-to-contact, form submission, booking handoff,
  consent preferences, and secure upload—MUST each have a passing end-to-end happy path and
  relevant failure, validation, keyboard, and reduced-motion coverage.
- Every change requires at least one reviewer independent of the author. Security, privacy,
  compliance, CMS schema, legal copy, and performance-budget exceptions require a qualified
  domain reviewer. Self-approval is NOT ALLOWED.

### Environments and Release

- Development, preview/staging, and production environments MUST be separated. Production secrets
  and personal data MUST NOT be copied into lower environments; test data MUST be synthetic or
  irreversibly anonymised.
- Releases MUST be automated, reproducible, auditable, and blocked by failed gates. Production
  deployment requires sponsor or delegated product-owner approval until a lower-risk release
  policy is explicitly approved.
- Each release MUST have a tested rollback path. High-risk or incomplete capabilities MUST use
  server-controlled feature flags with an owner and expiry date; flags MUST NOT bypass privacy,
  security, or accessibility obligations.
- Emergency changes require incident authority, minimum viable review, documented risk, and
  retrospective completion of all gates within two business days.

## 10. Risks, Assumptions & Dependencies

| Item | Posture |
|---|---|
| Stack and hosting are undecided | Select against Sections 3–5, 8, and 9; do not treat PRD candidates as approved |
| CMS and editorial ownership are undecided | Confirm owner, roles, preview, rollback, SLA, and exportability before selection |
| Consent, analytics, calendar, bot, upload, and monitoring vendors are external dependencies | Complete privacy, accessibility, security, resilience, and performance review before adoption |
| Portfolio outcomes and testimonials depend on client evidence and permission | Publish only verified, dated, attributable, and authorised material; provide anonymised alternatives |
| Organic conversion and engagement baselines do not yet exist | Establish analytics validation and a 30-day baseline before judging trend performance |
| Financial and tax claims create regulatory and reputational exposure | Require designated review, jurisdiction-neutral wording, and the advisory disclaimer |
| A unified global proposition may not address every local expectation | Preserve one domain and message; test comprehension with representative US, UK, and EU users |
| Third-party embeds can impair consent, accessibility, availability, and performance | Load conditionally, isolate failures, monitor impact, and provide accessible fallback paths |
| Secure-upload operations require ownership beyond launch | Assign access review, malware response, retention enforcement, and incident responsibilities before release |

## 11. Open Questions (for Sponsor Approval)

1. Which accent direction is approved for the design system: deep blue or emerald?
2. Are the Section 3 transfer budgets and Section 8 availability SLO approved as binding release
   gates, or does the sponsor require stricter thresholds?
3. Who is the accountable owner for privacy requests, financial and legal claim review, security
   incidents, and production release approval?
4. Is the default retention policy—24 months for inactive inquiries, 30 days for intake uploads,
   90 days for backups—approved, subject to documented legal obligations?
5. May the desktop exit-intent consultation offer be included in MVP under Section 7 controls, or
   must it remain disabled pending conversion testing?

## 12. Approval Gate & Next Step

Sponsor approval confirms that:

- [ ] Sections 1–10 are authoritative for all later specifications, plans, tasks, and releases.
- [ ] The decisions in Section 11 are answered or explicitly accepted as controlled follow-ups.
- [ ] Any exception will name its scope, rationale, risk owner, expiry date, and remediation path.
- [ ] Stage 2 will not change this constitution without the amendment procedure below.

This constitution supersedes conflicting project guidance. Amendments require a written change
summary, affected-section analysis, semantic version decision, sponsor approval, migration or
remediation notes where applicable, and propagation to dependent templates and artifacts.

Versioning follows semantic versioning: MAJOR for incompatible governance or principle removals or
redefinitions; MINOR for new sections or materially expanded obligations; PATCH for non-semantic
clarifications. Every specification and implementation plan MUST document constitution compliance.
Every review and release MUST enforce applicable MUST and NOT ALLOWED statements. Exceptions are
time-bounded and do not amend the constitution.

Approval phrase: **Approved — proceed to Stage 2 (Specification).** Until that exact approval or an
unambiguous equivalent is received, work MUST stop after Stage 1.

**Version**: 1.0.0 | **Ratified**: 2026-07-19 | **Last Amended**: 2026-07-19
