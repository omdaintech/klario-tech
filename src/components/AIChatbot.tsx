
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
          className="rounded-full w-16 h-16 bg-purple-600 hover:bg-purple-700 shadow-lg animate-pulse hover:animate-none transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
        <div className="absolute -top-12 -left-32 bg-purple-600 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap animate-bounce">
          {userContext.language === 'sv' ? 'Chatta med Elena! 👋' : 'Chat with Elena! 👋'}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px]">
      <Card className="w-full h-full flex flex-col shadow-2xl border-purple-200">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 rounded-t-lg flex flex-row items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar className="w-10 h-10 border-2 border-white">
                <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=40&h=40&fit=crop&crop=face" alt="Elena" />
                <AvatarFallback className="bg-purple-500 text-white">E</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Elena</h3>
              <p className="text-xs opacity-90">NFC Marketing Expert</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setUserContext(prev => ({ ...prev, language: prev.language === 'en' ? 'sv' : 'en' }))}
              className="text-white hover:bg-purple-700/50 p-1 rounded-md"
              title={userContext.language === 'en' ? 'Switch to Swedish' : 'Växla till engelska'}
            >
              <Globe className="w-4 h-4" />
              <span className="ml-1 text-xs font-semibold">{userContext.language.toUpperCase()}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-purple-700/50 p-1 rounded-md"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0">
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">
            {messages.map((message) => (
              <div key={message.id}>
                <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className="flex items-start space-x-2 max-w-[85%]">
                    {message.sender === 'bot' && (
                      <Avatar className="w-6 h-6 flex-shrink-0">
                        <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=24&h=24&fit=crop&crop=face" alt="Elena" />
                        <AvatarFallback className="bg-purple-500 text-white text-xs">E</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`rounded-lg px-3 py-2 text-sm break-words ${
                        message.sender === 'user'
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                </div>
                
                {message.showLeadForm && (
                  <div className="mt-3 ml-8">
                    <LeadCaptureForm 
                      language={userContext.language}
                      onSubmit={handleLeadCapture}
                    />
                  </div>
                )}
                
                {message.showBookingForm && (
                  <div className="mt-3 ml-8">
                    <BookingForm 
                      language={userContext.language}
                      onSubmit={handleBooking}
                    />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=24&h=24&fit=crop&crop=face" alt="Elena" />
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

          {messages.length <= 1 && (
            <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
              <div className="text-xs text-gray-600 mb-2 font-medium">
                {userContext.language === 'sv' ? 'Populära frågor:' : 'Popular questions:'}
              </div>
              <div className="grid grid-cols-1 gap-2">
                {suggestedQuestions[userContext.language].map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs h-8 justify-start bg-white hover:bg-purple-50 border-purple-200 text-purple-700"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          <div className="border-t p-4 bg-white">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={userContext.language === 'sv' ? 'Fråga mig vad som helst...' : 'Ask me anything...'}
                className="flex-1 border-purple-200 focus:border-purple-400"
              />
              <Button 
                onClick={handleSendMessage} 
                size="sm" 
                className="bg-purple-600 hover:bg-purple-700 px-3"
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
