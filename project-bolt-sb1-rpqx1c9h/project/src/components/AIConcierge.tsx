import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const AIConcierge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your Trika AI assistant. How can I help you find the perfect luxury smartwatch today?",
      sender: 'ai',
      time: '10:30 AM'
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickActions = [
    'Find perfect watch',
    'Track my order',
    'Compare collections',
    'Virtual try-on',
    'Trika services'
  ];

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputText;
    if (!messageText.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInputText('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: getAIResponse(messageText),
        sender: 'ai',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('perfect watch') || lowerMessage.includes('recommend')) {
      return "I'd be happy to help you find the perfect Trika smartwatch! Could you tell me about your style preferences? Are you looking for heritage elegance, modern smart features, or diamond luxury?";
    }
    
    if (lowerMessage.includes('track') || lowerMessage.includes('order')) {
      return "I can help you track your Trika order. Please provide your order number, and I'll give you real-time updates on your timepiece's journey.";
    }
    
    if (lowerMessage.includes('compare') || lowerMessage.includes('collection')) {
      return "Our collections each offer unique experiences:\n\n• Heritage: Traditional craftsmanship\n• Smart: Advanced technology\n• Diamond: Luxury brilliance\n• Limited: Exclusive designs\n\nWhich interests you most?";
    }
    
    if (lowerMessage.includes('try-on') || lowerMessage.includes('virtual')) {
      return "Our Virtual Try-On feature lets you see how any Trika watch looks on your wrist using AR technology. Would you like me to guide you through it?";
    }
    
    if (lowerMessage.includes('trika') || lowerMessage.includes('service')) {
      return "Trika offers premium services:\n\n• Lifetime warranty\n• Free annual servicing\n• Custom engraving\n• White glove delivery\n• 30-day exchange\n\nWhich service interests you?";
    }
    
    return "Thank you for your question! I'm here to help with any Trika smartwatch inquiries. Feel free to ask about our collections, features, or services.";
  };

  return (
    <>
      {/* Chat Widget Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-br from-amber-400 to-yellow-600 hover:from-amber-500 hover:to-yellow-700 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-2xl shadow-2xl transition-all duration-300 border border-gray-100 ${
        isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}>
        {/* Header */}
        <div className="bg-gradient-brown text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold">Trika AI</h3>
              <p className="text-xs opacity-90">Luxury Assistant</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200 transition-colors hover:scale-110 duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-3 h-64 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-2 max-w-xs ${
                message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  message.sender === 'user' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {message.sender === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                </div>
                <div className={`p-3 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-brown-500 text-white rounded-br-md'
                    : 'bg-gray-50 text-gray-900 rounded-bl-md'
                }`}>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">{message.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-2 border-t border-gray-50">
          <div className="flex flex-wrap gap-1 mb-2">
            {quickActions.slice(0, 3).map((action, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(action)}
                className="text-xs bg-gray-50 hover:bg-brown-50 text-gray-700 px-2 py-1 rounded-full transition-all duration-200 hover:scale-105"
              >
                {action}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-50">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 text-sm transition-colors duration-200"
            />
            <button
              onClick={() => handleSendMessage()}
              className="bg-brown-500 hover:bg-brown-600 text-white p-2 rounded-xl transition-all duration-200 hover:scale-105"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIConcierge;