# Specification — FINWEB SOLUTION — Premium Unified International B2B Website (Stage 2)

**Feature Branch**: `001-finweb-b2b-website`

**Created**: 2026-07-19

**Status**: Draft — awaiting Stage 3 approval

**Input**: Approved Constitution v1.0.0 and the FINWEB SOLUTION Premium Unified International
B2B Website PRD.

## 1. Scope

### In Scope

The MVP is a single, international English B2B acquisition website for FINWEB SOLUTION. It serves
US, UK, and EU SMEs, e-commerce brands, corporate firms, and funded startups, with distinct but
equally prominent Financial Operations & Accounting and Digital Architecture & Web Development
propositions (Constitution §1–2).

The MVP includes:

- The approved top-level routes: `/`, `/financial-services`, `/web-development`, `/portfolio`,
  `/about`, and `/contact`.
- A home page that presents the two service engines with equal prominence; a dual-service hero,
  evidence-led proof, featured case studies, financial expertise, enterprise trust, and a
  consultation CTA.
- Financial Services content covering full-cycle bookkeeping and reporting, strategic financial
  intelligence, international tax-compliance support, and Financial Systems & Data Automation.
- A Web Development service page that establishes technical authority and directs visitors to
  relevant portfolio evidence and consultation.
- A portfolio hub with metadata-driven filtering by project type, technology category, and
  industry; sorting by newest and performance impact; URL-preserved filter state; and no
  full-page reload when state changes.
- Individual case studies containing a business problem, strategy, authorised and dated
  measurable outcomes, performance evidence, approved social proof, responsive visual showcase,
  and a Web Development contact CTA with the inquiry interest preselected.
- A contact journey that branches by Financial, Web Development, and General inquiry type,
  captures the applicable information, validates submissions, prevents abuse, and offers secure
  document transfer where required.
- A 30-minute consultation booking journey that detects timezone and routes financial and web
  inquiries to the appropriate consultation option.
- Global privacy, cookie-preference, data-subject request, legal-reference, accessibility,
  analytics, performance, availability, and error-observation capabilities required by the
  Constitution.
- A managed editorial capability for authorised personnel to draft, review, publish, schedule,
  preview, roll back, and audit case studies, service content, and global settings without
  developer intervention (Constitution §6).

### Out of Scope

- Regional paths or subfolders, including `/us`, `/uk`, and `/eu`; regionalised messaging; and
  automatic currency switching (Constitution §2).
- Top-level routes beyond the six approved MVP routes without a constitution amendment.
- A static, evidence-free portfolio gallery; unverified claims; unauthorised testimonials; or
  undated performance claims (Constitution §2 and §6).
- Legal representation, legal advice, or messaging that presents FINWEB SOLUTION as a law firm.
  Tax support remains advisory and operational support only.
- Storage of sensitive documents without encryption, public access, bounded authorisation, and
  malware screening (Constitution §2 and §4).
- Heavy parallax, scroll-jacking, performance-costly scroll tracking, continuous decorative
  motion, or other disallowed motion (Constitution §2 and §7).
- Insights/blog, gated whitepapers, an ROI calculator, client login, client dashboards, and
  multilingual or regional expansion. These are post-MVP roadmap items.
- Any implementation stack, hosting provider, CMS vendor, analytics vendor, calendar vendor,
  storage provider, or bot-protection service selection. Selection belongs to Stage 3 and must
  satisfy Constitution §§3–5 and §8–9.

### Controlled Decisions and Dependencies

The specification uses the Constitution's default retention policy and release thresholds. Sponsor
approval remains required for the accent direction, accountable owners, confirmation of stated
budgets and availability SLO, and whether the controlled desktop exit-intent offer is enabled
(Constitution §11). These decisions do not change the functional MVP scope; the exit-intent offer
remains disabled until approved.

External dependencies include an approved calendar provider, consent and analytics services,
secure document-transfer capability, bot protection, monitoring, and an editorial platform. Each
must pass the applicable privacy, accessibility, security, resilience, and performance review
before production use (Constitution §4, §6, §8, and §10).

## 2. User Roles & Personas

