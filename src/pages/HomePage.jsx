import React from 'react';
import { workflowSteps } from '../data/workflow.js';

export function HomePage() {
  return (
    <div className="content-wrapper">
      <div className="page-header-card">
        <h1 className="page-title">
          <span>Sổ Tay Tra Cứu Bóc Khối Lượng</span>
          <span className="file-tag">QS Standard 2026</span>
        </h1>
        <p style={{ color: '#475569', fontSize: '1rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
          Cẩm nang thực chiến dành cho Kỹ sư Đo bóc Khối lượng (QS) xây dựng Việt Nam. Hướng dẫn chi tiết phương pháp trích xuất số liệu từ bản vẽ AutoCAD, hồ sơ PDF và chỉ dẫn kỹ thuật để nhập liệu chuẩn xác vào 2 hệ thống bảng tính Excel chuyên nghiệp:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginTop: '1.25rem' }}>
          <div style={{ background: '#f8fafc', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '1rem' }}>
            <span className="file-tag">File 1.1</span>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary-dark)', margin: '0.35rem 0' }}>
              Hệ thống Bảng tính Khối lượng Tự Động QS
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
              Chuyên trách bê tông, ván khuôn, đào đắp hố móng, xây tô, hoàn thiện sàn - trần - tường và hạ tầng kỹ thuật. Cốt thép chỉ ước tính sơ bộ theo hàm lượng kg/m³.
            </p>
          </div>

          <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '8px', padding: '1rem' }}>
            <span className="file-tag tag-steel">File 1.2</span>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#c2410c', margin: '0.35rem 0' }}>
              Hệ thống Bảng tính Thép &amp; Kết cấu thép
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
              Bóc tách cốt thép chi tiết từng thanh theo hình dạng uốn mỏ D–H, tính toán mối nối so le cây 11,7m, cốt thép đai và bóc chi tiết kết cấu thép tiền chế.
            </p>
          </div>
        </div>
      </div>

      <div className="spec-section">
        <h2 className="section-title">
          <span className="section-num">1</span>
          <span>Sơ đồ Quy trình 7 bước Bóc Khối lượng Dự toán</span>
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.25rem' }}>
          Bấm vào từng bước để chuyển ngay tới trang hạng mục tương ứng trong sổ tay:
        </p>

        <div className="workflow-grid">
          {workflowSteps.map((step) => (
            <a 
              key={step.step}
              href={step.targetHash}
              className="workflow-card"
            >
              <div className="step-badge">
                {step.step}
              </div>
              <div className="step-info">
                <div className="step-title">
                  <span>{step.title}</span>
                  <span className="sheet-badge">{step.excelReference}</span>
                </div>
                <div className="step-desc">
                  {step.summary}
                </div>
                <div className="step-chips">
                  {step.chips.map((chip, idx) => (
                    <span key={idx} className="step-chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: 'var(--primary)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="spec-section">
        <h2 className="section-title">
          <span className="section-num">2</span>
          <span>Nguyên tắc Vàng &amp; Quy ước Cốt lõi của 2 File Template</span>
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ padding: '0.85rem 1rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
            <strong style={{ color: 'var(--primary)' }}>Quy ước cấu kiện theo dòng:</strong> Mỗi dòng trong file tương ứng một ký hiệu cấu kiện; khối lượng tổng = Khối lượng 1 cấu kiện × Số lượng cấu kiện × Số tầng giống nhau.
          </div>
          <div style={{ padding: '0.85rem 1rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #ea580c' }}>
            <strong style={{ color: '#ea580c' }}>Phần cần trừ nhập DÒNG ÂM:</strong> Các lỗ mở cửa đi, cửa sổ, giằng tường, trụ tường, ô thông tầng dầm sàn được nhập bằng một dòng riêng với số lượng âm (ví dụ -1, -2).
          </div>
          <div style={{ padding: '0.85rem 1rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #16a34a' }}>
            <strong style={{ color: '#16a34a' }}>Xử lý giao cắt dầm - cột - sàn:</strong> Sàn tính đủ diện tích trùm phủ nhân chiều dày; Dầm tính sườn dầm (H - h sàn) và trừ bề rộng cột giao; Cột tính (H tầng - h sàn).
          </div>
          <div style={{ padding: '0.85rem 1rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #dc2626' }}>
            <strong style={{ color: '#dc2626' }}>Khối lượng BOQ dự toán là hình học thiết kế:</strong> Khi lập BOQ dự toán, đặt hệ số hao hụt Móng!AN12 = 1 và không nhân các hệ số tơi xốp 4/3 hay cát 1.35, vì định mức dự toán nhà nước đã bao gồm toàn bộ các hao hụt này.
          </div>
        </div>
      </div>
    </div>
  );
}
