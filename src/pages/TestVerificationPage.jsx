import React, { useState, useMemo } from 'react';
import { runAllTests } from '../data/testcases.js';

export function TestVerificationPage() {
  const [selectedSheet, setSelectedSheet] = useState(null);
  const [filterStatus, setFilterStatus] = useState('ALL');

  const testReport = useMemo(() => {
    return runAllTests();
  }, []);

  const filteredResults = testReport.results.filter(item => {
    if (filterStatus === 'ALL') return true;
    return item.status === filterStatus;
  });

  return (
    <div className="content-wrapper">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <a href="#/">Trang chủ</a>
        <span>/</span>
        <span style={{ color: '#0f172a', fontWeight: 600 }}>Trang kiểm thử Test Cases (Ẩn)</span>
      </div>

      <div className="page-header-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
          <span className="file-tag">Kiểm thử tự động</span>
          <span className="sheet-badge">Dung sai: ±0.01</span>
        </div>
        <h1 className="page-title">
          Bảng Đối Soát Test Cases Tự Động (File 1.1 &amp; File 1.2)
        </h1>
        <p className="page-purpose">
          Hệ thống tự động chạy kiểm thử toàn bộ giá trị mẫu trích xuất từ 23 sheet của File 1.1 và 20 sheet của File 1.2. Mọi công thức tính toán đều phải khớp với kết quả gốc của template Excel trong phạm vi sai số tuyệt đối &le; 0.01.
        </p>

        {/* Summary Card */}
        <div className="test-summary-card" style={{ marginTop: '1.25rem' }}>
          <div className="test-stat">
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Tổng số trường kiểm thử</div>
            <div className="test-stat-val" style={{ color: 'var(--primary)' }}>{testReport.totalTests}</div>
          </div>
          <div className="test-stat pass">
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Trường Đạt (PASS)</div>
            <div className="test-stat-val">{testReport.passedTests}</div>
          </div>
          <div className="test-stat fail">
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Trường Lỗi (FAIL)</div>
            <div className="test-stat-val">{testReport.failedTests}</div>
          </div>
          <div className="test-stat" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.25rem' }}>Trạng thái toàn bộ</div>
            {testReport.isAllPassed ? (
              <span className="badge-pass" style={{ fontSize: '0.95rem', padding: '0.4rem 0.8rem', justifyContent: 'center' }}>
                ✓ 100% PASS
              </span>
            ) : (
              <span className="badge-fail" style={{ fontSize: '0.95rem', padding: '0.4rem 0.8rem', justifyContent: 'center' }}>
                ✗ FAILED
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <button
          onClick={() => setFilterStatus('ALL')}
          style={{
            padding: '0.45rem 0.85rem',
            borderRadius: '6px',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            border: filterStatus === 'ALL' ? '2px solid var(--primary)' : '1px solid #cbd5e1',
            background: filterStatus === 'ALL' ? 'var(--primary-bg)' : '#fff',
            color: filterStatus === 'ALL' ? 'var(--primary)' : '#475569'
          }}
        >
          Tất cả ({testReport.results.length} sheet)
        </button>
        <button
          onClick={() => setFilterStatus('PASS')}
          style={{
            padding: '0.45rem 0.85rem',
            borderRadius: '6px',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            border: filterStatus === 'PASS' ? '2px solid #16a34a' : '1px solid #cbd5e1',
            background: filterStatus === 'PASS' ? '#f0fdf4' : '#fff',
            color: filterStatus === 'PASS' ? '#16a34a' : '#475569'
          }}
        >
          Đạt ({testReport.results.filter(r => r.status === 'PASS').length})
        </button>
        <button
          onClick={() => setFilterStatus('FAIL')}
          style={{
            padding: '0.45rem 0.85rem',
            borderRadius: '6px',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            border: filterStatus === 'FAIL' ? '2px solid #dc2626' : '1px solid #cbd5e1',
            background: filterStatus === 'FAIL' ? '#fef2f2' : '#fff',
            color: filterStatus === 'FAIL' ? '#dc2626' : '#475569'
          }}
        >
          Lỗi ({testReport.results.filter(r => r.status === 'FAIL').length})
        </button>
      </div>

      {/* Table of Results */}
      <div className="spec-section">
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '25%' }}>Tên Sheet Excel</th>
                <th style={{ width: '15%' }}>Thuộc File</th>
                <th style={{ width: '15%' }}>Dòng mẫu phân tích</th>
                <th style={{ width: '20%' }}>Số trường kiểm thử</th>
                <th style={{ width: '15%' }}>Kết quả</th>
                <th style={{ width: '10%' }}>Chi tiết</th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.map((item, idx) => (
                <tr key={idx}>
                  <td style={{ fontWeight: 700, color: '#0f172a' }}>{item.sheet}</td>
                  <td>
                    <span className={`file-tag ${item.file === 'File 1.2' ? 'tag-steel' : ''}`}>
                      {item.file}
                    </span>
                  </td>
                  <td>Dòng {item.row}</td>
                  <td>{item.details.length} trường</td>
                  <td>
                    {item.status === 'PASS' ? (
                      <span className="badge-pass">✓ PASS</span>
                    ) : (
                      <span className="badge-fail">✗ FAIL</span>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => setSelectedSheet(item)}
                      style={{
                        padding: '0.25rem 0.6rem',
                        fontSize: '0.75rem',
                        background: 'var(--primary-bg)',
                        color: 'var(--primary)',
                        border: '1px solid #bbf7d0',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      Soát số
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedSheet && (
        <div className="modal-backdrop" onClick={() => setSelectedSheet(null)}>
          <div className="search-modal" style={{ maxWidth: '780px' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.25rem', borderBottom: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)' }}>
                Chi tiết đối soát: Sheet {selectedSheet.sheet} ({selectedSheet.file})
              </h3>
              <button 
                onClick={() => setSelectedSheet(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#64748b' }}
              >
                ✕
              </button>
            </div>

            <div style={{ padding: '1rem', overflowY: 'auto', maxHeight: '60vh' }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Cột</th>
                    <th>Giá trị Excel gốc</th>
                    <th>Tính toán thực tế</th>
                    <th>Độ lệch (Diff)</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedSheet.details.map((d, i) => (
                    <tr key={i}>
                      <td><span className="col-tag">{d.field}</span></td>
                      <td style={{ fontFamily: 'var(--font-mono)' }}>{d.expected}</td>
                      <td style={{ fontFamily: 'var(--font-mono)' }}>{d.actual}</td>
                      <td style={{ fontFamily: 'var(--font-mono)', color: d.diff > 0.01 ? '#dc2626' : '#16a34a' }}>
                        {d.diff.toExponential(3)}
                      </td>
                      <td>
                        {d.pass ? (
                          <span className="badge-pass">PASS</span>
                        ) : (
                          <span className="badge-fail">FAIL</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
