import React from 'react';
import { referenceDocuments } from '../data/partE_references.js';

export function ReferencesPage() {
  return (
    <div className="content-wrapper">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <a href="#/">Trang chủ</a>
        <span>/</span>
        <span style={{ color: '#0f172a', fontWeight: 600 }}>Phần E: Căn cứ tham khảo</span>
      </div>

      <div className="page-header-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
          <span className="file-tag">Phần E</span>
          <span className="sheet-badge">7 Văn bản &amp; Tiêu chuẩn gốc</span>
        </div>
        <h1 className="page-title">
          Căn Cứ Tham Khảo Pháp Lý &amp; Tiêu Chuẩn Kỹ Thuật
        </h1>
        <p className="page-purpose">
          Liệt kê chính xác 7 văn bản quy phạm pháp luật và tiêu chuẩn xây dựng quốc gia dùng làm căn cứ xác định khối lượng và lập dự toán. Kỹ sư QS luôn cần đối chiếu với văn bản gốc ban hành.
        </p>
      </div>

      <div className="spec-section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {referenceDocuments.map((doc, idx) => (
            <div 
              key={doc.id}
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
                borderLeft: '5px solid var(--primary)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)' }}>
                  {idx + 1}. {doc.code}
                </h3>
                <span className="col-tag" style={{ background: '#fef3c7', color: '#92400e', border: '1px solid #fde68a' }}>
                  {doc.note}
                </span>
              </div>

              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.4rem' }}>
                {doc.title}
              </div>

              <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: '1.5', marginBottom: '0.5rem' }}>
                {doc.summary}
              </p>

              <div style={{ fontSize: '0.85rem', color: '#64748b', background: '#f8fafc', padding: '0.4rem 0.75rem', borderRadius: '6px' }}>
                <strong>Áp dụng trong đo bóc:</strong> {doc.relevance}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
