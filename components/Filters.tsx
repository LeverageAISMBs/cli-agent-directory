
import React from 'react';
import SearchIcon from './icons/SearchIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface FiltersProps {
  searchTerm: string;
  selectedCategory: string;
  categories: string[];
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Filters: React.FC<FiltersProps> = ({ 
  searchTerm, 
  selectedCategory, 
  categories, 
  onSearchChange, 
  onCategoryChange 
}) => {
  return (
    <div className="sticky top-0 bg-[#0A0A0A]/80 backdrop-blur-lg z-20 py-6 mb-12">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <input
            type="text"
            value={searchTerm}
            onChange={onSearchChange}
            placeholder="Search by name, category, or rank..."
            className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 pl-12 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-colors"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <SearchIcon className="w-5 h-5 text-slate-400" />
          </div>
        </div>
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={onCategoryChange}
            className="w-full md:w-auto appearance-none bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 pr-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-colors"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <ChevronDownIcon className="w-5 h-5 text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
