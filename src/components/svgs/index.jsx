import React from 'react';

// 1. SvgMong: Đài móng, cổ móng, hố đào, taluy dốc
export function SvgMong() {
  return (
    <svg viewBox="0 0 760 400" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style={{ background: '#f8fafc', borderRadius: '8px' }}>
      <defs>
        <pattern id="hatch-soil" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="10" stroke="#cbd5e1" strokeWidth="1" />
        </pattern>
        <pattern id="concrete" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1.5" fill="#94a3b8" />
          <circle cx="12" cy="10" r="1" fill="#94a3b8" />
          <polygon points="9,2 11,5 7,6" fill="#cbd5e1" />
        </pattern>
      </defs>

      {/* Mặt đất tự nhiên BO */}
      <line x1="40" y1="80" x2="220" y2="80" stroke="#64748b" strokeWidth="2" strokeDasharray="6,4" />
      <line x1="540" y1="80" x2="720" y2="80" stroke="#64748b" strokeWidth="2" strokeDasharray="6,4" />
      <text x="50" y="70" fill="#475569" fontSize="12" fontWeight="600">Cao độ hiện trạng tự nhiên (Cột BO)</text>

      {/* Taluy hố đào m */}
      <polygon points="40,80 220,80 270,300 490,300 540,80 720,80 720,380 40,380" fill="url(#hatch-soil)" opacity="0.3" />
      <line x1="220" y1="80" x2="270" y2="300" stroke="#d97706" strokeWidth="2.5" />
      <line x1="540" y1="80" x2="490" y2="300" stroke="#d97706" strokeWidth="2.5" />
      
      {/* Kích thước mở rộng đỉnh BN & chân BM */}
      <line x1="220" y1="50" x2="540" y2="50" stroke="#d97706" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <text x="380" y="42" fill="#b45309" fontSize="12" fontWeight="700" textAnchor="middle">Miệng hố đào = F + 2×BN (BN = BQ×m + BM)</text>

      {/* Bê tông lót đài Y & Mở rộng Z = 2Y */}
      <rect x="290" y="300" width="180" height="20" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
      <text x="380" y="315" fill="#475569" fontSize="11" textAnchor="middle">Bê tông lót Y (mở rộng Z = 2×Y)</text>

      {/* Đài móng F x G x H */}
      <rect x="305" y="220" width="150" height="80" fill="#dcfce7" stroke="#15803d" strokeWidth="2" />
      <text x="380" y="265" fill="#14532d" fontSize="14" fontWeight="700" textAnchor="middle">ĐÀI MÓNG (AO, AR)</text>
      <text x="380" y="285" fill="#14532d" fontSize="11" textAnchor="middle">L (F) × W (G) × H (H)</text>

      {/* Cổ móng w x l (AA x AB) */}
      <rect x="355" y="100" width="50" height="120" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />
      <text x="380" y="165" fill="#9a3412" fontSize="11" fontWeight="700" textAnchor="middle">CỔ CỘT (AS, AT)</text>
      <text x="380" y="180" fill="#9a3412" fontSize="10" textAnchor="middle">w (AA) × l (AB)</text>

      {/* Cốt đài & Chiều sâu AC */}
      <line x1="285" y1="300" x2="285" y2="100" stroke="#16a34a" strokeWidth="1.5" />
      <line x1="280" y1="300" x2="290" y2="300" stroke="#16a34a" strokeWidth="1.5" />
      <line x1="280" y1="100" x2="290" y2="100" stroke="#16a34a" strokeWidth="1.5" />
      <text x="275" y="205" fill="#15803d" fontSize="11" fontWeight="600" textAnchor="end">Chiều sâu AC</text>

      {/* Chiều cao đào BQ */}
      <line x1="505" y1="80" x2="505" y2="320" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="500" y1="80" x2="510" y2="80" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="500" y1="320" x2="510" y2="320" stroke="#dc2626" strokeWidth="1.5" />
      <text x="515" y="205" fill="#b91c1c" fontSize="11" fontWeight="700">H đào BQ = AC + Y - BP + BO</text>

      {/* Chân hố đào BM */}
      <line x1="270" y1="335" x2="290" y2="335" stroke="#475569" strokeWidth="1.5" />
      <text x="280" y="350" fill="#475569" fontSize="10" textAnchor="middle">BM (0.5m)</text>

      {/* Cọc đỡ đài */}
      <rect x="330" y="320" width="25" height="50" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
      <rect x="405" y="320" width="25" height="50" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
      <text x="380" y="365" fill="#475569" fontSize="11" textAnchor="middle">Đầu cọc ngàm đài (AG–AM)</text>
    </svg>
  );
}

