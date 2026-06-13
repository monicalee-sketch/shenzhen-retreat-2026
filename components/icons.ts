import {
  Luggage,
  Building2,
  CalendarDays,
  MapPinned,
  Info,
  Wallet,
  ShoppingBag,
  PhoneCall,
  type LucideIcon,
} from "lucide-react";
import type { QuickLinkIcon } from "@/types/retreat";

// Central icon map so home quick-action buttons stay in sync with section icons.
export const iconMap: Record<QuickLinkIcon, LucideIcon> = {
  itinerary: CalendarDays,
  hotel: Building2,
  payment: Wallet,
  malls: ShoppingBag,
  emergency: PhoneCall,
  before: Luggage,
  around: MapPinned,
  info: Info,
  contacts: PhoneCall,
};
