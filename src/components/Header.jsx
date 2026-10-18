import React from 'react';

export function Header({ onToggleSidebar, onOpenSearch }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <button 
          className="menu-toggle" 
          onClick={onToggleSidebar} 
          aria-label="Mở danh mục điều hướng"
          title="Mở danh mục"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <a href="#/" className="brand-link">
          <span className="brand-badge">QS PRO</span>
          <div className="brand-text">
            <h1>Sổ Tay Bóc Khối Lượng</h1>
            <p>AutoCAD &amp; Excel 1.1 / 1.2</p>
          </div>
        </a>
      </div>

      <div className="header-right">
        <button 
          className="search-trigger-btn" 
          onClick={onOpenSearch}
          title="Tìm kiếm toàn site (Ctrl + K)"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span>Tìm cấu kiện, công thức...</span>
          <span className="kbd-shortcut">Ctrl K</span>
        </button>

        <button 
          className="btn-header" 
          onClick={handlePrint}
          title="In tài liệu trang hiện tại"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          <span>In trang</span>
        </button>
      </div>
    </header>
  );
}
