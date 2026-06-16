import type { RetreatData } from "@/types/retreat";

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
    lastUpdated: "16 June 2026",
  },

  quickLinks: [
    { label: "Itinerary", href: "#itinerary",     icon: "itinerary" },
    { label: "Hotel",     href: "#hotel",          icon: "hotel" },
    { label: "Payments",  href: "#shenzhen-info",  icon: "payment" },
    { label: "Nearby",    href: "#around-hotel",   icon: "malls" },
    { label: "Emergency", href: "#contacts",       icon: "emergency" },
    { label: "Apps",      href: "#apps",           icon: "apps" },
  ],

  beforeYouGo: [
    {
      title: "Passport validity",
      content: [
        "Make sure your passport is valid for at least 6 months beyond the retreat dates — i.e. valid until at least 18 January 2027.",
        "If your passport doesn't meet this requirement, renew it before booking flights and contact the organising committee as soon as possible.",
      ],
    },
    {
      title: "China entry requirements — by nationality",
      content: [
        "Singapore, Malaysia & Thailand passports — 30-day visa-free entry to mainland China under China's unilateral visa exemption policy (extended through December 2026). No visa needed for this trip.",
        "Hong Kong SAR passports — use your Mainland Travel Permit (回乡证 / 港澳居民来往内地通行证) to enter mainland China, not your HKSAR passport. If you don't have one, apply at the Hong Kong Immigration Department well before you travel.",
        "Chinese nationals — standard mainland travel documents apply. No visa required.",
        "All travellers — confirm the latest requirements with your airline closer to the travel date, as policies can change.",
      ],
    },
    {
      title: "Arrival card — how to fill it in online",
      content: [
        "China requires foreign nationals to complete an arrival card. You can fill it in online before you land — do it on the plane or right after landing. Scan the QR code in the Before You Go section, or go to https://s.nia.gov.cn/ArrivalCardFillingPhone/ on your mobile browser.",
        "Step 1 — Tap 'Entry Filing', read and agree to the application instructions.",
        "Step 2 — Select your Document Type, then upload a photo of your passport's personal information page. Tap the image to make corrections if needed.",
        "Step 3 — Check that your details are correct, then fill in your arrival information for this trip.",
        "Step 4 — Continue filling in your personal information. The system will list appropriate entry policies based on what you declare — select the correct one (e.g. Visa-Free for SG / MY / TH staff).",
        "Step 5 — If you hold a visa, enter your visa number. If entering under the 30-day Visa-Free policy, indicate whether your travel document has been lost or stolen.",
        "Step 6 — Fill in your trip details. Fields marked with * are required.",
        "Step 7 — To add travelling companions, tap ADD at the top right. You can register multiple people on one submission.",
        "Step 8 — Review the declaration, sign, and tap SUBMIT. Download the arrival card receipt to your phone or send it to your email — you may be asked to show it at the immigration counter.",
        "Alternative: the NIA 12367 app (scan the separate QR code in the Before You Go section) can also be used to complete this.",
      ],
    },
    {
      title: "Immigration & entry notes",
      content: [
        "Have your passport (or Mainland Travel Permit for HK staff), return flight details, and hotel address in Chinese (see Hotel section) ready when you land.",
        "Fingerprint scanning is standard at Shenzhen immigration — follow the officer's instructions.",
        "Customs: declare items valued over CNY 5,000 / USD 750. Cash over USD 5,000 must also be declared.",
        "Keep a digital and printed copy of your hotel booking confirmation in case it is requested at immigration.",
      ],
    },
    {
      title: "Roaming & eSIM",
      content: [
        "Check with your mobile carrier for a China roaming pack, or purchase a local eSIM before you fly (available through your carrier's app or providers such as Airalo, Nomad, or Holafly).",
        "Hotel WiFi will be available throughout your stay — see the Hotel section for details.",
        "Important: Google, WhatsApp, Instagram, and Facebook are blocked in mainland China. Set up a VPN before you arrive if you need access — most VPN apps cannot be downloaded or activated once you are already in China.",
      ],
    },
    {
      title: "Apps to install before you go",
      content: [
        "WeChat — messaging and the easiest way to pay almost everywhere. Set up your Wallet (link a card) before you fly.",
        "Alipay — alternative payment app, also widely accepted. Try the Tour Pass feature if your card won't link to WeChat.",
        "Didi — China's main ride-hailing app (similar to Grab/Uber). Set your destination in English; the app translates for the driver.",
        "Amap (高德地图) — Baidu Maps alternative that works in China with English interface. Great for navigating on foot or by metro.",
        "Google Translate — download the offline Simplified Chinese pack. The camera mode is great for reading menus and signs.",
        "Any company communication apps needed for the retreat.",
      ],
    },
    {
      title: "What to pack",
      content: [
        "Comfortable walking shoes for the tea house activity and city exploring.",
        "Smart casual outfit for the gala dinner (Day 2 evening).",
        "Light, breathable clothing — July in Shenzhen is hot (30–35°C) and very humid.",
        "Small umbrella or packable rain jacket — afternoon thunderstorms are common in July.",
        "Universal power adapter (Type A / Type I sockets at 220V — see Useful Shenzhen Info).",
        "Sunscreen — essential if you plan any outdoor time.",
      ],
    },
    {
      title: "Dress code overview",
      content: [
        "Day 1 (Arrival): casual — travel comfortably.",
        "Day 2 (Gala Dinner): smart casual / business casual.",
        "Day 3 (Tea House Activity): casual, comfortable shoes.",
        "Day 4 (Departure): casual.",
      ],
    },
    {
      title: "Weather overview",
      content: [
        "Shenzhen in July is hot (30–35°C), very humid, and prone to afternoon thunderstorms. Pack light, breathable clothing, a small umbrella, and stay hydrated.",
        "Air-conditioned malls and the hotel offer good respite during the hottest parts of the day. Morning and evening are the best times for outdoor activities.",
      ],
    },
    {
      title: "Payment methods — quick overview",
      content: [
        "China is largely a mobile-payment society. WeChat Pay and Alipay are accepted almost everywhere — set these up with a linked card before you arrive if possible.",
        "Cash (CNY) is useful as backup, especially at small vendors and street food stalls.",
        "International cards are accepted at the hotel and larger malls, but less common elsewhere. See Useful Shenzhen Info for full details.",
      ],
    },
    {
      title: "Other pre-trip reminders",
      content: [
        "Submit any dietary requirements or allergies to the organising committee ahead of time.",
        "Confirm your flight details with the logistics coordinator.",
        "Save the Contacts section to your phone before you fly — it works without internet once saved.",
      ],
    },
  ],

  hotel: {
    name: "Hilton Shenzhen Futian",
    overview:
      "Our home base for the retreat. Centrally located in the Futian CBD, the hotel sits directly above Shopping Park metro station — COCO Park, malls, dining, and Lianhuashan Park are all within easy reach.",
    addressEn: "Tower B, Great China International Finance Centre, No. 1003 Shennan Avenue, Futian District, Shenzhen, Guangdong 518000, China",
    addressZh: "广东省深圳市福田区深南大道1003号大中华国际金融中心B座",
    amapUrl: "https://m.amap.com/search/?query=深圳希尔顿福田&city=深圳",
    fallbackUrl: "https://maps.google.com/?q=Hilton+Shenzhen+Futian",
    phone: "+86 755 2130 8888",
    website: "https://www.hilton.com/en/hotels/szxsfhi-hilton-shenzhen-futian/",
    checkIn: "3:00pm onward (Day 1, Tue 15 July)",
    checkOut: "By 12:00 noon (Day 4, Fri 18 July)",
    breakfast: "Daily, approx. 6:30am–10:30am at Mis.U Restaurant (confirm exact floor with hotel at check-in)",
    wifi: {
      network: "Hilton Guest WiFi (confirm exact network name at check-in)",
      password: "Provided at check-in",
      notes: "Free for all guests — connect and follow the on-screen instructions in your room.",
    },
    amenities: [
      "Year-round outdoor swimming pool",
      "Fitness centre (24 hours)",
      "Spa & wellness centre",
      "Sauna",
      "Mis.U Restaurant & lobby bar",
      "Business centre",
      "Shopping Park metro (Lines 1 & 4) at front door",
    ],
    nearbyEssentials: [
      { name: "Shopping Park Metro Station (Lines 1 & 4)", type: "Metro",       distance: "At hotel front door" },
      { name: "COCO Park — dining, shopping & bar street", type: "Shopping",    distance: "~5–10 min walk" },
      { name: "FamilyMart / 7-Eleven",                    type: "Convenience", distance: "~5 min walk" },
      { name: "Watsons (屈臣氏)",                          type: "Pharmacy",    distance: "~10 min (COCO Park)" },
      { name: "ATM — Bank of China",                      type: "ATM",         distance: "Hotel lobby & COCO Park" },
    ],
    surroundingsNote:
      "Shopping Park metro is at your front door, COCO Park with its restaurants and bar street is a short walk away, and Lianhuashan Park is about 2 km north for those who want an early morning stroll.",
  },

  itinerary: [
    {
      day: 1,
      date: "Tue 15 July 2026",
      label: "Arrival Day",
      summary: "Fly in, make your own way to the hotel, and rest up for the days ahead.",
      events: [
        {
          time: "Throughout the day",
          title: "Arrivals into Shenzhen",
          description: "Staff fly in throughout the day to Shenzhen Bao'an Airport (SZX). Make your own way to the hotel — Didi is the easiest option; copy the Chinese hotel address in the Hotel section and paste it into the app.",
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
      notes: "Everyone makes their own way from the airport — use Didi and paste the hotel's Chinese address. Some staff arrive Day 1; the rest arrive Day 2.",
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
          description: "Start the day at Mis.U Restaurant.",
          tag: "meal",
        },
        {
          time: "Morning–Afternoon",
          title: "Free time",
          description: "Free and easy before the evening's main event — explore, rest, or grab a coffee nearby.",
          tag: "free",
        },
        {
          time: "6:30–8:00pm",
          title: "CEO / EXCO speech + Gala Dinner",
          description:
            "Speech by CEO / EXCO, followed by the Gala Dinner — a Chinese banquet (AV included; beer & soft drinks available).",
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
            "Team experience: a Chinese tea tasting ceremony with a tea master, exploring varieties and brewing techniques, plus a herbal incense appreciation session. Free-flow tea and light snacks throughout. Each person takes home a souvenir — 1 can of tea + 1 can of incense.",
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
          time: "Varies",
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
        name: "COCO Park (购物公园)",
        nameZh: "购物公园",
        description: "The main outdoor-indoor shopping and dining complex in Futian — four floors of international and local brands, plus COCO Park's famous bar street along the eastern side. Shopping Park metro is right outside.",
        distance: "~5–10 min walk",
        amapUrl: "https://m.amap.com/search/?query=COCO+Park购物公园&city=深圳",
        fallbackUrl: "https://maps.google.com/?q=COCO+Park+Shenzhen",
      },
      {
        name: "Futian MIXC (万象城)",
        description: "Large upscale mall with international brands, a cinema, and a wide range of dining options — good for an afternoon browse.",
        distance: "~10–15 min walk",
        amapUrl: "https://m.amap.com/search/?query=万象城福田&city=深圳",
        fallbackUrl: "https://maps.google.com/?q=Futian+MixC+Shenzhen",
      },
      {
        name: "Shenzhen Bay MixC (深圳湾万象城)",
        description: "Shenzhen's premier luxury shopping destination with a waterfront setting and more high-end options. Best reached by metro (Lines 1 or 9 to Shenzhen Bay Park).",
        distance: "~20 min by metro",
        amapUrl: "https://m.amap.com/search/?query=深圳湾万象城&city=深圳",
        fallbackUrl: "https://maps.google.com/?q=Shenzhen+Bay+MixC",
      },
    ],
    food: [
      {
        name: "Jin Yue Xuan (金悦轩)",
        description: "Popular Cantonese restaurant in COCO Park — excellent dim sum in the mornings and Chinese banquet-style dinners. Good for groups.",
        distance: "3/F COCO Park (~10 min walk)",
        amapUrl: "https://m.amap.com/search/?query=金悦轩+购物公园&city=深圳",
        fallbackUrl: "https://maps.google.com/?q=Jin+Yue+Xuan+COCO+Park+Shenzhen",
      },
      {
        name: "Tanyu Hot Pot (谭鸭血)",
        description: "Buzzy hotpot chain known for its Sichuan-style broth and duck-blood tofu. Great for a group dinner — expect a queue during peak hours.",
        distance: "Xinghe COCO Park (~10 min walk)",
        amapUrl: "https://m.amap.com/search/?query=谭鸭血+星河COCO&city=深圳",
        fallbackUrl: "https://maps.google.com/?q=Tanyu+Xinghe+COCO+Park+Shenzhen",
      },
      {
        name: "Ah Yuan Lai (阿元来)",
        description: "Michelin-recognised Taiwanese spot — known for its affordable signature braised pork rice and braised dishes.",
        distance: "COCO Park (~10 min walk)",
        amapUrl: "https://m.amap.com/search/?query=阿元来+购物公园&city=深圳",
      },
      {
        name: "MULINO ALIMENTARI",
        description: "Italian restaurant in COCO Park — solid pizza, pasta, and gelato if you're after a break from Chinese food.",
        distance: "3/F COCO Park (~10 min walk)",
        amapUrl: "https://m.amap.com/search/?query=MULINO+ALIMENTARI+购物公园&city=深圳",
      },
    ],
    cafes: [
      {
        name: "% Arabica",
        description: "Stylish Japanese-origin specialty coffee — one of the most popular cafes in COCO Park. Worth the visit for a good flat white.",
        distance: "COCO Park (~10 min walk)",
        amapUrl: "https://m.amap.com/search/?query=Arabica咖啡+购物公园&city=深圳",
        fallbackUrl: "https://maps.google.com/?q=Arabica+Coffee+COCO+Park+Shenzhen",
      },
      {
        name: "Heytea (喜茶)",
        description: "Go-to brand for fresh-fruit milk teas and cheese teas — a quintessential Shenzhen experience. Multiple locations in and around COCO Park.",
        distance: "~10 min walk",
        amapUrl: "https://m.amap.com/search/?query=喜茶+购物公园&city=深圳",
      },
      {
        name: "Manner Coffee",
        description: "Affordable, no-fuss specialty coffee chain with quick service and solid espresso drinks — perfect for a morning coffee before any activities.",
        distance: "~10 min walk",
        amapUrl: "https://m.amap.com/search/?query=Manner+Coffee+福田&city=深圳",
      },
    ],
    nightlife: [
      {
        name: "COCO Park Bar Street",
        description: "A street of bars along the eastern edge of COCO Park — Demon Bar, Shark Wine Lounge & Restaurant, and Baron are popular picks for relaxed drinks after dinner.",
        distance: "~10 min walk",
        amapUrl: "https://m.amap.com/search/?query=购物公园酒吧街&city=深圳",
        fallbackUrl: "https://maps.google.com/?q=COCO+Park+Bar+Street+Shenzhen",
      },
      {
        name: "McCawley's Irish Bar",
        description: "Popular expat-friendly Irish pub opposite COCO Park at Shopping Park — good for a casual pint in a familiar setting.",
        distance: "~10 min walk",
        amapUrl: "https://m.amap.com/search/?query=McCawley酒吧+购物公园&city=深圳",
      },
      {
        name: "Glass Hammer",
        description: "Craft beer bar near Shopping Park with a solid selection of local and imported brews — low-key and relaxed.",
        distance: "~10 min walk",
        amapUrl: "https://m.amap.com/search/?query=Glass+Hammer+福田&city=深圳",
      },
    ],
    essentials: [
      {
        name: "FamilyMart / 7-Eleven",
        description: "Multiple convenience stores around COCO Park for snacks, drinks, umbrellas, and travel essentials.",
        distance: "~5 min walk",
      },
      {
        name: "Watsons (屈臣氏)",
        description: "Pharmacy and personal care chain — stock up on sunscreen, over-the-counter medication, or toiletries.",
        distance: "~10 min (inside COCO Park)",
        amapUrl: "https://m.amap.com/search/?query=屈臣氏+购物公园&city=深圳",
      },
      {
        name: "Bank of China ATM",
        description: "Accepts international cards. Also available inside COCO Park and MIXC if you need cash.",
        distance: "Hotel lobby",
      },
    ],
    sightseeing: [
      {
        name: "Lianhuashan Park (莲花山公园)",
        description: "Shenzhen's most beloved public park — free entry, hilltop Deng Xiaoping statue, panoramic city views, and lovely walking trails. Best early morning or late afternoon to beat the heat.",
        distance: "~2.2 km (~25 min walk or short Didi ride)",
        amapUrl: "https://m.amap.com/search/?query=莲花山公园&city=深圳",
        fallbackUrl: "https://maps.google.com/?q=Lianhuashan+Park+Shenzhen",
      },
      {
        name: "Ping An Finance Centre (平安金融中心)",
        description: "The 116th-floor sky observation deck of Shenzhen's iconic supertall — one of the world's highest viewing platforms. Visible from COCO Park. Tickets should be booked in advance.",
        distance: "~15 min by Didi",
        amapUrl: "https://m.amap.com/search/?query=平安金融中心&city=深圳",
        fallbackUrl: "https://maps.google.com/?q=Ping+An+Finance+Centre+Shenzhen",
      },
      {
        name: "Futian Mangrove Nature Reserve (福田红树林)",
        description: "Peaceful coastal mangrove wetland and bird sanctuary — a pleasant contrast to the urban bustle. Short Didi ride south toward Shenzhen Bay.",
        distance: "~15–20 min by Didi",
        amapUrl: "https://m.amap.com/search/?query=福田红树林&city=深圳",
        fallbackUrl: "https://maps.google.com/?q=Futian+Mangrove+Nature+Reserve+Shenzhen",
      },
    ],
  },

  shenzhenInfo: [
    {
      title: "Alipay & WeChat Pay",
      content: [
        "Mobile payment is the default in Shenzhen — most shops, restaurants, and even street stalls expect WeChat Pay or Alipay.",
        "Link an international card to WeChat Pay or Alipay before you arrive (both apps support this for many foreign cards).",
        "If linking a card doesn't work, top up a balance at the hotel front desk or a bank branch using cash.",
      ],
    },
    {
      title: "Cards & cash",
      content: [
        "International Visa/Mastercard cards are accepted at the hotel, large malls (COCO Park, MIXC), and major chains — but not always at smaller venues or street stalls.",
        "Carry some CNY cash as backup, especially for small purchases, taxis, and street food.",
        "Currency exchange is available at the hotel front desk, Bank of China in COCO Park, and at Shenzhen Bao'an Airport on arrival.",
      ],
    },
    {
      title: "Didi (ride-hailing)",
      content: [
        "Didi is the easiest way to get around — similar to Grab/Uber. Download the app and link a payment method before you arrive.",
        "You can set your destination in English; the app translates for the driver.",
        "Have your hotel address in Chinese (see Hotel section) ready to paste in if needed.",
      ],
    },
    {
      title: "Metro",
      content: [
        "Shopping Park Station (购物公园站), Lines 1 & 4, is directly outside the hotel front door — no walking needed to get to the metro.",
        "Shenzhen's metro has English signage throughout and is clean, cheap, and easy to navigate.",
        "Line 1 runs west toward Shenzhen Bay and east toward Luohu / Lo Wu (Hong Kong border crossing).",
        "Pay with WeChat Pay or Alipay QR codes directly at the gates — no separate card or top-up needed.",
      ],
    },
    {
      title: "Internet access",
      content: [
        "Hotel WiFi is available throughout your stay (see Hotel section for details).",
        "Google, WhatsApp, Instagram, and Facebook are blocked in mainland China. Set up a VPN before you travel if you need access — most VPN apps must be downloaded and activated before entering China.",
        "A local eSIM or roaming pack will give you mobile data for maps, Didi, and translation apps when you're out.",
      ],
    },
    {
      title: "Power plugs",
      content: [
        "China uses Type A (two flat pins) and Type I (two slanted pins) sockets at 220V / 50Hz. A universal travel adapter is recommended.",
        "Most modern phone and laptop chargers are dual-voltage (100–240V) — check the label on your charger. If it shows only 110V, you'll need a voltage converter as well.",
      ],
    },
    {
      title: "Language tips",
      content: [
        "English is limited outside hotels and major malls — a translation app goes a long way.",
        "Google Translate's camera mode (with the offline Simplified Chinese pack downloaded) is great for reading menus and signs.",
        "Learning a few basic Mandarin phrases (see below) is appreciated by locals and genuinely useful.",
        "Staff with Mandarin skills are a great resource if you get stuck — don't be shy to ask!",
      ],
    },
    {
      title: "Local etiquette",
      content: [
        "Tipping is not customary in mainland China — at restaurants, hotels, or in taxis.",
        "Bargaining is common at markets but not in fixed-price shops or malls.",
        "Queue-jumping can happen — don't take it personally. A calm, firm presence usually works.",
      ],
    },
    {
      title: "Safety reminders",
      content: [
        "Shenzhen is generally very safe, including at night. Standard travel precautions apply — keep valuables secure and stay aware in busy crowds.",
        "Keep a digital copy of your passport and travel documents accessible on your phone.",
        "Save the Emergency Contacts section before you arrive — it works offline once saved.",
      ],
    },
    {
      title: "Weather note",
      content: [
        "July in Shenzhen is hot (30–35°C), very humid, and prone to afternoon thunderstorms. Pack light, breathable clothing, a small umbrella, and stay hydrated.",
        "Air-conditioned malls and the hotel are good retreats during peak heat. Morning and evening are the best times for outdoor activities.",
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
    { zh: "你好",               pinyin: "nǐ hǎo",                              en: "Hello" },
    { zh: "谢谢",               pinyin: "xiè xiè",                             en: "Thank you" },
    { zh: "多少钱？",           pinyin: "duō shǎo qián?",                       en: "How much is it?" },
    { zh: "请问，洗手间在哪里？", pinyin: "qǐng wèn, xǐ shǒu jiān zài nǎ lǐ?",   en: "Excuse me, where is the bathroom?" },
    { zh: "我可以用微信支付吗？", pinyin: "wǒ kě yǐ yòng wēi xìn zhī fù ma?",    en: "Can I pay with WeChat Pay?" },
    { zh: "请带我去这个地址",   pinyin: "qǐng dài wǒ qù zhè ge dì zhǐ",         en: "Please take me to this address (for taxi/Didi)" },
    { zh: "我需要帮助",         pinyin: "wǒ xū yào bāng zhù",                   en: "I need help" },
    { zh: "太贵了",             pinyin: "tài guì le",                           en: "Too expensive (for bargaining at markets)" },
    { zh: "好吃！",             pinyin: "hǎo chī!",                             en: "Delicious!" },
  ],

  paymentMethods: [
    {
      method: "WeChat Pay",
      description: "The most widely used mobile payment method in Shenzhen — link an international card before you travel.",
      tips: ["Works almost everywhere, including small stalls and the metro.", "Set up the 'Wallet' section in WeChat and link your card ahead of time."],
    },
    {
      method: "Alipay",
      description: "Equally widely accepted. The Tour Pass feature is designed for international visitors and lets you top up with a foreign Visa/Mastercard more easily.",
      tips: ["Good backup if WeChat Pay isn't working.", "Tour Pass top-up works with most Visa/Mastercard cards — set it up in the Alipay app before you fly."],
    },
    {
      method: "Cash (CNY)",
      description: "Useful as backup, especially at very small vendors who may not accept digital payments from foreign accounts.",
      tips: ["Exchange at the hotel front desk, Bank of China in COCO Park, or at Shenzhen Bao'an Airport on arrival."],
    },
    {
      method: "International cards",
      description: "Accepted at the hotel and major malls (COCO Park, MIXC), but not guaranteed at smaller shops, street food stalls, or local restaurants.",
      tips: ["Always carry a backup payment method when heading out.", "Visa/Mastercard are more widely accepted than Amex."],
    },
  ],

  contacts: [
    {
      name: "[PLACEHOLDER] Retreat Committee — Lead Organiser",
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
      name: "[PLACEHOLDER] Company Internal Contact (HR / Admin)",
      role: "HR or admin support for retreat-related matters",
      phone: "+65 0000 0000",
    },
  ],

  emergencyContacts: [
    { label: "China Police",                        number: "110",               notes: "For emergencies requiring police assistance." },
    { label: "China Ambulance",                     number: "120",               notes: "Medical emergencies." },
    { label: "China Fire",                          number: "119",               notes: "Fire emergencies." },
    { label: "Hilton Shenzhen Futian — Front Desk", number: "+86 755 2130 8888", notes: "24-hour hotel front desk." },
    { label: "[PLACEHOLDER] Embassy / Consulate",   number: "+86 00 0000 0000",  notes: "Add relevant embassy contact for your nationality if needed." },
    { label: "[PLACEHOLDER] Retreat Emergency Line",number: "+65 0000 0000",     notes: "24-hour contact for the retreat committee during the trip." },
  ],

  qrItems: [
    {
      id: "arrival-card",
      label: "China Arrival Card (Mobile)",
      description: "Official China Immigration portal — scan to fill in your arrival card online. Complete this on the plane or right after landing. Tap 'Entry Filing' to begin.",
      data: "https://s.nia.gov.cn/ArrivalCardFillingPhone/",
    },
    {
      id: "hotel-location",
      label: "Hotel Location",
      description: "Scan or tap to open the hotel in Amap (高德地图) for directions.",
      data: "https://m.amap.com/search/?query=深圳希尔顿福田&city=深圳",
    },
    {
      id: "pdf-backup",
      label: "PDF Backup of This Guide",
      description: "[PLACEHOLDER] Scan or tap to download a printable PDF version of this guide.",
      data: "https://www.example.com/retreat-guide-pdf-placeholder",
    },
  ],

  appsToDownload: {
    mustHave: [
      {
        name: "WeChat",
        nameZh: "微信",
        description: "All-in-one messaging, calling, and payments app — the essential China app.",
        whyNeeded: "Required for WeChat Pay (the most accepted payment method in Shenzhen) and for keeping in touch with the group. Set up Wallet and link your card before you fly.",
        badge: "Essential",
        iosUrl: "https://apps.apple.com/app/wechat/id414478124",
        androidUrl: "https://play.google.com/store/apps/details?id=com.tencent.mm",
      },
      {
        name: "Alipay",
        nameZh: "支付宝",
        description: "China's second major mobile payment app — accepted everywhere alongside WeChat Pay.",
        whyNeeded: "Great backup if WeChat Pay doesn't work with your card. The Alipay 'Tour Pass' feature makes it easier for international visitors to top up using a foreign Visa/Mastercard.",
        badge: "Essential",
        iosUrl: "https://apps.apple.com/app/alipay/id333206289",
        androidUrl: "https://play.google.com/store/apps/details?id=com.eg.android.AlipayGphone",
      },
      {
        name: "Amap",
        nameZh: "高德地图",
        description: "China's most accurate navigation and map app — works where Google Maps doesn't.",
        whyNeeded: "Google Maps is blocked in China. Amap has English interface support, accurate real-time transit info for Shenzhen's metro, and walking/driving directions. Download offline Shenzhen maps for use without mobile data.",
        badge: "Essential",
        iosUrl: "https://apps.apple.com/app/id461703208",
      },
      {
        name: "Didi",
        nameZh: "滴滴出行",
        description: "China's dominant ride-hailing app — like Grab or Uber, but for the mainland.",
        whyNeeded: "The easiest way to get around Shenzhen independently. Set your destination in English — Didi translates it for the driver. Link a payment method before you arrive.",
        badge: "Essential",
        iosUrl: "https://apps.apple.com/app/didi-chuxing/id554499054",
        androidUrl: "https://play.google.com/store/apps/details?id=com.sdu.didi.psnger",
      },
    ],
    niceToHave: [
      {
        name: "Dianping",
        nameZh: "大众点评",
        description: "China's equivalent of Yelp — restaurant reviews, ratings, and vouchers.",
        whyNeeded: "Useful for finding well-reviewed local restaurants near the hotel and reading real customer ratings. Many places also offer Dianping discounts.",
        badge: "Good to have",
      },
      {
        name: "Meituan",
        nameZh: "美团",
        description: "Food delivery and local services super-app — also has extensive restaurant listings.",
        whyNeeded: "Good for ordering food delivery to the hotel room or browsing nearby restaurants with photos and prices. Requires a Chinese phone number to sign up.",
        badge: "Good to have",
      },
      {
        name: "Apollo Go",
        description: "Baidu's autonomous robotaxi app — a genuinely futuristic Shenzhen experience.",
        whyNeeded: "Apollo Go operates autonomous (driverless) taxis in parts of Shenzhen. A fun activity to try if you're curious about self-driving tech — rides are often free or heavily subsidised.",
        badge: "Good to have",
      },
    ],
  },
};
