import React, { useState } from 'react';

export function FormulaBlock({ formulas }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!formulas || formulas.length === 0) {
    return null;
  }

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <div className="formulas-container">
      {formulas.map((item, index) => (
        <div key={index} className="formula-item">
          <div className="formula-target">
            {item.target}
          </div>
          
          <div className="math-formula">
            <span style={{ color: '#0284c7', fontWeight: 600, marginRight: '8px' }}>Toán học:</span>
            <code>{item.mathFormat}</code>
          </div>

          <div style={{ position: 'relative' }}>
            <div className="excel-code-box">
              <code>{item.excelCode}</code>
            </div>
            <button
              onClick={() => handleCopy(item.excelCode, index)}
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: 'rgba(255, 255, 255, 0.15)',
                border: 'none',
                borderRadius: '4px',
                color: '#fff',
                fontSize: '0.75rem',
                padding: '2px 8px',
                cursor: 'pointer'
              }}
              title="Sao chép công thức Excel"
            >
              {copiedIndex === index ? '✓ Đã chép' : 'Sao chép'}
            </button>
          </div>

          {item.description && (
            <div className="formula-desc">
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