// 2. SvgDamMong: Dầm móng / Giằng móng
export function SvgDamMong() {
  return (
    <svg viewBox="0 0 760 320" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style={{ background: '#f8fafc', borderRadius: '8px' }}>
      {/* Đài móng bên trái */}
      <rect x="40" y="60" width="140" height="200" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" strokeDasharray="4,3" />
      <text x="110" y="160" fill="#475569" fontSize="12" fontWeight="700" textAnchor="middle">Đài móng trái</text>
      <text x="110" y="180" fill="#64748b" fontSize="11" textAnchor="middle">Trừ móng J/2</text>

      {/* Đài móng bên phải */}
      <rect x="580" y="60" width="140" height="200" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" strokeDasharray="4,3" />
      <text x="650" y="160" fill="#475569" fontSize="12" fontWeight="700" textAnchor="middle">Đài móng phải</text>
      <text x="650" y="180" fill="#64748b" fontSize="11" textAnchor="middle">Trừ móng J/2</text>

      {/* Dầm móng bê tông */}
      <rect x="180" y="100" width="400" height="120" fill="#dcfce7" stroke="#15803d" strokeWidth="2.5" />
      <text x="380" y="150" fill="#14532d" fontSize="15" fontWeight="700" textAnchor="middle">DẦM MÓNG: K = (D - J) × E × (F - I)</text>
      <text x="380" y="175" fill="#14532d" fontSize="12" textAnchor="middle">Ván khuôn thành: N = (D - J) × 2 × (F - I)</text>

      {/* Bê tông lót dầm móng */}
      <rect x="180" y="220" width="400" height="25" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
      <text x="380" y="237" fill="#334155" fontSize="11" textAnchor="middle">Bê tông lót dày G (Mở rộng H = 2×G)</text>

      {/* Kích thước trục D */}
      <line x1="40" y1="40" x2="720" y2="40" stroke="#0f172a" strokeWidth="1.5" />
      <text x="380" y="32" fill="#0f172a" fontSize="12" fontWeight="700" textAnchor="middle">Chiều dài trục tim cọc/cột D</text>

      {/* Chiều dài tính toán (D - J) */}
      <line x1="180" y1="80" x2="580" y2="80" stroke="#dc2626" strokeWidth="2" />
      <text x="380" y="72" fill="#b91c1c" fontSize="12" fontWeight="700" textAnchor="middle">Chiều dài tính bê tông & ván khuôn = (D - J)</text>

      {/* Tiết diện b x h */}
      <text x="380" y="280" fill="#475569" fontSize="12" textAnchor="middle">Tiết diện dầm: Rộng b (Cột E) × Cao h (Cột F) | Sàn nền dày I</text>
    </svg>
  );
}

