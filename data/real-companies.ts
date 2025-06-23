export interface Product {
  id: string
  name: string
  category: string
  price: number
  rating: number
  shortDescription: string
  fullDescription: string
  boomerVerdict: string
  pros: string[]
  cons: string[]
  targetAudience: string
  valueForMoney: number
  features: {
    name: string
    rating: number
  }[]
  realTalkTitle: string
  companyRoast: string
  thingsThatWork: string[]
  thingsThatAreMeh: string[]
  finalJudgement: string
  boomerLogic: string
  officialLink?: string
}

export interface Company {
  id: string
  name: string
  industry: string
  yearsInBusiness: number
  founder: string
  description: string
  website: string
  heritage: string
  businessModel: string
  socialMedia: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
    youtube?: string
  }
  products: Product[]
  boomerRating?: number
  boomerVerdict?: string
}

export const companies: Company[] = [
  {
    id: "jammi",
    name: "Jammi Ayurveda",
    industry: "Healthcare/Ayurveda",
    yearsInBusiness: 127, // Updated to reflect 1897 founding
    founder: "Jammi Family Dynasty (4th Generation)",
    description:
      "127+ years of authentic Ayurvedic wisdom - the OG of Ayurveda since 1897, back when telegrams were trending and a rupee actually got you something.",
    website: "jammi.in",
    heritage:
      "Founded in 1897, this isn't your typical startup trying to reinvent Ayurveda with fancy packaging. Four generations of uninterrupted healing tradition.",
    businessModel: "Full-stack Ayurveda: Clinical practice + Product manufacturing with therapeutic depth",
    boomerRating: 9.2,
    boomerVerdict:
      "When a brand's history is longer than your government's age, it's no longer a product — it's a cultural anchor.",
    socialMedia: {
      facebook: "jammiayurveda",
      instagram: "jammi_ayurveda",
    },
    products: [
      {
        id: "jammi-livercure-complex-forte",
        name: "Livercure Complex Forte",
        category: "Liver Health",
        price: 450,
        rating: 5.0,
        shortDescription:
          "18 herbs of Ayurvedic demolition power targeting everything from fatty liver to full-blown cirrhosis.",
        fullDescription:
          "Not your average herb mix in a bottle—this is 18 herbs of Ayurvedic demolition power targeting Fatty Liver, Jaundice, Hepatitis B & C, Fibrosis, and even full-blown Cirrhosis.",
        boomerVerdict: "Shows up like the retired Army uncle who still jogs at 5am and eats neem for fun.",
        officialLink: "https://jammi.in/livercure-complex-forte",
        pros: [
          "18 authentic Ayurvedic herbs in therapeutic doses",
          "Proven results on Hepatitis B/C, Fibrosis, Cirrhosis",
          "Plays nice with allopathy - reduces synthetic med side effects",
          "Patients recovering in 6 months to 3 years",
          "127 years of clinical refinement behind the formula",
          "No drug fights in your bloodstream",
          "Works when your liver's on vacation from decades of social drinking",
        ],
        cons: [
          "Takes patience - not an overnight miracle",
          "Taste is medicinal (it's medicine, not candy)",
          "Requires consistent use for 6+ months",
          "Not available in fancy Instagram-worthy packaging",
        ],
        targetAudience: "People whose liver has had enough from modern life's spicy food, stress and painkillers",
        valueForMoney: 10,
        features: [
          { name: "Clinical Efficacy", rating: 10 },
          { name: "Ingredient Authenticity", rating: 10 },
          { name: "Safety Profile", rating: 10 },
          { name: "Value for Money", rating: 10 },
          { name: "Packaging", rating: 6 },
        ],
        realTalkTitle: "Liver's Gone Rogue? Call in the Big Guns",
        companyRoast:
          "While others are still busy slapping 'natural' stickers on plastic bottles, Jammi has been doing authentic Ayurveda before it was cool. Back in our day, we didn't have transplants. We had Jammi. And we lived longer.",
        thingsThatWork: [
          "Actual reversal of liver damage in documented cases",
          "Works alongside modern medicine without conflicts",
          "18 herbs in precise therapeutic ratios",
          "Reduces paracetamol abuse damage",
          "127 years of clinical validation",
        ],
        thingsThatAreMeh: [
          "Takes months to show dramatic results",
          "Packaging looks clinical, not Instagram-ready",
          "Taste reminds you it's actual medicine",
        ],
        finalJudgement:
          "Surgery's for the desperate. Livercure is for the wise. 7 reviewers, not a single 'meh' - just full-on liver recovery stories.",
        boomerLogic:
          "5.0/5 - When your liver's weeping from modern life, this shows up like family. Cirrhosis? Transplant? Pffft. Let's not get dramatic.",
      },
      {
        id: "jammi-kumkumadi-serum",
        name: "BeAYUtiful.You Kumkumadi Serum",
        category: "Skincare",
        price: 1200,
        rating: 5.0,
        shortDescription:
          "The Rolls-Royce of face serums with Kashmiri saffron, goat milk, and 22 secret Vedic ingredients.",
        fullDescription:
          "12ml elixir of 12,000 years of beauty wisdom - made with Kashmiri saffron, goat milk, sandalwood, and 22 secret ingredients that sound like they came out of a Vedic Harry Potter book.",
        boomerVerdict: "Royal Ayurvedic treatment without burning your wallet like a Rolls-Royce.",
        officialLink: "https://jammi.in/kumkumadi-serum",
        pros: [
          "Genuine Kashmiri saffron - you can smell the quality",
          "Goat milk and sandalwood in authentic ratios",
          "22 secret Vedic ingredients with 12,000 years of wisdom",
          "Only 3-4 drops needed - lasts forever",
          "Reduces pigmentation and laughter lines",
          "Mother-daughter approved (Parvathi and her mom both glow)",
          "₹1200 vs ₹2000 market rate for similar quality",
        ],
        cons: [
          "Strong authentic herbal scent (not synthetic fragrance)",
          "Takes 4-6 weeks for dramatic results",
          "12ml bottle looks small (but you only need drops)",
          "Not available in every beauty store",
        ],
        targetAudience:
          "Boomers who've seen decades of sun, stress, and soap commercials and learned to spot the real deal",
        valueForMoney: 9,
        features: [
          { name: "Ingredient Authenticity", rating: 10 },
          { name: "Effectiveness", rating: 10 },
          { name: "Value for Money", rating: 9 },
          { name: "Packaging", rating: 7 },
          { name: "User Experience", rating: 9 },
        ],
        realTalkTitle: "Because Your Skin Deserves Royal Treatment (and so do you)",
        companyRoast:
          "This ain't a fairness cream from a TV ad. This is old-school, cold-pressed, goat-milked, saffron-tinged skincare brilliance from people who've been doing beauty before Instagram existed.",
        thingsThatWork: [
          "Skin is clearer and brighter within weeks",
          "Laughter lines actually diminish",
          "Pigmentation reduces visibly",
          "Glowing like haldi kumkum plates",
          "Authentic saffron that you can actually smell",
        ],
        thingsThatAreMeh: [
          "Herbal scent isn't for synthetic fragrance lovers",
          "Small bottle psychology (even though it lasts)",
          "Takes patience for full results",
        ],
        finalJudgement:
          "5.0 star average from 7 totally unfiltered (but possibly glowing) users. When you've seen decades of beauty trends, you learn to spot the real deal.",
        boomerLogic:
          "5.0/5 - You only need 3-4 drops. Not 30. This is 12,000 years of beauty wisdom that actually works, not marketing wisdom that just sells.",
      },
      {
        id: "jammi-ayurvedic-consultation",
        name: "Jammi's Ayurvedic Consultation Clinic",
        category: "Healthcare Services",
        price: 500,
        rating: 4.8,
        shortDescription:
          "The OG Wellness Retreat without the yoga selfies - 127 years of treating everything from jaundice to stress.",
        fullDescription:
          "From juvenile jaundice to cirrhosis, from diabetes to stress, from thyroid to constipation, they've seen it all—and treated it before you could pronounce it.",
        boomerVerdict:
          "This isn't some flash-in-the-pan Insta-ayurveda. This is 127 years of sweat, science, and sambar-fed wisdom.",
        officialLink: "https://jammi.in/consultation",
        pros: [
          "127 years of clinical experience across generations",
          "Treats liver, digestion, anemia, stress, insomnia",
          "Women's & Men's wellness specialization",
          "No side effects or side-eye",
          "Real-time patient feedback refines treatments",
          "Clinical validation stories you can verify",
          "Full-stack Ayurveda from diagnosis to healing",
        ],
        cons: [
          "Requires multiple visits for chronic conditions",
          "Not available in all cities",
          "Appointment scheduling can be challenging",
          "Traditional approach may seem slow to modern patients",
        ],
        targetAudience: "People fatigued by allopathy, especially for chronic and lifestyle conditions",
        valueForMoney: 9,
        features: [
          { name: "Clinical Expertise", rating: 10 },
          { name: "Treatment Efficacy", rating: 9 },
          { name: "Accessibility", rating: 7 },
          { name: "Value for Money", rating: 9 },
          { name: "Patient Care", rating: 9 },
        ],
        realTalkTitle: "The OG Wellness Retreat (Without the Yoga Selfies)",
        companyRoast:
          "While the rest of the world is popping pills and googling 'natural cures,' you could just book an appointment at Jammi's. They've been treating patients since before Google existed.",
        thingsThatWork: [
          "Actual diagnosis and personalized treatment plans",
          "Clinical practice validates their product formulations",
          "Treats root causes, not just symptoms",
          "Documented success with chronic conditions",
          "Four generations of refined clinical wisdom",
        ],
        thingsThatAreMeh: [
          "Traditional pace doesn't suit instant-gratification seekers",
          "Limited clinic locations",
          "Requires commitment to full treatment cycles",
        ],
        finalJudgement:
          "This is living Ayurveda, not wellness theater. Full-stack healthcare with lifecycle engagement from diagnosis to healing.",
        boomerLogic:
          "4.8/5 - You can follow trends, or you can follow tradition that actually works. We'll take Jammi, our liver and our glowing skin, thank you very much.",
      },
    ],
  },
  {
    id: "k7-computing",
    name: "K7 Computing",
    industry: "Cybersecurity/Software",
    yearsInBusiness: 32,
    founder: "J Kesavardhanan (India's First Ethical Hacker)",
    description:
      "32+ years of real cybersecurity by people who were fighting viruses before the world got obsessed with going viral.",
    website: "https://www.k7computing.com",
    heritage:
      "Started in 1991 by India's first ethical hacker, fighting Trojans before your kids learned about the Greeks.",
    businessModel:
      "Comprehensive cybersecurity solutions covering home users, SMBs, enterprises, and defense segments with 25 million+ users globally",
    socialMedia: {
      twitter: "k7computing",
      linkedin: "k7-computing-private-limited",
    },
    boomerRating: 8.9,
    boomerVerdict:
      "Would've been 9.5 but lost points for not bragging enough. Come on guys, at least flex a bit on social media. It's 2025, not 1999.",
    products: [
      {
        id: "k7-total-security",
        name: "K7 Total Security",
        category: "Antivirus Software",
        price: 1299,
        rating: 5.0,
        shortDescription:
          "You don't need to be tech-savvy to be virus-safe. This thing installs faster than a filter coffee brews.",
        fullDescription:
          "All-in-one protection covering viruses, malware, phishing, spyware with clean UI and no fancy-pants animations.",
        boomerVerdict: "Set it, forget it, and stop asking your nephew to 'fix your computer.'",
        officialLink: "https://www.k7computing.com/en/home-users/k7-total-security",
        pros: [
          "Clean UI, no fancy-pants animations, just solid shields",
          "Cheaper than your Spotify subscription, more useful than half your apps",
          "Low system resource usage",
          "Excellent malware detection rates",
          "No annoying pop-ups every 5 minutes",
          "Good customer support",
          "Reasonable annual pricing",
        ],
        cons: [
          "Interface looks a bit dated",
          "Some advanced features are hidden",
          "Not as well-known as international brands",
          "Limited marketing presence",
        ],
        targetAudience: "People who want protection without the drama",
        valueForMoney: 10,
        features: [
          { name: "Malware Protection", rating: 10 },
          { name: "System Performance", rating: 9 },
          { name: "User Interface", rating: 8 },
          { name: "Customer Support", rating: 9 },
          { name: "Value for Money", rating: 10 },
        ],
        realTalkTitle: "Antivirus That Actually Does Its Job Quietly",
        companyRoast:
          "K7 has been protecting computers since before most people knew what a virus was. While others are busy with flashy interfaces and celebrity endorsements, K7 just keeps your computer safe. Boring? Yes. Effective? Absolutely.",
        thingsThatWork: [
          "Catches threats without false alarms",
          "Doesn't slow down your computer",
          "Updates happen automatically without fuss",
          "Price won't break the bank",
        ],
        thingsThatAreMeh: [
          "Interface could use a modern makeover",
          "Brand recognition is low",
          "Some features are not intuitive to find",
        ],
        finalJudgement: "If you want antivirus that works without the theatrics, K7 is your answer.",
        boomerLogic:
          "5.0/5 - Does the job efficiently, doesn't cost a fortune, and doesn't annoy you. What more do you need?",
      },
      {
        id: "k7-endpoint-security",
        name: "K7 Endpoint Security",
        category: "Enterprise Security",
        price: 2500,
        rating: 4.5,
        shortDescription:
          "Don't wait till ransomware hits your accounts team. Lock it up before your data gets robbed by someone in flip-flops and a laptop in Ukraine.",
        fullDescription:
          "Centralized console, threat intelligence, endpoint protection, encryption for enterprises and SMBs.",
        boomerVerdict: "Sleep better knowing your business isn't being peeped into.",
        officialLink: "https://www.k7computing.com/en/business-users/endpoint-security",
        pros: [
          "Centralized console for easy management",
          "Advanced threat intelligence",
          "Comprehensive endpoint protection",
          "Built-in encryption capabilities",
          "Easy for your IT guy to manage",
          "Even easier for the boomer boss to monitor",
          "Light on system resources",
        ],
        cons: [
          "Higher price point for small businesses",
          "Requires some technical knowledge for setup",
          "Limited customization options",
          "Documentation could be more comprehensive",
        ],
        targetAudience: "Businesses that don't want to become ransomware statistics",
        valueForMoney: 8,
        features: [
          { name: "Threat Protection", rating: 9 },
          { name: "Management Console", rating: 8 },
          { name: "System Performance", rating: 9 },
          { name: "Ease of Use", rating: 8 },
          { name: "Value for Money", rating: 8 },
        ],
        realTalkTitle: "Enterprise Security That Actually Protects Your Business",
        companyRoast:
          "While other enterprise security companies are busy creating fancy dashboards that look impressive in boardroom presentations, K7 focuses on actually stopping the bad guys.",
        thingsThatWork: [
          "Centralized management saves IT headaches",
          "Actually stops threats before they become problems",
          "Doesn't slow down business operations",
          "Reasonable pricing for enterprise features",
        ],
        thingsThatAreMeh: [
          "Setup requires some technical expertise",
          "Interface could be more intuitive",
          "Limited marketing means less awareness",
        ],
        finalJudgement:
          "If you want enterprise security that works without the enterprise price tag drama, this is it.",
        boomerLogic: "4.5/5 - Protects your business without breaking your budget. That's smart business.",
      },
      {
        id: "k7-mobile-security-android",
        name: "K7 MobiTrack + Mobile Security for Android",
        category: "Mobile Security",
        price: 399,
        rating: 4.0,
        shortDescription: "If your phone is smarter than you, protect it smarter too.",
        fullDescription: "Anti-theft, App Lock, Parental Control, Web Protection for Android devices.",
        boomerVerdict: "Peace of mind in your pocket. Or your handbag. Or your belt clip. We don't judge.",
        officialLink: "https://www.k7computing.com/en/home-users/k7-mobile-security",
        pros: [
          "Anti-theft features that actually work",
          "App Lock keeps nosy apps under control",
          "Parental Control for responsible parenting",
          "Web Protection stops spam",
          "Minimal battery drain",
          "Clean, simple interface",
        ],
        cons: [
          "Android-only limits the market",
          "Some features require root access",
          "Limited advanced features compared to premium options",
          "Customer support could be faster",
        ],
        targetAudience: "Android users who want basic but effective mobile security",
        valueForMoney: 8,
        features: [
          { name: "Anti-theft Protection", rating: 8 },
          { name: "App Security", rating: 8 },
          { name: "Battery Usage", rating: 9 },
          { name: "User Interface", rating: 7 },
          { name: "Value for Money", rating: 8 },
        ],
        realTalkTitle: "Mobile Security That Doesn't Kill Your Phone",
        companyRoast:
          "K7 understands that mobile security shouldn't turn your phone into a brick. While other apps are busy showing you colorful charts about threats, K7 just quietly does its job.",
        thingsThatWork: [
          "Battery life remains normal",
          "Anti-theft features work as advertised",
          "No constant notifications",
          "Easy to set up and forget",
        ],
        thingsThatAreMeh: [
          "Feature set is basic compared to premium options",
          "Android-only limits market",
          "Some advanced users might want more control",
        ],
        finalJudgement: "Solid mobile security for people who want protection without complications.",
        boomerLogic: "4.0/5 - Protects your phone without making it unusable. Simple concept, well executed.",
      },
      {
        id: "k7-mobile-security-ios",
        name: "K7 MobiTrack + Mobile Security for iOS",
        category: "Mobile Security",
        price: 499,
        rating: 3.8,
        shortDescription: "Advanced protection for Apple iOS devices that doesn't pretend to do more than iOS allows.",
        fullDescription: "Specialized security features for iOS devices within Apple's security framework.",
        boomerVerdict: "Works within Apple's walled garden without trying to break down the walls.",
        officialLink: "https://www.k7computing.com/en/home-users/k7-mobile-security",
        pros: [
          "Respects iOS security model",
          "Good web protection features",
          "Minimal system impact",
          "Clean interface design",
          "Reasonable pricing for iOS security",
        ],
        cons: [
          "Limited features due to iOS restrictions",
          "Can't do as much as Android version",
          "Higher price than Android version",
          "Some features require specific iOS versions",
        ],
        targetAudience: "iPhone users who want additional security within iOS limitations",
        valueForMoney: 7,
        features: [
          { name: "Web Protection", rating: 8 },
          { name: "System Integration", rating: 7 },
          { name: "Battery Usage", rating: 9 },
          { name: "User Interface", rating: 8 },
          { name: "Value for Money", rating: 7 },
        ],
        realTalkTitle: "iOS Security That Knows Its Limits",
        companyRoast:
          "K7 doesn't promise to turn your iPhone into something it's not. They work within Apple's rules to give you what protection is actually possible.",
        thingsThatWork: [
          "Web protection is solid",
          "Doesn't interfere with iOS functionality",
          "Battery impact is minimal",
          "Interface fits iOS design language",
        ],
        thingsThatAreMeh: [
          "Limited features compared to Android",
          "Higher price for fewer features",
          "iOS restrictions limit effectiveness",
        ],
        finalJudgement: "Good iOS security within the constraints Apple imposes.",
        boomerLogic: "3.8/5 - Does what it can within iOS limits. Not K7's fault that Apple is controlling.",
      },
    ],
  },
  {
    id: "organic-shandy",
    name: "Organic Shandy",
    industry: "Organic Food",
    yearsInBusiness: 25,
    founder: "Murali (The OG Farm Whisperer) & Hari Sethuraman (IITian turned Nature Lover)",
    description:
      "25+ years of making organic feel original again - because you shouldn't need a PhD in chemistry to eat a tomato.",
    website: "https://organicshandy.com",
    heritage:
      "Started organic farming when people thought they were crazy for avoiding chemicals. Now they're the organic vigilantes Chennai deserves.",
    businessModel: "Farm-to-fork organic marketplace with real farmer relationships and zero middlemen mafia",
    boomerRating: 4.8,
    boomerVerdict:
      "Not just a store — it's a movement wrapped in moringa leaves. If you're in Chennai and not buying from Organic Shandy, you're just chewing regrets.",
    socialMedia: {
      instagram: "organicshandy",
      facebook: "organicshandy",
    },
    products: [
      {
        id: "organic-shandy-veggies-greens",
        name: "Organic Veggies & Greens",
        category: "Fresh Vegetables",
        price: 150,
        rating: 5.0,
        shortDescription:
          "Every keerai here has been touched by sunlight and NOT by chemical labs. Even the palak doesn't look depressed.",
        fullDescription:
          "Fresh organic vegetables and greens sourced directly from trusted farmers. Murali probably knows each spinach plant by name.",
        boomerVerdict:
          "No wilted leaves masquerading as 'organic.' Just actual greens that taste like they used to in 1965.",
        pros: [
          "Pesticide-free and chemical-free",
          "Fresh from farm with no middlemen",
          "Seasonal variety ensures peak nutrition",
          "Tastes like vegetables used to taste",
          "Direct farmer relationships",
          "No artificial ripening or preservation",
        ],
        cons: [
          "Seasonal availability means limited variety sometimes",
          "Higher price than conventional vegetables",
          "Shorter shelf life than chemically treated produce",
          "Limited to Chennai delivery area",
        ],
        targetAudience: "Health-conscious families who remember what real vegetables taste like",
        valueForMoney: 9,
        features: [
          { name: "Organic Certification", rating: 10 },
          { name: "Freshness", rating: 10 },
          { name: "Taste Quality", rating: 10 },
          { name: "Value for Money", rating: 9 },
          { name: "Variety", rating: 8 },
        ],
        realTalkTitle: "Vegetables That Actually Taste Like Vegetables",
        companyRoast:
          "While others are busy putting 'organic' stickers on everything, Organic Shandy actually walks the farms and talks to the farmers. Revolutionary concept in today's world.",
        thingsThatWork: [
          "Vegetables taste like they're supposed to",
          "No chemical aftertaste or weird textures",
          "Seasonal variety keeps things interesting",
          "Direct farmer sourcing ensures quality",
          "Fresh delivery system works well",
        ],
        thingsThatAreMeh: [
          "Seasonal stock changes (good thing, but we want mangoes year-round)",
          "Price premium over conventional vegetables",
          "Limited delivery area",
        ],
        finalJudgement:
          "If you want to remember what vegetables used to taste like before chemicals took over, this is your answer.",
        boomerLogic: "5.0/5 - Vegetables that don't need a chemistry degree to understand. Simple as that.",
      },
      {
        id: "organic-shandy-fruits",
        name: "Organic Fruits",
        category: "Fresh Fruits",
        price: 200,
        rating: 4.0,
        shortDescription:
          "Bananas that taste like… bananas. Not like latex gloves with sugar injections. Revolutionary.",
        fullDescription: "Seasonal organic fruits that ripen naturally and taste like nature intended them to.",
        boomerVerdict:
          "Only deducted 1 star because the seasonal stock keeps changing (yes, it's a good thing, but we're boomers, we want mangoes year-round 😤).",
        pros: [
          "Natural ripening process",
          "No artificial sweeteners or preservatives",
          "Seasonal variety ensures peak flavor",
          "Direct from farm freshness",
          "No chemical coating or wax",
          "Authentic fruit flavors",
        ],
        cons: [
          "Seasonal availability limits year-round access",
          "Higher price than conventional fruits",
          "Shorter shelf life",
          "Limited exotic fruit varieties",
        ],
        targetAudience: "People who remember when fruits had actual flavor",
        valueForMoney: 8,
        features: [
          { name: "Natural Ripening", rating: 10 },
          { name: "Taste Quality", rating: 9 },
          { name: "Freshness", rating: 9 },
          { name: "Value for Money", rating: 8 },
          { name: "Year-round Availability", rating: 6 },
        ],
        realTalkTitle: "Fruits That Taste Like Fruits (Imagine That!)",
        companyRoast:
          "In a world where bananas taste like plastic and apples are waxed to perfection, Organic Shandy delivers fruits that actually have flavor. What a concept!",
        thingsThatWork: [
          "Fruits taste authentic and natural",
          "No weird chemical aftertaste",
          "Proper ripening means better nutrition",
          "Seasonal variety keeps things fresh",
        ],
        thingsThatAreMeh: [
          "Seasonal stock changes mean no mangoes in winter",
          "Price is higher than supermarket fruits",
          "Limited exotic varieties",
        ],
        finalJudgement: "If you want fruits that taste like they're supposed to, deal with the seasonal limitations.",
        boomerLogic:
          "4.0/5 - Great fruits, but we're docking points for making us wait for mango season like civilized people.",
      },
      {
        id: "organic-shandy-grains",
        name: "Organic Rice, Millets & Grains",
        category: "Grains & Cereals",
        price: 180,
        rating: 5.0,
        shortDescription: "Sir, if rice had an MBA, this is the Ivy League batch.",
        fullDescription:
          "From Kullakar to Kodo, every grain is polished by wind, not by machines. They've made millets cool again.",
        boomerVerdict: "Even your WhatsApp-forward uncle is now a millet ambassador.",
        pros: [
          "Traditional varieties preserved",
          "Wind-polished, not machine-processed",
          "Complete range from rice to exotic millets",
          "No artificial polishing or coating",
          "Authentic taste and nutrition",
          "Made millets trendy again",
          "Proper storage and packaging",
        ],
        cons: [
          "Takes longer to cook than processed grains",
          "Higher price than commercial brands",
          "Some varieties need soaking time",
          "Limited availability of certain traditional varieties",
        ],
        targetAudience: "Health-conscious people who want authentic grains without the processing drama",
        valueForMoney: 9,
        features: [
          { name: "Grain Quality", rating: 10 },
          { name: "Traditional Varieties", rating: 10 },
          { name: "Processing Method", rating: 10 },
          { name: "Value for Money", rating: 9 },
          { name: "Convenience", rating: 7 },
        ],
        realTalkTitle: "Grains That Haven't Forgotten Their Roots",
        companyRoast:
          "While the world is busy making instant everything, Organic Shandy preserves grains the way they were meant to be. Slow food for fast times.",
        thingsThatWork: [
          "Grains taste authentic and wholesome",
          "Traditional varieties you can't find elsewhere",
          "Proper processing maintains nutrition",
          "Made millets accessible and appealing",
          "Quality packaging preserves freshness",
        ],
        thingsThatAreMeh: [
          "Cooking time is longer than instant varieties",
          "Price premium over commercial grains",
          "Some varieties need advance planning",
        ],
        finalJudgement: "If you want grains that remember what they're supposed to be, this is your source.",
        boomerLogic: "5.0/5 - Grains with integrity. Even the rice has more character than most people.",
      },
      {
        id: "organic-shandy-pickles-oils",
        name: "Pickles, Oils, Spices & Podi",
        category: "Condiments & Spices",
        price: 250,
        rating: 5.0,
        shortDescription: "The ginger pickle slapped harder than 1980s parenting.",
        fullDescription:
          "Every podi tastes like grandma came back for one final culinary mic drop. Cold-pressed oils, zero bitterness — only tears of joy.",
        boomerVerdict: "Chemical-free flavor bombs that make your taste buds remember what they're for.",
        pros: [
          "Authentic traditional recipes",
          "Cold-pressed oils with no bitterness",
          "Spices that actually have flavor",
          "Pickles that pack a punch",
          "No artificial preservatives",
          "Grandma-level quality",
          "Proper fermentation and aging",
        ],
        cons: [
          "Limited shelf life compared to commercial products",
          "Higher price than mass-produced alternatives",
          "Strong flavors might overwhelm modern palates",
          "Limited variety compared to commercial brands",
        ],
        targetAudience: "People who remember when pickles were made at home and spices had actual flavor",
        valueForMoney: 9,
        features: [
          { name: "Authenticity", rating: 10 },
          { name: "Flavor Intensity", rating: 10 },
          { name: "Traditional Methods", rating: 10 },
          { name: "Value for Money", rating: 9 },
          { name: "Shelf Life", rating: 7 },
        ],
        realTalkTitle: "Condiments That Actually Condition Your Taste Buds",
        companyRoast:
          "In a world of artificial flavors and chemical preservatives, Organic Shandy delivers condiments that taste like they came from your grandmother's kitchen. If your grandmother was a culinary genius.",
        thingsThatWork: [
          "Flavors are authentic and intense",
          "Traditional preparation methods preserved",
          "No chemical aftertaste",
          "Quality ingredients make the difference",
          "Proper fermentation creates complex flavors",
        ],
        thingsThatAreMeh: [
          "Shorter shelf life than commercial products",
          "Price premium for authentic quality",
          "Limited variety compared to mass market",
        ],
        finalJudgement:
          "If you want condiments that actually enhance your food instead of masking it, this is the real deal.",
        boomerLogic:
          "5.0/5 - Pickles that pickle properly and oils that oil authentically. Revolutionary concepts in 2025.",
      },
      {
        id: "organic-shandy-personal-care",
        name: "Personal & Home Care",
        category: "Natural Care Products",
        price: 300,
        rating: 4.0,
        shortDescription: "Even the soap smells like it went to gurukulam.",
        fullDescription:
          "Chemical-free, guilt-free personal and home care products. Your bathroom will smell like a forest retreat, not like a detergent lab.",
        boomerVerdict: "Natural care products that care about you and the environment.",
        pros: [
          "Chemical-free formulations",
          "Natural ingredients only",
          "Environmentally friendly",
          "No harsh synthetic fragrances",
          "Gentle on skin and surfaces",
          "Biodegradable packaging",
        ],
        cons: [
          "Limited variety compared to commercial brands",
          "Higher price than conventional products",
          "Natural fragrances may be too subtle for some",
          "Shorter shelf life than chemical alternatives",
        ],
        targetAudience: "People who want to clean themselves and their homes without poisoning the planet",
        valueForMoney: 8,
        features: [
          { name: "Natural Ingredients", rating: 10 },
          { name: "Environmental Impact", rating: 9 },
          { name: "Effectiveness", rating: 8 },
          { name: "Value for Money", rating: 8 },
          { name: "Variety", rating: 7 },
        ],
        realTalkTitle: "Personal Care That Actually Cares",
        companyRoast:
          "While other brands are busy creating 47 different variants of the same chemical soup, Organic Shandy focuses on products that work without destroying your skin or the environment.",
        thingsThatWork: [
          "Gentle on skin and environment",
          "Natural fragrances are pleasant",
          "No harsh chemical reactions",
          "Biodegradable and sustainable",
        ],
        thingsThatAreMeh: [
          "Limited product range",
          "Price premium for natural ingredients",
          "Natural fragrances may be too mild",
        ],
        finalJudgement: "If you want personal care products that don't require a hazmat suit to use, this works.",
        boomerLogic:
          "4.0/5 - Clean products that actually clean without the chemical warfare. Simple concept, well executed.",
      },
    ],
  },
  {
    id: "music-temple",
    name: "Music Temple",
    industry: "Creative/Education",
    yearsInBusiness: 15,
    founder: "Ramesh Vinayakam",
    description: "IIT-incubated music education platform that actually teaches music, not just sells courses.",
    website: "musictemple.in",
    heritage: "Founded by a musician who understands both technology and traditional music education.",
    businessModel: "Online music education with innovative notation system and personalized learning",
    socialMedia: {
      youtube: "musictempleindia",
      facebook: "musictemple",
    },
    products: [
      {
        id: "music-temple-gbns-system",
        name: "GBNS Music Notation System",
        category: "Music Education",
        price: 2500,
        rating: 4.2,
        shortDescription: "Music notation system that makes sense to Indian musicians.",
        fullDescription:
          "Innovative music notation system designed specifically for Indian classical and contemporary music.",
        boomerVerdict: "Finally, someone who understands that Western notation doesn't work for everything.",
        pros: [
          "Intuitive for Indian music styles",
          "Comprehensive learning materials",
          "Good instructor support",
          "Innovative approach to notation",
          "Suitable for all skill levels",
        ],
        cons: [
          "Learning curve for traditional musicians",
          "Limited adoption in music schools",
          "Price point is on the higher side",
          "Requires dedicated practice time",
        ],
        targetAudience: "Serious music students and teachers looking for better notation methods",
        valueForMoney: 7,
        features: [
          { name: "Innovation", rating: 9 },
          { name: "Learning Materials", rating: 8 },
          { name: "Instructor Support", rating: 8 },
          { name: "Value for Money", rating: 7 },
          { name: "Ease of Learning", rating: 7 },
        ],
        realTalkTitle: "Music Notation That Actually Makes Sense",
        companyRoast:
          "Music Temple is trying to solve a real problem - Western notation for Indian music is like using chopsticks to eat soup. It works, but there's got to be a better way.",
        thingsThatWork: [
          "Notation system is logical and intuitive",
          "Good support materials",
          "Instructor guidance is helpful",
          "Innovative approach to old problems",
        ],
        thingsThatAreMeh: [
          "Takes time to unlearn old habits",
          "Price is steep for individual learners",
          "Limited market adoption so far",
        ],
        finalJudgement:
          "If you're serious about Indian music education, this is worth considering despite the learning curve.",
        boomerLogic: "4.2/5 - Innovative solution to a real problem, but needs time to prove itself in the market.",
      },
    ],
  },
  {
    id: "watsan",
    name: "Watsan Envirotech",
    industry: "CleanTech/Water",
    yearsInBusiness: 20,
    founder: "Chandrashekar (Environmental Engineers Collective)",
    description: "20+ years of making water actually clean, not just clear.",
    website: "watsan.in",
    heritage: "Started by engineers who were tired of seeing water treatment as an afterthought.",
    businessModel: "Industrial and residential water treatment solutions with focus on sustainability",
    socialMedia: {
      linkedin: "watsan-envirotech",
    },
    boomerRating: 5.0,
    boomerVerdict: "If you want the water mafia to lose, and real solutions to win, support Watsan!",
    products: [
      {
        id: "watsan-home-ro-system",
        name: "WatSan Home RO System",
        category: "Water Purification",
        price: 12500,
        rating: 4.1,
        shortDescription: "RO system that purifies water without wasting half of it.",
        fullDescription: "Advanced reverse osmosis system with water recovery technology and mineral retention.",
        boomerVerdict: "Water purifier that actually thinks about water conservation.",
        pros: [
          "High water recovery rate",
          "Retains essential minerals",
          "Durable build quality",
          "Good after-sales service",
          "Energy efficient operation",
        ],
        cons: [
          "Higher upfront cost",
          "Installation requires professional help",
          "Replacement filters are expensive",
          "Takes up considerable space",
        ],
        targetAudience: "Environmentally conscious families who want pure water without waste",
        valueForMoney: 7,
        features: [
          { name: "Water Quality", rating: 9 },
          { name: "Water Recovery", rating: 8 },
          { name: "Build Quality", rating: 8 },
          { name: "Value for Money", rating: 7 },
          { name: "Service Support", rating: 8 },
        ],
        realTalkTitle: "RO System That Doesn't Waste Water Like Crazy",
        companyRoast:
          "Watsan actually cares about water conservation, unlike most RO companies who act like water is infinite. Revolutionary thinking in the water purification industry.",
        thingsThatWork: [
          "Water tastes clean without being flat",
          "Doesn't waste as much water as typical RO systems",
          "Build quality feels solid",
          "Service team knows their stuff",
        ],
        thingsThatAreMeh: [
          "Price makes you think twice",
          "Installation is a bit complex",
          "Filter replacement costs add up",
        ],
        finalJudgement: "If you want clean water without the environmental guilt, this is worth the investment.",
        boomerLogic: "4.1/5 - Expensive but responsible. Sometimes doing the right thing costs more.",
      },
      {
        id: "watsan-green-sanitation",
        name: "Watsan Green Sanitation Solutions",
        category: "Sanitation",
        price: 25000,
        rating: 5.0,
        shortDescription: "Toilets built in 2 days that last longer than most political promises.",
        fullDescription:
          "Eco-friendly, theft-proof, modular sanitation systems for schools, villages, and remote areas.",
        boomerVerdict:
          "Finally, a toilet that doesn't cost more than a motorbike and doesn't vanish after the ribbon-cutting ceremony.",
        pros: [
          "Built from recycled materials",
          "Theft-proof design",
          "Modular and scalable",
          "Quick 2-day installation",
          "Ideal for schools and villages",
          "Disaster zone ready",
          "Respects dignity",
        ],
        cons: [
          "Higher upfront cost than basic alternatives",
          "Requires proper site preparation",
          "Limited availability in some regions",
          "Maintenance training needed",
        ],
        targetAudience: "Schools, villages, remote camps, and disaster relief organizations",
        valueForMoney: 9,
        features: [
          { name: "Durability", rating: 10 },
          { name: "Eco-friendliness", rating: 10 },
          { name: "Installation Speed", rating: 9 },
          { name: "Value for Money", rating: 9 },
          { name: "Maintenance", rating: 8 },
        ],
        realTalkTitle: "Sanitation That Actually Works for Real India",
        companyRoast:
          "While elite brands propose ₹60,000 designer loos for 'rural rejuvenation,' Watsan delivers real toilets to real people — for the price of a team lunch.",
        thingsThatWork: [
          "Actually gets built and stays built",
          "Works in tough rural conditions",
          "Respects user dignity",
          "Environmentally responsible",
          "Cost-effective for communities",
        ],
        thingsThatAreMeh: [
          "Not Instagram-worthy design",
          "Requires community buy-in",
          "Initial cost can be challenging for some",
        ],
        finalJudgement: "Real sanitation for real people. No gimmicks, just dignity and functionality.",
        boomerLogic: "5.0/5 - Makes 'Swachh Bharat' feel like an actual thing, not just a slogan.",
      },
      {
        id: "watsan-community-purifier",
        name: "Watsan Community Water Purifiers",
        category: "Community Water Systems",
        price: 75000,
        rating: 5.0,
        shortDescription: "From 50 LPH to 2500 LPH - built for Bharat, not just metro cities.",
        fullDescription: "Community-level water purification systems with Water on Wheels and Water ATW solutions.",
        boomerVerdict:
          "One of the rare community projects that doesn't just 'raise awareness' — it raises water quality.",
        pros: [
          "Scalable from 50 to 2500 LPH",
          "No electricity required",
          "Jal Shakti Ministry endorsed",
          "Includes Water on Wheels",
          "Water ATW (Any Time Water) systems",
          "Built for Indian conditions",
          "Community-focused design",
        ],
        cons: [
          "High initial investment",
          "Requires community coordination",
          "Maintenance needs training",
          "Limited technical support in remote areas",
        ],
        targetAudience: "Villages, apartment complexes, schools, and community organizations",
        valueForMoney: 8,
        features: [
          { name: "Scalability", rating: 10 },
          { name: "Reliability", rating: 9 },
          { name: "Community Impact", rating: 10 },
          { name: "Value for Money", rating: 8 },
          { name: "Maintenance", rating: 7 },
        ],
        realTalkTitle: "Community Water Solutions That Actually Work",
        companyRoast:
          "Your apartment association can't agree on whether to put a gate? Watsan can install a community-level purifier before they finish debating.",
        thingsThatWork: [
          "Serves entire communities reliably",
          "Works without electricity",
          "Government endorsed technology",
          "Portable solutions available",
          "Scales to community needs",
        ],
        thingsThatAreMeh: [
          "Requires significant upfront investment",
          "Community coordination can be challenging",
          "Technical support limited in remote areas",
        ],
        finalJudgement: "For communities serious about clean water access, this is the real deal.",
        boomerLogic: "5.0/5 - Hydration for all. Not just the chosen few with pin codes ending in 001.",
      },
      {
        id: "watsan-travel-purifier",
        name: "Watsan Travel Purifiers",
        category: "Portable Water Purification",
        price: 2500,
        rating: 5.0,
        shortDescription: "Because drinking plastic-flavored water is sooo 2023.",
        fullDescription: "Portable water purifiers that filter microplastics and pathogens while saving the planet.",
        boomerVerdict: "Finally, a travel buddy that doesn't nag or charge you ₹40 at a highway dhaba.",
        pros: [
          "Fits in your bag",
          "Filters microplastics and pathogens",
          "Saves money on bottled water",
          "Environmentally responsible",
          "No recurring costs",
          "Works anywhere",
          "Guilt-free hydration",
        ],
        cons: [
          "Still in development phase",
          "Limited availability",
          "Requires regular cleaning",
          "Not suitable for heavily contaminated water",
        ],
        targetAudience: "Frequent travelers tired of buying plastic water bottles",
        valueForMoney: 9,
        features: [
          { name: "Portability", rating: 10 },
          { name: "Filtration Efficiency", rating: 9 },
          { name: "Environmental Impact", rating: 10 },
          { name: "Value for Money", rating: 9 },
          { name: "Ease of Use", rating: 8 },
        ],
        realTalkTitle: "Travel Purification for the Conscious Traveler",
        companyRoast:
          "One litre = 240,000 plastic particles, and that's before the bottle hits your car's AC vent and melts into a biohazard. Watsan's travel purifiers are poised to kill the bottled water industry.",
        thingsThatWork: [
          "Eliminates need for plastic bottles",
          "Filters out harmful microplastics",
          "Portable and convenient",
          "Cost-effective for frequent travelers",
          "Environmentally responsible choice",
        ],
        thingsThatAreMeh: ["Still in coming soon phase", "Limited to certain water sources", "Requires maintenance"],
        finalJudgement: "The future of guilt-free travel hydration. Bring it on!",
        boomerLogic: "5.0/5 - Future of guilt-free hydration — bring it on!",
      },
    ],
  },
  {
    id: "milky-mist",
    name: "Milky Mist",
    industry: "Dairy/Food",
    yearsInBusiness: 39,
    founder: "T. Sathish Kumar (The 16-Year-Old Dropout Who Built a Dairy Empire)",
    description:
      "39+ years of turning milk into magic - from a failing family business in Erode to India's most trusted dairy brand.",
    website: "https://www.milkymist.com",
    heritage:
      "Started in 1985 when a 16-year-old dropped out of school to save his father's failing milk business. Now they're teaching MBAs how to build empires.",
    businessModel:
      "Full-stack dairy operations: Own farms, processing plants, cold chain logistics, and retail distribution with German technology and Indian heart",
    boomerRating: 4.9,
    boomerVerdict:
      "When a school dropout builds a better dairy empire than most engineering graduates, you know this is the real deal. Respect.",
    socialMedia: {
      facebook: "milkymistdairy",
      instagram: "milkymist_official",
      youtube: "milkymistdairy",
    },
    products: [
      {
        id: "milky-mist-paneer",
        name: "Milky Mist Fresh Paneer",
        category: "Dairy Products",
        price: 120,
        rating: 4.8,
        shortDescription: "The paneer that made South India forget that paneer was a North Indian thing.",
        fullDescription:
          "Fresh, soft paneer made with German technology and traditional Indian taste. The flagship product that built the Milky Mist empire.",
        boomerVerdict:
          "This is what paneer should taste like - soft, fresh, and without that rubbery texture that makes you question your life choices.",
        officialLink: "https://www.milkymist.com/products/paneer",
        pros: [
          "Consistently soft and fresh texture",
          "No preservatives or artificial additives",
          "German technology ensures quality",
          "Available across South India",
          "Doesn't turn rubbery when cooked",
          "Proper packaging maintains freshness",
          "Made from pure milk, not powder",
        ],
        cons: [
          "Shorter shelf life than processed alternatives",
          "Price premium over local brands",
          "Limited availability outside South India",
          "Requires refrigeration at all times",
        ],
        targetAudience: "Home cooks who want restaurant-quality paneer without the restaurant prices",
        valueForMoney: 9,
        features: [
          { name: "Freshness", rating: 10 },
          { name: "Texture Quality", rating: 9 },
          { name: "Taste", rating: 9 },
          { name: "Value for Money", rating: 9 },
          { name: "Availability", rating: 8 },
        ],
        realTalkTitle: "The Paneer That Started a Revolution",
        companyRoast:
          "While others were busy making paneer that bounced like a tennis ball, Milky Mist figured out how to make it soft and tasty. Revolutionary concept in the dairy industry.",
        thingsThatWork: [
          "Texture remains soft even after cooking",
          "Absorbs flavors well in curries",
          "Fresh taste without artificial aftertaste",
          "Consistent quality across batches",
          "Proper cold chain maintains freshness",
        ],
        thingsThatAreMeh: [
          "Price is higher than local alternatives",
          "Shelf life is shorter than processed versions",
          "Not available in all cities yet",
        ],
        finalJudgement: "If you want paneer that doesn't fight back when you bite it, this is your answer.",
        boomerLogic: "4.8/5 - Paneer that actually tastes like paneer. Simple concept, perfectly executed.",
      },
      {
        id: "milky-mist-curd",
        name: "Milky Mist Fresh Curd",
        category: "Dairy Products",
        price: 45,
        rating: 4.7,
        shortDescription: "Curd so thick, you could probably use it as wall putty. But please don't.",
        fullDescription:
          "Thick, creamy curd made from fresh milk with live cultures. Perfect for South Indian meals and North Indian lassi dreams.",
        boomerVerdict: "Finally, curd that doesn't look like it's been through a blender with water.",
        officialLink: "https://www.milkymist.com/products/curd",
        pros: [
          "Thick, creamy consistency",
          "Made from fresh milk, not powder",
          "Live cultures for better digestion",
          "No artificial thickeners",
          "Perfect for both eating and cooking",
          "Consistent quality and taste",
          "Good shelf life when refrigerated",
        ],
        cons: [
          "More expensive than local curd",
          "Can be too thick for some preferences",
          "Limited flavored varieties",
          "Requires proper refrigeration",
        ],
        targetAudience: "Families who want thick, authentic curd for meals and cooking",
        valueForMoney: 8,
        features: [
          { name: "Thickness", rating: 10 },
          { name: "Taste", rating: 9 },
          { name: "Freshness", rating: 9 },
          { name: "Value for Money", rating: 8 },
          { name: "Digestibility", rating: 9 },
        ],
        realTalkTitle: "Curd That Actually Looks Like Curd",
        companyRoast:
          "In a world where curd looks like milk with commitment issues, Milky Mist delivers the thick, creamy stuff our grandmothers would approve of.",
        thingsThatWork: [
          "Thick enough to stay on your spoon",
          "Tangy flavor without being sour",
          "Works great for raita and lassi",
          "Doesn't separate easily",
          "Good probiotic content",
        ],
        thingsThatAreMeh: [
          "Price premium over local brands",
          "Sometimes too thick for direct consumption",
          "Limited variety in flavors",
        ],
        finalJudgement: "If you want curd that behaves like curd should, this is worth the extra rupees.",
        boomerLogic: "4.7/5 - Thick curd that doesn't need explanation. Just like the old days.",
      },
      {
        id: "milky-mist-ghee",
        name: "Milky Mist Cow Ghee",
        category: "Dairy Products",
        price: 280,
        rating: 4.6,
        shortDescription: "Ghee so pure, even your cholesterol will thank you. Probably.",
        fullDescription:
          "Pure cow ghee made from fresh cream using traditional methods. The aroma alone will make your neighbors jealous.",
        boomerVerdict: "Ghee that smells like childhood memories and tastes like your grandmother's cooking.",
        officialLink: "https://www.milkymist.com/products/ghee",
        pros: [
          "Made from pure cow milk cream",
          "Traditional churning methods",
          "Rich aroma and golden color",
          "No artificial colors or flavors",
          "Good shelf life without refrigeration",
          "Authentic taste and texture",
          "Proper packaging prevents contamination",
        ],
        cons: [
          "Premium pricing compared to local brands",
          "Limited quantity options",
          "Can solidify in cold weather",
          "Strong aroma may not suit everyone",
        ],
        targetAudience: "Health-conscious families who want pure ghee for cooking and traditional preparations",
        valueForMoney: 8,
        features: [
          { name: "Purity", rating: 9 },
          { name: "Aroma", rating: 10 },
          { name: "Taste", rating: 9 },
          { name: "Value for Money", rating: 8 },
          { name: "Packaging", rating: 8 },
        ],
        realTalkTitle: "Ghee That Smells Like Home",
        companyRoast:
          "While others are busy making ghee that smells like nothing and tastes like everything, Milky Mist delivers the real deal that makes your kitchen smell like a temple.",
        thingsThatWork: [
          "Rich, authentic aroma",
          "Golden color indicates quality",
          "Doesn't smoke easily when heated",
          "Adds authentic flavor to food",
          "Good consistency and texture",
        ],
        thingsThatAreMeh: ["Price is on the higher side", "Limited packaging sizes", "Can be too aromatic for some"],
        finalJudgement: "If you want ghee that your ancestors would recognize, this is it.",
        boomerLogic: "4.6/5 - Ghee that actually smells and tastes like ghee. Novel concept in today's market.",
      },
      {
        id: "milky-mist-cheese",
        name: "Milky Mist Processed Cheese",
        category: "Dairy Products",
        price: 95,
        rating: 4.4,
        shortDescription: "Cheese that melts properly and doesn't taste like plastic wrapped in foil.",
        fullDescription:
          "Processed cheese that actually melts and tastes like cheese should. Perfect for sandwiches, pasta, and midnight snacking.",
        boomerVerdict: "Finally, processed cheese that doesn't make you question the meaning of the word 'cheese.'",
        officialLink: "https://www.milkymist.com/products/cheese",
        pros: [
          "Melts evenly without separating",
          "Good cheese flavor, not artificial",
          "Proper texture for cooking",
          "Doesn't turn rubbery when heated",
          "Good shelf life",
          "Convenient packaging",
          "Works well in Indian and Western dishes",
        ],
        cons: [
          "Still processed, not natural cheese",
          "Higher sodium content",
          "Limited variety in flavors",
          "More expensive than basic brands",
        ],
        targetAudience: "Families who want decent processed cheese for everyday cooking and snacking",
        valueForMoney: 8,
        features: [
          { name: "Melting Quality", rating: 9 },
          { name: "Taste", rating: 8 },
          { name: "Texture", rating: 8 },
          { name: "Value for Money", rating: 8 },
          { name: "Versatility", rating: 9 },
        ],
        realTalkTitle: "Processed Cheese That Doesn't Insult Your Intelligence",
        companyRoast:
          "In a market full of cheese that tastes like salted plastic, Milky Mist manages to make processed cheese that actually resembles cheese.",
        thingsThatWork: [
          "Melts properly for sandwiches and pasta",
          "Decent cheese flavor",
          "Good texture for cooking",
          "Doesn't separate when heated",
          "Convenient for daily use",
        ],
        thingsThatAreMeh: [
          "Still processed, not artisanal",
          "Limited flavor varieties",
          "Higher price than basic options",
        ],
        finalJudgement: "For processed cheese, this is about as good as it gets in India.",
        boomerLogic: "4.4/5 - Processed cheese that knows it's processed but tries to be decent about it.",
      },
      {
        id: "milky-mist-butter",
        name: "Milky Mist Table Butter",
        category: "Dairy Products",
        price: 65,
        rating: 4.5,
        shortDescription: "Butter that spreads like butter should, not like cold concrete.",
        fullDescription:
          "Creamy table butter made from fresh cream. Spreads easily and tastes like actual butter, not margarine in disguise.",
        boomerVerdict: "Butter that doesn't require a construction drill to spread on bread.",
        officialLink: "https://www.milkymist.com/products/butter",
        pros: [
          "Spreads easily even when cold",
          "Made from fresh cream",
          "Good butter flavor",
          "No artificial colors or flavors",
          "Proper consistency",
          "Good for both cooking and spreading",
          "Reasonable pricing",
        ],
        cons: [
          "Can melt quickly in hot weather",
          "Limited salted/unsalted options",
          "Shorter shelf life than processed alternatives",
          "Requires refrigeration",
        ],
        targetAudience: "Families who want good quality butter for daily use without breaking the bank",
        valueForMoney: 9,
        features: [
          { name: "Spreadability", rating: 9 },
          { name: "Taste", rating: 8 },
          { name: "Freshness", rating: 8 },
          { name: "Value for Money", rating: 9 },
          { name: "Consistency", rating: 8 },
        ],
        realTalkTitle: "Butter That Actually Butters",
        companyRoast:
          "While premium brands charge you like butter is made from unicorn milk, Milky Mist delivers decent butter at prices that won't make you cry.",
        thingsThatWork: [
          "Spreads easily on bread",
          "Good for cooking and baking",
          "Authentic butter taste",
          "Reasonable pricing",
          "Consistent quality",
        ],
        thingsThatAreMeh: ["Can be too soft in summer", "Limited variety options", "Basic packaging"],
        finalJudgement: "Solid, dependable butter that does what butter should do.",
        boomerLogic: "4.5/5 - Butter that spreads and tastes right. Sometimes simple is perfect.",
      },
      {
        id: "milky-mist-ice-cream",
        name: "Milky Mist Premium Ice Cream",
        category: "Frozen Desserts",
        price: 150,
        rating: 4.3,
        shortDescription: "Ice cream that tastes like ice cream, not frozen sugar water with artificial everything.",
        fullDescription:
          "Premium ice cream made with real milk and cream. Multiple flavors that actually taste like what they claim to be.",
        boomerVerdict:
          "Ice cream that doesn't make you read the ingredients list and wonder what half of those chemicals are.",
        officialLink: "https://www.milkymist.com/products/ice-cream",
        pros: [
          "Made with real milk and cream",
          "Good variety of flavors",
          "Creamy texture without ice crystals",
          "Natural flavors, not artificial",
          "Reasonable pricing for premium quality",
          "Good portion sizes",
          "Doesn't melt too quickly",
        ],
        cons: [
          "Limited availability in some areas",
          "Can be hard to find in smaller stores",
          "Some flavors are hit or miss",
          "Premium pricing compared to mass market brands",
        ],
        targetAudience: "Families who want decent ice cream without the premium brand price shock",
        valueForMoney: 8,
        features: [
          { name: "Creaminess", rating: 8 },
          { name: "Flavor Authenticity", rating: 8 },
          { name: "Value for Money", rating: 8 },
          { name: "Availability", rating: 7 },
          { name: "Variety", rating: 8 },
        ],
        realTalkTitle: "Ice Cream That Remembers It's Made from Milk",
        companyRoast:
          "In a world where ice cream ingredients read like a chemistry textbook, Milky Mist keeps it simple with actual dairy products.",
        thingsThatWork: [
          "Creamy texture without artificial thickeners",
          "Flavors taste authentic",
          "Good value for the quality",
          "Doesn't leave weird aftertaste",
          "Decent variety of options",
        ],
        thingsThatAreMeh: ["Not available everywhere", "Some flavors are better than others", "Premium pricing"],
        finalJudgement: "Good ice cream that doesn't require a chemistry degree to understand the ingredients.",
        boomerLogic: "4.3/5 - Ice cream made with actual dairy products. Revolutionary concept in today's market.",
      },
    ],
  },
]