| Role / Persona | Primary goals | Required capabilities | Success signals |
|---|---|---|---|
| Anonymous Visitor | Quickly understand FINWEB SOLUTION's international dual-engine proposition | View accessible, fast content; compare services; manage cookie preferences | Can identify relevant service and next action without regional confusion |
| CFO / Finance Manager | Assess financial rigour, compliance awareness, and data-handling trust | Review financial pillars, evidence, security statements, advisory disclaimer, and book a finance consultation | Reaches financial service or consultation journey with confidence in under 30 seconds |
| Founder / COO | Find a long-term partner that supports operational stability and growth | Compare both service engines, review proof, submit a tailored inquiry | Completes an appropriate inquiry or booking without unnecessary fields |
| CTO / Technical Decision-Maker | Evaluate technical credibility, measurable web outcomes, and delivery relevance | Browse and filter case studies, inspect dated performance evidence, initiate web consultation | Finds relevant evidence and reaches a web contact CTA within 60 seconds |
| Prospective Financial Client | Request financial support and transfer relevant documents safely | Select Financial inquiry, complete tailored intake, use secure transfer path, book finance consultation | Receives a clear submission or secure-transfer confirmation without exposing documents |
| Prospective Web Development Client | Scope a web engagement and assess comparable results | Filter portfolio, view relevant case studies, submit web-specific requirements, book technical consultation | Portfolio CTA preserves Web Development interest and conversion is recorded |
| General Prospective Client | Ask a question before choosing a service | Select General inquiry and provide a concise message | Receives a clear, accessible confirmation and response expectation |
| Content Editor | Keep approved public content current without developer assistance | Draft, preview, revise, schedule, and submit service or case-study content for review | Changes are traceable and no unreviewed restricted claim becomes public |
| Content Reviewer / Publisher | Protect accuracy, legal posture, and brand quality | Review, approve, reject, publish, roll back, and audit content | Published content has complete evidence, authorisation, and review record |
| Privacy / Compliance Owner | Manage GDPR and CCPA rights requests and compliance claims | Verify requestors, track requests, produce access/deletion/opt-out outcomes, retain evidence | Requests meet applicable deadlines and sensitive data is not exposed in logs |
| Site Operator / Incident Owner | Maintain reliable, safe critical journeys | Review sanitised errors, availability, alerts, and performance signals; coordinate response | Critical journey, security, and availability alerts reach an accountable owner |

## 3. User Stories with Acceptance Criteria

### Shared Global Acceptance Rules

The rules below apply to all applicable stories and are referenced rather than repeated.

- **GAR-01 — International positioning:** Public MVP content uses neutral international English,
  one global proposition, and no regional paths, regional messaging, or automatic currency
  switching (Constitution §2 and §7).
- **GAR-02 — Accessibility:** Every released journey meets WCAG 2.2 AA. It is usable with
  keyboard-only navigation, screen readers, zoom/reflow, and reduced-motion preferences;
  errors are programmatically associated with their controls (Constitution §7).
- **GAR-03 — Performance:** Key routes meet Constitution §3 Lighthouse, Core Web Vitals, transfer,
  image, font, third-party, and interaction-budget gates. A filter, form, booking, upload, or
  consent interaction must not require a full-page reload unless the user deliberately navigates.
- **GAR-04 — Claims and content:** All public claims are attributable, quantified where outcome
  based, current, and approved. Financial tax content carries the advisory/not-a-law-firm
  statement. Stale, unverified, or unauthorised evidence cannot be published (Constitution §2, §6,
  and §7).
- **GAR-05 — Privacy and security:** Public data collection applies data minimisation, consent,
  server-side validation, abuse controls, encryption, retention, and privacy-safe observability
  per Constitution §4 and §8. Client-side checks do not determine acceptance.
- **GAR-06 — Observability:** Applicable KPI events use the versioned taxonomy and no event, log,
  or error record contains free-text inquiry messages, document names, financial data, secrets, or
  unapproved direct identifiers (Constitution §8).
- **GAR-07 — Publishing and release:** Content and software changes follow authorised review,
  traceability, environment separation, quality gates, rollback, and independent approval
  requirements in Constitution §6 and §9.

