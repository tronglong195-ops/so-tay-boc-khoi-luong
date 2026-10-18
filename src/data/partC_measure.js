// PHẦN C: HƯỚNG DẪN KỸ THUẬT LẤY SỐ LIỆU TỪ AUTOCAD, PDF & CHỈ DẪN KỸ THUẬT
// Nguồn trích xuất chuẩn mực từ NGUON_THONG_SO.md

export const generalMeasurementRules = [
  {
    task: "Kiểm tra đơn vị bản vẽ",
    method: "AutoCAD: Gõ lệnh UNITS; đo thử khoảng cách giữa 2 trục đã ghi kích thước bằng lệnh DIST (DI).",
    reason: "Bản vẽ thiết kế thường vẽ theo đơn vị mm, trong khi file Excel 1.1 nhập theo đơn vị mét (m). Riêng kích thước thanh thép ở file 1.2 nhập theo milimét (mm)."
  },
  {
    task: "Kiểm tra tỷ lệ không gian đo",
    method: "Luôn đo trực tiếp trong không gian Model (Model Space), không đo trong không gian Layout/Viewport trừ khi đã kiểm tra chắc chắn Viewport Scale là 1:1.",
    reason: "Đo trong Viewport dễ bị sai lệch kích thước theo tỷ lệ thu phóng của khung nhìn."
  },
  {
    task: "Thứ tự ưu tiên số liệu",
    method: "Kích thước ghi trên bản vẽ (Dimension text) > Kích thước đo hình học (Measure) > Kích thước suy luận.",
    reason: "Kích thước ghi chú trên bản vẽ là căn cứ pháp lý cao nhất khi nghiệm thu và giải trình khối lượng."
  },
  {
    task: "Ghi rõ cơ sở nguồn số liệu",
    method: "Luôn điền cột Ghi chú trong file tính: Ví dụ 'KC-03, trục 2-3/A-B'.",
    reason: "Quyết định 1041/QĐ-BXD bắt buộc phải thuyết minh rõ nguồn gốc và tọa độ cấu kiện để phục vụ thẩm tra, kiểm toán."
  },
  {
    task: "Mỗi khối lượng chỉ tính một lần",
    method: "Xử lý triệt để giao cắt cột - dầm - sàn theo đúng quy ước: Sàn tính trùm toàn bộ diện tích; Dầm tính trừ phần dầm giao sàn và dầm giao cột; Cột tính trừ chiều dày sàn.",
    reason: "Tránh tính trùng lặp làm đội khối lượng hoặc thiếu sót khối lượng."
  }
];

