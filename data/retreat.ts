import type { RetreatData } from "@/types/retreat";

// ---------------------------------------------------------------------------
// EDIT ME: this is the single source of truth for all retreat content.
// Update the values below and the site will reflect your changes everywhere.
// Anything wrapped in [ ] is a placeholder — replace with the real details.
// ---------------------------------------------------------------------------

export const retreatData: RetreatData = {
  overview: {
    title: "Staff Retreat 2026",
    subtitle: "Hilton Shenzhen Futian",
    dateRange: "15–18 July 2026",
    city: "Shenzhen, China",
    hotelName: "Hilton Shenzhen Futian",
    welcomeNote:
      "Welcome to Shenzhen! This guide has everything you need for the retreat — itinerary, hotel info, getting around, and who to call if you need help. Bookmark this page or add it to your home screen so it's always one tap away.",
    quickReminders: [
      "Check in from 3:00pm on Day 1 — Hilton Shenzhen Futian",
      "Gala dinner is Day 2 evening — smart casual recommended",
      "Tea house activity Day 3 morning — comfortable shoes",
      "Check out by 12:00 noon on Day 4",
    ],
    lastUpdated: "13 June 2026",
  },

  quickLinks: [
    { label: "Itinerary", href: "#itinerary", icon: "itinerary" },
    { label: "Hotel Info", href: "#hotel", icon: "hotel" },
    { label: "Payments", href: "#shenzhen-info", icon: "payment" },
    { label: "Nearby Malls", href: "#around-hotel", icon: "malls" },
    { label: "Emergency", href: "#contacts", icon: "emergency" },
  ],

  beforeYouGo: [
    {
      title: "Passport validity",
      content: [
        "Make sure your passport is valid for at least 6 months beyond the retreat dates (15–18 July 2026).",
        "[PLACEHOLDER] If your passport doesn't meet this requirement, contact the organizing committee before booking flights.",
      ],
    },
    {
      title: "China entry requirements",
      content: [
        "[PLACEHOLDER] Confirm your visa or visa-free transit eligibility based on your nationality and travel route.",
        "[PLACEHOLDER] Some nationalities qualify for visa-free entry to Shenzhen for short stays — check the latest rules for your passport before travelling.",
        "Keep a digital and printed copy of your hotel booking confirmation in case it's requested at immigration.",
      ],
    },
    {
      title: "Arrival card / entry QR",
      content: [
        "China uses an online arrival registration system for some travellers. Complete this before or upon arrival at Shenzhen Bao'an Airport (SZX).",
        "[PLACEHOLDER] Scan the QR code below to access the arrival registration portal, or check with your airline for the latest process.",
      ],
    },
    {
      title: "Immigration & entry notes",
      content: [
        "Have your passport, return flight details, and hotel address (in Chinese — see Hotel section) ready when you land.",
        "[PLACEHOLDER] Add any country-specific notes here, e.g. fingerprint scanning, customs declarations, etc.",
      ],
    },
    {
      title: "Roaming & eSIM",
      content: [
        "[PLACEHOLDER] Recommend checking with your mobile carrier for a China roaming pack, or purchasing a local eSIM (e.g. via your carrier's app or an eSIM provider) before you fly.",
        "Hotel wifi will be available — see Hotel section for details.",
        "Note: some common apps and websites are restricted in China. A VPN may be useful if you need access to services like Gmail, WhatsApp, or social media (set this up before you arrive).",
      ],
    },
    {
      title: "Apps to install before you go",
      content: [
        "WeChat — messaging and the easiest way to pay almost everywhere.",
        "Alipay — alternative payment app, also widely accepted.",
        "Didi — China's main ride-hailing app (similar to Grab/Uber).",
        "[PLACEHOLDER] A translation app (e.g. Google Translate with offline Chinese pack, or Pleco).",
        "[PLACEHOLDER] Any company communication apps needed for the retreat.",
      ],
    },
    {
      title: "What to pack",
      content: [
        "Comfortable walking shoes for the tea house activity and city exploring.",
        "Smart casual outfit for the gala dinner (Day 2 evening).",
        "Light layers — see weather note below for the season's typical conditions.",
        "Universal power adapter (see plug type note in Useful Shenzhen Info).",
        "[PLACEHOLDER] Any company merchandise, name badges, or materials staff should bring.",
      ],
    },
    {
      title: "Dress code overview",
      content: [
        "Day 1 (Arrival): casual — travel comfortably.",
        "Day 2 (Gala Dinner): smart casual / business casual recommended.",
        "Day 3 (Tea House Activity): casual, comfortable clothing and shoes.",
        "Day 4 (Departure): casual.",
      ],
    },
    {
      title: "Weather overview",
      content: [
        "[PLACEHOLDER] Shenzhen in July is typically hot and humid with a chance of rain — pack light, breathable clothing, an umbrella, and stay hydrated.",
        "[PLACEHOLDER] Replace with an actual forecast closer to the retreat date.",
      ],
    },
    {
      title: "Payment methods — quick overview",
      content: [
        "China is largely a mobile-payment society. WeChat Pay and Alipay are accepted almost everywhere — set these up with a linked card before you arrive if possible.",
        "Cash (CNY) is useful as backup, especially for small vendors.",
        "International cards are accepted at the hotel and larger malls, but less common at street vendors. See Useful Shenzhen Info for full details.",
      ],
    },
    {
      title: "Other pre-trip reminders",
      content: [
        "[PLACEHOLDER] Submit any dietary requirements or allergies to the organizing committee ahead of time.",
        "[PLACEHOLDER] Confirm your flight details and airport transfer arrangements with logistics.",
        "Save the Contacts section to your phone before you fly — it works without internet once saved.",
      ],
    },
  ],

  hotel: {
    name: "Hilton Shenzhen Futian",
    overview:
      "Our home base for the retreat. Centrally located in the Futian district, close to shopping, dining, and transport links — including the COCO Park area.",
    addressEn: "[PLACEHOLDER] Hilton Shenzhen Futian, Fuhua 3rd Road, Futian District, Shenzhen, Guangdong, China",
    addressZh: "[占位符] 深圳福田希尔顿酒店，广东省深圳市福田区福华三路",
    mapUrl: "https://maps.google.com/?q=Hilton+Shenzhen+Futian",
    phone: "+86 755 0000 0000",
    website: "https://www.hilton.com",
    checkIn: "3:00pm onward (Day 1, Tue 15 July)",
    checkOut: "By 12:00 noon (Day 4, Fri 18 July)",
    breakfast: "[PLACEHOLDER] Daily, approx. 6:30am–10:00am, hotel restaurant (level TBC)",
    wifi: {
      network: "[PLACEHOLDER] Hilton_Honors / Hilton Guest WiFi",
      password: "[PLACEHOLDER] Provided at check-in",
      notes: "Free for all guests — connect and follow the on-screen instructions in your room.",
    },
    amenities: [
      "[PLACEHOLDER] Swimming pool",
      "[PLACEHOLDER] Fitness centre",
      "[PLACEHOLDER] Executive lounge",
      "[PLACEHOLDER] On-site restaurants and bar",
      "[PLACEHOLDER] Business centre",
    ],
    nearbyEssentials: [
      { name: "[PLACEHOLDER] Convenience store (7-Eleven / Family Mart)", type: "Convenience", distance: "~5 min walk" },
      { name: "[PLACEHOLDER] Pharmacy", type: "Pharmacy", distance: "~5–10 min walk" },
      { name: "[PLACEHOLDER] ATM / Bank", type: "ATM", distance: "In hotel lobby" },
    ],
    surroundingsNote:
      "The hotel sits in the Futian / COCO Park area — one of Shenzhen's most convenient districts, with malls, restaurants, cafes, and metro access all within walking distance. See 'Around the Hotel' for our picks.",
  },

  itinerary: [
    {
      day: 1,
      date: "Tue 15 July 2026",
      label: "Arrival Day",
      summary: "Fly in, settle into the hotel, and rest up for the days ahead.",
      events: [
        {
          time: "Throughout the day",
          title: "Arrivals into Shenzhen",
          description: "Staff fly in throughout the day on direct flights to Shenzhen Bao'an Airport (SZX).",
          tag: "travel",
        },
        {
          time: "On arrival",
          title: "Airport transfers",
          description: "[PLACEHOLDER] Transfer details and meeting point to be confirmed by logistics.",
          tag: "travel",
        },
        {
          time: "From 3:00pm",
          title: "Hotel check-in",
          description: "Check-in opens at Hilton Shenzhen Futian. Head to reception with your passport.",
          tag: "highlight",
        },
        {
          time: "Evening",
          title: "Free at leisure",
          description: "Dinner on your own — a good chance to settle in, rest, and explore nearby if you're up for it.",
          tag: "free",
        },
      ],
      notes: "Note: some rooms are occupied from Night 1; the rest of the group arrives on Day 2.",
    },
    {
      day: 2,
      date: "Wed 16 July 2026",
      label: "Full Retreat Day",
      summary: "Breakfast, free time, then the big one — gala dinner, games, and the lucky draw.",
      events: [
        {
          time: "Morning",
          title: "Breakfast at hotel",
          description: "Start the day at the hotel restaurant.",
          tag: "meal",
        },
        {
          time: "Lunch",
          title: "Free time",
          description: "Lunch and the rest of the morning are free — explore, rest, or grab a coffee nearby.",
          tag: "free",
        },
        {
          time: "Afternoon",
          title: "Free time / break",
          description: "Free and easy before the evening's main event.",
          tag: "free",
        },
        {
          time: "6:30–8:00pm",
          title: "CEO / EXCO speech + Gala Dinner",
          description:
            "Speech by CEO / EXCO, followed by the Gala Dinner — a Chinese banquet (CNY 300/pax, AV included; beer & soft drinks on a 50/50 split).",
          dressCode: "Smart casual",
          tag: "highlight",
        },
        {
          time: "8:00–9:15pm",
          title: "Interactive games",
          description: "Team games and activities — all part of the fun!",
          tag: "group",
        },
        {
          time: "9:15–10:30pm",
          title: "Lucky draw",
          description: "Every staff member walks away with a prize — \"all sure can win\"!",
          tag: "highlight",
        },
      ],
    },
    {
      day: 3,
      date: "Thu 17 July 2026",
      label: "Team Activity Day",
      summary: "A morning of tea, tradition, and team bonding — then the rest of the day is yours.",
      events: [
        {
          time: "10:00am",
          title: "Depart hotel",
          description: "Depart Hilton Shenzhen Futian for 空艺茶书院 (Empty Art Tea Book House), Futian — about 10 minutes away.",
          tag: "travel",
        },
        {
          time: "10:00am–1:00pm",
          title: "Tea Tasting Ceremony & Incense Appreciation",
          description:
            "Team experience: a Chinese tea tasting ceremony with a tea master, exploring varieties and brewing techniques, plus a herbal incense appreciation session. Free-flow tea and light snacks throughout. Each person takes home a souvenir: 1 can of tea + 1 can of incense.",
          tag: "highlight",
        },
        {
          time: "1:00pm onward",
          title: "Return to hotel",
          description: "Transfer back to the hotel — afternoon is at leisure.",
          tag: "travel",
        },
        {
          time: "Evening",
          title: "Dinner at leisure",
          description: "Dinner on your own — see 'Around the Hotel' for nearby recommendations.",
          tag: "free",
        },
      ],
    },
    {
      day: 4,
      date: "Fri 18 July 2026",
      label: "Departure",
      summary: "Pack up, check out, and head home.",
      events: [
        {
          time: "By 12:00 noon",
          title: "Hotel check-out",
          description: "Please check out of your room by 12:00 noon.",
          tag: "highlight",
        },
        {
          time: "[PLACEHOLDER]",
          title: "Airport transfers",
          description: "[PLACEHOLDER] Transfer details and timing to be confirmed by logistics, based on individual flight times.",
          tag: "travel",
        },
        {
          time: "[PLACEHOLDER]",
          title: "Flights home",
          description: "Safe travels! Double-check your flight time and have your travel documents ready.",
          tag: "travel",
        },
      ],
    },
  ],

  aroundHotel: {
    malls: [
      {
        name: "[PLACEHOLDER] COCO Park",
        nameZh: "[占位符] 购物公园",
        description: "Major outdoor/indoor shopping and dining complex in Futian — a short walk from the hotel.",
        distance: "~10–15 min walk",
        mapUrl: "https://maps.google.com/?q=COCO+Park+Shenzhen",
      },
      {
        name: "[PLACEHOLDER] MIXC / MixC World",
        description: "Large mall with international brands, dining, and entertainment.",
        distance: "[PLACEHOLDER]",
        mapUrl: "https://maps.google.com/?q=MixC+Shenzhen",
      },
      {
        name: "[PLACEHOLDER] Add more malls here",
        description: "Replace with your own picks near the hotel.",
      },
    ],
    food: [
      {
        name: "[PLACEHOLDER] Local Cantonese restaurant",
        description: "Great for dim sum and classic Cantonese dishes.",
        distance: "[PLACEHOLDER]",
      },
      {
        name: "[PLACEHOLDER] Hot pot restaurant",
        description: "Popular hot pot spot near the hotel — good for groups.",
        distance: "[PLACEHOLDER]",
      },
      {
        name: "[PLACEHOLDER] Add more food spots here",
        description: "Replace with your own recommendations.",
      },
    ],
    cafes: [
      {
        name: "[PLACEHOLDER] Local cafe chain",
        description: "Good coffee and a quiet spot to recharge.",
        distance: "[PLACEHOLDER]",
      },
      {
        name: "[PLACEHOLDER] Add more cafes here",
        description: "Replace with your own picks.",
      },
    ],
    nightlife: [
      {
        name: "[PLACEHOLDER] Rooftop bar",
        description: "Relaxed spot for drinks with a view.",
        distance: "[PLACEHOLDER]",
      },
      {
        name: "[PLACEHOLDER] Add more bars / nightlife here",
        description: "Replace with your own picks.",
      },
    ],
    essentials: [
      {
        name: "[PLACEHOLDER] 7-Eleven / Family Mart",
        description: "Convenience store for snacks, drinks, and essentials.",
        distance: "~5 min walk",
      },
      {
        name: "[PLACEHOLDER] Pharmacy",
        description: "For any over-the-counter medication needs.",
        distance: "~5–10 min walk",
      },
    ],
    sightseeing: [
      {
        name: "[PLACEHOLDER] Lianhuashan Park",
        description: "Green space with skyline views, popular for a relaxed walk.",
        distance: "[PLACEHOLDER]",
        mapUrl: "https://maps.google.com/?q=Lianhuashan+Park+Shenzhen",
      },
      {
        name: "[PLACEHOLDER] Add more sights here",
        description: "Replace with your own picks for free time exploring.",
      },
    ],
  },

  shenzhenInfo: [
    {
      title: "Alipay & WeChat Pay",
      content: [
        "Mobile payment is the default in Shenzhen — most shops, restaurants, and even street stalls expect WeChat Pay or Alipay.",
        "Link an international card to WeChat Pay or Alipay before you arrive (both apps support this for many foreign cards).",
        "If linking a card doesn't work, some hotels and currency exchanges can help top up a balance with cash.",
      ],
    },
    {
      title: "Cards & cash",
      content: [
        "International credit/debit cards are accepted at the hotel, large malls, and major chains — but not always at smaller venues.",
        "Carry some cash (CNY) for backup, especially for small purchases, taxis, or street food.",
        "[PLACEHOLDER] Note on currency exchange location/process if needed.",
      ],
    },
    {
      title: "Didi (ride-hailing)",
      content: [
        "Didi is the easiest way to get around — similar to Grab/Uber. Download the app and link a payment method before you arrive.",
        "You can usually set your destination in English; the app will translate for the driver.",
        "Have your hotel address in Chinese (see Hotel section) ready to paste in if needed.",
      ],
    },
    {
      title: "Metro",
      content: [
        "Shenzhen's metro is clean, cheap, and easy to use, with English signage throughout.",
        "Pay with WeChat Pay / Alipay QR codes directly at the gates — no need for a separate card.",
        "[PLACEHOLDER] Note nearest metro station to the hotel and useful lines.",
      ],
    },
    {
      title: "Internet access",
      content: [
        "Hotel wifi is available throughout your stay (see Hotel section for details).",
        "Some apps and websites (e.g. Google, WhatsApp, Instagram, Facebook) are restricted in mainland China — set up a VPN before you travel if you need access.",
        "Local eSIM/roaming will give you mobile data for maps, Didi, and translation apps on the go.",
      ],
    },
    {
      title: "Power plugs",
      content: [
        "[PLACEHOLDER] China commonly uses Type A, C, and I sockets (220V). A universal travel adapter is recommended.",
      ],
    },
    {
      title: "Language tips",
      content: [
        "English is limited outside hotels and major malls — a translation app goes a long way.",
        "Learning a few basic Mandarin phrases (see below) is appreciated by locals and genuinely useful.",
        "Staff with Mandarin skills are a great resource if you get stuck — don't be shy to ask!",
      ],
    },
    {
      title: "Local etiquette",
      content: [
        "[PLACEHOLDER] Tipping is not customary in mainland China.",
        "[PLACEHOLDER] Add any other etiquette notes relevant to your group.",
      ],
    },
    {
      title: "Safety reminders",
      content: [
        "Shenzhen is generally very safe, including at night. Usual travel precautions apply — keep valuables secure and stay aware in crowds.",
        "Keep a digital copy of your passport and travel documents accessible.",
        "Save the Emergency Contacts section to your phone before you arrive (works offline once saved).",
      ],
    },
    {
      title: "Weather note",
      content: [
        "[PLACEHOLDER] July in Shenzhen is typically hot, humid, and occasionally rainy. Pack light clothing, an umbrella, and stay hydrated.",
      ],
    },
    {
      title: "Emergency services",
      content: [
        "Police: 110",
        "Ambulance: 120",
        "Fire: 119",
        "See the Contacts section for the full emergency contact list, including hotel and committee numbers.",
      ],
    },
  ],

  usefulPhrases: [
    { zh: "你好", pinyin: "nǐ hǎo", en: "Hello" },
    { zh: "谢谢", pinyin: "xiè xiè", en: "Thank you" },
    { zh: "多少钱？", pinyin: "duō shǎo qián?", en: "How much is it?" },
    { zh: "请问，洗手间在哪里？", pinyin: "qǐng wèn, xǐ shǒu jiān zài nǎ lǐ?", en: "Excuse me, where is the bathroom?" },
    { zh: "我可以用微信支付吗？", pinyin: "wǒ kě yǐ yòng wēi xìn zhī fù ma?", en: "Can I pay with WeChat Pay?" },
    { zh: "请带我去这个地址", pinyin: "qǐng dài wǒ qù zhè ge dì zhǐ", en: "Please take me to this address (for taxi/Didi)" },
    { zh: "我需要帮助", pinyin: "wǒ xū yào bāng zhù", en: "I need help" },
  ],

  paymentMethods: [
    {
      method: "WeChat Pay",
      description: "The most widely used mobile payment method in Shenzhen — link an international card before you travel.",
      tips: ["Works almost everywhere, including small stalls and the metro.", "Set up the 'Wallet' section in WeChat ahead of time."],
    },
    {
      method: "Alipay",
      description: "Equally widely accepted, with a dedicated 'Tour Pass' option for international visitors in some cases.",
      tips: ["Good backup if WeChat Pay isn't working.", "[PLACEHOLDER] Note any group-specific recommendation."],
    },
    {
      method: "Cash (CNY)",
      description: "Useful as backup, especially for very small vendors who may not take digital payments from foreign accounts.",
      tips: ["[PLACEHOLDER] Note where to exchange currency on arrival."],
    },
    {
      method: "International cards",
      description: "Accepted at the hotel and major malls, but not guaranteed elsewhere.",
      tips: ["Always carry a backup payment method when heading out."],
    },
  ],

  contacts: [
    {
      name: "[PLACEHOLDER] Retreat Committee — Lead Organizer",
      role: "Overall retreat coordination",
      phone: "+65 0000 0000",
      notes: "First point of contact for general questions during the retreat.",
    },
    {
      name: "[PLACEHOLDER] Logistics / Transport Coordinator",
      role: "Airport transfers, coach bookings, transport changes",
      phone: "+65 0000 0000",
    },
    {
      name: "[PLACEHOLDER] Company Internal Contact (HR/Admin)",
      role: "HR or admin support for retreat-related matters",
      phone: "+65 0000 0000",
    },
  ],

  emergencyContacts: [
    { label: "China Police", number: "110", notes: "For emergencies requiring police assistance." },
    { label: "China Ambulance", number: "120", notes: "Medical emergencies." },
    { label: "China Fire", number: "119", notes: "Fire emergencies." },
    { label: "Hilton Shenzhen Futian — Front Desk", number: "+86 755 0000 0000", notes: "[PLACEHOLDER] Confirm hotel front desk number." },
    { label: "[PLACEHOLDER] Embassy / Consulate", number: "+86 00 0000 0000", notes: "Add relevant embassy contact for your nationality if travelling far from home." },
    { label: "[PLACEHOLDER] Retreat Emergency Line", number: "+65 0000 0000", notes: "24-hour contact for the retreat committee during the trip." },
  ],

  qrItems: [
    {
      id: "arrival-card",
      label: "China Arrival Registration",
      description: "[PLACEHOLDER] Scan to access the online arrival registration portal before landing in Shenzhen.",
      data: "https://www.example.com/china-arrival-card-placeholder",
    },
    {
      id: "hotel-location",
      label: "Hotel Location",
      description: "Scan to open Hilton Shenzhen Futian in Maps.",
      data: "https://maps.google.com/?q=Hilton+Shenzhen+Futian",
    },
    {
      id: "pdf-backup",
      label: "PDF Backup of This Guide",
      description: "[PLACEHOLDER] Scan or tap to download a printable PDF version of this guide.",
      data: "https://www.example.com/retreat-guide-pdf-placeholder",
    },
  ],
};