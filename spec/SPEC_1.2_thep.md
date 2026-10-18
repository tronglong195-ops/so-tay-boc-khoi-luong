# SPEC file 1.2 — Bảng tính thép & kết cấu thép


## Sheet: Tổng hợp

- Hàng tiêu đề: 9–13; dòng mẫu phân tích: **14** (cấu kiện: `Thép D10`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| A | STT |  | nhập | 3 |  |  |
| B | Tên vật tư |  | nhập | Thép D10 |  |  |
| C | Đơn vị |  | nhập | Tấn |  |  |
| D | KL.Theo Dự toán |  | công thức | 7.903 | `=+'Chi tiết'!F15/1000` | 'Chi tiết'!F15/1000 |
| J | Khối lượng đã cấp › Tổng cộng |  | công thức | 0 | `=+SUM(E14:I14)` | SUM([Đợt 1]:[Đợt 5]) |
| K | KL.còn lại |  | công thức | 7.903 | `=+D14-J14` | [KL.Theo Dự toán]-[Tổng cộng] |
| N |  |  | nhập | 10 |  |  |
| P |  |  | công thức | 0.616 | `=+N14^2*6.16/10^3` | [N]^2*6.16/10^3 |
| Q |  |  | công thức | 7.207 | `=+P14*11.7` | [P]*11.7 |

**Các mục/cấu kiện có trong sheet (cột B):** Thép D10; Thép D12; Thép D14; Thép D16; Thép D18; Thép D20; Thép D22; Thép D25; Thép D28; Thép D30; Thép D 32

## Sheet: Chi tiết

- Hàng tiêu đề: 9–12; dòng mẫu phân tích: **13**

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| C | D / (mm) | (3) | nhập | 6 |  |  |
| D | KL.Thép tính theo thiết kế / (Kg) | (4) | công thức | 427.7 | `=+SUMIF($C$33:$C$185,C13,$D$33:$D$185)` | SUMIF($C$33:$C$185,[D / (mm)],$D$33:$D$185) |
| E | Hệ số hao hụt (%) | (5) | nhập | 1 |  |  |
| F | KL. Thép nhập cho công trình / (Kg) | (6)=(4)*(5) | công thức | 427.7 | `=+D13*E13` | [KL.Thép tính theo thiết kế / (Kg)]*[Hệ số hao hụt (%)] |
| G | Trọng lượng 1 cây 11.7m(Kg) | (7) | công thức | 0 | `=+IF(C13>8,C13^2/162*11.7,0)` | IF([D / (mm)]>8,[D / (mm)]^2/162*11.7,0) |
| H | Tổng số cây | (8)=(6)/(7) | công thức | 0 | `=+IF(C13>8,ROUND(F13/G13,0),0)` | IF([D / (mm)]>8,ROUND([KL. Thép nhập cho công trình / (Kg)]/[Trọng lượng 1 cây 11.7m(Kg)],0),0) |
| I | Thép buộc / [HS=1.5%] /  (Kg) › (9)=(6)*1.5% |  | công thức | 6.415 | `=+F13*1.5%` | [KL. Thép nhập cho công trình / (Kg)]*1.5% |

**Các mục/cấu kiện có trong sheet (cột B):** Công việc; (2); CỌC BÊ TÔNG; MÓNG; DẦM MÓNG; CỘT; CẦU THANG BỘ; DẦM TẦNG 2; Cốt thép hố ga; BỂ NƯỚC

## Sheet: Thép nối đầu cọc

- Hàng tiêu đề: 5–8; dòng mẫu phân tích: **9** (cấu kiện: `1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Ký hiệu |  | nhập | 1 |  |  |
| C | D (mm) |  | nhập | 16 |  |  |
| F | Hình dạng |  | nhập | 1300 |  |  |
| I | Số lượng mối nối |  | công thức | 0 | `=IF(F9=11700,0,INT(F9/11700))` | IF([Hình dạng·F]=11700,0,INT([Hình dạng·F]/11700)) |
| J | Chiều dài mối nối |  | công thức | 640 | `=40*C9` | 40*[D (mm)] |
| K | Chiều dài 1 thanh (mm) |  | công thức | 1300 | `=SUM(D8:H10)+I9*J9` | SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối] |
| L | Số thanh trong 1 Cấu kiện |  | nhập | 4 |  |  |
| M | Số cấu kiện |  | công thức | 250 | `=96+154` | 96+154 |
| N | Tổng số thanh |  | công thức | 1000 | `=L9*M9` | [Số thanh trong 1 Cấu kiện]*[Số cấu kiện] |
| O | Tổng chiều dài (m) |  | công thức | 1300 | `=N9*K9/10^3` | [Tổng số thanh]*[Chiều dài 1 thanh (mm)]/10^3 |
| P | Trọng lượng riêng / (Kg) |  | công thức | 1.578 | `=0.25*3.1415926*(C9/1000)^2*7850` | 0.25*3.1415926*([D (mm)]/1000)^2*7850 |
| Q | Khối lượng (Kg) |  | công thức | 2052 | `=P9*O9` | [Trọng lượng riêng / (Kg)]*[Tổng chiều dài (m)] |

**Các mục/cấu kiện có trong sheet (cột B):** Bản mã; Thép buộc; Trọng lượng
(kg); Tổng chiều dài đai xoắn; Đường kính đai xoắn; Bước đai; Chiều dài cấu kiện bố trí đai xoắn.

## Sheet: Cọc vuông bê tông

- Hàng tiêu đề: 7–11; dòng mẫu phân tích: **12** (cấu kiện: `1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Ký hiệu |  | nhập | 1 |  |  |
| C | D (mm) |  | nhập | 18 |  |  |
| F | Hình dạng kích thước |  | công thức | 9700 | `=+U13-V13` | U13-V13 |
| I | Số lượng mối nối |  | công thức | 0 | `=IF(SUM(D11:H13)=11700,0,INT(SUM(D11:H13)/11700))` | IF(SUM(D11:H13)=11700,0,INT(SUM(D11:H13)/11700)) |
| J | Chiều dài mối nối |  | công thức | 720 | `=40*C12` | 40*[D (mm)] |
| K | Chiều dài 1 thanh (mm) |  | công thức | 9988 | `=+SUM(D11:H13)+I12*J12` | SUM(D11:H13)+[Số lượng mối nối]*[Chiều dài mối nối] |
| L | Số thanh trong 1 Cấu kiện |  | công thức | 4 | `=4*T13` | 4*T13 |
| M | Số cấu kiện |  | nhập | 3 |  |  |
| N | Tổng số thanh |  | công thức | 12 | `=+L12*M12` | [Số thanh trong 1 Cấu kiện]*[Số cấu kiện] |
| O | Tổng chiều dài (m) |  | công thức | 119.9 | `=+K12*N12/1000` | [Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000 |
| P | Trọng lượng riêng / (Kg) |  | công thức | 1.998 | `=0.25*3.1415926*(C12/1000)^2*7850` | 0.25*3.1415926*([D (mm)]/1000)^2*7850 |
| Q | Khối lượng (Kg) |  | công thức | 239.4 | `=+O12*P12` | [Tổng chiều dài (m)]*[Trọng lượng riêng / (Kg)] |
| S |  |  | nhập | Tên |  |  |
| T |  |  | nhập | SL |  |  |
| U |  |  | nhập | L |  |  |
| V |  |  | nhập | L1 |  |  |

**Các mục/cấu kiện có trong sheet (cột B):** 2'; Thép Bản; Hộp 216x216x6; Thép bản dày 6; Total

## Sheet: Cọc nhồi

- Hàng tiêu đề: 6–9; dòng mẫu phân tích: **10** (cấu kiện: `1a`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Ký hiệu |  | nhập | 1a |  |  |
| C | D (mm) |  | nhập | 14 |  |  |
| F | Hình dạng |  | công thức | 10560 | `=10000+560` | 10000+560 |
| I | Số lượng mối nối |  | công thức | 0 | `=IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))` | IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700)) |
| J | Chiều dài mối nối |  | công thức | 560 | `=40*C10` | 40*[D (mm)] |
| K | Chiều dài 1 thanh  / (mm) |  | công thức | 10560 | `=SUM(D9:H11)+I10*J10` | SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối] |
| L | Số thanh trong một cấu kiện |  | nhập | 9 |  |  |
| M | Số cấu kiện |  | công thức | 1 | `=+U10` | [U] |
| N | Tổng số thanh |  | công thức | 9 | `=L10*M10` | [Số thanh trong một cấu kiện]*[Số cấu kiện] |
| O | Tổng chiều dài (m) |  | công thức | 95.04 | `=N10*K10/10^3` | [Tổng số thanh]*[Chiều dài 1 thanh  / (mm)]/10^3 |
| P | Trọng lượng riêng |  | công thức | 1.208 | `=0.25*3.1415926*(C10/1000)^2*7850` | 0.25*3.1415926*([D (mm)]/1000)^2*7850 |
| Q | Khối lượng (kg) |  | công thức | 114.8 | `=P10*O10` | [Trọng lượng riêng]*[Tổng chiều dài (m)] |
| S |  |  | nhập | CN150 |  |  |
| T |  |  | nhập | 1 |  |  |
| U |  |  | nhập | 1 |  |  |
| V |  |  | nhập | 41000 |  |  |
| W |  |  | nhập | 1500 |  |  |
| X |  |  | nhập | 75 |  |  |

**Các mục/cấu kiện có trong sheet (cột B):** 1a; L1; L2; Thép con kê; Khối lượng thép buộc; Quy cách; Thép ống D60x2; Thép ống D64x2; Thép ống D110x2.5; Thép ống D115x2.5; Thép bản D80; Thép bản D130; Bulong liên kết; Tổng chiều dài đai xoắn; Đường kính đai xoắn; Bước đai; Chiều dài cấu kiện bố trí đai xoắn.

## Sheet: Cọc Barret

- Hàng tiêu đề: 5–8; dòng mẫu phân tích: **9** (cấu kiện: `1A`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Ký hiệu |  | nhập | 1A |  |  |
| C | D (mm) |  | nhập | 25 |  |  |
| F | Hình dạng |  | công thức | 9550 | `=8300+1150+100` | 8300+1150+100 |
| I | Số lượng mối nối |  | công thức | 0 | `=IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))` | IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700)) |
| J | Chiều dài mối nối |  | công thức | 1000 | `=40*C9` | 40*[D (mm)] |
| K | Chiều dài 1 thanh  / (mm) |  | công thức | 9550 | `=SUM(D8:H10)+I9*J9` | SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối] |
| L | Số thanh trong một cấu kiện |  | công thức | 17 | `=+ROUND(Y9/150+1,0)` | ROUND([Y]/150+1,0) |
| M | Số cấu kiện |  | công thức | 1 | `=+T9` | [W0: Chiều rộng bố trí thép] |
| N | Tổng số thanh |  | công thức | 17 | `=L9*M9` | [Số thanh trong một cấu kiện]*[Số cấu kiện] |
| O | Tổng chiều dài (m) |  | công thức | 162.3 | `=N9*K9/10^3` | [Tổng số thanh]*[Chiều dài 1 thanh  / (mm)]/10^3 |
| P | Trọng lượng riêng |  | công thức | 3.853 | `=0.25*3.1415926*(C9/1000)^2*7850` | 0.25*3.1415926*([D (mm)]/1000)^2*7850 |
| Q | Khối lượng (kg) |  | công thức | 625.6 | `=P9*O9` | [Trọng lượng riêng]*[Tổng chiều dài (m)] |
| S |  |  | nhập | BR0 |  |  |
| T | W0: Chiều rộng bố trí thép |  | nhập | 1 |  |  |
| U |  |  | nhập | 41000 |  |  |
| V |  |  | nhập | 2800 |  |  |
| W |  |  | nhập | 600 |  |  |
| X |  |  | công thức | 40860 | `=+U9-AA9*2` | [U]-[AA]*2 |
| Y |  |  | nhập | 2400 |  |  |
| Z |  |  | công thức | 530 | `=+W9-AA9` | [W]-[AA] |
| AA |  |  | nhập | 70 |  |  |