export const autocadCommands = [
  {
    command: "DIST (DI)",
    name: "Đo khoảng cách thẳng",
    usage: "Gõ DI → Enter → Bắt điểm đầu (Endpoint/Intersection) → Bắt điểm cuối.",
    applicableTo: "Đo chiều dài dầm, đoạn tường, chiều sâu hố đào, chiều cao tầng.",
    proTip: "Bật chế độ bắt điểm OSNAP (F3) chính xác để tránh đo chéo hoặc bắt lệch điểm."
  },
  {
    command: "MEASUREGEOM (MEA)",
    name: "Đo đa năng hình học",
    usage: "Gõ MEA → Chọn Distance, Radius, Angle, hoặc Area.",
    applicableTo: "Kiểm tra nhanh kích thước hình học, bán kính cong cống tròn hoặc góc vát móng.",
    proTip: "Lệnh hiển thị kích thước động trực tiếp trên màn hình mà không cần mở bảng F2."
  },
  {
    command: "BOUNDARY (BO)",
    name: "Tạo Polyline kín từ vùng chọn",
    usage: "Gõ BO → Enter → Pick Points → Bấm vào điểm giữa không gian phòng → Enter.",
    applicableTo: "Tạo đường bao kín quanh phòng phục vụ bóc diện tích và chu vi hoàn thiện (Cột J, K).",
    proTip: "Đảm bảo vùng đo hiển thị trọn vẹn trên màn hình và các đối tượng tường bao quanh phải khép kín."
  },
  {
    command: "LIST (LI) / PROPERTIES (Ctrl+1)",
    name: "Xem diện tích & Chu vi đối tượng",
    usage: "Chọn đường Polyline kín vừa tạo → Gõ LI hoặc bấm Ctrl+1.",
    applicableTo: "Lấy chính xác Area (diện tích sàn/nền/đường) và Length (chu vi phòng để tính ốp tường/len chân tường).",
    proTip: "Trên bảng Properties (Ctrl+1), diện tích thể hiện ở mục Area, chu vi ở mục Length."
  },
  {
    command: "CUMULATIVE AREA (Hatch)",
    name: "Tính tổng diện tích nhiều vùng Hatch",
    usage: "Chọn đồng thời nhiều mảng Hatch cùng loại vật liệu → Bấm Ctrl+1 → Xem giá trị Cumulative Area.",
    applicableTo: "Bóc nhanh diện tích sàn các khu vực giống nhau, diện tích hè đường, sân bãi.",
    proTip: "Chỉ chọn các hatch có cùng tính chất vật liệu để không bị lẫn khối lượng."
  },
  {
    command: "QSELECT (Quick Select)",
    name: "Lọc nhanh đối tượng theo thuộc tính",
    usage: "Gõ QSELECT → Chọn loại đối tượng (Line, Polyline, Block, Text) → Chọn Layer hoặc Color → OK.",
    applicableTo: "Lọc toàn bộ tường dày 110 hoặc 220 trên layer riêng; đếm số lượng móng, cọc, cửa đi, cửa sổ.",
    proTip: "Kết hợp với lệnh COUNT (AutoCAD 2022+) để đếm block cấu kiện siêu tốc."
  },
  {
    command: "DATAEXTRACTION",
    name: "Trích xuất số liệu tự động ra Excel",
    usage: "Gõ DATAEXTRACTION → Tạo file trích xuất → Chọn vùng đối tượng → Chọn thuộc tính Length, Area, Count → Xuất ra file .xls.",
    applicableTo: "Bóc hàng trăm đoạn tường xây, đường ống thoát nước, cống tròn, mương rãnh mà không cần cộng tay.",
    proTip: "Tiết kiệm 80% thời gian bóc tách chiều dài tuyến hạ tầng và hệ thống cơ điện ngầm."
  },
  {
    command: "PDFIMPORT",
    name: "Chuyển bản vẽ PDF vector thành đối tượng CAD",
    usage: "Gõ PDFIMPORT → Chọn file PDF vector → Chọn trang cần nhập → Đặt tỷ lệ.",
    applicableTo: "Xử lý hồ sơ bản vẽ chỉ có file PDF định dạng vector (tạo từ AutoCAD, Revit).",
    proTip: "Nếu PDF là bản scan dạng ảnh (raster) thì không chuyển thành CAD được, bắt buộc dùng thước đo PDF."
  }
];

export const pdfMeasurementGuide = [
  {
    step: "1. Chọn công cụ đo (Measure Tool)",
    detail: "Mở file PDF bằng Adobe Acrobat Pro hoặc Foxit PDF Reader. Chọn công cụ 'Measuring Tool' (phím tắt hoặc menu Tools > Measure)."
  },
  {
    step: "2. Hiệu chuẩn tỷ lệ thước đo (Calibrate Scale)",
    detail: "Bắt buộc phải hiệu chuẩn trước khi đo: Bấm nút 'Calibrate' → Kéo thước đo giữa 2 đường trục hoặc 2 đầu một đoạn dầm/tường ĐÃ CÓ KÍCH THƯỚC GHI RÕ TRÊN BẢN VẼ → Nhập kích thước thật (ví dụ 6000mm hoặc 6m)."
  },
  {
    step: "3. Đo kiểm tra chéo (Verification)",
    detail: "Sau khi hiệu chuẩn, đo thử lại một đoạn kích thước khác trên cả 2 phương ngang và phương dọc. Nếu sai lệch < 1% thì mới tiến hành đo các cấu kiện không có kích thước ghi."
  },
  {
    step: "4. Lưu ý bản vẽ scan nghiêng/méo",
    detail: "Bản vẽ scan raster thường bị biến dạng co giãn phi tuyến tính. Khi bắt buộc phải đo trên bản scan, cần hiệu chuẩn riêng cho phương ngang (X) và phương dọc (Y), đồng thời ghi chú 'Đo trên PDF scan' vào cột ghi chú."
  }
];

