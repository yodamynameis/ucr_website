import React from 'react';
import { motion } from 'framer-motion';

const NewsTicker = () => {
  const news = [
    "🆕 New Team Announced",
    "📝 Volunteer Forms Out Now",
    "📰 Weekly Blog Posted",
    "📽️ Year Rewind Reel Out Now"
  ];

  return (
    <div className="bg-gradient-to-r from-violet-600 to-electric-600 py-2 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          duration: 15, // faster scroll
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* Repeat items to fill the space */}
        {news.concat(news, news).map((item, index) => (
          <span key={index} className="mx-6 text-white text-sm sm:text-base font-medium">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default NewsTicker;
