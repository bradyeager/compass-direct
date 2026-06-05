export type Product = {
  slug: string;
  kind: "list" | "service";
  name: string;
  tagline: string;
  badges: [string, string][];
  facts: string[];
  filters?: string[];
  note?: string;
  recovered?: string; // snapshot year if older than the rest (verify specifics)
};

export const listProducts: Product[] = [
  {
    slug: "consumer-lists",
    kind: "list",
    name: "Consumer Lists",
    tagline: "Your next customer is waiting for you. We'll help you find them.",
    badges: [
      ["Comprehensive", "230+ million U.S. households, updated daily."],
      ["Accurate", "94% Deliverability Guarantee."],
      ["Low minimums", "The lowest minimum orders anywhere."],
      ["Easy online ordering", "Create & download a custom list in minutes."],
    ],
    facts: [
      "Over 230 million U.S. households",
      "Compiled from over a thousand private & proprietary sources",
      "Coverage available in 100% of the United States",
      "Updated daily",
      "CASS certified, NCOA'ed, and scrubbed against the DNC registry",
      "Over 74 free filters and 3,296 premium filters",
      "Radius and polygonal geographic selection tools",
      "DNC-scrubbed phone numbers available",
    ],
    filters: [
      "Age", "Estimated income", "Home value", "Marital status", "Presence of children",
      "Homeowner / renter", "Length of residence", "Net worth", "Occupation",
      "Lifestyle & interests", "Geography (radius / polygon)",
    ],
  },
  {
    slug: "business-lists",
    kind: "list",
    name: "Business Lists",
    tagline: "Become the sales & marketing rock star you know you are.",
    badges: [
      ["Comprehensive", "30 million U.S. businesses, updated daily."],
      ["Accurate", "94% Deliverability Guarantee."],
      ["Lowest minimums", "The lowest minimum orders anywhere."],
      ["Easy online ordering", "Create & download a custom list in minutes."],
    ],
    facts: [
      "Over 30 million U.S. businesses",
      "Compiled from over a thousand private & proprietary sources",
      "Coverage available in 100% of the United States",
      "Updated daily",
      "Tele-verified to make sure your contact is there",
      "Radius and polygonal geographic selection tools",
      "No sales tax on downloaded list orders",
      "94% Deliverability Guarantee",
    ],
    filters: [
      "# of Employees", "Employee size range", "Actual sales volume", "Sales volume range",
      "Executive job title", "Job function", "Years in business", "Location type", "Franchises",
      "Small business owner", "SIC code", "NAICS code", "Minority owned", "Women owned",
    ],
  },
  {
    slug: "new-homeowner-lists",
    kind: "list",
    name: "New Homeowner Lists",
    tagline: "Congratulations! You just found the fastest new homeowner list on the planet.",
    badges: [
      ["Blazing fast", "Reach new homeowners weeks before your competitors."],
      ["Comprehensive", "Over 50,000 new homeowners added each week."],
      ["Accurate", "94% Deliverability Guarantee — the highest in the industry."],
      ["No minimums", "Subscribe and only pay for what you use."],
    ],
    facts: [
      "Households that have moved in the past 24 hours to 6 months",
      "Select any date range within that window",
      "Compiled from a multitude of public-record sources",
      "Coverage available in 100% of the United States",
      "Premium and Daily updates average 2–3 weeks faster than competitors",
      "Filters include purchase price, loan amount, dwelling type, loan-to-value, and more",
      "Radius and polygonal geographic selection tools",
      "DNC-scrubbed phone numbers available",
    ],
  },
  {
    slug: "new-mover-lists",
    kind: "list",
    name: "New Mover Lists",
    tagline: "Reach new movers right when they're buying everything for a new home.",
    badges: [
      ["Comprehensive", "The largest new mover database in the U.S."],
      ["Timely", "Over 300,000 new leads added weekly."],
      ["Accurate", "94% Deliverability Guarantee."],
      ["Lowest minimums", "The lowest minimum orders anywhere."],
    ],
    facts: [
      "Households that have moved in the past 6 months",
      "Select any date range, including the past 7 days",
      "Compiled from the National Change of Address database, recorded deeds, and new phone connects",
      "Believed to be the most comprehensive new mover mailing list on the market",
      "Coverage available in 100% of the United States",
      "Radius and polygonal geographic selection tools",
    ],
  },
  {
    slug: "building-permit-lists",
    kind: "list",
    name: "Building Permit Lists",
    tagline: "The largest new building permit database in the U.S.",
    recovered: "2015",
    badges: [
      ["Risk free", "30-day, 100% money-back guarantee."],
      ["Timely", "New construction leads updated hourly — over 20,000 per week."],
      ["Comprehensive", "The largest new building permit database in the U.S."],
      ["Easy online ordering", "Subscribe & get access in minutes."],
    ],
    facts: [
      "Residential & commercial owners who have applied for new-construction permits",
      "Compiled from city & county building permit offices nationwide",
      "Coverage available in approximately 70% of the United States",
      "Updated hourly in most markets — view new construction in real time",
      "Contact info for all parties on the permit: Owner, Builder, Designer & Architect",
      "Free historical permit data",
    ],
  },
  {
    slug: "new-parent-lists",
    kind: "list",
    name: "New Parent Lists",
    tagline: "The largest multi-sourced new parent list on the planet.",
    recovered: "2015",
    badges: [
      ["Comprehensive", "The largest multi-sourced new parent list on the planet."],
      ["Timely", "Scrubbed weekly; new records added monthly."],
      ["Accurate", "94% Deliverability Guarantee — the highest in the industry."],
      ["Easy to order", "Create & download your list in minutes."],
    ],
    facts: [
      "Over 5 million U.S. households",
      "Compiled from 50+ sources — baby retailers, online buyers, registrants, maternity stores, announcements, and surveys",
      "Coverage available in 100% of the United States",
      "Updated daily; new records added monthly",
      "Segments: Expecting Parents, New Parents, and Newer Parents",
    ],
  },
  {
    slug: "new-divorce-lists",
    kind: "list",
    name: "New Divorce Lists",
    tagline: "The largest multi-sourced new divorce list on the planet.",
    recovered: "2015",
    badges: [
      ["Comprehensive", "The largest multi-sourced new divorce list on the planet."],
      ["Timely", "Scrubbed daily; new records added monthly."],
      ["Accurate", "94% Deliverability Guarantee — the highest in the industry."],
      ["Easy to order", "Create & download your list in minutes."],
    ],
    facts: [
      "Households that had a divorce in the past 12 months",
      "Coverage available in 100% of the United States",
      "Updated daily",
      "CASS certified, NCOA'ed, and scrubbed against the DNC registry",
      "74 free filters and 3,296 premium filters",
    ],
    note: "A real estate, mortgage, and financial professional's dream — new divorce filers are highly likely to list their home for sale, and each will soon need a new one. Reach them with your services right when they need them most.",
  },
];