### Home and Service Discovery

**US-01 — Understand the dual-engine proposition (P1)**

As an Anonymous Visitor, I want the home page to explain Financial Operations & Accounting and
Digital Architecture & Web Development with equal prominence, so that I can choose the relevant
path confidently.

**Acceptance Criteria**

1. Given a visitor opens `/`, when the primary content is available, then the page presents both
   service engines, each with a clear path to its approved service route, in the first primary
   decision area.
2. Given a visitor reviews the home page, when proof, case-study, expertise, trust, and final CTA
   areas are present, then each area uses approved content and does not make unsupported claims
   (GAR-04).
3. Given a visitor activates either primary service CTA by mouse, keyboard, touch, or assistive
   technology, when the destination opens, then the correct service route is reached and the
   action remains usable under GAR-02 and GAR-03.
4. Given a visitor has reduced motion enabled, when the page is viewed, then information remains
   complete and understandable without non-essential animation (GAR-02 and Constitution §7).

**US-02 — Evaluate financial services (P1)**

As a CFO or Finance Manager, I want to understand the financial service pillars, trust controls,
and advisory boundaries, so that I can decide whether to request a consultation.

**Acceptance Criteria**

1. Given a visitor opens `/financial-services`, when the content loads, then the page presents the
   sequence of financial proposition, trust, four pillars, process, compliance information, and a
   consultation CTA.
2. Given a visitor examines the pillars, when Financial Systems & Data Automation is described,
   then it is positioned as strategic finance systems engineering rather than clerical work.
3. Given a visitor reaches tax-compliance support content, when the content is read or announced,
   then the advisory/not-a-law-firm disclaimer is visible and programmatically available.
4. Given security-adjacent financial content is displayed, when the visitor reaches it, then an
   approved security statement is presented without asserting unverifiable certifications
   (GAR-04 and Constitution §4).

**US-03 — Evaluate web development services (P1)**

As a CTO or Founder, I want to understand FINWEB SOLUTION's web-development capability and see a
clear path to relevant proof, so that I can assess technical fit.

**Acceptance Criteria**

1. Given a visitor opens `/web-development`, when the page is available, then it presents an
   evidence-led web proposition, relevant measurable outcomes, and direct paths to `/portfolio`
   and `/contact`.
2. Given a public performance or outcome metric is displayed, when it is inspected, then it meets
   GAR-04 and identifies its case-study context where applicable.
3. Given the visitor selects a web-development CTA, when the action completes, then the visitor is
   directed to the appropriate portfolio or Web Development contact journey without loss of
   accessibility or consent state.

### Portfolio Hub, Filters, and Case Studies

**US-04 — Find relevant portfolio evidence (P1)**

As a CTO or Founder, I want to filter and sort case studies by relevance, so that I can quickly
find comparable work.

**Acceptance Criteria**

1. Given a visitor opens `/portfolio`, when published cases exist, then the hub exposes filters for
   project type, technology category, and industry, plus sort options for newest and performance
   impact.
2. Given a visitor changes a filter or sort option, when the eligible result set updates, then the
   visible list updates without a full-page reload, the active state is accessible, and the URL
   represents the current selection.
3. Given a visitor copies a filtered or sorted URL and opens it in a new session, when the page is
   available, then the same valid selection and result ordering are restored.
4. Given a filter combination has no results, when the result set is empty, then the visitor sees
   a clear accessible empty state, can remove filters, and no misleading results are shown.
5. Given the interaction occurs on an approved key route, when performance is assessed, then it
   meets GAR-03 and preserves valid navigation history.

**US-05 — Assess a case study (P1)**

As a prospective Web Development Client, I want each case study to provide credible business and
technical evidence, so that I can decide whether to request a comparable engagement.

**Acceptance Criteria**

1. Given a visitor opens a published case study, when its content is presented, then it contains
   the business problem, strategy, measurable impact, dated performance evidence, and direct Web
   Development CTA required by Constitution §2.
2. Given performance badges or metrics are shown, when the visitor inspects them, then the
   performance score, audit date, measurement context, and source are available; stale or
   unverifiable values are not displayed (GAR-04).
