# Bộ tài liệu nguồn cho web "Sổ tay bóc khối lượng"

Đặt cả thư mục này vào `docs/spec/` của project. Đây là nguồn sự thật cho nội dung web.

| File | Nội dung |
|---|---|
| SPEC_1.1_khoi_luong.md | 23 sheet của file 1.1. Mỗi sheet có bảng: Cột, Tên cột, Đơn vị, Loại (nhập/công thức), Giá trị mẫu, Công thức Excel gốc, Đọc nghĩa, kèm danh sách cấu kiện trong sheet |
| SPEC_1.2_thep.md | 20 sheet của file 1.2, cùng cấu trúc trên |
| testcases_1.1.json, testcases_1.2.json | Mỗi sheet một dòng mẫu: `inputs` (ô nhập), `outputs` (giá trị Excel đã tính), khóa là chữ cột |
| NGUON_THONG_SO.md | Lấy số liệu ở đâu: lệnh AutoCAD, đo PDF, mục cần tìm trong chỉ dẫn kỹ thuật, bản đồ thông số theo từng sheet |
| LOI_DA_BIET.md | 18 lỗi và rủi ro đã kiểm chứng, kèm cách xử lý |

Lưu ý:
- Trong SPEC, cột "Đọc nghĩa" thay tham chiếu cùng dòng bằng [tên cột]. Tham chiếu sang dòng khác hoặc sheet khác giữ nguyên địa chỉ (ví dụ `Móng!$AN$12`, `SUM(D10:H12)`).
- File 1.2: mỗi thanh thép chiếm khối 3 dòng (dòng trên ghi kích thước móc, dòng giữa là dòng dữ liệu, dòng dưới ghi thêm). Hình dạng là tổng các đoạn D–H của cả 3 dòng.
- Sheet bị bỏ qua: Danh mục, Update, Hình dạng (file 1.1), và các sheet ẩn chứa dữ liệu dự án cũ (file 1.2).