// 3. SvgCot: Cột chịu lực & Vai cột
export function SvgCot() {
  return (
    <svg viewBox="0 0 680 380" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style={{ background: '#f8fafc', borderRadius: '8px' }}>
      {/* Sàn tầng trên */}
      <rect x="140" y="40" width="400" height="30" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
      <text x="340" y="60" fill="#475569" fontSize="12" fontWeight="600" textAnchor="middle">Sàn tầng trên (Chiều dày trừ H)</text>

      {/* Thân cột */}
      <rect x="280" y="70" width="120" height="240" fill="#dcfce7" stroke="#15803d" strokeWidth="2" />
      <text x="340" y="180" fill="#14532d" fontSize="13" fontWeight="700" textAnchor="middle">CỘT BTCT (O, P)</text>
      <text x="340" y="200" fill="#14532d" fontSize="11" textAnchor="middle">D × E (hoặc Ø G)</text>
      <text x="340" y="220" fill="#14532d" fontSize="11" textAnchor="middle">V = D×E×(F - H)</text>

      {/* Sàn tầng dưới */}
      <rect x="140" y="310" width="400" height="30" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
      <text x="340" y="330" fill="#475569" fontSize="12" fontWeight="600" textAnchor="middle">Sàn tầng dưới (Mặt sàn hoàn thiện ±0.00)</text>

      {/* Kích thước chiều cao tầng F */}
      <line x1="430" y1="40" x2="430" y2="310" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="425" y1="40" x2="435" y2="40" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="425" y1="310" x2="435" y2="310" stroke="#dc2626" strokeWidth="1.5" />
      <text x="445" y="175" fill="#b91c1c" fontSize="12" fontWeight="700">Cao tầng F</text>

      {/* Chiều cao tính toán cột (F - H) */}
      <line x1="250" y1="70" x2="250" y2="310" stroke="#16a34a" strokeWidth="2" />
      <line x1="245" y1="70" x2="255" y2="70" stroke="#16a34a" strokeWidth="2" />
      <line x1="245" y1="310" x2="255" y2="310" stroke="#16a34a" strokeWidth="2" />
      <text x="240" y="195" fill="#15803d" fontSize="12" fontWeight="700" textAnchor="end">Chiều cao cột = (F - H)</text>
    </svg>
  );
}

// 4. SvgDamTang: Dầm tầng giao cắt sàn
export function SvgDamTang() {
  return (
    <svg viewBox="0 0 740 320" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style={{ background: '#f8fafc', borderRadius: '8px' }}>
      {/* Sàn bê tông */}
      <rect x="40" y="80" width="660" height="40" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
      <text x="120" y="105" fill="#475569" fontSize="12" fontWeight="700">SÀN DÀY G (Tính trùm phủ)</text>

      {/* Sườn dầm */}
      <rect x="250" y="120" width="240" height="130" fill="#dcfce7" stroke="#15803d" strokeWidth="2" />
      <text x="370" y="170" fill="#14532d" fontSize="14" fontWeight="700" textAnchor="middle">SƯỜN DẦM (I, J, K)</text>
      <text x="370" y="195" fill="#14532d" fontSize="12" textAnchor="middle">Bê tông dầm: I = (D - H) × E × (F - G)</text>
      <text x="370" y="220" fill="#14532d" fontSize="11" textAnchor="middle">Ván khuôn thành 2 bên: J = (D - H) × (F - G) × 2</text>

      {/* Kích thước chiều cao dầm F */}
      <line x1="520" y1="80" x2="520" y2="250" stroke="#dc2626" strokeWidth="2" />
      <text x="530" y="170" fill="#b91c1c" fontSize="12" fontWeight="700">Chiều cao dầm F</text>

      {/* Kích thước sườn dầm (F - G) */}
      <line x1="220" y1="120" x2="220" y2="250" stroke="#16a34a" strokeWidth="2" />
      <text x="210" y="190" fill="#15803d" fontSize="12" fontWeight="700" textAnchor="end">Sườn dầm (F - G)</text>

      {/* Bề rộng dầm E */}
      <line x1="250" y1="270" x2="490" y2="270" stroke="#0f172a" strokeWidth="2" />
      <text x="370" y="290" fill="#0f172a" fontSize="12" fontWeight="700" textAnchor="middle">Bề rộng dầm b (Cột E) | VK đáy K = (D - H) × E</text>
    </svg>
  );
}

