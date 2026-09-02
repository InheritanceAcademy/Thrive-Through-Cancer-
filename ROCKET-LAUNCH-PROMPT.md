# ThriveThroughCancer launch hardening prompt

Apply the following launch fixes in one scoped pass. Preserve all approved page copy, pricing, imagery, navigation, contact details, analytics measurement ID and current visual design. Do not modify or regenerate the logo because the final designer-supplied logo is still pending. Do not add Supabase, payments, a CMS or unrelated features.

## 1. Make both enquiry forms truthful and reliable

- Replace Nodemailer and all SMTP logic with Rocket's supported Resend integration. Remove `nodemailer` and `@types/nodemailer` from the dependencies.
- Use only server-side environment variables: `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `NOTIFY_TO_EMAIL` and `NEXT_PUBLIC_SITE_URL`. Add placeholders to `.env`, but never place real secrets in code or chat.
- Use `RESEND_FROM_EMAIL=ThriveThroughCancer <coaching@thrivethroughcancer.co.za>` after the `.co.za` domain is verified in Resend. Use `NOTIFY_TO_EMAIL=coaching@thrivethroughcancer.co.za`.
- The booking and contact forms must await `/api/notify`. Show the success state only after the API returns a confirmed success response. If delivery is unavailable or fails, keep the entered values and show a clear inline error that recommends the existing WhatsApp button as the fallback.
- Send two transactional emails for every valid submission: an owner notification with reply-to set to the visitor's email, and a short acknowledgement to the visitor. Include plain-text and escaped HTML versions.
- Record the GA4 form submission conversion only after confirmed email delivery, never on a failed attempt.
- Validate and length-limit all fields on the server. Allow only the existing booking session IDs. Escape all user input before inserting it into HTML.
- Add a hidden honeypot field, reject cross-site form posts, cap request body size and add a small best-effort abuse limit. Do not log form content or health information.
- If Resend is not configured, return a non-success HTTP status. Never silently succeed and never claim that an enquiry was received when no email was delivered.

## 2. Correct the SEO and structured-data implementation

- Use `https://thrivethroughcancer.co.za` as the production site URL, canonical root and metadata base. The `.co.za` domain is the owned primary domain. Do not use the `.com` domain unless it is purchased later. If it is purchased later, it should redirect to the `.co.za` primary.
- Replace every hardcoded `cancercoac5506.builtwithrocket.new` canonical and Open Graph URL across Home, About, Services, Contact, FAQ, Stories, Resources, Privacy, Terms and every resource article.
- Rebuild `sitemap.ts` using real page routes only. Remove hash-fragment URLs. Include Home, About, Services, Contact, FAQ, Stories, Resources, Privacy, Terms and all ten resource article URLs.
- Set Open Graph locale to `en_ZA`. Use UK English and South African context.
- Correct the JSON-LD to reflect the approved current offer details: the free Discovery Chemistry WhatsApp Call is 10 minutes, the single session is 90 minutes, prices are led with ZAR, and the contact address uses the `.co.za` domain.
- Keep `/api/` out of search indexing. Do not block `/_next/` assets in `robots.txt`.
- Remove unsupported public claims such as `HIPAA-compliant`, `strictly confidential` and absolute promises that information is never shared. Replace them with accurate language that refers visitors to the Privacy Policy and says details are used to respond to the enquiry.

## 3. Restore honest build gates

- Remove `typescript.ignoreBuildErrors` from `next.config.mjs`.
- Fix optional GSAP DOM targets with safe empty fallbacks so `npm run type-check` passes.
- Keep the changes surgical. Do not reformat the whole project or rewrite approved content.
- Run `npm run type-check` and `npm run build`. Fix any errors introduced by this work. Report the exact environment variables still requiring real production values.

Acceptance criteria:

1. A missing or invalid email configuration produces a visible form error and no success screen.
2. A valid Resend configuration sends both the owner notification and visitor acknowledgement.
3. GA4 conversion events fire only after delivery succeeds.
4. No public canonical or sitemap URL references the temporary Rocket domain.
5. The production build and TypeScript check pass.
