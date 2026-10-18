import React from 'react';
import { partAItems } from '../data/partA_items.js';
import { partBItems } from '../data/partB_items.js';

export function Sidebar({ isOpen, onClose, currentHash }) {
  const handleLinkClick = () => {
    if (window.innerWidth <= 1024) {
      onClose();
    }
  };

  const isCurrent = (hash) => {
    if (hash === '#/' && (currentHash === '' || currentHash === '#' || currentHash === '#/')) {
      return true;
    }
    return currentHash === hash;
  };

  return (
    <>
      <div 
        className={`sidebar-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className={`app-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-mobile-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="brand-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>QS PRO</span>
            <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary-dark)' }}>Mục Lục Cấu Kiện</span>
          </div>
          <button 
            type="button"
            className="sidebar-close-btn"
            onClick={onClose} 
            aria-label="Đóng danh mục"
          >
            ✕
          </button>
        </div>

        <a 
          href="#/" 
          className="sidebar-workflow-btn" 
          onClick={handleLinkClick}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 14 4 9 9 4"></polyline>
            <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
          </svg>
          <span>Quay lại Quy trình 7 bước</span>
        </a>

        <nav className="sidebar-nav">
          {/* Nhóm Điều hướng chính */}
          <div className="nav-group">
            <div className="nav-group-header">
              <span>Quy trình &amp; Cẩm nang</span>
            </div>
            <a 
              href="#/" 
              className={`nav-item ${isCurrent('#/') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              <span className="nav-item-icon">📋</span>
              <span>Trang chủ: Quy trình QS</span>
            </a>
            <a 
              href="#/lay-so-lieu" 
              className={`nav-item ${isCurrent('#/lay-so-lieu') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              <span className="nav-item-icon">📐</span>
              <span>Phần C: Lấy số liệu CAD / PDF</span>
            </a>
            <a 
              href="#/kiem-tra-cheo" 
              className={`nav-item ${isCurrent('#/kiem-tra-cheo') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              <span className="nav-item-icon">⚠️</span>
              <span>Phần D: Checklist 18 Lỗi</span>
            </a>
            <a 
              href="#/can-cu" 
              className={`nav-item ${isCurrent('#/can-cu') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              <span className="nav-item-icon">⚖️</span>
              <span>Phần E: 7 Căn cứ Pháp lý</span>
            </a>
            <a 
              href="#/kiem-tra" 
              className={`nav-item ${isCurrent('#/kiem-tra') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              <span className="nav-item-icon">🧪</span>
              <span>Kiểm tra Test Cases (Pass/Fail)</span>
            </a>
          </div>

          {/* Nhóm Phần A: Bê tông & Ván khuôn */}
          <div className="nav-group">
            <div className="nav-group-header">
              <span>Phần A: Bê tông &amp; Ván khuôn</span>
              <span className="nav-group-badge">23 sheet</span>
            </div>
            {partAItems.map((item) => (
              <a
                key={item.id}
                href={`#/${item.id}`}
                className={`nav-item ${isCurrent(`#/${item.id}`) ? 'active' : ''}`}
                onClick={handleLinkClick}
                title={item.title}
              >
                <span className="nav-item-icon">🔹</span>
                <span>{item.title}</span>
              </a>
            ))}
          </div>

          {/* Nhóm Phần B: Thép & KCT */}
          <div className="nav-group">
            <div className="nav-group-header">
              <span>Phần B: Thép &amp; Kết cấu thép</span>
              <span className="nav-group-badge">21 trang</span>
            </div>
            {partBItems.map((item) => (
              <a
                key={item.id}
                href={`#/${item.id}`}
                className={`nav-item ${isCurrent(`#/${item.id}`) ? 'active' : ''}`}
                onClick={handleLinkClick}
                title={item.title}
              >
                <span className="nav-item-icon">🔸</span>
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
}
