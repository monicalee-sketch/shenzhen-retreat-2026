import { MapPin, Phone, Globe, Wifi, Clock, Sparkles, FileText, Smartphone } from "lucide-react";
import { retreatData } from "@/data/retreat";
import Section from "@/components/Section";
import SectionCard from "@/components/SectionCard";
import SectionImage from "@/components/SectionImage";
import QuickActionButton from "@/components/QuickActionButton";
import InfoAccordion from "@/components/InfoAccordion";
import ContactCard from "@/components/ContactCard";
import ItineraryCard from "@/components/ItineraryCard";
import LinkButton from "@/components/LinkButton";
import QRBlock from "@/components/QRBlock";
import CopyField from "@/components/CopyField";
import PlaceItem from "@/components/PlaceItem";
import AppCard from "@/components/AppCard";
import ShareButton from "@/components/ShareButton";
import PrintButton from "@/components/PrintButton";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  const {
    overview,
    quickLinks,
    beforeYouGo,
    hotel,
    itinerary,
    aroundHotel,
    shenzhenInfo,
    usefulPhrases,
    paymentMethods,
    contacts,
    emergencyContacts,
    qrItems,
    appsToDownload,
  } = retreatData;

  const arrivalQr = qrItems.find((q) => q.id === "arrival-card");
  const hotelQr   = qrItems.find((q) => q.id === "hotel-location");
  const pdfQr     = qrItems.find((q) => q.id === "pdf-backup");

  return (
    <>
      <main className="flex-1 pb-28">
        {/* HOME */}
        <Section id="home">
          <div className="rounded-3xl bg-gradient-to-br from-teal-500 to-teal-600 p-6 text-white shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-100">
              {overview.dateRange} · {overview.city}
            </p>
            <h1 className="mt-1 text-2xl font-bold leading-tight">{overview.title}</h1>
            <p className="mt-1 text-sm text-teal-50">{overview.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-teal-50">{overview.welcomeNote}</p>
          </div>

          <SectionCard title="Quick reminders">
            <ul className="flex flex-col gap-2">
              {overview.quickReminders.map((reminder, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <Sparkles size={15} className="mt-0.5 shrink-0 text-teal-500" />
                  <span>{reminder}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          <div className="grid grid-cols-3 gap-3">
            {quickLinks.map((link) => (
              <QuickActionButton key={link.label} link={link} />
            ))}
          </div>

          <ShareButton title={`${overview.title} — ${overview.city}`} />
        </Section>

        {/* BEFORE YOU GO */}
        <Section id="before-you-go" title="Before You Go" description="Everything to sort out before you fly.">
          {arrivalQr && <QRBlock item={arrivalQr} />}
          <div className="flex flex-col gap-2">
            {beforeYouGo.map((item) => (
              <InfoAccordion key={item.title} title={item.title} content={item.content} />
            ))}
          </div>
        </Section>

        {/* APPS TO DOWNLOAD */}
        <Section id="apps" title="Apps to Download" description="Install these before you leave — some aren't available in China.">
          <SectionCard title="Must-have">
            <div className="flex items-center gap-2 mb-3">
              <Smartphone size={15} className="shrink-0 text-teal-500" />
              <p className="text-xs text-slate-500">Install and set up before you fly — may be hard to access once in China.</p>
            </div>
            <div className="flex flex-col gap-3">
              {appsToDownload.mustHave.map((app) => (
                <AppCard key={app.name} app={app} />
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Nice to have">
            <div className="flex flex-col gap-3">
              {appsToDownload.niceToHave.map((app) => (
                <AppCard key={app.name} app={app} />
              ))}
            </div>
          </SectionCard>
        </Section>

        {/* HOTEL */}
        <Section id="hotel" title="Hotel" description={hotel.name}>
          <SectionImage src={hotel.image} alt={hotel.name} />

          <SectionCard>
            <p className="text-sm leading-relaxed text-slate-600">{hotel.overview}</p>
          </SectionCard>

          <div className="flex flex-col gap-2">
            <CopyField label="Address (English)" value={hotel.addressEn} />
            <CopyField label="Address (Chinese — show this to Didi / taxi drivers)" value={hotel.addressZh} />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <LinkButton href={hotel.amapUrl} label="Open in Amap" icon={MapPin} variant="primary" />
            <LinkButton href={`tel:${hotel.phone.replace(/[^+\d]/g, "")}`} label="Call hotel" icon={Phone} external={false} />
          </div>
          {hotel.fallbackUrl && (
            <LinkButton href={hotel.fallbackUrl} label="Open in Google Maps" icon={MapPin} variant="ghost" />
          )}

          {hotelQr && <QRBlock item={hotelQr} />}

          <SectionCard title="Stay details">
            <dl className="grid grid-cols-2 gap-y-3 text-sm">
              <div>
                <dt className="text-xs text-slate-400">Check-in</dt>
                <dd className="font-medium text-slate-700">{hotel.checkIn}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-400">Check-out</dt>
                <dd className="font-medium text-slate-700">{hotel.checkOut}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-400">Breakfast</dt>
                <dd className="font-medium text-slate-700">{hotel.breakfast}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-400">Website</dt>
                <dd className="font-medium text-slate-700">
                  <a href={hotel.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-teal-600">
                    <Globe size={14} /> Visit
                  </a>
                </dd>
              </div>
            </dl>
          </SectionCard>

          <SectionCard title="WiFi">
            <div className="flex flex-col gap-2">
              <CopyField label="Network name" value={hotel.wifi.network} />
              <CopyField label="Password" value={hotel.wifi.password} />
            </div>
            {hotel.wifi.notes && (
              <p className="mt-2 flex items-start gap-2 text-xs text-slate-500">
                <Wifi size={14} className="mt-0.5 shrink-0" /> {hotel.wifi.notes}
              </p>
            )}
          </SectionCard>

          <SectionCard title="Amenities">
            <div className="flex flex-wrap gap-2">
              {hotel.amenities.map((amenity) => (
                <span key={amenity} className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                  {amenity}
                </span>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Nearby essentials">
            <ul className="flex flex-col gap-2">
              {hotel.nearbyEssentials.map((item) => (
                <li key={item.name} className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">{item.name}</span>
                  <span className="text-xs font-medium text-teal-600">{item.distance}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">{hotel.surroundingsNote}</p>
          </SectionCard>
        </Section>

        {/* ITINERARY */}
        <Section id="itinerary" title="Itinerary" description="Day-by-day plan for the retreat.">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Tap a day to follow along</span>
            <PrintButton />
          </div>
          {itinerary.map((day) => (
            <ItineraryCard key={day.day} day={day} />
          ))}
        </Section>

        {/* AROUND THE HOTEL */}
        <Section id="around-hotel" title="Around the Hotel" description="Our picks for the Futian / COCO Park area.">
          <SectionCard title="Shopping malls">
            <div className="flex flex-col">
              {aroundHotel.malls.map((place) => (
                <PlaceItem key={place.name} place={place} />
              ))}
            </div>
          </SectionCard>
          <SectionCard title="Food">
            <div className="flex flex-col">
              {aroundHotel.food.map((place) => (
                <PlaceItem key={place.name} place={place} />
              ))}
            </div>
          </SectionCard>
          <SectionCard title="Coffee & cafes">
            <div className="flex flex-col">
              {aroundHotel.cafes.map((place) => (
                <PlaceItem key={place.name} place={place} />
              ))}
            </div>
          </SectionCard>
          <SectionCard title="Drinks & nightlife">
            <div className="flex flex-col">
              {aroundHotel.nightlife.map((place) => (
                <PlaceItem key={place.name} place={place} />
              ))}
            </div>
          </SectionCard>
          <SectionCard title="Convenience & essentials">
            <div className="flex flex-col">
              {aroundHotel.essentials.map((place) => (
                <PlaceItem key={place.name} place={place} />
              ))}
            </div>
          </SectionCard>
          <SectionCard title="Worth a look">
            <div className="flex flex-col">
              {aroundHotel.sightseeing.map((place) => (
                <PlaceItem key={place.name} place={place} />
              ))}
            </div>
          </SectionCard>
        </Section>

        {/* USEFUL SHENZHEN INFO */}
        <Section id="shenzhen-info" title="Useful Shenzhen Info" description="Good to know before and during the trip.">
          <SectionCard title="Payment methods">
            <div className="flex flex-col gap-3">
              {paymentMethods.map((pm) => (
                <div key={pm.method} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                  <p className="text-sm font-semibold text-slate-900">{pm.method}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-slate-500">{pm.description}</p>
                  {pm.tips && (
                    <ul className="mt-1.5 flex flex-col gap-1">
                      {pm.tips.map((tip, i) => (
                        <li key={i} className="text-xs text-slate-400">
                          • {tip}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </SectionCard>

          <div className="flex flex-col gap-2">
            {shenzhenInfo.map((tip) => (
              <InfoAccordion key={tip.title} title={tip.title} content={tip.content} />
            ))}
          </div>

          <SectionCard title="Useful phrases" subtitle="Tap to copy and show to locals if needed.">
            <div className="flex flex-col gap-2">
              {usefulPhrases.map((phrase) => (
                <CopyField key={phrase.zh} label={`${phrase.en} (${phrase.pinyin})`} value={phrase.zh} />
              ))}
            </div>
          </SectionCard>
        </Section>

        {/* CONTACTS */}
        <Section id="contacts" title="Contacts" description="Save these before you fly — works offline once saved.">
          <SectionCard title="Retreat committee">
            <div className="flex flex-col gap-2">
              {contacts.map((contact) => (
                <ContactCard key={contact.name} contact={contact} />
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Emergency numbers">
            <div className="flex flex-col gap-2">
              {emergencyContacts.map((contact) => (
                <ContactCard key={contact.label} contact={contact} />
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Hotel">
            <div className="flex flex-col gap-2">
              <ContactCard contact={{ name: hotel.name, role: "Front desk", phone: hotel.phone }} />
            </div>
          </SectionCard>

          {pdfQr && (
            <SectionCard title="Offline backup">
              <QRBlock item={pdfQr} />
              <div className="mt-3">
                <LinkButton href={pdfQr.data} label="Download PDF backup" icon={FileText} variant="ghost" />
              </div>
            </SectionCard>
          )}

          <SectionCard title="One more thing">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Smartphone size={16} className="shrink-0 text-teal-500" />
              <span>Save this page to your home screen for one-tap access all retreat long.</span>
            </div>
            <p className="mt-2 text-xs text-slate-400">
              iPhone: tap the Share icon in Safari, then &quot;Add to Home Screen&quot;. Android: tap the menu (⋮) in
              Chrome, then &quot;Add to Home screen&quot;.
            </p>
          </SectionCard>
        </Section>

        <p className="px-4 pt-2 pb-1 text-center text-xs text-slate-400">
          <Clock size={12} className="mr-1 inline align-text-bottom" />
          Last updated {overview.lastUpdated}
        </p>
      </main>

      <BottomNav />
    </>
  );
}
