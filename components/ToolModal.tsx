
import React, { useEffect, useCallback } from 'react';
import type { Tool } from '../types';
import StarIcon from './icons/StarIcon';
import XIcon from './icons/XIcon';
import ArrowUpRightIcon from './icons/ArrowUpRightIcon';
import CategoryBadge from './CategoryBadge';

interface ToolModalProps {
  tool: Tool;
  onClose: () => void;
}

const ToolModal: React.FC<ToolModalProps> = ({ tool, onClose }) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="tool-modal-title"
    >
      <div
        className="modal-content bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start">
            <div>
              <h2 id="tool-modal-title" className="text-3xl font-bold text-white">{tool.name}</h2>
              <div className="mt-2">
                <CategoryBadge category={`#${tool.rank} - ${tool.category}`} />
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <XIcon className="w-8 h-8" />
            </button>
          </div>
          <p className="text-slate-300 mt-4">{tool.description}</p>
          
          <div className="mt-6 border-t border-slate-700 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-slate-400 font-semibold mb-1">License</p>
              <p className="text-white">{tool.license}</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-slate-400 font-semibold mb-1">GitHub Stars</p>
              <p className="text-white flex items-center gap-2">
                <StarIcon className="w-4 h-4 text-amber-400" /> {tool.githubStars}
              </p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg col-span-1 md:col-span-2">
              <p className="text-slate-400 font-semibold mb-1">Key Model Support</p>
              <p className="text-white">{tool.modelSupport}</p>
            </div>
          </div>
          
          <div className="mt-8">
            <a
              href={tool.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
            >
              Visit Website <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolModal;
