import React from 'react';

export function WarningBox({ warnings }) {
  if (!warnings || warnings.length === 0) {
    return (
      <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px', color: '#64748b', fontSize: '0.875rem' }}>
        Chưa ghi nhận lỗi hoặc rủi ro đặc thù nghiêm trọng đối với hạng mục này trong template gốc. Luôn đối chiếu với bản vẽ và hồ sơ thiết kế.
      </div>
    );
  }

  return (
    <div className="warnings-list">
      {warnings.map((warn, index) => (
        <div key={index} className={`warning-box ${warn.level || 'Trung bình'}`}>
          <div className={`warning-header ${warn.level || 'Trung bình'}`}>
            <span>⚠️</span>
            <span>{warn.title}</span>
            <span className={`severity-pill ${warn.level || 'Trung bình'}`}>
              {warn.level || 'Trung bình'}
            </span>
            {warn.code && <span className="col-tag">{warn.code}</span>}
          </div>
          <div className="warning-content">
            {warn.content}
          </div>
          {warn.remedy && (
            <div className="warning-remedy">
              <strong>Cách xử lý:</strong> {warn.remedy}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