// 5. SvgSan: Sàn BTCT & Thép lưới hàn
export function SvgSan() {
  return (
    <svg viewBox="0 0 720 300" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style={{ background: '#f8fafc', borderRadius: '8px' }}>
      <rect x="60" y="60" width="600" height="180" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
      <text x="360" y="100" fill="#14532d" fontSize="16" fontWeight="700" textAnchor="middle">MẶT BẰNG Ô SÀN: D (Dài) × E (Rộng)</text>
      <text x="360" y="130" fill="#14532d" fontSize="13" textAnchor="middle">Bê tông sàn H = D × E × F (Chiều dày F)</text>
      <text x="360" y="155" fill="#14532d" fontSize="13" textAnchor="middle">Ván khuôn đáy sàn I = D × E</text>

      {/* Lưới thép 2 phương */}
      <line x1="120" y1="180" x2="600" y2="180" stroke="#d97706" strokeWidth="2" strokeDasharray="6,4" />
      <line x1="120" y1="210" x2="600" y2="210" stroke="#d97706" strokeWidth="2" strokeDasharray="6,4" />
      <line x1="200" y1="160" x2="200" y2="230" stroke="#d97706" strokeWidth="2" strokeDasharray="6,4" />
      <line x1="300" y1="160" x2="300" y2="230" stroke="#d97706" strokeWidth="2" strokeDasharray="6,4" />
      <line x1="400" y1="160" x2="400" y2="230" stroke="#d97706" strokeWidth="2" strokeDasharray="6,4" />
      <text x="360" y="260" fill="#b45309" fontSize="12" fontWeight="700" textAnchor="middle">Thép lưới sàn T (kg/m²) = (Ø²/162) × (1000/@) × 2 × Số lớp S</text>
    </svg>
  );
}

// 6. SvgTuongXay: Tường xây & Cửa
export function SvgTuongXay() {
  return (
    <svg viewBox="0 0 740 320" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style={{ background: '#f8fafc', borderRadius: '8px' }}>
      <rect x="60" y="50" width="620" height="220" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />
      <text x="370" y="90" fill="#9a3412" fontSize="15" fontWeight="700" textAnchor="middle">TƯỜNG XÂY: Dài F × Cao H × Dày G (0.11 / 0.22 / 0.33)</text>
      
      {/* Cửa đi trừ D */}
      <rect x="140" y="130" width="90" height="140" fill="#ffffff" stroke="#991b1b" strokeWidth="2" />
      <text x="185" y="200" fill="#991b1b" fontSize="11" fontWeight="700" textAnchor="middle">Cửa đi (Trừ)</text>

      {/* Cửa sổ trừ W */}
      <rect x="480" y="110" width="110" height="90" fill="#ffffff" stroke="#991b1b" strokeWidth="2" />
      <text x="535" y="160" fill="#991b1b" fontSize="11" fontWeight="700" textAnchor="middle">Cửa sổ (Trừ)</text>

      {/* Trát ngoài & Trát trong */}
      <text x="370" y="235" fill="#475569" fontSize="12" textAnchor="middle">Trát ngoài: T = F × (H + I) | Trát trong: U = (F - L) × J</text>
      <text x="370" y="255" fill="#64748b" fontSize="11" textAnchor="middle">Trát cạnh cửa W = F + 2×H (tính mét dài)</text>
    </svg>
  );
}

