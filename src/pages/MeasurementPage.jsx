import React, { useState } from 'react';
import { 
  generalMeasurementRules, 
  autocadCommands, 
  pdfMeasurementGuide, 
  specChecklist, 
  parameterSourcesMapping 
} from '../data/partC_measure.js';

export function MeasurementPage() {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredMapping = parameterSourcesMapping.filter(item => {
    const q = filterQuery.toLowerCase();
    return (
      item.sheet.toLowerCase().includes(q) ||
      item.param.toLowerCase().includes(q) ||
      item.source.toLowerCase().includes(q) ||
      item.cadTool.toLowerCase().includes(q)
    );
  });

  return (
    <div className="content-wrapper">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <a href="#/">Trang chủ</a>
        <span>/</span>
        <span style={{ color: '#0f172a', fontWeight: 600 }}>Phần C: Kỹ thuật lấy số liệu</span>
      </div>

      <div className="page-header-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
          <span className="file-tag">Phần C</span>
          <span className="sheet-badge">Kỹ thuật đo vẽ thực chiến</span>
        </div>
        <h1 className="page-title">
          Cẩm Nang Lấy Số Liệu: AutoCAD, Đo PDF &amp; Chỉ Dẫn Kỹ Thuật
        </h1>
        <p className="page-purpose">
          Hướng dẫn chi tiết phương pháp trích xuất số liệu chính xác, tránh sai số tỷ lệ khung nhìn, quy chuẩn đo diện tích phòng bằng Polyline kín và checklist các từ khóa bắt buộc tìm trong hồ sơ Chỉ dẫn kỹ thuật (Specifications).
        </p>
      </div>

      {/* 0. Quy tắc cốt lõi trước khi đo */}
      <div className="spec-section">
        <h2 className="section-title">
          <span className="section-num">0</span>
          <span>5 Quy tắc Cốt lõi Trước khi Tiến hành Đo bóc</span>
        </h2>
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '22%' }}>Nhiệm vụ</th>
                <th style={{ width: '48%' }}>Cách thực hiện chuẩn xác</th>
                <th style={{ width: '30%' }}>Vì sao bắt buộc?</th>
              </tr>
            </thead>
            <tbody>
              {generalMeasurementRules.map((rule, idx) => (
                <tr key={idx}>
                  <td style={{ fontWeight: 700, color: 'var(--primary)' }}>{rule.task}</td>
                  <td>{rule.method}</td>
                  <td style={{ color: '#64748b', fontSize: '0.85rem' }}>{rule.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 1. Lệnh AutoCAD */}
      <div className="spec-section">
        <h2 className="section-title">
          <span className="section-num">1</span>
          <span>Hệ thống Lệnh AutoCAD Chuyên dụng cho Kỹ sư QS</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
          {autocadCommands.map((cmd, idx) => (
            <div key={idx} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <span className="col-tag" style={{ background: '#0f172a', color: '#4ade80' }}>{cmd.command}</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569' }}>{cmd.name}</span>
              </div>
              <div style={{ fontSize: '0.875rem', color: '#0f172a', marginBottom: '0.4rem' }}>
                <strong>Thao tác:</strong> {cmd.usage}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#334155', marginBottom: '0.4rem' }}>
                <strong>Áp dụng:</strong> {cmd.applicableTo}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--primary)', background: 'var(--primary-bg)', padding: '0.35rem 0.6rem', borderRadius: '4px' }}>
                💡 <em>Mẹo QS:</em> {cmd.proTip}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Kỹ thuật đo PDF */}
      <div className="spec-section">
        <h2 className="section-title">
          <span className="section-num">2</span>
          <span>Kỹ thuật Đo bóc trên Hồ sơ Bản vẽ PDF</span>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {pdfMeasurementGuide.map((step, idx) => (
            <div key={idx} style={{ padding: '0.9rem 1.1rem', background: '#f8fafc', borderLeft: '4px solid var(--primary-light)', borderRadius: '4px' }}>
              <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.25rem' }}>
                {step.step}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#334155', lineHeight: '1.5' }}>
                {step.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Chỉ dẫn kỹ thuật PDF */}
      <div className="spec-section">
        <h2 className="section-title">
          <span className="section-num">3</span>
          <span>Checklist Từ khóa Tra cứu trong Chỉ Dẫn Kỹ Thuật (Ctrl + F)</span>
        </h2>
        <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.75rem' }}>
          Khi nhận hồ sơ PDF Chỉ dẫn kỹ thuật công trình (Specifications), dùng phím Ctrl + F tìm các từ khóa sau để lấy thông số chính xác:
        </p>
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '25%' }}>Mục thông số cần tìm</th>
                <th style={{ width: '30%' }}>Từ khóa tìm kiếm (Ctrl+F)</th>
                <th style={{ width: '20%' }}>Vị trí nhập trong Excel</th>
                <th style={{ width: '25%' }}>Hướng dẫn kỹ thuật</th>
              </tr>
            </thead>
            <tbody>
              {specChecklist.map((item, idx) => (
                <tr key={idx}>
                  <td style={{ fontWeight: 600, color: '#0f172a' }}>{item.item}</td>
                  <td><code style={{ background: '#fef3c7', padding: '2px 6px', borderRadius: '4px', color: '#92400e' }}>{item.keywords}</code></td>
                  <td><span className="col-tag">{item.excelLocation}</span></td>
                  <td style={{ fontSize: '0.8rem', color: '#475569' }}>{item.instruction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Bản đồ thông số sheet */}
      <div className="spec-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <h2 className="section-title" style={{ borderBottom: 'none', marginBottom: 0, paddingBottom: 0 }}>
            <span className="section-num">4</span>
            <span>Bản đồ Tra cứu: Thông số → Nguồn bản vẽ → Cột nhập</span>
          </h2>
          <input
            type="text"
            placeholder="Lọc sheet hoặc thông số..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            style={{
              padding: '0.45rem 0.85rem',
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              fontSize: '0.85rem',
              outline: 'none',
              width: '240px'
            }}
          />
        </div>

        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '18%' }}>Tên Sheet Excel</th>
                <th style={{ width: '32%' }}>Thông số nhập chính</th>
                <th style={{ width: '35%' }}>Lấy ở bản vẽ nào?</th>
                <th style={{ width: '15%' }}>Lệnh CAD khuyên dùng</th>
              </tr>
            </thead>
            <tbody>
              {filteredMapping.map((item, idx) => (
                <tr key={idx}>
                  <td style={{ fontWeight: 700, color: 'var(--primary)' }}>{item.sheet}</td>
                  <td style={{ fontSize: '0.85rem' }}>{item.param}</td>
                  <td style={{ fontSize: '0.85rem', color: '#334155' }}>{item.source}</td>
                  <td><span className="col-tag">{item.cadTool}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