3. Given approved social proof is available, when it is presented, then it identifies the client,
   industry, testimonial, role, and optional authorised headshot; if it is unavailable, the page
   remains complete without fabricated substitute content.
4. Given a visitor explores device previews, when media is unavailable, slow, or motion is
   reduced, then essential case-study information remains available and the visitor is not blocked
   from the CTA (GAR-02 and GAR-03).
5. Given a visitor activates the final CTA, when `/contact` opens, then the inquiry type or
   interest is preselected as Web Development and remains editable.

### Contact, Intake, Secure Transfer, and Booking

**US-06 — Submit a tailored inquiry (P1)**

As a Prospective Client, I want the contact form to ask only questions relevant to my inquiry, so
that I can request help efficiently and safely.

**Acceptance Criteria**

1. Given a visitor opens `/contact`, when they select Financial Services, Web Development, or
   General, then the form reveals the corresponding fields and identifies required fields before
   submission.
2. Given Web Development is selected, when the form is shown, then it requests budget range,
   timeline, project type, technical preferences where relevant, and optional secure-transfer
   access.
3. Given Financial Services is selected, when the form is shown, then it requests business type,
   revenue bracket, accounting system, required services, and optional secure-transfer access.
4. Given General is selected, when the form is shown, then it requests only the minimum contact
   and message information needed to respond.
5. Given a visitor submits invalid or incomplete data, when authoritative validation runs, then no
   inquiry is accepted, each error is specific and accessible, entered non-sensitive data is
   retained where safe, and the error event follows GAR-06.
6. Given a valid inquiry is accepted, when processing completes, then the visitor sees an
   accessible confirmation with the selected service context and next step; duplicate submissions
   do not create multiple inquiries.
7. Given a visitor declines non-essential analytics consent, when they complete the journey, then
   the inquiry remains available and only permitted measurement occurs (GAR-05).

**US-07 — Transfer documents securely (P1)**

As a Prospective Financial or Web Client, I want to transfer supporting documents through a secure
path, so that sensitive information is protected.

**Acceptance Criteria**

1. Given an eligible visitor elects to provide documents, when the secure-transfer option is
   offered, then the page clearly distinguishes it from the general inquiry form and states the
   allowed file types, size limit, retention period, and secure alternative.
2. Given a visitor initiates a secure upload, when authorisation is issued, then it is bounded to
   the intended transfer, expires within 15 minutes, and does not expose public object access
   (Constitution §4).
3. Given a document is unsupported, exceeds the published limit, fails malware screening, or is
   unavailable for safe processing, when validation completes, then the document is not accepted,
   a non-sensitive accessible error is shown, and the visitor is offered a secure alternative.
4. Given a document is accepted, when transfer completes, then the visitor receives a confirmation
   without displaying the document name in analytics or logs; access and retention follow
   Constitution §4.
5. Given a visitor chooses an approved external secure portal instead, when redirected, then the
   destination is identified before navigation and the original inquiry context is not exposed in
   the URL.

**US-08 — Book a routed consultation (P1)**

As a Prospective Client, I want to book the correct consultation in my local timezone, so that I
can arrange a useful next conversation.

**Acceptance Criteria**

1. Given a visitor initiates booking from a Financial or Web context, when the booking option
   opens, then it routes to the matching consultation journey and states that the session is
   30 minutes.
2. Given a timezone can be detected, when booking times are displayed, then times reflect the
   visitor's detected timezone and the displayed timezone is identifiable before confirmation.
3. Given timezone detection is unavailable or rejected, when booking opens, then the visitor can
   select or confirm a timezone manually before booking.
4. Given the calendar provider is unavailable, when booking cannot proceed, then the visitor sees
   an accessible fallback contact path, no booking-complete event is recorded, and the failure is
   observed per GAR-06.
5. Given a booking is completed, when the provider confirms it, then `booking_complete` is
   recorded only with consent-permitted, privacy-safe properties (GAR-05 and GAR-06).

### Privacy, Consent, Editorial Governance, and Operations

