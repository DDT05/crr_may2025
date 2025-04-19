import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Maximize2, Minimize2 } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
  sections?: string[];
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, isOpen]);

  const formatMessage = (text: string): string[] => {
    return text.split(/[•\n]/).filter(section => section.trim().length > 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setIsLoading(true);

    try {
      const response = await fetch('https://hebed-workspace.onrender.com/api/v1/prediction/95e96eee-50ff-4174-a71e-0f2935e1ffa9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: userMessage }),
      });

      const data = await response.json();
      
      if (data.text) {
        const sections = formatMessage(data.text);
        setMessages(prev => [...prev, { 
          text: data.text,
          sections,
          isUser: false 
        }]);
      }
      
      if (data.sourceDocuments?.[0]?.metadata?.['section']) {
        setMessages(prev => [...prev, { 
          text: `Section: ${data.sourceDocuments[0].metadata['section']}`, 
          isUser: false 
        }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        text: 'Sorry, I encountered an error. Please try again.', 
        isUser: false 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const chatboxClasses = isFullScreen
    ? "fixed inset-0 z-50 bg-white"
    : "fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl border border-gray-200";

  const renderMessage = (message: Message) => {
    if (message.isUser) {
      return <p className="text-sm whitespace-pre-wrap">{message.text}</p>;
    }

    if (message.sections && message.sections.length > 1) {
      return (
        <div className="space-y-2">
          {message.sections.map((section, idx) => (
            <div key={idx} className="flex items-start">
              {section.includes(':') ? (
                <>
                  <strong className="font-medium mr-2">{section.split(':')[0]}:</strong>
                  <p className="flex-1">{section.split(':')[1]}</p>
                </>
              ) : (
                <p className="text-sm">{section}</p>
              )}
            </div>
          ))}
        </div>
      );
    }

    return <p className="text-sm whitespace-pre-wrap">{message.text}</p>;
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div className={chatboxClasses}>
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-800">HEBED AI Assistant</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleFullScreen}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                {isFullScreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsFullScreen(false);
                }}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div 
            className={`${
              isFullScreen ? 'h-[calc(100vh-132px)]' : 'h-96'
            } overflow-y-auto p-4 space-y-4`}
          >
            {messages.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                <p className="text-lg mb-2">Welcome to HEBED AI Assistant! 👋</p>
                <p className="text-sm">Ask me anything about our documentation.</p>
              </div>
            )}
            
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-4 ${
                    message.isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {renderMessage(message)}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <div className="animate-pulse">Thinking</div>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-1 h-1 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1 h-1 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask a question..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;