// 7. SvgCocNhoi: Cọc khoan nhồi
export function SvgCocNhoi() {
  return (
    <svg viewBox="0 0 680 360" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style={{ background: '#f8fafc', borderRadius: '8px' }}>
      <rect x="280" y="40" width="120" height="50" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
      <text x="340" y="70" fill="#92400e" fontSize="11" fontWeight="700" textAnchor="middle">Cát đầu cọc L2 (G)</text>

      <rect x="280" y="90" width="120" height="40" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
      <text x="340" y="115" fill="#991b1b" fontSize="11" fontWeight="700" textAnchor="middle">Đập đầu cọc L1 (F)</text>

      <rect x="280" y="130" width="120" height="180" fill="#dcfce7" stroke="#15803d" strokeWidth="2" />
      <text x="340" y="210" fill="#14532d" fontSize="13" fontWeight="700" textAnchor="middle">THÂN CỌC BTCT</text>
      <text x="340" y="235" fill="#14532d" fontSize="11" textAnchor="middle">V = (π×D²/4) × (L - L2)</text>

      {/* Ống vách L3 */}
      <line x1="265" y1="40" x2="265" y2="170" stroke="#0f172a" strokeWidth="3" />
      <line x1="415" y1="40" x2="415" y2="170" stroke="#0f172a" strokeWidth="3" />
      <text x="430" y="110" fill="#0f172a" fontSize="11" fontWeight="700">Ống vách L3 (H)</text>

      {/* Đường kính cọc D */}
      <line x1="280" y1="330" x2="400" y2="330" stroke="#0f172a" strokeWidth="1.5" />
      <text x="340" y="350" fill="#0f172a" fontSize="12" fontWeight="700" textAnchor="middle">Đường kính cọc D (Cột E)</text>
    </svg>
  );
}

// 8. SvgCocVuong: Cọc vuông BTCT
export function SvgCocVuong() {
  return (
    <svg viewBox="0 0 720 240" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style={{ background: '#f8fafc', borderRadius: '8px' }}>
      <rect x="80" y="80" width="80" height="80" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
      <text x="120" y="125" fill="#991b1b" fontSize="11" fontWeight="700" textAnchor="middle">Đập đầu G</text>

      <rect x="160" y="80" width="400" height="80" fill="#dcfce7" stroke="#15803d" strokeWidth="2" />
      <text x="360" y="125" fill="#14532d" fontSize="14" fontWeight="700" textAnchor="middle">THÂN CỌC VUÔNG: (C - F) × D × E</text>

      {/* Mũi cọc vát */}
      <polygon points="560,80 640,120 560,160" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" />
      <text x="590" y="125" fill="#9a3412" fontSize="11" fontWeight="700">Mũi F</text>

      <text x="360" y="200" fill="#475569" fontSize="12" textAnchor="middle">Ván khuôn bãi đúc: Tính 3 mặt | Mũi cọc hình học 1/3 (file tính 1/2)</text>
    </svg>
  );
}

// 9. SvgVachBTCT: Vách BTCT
export function SvgVachBTCT() {
  return (
    <svg viewBox="0 0 680 280" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style={{ background: '#f8fafc', borderRadius: '8px' }}>
      <rect x="100" y="50" width="480" height="180" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
      <text x="340" y="100" fill="#14532d" fontSize="15" fontWeight="700" textAnchor="middle">VÁCH BTCT: Dài D × Cao F × Dày E</text>
      
      {/* Lỗ mở cửa */}
      <rect x="280" y="110" width="120" height="120" fill="#ffffff" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,2" />
      <text x="340" y="175" fill="#dc2626" fontSize="12" fontWeight="700" textAnchor="middle">Trừ lỗ mở J</text>
      <text x="340" y="260" fill="#475569" fontSize="12" textAnchor="middle">Số mặt ván khuôn G (thường 2 mặt; vách hộp thang máy tính 4 mặt)</text>
    </svg>
  );
}

// 10. SvgCauThang: Cầu thang bộ
export function SvgCauThang() {
  return (
    <svg viewBox="0 0 720 300" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style={{ background: '#f8fafc', borderRadius: '8px' }}>
      {/* Chiếu nghỉ dưới */}
      <rect x="60" y="210" width="140" height="30" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
      <text x="130" y="230" fill="#475569" fontSize="11" fontWeight="700" textAnchor="middle">Chiếu nghỉ</text>

      {/* Bản nghiêng thang */}
      <polygon points="200,240 200,210 500,80 500,110" fill="#dcfce7" stroke="#15803d" strokeWidth="2" />
      <text x="350" y="145" fill="#14532d" fontSize="13" fontWeight="700" transform="rotate(-23 350 145)">Bản nghiêng L (D) × W (E) × t (F)</text>

      {/* Chiếu nghỉ trên */}
      <rect x="500" y="80" width="140" height="30" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
      <text x="570" y="100" fill="#475569" fontSize="11" fontWeight="700" textAnchor="middle">Chiếu tới</text>

      <text x="360" y="280" fill="#475569" fontSize="12" textAnchor="middle">Bê tông bản: L × W × t | Ván khuôn: L × W + 2 × L × t (đáy + 2 thành cốn)</text>
    </svg>
  );
}

