const fs = require('fs');
const path = require('path');

const spec1 = fs.readFileSync(path.join(__dirname, '../spec/SPEC_1.1_khoi_luong.md'), 'utf8');
const spec2 = fs.readFileSync(path.join(__dirname, '../spec/SPEC_1.2_thep.md'), 'utf8');
const tc1 = JSON.parse(fs.readFileSync(path.join(__dirname, '../spec/testcases_1.1.json'), 'utf8'));
const tc2 = JSON.parse(fs.readFileSync(path.join(__dirname, '../spec/testcases_1.2.json'), 'utf8'));

// Extract spec tables
function extractSections(specContent) {
  const sections = specContent.split('## Sheet: ').slice(1);
  const map = {};
  for (const s of sections) {
    const lines = s.split('\n');
    const sheetName = lines[0].trim();
    const rows = [];
    let components = '';
    for (const l of lines) {
      if (l.startsWith('|') && !l.includes('---') && !l.startsWith('| Cột ')) {
        const p = l.split('|').map(x => x.trim());
        if (p.length >= 7) {
          rows.push({
            col: p[1],
            name: p[2],
            unit: p[3],
            type: p[4],
            sample: p[5],
            formula: p[6],
            meaning: p[7] || ''
          });
        }
      }
      if (l.includes('**Các mục/cấu kiện có trong sheet')) {
        components = l.split('**Các mục/cấu kiện có trong sheet (cột B):**')[1]?.trim() || '';
      }
    }
    map[sheetName] = { sheetName, rows, components };
  }
  return map;
}

const s1Map = extractSections(spec1);
const s2Map = extractSections(spec2);

