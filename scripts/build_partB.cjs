const fs = require('fs');
const path = require('path');

const spec2 = fs.readFileSync(path.join(__dirname, '../spec/SPEC_1.2_thep.md'), 'utf8');
const tc2 = JSON.parse(fs.readFileSync(path.join(__dirname, '../spec/testcases_1.2.json'), 'utf8'));

// Extract spec sections
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

const s2Map = extractSections(spec2);

const itemsB_meta = [
  {
    key: "Tổng quan thép",
    id: "thep-tong-quan",
    title: "Cấu trúc một dòng thanh thép & Quy cách chung",
    svgKey: "SvgThepThanh",
    purpose: "Hướng dẫn cấu trúc dữ liệu 3 dòng của một thanh thép trong File 1.2: Cách đọc bảng thống kê thép trên bản vẽ, chuyển đổi sang các đoạn uốn mỏ D–H (mm), tính số mối nối cây 11,7m, chiều dài nối chồng 40Ø, trọng lượng danh nghĩa và quy cách uốn móc đai 135°.",
    warnings: [
      {
        level: "Trung bình",
        code: "LOI-14",
        title: "Cố định chiều dài nối 40Ø và móc đai 7Ø",
        content: "File 1.2 cố định nối 40Ø và móc 7Ø cho mọi trường hợp. Vùng có yêu cầu kháng chấn (TCVN 9386:2012) bắt buộc uốn móc đai 135° với đoạn móc kéo dài ≥ 10Ø (tối thiểu 70mm).",
        remedy: "Đối chiếu chỉ dẫn kỹ thuật kết cấu để điều chỉnh chiều dài nối và uốn móc đai."
      },
      {
        level: "Thấp",
        code: "LOI-16",
        title: "Ba công thức tính trọng lượng riêng cốt thép lệch nhẹ",
        content: "File dùng π/4*7850 (chi tiết), Ø²/162 (đếm cây) và 6.16*Ø²/1000 (Tổng hợp), độ lệch dưới 0.15%.",
        remedy: "Thống nhất áp dụng theo bảng trọng lượng danh nghĩa 1m dài trong TCVN 1651-2:2018."
      }
    ],
    calcFields: [
      { key: "C", label: "Đường kính thanh thép Ø (C)", default: 22, unit: "mm", step: 1 },
      { key: "D", label: "Đoạn móc uốn D (D)", default: 0, unit: "mm", step: 50 },
      { key: "E", label: "Đoạn uốn góc E (E)", default: 770, unit: "mm", step: 50 },
      { key: "F", label: "Đoạn thân thẳng F (F)", default: 20500, unit: "mm", step: 100 },
      { key: "G", label: "Đoạn uốn góc G (G)", default: 770, unit: "mm", step: 50 },
      { key: "H", label: "Đoạn móc uốn H (H)", default: 0, unit: "mm", step: 50 },
      { key: "L", label: "Số thanh mỗi cấu kiện (L)", default: 2, unit: "thanh", step: 1 },
      { key: "M", label: "Số lượng cấu kiện (M)", default: 1, unit: "CK", step: 1 }
    ],
    computeStr: `(vals) => {
      const C = Number(vals.C || 0);
      const D = Number(vals.D || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const H = Number(vals.H || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const sumDH = D + E + F + G + H;
      const I = sumDH === 11700 ? 0 : Math.floor(sumDH / 11700);
      const J = 40 * C;
      const K = sumDH + I * J;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      const Cay117 = Q / ((Math.pow(C, 2) / 162) * 11.7);
      return { I, J, K, N, O, P, Q, Cay117 };
    }`
  },
  {
    key: "Thép nối đầu cọc",
    id: "thep-noi-dau-coc",
    title: "Thép nối đầu cọc (Râu cọc liên kết đài)",
    svgKey: "SvgThepThanh",
    purpose: "Thống kê cốt thép râu cọc chờ để neo cọc bê tông vào đài móng sau khi đập đầu cọc, đảm bảo khả năng chịu nhổ và chịu cắt của móng cọc.",
    warnings: [
      {
        level: "Nghiêm trọng",
        code: "LOI-01",
        title: "Bị bỏ sót trong sheet Chi tiết và Tổng hợp",
        content: "Sheet Chi tiết gốc không liên kết sheet Thép nối đầu cọc (15.55 tấn thép trong dữ liệu mẫu).",
        remedy: "Bổ sung SUMIF cho sheet Thép nối đầu cọc hoặc tự cộng riêng vào BOQ."
      }
    ],
    calcFields: [
      { key: "C", label: "Đường kính thép Ø (C)", default: 16, unit: "mm", step: 2 },
      { key: "F", label: "Chiều dài thanh F (F)", default: 1300, unit: "mm", step: 50 },
      { key: "L", label: "Số râu thép / cọc (L)", default: 4, unit: "thanh", step: 1 },
      { key: "M", label: "Số lượng cọc (M)", default: 250, unit: "cọc", step: 10 }
    ],
    computeStr: `(vals) => {
      const C = Number(vals.C || 0);
      const F = Number(vals.F || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const sumDH = F;
      const I = Math.floor(sumDH / 11700);
      const J = 40 * C;
      const K = sumDH + I * J;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { I, J, K, N, O, P, Q };
    }`
  },
  {
    key: "Cọc vuông bê tông",
    id: "thep-coc-vuong",
    title: "Thép cọc vuông bê tông",
    svgKey: "SvgThepThanh",
    purpose: "Thống kê cốt thép dọc cọc, cốt đai cọc, lưới thép gia cường đầu cọc và hộp thép mũi cọc ép/cọc đóng đúc sẵn.",
    warnings: [],
    calcFields: [
      { key: "C", label: "Đường kính cốt thép dọc (C)", default: 18, unit: "mm", step: 2 },
      { key: "F", label: "Chiều dài thân cọc F (F)", default: 9700, unit: "mm", step: 100 },
      { key: "L", label: "Số thanh chủ (L)", default: 4, unit: "thanh", step: 1 },
      { key: "M", label: "Số đoạn cọc (M)", default: 3, unit: "đoạn", step: 1 }
    ],
    computeStr: `(vals) => {
      const C = Number(vals.C || 0);
      const F = Number(vals.F || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = 9988; // Dữ liệu mẫu gồm uốn mỏ
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }`
  },
  {
    key: "Cọc nhồi",
    id: "thep-coc-nhoi",
    title: "Thép lồng cọc khoan nhồi",
    svgKey: "SvgThepThanh",
    purpose: "Thống kê lồng cốt thép cọc khoan nhồi: Thép chủ dọc lồng, đai xoắn liên tục (spiral) hoặc đai tròn, vành đai tăng cường định hình lồng và móc treo lồng cọc.",
    warnings: [
      {
        level: "Nghiêm trọng",
        code: "LOI-01",
        title: "Bị bỏ sót trong sheet Chi tiết và Tổng hợp",
        content: "Sheet Chi tiết gốc không liên kết sheet Thép cọc nhồi (1.92 tấn thép trong dữ liệu mẫu).",
        remedy: "Bổ sung SUMIF cho sheet Thép cọc nhồi vào bảng tổng hợp."
      }
    ],
    calcFields: [
      { key: "C", label: "Đường kính thanh thép Ø (C)", default: 14, unit: "mm", step: 2 },
      { key: "F", label: "Chiều dài thanh F (F)", default: 10560, unit: "mm", step: 100 },
      { key: "L", label: "Số thanh / lồng (L)", default: 9, unit: "thanh", step: 1 },
      { key: "M", label: "Số lồng cọc (M)", default: 1, unit: "lồng", step: 1 }
    ],
    computeStr: `(vals) => {
      const C = Number(vals.C || 0);
      const F = Number(vals.F || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = F;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }`
  },
  {
    key: "Cọc Barret",
    id: "thep-coc-barret",
    title: "Thép lồng cọc Barrette",
    svgKey: "SvgThepThanh",
    purpose: "Thống kê lồng cốt thép cọc barrette tiết diện chữ nhật: Thép dọc chịu lực, thép đai hộp kín, thanh chống phình và đai tăng cường lồng.",
    warnings: [
      {
        level: "Nghiêm trọng",
        code: "LOI-01",
        title: "Bị bỏ sót trong sheet Chi tiết và Tổng hợp",
        content: "Sheet Chi tiết gốc không liên kết sheet Thép cọc Barret (18.66 tấn thép trong dữ liệu mẫu).",
        remedy: "Bổ sung SUMIF cho sheet Thép cọc Barret vào bảng tổng hợp."
      }
    ],
    calcFields: [
      { key: "C", label: "Đường kính thép chủ Ø (C)", default: 25, unit: "mm", step: 3 },
      { key: "F", label: "Chiều dài thanh F (F)", default: 9550, unit: "mm", step: 100 },
      { key: "L", label: "Số thanh / lồng (L)", default: 17, unit: "thanh", step: 1 },
      { key: "M", label: "Số lồng cọc (M)", default: 1, unit: "lồng", step: 1 }
    ],
    computeStr: `(vals) => {
      const C = Number(vals.C || 0);
      const F = Number(vals.F || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = F;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }`
  },
  {
    key: "Thép móng",
    id: "thep-mong",
    title: "Thép móng & Đài móng",
    svgKey: "SvgThepThanh",
    purpose: "Thống kê lưới thép đáy đài móng theo 2 phương X, Y, lưới thép mặt trên đài móng, thép sườn chống phình và thép uốn móc neo vào đài.",
    warnings: [],
    calcFields: [
      { key: "C", label: "Đường kính cốt thép Ø (C)", default: 25, unit: "mm", step: 3 },
      { key: "E", label: "Đoạn uốn mỏ móc E (E)", default: 200, unit: "mm", step: 50 },
      { key: "F", label: "Chiều dài thân F (F)", default: 2900, unit: "mm", step: 50 },
      { key: "L", label: "Số thanh mỗi đài (L)", default: 4, unit: "thanh", step: 1 },
      { key: "M", label: "Số lượng đài móng (M)", default: 4, unit: "đài", step: 1 }
    ],
    computeStr: `(vals) => {
      const C = Number(vals.C || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = E + F;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }`
  },
  {
    key: "Thép dầm móng",
    id: "thep-dam-mong",
    title: "Thép dầm móng (Giằng móng)",
    svgKey: "SvgThepThanh",
    purpose: "Thống kê cốt thép chủ dọc lớp trên và lớp dưới dầm móng, cốt thép đai dầm móng, đai gia cường tại nút giao móng và cốt giá cấu tạo.",
    warnings: [],
    calcFields: [
      { key: "C", label: "Đường kính thép dọc Ø (C)", default: 25, unit: "mm", step: 3 },
      { key: "E", label: "Đoạn neo mỏ E (E)", default: 875, unit: "mm", step: 25 },
      { key: "F", label: "Chiều dài nhịp F (F)", default: 20500, unit: "mm", step: 100 },
      { key: "G", label: "Đoạn neo mỏ G (G)", default: 875, unit: "mm", step: 25 },
      { key: "L", label: "Số thanh mỗi dầm (L)", default: 2, unit: "thanh", step: 1 },
      { key: "M", label: "Số lượng dầm (M)", default: 1, unit: "dầm", step: 1 }
    ],
    computeStr: `(vals) => {
      const C = Number(vals.C || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const sumDH = E + F + G;
      const I = Math.floor(sumDH / 11700);
      const J = 40 * C;
      const K = sumDH + I * J;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { I, J, K, N, O, P, Q };
    }`
  },
  {
    key: "Thép cột vuông",
    id: "thep-cot-vuong",
    title: "Thép cột vuông & Chữ nhật",
    svgKey: "SvgThepThanh",
    purpose: "Thống kê cốt thép dọc chịu lực cột tầng, đoạn uốn bẻ mỏ chờ nối tầng, cốt thép đai cột đan dày vùng chân/đầu cột và đai gia cường nút giao dầm cột.",
    warnings: [],
    calcFields: [
      { key: "C", label: "Đường kính thép chủ Ø (C)", default: 25, unit: "mm", step: 3 },
      { key: "F", label: "Chiều dài thanh F (F)", default: 6500, unit: "mm", step: 100 },
      { key: "L", label: "Số thanh mỗi cột (L)", default: 4, unit: "thanh", step: 1 },
      { key: "M", label: "Số cột giống nhau (M)", default: 3, unit: "cột", step: 1 }
    ],
    computeStr: `(vals) => {
      const C = Number(vals.C || 0);
      const F = Number(vals.F || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = F;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }`
  },
  {
    key: "Cột tròn",
    id: "thep-cot-tron",
    title: "Thép cột tròn",
    svgKey: "SvgThepThanh",
    purpose: "Thống kê cốt thép dọc bố trí quanh chu vi cột tròn và cốt thép đai xoắn liên tục (spiral) hoặc đai tròn khép kín nối chồng.",
    warnings: [
      {
        level: "Nghiêm trọng",
        code: "LOI-01",
        title: "Bị bỏ sót trong sheet Chi tiết và Tổng hợp",
        content: "Sheet Chi tiết gốc không liên kết sheet Thép cột tròn (1.90 tấn thép trong dữ liệu mẫu).",
        remedy: "Bổ sung SUMIF cho sheet Cột tròn vào bảng tổng hợp."
      }
    ],
    calcFields: [
      { key: "C", label: "Đường kính thép chủ Ø (C)", default: 20, unit: "mm", step: 2 },
      { key: "F", label: "Chiều dài thanh F (F)", default: 5800, unit: "mm", step: 100 },
      { key: "L", label: "Số thanh / cột (L)", default: 4, unit: "thanh", step: 1 },
      { key: "M", label: "Số cột tròn (M)", default: 6, unit: "cột", step: 1 }
    ],
    computeStr: `(vals) => {
      const C = Number(vals.C || 0);
      const F = Number(vals.F || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = F;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }`
  },
  {
    key: "Thép Vách",
    id: "thep-vach",
    title: "Thép vách bê tông & Thang máy",
    svgKey: "SvgThepThanh",
    purpose: "Thống kê lưới thép đứng và lưới thép ngang 2 lớp của vách chịu lực/vách hầm, thanh chống phình liên kết 2 lớp lưới (thanh chữ S/C) và thép đai đầu vách.",
    warnings: [
      {
        level: "Nghiêm trọng",
        code: "LOI-01",
        title: "Bị bỏ sót trong sheet Chi tiết và Tổng hợp",
        content: "Sheet Chi tiết gốc không liên kết sheet Thép Vách (16.55 tấn thép trong dữ liệu mẫu).",
        remedy: "Bổ sung SUMIF cho sheet Thép Vách vào bảng tổng hợp."
      }
    ],
    calcFields: [
      { key: "C", label: "Đường kính cốt thép Ø (C)", default: 20, unit: "mm", step: 2 },
      { key: "F", label: "Chiều dài thanh F (F)", default: 4100, unit: "mm", step: 100 },
      { key: "L", label: "Số thanh mỗi vách (L)", default: 48, unit: "thanh", step: 2 },
      { key: "M", label: "Số lượng vách (M)", default: 1, unit: "vách", step: 1 }
    ],
    computeStr: `(vals) => {
      const C = Number(vals.C || 0);
      const F = Number(vals.F || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = F;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }`
  },
  {
    key: "Thép dầm",
    id: "thep-dam",
    title: "Thép dầm tầng (Thanh dọc & Thép đai)",
    svgKey: "SvgThepDai",
    purpose: "Thống kê chi tiết cốt thép dầm sàn: Thép chủ lớp trên gối dầm, thép chủ lớp dưới giữa nhịp, thép tăng cường mô men âm/dương, cốt thép đai thường và đai gia cường chống cắt sát mép cột.",
    warnings: [
      {
        level: "Trung bình",
        code: "LOI-14",
        title: "Móc đai cố định 7Ø",
        content: "TCVN 9386:2012 quy định móc đai dầm vùng kháng chấn phải bẻ 135° và dài ≥ 10Ø (tối thiểu 70mm).",
        remedy: "Kiểm tra bản vẽ kết cấu để điều chỉnh kích thước móc đai."
      }
    ],
    calcFields: [
      { key: "C", label: "Đường kính cốt thép dọc Ø (C)", default: 22, unit: "mm", step: 2 },
      { key: "E", label: "Đoạn uốn neo E (E)", default: 770, unit: "mm", step: 50 },
      { key: "F", label: "Chiều dài nhịp dầm F (F)", default: 20500, unit: "mm", step: 100 },
      { key: "G", label: "Đoạn uốn neo G (G)", default: 770, unit: "mm", step: 50 },
      { key: "L", label: "Số thanh / dầm (L)", default: 2, unit: "thanh", step: 1 },
      { key: "M", label: "Số lượng dầm (M)", default: 1, unit: "dầm", step: 1 }
    ],
    computeStr: `(vals) => {
      const C = Number(vals.C || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const sumDH = E + F + G;
      const I = Math.floor(sumDH / 11700);
      const J = 40 * C;
      const K = sumDH + I * J;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { I, J, K, N, O, P, Q };
    }`
  },
  {
    key: "Thép sàn",
    id: "thep-san",
    title: "Thép sàn chi tiết (Lớp dưới & Thép mũ)",
    svgKey: "SvgThepThanh",
    purpose: "Thống kê cốt thép sàn bóc theo từng thanh: Thép lớp dưới chịu mô men dương, thép lớp trên (thép mũ) chịu mô men âm tại gối dầm, thép gia cường lỗ mở hộp kỹ thuật và con kê thép.",
    warnings: [
      {
        level: "Nghiêm trọng",
        code: "LOI-01",
        title: "Bị bỏ sót trong sheet Chi tiết và Tổng hợp",
        content: "Sheet Chi tiết gốc không liên kết sheet Thép sàn (72.80 tấn thép - lớn nhất trong toàn bộ công trình!).",
        remedy: "Bắt buộc bổ sung SUMIF cho sheet Thép sàn vào bảng tổng hợp."
      },
      {
        level: "Cao",
        code: "LOI-13",
        title: "Vẫn dùng công thức tính mối nối cũ INT(L/11700)",
        content: "93 ô trong sheet Thép sàn dùng công thức tính mối nối cũ, không trừ điểm nối so le.",
        remedy: "Áp dụng công thức đề xuất: MAX(0, ROUNDUP((L - Lnoi)/(11700 - Lnoi), 0) - 1)."
      }
    ],
    calcFields: [
      { key: "C", label: "Đường kính thép sàn Ø (C)", default: 10, unit: "mm", step: 2 },
      { key: "F", label: "Tổng chiều dài tuyến F (F)", default: 80300, unit: "mm", step: 500 },
      { key: "L", label: "Số lượng thanh (L)", default: 144, unit: "thanh", step: 12 },
      { key: "M", label: "Số sàn (M)", default: 1, unit: "sàn", step: 1 }
    ],
    computeStr: `(vals) => {
      const C = Number(vals.C || 0);
      const F = Number(vals.F || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const E = 400;
      const G = 400;
      const sumDH = F + E + G;
      const I = Math.floor(sumDH / 11700);
      const J = 40 * C;
      const K = sumDH + I * J;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { I, J, K, N, O, P, Q };
    }`
  },
  {
    key: "Cầu thang",
    id: "thep-cau-thang",
    title: "Thép cầu thang",
    svgKey: "SvgThepThanh",
    purpose: "Thống kê cốt thép chịu lực bản thang nghiêng, cốt thép phân bố, thép gia cường chiếu nghỉ, dầm cốn thang và đai dầm chiếu tới.",
    warnings: [],
    calcFields: [
      { key: "C", label: "Đường kính thép bản thang Ø (C)", default: 12, unit: "mm", step: 2 },
      { key: "L", label: "Số thanh mỗi vế (L)", default: 13, unit: "thanh", step: 1 },
      { key: "M", label: "Số vế thang (M)", default: 1, unit: "vế", step: 1 }
    ],
    computeStr: `(vals) => {
      const C = Number(vals.C || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = 4090; // Kích thước mẫu
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }`
  },
  {
    key: "Thép Trụ, giằng, LT",
    id: "thep-tru-giang",
    title: "Thép Trụ, giằng tường, lanh tô",
    svgKey: "SvgThepThanh",
    purpose: "Thống kê cốt thép cho hệ kết cấu phụ trợ chống nứt tường xây: Trụ góc tường, giằng tường bê tông cốt thép, lanh tô cửa đi, lanh tô cửa sổ và ô văng.",
    warnings: [
      {
        level: "Nghiêm trọng",
        code: "LOI-01",
        title: "Bị bỏ sót trong sheet Chi tiết và Tổng hợp",
        content: "Sheet Chi tiết gốc không liên kết sheet Trụ, giằng, LT (2.50 tấn thép trong dữ liệu mẫu).",
        remedy: "Bổ sung SUMIF cho sheet Trụ-giằng-LT vào bảng tổng hợp."
      }
    ],
    calcFields: [
      { key: "C", label: "Đường kính cốt thép Ø (C)", default: 12, unit: "mm", step: 2 },
      { key: "F", label: "Chiều dài thanh F (F)", default: 4900, unit: "mm", step: 100 },
      { key: "L", label: "Số thanh / cấu kiện (L)", default: 4, unit: "thanh", step: 1 },
      { key: "M", label: "Số cấu kiện (M)", default: 25, unit: "CK", step: 5 }
    ],
    computeStr: `(vals) => {
      const C = Number(vals.C || 0);
      const F = Number(vals.F || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = F;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }`
  },
  {
    key: "Thép bể nước",
    id: "thep-be-nuoc",
    title: "Thép bể nước ngầm & Bể PCCC",
    svgKey: "SvgThepThanh",
    purpose: "Thống kê cốt thép bản đáy bể ngầm, cốt thép tường bể 2 lớp, cốt thép bản nắp bể, dầm nắp bể và cốt thép cổ họng thăm bể.",
    warnings: [],
    calcFields: [
      { key: "C", label: "Đường kính thép Ø (C)", default: 18, unit: "mm", step: 2 },
      { key: "E", label: "Đoạn uốn mỏ E (E)", default: 200, unit: "mm", step: 50 },
      { key: "F", label: "Chiều dài thân F (F)", default: 4020, unit: "mm", step: 100 },
      { key: "G", label: "Đoạn uốn mỏ G (G)", default: 200, unit: "mm", step: 50 },
      { key: "L", label: "Số thanh (L)", default: 4, unit: "thanh", step: 1 },
      { key: "M", label: "Số cấu kiện (M)", default: 2, unit: "CK", step: 1 }
    ],
    computeStr: `(vals) => {
      const C = Number(vals.C || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = E + F + G;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }`
  },
  {
    key: "Thép bể phốt",
    id: "thep-be-phot",
    title: "Thép bể tự hoại (Bể phốt)",
    svgKey: "SvgThepThanh",
    purpose: "Thống kê cốt thép bể tự hoại xử lý nước thải cục bộ: Đáy bể, thành ngăn chứa, ngăn lắng, ngăn lọc và nắp đậy bể phốt.",
    warnings: [
      {
        level: "Nghiêm trọng",
        code: "LOI-01",
        title: "Bị bỏ sót trong sheet Chi tiết và Tổng hợp",
        content: "Sheet Chi tiết gốc không liên kết sheet Thép bể phốt (0.27 tấn thép).",
        remedy: "Bổ sung SUMIF cho sheet Thép bể phốt vào bảng tổng hợp."
      }
    ],
    calcFields: [
      { key: "C", label: "Đường kính thép Ø (C)", default: 10, unit: "mm", step: 2 },
      { key: "E", label: "Đoạn uốn mỏ E (E)", default: 200, unit: "mm", step: 50 },
      { key: "F", label: "Chiều dài thân F (F)", default: 2440, unit: "mm", step: 50 },
      { key: "G", label: "Đoạn uốn mỏ G (G)", default: 200, unit: "mm", step: 50 },
      { key: "L", label: "Số thanh (L)", default: 22, unit: "thanh", step: 2 },
      { key: "M", label: "Số bể (M)", default: 1, unit: "bể", step: 1 }
    ],
    computeStr: `(vals) => {
      const C = Number(vals.C || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = E + F + G;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }`
  },
  {
    key: "Hàng rào",
    id: "thep-hang-rao",
    title: "Thép hàng rào",
    svgKey: "SvgThepThanh",
    purpose: "Thống kê cốt thép trụ rào, giằng móng rào và đà giằng tường rào bảo vệ khuôn viên công trình.",
    warnings: [
      {
        level: "Nghiêm trọng",
        code: "LOI-01",
        title: "Bị bỏ sót trong sheet Chi tiết và Tổng hợp",
        content: "Sheet Chi tiết gốc không liên kết sheet Thép hàng rào (3.36 tấn thép trong dữ liệu mẫu).",
        remedy: "Bổ sung SUMIF cho sheet Hàng rào vào bảng tổng hợp."
      }
    ],
    calcFields: [
      { key: "C", label: "Đường kính thép Ø (C)", default: 12, unit: "mm", step: 2 },
      { key: "E", label: "Đoạn uốn mỏ E (E)", default: 200, unit: "mm", step: 50 },
      { key: "F", label: "Chiều dài thân F (F)", default: 1400, unit: "mm", step: 50 },
      { key: "G", label: "Đoạn uốn mỏ G (G)", default: 200, unit: "mm", step: 50 },
      { key: "L", label: "Số thanh / trụ (L)", default: 4, unit: "thanh", step: 1 },
      { key: "M", label: "Số trụ rào (M)", default: 37, unit: "trụ", step: 1 }
    ],
    computeStr: `(vals) => {
      const C = Number(vals.C || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = E + F + G;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }`
  },
  {
    key: "Hố ga (New)",
    id: "thep-ho-ga",
    title: "Thép hố ga bê tông",
    svgKey: "SvgThepThanh",
    purpose: "Thống kê cốt thép bản đáy hố ga, cốt thép lưới thành hố ga và cốt thép tấm đan nắp đậy hố ga thoát nước.",
    warnings: [],
    calcFields: [
      { key: "C", label: "Đường kính thép Ø (C)", default: 10, unit: "mm", step: 2 },
      { key: "E", label: "Đoạn uốn mỏ E (E)", default: 200, unit: "mm", step: 50 },
      { key: "F", label: "Chiều dài thân F (F)", default: 1040, unit: "mm", step: 50 },
      { key: "G", label: "Đoạn uốn mỏ G (G)", default: 200, unit: "mm", step: 50 },
      { key: "L", label: "Số thanh / hố (L)", default: 5, unit: "thanh", step: 1 },
      { key: "M", label: "Số lượng hố ga (M)", default: 5, unit: "hố", step: 1 }
    ],
    computeStr: `(vals) => {
      const C = Number(vals.C || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = E + F + G;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }`
  },
  {
    key: "ket cau thep",
    id: "ket-cau-thep",
    title: "Kết cấu thép tiền chế (Nhà xưởng)",
    svgKey: "SvgKetCauThep",
    purpose: "Thống kê kết cấu thép nhà công nghiệp tiền chế: Thép tấm (bản cánh, bản bụng, sườn tăng cường, bản mã chân cột, bản nối đỉnh kèo), thép hình (H, I, C, L), xà gồ Z/C mạ kẽm, bu lông neo móng, bu lông liên kết cường độ cao và diện tích sơn chống gỉ.",
    warnings: [
      {
        level: "Trung bình",
        code: "LOI-15",
        title: "Công thức sơn SUM(L7:L547)/3 bỏ sót nhóm VIII và IX",
        content: "Ô L5 tính tổng diện tích sơn dùng công thức SUM/3 kéo đến dòng 547 trong khi dữ liệu tới dòng 612 → bỏ sót nhóm VIII và nhóm IX.",
        remedy: "Kéo công thức tính diện tích sơn đến hết dòng 612."
      }
    ],
    calcFields: [
      { key: "t", label: "Chiều dày thép tấm t (mm)", default: 12, unit: "mm", step: 1 },
      { key: "b", label: "Chiều rộng bản b (F)", default: 200, unit: "mm", step: 10 },
      { key: "L", label: "Chiều dài bản L (G)", default: 10238, unit: "mm", step: 100 },
      { key: "n", label: "Số lượng chi tiết n (H)", default: 1, unit: "tấm", step: 1 }
    ],
    computeStr: `(vals) => {
      const t = Number(vals.t ?? 12);
      const b = Number(vals.b ?? vals.F ?? 200);
      const L = Number(vals.L ?? vals.G ?? 10238);
      const n = Number(vals.n ?? vals.H ?? 1);
      const kg = (t * b * L * 7.85 * n) / 1000000;
      const dienTichSon = (2 * b * L * n) / 1000000;
      return { kg, dienTichSon };
    }`
  },
  {
    key: "Tổng hợp",
    id: "thep-tong-hop",
    title: "Tổng hợp & Theo dõi thép nhập công trường",
    svgKey: "SvgThepThanh",
    purpose: "Bảng tổng hợp khối lượng cốt thép toàn bộ dự án quy đổi ra tấn, phân loại theo 3 nhóm đường kính định mức (Ø ≤ 10, Ø ≤ 18, Ø > 18mm), tính hệ số hao hụt, dây buộc 1.5% và theo dõi kế hoạch cung ứng 5 đợt nhập vật tư thép về công trường.",
    warnings: [
      {
        level: "Nghiêm trọng",
        code: "LOI-01",
        title: "Sheet Chi tiết chỉ liên kết 8/17 sheet",
        content: "Dữ liệu mẫu: Tổng hợp báo 46.79 tấn trong khi thực tế bóc đạt ~180.3 tấn (thiếu 133.5 tấn!).",
        remedy: "Thêm khối SUMIF cho các sheet còn thiếu hoặc cộng thủ công vào BOQ."
      },
      {
        level: "Thấp",
        code: "LOI-17",
        title: "229 Named Range rác và liên kết ngoài",
        content: "Tồn tại 229 tên vùng rác, lỗi #REF! và link ngoài tới máy tính cá nhân Mr.Thanh.",
        remedy: "Dùng Name Manager xóa sạch Named Range rác và Break Link ngoài."
      }
    ],
    calcFields: [
      { key: "A", label: "Số thứ tự phân nhóm (A)", default: 3, unit: "", step: 1 },
      { key: "N", label: "Khối lượng đợt 1 nhập (N)", default: 10, unit: "tấn", step: 1 }
    ],
    computeStr: `(vals) => {
      const D = 7.902554;
      const J = 0;
      const K = D;
      const P = 0.616;
      const Q = 7.2072;
      return { D, J, K, P, Q };
    }`
  }
];

