# Provider Port Contracts

Production adapters must complete privacy, accessibility, security, resilience, data-processing, retention, cross-border, and performance reviews before activation. Route and component code depends on these ports, not vendor SDKs.

## ContentRepository

- List only published, approved, current case studies for public queries.
- Resolve a published case study by slug without leaking draft existence.
- Fetch service/global content with provenance and controlled revalidation metadata.
- Fetch drafts only with an authorised preview context.
- Preserve author, reviewer, version, status, and revision history.

## InquiryRepository

- Create an inquiry atomically using a hashed idempotency key.
- Return the prior outcome for a matching replay; reject conflicting payloads.
- Encrypt personal data in production and enforce retention/anonymisation.
- Never forward sensitive bodies to general logs or analytics.

## ConsentStore and TelemetryDispatcher

- Consent defaults non-essential categories to disabled.
- Store policy version, timestamp, categories, and changes.
- Dispatch only registered, versioned event names with allowlisted properties and sufficient consent.
- Drop or reject unknown properties; never queue prohibited data when a provider fails.

## RateLimiter and BotProtection

- Evaluate public API abuse without exposing enforcement details.
- Support an accessible human fallback and minimise tracking.
- Return bounded decisions (`allow`, `challenge`, `deny`, `unavailable`) plus opaque evidence.
- Do not make essential contact/privacy capability conditional on non-essential consent.

## UploadAuthoriser, ObjectStore, and MalwareScanner

- Generate write-only, single-purpose authorisations expiring within 15 minutes.
- Keep objects private and encrypted; deny reuse and public reads.
- Validate expected content type and maximum byte count before availability.
- Quarantine until malware result is clean; clean up rejected/partial objects.
- Produce privacy-safe audit events and enforce the 30-day intake retention policy.

## CalendarGateway

- Route Financial and Web contexts to distinct 30-minute consultations.
- Accept an IANA timezone and expose manual timezone selection/fallback.
- Isolate provider failure and return an accessible contact alternative.
- Emit booking completion only after provider confirmation and permitted consent.

## MonitorSink and AlertRouter

- Record privacy-safe route/journey availability, sanitised errors, Core Web Vitals, device class, release, and region.
- Trigger rules for availability below 99.9%, two-region consecutive journey failures, server errors over 2% for five minutes, and p75 LCP over 2.5 seconds for 30 minutes at sufficient volume.
- Route alerts with severity, accountable role, runbook, and escalation path.
- Retain general logs for 30 days by default and support access control.

## Local adapters

Local/test adapters are deterministic, use synthetic data, make no network calls, expose failure controls for tests, and clearly label fixture provenance. They are not a second production editorial or personal-data store.
