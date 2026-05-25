export type Locale = "en" | "ar";

export type ServiceItem = { title: string; desc: string };
export type PricingTier = {
  name: string;
  price: string;
  period: string;
  features: string[];
};
export type PlanItem = {
  id: string;
  title: string;
  type: string;
  desc: string;
  price: string;
  sub: string;
  featured?: boolean;
};
export type PackageItem = {
  id: string;
  slug: string;
  label: string;
  title: string;
  price: string;
  period: string;
  description: string;
  items: string[];
};

export type Translations = {
  nav: {
    shoots: string;
    plans: string;
    pricingDeck: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    langToggle: string;
  };
  hero: {
    intro: string;
    headline: string;
    headlineHighlight: string;
    sub: string;
    eyebrow: string;
    studioLine: string;
    teamLine: string;
    btnShoots: string;
    btnPlans: string;
  };
  pricing: {
    label: string;
    title: string;
    explorePlans: string;
    clickStart: string;
    tiers: PricingTier[];
  };
  cta: {
    eyebrow: string;
    headline: string;
    headlineHighlight: string;
    sub: string;
    whatsapp: string;
    brief: string;
    trust: string;
  };
  footer: {
    location: string;
    engineered: string;
  };
  shoots: {
    title: string;
    titleHighlight: string;
    sub: string;
    services: ServiceItem[];
    showreel: string;
    showreelDesc1: string;
    showreelDesc2: string;
    showreelDesc3: string;
    ctaTitle: string;
    ctaSub: string;
    ctaBtn: string;
  };
  plansPage: {
    label: string;
    title: string;
    titleSub: string;
    tableHeaders: string[];
    popular: string;
    tooltip: string;
    vatNote: string;
    customScope: string;
    items: PlanItem[];
  };
  pkg2: {
    explore: string;
    choosePlan: string;
    packages: PackageItem[];
  };
  capabilities: {
    label: string;
    title: string;
    services: ServiceItem[];
  };
  contact: {
    successTitle: string;
    successSub: string;
    close: string;
    headline: string;
    headlineHighlight: string;
    sub: string;
    responseTime: string;
    vision: string;
    name: string;
    email: string;
    countryCode: string;
    phone: string;
    selectPlan: string;
    mixMatch: string;
    message: string;
    send: string;
    failed: string;
    error: string;
    loading: string;
    planOptions: { value: string; label: string }[];
    mixMatchItems: { name: string; price: string }[];
  };
  loader: {
    sub: string;
  };
};

const enTiers: PricingTier[] = [
  {
    name: "One-off CGI Piece",
    price: "SAR 4,500",
    period: "per project",
    features: ["High-end CGI visual", "Product or brand-focused", "2 revision rounds"],
  },
  {
    name: "3D Architectural Visualisation",
    price: "SAR 2,500",
    period: "per scene",
    features: ["Interior / exterior renders", "Realistic lighting & textures", "Scene-based pricing"],
  },
  {
    name: "Full Production Day",
    price: "SAR 3,500",
    period: "per day",
    features: ["Professional shoot setup", "Camera + lighting crew", "On-site production support"],
  },
  {
    name: "Green-Screen Production",
    price: "SAR 5,500",
    period: "per day",
    features: ["Green-screen studio setup", "Advanced compositing ready", "Lighting & backdrop included"],
  },
  {
    name: "Voiceover (AR / EN)",
    price: "SAR 1,500",
    period: "per project",
    features: ["Arabic or English VO", "Studio-quality delivery", "Commercial-ready audio"],
  },
  {
    name: "Performance Ad Management",
    price: "SAR 2,500",
    period: "+ 15% over SAR 5K spend",
    features: ["Campaign optimisation", "Meta / TikTok ad handling", "Performance reporting"],
  },
  {
    name: "Community Management",
    price: "SAR 2,500",
    period: "per platform",
    features: ["Daily audience engagement", "Comment & DM handling", "Brand tone consistency"],
  },
  {
    name: "Additional Revision Round",
    price: "SAR 800",
    period: "per round",
    features: ["Extra creative revisions", "Fast implementation", "Feedback-based refinements"],
  },
];