**US-09 — Control privacy choices and exercise data rights (P1)**

As an Anonymous Visitor or Data Subject, I want to manage cookie choices and request privacy
rights, so that I control my personal information.

**Acceptance Criteria**

1. Given a visitor first encounters non-essential tracking where consent is required, when the
   consent interface is shown, then reject and accept are equally available, categories are
   explained, and non-essential tracking remains disabled until consent (Constitution §4).
2. Given a visitor changes their preference, when the change is saved, then the new choice applies
   to future non-essential collection and a consent record contains the required policy version,
   timestamp, and categories.
3. Given a data subject requests access, correction, deletion, portability where applicable, or
   sale/share opt-out, when the request is submitted, then the service records the request,
   initiates identity verification, provides a reference, and does not disclose personal data
   before verification.
4. Given a verified request is actionable, when it is processed, then the outcome and evidence are
   recorded and delivery meets the Constitution §4 GDPR or CCPA deadline, including a lawful
   extension where applicable.
5. Given deletion cannot be completed because a lawful retention basis applies, when the requestor
   is notified, then the response states the limited reason and remaining retention basis without
   exposing unrelated data.

**US-10 — Manage approved public content (P1)**

As a Content Editor or Publisher, I want a controlled workflow for service and portfolio content,
so that public information remains current, accurate, and auditable.

**Acceptance Criteria**

1. Given an authorised editor creates or changes a case study, service content block, or global
   setting, when saving a draft, then the change is not public and retains author, timestamp,
   version, and review status.
2. Given a case study is submitted for review, when required content is incomplete, unauthorised,
   unverified, stale, or missing required evidence, then publication is blocked and the reviewer
   sees the failing requirement.
3. Given a reviewer approves content, when it is published or scheduled, then only the approved
   version becomes public; prior versions remain available for authorised rollback.
4. Given content contains legal, compliance, security, or quantified outcome claims, when it is
   submitted, then designated-reviewer approval is required before publication (Constitution §6).
5. Given an unauthorised user attempts a restricted editorial action, when the action is requested,
   then it is denied, no public change occurs, and the attempt is recorded without sensitive
   content in logs.

**US-11 — Operate reliable critical journeys (P1)**

As a Site Operator, I want visibility into availability, errors, performance, and conversion
journeys, so that issues are detected and resolved before they materially harm prospects.

**Acceptance Criteria**

1. Given a production release is evaluated, when the key routes and critical journeys are tested,
   then GAR-02, GAR-03, GAR-05, GAR-06, and Constitution §9 quality gates are met before release.
2. Given a key journey experiences repeated failure, excessive server errors, material LCP
   regression, or availability breach, when the relevant Constitution §8 threshold is met, then
   an alert routes to the assigned severity path with an owner and runbook.
3. Given telemetry is collected, when it is reviewed, then it reports the relevant event, route,
   device class, release version, and consent-safe context without prohibited data (GAR-06).
4. Given an emergency change is necessary, when it is released, then it follows the documented
   incident authority, risk record, and retrospective completion requirements in Constitution §9.

## 4. Edge Cases

