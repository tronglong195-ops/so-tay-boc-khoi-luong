# NGUỒN THÔNG SỐ — lấy số liệu ở đâu, nhập vào cột nào

Tài liệu này là nguồn nội dung cho Phần C và cho cột "Lấy ở đâu" của từng trang hạng mục.
Tên cột Excel lấy đúng theo SPEC_1.1 / SPEC_1.2.

## 0. Quy tắc chung trước khi đo

| Việc | Cách làm | Vì sao |
|---|---|---|
| Kiểm tra đơn vị bản vẽ | AutoCAD: lệnh `UNITS`; đo thử một trục có ghi kích thước bằng `DIST` (DI) | Bản vẽ mm, file Excel nhập **m** (riêng các đoạn thanh thép file 1.2 nhập **mm**) |
| Kiểm tra tỷ lệ | Đo trong Model, không đo trong Layout/viewport | Đo trong viewport ra sai theo tỷ lệ khung nhìn |
| Thứ tự ưu tiên số liệu | Kích thước ghi (dimension) > số đo > số suy ra | Kích thước ghi là căn cứ pháp lý khi nghiệm thu |
| Ghi nguồn | Cột Ghi chú: "KC-03, trục 2-3/A-B" | QĐ 1041/QĐ-BXD yêu cầu ghi rõ cơ sở và nguồn số liệu |
| Mỗi khối lượng tính một lần | Giao cắt cột–dầm–sàn chỉ tính cho một cấu kiện (quy ước file: sàn tính đủ diện tích) | Tránh tính trùng |

## 1. Lệnh AutoCAD dùng để lấy số

| Cần lấy | Lệnh | Ghi chú |
|---|---|---|
| Chiều dài một đoạn | `DIST` (DI), `MEASUREGEOM` (MEA) → Distance | Bật OSNAP Endpoint/Intersection |
| Diện tích và chu vi một vùng kín | `BOUNDARY` (BO) bấm vào trong phòng → tạo polyline kín → `LIST` (LI) hoặc `Ctrl+1` (Area, Length) | Dùng cho cột J, K của sheet Hoàn thiện; cột G sheet Nền, San lấp |
| Tổng diện tích nhiều hatch | Chọn các hatch → `Ctrl+1` → Cumulative Area | Sàn, nền, đường theo loại vật liệu |
| Tổng chiều dài nhiều đối tượng | `QSELECT` theo layer → `DATAEXTRACTION` xuất Length ra Excel (hoặc LISP cộng chiều dài) | Tường theo layer, dầm, mương, cống |
| Cao độ một điểm | `ID` hoặc đọc ký hiệu cao độ trên mặt cắt | Cột cao độ (BO, BP Móng; AA–AC Đường; Z, AC Bể) |
| Đếm đối tượng (cọc, móng, cửa) | `QSELECT` theo block name hoặc `COUNT` (AutoCAD 2022+) | Cột số lượng (D, O, L, M…) |
| Bản vẽ chỉ có PDF vector | `PDFIMPORT` (AutoCAD 2017+) rồi kiểm tra lại tỷ lệ | PDF scan (raster) thì không import được, phải đo trên PDF |

## 2. Đo trên PDF

- Acrobat Reader / Foxit: công cụ **Measure** (Đo). Phải **đặt tỷ lệ** (calibrate) theo một kích thước có ghi sẵn trước khi đo.
- Chỉ đo khi bản vẽ không ghi kích thước. Luôn đối chiếu kết quả với một kích thước đã biết. Ghi "đo trên PDF" vào cột ghi chú.
- PDF scan nghiêng hoặc méo thì đo theo phương ngang/dọc riêng và kiểm tra cả hai.

## 3. Chỉ dẫn kỹ thuật (PDF): những mục phải tìm (Ctrl+F)

