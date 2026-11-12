# Data Model — MMQH SOLUTION Website

## Shared conventions

Persisted records use opaque IDs plus `createdAt` and `updatedAt` where applicable. Production adapters encrypt personal and document data at rest. Analytics, logs, and public errors exclude inquiry free text, document names, financial details, secrets, and unapproved direct identifiers.

## Editorial entities

### CaseStudy

- **Fields**: `id`, unique URL-safe `slug`, `title`, `status`, authorised client identity, `industry`, `projectTypes`, `technologyCategories`, `problem`, `strategy`, `outcomes`, optional `performanceEvidence`, optional authorised `testimonial`, media references, Web Development CTA, SEO metadata, `authorId`, `reviewerId`, `version`, timestamps.
- **Validation**: Publication requires complete problem/strategy/outcome evidence, client authorisation, reviewer approval, and current evidence. Performance evidence requires source, context, audit date, review/expiry date, and approval. Expired or unverifiable evidence is withheld.
- **States**: `draft → in_review → approved → scheduled|published`; `in_review → rejected → draft`; `published → archived`. Rollback restores an authorised prior revision as a new traceable version.

### ServiceContent

- **Fields**: `id`, `service` (`financial` or `web`), structured blocks, evidence references, CTA, order, editorial status and provenance.
- **Validation**: Shared content is referenced, not copied. Tax-support content requires the visible advisory that MMQH SOLUTION provides support and is not a law firm.

### GlobalSettings

Navigation, contact methods, consultation references, legal references, social profiles, reusable trust statements, default SEO, policy version, and controlled feature flags. Exit intent defaults to disabled.

### ContentRevision and AuditEvent

Immutable entity/version reference, actor and role, timestamp, action, review status, and sanitised reason/reference. Audit events cover editorial actions, preview access, upload access, and privacy workflows without copying sensitive bodies into general logs.

## Acquisition and privacy entities

### Inquiry

- **Fields**: opaque `id`, `type` (`financial`, `web`, `general`), encrypted minimum contact data, type-specific validated details, status, hashed idempotency key, consent snapshot, activity and retention timestamps.
- **Validation**: Each inquiry type permits only its schema fields. Server acceptance requires abuse checks and authoritative validation.
- **States**: `received → processing → confirmed|failed`; later `retained → deleted|anonymised`.
- **Retention**: Delete or anonymise after 24 months of inactivity unless a documented lawful basis applies.

### ConsentRecord

Policy version, timestamp, category choices, source, and withdrawal history associated with a pseudonymous browser/session reference where permissible. Non-essential categories default false; essential journeys never depend on analytics consent.

### DataSubjectRequest

Request type (`access`, `correction`, `deletion`, `portability`, `opt_out`), minimised contact details, opaque reference, jurisdiction, verification status, deadline, extension basis, processing status, outcome, and completion evidence reference. No personal data is disclosed before verification. GDPR and CCPA deadlines are 30 and 45 days respectively, subject to lawful extensions.

### BookingIntent

Service context (`financial` or `web`), detected/confirmed IANA timezone, provider handoff reference, status (`started`, `provider_pending`, `confirmed`, `failed`), and consent-safe timestamps. Analytics excludes full appointment and contact data.

## Secure transfer entities

### UploadAuthorisation

Opaque transfer ID, inquiry/eligibility reference, allowed MIME types, maximum bytes, issue and expiry timestamps (maximum 15 minutes), single-use status, write-only storage reference, and retention metadata. It never exposes public object access or credentials.

### UploadVerification

Authorisation reference, object integrity state, malware state (`pending`, `clean`, `infected`, `failed`), quarantine state, sanitised failure code, audit reference, and deletion deadline. Uploaded intake documents expire after 30 days unless moved to an approved active-engagement system.

## Operational entities

### TelemetryEvent

Schema version, event name, route, release version, device class, consent category, timestamp, and event-specific allowlisted metadata. Supported events include `service_view`, `case_study_view`, `portfolio_filter`, `portfolio_cta_click`, `contact_form_start`, `contact_form_submit`, `contact_form_error`, `booking_start`, `booking_complete`, `secure_upload_start`, and `secure_upload_complete`.

### SanitisedError, MonitorResult, and Alert

Operational records contain system/route, release, timestamp, severity, bounded code/category, and trace reference. Alerts additionally carry accountable role, runbook, state, and escalation timestamps. General logs default to 30-day retention.

## Relationships

- Editorial entities have many `ContentRevision` and `AuditEvent` records.
- An `Inquiry` may have multiple `UploadAuthorisation` records; each authorisation has at most one current `UploadVerification`.
- An `Inquiry` stores a consent snapshot but processing does not require analytics consent.
- A `BookingIntent` may originate from an inquiry, service page, or case study.
- A verified `DataSubjectRequest` may reference matching retained records through authorised privacy workflows only.