| Functional area | Condition | Expected behaviour |
|---|---|---|
| Navigation and content | JavaScript is unavailable or fails before optional interactions load | Core routes, service information, legal links, contact path, and case-study reading remain available; optional enhancement failure is recorded without personal data. |
| Navigation and content | Visitor uses keyboard, screen reader, zoom, or reduced motion | The journey remains complete under GAR-02; focus is visible and logical; dynamic updates are announced where needed. |
| Portfolio | URL contains an unknown filter, duplicate parameter, invalid sort, or no matching results | Invalid values are ignored or reset to a safe default; valid state remains shareable; an accessible empty state appears for valid no-result combinations. |
| Portfolio | Portfolio data is temporarily unavailable | The visitor receives a clear, accessible unavailable state with a route to Web Development and Contact; no fabricated or stale evidence is shown; failure is observed. |
| Case study | Performance evidence has passed its review date or lacks authorisation | The claim or badge is withheld from public display and publishing is blocked until reviewed (GAR-04). |
| Case study media | Large media, slow connection, or failed preview asset | Textual evidence and CTA remain immediately available; media does not cause layout shift beyond Constitution §3 thresholds. |
| Contact intake | Required field is missing, malformed, or rejected by authoritative validation | Submission is not accepted; the field receives a concise accessible error; safe entered values are preserved; no sensitive values are sent to analytics. |
| Contact intake | Visitor submits twice, refreshes after submit, or network acknowledgement is lost | The system prevents duplicate inquiry creation where the first submission succeeded; it displays a clear status and safe retry option where status is unknown. |
| Abuse prevention | Suspected bot traffic, rate-limit breach, or bot-control challenge failure | The request is blocked or challenged without exposing validation logic; a human-accessible fallback is available; events are privacy safe. |
| Secure transfer | Unsupported, oversized, corrupt, infected, expired, or interrupted upload | The object is not made available; a non-sensitive error and secure alternative are shown; partial data is cleaned up according to policy; security-relevant failure is observed. |
| Secure transfer | Authorisation link is reused or expires | Access is denied without revealing document existence; the visitor may request a new secure transfer path. |
| Booking | Timezone cannot be determined, booking provider is slow, or provider is unavailable | The visitor can choose a timezone manually; an accessible fallback inquiry path is shown if booking cannot complete; no false confirmation is displayed. |
| Consent and DSR | Consent is declined or withdrawn | Non-essential tracking stops; essential service capabilities remain available; the change is recorded with required consent metadata. |
| Consent and DSR | Rights request cannot be verified or conflicts with legal retention | No personal data is disclosed; the requestor receives a request for verification or a bounded explanation of the lawful retention basis. |
| Editorial | Two editors change the same item or a reviewer rejects a draft | The public version remains unchanged; the conflict or rejection is visible to authorised users; audit history is preserved. |
| Observability | Analytics, monitoring, or an external embed fails | The core route and contact journey remain usable; the failure is recorded where permitted; no personal data is queued in an unapproved fallback. |
| Low-end devices and networks | Loading is delayed or memory is constrained | Essential content and primary CTAs are prioritised; optional interactive and visual elements do not block the route or breach GAR-03. |

## 5. System Flows (Textual)

### 5.1 Portfolio Filtering and Sorting

**Preconditions:** Published case studies have approved metadata; the visitor is on `/portfolio`.

1. The portfolio hub loads the default published result set and makes filter and sort controls
   available with their current state announced accessibly.
2. The visitor selects one or more project type, technology category, or industry filters, or
   chooses newest or performance-impact ordering.
3. The hub validates the selected values against available published metadata and updates the URL
   to represent valid state.
4. The eligible results update without a full-page reload; the updated count and any empty state
   are communicated to assistive technology.
5. The system records `portfolio_filter` only with consent-permitted, non-identifying selection
   metadata (GAR-06).
6. The visitor may share, bookmark, navigate back to, or restore the valid URL state. Invalid URL
   values follow the Portfolio edge case behaviour.

**Outcome:** The visitor can find relevant, approved evidence while preserving URL state,
accessibility, and GAR-03 performance thresholds.

### 5.2 Case Study Viewing and Performance Evidence

**Preconditions:** A case study has been approved for publication and contains required evidence.

1. The visitor opens the case-study route from the portfolio hub, another approved link, or a
   shared URL.
2. The page presents the business problem, strategy, impact, visual evidence, dated performance
   metadata, social proof where approved, and Web Development CTA.
3. If performance badges are displayed, the visitor can access score, audit date, source, and
   measurement context without relying on visual colour or motion.
4. Optional visual previews load without blocking the narrative, performance metadata, or CTA.
5. The system records `case_study_view` using GAR-06; no free-text, client-sensitive, or document
   data is included.
6. The visitor selects the final CTA. `/contact` opens with Web Development interest preselected
   and editable.

**Outcome:** The visitor receives an attributable, current measurable-impact story and can begin a
relevant inquiry.

### 5.3 Contact and Dynamic Intake

**Preconditions:** The visitor is on `/contact` or has arrived through an approved CTA.

1. The page presents Financial Services, Web Development, and General inquiry choices. A linked
   case-study CTA may preselect Web Development.