// 11. SvgSanLap: San lấp mặt bằng
export function SvgSanLap() {
  return (
    <svg viewBox="0 0 720 280" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style={{ background: '#f8fafc', borderRadius: '8px' }}>
      <line x1="60" y1="60" x2="660" y2="60" stroke="#16a34a" strokeWidth="2.5" />
      <text x="80" y="50" fill="#15803d" fontSize="12" fontWeight="700">Cao độ nền hoàn thiện H (±0.00)</text>

      {/* Lớp kết cấu K, L, M */}
      <rect x="60" y="60" width="600" height="40" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
      <text x="360" y="85" fill="#475569" fontSize="11" textAnchor="middle">Kết cấu áo nền: BT nền (M) + Lót (L) + Base (K)</text>

      {/* Chiều cao đắp N */}
      <rect x="60" y="100" width="600" height="80" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4,2" />
      <text x="360" y="145" fill="#b45309" fontSize="14" fontWeight="700" textAnchor="middle">CHIỀU CAO SAN LẤP: N = H - I + J - (K + L + M)</text>

      {/* Cao độ tự nhiên I & bóc hữu cơ J */}
      <line x1="60" y1="180" x2="660" y2="180" stroke="#991b1b" strokeWidth="2" />
      <text x="80" y="200" fill="#991b1b" fontSize="12" fontWeight="700">Cao độ hiện trạng tự nhiên I (Bóc hữu cơ J)</text>
    </svg>
  );
}

// 12. SvgHaTangDuong: Đường giao thông
export function SvgHaTangDuong() {
  return (
    <svg viewBox="0 0 720 280" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style={{ background: '#f8fafc', borderRadius: '8px' }}>
      <rect x="60" y="60" width="600" height="50" fill="#dcfce7" stroke="#15803d" strokeWidth="2" />
      <text x="360" y="90" fill="#14532d" fontSize="13" fontWeight="700" textAnchor="middle">Bê tông mặt đường dày H (Cột H) × Diện tích J</text>

      <rect x="60" y="110" width="600" height="45" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />
      <text x="360" y="137" fill="#9a3412" fontSize="12" textAnchor="middle">Móng đá dăm cấp phối Loại 1 & Loại 2 (R1, R2, R3)</text>

      <rect x="60" y="155" width="600" height="45" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
      <text x="360" y="182" fill="#b45309" fontSize="12" fontWeight="700" textAnchor="middle">Cát đệm nền đường: Nhân hệ số đầm nén 1.35 (Cột Z)</text>
    </svg>
  );
}

// 13. SvgMuongCong: Mương & Cống tròn
export function SvgMuongCong() {
  return (
    <svg viewBox="0 0 720 280" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style={{ background: '#f8fafc', borderRadius: '8px' }}>
      {/* Mương bê tông */}
      <g transform="translate(60, 40)">
        <rect x="0" y="0" width="260" height="30" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
        <text x="130" y="20" fill="#475569" fontSize="11" textAnchor="middle">Tấm đan mương (L)</text>
        <rect x="20" y="30" width="40" height="120" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" />
        <rect x="200" y="30" width="40" height="120" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" />
        <rect x="0" y="150" width="260" height="40" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" />
        <text x="130" y="100" fill="#14532d" fontSize="12" fontWeight="700" textAnchor="middle">Lọt lòng F × G</text>
        <text x="130" y="175" fill="#14532d" fontSize="11" textAnchor="middle">Đáy mương (J)</text>
      </g>

      {/* Cống tròn */}
      <g transform="translate(420, 40)">
        <circle cx="120" cy="100" r="80" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
        <circle cx="120" cy="100" r="55" fill="#f8fafc" stroke="#475569" strokeWidth="2" />
        <text x="120" y="95" fill="#0f172a" fontSize="13" fontWeight="700" textAnchor="middle">CỐNG TRÒN</text>
        <text x="120" y="115" fill="#475569" fontSize="11" textAnchor="middle">Trong D (0.4m)</text>
        <text x="120" y="130" fill="#475569" fontSize="11" textAnchor="middle">Ngoài E = D + 2F</text>
      </g>
    </svg>
  );
}