| Thông số | Từ khóa tìm | Dùng ở đâu |
|---|---|---|
| Cấp/mác bê tông từng cấu kiện | "cấp độ bền", "B25", "mác", "M300" | Tách dòng BOQ theo mác (không đổi khối lượng) |
| Bê tông lót: chiều dày, mác | "bê tông lót", "lót móng" | Móng Y; Dầm móng G; Bể J |
| Lớp bê tông bảo vệ | "lớp bảo vệ", "cover" | Kích thước đai, thép (file 1.2) |
| Chiều dài neo, nối, vị trí nối | "neo", "nối buộc", "chồng nối", "lap" | File 1.2 cột J (file mẫu cố định 40Ø — phải sửa theo đây) |
| Móc thép, móc đai | "móc", "135°", "uốn" | File 1.2 các đoạn D, H của đai |
| Loại đất, độ dốc mái đào | Hồ sơ khảo sát địa chất; "mái dốc", "taluy" | Móng BM/BN, hệ số m (TCVN 4447:2012 Bảng 11) |
| Độ chặt đắp K | "K95", "K0,95", "độ chặt" | Chọn mã định mức đắp (không nhân vào khối lượng) |
| Chiều dày trát, lớp vữa | "trát", "vữa" | Tách mã định mức trát (khối lượng m² không đổi) |
| Quy cách gạch, chiều dày tường | "gạch", "AAC", "không nung" | Tường xây G — file chỉ nhận 0,11/0,22/0,33 |
| Chống thấm: phạm vi, chiều cao bo tường | "chống thấm", "bo chân" | Hoàn thiện AM–AP |

## 4. Bản đồ thông số theo từng sheet

### File 1.1
| Sheet | Thông số nhập | Lấy ở bản vẽ / tài liệu |
|---|---|---|
| San lấp MB | G diện tích; H cao độ nền hoàn thiện; I cao độ hiện trạng; J lớp hữu cơ; K, L, M chiều dày kết cấu nền | Tổng mặt bằng san nền; bình đồ hiện trạng/lưới cao độ; báo cáo địa chất (lớp hữu cơ); mặt cắt cấu tạo nền |
| Cọc nhồi / Barret / Cọc vuông | Chiều dài, đường kính hoặc kích thước, đoạn đập đầu, đoạn cát đầu cọc, ống vách, ống siêu âm, mũi cọc | Mặt bằng định vị cọc (đếm theo loại); chi tiết cọc (cao độ mũi, cao độ cắt cọc, cao độ mặt đất thi công); chỉ dẫn kỹ thuật cọc |
| Móng | D số móng cùng loại; F, G, H đài; vát I, J, K; cổ móng AA, AB; AC chiều sâu; AD nền; số cọc AG–AM; BO, BP cao độ | Mặt bằng móng (đếm theo ký hiệu F1, F2…); chi tiết đài (mặt bằng và mặt cắt); mặt cắt móng có cao độ đáy đài/đỉnh đài; cao độ tự nhiên |
| Dầm móng | D chiều dài theo trục; E, F tiết diện; J trừ (bề rộng đài/cổ móng giao với dầm); W mở rộng đáy | Mặt bằng dầm móng; mặt cắt dầm; mặt bằng móng để lấy bề rộng phần bị trừ |
| Nền | E, F (hoặc G) diện tích theo khu; I base; J bê tông nền; R cốt nền; V, W, X thép nền | Mặt bằng nền + chi tiết cấu tạo nền; dòng "Trừ" cho dầm móng và cổ móng nằm trong nền |
| Cột | D, E tiết diện (G nếu tròn); F chiều cao tầng; H chiều dày sàn hoặc dầm trừ; vai cột I–N; số cột/tầng; số tầng giống nhau | Mặt bằng định vị cột; bảng tiết diện cột; mặt cắt công trình (cao độ tầng) |
| Vách BTCT | Chiều dài, chiều dày, chiều cao, trừ lỗ mở; số cạnh ván khuôn theo hình dạng (L, I, lõi thang máy) | Mặt bằng kết cấu vách; mặt đứng vách (lỗ cửa) |
| Dầm tầng | D chiều dài thông thủy hoặc theo trục; H trừ cột; E, F tiết diện; G sàn; giao cắt dầm phụ U–AA | Mặt bằng kết cấu dầm sàn từng tầng; mặt cắt dầm |
| Sàn | D, E kích thước ô; F chiều dày; Q, R, S thép lưới (nếu ước) | Mặt bằng kết cấu sàn; dòng âm cho lỗ mở, thông tầng, hộp kỹ thuật |
| Cầu thang | Chiều dài bản nghiêng (đo trên mặt cắt thang), bề rộng vế, chiều dày; bậc; chiếu nghỉ; dầm thang | Mặt bằng và mặt cắt cầu thang (KT + KC) |
| Tường xây | Mã tường EW/IW; F chiều dài theo trục; G dày; H cao; L, M trừ; cửa D/W (dòng âm); trụ, giằng | Mặt bằng kiến trúc (tường theo layer); mặt cắt (cao tầng); bảng thống kê cửa; ghi chú vật liệu hoàn thiện |
| Vách ngăn | Loại vách W1–W9; dài; cao đến đáy sàn hoặc mái | Mặt bằng kiến trúc; chi tiết vách thạch cao/kính |
| Hoàn thiện Sàn–Trần | Mã F, C, W, SK; J diện tích; K chu vi; I cao ốp | Mặt bằng lát sàn, mặt bằng trần, bảng hoàn thiện phòng; Revit Room Schedule (Area, Perimeter) |
| Hạ tầng – Đường | Diện tích theo kết cấu R1, R2, R3; chiều dày lớp; cao độ hiện trạng/đường | Mặt bằng giao thông; mặt cắt kết cấu đường; trắc dọc, trắc ngang |
| Cống tròn / Mương | Đoạn từ hố này đến hố khác; đường kính; loại CL/TH/PVC; cao độ đáy cống; trừ giao hố ga | Mặt bằng thoát nước; trắc dọc cống |
| Hố ga / Bể | Kích thước trong, dày thành, đáy, nắp; chiều sâu; cao độ | Chi tiết hố ga, bể (mặt bằng và mặt cắt) |
| Hàng rào | Chiều dài tuyến; móng trụ M1, M2 (số lượng); tường; giằng; lưới | Mặt bằng tổng thể; chi tiết hàng rào |

