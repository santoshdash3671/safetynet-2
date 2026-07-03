export const siteConfig = {
  brandName: "Satya Safety Net",
  legalName: "Satya Safety Net Bangalore",
  domain: "satyasafetynet.in",
  siteUrl: "https://satyasafetynet.in",
  tagline: "Bangalore's safety net people",
  description:
    "Safety nets, invisible grills and bird netting installed across every zone of Bangalore. Free site visit, same week installation, five year warranty.",

  phoneDisplay: "+91 90359 40492",
  phoneRaw: "+919035940492",
  whatsappRaw: "919035940492",
  email: "support@satyasafetynet.in",

  address: {
    line1: "Flat 207, AKR Building, 69, BTR Gardens, AECS Layout - A Block",
    locality: "AECS Layout, Singasandra",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560068",
  },

  geo: {
    latitude: "12.8846",
    longitude: "77.6653",
  },

  hours: {
    days: "Monday to Sunday",
    open: "07:00",
    close: "20:30",
  },

  social: {
    instagram: "https://instagram.com/satyasafetynet",
    facebook: "https://facebook.com/satyasafetynet",
  },

  stats: {
    installs: "6,000+",
    zones: "5",
    localities: "80+",
    warrantyYears: "5",
    experienceYears: "9+",
    rating: "4.8",
    reviewCount: "300+",
  },

  founded: 2016,
};

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:${siteConfig.phoneRaw}`;
}
