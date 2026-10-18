# LỖI VÀ RỦI RO ĐÃ BIẾT TRONG HAI FILE TEMPLATE (bản 2026.09.08)

Hiển thị mỗi mục thành hộp cảnh báo trên trang hạng mục tương ứng, đồng thời gom lại trong Phần D (checklist).
Số liệu "mẫu" là dữ liệu dự án mẫu có sẵn trong file.

| # | Mức | File / Sheet | Vấn đề | Cách xử lý khi dùng |
|---|---|---|---|---|
| 1 | Nghiêm trọng | 1.2 / Chi tiết, Tổng hợp | Chỉ liên kết 8/17 sheet (Cọc vuông, Móng, Dầm móng, Cột vuông, Cầu thang, Dầm, Hố ga, Bể nước). THIẾU: Thép sàn 72,80 t; Barrette 18,66; Vách 16,55; Nối đầu cọc 15,55; Hàng rào 3,36; Trụ-giằng-LT 2,50; Cọc nhồi 1,92; Cột tròn 1,90; Bể phốt 0,27 | Mẫu: tổng hợp báo 46,79 t, thực bóc ≈180,3 t. Thêm khối SUMIF cho các sheet còn thiếu, hoặc tự cộng bảng tổng cuối mỗi sheet |
| 2 | Nghiêm trọng | 1.1 / VBA | Workbook_Open tự đóng file sau 30/3/2027 (khóa bản quyền tác giả) | Lưu kết quả từng dự án sang .xlsx; template thì gia hạn theo bản quyền |
| 3 | Cao | 1.1 / Dầm móng cột X | So sánh `$AC$4<=1.5` (là hệ số 0,25) thay vì chiều sâu AA → luôn lấy m=0,25 khi sâu dưới 5 m | Sửa thành `IF(AA<=1.5;0.25;IF(AA<=3;0.67;0.85))` |
| 4 | Cao | 1.1 / Móng cột BN | IF chọn m: đoạn 3–5 m lấy 0,67 (đúng phải 0,85). Bộ 0,25/0,67/0,85 chỉ đúng cho đất cát pha (Bảng 11 TCVN 4447:2012). Sâu trên 5 m bảng không còn áp dụng | Sửa IF như mục 3; đổi hệ số theo loại đất trong báo cáo địa chất; sâu trên 5 m phải tính ổn định mái dốc |
| 5 | Trung bình | 1.1 / Móng cột BR | Thể tích đào theo trung bình hai đáy; lớn hơn công thức lăng thể H/6·(A₁+4Aₘ+A₂) khoảng 5% (mẫu: 25.656 so với 24.385 m³). Đắp đất BS dư theo | Với khối lượng thanh toán, dùng công thức lăng thể; hoặc thống nhất phương pháp với tư vấn giám sát |
| 6 | Cao | 1.1 / Tường xây | Khối xây chỉ cộng khi G đúng bằng 0,33/0,22/0,11 → tường 0,10/0,15/0,20 ra 0 mà không báo lỗi | Thêm cột tường dày khác, hoặc kiểm tra cột tổng có khác 0 không |
| 7 | Trung bình | 1.1 / Tường xây cột K | Tầng 2-3 và 4-5-6: 18/30 công thức ốp thiếu mã IW5; tất cả đều lấy `$K$9` (chiều cao ốp tầng 1) | Thêm IW5; trỏ về ô chiều cao ốp của từng tầng (K63, K111) |
| 8 | Thấp | 1.1 / Sàn | Dòng mẫu ghi nhãn "H=250mm" nhưng F = 0,15 | Luôn kiểm tra nhãn khớp số |
| 9 | Trung bình | 1.1 / San lấp | Diện tích gõ cứng trong công thức (`=73135.9478-…`, `=20445-4211.608-…`); Bể XLNT và Nhà bơm để trống số lượng → không vào tổng | Xóa dữ liệu mẫu; nhập diện tích từ CAD |
| 10 | Cao | 1.1 / Đường, Cọc nhồi, các cột Hao hụt | Nhân hệ số vào khối lượng: cát ×1,35; đất cọc nhồi ×4/3; hao hụt | BOQ dự toán dùng khối lượng hình học (hệ số = 1). Hệ số chỉ dùng cho kế hoạch vật tư |
| 11 | Thấp | 1.1 / Cọc vuông | Mũi cọc tính ½·A·h (lăng trụ); mũi chóp 4 mặt đúng là ⅓·A·h | Ảnh hưởng nhỏ |
| 12 | Trung bình | 1.1 (toàn bộ) | Thép ước theo hàm lượng (90/160/180/220/45/220 kg/m³) | Chỉ dùng cho sơ bộ hoặc tổng mức; dự toán dùng file 1.2 |
| 13 | Cao | 1.2 / Thép sàn | Vẫn dùng công thức nối cũ `INT(L/11700)` ở 93 ô. Bản sửa 2022 chỉ đúng khi L=11.700 (L=23.400 vẫn ra 2 mối nối) | Đề xuất `MAX(0;ROUNDUP((L−Lnối)/(11700−Lnối);0)−1)` |
| 14 | Trung bình | 1.2 (724 ô) | Chiều dài nối cố định 40Ø; móc đai 7Ø | Lấy theo bản vẽ, chỉ dẫn kỹ thuật, TCVN 5574:2018. Vùng có động đất thường yêu cầu móc đai 135° ≥10Ø (TCVN 9386:2012) — kiểm tra bản vẽ |
| 15 | Trung bình | 1.2 / ket cau thep | Tổng sơn L5 = `SUM(L7:L547)/3` trong khi tổng khối lượng cộng tới dòng 612 → bỏ nhóm VIII (35,7 m²) và IX Xà gồ (3.600,8 m²). Đánh số trùng "VI", thiếu "VII". Bu lông không có dòng tổng | Xà gồ mạ kẽm thì không sơn là hợp lý, nhưng phải đưa nhóm VIII vào |
| 16 | Thấp | 1.2 | Ba cách tính trọng lượng riêng: π/4·7850 (chi tiết), Ø²/162 (đếm cây), 6,16·Ø²/1000 (Tổng hợp) | Lệch dưới 0,15%. Thống nhất theo khối lượng danh nghĩa TCVN 1651-2:2018 |
| 17 | Thấp | 1.2 | 229 tên vùng (named range) rác, 12 lỗi #REF!, liên kết ngoài tới `C:\Users\Mr.Thanh\...`; 3 sheet ẩn chứa dự án cũ; đuôi .xlsm nhưng không có macro | Dọn bằng Name Manager và Edit Links → Break Link |
| 18 | Thấp | Cả hai | Tổng nhóm dạng `SUM(...)/2`, `/3` (cộng cả dòng tổng nhóm rồi chia) | Chèn dòng nằm ngoài cấu trúc nhóm là tổng sai — luôn chèn dòng bên trong nhóm |
