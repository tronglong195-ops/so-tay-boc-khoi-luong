import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar.jsx';
import { SearchModal } from './components/SearchModal.jsx';
import { MobileQuickBar } from './components/MobileQuickBar.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { ItemDetailPage } from './pages/ItemDetailPage.jsx';
import { MeasurementPage } from './pages/MeasurementPage.jsx';
import { ChecklistPage } from './pages/ChecklistPage.jsx';
import { ReferencesPage } from './pages/ReferencesPage.jsx';
import { TestVerificationPage } from './pages/TestVerificationPage.jsx';

import { partAItems, getPartAItemById } from './data/partA_items.js';
import { partBItems, getPartBItemById } from './data/partB_items.js';

export function App() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash || '#/');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      setCurrentHash(hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Global shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Routing resolution
  const renderCurrentPage = () => {
    const rawSlug = currentHash.replace(/^#\/?/, '').trim();

    if (!rawSlug || rawSlug === 'quy-trinh') {
      return <HomePage />;
    }

    if (rawSlug === 'lay-so-lieu') {
      return <MeasurementPage />;
    }

    if (rawSlug === 'kiem-tra-cheo') {
      return <ChecklistPage />;
    }

    if (rawSlug === 'can-cu') {
      return <ReferencesPage />;
    }

    if (rawSlug === 'kiem-tra') {
      return <TestVerificationPage />;
    }

    // Check Part A items
    const itemA = getPartAItemById(rawSlug);
    if (itemA) {
      return <ItemDetailPage item={itemA} />;
    }

    // Check Part B items
    const itemB = getPartBItemById(rawSlug);
    if (itemB) {
      return <ItemDetailPage item={itemB} />;
    }

    // Not found fallback
    return <ItemDetailPage item={null} />;
  };

  return (
    <div className="app-container">
      <Header 
        onToggleSidebar={() => setSidebarOpen(prev => !prev)} 
        onOpenSearch={() => setSearchOpen(true)} 
      />

      <div className="app-body">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
          currentHash={currentHash} 
        />

        <main className="app-main">
          {renderCurrentPage()}
        </main>
      </div>

      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
      />

      <MobileQuickBar 
        onToggleSidebar={() => setSidebarOpen(prev => !prev)}
        onOpenSearch={() => setSearchOpen(true)}
      />
    </div>
  );
}
