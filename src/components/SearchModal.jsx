import React, { useState, useEffect, useRef } from 'react';
import { partAItems } from '../data/partA_items.js';
import { partBItems } from '../data/partB_items.js';
import { knownIssuesChecklist } from '../data/partD_checklist.js';
import { referenceDocuments } from '../data/partE_references.js';

export function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      setSearchTerm('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Aggregate searchable items
  const allSearchables = [
    ...partAItems.map(item => ({
      type: 'Phần A: Bê tông & Ván khuôn',
      title: item.title,
      sheet: item.sheetName,
      url: `#/${item.id}`,
      description: item.purpose,
      columns: item.parameters?.map(p => p.column).join(' ') || ''
    })),
    ...partBItems.map(item => ({
      type: 'Phần B: Thép & KCT',
      title: item.title,
      sheet: item.sheetName,
      url: `#/${item.id}`,
      description: item.purpose,
      columns: item.parameters?.map(p => p.column).join(' ') || ''
    })),
    {
      type: 'Phần C: Lấy số liệu',
      title: 'Lệnh AutoCAD & Đo vẽ PDF, Chỉ dẫn kỹ thuật',
      sheet: 'Kỹ thuật đo',
      url: '#/lay-so-lieu',
      description: 'DIST, BOUNDARY, LIST, QSELECT, DATAEXTRACTION, Calibrate scale PDF, Checklist Spec',
      columns: 'CAD PDF'
    },
    ...knownIssuesChecklist.map(issue => ({
      type: 'Phần D: Checklist Lỗi',
      title: `${issue.id}: ${issue.title}`,
      sheet: issue.fileSheet,
      url: `#/kiem-tra-cheo`,
      description: issue.issue,
      columns: ''
    })),
    ...referenceDocuments.map(ref => ({
      type: 'Phần E: Căn cứ Pháp lý',
      title: `${ref.code} - ${ref.title}`,
      sheet: 'Văn bản gốc',
      url: `#/can-cu`,
      description: ref.summary,
      columns: ''
    }))
  ];

  const results = searchTerm.trim() === '' 
    ? allSearchables.slice(0, 8) 
    : allSearchables.filter(item => {
        const query = searchTerm.toLowerCase();
        return (
          item.title.toLowerCase().includes(query) ||
          item.sheet.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.columns.toLowerCase().includes(query) ||
          item.type.toLowerCase().includes(query)
        );
      }).slice(0, 15);

  const handleSelect = (url) => {
    window.location.hash = url;
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#64748b' }}>
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Tìm theo tên cấu kiện, tên sheet, cột Excel (AO, BN, BR, AW)..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', fontSize: '1.2rem' }}
            aria-label="Đóng"
          >
            ✕
          </button>
        </div>

        <div className="search-results-list">
          {results.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
              Không tìm thấy kết quả nào phù hợp với "{searchTerm}"
            </div>
          ) : (
            results.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                className={`search-result-item ${idx === selectedIndex ? 'selected' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelect(item.url);
                }}
              >
                <div className="result-title">
                  <span>{item.title}</span>
                  <span className="sheet-badge">{item.sheet}</span>
                </div>
                <div className="result-snippet">
                  <span style={{ fontWeight: 600, color: 'var(--primary)', marginRight: '6px' }}>[{item.type}]</span>
                  {item.description}
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
