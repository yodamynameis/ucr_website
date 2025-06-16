import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm μBot, your robotics assistant. Ask me about events, joining, or contact info!",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const botResponses: Record<string, string> = {
    events:
      'Our upcoming events include workshops on Arduino programming, robotics competitions, and guest lectures. Check out our Events page for detailed schedules!',
    join:
      "To join μCR, fill out our volunteer form on the 'Join Us' page. We welcome students from all branches and batches!",
    contact:
      "You can reach us through our Contact page, visit our lab during office hours, or email us directly. We're always happy to help!",
    about:
      "μCR is our university's Microcontroller-Based Systems and Robotics Hub. We focus on practical learning, innovation, and building amazing robotic systems!",
    form:
      "Here's the volunteer form link: https://yourdomain.com/join",
    default:
      "I can help you with info about events, joining μCR, contact details, or our robotics community!",
  };

  const keywords: Record<string, string[]> = {
    events: ['event', 'workshop', 'session'],
    join: ['join', 'member', 'enroll'],
    contact: ['contact', 'email', 'reach'],
    about: ['about', 'what', 'μcr', 'who'],
    form: ['form', 'register', 'application'],
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: input,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    const lowerInput = input.toLowerCase();

    const matchedKey = Object.keys(keywords).find((key) =>
      keywords[key].some((word) => lowerInput.includes(word))
    );

    const response = botResponses[matchedKey || 'default'];

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: response,
        isBot: true,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);

    setInput('');
  };

  useEffect(() => {
    if (isOpen && messages.length === 1) {
      const welcome = {
        id: Date.now() + 100,
        text: 'How can I assist you today?',
        isBot: true,
      };
      setMessages((prev) => [...prev, welcome]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
  <>
    {/* Floating Robot Avatar */}
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: 'spring' }}
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-violet-500 to-electric-500 rounded-full shadow-lg flex items-center justify-center hover:shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        {/* Robot Face */}
        <div className="relative">
          <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="flex space-x-1">
              <motion.div
                className="w-1.5 h-1.5 bg-electric-400 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0 }}
              />
              <motion.div
                className="w-1.5 h-1.5 bg-electric-400 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.1 }}
              />
            </div>
          </div>
        </div>
      </motion.button>
    </motion.div>

    {/* Chat Interface */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          className="fixed bottom-24 right-6 w-80 h-72 bg-gray-800 rounded-lg shadow-2xl border border-gray-700 z-50 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-electric-500 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <span className="font-semibold">μBot Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Work In Progress Message */}
          <div className="flex-1 flex items-center justify-center text-center p-4 text-gray-400 text-sm">
  🛠️ μBot is still a work in progress. <br />
  🙇‍♂️ Sorry for the inconvenience <br />
  🚀 New features coming soon — stay tuned!

          </div>

          {/* Disabled Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2 opacity-50 pointer-events-none">
              <input
                type="text"
                disabled
                placeholder="Coming soon..."
                className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600"
              />
              <button className="px-3 py-2 bg-gradient-to-r from-violet-500 to-electric-500 text-white rounded-lg">
                <Send size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
);
}
export default ChatBot;
