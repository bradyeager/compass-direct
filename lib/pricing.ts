export type Tier = {
  name: string;
  sub?: string;
  price: string;
  unit?: string;
  bullets: string[];
  cta: string;
  featured?: boolean;
};

// Prices recovered from the archived site (2019, and 2015 for building-permit /
// parent / divorce). Flagged in the UI as "verify before launch."
export const pricingBySlug: Record<string, Tier[]> = {
  "consumer-lists": [
    {
      name: "Consumer Database",
      price: "6¢",
      unit: "/record",
      featured: true,
      cta: "Get started",
      bullets: [
        "74 free filters included",
        "3,296 premium filters available",
        "94% deliverability guarantee",
        "Order & download in minutes",
      ],
    },
  ],
  "business-lists": [
    {
      name: "Business Database",
      price: "6¢",
      unit: "/record",
      featured: true,
      cta: "Get started",
      bullets: [
        "25 free filters included",
        "Dozens of premium filters available",
        "94% deliverability guarantee",
        "Order & download in minutes",
      ],
    },
  ],
  "new-mover-lists": [
    {
      name: "One-time order",
      price: "8¢",
      unit: "/record",
      cta: "Get started",
      bullets: [
        "Updated weekly",
        "Any date range in the past 6 months",
        "$50 minimum order",
        "Upgrade to a subscription anytime",
      ],
    },
    {
      name: "Weekly Subscription",
      sub: "Most popular!",
      price: "8¢",
      unit: "/record",
      featured: true,
      cta: "Subscribe now",
      bullets: [
        "Order once, get new movers every week",
        "No contracts — cancel anytime",
        "$50 minimum for your first order",
        "Just 8¢/record for each weekly update",
      ],
    },
    {
      name: "Monthly Subscription",
      sub: "Updates each month",
      price: "8¢",
      unit: "/record",
      cta: "Subscribe now",
      bullets: [
        "Order once, get new movers every month",
        "No contracts — cancel anytime",
        "$50 minimum for your first order",
      ],
    },
  ],
  "new-homeowner-lists": [
    {
      name: "Weekly List",
      price: "8¢",
      unit: "/record",
      cta: "Get started",
      bullets: ["Compiled via FOIA from county offices", "~21 days after filing", "$50 minimum order"],
    },
    {
      name: "Premium Weekly",
      sub: "Most popular!",
      price: "12¢",
      unit: "/record",
      featured: true,
      cta: "Subscribe now",
      bullets: ["2–3 weeks faster — 100% deed filings", "~7 days after filing", "No minimum, no contracts"],
    },
    {
      name: "Daily List",
      sub: "The fastest on the planet",
      price: "16¢",
      unit: "/record",
      cta: "Subscribe now",
      bullets: ["100% from deed filings", "~24 hours after filing"],
    },
  ],
  "new-parent-lists": [
    {
      name: "Expecting Parents",
      sub: "Baby arrives in 0–6 months",
      price: "10¢",
      unit: "/record",
      cta: "Get started",
      bullets: ["$100 minimum order"],
    },
    {
      name: "New Parents",
      sub: "Baby arrived in the past 12 months",
      price: "15¢",
      unit: "/record",
      featured: true,
      cta: "Get started",
      bullets: ["Search by 0–6, 6–9, or 0–12 months", "$100 minimum order"],
    },
    {
      name: "New(er) Parents",
      sub: "Baby arrived in the past 3 years",
      price: "7¢",
      unit: "/record",
      cta: "Get started",
      bullets: ["Reaches households with children ages 0–3", "$100 minimum order"],
    },
  ],
  "new-divorce-lists": [
    {
      name: "New Divorce Filers",
      price: "15¢",
      unit: "/record",
      featured: true,
      cta: "Get started",
      bullets: [
        "74 free filters included",
        "3,296 premium filters available",
        "$100 minimum order",
        "Online ordering & delivery in minutes",
      ],
    },
  ],
  "building-permit-lists": [
    {
      name: "Monthly",
      price: "$21",
      unit: "/month",
      cta: "Subscribe now",
      bullets: ["30-day money-back guarantee", "Free historical permit data"],
    },
    {
      name: "Semi-Annual",
      sub: "Most popular!",
      price: "$120",
      unit: "/6 months",
      featured: true,
      cta: "Subscribe now",
      bullets: ["30-day money-back guarantee", "Free historical permit data"],
    },
    {
      name: "Annual",
      price: "$210",
      unit: "/year",
      cta: "Subscribe now",
      bullets: ["30-day money-back guarantee", "Free historical permit data"],
    },
  ],
  postcards: [
    {
      name: "The Little Guy",
      sub: "4 × 6",
      price: "38¢",
      unit: "/piece",
      cta: "Order now",
      bullets: ["1st-class postage included", "Ultra HD full-color printing"],
    },
    {
      name: "Old Faithful",
      sub: "8½ × 5½ · Most popular!",
      price: "41¢",
      unit: "/piece",
      featured: true,
      cta: "Order now",
      bullets: ["Postage included", "Ultra HD full-color printing"],
    },
    {
      name: "The Jan Brady",
      sub: "6 × 9",
      price: "43¢",
      unit: "/piece",
      cta: "Order now",
      bullets: ["Postage included", "Ultra HD full-color printing"],
    },
    {
      name: "The Hot Shot",
      sub: "8½ × 11",
      price: "81¢",
      unit: "/piece",
      cta: "Order now",
      bullets: ["Over-sized postage included", "Ultra HD full-color printing"],
    },
  ],
  "email-marketing": [
    {
      name: "Email Campaign",
      sub: "$800 minimum (≈40,000 contacts)",
      price: "2¢",
      unit: "/record",
      featured: true,
      cta: "Get started",
      bullets: [
        "We blast to your custom-defined list",
        "You provide artwork (or we design it)",
        "Three real-time tracking reports",
      ],
    },
  ],
};