**Các mục/cấu kiện có trong sheet (cột B):** 1A; 1B; 1C; 1D; 1E; 1F; 1G; 1H; D1; D2; D3; D4; Khối lượng thép buộc

## Sheet: Thép móng

- Hàng tiêu đề: 5–8; dòng mẫu phân tích: **9** (cấu kiện: `1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Ký hiệu |  | nhập | 1 |  |  |
| C | D (mm) |  | nhập | 25 |  |  |
| E | Hình dạng |  | nhập | 200 |  |  |
| F | Hình dạng |  | công thức | 2900 | `=+U9+X9-V9` | [U]+[X]-[V] |
| I | Số lượng mối nối |  | công thức | 0 | `=IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))` | IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700)) |
| J | Chiều dài mối nối |  | công thức | 1000 | `=40*C9` | 40*[D (mm)] |
| K | Chiều dài 1 thanh (mm) |  | công thức | 3100 | `=+SUM(D8:H10)+I9*J9` | SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối] |
| L | Số thanh trong 1 Cấu kiện |  | nhập | 4 |  |  |
| M | Số cấu kiện |  | công thức | 4 | `=+T9` | [T] |
| N | Tổng số thanh |  | công thức | 16 | `=+L9*M9` | [Số thanh trong 1 Cấu kiện]*[Số cấu kiện] |
| O | Tổng chiều dài (m) |  | công thức | 49.6 | `=+K9*N9/1000` | [Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000 |
| P | Trọng lượng riêng / (Kg) |  | công thức | 3.853 | `=0.25*3.1415926*(C9/1000)^2*7850` | 0.25*3.1415926*([D (mm)]/1000)^2*7850 |
| Q | Khối lượng (Kg) |  | công thức | 191.1 | `=+O9*P9` | [Tổng chiều dài (m)]*[Trọng lượng riêng / (Kg)] |
| S |  |  | nhập | F1 |  |  |
| T |  |  | nhập | 4 |  |  |
| U |  |  | nhập | 2000 |  |  |
| V |  |  | nhập | 100 |  |  |
| W |  |  | nhập | 50 |  |  |
| X |  |  | công thức | 1000 | `=40*C9` | 40*[D (mm)] |
| Y |  |  | công thức | 2250 | `=+X9+50*C12` | [X]+50*C12 |

**Các mục/cấu kiện có trong sheet (cột B):** 1A; CT1; 2A; 2a; 2b; 3a; 4a; Thép buộc

## Sheet: Thép dầm móng

- Hàng tiêu đề: 6–9; dòng mẫu phân tích: **10** (cấu kiện: `1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Ký hiệu |  | nhập | 1 |  |  |
| C | D (mm) |  | nhập | 25 |  |  |
| E | Hình dạng |  | công thức | 875 | `=35*C10` | 35*[D (mm)] |
| F | Hình dạng |  | nhập | 20500 |  |  |
| G | Hình dạng |  | công thức | 875 | `=+E10` | [Hình dạng·E] |
| I | Số lượng mối nối |  | công thức | 1 | `=IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))` | IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700)) |
| J | Chiều dài mối nối |  | công thức | 1000 | `=40*C10` | 40*[D (mm)] |
| K | Chiều dài 1 thanh (mm) |  | công thức | 23250 | `=+SUM(D9:H11)+I10*J10` | SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối] |
| L | Số thanh trong 1 Cấu kiện |  | nhập | 2 |  |  |
| M | Số cấu kiện |  | công thức | 1 | `=+T10` | [T] |
| N | Tổng số thanh |  | công thức | 2 | `=+L10*M10` | [Số thanh trong 1 Cấu kiện]*[Số cấu kiện] |
| O | Tổng chiều dài (m) |  | công thức | 46.5 | `=+K10*N10/1000` | [Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000 |
| P | Trọng lượng riêng / (Kg) |  | công thức | 3.853 | `=0.25*3.1415926*(C10/1000)^2*7850` | 0.25*3.1415926*([D (mm)]/1000)^2*7850 |
| Q | Khối lượng (Kg) |  | công thức | 179.2 | `=+O10*P10` | [Tổng chiều dài (m)]*[Trọng lượng riêng / (Kg)] |
| S |  |  | nhập | B1.1 |  |  |
| T |  |  | nhập | 1 |  |  |

**Các mục/cấu kiện có trong sheet (cột B):** 1A; 1B; 1C; 1D; 2*; 2B; 3*; CT1; CT2

## Sheet: Thép cột vuông

- Hàng tiêu đề: 5–9; dòng mẫu phân tích: **10** (cấu kiện: `1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Ký hiệu |  | nhập | 1 |  |  |
| C | D (mm) |  | nhập | 25 |  |  |
| F | Hình dạng |  | công thức | 6500 | `=U10+40*C10` | [U]+40*[D (mm)] |
| I | Số lượng mối nối |  | công thức | 0 | `=IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))` | IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700)) |
| J | Chiều dài mối nối |  | công thức | 1000 | `=40*C10` | 40*[D (mm)] |
| K | Chiều dài 1 thanh (mm) |  | công thức | 6500 | `=+SUM(D9:H11)+I10*J10` | SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối] |
| L | Số thanh trong 1 Cấu kiện |  | nhập | 4 |  |  |
| M | Số cấu kiện |  | công thức | 3 | `=+T10` | [T] |
| N | Tổng số thanh |  | công thức | 12 | `=+L10*M10` | [Số thanh trong 1 Cấu kiện]*[Số cấu kiện] |
| O | Tổng chiều dài (m) |  | công thức | 78 | `=+K10*N10/1000` | [Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000 |
| P | Trọng lượng riêng / (Kg) |  | công thức | 3.853 | `=0.25*3.1415926*(C10/1000)^2*7850` | 0.25*3.1415926*([D (mm)]/1000)^2*7850 |
| Q | Khối lượng (Kg) |  | công thức | 300.6 | `=+O10*P10` | [Tổng chiều dài (m)]*[Trọng lượng riêng / (Kg)] |
| S |  |  | nhập | C1 |  |  |
| T |  |  | nhập | 3 |  |  |
| U |  |  | nhập | 5500 |  |  |

**Các mục/cấu kiện có trong sheet (cột B):** 1A; CT1; 2A; CT; TỔNG CỘNG:

## Sheet: Cột tròn

- Hàng tiêu đề: 5–9; dòng mẫu phân tích: **10** (cấu kiện: `1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Ký hiệu |  | nhập | 1 |  |  |
| C | D (mm) |  | nhập | 20 |  |  |
| F | Hình dạng |  | công thức | 5800 | `=U10+40*C10` | [U]+40*[D (mm)] |
| I | Số lượng mối nối |  | công thức | 0 | `=IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))` | IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700)) |
| J | Chiều dài mối nối |  | công thức | 800 | `=40*C10` | 40*[D (mm)] |
| K | Chiều dài 1 thanh (mm) |  | công thức | 5800 | `=+SUM(D9:H11)+I10*J10` | SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối] |
| L | Số thanh trong 1 Cấu kiện |  | nhập | 4 |  |  |
| M | Số cấu kiện |  | công thức | 6 | `=+T10` | [T] |
| N | Tổng số thanh |  | công thức | 24 | `=+L10*M10` | [Số thanh trong 1 Cấu kiện]*[Số cấu kiện] |
| O | Tổng chiều dài (m) |  | công thức | 139.2 | `=+K10*N10/1000` | [Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000 |
| P | Trọng lượng riêng / (Kg) |  | công thức | 2.466 | `=0.25*3.1415926*(C10/1000)^2*7850` | 0.25*3.1415926*([D (mm)]/1000)^2*7850 |
| Q | Khối lượng (Kg) |  | công thức | 343.3 | `=+O10*P10` | [Tổng chiều dài (m)]*[Trọng lượng riêng / (Kg)] |
| S |  |  | nhập | C8 |  |  |
| T |  |  | nhập | 6 |  |  |
| U |  |  | nhập | 5000 |  |  |

**Các mục/cấu kiện có trong sheet (cột B):** Thép buộc

## Sheet: Thép Vách

- Hàng tiêu đề: 5–8; dòng mẫu phân tích: **9** (cấu kiện: `1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Ký hiệu |  | nhập | 1 |  |  |
| C | D (mm) |  | nhập | 20 |  |  |
| F | Hình dạng |  | nhập | 4100 |  |  |
| I | Số lượng mối nối |  | công thức | 0 | `=IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))` | IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700)) |
| J | Chiều dài mối nối |  | công thức | 800 | `=40*C9` | 40*[D (mm)] |
| K | Chiều dài 1 thanh  / (mm) |  | công thức | 4100 | `=SUM(D8:H10)+I9*J9` | SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối] |
| L | Số thanh trong một cấu kiện |  | nhập | 48 |  |  |
| M | Số cấu kiện |  | công thức | 1 | `=+T9` | [T] |
| N | Tổng số thanh |  | công thức | 48 | `=L9*M9` | [Số thanh trong một cấu kiện]*[Số cấu kiện] |
| O | Tổng chiều dài (m) |  | công thức | 196.8 | `=N9*K9/10^3` | [Tổng số thanh]*[Chiều dài 1 thanh  / (mm)]/10^3 |
| P | Trọng lượng riêng |  | công thức | 2.466 | `=0.25*3.1415926*(C9/1000)^2*7850` | 0.25*3.1415926*([D (mm)]/1000)^2*7850 |
| Q | Khối lượng (kg) |  | công thức | 485.3 | `=P9*O9` | [Trọng lượng riêng]*[Tổng chiều dài (m)] |
| S |  |  | nhập | VTM |  |  |
| T |  |  | nhập | 1 |  |  |

**Các mục/cấu kiện có trong sheet (cột B):** 1A; 2A; 1B; 2B; 1C; 2C; 3A; 4A; 3B; 4B; D1; D2; D3; D4; D5; D6; D7; D8; D9; D10; D11; N1; N2; C1; C2; GC; Khối lượng thép buộc

## Sheet: Thép dầm

- Hàng tiêu đề: 6–10; dòng mẫu phân tích: **11** (cấu kiện: `1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Ký hiệu |  | nhập | 1 |  |  |
| C | D (mm) |  | nhập | 22 |  |  |
| E | Hình dạng |  | công thức | 770 | `=35*C11` | 35*[D (mm)] |
| F | Hình dạng |  | nhập | 20500 |  |  |
| G | Hình dạng |  | công thức | 770 | `=+E11` | [Hình dạng·E] |
| I | Số lượng mối nối |  | công thức | 1 | `=IF(SUM(D10:H12)=11700,0,INT(SUM(D10:H12)/11700))` | IF(SUM(D10:H12)=11700,0,INT(SUM(D10:H12)/11700)) |
| J | Chiều dài mối nối |  | công thức | 880 | `=40*C11` | 40*[D (mm)] |
| K | Chiều dài 1 thanh (mm) |  | công thức | 22920 | `=+SUM(D10:H12)+I11*J11` | SUM(D10:H12)+[Số lượng mối nối]*[Chiều dài mối nối] |
| L | Số thanh trong 1 Cấu kiện |  | nhập | 2 |  |  |
| M | Số cấu kiện |  | công thức | 1 | `=+T11` | [T] |
| N | Tổng số thanh |  | công thức | 2 | `=+L11*M11` | [Số thanh trong 1 Cấu kiện]*[Số cấu kiện] |
| O | Tổng chiều dài (m) |  | công thức | 45.84 | `=+K11*N11/1000` | [Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000 |
| P | Trọng lượng riêng / (Kg) |  | công thức | 2.984 | `=0.25*3.1415926*(C11/1000)^2*7850` | 0.25*3.1415926*([D (mm)]/1000)^2*7850 |
| Q | Khối lượng (Kg) |  | công thức | 136.8 | `=+O11*P11` | [Tổng chiều dài (m)]*[Trọng lượng riêng / (Kg)] |
| S |  |  | nhập | B2.1 |  |  |
| T |  |  | nhập | 1 |  |  |

**Các mục/cấu kiện có trong sheet (cột B):** 1A; 1B; 1C; 1D; 1E; 1D'; 2*; 2A; 2B; 2C; 3*; CT1; CT2

## Sheet: Thép sàn

- Hàng tiêu đề: 5–9; dòng mẫu phân tích: **10** (cấu kiện: `B1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Ký hiệu |  | nhập | B1 |  |  |
| C | D (mm) |  | nhập | 10 |  |  |
| E | Hình dạng |  | công thức | 400 | `=40*C10` | 40*[D (mm)] |
| F | Hình dạng |  | nhập | 80300 |  |  |
| G | Hình dạng |  | công thức | 400 | `=+E10` | [Hình dạng·E] |
| I | Số lượng mối nối |  | công thức | 6 | `=INT(SUM(D9:H11)/11700)` | INT(SUM(D9:H11)/11700) |
| J | Chiều dài mối nối |  | công thức | 400 | `=40*C10` | 40*[D (mm)] |
| K | Chiều dài 1 thanh (mm) |  | công thức | 83500 | `=+SUM(D9:H11)+I10*J10` | SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối] |
| L | Số thanh trong 1 Cấu kiện |  | công thức | 144 | `=+ROUND((F13-300*8)/200+6,0)` | ROUND((F13-300*8)/200+6,0) |
| M | Số cấu kiện |  | nhập | 1 |  |  |
| N | Tổng số thanh |  | công thức | 144 | `=+L10*M10` | [Số thanh trong 1 Cấu kiện]*[Số cấu kiện] |
| O | Tổng chiều dài (m) |  | công thức | 12024 | `=+K10*N10/1000` | [Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000 |
| P | Trọng lượng riêng / (Kg) |  | công thức | 0.6165 | `=0.25*3.1415926*(C10/1000)^2*7850` | 0.25*3.1415926*([D (mm)]/1000)^2*7850 |
| Q | Khối lượng (Kg) |  | công thức | 7413 | `=+O10*P10` | [Tổng chiều dài (m)]*[Trọng lượng riêng / (Kg)] |

**Các mục/cấu kiện có trong sheet (cột B):** B1; B2; T1; T2; Vai ngựa kê sàn; GC cột giữa; GC cột biên; *

## Sheet: Cầu thang

- Hàng tiêu đề: 5–9; dòng mẫu phân tích: **10** (cấu kiện: `1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Ký hiệu |  | nhập | 1 |  |  |
| C | D (mm) |  | nhập | 12 |  |  |
| E | Hình dạng |  | công thức | 420 | `=35*C10` | 35*[D (mm)] |
| H | Hình dạng |  | công thức | 420 | `=+E10` | [Hình dạng·E] |
| I | Số lượng mối nối |  | công thức | 0 | `=IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))` | IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700)) |
| J | Chiều dài mối nối |  | công thức | 480 | `=40*C10` | 40*[D (mm)] |
| K | Chiều dài 1 thanh (mm) |  | công thức | 4090 | `=+SUM(D9:H11)+I10*J10` | SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối] |
| L | Số thanh trong 1 Cấu kiện |  | công thức | 13 | `=+ROUND((F16)/120+1,0)` | ROUND((F16)/120+1,0) |
| M | Số cấu kiện |  | công thức | 1 | `=+T10` | [T] |
| N | Tổng số thanh |  | công thức | 13 | `=+L10*M10` | [Số thanh trong 1 Cấu kiện]*[Số cấu kiện] |
| O | Tổng chiều dài (m) |  | công thức | 53.17 | `=+K10*N10/1000` | [Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000 |
| P | Trọng lượng riêng / (Kg) |  | công thức | 0.8878 | `=0.25*3.1415926*(C10/1000)^2*7850` | 0.25*3.1415926*([D (mm)]/1000)^2*7850 |
| Q | Khối lượng (Kg) |  | công thức | 47.21 | `=+O10*P10` | [Tổng chiều dài (m)]*[Trọng lượng riêng / (Kg)] |
| S |  |  | nhập | Cầu thang  |  |  |
| T |  |  | nhập | 1 |  |  |

**Các mục/cấu kiện có trong sheet (cột B):** Vai ngựa; 1A; 2A; Cầu thang số: 1

## Sheet: Thép Trụ, giằng, LT

- Hàng tiêu đề: 5–8; dòng mẫu phân tích: **9** (cấu kiện: `1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Ký hiệu |  | nhập | 1 |  |  |
| C | D (mm) |  | nhập | 12 |  |  |
| F | Hình dạng |  | công thức | 4900 | `=+U9+200*2` | [U]+200*2 |
| I | Số lượng mối nối |  | công thức | 0 | `=IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))` | IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700)) |
| J | Chiều dài mối nối |  | công thức | 480 | `=40*C9` | 40*[D (mm)] |
| K | Chiều dài 1 thanh (mm) |  | công thức | 4900 | `=+SUM(D8:H10)+I9*J9` | SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối] |
| L | Số thanh trong 1 Cấu kiện |  | nhập | 4 |  |  |
| M | Số cấu kiện |  | công thức | 25 | `=+T9` | [T] |
| N | Tổng số thanh |  | công thức | 100 | `=+L9*M9` | [Số thanh trong 1 Cấu kiện]*[Số cấu kiện] |
| O | Tổng chiều dài (m) |  | công thức | 490 | `=+K9*N9/1000` | [Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000 |
| P | Trọng lượng riêng / (Kg) |  | công thức | 0.8878 | `=0.25*3.1415926*(C9/1000)^2*7850` | 0.25*3.1415926*([D (mm)]/1000)^2*7850 |
| Q | Khối lượng (Kg) |  | công thức | 435 | `=+O9*P9` | [Tổng chiều dài (m)]*[Trọng lượng riêng / (Kg)] |
| S |  |  | nhập | TR1 |  |  |
| T |  |  | nhập | 25 |  |  |
| U |  |  | nhập | 4500 |  |  |

**Các mục/cấu kiện có trong sheet (cột B):** Thép buộc

## Sheet: Thép bể nước

- Hàng tiêu đề: 5–8; dòng mẫu phân tích: **9** (cấu kiện: `1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Ký hiệu |  | nhập | 1 |  |  |
| C | D (mm) |  | nhập | 18 |  |  |
| E | Hình dạng kích thước |  | nhập | 200 |  |  |
| F | Hình dạng kích thước |  | công thức | 4020 | `=+U9-V9-W9` | [U]-[V]-[W] |
| G | Hình dạng kích thước |  | nhập | 200 |  |  |
| I | Số lượng mối nối |  | công thức | 0 | `=IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))` | IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700)) |
| J | Chiều dài mối nối |  | công thức | 720 | `=40*C9` | 40*[D (mm)] |
| K | Chiều dài 1 thanh (mm) |  | công thức | 4420 | `=+SUM(D8:H10)+I9*J9` | SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối] |
| L | Số thanh trong 1 Cấu kiện |  | nhập | 4 |  |  |
| M | Số cấu kiện |  | công thức | 2 | `=+T9` | [T] |
| N | Tổng số thanh |  | công thức | 8 | `=+L9*M9` | [Số thanh trong 1 Cấu kiện]*[Số cấu kiện] |
| O | Tổng chiều dài (m) |  | công thức | 35.36 | `=+K9*N9/1000` | [Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000 |
| P | Trọng lượng riêng / (Kg) |  | công thức | 1.998 | `=0.25*3.1415926*(C9/1000)^2*7850` | 0.25*3.1415926*([D (mm)]/1000)^2*7850 |
| Q | Khối lượng (Kg) |  | công thức | 70.63 | `=+O9*P9` | [Tổng chiều dài (m)]*[Trọng lượng riêng / (Kg)] |
| S |  |  | nhập | F1 |  |  |
| T |  |  | nhập | 2 |  |  |
| U |  |  | công thức | 4170 | `=600+3570` | 600+3570 |
| V |  |  | nhập | 100 |  |  |
| W |  |  | nhập | 50 |  |  |

**Các mục/cấu kiện có trong sheet (cột B):** 1*; 2*; CT1; 3*; Trừ nắp

## Sheet: Thép bể phốt

- Hàng tiêu đề: 6–10; dòng mẫu phân tích: **11** (cấu kiện: `1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Ký hiệu |  | nhập | 1 |  |  |
| C | D (mm) |  | nhập | 10 |  |  |
| E | Hình dạng |  | nhập | 200 |  |  |
| F | Hình dạng |  | nhập | 2440 |  |  |
| G | Hình dạng |  | công thức | 200 | `=+E11` | [Hình dạng·E] |
| I | Số lượng mối nối |  | công thức | 0 | `=IF(SUM(D10:H12)=11700,0,INT(SUM(D10:H12)/11700))` | IF(SUM(D10:H12)=11700,0,INT(SUM(D10:H12)/11700)) |
| J | Chiều dài mối nối |  | công thức | 400 | `=40*C11` | 40*[D (mm)] |
| K | Chiều dài 1 thanh (mm) |  | công thức | 2840 | `=+SUM(D10:H12)+I11*J11` | SUM(D10:H12)+[Số lượng mối nối]*[Chiều dài mối nối] |
| L | Số thanh trong 1 Cấu kiện |  | công thức | 22 | `=+ROUND(F14/150+1,0)*2` | ROUND(F14/150+1,0)*2 |
| M | Số cấu kiện |  | công thức | 1 | `=+T11` | [T] |
| N | Tổng số thanh |  | công thức | 22 | `=+L11*M11` | [Số thanh trong 1 Cấu kiện]*[Số cấu kiện] |
| O | Tổng chiều dài (m) |  | công thức | 62.48 | `=+K11*N11/1000` | [Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000 |
| P | Trọng lượng riêng / (Kg) |  | công thức | 0.6165 | `=0.25*3.1415926*(C11/1000)^2*7850` | 0.25*3.1415926*([D (mm)]/1000)^2*7850 |
| Q | Khối lượng (Kg) |  | công thức | 38.52 | `=+O11*P11` | [Tổng chiều dài (m)]*[Trọng lượng riêng / (Kg)] |
| T |  |  | nhập | 1 |  |  |

**Các mục/cấu kiện có trong sheet (cột B):** Vai ngựa

## Sheet: Hàng rào

- Hàng tiêu đề: 5–8; dòng mẫu phân tích: **9** (cấu kiện: `1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Ký hiệu |  | nhập | 1 |  |  |
| C | D (mm) |  | nhập | 12 |  |  |
| E | Hình dạng |  | nhập | 200 |  |  |
| F | Hình dạng |  | công thức | 1400 | `=+U9-V9-W9` | [U]-[V]-[W] |
| G | Hình dạng |  | công thức | 200 | `=+E9` | [Hình dạng·E] |
| I | Số lượng mối nối |  | công thức | 0 | `=IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))` | IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700)) |
| J | Chiều dài mối nối |  | công thức | 480 | `=40*C9` | 40*[D (mm)] |
| K | Chiều dài 1 thanh (mm) |  | công thức | 1800 | `=+SUM(D8:H10)+I9*J9` | SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối] |
| L | Số thanh trong 1 Cấu kiện |  | nhập | 4 |  |  |
| M | Số cấu kiện |  | công thức | 37 | `=+T9` | [T] |
| N | Tổng số thanh |  | công thức | 148 | `=+L9*M9` | [Số thanh trong 1 Cấu kiện]*[Số cấu kiện] |
| O | Tổng chiều dài (m) |  | công thức | 266.4 | `=+K9*N9/1000` | [Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000 |
| P | Trọng lượng riêng / (Kg) |  | công thức | 0.8878 | `=0.25*3.1415926*(C9/1000)^2*7850` | 0.25*3.1415926*([D (mm)]/1000)^2*7850 |
| Q | Khối lượng (Kg) |  | công thức | 236.5 | `=+O9*P9` | [Tổng chiều dài (m)]*[Trọng lượng riêng / (Kg)] |
| S |  |  | nhập | M1 |  |  |
| T |  |  | nhập | 37 |  |  |
| U |  |  | nhập | 1500 |  |  |
| V |  |  | nhập | 50 |  |  |
| W |  |  | nhập | 50 |  |  |

**Các mục/cấu kiện có trong sheet (cột B):** Thép buộc

## Sheet: Hố ga (New)

- Hàng tiêu đề: 5–9; dòng mẫu phân tích: **10** (cấu kiện: `B1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Ký hiệu |  | nhập | B1 |  |  |
| C | D (mm) |  | nhập | 10 |  |  |
| E | Hình dạng kích thước |  | công thức | 200 | `=20*C10` | 20*[D (mm)] |
| F | Hình dạng kích thước |  | công thức | 1040 | `=+U9-30*2` | U9-30*2 |
| G | Hình dạng kích thước |  | công thức | 200 | `=+E10` | [Hình dạng kích thước·E] |
| I | Số lượng mối nối |  | công thức | 0 | `=IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))` | IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700)) |
| J | Chiều dài mối nối |  | công thức | 400 | `=40*C10` | 40*[D (mm)] |
| K | Chiều dài 1 thanh (mm) |  | công thức | 1440 | `=+SUM(D9:H11)+I10*J10` | SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối] |
| L | Số thanh trong 1 Cấu kiện |  | công thức | 5 | `=+ROUND((V9-200*2)/200+1,0)` | ROUND((V9-200*2)/200+1,0) |
| M | Số cấu kiện |  | công thức | 5 | `=+T9` | T9 |
| N | Tổng số thanh |  | công thức | 25 | `=+L10*M10` | [Số thanh trong 1 Cấu kiện]*[Số cấu kiện] |
| O | Tổng chiều dài (m) |  | công thức | 36 | `=+K10*N10/1000` | [Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000 |
| P | Trọng lượng riêng / (Kg) |  | công thức | 0.6165 | `=0.25*3.1415926*(C10/1000)^2*7850` | 0.25*3.1415926*([D (mm)]/1000)^2*7850 |
| Q | Khối lượng (Kg) |  | công thức | 22.2 | `=+O10*P10` | [Tổng chiều dài (m)]*[Trọng lượng riêng / (Kg)] |

**Các mục/cấu kiện có trong sheet (cột B):** B1; B2; T1; T2; CT1

## Sheet: ket cau thep

- Hàng tiêu đề: 6–8; dòng mẫu phân tích: **9** (cấu kiện: `Cánh 1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Tên gọi |  | nhập | Cánh 1 |  |  |
| D | Ký hiệu |  | nhập | PL12 |  |  |
| E | Chiều /   dày (mm)/ KL riêng (kg/m) |  | công thức | 12 | `=IF(D9>0,RIGHT(D9,LEN(D9)-2),0)` | IF([Ký hiệu]>0,RIGHT([Ký hiệu],LEN([Ký hiệu])-2),0) |
| F | Chiều /  rộng/ Chu vi tiết diện (mm) |  | nhập | 200 |  |  |
| G | Chiều  / dài (mm) |  | nhập | 10238 |  |  |
| H | Số lượng / cho 1 cấu kiện |  | nhập | 1 |  |  |
| I | Khối lượng /   1 cấu kiện (kg) |  | công thức | 192.9 | `=IF(LEFT(D9,2)="PL",E9*F9*G9*7.85*H9/1000000,E9*G9*H9/1000)` | IF(LEFT([Ký hiệu],2)="PL",[Chiều /   dày (mm)/ KL riêng (kg/m)]*[Chiều /  rộng/ Chu vi tiết diện (mm)]*[Chiều  / dài (mm)]*7.85*[Số lượng / cho 1 cấu kiện]/1000000,[Chiều /   dày (mm)/ KL riêng (kg/m)]*[Chiều  / dài (mm)]*[Số lượng / cho 1 cấu kiện]/1000) |
| J | Số cấu /  kiện |  | công thức | 1 | `=J8` | J8 |
| K | Tổng khối lượng /  (kg) |  | công thức | 192.9 | `=I9*J9` | [Khối lượng /   1 cấu kiện (kg)]*[Số cấu /  kiện] |
| L | Diện tích /  sơn (m2) |  | công thức | 4.095 | `=IF(LEFT(D9,1)="D",F9*G9*H9*J9/1000000,F9*G9*H9*J9*2/1000000)` | IF(LEFT([Ký hiệu],1)="D",[Chiều /  rộng/ Chu vi tiết diện (mm)]*[Chiều  / dài (mm)]*[Số lượng / cho 1 cấu kiện]*[Số cấu /  kiện]/1000000,[Chiều /  rộng/ Chu vi tiết diện (mm)]*[Chiều  / dài (mm)]*[Số lượng / cho 1 cấu kiện]*[Số cấu /  kiện]*2/1000000) |

