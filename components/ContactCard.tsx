import { Phone } from "lucide-react";
import type { Contact, EmergencyContact } from "@/types/retreat";
import CopyField from "./CopyField";

interface ContactCardProps {
  contact: Contact | EmergencyContact;
}

function isEmergencyContact(contact: Contact | EmergencyContact): contact is EmergencyContact {
  return "label" in contact;
}

export default function ContactCard({ contact }: ContactCardProps) {
  const name = isEmergencyContact(contact) ? contact.label : contact.name;
  const subtitle = isEmergencyContact(contact) ? contact.notes : contact.role;
  const phone = isEmergencyContact(contact) ? contact.number : contact.phone;

  return (
    <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <p className="text-sm font-semibold text-slate-900">{name}</p>
      {subtitle && <p className="mt-0.5 text-xs text-slate-500">{subtitle}</p>}
      {phone && (
        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <a
            href={`tel:${phone.replace(/[^+\d]/g, "")}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm active:bg-teal-700"
          >
            <Phone size={16} /> Call {phone}
          </a>
          <div className="flex-1">
            <CopyField label="Phone number" value={phone} />
          </div>
        </div>
      )}
    </div>
  );
}