export const specChecklist = [
  {
    item: "Cấp độ bền & Mác bê tông từng cấu kiện",
    keywords: "cấp độ bền, B20, B25, B30, mác bê tông, M250, M300, M350",
    excelLocation: "Toàn bộ các sheet bê tông (phân loại dòng dự toán theo mác)",
    instruction: "Dự toán bắt buộc phân tách mã hiệu theo cấp độ bền bê tông (ví dụ B25 và B30 có đơn giá khác nhau)."
  },
  {
    item: "Bê tông lót: Chiều dày & Mác vữa",
    keywords: "bê tông lót, lót móng, M100, đá 4x6, đá 1x2, chiều dày lót",
    excelLocation: "Móng (Cột Y), Dầm móng (Cột G), Bể (Cột J), Mương (Cột H)",
    instruction: "Xác định chiều dày lót (thường 50mm hoặc 100mm) và kích thước mở rộng mỗi bên Z = 2*Y."
  },
  {
    item: "Chiều dày lớp bê tông bảo vệ cốt thép",
    keywords: "lớp bảo vệ, chiều dày bảo vệ, cover, cmin",
    excelLocation: "File 1.2: Kích thước uốn đai D, E, F, G, H",
    instruction: "Xác định khoảng lùi cốt đai so với mép ngoài bê tông (thường 25mm với dầm, 30mm với cột, 50mm với móng tiếp xúc đất)."
  },
  {
    item: "Chiều dài neo, nối chồng cốt thép",
    keywords: "chiều dài neo, nối buộc, chồng nối, lap length, lan, l0",
    excelLocation: "File 1.2: Cột J (Chiều dài nối chồng) và các đoạn mỏ neo D, H",
    instruction: "File mẫu cố định 40Ø. Bắt buộc kiểm tra chỉ dẫn kỹ thuật xem yêu cầu 30Ø, 35Ø hay 45Ø tùy vùng chịu kéo/nén."
  },
  {
    item: "Quy cách uốn móc đai",
    keywords: "móc đai, 135 độ, 90 độ, uốn móc, kháng chấn",
    excelLocation: "File 1.2: Các đoạn móc D, H của thép đai",
    instruction: "File mẫu tính móc 7Ø. Nếu công trình có thiết kế kháng chấn (TCVN 9386:2012) bắt buộc uốn móc 135° với đoạn thẳng ≥ 10Ø (tối thiểu 70mm)."
  },
  {
    item: "Địa chất & Độ dốc mái đào taluy",
    keywords: "địa chất, loại đất, cát pha, đất sét, góc ma sát trong, mái dốc hố đào, taluy",
    excelLocation: "Móng (Cột BM, BN, hệ số m), Dầm móng (Cột W, X)",
    instruction: "Tra Bảng 11 TCVN 4447:2012 theo loại đất thực tế trong Báo cáo khảo sát địa chất; không dùng mặc định 0.25/0.67/0.85."
  },
  {
    item: "Độ chặt đầm nén đất đắp K",
    keywords: "độ chặt K, K95, K98, đầm chặt, đất đắp hoàn trả",
    excelLocation: "Móng (Cột BS), Nền (Cột T), San lấp (Cột R)",
    instruction: "Xác định độ chặt K để chọn đúng mã hiệu định mức đắp đất (K0.85, K0.90, K0.95 có mức hao phí máy đầm khác nhau)."
  },
  {
    item: "Chiều dày trát & Lớp vữa hoàn thiện",
    keywords: "chiều dày trát, trát trong, trát ngoài, vữa mác 75, dày 15mm, dày 20mm",
    excelLocation: "Tường xây (Cột I, J), Hoàn thiện",
    instruction: "Khối lượng trát tính theo m² bề mặt thực tế, nhưng mác vữa và chiều dày quyết định đơn giá dự toán."
  },
  {
    item: "Quy cách gạch xây & Chiều dày tường",
    keywords: "gạch tuynel, gạch đặc, gạch ống 2 lỗ, gạch không nung, AAC, chiều dày tường",
    excelLocation: "Tường xây (Cột G)",
    instruction: "File chỉ tự động cộng cho tường dày 110, 220, 330mm. Nếu dùng gạch không nung dày 100, 150, 200mm phải lập thêm cột tính riêng."
  },
  {
    item: "Phạm vi & Chiều cao bo chân tường chống thấm",
    keywords: "chống thấm, màng bitum, sika, bo chân tường, cao 200mm, cao 300mm",
    excelLocation: "Hoàn thiện Sàn - Trần (Cột AM, AN, AO, AP)",
    instruction: "Kiểm tra mặt cắt chi tiết khu vệ sinh, ban công, logia, mái để lấy chiều cao vén chân tường chống thấm."
  }
];

