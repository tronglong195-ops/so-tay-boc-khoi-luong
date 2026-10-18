import React, { useState, useEffect } from 'react';
import { knownIssuesChecklist } from '../data/partD_checklist.js';

const STORAGE_KEY = 'qs_handbook_checklist_state_v1';

export function ChecklistPage() {
  const [checkedMap, setCheckedMap] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Cannot read localStorage:', e);
    }
    return {};
  });

  const [filterSeverity, setFilterSeverity] = useState('ALL');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedMap));
    } catch (e) {
      console.warn('Cannot save to localStorage:', e);
    }
  }, [checkedMap]);

  const toggleCheck = (id) => {
    setCheckedMap(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleReset = () => {
    if (window.confirm('Bạn có chắc chắn muốn bỏ chọn toàn bộ checklist kiểm tra chéo không?')) {
      setCheckedMap({});
    }
  };

  const totalCount = knownIssuesChecklist.length;
  const checkedCount = knownIssuesChecklist.filter(item => checkedMap[item.id]).length;
  const percentCompleted = Math.round((checkedCount / totalCount) * 100);

  const filteredList = knownIssuesChecklist.filter(item => {
    if (filterSeverity === 'ALL') return true;
    return item.level === filterSeverity;
  });

  return (
    <div className="content-wrapper">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <a href="#/">Trang chủ</a>
        <span>/</span>
        <span style={{ color: '#0f172a', fontWeight: 600 }}>Phần D: Kiểm tra chéo &amp; 18 Lỗi</span>
      </div>

      <div className="page-header-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
          <span className="file-tag">Phần D</span>
          <span className="sheet-badge">Checklist kiểm soát chất lượng QA/QC</span>
        </div>
        <h1 className="page-title">
          Kiểm Tra Chéo &amp; 18 Lỗi/Rủi Ro Đã Biết Trong Hai File Template
        </h1>
        <p className="page-purpose">
          Gom toàn bộ 18 lỗi và rủi ro kỹ thuật đã được kiểm chứng trong hai file template Excel (bản 2026.09.08). Kỹ sư cần rà soát và tick xác nhận từng mục trước khi nộp hồ sơ dự toán. Trạng thái tick được lưu tự động trong trình duyệt của bạn.
        </p>

        {/* Progress Bar */}
        <div style={{ marginTop: '1.25rem', background: '#f1f5f9', borderRadius: '8px', padding: '1rem', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1e3a8a' }}>
              Tiến độ rà soát: {checkedCount} / {totalCount} mục ({percentCompleted}%)
            </span>
            <button 
              onClick={handleReset}
              style={{ background: 'none', border: 'none', color: '#dc2626', fontSize: '0.8rem', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Đặt lại toàn bộ
            </button>
          </div>
          <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
            <div 
              style={{ 
                height: '100%', 
                width: `${percentCompleted}%`, 
                background: percentCompleted === 100 ? '#16a34a' : '#2563eb', 
                transition: 'width 0.3s ease' 
              }} 
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {['ALL', 'Nghiêm trọng', 'Cao', 'Trung bình', 'Thấp'].map((level) => (
          <button
            key={level}
            onClick={() => setFilterSeverity(level)}
            style={{
              padding: '0.45rem 0.9rem',
              borderRadius: '6px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: filterSeverity === level ? '2px solid #1e3a8a' : '1px solid #cbd5e1',
              background: filterSeverity === level ? '#eff6ff' : '#ffffff',
              color: filterSeverity === level ? '#1e3a8a' : '#475569'
            }}
          >
            {level === 'ALL' ? 'Tất cả (18 mục)' : `${level} (${knownIssuesChecklist.filter(i => i.level === level).length})`}
          </button>
        ))}
      </div>

      {/* Interactive Checklist */}
      <div className="checklist-container">
        {filteredList.map((item) => {
          const isChecked = !!checkedMap[item.id];
          return (
            <div 
              key={item.id} 
              className={`checklist-item ${isChecked ? 'checked' : ''}`}
              onClick={() => toggleCheck(item.id)}
            >
              <div className="custom-checkbox">
                {isChecked && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                  <span className="col-tag" style={{ background: '#0f172a', color: '#fff' }}>{item.id}</span>
                  <span className={`severity-pill ${item.level}`}>{item.level}</span>
                  <span className="sheet-badge">{item.fileSheet}</span>
                  {item.targetSlug && (
                    <a 
                      href={`#/${item.targetSlug}`} 
                      onClick={(e) => e.stopPropagation()}
                      style={{ fontSize: '0.75rem', color: '#2563eb', textDecoration: 'underline' }}
                    >
                      Xem trang hạng mục →
                    </a>
                  )}
                </div>

                <h3 className="checklist-title" style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: '#334155', marginBottom: '0.5rem', lineHeight: '1.5' }}>
                  <strong>Vấn đề:</strong> {item.issue}
                </p>

                <div style={{ fontSize: '0.85rem', color: '#065f46', background: '#f0fdf4', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #bbf7d0' }}>
                  <strong>Cách xử lý khi dùng:</strong> {item.solution}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
