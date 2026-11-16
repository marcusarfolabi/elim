This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Testimonies and Supabase availability

Apply `supabase/migrations/20261116090000_public_testimonies.sql` to the Supabase project. It allows public reads only for testimonies whose authors opted in, and limits anonymous reads to fields used on the website. Public submissions revalidate the homepage and appear on `/testimonies`.

Configure `RESEND_API_KEY` and `SYSTEM_EMAIL` in the deployment environment to send testimony notifications to the system administrator. Set a strong `CRON_SECRET` in the Vercel production environment so the daily `/api/cron/supabase-keepalive` job can query Supabase.

## Elim Studio bookings

Apply `supabase/migrations/20261115000000_create_studio_bookings.sql` to the Supabase project used by the deployment. It creates `public.studio_bookings` and allows anonymous booking submissions through row-level security. If booking requests fail with `PGRST205` after confirming the table exists, refresh the PostgREST schema cache in the Supabase SQL Editor:

```sql
NOTIFY pgrst, 'reload schema';
```

The daily request is a best-effort way to avoid inactivity pauses on Supabase Free. Supabase states that upgrading to Pro is the way to guarantee a project will not be paused for inactivity.
