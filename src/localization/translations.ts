export type Language = 'en' | 'sv';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      services: "Services", 
      pricing: "Pricing",
      contact: "Contact",
      bookMeeting: "Book a Meeting",
      signIn: "Sign In"
    },
    
    // Home Section
    home: {
      title: "Welcome to KLARIO NFC Marketing Platform",
      subtitle: "AI-powered NFC marketing that transforms customer engagement with smart touch technology.",
      tryCustomerForm: "Try Customer Form",
      viewDashboard: "View Dashboard Demo"
    },
    
    // About Section
    about: {
      title: "About KLARIO",
      description: "KLARIO is Sweden's leading NFC marketing platform, combining cutting-edge Near Field Communication technology with AI-powered automation. We help businesses create meaningful connections with customers through smart, touchless interactions that drive engagement and growth.",
      nfcInnovation: "NFC Innovation",
      nfcDescription: "Leading the way in contactless marketing technology",
      aiPowered: "AI-Powered",
      aiDescription: "Smart automation that learns and adapts to your business",
      customerFirst: "Customer First", 
      customerDescription: "Focused on creating exceptional customer experiences"
    },
    
    // Services Section
    services: {
      title: "Revolutionary NFC Marketing Services",
      subtitle: "Transform how you connect with customers using our AI-powered NFC technology and smart marketing automation.",
      smartNfc: "Smart NFC Cards",
      smartNfcDesc: "Tap to connect instantly.",
      smartNfcContent: "Custom NFC cards that instantly connect customers to your business with a simple tap.",
      aiCampaigns: "AI-Powered Campaigns",
      aiCampaignsDesc: "Smart messaging automation.",
      aiCampaignsContent: "AI generates personalized messages and campaigns that resonate with your customers.",
      customerInsights: "Customer Insights",
      customerInsightsDesc: "Know your audience better.",
      customerInsightsContent: "Advanced analytics and customer segmentation powered by AI technology.",
      multiChannel: "Multi-Channel Reach",
      multiChannelDesc: "Connect everywhere customers are.",
      multiChannelContent: "Reach customers via SMS, email, WhatsApp, and social media from one platform.",
      realTimeAnalytics: "Real-time Analytics",
      realTimeAnalyticsDesc: "Track your success instantly.",
      realTimeAnalyticsContent: "Monitor NFC interactions, campaign performance, and customer engagement in real-time.",
      gdprCompliant: "GDPR Compliant",
      gdprCompliantDesc: "Privacy-first approach.",
      gdprCompliantContent: "Full GDPR compliance with transparent data collection and customer consent management."
    },
    
    // Pricing Section
    pricing: {
      title: "Simple, Transparent Pricing",
      subtitle: "Choose the perfect plan for your business. All plans include 1 month free trial with yearly agreement. Cancel anytime with 3 months advance notice.",
      starter: "Starter",
      professional: "Professional",
      enterprise: "Enterprise",
      monthFree: "1 Month Free",
      mostPopular: "Most Popular",
      custom: "Custom",
      sekMonth: "SEK/month",
      yearlyRequired: "Yearly agreement required",
      largeOrgs: "For large organizations",
      customTerms: "Custom terms available",
      cancelTerms: "Cancel anytime, 3 months in advance",
      startFreeTrial: "Start Free Trial",
      contactSales: "Contact Sales",
      // Starter features
      upTo100: "Up to 100 customers/month",
      oneNfcCard: "1 NFC card included",
      basicAnalytics: "Basic analytics",
      emailSupport: "Email support",
      // Professional features  
      upTo500: "Up to 500 customers/month",
      fiveNfcCards: "5 NFC cards included",
      aiMessageGen: "AI message generation",
      multiChannelCampaigns: "Multi-channel campaigns",
      advancedAnalytics: "Advanced analytics",
      prioritySupport: "Priority support",
      // Enterprise features
      unlimitedCustomers: "Unlimited customers",
      customNfcCards: "Custom NFC cards",
      whiteLabel: "White-label solution",
      customIntegrations: "Custom integrations",
      dedicatedSupport: "Dedicated support"
    },
    
    // Why Choose Section
    whyChoose: {
      title: "Why Choose KLARIO NFC Marketing?",
      instantConnection: "Instant NFC Connection",
      instantConnectionDesc: "Customers simply tap their phone to your NFC card to instantly connect and opt-in.",
      aiAutomation: "AI-Powered Automation", 
      aiAutomationDesc: "Our AI creates personalized campaigns and optimizes customer engagement automatically.",
      mobileFirst: "Mobile-First Design",
      mobileFirstDesc: "Seamless experience optimized for mobile devices and modern customer behavior.",
      multiChannelIntegration: "Multi-Channel Integration",
      multiChannelIntegrationDesc: "Connect NFC interactions with email, SMS, WhatsApp, and social media campaigns."
    },
    
    // Booking Section
    booking: {
      title: "Ready to Transform Your Marketing?",
      subtitle: "Book a free 15-minute consultation to see how KLARIO can revolutionize your customer engagement.",
      bookNow: "Book Your Free Consultation"
    },
    
    // Contact Section
    contact: {
      title: "Contact Us",
      subtitle: "Ready to revolutionize your customer marketing with NFC technology?",
      visitTitle: "Visit Us",
      visitSubtitle: "Our NFC technology experts are ready to help you transform your marketing.",
      name: "Name",
      email: "Your Email",
      message: "Tell us about your business and NFC marketing needs",
      sendMessage: "Get Started with NFC",
      thankYou: "Thank you! We'll be in touch about your NFC marketing solution.",
      thankYouDesc: "We'll get back to you as soon as possible.",
      address: "123 Innovation Street, Stockholm",
      phone: "+46 8 123 456 78",
      emailAddress: "hello@klario.se"
    },
    
    // Footer
    footer: {
      description: "Transform physical interactions into digital relationships with NFC-powered customer engagement.",
      quickLinks: "Quick Links",
      aboutUs: "About Us",
      contactInfo: "Contact Info",
      stayUpdated: "Stay Updated",
      newsletterDesc: "Subscribe to our newsletter for the latest updates and features.",
      emailPlaceholder: "Enter your email",
      subscribe: "Subscribe",
      allRights: "© 2024 KLARIO. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service", 
      cookiePolicy: "Cookie Policy"
    },

    // Business Pages
    businessSignup: {
      title: "Create Business Account",
      subtitle: "Join thousands of businesses using NFC marketing",
      step1Title: "Business Information",
      step1Subtitle: "Tell us about your business",
      step2Title: "Business Contact & Address", 
      step2Subtitle: "How can customers reach you?",
      step3Title: "Business Owner Information",
      step3Subtitle: "Primary contact and account owner details",
      step4Title: "Account Security",
      step4Subtitle: "Set up your login credentials",
      businessName: "Business Name",
      businessType: "Business Type",
      industry: "Industry",
      taxId: "Tax ID / EIN",
      website: "Website (Optional)",
      businessEmail: "Business Email",
      businessPhone: "Business Phone",
      streetAddress: "Street Address",
      city: "City",
      state: "State",
      zipCode: "ZIP Code",
      country: "Country",
      ownerFirstName: "First Name",
      ownerLastName: "Last Name",
      ownerEmail: "Owner Email",
      ownerPhone: "Owner Phone",
      password: "Password",
      confirmPassword: "Confirm Password",
      termsAccepted: "I agree to the Terms and Conditions",
      privacyAccepted: "I agree to the Privacy Policy",
      nextStep: "Next Step",
      previousStep: "Previous",
      createAccount: "Create Account",
      backToHome: "Back to Home",
      alreadyHaveAccount: "Already have an account?",
      signInHere: "Sign in here"
    },

    businessSignin: {
      title: "Welcome Back",
      subtitle: "Sign in to your business account to manage your customer relationships",
      email: "Business Email Address",
      password: "Password", 
      rememberMe: "Remember me",
      forgotPassword: "Forgot password?",
      signIn: "Sign In to Dashboard",
      signingIn: "Signing In...",
      noAccount: "Don't have a business account?",
      createAccount: "Create Business Account",
      needHelp: "Need Help?",
      contactSupport: "Contact support: support@klario.se",
      callUs: "Call us: +46 8 123 456 78",
      helpCenter: "Help Center",
      securityNotice: "Your data is protected with enterprise-grade security",
      backToHome: "Back to Home"
    },

    notFound: {
      title: "404",
      subtitle: "Oops! Page not found",
      returnHome: "Return to Home"
    }
  },
  
  sv: {
    // Navigation
    nav: {
      home: "Hem",
      about: "Om oss",
      services: "Tjänster",
      pricing: "Priser", 
      contact: "Kontakt",
      bookMeeting: "Boka ett möte",
      signIn: "Logga in"
    },
    
    // Home Section
    home: {
      title: "Välkommen till KLARIO NFC-marknadsföringsplattform",
      subtitle: "AI-driven NFC-marknadsföring som transformerar kundengagemang med smart touch-teknik.",
      tryCustomerForm: "Testa kundformulär",
      viewDashboard: "Visa dashboard-demo"
    },
    
    // About Section
    about: {
      title: "Om KLARIO",
      description: "KLARIO är Sveriges ledande NFC-marknadsföringsplattform som kombinerar banbrytande Near Field Communication-teknik med AI-driven automation. Vi hjälper företag att skapa meningsfulla kontakter med kunder genom smarta, kontaktlösa interaktioner som driver engagemang och tillväxt.",
      nfcInnovation: "NFC-innovation",
      nfcDescription: "Ledande inom kontaktlös marknadsföringsteknik",
      aiPowered: "AI-driven",
      aiDescription: "Smart automation som lär sig och anpassar sig till ditt företag",
      customerFirst: "Kunden först",
      customerDescription: "Fokuserat på att skapa exceptionella kundupplevelser"
    },
    
    // Services Section  
    services: {
      title: "Revolutionerande NFC-marknadsföringstjänster",
      subtitle: "Transformera hur du kopplar upp dig med kunder genom vår AI-drivna NFC-teknik och smarta marknadsföringsautomation.",
      smartNfc: "Smarta NFC-kort",
      smartNfcDesc: "Tryck för att ansluta direkt.",
      smartNfcContent: "Anpassade NFC-kort som direkt kopplar kunder till ditt företag med en enkel tryckning.",
      aiCampaigns: "AI-drivna kampanjer",
      aiCampaignsDesc: "Smart meddelandeautomation.",
      aiCampaignsContent: "AI genererar personliga meddelanden och kampanjer som resonerar med dina kunder.",
      customerInsights: "Kundinsikter",
      customerInsightsDesc: "Lär känna din målgrupp bättre.",
      customerInsightsContent: "Avancerad analys och kundsegmentering som drivs av AI-teknik.",
      multiChannel: "Flerkanalsmöjligheter",
      multiChannelDesc: "Koppla upp dig överallt där kunderna finns.",
      multiChannelContent: "Nå kunder via SMS, e-post, WhatsApp och sociala medier från en plattform.",
      realTimeAnalytics: "Realtidsanalys",
      realTimeAnalyticsDesc: "Spåra din framgång direkt.",
      realTimeAnalyticsContent: "Övervaka NFC-interaktioner, kampanjprestanda och kundengagemang i realtid.",
      gdprCompliant: "GDPR-kompatibel",
      gdprCompliantDesc: "Integritetsfokuserat tillvägagångssätt.",
      gdprCompliantContent: "Full GDPR-efterlevnad med transparent datainsamling och hantering av kundsamtycke."
    },
    
    // Pricing Section
    pricing: {
      title: "Enkel, transparent prissättning",
      subtitle: "Välj den perfekta planen för ditt företag. Alla planer inkluderar 1 månads gratis provperiod med årligt avtal. Avbryt när som helst med 3 månaders förvarning.",
      starter: "Starter",
      professional: "Professional",
      enterprise: "Enterprise",
      monthFree: "1 månad gratis",
      mostPopular: "Mest populär",
      custom: "Anpassad",
      sekMonth: "SEK/månad",
      yearlyRequired: "Årsavtal krävs",
      largeOrgs: "För stora organisationer",
      customTerms: "Anpassade villkor tillgängliga",
      cancelTerms: "Avbryt när som helst, 3 månader i förväg",
      startFreeTrial: "Starta gratis provperiod",
      contactSales: "Kontakta försäljning",
      // Starter features
      upTo100: "Upp till 100 kunder/månad",
      oneNfcCard: "1 NFC-kort inkluderat",
      basicAnalytics: "Grundläggande analys",
      emailSupport: "E-poststöd",
      // Professional features
      upTo500: "Upp till 500 kunder/månad", 
      fiveNfcCards: "5 NFC-kort inkluderade",
      aiMessageGen: "AI-meddelandegenerering",
      multiChannelCampaigns: "Flerkanalskampanjer",
      advancedAnalytics: "Avancerad analys",
      prioritySupport: "Prioritetsstöd",
      // Enterprise features
      unlimitedCustomers: "Obegränsat antal kunder",
      customNfcCards: "Anpassade NFC-kort",
      whiteLabel: "White-label-lösning",
      customIntegrations: "Anpassade integrationer",
      dedicatedSupport: "Dedikerat stöd"
    },
    
    // Why Choose Section
    whyChoose: {
      title: "Varför välja KLARIO NFC-marknadsföring?",
      instantConnection: "Omedelbar NFC-anslutning",
      instantConnectionDesc: "Kunder trycker helt enkelt sin telefon mot ditt NFC-kort för att direkt ansluta och anmäla sig.",
      aiAutomation: "AI-driven automation",
      aiAutomationDesc: "Vår AI skapar personliga kampanjer och optimerar kundengagemang automatiskt.",
      mobileFirst: "Mobil-först design",
      mobileFirstDesc: "Sömlös upplevelse optimerad för mobila enheter och modernt kundbeteende.",
      multiChannelIntegration: "Flerkanalsintegration",
      multiChannelIntegrationDesc: "Koppla NFC-interaktioner med e-post, SMS, WhatsApp och sociala mediekampanjer."
    },
    
    // Booking Section
    booking: {
      title: "Redo att transformera din marknadsföring?",
      subtitle: "Boka en gratis 15-minuters konsultation för att se hur KLARIO kan revolutionera ditt kundengagemang.",
      bookNow: "Boka din gratis konsultation"
    },
    
    // Contact Section
    contact: {
      title: "Kontakta oss",
      subtitle: "Redo att revolutionera din kundmarknadsföring med NFC-teknik?",
      visitTitle: "Besök oss",
      visitSubtitle: "Våra NFC-teknikexperter är redo att hjälpa dig transformera din marknadsföring.",
      name: "Namn",
      email: "Din e-post",
      message: "Berätta om ditt företag och NFC-marknadsföringsbehov",
      sendMessage: "Kom igång med NFC",
      thankYou: "Tack! Vi kommer att höra av oss angående din NFC-marknadsföringslösning.",
      thankYouDesc: "Vi kommer att återkomma till dig så snart som möjligt.",
      address: "123 Innovation Street, Stockholm",
      phone: "+46 8 123 456 78",
      emailAddress: "hello@klario.se"
    },
    
    // Footer
    footer: {
      description: "Transformera fysiska interaktioner till digitala relationer med NFC-driven kundengagemang.",
      quickLinks: "Snabblänkar",
      aboutUs: "Om oss",
      contactInfo: "Kontaktinformation",
      stayUpdated: "Håll dig uppdaterad",
      newsletterDesc: "Prenumerera på vårt nyhetsbrev för de senaste uppdateringarna och funktionerna.",
      emailPlaceholder: "Ange din e-post",
      subscribe: "Prenumerera",
      allRights: "© 2024 KLARIO. Alla rättigheter förbehållna.",
      privacyPolicy: "Integritetspolicy",
      termsOfService: "Användarvillkor",
      cookiePolicy: "Cookie-policy"
    },

    // Business Pages
    businessSignup: {
      title: "Skapa företagskonto",
      subtitle: "Gå med i tusentals företag som använder NFC-marknadsföring",
      step1Title: "Företagsinformation",
      step1Subtitle: "Berätta om ditt företag",
      step2Title: "Företagskontakt och adress",
      step2Subtitle: "Hur kan kunder nå dig?",
      step3Title: "Företagsägarinformation",
      step3Subtitle: "Primärkontakt och kontoägaruppgifter",
      step4Title: "Kontosäkerhet",
      step4Subtitle: "Ställ in dina inloggningsuppgifter",
      businessName: "Företagsnamn",
      businessType: "Företagstyp",
      industry: "Bransch",
      taxId: "Skattenummer / Orgnr",
      website: "Webbplats (Valfritt)",
      businessEmail: "Företags-e-post",
      businessPhone: "Företagstelefon",
      streetAddress: "Gatuadress",
      city: "Stad",
      state: "Region",
      zipCode: "Postnummer",
      country: "Land",
      ownerFirstName: "Förnamn",
      ownerLastName: "Efternamn",
      ownerEmail: "Ägar-e-post",
      ownerPhone: "Ägartelefon",
      password: "Lösenord",
      confirmPassword: "Bekräfta lösenord",
      termsAccepted: "Jag godkänner användarvillkoren",
      privacyAccepted: "Jag godkänner integritetspolicyn",
      nextStep: "Nästa steg",
      previousStep: "Föregående",
      createAccount: "Skapa konto",
      backToHome: "Tillbaka hem",
      alreadyHaveAccount: "Har du redan ett konto?",
      signInHere: "Logga in här"
    },

    businessSignin: {
      title: "Välkommen tillbaka",
      subtitle: "Logga in på ditt företagskonto för att hantera dina kundrelationer",
      email: "Företags-e-postadress",
      password: "Lösenord",
      rememberMe: "Kom ihåg mig",
      forgotPassword: "Glömt lösenord?",
      signIn: "Logga in på dashboard",
      signingIn: "Loggar in...",
      noAccount: "Har du inget företagskonto?",
      createAccount: "Skapa företagskonto",
      needHelp: "Behöver du hjälp?",
      contactSupport: "Kontakta support: support@klario.se",
      callUs: "Ring oss: +46 8 123 456 78",
      helpCenter: "Hjälpcenter",
      securityNotice: "Din data skyddas med säkerhet på företagsnivå",
      backToHome: "Tillbaka hem"
    },

    notFound: {
      title: "404",
      subtitle: "Oj! Sidan hittades inte",
      returnHome: "Tillbaka hem"
    }
  }
};

export const t = (language: Language, key: string) => {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};