### File 1.2 (thép)
| Bước | Làm gì | Nguồn |
|---|---|---|
| 1 | Chép từng thanh trong **bảng thống kê thép** của bản vẽ: số hiệu (B), Ø (C), hình dạng → các đoạn D–H (mm), số thanh/cấu kiện (L), số cấu kiện (M) | Bảng thống kê cốt thép trên bản vẽ kết cấu |
| 2 | Nếu bản vẽ không có bảng thống kê: dựng hình dạng thanh từ mặt cắt và mặt bằng bố trí thép. Chiều dài = nhịp + neo; đai = chu vi trừ lớp bảo vệ + móc | Mặt cắt dầm/cột; chỉ dẫn kỹ thuật (lớp bảo vệ, neo, móc) |
| 3 | Thép sàn: số thanh = (chiều dài ô − các đoạn dầm) / bước + 1 | Mặt bằng bố trí thép sàn |
| 4 | Mối nối: theo chiều dài cây 11,7 m và chiều dài nối trong chỉ dẫn kỹ thuật (thay cho 40Ø cố định) | Chỉ dẫn kỹ thuật, ghi chú chung bản vẽ KC |
| 5 | Kết cấu thép: mỗi chi tiết (cánh, bụng, sườn, bản mã) nhập t (PL), b, L, số lượng; thép hình nhập kg/m | Bản vẽ chế tạo (shop drawing), bảng vật tư kết cấu thép |
| 6 | Đối chiếu tổng của từng sheet với bảng tổng thép trên bản vẽ (lệch quá ±3% thì soát lại) | Bảng tổng hợp thép trên bản vẽ |

## 5. Kiểm tra chéo sau khi bóc
- Thép bóc theo thanh (file 1.2) chia cho m³ bê tông cùng cấu kiện (file 1.1) → so với cột "hàm lượng" của file 1.1.
- Lọc dòng có kích thước khác 0 nhưng khối lượng bằng 0 (tường dày lạ, mã tường hoặc mã hoàn thiện gõ sai).
- So tổng ván khuôn và tổng bê tông từng nhóm với dự án tương tự.
- Diện tích hoàn thiện sàn so với diện tích sàn kết cấu (chênh lệch phải giải thích được bằng tường, cột, lỗ mở).