**Các mục/cấu kiện có trong sheet (cột B):** Cánh 1; Bụng 2; Gân bụng S1; Gân bụng S1a; Bản mã đế MLK1; Bản mã đỉnh MLK2; Gân mã đỉnh S7; Mã giằng S2; Mã giằng S3; Mã giằng S4; Mã giằng S5; Mã giằng S6; Bu lông móng; CH1a; CH1b; CH1c; CH2; Gân bụng S2; CH3; SC1; Cánh 1a; Gân bụng S3; Gân bụng S4; Gân bụng S5; Gân bụng S5a; Gân mã đế S9; Gân mã đế S10; Gân mã đế S11; Mã giằng S7; Mã giằng S7a; Mã giằng S8; SC1a; SC1b; Gân mã đế S8; SC1c; SC2; SC2a; SC2b; Gân mã đế S7; SC2c; CA1; Bịt đầu cột S1a; Mã liên kết D1; Gân mã S4; Bu lông liên kết; KÈO THÉP; VK1; Bịt đuôi kèo 1b; Mã nối kèo MLK2; Gân mã nối S10; Mã chống xà gồ S7; Mã xà gồ S5; Gân mã xà gồ S5; Bọ xà gồ; Bọ xà gồ - gân; VK3; Gân mã nối S11; VK2, VK2A; Mã nối kèo MLK1; Gân mã nối S3