# HTTP API Contracts

All JSON APIs use HTTPS in production, `Content-Type: application/json`, no-store personal responses, bounded request bodies, authoritative server validation, rate limiting where public, privacy-safe errors, and opaque request references. Unknown fields are rejected. Errors follow:

```json
{
  "error": {
    "code": "VALIDATION_FAILED",
    "message": "Review the highlighted fields.",
    "fields": { "fieldName": "Accessible field-specific guidance" },
    "requestId": "opaque-reference"
  }
}
```

`message`, field errors, and logs never echo sensitive submitted values.

## POST `/api/contact`

Creates one Financial, Web Development, or General inquiry.

**Headers**: `Idempotency-Key` is required and opaque. Bot/fallback evidence is transported using the selected adapter contract, not stored in analytics.

**Request**:

```json
{
  "type": "financial | web | general",
  "contact": { "name": "string", "email": "email", "organisation": "string?" },
  "details": {},
  "consent": { "policyVersion": "string", "analytics": false },
  "secureTransferRequested": false
}
```

`details` is a discriminated schema: Financial permits business type, revenue bracket, accounting system, and requested services; Web permits budget range, timeline, project type, and technical preferences; General permits only minimum message data.

**Responses**: `201` accepted with opaque inquiry reference and next-step context; `200` for an idempotent replay of the same accepted request; `400` validation; `409` conflicting idempotency payload; `429` rate limit; `503` accessible bot-control fallback or unavailable dependency.

## POST `/api/upload/url`

Issues a single-use, write-only upload authorisation for an eligible inquiry.

**Request**:

```json
{
  "inquiryReference": "opaque-reference",
  "contentType": "allowed MIME type",
  "sizeBytes": 12345
}
```

**Response `201`** includes opaque transfer ID, provider-neutral upload target fields, required headers, and `expiresAt`. Expiry must be no later than 15 minutes after issue. Responses use `Cache-Control: no-store` and never expose storage credentials or public read access.

**Errors**: `400` unsupported type/size; `403` ineligible context; `409` authorisation already consumed; `429`; `503` with secure alternative.

## POST `/api/upload/verify`

Verifies object receipt and initiates integrity and malware quarantine processing.

**Request**: opaque transfer ID and provider callback proof defined by the selected storage adapter.

**Response**: `202` with `status: "screening"`; repeat-safe `200` for an already verified callback. Rejected, expired, missing, oversized, or infected objects are never made available and return only bounded status/error codes. File names and content never enter analytics or general logs.

## POST `/api/privacy/request`

Records a minimised GDPR/CCPA rights request and begins identity verification.

**Request**:

```json
{
  "type": "access | correction | deletion | portability | opt_out",
  "jurisdiction": "gdpr | ccpa | other",
  "contact": { "email": "email", "name": "string?" },
  "policyVersion": "string"
}
```

**Response `202`**: opaque request reference, verification-required status, and applicable target deadline. No personal data is disclosed. Uses rate limit, abuse controls, no-store, and privacy-audit logging.

## GET `/api/preview`

Authorised editorial preview entry point.

**Inputs**: short-lived signed preview token and validated internal content path. Tokens are audience-, purpose-, and expiry-bound.

**Behaviour**: Establishes a secure preview session and redirects only to an allowlisted internal route. Draft responses use `Cache-Control: private, no-store`; unauthorised or expired requests reveal no draft existence. Preview access is audited.