2. The visitor selects or confirms the inquiry type; the page displays the minimum tailored fields
   for that type and identifies required inputs.
3. The visitor completes the form. Immediate guidance may help correct obvious input problems,
   while authoritative acceptance occurs on submission (GAR-05).
4. The visitor may initiate the separate secure-transfer path if supporting documents are needed.
5. On submit, the system validates the request, applies abuse controls, prevents duplicate
   creation, and records only consent-safe `contact_form_submit` or `contact_form_error` events.
6. If valid, the visitor receives an accessible confirmation with the inquiry context and an
   applicable booking option. If invalid, the visitor receives field-specific errors and can retry.

**Data captured:** Inquiry type; only the type-specific contact and qualification information
needed to respond; consent state; operational submission status. Retention follows Constitution
§4.

**Outcome:** FINWEB SOLUTION receives a validated, minimised, appropriately classified inquiry.

### 5.4 Secure Document Transfer

**Preconditions:** The visitor has selected an eligible Financial or Web inquiry path and elects to
transfer supporting material.

1. The visitor is shown the purpose, allowed file types and size, retention period, secure
   alternative, and privacy information before selecting a file.
2. The system validates transfer eligibility and creates a one-time, bounded secure transfer
   authorisation valid for no more than 15 minutes.
3. The visitor transfers the file through the secure path; the file is not publicly accessible.
4. The system validates file type and size, screens for malware, and records only auditable,
   privacy-safe operational metadata.
5. If accepted, the visitor sees a confirmation. If rejected or interrupted, the visitor sees a
   non-sensitive error and a secure alternative path; rejected or partial objects are cleaned up
   per policy.
6. Authorised internal access is logged; the document is deleted after 30 days unless moved to an
   approved active-engagement system under Constitution §4.

**Outcome:** Documents are available only to authorised parties, with encryption, bounded access,
malware screening, retention enforcement, and no document content in analytics or logs.

### 5.5 Calendar Booking and Conditional Routing

**Preconditions:** The visitor has started booking from a financial or web context, or has selected
a context before booking.

1. The booking trigger determines the selected inquiry context.
2. The visitor is routed to the corresponding Financial or Web 30-minute strategy-session option.
3. The booking journey detects and displays the visitor's timezone; the visitor can confirm or
   manually select it if detection is unavailable.
4. The visitor selects an available time and completes the provider's required booking steps.
5. On provider confirmation, the site confirms the next step and records `booking_complete` with
   consent-permitted, minimised metadata. On failure, it presents the fallback contact path and
   records a sanitised error.

**Outcome:** The visitor can schedule the appropriate consultation without timezone ambiguity.

### 5.6 GDPR/CCPA Consent and Rights Requests

**Preconditions:** A visitor encounters optional tracking or a data subject opens the privacy
request path.

1. Where required, the visitor receives a consent interface before non-essential tracking begins.
2. The visitor accepts, rejects, or customises categories; the choice is stored with policy
   version, timestamp, and categories.
3. A data subject selects access, correction, deletion, portability where applicable, or
   sale/share opt-out and submits the minimum details needed to begin the request.
4. The system records the request, provides a reference, and initiates identity verification.
5. An authorised owner verifies identity, locates applicable data, fulfils the request or records
   a lawful refusal/extension, and retains completion evidence.
6. The requestor receives the outcome within the Constitution §4 deadline. No personal data is
   disclosed before verification.

**Outcome:** Consent is reversible and rights requests are traceable, securely verified, and timely.

### 5.7 CMS Editorial Workflow

**Preconditions:** An authorised editor has access to managed content.

1. The editor creates or updates a Case Study, Financial Services Content Block, Web Development
   Content Block, or Global Setting as a draft.
2. The editorial system validates required structured content, evidence source, audit date,
   authorisation state, and review requirements before allowing submission for review.
3. A designated reviewer checks accuracy, brand, accessibility-relevant content, and any legal,
   compliance, security, or quantified claim.
4. The reviewer approves, rejects with a reason, or requests revision. Rejected content remains
   non-public.
