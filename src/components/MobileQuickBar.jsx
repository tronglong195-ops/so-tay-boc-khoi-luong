import React from 'react';

export function MobileQuickBar({ onToggleSidebar, onOpenSearch }) {
  const scrollToCalculator = () => {
    const calcEl = document.getElementById('mini-calculator');
    if (calcEl) {
      calcEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // If on a page without calculator, open search or alert gently
      window.location.hash = '#/mong';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mobile-quick-bar" aria-label="Thanh điều hướng nhanh cho điện thoại">
      <button 
        type="button"
        className="quick-bar-btn" 
        onClick={onToggleSidebar}
        title="Mục lục các cấu kiện"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <span>Mục lục</span>
      </button>

      <button 
        type="button"
        className="quick-bar-btn" 
        onClick={onOpenSearch}
        title="Tìm kiếm nhanh cấu kiện"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <span>Tìm kiếm</span>
      </button>

      <button 
        type="button"
        className="quick-bar-btn" 
        onClick={scrollToCalculator}
        title="Cuộn tới máy tính mini"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2"></rect>
          <line x1="8" y1="6" x2="16" y2="6"></line>
          <line x1="16" y1="14" x2="16" y2="18"></line>
          <path d="M16 10h.01"></path>
          <path d="M12 10h.01"></path>
          <path d="M8 10h.01"></path>
          <path d="M12 14h.01"></path>
          <path d="M8 14h.01"></path>
          <path d="M12 18h.01"></path>
          <path d="M8 18h.01"></path>
        </svg>
        <span>Máy tính</span>
      </button>

      <button 
        type="button"
        className="quick-bar-btn" 
        onClick={scrollToTop}
        title="Lên đầu trang"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        <span>Lên đầu</span>
      </button>
    </div>
  );
}
