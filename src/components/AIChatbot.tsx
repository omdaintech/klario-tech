
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm Elena, your personal assistant at KLARIO. I'm here to help you get started with our SMS marketing platform or answer any questions you might have. How can I help you today? 😊",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const faqResponses: { [key: string]: string } = {
    pricing: "Great question! We offer three plans: Starter at 399 SEK/month (up to 100 SMS/month), Professional at 799 SEK/month (up to 500 SMS/month), and Enterprise with custom pricing. All plans come with a 1-month free trial and yearly agreements. Would you like me to help you choose the right plan?",
    trial: "Absolutely! We offer a 1-month FREE trial for all our plans. You can cancel anytime with 3 months advance notice. Would you like me to help you get started with your free trial?",
    nfc: "Our NFC cards are a game-changer! They allow customers to instantly opt-in to your SMS campaigns just by tapping their phone. Starter plan includes 1 NFC card, Professional includes 5 cards, and Enterprise gets custom NFC cards. Pretty cool, right?",
    sms: "Our SMS marketing platform helps you reach customers directly on their phones with personalized messages. You can send promotions, updates, and automated campaigns. The Professional plan even includes AI message generation to help you write better SMS!",
    support: "I'm here to help! For technical issues, our Starter plan includes email support, Professional gets priority support, and Enterprise customers have dedicated support. What specific question can I help you with?",
    signup: "I'd love to help you get started! First, let me ask - what's your business type and how many customers do you typically want to reach per month? This will help me recommend the perfect plan for you.",
    cancel: "No worries at all! You can cancel your subscription anytime with 3 months advance notice. We believe in transparency and no hidden fees. Is there something specific you're concerned about?",
    analytics: "Our analytics help you track SMS performance, customer engagement, and campaign success. Basic analytics come with the Starter plan, while Professional and Enterprise plans include advanced analytics with deeper insights.",
    integration: "Yes! Our Enterprise plan includes custom integrations with your existing systems. We can connect with CRMs, e-commerce platforms, and other business tools. What systems are you looking to integrate with?"
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('price') || message.includes('cost') || message.includes('sek')) {
      return faqResponses.pricing;
    }
    if (message.includes('trial') || message.includes('free')) {
      return faqResponses.trial;
    }
    if (message.includes('nfc') || message.includes('card')) {
      return faqResponses.nfc;
    }
    if (message.includes('sms') || message.includes('text') || message.includes('message')) {
      return faqResponses.sms;
    }
    if (message.includes('support') || message.includes('help')) {
      return faqResponses.support;
    }
    if (message.includes('sign up') || message.includes('signup') || message.includes('start') || message.includes('begin')) {
      return faqResponses.signup;
    }
    if (message.includes('cancel') || message.includes('quit') || message.includes('stop')) {
      return faqResponses.cancel;
    }
    if (message.includes('analytic') || message.includes('report') || message.includes('data')) {
      return faqResponses.analytics;
    }
    if (message.includes('integrat') || message.includes('connect') || message.includes('api')) {
      return faqResponses.integration;
    }
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Nice to meet you! I'm Elena from KLARIO. I'm here to help you discover how our SMS marketing platform can grow your business. What would you like to know?";
    }
    
    return "That's a great question! I'd be happy to help you with that. For more specific information, I can connect you with our team, or feel free to ask me about our pricing, features, free trial, or how to get started. What interests you most?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 bg-purple-600 hover:bg-purple-700 shadow-lg animate-bounce"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
        <div className="absolute -top-12 -left-20 bg-purple-600 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
          Chat with Elena! 👋
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 h-96">
      <Card className="w-full h-full flex flex-col shadow-2xl border-purple-200">
        <CardHeader className="bg-purple-600 text-white p-4 rounded-t-lg flex flex-row items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/api/placeholder/32/32" alt="Elena" />
              <AvatarFallback className="bg-purple-500 text-white">E</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-sm">Elena</h3>
              <p className="text-xs opacity-90">KLARIO Assistant</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-purple-700 p-1"
          >
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex items-start space-x-2 max-w-[80%]">
                  {message.sender === 'bot' && (
                    <Avatar className="w-6 h-6">
                      <AvatarImage src="/api/placeholder/24/24" alt="Elena" />
                      <AvatarFallback className="bg-purple-500 text-white text-xs">E</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`rounded-lg px-3 py-2 text-sm ${
                      message.sender === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src="/api/placeholder/24/24" alt="Elena" />
                    <AvatarFallback className="bg-purple-500 text-white text-xs">E</AvatarFallback>
                  </Avatar>
                  <div className="bg-gray-100 rounded-lg px-3 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="sm" className="bg-purple-600 hover:bg-purple-700">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIChatbot;
