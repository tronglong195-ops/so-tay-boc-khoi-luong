import React, { useState, useMemo } from 'react';

export function MiniCalculator({ calculator, itemTitle }) {
  if (!calculator || !calculator.fields) {
    return null;
  }

  // Initialize inputs with field defaults
  const initialInputs = useMemo(() => {
    const init = {};
    calculator.fields.forEach(f => {
      init[f.key] = f.default ?? 0;
    });
    return init;
  }, [calculator]);

  const [inputs, setInputs] = useState(initialInputs);

  const handleInputChange = (key, val) => {
    setInputs(prev => ({
      ...prev,
      [key]: val === '' ? '' : Number(val)
    }));
  };

  const handleReset = () => {
    setInputs(initialInputs);
  };

  // Compute live results
  const results = useMemo(() => {
    try {
      if (typeof calculator.compute === 'function') {
        return calculator.compute(inputs);
      }
    } catch (err) {
      console.error('Calculation error:', err);
    }
    return {};
  }, [calculator, inputs]);

  const formatNumber = (num) => {
    if (typeof num !== 'number' || isNaN(num)) return '-';
    // If integer, return integer
    if (Number.isInteger(num)) return num.toLocaleString('vi-VN');
    // Otherwise 3 decimals, trimming trailing zeros
    return Number(num.toFixed(4)).toLocaleString('vi-VN', { maximumFractionDigits: 3 });
  };

  return (
    <div className="calculator-wrapper" id="mini-calculator">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <p style={{ fontSize: '0.875rem', color: '#64748b', flex: '1 1 200px' }}>
          Nhập các thông số hình học để tính toán tức thì theo đúng công thức của template Excel:
        </p>
        <button 
          onClick={handleReset}
          className="btn-header"
          style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem', minHeight: '36px' }}
          title="Đặt lại thông số mẫu"
        >
          🔄 Đặt lại mẫu
        </button>
      </div>

      <div className="calculator-grid">
        {calculator.fields.map(field => (
          <div key={field.key} className="calc-input-group">
            <label htmlFor={`input-${field.key}`}>
              {field.label}
            </label>
            <div className="input-with-unit">
              <input
                id={`input-${field.key}`}
                type="number"
                inputMode="decimal"
                step={field.step || "any"}
                value={inputs[field.key] ?? ''}
                onChange={(e) => handleInputChange(field.key, e.target.value)}
              />
              {field.unit && <span className="input-unit">{field.unit}</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="calc-results-box">
        <div className="calc-results-title">
          📊 Kết quả tính toán thời gian thực:
        </div>
        <div className="results-grid">
          {Object.entries(results).map(([resKey, resVal]) => (
            <div key={resKey} className="result-card">
              <div className="result-label">Cột {resKey}</div>
              <div className="result-value">
                {formatNumber(resVal)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
