import React from 'react';
import { FormulaBlock } from '../components/FormulaBlock.jsx';
import { MiniCalculator } from '../components/MiniCalculator.jsx';
import { WarningBox } from '../components/WarningBox.jsx';
import { svgComponents } from '../components/svgs/index.jsx';

export function ItemDetailPage({ item }) {
  if (!item) {
    return (
      <div className="content-wrapper">
        <div className="page-header-card">
          <h2>Không tìm thấy hạng mục</h2>
          <p>Đường dẫn không tồn tại hoặc đã được di chuyển. Bấm nút bên dưới để quay lại trang chủ.</p>
          <a href="#/" className="btn-header btn-header-primary" style={{ marginTop: '1rem', display: 'inline-flex' }}>
            Về Trang chủ
          </a>
        </div>
      </div>
    );
  }

  // Dynamic SVG component resolution
  const SvgComponent = item.svgKey && svgComponents[item.svgKey] 
    ? svgComponents[item.svgKey] 
    : null;

  return (
    <div className="content-wrapper">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <a href="#/">Trang chủ</a>
        <span>/</span>
        <span>{item.fileSource === '1.1' ? 'Phần A: Bê tông & Ván khuôn' : 'Phần B: Thép & Kết cấu thép'}</span>
        <span>/</span>
        <span style={{ color: '#0f172a', fontWeight: 600 }}>{item.title}</span>
      </div>

      {/* Header Card */}
      <div className="page-header-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
          <span className={`file-tag ${item.fileSource === '1.2' ? 'tag-steel' : ''}`}>
            File {item.fileSource}
          </span>
          <span className="sheet-badge">
            Sheet: {item.sheetName}
          </span>
        </div>
        <h1 className="page-title">
          {item.title}
        </h1>
        
        {/* ① Sheet dùng để làm gì */}
        <div className="page-purpose">
          <strong style={{ color: 'var(--primary)' }}>① Mục đích &amp; Phạm vi áp dụng: </strong>
          {item.purpose}
        </div>
      </div>

      {/* ② Bảng Thông số cần lấy */}
      <div className="spec-section">
        <h2 className="section-title">
          <span className="section-num">②</span>
          <span>Bảng thông số cần lấy từ bản vẽ &amp; Hồ sơ kỹ thuật</span>
        </h2>
        <div className="table-hint-mobile">
          <span>👈</span>
          <span>Vuốt ngang bảng để xem đủ Cột Excel &amp; Ghi chú kỹ thuật</span>
          <span>👉</span>
        </div>
        <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.75rem' }}>
          Quy chuẩn nguồn trích xuất thông số từ bản vẽ AutoCAD, đo PDF và chỉ dẫn kỹ thuật:
        </p>
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '22%' }}>Thông số cần lấy</th>
                <th style={{ width: '12%' }}>Cột Excel</th>
                <th style={{ width: '40%' }}>Lấy ở đâu (Bản vẽ / Lệnh CAD / Chỉ dẫn KT)</th>
                <th style={{ width: '26%' }}>Ghi chú kỹ thuật</th>
              </tr>
            </thead>
            <tbody>
              {item.parameters && item.parameters.length > 0 ? (
                item.parameters.map((param, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 600, color: '#0f172a' }}>{param.name}</td>
                    <td><span className="col-tag">{param.column}</span></td>
                    <td style={{ color: '#334155' }}>{param.source}</td>
                    <td style={{ color: '#64748b', fontSize: '0.8rem' }}>{param.note}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} style={{ textAlign: 'center', color: '#64748b' }}>
                    Chưa có thông số chi tiết. Vui lòng đối chiếu hồ sơ thiết kế.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ③ Công thức tính toán */}
      <div className="spec-section">
        <h2 className="section-title">
          <span className="section-num">③</span>
          <span>Công thức tính toán (Toán học &amp; Excel gốc)</span>
        </h2>
        <FormulaBlock formulas={item.formulas} />
      </div>

      {/* ④ Hình vẽ minh họa SVG inline */}
      <div className="spec-section">
        <h2 className="section-title">
          <span className="section-num">④</span>
          <span>Hình vẽ minh họa kỹ thuật (SVG Inline)</span>
        </h2>
        <div className="svg-container">
          <div className="svg-mobile-hint">
            <span>💡 Gợi ý: Có thể xoay ngang điện thoại để xem bản vẽ rộng hơn</span>
          </div>
          {SvgComponent ? (
            <SvgComponent />
          ) : (
            <div style={{ padding: '2rem', color: '#64748b', textAlign: 'center' }}>
              Hình minh họa kỹ thuật cho cấu kiện {item.title}
            </div>
          )}
          <div className="svg-caption">
            Sơ đồ hình học minh họa các kích thước và nhãn tương ứng với các cột trong bảng tính Excel
          </div>
        </div>
      </div>

      {/* ⑤ Ví dụ số thực tế */}
      {item.example && (
        <div className="spec-section">
          <h2 className="section-title">
            <span className="section-num">⑤</span>
            <span>Ví dụ số thực tế (Đối chiếu mẫu dự án)</span>
          </h2>
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>
              {item.example.description}
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginTop: '0.75rem' }}>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                  Thông số đầu vào nhập mẫu:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.35rem' }}>
                  {Object.entries(item.example.inputs || {}).map(([k, v]) => (
                    <span key={k} className="col-tag" style={{ background: '#fff', border: '1px solid #cbd5e1' }}>
                      {k} = {typeof v === 'number' ? v.toLocaleString('vi-VN') : v}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#15803d', textTransform: 'uppercase' }}>
                  Kết quả tính ra từ Excel:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.35rem' }}>
                  {Object.entries(item.example.outputs || {}).slice(0, 10).map(([k, v]) => (
                    <span key={k} className="col-tag" style={{ background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0' }}>
                      {k} = {typeof v === 'number' ? (Number.isInteger(v) ? v : Number(v.toFixed(3))).toLocaleString('vi-VN') : v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ⑥ Máy tính Mini tương tác */}
      <div className="spec-section" id="mini-calculator">
        <h2 className="section-title">
          <span className="section-num">⑥</span>
          <span>Máy tính mini tương tác (Kiểm tra số liệu)</span>
        </h2>
        <MiniCalculator calculator={item.calculator} itemTitle={item.title} />
      </div>

      {/* ⑦ Hộp cảnh báo lỗi & rủi ro đã biết */}
      <div className="spec-section">
        <h2 className="section-title">
          <span className="section-num">⑦</span>
          <span>Hộp cảnh báo Lỗi &amp; Rủi ro đã biết trong Template</span>
        </h2>
        <WarningBox warnings={item.warnings} />
      </div>
    </div>
  );
}
