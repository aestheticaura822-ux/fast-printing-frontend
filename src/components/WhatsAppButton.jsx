import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Phone, Mail } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const phoneNumber = '923317924742'; // Pakistan number without + (923252467463)
  
  // WhatsApp link with pre-filled message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hello! I'm interested in your printing services. Can you please provide more information?"
  )}`;

  // Show button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      const customLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(customLink, '_blank');
      setIsOpen(false);
      setMessage('');
    }
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}
      >
        {/* Expandable Chat Box */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 mb-2 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold">Fast Printing Support</h3>
                  <p className="text-xs text-green-200">Online • Typically replies in minutes</p>
                </div>
              </div>
            </div>
            
            {/* Quick Reply Options */}
            <div className="p-4 border-b border-gray-100">
              <p className="text-xs text-gray-500 mb-2">Quick replies:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Get a quote',
                  'Track order',
                  'Design help',
                  'Bulk pricing'
                ].map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMessage(`Hi! I need help with ${reply}.`)}
                    className="text-xs bg-gray-100 hover:bg-green-50 text-gray-700 hover:text-green-600 px-3 py-1 rounded-full transition"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Message Input */}
            <div className="p-4">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 resize-none text-sm"
                rows="3"
              />
              <button
                onClick={handleSendMessage}
                className="w-full mt-3 bg-gradient-to-r from-green-600 to-green-700 text-white py-2 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Send via WhatsApp
              </button>
            </div>
            
            {/* Alternative Contacts */}
            <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
              Or contact us directly:
              <div className="flex justify-center gap-4 mt-2">
                <a href="tel:03317924742" className="flex items-center gap-1 text-green-600 hover:text-green-700">
                  <Phone className="w-3 h-3" /> Call
                </a>
                <a href="mailto:xfastgroup001@gmail.com" className="flex items-center gap-1 text-green-600 hover:text-green-700">
                  <Mail className="w-3 h-3" /> Email
                </a>
              </div>
            </div>
          </div>
        )}
        
        {/* Main WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-7 h-7 text-white" />
          )}
          
          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center animate-pulse">
            1
          </span>
          
          {/* Tooltip */}
          <span className="absolute right-16 whitespace-nowrap bg-gray-800 text-white text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Chat with us on WhatsApp
          </span>
        </button>
      </div>
    </>
  );
};

export default WhatsAppButton;