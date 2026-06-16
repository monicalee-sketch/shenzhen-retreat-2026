// Shared content types for the retreat microsite.
// Edit content in `data/retreat.ts` — these types just describe its shape.

// ─── Overview ────────────────────────────────────────────────────────────────

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

// ─── Quick Links ─────────────────────────────────────────────────────────────

export type QuickLinkIcon =
  | "itinerary"
  | "hotel"
  | "payment"
  | "malls"
  | "emergency"
  | "before"
  | "around"
  | "info"
  | "contacts"
  | "apps";

export interface QuickLink {
  label: string;
  href: string;
  icon: QuickLinkIcon;
}

// ─── Before You Go ───────────────────────────────────────────────────────────

export interface BeforeYouGoItem {
  title: string;
  /** Each string is one paragraph. Strings starting with "[PLACEHOLDER]" are rendered as pending. */
  content: string[];
}

// ─── Hotel ───────────────────────────────────────────────────────────────────

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
  /** Amap / 高德地图 link — primary for China. */
  amapUrl: string;
  /** Google Maps fallback for non-China devices. */
  fallbackUrl?: string;
  phone: string;
  website: string;
  checkIn: string;
  checkOut: string;
  breakfast: string;
  wifi: WifiInfo;
  amenities: string[];
  nearbyEssentials: NearbyEssential[];
  surroundingsNote: string;
  /** Optional hero photo. Path relative to /public, e.g. "/images/hotel/exterior.webp" */
  image?: string;
}

// ─── Itinerary ───────────────────────────────────────────────────────────────

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
  /** Optional activity photo. Path relative to /public, e.g. "/images/activity/tea-house.webp" */
  image?: string;
}

// ─── Around the Hotel (Places) ───────────────────────────────────────────────

export interface Place {
  name: string;
  nameZh?: string;
  description: string;
  distance?: string;
  /** Amap / 高德地图 search link — primary for China. */
  amapUrl?: string;
  /** Google Maps fallback for non-China devices. */
  fallbackUrl?: string;
  /** Optional photo. Path relative to /public, e.g. "/images/places/coco-park.webp" */
  image?: string;
}

export interface AroundHotel {
  malls: Place[];
  food: Place[];
  cafes: Place[];
  nightlife: Place[];
  essentials: Place[];
  sightseeing: Place[];
}

// ─── Shenzhen Info & Transport ───────────────────────────────────────────────

/** Generic collapsible tip section — used for Shenzhen info, transport, internet, etc. */
export interface TipSection {
  title: string;
  content: string[];
}

// ─── Payment Methods ─────────────────────────────────────────────────────────

export interface PaymentMethod {
  method: string;
  description: string;
  tips?: string[];
}

// ─── Contacts ────────────────────────────────────────────────────────────────

export interface Contact {
  /** Use "[PLACEHOLDER] Name" prefix to render as pending until confirmed. */
  name: string;
  role: string;
  phone?: string;
  notes?: string;
}

export interface EmergencyContact {
  /** Use "[PLACEHOLDER] Label" prefix to render as pending until confirmed. */
  label: string;
  number: string;
  notes?: string;
}

// ─── QR Items ────────────────────────────────────────────────────────────────

export interface QRItem {
  id: string;
  label: string;
  description?: string;
  /** The URL / text encoded in the QR image. Also used for tap-through if linkUrl is absent. */
  data: string;
  /** Override URL for the "Open link" tap button, if different from the QR data. */
  linkUrl?: string;
}

// ─── Apps to Download ────────────────────────────────────────────────────────

export type AppBadge = "Essential" | "Good to have";

export interface AppItem {
  name: string;
  nameZh?: string;
  description: string;
  whyNeeded: string;
  badge: AppBadge;
  iosUrl?: string;
  androidUrl?: string;
}

export interface AppsSection {
  mustHave: AppItem[];
  niceToHave: AppItem[];
}

// ─── Root Data Shape ─────────────────────────────────────────────────────────

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
  appsToDownload: AppsSection;
}
