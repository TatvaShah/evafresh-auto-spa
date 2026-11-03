import type { SiteConfig } from "@/lib/types";

const JOBBER = "https://clienthub.getjobber.com/hubs/54cd4144-1c48-49ad-b500-37d167d23769/public/requests/5281481/new";
const IG = (c: string, r = false) => `https://www.instagram.com/${r ? "reel" : "p"}/${c}/`;

export const site: SiteConfig = {
  name: "EvaFresh Auto Spa",
  tagline: "Premium mobile car detailing based in Brampton, serving the GTA and surrounding areas. We come to you.",
  category: "Mobile car detailing",
  schemaType: "AutoWash",
  area: "Brampton and the GTA, ON",
  siteUrl: "https://evafresh-auto-spa.vercel.app",

  theme: {
    preset: "barber-bold",
    colors: { accent: "#35c3de" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Mobile detailing in Brampton and the GTA",
    headline: "A fresh, detailed ride without leaving your driveway",
    subhead: "Premium mobile detailing for cars, trucks, boats and RVs, plus paint correction and ceramic coatings. Book online and we come to you.",
    images: [
      { src: "/images/post-12.jpg", alt: "White Lexus ES after a Fresh N New complete detail" },
      { src: "/images/post-10.jpg", alt: "White BMW X3 M after a maintenance detail" },
      { src: "/images/post-3.jpg", alt: "Clean Nissan Rogue interior after a Super Fresh detail" },
    ],
    primaryCta: { label: "Book now", href: JOBBER },
    secondaryCta: { label: "See our work", href: "#gallery" },
  },

  highlights: ["We come to you", "Cars, trucks, boats and RVs", "Paint correction and ceramic coatings", "Serving the GTA"],

  about: {
    title: "Detailing that comes to you",
    body: [
      "EvaFresh Auto Spa is a premium mobile detailing service based in Brampton and serving the GTA and surrounding areas. From a quick maintenance wash to a full interior shampoo, we bring the detail to your home or work.",
      "We look after cars, trucks, boats and RVs, and offer paint correction and ceramic coatings for when you want your finish to really shine.",
    ],
    image: { src: "/images/post-8.jpg", alt: "Tesla Model S during a mobile detail" },
  },

  menu: {
    label: "Services",
    title: "Packages and services",
    intro: "Pick a package that fits your vehicle. Pricing is quoted when you book.",
    variant: "list",
    groups: [
      {
        title: "Detail packages",
        items: [
          { name: "Freshen Up (Basic or Maintenance Detail)", description: "Interior vacuum, interior wipe down and dressing, exterior foam and hand wash, wheels and tires cleaned and dressed." },
          { name: "Super Fresh (Basic Detail)", description: "Interior vacuum and wipe down, windows and mirrors, exterior foam wash, wheels and tires. Add moulding restoration or salt stain removal." },
          { name: "Fresh N New (Complete Detail)", description: "Everything in a basic detail plus seat and carpet shampoo, leather conditioning, and bug and tar removal." },
        ],
      },
      {
        title: "Add ons and specialty",
        items: [
          { name: "Engine bay shampoo" },
          { name: "Interior detailing", description: "Pet hair and stain removal." },
          { name: "Moulding restoration and salt stain removal" },
          { name: "Paint correction" },
          { name: "Ceramic coatings" },
          { name: "Boats and RVs" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent details",
    items: [
      { src: "/images/post-1.jpg", width: 640, height: 480, alt: "Corvette Stingray", caption: "Corvette Stingray, Freshen Up", href: IG("Dd33pXxjl3d") },
      { src: "/images/post-2.jpg", width: 360, height: 640, alt: "Ford F-150", caption: "Ford F-150, Fresh N New", href: IG("DfQjMvEOPuB", true) },
      { src: "/images/post-3.jpg", width: 480, height: 640, alt: "Nissan Rogue", caption: "Nissan Rogue, Super Fresh", href: IG("Dez9Uq2idLJ") },
      { src: "/images/post-5.jpg", width: 480, height: 640, alt: "Infiniti QX60", caption: "Infiniti QX60, Freshen Up", href: IG("Deku4RSCQD3") },
      { src: "/images/post-8.jpg", width: 360, height: 640, alt: "Tesla Model S", caption: "Tesla Model S, Fresh N New", href: IG("Dd9rJLpJEQN", true) },
      { src: "/images/post-9.jpg", width: 640, height: 360, alt: "Honda HR-V", caption: "Honda HR-V, Freshen Up", href: IG("DdmfjWMCbay") },
      { src: "/images/post-10.jpg", width: 640, height: 480, alt: "BMW X3 M", caption: "BMW X3 M, maintenance detail", href: IG("DdH6Sjwjlny") },
      { src: "/images/post-11.jpg", width: 640, height: 480, alt: "Hyundai Kona interior", caption: "Hyundai Kona, interior detail", href: IG("Dc6rEQ2CbWI") },
      { src: "/images/post-12.jpg", width: 640, height: 480, alt: "Lexus ES", caption: "Lexus ES, Fresh N New", href: IG("DczbwBEDgWE") },
    ],
  },

  instagram: {
    handle: "evafreshautospa",
    embeds: [IG("DczbwBEDgWE")],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    title: "Book your detail",
    intro: "Request your appointment online, or send us a DM. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi EvaFresh Auto Spa! I would like to book a detail.\nVehicle type (car, truck, SUV, boat, RV):\nPackage wanted:\nTown:\nPreferred date:",
    links: [{ label: "Book online", href: JOBBER }],
    note: "Mobile service: we come to you anywhere in the GTA and surrounding areas.",
  },

  reviews: { items: [] },

  faq: [
    { q: "Do you come to me?", a: "Yes. EvaFresh Auto Spa is fully mobile and serves Brampton, the GTA, and surrounding areas." },
    { q: "What vehicles do you detail?", a: "Cars, trucks, boats and RVs." },
    { q: "How do I book?", a: "Use the Book now button to send a request online, DM us on Instagram, or email evafreshautospa@gmail.com." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Brampton, serving the GTA",
    email: "evafreshautospa@gmail.com",
    socials: [{ label: "Book online", href: JOBBER }],
  },

  seo: {
    title: "EvaFresh Auto Spa | Mobile car detailing in Brampton",
    description: "Premium mobile car detailing in Brampton and the GTA. Cars, trucks, boats and RVs, paint correction and ceramic coatings. We come to you. Book online today.",
    keywords: ["mobile car detailing Brampton", "mobile detailing GTA", "ceramic coating Brampton", "paint correction Brampton"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
