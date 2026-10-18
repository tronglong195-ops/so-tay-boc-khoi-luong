// PHẦN D: BẢNG KIỂM TRA CHÉO & 18 LỖI/RỦI RO ĐÃ BIẾT
// Trích xuất đầy đủ từ LOI_DA_BIET.md trong tài liệu nguồn gốc

export const knownIssuesChecklist = [
  {
    id: "LOI-01",
    level: "Nghiêm trọng",
    fileSheet: "1.2 / Chi tiết, Tổng hợp",
    targetSlug: "thep-tong-hop",
    title: "Chỉ liên kết 8/17 sheet chi tiết vào bảng tổng hợp thép",
    issue: "Sheet 'Chi tiết' và 'Tổng hợp' của File 1.2 chỉ liên kết 8/17 sheet (Cọc vuông, Móng, Dầm móng, Cột vuông, Cầu thang, Dầm, Hố ga, Bể nước). THIẾU HOÀN TOÀN: Thép sàn 72.80 tấn; Barrette 18.66 tấn; Vách 16.55 tấn; Nối đầu cọc 15.55 tấn; Hàng rào 3.36 tấn; Trụ-giằng-LT 2.50 tấn; Cọc nhồi 1.92 tấn; Cột tròn 1.90 tấn; Bể phốt 0.27 tấn.",
    solution: "Trong dữ liệu dự án mẫu: Bảng tổng hợp chỉ báo 46.79 tấn trong khi thực bóc đạt ~180.3 tấn (thiếu hơn 133 tấn thép!). Xử lý: Thêm các khối SUMIF cho các sheet còn thiếu vào sheet Chi tiết, hoặc tự cộng bảng tổng hợp cuối mỗi sheet vào BOQ.",
    defaultChecked: false
  },
  {
    id: "LOI-02",
    level: "Nghiêm trọng",
    fileSheet: "1.1 / VBA Macro",
    targetSlug: "san-lap",
    title: "Mã VBA Workbook_Open tự động đóng file sau 30/3/2027",
    issue: "File 1.1 có đoạn mã VBA trong sự kiện Workbook_Open kiểm tra ngày hệ thống; nếu sau ngày 30/3/2027 file sẽ tự động lưu và đóng lại (cơ chế khóa bản quyền của tác giả template).",
    solution: "Sau khi bóc xong từng công trình, luôn 'Save As' sang định dạng .xlsx thông thường (Excel Workbook không macro). Với template gốc thì cần gia hạn hoặc liên hệ tác giả.",
    defaultChecked: false
  },
  {
    id: "LOI-03",
    level: "Cao",
    fileSheet: "1.1 / Dầm móng cột X",
    targetSlug: "dam-mong",
    title: "Công thức mở rộng đỉnh hố đào dầm móng so sánh sai ô điều kiện",
    issue: "Tại cột X (Mở rộng đỉnh hố đào dầm móng), công thức so sánh '$AC$4<=1.5' (ô $AC$4 là giá trị cố định 0.25) thay vì so sánh với chiều sâu đào AA → dẫn tới hệ số mái dốc luôn bị gán m = 0.25 cho mọi hố đào sâu dưới 5m.",
    solution: "Sửa công thức cột X thành: IF(AA10<=1.5, 0.25, IF(AA10<=3, 0.67, 0.85)) và kiểm tra lại hệ số mái dốc theo địa chất.",
    defaultChecked: false
  },
  {
    id: "LOI-04",
    level: "Cao",
    fileSheet: "1.1 / Móng cột BN",
    targetSlug: "mong",
    title: "Hàm IF chọn hệ số mái dốc m sai đoạn 3–5m",
    issue: "Cột BN (Mở rộng đỉnh hố móng): Lệnh IF chọn m bị sai ở đoạn đào sâu từ 3m đến 5m (lấy 0.67, trong khi đúng theo TCVN 4447:2012 Bảng 11 phải là 0.85). Bộ 0.25/0.67/0.85 này chỉ đúng cho loại đất cát pha. Sâu trên 5m bảng không áp dụng.",
    solution: "Sửa lại công thức IF(BQ12<=1.5, 0.25, IF(BQ12<=3, 0.67, 0.85)); đồng thời thay đổi hệ số theo đúng loại đất trong Báo cáo địa chất công trình. Nếu sâu > 5m phải tính toán ổn định mái dốc riêng.",
    defaultChecked: false
  },
  {
    id: "LOI-05",
    level: "Trung bình",
    fileSheet: "1.1 / Móng cột BR",
    targetSlug: "mong",
    title: "Tính thể tích đào theo trung bình hai đáy thay vì công thức lăng thể",
    issue: "Cột BR (Khối lượng đào đất) tính theo công thức trung bình diện tích đáy trên và đáy dưới: ((A1+A2)/2)*H. Công thức này cho kết quả lớn hơn công thức lăng thể Simpson H/6*(A1 + 4Am + A2) khoảng 5% (trong dữ liệu mẫu: 25.656 m³ so với 24.385 m³). Dẫn đến thể tích đắp đất BS cũng bị lệch theo.",
    solution: "Khi lập hồ sơ thanh quyết toán hoặc làm việc với Tư vấn giám sát, cần thống nhất trước phương pháp tính; nếu yêu cầu chuẩn xác hình học thì chuyển sang công thức lăng thể Simpson.",
    defaultChecked: false
  },
  {
    id: "LOI-06",
    level: "Cao",
    fileSheet: "1.1 / Tường xây",
    targetSlug: "tuong-xay",
    title: "Khối xây tường chỉ nhận đúng bề dày 110, 220, 330mm",
    issue: "Các cột khối xây N, O, P, Q, R, S chỉ cộng dồn khi cột G (chiều dày tường) đúng bằng 0.33, 0.22 hoặc 0.11. Nếu dự án dùng gạch không nung, gạch bê tông nhẹ AAC có chiều dày 100, 150, 200mm thì công thức ra kết quả bằng 0 mà không có bất kỳ cảnh báo nào!",
    solution: "Thêm cột tính riêng cho tường có chiều dày phi tiêu chuẩn (100, 150, 200mm), hoặc luôn kiểm tra cột tổng khối lượng xem có dòng nào có kích thước nhưng kết quả = 0 hay không.",
    defaultChecked: false
  },
  {
    id: "LOI-07",
    level: "Trung bình",
    fileSheet: "1.1 / Tường xây cột K",
    targetSlug: "tuong-xay",
    title: "Công thức ốp tường các tầng trên thiếu mã IW5 và tham chiếu sai tầng",
    issue: "Ở tầng 2-3 và tầng 4-5-6: Có tới 18/30 công thức tính diện tích ốp tường bị thiếu mã IW5; đồng thời tất cả các tầng đều tham chiếu cố định về ô '$K$9' (là chiều cao ốp của tầng 1).",
    solution: "Bổ sung điều kiện mã IW5 vào công thức và sửa tham chiếu chiều cao ốp về đúng ô của từng tầng tương ứng (K63 cho tầng 2-3, K111 cho tầng 4-5-6).",
    defaultChecked: false
  },
  {
    id: "LOI-08",
    level: "Thấp",
    fileSheet: "1.1 / Sàn",
    targetSlug: "san",
    title: "Dòng mẫu ghi nhãn H=250mm nhưng nhập chiều dày F = 0.15m",
    issue: "Tại dòng dữ liệu mẫu của sheet Sàn, cột tên ghi 'Sàn tầng 2 H=250mm' nhưng cột chiều dày F lại nhập 0.15m (150mm).",
    solution: "Luôn kiểm tra đối chiếu tên nhãn cấu kiện với số liệu kích thước thực tế nhập trong ô tính toán.",
    defaultChecked: false
  },
  {
    id: "LOI-09",
    level: "Trung bình",
    fileSheet: "1.1 / San lấp",
    targetSlug: "san-lap",
    title: "Diện tích san lấp bị gõ cứng số liệu vào công thức",
    issue: "File mẫu có các diện tích bị gõ cứng trực tiếp vào công thức (ví dụ: '=73135.9478-...', '=20445-4211.608-...'); đồng thời khu vực Bể XLNT và Nhà bơm bị để trống số lượng nên không được cộng vào dòng tổng cộng.",
    solution: "Xóa toàn bộ các số gõ cứng của dự án mẫu; nhập diện tích đo bóc chính xác từ bản vẽ tổng mặt bằng CAD vào cột diện tích G.",
    defaultChecked: false
  },
  {
    id: "LOI-10",
    level: "Cao",
    fileSheet: "1.1 / Đường, Cọc nhồi, Cột Hao hụt",
    targetSlug: "ha-tang-duong",
    title: "Nhân hệ số chuyển thể tích vào khối lượng BOQ dự toán",
    issue: "File tự động nhân các hệ số: cát đệm nền đường nhân 1.35; đất đào cọc khoan nhồi nhân 4/3 (hệ số tơi xốp); và nhân cột Hao hụt AN12.",
    solution: "BOQ dự toán nhà nước bắt buộc dùng khối lượng hình học thiết kế (hệ số = 1), vì định mức dự toán của Bộ Xây dựng (TT 12/2021 hoặc TT 38/2026) đã bao gồm hao hụt thi công và độ đầm nén. Các hệ số 1.35 và 4/3 chỉ được dùng khi lập kế hoạch mua sắm và điều độ thiết bị vận chuyển ngoài công trường.",
    defaultChecked: false
  },
  {
    id: "LOI-11",
    level: "Thấp",
    fileSheet: "1.1 / Cọc vuông",
    targetSlug: "coc-vuong",
    title: "Công thức thể tích mũi cọc tính theo hình lăng trụ thay vì hình chóp",
    issue: "Mũi cọc nhọn 4 mặt tính thể tích theo công thức 1/2 * D * E * F (hình lăng trụ vát 2 mái), trong khi hình chóp cụt 4 mặt chuẩn xác phải là 1/3 * D * E * F.",
    solution: "Độ lệch thể tích rất nhỏ trên mỗi cọc (~0.003 m³), nhưng cần lưu ý khi thanh toán dự án có quy mô hàng vạn mét cọc.",
    defaultChecked: false
  },
  {
    id: "LOI-12",
    level: "Trung bình",
    fileSheet: "1.1 (Toàn bộ)",
    targetSlug: "mong",
    title: "Thép chỉ ước tính theo hàm lượng sơ bộ kg/m³",
    issue: "File 1.1 tính trọng lượng thép bằng cách nhân thể tích bê tông với hàm lượng kinh nghiệm (Móng 90, Dầm móng 160, Cột 220, Dầm tầng 180, Sàn thép lưới 45 kg/m³).",
    solution: "Hàm lượng này chỉ được sử dụng cho giai đoạn lập báo cáo nghiên cứu khả thi, khái toán hoặc dự trù dòng tiền thô. Khi lập hồ sơ dự toán chi tiết hoặc thi công, bắt buộc phải dùng File 1.2 để bóc chi tiết từng thanh thép.",
    defaultChecked: false
  },
  {
    id: "LOI-13",
    level: "Cao",
    fileSheet: "1.2 / Thép sàn",
    targetSlug: "thep-san",
    title: "Sheet Thép sàn vẫn dùng công thức tính mối nối cũ INT(L/11700)",
    issue: "Tại 93 ô của sheet Thép sàn, công thức tính số mối nối vẫn là INT(L/11700). Bản cập nhật sửa năm 2022 của tác giả chỉ đúng khi L = 11.700mm (nếu L = 23.400mm công thức vẫn cho ra 2 mối nối, trong khi thực tế chỉ cần 1 mối nối giữa 2 cây).",
    solution: "Nên sửa công thức tính số mối nối thành: MAX(0, ROUNDUP((L - Lnoi)/(11700 - Lnoi), 0) - 1) để tính chuẩn xác điểm nối so le.",
    defaultChecked: false
  },
  {
    id: "LOI-14",
    level: "Trung bình",
    fileSheet: "1.2 (724 ô)",
    targetSlug: "thep-tong-quan",
    title: "Cố định chiều dài nối 40Ø và móc đai 7Ø cho mọi trường hợp",
    issue: "File cố định chiều dài đoạn nối buộc bằng 40Ø (cột J) và móc uốn đai bằng 7Ø. Quy định này không phù hợp với các cấu kiện đặc biệt hoặc vùng kháng chấn.",
    solution: "Phải tra cứu Chỉ dẫn kỹ thuật dự án và TCVN 5574:2018 (đoạn nối phụ thuộc mác bê tông và cấp độ bền thép). Đặc biệt trong vùng chịu động đất (TCVN 9386:2012), móc đai bắt buộc phải bẻ 135° với đoạn móc kéo dài ≥ 10Ø (tối thiểu 70mm).",
    defaultChecked: false
  },
  {
    id: "LOI-15",
    level: "Trung bình",
    fileSheet: "1.2 / ket cau thep",
    targetSlug: "ket-cau-thep",
    title: "Công thức tổng diện tích sơn bỏ sót nhóm VIII và IX",
    issue: "Ô L5 (Tổng diện tích sơn kết cấu thép) dùng công thức SUM(L7:L547)/3, trong khi bảng khối lượng thép kéo dài đến tận dòng 612 → dẫn đến bỏ sót hoàn toàn nhóm VIII (35.7 m²) và nhóm IX Xà gồ (3.600.8 m²). Ngoài ra bảng đánh số thứ tự trùng nhóm VI và thiếu nhóm VII; bu lông không có dòng tổng cộng.",
    solution: "Đối với xà gồ mạ kẽm thì việc không sơn là phù hợp thực tế, nhưng nhóm VIII (thép tấm bổ sung) bắt buộc phải đưa vào diện tích sơn. Cần kéo dải tính SUM đến hết dòng cuối.",
    defaultChecked: false
  },
  {
    id: "LOI-16",
    level: "Thấp",
    fileSheet: "1.2 (Tổng quan)",
    targetSlug: "thep-tong-hop",
    title: "Tồn tại 3 công thức tính trọng lượng riêng cốt thép lệch nhẹ",
    issue: "File 1.2 dùng 3 công thức khác nhau: π/4 * (Ø/1000)² * 7850 (trong sheet chi tiết); Ø²/162 (đếm số cây); và 6.16 * Ø² / 1000 (sheet Tổng hợp).",
    solution: "Sai số giữa 3 công thức này dưới 0.15%. Để thống nhất trong hồ sơ nghiệm thu, nên áp dụng bảng khối lượng danh nghĩa theo tiêu chuẩn TCVN 1651-2:2018.",
    defaultChecked: false
  },
  {
    id: "LOI-17",
    level: "Thấp",
    fileSheet: "1.2 (Toàn bộ)",
    targetSlug: "thep-tong-hop",
    title: "229 tên vùng (Named Range) rác, lỗi #REF! và sheet ẩn dự án cũ",
    issue: "File 1.2 tồn tại 229 Named Range rác, 12 ô lỗi công thức #REF!, chứa đường dẫn liên kết ngoài (External Link) tới ổ đĩa máy tính tác giả 'C:\\Users\\Mr.Thanh\\...', và có 3 sheet ẩn chứa số liệu của công trình cũ.",
    solution: "Dùng phím tắt Ctrl+F3 (Name Manager) để xóa toàn bộ Named Range bị lỗi; vào Data > Edit Links > Break Link; kiểm tra Unhide các sheet ẩn để dọn dẹp dung lượng file.",
    defaultChecked: false
  },
  {
    id: "LOI-18",
    level: "Thấp",
    fileSheet: "Cả hai file 1.1 & 1.2",
    targetSlug: "san-lap",
    title: "Công thức tổng nhóm dạng SUM(...)/2 hoặc SUM(...)/3",
    issue: "Rất nhiều dòng tổng nhóm trong cả hai file được viết dưới dạng cộng cả dòng chi tiết lẫn dòng tổng con rồi chia đôi (SUM/2) hoặc chia ba (SUM/3).",
    solution: "Nếu người dùng chèn thêm dòng mới vào ngoài phạm vi khối hoặc chèn dòng tổng mới thì kết quả chia sẽ bị sai lệch hoàn toàn. Quy tắc an toàn: Luôn chèn dòng bên trong lòng của nhóm cấu kiện.",
    defaultChecked: false
  }
];
