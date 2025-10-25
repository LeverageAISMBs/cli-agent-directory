
import React from 'react';
import type { Tool } from '../types';
import StarIcon from './icons/StarIcon';
import CategoryBadge from './CategoryBadge';

interface ToolCardProps {
  tool: Tool;
  onClick: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick }) => {
  return (
    <div
      className="tool-card bg-slate-800/50 border border-slate-700 rounded-xl p-5 flex flex-col cursor-pointer card-container group h-full"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-3">
          <span className="text-3xl font-black text-slate-600 group-hover:text-indigo-400 transition-colors">
            #{tool.rank}
          </span>
          <CategoryBadge category={tool.category} />
        </div>
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">
          {tool.name}
        </h3>
        <p className="text-slate-400 mt-2 text-sm line-clamp-3">
          {tool.description}
        </p>
      </div>
      <div className="mt-4 flex justify-between items-center text-xs text-slate-500">
        <span>{tool.license}</span>
        <span className="flex items-center gap-1">
          <StarIcon className="w-4 h-4 text-amber-400" />
          {tool.githubStars}
        </span>
      </div>
    </div>
  );
};

export default ToolCard;
