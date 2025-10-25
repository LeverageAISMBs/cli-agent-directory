
import React from 'react';

interface CategoryBadgeProps {
  category: string;
}

const categoryColors: { [key: string]: string } = {
  'Agentic': 'bg-indigo-600',
  'NL2SH': 'bg-emerald-600',
  'AI-Native Terminal': 'bg-amber-600',
  'General-Purpose': 'bg-indigo-500',
  'Niche': 'bg-slate-600',
};

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
  const colorClass = categoryColors[category] || 'bg-gray-500';
  
  return (
    <span 
      className={`text-white text-[0.7rem] leading-none font-semibold uppercase py-1 px-2.5 rounded-full ${colorClass}`}
    >
      {category}
    </span>
  );
};

export default CategoryBadge;
