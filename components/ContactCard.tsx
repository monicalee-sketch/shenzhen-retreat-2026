import { Phone } from "lucide-react";
import type { Contact, EmergencyContact } from "@/types/retreat";
import CopyField from "./CopyField";

interface ContactCardProps {
  contact: Contact | EmergencyContact;
}

function isEmergencyContact(c: Contact | EmergencyContact): c is EmergencyContact {
  return "label" in c;
}

const PLACEHOLDER_RE = /^\[PLACEHOLDER\]\s*/;
const PLACEHOLDER_PHONE_RE = /0{4}/;

export default function ContactCard({ contact }: ContactCardProps) {
  const rawName  = isEmergencyContact(contact) ? contact.label : contact.name;
  const subtitle = isEmergencyContact(contact) ? contact.notes  : contact.role;
  const phone    = isEmergencyContact(contact) ? contact.number : contact.phone;

  const isPendingName  = PLACEHOLDER_RE.test(rawName);
  const displayName    = rawName.replace(PLACEHOLDER_RE, "");
  const isPendingPhone = !phone || PLACEHOLDER_PHONE_RE.test(phone);

  return (
    <div className="print-avoid-break rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold text-slate-900">{displayName}</p>
        {isPendingName && (
          <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-600">
            Pending
          </span>
        )}
      </div>
      {subtitle && (
        <p className="mt-0.5 text-xs text-slate-500">{subtitle}</p>
      )}

      {isPendingPhone ? (
        <p className="mt-2 text-xs text-slate-400">Contact details to be confirmed.</p>
      ) : phone ? (
        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <a
            href={`tel:${phone.replace(/[^+\d]/g, "")}`}
            className="no-print flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-gold px-4 py-2.5 text-sm font-semibold text-brand-charcoal shadow-sm active:bg-brand-gold-dark"
          >
            <Phone size={15} /> Call {phone}
          </a>
          <div className="flex-1">
            <CopyField label="Phone number" value={phone} />
          </div>
        </div>
      ) : null}
    </div>
  );
}