const arTiers: PricingTier[] = [
  {
    name: "عمل CGI لمرة واحدة",
    price: "٤٬٥٠٠ ر.س",
    period: "لكل مشروع",
    features: ["مشهد CGI عالي الجودة", "يركز على المنتج أو العلامة", "جولتان مراجعة"],
  },
  {
    name: "تصور معماري ثلاثي الأبعاد",
    price: "٢٬٥٠٠ ر.س",
    period: "لكل مشهد",
    features: ["تصيير داخلي / خارجي", "إضاءة ومواد واقعية", "تسعير حسب المشهد"],
  },
  {
    name: "يوم إنتاج كامل",
    price: "٣٬٥٠٠ ر.س",
    period: "في اليوم",
    features: ["إعداد تصوير احترافي", "طاقم كاميرا وإضاءة", "دعم إنتاج في الموقع"],
  },
  {
    name: "إنتاج الشاشة الخضراء",
    price: "٥٬٥٠٠ ر.س",
    period: "في اليوم",
    features: ["إعداد استوديو شاشة خضراء", "جاهز للتركيب المتقدم", "إضاءة وخلفية مشمولة"],
  },
  {
    name: "تعليق صوتي (عربي / إنجليزي)",
    price: "١٬٥٠٠ ر.س",
    period: "لكل مشروع",
    features: ["تعليق عربي أو إنجليزي", "جودة استوديو", "صوت جاهز للإعلانات"],
  },
  {
    name: "إدارة إعلانات الأداء",
    price: "٢٬٥٠٠ ر.س",
    period: "+ ١٥٪ فوق إنفاق ٥ آلاف ر.س",
    features: ["تحسين الحملات", "إدارة إعلانات ميتا / تيك توك", "تقارير الأداء"],
  },
  {
    name: "إدارة المجتمع",
    price: "٢٬٥٠٠ ر.س",
    period: "لكل منصة",
    features: ["تفاعل يومي مع الجمهور", "رد على التعليقات والرسائل", "اتساق نبرة العلامة"],
  },
  {
    name: "جولة مراجعة إضافية",
    price: "٨٠٠ ر.س",
    period: "لكل جولة",
    features: ["مراجعات إبداعية إضافية", "تنفيذ سريع", "تحسينات بناءً على الملاحظات"],
  },
];

const sharedServicesEn: ServiceItem[] = [
  { title: "CGI & VFX", desc: "Hero pieces, product visualisation, brand films." },
  { title: "3D Visualisation", desc: "Architectural fly-throughs, retail and F&B spaces." },
  { title: "Performance Marketing", desc: "Meta and Google paid media. Conversion-led." },
  { title: "Social Content", desc: "Strategy, calendar, content production, community." },
];

