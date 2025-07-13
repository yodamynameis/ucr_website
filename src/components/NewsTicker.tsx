import React from 'react';
import { motion } from 'framer-motion';

const NewsTicker = () => {
 const news = [
  { text: "🆕 New Team Announced", url: "/team" },
  { text: "🤖 Volunteer Team Out Now!!", url: "https://www.instagram.com/p/DMDCINZJqao/?img_index=1" },
  { text: "📰 Weekly Blog Posted", url: "/knowledge-hub" },
  { text: "📽️ Year Rewind Reel Out Now", url: "https://www.instagram.com/p/DK1FtIeJCNX/" }
];


  return (
    <div className="bg-gradient-to-r from-violet-600 to-electric-600 py-2 overflow-hidden">
  <motion.div
    className="flex whitespace-nowrap"
    animate={{ x: ['100%', '-100%'] }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: 'linear',
    }}
  >
    {news.concat(news).map((item, index) => (
      <a
        key={index}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-6 text-white text-sm sm:text-base font-medium hover:underline"
      >
        {item.text}
      </a>
    ))}
  </motion.div>
</div>

  );
};

export default NewsTicker;
