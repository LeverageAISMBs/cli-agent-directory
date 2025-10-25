
import React from 'react';
import type { Tool } from '../types';
import ToolCard from './ToolCard';
import Pagination from './Pagination';

interface ToolGridProps {
  tools: Tool[];
  onCardClick: (tool: Tool) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalResults: number;
}

const ToolGrid: React.FC<ToolGridProps> = ({ tools, onCardClick, currentPage, totalPages, onPageChange, totalResults }) => {
  if (tools.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-2xl font-bold text-slate-300">No Tools Found</h3>
        <p className="text-slate-400 mt-2">Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {tools.map(tool => (
          <ToolCard key={tool.rank} tool={tool} onClick={() => onCardClick(tool)} />
        ))}
      </div>
      {totalResults > 10 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
      )}
    </>
  );
};

export default ToolGrid;