const sharedServicesAr: ServiceItem[] = [
  { title: "CGI ومؤثرات بصرية", desc: "أعمال رئيسية، تصور المنتجات، أفلام العلامات." },
  { title: "تصور ثلاثي الأبعاد", desc: "جولات معمارية، مساحات تجزئة ومطاعم." },
  { title: "تسويق الأداء", desc: "إعلانات مدفوعة على ميتا وجوجل. موجهة للتحويل." },
  { title: "محتوى اجتماعي", desc: "استراتيجية، تقويم، إنتاج محتوى، مجتمع." },
];

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      shoots: "View Our Cinematic Shoots",
      plans: "Explore The Plans",
      pricingDeck: "Plan's Pricing Deck",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      langToggle: "عربي",
    },
    hero: {
      intro: "REDLINE VFX — CINEMATIC STUDIO",
      headline: "Cinematic visuals that make brands ",
      headlineHighlight: "impossible to scroll past.",
      sub: "Photoreal CGI, product animation, and premium content for the brands and agencies shaping the next decade in KSA.",
      eyebrow: "A small studio. Senior craft.",
      studioLine: "Redline VFX is a Jeddah-based CGI and marketing studio.",
      teamLine: "Founder-led, three people deep, built around senior production.",
      btnShoots: "View Cinematic Shoots",
      btnPlans: "Explore Plans",
    },
    pricing: {
      label: "Production Plans",
      title: "Mix & Match",
      explorePlans: "Explore The Main Plans",
      clickStart: "Click to start",
      tiers: enTiers,
    },
    cta: {
      eyebrow: "Ready to start",
      headline: "Got a brand worth seeing?",
      headlineHighlight: "Let's make it impossible to miss.",
      sub: "15-min discovery call · No deck · Just your project, our take.",
      whatsapp: "Chat on WhatsApp",
      brief: "Send a Brief →",
      trust: "Jeddah · KSA · Available for remote projects",
    },
    footer: {
      location: "Jeddah, KSA",
      engineered: "Engineered and Developed by",
    },
    shoots: {
      title: "Cinematic ",
      titleHighlight: "Shoots",
      sub: "We craft high-end cinematic visuals, product films, CGI sequences, and brand storytelling that feels like a movie — not marketing.",
      services: [
        ...sharedServicesEn,
        { title: "Motion Design", desc: "High-end 2D/3D motion graphics for brands and campaigns." },
        { title: "AI Creative Production", desc: "AI-driven visuals, concept generation, and hybrid VFX workflows." },
      ],
      showreel: "Showreel 2026",
      showreelDesc1: "A glimpse into our cinematic universe of CGI + real-world visuals.",
      showreelDesc2: "Cinematic storytelling blended with high-end motion visuals.",
      showreelDesc3: "Premium CGI direction, VFX execution, and cinematic production.",
      ctaTitle: "Ready to shoot something impossible?",
      ctaSub: "Let's turn your idea into a cinematic experience.",
      ctaBtn: "Start a Project",
    },
    plansPage: {
      label: "Pricing",
      title: "Five ways to work",
      titleSub: "with us.",
      tableHeaders: ["#", "Plan", "Description", "Price", "Plan Details"],
      popular: "Popular",
      tooltip: "Click for more explanation",
      vatNote: "All prices SAR · VAT-exclusive · 15% applied at invoice.",
      customScope: "Need a custom scope? Talk to us →",
      items: [
        { id: "01", title: "STARTER", type: "CGI RETAINER", desc: "Entry-level monthly. Consistent visual content.", price: "SAR 4,500", sub: "/ month" },
        { id: "02", title: "GROWTH", type: "CGI RETAINER", desc: "Hero CGI plus supporting content. Most clients land here.", price: "SAR 8,500", sub: "/ month", featured: true },
        { id: "03", title: "CAMPAIGN", type: "PROJECT", desc: "One-off. Launches, openings, seasonal pushes.", price: "SAR 18,500", sub: "/ project" },
        { id: "04", title: "FULL FUNNEL", type: "CGI + MARKETING", desc: "Hero creative plus the engine that distributes it.", price: "SAR 14,500", sub: "/ month" },
        { id: "05", title: "GROWTH ENGINE", type: "MARKETING ONLY", desc: "Pure social and performance. Channels run by us.", price: "SAR 5,500", sub: "/ month" },
      ],
    },
    pkg2: {
      explore: "Explore",
      choosePlan: "Choose This Plan →",
      packages: [
        {
          id: "01",
          slug: "01 STARTER - SAR 4,500 / month",
          label: "PACKAGE 01 / CGI RETAINER",
          title: "STARTER",
          price: "SAR 4,500",
          period: "per month",
          description: "Entry-level monthly retainer for brands that need consistent visual content without committing to a full marketing engine.",
          items: ["1 short-form CGI piece per month (up to 15s)", "8 brand stills", "Light post-production on supplied footage", "1 strategy call per month"],
        },
        {
          id: "02",
          slug: "02 GROWTH - SAR 8,500 / month",
          label: "PACKAGE 02 / CGI RETAINER",
          title: "GROWTH",
          price: "SAR 8,500",
          period: "per month",
          description: "Hero CGI plus consistent supporting content. The package most clients land on.",
          items: ["1 hero CGI piece per month (up to 30s)", "3 short-form cutdowns", "12 brand stills", "Light post-production on supplied footage", "Bi-weekly strategy calls"],
        },
        {
          id: "03",
          slug: "03 CAMPAIGN - SAR 18,500 / project",
          label: "PACKAGE 03 / PROJECT",
          title: "CAMPAIGN",
          price: "SAR 18,500",
          period: "per project · 4–6 weeks",
          description: "One-off campaigns. Launches, openings, seasonal pushes.",
          items: ["1 flagship hero CGI / brand film (up to 60s)", "5 short-form cutdowns", "20 stills (key-art and supporting)", "Full creative direction and storyboarding", "Master plus platform-specific cuts"],
        },
        {
          id: "04",
          slug: "04 FULL FUNNEL - SAR 14,500 / month",
          label: "PACKAGE 04 / CGI + MARKETING RETAINER",
          title: "FULL FUNNEL",
          price: "SAR 14,500",
          period: "per month · capped at 3 accounts",
          description: "Hero creative plus the engine that distributes it. One team, one accountable owner.",
          items: ["1 hero CGI piece + 4 cutdowns per month", "Social management on 2 platforms", "Full performance ad management", "12 brand stills + ad creative variants", "Weekly strategy and performance calls"],
        },
        {
          id: "05",
          slug: "05 GROWTH ENGINE - SAR 5,500 / month",
          label: "PACKAGE 05 / MARKETING ONLY",
          title: "GROWTH ENGINE",
          price: "SAR 5,500",
          period: "per month",
          description: "Pure social and performance marketing. For brands with their own content who just need the channels run.",
          items: ["Social management on 2 platforms (12 posts each)", "Full performance ad management on Meta and Google", "Light creative cuts from supplied assets", "Monthly performance report", "Bi-weekly strategy calls"],
        },
      ],
    },
    capabilities: {
      label: "Capabilities",
      title: "What we do",
      services: sharedServicesEn,
    },
    contact: {
      successTitle: "Message Sent",
      successSub: "We'll respond within 24 hours",
      close: "Close",
      headline: "Let's build something ",
      headlineHighlight: "impossible",
      sub: "Have a project in mind? We usually respond within 24 hours.",
      responseTime: "Response Time: 24 Hours",
      vision: "Tell us your vision and we will turn it into cinematic visuals, CGI, and high-impact marketing content.",
      name: "Your Name",
      email: "Your Email",
      countryCode: "Country Code",
      phone: "Phone Number",
      selectPlan: "Select Plan",
      mixMatch: "Mix & Match Services",
      message: "Tell us about your project...",
      send: "Send Message",
      failed: "Failed to send message",
      error: "Something went wrong",
      loading: "Loading...",
      planOptions: [
        { value: "01 STARTER - SAR 4,500 / month", label: "01 Starter - SAR 4,500 / month" },
        { value: "02 GROWTH - SAR 8,500 / month", label: "02 Growth - SAR 8,500 / month" },
        { value: "03 CAMPAIGN - SAR 18,500 / project", label: "03 Campaign - SAR 18,500 / project" },
        { value: "04 FULL FUNNEL - SAR 14,500 / month", label: "04 Full Funnel - SAR 14,500 / month" },
        { value: "05 GROWTH ENGINE - SAR 5,500 / month", label: "05 Growth Engine - SAR 5,500 / month" },
      ],
      mixMatchItems: enTiers.map((t) => ({ name: t.name, price: t.price })),
    },
    loader: { sub: "rendering reality..." },
  },
  ar: {
    nav: {
      shoots: "شاهد تصويرنا السينمائي",
      plans: "استكشف الباقات",
      pricingDeck: "بطاقة أسعار الباقات",
      contact: "تواصل معنا",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      langToggle: "EN",
    },
    hero: {
      intro: "ريدلاين VFX — استوديو سينمائي",
      headline: "مرئيات سينمائية تجعل العلامات ",
      headlineHighlight: "مستحيل تجاهلها.",
      sub: "CGI واقعي، تحريك منتجات، ومحتوى مميز للعلامات والوكالات التي تشكل العقد القادم في المملكة.",
      eyebrow: "استوديو صغير. حرفة كبار.",
      studioLine: "ريدلاين VFX استوديو CGI وتسويق مقره جدة.",
      teamLine: "بقيادة المؤسس، فريق من ثلاثة، مبني على إنتاج بمستوى كبار.",
      btnShoots: "شاهد التصوير السينمائي",
      btnPlans: "استكشف الباقات",
    },
    pricing: {
      label: "خطط الإنتاج",
      title: "امزج وطابق",
      explorePlans: "استكشف الباقات الرئيسية",
      clickStart: "ابدأ الآن",
      tiers: arTiers,
    },
    cta: {
      eyebrow: "جاهز للبدء",
      headline: "لديك علامة تستحق أن تُرى؟",
      headlineHighlight: "لنجعلها مستحيلة التفويت.",
      sub: "مكالمة استكشاف ١٥ دقيقة · بدون عرض · مشروعك ورأينا فقط.",
      whatsapp: "تواصل عبر واتساب",
      brief: "أرسل ملخص المشروع ←",
      trust: "جدة · المملكة · متاح للمشاريع عن بُعد",
    },
    footer: {
      location: "جدة، المملكة",
      engineered: "هندسة وتطوير بواسطة",
    },
    shoots: {
      title: "تصوير ",
      titleHighlight: "سينمائي",
      sub: "نصنع مرئيات سينمائية عالية المستوى، أفلام منتجات، تسلسلات CGI، وسرد علامات يشبه السينما — لا التسويق.",
      services: [
        ...sharedServicesAr,
        { title: "موشن جرافيك", desc: "رسوم متحركة 2D/3D عالية المستوى للعلامات والحملات." },
        { title: "إنتاج إبداعي بالذكاء الاصطناعي", desc: "مرئيات بالذكاء الاصطناعي، توليد أفكار، وسير عمل VFX هجين." },
      ],
      showreel: "ريل ٢٠٢٦",
      showreelDesc1: "لمحة عن عالمنا السينمائي من CGI والمرئيات الواقعية.",
      showreelDesc2: "سرد سينمائي ممزوج بمرئيات موشن عالية المستوى.",
      showreelDesc3: "إخراج CGI مميز، تنفيذ VFX، وإنتاج سينمائي.",
      ctaTitle: "مستعد لتصوير شيء مستحيل؟",
      ctaSub: "لنحوّل فكرتك إلى تجربة سينمائية.",
      ctaBtn: "ابدأ مشروعاً",
    },
    plansPage: {
      label: "الأسعار",
      title: "خمس طرق للعمل",
      titleSub: "معنا.",
      tableHeaders: ["#", "الباقة", "الوصف", "السعر", "تفاصيل الباقة"],
      popular: "الأكثر طلباً",
      tooltip: "انقر لمزيد من التفاصيل",
      vatNote: "جميع الأسعار بالريال · بدون ضريبة · تُطبق ١٥٪ على الفاتورة.",
      customScope: "تحتاج نطاقاً مخصصاً؟ تحدث معنا ←",
      items: [
        { id: "01", title: "STARTER", type: "اشتراك CGI", desc: "شهري للمبتدئين. محتوى مرئي ثابت.", price: "٤٬٥٠٠ ر.س", sub: "/ شهر" },
        { id: "02", title: "GROWTH", type: "اشتراك CGI", desc: "CGI رئيسي مع محتوى داعم. حيث يستقر معظم العملاء.", price: "٨٬٥٠٠ ر.س", sub: "/ شهر", featured: true },
        { id: "03", title: "CAMPAIGN", type: "مشروع", desc: "لمرة واحدة. إطلاقات، افتتاحات، مواسم.", price: "١٨٬٥٠٠ ر.س", sub: "/ مشروع" },
        { id: "04", title: "FULL FUNNEL", type: "CGI + تسويق", desc: "إبداع رئيسي مع محرك التوزيع.", price: "١٤٬٥٠٠ ر.س", sub: "/ شهر" },
        { id: "05", title: "GROWTH ENGINE", type: "تسويق فقط", desc: "سوشيال وأداء فقط. القنوات بإدارتنا.", price: "٥٬٥٠٠ ر.س", sub: "/ شهر" },
      ],
    },
    pkg2: {
      explore: "استكشف",
      choosePlan: "اختر هذه الباقة ←",
      packages: [
        {
          id: "01",
          slug: "01 STARTER - SAR 4,500 / month",
          label: "الباقة ٠١ / اشتراك CGI",
          title: "STARTER",
          price: "٤٬٥٠٠ ر.س",
          period: "شهرياً",
          description: "اشتراك شهري للمبتدئين للعلامات التي تحتاج محتوى مرئياً ثابتاً دون التزام بمحرك تسويق كامل.",
          items: ["قطعة CGI قصيرة شهرياً (حتى ١٥ ث)", "٨ صور ثابتة للعلامة", "مونتاج خفيف على لقطات مقدمة", "مكالمة استراتيجية شهرية"],
        },
        {
          id: "02",
          slug: "02 GROWTH - SAR 8,500 / month",
          label: "الباقة ٠٢ / اشتراك CGI",
          title: "GROWTH",
          price: "٨٬٥٠٠ ر.س",
          period: "شهرياً",
          description: "CGI رئيسي مع محتوى داعم ثابت. الباقة التي يختارها معظم العملاء.",
          items: ["قطعة CGI رئيسية شهرياً (حتى ٣٠ ث)", "٣ مقاطع قصيرة", "١٢ صورة ثابتة", "مونتاج خفيف على لقطات مقدمة", "مكالمات استراتيجية كل أسبوعين"],
        },
        {
          id: "03",
          slug: "03 CAMPAIGN - SAR 18,500 / project",
          label: "الباقة ٠٣ / مشروع",
          title: "CAMPAIGN",
          price: "١٨٬٥٠٠ ر.س",
          period: "لكل مشروع · ٤–٦ أسابيع",
          description: "حملات لمرة واحدة. إطلاقات، افتتاحات، دفعات موسمية.",
          items: ["فيلم CGI / علامة رئيسي (حتى ٦٠ ث)", "٥ مقاطع قصيرة", "٢٠ صورة (رئيسية وداعمة)", "إخراج إبداعي وقصة مصورة كاملة", "نسخة رئيسية وقصص لكل منصة"],
        },
        {
          id: "04",
          slug: "04 FULL FUNNEL - SAR 14,500 / month",
          label: "الباقة ٠٤ / CGI + تسويق",
          title: "FULL FUNNEL",
          price: "١٤٬٥٠٠ ر.س",
          period: "شهرياً · حتى ٣ حسابات",
          description: "إبداع رئيسي مع محرك التوزيع. فريق واحد، مسؤول واحد.",
          items: ["قطعة CGI رئيسية + ٤ مقاطع شهرياً", "إدارة سوشيال على منصتين", "إدارة إعلانات أداء كاملة", "١٢ صورة + متغيرات إعلانية", "مكالمات استراتيجية وأداء أسبوعية"],
        },
        {
          id: "05",
          slug: "05 GROWTH ENGINE - SAR 5,500 / month",
          label: "الباقة ٠٥ / تسويق فقط",
          title: "GROWTH ENGINE",
          price: "٥٬٥٠٠ ر.س",
          period: "شهرياً",
          description: "تسويق سوشيال وأداء فقط. للعلامات التي لديها محتوى وتحتاج إدارة القنوات.",
          items: ["إدارة سوشيال على منصتين (١٢ منشور لكل)", "إدارة إعلانات أداء على ميتا وجوجل", "قصات إبداعية خفيفة من أصول مقدمة", "تقرير أداء شهري", "مكالمات استراتيجية كل أسبوعين"],
        },
      ],
    },
    capabilities: {
      label: "القدرات",
      title: "ماذا نفعل",
      services: sharedServicesAr,
    },
    contact: {
      successTitle: "تم إرسال الرسالة",
      successSub: "سنرد خلال ٢٤ ساعة",
      close: "إغلاق",
      headline: "لنبني شيئاً ",
      headlineHighlight: "مستحيلاً",
      sub: "لديك مشروع في بالك؟ نرد عادة خلال ٢٤ ساعة.",
      responseTime: "وقت الرد: ٢٤ ساعة",
      vision: "أخبرنا برؤيتك ونحوّلها إلى مرئيات سينمائية وCGI ومحتوى تسويقي مؤثر.",
      name: "اسمك",
      email: "بريدك الإلكتروني",
      countryCode: "رمز الدولة",
      phone: "رقم الهاتف",
      selectPlan: "اختر الباقة",
      mixMatch: "خدمات امزج وطابق",
      message: "أخبرنا عن مشروعك...",
      send: "إرسال الرسالة",
      failed: "فشل إرسال الرسالة",
      error: "حدث خطأ ما",
      loading: "جاري التحميل...",
      planOptions: [
        { value: "01 STARTER - SAR 4,500 / month", label: "٠١ Starter - ٤٬٥٠٠ ر.س / شهر" },
        { value: "02 GROWTH - SAR 8,500 / month", label: "٠٢ Growth - ٨٬٥٠٠ ر.س / شهر" },
        { value: "03 CAMPAIGN - SAR 18,500 / project", label: "٠٣ Campaign - ١٨٬٥٠٠ ر.س / مشروع" },
        { value: "04 FULL FUNNEL - SAR 14,500 / month", label: "٠٤ Full Funnel - ١٤٬٥٠٠ ر.س / شهر" },
        { value: "05 GROWTH ENGINE - SAR 5,500 / month", label: "٠٥ Growth Engine - ٥٬٥٠٠ ر.س / شهر" },
      ],
      mixMatchItems: arTiers.map((t) => ({ name: t.name, price: t.price })),
    },
    loader: { sub: "نُصيّر الواقع..." },
  },
};
