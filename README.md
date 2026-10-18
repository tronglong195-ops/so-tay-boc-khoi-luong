# Sổ Tay Tra Cứu Bóc Khối Lượng QS (Việt Nam)

> **Cẩm nang tra cứu và chuẩn hóa phương pháp đo bóc khối lượng xây dựng từ bản vẽ AutoCAD, hồ sơ PDF và chỉ dẫn kỹ thuật, nhập liệu chính xác vào 2 hệ thống bảng tính Excel chuyên nghiệp.**

---

## 🌐 Đường Dẫn Truy Cập Trực Tuyến

* 🚀 **Trang Web Trực Tuyến (GitHub Pages):**  
  👉 **[https://tronglong195-ops.github.io/so-tay-boc-khoi-luong/](https://tronglong195-ops.github.io/so-tay-boc-khoi-luong/)**

* 📱 **Giao diện tối ưu di động (Mobile 375px+):**  
  Trang web được thiết kế đặc thù cho kỹ sư công trường đọc bằng một tay trên điện thoại:
  - Thanh điều hướng đáy màn hình: Mục lục cấu kiện, Tìm kiếm nhanh, Cuộn nhanh tới Máy tính mini, Lên đầu trang.
  - Hỗ trợ bàn phím số tự động (`inputMode="decimal"`).
  - Có thể bấm **"Thêm vào màn hình chính" (Add to Home Screen)** trên Safari iOS hoặc Chrome Android để sử dụng như một ứng dụng độc lập.

* 🧪 **Trang kiểm thử tự động 577 Test Cases:**  
  👉 **[https://tronglong195-ops.github.io/so-tay-boc-khoi-luong/#/kiem-tra](https://tronglong195-ops.github.io/so-tay-boc-khoi-luong/#/kiem-tra)**  
  *(Đạt chuẩn 577/577 test case từ 2 file template gốc với sai số $\le 0.01$)*

---

## 📑 Mục Lục Nhanh Các Phần

| Phần | Nội dung | Liên kết trực tiếp |
| :--- | :--- | :--- |
| **Quy trình** | Sơ đồ 7 bước lập BOQ và bóc tách khối lượng chuẩn QS | [#/](https://tronglong195-ops.github.io/so-tay-boc-khoi-luong/#/) |
| **Phần A** | Bê tông, ván khuôn, đào đắp, hoàn thiện (File 1.1 - 23 sheet) | [#/mong](https://tronglong195-ops.github.io/so-tay-boc-khoi-luong/#/mong) |
| **Phần B** | Bóc thép chi tiết thanh uốn D–H & Kết cấu thép (File 1.2 - 21 mục) | [#/thep-dam](https://tronglong195-ops.github.io/so-tay-boc-khoi-luong/#/thep-dam) |
| **Phần C** | Kỹ thuật trích xuất số liệu từ AutoCAD, PDF và Chỉ dẫn kỹ thuật | [#/lay-so-lieu](https://tronglong195-ops.github.io/so-tay-boc-khoi-luong/#/lay-so-lieu) |
| **Phần D** | Checklist 18 lỗi & rủi ro đã biết trong template (Tick lưu tự động) | [#/kiem-tra-cheo](https://tronglong195-ops.github.io/so-tay-boc-khoi-luong/#/kiem-tra-cheo) |
| **Phần E** | 7 Căn cứ pháp lý, nghị định, thông tư & tiêu chuẩn kỹ thuật cốt lõi | [#/can-cu](https://tronglong195-ops.github.io/so-tay-boc-khoi-luong/#/can-cu) |
| **Kiểm thử** | Bảng tổng hợp đối soát 577 trường kiểm thử thực tế | [#/kiem-tra](https://tronglong195-ops.github.io/so-tay-boc-khoi-luong/#/kiem-tra) |

---

## 🎯 Giới Thiệu 2 File Template Excel

Sổ tay giải thích chi tiết cách dùng 2 file bảng tính khối lượng thực chiến của kỹ sư QS:

### 1. File 1.1: Hệ Thống Bảng Tính Khối Lượng Tự Động QS
- **Phạm vi tính toán:** Bê tông lót, bê tông cấu kiện, ván khuôn tiếp xúc, khối lượng đào hố móng có taluy, đắp đất, hoàn thiện sàn - tường - trần, hạ tầng kỹ thuật (cống, mương, hố ga, đường giao thông). Cốt thép chỉ ước tính sơ bộ theo hàm lượng $kg/m^3$.
- **Cấu trúc mỗi cấu kiện gồm 7 mục tiêu chuẩn:**
  1. **Mục đích & phạm vi áp dụng:** Sheet dùng cho công việc gì, tiêu chuẩn nào.
  2. **Bảng thông số cần lấy:** 4 cột gồm Tên thông số, Ký hiệu cột Excel, Lấy ở đâu (bản vẽ, lệnh CAD, chỉ dẫn kỹ thuật), Ghi chú kỹ thuật.
  3. **Công thức tính toán:** Dạng biểu thức toán học trực quan kèm mã công thức Excel gốc có nút sao chép nhanh.
  4. **Hình vẽ SVG inline:** Minh họa kích thước hình học tương ứng đúng nhãn cột Excel (`F`, `G`, `H`, `BN`, `BM`...).
  5. **Ví dụ số thực tế:** Số liệu đối chiếu chuẩn xác với template mẫu.
  6. **Máy tính mini tương tác:** Nhập thông số trực tiếp trên web và nhận kết quả tức thì theo công thức file.
  7. **Hộp cảnh báo lỗi/rủi ro:** Nhận diện các bẫy công thức Excel tiềm ẩn (như lỗi hàm IF chọn sai hệ số taluy, lệch công thức lăng thể đào...).

### 2. File 1.2: Hệ Thống Bảng Tính Thép & Kết Cấu Thép Tiền Chế
- **Phạm vi tính toán:** Bóc tách thép chi tiết theo từng thanh, xác định quy cách thanh uốn theo các đoạn D–H, tự động tính số mối nối chồng $40\varnothing$ cho cây thép dài quá $11,7m$, tính thép đai khép kín có móc $135^\circ$ (TCVN 9386:2012), tổng hợp số cây thép và tải trọng thép, bóc thép hình và thép tấm bản mã (PL) kết cấu thép tiền chế.

---

## 🛠️ Hướng Dẫn Phát Triển Cục Bộ (Local Development)

Nếu muốn chạy dự án hoặc chỉnh sửa nội dung trên máy tính:

### 1. Yêu cầu môi trường
- **Node.js**: Phiên bản 18 trở lên (khuyến nghị Node 20 LTS).
- **Trình duyệt**: Bất kỳ trình duyệt hiện đại nào (Chrome, Edge, Safari, Firefox).

### 2. Cài đặt và khởi chạy
```bash
# Clone kho lưu trữ
git clone https://github.com/tronglong195-ops/so-tay-boc-khoi-luong.git
cd so-tay-boc-khoi-luong

# Cài đặt thư viện phụ thuộc (chỉ gồm React, React-DOM, Vite)
npm install

# Chạy máy chủ phát triển (Local Dev Server)
npm run dev
```
Trình duyệt sẽ mở tại `http://localhost:3000/`.

### 3. Đóng gói bản dựng sản xuất
```bash
npm run build
```
Bản dựng tối ưu hóa sẽ được xuất ra thư mục `dist/`.

---

## 📂 Cấu Trúc Thư Mục

```text
├── .gitignore            # Loại trừ node_modules, dist, và file bản quyền .xlsm
├── index.html            # Khung HTML gốc của ứng dụng Vite
├── package.json          # Danh sách dependency tối giản (React 18, Vite)
├── vite.config.js        # Cấu hình Vite (base: './' phục vụ GitHub Pages)
├── src/
│   ├── main.jsx          # Điểm khởi chạy React
│   ├── App.jsx           # Điều phối điều hướng Hash Routing & Layout
│   ├── styles.css        # Hệ thống CSS thuần, biến màu xanh lá, responsive
│   ├── components/       # Các thành phần giao diện tái sử dụng
│   │   ├── Header.jsx           # Thanh đầu trang có ô tìm kiếm & nút in
│   │   ├── Sidebar.jsx          # Ngăn kéo mục lục cấu kiện
│   │   ├── MobileQuickBar.jsx   # Thanh điều hướng nhanh đáy màn hình
│   │   ├── SearchModal.jsx      # Modal tìm kiếm toàn site (Ctrl + K)
│   │   ├── MiniCalculator.jsx   # Máy tính mini phản hồi trực tiếp
│   │   ├── FormulaBlock.jsx     # Hiển thị công thức toán & mã Excel
│   │   ├── WarningBox.jsx       # Hộp cảnh báo lỗi phân cấp độ
│   │   └── svgs/index.jsx       # 17 hình minh họa SVG inline
│   ├── pages/            # Các trang giao diện chính
│   │   ├── HomePage.jsx             # Sơ đồ quy trình 7 bước QS
│   │   ├── ItemDetailPage.jsx       # Trang chi tiết cấu kiện (Khung 7 phần)
│   │   ├── MeasurementPage.jsx      # Kỹ thuật đo bóc CAD / PDF / Spec
│   │   ├── ChecklistPage.jsx        # Checklist 18 lỗi có tick LocalStorage
│   │   ├── ReferencesPage.jsx       # 7 Căn cứ pháp lý & tiêu chuẩn
│   │   └── TestVerificationPage.jsx # Runner kiểm thử 577 test case
│   └── data/             # Dữ liệu tách rời hoàn toàn khỏi UI
│       ├── workflow.js          # Dữ liệu quy trình 7 bước
│       ├── partA_items.js       # Dữ liệu 23 sheet bê tông & ván khuôn
│       ├── partB_items.js       # Dữ liệu 21 mục cốt thép & kết cấu thép
│       ├── partC_measure.js     # Lệnh AutoCAD, PDF & Checklist Spec
│       ├── partD_checklist.js   # 18 lỗi/rủi ro đã biết trong template
│       ├── partE_references.js  # 7 văn bản quy phạm pháp luật
│       └── testcases.js         # Dữ liệu 577 test case & runner
└── scripts/              # Các script Node.js hỗ trợ chuyển đổi dữ liệu
```

---

## 🔒 Quy Định Bản Quyền & Dữ Liệu Gốc

- Các file template Excel gốc (`*.xlsm`) có bản quyền của tác giả đã được thêm vào `.gitignore` để bảo mật tuyệt đối, không lưu trữ hoặc chia sẻ công khai file gốc trên repository.
- Toàn bộ số liệu và công thức trong ứng dụng được biên soạn độc lập dựa trên đặc tả kỹ thuật đo bóc khối lượng xây dựng Việt Nam.