5. Approved content is published immediately or scheduled. The published version is traceable to
   its author and reviewer; the prior version remains available for authorised rollback.
6. A content change that creates stale or unverifiable public evidence is corrected, unpublished,
   or rolled back promptly.

**Outcome:** Public content has a single authoritative source, controlled publication, and an audit
trail without developer dependency for standard editorial updates.

## 6. Measurable Success Criteria

| ID | Outcome and target | Measurement method and source | Scope and evaluation window |
|---|---|---|---|
| SC-001 | Organic lead conversion is between 2.5% and 4.0%. | Consent-permitted analytics: valid inquiry submissions from qualified organic sessions divided by qualified organic sessions. | Whole public site; monthly reporting after a validated baseline is established. |
| SC-002 | Contact form completion is at least 35%. | `contact_form_submit` divided by `contact_form_start`; exclude confirmed bot traffic and duplicate submissions. | `/contact` and prefilled contact journeys; rolling 30 days. |
| SC-003 | Portfolio-to-contact click-through rate is at least 12%. | Unique `portfolio_cta_click` events divided by unique portfolio or case-study viewers. | `/portfolio` and published case studies; monthly. |
| SC-004 | Each approved key route scores at least 95 for Lighthouse Performance, Accessibility, Best Practices, and SEO. | Production-build mobile audit; median of three runs per route. | `/`, `/financial-services`, `/web-development`, `/portfolio`, representative published case study, `/about`, and `/contact`; before each release. |
| SC-005 | p75 LCP is under 2.5 seconds, CLS is under 0.10, and INP is under 200 milliseconds. | Consent-permitted real-user monitoring by route, device class, and release version. | Key public routes; mobile and desktop; rolling 28 days. If field data is insufficient, use the Constitution §3 laboratory rule. |
| SC-006 | TTI is under 3.0 seconds on each key route. | Mobile laboratory audit using the approved release profile. | Same key-route scope as SC-004; before each release. |
| SC-007 | Every key route meets the Constitution §3 transfer budgets: initial compressed JavaScript ≤170 KB per route; any asynchronously loaded interactive component ≤100 KB unless approved; above-fold images ≤250 KB combined; individual delivered image ≤200 KB unless justified; fonts ≤100 KB and two families; key-route initial transfer ≤1 MB; third-party scripts ≤100 KB. | Production-build budget report in CI. | Key public routes; every release. A breach blocks release unless a documented, time-bounded exception exists. |
| SC-008 | Average engaged time on published case studies exceeds 2 minutes 30 seconds. | Consent-permitted analytics using engaged-time calculation; exclude bots. | Published case-study routes; monthly after a 30-day baseline. |
| SC-009 | Median maximum scroll depth on service pages exceeds 65%. | Consent-permitted scroll-depth measurement. | `/financial-services` and `/web-development`; monthly after a 30-day baseline. |
| SC-010 | All six critical journeys have a passing accessible happy path and relevant validation, failure, keyboard, and reduced-motion checks. | Release quality evidence and independent review. | Service discovery, portfolio-to-contact, form submission, booking handoff, consent preferences, and secure transfer; every release. |
| SC-011 | Production availability is at least 99.9% per calendar month, excluding approved maintenance. | Synthetic monitoring of home, portfolio, contact availability, booking handoff, and secure-transfer initiation from at least two target-market regions. | Production; monthly. |
| SC-012 | GDPR and CCPA requests are fulfilled within 30 and 45 days respectively, subject to lawful verified extensions. | Privacy-request register with request, verification, deadline, outcome, and completion evidence. | All verified requests; measured per request and reviewed monthly. |
| SC-013 | Public case studies and outcome claims are 100% attributable, approved, dated, and within their review period. | Editorial review record and publication audit. | All published case studies and claims; at publication and monthly review. |

**Baselines:** No conversion or engagement baseline exists at specification time. Before performance
trend decisions, analytics event integrity and a 30-day baseline MUST be established (Constitution
§10). Release thresholds in SC-004 through SC-007, SC-010 through SC-013 apply immediately.

Awaiting approval to proceed to Stage 3 (Execution Plan).