export const serviceProducts: Product[] = [
  {
    slug: "postcards",
    kind: "service",
    name: "Postcard Marketing",
    tagline: "Get your message to the masses — fast, easy, and affordable.",
    badges: [
      ["Fast turnaround", "1–2 day standard. Next day available."],
      ["Lowest Price Guarantee", "We'll beat any competitor's price by 10%."],
      ["Highest quality", "Thick 14pt gloss, Ultra HD printing, aqueous & gloss coatings."],
      ["Easy online ordering", "Create & order custom postcards in minutes."],
    ],
    facts: [
      "Printed on 14pt C2S gloss paper for a thick, luxurious feel",
      "100% recycled paper available",
      "Highest-quality Ultra HD full-color, two-sided printing",
      "Aqueous & glossy coatings seal in colors and protect the piece in the mail",
      "1–2 day standard turnaround; next-day upgrades available",
      "No sales tax for online orders",
      "Four sizes: The Little Guy (4×6), Old Faithful (8½×5½), The Jan Brady (6×9), The Hot Shot (8½×11)",
    ],
  },
  {
    slug: "email-marketing",
    kind: "service",
    name: "Email Marketing",
    tagline: "Launch a targeted email campaign in under 48 hours.",
    badges: [
      ["Comprehensive", "Thousands of demographic criteria to reach your perfect prospect."],
      ["Quick turnaround", "Launch a new campaign in under 48 hours."],
      ["Accurate reporting", "Detailed tracking reports and email response analytics."],
      ["Returns over 40:1", "Email generates an outsized return for every dollar invested."],
    ],
    facts: [
      "New Customer Email Marketing — targeted acquisition campaigns",
      "Customer Retention Email Marketing — we create, manage, and optimize programs to your existing database",
      "Email Appends & Reverse Appends — match emails to postal/phone data and vice versa",
      "Full service: strategy, creative design, testing & optimization, subject-line testing, reporting & analysis",
      "Real-time tracking with open rates, click-throughs, and response analytics",
    ],
  },
  {
    slug: "data-enhancement",
    kind: "service",
    name: "Data Enhancement",
    tagline: "Harness the power of your customer file with state-of-the-art data enhancements.",
    badges: [
      ["Greater efficiency", "Up-to-date contact names, phone numbers, and email addresses."],
      ["Advanced targeting", "Group customers & prospects by similarity to promote the right products."],
      ["Increased engagement", "Add a personal touch so customers feel spoken to directly."],
      ["Fast turnaround", "Upload your list and download results in under 24 hours."],
    ],
    facts: [
      "Data Appends — add demographics and buyer behavior for richer segmentation and personalization",
      "Appendable: emails, phone numbers, demographics, company details, hobbies & interests, purchase behavior, propensities, and more",
      "Portrait Reports — Look-A-Like Reports, Portrait Reports, and Data Profile Analysis",
      "Email Appends & Reverse Appends — match emails to postal/phone data and vice versa",
    ],
  },
];

export const allProducts: Product[] = [...listProducts, ...serviceProducts];
export const productBySlug: Record<string, Product> = Object.fromEntries(
  allProducts.map((p) => [p.slug, p]),
);