// Meta definition for 23 sheets of File 1.1
const itemsA_meta = [
  {
    key: "San lấp MB",
    id: "san-lap",
    title: "San lấp mặt bằng",
    svgKey: "SvgSanLap",
    purpose: "Tính toán thể tích san lấp đất/cát đầm chặt, đào đất hạ cốt, bóc bỏ lớp đất hữu cơ bề mặt và các lớp kết cấu áo nền theo cao độ hoàn thiện và hiện trạng.",
    warningCodes: ["LOI-09", "LOI-18"],
    calcFields: [
      { key: "G", label: "Diện tích khu vực (G)", default: 1000, unit: "m²", step: 10 },
      { key: "H", label: "Cao độ hoàn thiện (H)", default: 0.0, unit: "m", step: 0.05 },
      { key: "I", label: "Cao độ tự nhiên (I)", default: -0.5, unit: "m", step: 0.05 },
      { key: "J", label: "Chiều dày lớp hữu cơ (J)", default: 0.2, unit: "m", step: 0.05 },
      { key: "K", label: "Chiều dày lớp Base (K)", default: 0.15, unit: "m", step: 0.01 },
      { key: "L", label: "Chiều dày lót (L)", default: 0.05, unit: "m", step: 0.01 },
      { key: "M", label: "Chiều dày BT nền (M)", default: 0.15, unit: "m", step: 0.01 },
      { key: "P", label: "Hao hụt vật liệu (P)", default: 1.0, unit: "lần", step: 0.01 }
    ],
    computeStr: `(vals) => {
      const G = Number(vals.G || 0);
      const H = Number(vals.H || 0);
      const I = Number(vals.I || 0);
      const J = Number(vals.J || 0);
      const K = Number(vals.K || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const P = Number(vals.P ?? 1);
      const N = H - I + J - (K + L + M);
      const Q = G * J;
      const R = N > 0 ? G * N * P : 0;
      const S = N < 0 ? -G * N : 0;
      return { N, Q, R, S };
    }`
  },
  {
    key: "Cọc nhồi",
    id: "coc-nhoi",
    title: "Cọc khoan nhồi",
    svgKey: "SvgCocNhoi",
    purpose: "Tính toán thể tích bê tông cọc khoan nhồi (trừ đoạn cát đầu cọc), dung dịch bentonite giữ thành vách, diện tích và khối lượng ống vách dẫn hướng, đất đào vận chuyển đổ thải (hệ số 4/3), đập đầu cọc, chiều dài ống siêu âm D60/D110 và ống nối.",
    warningCodes: ["LOI-10"],
    calcFields: [
      { key: "D", label: "Chiều dài tim cọc L (D)", default: 42, unit: "m", step: 0.5 },
      { key: "E", label: "Đường kính cọc D (E)", default: 1.0, unit: "m", step: 0.1 },
      { key: "F", label: "Đoạn đập đầu cọc L1 (F)", default: 1.0, unit: "m", step: 0.1 },
      { key: "G", label: "Đoạn cát đầu cọc L2 (G)", default: 8.5, unit: "m", step: 0.1 },
      { key: "H", label: "Chiều dài ống vách L3 (H)", default: 6.3, unit: "m", step: 0.1 },
      { key: "V", label: "Số lượng cọc (V)", default: 3, unit: "cọc", step: 1 },
      { key: "AD", label: "Hàm lượng thép (AD)", default: 45, unit: "kg/m³", step: 5 },
      { key: "AL", label: "Bề dày ống vách (AL)", default: 0.012, unit: "m", step: 0.001 }
    ],
    computeStr: `(vals) => {
      const D = Number(vals.D || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G ?? 8.5);
      const H = Number(vals.H || 0);
      const V = Number(vals.V || 0);
      const AD = Number(vals.AD ?? 45);
      const AL = Number(vals.AL ?? 0.012);
      const W = 1;
      const P = (Math.PI * Math.pow(E, 2) / 4) * (D - G);
      const Q = Math.PI * E * H;
      const R = (Math.PI * Math.pow(E, 2) / 4) * D;
      const S = (Math.PI * Math.pow(E, 2) / 4) * F;
      const T = R + R / 3;
      const U = (Math.PI * Math.pow(E, 2) / 4) * G;
      const X = P * V * W;
      const AC = T * V;
      const AE = X * AD * W;
      const AM = (Q * V) * AL * 7850 / 1000;
      return { P, Q, R, S, T, U, X, AC, AE, AM };
    }`
  },
  {
    key: "Cọc vuông Bê tông",
    id: "coc-vuong",
    title: "Cọc vuông bê tông cốt thép",
    svgKey: "SvgCocVuong",
    purpose: "Tính toán thể tích bê tông cọc vuông đúc sẵn (đoạn mũi vát nhọn và đoạn thân), diện tích ván khuôn 3 mặt bãi đúc, khối lượng đập đầu cọc để liên kết ngàm vào đài móng và cốt thép ước tính.",
    warningCodes: ["LOI-11"],
    calcFields: [
      { key: "C", label: "Chiều dài đoạn cọc L (C)", default: 10, unit: "m", step: 0.5 },
      { key: "D", label: "Chiều rộng cọc W (D)", default: 0.25, unit: "m", step: 0.05 },
      { key: "F", label: "Chiều dài mũi vát (F)", default: 0.3, unit: "m", step: 0.05 },
      { key: "G", label: "Chiều dài đập đầu cọc (G)", default: 0.5, unit: "m", step: 0.05 },
      { key: "H", label: "Số mặt be ván khuôn (H)", default: 3, unit: "mặt", step: 1 },
      { key: "L", label: "Số lượng cọc (L)", default: 3, unit: "cọc", step: 1 },
      { key: "R", label: "Hàm lượng cốt thép (R)", default: 220, unit: "kg/m³", step: 10 }
    ],
    computeStr: `(vals) => {
      const C = Number(vals.C || 0);
      const D = Number(vals.D || 0);
      const E = D;
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const H = Number(vals.H ?? 3);
      const L = Number(vals.L || 0);
      const M = 1;
      const R = Number(vals.R ?? 220);
      const I = F > 0 ? (C - F) * D * E + 0.5 * D * E * F : (C - F) * D * E;
      const J = F > 0 ? (D * H) * (C - F) + 0.5 * F * 3 * D + D * E : (D * H) * (C - F) + D * E * 2;
      const K = D * E * G;
      const N = C * L;
      const O = I * L * M;
      const P = J * L;
      const Q = K * L * M;
      const S = O * R * M;
      return { I, J, K, N, O, P, Q, S };
    }`
  },
  {
    key: "Cọc Barret",
    id: "coc-barret",
    title: "Cọc Barrette",
    svgKey: "SvgCocNhoi",
    purpose: "Tính toán thể tích bê tông cọc barrette tiết diện chữ nhật, thể tích dung dịch bentonite giữ thành vách, thể tích đào đất hố barrette, ván khuôn đầu cọc và đập đầu cọc.",
    warningCodes: [],
    calcFields: [
      { key: "D", label: "Chiều dài cọc L (D)", default: 42, unit: "m", step: 0.5 },
      { key: "E", label: "Bề dày cọc W (E)", default: 0.6, unit: "m", step: 0.1 },
      { key: "F", label: "Bề rộng cọc L (F)", default: 2.8, unit: "m", step: 0.1 },
      { key: "M", label: "Số lượng cọc (M)", default: 4, unit: "cọc", step: 1 },
      { key: "W", label: "Hàm lượng cốt thép (W)", default: 140, unit: "kg/m³", step: 10 }
    ],
    computeStr: `(vals) => {
      const D = Number(vals.D || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const M = Number(vals.M || 0);
      const W = Number(vals.W ?? 140);
      const G = 1.04;
      const Q = E * F * D;
      const R = E * F * (D - G);
      const X = Q * W;
      return { Q, R, X };
    }`
  },
  {
    key: "Móng",
    id: "mong",
    title: "Móng (Đài móng, Cổ móng, Đào đắp)",
    svgKey: "SvgMong",
    purpose: "Tính toán thể tích bê tông đài móng (chữ nhật, chóp cụt, quả trám, bầu dục), bê tông lót, ván khuôn đài và cổ móng, khối lượng đào đắp đất hố móng, định mức thép sơ bộ theo hàm lượng.",
    warningCodes: ["LOI-04", "LOI-05", "LOI-12"],
    calcFields: [
      { key: "D", label: "Số lượng móng (D)", default: 3, unit: "móng", step: 1 },
      { key: "E", label: "Số cổ/móng (E)", default: 1, unit: "cổ", step: 1 },
      { key: "F", label: "Chiều dài đài L (F)", default: 3.6, unit: "m", step: 0.05 },
      { key: "G", label: "Chiều rộng đài W (G)", default: 3.332, unit: "m", step: 0.01 },
      { key: "H", label: "Chiều cao đài H (H)", default: 0.9, unit: "m", step: 0.05 },
      { key: "Y", label: "Chiều dày lót (Y)", default: 0.05, unit: "m", step: 0.01 },
      { key: "AA", label: "Rộng cổ móng w (AA)", default: 0.65, unit: "m", step: 0.05 },
      { key: "AB", label: "Dài cổ móng l (AB)", default: 0.4, unit: "m", step: 0.05 },
      { key: "AC", label: "Chiều sâu đáy móng (AC)", default: 3.0, unit: "m", step: 0.1 },
      { key: "AD", label: "Chiều dày sàn nền (AD)", default: 0.22, unit: "m", step: 0.01 },
      { key: "BO", label: "Cao độ hiện trạng (BO)", default: -0.5, unit: "m", step: 0.1 },
      { key: "BP", label: "Cao độ đỉnh móng (BP)", default: -0.1, unit: "m", step: 0.1 },
      { key: "BM", label: "Mở rộng chân đào (BM)", default: 0.5, unit: "m", step: 0.1 },
      { key: "AW", label: "Hàm lượng thép (AW)", default: 90, unit: "kg/m³", step: 5 }
    ],
    computeStr: `(vals) => {
      const D = Number(vals.D || 0);
      const E = Number(vals.E ?? 1);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const H = Number(vals.H || 0);
      const Y = Number(vals.Y || 0);
      const AA = Number(vals.AA || 0);
      const AB = Number(vals.AB || 0);
      const AC = Number(vals.AC || 0);
      const AD = Number(vals.AD || 0);
      const AN = 1;
      const AW = Number(vals.AW ?? 90);
      const BM = Number(vals.BM ?? 0.5);
      const BO = Number(vals.BO ?? -0.5);
      const BP = Number(vals.BP ?? -0.1);
      const Z = Y * 2;
      const AE = AC - H;
      const AO = F * G * H * D * AN;
      const AP = (F + Z) * (G + Z) * Y * D * AN;
      const AQ = ((F + Z) + (G + Z)) * 2 * Y * D;
      const AR = (F + G) * 2 * H * D;
      const AS = AA * AB * (AE - AD) * E * D * AN;
      const AT = (AA + AB) * 2 * (AE - AD) * E * D;
      const AX = (AO + AS) * AW * AN;
      const BQ = AC + Y - BP + BO;
      const m = BQ < 5 ? (BQ <= 1.5 ? 0.25 : 0.67) : 0.85;
      const BN = BQ * m + BM;
      const A1 = (F + 2 * BM) * (G + 2 * BM);
      const A2 = (F + 2 * BN) * (G + 2 * BN);
      const BR = ((A1 + A2) / 2) * BQ * D;
      const V_co = AA * AB * (AC - H + BO - BP) * E * D;
      const BS = BR - AO - AP - V_co;
      return { AO, AP, AQ, AR, AS, AT, AX, BQ, BN, BR, BS };
    }`
  },
  {
    key: "Dầm móng",
    id: "dam-mong",
    title: "Dầm móng (Giằng móng)",
    svgKey: "SvgDamMong",
    purpose: "Tính toán thể tích bê tông dầm móng (chiều dài trừ phần giao đài móng/cổ móng), bê tông lót dầm, ván khuôn dầm và ván khuôn lót, thể tích đào đắp rãnh dầm móng.",
    warningCodes: ["LOI-03"],
    calcFields: [
      { key: "D", label: "Chiều dài dầm L (D)", default: 14.0, unit: "m", step: 0.5 },
      { key: "E", label: "Chiều rộng dầm b (E)", default: 0.3, unit: "m", step: 0.05 },
      { key: "F", label: "Chiều cao dầm h (F)", default: 0.6, unit: "m", step: 0.05 },
      { key: "G", label: "Chiều dày lót (G)", default: 0.05, unit: "m", step: 0.01 },
      { key: "I", label: "Chiều dày sàn nền (I)", default: 0.15, unit: "m", step: 0.01 },
      { key: "J", label: "Đoạn trừ móng/cột (J)", default: 0.8, unit: "m", step: 0.05 },
      { key: "O", label: "Số lượng dầm (O)", default: 1, unit: "dầm", step: 1 },
      { key: "U", label: "Hàm lượng thép (U)", default: 160, unit: "kg/m³", step: 10 }
    ],
    computeStr: `(vals) => {
      const D = Number(vals.D || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const I = Number(vals.I || 0);
      const J = Number(vals.J ?? 0.8);
      const O = Number(vals.O ?? 1);
      const U = Number(vals.U ?? 160);
      const H = G * 2;
      const K = (D - J) * E * (F - I);
      const L = (D - J) * (E + H) * G;
      const M = (D - J) * 2 * G;
      const N = (D - J) * 2 * (F - I);
      const Q = K * O;
      const R = L * O;
      const S = M * O;
      const T = N * O;
      const V = D * E * F * O * U;
      return { K, L, M, N, Q, R, S, T, V };
    }`
  },
  {
    key: "Nền",
    id: "nen",
    title: "Nền nhà xưởng & Tầng trệt",
    svgKey: "SvgSan",
    purpose: "Tính toán diện tích và thể tích bê tông nền nhà, lớp đá cấp phối dăm base/subbase, bê tông lót nilon/bạt, ván khuôn be cạnh nền và cốt thép lưới hàn nền.",
    warningCodes: [],
    calcFields: [
      { key: "E", label: "Chiều dài ô sàn nền (E)", default: 37.44, unit: "m", step: 0.5 },
      { key: "F", label: "Chiều rộng ô sàn nền (F)", default: 27.52, unit: "m", step: 0.5 },
      { key: "I", label: "Chiều dày lớp Base (I)", default: 0.25, unit: "m", step: 0.01 },
      { key: "J", label: "Chiều dày BT nền (J)", default: 0.22, unit: "m", step: 0.01 },
      { key: "D", label: "Số lượng ô sàn (D)", default: 1, unit: "ô", step: 1 },
      { key: "V", label: "Đường kính thép lưới (V)", default: 10, unit: "mm", step: 1 },
      { key: "W", label: "Bước thép @ (W)", default: 150, unit: "mm", step: 25 },
      { key: "X", label: "Số lớp thép (X)", default: 2, unit: "lớp", step: 1 }
    ],
    computeStr: `(vals) => {
      const D = Number(vals.D ?? 1);
      const E = Number(vals.E ?? 37.44);
      const F = Number(vals.F ?? 27.52);
      const I = Number(vals.I || 0);
      const J = Number(vals.J || 0);
      const V = Number(vals.V ?? 10);
      const W = Number(vals.W ?? 150);
      const X = Number(vals.X ?? 2);
      const Z = 1.15;
      const G = E * F;
      const H = 2 * (E + F);
      const M = G * J * D;
      const N = G * I * D;
      const O = H * J * D;
      const P = G * D;
      const Y = (Math.pow(V, 2) / 162) * (1000 / W) * 2 * X;
      const AA = G * Y * Z;
      return { G, H, M, N, O, P, Y, AA };
    }`
  },
  {
    key: "Cột",
    id: "cot",
    title: "Cột chịu lực (Vuông, Chữ nhật, Tròn)",
    svgKey: "SvgCot",
    purpose: "Tính toán thể tích bê tông cột (chiều cao tầng trừ chiều dày sàn/dầm), diện tích ván khuôn 4 mặt cột (cột tròn: pi*G*H), vai cột và thép ước tính theo hàm lượng 220 kg/m³.",
    warningCodes: [],
    calcFields: [
      { key: "D", label: "Kích thước cột b (D)", default: 0.5, unit: "m", step: 0.05 },
      { key: "E", label: "Kích thước cột h (E)", default: 0.4, unit: "m", step: 0.05 },
      { key: "F", label: "Chiều cao tầng (F)", default: 5.0, unit: "m", step: 0.1 },
      { key: "H", label: "Trừ chiều dày sàn (H)", default: 0.16, unit: "m", step: 0.01 },
      { key: "Q", label: "Số cột mỗi tầng (Q)", default: 1, unit: "cột", step: 1 },
      { key: "R", label: "Số tầng giống nhau (R)", default: 1, unit: "tầng", step: 1 },
      { key: "V", label: "Hàm lượng thép (V)", default: 220, unit: "kg/m³", step: 10 }
    ],
    computeStr: `(vals) => {
      const D = Number(vals.D || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const H = Number(vals.H || 0);
      const Q = Number(vals.Q ?? 1);
      const R = Number(vals.R ?? 1);
      const V = Number(vals.V ?? 220);
      const O = D * E * (F - H);
      const P = 2 * (D + E) * (F - H);
      const T = O * Q * R;
      const U = P * Q * R;
      const W = T * V;
      return { O, P, T, U, W };
    }`
  },
  {
    key: "Vách BTCT",
    id: "vach-btct",
    title: "Vách bê tông cốt thép & Lõi thang",
    svgKey: "SvgVachBTCT",
    purpose: "Tính toán thể tích bê tông vách chịu lực, vách tầng hầm, lõi thang máy, diện tích ván khuôn thành vách theo số mặt (I, L, U) và trừ các lỗ mở cửa vách.",
    warningCodes: [],
    calcFields: [
      { key: "D", label: "Chiều dài vách (D)", default: 5.0, unit: "m", step: 0.2 },
      { key: "E", label: "Bề dày vách (E)", default: 0.2, unit: "m", step: 0.05 },
      { key: "F", label: "Chiều cao vách (F)", default: 5.0, unit: "m", step: 0.1 },
      { key: "G", label: "Số mặt ván khuôn (G)", default: 2, unit: "mặt", step: 1 },
      { key: "J", label: "Chiều rộng trừ lỗ mở (J)", default: 0.6, unit: "m", step: 0.1 },
      { key: "O", label: "Số lượng vách (O)", default: 2, unit: "vách", step: 1 },
      { key: "P", label: "Số tầng (P)", default: 1, unit: "tầng", step: 1 },
      { key: "V", label: "Hàm lượng cốt thép (V)", default: 120, unit: "kg/m³", step: 10 }
    ],
    computeStr: `(vals) => {
      const D = Number(vals.D || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G ?? 2);
      const J = Number(vals.J ?? 0.6);
      const O = Number(vals.O ?? 2);
      const P = Number(vals.P ?? 1);
      const V = Number(vals.V ?? 120);
      const K = D - J;
      const L = (K * F) * G;
      const M = K * E * F;
      const R = M * O * P;
      const S = L * O * P;
      const W = R * V;
      return { K, L, M, R, S, W };
    }`
  },
  {
    key: "Sàn",
    id: "san",
    title: "Sàn bê tông cốt thép",
    svgKey: "SvgSan",
    purpose: "Tính toán diện tích và thể tích bê tông sàn toàn khối theo diện tích trùm phủ, diện tích ván khuôn đáy sàn, trừ ô thông tầng (dòng âm) và định mức thép lưới sàn (kg/m²).",
    warningCodes: ["LOI-08"],
    calcFields: [
      { key: "D", label: "Chiều dài ô sàn L (D)", default: 168.0, unit: "m", step: 1.0 },
      { key: "E", label: "Chiều rộng ô sàn W (E)", default: 16.0, unit: "m", step: 0.5 },
      { key: "F", label: "Chiều dày sàn h (F)", default: 0.15, unit: "m", step: 0.01 },
      { key: "Q", label: "Đường kính thép lưới (Q)", default: 8, unit: "mm", step: 1 },
      { key: "R", label: "Bước bố trí thép @ (R)", default: 200, unit: "mm", step: 25 },
      { key: "S", label: "Số lớp thép (S)", default: 2, unit: "lớp", step: 1 }
    ],
    computeStr: `(vals) => {
      const D = Number(vals.D || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const Q = Number(vals.Q ?? 8);
      const R = Number(vals.R ?? 200);
      const S = Number(vals.S ?? 2);
      const U = 1.15;
      const G = D * E;
      const H = G * F;
      const I = G;
      const T = (Math.pow(Q, 2) / 162) * (1000 / R) * 2 * S;
      const V = G * T * U;
      return { G, H, I, T, V };
    }`
  },
  {
    key: "Dầm tầng",
    id: "dam-tang",
    title: "Dầm tầng (Dầm chính & Dầm phụ)",
    svgKey: "SvgDamTang",
    purpose: "Tính toán bê tông sườn dầm (chiều cao dầm trừ chiều dày sàn), ván khuôn thành dầm 2 bên, ván khuôn đáy dầm (trừ phần cột) và trừ giao cắt dầm phụ.",
    warningCodes: [],
    calcFields: [
      { key: "D", label: "Chiều dài trục dầm L (D)", default: 14.4, unit: "m", step: 0.2 },
      { key: "E", label: "Chiều rộng dầm b (E)", default: 0.3, unit: "m", step: 0.05 },
      { key: "F", label: "Chiều cao dầm h (F)", default: 0.7, unit: "m", step: 0.05 },
      { key: "G", label: "Chiều dày sàn (G)", default: 0.15, unit: "m", step: 0.01 },
      { key: "H", label: "Trừ bề rộng cột (H)", default: 1.2, unit: "m", step: 0.1 },
      { key: "L", label: "Số lượng dầm (L)", default: 1, unit: "dầm", step: 1 },
      { key: "R", label: "Hàm lượng cốt thép (R)", default: 180, unit: "kg/m³", step: 10 }
    ],
    computeStr: `(vals) => {
      const D = Number(vals.D || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const H = Number(vals.H ?? 1.2);
      const L = Number(vals.L ?? 1);
      const M = 1;
      const R = Number(vals.R ?? 180);
      const I = (D - H) * E * (F - G);
      const J = (D - H) * (F - G) * 2;
      const K = (D - H) * E;
      const O = I * L * M;
      const P = J * L * M;
      const Q = K * L * M;
      const S = D * E * F * L * M * R;
      return { I, J, K, O, P, Q, S };
    }`
  },
  {
    key: "Cầu thang",
    id: "cau-thang",
    title: "Cầu thang bộ",
    svgKey: "SvgCauThang",
    purpose: "Tính toán thể tích bê tông bản thang nghiêng, bản chiếu nghỉ, dầm cốn thang, bậc thang xây/đổ và ván khuôn đáy/thành bản thang.",
    warningCodes: [],
    calcFields: [
      { key: "D", label: "Chiều dài bản nghiêng (D)", default: 3.0875, unit: "m", step: 0.05 },
      { key: "E", label: "Chiều rộng vế thang (E)", default: 1.72, unit: "m", step: 0.05 },
      { key: "F", label: "Chiều dày bản thang (F)", default: 0.15, unit: "m", step: 0.01 },
      { key: "I", label: "Số vế thang mỗi tầng (I)", default: 2, unit: "vế", step: 1 },
      { key: "J", label: "Số tầng thang (J)", default: 1, unit: "tầng", step: 1 }
    ],
    computeStr: `(vals) => {
      const D = Number(vals.D ?? 3.0875);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const I = Number(vals.I ?? 2);
      const J = Number(vals.J ?? 1);
      const G = D * E * F;
      const H = D * E + 2 * D * F;
      const L = G * I * J;
      const M = H * I * J;
      return { G, H, L, M };
    }`
  },
  {
    key: "Hoàn thiện Sàn-Trần",
    id: "hoan-thien",
    title: "Hoàn thiện Sàn - Trần - Tường",
    svgKey: "SvgSan",
    purpose: "Tính toán diện tích lát sàn theo từng mã F1–F9, trần thạch cao/sơn C1–C6, ốp tường gạch theo mã W1–W3, len chân tường SK1–SK6 và chống thấm khu vệ sinh.",
    warningCodes: [],
    calcFields: [
      { key: "J", label: "Diện tích phòng (J)", default: 25.0, unit: "m²", step: 1.0 },
      { key: "K", label: "Chu vi phòng (K)", default: 20.0, unit: "m", step: 0.5 },
      { key: "I", label: "Chiều cao ốp tường (I)", default: 2.4, unit: "m", step: 0.1 },
      { key: "L", label: "Số phòng giống nhau (L)", default: 1, unit: "phòng", step: 1 },
      { key: "M", label: "Số tầng (M)", default: 1, unit: "tầng", step: 1 }
    ],
    computeStr: `(vals) => {
      const J = Number(vals.J || 0);
      const K = Number(vals.K || 0);
      const I = Number(vals.I || 0);
      const L = Number(vals.L ?? 1);
      const M = Number(vals.M ?? 1);
      const S_san = J * L * M;
      const S_tran = J * L * M;
      const S_op = K * I * L * M;
      const L_chan_tuong = K * L * M;
      return { S_san, S_tran, S_op, L_chan_tuong };
    }`
  },
  {
    key: "Tường xây",
    id: "tuong-xay",
    title: "Tường xây gạch & Trát hoàn thiện",
    svgKey: "SvgTuongXay",
    purpose: "Tính toán khối xây tường ngoài (EW) và tường trong (IW) theo bề dày 110, 220, 330mm; trừ diện tích cửa đi, cửa sổ, trụ giằng bê tông và diện tích trát/ốp tường.",
    warningCodes: ["LOI-06", "LOI-07"],
    calcFields: [
      { key: "F", label: "Chiều dài tường (F)", default: 20.0, unit: "m", step: 0.5 },
      { key: "G", label: "Chiều dày tường (G)", default: 0.11, unit: "m", step: 0.11 },
      { key: "H", label: "Chiều cao tường (H)", default: 5.0, unit: "m", step: 0.1 },
      { key: "I", label: "Chân tường trát ngoài (I)", default: 0.5, unit: "m", step: 0.1 },
      { key: "J", label: "Chiều cao trát trong (J)", default: 5.0, unit: "m", step: 0.1 },
      { key: "D", label: "Số lượng tường (D)", default: 1, unit: "bức", step: 1 },
      { key: "E", label: "Số tầng (E)", default: 1, unit: "tầng", step: 1 }
    ],
    computeStr: `(vals) => {
      const D = Number(vals.D ?? 1);
      const E = Number(vals.E ?? 1);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const H = Number(vals.H || 0);
      const I = Number(vals.I ?? 0.5);
      const J = Number(vals.J ?? 5);
      const P = (Math.abs(G - 0.11) < 0.005 || Math.abs(G - 0.22) < 0.005 || Math.abs(G - 0.33) < 0.005) ? F * G * H * D * E : 0;
      const T = F * (H + I) * D * E;
      const U = F * J * D * E;
      return { P, T, U };
    }`
  },
  {
    key: "Vách ngăn",
    id: "vach-ngan",
    title: "Vách ngăn nhẹ (Thạch cao, Cemboard)",
    svgKey: "SvgTuongXay",
    purpose: "Tính toán diện tích khung xương và tấm vách ngăn nhẹ theo từng hệ W1–W9, chiều cao đến đáy sàn hoặc trần treo, trừ diện tích cửa đi.",
    warningCodes: [],
    calcFields: [
      { key: "G", label: "Chiều dài vách (G)", default: 9.55, unit: "m", step: 0.2 },
      { key: "J", label: "Chiều cao vách (J)", default: 5.0, unit: "m", step: 0.1 },
      { key: "K", label: "Trừ diện tích cửa (K)", default: 0.0, unit: "m²", step: 0.5 },
      { key: "P", label: "Số lượng vách (P)", default: 1, unit: "vách", step: 1 }
    ],
    computeStr: `(vals) => {
      const G = Number(vals.G || 0);
      const J = Number(vals.J || 0);
      const K = Number(vals.K ?? 0);
      const P = Number(vals.P ?? 1);
      const L = (G * J) - K;
      const R = L * P * 2;
      return { L, R };
    }`
  },
  {
    key: "Hạ tầng- Đường",
    id: "ha-tang-duong",
    title: "Hạ tầng - Đường giao thông nội bộ",
    svgKey: "SvgHaTangDuong",
    purpose: "Tính toán diện tích mặt đường bê tông/nhựa R1–R3, thể tích bê tông mặt đường, lớp móng đá dăm cấp phối loại 1 và loại 2, lớp cát đệm nền đường (hệ số 1.35) và đào khuôn đường.",
    warningCodes: ["LOI-10"],
    calcFields: [
      { key: "J", label: "Diện tích mặt đường (J)", default: 1714.51, unit: "m²", step: 10 },
      { key: "H", label: "Chiều dày bê tông mặt (H)", default: 0.4, unit: "m", step: 0.05 },
      { key: "Z", label: "Hệ số đầm nén cát (Z)", default: 1.35, unit: "lần", step: 0.05 }
    ],
    computeStr: `(vals) => {
      const H = Number(vals.H || 0);
      const J = Number(vals.J || 0);
      const Z = Number(vals.Z ?? 1.35);
      const M = J * H;
      const P = J;
      return { M, P };
    }`
  },
  {
    key: "Hạ tầng- Cống tròn",
    id: "ha-tang-cong",
    title: "Hạ tầng - Cống tròn thoát nước",
    svgKey: "SvgMuongCong",
    purpose: "Tính toán chiều dài lắp đặt cống tròn bê tông đúc sẵn theo từng đường kính (D300 đến D1500), thể tích đào rãnh cống, bê tông đế cống, cát đệm lưng cống và đắp đất hoàn trả.",
    warningCodes: [],
    calcFields: [
      { key: "H", label: "Chiều dài tuyến cống (H)", default: 17.3, unit: "m", step: 0.5 },
      { key: "D", label: "Đường kính trong cống (D)", default: 0.4, unit: "m", step: 0.1 },
      { key: "F", label: "Chiều dày thành cống (F)", default: 0.3, unit: "m", step: 0.05 }
    ],
    computeStr: `(vals) => {
      const D = Number(vals.D || 0);
      const F = Number(vals.F || 0);
      const H = Number(vals.H || 0);
      const E = D + 2 * F;
      const S = H - 0.6;
      return { E, S };
    }`
  },
  {
    key: "Mương",
    id: "muong",
    title: "Mương thoát nước bê tông",
    svgKey: "SvgMuongCong",
    purpose: "Tính toán bê tông bản đáy mương, bê tông thành mương, tấm đan bê tông đậy mương, bê tông lót, ván khuôn mương, đào đất và đắp đất rãnh mương.",
    warningCodes: [],
    calcFields: [
      { key: "E", label: "Chiều dài tuyến mương (E)", default: 48.5, unit: "m", step: 1.0 },
      { key: "F", label: "Chiều rộng lọt lòng (F)", default: 0.6, unit: "m", step: 0.05 },
      { key: "G", label: "Chiều sâu lọt lòng (G)", default: 1.3, unit: "m", step: 0.05 },
      { key: "J", label: "Chiều dày đáy mương (J)", default: 0.15, unit: "m", step: 0.01 },
      { key: "K", label: "Chiều dày thành mương (K)", default: 0.145, unit: "m", step: 0.005 },
      { key: "L", label: "Chiều dày tấm đan (L)", default: 0.15, unit: "m", step: 0.01 }
    ],
    computeStr: `(vals) => {
      const E = Number(vals.E ?? 48.5);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const J = Number(vals.J || 0);
      const K = Number(vals.K || 0);
      const L = Number(vals.L || 0);
      const Q = (F + 2 * K) * J * E;
      const R = 2 * K * G * E;
      const S = (F + 2 * K) * L * E;
      return { Q, R, S };
    }`
  },
  {
    key: "Hố ga (Kiểu 1)",
    id: "ho-ga-1",
    title: "Hố ga bê tông kiểu 1 (Hố ga tiêu chuẩn)",
    svgKey: "SvgHoGaBe",
    purpose: "Tính toán bê tông đáy, thành và nắp đan hố ga thu nước mưa/nước thải kiểu 1; ván khuôn trong ngoài, bê tông lót hố ga, đào đất và đắp đất hố ga.",
    warningCodes: [],
    calcFields: [
      { key: "E", label: "Số lượng hố ga (E)", default: 1, unit: "hố", step: 1 },
      { key: "F", label: "Đường kính cống vào (F)", default: 300, unit: "mm", step: 50 },
      { key: "L", label: "Bề dày bản đáy (L)", default: 50, unit: "mm", step: 10 }
    ],
    computeStr: `(vals) => {
      const E = Number(vals.E ?? 1);
      const Z = 0.4078 * E;
      const AA = 4.734 * E;
      return { Z, AA };
    }`
  },
  {
    key: "Hố ga (Kiểu 2)",
    id: "ho-ga-2",
    title: "Hố ga bê tông kiểu 2 (Hố ga lắng cặn)",
    svgKey: "SvgHoGaBe",
    purpose: "Tính toán bê tông và ván khuôn hố ga thu kết hợp hố lắng cặn sâu kiểu 2; cổ thu nước và tấm gang/bê tông đậy miệng hố ga.",
    warningCodes: [],
    calcFields: [
      { key: "D", label: "Số lượng hố ga (D)", default: 1, unit: "hố", step: 1 },
      { key: "E", label: "Kích thước thông thủy (E)", default: 800, unit: "mm", step: 50 }
    ],
    computeStr: `(vals) => {
      const D = Number(vals.D ?? 1);
      const Z = 0.289 * D;
      const AA = 2.0075 * D;
      return { Z, AA };
    }`
  },
  {
    key: "Bể nước PCCC",
    id: "be-pccc",
    title: "Bể nước PCCC ngầm",
    svgKey: "SvgHoGaBe",
    purpose: "Tính toán thể tích bê tông bản đáy, tường bể, cột đỡ và bản nắp bể nước ngầm PCCC; bê tông lót móng bể, ván khuôn trong ngoài và khối lượng đào đất hố móng bể.",
    warningCodes: [],
    calcFields: [
      { key: "F", label: "Chiều dài lọt lòng (F)", default: 20.85, unit: "m", step: 0.5 },
      { key: "G", label: "Chiều rộng lọt lòng (G)", default: 12.0, unit: "m", step: 0.5 },
      { key: "H", label: "Chiều cao lọt lòng (H)", default: 3.05, unit: "m", step: 0.1 },
      { key: "I", label: "Chiều dày đáy bể (I)", default: 0.35, unit: "m", step: 0.05 },
      { key: "J", label: "Chiều dày bê tông lót (J)", default: 0.05, unit: "m", step: 0.01 },
      { key: "L", label: "Chiều dày bản nắp (L)", default: 0.16, unit: "m", step: 0.01 }
    ],
    computeStr: `(vals) => {
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const H = Number(vals.H || 0);
      const I = Number(vals.I || 0);
      const J = Number(vals.J || 0);
      const L = Number(vals.L || 0);
      const V_day = F * G * I;
      const V_nap = F * G * L;
      const V_lot = (F + 0.2) * (G + 0.2) * J;
      return { V_day, V_nap, V_lot };
    }`
  },
  {
    key: "Bể XLNT",
    id: "be-xlnt",
    title: "Bể xử lý nước thải (XLNT)",
    svgKey: "SvgHoGaBe",
    purpose: "Tính toán thể tích bê tông đáy bể, các vách ngăn kỹ thuật (ngăn lắng, ngăn kỵ khí, hiếu khí), ván khuôn tiếp xúc nước thải và đào đắp khối lượng lớn.",
    warningCodes: [],
    calcFields: [
      { key: "F", label: "Chiều dài lọt lòng (F)", default: 30.0, unit: "m", step: 1.0 },
      { key: "G", label: "Chiều rộng lọt lòng (G)", default: 25.0, unit: "m", step: 1.0 },
      { key: "H", label: "Chiều sâu bể (H)", default: 4.15, unit: "m", step: 0.1 },
      { key: "I", label: "Chiều dày bản đáy (I)", default: 0.5, unit: "m", step: 0.05 },
      { key: "L", label: "Chiều dày nắp bể (L)", default: 0.16, unit: "m", step: 0.01 }
    ],
    computeStr: `(vals) => {
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const H = Number(vals.H || 0);
      const I = Number(vals.I || 0);
      const L = Number(vals.L || 0);
      const V_day = F * G * I;
      const V_nap = F * G * L;
      return { V_day, V_nap };
    }`
  },
  {
    key: "Hàng rào",
    id: "hang-rao",
    title: "Hàng rào công trình",
    svgKey: "SvgTuongXay",
    purpose: "Tính toán móng trụ rào M1/M2, bê tông cổ cột rào, giằng móng rào, tường gạch hoa/song sắt rào và ván khuôn giằng.",
    warningCodes: [],
    calcFields: [
      { key: "D", label: "Số lượng móng trụ (D)", default: 37, unit: "trụ", step: 1 },
      { key: "E", label: "Chiều rộng móng trụ (E)", default: 0.6, unit: "m", step: 0.05 },
      { key: "F", label: "Chiều dài móng trụ (F)", default: 0.6, unit: "m", step: 0.05 },
      { key: "G", label: "Chiều cao móng trụ (G)", default: 0.15, unit: "m", step: 0.05 },
      { key: "M", label: "Chiều cao cột rào (M)", default: 1.5, unit: "m", step: 0.1 }
    ],
    computeStr: `(vals) => {
      const D = Number(vals.D ?? 37);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const V_mong = E * F * G * D;
      return { V_mong };
    }`
  }
];

