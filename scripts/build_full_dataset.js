const fs = require('fs');
const path = require('path');

const spec1Content = fs.readFileSync(path.join(__dirname, '../spec/SPEC_1.1_khoi_luong.md'), 'utf8');
const spec2Content = fs.readFileSync(path.join(__dirname, '../spec/SPEC_1.2_thep.md'), 'utf8');
const tc1 = JSON.parse(fs.readFileSync(path.join(__dirname, '../spec/testcases_1.1.json'), 'utf8'));
const tc2 = JSON.parse(fs.readFileSync(path.join(__dirname, '../spec/testcases_1.2.json'), 'utf8'));

// Slug mapping for File 1.1
const sheetMeta1_1 = {
  "San lấp MB": {
    id: "san-lap",
    title: "San lấp mặt bằng",
    svgKey: "SvgSanLap",
    purpose: "Tính toán thể tích san lấp cát/đất, đào đất hạ cốt, bóc bỏ lớp đất hữu cơ bề mặt và các lớp kết cấu nền theo cao độ hoàn thiện và hiện trạng.",
    warningCodes: ["LOI-09", "LOI-18"]
  },
  "Cọc nhồi": {
    id: "coc-nhoi",
    title: "Cọc khoan nhồi",
    svgKey: "SvgCocNhoi",
    purpose: "Tính toán thể tích bê tông cọc khoan nhồi, dung dịch bentonite giữ thành vách, chiều dài ống vách thi công, khối lượng đất đào vận chuyển đổ thải, đập đầu cọc, chiều dài ống siêu âm D60/D110 và ống nối.",
    warningCodes: ["LOI-10"]
  },
  "Cọc vuông Bê tông": {
    id: "coc-vuong",
    title: "Cọc vuông bê tông cốt thép",
    svgKey: "SvgCocVuong",
    purpose: "Tính toán thể tích bê tông cọc đúc sẵn (đoạn mũi có vát và đoạn thân), diện tích ván khuôn 3 mặt bãi đúc, khối lượng đập đầu cọc liên kết đài và cốt thép ước tính.",
    warningCodes: ["LOI-11"]
  },
  "Cọc Barret": {
    id: "coc-barret",
    title: "Cọc Barrette",
    svgKey: "SvgCocNhoi",
    purpose: "Tính toán thể tích bê tông cọc barrette tiết diện chữ nhật, bentonite giữ thành vách, thể tích đào đất, ván khuôn đầu cọc và đập đầu cọc.",
    warningCodes: []
  },
  "Móng": {
    id: "mong",
    title: "Móng (Đài móng, Cổ móng, Đào đắp)",
    svgKey: "SvgMong",
    purpose: "Tính toán bê tông đài móng (chữ nhật, chóp cụt, quả trám, bầu dục), bê tông lót, ván khuôn đài và cổ móng, khối lượng đào đắp đất hố móng, định mức thép sơ bộ theo hàm lượng.",
    warningCodes: ["LOI-04", "LOI-05", "LOI-12"]
  },
  "Dầm móng": {
    id: "dam-mong",
    title: "Dầm móng (Giằng móng)",
    svgKey: "SvgDamMong",
    purpose: "Tính toán bê tông dầm móng (trừ phần giao đài móng / cổ móng), bê tông lót dầm, ván khuôn thành dầm, ván khuôn lót và khối lượng đào đất rãnh dầm móng.",
    warningCodes: ["LOI-03"]
  },
  "Nền": {
    id: "nen",
    title: "Nền nhà xưởng & Tầng trệt",
    svgKey: "SvgSan",
    purpose: "Tính toán diện tích và thể tích bê tông nền nhà, lớp đá cấp phối base/subbase, bê tông lót nền, ván khuôn cạnh nền và cốt thép lưới hàn nền.",
    warningCodes: []
  },
  "Cột": {
    id: "cot",
    title: "Cột chịu lực (Vuông & Chữ nhật, Cột tròn)",
    svgKey: "SvgCot",
    purpose: "Tính toán thể tích bê tông cột (chiều cao tầng trừ chiều dày sàn/dầm), diện tích ván khuôn 4 mặt cột (hoặc ván khuôn tròn pi*G*H), vai cột và thép ước tính.",
    warningCodes: []
  },
  "Vách BTCT": {
    id: "vach-btct",
    title: "Vách bê tông cốt thép & Lõi thang máy",
    svgKey: "SvgVachBTCT",
    purpose: "Tính toán thể tích bê tông vách chịu lực, vách tầng hầm, lõi thang máy, diện tích ván khuôn thành vách theo hình dạng (I, L, U) và trừ các ô mở cửa vách.",
    warningCodes: []
  },
  "Sàn": {
    id: "san",
    title: "Sàn bê tông cốt thép",
    svgKey: "SvgSan",
    purpose: "Tính toán thể tích bê tông sàn toàn khối theo diện tích trùm phủ, diện tích ván khuôn đáy sàn, trừ ô thông tầng (dòng âm) và định mức thép lưới sàn theo bước cốt thép @.",
    warningCodes: ["LOI-08"]
  },
  "Dầm tầng": {
    id: "dam-tang",
    title: "Dầm tầng (Dầm chính & Dầm phụ)",
    svgKey: "SvgDamTang",
    purpose: "Tính toán bê tông sườn dầm (chiều cao dầm trừ chiều dày sàn), ván khuôn thành dầm 2 bên, ván khuôn đáy dầm (trừ phần cột) và trừ giao cắt dầm phụ.",
    warningCodes: []
  },
  "Cầu thang": {
    id: "cau-thang",
    title: "Cầu thang bộ",
    svgKey: "SvgCauThang",
    purpose: "Tính toán thể tích bê tông bản thang nghiêng, bản chiếu nghỉ, dầm cốn thang, bậc thang xây/đổ và ván khuôn đáy/thành bản thang.",
    warningCodes: []
  },
  "Hoàn thiện Sàn-Trần": {
    id: "hoan-thien",
    title: "Hoàn thiện Sàn - Trần - Tường",
    svgKey: "SvgSan",
    purpose: "Tính toán diện tích lát sàn theo từng mã F1–F9, trần thạch cao/sơn C1–C6, ốp tường gạch theo mã W1–W3, len chân tường SK1–SK6 và chống thấm khu vệ sinh.",
    warningCodes: []
  },
  "Tường xây": {
    id: "tuong-xay",
    title: "Tường xây gạch & Trát hoàn thiện",
    svgKey: "SvgTuongXay",
    purpose: "Tính toán khối xây tường ngoài (EW) và tường trong (IW) theo bề dày 110, 220, 330mm; trừ diện tích cửa đi, cửa sổ, trụ giằng bê tông và diện tích trát/ốp tường.",
    warningCodes: ["LOI-06", "LOI-07"]
  },
  "Vách ngăn": {
    id: "vach-ngan",
    title: "Vách ngăn nhẹ (Thạch cao, Cemboard)",
    svgKey: "SvgTuongXay",
    purpose: "Tính toán diện tích khung xương và tấm vách ngăn nhẹ theo từng hệ W1–W9, chiều cao đến đáy sàn hoặc trần treo, trừ diện tích cửa đi.",
    warningCodes: []
  },
  "Hạ tầng- Đường": {
    id: "ha-tang-duong",
    title: "Hạ tầng - Đường giao thông nội bộ",
    svgKey: "SvgHaTangDuong",
    purpose: "Tính toán diện tích mặt đường bê tông/nhựa R1–R3, thể tích bê tông mặt đường, lớp móng đá dăm cấp phối loại 1 và loại 2, lớp cát đệm nền đường (hệ số 1.35) và đào khuôn đường.",
    warningCodes: ["LOI-10"]
  },
  "Hạ tầng- Cống tròn": {
    id: "ha-tang-cong",
    title: "Hạ tầng - Cống tròn thoát nước",
    svgKey: "SvgMuongCong",
    purpose: "Tính toán chiều dài lắp đặt cống tròn bê tông đúc sẵn theo từng đường kính (D300 đến D1500), thể tích đào rãnh cống, bê tông đế cống, cát đệm lưng cống và đắp đất hoàn trả.",
    warningCodes: []
  },
  "Mương": {
    id: "muong",
    title: "Mương thoát nước bê tông",
    svgKey: "SvgMuongCong",
    purpose: "Tính toán bê tông bản đáy mương, bê tông thành mương, tấm đan bê tông đậy mương, bê tông lót, ván khuôn mương, đào đất và đắp đất rãnh mương.",
    warningCodes: []
  },
  "Hố ga (Kiểu 1)": {
    id: "ho-ga-1",
    title: "Hố ga bê tông kiểu 1 (Hố ga tiêu chuẩn)",
    svgKey: "SvgHoGaBe",
    purpose: "Tính toán bê tông đáy, thành và nắp đan hố ga thu nước mưa/nước thải kiểu 1; ván khuôn trong ngoài, bê tông lót hố ga, đào đất và đắp đất hố ga.",
    warningCodes: []
  },
  "Hố ga (Kiểu 2)": {
    id: "ho-ga-2",
    title: "Hố ga bê tông kiểu 2 (Hố ga lắng cặn)",
    svgKey: "SvgHoGaBe",
    purpose: "Tính toán bê tông và ván khuôn hố ga thu kết hợp hố lắng cặn sâu kiểu 2; cổ thu nước và tấm gang/bê tông đậy miệng hố ga.",
    warningCodes: []
  },
  "Bể nước PCCC": {
    id: "be-pccc",
    title: "Bể nước PCCC ngầm",
    svgKey: "SvgHoGaBe",
    purpose: "Tính toán thể tích bê tông bản đáy, tường bể, cột đỡ và bản nắp bể nước ngầm PCCC; bê tông lót móng bể, ván khuôn trong ngoài và khối lượng đào đất hố móng bể.",
    warningCodes: []
  },
  "Bể XLNT": {
    id: "be-xlnt",
    title: "Bể xử lý nước thải (XLNT)",
    svgKey: "SvgHoGaBe",
    purpose: "Tính toán thể tích bê tông đáy bể, các vách ngăn kỹ thuật (ngăn lắng, ngăn kỵ khí, hiếu khí), ván khuôn tiếp xúc nước thải và đào đắp khối lượng lớn.",
    warningCodes: []
  },
  "Hàng rào": {
    id: "hang-rao",
    title: "Hàng rào công trình",
    svgKey: "SvgTuongXay",
    purpose: "Tính toán móng trụ rào M1/M2, bê tông cổ cột rào, giằng móng rào, tường gạch hoa/song sắt rào và ván khuôn giằng.",
    warningCodes: []
  }
};

console.log('sheetMeta1_1 configured:', Object.keys(sheetMeta1_1).length);
