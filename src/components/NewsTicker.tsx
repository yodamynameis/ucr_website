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
        className="flex whitespace-nowrap "
        animate={{ x: [1200, -1200] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {news.concat(news).map((item, index) => (
          <span key={index} className="mx-8 text-white font-medium">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default NewsTicker;