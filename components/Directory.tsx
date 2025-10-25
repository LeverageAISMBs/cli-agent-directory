
import React, { useState, useMemo, useCallback } from 'react';
import type { Tool } from '../types';
import { tools } from '../data/tools';
import Filters from './Filters';
import ToolGrid from './ToolGrid';
import ToolModal from './ToolModal';

const CARDS_PER_PAGE = 10;
const categories = ['All Categories', 'Agentic', 'NL2SH', 'AI-Native Terminal', 'General-Purpose', 'Niche'];

const Directory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); 
  }, []);

  const handleCategoryChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  }, []);

  const openModal = useCallback((tool: Tool) => {
    setSelectedTool(tool);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setSelectedTool(null);
    document.body.style.overflow = '';
  }, []);

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const searchTermLower = searchTerm.toLowerCase();
      const matchesSearch =
        tool.name.toLowerCase().includes(searchTermLower) ||
        tool.category.toLowerCase().includes(searchTermLower) ||
        `#${tool.rank}`.includes(searchTermLower);
      
      const matchesCategory =
        selectedCategory === 'All Categories' || tool.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);
  
  const totalPages = Math.ceil(filteredTools.length / CARDS_PER_PAGE);
  const paginatedTools = useMemo(() => {
      const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
      const endIndex = startIndex + CARDS_PER_PAGE;
      return filteredTools.slice(startIndex, endIndex);
  }, [filteredTools, currentPage]);

  return (
    <main id="directory" className="container mx-auto px-4 py-16 md:py-24">
      <Filters 
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        categories={categories}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ToolGrid
        tools={paginatedTools}
        onCardClick={openModal}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        totalResults={filteredTools.length}
      />
      {selectedTool && <ToolModal tool={selectedTool} onClose={closeModal} />}
    </main>
  );
};

export default Directory;
