import React from "react";

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent }) => {
  return (
    <div className="flip-card w-full h-64 mb-6">
      <div className="flip-card-inner w-full h-full">
        <div className="flip-card-front bg-gray-800/30 p-6 border border-gray-700 rounded-lg">
          {frontContent}
        </div>
        <div className="flip-card-back bg-gray-800/30 p-6 border border-gray-700 rounded-lg">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