// 14. SvgHoGaBe: Hố ga & Bể nước ngầm
export function SvgHoGaBe() {
  return (
    <svg viewBox="0 0 720 280" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style={{ background: '#f8fafc', borderRadius: '8px' }}>
      <rect x="80" y="40" width="560" height="30" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
      <text x="360" y="60" fill="#475569" fontSize="12" fontWeight="700" textAnchor="middle">Nắp bể / Tấm đan hố ga dày L</text>

      <rect x="80" y="70" width="60" height="130" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" />
      <rect x="580" y="70" width="60" height="130" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" />
      <text x="360" y="135" fill="#14532d" fontSize="15" fontWeight="700" textAnchor="middle">LỌT LÒNG: Dài F × Rộng G × Sâu H</text>

      <rect x="60" y="200" width="600" height="40" fill="#dcfce7" stroke="#15803d" strokeWidth="2" />
      <text x="360" y="225" fill="#14532d" fontSize="12" fontWeight="700" textAnchor="middle">Bản đáy bể dày I</text>

      <rect x="40" y="240" width="640" height="20" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
      <text x="360" y="255" fill="#475569" fontSize="10" textAnchor="middle">Bê tông lót dày J (Mở rộng K)</text>
    </svg>
  );
}

// 15. SvgThepThanh: Thanh thép uốn mỏ D-H
export function SvgThepThanh() {
  return (
    <svg viewBox="0 0 740 260" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style={{ background: '#f8fafc', borderRadius: '8px' }}>
      <path d="M 80,180 L 80,100 L 200,100 L 540,100 L 660,100 L 660,180" fill="none" stroke="#16a34a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Nhãn các đoạn */}
      <text x="60" y="140" fill="#b91c1c" fontSize="13" fontWeight="700" textAnchor="end">Móc D</text>
      <text x="140" y="85" fill="#b91c1c" fontSize="13" fontWeight="700" textAnchor="middle">Neo E</text>
      <text x="370" y="85" fill="#b91c1c" fontSize="15" fontWeight="700" textAnchor="middle">Thân thẳng F (mm)</text>
      <text x="600" y="85" fill="#b91c1c" fontSize="13" fontWeight="700" textAnchor="middle">Neo G</text>
      <text x="680" y="140" fill="#b91c1c" fontSize="13" fontWeight="700">Móc H</text>

      {/* Mối nối 11.7m */}
      <circle cx="370" cy="100" r="7" fill="#ea580c" />
      <text x="370" y="130" fill="#c2410c" fontSize="12" fontWeight="700" textAnchor="middle">Mối nối: INT(Tổng L / 11700) × Chiều dài nối 40Ø</text>
      
      <text x="370" y="210" fill="#0f172a" fontSize="13" fontWeight="700" textAnchor="middle">Tổng dài 1 thanh K = SUM(D:H) + I×J | Trọng lượng P = π/4 × (Ø/1000)² × 7850</text>
      <text x="370" y="235" fill="#475569" fontSize="12" textAnchor="middle">Số cây 11,7m = Q / ((Ø²/162) × 11.7)</text>
    </svg>
  );
}

