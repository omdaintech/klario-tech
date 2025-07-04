
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, X, Send, Globe } from "lucide-react";
import { useChatbot } from "./chatbot/useChatbot";
import { suggestedQuestions } from "./chatbot/constants";
import LeadCaptureForm from "./chatbot/LeadCaptureForm";
import BookingForm from "./chatbot/BookingForm";

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const {
    messages,
    inputValue,
    setInputValue,
    isTyping,
    userContext,
    setUserContext,
    handleSendMessage,
    handleSuggestedQuestion,
    handleLeadCapture,
    handleBooking
  } = useChatbot();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
          className="rounded-full w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg animate-pulse hover:animate-none transition-all duration-300 border-2 border-white"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
        <div className="absolute -top-14 -left-36 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl text-sm whitespace-nowrap animate-bounce shadow-lg">
          {userContext.language === 'sv' ? 'Chatta med Elena! 👋' : 'Chat with Elena! 👋'}
          <div className="absolute bottom-[-6px] left-8 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] animate-scale-in">
      <Card className="w-full h-full flex flex-col shadow-2xl border-0 rounded-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex flex-row items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar className="w-12 h-12 border-2 border-white shadow-md">
                <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=48&h=48&fit=crop&crop=face" alt="Elena" />
                <AvatarFallback className="bg-purple-500 text-white font-semibold">E</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div>
              <h3 className="font-bold text-lg">Elena</h3>
              <p className="text-sm opacity-90">KLARIO Tech Assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setUserContext(prev => ({ ...prev, language: prev.language === 'en' ? 'sv' : 'en' }))}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              title={userContext.language === 'en' ? 'Switch to Swedish' : 'Växla till engelska'}
            >
              <Globe className="w-4 h-4" />
              <span className="ml-1 text-xs font-bold">{userContext.language.toUpperCase()}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0 bg-gray-50">
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">
            {messages.map((message) => (
              <div key={message.id} className="animate-fade-in">
                <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className="flex items-start space-x-2 max-w-[85%]">
                    {message.sender === 'bot' && (
                      <Avatar className="w-7 h-7 flex-shrink-0">
                        <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=28&h=28&fit=crop&crop=face" alt="Elena" />
                        <AvatarFallback className="bg-purple-500 text-white text-xs">E</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`rounded-2xl px-4 py-3 text-sm break-words shadow-sm ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-md'
                          : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                </div>
                
                {message.showLeadForm && (
                  <div className="mt-3 ml-9 animate-slide-in-right">
                    <LeadCaptureForm 
                      language={userContext.language}
                      onSubmit={handleLeadCapture}
                    />
                  </div>
                )}
                
                {message.showBookingForm && (
                  <div className="mt-3 ml-9 animate-slide-in-right">
                    <BookingForm 
                      language={userContext.language}
                      onSubmit={handleBooking}
                    />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="flex items-start space-x-2">
                  <Avatar className="w-7 h-7">
                    <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=28&h=28&fit=crop&crop=face" alt="Elena" />
                    <AvatarFallback className="bg-purple-500 text-white text-xs">E</AvatarFallback>
                  </Avatar>
                  <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 border border-gray-200 shadow-sm">
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

          {messages.length <= 1 && (
            <div className="px-4 py-3 border-t border-gray-200 bg-white">
              <div className="text-xs text-gray-600 mb-3 font-semibold">
                {userContext.language === 'sv' ? 'Populära frågor:' : 'Popular questions:'}
              </div>
              <div className="grid grid-cols-1 gap-2">
                {suggestedQuestions[userContext.language].map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs h-9 justify-start bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border-2 border-blue-200 text-blue-700 font-medium rounded-xl transition-all duration-200 hover:scale-105"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={userContext.language === 'sv' ? 'Fråga mig vad som helst...' : 'Ask me anything...'}
                className="flex-1 border-2 border-gray-200 focus:border-blue-400 rounded-xl bg-gray-50 focus:bg-white transition-all duration-200"
              />
              <Button 
                onClick={handleSendMessage} 
                size="sm" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                disabled={!inputValue.trim()}
              >
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
