// Shared content types for the retreat microsite.
// Edit content in `data/retreat.ts` — these types just describe its shape.

export interface RetreatOverview {
  title: string;
  subtitle: string;
  dateRange: string;
  city: string;
  hotelName: string;
  welcomeNote: string;
  quickReminders: string[];
  lastUpdated: string;
}

export interface QuickLink {
  label: string;
  href: string;
  icon: QuickLinkIcon;
}

export type QuickLinkIcon =
  | "itinerary"
  | "hotel"
  | "payment"
  | "malls"
  | "emergency"
  | "before"
  | "around"
  | "info"
  | "contacts";

export interface BeforeYouGoItem {
  title: string;
  content: string[];
}

export interface WifiInfo {
  network: string;
  password: string;
  notes?: string;
}

export interface NearbyEssential {
  name: string;
  type: string;
  distance: string;
}

export interface HotelInfo {
  name: string;
  overview: string;
  addressEn: string;
  addressZh: string;
  mapUrl: string;
  phone: string;
  website: string;
  checkIn: string;
  checkOut: string;
  breakfast: string;
  wifi: WifiInfo;
  amenities: string[];
  nearbyEssentials: NearbyEssential[];
  surroundingsNote: string;
}

export type ItineraryTag = "group" | "free" | "meal" | "travel" | "highlight";

export interface ItineraryEvent {
  time: string;
  title: string;
  description?: string;
  dressCode?: string;
  tag?: ItineraryTag;
}

export interface ItineraryDay {
  day: number;
  date: string;
  label: string;
  summary: string;
  events: ItineraryEvent[];
  notes?: string;
}

export interface Place {
  name: string;
  nameZh?: string;
  description: string;
  distance?: string;
  mapUrl?: string;
}

export interface AroundHotel {
  malls: Place[];
  food: Place[];
  cafes: Place[];
  nightlife: Place[];
  essentials: Place[];
  sightseeing: Place[];
}

export interface TipSection {
  title: string;
  content: string[];
}

export interface PaymentMethod {
  method: string;
  description: string;
  tips?: string[];
}

export interface Contact {
  name: string;
  role: string;
  phone?: string;
  notes?: string;
}

export interface EmergencyContact {
  label: string;
  number: string;
  notes?: string;
}

export interface QRItem {
  id: string;
  label: string;
  description?: string;
  data: string;
}

export interface RetreatData {
  overview: RetreatOverview;
  quickLinks: QuickLink[];
  beforeYouGo: BeforeYouGoItem[];
  hotel: HotelInfo;
  itinerary: ItineraryDay[];
  aroundHotel: AroundHotel;
  shenzhenInfo: TipSection[];
  usefulPhrases: { zh: string; pinyin: string; en: string }[];
  paymentMethods: PaymentMethod[];
  contacts: Contact[];
  emergencyContacts: EmergencyContact[];
  qrItems: QRItem[];
}