// 16. SvgThepDai: Thép đai dầm/cột móc 135 độ
export function SvgThepDai() {
  return (
    <svg viewBox="0 0 680 300" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style={{ background: '#f8fafc', borderRadius: '8px' }}>
      {/* Khung đai chữ nhật */}
      <rect x="180" y="50" width="320" height="180" rx="12" fill="none" stroke="#16a34a" strokeWidth="4" />
      
      {/* 2 móc uốn 135 độ */}
      <path d="M 180,90 L 220,130" fill="none" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />
      <path d="M 220,50 L 260,90" fill="none" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />
      
      <text x="340" y="130" fill="#14532d" fontSize="14" fontWeight="700" textAnchor="middle">ĐAI DẦM / CỘT KHÉP KÍN</text>
      <text x="340" y="155" fill="#475569" fontSize="12" textAnchor="middle">Cạnh đai = Kích thước dầm - 2×Lớp bảo vệ (cover)</text>
      <text x="340" y="180" fill="#dc2626" fontSize="12" fontWeight="700" textAnchor="middle">Móc uốn 135°: Đoạn thẳng ≥ 10Ø (TCVN 9386:2012 kháng chấn)</text>

      <text x="340" y="270" fill="#0f172a" fontSize="12" textAnchor="middle">Chiều dài đai: File mẫu tính K = 2 × SUM(D:H) (với móc 7Ø)</text>
    </svg>
  );
}

// 17. SvgKetCauThep: Thép tiền chế & Thép bản PL
export function SvgKetCauThep() {
  return (
    <svg viewBox="0 0 720 280" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style={{ background: '#f8fafc', borderRadius: '8px' }}>
      {/* Tiết diện dầm chữ H */}
      <g transform="translate(100, 40)">
        <rect x="0" y="0" width="180" height="20" fill="#cbd5e1" stroke="#334155" strokeWidth="2" />
        <rect x="80" y="20" width="20" height="160" fill="#cbd5e1" stroke="#334155" strokeWidth="2" />
        <rect x="0" y="180" width="180" height="20" fill="#cbd5e1" stroke="#334155" strokeWidth="2" />
        <text x="90" y="12" fill="#0f172a" fontSize="10" fontWeight="700" textAnchor="middle">Cánh trên</text>
        <text x="90" y="105" fill="#0f172a" fontSize="11" fontWeight="700" textAnchor="middle">Bụng</text>
        <text x="90" y="195" fill="#0f172a" fontSize="10" fontWeight="700" textAnchor="middle">Cánh dưới</text>
      </g>

      <g transform="translate(340, 60)">
        <text x="0" y="20" fill="#14532d" fontSize="15" fontWeight="700">KẾT CẤU THÉP TIỀN CHẾ (Sheet ket cau thep)</text>
        <text x="0" y="50" fill="#0f172a" fontSize="13" fontWeight="600">Thép tấm PL: Khối lượng (kg) = t × b × L × 7.85 × n / 10⁶</text>
        <text x="0" y="75" fill="#0f172a" fontSize="13" fontWeight="600">Diện tích sơn (m²) = 2 × b × L × n / 10⁶</text>
        <text x="0" y="110" fill="#475569" fontSize="12">• t: Chiều dày tấm (mm) | b: Chiều rộng (mm) | L: Chiều dài (mm)</text>
        <text x="0" y="135" fill="#475569" fontSize="12">• Thép hình: kg = (kg/m) × L × n</text>
        <text x="0" y="160" fill="#b91c1c" fontSize="12" fontWeight="700">Lưu ý: Kéo diện tích sơn SUM tới dòng 612 để không sót nhóm VIII!</text>
      </g>
    </svg>
  );
}

// Registry map of all SVGs
export const svgComponents = {
  SvgMong,
  SvgDamMong,
  SvgCot,
  SvgDamTang,
  SvgSan,
  SvgTuongXay,
  SvgCocNhoi,
  SvgCocVuong,
  SvgVachBTCT,
  SvgCauThang,
  SvgSanLap,
  SvgHaTangDuong,
  SvgMuongCong,
  SvgHoGaBe,
  SvgThepThanh,
  SvgThepDai,
  SvgKetCauThep
};