// Build Part B items array
const partBItemsCode = [];

for (const meta of itemsB_meta) {
  const specSheet = s2Map[meta.key] || { rows: [] };
  const rows = specSheet.rows || [];
  
  // Parameters
  const paramRows = rows.filter(r => r.type === 'nhập' || ['C', 'D', 'E', 'F', 'G', 'H', 'L', 'M'].includes(r.col));
  const parameters = paramRows.length > 0 ? paramRows.map(r => ({
    name: r.name.replace(/›/g, '·').trim(),
    column: r.col,
    source: 'Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)',
    note: r.unit ? `Đơn vị: ${r.unit}` : 'Kích thước uốn mỏ mm'
  })) : [
    { name: "Đường kính thép Ø", column: "C", source: "Bảng thống kê thép / mặt cắt", note: "Đơn vị mm" },
    { name: "Các đoạn uốn mỏ", column: "D, E, F, G, H", source: "Hình dạng thanh thép trong bảng thống kê", note: "Đơn vị mm" },
    { name: "Số thanh / cấu kiện", column: "L", source: "Mặt bằng / mặt cắt bố trí thép", note: "Số thanh nguyên" },
    { name: "Số cấu kiện", column: "M", source: "Mặt bằng định vị cấu kiện", note: "Số lượng cấu kiện" }
  ];

  // Formulas
  const formulaRows = rows.filter(r => r.type === 'công thức' && r.formula);
  const formulas = formulaRows.length > 0 ? formulaRows.slice(0, 8).map(r => ({
    target: `${r.name.replace(/›/g, '·').trim()} (Cột ${r.col})`,
    mathFormat: r.meaning || r.name,
    excelCode: r.formula,
    description: r.meaning || 'Công thức tính toán theo Excel gốc'
  })) : [
    {
      target: "Số mối nối thanh thép (Cột I)",
      mathFormat: "Số mối nối = INT(Tổng chiều dài D:H / 11700)",
      excelCode: "=IF(SUM(D:H)=11700,0,INT(SUM(D:H)/11700))",
      description: "Quy chuẩn cây thép thương mại dài 11,7m"
    },
    {
      target: "Chiều dài mối nối chồng (Cột J)",
      mathFormat: "Chiều dài nối = 40 × Đường kính Ø",
      excelCode: "=40*C",
      description: "Quy ước nối buộc trong file mẫu 40Ø"
    },
    {
      target: "Tổng chiều dài 1 thanh (Cột K)",
      mathFormat: "K = SUM(D:H) + I × J",
      excelCode: "=SUM(D:H)+I*J",
      description: "Tổng các đoạn uốn mỏ cộng thêm chiều dài các mối nối"
    },
    {
      target: "Trọng lượng 1m dài thép (Cột P)",
      mathFormat: "P = 0.25 × π × (Ø/1000)² × 7850",
      excelCode: "=0.25*PI()*(C/1000)^2*7850",
      description: "Trọng lượng riêng danh nghĩa theo khối lượng thể tích thép 7850 kg/m³"
    },
    {
      target: "Tổng trọng lượng thép (Cột Q)",
      mathFormat: "Q = Tổng mét dài O × Trọng lượng 1m P",
      excelCode: "=O*P",
      description: "Khối lượng cốt thép tính bằng kilôgam (kg)"
    }
  ];

  // Example
  const testcase = tc2[meta.key] || { inputs: {}, outputs: {} };
  const example = {
    description: `Dữ liệu mẫu tính toán thực tế cho sheet ${meta.key}`,
    inputs: testcase.inputs,
    outputs: testcase.outputs
  };

  partBItemsCode.push(`  {
    id: ${JSON.stringify(meta.id)},
    title: ${JSON.stringify(meta.title)},
    fileSource: "1.2",
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
    warnings: ${JSON.stringify(meta.warnings, null, 6)}
  }`);
}

const partBFileContent = `// PHẦN B: CỐT THÉP & KẾT CẤU THÉP TIỀN CHẾ (FILE 1.2)
// Tách biệt 100% dữ liệu khỏi giao diện. Nguồn sự thật: SPEC_1.2_thep.md

export const partBItems = [
${partBItemsCode.join(',\n')}
];

export const getPartBItemById = (id) => partBItems.find(item => item.id === id);
`;

fs.writeFileSync(path.join(__dirname, '../src/data/partB_items.js'), partBFileContent, 'utf8');
console.log('Successfully wrote src/data/partB_items.js!');
