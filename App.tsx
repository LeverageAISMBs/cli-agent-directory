
import React, { Suspense } from 'react';
import Hero from './components/Hero';
import Seo from './components/Seo';

const Directory = React.lazy(() => import('./components/Directory'));

const App: React.FC = () => {
  return (
    <>
      <Seo
        title="Terminal Takeover - The AI CLI Directory"
        description="Discover the top 75 AI agents, assistants, and platforms transforming the shell from a simple interface into an intelligent development partner."
      />
      <Hero />
      <Suspense fallback={<div className="text-center py-20">Loading Directory...</div>}>
        <Directory />
      </Suspense>
    </>
  );
};

export default App;
