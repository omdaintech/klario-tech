
import { UserContext } from './types';
import { responses } from './constants';

export const detectLanguage = (text: string, currentLanguage: 'en' | 'sv'): 'en' | 'sv' => {
  const swedishWords = ['hej', 'tack', 'ja', 'nej', 'hur', 'vad', 'när', 'var', 'varför', 'pris', 'kostnad', 'gratis'];
  const words = text.toLowerCase().split(' ');
  const swedishMatches = words.filter(word => swedishWords.includes(word)).length;
  
  if (swedishMatches > 0) return 'sv';
  return currentLanguage;
};

export const analyzeUserIntent = (message: string, userContext: UserContext): { interest: boolean; needsFollowUp: boolean; shouldCaptureLead: boolean } => {
  const lowerMessage = message.toLowerCase();
  const interestKeywords = ['interested', 'want', 'need', 'how much', 'price', 'cost', 'demo', 'trial', 'sign up', 'intresserad', 'vill', 'behöver', 'pris', 'kostnad'];
  const urgentKeywords = ['now', 'today', 'asap', 'urgent', 'nu', 'idag', 'brådskande'];
  
  const showsInterest = interestKeywords.some(keyword => lowerMessage.includes(keyword));
  const isUrgent = urgentKeywords.some(keyword => lowerMessage.includes(keyword));
  const shouldCaptureLead = (userContext.questionsAsked >= 2 && showsInterest) || isUrgent;
  
  return {
    interest: showsInterest,
    needsFollowUp: showsInterest || userContext.questionsAsked >= 1,
    shouldCaptureLead
  };
};

export const getWelcomeMessage = (language: 'en' | 'sv', visitDuration: number) => {
  const timeBasedGreeting = visitDuration > 30 
    ? (language === 'sv' ? "Jag märker att du har tittat runt lite - har du några frågor om våra NFC-lösningar?" 
                         : "I notice you've been exploring - do you have any questions about our NFC solutions?")
    : (language === 'sv' ? "Hej! Välkommen till KLARIO! 👋" : "Hi! Welcome to KLARIO! 👋");

  return language === 'sv' 
    ? `${timeBasedGreeting} Jag är Elena, din personliga assistent. Jag hjälper företag att växa med vår AI-drivna NFC-marknadsföringsplattform. Hur kan jag hjälpa dig idag? 😊`
    : `${timeBasedGreeting} I'm Elena, your personal assistant. I help businesses grow with our AI-powered NFC marketing platform. How can I help you today? 😊`;
};

export const generateResponse = (userMessage: string, userContext: UserContext): { text: string; showLeadForm?: boolean; showBookingForm?: boolean } => {
  const message = userMessage.toLowerCase();
  const currentResponses = responses[userContext.language];
  const intent = analyzeUserIntent(userMessage, userContext);
  
  // Personalized greeting with name
  if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('hej') || message.includes('hallå')) {
    const greeting = userContext.language === 'sv' 
      ? `Hej${userContext.name ? ` ${userContext.name}` : ''}! Trevligt att träffa dig! 😊`
      : `Hello${userContext.name ? ` ${userContext.name}` : ''}! Nice to meet you! 😊`;
    
    return { text: greeting + " " + (userContext.language === 'sv' ? "Vad kan jag hjälpa dig med idag?" : "What can I help you with today?") };
  }

  // FAQ responses
  if (message.includes('price') || message.includes('cost') || message.includes('sek') || message.includes('pris') || message.includes('kostnad')) {
    return { 
      text: currentResponses.pricing,
      showLeadForm: intent.shouldCaptureLead
    };
  }
  if (message.includes('trial') || message.includes('free') || message.includes('gratis') || message.includes('provperiod')) {
    return { 
      text: currentResponses.trial,
      showLeadForm: intent.shouldCaptureLead
    };
  }
  if (message.includes('nfc') || message.includes('card') || message.includes('kort')) {
    return { text: currentResponses.nfc };
  }
  if (message.includes('demo') || message.includes('meeting') || message.includes('call') || message.includes('book') || message.includes('möte') || message.includes('samtal') || message.includes('boka')) {
    return { 
      text: currentResponses.booking,
      showBookingForm: true
    };
  }
  if (message.includes('marketing') || message.includes('campaign') || message.includes('marknadsföring') || message.includes('kampanj')) {
    return { text: currentResponses.marketing };
  }

  // Conversion-focused fallback
  if (intent.shouldCaptureLead) {
    return {
      text: currentResponses.conversion,
      showLeadForm: true
    };
  }

  // Default helpful response
  return {
    text: userContext.language === 'sv'
      ? "Det är en bra fråga! Jag hjälper gärna dig. Vill du veta mer om våra NFC-lösningar, priser, eller boka en snabb demo för att se hur det kan hjälpa ditt företag?"
      : "That's a great question! I'd be happy to help you. Would you like to know more about our NFC solutions, pricing, or book a quick demo to see how it can help your business?"
  };
};