console.log('itemsA_meta defined:', itemsA_meta.length);

// Source lookup helper based on NGUON_THONG_SO.md
function getSourceDescription(sheetKey, col) {
  if (['F', 'G', 'H', 'D', 'E'].includes(col)) return 'Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện';
  if (['Y', 'G', 'J', 'AL'].includes(col)) return 'Chỉ dẫn kỹ thuật / chi tiết cấu tạo';
  if (['BO', 'BP', 'AC', 'H', 'I', 'AA', 'Z'].includes(col)) return 'Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng';
  if (['BM', 'BN', 'W', 'X'].includes(col)) return 'Báo cáo địa chất / Bảng 11 TCVN 4447:2012';
  if (['AW', 'AD', 'U', 'R', 'V', 'W'].includes(col)) return 'Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế';
  return 'Bản vẽ thiết kế và chỉ dẫn kỹ thuật';
}

// Build Part A items
const partAItemsCode = [];

for (const meta of itemsA_meta) {
  const specSheet = s1Map[meta.key] || s1Map[meta.key.trim()] || { rows: [] };
  const rows = specSheet.rows || [];
  
  // Parameters (inputs + key dimensions)
  const paramRows = rows.filter(r => r.type === 'nhập' || ['Z', 'AE', 'BQ', 'BN'].includes(r.col));
  const parameters = paramRows.map(r => ({
    name: r.name.replace(/›/g, '·').trim(),
    column: r.col,
    source: getSourceDescription(meta.key, r.col),
    note: r.unit ? `Đơn vị: ${r.unit}` : 'Nhập số liệu thiết kế'
  }));
  
  // Formulas
  const formulaRows = rows.filter(r => r.type === 'công thức' && r.formula && r.formula !== '');
  const formulas = formulaRows.slice(0, 10).map(r => ({
    target: `${r.name.replace(/›/g, '·').trim()} (Cột ${r.col})`,
    mathFormat: r.meaning ? r.meaning.replace(/\[/g, '').replace(/\]/g, '') : r.name,
    excelCode: r.formula,
    description: r.meaning ? `Giải nghĩa: ${r.meaning}` : 'Công thức tính toán theo Excel gốc'
  }));

  // Example
  const testcase = tc1[meta.key] || tc1[meta.key.trim()] || { inputs: {}, outputs: {} };
  const example = {
    description: `Dữ liệu mẫu tính toán thực tế cho sheet ${meta.key}`,
    inputs: testcase.inputs,
    outputs: testcase.outputs
  };

  // Warnings
  const warnings = (meta.warningCodes || []).map(code => {
    return {
      code,
      level: code === 'LOI-10' || code === 'LOI-04' || code === 'LOI-06' || code === 'LOI-03' ? 'Cao' : (code === 'LOI-01' || code === 'LOI-02' ? 'Nghiêm trọng' : 'Trung bình'),
      title: `Cảnh báo ${code} - Rà soát khi sử dụng`,
      content: `Lỗi hoặc rủi ro đã biết liên quan tới cấu kiện ${meta.title} trong file 1.1.`,
      remedy: 'Xem chi tiết trong mục Kiểm tra chéo (Phần D) và đối chiếu với tiêu chuẩn.'
    };
  });

  partAItemsCode.push(`  {
    id: ${JSON.stringify(meta.id)},
    title: ${JSON.stringify(meta.title)},
    fileSource: "1.1",
    sheetName: ${JSON.stringify(meta.key)},
    purpose: ${JSON.stringify(meta.purpose)},
    parameters: ${JSON.stringify(parameters, null, 6)},
    formulas: ${JSON.stringify(formulas, null, 6)},
    svgKey: ${JSON.stringify(meta.svgKey)},
    example: ${JSON.stringify(example, null, 6)},
    calculator: {
      fields: ${JSON.stringify(meta.calcFields, null, 8)},
      compute: ${meta.computeStr}
    },
    warnings: ${JSON.stringify(warnings, null, 6)}
  }`);
}

const partAFileContent = `// PHẦN A: BÊ TÔNG, VÁN KHUÔN, ĐÀO ĐẮP, HOÀN THIỆN (FILE 1.1)
// Tách biệt 100% dữ liệu khỏi giao diện. Nguồn sự thật: SPEC_1.1_khoi_luong.md

export const partAItems = [
${partAItemsCode.join(',\n')}
];

export const getPartAItemById = (id) => partAItems.find(item => item.id === id);
`;

fs.writeFileSync(path.join(__dirname, '../src/data/partA_items.js'), partAFileContent, 'utf8');
console.log('Successfully wrote src/data/partA_items.js!');
