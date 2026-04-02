app/
│   ├── (auth)/            # Login for Webmail/Admin 
│   ├── (public)/          # Public-facing pages
│   │   ├── pastors/       # [cite: 2]
│   │   ├── pillars/       # [cite: 4]
│   │   ├── salvation/     # [cite: 5, 52]
│   │   ├── resources/     # [cite: 6, 17]
│   │   ├── donate/        # [cite: 7]
│   │   └── gallery/       # [cite: 24]
│   ├── api/               # API routes for forms/donations
│   │   ├── forms/         # Choir, Fellowship, Testimony [cite: 53, 54, 55]
│   │   └── payment/       # Integration with Monnify/Flutterwave
│   ├── layout.tsx         # Root layout with Header/Footer [cite: 78]
│   └── page.tsx           # Home page [cite: 1]
├── components/
│   ├── ui/                # Shared UI elements (Buttons, Inputs)
│   ├── home/              # Hero, Gallery Grid, Live Feed sections [cite: 24, 69]
│   └── shared/            # Navbar, Footer [cite: 78]
├── lib/
│   ├── db.ts              # Database connection logic
│   └── utils.ts           # Helper functions
└── public/
    └── assets/            # Church logo, Manual covers


    3. Core Feature Implementation[ ] Hero Section: Implement the "Your Place of Comfort" background and call-to-action buttons. [ ] Live Streaming Integration: Embed YouTube/Facebook Live links and RCCG Live Radio. [ ] Resources & Downloads: Create a section for the "Workers in Training" and "Baptismal" manuals. [ ] Contact & Location: Integrate Google Maps for the Akowonjo Lagos address. [ ] Forms Logic:[ ] Create a "Salvation Form" for new converts. [ ] Create a "Testimony Form" to capture and display user stories. [ ] Create a "Choir Membership" application form. 4. Backend & DevOps[ ] Database Schema: Design tables for Members, Testimonies, and Donations using your preferred VAS application logic.[ ] Email Infrastructure: Integrate with FalconMail (your sovereign JMAP setup) for sending newsletter updates and form receipts.[ ] Payment Integration: Implement secure donation workflows.[ ] Admin Dashboard: Secure area to manage testimonies and resource uploads. 5. Final Polish[ ] Ensure mobile responsiveness (essential for the Lagos community accessing via mobile).[ ] SEO Optimization for "Elim Sanctuary Lagos Province 37". [ ] Setup "Sermon to Inbox" subscription logic. 
 1. [ ] Initialize UI Components: yarn dlx shadcn-ui@latest init

[ ] Install Theme & Icons: yarn add next-themes lucide-react

[ ] Install Animation Engine: yarn add motion

[ ] Install "Wow" Components (Modern UI):

[ ] Copy Aurora Background source from Aceternity UI.

[ ] Copy Animated Grid Pattern source from Magic UI for the "Our Pillars" section.

[ ] Setup Media Optimization: yarn add next-cloudinary