// SƠ ĐỒ QUY TRÌNH 7 BƯỚC BÓC KHỐI LƯỢNG CHUẨN KỸ SƯ QS
export const workflowSteps = [
  {
    step: 1,
    id: "khoi-tao",
    title: "Khởi tạo file tính toán",
    targetHash: "#/mong",
    excelReference: "File 1.1: Sheet 'Móng' ô A2:A5 & AN12",
    summary: "Nhập thông tin dự án tại Móng!A2:A5 (Tên dự án, địa điểm, hạng mục, người lập). Thiết lập hệ số hao hụt vật liệu Móng!AN12 = 1 khi lập BOQ dự toán.",
    keyActions: [
      "Nhập thông tin dự án tại Móng!A2:A5 để liên kết sang toàn bộ các sheet khác.",
      "Cực kỳ quan trọng: Đặt Móng!AN12 = 1 để tính đúng khối lượng hình học thiết kế cho BOQ dự toán (chỉ đặt > 1 khi lập kế hoạch mua sắm vật tư công trường).",
      "Kiểm tra đơn vị bản vẽ CAD (lệnh UNITS) và tỷ lệ khung nhìn trước khi trích xuất số liệu."
    ],
    chips: ["Móng!A2:A5", "Hao hụt AN12=1", "Khối lượng hình học", "Thiết lập ban đầu"]
  },
  {
    step: 2,
    id: "boc-phan-a",
    title: "Bóc Bê tông & Ván khuôn (File 1.1)",
    targetHash: "#/san-lap",
    excelReference: "File 1.1: 23 sheet từ San lấp đến Hạ tầng",
    summary: "Bóc tuần tự theo đúng trình tự thi công từ dưới lên trên: San lấp → Cọc → Móng → Dầm móng → Nền → Cột/Vách → Dầm → Sàn → Thang → Tường → Vách ngăn → Hoàn thiện → Hạ tầng.",
    keyActions: [
      "Tuân thủ nguyên tắc QĐ 1041/QĐ-BXD: 'Mỗi khối lượng chỉ xác định một lần'.",
      "Sàn tính đủ diện tích: Dầm chỉ tính (H dầm - h sàn) và trừ bề rộng cột; Cột tính (H tầng - h sàn).",
      "Phần trừ giao cắt, lỗ mở, cửa đi/cửa sổ nhập bằng dòng âm (số lượng âm).",
      "Lưu ý khối xây tường: File chỉ tự động tính cho tường dày 110, 220, 330mm."
    ],
    chips: ["San lấp", "Cọc", "Móng", "Dầm móng", "Nền", "Cột", "Dầm", "Sàn", "Thang", "Tường", "Hoàn thiện", "Hạ tầng"]
  },
  {
    step: 3,
    id: "boc-thep",
    title: "Bóc Thép chi tiết & KCT (File 1.2)",
    targetHash: "#/thep-tong-quan",
    excelReference: "File 1.2: 20 sheet thống kê cốt thép",
    summary: "Trích xuất từng thanh thép từ bảng thống kê bản vẽ sang các đoạn kích thước D–H (mm). Tính toán số mối nối cây 11,7m và chiều dài nối chồng.",
    keyActions: [
      "Mỗi thanh thép chiếm khối 3 dòng trong file: Kích thước uốn mỏ, dòng số liệu, và đoạn kéo dài.",
      "Xác định số mối nối: Công thức INT(SUM(D:H)/11700).",
      "Chiều dài nối: Mặc định trong file là 40Ø, cần kiểm tra chỉ dẫn kỹ thuật hoặc TCVN 5574:2018.",
      "Đai dầm/cột: Tính chu vi trừ 2 bên lớp bảo vệ + móc neo 135° (≥ 10Ø cho vùng kháng chấn theo TCVN 9386:2012).",
      "Kết cấu thép tiền chế: Bóc thép bản (PL), thép hình (H, I, C), bu lông neo và diện tích sơn."
    ],
    chips: ["Kích thước D-H", "Cây 11.7m", "Mối nối 40Ø", "Đai 135°", "Kết cấu thép PL"]
  },
  {
    step: 4,
    id: "tong-hop",
    title: "Tổng hợp khối lượng",
    targetHash: "#/thep-tong-hop",
    excelReference: "File 1.1: Cột tổng & File 1.2: Sheet 'Tổng hợp', 'Chi tiết'",
    summary: "Tổng hợp toàn bộ khối lượng bê tông (theo mác), ván khuôn (theo loại gỗ/thép), đào đắp (theo cấp đất) và phân loại cốt thép theo 3 nhóm đường kính tiêu chuẩn.",
    keyActions: [
      "Phân nhóm cốt thép theo định mức: Ø ≤ 10mm, Ø ≤ 18mm, và Ø > 18mm.",
      "Quy đổi khối lượng thép từ mét dài sang tấn (nhân trọng lượng danh nghĩa TCVN 1651-2:2018).",
      "Đặc biệt chú ý: Sheet 'Chi tiết' ở file mẫu gốc bị sót 9 sheet (Sàn, Barrette, Vách...). Cần bổ sung đủ SUMIF để không mất khối lượng thép!"
    ],
    chips: ["Phân nhóm Ø<=10, <=18, >18", "Quy đổi tấn", "Kiểm tra sót sheet", "SUMIF"]
  },
  {
    step: 5,
    id: "kiem-tra-cheo",
    title: "Kiểm tra chéo & Rà soát rủi ro",
    targetHash: "#/kiem-tra-cheo",
    excelReference: "Đối chiếu File 1.1 vs File 1.2 & Checklist 18 lỗi",
    summary: "Thực hiện kiểm tra chéo các chỉ số kỹ thuật: hàm lượng thép thực tế (kg/m³) so với hàm lượng ước tính, rà soát các ô có kích thước nhưng kết quả bằng 0.",
    keyActions: [
      "Chia tổng kg thép (File 1.2) cho m³ bê tông (File 1.1) để đối chiếu hàm lượng (Móng ~90, Dầm ~160, Cột ~220, Sàn ~110 kg/m³).",
      "Lọc kiểm tra cột khối lượng = 0 trên toàn bộ sheet Tường xây và Hoàn thiện.",
      "So sánh diện tích lát sàn hoàn thiện với diện tích sàn kết cấu (sai lệch phải tương ứng diện tích chiếm chỗ của tường và cột).",
      "Soát qua checklist 18 lỗi đã biết trong File 1.1 & 1.2."
    ],
    chips: ["Hàm lượng kg/m³", "Soát lỗi = 0", "Sàn KT vs Hoàn thiện", "Checklist 18 lỗi"]
  },
  {
    step: 6,
    id: "xuat-boq",
    title: "Lập & Xuất bảng BOQ dự toán",
    targetHash: "#/can-cu",
    excelReference: "Biểu mẫu BOQ chuẩn theo Nghị định & Thông tư BXD",
    summary: "Xuất bảng khối lượng theo mã hiệu công việc chuẩn mực, phân định rõ phạm vi công việc, đơn vị tính và quy cách kỹ thuật.",
    keyActions: [
      "Ghi rõ nguồn trích xuất số liệu cho từng dòng: Mã bản vẽ, vị trí trục (theo QĐ 1041/QĐ-BXD).",
      "Phân loại công tác bê tông theo mác vữa và biện pháp đổ (bơm cần, bơm tĩnh, thủ công).",
      "Phân loại đào đất theo chiều sâu (< 1m, < 3m, < 6m) và độ ẩm đất."
    ],
    chips: ["Mã hiệu định mức", "QĐ 1041/QĐ-BXD", "TT 38/2026/TT-BXD", "Biểu mẫu BOQ"]
  },
  {
    step: 7,
    id: "luu-tru",
    title: "Lưu kết quả sang định dạng .xlsx",
    targetHash: "#/kiem-tra-cheo",
    excelReference: "Save As .xlsx sạch không macro",
    summary: "Lưu kết quả dự toán đã hoàn thành sang định dạng .xlsx tiêu chuẩn, ngắt các liên kết ngoài và loại bỏ rủi ro khóa file.",
    keyActions: [
      "File mẫu gốc có mã VBA giới hạn ngày mở file (30/3/2027). Khi bóc xong dự án, cần 'Save As' sang file .xlsx sạch (Excel Workbook).",
      "Dùng Name Manager xóa các Defined Names rác và dùng Data > Edit Links để Break Link ngoài.",
      "Lưu trữ hồ sơ dự toán kèm biên bản nghiệm thu khối lượng và file CAD làm việc."
    ],
    chips: ["Save As .xlsx", "Xóa VBA khóa file", "Break Link ngoài", "Lưu trữ hồ sơ"]
  }
];
