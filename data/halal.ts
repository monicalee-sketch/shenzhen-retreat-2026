import type { Place, TipSection } from "@/types/retreat";

export interface HalalGuideData {
  overview: string;
  mosque: Place & { tips: string[] };
  restaurants: Place[];
  attractions: Place[];
  wellness: { name: string; description: string; notes?: string }[];
  practicalTips: TipSection[];
  guangzhouTrip: {
    overview: string;
    quickFacts: { label: string; value: string }[];
    mosque: Place;
    foodArea: Place;
    itinerary: string[];
    verdict: string;
  };
}

export const halalGuideData: HalalGuideData = {
  overview:
    "To support our Muslim colleagues during the Shenzhen Staff Retreat, this guide has halal dining options, prayer facilities, transport, and recommended activities around Shenzhen — alongside the main retreat guide.",

  mosque: {
    name: "Shenzhen Mosque (Shangmeilin)",
    nameZh: "深圳清真寺",
    description: "The main mosque in Shenzhen and the recommended location for Friday (Jummah) prayers.",
    distance: "~10–15 min from the hotel",
    amapUrl: "https://uri.amap.com/search?keyword=深圳清真寺&city=深圳&callnative=0",
    tips: [
      "Friday 17 July: attend Jummah prayer if your schedule allows.",
      "Other days: hotel rooms are the most convenient option for daily prayers.",
      "Some malls and public venues may have quiet areas suitable for prayer, though dedicated prayer rooms are uncommon — plan ahead, especially around work-related activities.",
    ],
  },

  restaurants: [
    {
      name: "Anar Xinjiang Cuisine",
      description: "Popular halal-friendly restaurant serving authentic Xinjiang cuisine, conveniently located near COCO Park.",
      amapUrl: "https://uri.amap.com/search?keyword=Anar+新疆餐厅&city=深圳&callnative=0",
    },
    {
      name: "Afeng Muslim Restaurant",
      description: "Authentic halal Chinese dishes — recommended for beef noodles, dumplings, and local specialties.",
      amapUrl: "https://uri.amap.com/search?keyword=阿凤穆斯林餐厅&city=深圳&callnative=0",
    },
    {
      name: "Zhong Fa Yuan Muslim Restaurant",
      description: "Halal restaurant recommended in the official retreat halal guide.",
      amapUrl: "https://uri.amap.com/search?keyword=忠发园穆斯林餐厅&city=深圳&callnative=0",
    },
    {
      name: "Lanzhou Halal Noodles (兰州拉面)",
      description: "Widely available throughout Shenzhen — reliable, budget-friendly, and an excellent backup choice wherever you are in the city.",
      amapUrl: "https://uri.amap.com/search?keyword=兰州拉面&city=深圳&callnative=0",
    },
    {
      name: "Xi Yu Feng Xinjiang BBQ",
      description: "Xinjiang-style BBQ skewers and grilled specialties.",
      amapUrl: "https://uri.amap.com/search?keyword=西域风新疆烧烤&city=深圳&callnative=0",
    },
    {
      name: "Kaierwang Muslim Restaurant",
      description: "Halal restaurant recommended in the official retreat halal guide.",
      amapUrl: "https://uri.amap.com/search?keyword=凯尔旺穆斯林餐厅&city=深圳&callnative=0",
    },
    {
      name: "Xixiawang Muslim Restaurant",
      description: "Halal restaurant recommended in the official retreat halal guide.",
      amapUrl: "https://uri.amap.com/search?keyword=西夏王穆斯林餐厅&city=深圳&callnative=0",
    },
    {
      name: "Xinjiang Hongliuhua Restaurant",
      description: "Xinjiang cuisine restaurant recommended in the official retreat halal guide.",
      amapUrl: "https://uri.amap.com/search?keyword=新疆红柳花餐厅&city=深圳&callnative=0",
    },
    {
      name: "Mevlana Turkish Restaurant",
      description: "Turkish halal-friendly cuisine — a good change of pace from Chinese Muslim food.",
      amapUrl: "https://uri.amap.com/search?keyword=Mevlana土耳其餐厅&city=深圳&callnative=0",
    },
    {
      name: "Middle Eastern restaurants near Ping An Finance Center",
      description: "Several Lebanese and Turkish restaurants are available around the Futian and Ping An Finance Center area, offering halal-friendly international cuisine.",
      amapUrl: "https://uri.amap.com/search?keyword=中东餐厅+平安金融中心&city=深圳&callnative=0",
    },
  ],

  attractions: [
    {
      name: "COCO Park",
      description: "Near the hotel — shopping, entertainment, cafés, and convenient access to halal-friendly dining options.",
      distance: "~5–10 min walk from hotel",
      amapUrl: "https://uri.amap.com/search?keyword=COCO+Park购物公园&city=深圳&callnative=0",
    },
    {
      name: "Ping An Finance Centre",
      description: "One of Shenzhen's most iconic landmarks — observation deck with panoramic city views and excellent photo opportunities.",
      amapUrl: "https://uri.amap.com/search?keyword=平安金融中心&city=深圳&callnative=0",
    },
    {
      name: "Luohu District",
      description: "Popular area near the Hong Kong border — additional halal dining options plus shopping and sightseeing.",
      amapUrl: "https://uri.amap.com/search?keyword=罗湖区&city=深圳&callnative=0",
    },
    {
      name: "Window of the World",
      description: "Theme park with miniature replicas of world landmarks (Eiffel Tower, Egyptian Pyramids, Taj Mahal). Great for group outings and photography.",
      amapUrl: "https://uri.amap.com/search?keyword=世界之窗&city=深圳&callnative=0",
    },
    {
      name: "Splendid China Folk Village",
      description: "Cultural attraction showcasing Chinese history, architecture, and ethnic cultures — ideal for cultural and family-friendly visits.",
      amapUrl: "https://uri.amap.com/search?keyword=锦绣中华民俗村&city=深圳&callnative=0",
    },
    {
      name: "Dameisha Beach",
      description: "About an hour from Futian — relaxation, beach walks, and team bonding.",
      distance: "~1 hour from Futian",
      amapUrl: "https://uri.amap.com/search?keyword=大梅沙海滨公园&city=深圳&callnative=0",
    },
    {
      name: "Huaqiangbei Electronics Market",
      description: "One of the world's largest electronics markets — technology, gadgets, and unique souvenirs.",
      amapUrl: "https://uri.amap.com/search?keyword=华强北&city=深圳&callnative=0",
    },
  ],

  wellness: [
    {
      name: "Hotel Spa (Recommended)",
      description: "Private treatment rooms, ability to request a female therapist, no requirement to use shared facilities.",
      notes: "Best for privacy and comfort, and for relaxation after team activities.",
    },
    {
      name: "Tangquan Life TENZ Spa",
      description: "Large wellness and spa complex near Futian — massage services, sauna, steam rooms, and relaxation lounges.",
      notes: "Guests may wish to remain within gender-specific areas and request private treatment rooms where available.",
    },
    {
      name: "Queen Spa & Dining",
      description: "Large spa complex in Luohu — massage, wellness facilities, dining and relaxation areas.",
      notes: "Suitable for visitors looking for a comprehensive spa experience.",
    },
  ],

  practicalTips: [
    {
      title: "Spotting halal food",
      content: [
        "Look for the Chinese characters 清真 (Qīngzhēn) — this generally indicates halal food.",
        "Recommended go-tos: Xinjiang restaurants, Lanzhou noodle shops, and Muslim-owned establishments.",
        "Avoid restaurants where halal status cannot be verified.",
      ],
    },
    {
      title: "Useful apps",
      content: [
        "Didi — recommended for ride-hailing and transportation.",
        "Meituan / Dianping — restaurant searches, reviews, and finding halal dining options.",
        "Alipay / WeChat Pay — commonly used mobile payment methods throughout China.",
      ],
    },
    {
      title: "Getting around",
      content: [
        "Shenzhen Metro — efficient, affordable, and easy to navigate.",
        "Didi — recommended for direct travel between attractions and dining locations.",
      ],
    },
  ],

  guangzhouTrip: {
    overview:
      "Best for Muslim travellers visiting from Shenzhen who want easier halal food, Islamic heritage, mosque access, and a simple cultural day trip. Compared with Shenzhen, Guangzhou is generally easier for Muslim travellers — it has a longer-established Muslim community, more halal restaurants clustered in one area, and historic mosques.",
    quickFacts: [
      { label: "Route", value: "Shenzhen North → Guangzhou South by high-speed train" },
      { label: "Travel time", value: "~30–40 min on many high-speed services" },
      { label: "Budget", value: "Approx. SGD 20–35 return, depending on seat type" },
      { label: "Best area", value: "Xiaobei Road / Yuexiu District" },
      { label: "Best time", value: "A full free day is ideal; a half-day works if you start early" },
    ],
    mosque: {
      name: "Huaisheng Mosque (Lighthouse Mosque)",
      description: "Located in Yuexiu District, widely regarded as one of China's most historic mosques — meaningful for prayer, Islamic history, and cultural appreciation. Dress modestly and check prayer/visiting arrangements before going, especially on Fridays.",
      amapUrl: "https://uri.amap.com/search?keyword=怀圣寺光塔&city=广州&callnative=0",
    },
    foodArea: {
      name: "Xiaobei Road / Yuexiu District",
      description: "The most convenient halal food hub — Uyghur, Turkish, Arab, Pakistani, Indian, and Chinese Muslim food options. Try Lanzhou beef noodles, lamb skewers, naan, kebabs, and Xinjiang-style dishes. Look for 清真 (Qīngzhēn) for halal signage.",
      amapUrl: "https://uri.amap.com/search?keyword=小北路&city=广州&callnative=0",
    },
    itinerary: [
      "Morning: high-speed train from Shenzhen North to Guangzhou South.",
      "Late morning: travel to Yuexiu District, visit Huaisheng Mosque.",
      "Lunch: head to Xiaobei Road for halal food.",
      "Afternoon: tea, dessert, or coffee around Xiaobei.",
      "Return: metro or Didi back to Guangzhou South, then return to Shenzhen.",
    ],
    verdict:
      "Worth it if this is your first time in China, you want more halal food variety, or you're interested in Islamic heritage. If you only have a very tight schedule, it's fine to skip and stay in Shenzhen instead.",
  },
};