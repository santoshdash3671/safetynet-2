export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  priceRange: string;
  icon: string;
  image: string;
  features: string[];
  process: string[];
  faqs: ServiceFaq[];
}

export const SERVICES: Service[] = [
  {
    slug: "balcony-safety-nets",
    name: "Balcony Safety Nets",
    shortName: "Balcony Nets",
    tagline: "Stop worrying every time the kids or pets step onto the balcony",
    summary:
      "Balcony safety nets are a UV stabilised HDPE mesh fixed with a stainless steel frame along the balcony opening. They are strong enough to hold body weight, virtually invisible from a normal viewing distance, and do not block the breeze or the view.",
    priceRange: "Rs 18 to Rs 35 per sq ft, depending on balcony shape",
    icon: "Building2",
    image: "/images/balcony-safety-nets.png",
    features: [
      "20 to 30 kg breaking strength per knot",
      "UV stabilised, does not yellow or go brittle in the sun",
      "Fixed with stainless steel hooks, no drilling into the slab",
      "Removable for painting or repair work",
      "Rope border for a clean, finished edge",
      "5 year material warranty",
    ],
    process: [
      "Free site visit and measurement of your balcony",
      "On the spot quote, no hidden charges later",
      "Installation completed in 2 to 4 hours",
      "Final check and handover with warranty card",
    ],
    faqs: [
      {
        q: "Will the net block my balcony view or airflow?",
        a: "No. The mesh gap is small enough for safety but the net itself is close to invisible from more than a couple of feet away, and it does not reduce airflow in any noticeable way.",
      },
      {
        q: "Do you drill into the wall or slab?",
        a: "In most cases we use L hooks fixed into the existing masonry with minimal drilling, and the holes are small enough to be touched up with paint. We avoid drilling into the structural slab.",
      },
      {
        q: "How long does installation take?",
        a: "A standard balcony takes 2 to 4 hours. Larger balconies or ones with irregular shapes may take a little longer, which we will tell you upfront during the site visit.",
      },
    ],
  },
  {
    slug: "invisible-grills",
    name: "Invisible Grills",
    shortName: "Invisible Grills",
    tagline: "The safety of a grill, the view of an open window",
    summary:
      "Invisible grills use thin, high tensile stainless steel wires strung vertically or horizontally, anchored into the wall on both sides. They hold significant load while staying nearly invisible from inside the room, unlike traditional MS grills that block light and view.",
    priceRange: "Rs 140 to Rs 220 per running foot",
    icon: "ShieldCheck",
    image: "/images/invisible-grills.png",
    features: [
      "SS 304 grade wires, rust and weather resistant",
      "Holds up to 100 kg of horizontal pressure",
      "No compromise on natural light or ventilation",
      "Works on windows, balconies, and open terraces",
      "Available in vertical or diagonal wire patterns",
      "10 year warranty against rusting",
    ],
    process: [
      "Site visit to check wall type and load points",
      "Custom measurement for each window or opening",
      "Wire tensioning and anchor installation",
      "Load test and final inspection before handover",
    ],
    faqs: [
      {
        q: "Is invisible grill actually strong enough to stop a fall?",
        a: "Yes, when installed correctly with proper anchor points the wires can take well over 100 kg of pressure, which is more than enough to prevent a child or adult from falling through.",
      },
      {
        q: "Does it rust over time in Bangalore's weather?",
        a: "We use SS 304 grade stainless steel which is built for outdoor exposure and resists rust for years, even through Bangalore's monsoon months.",
      },
      {
        q: "Can invisible grills be opened for cleaning the window?",
        a: "Yes, we can install a removable panel section on request so you can still access the window for cleaning or moving furniture through it.",
      },
    ],
  },
  {
    slug: "bird-netting",
    name: "Bird Netting",
    shortName: "Bird Netting",
    tagline: "Keep pigeons and crows off your balcony, sit-out and AC units",
    summary:
      "Bird netting seals off open balconies, sit outs, and AC unit ledges with a fine mesh that stops pigeons, crows, and mynas from entering and nesting. It is a humane way to solve the mess and noise problem without harming the birds.",
    priceRange: "Rs 15 to Rs 28 per sq ft",
    icon: "Bird",
    image: "/images/bird-netting.png",
    features: [
      "Fine mesh gap that keeps out even small birds",
      "Knotted HDPE construction, weather resistant",
      "Does not trap or injure birds, purely a barrier",
      "Works on balconies, AC ledges, and duct areas",
      "Transparent look, blends with the building facade",
      "3 year warranty on material",
    ],
    process: [
      "Inspection of nesting spots and entry points",
      "Measurement of open areas to be covered",
      "Mesh fixing with edge binding for durability",
      "Final walkthrough to confirm no gaps remain",
    ],
    faqs: [
      {
        q: "Is bird netting cruel to the birds?",
        a: "No. The net is only a physical barrier that stops birds from landing or nesting in that specific spot. It does not trap, injure, or harm birds in any way.",
      },
      {
        q: "Will it stop pigeon droppings completely?",
        a: "Once the open area is fully sealed with no gaps, pigeons cannot access the space at all, which stops the droppings and nesting mess at the source.",
      },
      {
        q: "How is this different from balcony safety nets?",
        a: "Balcony safety nets use a stronger mesh built to hold body weight for fall prevention. Bird netting uses a lighter mesh built specifically to block birds, and is priced accordingly.",
      },
    ],
  },
  {
    slug: "children-safety-nets",
    name: "Children Safety Nets",
    shortName: "Children Nets",
    tagline: "One less thing to worry about when little ones are playing near the window",
    summary:
      "Purpose built nets for windows, balconies, staircases, and open corridors in homes with young children. The mesh, knot strength, and fixing method are chosen specifically to handle the way kids climb, pull, and lean on barriers.",
    priceRange: "Rs 20 to Rs 32 per sq ft",
    icon: "Baby",
    image: "/images/children-safety-nets.png",
    features: [
      "Extra tight mesh gap so small hands and feet cannot get through",
      "Reinforced knots to handle pulling and climbing",
      "Soft edge binding, no sharp corners",
      "Covers windows, balconies, staircases, and duct areas",
      "Easy to remove temporarily for festivals or repainting",
      "5 year warranty on material and stitching",
    ],
    process: [
      "Walkthrough of the home to flag every risk point",
      "Priority installation for windows and staircases first",
      "Full balcony and corridor coverage",
      "Safety check with you present before we leave",
    ],
    faqs: [
      {
        q: "Which areas of the house need this the most?",
        a: "Windows, balconies, staircases, and any open duct or corridor above the second floor are the highest priority. We will point these out during the free site visit.",
      },
      {
        q: "Can a toddler pull the net loose?",
        a: "The nets are fixed with reinforced anchor points designed to handle repeated pulling and climbing, so a toddler's weight and grip will not loosen the installation.",
      },
      {
        q: "Do you also cover staircase railings?",
        a: "Yes, staircase and duct area netting is a common request and we quote it separately based on the height and shape of the opening.",
      },
    ],
  },
  {
    slug: "pigeon-nets",
    name: "Pigeon Nets",
    shortName: "Pigeon Nets",
    tagline: "Stop pigeons from turning your balcony into their nest",
    summary:
      "A dedicated pigeon control net that seals balconies, window ledges, and AC shafts where pigeons commonly roost. Bangalore's older apartment blocks in particular tend to attract heavy pigeon activity, and a full seal is the only permanent fix.",
    priceRange: "Rs 15 to Rs 25 per sq ft",
    icon: "Feather",
    image: "/images/pigeon-safety-nets.png",
    features: [
      "Tight mesh specifically sized to block pigeons",
      "UV resistant so it holds up on sun facing balconies",
      "Covers AC compressor ledges and duct openings too",
      "No chemicals, spikes, or repellents involved",
      "Discreet grey or white shade to match the wall",
      "3 year material warranty",
    ],
    process: [
      "Check for existing nests or droppings before we start",
      "Clean the area if there is existing pigeon mess",
      "Full mesh sealing of the opening",
      "Follow up visit available if any gap is spotted later",
    ],
    faqs: [
      {
        q: "I already have a pigeon nest on my balcony, can you still install?",
        a: "Yes, we clear and clean the existing nesting spot first, then seal the area completely so pigeons cannot return.",
      },
      {
        q: "Does the net need to be replaced every year?",
        a: "No, a properly installed pigeon net with UV stabilised mesh typically lasts 3 to 5 years before it needs replacement.",
      },
    ],
  },
  {
    slug: "construction-safety-nets",
    name: "Construction Safety Nets",
    shortName: "Construction Nets",
    tagline: "Debris control and fall protection for builders and contractors",
    summary:
      "Heavy duty safety nets used during construction and renovation work to catch falling debris and protect workers from height related falls. Commonly used by builders, contractors, and housing societies doing facade or repair work.",
    priceRange: "Rs 8 to Rs 15 per sq ft, project basis",
    icon: "HardHat",
    image: "/images/construction-safety-nets.png",
    features: [
      "High tensile HDPE mesh rated for construction use",
      "Debris catch nets for scaffolding and building perimeters",
      "Fall arrest netting for workers at height",
      "Flame retardant options available on request",
      "Bulk pricing for builders and contractors",
      "Rental and purchase options both available",
    ],
    process: [
      "Site assessment based on building height and scope",
      "Custom quote for scaffolding or perimeter netting",
      "Installation coordinated with your construction schedule",
      "Periodic inspection during long projects on request",
    ],
    faqs: [
      {
        q: "Do you supply nets on rent for short term projects?",
        a: "Yes, for shorter renovation or repair jobs we offer rental pricing in addition to outright purchase.",
      },
      {
        q: "Can this be used for RCC and facade work on high rises?",
        a: "Yes, we regularly work with contractors on debris netting for high rise facade and RCC work across Bangalore.",
      },
    ],
  },
  {
    slug: "sports-nets",
    name: "Sports Nets",
    shortName: "Sports Nets",
    tagline: "Cricket practice nets and boundary nets for terraces and open plots",
    summary:
      "Custom sized practice cages and boundary nets for cricket, badminton, and multi purpose courts on terraces, open plots, or society common areas. Built to handle repeated ball impact without sagging.",
    priceRange: "Rs 20 to Rs 40 per sq ft, size dependent",
    icon: "CircleDot",
    image: "/images/sports-nets.png",
    features: [
      "Heavy duty braided nylon or HDPE mesh",
      "Custom cage sizing for terrace or ground practice nets",
      "Reinforced border rope to prevent sagging",
      "Post and pulley systems available for full setups",
      "Weather resistant for year round outdoor use",
      "Suitable for cricket, badminton, and volleyball courts",
    ],
    process: [
      "Site visit to measure available space and height",
      "Design proposal for cage or boundary layout",
      "Post and net installation with tensioning",
      "Final test with a few practice balls before handover",
    ],
    faqs: [
      {
        q: "Can this be set up on an apartment terrace?",
        a: "Yes, terrace cricket nets are one of our most requested setups in Bangalore apartments, and we design the cage to fit the available terrace space.",
      },
      {
        q: "How long does a sports net last with regular use?",
        a: "With regular use and Bangalore's weather, a well installed sports net typically lasts 3 to 4 years before the mesh needs replacement.",
      },
    ],
  },
  {
    slug: "swimming-pool-safety-nets",
    name: "Swimming Pool Safety Nets",
    shortName: "Pool Nets",
    tagline: "Let kids enjoy the pool area without the constant worry",
    summary:
      "A flush mounted safety net installed just below the pool surface, so the pool remains fully usable while removing the drowning risk for children and pets. Common in villas, farmhouses, and gated communities with private pools.",
    priceRange: "Rs 40 to Rs 70 per sq ft",
    icon: "Waves",
    image: "/images/swimming-pool-safety-nets.png",
    features: [
      "Installed just below the water line, pool stays swimmable",
      "Rated to support the weight of a child or pet",
      "Corrosion resistant fittings for constant water contact",
      "Easily removed and rolled back when adults want to swim",
      "Custom fit for rectangular, oval, or freeform pools",
      "5 year warranty on mesh and fittings",
    ],
    process: [
      "Site visit to measure pool shape and take fitting points",
      "Custom net fabrication for your pool dimensions",
      "Anchor installation around the pool deck",
      "Test fit and safety check before handover",
    ],
    faqs: [
      {
        q: "Can I still use the pool with the net installed?",
        a: "Yes, the net can be rolled back to one side whenever adults want to use the pool, and reset afterward in a couple of minutes.",
      },
      {
        q: "Does the net affect the pool's filtration or chemicals?",
        a: "No, the mesh and fittings are chosen specifically to handle constant chlorinated water exposure without degrading or affecting water quality.",
      },
    ],
  },
  {
    slug: "car-parking-safety-nets",
    name: "Car Parking Safety Nets",
    shortName: "Parking Nets",
    tagline: "Protect parked cars from falling debris, coconuts, and stray balls",
    summary:
      "Overhead netting installed above open or covered parking areas to catch falling debris, coconuts from nearby trees, or stray sports balls before they damage a parked car.",
    priceRange: "Rs 12 to Rs 22 per sq ft",
    icon: "Car",
    image: "/images/car-parking-safety-nets.png",
    features: [
      "Overhead mesh rated to catch falling coconuts and debris",
      "UV stabilised for long term outdoor exposure",
      "Custom framework for open or semi covered parking bays",
      "Does not block rainwater drainage in open parking areas",
      "Suitable for individual homes and society parking lots",
      "3 year warranty on material",
    ],
    process: [
      "Assessment of parking area size and overhead risks",
      "Framework and mesh design proposal",
      "Installation of support structure and netting",
      "Final inspection for full coverage",
    ],
    faqs: [
      {
        q: "Will this stop coconuts from damaging my car?",
        a: "Yes, this is one of the most common reasons residents install parking nets, especially in layouts with coconut trees overhanging the parking area.",
      },
      {
        q: "Does the net need a separate support structure?",
        a: "For larger parking areas we usually install a light frame to hold the net in place. For smaller bays, we can often anchor directly to existing walls or pillars.",
      },
    ],
  },
  {
    slug: "staircase-safety-nets",
    name: "Staircase Safety Nets",
    shortName: "Staircase Nets",
    tagline: "Close the gap under open staircases and duct railings",
    summary:
      "Duplex homes and villas with open staircases often have a gap under the railing that is risky for children and pets. This net closes that gap completely while keeping the staircase design visually unchanged.",
    priceRange: "Rs 20 to Rs 30 per sq ft",
    icon: "Milestone",
    image: "/images/staircase-safety-nets.png",
    features: [
      "Fitted precisely to the railing and stair angle",
      "Tight mesh gap to prevent small pets slipping through",
      "Discreet colour to match the railing or wall",
      "Covers duct and stairwell openings as well",
      "Removable sections for maintenance access",
      "5 year warranty on material",
    ],
    process: [
      "Measurement of staircase angle and railing height",
      "Custom cut mesh panels for each flight",
      "Fixing along the railing with concealed hooks",
      "Final check by walking the full staircase",
    ],
    faqs: [
      {
        q: "Does this work for spiral staircases too?",
        a: "Yes, we custom cut the mesh to follow the curve of a spiral staircase so the coverage stays continuous with no gaps.",
      },
      {
        q: "Will the net make the staircase look bulky?",
        a: "No, we use a fine mesh in a shade that blends with your railing, so from a normal distance the net is barely noticeable.",
      },
    ],
  },
  {
    slug: "monkey-safety-nets",
    name: "Monkey Safety Nets",
    shortName: "Monkey Nets",
    tagline: "Keep monkeys off balconies, windows, and terraces for good",
    summary:
      "Areas near Bangalore's parks and green belts sometimes see regular monkey visits through open balconies and windows. This is a heavy duty version of our balcony netting built specifically to withstand a monkey's strength and persistence.",
    priceRange: "Rs 22 to Rs 35 per sq ft",
    icon: "TreePine",
    image: "/images/monkey-safety-nets.png",
    features: [
      "Extra thick HDPE mesh built for high impact resistance",
      "Reinforced fixing points that resist pulling and tugging",
      "Covers balconies, windows, and open terraces",
      "Does not harm the animal, purely a physical barrier",
      "Works alongside standard balcony nets for full coverage",
      "5 year warranty on material",
    ],
    process: [
      "Site visit to identify all entry points monkeys use",
      "Assessment of mesh thickness needed for the location",
      "Reinforced installation at every access point",
      "Final check to confirm no climbable gaps remain",
    ],
    faqs: [
      {
        q: "Is this different from a regular balcony net?",
        a: "Yes, monkey safety nets use a thicker mesh and stronger anchor points since monkeys are far more persistent and physically stronger than birds or pets.",
      },
      {
        q: "Which parts of Bangalore need this the most?",
        a: "Areas close to parks, lakes, and green cover such as parts of North and East Bangalore see more monkey activity, though we install this service across the city on request.",
      },
    ],
  },
  {
    slug: "coconut-tree-safety-nets",
    name: "Coconut Tree Safety Nets",
    shortName: "Tree Nets",
    tagline: "Stop falling coconuts and dry fronds from becoming a hazard",
    summary:
      "For homes and plots with coconut or other tall fruit trees close to walkways, parking, or seating areas, a suspended net around the tree canopy catches falling coconuts and dry fronds before they hit the ground.",
    priceRange: "Rs 10 to Rs 18 per sq ft",
    icon: "Trees",
    image: "/images/coconut-tree-safety-nets.png",
    features: [
      "Heavy duty mesh rated for the weight of falling coconuts",
      "Custom rigging around the tree canopy",
      "UV stabilised for long term outdoor use",
      "Does not restrict tree growth or maintenance access",
      "Suitable for individual trees or full rows",
      "3 year warranty on material",
    ],
    process: [
      "Site visit to assess tree height and canopy spread",
      "Custom rigging plan around the canopy",
      "Installation using tree safe anchor points",
      "Final inspection for full canopy coverage",
    ],
    faqs: [
      {
        q: "Does this damage or restrict the tree?",
        a: "No, the net is rigged around the canopy using anchor points that do not restrict the tree's growth or require harming the trunk or branches.",
      },
      {
        q: "Can one net cover multiple trees in a row?",
        a: "Yes, for a row of trees along a compound wall or driveway we can design a continuous net system that covers the whole row.",
      },
    ],
  },
];

export const serviceMap: Record<string, Service> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s])
);

export function getService(slug: string): Service | undefined {
  return serviceMap[slug];
}
