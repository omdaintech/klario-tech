
import { UserContext } from './types';
import { responses, intentKeywords } from './constants';

export const detectLanguage = (text: string, currentLanguage: 'en' | 'sv'): 'en' | 'sv' => {
  const swedishWords = ['hej', 'tack', 'ja', 'nej', 'hur', 'vad', 'när', 'var', 'varför', 'pris', 'kostnad', 'gratis', 'boka', 'möte'];
  const words = text.toLowerCase().split(' ');
  const swedishMatches = words.filter(word => swedishWords.includes(word)).length;
  
  if (swedishMatches > 0) return 'sv';
  return currentLanguage;
};

export const detectIntent = (message: string, language: 'en' | 'sv'): 'helpSeeking' | 'serviceInterest' | 'salesLead' | 'general' => {
  const lowerMessage = message.toLowerCase();
  const keywords = intentKeywords[language];
  
  // Check for sales lead intent first (highest priority)
  if (keywords.salesLead.some(keyword => lowerMessage.includes(keyword))) {
    return 'salesLead';
  }
  
  // Check for service interest
  if (keywords.serviceInterest.some(keyword => lowerMessage.includes(keyword))) {
    return 'serviceInterest';
  }
  
  // Check for help seeking
  if (keywords.helpSeeking.some(keyword => lowerMessage.includes(keyword))) {
    return 'helpSeeking';
  }
  
  return 'general';
};

export const analyzeUserIntent = (message: string, userContext: UserContext): { interest: boolean; needsFollowUp: boolean; shouldCaptureLead: boolean } => {
  const lowerMessage = message.toLowerCase();
  const intent = detectIntent(message, userContext.language);
  const interestKeywords = ['interested', 'want', 'need', 'how much', 'price', 'cost', 'demo', 'trial', 'sign up', 'intresserad', 'vill', 'behöver', 'pris', 'kostnad'];
  const urgentKeywords = ['now', 'today', 'asap', 'urgent', 'nu', 'idag', 'brådskande'];
  
  const showsInterest = interestKeywords.some(keyword => lowerMessage.includes(keyword)) || intent === 'serviceInterest' || intent === 'salesLead';
  const isUrgent = urgentKeywords.some(keyword => lowerMessage.includes(keyword));
  const shouldCaptureLead = (userContext.questionsAsked >= 2 && showsInterest) || isUrgent || intent === 'salesLead';
  
  return {
    interest: showsInterest,
    needsFollowUp: showsInterest || userContext.questionsAsked >= 1,
    shouldCaptureLead
  };
};

export const getWelcomeMessage = (language: 'en' | 'sv', visitDuration: number) => {
  const currentResponses = responses[language];
  
  if (visitDuration > 30) {
    return language === 'sv' 
      ? "Jag märker att du har tittat runt lite - " + currentResponses.welcome
      : "I notice you've been exploring - " + currentResponses.welcome;
  }
  
  return currentResponses.welcome;
};

export const generateResponse = (userMessage: string, userContext: UserContext): { text: string; showLeadForm?: boolean; showBookingForm?: boolean } => {
  const message = userMessage.toLowerCase();
  const currentResponses = responses[userContext.language];
  const intent = detectIntent(userMessage, userContext.language);
  const userIntent = analyzeUserIntent(userMessage, userContext);
  
  // Handle greetings with personalized response
  if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('hej') || message.includes('hallå')) {
    const greeting = userContext.language === 'sv' 
      ? `Hej${userContext.name ? ` ${userContext.name}` : ''}! Trevligt att träffa dig! 😊`
      : `Hello${userContext.name ? ` ${userContext.name}` : ''}! Nice to meet you! 😊`;
    
    return { text: greeting + " " + currentResponses.welcome };
  }

  // Intent-based routing
  switch (intent) {
    case 'helpSeeking':
      return { text: currentResponses.helpSeeking };
    
    case 'serviceInterest':
      return { 
        text: currentResponses.serviceInterest,
        showLeadForm: userContext.questionsAsked >= 1
      };
    
    case 'salesLead':
      return { 
        text: currentResponses.conversion,
        showLeadForm: true
      };
  }

  // Specific FAQ responses
  if (message.includes('price') || message.includes('cost') || message.includes('sek') || message.includes('pris') || message.includes('kostnad')) {
    return { 
      text: currentResponses.pricing,
      showLeadForm: userIntent.shouldCaptureLead
    };
  }
  if (message.includes('trial') || message.includes('free') || message.includes('gratis') || message.includes('provperiod')) {
    return { 
      text: currentResponses.trial,
      showLeadForm: userIntent.shouldCaptureLead
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
  if (userIntent.shouldCaptureLead) {
    return {
      text: currentResponses.conversion,
      showLeadForm: true
    };
  }

  // Smart fallback with clarification
  return {
    text: currentResponses.fallback
  };
};