export const parameterSourcesMapping = [
  { sheet: "San lấp MB", param: "G (Diện tích), H (Cốt nền), I (Cốt tự nhiên), J (Lớp hữu cơ)", source: "Tổng mặt bằng san nền, bình đồ địa hình hiện trạng, báo cáo khảo sát địa chất", cadTool: "BOUNDARY, LIST, ID" },
  { sheet: "Cọc nhồi / Barret / Cọc vuông", param: "Chiều dài L, đường kính D, đập đầu cọc, ống vách, ống siêu âm", source: "Mặt bằng định vị cọc, bản vẽ chi tiết cọc, chỉ dẫn kỹ thuật cọc", cadTool: "COUNT, QSELECT, DIST" },
  { sheet: "Móng", param: "Kích thước đài F, G, H; cổ móng AA, AB; cao độ AC, BO, BP; mở rộng BM", source: "Mặt bằng móng, chi tiết đài móng, mặt cắt móng và cao độ thiết kế", cadTool: "QSELECT (đếm số móng), DIST" },
  { sheet: "Dầm móng", param: "Chiều dài D, tiết diện E, F; đoạn trừ móng J; mở rộng đào W", source: "Mặt bằng kết cấu móng, chi tiết dầm móng", cadTool: "DIST, QSELECT theo layer" },
  { sheet: "Nền", param: "Diện tích ô E, F (hoặc G); chiều dày lớp đá base I, bê tông J", source: "Mặt bằng kiến trúc tầng 1, chi tiết cấu tạo sàn nền", cadTool: "BOUNDARY, LIST (Area)" },
  { sheet: "Cột", param: "Tiết diện D, E (hoặc G tròn); chiều cao tầng F; trừ sàn H", source: "Bảng định vị và tiết diện cột, mặt cắt đứng kiến trúc / kết cấu", cadTool: "COUNT, DIST" },
  { sheet: "Vách BTCT", param: "Chiều dài D, dày E, cao F; số cạnh ván khuôn G; trừ lỗ mở J", source: "Mặt bằng kết cấu vách thang máy, mặt đứng vách", cadTool: "DIST, LIST" },
  { sheet: "Dầm tầng", param: "Chiều dài trục D, trừ cột H; tiết diện E, F; chiều dày sàn G", source: "Mặt bằng dầm sàn từng tầng, mặt cắt dầm", cadTool: "DIST, DATAEXTRACTION" },
  { sheet: "Sàn", param: "Kích thước ô D, E; chiều dày F; lỗ mở hộp kỹ thuật (dòng âm)", source: "Mặt bằng kết cấu sàn từng tầng", cadTool: "BOUNDARY, LIST, CUMULATIVE AREA" },
  { sheet: "Cầu thang", param: "Chiều dài bản nghiêng L, bề rộng vế W, bề dày t; bậc thang", source: "Mặt bằng và mặt cắt chi tiết thang bộ", cadTool: "DIST (đo bản nghiêng trên mặt cắt)" },
  { sheet: "Tường xây", param: "Mã tường EW/IW; chiều dài F, dày G, cao H; trừ cột L, trừ dầm M; cửa D/W", source: "Mặt bằng kiến trúc (tường theo layer), mặt cắt cao tầng, bảng thống kê cửa", cadTool: "QSELECT, DATAEXTRACTION, COUNT" },
  { sheet: "Vách ngăn", param: "Loại vách W1-W9, chiều dài G, chiều cao J", source: "Mặt bằng bố trí nội thất / vách ngăn nhẹ", cadTool: "DIST, LIST" },
  { sheet: "Hoàn thiện", param: "Mã F, C, W, SK; diện tích phòng J; chu vi phòng K; cao ốp I", source: "Bảng hoàn thiện phòng (Room Finish Schedule), mặt bằng lát sàn, trần", cadTool: "BOUNDARY → LIST (Area, Length)" },
  { sheet: "Hạ tầng - Đường", param: "Diện tích theo kết cấu R1, R2, R3; chiều dày lớp; cao độ hiện trạng", source: "Mặt bằng giao thông nội bộ, mặt cắt ngang kết cấu áo đường", cadTool: "Hatch Area, BOUNDARY" },
  { sheet: "Cống tròn / Mương", param: "Chiều dài theo đoạn, đường kính, loại tải trọng cống, cao độ đáy", source: "Mặt bằng thoát nước mưa / nước thải, trắc dọc cống", cadTool: "DIST, DATAEXTRACTION" },
  { sheet: "Hố ga / Bể nước", param: "Kích thước trong, chiều dày bản đáy/thành/nắp, chiều sâu hố", source: "Bản vẽ chi tiết hố ga, bể nước ngầm, bể XLNT", cadTool: "DIST, LIST" }
];
