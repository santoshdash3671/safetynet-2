export type Zone = "Central" | "East" | "South" | "West" | "North";

export interface Locality {
  slug: string;
  name: string;
  zone: Zone;
  pincode: string;
  landmark: string;
}

export const ZONES: { key: Zone; label: string; blurb: string }[] = [
  {
    key: "Central",
    label: "Central Bangalore",
    blurb: "The old core of the city, from MG Road to Malleswaram, full of independent homes and mid-rise apartments.",
  },
  {
    key: "East",
    label: "East Bangalore",
    blurb: "The IT corridor from Whitefield to Sarjapur Road, dense with high-rise gated communities.",
  },
  {
    key: "South",
    label: "South Bangalore",
    blurb: "From Koramangala to Electronic City, a mix of established layouts and newer tech hubs.",
  },
  {
    key: "West",
    label: "West Bangalore",
    blurb: "Rajajinagar to Kengeri, residential neighbourhoods with a lot of independent houses and villas.",
  },
  {
    key: "North",
    label: "North Bangalore",
    blurb: "Hebbal to Devanahalli, the fastest growing part of the city near the airport.",
  },
];

export const LOCALITIES: Locality[] = [
  // Central
  { slug: "indiranagar", name: "Indiranagar", zone: "Central", pincode: "560038", landmark: "100 Feet Road" },
  { slug: "mg-road", name: "MG Road", zone: "Central", pincode: "560001", landmark: "Trinity Circle" },
  { slug: "ulsoor", name: "Ulsoor", zone: "Central", pincode: "560008", landmark: "Ulsoor Lake" },
  { slug: "shivajinagar", name: "Shivajinagar", zone: "Central", pincode: "560051", landmark: "Commercial Street" },
  { slug: "frazer-town", name: "Frazer Town", zone: "Central", pincode: "560005", landmark: "Coles Park" },
  { slug: "cox-town", name: "Cox Town", zone: "Central", pincode: "560005", landmark: "Bamboo Bazaar" },
  { slug: "richmond-town", name: "Richmond Town", zone: "Central", pincode: "560025", landmark: "Richmond Circle" },
  { slug: "vasanth-nagar", name: "Vasanth Nagar", zone: "Central", pincode: "560052", landmark: "UB City" },
  { slug: "domlur", name: "Domlur", zone: "Central", pincode: "560071", landmark: "Domlur Flyover" },
  { slug: "ashok-nagar", name: "Ashok Nagar", zone: "Central", pincode: "560025", landmark: "Brigade Road" },
  { slug: "shanthinagar", name: "Shanthinagar", zone: "Central", pincode: "560027", landmark: "Wilson Garden Junction" },
  { slug: "cunningham-road", name: "Cunningham Road", zone: "Central", pincode: "560052", landmark: "Sankey Road" },

  // East
  { slug: "whitefield", name: "Whitefield", zone: "East", pincode: "560066", landmark: "ITPL Main Road" },
  { slug: "marathahalli", name: "Marathahalli", zone: "East", pincode: "560037", landmark: "Marathahalli Bridge" },
  { slug: "brookefield", name: "Brookefield", zone: "East", pincode: "560037", landmark: "AECS Layout" },
  { slug: "kr-puram", name: "KR Puram", zone: "East", pincode: "560036", landmark: "KR Puram Railway Station" },
  { slug: "mahadevapura", name: "Mahadevapura", zone: "East", pincode: "560048", landmark: "Garudacharpalya" },
  { slug: "varthur", name: "Varthur", zone: "East", pincode: "560087", landmark: "Varthur Lake" },
  { slug: "kadugodi", name: "Kadugodi", zone: "East", pincode: "560067", landmark: "Kadugodi Tree Park" },
  { slug: "hoodi", name: "Hoodi", zone: "East", pincode: "560048", landmark: "Hoodi Circle" },
  { slug: "ramamurthy-nagar", name: "Ramamurthy Nagar", zone: "East", pincode: "560016", landmark: "Old Madras Road" },
  { slug: "banaswadi", name: "Banaswadi", zone: "East", pincode: "560043", landmark: "Banaswadi Main Road" },
  { slug: "kalyan-nagar", name: "Kalyan Nagar", zone: "East", pincode: "560043", landmark: "HRBR Layout" },
  { slug: "cv-raman-nagar", name: "CV Raman Nagar", zone: "East", pincode: "560093", landmark: "HAL Layout" },
  { slug: "old-airport-road", name: "Old Airport Road", zone: "East", pincode: "560017", landmark: "Kodihalli" },
  { slug: "bellandur", name: "Bellandur", zone: "East", pincode: "560103", landmark: "Bellandur Lake" },
  { slug: "sarjapur-road", name: "Sarjapur Road", zone: "East", pincode: "560035", landmark: "Wipro Corporate Office" },
  { slug: "kasavanahalli", name: "Kasavanahalli", zone: "East", pincode: "560035", landmark: "Haralur Road" },
  { slug: "munnekollal", name: "Munnekollal", zone: "East", pincode: "560037", landmark: "Ambedkar Nagar" },

  // South
  { slug: "koramangala", name: "Koramangala", zone: "South", pincode: "560034", landmark: "Sony World Signal" },
  { slug: "hsr-layout", name: "HSR Layout", zone: "South", pincode: "560102", landmark: "Agara Lake" },
  { slug: "btm-layout", name: "BTM Layout", zone: "South", pincode: "560068", landmark: "BTM Lake" },
  { slug: "jayanagar", name: "Jayanagar", zone: "South", pincode: "560041", landmark: "South End Circle" },
  { slug: "jp-nagar", name: "JP Nagar", zone: "South", pincode: "560078", landmark: "JP Nagar Metro Station" },
  { slug: "banashankari", name: "Banashankari", zone: "South", pincode: "560070", landmark: "Banashankari Temple" },
  { slug: "basavanagudi", name: "Basavanagudi", zone: "South", pincode: "560004", landmark: "Bull Temple Road" },
  { slug: "bannerghatta-road", name: "Bannerghatta Road", zone: "South", pincode: "560076", landmark: "IIM Bangalore" },
  { slug: "electronic-city", name: "Electronic City", zone: "South", pincode: "560100", landmark: "Infosys Gate" },
  { slug: "begur", name: "Begur", zone: "South", pincode: "560068", landmark: "Begur Lake" },
  { slug: "wilson-garden", name: "Wilson Garden", zone: "South", pincode: "560027", landmark: "Lalbagh West Gate" },
  { slug: "padmanabhanagar", name: "Padmanabhanagar", zone: "South", pincode: "560070", landmark: "Kathriguppe" },
  { slug: "uttarahalli", name: "Uttarahalli", zone: "South", pincode: "560061", landmark: "Uttarahalli Main Road" },
  { slug: "kumaraswamy-layout", name: "Kumaraswamy Layout", zone: "South", pincode: "560078", landmark: "KSIT College Road" },
  { slug: "anjanapura", name: "Anjanapura", zone: "South", pincode: "560108", landmark: "Anjanapura Township" },
  { slug: "konanakunte", name: "Konanakunte", zone: "South", pincode: "560062", landmark: "Gottigere Cross" },
  { slug: "bommanahalli", name: "Bommanahalli", zone: "South", pincode: "560068", landmark: "Hosur Road" },
  { slug: "hongasandra", name: "Hongasandra", zone: "South", pincode: "560068", landmark: "Bommanahalli Junction" },

  // West
  { slug: "rajajinagar", name: "Rajajinagar", zone: "West", pincode: "560010", landmark: "Navrang Circle" },
  { slug: "vijayanagar", name: "Vijayanagar", zone: "West", pincode: "560040", landmark: "Attiguppe Metro Station" },
  { slug: "malleswaram", name: "Malleswaram", zone: "West", pincode: "560003", landmark: "Sampige Road" },
  { slug: "basaveshwaranagar", name: "Basaveshwaranagar", zone: "West", pincode: "560079", landmark: "Basaveshwara Circle" },
  { slug: "nagarbhavi", name: "Nagarbhavi", zone: "West", pincode: "560072", landmark: "Bangalore University" },
  { slug: "kengeri", name: "Kengeri", zone: "West", pincode: "560060", landmark: "Kengeri Satellite Town" },
  { slug: "rr-nagar", name: "Rajarajeshwari Nagar", zone: "West", pincode: "560098", landmark: "RR Nagar Ring Road" },
  { slug: "peenya", name: "Peenya", zone: "West", pincode: "560058", landmark: "Peenya Industrial Area" },
  { slug: "yeshwanthpur", name: "Yeshwanthpur", zone: "West", pincode: "560022", landmark: "Yeshwanthpur Railway Station" },
  { slug: "magadi-road", name: "Magadi Road", zone: "West", pincode: "560023", landmark: "Vijayanagar Bus Stand" },
  { slug: "nandini-layout", name: "Nandini Layout", zone: "West", pincode: "560096", landmark: "Nandini Layout Main Road" },
  { slug: "kamakshipalya", name: "Kamakshipalya", zone: "West", pincode: "560079", landmark: "Kamakshipalya Circle" },
  { slug: "sunkadakatte", name: "Sunkadakatte", zone: "West", pincode: "560091", landmark: "Sunkadakatte Junction" },

  // North
  { slug: "hebbal", name: "Hebbal", zone: "North", pincode: "560024", landmark: "Hebbal Lake" },
  { slug: "yelahanka", name: "Yelahanka", zone: "North", pincode: "560064", landmark: "Yelahanka New Town" },
  { slug: "rt-nagar", name: "RT Nagar", zone: "North", pincode: "560032", landmark: "RT Nagar Main Road" },
  { slug: "sanjaynagar", name: "Sanjaynagar", zone: "North", pincode: "560094", landmark: "Sanjaynagar Circle" },
  { slug: "sahakara-nagar", name: "Sahakara Nagar", zone: "North", pincode: "560092", landmark: "Sahakara Nagar Main Road" },
  { slug: "jakkur", name: "Jakkur", zone: "North", pincode: "560064", landmark: "Jakkur Aerodrome" },
  { slug: "thanisandra", name: "Thanisandra", zone: "North", pincode: "560077", landmark: "Thanisandra Main Road" },
  { slug: "hennur", name: "Hennur", zone: "North", pincode: "560043", landmark: "Hennur Bande" },
  { slug: "kothanur", name: "Kothanur", zone: "North", pincode: "560077", landmark: "Kothanur Main Road" },
  { slug: "vidyaranyapura", name: "Vidyaranyapura", zone: "North", pincode: "560097", landmark: "Vidyaranyapura Main Road" },
  { slug: "devanahalli", name: "Devanahalli", zone: "North", pincode: "562110", landmark: "Kempegowda International Airport" },
  { slug: "jalahalli", name: "Jalahalli", zone: "North", pincode: "560013", landmark: "BEL Circle" },
  { slug: "mathikere", name: "Mathikere", zone: "North", pincode: "560054", landmark: "Mathikere Main Road" },
  { slug: "dollars-colony", name: "Dollars Colony", zone: "North", pincode: "560094", landmark: "RMV 2nd Stage" },
  { slug: "amruthahalli", name: "Amruthahalli", zone: "North", pincode: "560092", landmark: "Amruthahalli Main Road" },
  { slug: "hbr-layout", name: "HBR Layout", zone: "North", pincode: "560043", landmark: "HBR Layout 1st Block" },
  { slug: "horamavu", name: "Horamavu", zone: "North", pincode: "560043", landmark: "Horamavu Agara" },
];

export const localityMap: Record<string, Locality> = Object.fromEntries(
  LOCALITIES.map((l) => [l.slug, l])
);

export function getLocality(slug: string): Locality | undefined {
  return localityMap[slug];
}

export function localitiesByZone(zone: Zone): Locality[] {
  return LOCALITIES.filter((l) => l.zone === zone);
}
