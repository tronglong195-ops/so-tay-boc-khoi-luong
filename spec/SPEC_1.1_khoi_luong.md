# SPEC file 1.1 — Bảng tính khối lượng (bê tông, ván khuôn, đào đắp, hoàn thiện)


## Sheet: San lấp MB

- Hàng tiêu đề: 5–6; dòng mẫu phân tích: **7**

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| P | Hao hụt |  | nhập | 1 |  |  |
| Q | Bóc lớp hữu cơ | (m3) | công thức | 0 | `=+O7*J7` | [S san lấp]*[Lớp hữu cơ] |
| R | San lấp / Đất / cát | (m3) | công thức | 0 | `=+IF(N7>0,O7*N7*P7,0)` | IF([H san lấp]>0,[S san lấp]*[H san lấp]*[Hao hụt],0) |
| S | Đào đất | (m3) | công thức | 0 | `=+IF(N7<0,-O7*N7,0)` | IF([H san lấp]<0,-[S san lấp]*[H san lấp],0) |

**Các mục/cấu kiện có trong sheet (cột B):** Tổng cộng

## Sheet: Cọc nhồi

- Hàng tiêu đề: 6–10; dòng mẫu phân tích: **11** (cấu kiện: `CN100 - LOẠI A`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| A | TT |  | nhập | 1 |  |  |
| B | Cấu kiện |  | nhập | CN100 - LOẠI A |  |  |
| C | Cấu kiện |  | công thức | D=1000 | `="D="&E11*1000&""` | "D="&[D]*1000&"" |
| D | Kích thước hình học › L / (Tim cọc) / | (m) | nhập | 42 |  |  |
| E | Kích thước hình học › D | (m) | nhập | 1 |  |  |
| F | Kích thước hình học › L1 / (Đập đầu cọc) | (m) | nhập | 1 |  |  |
| G | Kích thước hình học › L2 / (Cát đầu cọc) | (m) | công thức | 8.5 | `=7.2+1.3` | 7.2+1.3 |
| H | Kích thước hình học › L3 / (ống vách) | (m) | nhập | 6.3 |  |  |
| I | Con kê | (Cái) | công thức | 52 | `=13*4` | 13*4 |
| J | Ống thí nghiệm › D60 › L | (m) | công thức | 40.3 | `=39.3+1` | 39.3+1 |
| K | Ống thí nghiệm › D60 › SL | (cái) | nhập | 2 |  |  |
| L | Ống thí nghiệm › D110 › L | (m) | nhập | 39.3 |  |  |
| M | Ống thí nghiệm › D110 › SL | (cái) | nhập | 1 |  |  |
| N | Ống thí nghiệm › Ống nối  / D64 | (cái) | công thức | 12 | `=6*2` | 6*2 |
| O | Ống thí nghiệm › Ống nối  / D115 | (cái) | nhập | 6 |  |  |
| P | K.Lượng 1 cấu kiện › Bê tông | (m3) | công thức | 26.31 | `=+(PI()*E11^2)/4*(D11-G11)` | (PI()*[D]^2)/4*([L / (Tim cọc) /]-[L2 / (Cát đầu cọc)]) |
| Q | K.Lượng 1 cấu kiện › ống vách | (m2) | công thức | 19.79 | `=+PI()*E11*H11` | PI()*[D]*[L3 / (ống vách)] |
| R | K.Lượng 1 cấu kiện › Bentonite | (m3) | công thức | 32.99 | `=+(PI()*E11^2)/4*(D11)` | (PI()*[D]^2)/4*([L / (Tim cọc) /]) |
| S | K.Lượng 1 cấu kiện › Đập dầu cọc | (m3) | công thức | 0.7854 | `=+(PI()*E11^2)/4*F11` | (PI()*[D]^2)/4*[L1 / (Đập đầu cọc)] |
| T | K.Lượng 1 cấu kiện › Vận chuyển đất đào | (m3) | công thức | 43.98 | `=+R11+R11/3` | [K.Lượng 1 cấu kiện Bentonite]+[K.Lượng 1 cấu kiện Bentonite]/3 |
| U | K.Lượng 1 cấu kiện › Đổ cát | (m3) | công thức | 6.676 | `=+(PI()*E11^2)/4*(G11)` | (PI()*[D]^2)/4*([L2 / (Cát đầu cọc)]) |
| V | Số lượng |  | nhập | 3 |  |  |
| W | Hao hụt / Vật liệu |  | công thức | 1 | `=+Móng!$AN$12` | Móng!$AN$12 |
| X | Khối lượng toàn bộ › Bê tông | (m3) | công thức | 78.93 | `=+P11*V11*W11` | [K.Lượng 1 cấu kiện Bê tông]*[Số lượng]*[Hao hụt / Vật liệu] |
| Y | Khối lượng toàn bộ › Con kê | (cái) | công thức | 156 | `=+I11*V11` | [Con kê·I]*[Số lượng] |
| Z | Khối lượng toàn bộ › ống vách | (m2) | công thức | 59.38 | `=+Q11*V11` | [K.Lượng 1 cấu kiện ống vách]*[Số lượng] |
| AA | Khối lượng toàn bộ › Bentonite | (m3) | công thức | 98.96 | `=+R11*V11` | [K.Lượng 1 cấu kiện Bentonite]*[Số lượng] |
| AB | Khối lượng toàn bộ › Đập dầu cọc | (m3) | công thức | 2.356 | `=+S11*V11` | [K.Lượng 1 cấu kiện Đập dầu cọc]*[Số lượng] |
| AC | Khối lượng toàn bộ › Đất đào | (m3) | công thức | 131.9 | `=+T11*V11` | [Vận chuyển đất đào]*[Số lượng] |
| AD | Cốt thép › Hàm lượng | (kg/m3) | nhập | 45 |  |  |
| AE | Cốt thép › Trọng lượng | (kg) | công thức | 3552 | `=+X11*AD11*W11` | [Khối lượng toàn bộ Bê tông]*[Hàm lượng]*[Hao hụt / Vật liệu] |
| AF | CỌC › D › 600 | (m) | công thức | 0 | `=+IF(E11*1000=$AF$8,D11*V11,0)` | IF([D]*1000=$AF$8,[L / (Tim cọc) /]*[Số lượng],0) |
| AG | CỌC › D › 800 | (m) | công thức | 0 | `=+IF(E11*1000=$AG$8,D11*V11,0)` | IF([D]*1000=$AG$8,[L / (Tim cọc) /]*[Số lượng],0) |
| AH | CỌC › D › 1000 | (m) | công thức | 126 | `=+IF(E11*1000=$AH$8,D11*V11,0)` | IF([D]*1000=$AH$8,[L / (Tim cọc) /]*[Số lượng],0) |
| AI | CỌC › D › 1200 | (m) | công thức | 0 | `=+IF(E11*1000=$AI$8,D11*V11,0)` | IF([D]*1000=$AI$8,[L / (Tim cọc) /]*[Số lượng],0) |
| AJ | CỌC › D › 1500 | (m) | công thức | 0 | `=+IF(E11*1000=$AJ$8,D11*V11,0)` | IF([D]*1000=$AJ$8,[L / (Tim cọc) /]*[Số lượng],0) |
| AK | CỌC › D › 2000 | (m) | công thức | 0 | `=+IF(E11*1000=$AK$8,D11*V11,0)` | IF([D]*1000=$AK$8,[L / (Tim cọc) /]*[Số lượng],0) |
| AL | Thép cho ống vách › Chiều dày ống vách | (m) | nhập | 0.012 |  |  |
| AM | Thép cho ống vách › Trọng lượng | (tấn) | công thức | 5.593 | `=+Z11*AL11*7850/1000` | [Khối lượng toàn bộ ống vách]*[Chiều dày ống vách]*7850/1000 |
| AN | Ống thí nghiệm › Ống thép đen / D60 | (m) | công thức | 241.8 | `=+J11*K11*V11` | [D60 L]*[D60 SL]*[Số lượng] |
| AO | Ống thí nghiệm › Ống thép đen / D110 | (m) | công thức | 117.9 | `=+L11*M11*V11` | [D110 L]*[D110 SL]*[Số lượng] |
| AP | Ống thí nghiệm › Ống nối / D64 | (cái) | công thức | 36 | `=+N11*V11` | [Ống nối  / D64]*[Số lượng] |
| AQ | Ống thí nghiệm › Ống nối / D115 | (cái) | công thức | 18 | `=+O11*V11` | [Ống nối  / D115]*[Số lượng] |

**Các mục/cấu kiện có trong sheet (cột B):** CN100 - LOẠI A; CN100 - LOẠI B; CN100 - LOẠI C; CN120 - LOẠI A; CN120 - LOẠI B; CN120 - LOẠI C; CN150 - LOẠI 1; CN120 - LOẠI 2; CN120 - LOẠI 3; CN120 - LOẠI 4; CN120 - LOẠI 5

## Sheet: Cọc vuông Bê tông

- Hàng tiêu đề: 7–10; dòng mẫu phân tích: **11** (cấu kiện: `Đoạn P1 (Có mũi)`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| A | TT |  | nhập | 1 |  |  |
| B | Cấu kiện |  | nhập | Đoạn P1 (Có mũi) |  |  |
| C | Kích thước hình học › L | (m) | nhập | 10 |  |  |
| D | Kích thước hình học › W | (m) | nhập | 0.25 |  |  |
| E | Kích thước hình học › H | (m) | công thức | 0.25 | `=+D11` | [W] |
| F | Kích thước hình học › Mũi cọc | (m) | nhập | 0.3 |  |  |
| G | Kích thước hình học › H1 / Đập đầu cọc | (m) | nhập | 0.5 |  |  |
| H | Số mặt  / Be ván khuôn |  | nhập | 3 |  |  |
| I | K.Lượng /1 cấu kiện › Bê tông | (m3) | công thức | 0.6156 | `=+IF(F11>0,(C11-F11)*D11*E11+1/2*D11*E11*F11,(C11-F11)*D11*E11)` | IF([Mũi cọc]>0,([L]-[Mũi cọc])*[W]*[H]+1/2*[W]*[H]*[Mũi cọc],([L]-[Mũi cọc])*[W]*[H]) |
| J | K.Lượng /1 cấu kiện › Ván khuôn | (m2) | công thức | 7.45 | `=+IF(F11>0,(D11*H11)*(C11-F11)+1/2*F11*3*D11+D11*E11,(D11*H11)*(C11-F11)+D11*E11*2)` | IF([Mũi cọc]>0,([W]*[Số mặt  / Be ván khuôn])*([L]-[Mũi cọc])+1/2*[Mũi cọc]*3*[W]+[W]*[H],([W]*[Số mặt  / Be ván khuôn])*([L]-[Mũi cọc])+[W]*[H]*2) |
| K | K.Lượng /1 cấu kiện › Đập đầu cọc | (m3) | công thức | 0.03125 | `=+D11*E11*G11` | [W]*[H]*[H1 / Đập đầu cọc] |
| L | Number/ / Số lượng |  | nhập | 3 |  |  |
| M | Hao hụt / Vật liệu |  | công thức | 1 | `=+Móng!$AN$12` | Móng!$AN$12 |
| N | Khối lượng toàn bộ › Tính | (m) | công thức | 30 | `=+IF(C11>0,C11*L11,0)` | IF([L]>0,[L]*[Number/ / Số lượng],0) |
| O | Khối lượng toàn bộ › Bê tông | (m3) | công thức | 1.847 | `=+IF(C11>0,I11*L11*M11,0)` | IF([L]>0,[K.Lượng /1 cấu kiện Bê tông]*[Number/ / Số lượng]*[Hao hụt / Vật liệu],0) |
| P | Khối lượng toàn bộ › Ván khuôn | (m2) | công thức | 22.35 | `=+IF(C11>0,J11 *L11,0)` | IF([L]>0,[K.Lượng /1 cấu kiện Ván khuôn] *[Number/ / Số lượng],0) |
| Q | Khối lượng toàn bộ › Đập đầu cọc | (m3) | công thức | 0.09375 | `=+K11*L11*M11` | [K.Lượng /1 cấu kiện Đập đầu cọc]*[Number/ / Số lượng]*[Hao hụt / Vật liệu] |
| R | Cốt thép › Hàm lượng | (kg/m3) | nhập | 220 |  |  |
| S | Cốt thép › Trọng lượng | (kg) | công thức | 406.3 | `=+O11*R11*M11` | [Khối lượng toàn bộ Bê tông]*[Hàm lượng]*[Hao hụt / Vật liệu] |

**Các mục/cấu kiện có trong sheet (cột B):** Đoạn P1 (Có mũi); Đoạn P2 (Thân); Đoạn P3 (Thân); Cọc B: 250x250

## Sheet: Cọc Barret

- Hàng tiêu đề: 6–11; dòng mẫu phân tích: **12** (cấu kiện: `BR1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| A | TT |  | nhập | 1 |  |  |
| B | Diễn giải |  | nhập | BR1 |  |  |
| D | Kích thước hình học › H | (m) | nhập | 42 |  |  |
| E | Kích thước hình học › W | (m) | nhập | 0.6 |  |  |
| F | Kích thước hình học › L | (m) | nhập | 2.8 |  |  |
| G | Kích thước hình học › Số phụ › W1  / Khớp nối / (Ván khuôn) | (m) | công thức | 1.04 | `=+E12+0.22*2` | [W]+0.22*2 |
| H | Kích thước hình học › Số phụ › L1  / Gioăng chống thấm | (m) | nhập | 10.3 |  |  |
| I | Kích thước hình học › Ống siêu âm › D60x2 › Ống/cọc | (cái) | nhập | 4 |  |  |
| J | Kích thước hình học › Ống siêu âm › D60x2 › Chiều dài ống | (m) | nhập | 42.5 |  |  |
| M | Kích thước hình học › Con kê bê tông › Con kê/m2 | (cái) | nhập | 4 |  |  |
| N | Kích thước hình học › Con kê bê tông › Số lượng | (cái) | công thức | 71 | `=+IF(M12>0,ROUND((E12+F12)*2*D12/M12,0),0)` | IF([Con kê/m2]>0,ROUND(([W]+[L])*2*[H]/[Con kê/m2],0),0) |
| O | Số lượng |  | nhập | 1 |  |  |
| P | Hao hụt |  | công thức | 1 | `=+Móng!$AN$12` | Móng![AN] |
| Q | Khối lượng toàn bộ › Bê tông | (m3) | công thức | 70.56 | `=+D12*E12*F12*O12*P12` | [H]*[W]*[L]*[Số lượng·O]*[Hao hụt] |
| R | Khối lượng toàn bộ › Ván khuôn | (m2) | công thức | 43.68 | `=+D12*G12*O12` | [H]*[W1  / Khớp nối / (Ván khuôn)]*[Số lượng·O] |
| S | Khối lượng toàn bộ › Gioăng chống thấm | (m) | công thức | 10.3 | `=+H12*O12` | [L1  / Gioăng chống thấm]*[Số lượng·O] |
| T | Khối lượng toàn bộ › Ống siêu âm › D60x2 | (m) | công thức | 170 | `=+I12*J12*O12` | [D60x2 Ống/cọc]*[D60x2 Chiều dài ống]*[Số lượng·O] |
| U | Khối lượng toàn bộ › Ống siêu âm › D80x2 | (m) | công thức | 0 | `=+K12*L12*O12` | [D80x2 Ống/cọc]*[D80x2 Chiều dài ống]*[Số lượng·O] |
| V | Khối lượng toàn bộ › Con kê | (cái) | công thức | 71 | `=+N12*O12` | [Con kê bê tông Số lượng]*[Số lượng·O] |
| W | Khối lượng toàn bộ › Cốt thép › Hàm lượng | (kg/m3) | nhập | 140 |  |  |
| X | Khối lượng toàn bộ › Cốt thép › Trọng lượng | (kg) | công thức | 9878 | `=+Q12*W12*P12` | [Bê tông]*[Hàm lượng]*[Hao hụt] |
| Y | Khối lượng toàn bộ › Đào đất › Cao độ hiện trạng | (m) | nhập | -1.5 |  |  |
| Z | Khối lượng toàn bộ › Đào đất › Cao độ  / Đáy cọc | (m) | nhập | -42.3 |  |  |
| AA | Khối lượng toàn bộ › Đào đất › Chiều sâu / đào | (m) | công thức | 40.8 | `=+-Z12+Y12` | -[Cao độ  / Đáy cọc]+[Cao độ hiện trạng] |
| AB | Khối lượng toàn bộ › Đào đất › Khoan  / Đào đất | (m3) | công thức | 68.54 | `=+AA12*E12*F12*O12` | [Chiều sâu / đào]*[W]*[L]*[Số lượng·O] |
| AC | Khối lượng toàn bộ › Đào đất › Bentonit | (m3) | công thức | 68.54 | `=+AB12` | [Khoan  / Đào đất] |
| AD | Khối lượng toàn bộ › Đào đất › Vận chuyển đất | (m3) | công thức | 82.25 | `=+AB12+AC12*$AD$3` | [Khoan  / Đào đất]+[Bentonit]*$AD$3 |
| AE | Ghi chú |  | nhập | Vận chuyển 20% Bentonit |  |  |

**Các mục/cấu kiện có trong sheet (cột B):** BR1; BR2; BR3; BR4; BR5; BR6; BR7; BR8; BR9; BR10; BR11; BR12; TV1; TV2; TV3; TV4; TV5; TV6; TV7; TV8; TV9; Tổng cộng

## Sheet: Móng

- Hàng tiêu đề: 7–11; dòng mẫu phân tích: **12** (cấu kiện: `F1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| A | No. › TT |  | nhập | 1 |  |  |
| B | Items › Cấu kiện |  | nhập | F1 |  |  |
| C | Items › Cấu kiện |  | công thức | FL -3100 | `="FL -"&(AC12-BP12)*1000&""` | "FL -"&([Móng cao]-[Đỉnh móng])*1000&"" |
| D | Number › SL / Móng |  | nhập | 3 |  |  |
| E | Column › Số cổ móng/ / 1móng |  | nhập | 1 |  |  |
| F | Đài Vuông, chữ nhật › L |  | nhập | 3.6 |  |  |
| G | Đài Vuông, chữ nhật › W |  | nhập | 3.332 |  |  |
| H | Đài Vuông, chữ nhật › H |  | nhập | 0.9 |  |  |
| Y | Bê tông lót › Dày |  | nhập | 0.05 |  |  |
| Z | Bê tông lót › Mở rộng |  | công thức | 0.1 | `=+Y12*2` | [Dày]*2 |
| AA | Stump Column (Cổ móng) › w |  | nhập | 0.65 |  |  |
| AB | Stump Column (Cổ móng) › l |  | nhập | 0.4 |  |  |
| AC | Stump Column (Cổ móng) › H1 › Móng cao |  | nhập | 3 |  |  |
| AD | Stump Column (Cổ móng) › H2 › nền |  | nhập | 0.22 |  |  |
| AE | Stump Column (Cổ móng) › H3 › Cao cổ cột |  | công thức | 2.1 | `=AC12-H12-I12` | [Móng cao]-[H]-[Vát] |
| AG | Piling (Cọc) › D300 |  | nhập | 2 |  |  |
| AN | Hao hụt |  | nhập | 1 |  |  |
| AO | Foundation/Móng › Concrete › Bê tông | (m3) | công thức | 32.39 | `=+IF(P12=0,IF(U12=0,IF(L12=0,IF(J12=0,F12*G12*H12,F12*G12*H12+((F12*G12)+(J12*K12))/2*I12)*D12*AN12,(F12*O12+M12*((F12+L12)/2))*H12*D12*AN12),((U12+F12)/2*V12*2+F12*W12)*H12*D12*AN12),(((F12+P12)/2*R12)+((F12+Q12)/2*(G12-R12)))*H12*D12*AN12)` | IF([a1]=0,IF([A]=0,IF([a]=0,IF([W1]=0,[L]*[W]*[H],[L]*[W]*[H]+(([L]*[W])+([W1]*[L1]))/2*[Vát])*[SL / Móng]*[Hao hụt],([L]*[d]+[b]*(([L]+[a])/2))*[H]*[SL / Móng]*[Hao hụt]),(([A]+[L])/2*[B]*2+[L]*[C])*[H]*[SL / Móng]*[Hao hụt]),((([L]+[a1])/2*[c1])+(([L]+[b1])/2*([W]-[c1])))*[H]*[SL / Móng]*[Hao hụt]) |
| AP | Foundation/Móng › Lean con. › BT lót | (m3) | công thức | 1.905 | `=+IF(F12=0,0,IF(P12=0,IF(U12=0,IF(L12=0,(F12+Z12)*(G12+Z12)*Y12*D12*AN12,((F12+Z12)*(O12+Y12)+((F12+Z12)+(L12+Z12))/2*(M12+Y12))*Y12*D12*AN12),(((F12+Z12)+(U12+Z12))/2*(V12+Y12)*2+(W12+Z12)*(F12+Z12))*Y12*D12*AN12),((F12+Z12+P12+Z12)/2*(R12+Y12)+(F12+Z12+Q12+Z12)*(G12-R12+Y12))*Y12*D12*AN12))` | IF([L]=0,0,IF([a1]=0,IF([A]=0,IF([a]=0,([L]+[Mở rộng])*([W]+[Mở rộng])*[Dày]*[SL / Móng]*[Hao hụt],(([L]+[Mở rộng])*([d]+[Dày])+(([L]+[Mở rộng])+([a]+[Mở rộng]))/2*([b]+[Dày]))*[Dày]*[SL / Móng]*[Hao hụt]),((([L]+[Mở rộng])+([A]+[Mở rộng]))/2*([B]+[Dày])*2+([C]+[Mở rộng])*([L]+[Mở rộng]))*[Dày]*[SL / Móng]*[Hao hụt]),(([L]+[Mở rộng]+[a1]+[Mở rộng])/2*([c1]+[Dày])+([L]+[Mở rộng]+[b1]+[Mở rộng])*([W]-[c1]+[Dày]))*[Dày]*[SL / Móng]*[Hao hụt])) |
| AQ | Foundation/Móng › Formwork / Ván khuôn › Vk Bt lót | (m2) | công thức | 2.14 | `=+IF(F12=0,0,IF(P12=0,IF(U12=0,IF(L12=0,((F12+Z12)+(G12+Z12))*2*Y12*D12,((F12+Z12)+(O12+Y12)*2+(N12+Z12)*2+L12)*Y12*D12),((U12+Z12)*2+(W12+Z12)*2+(X12+Z12)*4)*Y12*D12),(P12+S12*2+T12*2+Q12)*Y12*D12))` | IF([L]=0,0,IF([a1]=0,IF([A]=0,IF([a]=0,(([L]+[Mở rộng])+([W]+[Mở rộng]))*2*[Dày]*[SL / Móng],(([L]+[Mở rộng])+([d]+[Dày])*2+([c VK]+[Mở rộng])*2+[a])*[Dày]*[SL / Móng]),(([A]+[Mở rộng])*2+([C]+[Mở rộng])*2+([D VK]+[Mở rộng])*4)*[Dày]*[SL / Móng]),([a1]+[d1 VK]*2+[d2 VK]*2+[b1])*[Dày]*[SL / Móng])) |
| AR | Foundation/Móng › Formwork / Ván khuôn › Ván khuôn | (m2) | công thức | 37.43 | `=+IF(P12=0,IF(U12=0,IF(L12=0,(F12+G12)*2*H12*D12,(F12+O12*2+N12*2+L12)*H12*D12),(U12*2+W12*2+X12*4)*H12*D12),(P12+Q12+S12*2+T12*2)*H12*D12)` | IF([a1]=0,IF([A]=0,IF([a]=0,([L]+[W])*2*[H]*[SL / Móng],([L]+[d]*2+[c VK]*2+[a])*[H]*[SL / Móng]),([A]*2+[C]*2+[D VK]*4)*[H]*[SL / Móng]),([a1]+[b1]+[d1 VK]*2+[d2 VK]*2)*[H]*[SL / Móng]) |
| AS | Stump Column (Cổ móng) › Concrete › Bê tông | (m3) | công thức | 1.466 | `=+AA12*AB12*(AE12-AD12)*E12*D12*AN12` | [w]*[l]*([Cao cổ cột]-[nền])*[Số cổ móng/ / 1móng]*[SL / Móng]*[Hao hụt] |
| AT | Stump Column (Cổ móng) › Formwork › Ván khuôn | (m2) | công thức | 11.84 | `=+(AA12+AB12)*2*(AE12-AD12)*E12*D12` | ([w]+[l])*2*([Cao cổ cột]-[nền])*[Số cổ móng/ / 1móng]*[SL / Móng] |
| AU | Column › Concrete › Bê tông |  | công thức | 0 | `=AA12*AB12*AF12*D12` | [w]*[l]*[Cao cột]*[SL / Móng] |
| AV | Column › Formwork › Ván khuôn |  | công thức | 0 | `=(AA12+AB12)*2*AF12*D12` | ([w]+[l])*2*[Cao cột]*[SL / Móng] |
| AW | Cốt thép › Hàm lượng | (kg/m3) | nhập | 90 |  |  |
| AX | Cốt thép › Trọng lượng | (kg) | công thức | 3047 | `=+(AO12+AS12)*AW12*AN12` | ([Concrete Bê tông]+[Concrete Bê tông])*[Hàm lượng]*[Hao hụt] |
| BA | Bulon/1 foundation › Total  / Bulon |  | công thức | 0 | `=+AZ12*D12` | [Số bulon/cụm]*[SL / Móng] |
| BB | D300 | (tim cọc) | công thức | 6 | `=+AG12*D12` | [Piling (Cọc) D300]*[SL / Móng] |
| BC | D350 | (tim cọc) | công thức | 0 | `=+AH12*D12` | [Piling (Cọc) D350]*[SL / Móng] |
| BD | D400 | (tim cọc) | công thức | 0 | `=+AI12*D12` | [Piling (Cọc) D400]*[SL / Móng] |
| BE | D500 | (tim cọc) | công thức | 0 | `=+D12*AJ12` | [SL / Móng]*[Piling (Cọc) D500] |
| BF | D600 | (tim cọc) | công thức | 0 | `=+D12*AK12` | [SL / Móng]*[Piling (Cọc) D600] |
| BG | 250x250 | (tim cọc) | công thức | 0 | `=+AL12*D12` | [Piling (Cọc) 250x250]*[SL / Móng] |
| BH | 300x300 | (tim cọc) | công thức | 0 | `=+AM12*D12` | [Piling (Cọc) 300x300]*[SL / Móng] |
| BI | Bê tông đầu cọc ly tâm | (m3) | công thức | 0.1221 | `=+IF(BB12>0,3.14159*(0.3-$BC$3*2)^2/4*$BC$4*BB12,0)+IF(BC12>0,3.14159*(0.35-$BD$3*2)^2/4*$BD$4*BC12,0)+IF(BD12>0,3.14159*(0.4-$BE$3*2)^2/4*$BE$4*BD12,0)+IF(BE12>0,3.14159*(0.5-$BF$3*2)^2/4*$BF$4*BE12,0)+IF(BF12>0,3.14159*(0.6-$BG$3*2)^2/4*$BG$4*BF12,0)` | IF([D300·BB]>0,3.14159*(0.3-$BC$3*2)^2/4*$BC$4*[D300·BB],0)+IF([D350·BC]>0,3.14159*(0.35-$BD$3*2)^2/4*$BD$4*[D350·BC],0)+IF([D400·BD]>0,3.14159*(0.4-$BE$3*2)^2/4*$BE$4*[D400·BD],0)+IF([D500·BE]>0,3.14159*(0.5-$BF$3*2)^2/4*$BF$4*[D500·BE],0)+IF([D600·BF]>0,3.14159*(0.6-$BG$3*2)^2/4*$BG$4*[D600·BF],0) |
| BJ | Cọc tre › Chiều dài 1 cọc | (md) | nhập | 2 |  |  |
| BK | Cọc tre › Cọc/m2 |  | nhập | 25 |  |  |
| BL | Cọc tre › Khối lượng cọc (md) | (md) | công thức | 0 | `=+IF(SUM(BB12:BF12)=0,(F12+0.1)*(G12+0.1)*BK12*BJ12*D12,0)` | IF(SUM([D300·BB]:[D600·BF])=0,([L]+0.1)*([W]+0.1)*[Cọc/m2]*[Chiều dài 1 cọc]*[SL / Móng],0) |
| BM | Mở rộng › Chân | (m) | nhập | 0.5 |  |  |
| BN | Mở rộng › Đỉnh | (m) | công thức | 2.276 | `=IF(AC12=0,0,BQ12*IF(BQ12<5,IF(BQ12<=1.5,$BQ$5/1,$BR$5/1),$BS$5/1)+BM12)` | IF([Móng cao]=0,0,[Chiều cao đào móng]*IF([Chiều cao đào móng]<5,IF([Chiều cao đào móng]<=1.5,$BQ$5/1,$BR$5/1),$BS$5/1)+[Chân]) |
| BO | Cao độ › Hiện trạng | (m) | nhập | -0.5 |  |  |
| BP | Cao độ › Đỉnh móng | (m) | nhập | -0.1 |  |  |
| BQ | H5 › Chiều cao đào móng | (m) | công thức | 2.65 | `=+IF(AC12=0,0,AC12+Y12-BP12+BO12)` | IF([Móng cao]=0,0,[Móng cao]+[Dày]-[Đỉnh móng]+[Hiện trạng]) |
| BR | Exca. › / Đào đất / | (m3) | công thức | 334.6 | `=+IF((((F12+BM12*2)*(G12+BM12*2)+(F12+BN12*2)*(G12+BN12*2))/2*BQ12)*D12>0,(((F12+BM12*2)*(G12+BM12*2)+(F12+BN12*2)*(G12+BN12*2))/2*BQ12)*D12,0)` | IF(((([L]+[Chân]*2)*([W]+[Chân]*2)+([L]+[Đỉnh]*2)*([W]+[Đỉnh]*2))/2*[Chiều cao đào móng])*[SL / Móng]>0,((([L]+[Chân]*2)*([W]+[Chân]*2)+([L]+[Đỉnh]*2)*([W]+[Đỉnh]*2))/2*[Chiều cao đào móng])*[SL / Móng],0) |
| BS | Backfill › / Đắp đất / | (m3) | công thức | 299 | `=+IF(BR12>0,IF((AC12+BO12)>H12,BR12-AO12-AP12-AA12*AB12*(AC12-H12+BO12-BP12)*E12*D12,BR12-AP12-F12*G12*(AC12+BO12-BP12)*D12),0)` | IF([/ Đào đất /]>0,IF(([Móng cao]+[Hiện trạng])>[H],[/ Đào đất /]-[Concrete Bê tông]-[BT lót]-[w]*[l]*([Móng cao]-[H]+[Hiện trạng]-[Đỉnh móng])*[Số cổ móng/ / 1móng]*[SL / Móng],[/ Đào đất /]-[BT lót]-[L]*[W]*([Móng cao]+[Hiện trạng]-[Đỉnh móng])*[SL / Móng]),0) |
| BT | Tân đất / | (m3) | công thức | 0 | `=+IF(F12=0,0,IF(BS12=0,(F12+Z12)*(G12+Z12)*(-BO12-AC12-Y12+BP12)*D12,0))` | IF([L]=0,0,IF([/ Đắp đất /]=0,([L]+[Mở rộng])*([W]+[Mở rộng])*(-[Hiện trạng]-[Móng cao]-[Dày]+[Đỉnh móng])*[SL / Móng],0)) |

**Các mục/cấu kiện có trong sheet (cột B):** F1; F1A; F2; F2B; F3; F3A; F4; F5; F5A; F6; F6A; F6B; F9; F9A; F9C; F9B; F10A; F10B; F10C; F10D; F10E; F10F; SF1; SF1A; SF2; Trừ giao cắt; Total/ Tổng cộng

## Sheet: Dầm móng

- Hàng tiêu đề: 6–9; dòng mẫu phân tích: **10** (cấu kiện: `B1.1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| A | TT |  | nhập | 1 |  |  |
| B | Tên cấu kiện |  | nhập | B1.1 |  |  |
| C | Tên cấu kiện |  | công thức | WxH: 30x60 | `="WxH: "&E10*100&"x"&F10*100&""` | "WxH: "&[Rộng]*100&"x"&[Cao]*100&"" |
| D | Kích thước hình học › Dài | (m) | nhập | 14 |  |  |
| E | Kích thước hình học › Rộng | (m) | nhập | 0.3 |  |  |
| F | Kích thước hình học › Cao | (m) | nhập | 0.6 |  |  |
| G | Kích thước hình học › Bê tông lót dày › Dày |  | nhập | 0.05 |  |  |
| H | Kích thước hình học › Bê tông lót dày › Mở rộng |  | công thức | 0.1 | `=+G10*2` | [Dày]*2 |
| I | Kích thước hình học › h › Nền |  | nhập | 0.15 |  |  |
| J | Trừ › Móng/cổ móng/dầm… › md |  | công thức | 0.8 | `=0.4*2` | 0.4*2 |
| K | Khối lượng 1 bộ phận › Bê tông | (m3) | công thức | 1.782 | `=+(D10-J10)*E10*(F10-I10)` | ([Dài]-[Móng/cổ móng/dầm… md])*[Rộng]*([Cao]-[Nền]) |
| L | Khối lượng 1 bộ phận › Bê tông lót | (m3) | công thức | 0.264 | `=+(D10-J10)*(E10+H10)*G10` | ([Dài]-[Móng/cổ móng/dầm… md])*([Rộng]+[Mở rộng])*[Dày] |
| M | Khối lượng 1 bộ phận › Ván khuôn bê tông lót | (m2) | công thức | 1.32 | `=+(D10-J10)*2*G10` | ([Dài]-[Móng/cổ móng/dầm… md])*2*[Dày] |
| N | Khối lượng 1 bộ phận › Ván khuôn dầm móng | (m2) | công thức | 11.88 | `=+(D10-J10)*2*(F10-I10)` | ([Dài]-[Móng/cổ móng/dầm… md])*2*([Cao]-[Nền]) |
| O | Số lượng |  | nhập | 1 |  |  |
| P | Hệ số / hao hụt |  | công thức | 1 | `=+Móng!$AN$12` | Móng!$AN$12 |
| Q | Khối lượng toàn bộ › Bê tông | (m3) | công thức | 1.782 | `=+K10*O10*P10` | [Khối lượng 1 bộ phận Bê tông]*[Số lượng]*[Hệ số / hao hụt] |
| R | Khối lượng toàn bộ › Bê tông lót | (m3) | công thức | 0.264 | `=+L10*O10*P10` | [Khối lượng 1 bộ phận Bê tông lót]*[Số lượng]*[Hệ số / hao hụt] |
| S | Khối lượng toàn bộ › Ván khuôn bê tông lót | (m2) | công thức | 1.32 | `=+M10*O10` | [Khối lượng 1 bộ phận Ván khuôn bê tông lót]*[Số lượng] |
| T | Khối lượng toàn bộ › Ván khuôn dầm móng | (m2) | công thức | 11.88 | `=+N10*O10` | [Khối lượng 1 bộ phận Ván khuôn dầm móng]*[Số lượng] |
| U | Cốt thép › Hàm lượng | (kg/m3) | nhập | 160 |  |  |
| V | Cốt thép › Trọng lượng | (kg) | công thức | 403.2 | `=+D10*E10*F10*O10*U10*P10` | [Dài]*[Rộng]*[Cao]*[Số lượng]*[Hàm lượng]*[Hệ số / hao hụt] |
| W | Đào đắp › Mở rộng / đáy | (m) | nhập | 0.4 |  |  |
| X | Đào đắp › Mở rộng / đỉnh | (m) | công thức | 0.4375 | `=IF(F10=0,0,AA10*IF(AA10<5,IF($AC$4<=1.5,$AC$4/1,$AD$4/1),$AE$4/1)+W10)` | IF([Cao]=0,0,[Chiều cao đào dầm]*IF([Chiều cao đào dầm]<5,IF($AC$4<=1.5,$AC$4/1,$AD$4/1),$AE$4/1)+[Mở rộng / đáy]) |
| Y | Đào đắp › Cao độ / hiện trạng | (m) | công thức | -0.5 | `=+Móng!BO12` | Móng!BO12 |
| Z | Đào đắp › Cao độ / đỉnh dầm | (m) | nhập | 0 |  |  |
| AA | Đào đắp › Chiều cao đào dầm | (m) | công thức | 0.15 | `=+IF(F10=0,0,F10+G10-Z10+Y10)` | IF([Cao]=0,0,[Cao]+[Dày]-[Cao độ / đỉnh dầm]+[Cao độ / hiện trạng]) |
| AB | Đào đắp › Trừ móng › md |  | công thức | 4.75 | `=1.15+0.85+0.75+0.5*4` | 1.15+0.85+0.75+0.5*4 |
| AC | Đào đắp › Đào Dầm | (m3) | công thức | 1.578 | `=+IF(0.5*((E10+W10*2)+(E10+X10*2))*AA10*(D10-AB10)*O10>0,0.5*((E10+W10*2)+(E10+X10*2))*AA10*(D10-AB10)*O10,0)` | IF(0.5*(([Rộng]+[Mở rộng / đáy]*2)+([Rộng]+[Mở rộng / đỉnh]*2))*[Chiều cao đào dầm]*([Dài]-[Trừ móng md])*[Số lượng]>0,0.5*(([Rộng]+[Mở rộng / đáy]*2)+([Rộng]+[Mở rộng / đỉnh]*2))*[Chiều cao đào dầm]*([Dài]-[Trừ móng md])*[Số lượng],0) |
| AD | Đào đắp › Lấp đất | (m3) | công thức | 1.116 | `=+IF(AC10=0,0,AC10-((D10-AB10)*(E10+H10)*G10+(D10-AB10)*E10*(F10-Z10+Y10))*O10)` | IF([Đào Dầm]=0,0,[Đào Dầm]-(([Dài]-[Trừ móng md])*([Rộng]+[Mở rộng])*[Dày]+([Dài]-[Trừ móng md])*[Rộng]*([Cao]-[Cao độ / đỉnh dầm]+[Cao độ / hiện trạng]))*[Số lượng]) |
| AE | Đào đắp › Tân đất | (m3) | công thức | 0 | `=+IF(AD10=0,(D10-AB10)*(E10+H10)*(-Y10-F10+Z10-G10)*O10,0)` | IF([Lấp đất]=0,([Dài]-[Trừ móng md])*([Rộng]+[Mở rộng])*(-[Cao độ / hiện trạng]-[Cao]+[Cao độ / đỉnh dầm]-[Dày])*[Số lượng],0) |

**Các mục/cấu kiện có trong sheet (cột B):** B1.1; B1.2; B1.3; B1.4; B1.5; B1.6; B1.7; B1.8; B1.9; B1.10; B1.11; B1.12; B1.13; B1.14; B1.15; B1.16; B1.17; B1.18; B1.19; Trừ giao cắt

## Sheet: Nền

- Hàng tiêu đề: 6–9; dòng mẫu phân tích: **10** (cấu kiện: `Nhà xưởng`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| A | STT |  | nhập | 1 |  |  |
| B | Cấu kiện |  | nhập | Nhà xưởng |  |  |
| C | Vị trí |  | nhập | Trục (2-7)/(A-D) |  |  |
| D | Số lượng |  | nhập | 1 |  |  |
| E | Kích thước hình học › L | (m) | công thức | 37.44 | `=37.48-0.02*2` | 37.48-0.02*2 |
| F | Kích thước hình học › W | (m) | công thức | 27.52 | `=27.56-0.02*2` | 27.56-0.02*2 |
| G | Kích thước hình học › Diện tích Nền | (m2) | công thức | 1030 | `=+E10*F10*D10` | [L]*[W]*[Số lượng] |
| H | Kích thước hình học › Chu vi | (m) | công thức | 129.9 | `=+(E10+F10)*2` | ([L]+[W])*2 |
| I | Kích thước hình học › Cao › Base |  | nhập | 0.25 |  |  |
| J | Kích thước hình học › Cao › Bê tông |  | nhập | 0.22 |  |  |
| K | Hệ số lu lèn chặt / (%) › Base |  | nhập | 1 |  |  |
| L | Hệ số hao hụt / (%) › Bê tông |  | công thức | 1 | `=+Móng!$AN$12` | Móng!$AN$12 |
| M | Base | (m3) | công thức | 257.6 | `=+G10*I10*K10` | [Diện tích Nền]*[Cao Base]*[Hệ số lu lèn chặt / (%) Base] |
| N | Bê tông | (m3) | công thức | 226.7 | `=+G10*J10*L10` | [Diện tích Nền]*[Cao Bê tông]*[Hệ số hao hụt / (%) Bê tông] |
| O | Ván khuôn | (md) | công thức | 129.9 | `=+IF(D10>0,H10*D10,0)` | IF([Số lượng]>0,[Chu vi]*[Số lượng],0) |
| P | Nilon lót | (m2) | công thức | 1030 | `=+G10` | [Diện tích Nền] |
| Q | Đắp đất cho nền › Cốt hiện trạng › -0.5 | (m) | công thức | -0.5 | `=+$Q$9` | $Q$9 |
| R | Đắp đất cho nền › Cốt nền | (m) | nhập | 0 |  |  |
| S | Đắp đất cho nền › Hđắp | (m) | công thức | 0.03 | `=+-Q10+R10-I10-J10` | -[-0.5]+[Cốt nền]-[Cao Base]-[Cao Bê tông] |
| T | Đắp đất cho nền › Đắp đất | (m3) | công thức | 30.91 | `=+IF(S10>0,(G10*S10),0)` | IF([Hđắp]>0,([Diện tích Nền]*[Hđắp]),0) |
| U | Đắp đất cho nền › Đào nền | (m3) | công thức | 0 | `=+IF(S10<0,G10*(-S10),0)` | IF([Hđắp]<0,[Diện tích Nền]*(-[Hđắp]),0) |
| V | Cốt thép › D | (mm) | nhập | 10 |  |  |
| W | Cốt thép › @ | (mm) | nhập | 150 |  |  |
| X | Cốt thép › Layer |  | nhập | 2 |  |  |
| Y | Cốt thép › Kg/m2 | (Kg) | công thức | 16.46 | `=+IF(X10>0,(1000*V10^2/162*10^6*(1000/W10)*2*X10)/10^9,0)` | IF([Layer]>0,(1000*[D]^2/162*10^6*(1000/[@])*2*[Layer])/10^9,0) |
| Z | Cốt thép › Hệ số |  | nhập | 1.15 |  |  |
| AA | Cốt thép › Trọng lượng | (Kg) | công thức | 1.95e+04 | `=+G10*Y10*Z10` | [Diện tích Nền]*[Kg/m2]*[Hệ số] |

**Các mục/cấu kiện có trong sheet (cột B):** Nhà xưởng; *Trừ; Dầm móng; D12; Cổ móng:; A2.1; A1.1; A2.3; A2.3A; Nhà văn phòng; DM1; DM2; DM3; DM4; DM5; DM6; DM7; B2.1

## Sheet: Cột 

- Hàng tiêu đề: 6–9; dòng mẫu phân tích: **10** (cấu kiện: `C1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| A | TT |  | nhập | 1 |  |  |
| B | Cấu kiện |  | nhập | C1 |  |  |
| C | Cấu kiện |  | công thức | LxW: 50x40 | `=IF(G10=0,"LxW: "&D10*100&"x"&E10*100&"","D: "&G10*100&"")` | IF([Cột tròn / (D=r2)]=0,"LxW: "&[L]*100&"x"&[W]*100&"","D: "&[Cột tròn / (D=r2)]*100&"") |
| D | Kích thước hình học › L | (m) | nhập | 0.5 |  |  |
| E | Kích thước hình học › W | (m) | nhập | 0.4 |  |  |
| F | Kích thước hình học › H | (m) | nhập | 5 |  |  |
| H | Kích thước hình học › H / (Sàn/Dầm) | (m) | nhập | 0.16 |  |  |
| O | K.Lượng 1 cấu kiện › Bê tông | (m3) | công thức | 0.968 | `=+IF(G10=0,IF(I10=0,D10*E10*(F10-H10),D10*E10*(F10-H10)+(((L10+M10)+L10)/2*N10*I10)*J10),(3.14159*G10^2)/4*(F10-H10))` | IF([Cột tròn / (D=r2)]=0,IF([w]=0,[L]*[W]*([H]-[H / (Sàn/Dầm)]),[L]*[W]*([H]-[H / (Sàn/Dầm)])+((([h1]+[h2 /  (cổ)])+[h1])/2*[B (cánh)]*[w])*[Số cánh]),(3.14159*[Cột tròn / (D=r2)]^2)/4*([H]-[H / (Sàn/Dầm)])) |
| P | K.Lượng 1 cấu kiện › Ván khuôn | (m2) | công thức | 8.712 | `=IF(G10=0,IF(I10=0,(D10+E10)*2*(F10-H10),(D10+E10)*2*(F10-H10)+(I10+N10*2)*((L10*2+M10)/2)+SQRT(M10^2+N10^2)*I10*J10-(L10+M10)*I10*J10),PI()*G10*(F10-H10))` | IF([Cột tròn / (D=r2)]=0,IF([w]=0,([L]+[W])*2*([H]-[H / (Sàn/Dầm)]),([L]+[W])*2*([H]-[H / (Sàn/Dầm)])+([w]+[B (cánh)]*2)*(([h1]*2+[h2 /  (cổ)])/2)+SQRT([h2 /  (cổ)]^2+[B (cánh)]^2)*[w]*[Số cánh]-([h1]+[h2 /  (cổ)])*[w]*[Số cánh]),PI()*[Cột tròn / (D=r2)]*([H]-[H / (Sàn/Dầm)])) |
| Q | Số Cột/Tầng |  | nhập | 1 |  |  |
| R | Số tầng giống nhau |  | nhập | 1 |  |  |
| S | Hao hụt / Vật liệu |  | công thức | 1 | `=+Móng!$AN$12` | Móng!$AN$12 |
| T | Khối lượng toàn bộ › Bê tông | (m3) | công thức | 0.968 | `=+O10*Q10*R10*S10` | [K.Lượng 1 cấu kiện Bê tông]*[Số Cột/Tầng]*[Số tầng giống nhau]*[Hao hụt / Vật liệu] |
| U | Khối lượng toàn bộ › Ván khuôn | (m2) | công thức | 8.712 | `=+P10*Q10*R10` | [K.Lượng 1 cấu kiện Ván khuôn]*[Số Cột/Tầng]*[Số tầng giống nhau] |
| V | Cốt thép › Hàm lượng | (kg/m3) | nhập | 220 |  |  |
| W | Cốt thép › Trọng lượng | (kg) | công thức | 220 | `=+IF(G10=0,D10*E10*F10*Q10*R10*V10,3.14159*(G10^2)/4*F10*Q10*R10*V10)*S10` | IF([Cột tròn / (D=r2)]=0,[L]*[W]*[H]*[Số Cột/Tầng]*[Số tầng giống nhau]*[Hàm lượng],3.14159*([Cột tròn / (D=r2)]^2)/4*[H]*[Số Cột/Tầng]*[Số tầng giống nhau]*[Hàm lượng])*[Hao hụt / Vật liệu] |

**Các mục/cấu kiện có trong sheet (cột B):** C1; C1a; C2; C2a; C2b; C2c; C2d; C3; C3a; C3b; C3c; C4; C4a; C4b; C4c; C5; C5a; C6; C6a; C6b; C7; C7a; C8; C8a; C8b; C8c; C8d; C8e; C8f; C9; C9a; C9b; C9c; C9d; C10; C10a; C10b; C11; C11a; C12; C13; C13a; C14; C15; C16; C17; C18; C18a; C19; C19a; C20; C20a; C21; C22; C22a; C23; C24; C25; C25a; C26

## Sheet: Vách BTCT

- Hàng tiêu đề: 6–9; dòng mẫu phân tích: **10** (cấu kiện: `V1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Cấu kiện |  | nhập | V1 |  |  |
| C | Ký hiệu |  | nhập | EW1 |  |  |
| D | Kích thước hình học › L | (m) | nhập | 5 |  |  |
| E | Kích thước hình học › W | (m) | nhập | 0.2 |  |  |
| F | Kích thước hình học › H | (m) | nhập | 5 |  |  |
| G | Kích thước hình học › Số cạnh › VK |  | nhập | 2 |  |  |
| H | Kích thước hình học › h / (trát, sơn) | (m) | công thức | 3.2 | `=+H9` | H9 |
| J | Trừ › Dầm/Sàn |  | nhập | 0.6 |  |  |
| K | Khối lượng 1 cấu kiện › Bê tông | (m3) | công thức | 4.4 | `=+(D10-I10)*E10*(F10-J10)` | ([L]-[Giao vách])*[W]*([H]-[Dầm/Sàn]) |
| L | Khối lượng 1 cấu kiện › Ván khuôn | (m2) | công thức | 45.76 | `=+(D10-I10)*2*(F10-J10)+E10*(F10-J10)*G10` | ([L]-[Giao vách])*2*([H]-[Dầm/Sàn])+[W]*([H]-[Dầm/Sàn])*[VK] |
| M | Khối lượng 1 cấu kiện › EW1, EW2 / Trát -Sơn ngoài | (m2) | công thức | 25 | `=+IF(C10="EW1",D10*F10,0)+IF(C10="EW2",D10*F10,0)` | IF([Ký hiệu]="EW1",[L]*[H],0)+IF([Ký hiệu]="EW2",[L]*[H],0) |
| N | Khối lượng 1 cấu kiện › IW1,IW2,IW3 / Trát - Sơn trong | (m2) | công thức | 16 | `=+IF(C10="EW1",(D10-I10)*H10)+IF(C10="IW1",(D10-I10)*2*H10)+IF(C10="IW2",(D10-I10)*H10)` | IF([Ký hiệu]="EW1",([L]-[Giao vách])*[h / (trát, sơn)])+IF([Ký hiệu]="IW1",([L]-[Giao vách])*2*[h / (trát, sơn)])+IF([Ký hiệu]="IW2",([L]-[Giao vách])*[h / (trát, sơn)]) |
| O | Số lượng/ 1 Cấu kiện |  | nhập | 2 |  |  |
| P | Số tầng giống nhau |  | nhập | 1 |  |  |
| Q | Hệ số Hao hụt VL |  | công thức | 1 | `=+'Cọc nhồi'!$W$11` | 'Cọc nhồi'!$W$11 |
| R | Khối lượng toàn bộ › Bê tông | (m3) | công thức | 8.8 | `=+K10*O10*P10*Q10` | [Khối lượng 1 cấu kiện Bê tông]*[Số lượng/ 1 Cấu kiện]*[Số tầng giống nhau]*[Hệ số Hao hụt VL] |
| S | Khối lượng toàn bộ › Ván khuôn | (m2) | công thức | 91.52 | `=+L10*O10*P10` | [Khối lượng 1 cấu kiện Ván khuôn]*[Số lượng/ 1 Cấu kiện]*[Số tầng giống nhau] |
| T | Khối lượng toàn bộ › EW1, EW2 / Sơn ngoài | (m2) | công thức | 50 | `=+M10*O10*P10` | [EW1, EW2 / Trát -Sơn ngoài]*[Số lượng/ 1 Cấu kiện]*[Số tầng giống nhau] |
| U | Khối lượng toàn bộ › IW1,IW2,IW3 / Sơn trong | (m2) | công thức | 32 | `=+N10*O10*P10` | [IW1,IW2,IW3 / Trát - Sơn trong]*[Số lượng/ 1 Cấu kiện]*[Số tầng giống nhau] |
| V | Cốt thép › Hàm lượng | (kg/m3) | nhập | 120 |  |  |
| W | Cốt thép › Trọng lượng | (kg) | công thức | 1200 | `=+D10*E10*F10*O10*P10*V10*Q10` | [L]*[W]*[H]*[Số lượng/ 1 Cấu kiện]*[Số tầng giống nhau]*[Hàm lượng]*[Hệ số Hao hụt VL] |

**Các mục/cấu kiện có trong sheet (cột B):** V1; V2; V3; V4; V5; V6; V7; V8; V9; VTM 1; VTM2; Trừ cửa đi; DW1; DW2; Trừ lỗ mở; LM1; LM2; Tầng 2 - 4; Tầng 5- 6; Tổng cộng

## Sheet: Sàn

- Hàng tiêu đề: 9–12; dòng mẫu phân tích: **13** (cấu kiện: `H=250mm`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| A | TT |  | nhập | 1 |  |  |
| B | Cấu kiện |  | nhập | H=250mm |  |  |
| D | Kích thước hình học › L | (m) | nhập | 168 |  |  |
| E | Kích thước hình học › W | (m) | nhập | 16 |  |  |
| F | Kích thước hình học › H | (m) | nhập | 0.15 |  |  |
| G | Kích thước hình học › Diện tích sàn | (m2) | công thức | 2688 | `=+D13*E13` | [L]*[W] |
| H | Khối lượng 1 cấu kiện › Bê tông | (m3) | công thức | 403.2 | `=+G13*F13` | [Diện tích sàn]*[H] |
| I | Khối lượng 1 cấu kiện › Ván khuôn | (m2) | công thức | 2688 | `=+G13` | [Diện tích sàn] |
| J | Khối lượng 1 cấu kiện › Cán mặt | (m2) | công thức | 2688 | `=+I13` | [Khối lượng 1 cấu kiện Ván khuôn] |
| K | Số lượng/1 tầng |  | nhập | 1 |  |  |
| L | Số tầng |  | nhập | 1 |  |  |
| M | Hao hụt |  | công thức | 1 | `=+Móng!$AN$12` | Móng!$AN$12 |
| N | Khối lượng tổng › Bê tông | (m3) | công thức | 403.2 | `=+H13*K13*L13*M13` | [Khối lượng 1 cấu kiện Bê tông]*[Số lượng/1 tầng]*[Số tầng]*[Hao hụt] |
| O | Khối lượng tổng › Ván khuôn | (m2) | công thức | 2688 | `=+I13*K13*L13` | [Khối lượng 1 cấu kiện Ván khuôn]*[Số lượng/1 tầng]*[Số tầng] |
| P | Khối lượng tổng › Cán mặt | (m2) | công thức | 2688 | `=+O13` | [Khối lượng tổng Ván khuôn] |
| Q | Cốt thép /Thép lưới hàn › Ø | (mm) | nhập | 8 |  |  |
| R | Cốt thép /Thép lưới hàn › @ | (mm) | nhập | 200 |  |  |
| S | Cốt thép /Thép lưới hàn › Layer |  | nhập | 2 |  |  |
| T | Cốt thép /Thép lưới hàn › Kg/m2 | (Kg) | công thức | 7.901 | `=+IF(S13>0,(1000*Q13^2/162*10^6*(1000/R13)*2*S13)/10^9,0)` | IF([Layer]>0,(1000*[Ø]^2/162*10^6*(1000/[@])*2*[Layer])/10^9,0) |
| U | Cốt thép /Thép lưới hàn › Hệ số |  | nhập | 1.15 |  |  |
| V | Cốt thép /Thép lưới hàn › Trọng lượng | (Kg) | công thức | 2.442e+04 | `=+G13*T13*U13*K13*L13` | [Diện tích sàn]*[Kg/m2]*[Hệ số]*[Số lượng/1 tầng]*[Số tầng] |

**Các mục/cấu kiện có trong sheet (cột B):** H=250mm; Trừ ô thông tầng; Trừ cột:; WxH: 40x50; WxH: 50x50; WxH: 80x70; Trừ ván khuôn đáy dầm:; Toàn bộ đáy dầm 2FL; 3FL -4FL; Toàn bộ đáy dầm 3FL, 4FL; Tổng cộng; Cấu kiện; 2FL; WxH: 0x0; 3FL

## Sheet: Dầm tầng

- Hàng tiêu đề: 8–12; dòng mẫu phân tích: **13** (cấu kiện: `B2.1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| A | TT |  | nhập | 1 |  |  |
| B | Cấu kiện |  | nhập | B2.1 |  |  |
| C | Cấu kiện |  | công thức | WxH: 30x70 | `="WxH: "&E13*100&"x"&F13*100&""` | "WxH: "&[W]*100&"x"&[H]*100&"" |
| D | Kích thước hình học › L | (m) | nhập | 14.4 |  |  |
| E | Kích thước hình học › W | (m) | nhập | 0.3 |  |  |
| F | Kích thước hình học › H | (m) | nhập | 0.7 |  |  |
| G | Kích thước hình học › h › Sàn |  | nhập | 0.15 |  |  |
| H | Trừ › Cột / / dầm … | (m) | công thức | 1.2 | `=0.4*3` | 0.4*3 |
| I | Khối lượng 1 cấu kiện › Bê tông | (m3) | công thức | 2.178 | `=+(D13-H13)*E13*(F13-G13)` | ([L]-[Cột / / dầm …])*[W]*([H]-[Sàn]) |
| J | Khối lượng 1 cấu kiện › Ván khuôn › Thành dầm | (m2) | công thức | 14.52 | `=+(D13-H13)*(F13-G13)*2` | ([L]-[Cột / / dầm …])*([H]-[Sàn])*2 |
| K | Khối lượng 1 cấu kiện › Ván khuôn › Đáy dầm | (m2) | công thức | 3.96 | `=+(D13-H13)*E13` | ([L]-[Cột / / dầm …])*[W] |
| L | Số cấu kiện/1 tầng |  | nhập | 1 |  |  |
| M | Số tầng giống nhau |  | nhập | 1 |  |  |
| N | Hao hụt |  | công thức | 1 | `=+Móng!$AN$12` | Móng!$AN$12 |
| O | Khối toàn bộ › Bê tông | (m3) | công thức | 2.178 | `=+I13*L13*M13*N13` | [Khối lượng 1 cấu kiện Bê tông]*[Số cấu kiện/1 tầng]*[Số tầng giống nhau]*[Hao hụt] |
| P | Khối toàn bộ › Ván khuôn › Thành dầm | (m2) | công thức | 14.52 | `=+J13*L13*M13` | [Ván khuôn Thành dầm]*[Số cấu kiện/1 tầng]*[Số tầng giống nhau] |
| Q | Khối toàn bộ › Ván khuôn › Đáy dầm | (m2) | công thức | 3.96 | `=+K13*L13*M13` | [Ván khuôn Đáy dầm]*[Số cấu kiện/1 tầng]*[Số tầng giống nhau] |
| R | Cốt thép › Hàm lượng | (kg) | nhập | 180 |  |  |
| S | Cốt thép › Trọng lượng | (kg) | công thức | 544.3 | `=+D13*E13*F13*L13*M13*R13*N13` | [L]*[W]*[H]*[Số cấu kiện/1 tầng]*[Số tầng giống nhau]*[Hàm lượng]*[Hao hụt] |
| U | GIAO CẮT DẦM › Tên |  | nhập | B2.1 |  |  |
| V | GIAO CẮT DẦM › Loại dầm |  | công thức | WxH: 25x50 | `="WxH: "&W13*100&"x"&X13*100&""` | "WxH: "&[GIAO CẮT DẦM Kích thước]*100&"x"&[GIAO CẮT DẦM Kích thước]*100&"" |
| W | GIAO CẮT DẦM › Kích thước |  | nhập | 0.25 |  |  |
| X | GIAO CẮT DẦM › Kích thước |  | nhập | 0.5 |  |  |
| Y | GIAO CẮT DẦM › Hsan |  | công thức | 0.15 | `=+G13` | [Sàn] |
| Z | GIAO CẮT DẦM › SL |  | nhập | 2 |  |  |
| AA | Tổng |  | công thức | 0.175 | `=+W13*(X13-Y13)*Z13` | [GIAO CẮT DẦM Kích thước]*([GIAO CẮT DẦM Kích thước]-[Hsan])*[SL] |

**Các mục/cấu kiện có trong sheet (cột B):** B2.1; B2.2; B2.3; B2.4; B2.5; B2.6; B2.7; B2.8; B2.9; B2.10; B2.11; B2.12; B2.13; B2.14; B2.15; B2.16; Be thành dầm biên; Be thành ô thông tầng; Cầu thang; Trừ giao cắt; Dầm; Tầng 3-4:

## Sheet: Cầu thang

- Hàng tiêu đề: 6–9; dòng mẫu phân tích: **10** (cấu kiện: `Bản thang`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| A | TT |  | nhập | 1 |  |  |
| B | Cấu kiện |  | nhập | Bản thang |  |  |
| C | Vị trí |  | nhập | FL-0.1 Đến FL +1.733 |  |  |
| D | Kích thước hình học › L | (m) | công thức | 3.087 | `=+(3.258+2.917)/2` | (3.258+2.917)/2 |
| E | Kích thước hình học › W | (m) | nhập | 1.72 |  |  |
| F | Kích thước hình học › H | (m) | nhập | 0.15 |  |  |
| G | Khối lượng 1 cấu kiện › Bê tông › m3 |  | công thức | 0.7966 | `=+D10*E10*F10` | [L]*[W]*[H] |
| H | Khối lượng 1 cấu kiện › Ván khuôn › m2 |  | công thức | 6.237 | `=+D10*E10+D10*F10*2` | [L]*[W]+[L]*[H]*2 |
| I | Số cấu kiện/1 tầng |  | nhập | 2 |  |  |
| J | Số tầng giống nhau |  | nhập | 1 |  |  |
| K | Hao hụt |  | công thức | 1 | `=+Móng!$AN$12` | Móng!$AN$12 |
| L | Khối lượng toàn bộ › Bê tông › m3 |  | công thức | 1.593 | `=+G10*I10*J10*K10` | [Bê tông m3]*[Số cấu kiện/1 tầng]*[Số tầng giống nhau]*[Hao hụt] |
| M | Khối lượng toàn bộ › Ván khuôn › m2 |  | công thức | 12.47 | `=+H10*I10*J10` | [Ván khuôn m2]*[Số cấu kiện/1 tầng]*[Số tầng giống nhau] |

**Các mục/cấu kiện có trong sheet (cột B):** Bản thang; Chiếu nghỉ; Trụ thang; TR1; TR2; TR3; TR3A; Dầm thang; DT1; DT2; DT3; DT4; DT5; DT6; DT6a; Bậc thang bê tông; Trừ cột:; BxH: 22x22; BxH: 22x30; BxH: 40x40; BxH: 40x50; Giao cắt bản thang với dầm; BxH: 150x12; Giao cắt dầm; BxH: 0x0; Cầu thang số 2; Tổng cộng; Cấu kiện; Bậc tam cấp; Trục Y4; Total

## Sheet: Hoàn thiện Sàn-Trần

- Hàng tiêu đề: 7–11; dòng mẫu phân tích: **12**

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| I | H › Cao / (Ốp tường) | (m) | công thức | 0 | `=IF(C12="F1",$I$11,0)` | IF([Floor/ / Sàn]="F1",$I$11,0) |
| M | FL/ / Số tầng giống nhau |  | nhập | 1 |  |  |
| N | Floor/ Sàn › F1 › Lát gạch chống trượt 300x300 / (WC, Bếp..) | (m2) | công thức | 0 | `=+IF($C12=N$8,$J12*$L12*$M12,0)` | IF([Floor/ / Sàn]=N$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0) |
| O | Floor/ Sàn › F2 › Lát gạch 300x300  / (Ban công) | (m2) | công thức | 0 | `=+IF($C12=O$8,$J12*$L12*$M12,0)` | IF([Floor/ / Sàn]=O$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0) |
| P | Floor/ Sàn › F3 › Lát gạch 400x400 | (m2) | công thức | 0 | `=+IF($C12=P$8,$J12*$L12*$M12,0)` | IF([Floor/ / Sàn]=P$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0) |
| Q | Floor/ Sàn › F4 › Lát gạch 600x600 | (m2) | công thức | 0 | `=+IF($C12=Q$8,$J12*$L12*$M12,0)` | IF([Floor/ / Sàn]=Q$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0) |
| R | Floor/ Sàn › F5 › Lát gạch 800x800 | (m2) | công thức | 0 | `=+IF($C12=R$8,$J12*$L12*$M12,0)` | IF([Floor/ / Sàn]=R$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0) |
| S | Floor/ Sàn › F6 › Lát đá granite | (m2) | công thức | 0 | `=+IF($C12=S$8,$J12*$L12*$M12,0)` | IF([Floor/ / Sàn]=S$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0) |
| T | Floor/ Sàn › F7 › Hardener / 4kg/m2 | (m2) | công thức | 0 | `=+IF($C12=T$8,$J12*$L12*$M12,0)` | IF([Floor/ / Sàn]=T$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0) |
| U | Floor/ Sàn › F8 › Epoxy / 1mm | (m2) | công thức | 0 | `=+IF($C12=U$8,$J12*$L12*$M12,0)` | IF([Floor/ / Sàn]=U$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0) |
| V | Floor/ Sàn › F9 › Epoxy tự phẳng / 3mm | (m2) | công thức | 0 | `=+IF($C12=V$8,$J12*$L12*$M12,0)` | IF([Floor/ / Sàn]=V$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0) |
| W | Ceiling/Trần › C1 › Trần thạch cao chống ẩm T600x600 / (WC, bếp…) | (m2) | công thức | 0 | `=+IF($D12=W$8,$J12*$L12*$M12,0)` | IF([ceiling/Trần]=W$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0) |
| X | Ceiling/Trần › C2 › Trần thạch cao thường T600x600 | (m2) | công thức | 0 | `=+IF($D12=X$8,$J12*$L12*$M12,0)` | IF([ceiling/Trần]=X$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0) |
| Y | Ceiling/Trần › C3 › Trần thạch cao khung chìm | (m2) | công thức | 0 | `=+IF($D12=Y$8,$J12*$L12*$M12,0)` | IF([ceiling/Trần]=Y$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0) |
| Z | Ceiling/Trần › C4 › Trần thạch cách âm T600x600 | (m2) | công thức | 0 | `=+IF($D12=Z$8,$J12*$L12*$M12,0)` | IF([ceiling/Trần]=Z$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0) |
| AA | Ceiling/Trần › C5 › Trần nhôm | (m2) | công thức | 0 | `=+IF($D12=AA$8,$J12*$L12*$M12,0)` | IF([ceiling/Trần]=AA$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0) |
| AB | Ceiling/Trần › C6 › Trần Panel | (m2) | công thức | 0 | `=+IF($D12=AB$8,$J12*$L12*$M12,0)` | IF([ceiling/Trần]=AB$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0) |
| AC | Ceiling/Trần › C6 › Trần bê tông  / (Mài hoặc trát - Sơn) | (m2) | công thức | 0 | `=+IF($D12=AC$8,$J12*$L12*$M12,0)` | IF([ceiling/Trần]=AC$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0) |
| AD | Wall/Tường › W1 › Gạch ốp tường 300x450 | (m2) | công thức | 0 | `=+IF($E12=AD$8,$K12*$I12*$L12*$M12,0)` | IF([Tường/Wall]=AD$8,[Chu vi]*[Cao / (Ốp tường)]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0) |
| AE | Wall/Tường › W2 › Gạch ốp tường 300x600 | (m2) | công thức | 0 | `=+IF($E12=AE$8,$K12*$I12*$L12*$M12,0)` | IF([Tường/Wall]=AE$8,[Chu vi]*[Cao / (Ốp tường)]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0) |
| AF | Wall/Tường › W3 › Gạch ốp tường 600x600 | (m2) | công thức | 0 | `=+IF($E12=AF$8,$K12*$I12*$L12*$M12,0)` | IF([Tường/Wall]=AF$8,[Chu vi]*[Cao / (Ốp tường)]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0) |
| AG | Skirting/Chân tường › SK1 › Ốp chân tường / 300x100 | (m) | công thức | 0 | `=+IF($L12>0,IF($E12=AG$8,$K12*$L12*$M12,0),0)+-IF($L12<0,IF($E12=AG$8,$K12*$L12*$M12,0),0)` | IF([Number/Số lượng]>0,IF([Tường/Wall]=AG$8,[Chu vi]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0),0)+-IF([Number/Số lượng]<0,IF([Tường/Wall]=AG$8,[Chu vi]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0),0) |
| AH | Skirting/Chân tường › SK2 › Ốp chân tường / 400x100 | (m) | công thức | 0 | `=+IF($L12>0,IF($E12=AH$8,$K12*$L12*$M12,0),0)+-IF($L12<0,IF($E12=AH$8,$K12*$L12*$M12,0),0)` | IF([Number/Số lượng]>0,IF([Tường/Wall]=AH$8,[Chu vi]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0),0)+-IF([Number/Số lượng]<0,IF([Tường/Wall]=AH$8,[Chu vi]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0),0) |
| AI | Skirting/Chân tường › SK3 › Ốp chân tường / 600x100 | (m) | công thức | 0 | `=+IF($L12>0,IF($E12=AI$8,$K12*$L12*$M12,0),0)+-IF($L12<0,IF($E12=AI$8,$K12*$L12*$M12,0),0)` | IF([Number/Số lượng]>0,IF([Tường/Wall]=AI$8,[Chu vi]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0),0)+-IF([Number/Số lượng]<0,IF([Tường/Wall]=AI$8,[Chu vi]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0),0) |
| AJ | Skirting/Chân tường › SK4 › Ốp chân tường / 800x100 | (m) | công thức | 0 | `=+IF($L12>0,IF($E12=AJ$8,$K12*$L12*$M12,0),0)+-IF($L12<0,IF($E12=AJ$8,$K12*$L12*$M12,0),0)` | IF([Number/Số lượng]>0,IF([Tường/Wall]=AJ$8,[Chu vi]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0),0)+-IF([Number/Số lượng]<0,IF([Tường/Wall]=AJ$8,[Chu vi]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0),0) |
| AK | Skirting/Chân tường › SK5 › Vinyl chân tường  H=100mm | (m) | công thức | 0 | `=+IF($L12>0,IF($E12=AK$8,$K12*$L12*$M12,0),0)+-IF($L12<0,IF($E12=AK$8,$K12*$L12*$M12,0),0)` | IF([Number/Số lượng]>0,IF([Tường/Wall]=AK$8,[Chu vi]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0),0)+-IF([Number/Số lượng]<0,IF([Tường/Wall]=AK$8,[Chu vi]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0),0) |
| AL | Skirting/Chân tường › SK6 › Sơn chân tường Epoxy  H=100mm | (m) | công thức | 0 | `=+IF($L12>0,IF($E12=AL$8,$K12*$L12*$M12,0),0)+-IF($L12<0,IF($E12=AL$8,$K12*$L12*$M12,0),0)` | IF([Number/Số lượng]>0,IF([Tường/Wall]=AL$8,[Chu vi]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0),0)+-IF([Number/Số lượng]<0,IF([Tường/Wall]=AL$8,[Chu vi]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0),0) |

**Các mục/cấu kiện có trong sheet (cột B):** NHÀ VĂN PHÒNG; WC Nam; WC Nữ; Bếp; P.làm việc; P.họp; NHÀ XƯỞNG 1; Xưởng; Trừ diện tích cột; Cột C1; Cột C2; Cột C3; Cột C4; Trừ cửa (ốp tường); AD1; AD2; 2FL; WC-Nam; WC-Nữ; Phòng ngủ; Phòng hợp lớn; Ban công; 3FL~4FL; RF; R1FL; TỔNG CỘNG; Ghi chú: (Bảng tính update mới nhất); - Tính khối lượng theo các phòng; Trân trọng!

## Sheet: Tường xây

- Hàng tiêu đề: 6–9; dòng mẫu phân tích: **10** (cấu kiện: `Trục 1/A-D`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Diễn giải |  | nhập | Trục 1/A-D |  |  |
| C | Ký hiệu |  | nhập | EW1 |  |  |
| D | Số lượng |  | nhập | 1 |  |  |
| E | Số tầng giống nhau |  | nhập | 1 |  |  |
| F | Kích thước hình học › L | (m) | nhập | 20 |  |  |
| G | Kích thước hình học › W | (m) | nhập | 0.11 |  |  |
| H | Kích thước hình học › H | (m) | nhập | 5 |  |  |
| I | Kích thước hình học › h1 / (Chân tường ngoài) | (m) | công thức | 0.5 | `=+IF(C10="EW1",$I$9,IF(C10="EW2",$I$9,0))` | IF([Ký hiệu]="EW1",$I$9,IF([Ký hiệu]="EW2",$I$9,0)) |
| J | Kích thước hình học › h2 / (Trát trong) | (m) | công thức | 5 | `=+H10-M10` | [H]-[Trừ dầm/ sàn] |
| K | Kích thước hình học › h3 / (ốp gạch) | (m) | công thức | 0 | `=+IF(C10="EW2",$K$9,0)+IF(C10="IW2",$K$9,0)+IF(C10="IW3",$K$9,0)+IF(C10="IW5",$K$9,0)` | IF([Ký hiệu]="EW2",$K$9,0)+IF([Ký hiệu]="IW2",$K$9,0)+IF([Ký hiệu]="IW3",$K$9,0)+IF([Ký hiệu]="IW5",$K$9,0) |
| N | EW1,EW2,EW3 / Tường ngoài › 330 | (m3) | công thức | 0 | `=(IF(G10=$N$7/1000,IF(C10="EW1",(F10-L10)*G10*(H10-M10),0)+IF(C10="EW2",(F10-L10)*G10*(H10-M10),0)+IF(C10="EW3",(F10-L10)*G10*(H10-M10),0),0))*D10*E10` | (IF([W]=$N$7/1000,IF([Ký hiệu]="EW1",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]="EW2",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]="EW3",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0),0))*[Số lượng]*[Số tầng giống nhau] |
| O | EW1,EW2,EW3 / Tường ngoài › 220 | (m3) | công thức | 0 | `=(IF(G10=$O$7/1000,IF(C10="EW1",(F10-L10)*G10*(H10-M10),0)+IF(C10="EW2",(F10-L10)*G10*(H10-M10),0)+IF(C10="EW3",(F10-L10)*G10*(H10-M10),0),0))*D10*E10` | (IF([W]=$O$7/1000,IF([Ký hiệu]="EW1",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]="EW2",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]="EW3",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0),0))*[Số lượng]*[Số tầng giống nhau] |
| P | EW1,EW2,EW3 / Tường ngoài › 110 | (m3) | công thức | 11 | `=(IF(G10=$P$7/1000,IF(C10="EW1",(F10-L10)*G10*(H10-M10),0)+IF(C10="EW2",(F10-L10)*G10*(H10-M10),0)+IF(C10="EW3",(F10-L10)*G10*(H10-M10),0),0))*D10*E10` | (IF([W]=$P$7/1000,IF([Ký hiệu]="EW1",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]="EW2",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]="EW3",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0),0))*[Số lượng]*[Số tầng giống nhau] |
| Q | IW1,IW2,IW3,IW4,IW5 / Tường trong › 330 | (m3) | công thức | 0 | `=(IF(G10=$Q$7/1000,IF(C10="IW1",(F10-L10)*G10*(H10-M10),0)+IF(C10="IW2",(F10-L10)*G10*(H10-M10),0)+IF(C10="IW3",(F10-L10)*G10*(H10-M10),0)+IF(C10="IW4",(F10-L10)*G10*(H10-M10),0)+IF(C10="IW5",(F10-L10)*G10*(H10-M10),0),0))*D10*E10` | (IF([W]=$Q$7/1000,IF([Ký hiệu]="IW1",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]="IW2",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]="IW3",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]="IW4",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]="IW5",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0),0))*[Số lượng]*[Số tầng giống nhau] |
| R | IW1,IW2,IW3,IW4,IW5 / Tường trong › 220 | (m3) | công thức | 0 | `=(IF(G10=$R$7/1000,IF(C10="IW1",(F10-L10)*G10*(H10-M10),0)+IF(C10="IW2",(F10-L10)*G10*(H10-M10),0)+IF(C10="IW3",(F10-L10)*G10*(H10-M10),0)+IF(C10="IW4",(F10-L10)*G10*(H10-M10),0)+IF(C10="IW5",(F10-L10)*G10*(H10-M10),0),0))*D10*E10` | (IF([W]=$R$7/1000,IF([Ký hiệu]="IW1",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]="IW2",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]="IW3",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]="IW4",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]="IW5",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0),0))*[Số lượng]*[Số tầng giống nhau] |
| S | IW1,IW2,IW3,IW4,IW5 / Tường trong › 110 | (m3) | công thức | 0 | `=(IF(G10=$S$7/1000,IF(C10="IW1",(F10-L10)*G10*(H10-M10),0)+IF(C10="IW2",(F10-L10)*G10*(H10-M10),0)+IF(C10="IW3",(F10-L10)*G10*(H10-M10),0)+IF(C10="IW4",(F10-L10)*G10*(H10-M10),0)+IF(C10="IW5",(F10-L10)*G10*(H10-M10),0),0))*D10*E10` | (IF([W]=$S$7/1000,IF([Ký hiệu]="IW1",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]="IW2",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]="IW3",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]="IW4",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]="IW5",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0),0))*[Số lượng]*[Số tầng giống nhau] |
| T | Công tác trát tường › Trát ngoài | (m2) | công thức | 110 | `=+(IF(C10="EW1",F10*(H10+I10),IF(C10="EW2",F10*(H10+I10),0)+IF(C10="EW3",F10*(H10+I10)*2,0)))*D10*E10` | (IF([Ký hiệu]="EW1",[L]*([H]+[h1 / (Chân tường ngoài)]),IF([Ký hiệu]="EW2",[L]*([H]+[h1 / (Chân tường ngoài)]),0)+IF([Ký hiệu]="EW3",[L]*([H]+[h1 / (Chân tường ngoài)])*2,0)))*[Số lượng]*[Số tầng giống nhau] |
| U | Công tác trát tường › Trát trong | (m2) | công thức | 100 | `=+(IF(C10="EW1",(F10-L10)*J10,0)+IF(C10="IW1",F10*J10+(F10-L10)*J10,0)+IF(C10="IW2",(F10-L10)*J10,0)+IF(C10="IW4",(F10-L10)*J10,0))*D10*E10` | (IF([Ký hiệu]="EW1",([L]-[Trừ cột])*[h2 / (Trát trong)],0)+IF([Ký hiệu]="IW1",[L]*[h2 / (Trát trong)]+([L]-[Trừ cột])*[h2 / (Trát trong)],0)+IF([Ký hiệu]="IW2",([L]-[Trừ cột])*[h2 / (Trát trong)],0)+IF([Ký hiệu]="IW4",([L]-[Trừ cột])*[h2 / (Trát trong)],0))*[Số lượng]*[Số tầng giống nhau] |
| AD | Sơn tường - ốp tường › Sơn ngoài nhà | (m2) | công thức | 110 | `=+T10` | [Trát ngoài] |
| AE | Sơn tường - ốp tường › Sơn trong nhà | (m2) | công thức | 100 | `=+U10` | [Trát trong] |
| AF | Sơn tường - ốp tường › Gạch ốp cho tường | (m2) | công thức | 0 | `=+(IF(C10="EW2",F10*K10,0)+IF(C10="IW2",F10*K10,0)+IF(C10="IW3",F10*K10*2,0)+IF(C10="IW5",F10*K10*2,0))*D10*E10` | (IF([Ký hiệu]="EW2",[L]*[h3 / (ốp gạch)],0)+IF([Ký hiệu]="IW2",[L]*[h3 / (ốp gạch)],0)+IF([Ký hiệu]="IW3",[L]*[h3 / (ốp gạch)]*2,0)+IF([Ký hiệu]="IW5",[L]*[h3 / (ốp gạch)]*2,0))*[Số lượng]*[Số tầng giống nhau] |

**Các mục/cấu kiện có trong sheet (cột B):** Trục 1/A-D; Cửa đi; D1; D2; D3; D4; D5; D6; Cửa sổ; W1; W2; W3; W4; W5; Trụ tường; LxW: 300x220; LxW: 200x220; LxW: 150x110; LxW: 0x0; Giằng tường; WxH: 110x200; WxH: 220x200; WxH: 220x300; WxH: 110x150; WxH: 220x150; Trừ mặt không trát (Nếu có); Trừ mặt ốp (Nếu có); TẦNG 2-3; LxW: 150x220; WxH: 220x330; TẦNG 4-5-6; TỔNG CỘNG; EW1: Tường ngoài; EW2: Tường ngoài (WC, bếp...); EW3: Tường ngoài ( Trát ngoài 2 mặt); IW1: Tường trong; IW2: Tường trong (WC, bếp...)

## Sheet: Vách ngăn

- Hàng tiêu đề: 6–10; dòng mẫu phân tích: **11** (cấu kiện: `Vách thạch cao`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| A | TT |  | nhập | 1 |  |  |
| B | Công tác |  | nhập | Vách thạch cao |  |  |
| C | Diễn giải |  | nhập | A-E/52-58 |  |  |
| D | Kí hiệu |  | nhập | W2 |  |  |
| E | Số lượng |  | nhập | 1 |  |  |
| F | Số tầng giống nhau |  | nhập | 1 |  |  |
| G | Kích thước hình học › L | (m) | nhập | 9.55 |  |  |
| I | Kích thước hình học › H | (m) | công thức | 3.2 | `=3+0.2` | 3+0.2 |
| J | H  / (Đến đáy sàn BT- Mái) | (m) | nhập | 5 |  |  |
| K | VÁCH THẠCH CAO › W1 › Vách 1 mặt / (Tấm thường) | (m2) | công thức | 0 | `=+IF(D11=$K$7,G11*I11*E11*F11,0)` | IF([Kí hiệu]=$K$7,[L]*[H]*[Số lượng]*[Số tầng giống nhau],0) |
| L | VÁCH THẠCH CAO › W2 › Vách 2 mặt / (Tấm thường) | (m2) | công thức | 30.56 | `=+IF(D11=$L$7,G11*I11*E11*F11,0)` | IF([Kí hiệu]=$L$7,[L]*[H]*[Số lượng]*[Số tầng giống nhau],0) |
| M | VÁCH THẠCH CAO › W3 › Vách 1 mặt / (Chống cháy) | (m2) | công thức | 0 | `=+IF(D11=$M$7,G11*I11*E11*F11,0)` | IF([Kí hiệu]=$M$7,[L]*[H]*[Số lượng]*[Số tầng giống nhau],0) |
| N | VÁCH THẠCH CAO › W4 › Vách 2 mặt / (Chống cháy) | (m2) | công thức | 0 | `=+IF(D11=$N$7,G11*I11*E11*F11,0)` | IF([Kí hiệu]=$N$7,[L]*[H]*[Số lượng]*[Số tầng giống nhau],0) |
| O | VÁCH THẠCH CAO › W5 › Vách 2 mặt bông thủy tinh / (Cách âm) | (m2) | công thức | 0 | `=+IF(D11=$O$7,G11*I11*E11*F11,0)` | IF([Kí hiệu]=$O$7,[L]*[H]*[Số lượng]*[Số tầng giống nhau],0) |
| P | VÁCH THẠCH CAO › Hộp gia cố vách › Số hộp ngang/ / vách |  | nhập | 1 |  |  |
| Q | VÁCH THẠCH CAO › Hộp gia cố vách › Hộp / (50x50) | (m) | công thức | 25.47 | `=(IF(E11>0,IF(D11=$K$7,(G11+G11/3*J11)*E11*F11,0)+IF(D11=$L$7,(G11+G11/3*J11)*E11*F11,0)+IF(D11=$M$7,(G11+G11/3*J11)*E11*F11,0)+IF(D11=$O$7,(G11+G11/3*J11)*E11*F11,0)+IF(D11=$N$7,(G11+G11/3*J11)*E11*F11,0),0))*P11` | (IF([Số lượng]>0,IF([Kí hiệu]=$K$7,([L]+[L]/3*[H  / (Đến đáy sàn BT- Mái)])*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$L$7,([L]+[L]/3*[H  / (Đến đáy sàn BT- Mái)])*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$M$7,([L]+[L]/3*[H  / (Đến đáy sàn BT- Mái)])*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$O$7,([L]+[L]/3*[H  / (Đến đáy sàn BT- Mái)])*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$N$7,([L]+[L]/3*[H  / (Đến đáy sàn BT- Mái)])*[Số lượng]*[Số tầng giống nhau],0),0))*[Số hộp ngang/ / vách] |
| R | VÁCH THẠCH CAO › Sơn vách | (m2) | công thức | 61.12 | `=+IF(D11=$K$7,G11*I11*E11*F11,0)+IF(D11=$L$7,G11*I11*2*E11*F11,0)+IF(D11=$M$7,G11*I11*E11*F11,0)+IF(D11=$N$7,G11*I11*2*E11*F11,0)+IF(D11=$O$7,G11*I11*2*E11*F11,0)` | IF([Kí hiệu]=$K$7,[L]*[H]*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$L$7,[L]*[H]*2*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$M$7,[L]*[H]*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$N$7,[L]*[H]*2*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$O$7,[L]*[H]*2*[Số lượng]*[Số tầng giống nhau],0) |
| S | VÁCH THẠCH CAO › Sơn chân vách H=100mm | (m) | công thức | 19.1 | `=+IF(D11=$K$7,G11*E11*F11,0)+IF(D11=$L$7,G11*2*E11*F11,0)+IF(D11=$M$7,G11*E11*F11,0)+IF(D11=$N$7,G11*2*E11*F11,0)+IF(D11=$O$7,G11*2*E11*F11,0)` | IF([Kí hiệu]=$K$7,[L]*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$L$7,[L]*2*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$M$7,[L]*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$N$7,[L]*2*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$O$7,[L]*2*[Số lượng]*[Số tầng giống nhau],0) |
| T | VÁCH KÍNH - VÁCH TOILET › W6 › Vách kính ngoài nhà | (m2) | công thức | 0 | `=+IF(D11=$T$7,G11*I11*E11*F11,0)` | IF([Kí hiệu]=$T$7,[L]*[H]*[Số lượng]*[Số tầng giống nhau],0) |
| U | VÁCH KÍNH - VÁCH TOILET › W7 › Vách kính trong nhà | (m2) | công thức | 0 | `=+IF(D11=$U$7,G11*I11*E11*F11,0)` | IF([Kí hiệu]=$U$7,[L]*[H]*[Số lượng]*[Số tầng giống nhau],0) |
| V | VÁCH KÍNH - VÁCH TOILET › W8 › Vách kính nhà tắm | (m2) | công thức | 0 | `=+IF(D11=$V$7,G11*I11*E11*F11,0)` | IF([Kí hiệu]=$V$7,[L]*[H]*[Số lượng]*[Số tầng giống nhau],0) |
| W | VÁCH KÍNH - VÁCH TOILET › W9 › Vách ngăn toilet | (m2) | công thức | 0 | `=+IF(D11=$W$7,G11*I11*E11*F11,0)` | IF([Kí hiệu]=$W$7,[L]*[H]*[Số lượng]*[Số tầng giống nhau],0) |

**Các mục/cấu kiện có trong sheet (cột B):** Vách thạch cao; Vách kính; Vách ngăn toilet; 2FL

## Sheet: Hạ tầng- Đường

- Hàng tiêu đề: 6–10; dòng mẫu phân tích: **11** (cấu kiện: `Đường asphalt tải trọng nhẹ`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| A | STT › I |  | nhập | 1 |  |  |
| B | Nội dung diễn giải › Đường giao thông chính: |  | nhập | Đường asphalt tải trọng nhẹ |  |  |
| C | Kí hiệu |  | nhập | R1 |  |  |
| E | Số lượng |  | nhập | 1 |  |  |
| H | Kích thước hình học › Cao › Base |  | nhập | 0.4 |  |  |
| J | Diện tích | (m2) | nhập | 1715 |  |  |
| K | Hệ số lu lèn chặt / (%) › Base |  | công thức | 1 | `=+Nền!$K$10` | Nền!$K$10 |
| L | Hệ số hao hụt / (%) › Bê tông |  | nhập | 1 |  |  |
| M | Base | (m3) | công thức | 685.8 | `=+IF(C11=0,0,J11*H11*E11*K11)` | IF([Kí hiệu]=0,0,[Diện tích]*[Cao Base]*[Số lượng]*[Hệ số lu lèn chặt / (%) Base]) |
| N | Đường Asphalt › R1 › Asphalt / (Tải trọng nhẹ) dày 70mm | (m2) | công thức | 1715 | `=+IF(C11=$N$7,J11*E11,0)` | IF([Kí hiệu]=$N$7,[Diện tích]*[Số lượng],0) |
| O | Đường Asphalt › R2 › Asphalt / (Tải trọng nặng) | (m2) | công thức | 0 | `=+IF(C11=$O$7,J11*E11,0)` | IF([Kí hiệu]=$O$7,[Diện tích]*[Số lượng],0) |
| P | Đường Asphalt › Nhũ tương / (Đường TT nhẹ) | (m2) | công thức | 1715 | `=+N11` | [Asphalt / (Tải trọng nhẹ) dày 70mm] |
| Q | Đường Asphalt › Nhũ tương / (Đường TT nặng) | (m2) | công thức | 0 | `=+O11` | [Asphalt / (Tải trọng nặng)] |
| R | ĐƯỜNG BÊ TÔNG › R3 › Bê tông | (m3) | công thức | 0 | `=+IF(C11=$R$7,J11*I11*E11*L11,0)` | IF([Kí hiệu]=$R$7,[Diện tích]*[Cao Bê tông]*[Số lượng]*[Hệ số hao hụt / (%) Bê tông],0) |
| S | ĐƯỜNG BÊ TÔNG › R3 › Nilon lót | (m2) | công thức | 0 | `=+IF(C11=$R$7,J11*E11,0)` | IF([Kí hiệu]=$R$7,[Diện tích]*[Số lượng],0) |
| W | ĐƯỜNG BÊ TÔNG › R3 › Cốt thép › Kg/m2 |  | công thức | 0 | `=+IF(SUM(T11:V11)=0,0,IF(C11="R3",(1000*T11^2/162*10^6*(1000/U11)*2*V11)/10^9,0))` | IF(SUM([D]:[Layer])=0,0,IF([Kí hiệu]="R3",(1000*[D]^2/162*10^6*(1000/[@])*2*[Layer])/10^9,0)) |
| X | ĐƯỜNG BÊ TÔNG › R3 › Cốt thép › Hệ số |  | nhập | 1.15 |  |  |
| Y | ĐƯỜNG BÊ TÔNG › R3 › Cốt thép › Trọng lượng |  | công thức | 0 | `=+J11*W11*X11*E11` | [Diện tích]*[Kg/m2]*[Hệ số]*[Số lượng] |
| Z | Hệ số › Đầm lu lèn chặt  cát san lấp |  | nhập | 1.35 |  |  |
| AA | Xử lý nền đường › Cốt hiện trạng › -0.7 | (m) | công thức | -0.7 | `=+$AA$10` | $AA$10 |
| AB | Xử lý nền đường › Cốt đường / TB › -0.36 | (m) | công thức | -0.36 | `=+$AB$10` | $AB$10 |
| AC | Xử lý nền đường › H / bóc nền › 0.3 |  | công thức | 0.36 | `=+IF(J11=0,0,(-AB11+H11+I11+AA11+$AC$10))` | IF([Diện tích]=0,0,(-[-0.36]+[Cao Base]+[Cao Bê tông]+[-0.7]+$AC$10)) |
| AD | Xử lý nền đường › Bóc nền đường | (m3) | công thức | 617.2 | `=+IF(C11=0,0,J11*AC11*E11)` | IF([Kí hiệu]=0,0,[Diện tích]*[H / bóc nền 0.3]*[Số lượng]) |
| AE | Xử lý nền đường › Cát san lấp › 0.3 | (m3) | công thức | 694.4 | `=+IF(C11=0,0,J11*$AE$10*E11*Z11)` | IF([Kí hiệu]=0,0,[Diện tích]*$AE$10*[Số lượng]*[Đầm lu lèn chặt  cát san lấp]) |
| AF | Xử lý nền đường › Lu lèn chặt | (m2) | công thức | 1715 | `=+IF(C11=0,0,J11*E11)` | IF([Kí hiệu]=0,0,[Diện tích]*[Số lượng]) |

**Các mục/cấu kiện có trong sheet (cột B):** Đường asphalt tải trọng nhẹ; Đường bê tông loại 1; Nội dung diễn giải; Đường đi bộ:; Đường bê tông loại 2

## Sheet: Hạ tầng- Cống tròn

- Hàng tiêu đề: 7–11; dòng mẫu phân tích: **12** (cấu kiện: `MH1.1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| A | No |  | nhập | 1 |  |  |
| B | Quy cách › From |  | nhập | MH1.1 |  |  |
| C | Quy cách › To |  | nhập | MH1.2 |  |  |
| D | Quy cách › Trừ giao hố ga / (m) › d / (m) |  | nhập | 0.4 |  |  |
| E | Quy cách › Trừ giao hố ga / (m) › Trừ / (m) |  | công thức | 0.6 | `=+D12+0.2` | [d / (m)]+0.2 |
| F | D / (m) |  | nhập | 0.3 |  |  |
| G | Kí hiệu |  | nhập | CL |  |  |
| H | Dài / (m) |  | nhập | 17.3 |  |  |
| I | CỐNG BÊ TÔNG THƯỜNG (m) › Đường kính cống (D) › 200 |  | công thức | 0 | `=+IF($F12=$I$9/1000,IF($G12="TH",$H12-$E12,0),0)` | IF([D / (m)]=$I$9/1000,IF([Kí hiệu]="TH",[Dài / (m)]-[Trừ / (m)],0),0) |
| J | CỐNG BÊ TÔNG THƯỜNG (m) › Đường kính cống (D) › 300 |  | công thức | 0 | `=+IF($F12=$J$9/1000,IF($G12="TH",$H12-$E12,0),0)` | IF([D / (m)]=$J$9/1000,IF([Kí hiệu]="TH",[Dài / (m)]-[Trừ / (m)],0),0) |
| K | CỐNG BÊ TÔNG THƯỜNG (m) › Đường kính cống (D) › 400 |  | công thức | 0 | `=+IF($F12=$K$9/1000,IF($G12="TH",$H12-$E12,0),0)` | IF([D / (m)]=$K$9/1000,IF([Kí hiệu]="TH",[Dài / (m)]-[Trừ / (m)],0),0) |
| L | CỐNG BÊ TÔNG THƯỜNG (m) › Đường kính cống (D) › 500 |  | công thức | 0 | `=+IF($F12=$L$9/1000,IF($G12="TH",$H12-$E12,0),0)` | IF([D / (m)]=$L$9/1000,IF([Kí hiệu]="TH",[Dài / (m)]-[Trừ / (m)],0),0) |
| M | CỐNG BÊ TÔNG THƯỜNG (m) › Đường kính cống (D) › 600 |  | công thức | 0 | `=+IF($F12=$M$9/1000,IF($G12="TH",$H12-$E12,0),0)` | IF([D / (m)]=$M$9/1000,IF([Kí hiệu]="TH",[Dài / (m)]-[Trừ / (m)],0),0) |
| N | CỐNG BÊ TÔNG THƯỜNG (m) › Đường kính cống (D) › 800 |  | công thức | 0 | `=+IF($F12=$N$9/1000,IF($G12="TH",$H12-$E12,0),0)` | IF([D / (m)]=$N$9/1000,IF([Kí hiệu]="TH",[Dài / (m)]-[Trừ / (m)],0),0) |
| O | CỐNG BÊ TÔNG THƯỜNG (m) › Đường kính cống (D) › 1000 |  | công thức | 0 | `=+IF($F12=$O$9/1000,IF($G12="TH",$H12-$E12,0),0)` | IF([D / (m)]=$O$9/1000,IF([Kí hiệu]="TH",[Dài / (m)]-[Trừ / (m)],0),0) |
| P | CỐNG BÊ TÔNG THƯỜNG (m) › Đường kính cống (D) › 1100 |  | công thức | 0 | `=+IF($F12=$P$9/1000,IF($G12="TH",$H12-$E12,0),0)` | IF([D / (m)]=$P$9/1000,IF([Kí hiệu]="TH",[Dài / (m)]-[Trừ / (m)],0),0) |
| Q | CỐNG BÊ TÔNG THƯỜNG (m) › Đường kính cống (D) › 1200 |  | công thức | 0 | `=+IF($F12=$Q$9/1000,IF($G12="TH",$H12-$E12,0),0)` | IF([D / (m)]=$Q$9/1000,IF([Kí hiệu]="TH",[Dài / (m)]-[Trừ / (m)],0),0) |
| R | CỐNG BÊ TÔNG CHỊU LỰC (m) › Đường kính cống (D) › 200 |  | công thức | 0 | `=+IF($F12=$R$9/1000,IF($G12="CL",$H12-$E12,0),0)` | IF([D / (m)]=$R$9/1000,IF([Kí hiệu]="CL",[Dài / (m)]-[Trừ / (m)],0),0) |
| S | CỐNG BÊ TÔNG CHỊU LỰC (m) › Đường kính cống (D) › 300 |  | công thức | 16.7 | `=+IF($F12=$S$9/1000,IF($G12="CL",$H12-$E12,0),0)` | IF([D / (m)]=$S$9/1000,IF([Kí hiệu]="CL",[Dài / (m)]-[Trừ / (m)],0),0) |
| T | CỐNG BÊ TÔNG CHỊU LỰC (m) › Đường kính cống (D) › 400 |  | công thức | 0 | `=+IF($F12=$T$9/1000,IF($G12="CL",$H12-$E12,0),0)` | IF([D / (m)]=$T$9/1000,IF([Kí hiệu]="CL",[Dài / (m)]-[Trừ / (m)],0),0) |
| U | CỐNG BÊ TÔNG CHỊU LỰC (m) › Đường kính cống (D) › 500 |  | công thức | 0 | `=+IF($F12=$U$9/1000,IF($G12="CL",$H12-$E12,0),0)` | IF([D / (m)]=$U$9/1000,IF([Kí hiệu]="CL",[Dài / (m)]-[Trừ / (m)],0),0) |
| V | CỐNG BÊ TÔNG CHỊU LỰC (m) › Đường kính cống (D) › 600 |  | công thức | 0 | `=+IF($F12=$V$9/1000,IF($G12="CL",$H12-$E12,0),0)` | IF([D / (m)]=$V$9/1000,IF([Kí hiệu]="CL",[Dài / (m)]-[Trừ / (m)],0),0) |
| W | CỐNG BÊ TÔNG CHỊU LỰC (m) › Đường kính cống (D) › 800 |  | công thức | 0 | `=+IF($F12=$W$9/1000,IF($G12="CL",$H12-$E12,0),0)` | IF([D / (m)]=$W$9/1000,IF([Kí hiệu]="CL",[Dài / (m)]-[Trừ / (m)],0),0) |
| X | CỐNG BÊ TÔNG CHỊU LỰC (m) › Đường kính cống (D) › 1000 |  | công thức | 0 | `=+IF($F12=$X$9/1000,IF($G12="CL",$H12-$E12,0),0)` | IF([D / (m)]=$X$9/1000,IF([Kí hiệu]="CL",[Dài / (m)]-[Trừ / (m)],0),0) |
| Y | CỐNG BÊ TÔNG CHỊU LỰC (m) › Đường kính cống (D) › 1100 |  | công thức | 0 | `=+IF($F12=$Y$9/1000,IF($G12="CL",$H12-$E12,0),0)` | IF([D / (m)]=$Y$9/1000,IF([Kí hiệu]="CL",[Dài / (m)]-[Trừ / (m)],0),0) |
| Z | CỐNG BÊ TÔNG CHỊU LỰC (m) › Đường kính cống (D) › 1200 |  | công thức | 0 | `=+IF($F12=$Z$9/1000,IF($G12="CL",$H12-$E12,0),0)` | IF([D / (m)]=$Z$9/1000,IF([Kí hiệu]="CL",[Dài / (m)]-[Trừ / (m)],0),0) |
| AA | PVC / (m) › 200 |  | công thức | 0 | `=+IF(F12=$AA$9/1000,IF(G12="PVC",H12-E12,0),0)` | IF([D / (m)]=$AA$9/1000,IF([Kí hiệu]="PVC",[Dài / (m)]-[Trừ / (m)],0),0) |
| AB | PVC / (m) › 250 |  | công thức | 0 | `=+IF(F12=$AB$9/1000,IF(G12="PVC",H12-E12,0),0)` | IF([D / (m)]=$AB$9/1000,IF([Kí hiệu]="PVC",[Dài / (m)]-[Trừ / (m)],0),0) |
| AC | PVC / (m) › 300 |  | công thức | 0 | `=+IF(F12=$AC$9/1000,IF(G12="PVC",H12-E12,0),0)` | IF([D / (m)]=$AC$9/1000,IF([Kí hiệu]="PVC",[Dài / (m)]-[Trừ / (m)],0),0) |
| AD | CỌC TRE CHO ĐẾ CỐNG › Chiều dài cọc  / (m) |  | nhập | 2 |  |  |
| AE | CỌC TRE CHO ĐẾ CỐNG › Số cọc tre/ cọc tràm › 25 |  | công thức | 123 | `=+IF(AD12=0,0,IF(G12="PVC",0,ROUND((H12-(D12+0.3))/2.5*2*(0.33+0.2)*(F12+0.2+0.2)*$AE$11,0)))` | IF([Chiều dài cọc  / (m)]=0,0,IF([Kí hiệu]="PVC",0,ROUND(([Dài / (m)]-([d / (m)]+0.3))/2.5*2*(0.33+0.2)*([D / (m)]+0.2+0.2)*$AE$11,0))) |
| AF | CỌC TRE CHO ĐẾ CỐNG › Khối lượng cọc / (md) |  | công thức | 246 | `=+IF(AE12>0,AD12*AE12,0)` | IF([25]>0,[Chiều dài cọc  / (m)]*[25],0) |
| AG | CÔNG TÁC ĐÀO ĐẮP › Cốt hiện trạng / (m) › -0.5 |  | công thức | -0.5 | `=+$AG$11` | $AG$11 |
| AH | CÔNG TÁC ĐÀO ĐẮP › Cốt TB đào cống  / (m) |  | công thức | -2.275 | `=+-(2.25+2.3)/2` | -(2.25+2.3)/2 |
| AI | CÔNG TÁC ĐÀO ĐẮP › Mở rộng chân / (m) |  | nhập | 0.5 |  |  |
| AJ | CÔNG TÁC ĐÀO ĐẮP › Mở rộng đỉnh / (m) |  | công thức | 1.689 | `=+AK12*IF(AK12<5,IF(AK12<=1.5,$AI$4,$AJ$4),$AK$4)+AI12` | [Đào / (m)]*IF([Đào / (m)]<5,IF([Đào / (m)]<=1.5,$AI$4,$AJ$4),$AK$4)+[Mở rộng chân / (m)] |
| AK | CÔNG TÁC ĐÀO ĐẮP › H › Đào / (m) |  | công thức | 1.775 | `=+-AH12+AG12` | -[Cốt TB đào cống  / (m)]+[-0.5] |
| AL | CÔNG TÁC ĐÀO ĐẮP › Đào đất / (m3) |  | công thức | 68.04 | `=+IF(H12=0,0,((F12+AI12*2)+(F12+AJ12*2))/2*AK12*(H12-(E12+0.15*2)-0.5*2))` | IF([Dài / (m)]=0,0,(([D / (m)]+[Mở rộng chân / (m)]*2)+([D / (m)]+[Mở rộng đỉnh / (m)]*2))/2*[Đào / (m)]*([Dài / (m)]-([Trừ / (m)]+0.15*2)-0.5*2)) |
| AM | CÔNG TÁC ĐÀO ĐẮP › Đắp đất / (m3) |  | công thức | 66.11 | `=+IF(H12=0,0,AL12-3.14*(F12+0.1)^2/4*(H12-(E12+0.15*2)-0.5*2))` | IF([Dài / (m)]=0,0,[Đào đất / (m3)]-3.14*([D / (m)]+0.1)^2/4*([Dài / (m)]-([Trừ / (m)]+0.15*2)-0.5*2)) |
| AN | CÔNG TÁC ĐÀO ĐẮP › Vận chuyển / (m3) |  | công thức | 1.934 | `=+AL12-AM12` | [Đào đất / (m3)]-[Đắp đất / (m3)] |

**Các mục/cấu kiện có trong sheet (cột B):** MH1.1; MH1.2; MH1.3; MH1.4; MH2.1; MH2.2; MH3A.1; MH1.5; MH1.6; MH1.7; MH1.8; MH1.9; MH1.10; MH1.11; MH1.12; MH3.1; MH3.2; MH3.3; MH3.4; MH3.5; MH3.6; MH3A.4; MH2.3; MH1.13; MH1.14; MH1.15; MH1.16; MH1.17; MH2-1; MH2-2; Cộng:

## Sheet: Mương

- Hàng tiêu đề: 6–11; dòng mẫu phân tích: **12** (cấu kiện: `B= 600`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Quy cách ›  B600 - Mương hộp |  | công thức | B= 600 | `="B= "&F12*1000&""` | "B= "&[W]*1000&"" |
| D | SL |  | nhập | 1 |  |  |
| E | KÍCH THƯỚC HÌNH HỌC › L › 48.5 | (m) | công thức | 48.5 | `=+E10` | E10 |
| F | KÍCH THƯỚC HÌNH HỌC › W | (m) | nhập | 0.6 |  |  |
| G | KÍCH THƯỚC HÌNH HỌC › H | (m) | nhập | 1.3 |  |  |
| H | KÍCH THƯỚC HÌNH HỌC › Bê tông lót › Dày | (m) | nhập | 0.05 |  |  |
| I | KÍCH THƯỚC HÌNH HỌC › Bê tông lót › Mở rộng | (m) | công thức | 0.1 | `=+H12*2` | [Dày]*2 |
| J | KÍCH THƯỚC HÌNH HỌC › / Đáy dày | (m) | nhập | 0.15 |  |  |
| K | KÍCH THƯỚC HÌNH HỌC › / Thành dày | (m) | nhập | 0.145 |  |  |
| L | KÍCH THƯỚC HÌNH HỌC › / Nắp dày | (m) | nhập | 0.15 |  |  |
| N | Hao hụt BASE |  | công thức | 1 | `=+Nền!$K$10` | Nền!$K$10 |
| O | Hao hụt BT |  | công thức | 1 | `=+Nền!$L$10` | Nền!$L$10 |
| P | Base / / Đá dăm | (m3) | công thức | 0 | `=+E12*(F12+K12*2+I12)*M12*D12*N12` | [48.5]*([W]+[/ Thành dày]*2+[Mở rộng])*[H base]*[SL]*[Hao hụt BASE] |
| Q | CÔNG TÁC BÊ TÔNG › Bê tông lót | (m3) | công thức | 2.401 | `=+E12*(F12+K12*2+I12)*H12*D12*O12` | [48.5]*([W]+[/ Thành dày]*2+[Mở rộng])*[Dày]*[SL]*[Hao hụt BT] |
| R | CÔNG TÁC BÊ TÔNG › Bê tông | (m3) | công thức | 6.475 | `=+E12*(F12+K12*2)*J12*D12*O12` | [48.5]*([W]+[/ Thành dày]*2)*[/ Đáy dày]*[SL]*[Hao hụt BT] |
| S | CÔNG TÁC BÊ TÔNG › VK BT lót | (m2) | công thức | 4.85 | `=+E12*2*H12*D12` | [48.5]*2*[Dày]*[SL] |
| T | CÔNG TÁC BÊ TÔNG › Ván khuôn | (m2) | công thức | 14.55 | `=+(E12*2*J12)*D12` | ([48.5]*2*[/ Đáy dày])*[SL] |
| U | CÔNG TÁC BÊ TÔNG › Nilon / (Nếu có) | (m2) | công thức | 48.01 | `=+E12*(F12+K12*2+I12)*D12` | [48.5]*([W]+[/ Thành dày]*2+[Mở rộng])*[SL] |
| W | CÔNG TÁC BÊ TÔNG › Chống thấm trong | (m2) | công thức | 29.1 | `=+E12*F12*D12` | [48.5]*[W]*[SL] |
| Y | CỌC TRE CHO CỐNG › Chiều dài cọc  / (m) | (m) | nhập | 2.5 |  |  |
| Z | CỌC TRE CHO CỐNG › Số cọc tre/ / Cọc tràm › 20 | (cọc) | công thức | 960 | `=+IF(Y12>0,ROUND((F12+K12*2+I12)*E12*Z10,0),0)` | IF([Chiều dài cọc  / (m)]>0,ROUND(([W]+[/ Thành dày]*2+[Mở rộng])*[48.5]*Z10,0),0) |
| AA | CỌC TRE CHO CỐNG › Khối lượng cọc / (md) | (m) | công thức | 2400 | `=+Y12*Z12*D12` | [Chiều dài cọc  / (m)]*[20]*[SL] |
| AB | CÔNG TÁC ĐÀO ĐẮP › Cốt hiện trạng › -0.7 | (m) | công thức | -0.7 | `=+AB10` | AB10 |
| AC | CÔNG TÁC ĐÀO ĐẮP › Cốt trung bình  / (Dòng nước) | (m) | công thức | -1.35 | `=+-(1.3+1.4)/2` | -(1.3+1.4)/2 |
| AD | CÔNG TÁC ĐÀO ĐẮP › Mở rộng chân › 0.5 | (m) | công thức | 0.5 | `=+AD10` | AD10 |
| AE | CÔNG TÁC ĐÀO ĐẮP › Mở rộng đỉnh › 1.2 | (m) | công thức | 0.7125 | `=+AF12*IF(AF12<5,IF(AF12<=1.5,$AD$4,$AE$4),$AF$4)+AD12` | [Hđào]*IF([Hđào]<5,IF([Hđào]<=1.5,$AD$4,$AE$4),$AF$4)+[0.5] |
| AF | CÔNG TÁC ĐÀO ĐẮP › Hđào |  | công thức | 0.85 | `=-(AC12-H12-J12-M12-AB12)` | -([Cốt trung bình  / (Dòng nước)]-[Dày]-[/ Đáy dày]-[H base]-[-0.7]) |
| AG | CÔNG TÁC ĐÀO ĐẮP › Đào đất | (m3) | công thức | 86.68 | `=+((F12+K12*2+AD12*2)+(F12+K12*2+AE12*2))/2*AF12*E12*D12` | (([W]+[/ Thành dày]*2+[0.5]*2)+([W]+[/ Thành dày]*2+[1.2]*2))/2*[Hđào]*[48.5]*[SL] |
| AH | CÔNG TÁC ĐÀO ĐẮP › Đắp đất | (m3) | công thức | 49.74 | `=AG12-P12-Q12-R12-E12*(F12+K12*2)*(AF12-H12-J12-M12)*D12` | [Đào đất]-[Base / / Đá dăm]-[Bê tông lót]-[Bê tông]-[48.5]*([W]+[/ Thành dày]*2)*([Hđào]-[Dày]-[/ Đáy dày]-[H base])*[SL] |
| AI | Cốt thép › D | (mm) | nhập | 10 |  |  |
| AJ | Cốt thép › @ | (mm) | nhập | 200 |  |  |
| AK | Cốt thép › Layer |  | nhập | 2 |  |  |
| AL | Cốt thép › Kg/m2 | (Kg) | công thức | 12.35 | `=+IF(AK12>0,(1000*AI12^2/162*10^6*(1000/AJ12)*2*AK12)/10^9,0)` | IF([Layer]>0,(1000*[D]^2/162*10^6*(1000/[@])*2*[Layer])/10^9,0) |
| AM | Cốt thép › Hệ số |  | nhập | 1.12 |  |  |
| AN | Cốt thép › Trọng lượng | (Kg) | công thức | 596.8 | `=+E12*(F12+K12*2)*D12*AL12*AM12` | [48.5]*([W]+[/ Thành dày]*2)*[SL]*[Kg/m2]*[Hệ số] |

**Các mục/cấu kiện có trong sheet (cột B):** B= 600; Thành mương; Thành; Vát gia cường chân (Nếu có); Vát gia cường cổ (Nếu có); Nắp mương; H= 150mm; Ván be thành biên; Cộng:; Quy cách; B600 - Mương hở; Đáy mương; B600 - Mương nắp Grating; B300 - Mương nắp Grating; B= 300

## Sheet: Hố ga (Kiểu 1)

- Hàng tiêu đề: 6–7; dòng mẫu phân tích: **8** (cấu kiện: `M1.HG-01`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| A | TT |  | nhập | 1 |  |  |
| B | Cấu kiện |  | nhập | M1.HG-01 |  |  |
| D | Kiểu ga |  | nhập | Bê tông |  |  |
| E | SL |  | nhập | 1 |  |  |
| F | D / (mm) |  | nhập | 300 |  |  |
| G | KÍCH THƯỚC BAO NGOÀI › L / (mm) |  | công thức | 900 | `=+IF(F8>0,IF(D8="Bê tông",F8+150*4,F8+150*2+220*2),0)` | IF([D / (mm)]>0,IF([Kiểu ga]="Bê tông",[D / (mm)]+150*4,[D / (mm)]+150*2+220*2),0) |
| H | KÍCH THƯỚC BAO NGOÀI › W / (mm) |  | công thức | 900 | `=+G8` | [KÍCH THƯỚC BAO NGOÀI L / (mm)] |
| I | KÍCH THƯỚC BAO NGOÀI › H / (mm) |  | công thức | 720 | `=O8-M8` | [Cốt đỉnh ga / (mm)]-[Cốt đáy theo thiết  kế / (mm)] |
| J | KÍCH THƯỚC BAO NGOÀI › Đáy dày / (mm) |  | công thức | 150 | `=+IF(G8=0,0,IF(D8="Bê tông",150,100))` | IF([KÍCH THƯỚC BAO NGOÀI L / (mm)]=0,0,IF([Kiểu ga]="Bê tông",150,100)) |
| K | KÍCH THƯỚC BAO NGOÀI › Thành dày / (mm) |  | công thức | 150 | `=+IF(G8=0,0,IF(D8="Bê tông",150,220))` | IF([KÍCH THƯỚC BAO NGOÀI L / (mm)]=0,0,IF([Kiểu ga]="Bê tông",150,220)) |
| L | KÍCH THƯỚC BAO NGOÀI › Chiều dày BT lót / (mm) |  | nhập | 50 |  |  |
| M | Cốt đáy theo thiết  kế / (mm) |  | nhập | -900 |  |  |
| N | Cốt đào đất / (mm) |  | công thức | -1100 | `=M8-J8-L8` | [Cốt đáy theo thiết  kế / (mm)]-[Đáy dày / (mm)]-[Chiều dày BT lót / (mm)] |
| O | Cốt đỉnh ga / (mm) |  | công thức | -180 | `=+-330+150` | -330+150 |
| P | Hao hụt vật liệu |  | công thức | 1 | `=+Móng!$AN$12` | Móng!$AN$12 |
| Q | Trừ giao cắt cống › D |  | nhập | 300 |  |  |
| R | Trừ giao cắt cống › DMax / (Cống) |  | công thức | 400 | `=+IF(Q8=0,0,IF(Q8<1000,Q8+50*2,Q8+100*2))` | IF([D]=0,0,IF([D]<1000,[D]+50*2,[D]+100*2)) |
| S | Trừ giao cắt cống › Số giao cắt cống |  | nhập | 2 |  |  |
| T | Bê tông lót |  | công thức | 0.05 | `=+IF(G8=0,0,((G8+L8*2)*(H8+L8*2)*L8)/10^9*E8*P8)` | IF([KÍCH THƯỚC BAO NGOÀI L / (mm)]=0,0,(([KÍCH THƯỚC BAO NGOÀI L / (mm)]+[Chiều dày BT lót / (mm)]*2)*([KÍCH THƯỚC BAO NGOÀI W / (mm)]+[Chiều dày BT lót / (mm)]*2)*[Chiều dày BT lót / (mm)])/10^9*[SL]*[Hao hụt vật liệu]) |
| U | Bê tông lót › Ván khuôn lót |  | công thức | 0.2 | `=+IF(G8=0,0,(((G8+L8*2)+(H8+L8*2))*2*L8)/10^6*E8)` | IF([KÍCH THƯỚC BAO NGOÀI L / (mm)]=0,0,((([KÍCH THƯỚC BAO NGOÀI L / (mm)]+[Chiều dày BT lót / (mm)]*2)+([KÍCH THƯỚC BAO NGOÀI W / (mm)]+[Chiều dày BT lót / (mm)]*2))*2*[Chiều dày BT lót / (mm)])/10^6*[SL]) |
| V | HỐ GA XÂY GẠCH › Xây gạch / (m3) |  | công thức | 0 | `=+IF(D8="Xây gạch",(G8*K8*(I8-200)*2)+((H8-K8*2)*K8*(I8-200)*2)-R8^2*PI()/4*K8*S8,0)/10^9*E8` | IF([Kiểu ga]="Xây gạch",([KÍCH THƯỚC BAO NGOÀI L / (mm)]*[Thành dày / (mm)]*([H / (mm)]-200)*2)+(([KÍCH THƯỚC BAO NGOÀI W / (mm)]-[Thành dày / (mm)]*2)*[Thành dày / (mm)]*([H / (mm)]-200)*2)-[DMax / (Cống)]^2*PI()/4*[Thành dày / (mm)]*[Số giao cắt cống],0)/10^9*[SL] |
| W | HỐ GA XÂY GẠCH › Trát / (m2) |  | công thức | 0 | `=+IF(D8="Xây gạch",((G8+H8)*2+((G8-K8*2)+(H8-K8*2))*2)*I8-R8^2*PI()/4*2*S8,0)/10^6*E8` | IF([Kiểu ga]="Xây gạch",(([KÍCH THƯỚC BAO NGOÀI L / (mm)]+[KÍCH THƯỚC BAO NGOÀI W / (mm)])*2+(([KÍCH THƯỚC BAO NGOÀI L / (mm)]-[Thành dày / (mm)]*2)+([KÍCH THƯỚC BAO NGOÀI W / (mm)]-[Thành dày / (mm)]*2))*2)*[H / (mm)]-[DMax / (Cống)]^2*PI()/4*2*[Số giao cắt cống],0)/10^6*[SL] |
| X | HỐ GA XÂY GẠCH › (Bê tông đáy+cổ ga) / m3 |  | công thức | 0 | `=+IF(D8="Xây gạch",G8*H8*J8+G8*K8*200*2+(H8-K8*2)*K8*200,0)/10^9*P8*E8` | IF([Kiểu ga]="Xây gạch",[KÍCH THƯỚC BAO NGOÀI L / (mm)]*[KÍCH THƯỚC BAO NGOÀI W / (mm)]*[Đáy dày / (mm)]+[KÍCH THƯỚC BAO NGOÀI L / (mm)]*[Thành dày / (mm)]*200*2+([KÍCH THƯỚC BAO NGOÀI W / (mm)]-[Thành dày / (mm)]*2)*[Thành dày / (mm)]*200,0)/10^9*[Hao hụt vật liệu]*[SL] |
| Y | HỐ GA XÂY GẠCH › Ván khuôn đáy+cổ ga)  / (m2) |  | công thức | 0 | `=+IF(D8="Xây gạch",(G8+H8)*2*J8+(G8+H8)*2*200+(G8-K8*2)*4*200,0)/10^6*E8` | IF([Kiểu ga]="Xây gạch",([KÍCH THƯỚC BAO NGOÀI L / (mm)]+[KÍCH THƯỚC BAO NGOÀI W / (mm)])*2*[Đáy dày / (mm)]+([KÍCH THƯỚC BAO NGOÀI L / (mm)]+[KÍCH THƯỚC BAO NGOÀI W / (mm)])*2*200+([KÍCH THƯỚC BAO NGOÀI L / (mm)]-[Thành dày / (mm)]*2)*4*200,0)/10^6*[SL] |
| Z | HỐ GA BÊ TÔNG › Bê tông / (m3) |  | công thức | 0.4078 | `=+IF(G8=0,0,(IF(D8="Bê tông",(G8*H8*J8)+(G8*K8*I8*2)+((H8-K8*2)*K8*I8)*2-R8^2*PI()/4*K8*S8,0)/10^9*P8)*E8)` | IF([KÍCH THƯỚC BAO NGOÀI L / (mm)]=0,0,(IF([Kiểu ga]="Bê tông",([KÍCH THƯỚC BAO NGOÀI L / (mm)]*[KÍCH THƯỚC BAO NGOÀI W / (mm)]*[Đáy dày / (mm)])+([KÍCH THƯỚC BAO NGOÀI L / (mm)]*[Thành dày / (mm)]*[H / (mm)]*2)+(([KÍCH THƯỚC BAO NGOÀI W / (mm)]-[Thành dày / (mm)]*2)*[Thành dày / (mm)]*[H / (mm)])*2-[DMax / (Cống)]^2*PI()/4*[Thành dày / (mm)]*[Số giao cắt cống],0)/10^9*[Hao hụt vật liệu])*[SL]) |
| AA | HỐ GA BÊ TÔNG › Ván khuôn / (m2) |  | công thức | 4.734 | `=+IF(G8=0,0,IF(Q8>0,((IF(D8="Bê tông",G8*(I8+J8)*4+(G8-K8*2)*I8*4-R8^2*PI()/4*2*S8+R8*PI()*K8*S8,0)/10^6)*E8),((IF(D8="Bê tông",G8*(I8+J8)*4+(G8-K8*2)*I8*4,0)/10^6)*E8)))` | IF([KÍCH THƯỚC BAO NGOÀI L / (mm)]=0,0,IF([D]>0,((IF([Kiểu ga]="Bê tông",[KÍCH THƯỚC BAO NGOÀI L / (mm)]*([H / (mm)]+[Đáy dày / (mm)])*4+([KÍCH THƯỚC BAO NGOÀI L / (mm)]-[Thành dày / (mm)]*2)*[H / (mm)]*4-[DMax / (Cống)]^2*PI()/4*2*[Số giao cắt cống]+[DMax / (Cống)]*PI()*[Thành dày / (mm)]*[Số giao cắt cống],0)/10^6)*[SL]),((IF([Kiểu ga]="Bê tông",[KÍCH THƯỚC BAO NGOÀI L / (mm)]*([H / (mm)]+[Đáy dày / (mm)])*4+([KÍCH THƯỚC BAO NGOÀI L / (mm)]-[Thành dày / (mm)]*2)*[H / (mm)]*4,0)/10^6)*[SL]))) |
| AB | OPENING ( Nắp ga) › Kiểu nắp |  | nhập | Grating |  |  |
| AC | OPENING ( Nắp ga) › LxW / (mm) |  | công thức | LxW: 700x700 | `="LxW: "&AE8&"x"&AF8&""` | "LxW: "&[OPENING ( Nắp ga) L / (mm)]&"x"&[OPENING ( Nắp ga) W / (mm)]&"" |
| AD | OPENING ( Nắp ga) › Number |  | công thức | 1 | `=+IF(G8=0,0,IF(AE8=AF8,1,2))` | IF([KÍCH THƯỚC BAO NGOÀI L / (mm)]=0,0,IF([OPENING ( Nắp ga) L / (mm)]=[OPENING ( Nắp ga) W / (mm)],1,2)) |
| AE | OPENING ( Nắp ga) › L / (mm) |  | công thức | 700 | `=+IF(G8=0,0,IF(D8="Bê tông",G8-K8*2+100,G8-K8*2+100))` | IF([KÍCH THƯỚC BAO NGOÀI L / (mm)]=0,0,IF([Kiểu ga]="Bê tông",[KÍCH THƯỚC BAO NGOÀI L / (mm)]-[Thành dày / (mm)]*2+100,[KÍCH THƯỚC BAO NGOÀI L / (mm)]-[Thành dày / (mm)]*2+100)) |
| AF | OPENING ( Nắp ga) › W / (mm) |  | công thức | 700 | `=+IF(AE8>700,AE8/2-3,AE8)` | IF([OPENING ( Nắp ga) L / (mm)]>700,[OPENING ( Nắp ga) L / (mm)]/2-3,[OPENING ( Nắp ga) L / (mm)]) |
| AG | OPENING ( Nắp ga) › Bê tông / (m3) |  | công thức | 0 | `=+IF(AB8="Bê tông",(AE8*AF8*40)/10^9*AD8,0)*P8*E8` | IF([Kiểu nắp]="Bê tông",([OPENING ( Nắp ga) L / (mm)]*[OPENING ( Nắp ga) W / (mm)]*40)/10^9*[Number],0)*[Hao hụt vật liệu]*[SL] |
| AH | OPENING ( Nắp ga) › V4 (nắp) / (md) |  | công thức | 0 | `=+IF(AB8="Bê tông",(AE8+AF8)*2*AD8,0)/1000*E8` | IF([Kiểu nắp]="Bê tông",([OPENING ( Nắp ga) L / (mm)]+[OPENING ( Nắp ga) W / (mm)])*2*[Number],0)/1000*[SL] |
| AI | OPENING ( Nắp ga) › V5 (Cổ) / (md) |  | công thức | 2.8 | `=+AE8*4/1000*E8` | [OPENING ( Nắp ga) L / (mm)]*4/1000*[SL] |
| AJ | CỌC TRE - CỌC TRÀM › Chiều dài 1 cọc / (m) |  | nhập | 2 |  |  |
| AK | CỌC TRE - CỌC TRÀM › Số cọc |  | công thức | 30 | `=+IF(G8=0,0,ROUND((G8/1000+0.2)*(H8/1000+0.2)*25,0))` | IF([KÍCH THƯỚC BAO NGOÀI L / (mm)]=0,0,ROUND(([KÍCH THƯỚC BAO NGOÀI L / (mm)]/1000+0.2)*([KÍCH THƯỚC BAO NGOÀI W / (mm)]/1000+0.2)*25,0)) |
| AL | CỌC TRE - CỌC TRÀM › Khối lượng cọc / (m) |  | công thức | 60 | `=+AJ8*AK8*E8` | [Chiều dài 1 cọc / (m)]*[Số cọc]*[SL] |
| AM | ĐÀO ĐẮP › Cốt hiện trạng / (mm) |  | công thức | -500 | `=Móng!BO12*1000` | Móng!BO12*1000 |
| AN | ĐÀO ĐẮP › Mở rộng chân / (mm) |  | nhập | 500 |  |  |
| AO | ĐÀO ĐẮP › Mở rộng đỉnh / (mm) |  | công thức | 650 | `=AP8*IF(AP8<5000,IF(AP8<=1500,$AN$3/1,$AO$3/1),$AP$3/1)+AN8` | [Hđào / (mm)]*IF([Hđào / (mm)]<5000,IF([Hđào / (mm)]<=1500,$AN$3/1,$AO$3/1),$AP$3/1)+[Mở rộng chân / (mm)] |
| AP | ĐÀO ĐẮP › Hđào / (mm) |  | công thức | 600 | `=+-N8+AM8` | -[Cốt đào đất / (mm)]+[Cốt hiện trạng / (mm)] |
| AQ | ĐÀO ĐẮP › Đào đất / (m3) |  | công thức | 1.456 | `=IF(G8=0,0,((G8+AN8*2)*(H8+AN8*2)+((G8+AO8*2)*(H8+AO8*2))/2*AP8)/10^9*E8)` | IF([KÍCH THƯỚC BAO NGOÀI L / (mm)]=0,0,(([KÍCH THƯỚC BAO NGOÀI L / (mm)]+[Mở rộng chân / (mm)]*2)*([KÍCH THƯỚC BAO NGOÀI W / (mm)]+[Mở rộng chân / (mm)]*2)+(([KÍCH THƯỚC BAO NGOÀI L / (mm)]+[Mở rộng đỉnh / (mm)]*2)*([KÍCH THƯỚC BAO NGOÀI W / (mm)]+[Mở rộng đỉnh / (mm)]*2))/2*[Hđào / (mm)])/10^9*[SL]) |
| AR | ĐÀO ĐẮP › Đắp đất / (m3) |  | công thức | 0.9601 | `=+IF(G8=0,0,AQ8-T8-G8*H8*(AP8-L8)/10^9*E8)` | IF([KÍCH THƯỚC BAO NGOÀI L / (mm)]=0,0,[Đào đất / (m3)]-[Bê tông lót]-[KÍCH THƯỚC BAO NGOÀI L / (mm)]*[KÍCH THƯỚC BAO NGOÀI W / (mm)]*([Hđào / (mm)]-[Chiều dày BT lót / (mm)])/10^9*[SL]) |
| AS | ĐÀO ĐẮP › Vận chuyển / (m3) |  | công thức | 0.4955 | `=+AQ8-AR8` | [Đào đất / (m3)]-[Đắp đất / (m3)] |

**Các mục/cấu kiện có trong sheet (cột B):** M1.HG-01; M1.HG-02; M1.HG-03; M1.HG-04; M1.HG-05; M1.HG-06; M1.HG-07; M1.HG-08; M1.HG-09; M1.HG-10; M1.HG-11; M1.HG-12; M1.HG-13; M1.HG-14; M1.HG-15; M1.HG-16; M1.HG-17; M1.HG-18; M1.HG-19; M1.HG-20; M1.HG-21; M1.HG-22; M1.HG-23; M1.HG-24; M1.HG-25; M1.HG-26; M1.HG-27; M1.HG-28; M1.HG-29; M1.HG-30; TỔNG CỘNG

## Sheet: Hố ga (Kiểu 2)

- Hàng tiêu đề: 6–7; dòng mẫu phân tích: **8** (cấu kiện: `M1.HG-01`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| A | TT |  | nhập | 1 |  |  |
| B | Cấu kiện |  | nhập | M1.HG-01 |  |  |
| D | SL |  | nhập | 1 |  |  |
| E | D / (mm) |  | nhập | 800 |  |  |
| F | KÍCH THƯỚC BAO NGOÀI › DÀI / (mm) |  | công thức | 1500 | `=+E8+150*2+K8*2` | [D / (mm)·E]+150*2+[W1 / Thành hầm ga / (mm)]*2 |
| G | KÍCH THƯỚC BAO NGOÀI › RỘNG / (mm) |  | công thức | 1500 | `=+E8+150*2+K8*2` | [D / (mm)·E]+150*2+[W1 / Thành hầm ga / (mm)]*2 |
| H | KÍCH THƯỚC BAO NGOÀI › CAO / (mm) |  | công thức | 950 | `=+IF(S8+U8=0,0,U8-S8-Q8)` | IF([Cốt đáy theo thiết  kế / (mm)]+[Cốt đỉnh ga / (mm)]=0,0,[Cốt đỉnh ga / (mm)]-[Cốt đáy theo thiết  kế / (mm)]-[H2 / Cổ ga / (mm)]) |
| I | KÍCH THƯỚC BAO NGOÀI › Đáy dày / (mm) |  | nhập | 200 |  |  |
| J | KÍCH THƯỚC BAO NGOÀI › Vát chân |  | nhập | 200 |  |  |
| K | KÍCH THƯỚC BAO NGOÀI › W1 / Thành hầm ga / (mm) |  | nhập | 200 |  |  |
| L | KÍCH THƯỚC BAO NGOÀI › H1  / Nắp hầm ga |  | nhập | 200 |  |  |
| M | KÍCH THƯỚC BAO NGOÀI › Chiều dày BT lót / (mm) |  | nhập | 100 |  |  |
| N | KÍCH THƯỚC BAO NGOÀI › W / (mm) |  | nhập | 900 |  |  |
| O | KÍCH THƯỚC BAO NGOÀI › L / (mm) |  | công thức | 900 | `=+N8` | [W / (mm)] |
| P | KÍCH THƯỚC BAO NGOÀI › Nắp đậy dày |  | nhập | 90 |  |  |
| Q | KÍCH THƯỚC BAO NGOÀI › H2 / Cổ ga / (mm) |  | nhập | 600 |  |  |
| R | KÍCH THƯỚC BAO NGOÀI › W2 /  Vách cổ dày / (mm) |  | nhập | 200 |  |  |
| S | Cốt đáy theo thiết  kế / (mm) |  | nhập | -1700 |  |  |
| T | Cốt đào đất / (mm) |  | công thức | -2000 | `=IF(S8=0,0,S8-I8-M8)` | IF([Cốt đáy theo thiết  kế / (mm)]=0,0,[Cốt đáy theo thiết  kế / (mm)]-[Đáy dày / (mm)]-[Chiều dày BT lót / (mm)]) |
| U | Cốt đỉnh ga / (mm) |  | nhập | -150 |  |  |
| V | Hao hụt vật liệu |  | công thức | 1 | `=+Móng!$AN$12` | Móng!$AN$12 |
| W | TRỪ GIAO CỐNG › D |  | nhập | 800 |  |  |
| X | TRỪ GIAO CỐNG › Dmax |  | công thức | 900 | `=+IF(W8=0,0,IF(W8<1000,W8+50*2,W8+100*2))` | IF([D]=0,0,IF([D]<1000,[D]+50*2,[D]+100*2)) |
| Y | TRỪ GIAO CỐNG › Số giao cắt |  | nhập | 2 |  |  |
| Z | HỐ GA BÊ TÔNG › Bê tông lót / (m3) |  | công thức | 0.289 | `=+IF(F8=0,0,(F8+M8*2)*(G8+M8*2)*M8*D8*V8/10^9)` | IF([DÀI / (mm)]=0,0,([DÀI / (mm)]+[Chiều dày BT lót / (mm)]*2)*([RỘNG / (mm)]+[Chiều dày BT lót / (mm)]*2)*[Chiều dày BT lót / (mm)]*[SL]*[Hao hụt vật liệu]/10^9) |
| AA | HỐ GA BÊ TÔNG › Bê tông / (m3) |  | công thức | 2.008 | `=+IF(J8>0,IF(F8=0,0,(F8*G8*I8+(F8-(K8*2)+G8-(K8*2))*2*J8*J8/2+(F8*2+(G8-K8*2)*2)*K8*H8+(F8*G8-(N8-R8*2)*(O8-R8*2))*L8+((N8*2)+(O8-R8*2)*2)*R8*Q8-X8^2*PI()/4*K8*Y8)*D8*V8/10^9),IF(F8=0,0,(F8*G8*I8+(F8*2+(G8-K8*2)*2)*K8*H8+(F8*G8-(N8-R8*2)*(O8-R8*2))*L8+((N8*2)+(O8-R8*2)*2)*R8*Q8-X8^2*PI()/4*K8*Y8)*D8*V8/10^9))` | IF([Vát chân]>0,IF([DÀI / (mm)]=0,0,([DÀI / (mm)]*[RỘNG / (mm)]*[Đáy dày / (mm)]+([DÀI / (mm)]-([W1 / Thành hầm ga / (mm)]*2)+[RỘNG / (mm)]-([W1 / Thành hầm ga / (mm)]*2))*2*[Vát chân]*[Vát chân]/2+([DÀI / (mm)]*2+([RỘNG / (mm)]-[W1 / Thành hầm ga / (mm)]*2)*2)*[W1 / Thành hầm ga / (mm)]*[CAO / (mm)]+([DÀI / (mm)]*[RỘNG / (mm)]-([W / (mm)]-[W2 /  Vách cổ dày / (mm)]*2)*([L / (mm)]-[W2 /  Vách cổ dày / (mm)]*2))*[H1  / Nắp hầm ga]+(([W / (mm)]*2)+([L / (mm)]-[W2 /  Vách cổ dày / (mm)]*2)*2)*[W2 /  Vách cổ dày / (mm)]*[H2 / Cổ ga / (mm)]-[Dmax]^2*PI()/4*[W1 / Thành hầm ga / (mm)]*[Số giao cắt])*[SL]*[Hao hụt vật liệu]/10^9),IF([DÀI / (mm)]=0,0,([DÀI / (mm)]*[RỘNG / (mm)]*[Đáy dày / (mm)]+([DÀI / (mm)]*2+([RỘNG / (mm)]-[W1 / Thành hầm ga / (mm)]*2)*2)*[W1 / Thành hầm ga / (mm)]*[CAO / (mm)]+([DÀI / (mm)]*[RỘNG / (mm)]-([W / (mm)]-[W2 /  Vách cổ dày / (mm)]*2)*([L / (mm)]-[W2 /  Vách cổ dày / (mm)]*2))*[H1  / Nắp hầm ga]+(([W / (mm)]*2)+([L / (mm)]-[W2 /  Vách cổ dày / (mm)]*2)*2)*[W2 /  Vách cổ dày / (mm)]*[H2 / Cổ ga / (mm)]-[Dmax]^2*PI()/4*[W1 / Thành hầm ga / (mm)]*[Số giao cắt])*[SL]*[Hao hụt vật liệu]/10^9)) |
| AB | HỐ GA BÊ TÔNG › Ván khuôn lót / (m2) |  | công thức | 0.68 | `=+IF(F8=0,0,((F8+M8*2)+(G8+M8*2))*2*M8*D8/10^6)` | IF([DÀI / (mm)]=0,0,(([DÀI / (mm)]+[Chiều dày BT lót / (mm)]*2)+([RỘNG / (mm)]+[Chiều dày BT lót / (mm)]*2))*2*[Chiều dày BT lót / (mm)]*[SL]/10^6) |
| AC | HỐ GA BÊ TÔNG › Ván khuôn / (m2) |  | công thức | 15.09 | `=+IF(F8=0,0,((F8+G8)*2*I8+((F8+G8)*2+((F8-K8*2)+(G8-K8*2))*2)*H8+((F8-K8*2)*(G8-K8*2)-(N8-R8*2)*(O8-R8*2))+((N8+O8)*2*Q8+((N8-P8*2)+(O8-P8*2))*2*(Q8+L8))-X8^2*PI()/4*2*Y8+X8*PI()*K8*Y8)*D8/10^6)` | IF([DÀI / (mm)]=0,0,(([DÀI / (mm)]+[RỘNG / (mm)])*2*[Đáy dày / (mm)]+(([DÀI / (mm)]+[RỘNG / (mm)])*2+(([DÀI / (mm)]-[W1 / Thành hầm ga / (mm)]*2)+([RỘNG / (mm)]-[W1 / Thành hầm ga / (mm)]*2))*2)*[CAO / (mm)]+(([DÀI / (mm)]-[W1 / Thành hầm ga / (mm)]*2)*([RỘNG / (mm)]-[W1 / Thành hầm ga / (mm)]*2)-([W / (mm)]-[W2 /  Vách cổ dày / (mm)]*2)*([L / (mm)]-[W2 /  Vách cổ dày / (mm)]*2))+(([W / (mm)]+[L / (mm)])*2*[H2 / Cổ ga / (mm)]+(([W / (mm)]-[Nắp đậy dày]*2)+([L / (mm)]-[Nắp đậy dày]*2))*2*([H2 / Cổ ga / (mm)]+[H1  / Nắp hầm ga]))-[Dmax]^2*PI()/4*2*[Số giao cắt]+[Dmax]*PI()*[W1 / Thành hầm ga / (mm)]*[Số giao cắt])*[SL]/10^6) |
| AD | OPENING ( Nắp ga) › Kiểu nắp |  | nhập | Bê tông |  |  |
| AE | OPENING ( Nắp ga) › LxW / (mm) |  | công thức | LxW: 900x900 | `="LxW: "&N8&"x"&O8&""` | "LxW: "&[W / (mm)]&"x"&[L / (mm)]&"" |
| AF | OPENING ( Nắp ga) › Số nắp / (cái) |  | nhập | 1 |  |  |
| AG | OPENING ( Nắp ga) › D / (mm) |  | công thức | 600 | `=+N8-R8*2+50*2` | [W / (mm)]-[W2 /  Vách cổ dày / (mm)]*2+50*2 |
| AH | OPENING ( Nắp ga) › R / (mm) |  | công thức | 600 | `=+O8-R8*2+50*2` | [L / (mm)]-[W2 /  Vách cổ dày / (mm)]*2+50*2 |
| AI | OPENING ( Nắp ga) › C / (mm) |  | nhập | 90 |  |  |
| AJ | OPENING ( Nắp ga) › Bê tông / (m3) |  | công thức | 0.0324 | `=+IF(AD8="Bê tông",AG8*AH8*AI8*AF8*V8/10^9,0)` | IF([Kiểu nắp]="Bê tông",[OPENING ( Nắp ga) D / (mm)]*[R / (mm)]*[C / (mm)]*[Số nắp / (cái)]*[Hao hụt vật liệu]/10^9,0) |
| AK | OPENING ( Nắp ga) › V4 (nắp) / (md) |  | công thức | 2.4 | `=+IF(AD8="Bê tông",(AG8+AH8)*2*AF8*D8/1000,0)` | IF([Kiểu nắp]="Bê tông",([OPENING ( Nắp ga) D / (mm)]+[R / (mm)])*2*[Số nắp / (cái)]*[SL]/1000,0) |
| AL | OPENING ( Nắp ga) › V5 (Cổ) / (md) |  | công thức | 2.4 | `=+(AG8+AH8)*2*AF8*D8/1000` | ([OPENING ( Nắp ga) D / (mm)]+[R / (mm)])*2*[Số nắp / (cái)]*[SL]/1000 |
| AM | CỌC TRE -CỌC TRÀM › Chiều dài 1 cọc / (m) |  | nhập | 2.5 |  |  |
| AN | CỌC TRE -CỌC TRÀM › Số cọc |  | công thức | 56 | `=+IF(F8=0,0,ROUND((F8/1000)*(G8/1000)*25,0))` | IF([DÀI / (mm)]=0,0,ROUND(([DÀI / (mm)]/1000)*([RỘNG / (mm)]/1000)*25,0)) |
| AO | CỌC TRE -CỌC TRÀM › Khối lượng cọc / (m) |  | công thức | 140 | `=+AM8*AN8*D8` | [Chiều dài 1 cọc / (m)]*[Số cọc]*[SL] |
| AP | ĐÀO ĐẮP › Cốt hiện trạng / (mm) |  | công thức | -500 | `=Móng!BO12*1000` | Móng!BO12*1000 |
| AQ | ĐÀO ĐẮP › Mở rộng chân / (mm) |  | nhập | 500 |  |  |
| AR | ĐÀO ĐẮP › Mở rộng đỉnh / (mm) |  | công thức | 875 | `=IF(S8=0,0,AS8*IF(AS8<5000,IF(AS8<=1500,$AQ$3/1,$AR$3/1),$AS$3/1)+AQ8)` | IF([Cốt đáy theo thiết  kế / (mm)]=0,0,[Hđào / (mm)]*IF([Hđào / (mm)]<5000,IF([Hđào / (mm)]<=1500,$AQ$3/1,$AR$3/1),$AS$3/1)+[Mở rộng chân / (mm)]) |
| AS | ĐÀO ĐẮP › Hđào / (mm) |  | công thức | 1500 | `=+IF(S8=0,0,-T8+AP8)` | IF([Cốt đáy theo thiết  kế / (mm)]=0,0,-[Cốt đào đất / (mm)]+[Cốt hiện trạng / (mm)]) |
| AT | ĐÀO ĐẮP › Đào đất / (m3) |  | công thức | 7.928 | `=IF(F8=0,0,IF(S8=0,0,((F8+AQ8*2)*(G8+AQ8*2)+((F8+AR8*2)*(G8+AR8*2))/2*AS8)/10^9*D8))` | IF([DÀI / (mm)]=0,0,IF([Cốt đáy theo thiết  kế / (mm)]=0,0,(([DÀI / (mm)]+[Mở rộng chân / (mm)]*2)*([RỘNG / (mm)]+[Mở rộng chân / (mm)]*2)+(([DÀI / (mm)]+[Mở rộng đỉnh / (mm)]*2)*([RỘNG / (mm)]+[Mở rộng đỉnh / (mm)]*2))/2*[Hđào / (mm)])/10^9*[SL])) |
| AU | ĐÀO ĐẮP › Đắp đất / (m3) |  | công thức | 4.489 | `=+IF(S8=0,0,AT8-Z8-F8*G8*(AS8-M8)/10^9*D8)` | IF([Cốt đáy theo thiết  kế / (mm)]=0,0,[Đào đất / (m3)]-[Bê tông lót / (m3)]-[DÀI / (mm)]*[RỘNG / (mm)]*([Hđào / (mm)]-[Chiều dày BT lót / (mm)])/10^9*[SL]) |
| AV | ĐÀO ĐẮP › Vận chuyển / (m3) |  | công thức | 3.439 | `=+AT8-AU8` | [Đào đất / (m3)]-[Đắp đất / (m3)] |

**Các mục/cấu kiện có trong sheet (cột B):** M1.HG-01; M1.HG-02; M1.HG-03; M1.HG-04; M1.HG-05; M1.HG-06; M1.HG-07; M1.HG-08; M1.HG-09; M1.HG-10; M1.HG-11; M1.HG-12; M1.HG-13; M1.HG-14; M1.HG-15; M1.HG-16; M1.HG-17; M1.HG-18; M1.HG-19; M1.HG-20; M1.HG-21; M1.HG-22; M1.HG-23; M1.HG-24; M1.HG-25; M1.HG-26; M1.HG-27; M1.HG-28; M1.HG-29; M1.HG-30; TỔNG CỘNG

## Sheet: Bể nước PCCC

- Hàng tiêu đề: 6–11; dòng mẫu phân tích: **12** (cấu kiện: `H= 350 mm`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Cấu kiện |  | công thức | H= 350 mm | `="H= "&I12*1000&" mm"` | "H= "&[Đáy dày]*1000&" mm" |
| D | Ký hiệu |  | nhập | IW1 |  |  |
| E | Số lượng |  | nhập | 1 |  |  |
| F | KÍCH THƯỚC BỂ › Dài | (m) | nhập | 20.85 |  |  |
| G | KÍCH THƯỚC BỂ › Rộng | (m) | nhập | 12 |  |  |
| H | KÍCH THƯỚC BỂ › Cao | (m) | nhập | 3.05 |  |  |
| I | KÍCH THƯỚC BỂ › Đáy dày | (m) | nhập | 0.35 |  |  |
| J | KÍCH THƯỚC BỂ › Bê tôg lót › Dày | (m) | nhập | 0.05 |  |  |
| K | KÍCH THƯỚC BỂ › Bê tôg lót › Mở rộng | (m) | nhập | 0.1 |  |  |
| L | KÍCH THƯỚC BỂ › Nắp  dày | (m) | nhập | 0.16 |  |  |
| N | Hệ số hao hụt › Bê tông |  | công thức | 1 | `=+Móng!$AN$12` | Móng![@ - 4 TOP] |
| O | ĐÁY VÀ THÀNH BỂ › BT lót | (m3) | công thức | 12.84 | `=+(F12+K12*2)*(G12+K12*2)*J12*N12*E12` | ([Dài]+[Mở rộng]*2)*([Rộng]+[Mở rộng]*2)*[Dày]*[Hệ số hao hụt Bê tông]*[Số lượng] |
| P | ĐÁY VÀ THÀNH BỂ › VK BT Lót | (m2) | công thức | 3.325 | `=+((F12+K12*2)+(G12+K12*2))*2*J12*E12` | (([Dài]+[Mở rộng]*2)+([Rộng]+[Mở rộng]*2))*2*[Dày]*[Số lượng] |
| Q | ĐÁY VÀ THÀNH BỂ › Bê tông | (m3) | công thức | 87.57 | `=+F12*G12*I12*E12*N12` | [Dài]*[Rộng]*[Đáy dày]*[Số lượng]*[Hệ số hao hụt Bê tông] |
| R | ĐÁY VÀ THÀNH BỂ › Ván khuôn | (m2) | công thức | 23 | `=+(F12+G12)*2*I12*E12` | ([Dài]+[Rộng])*2*[Đáy dày]*[Số lượng] |
| U | ĐÁY VÀ THÀNH BỂ › EW1 › Chống thấm / Ngoài | (m2) | công thức | 0 | `=+IF($D12="EW1",$F12*$G12*$E12,0)` | IF([Ký hiệu]="EW1",[Dài]*[Rộng]*[Số lượng],0) |
| V | ĐÁY VÀ THÀNH BỂ › IW1 › Chống thấm / trong | (m2) | công thức | 250.2 | `=+IF($D12="IW1",$F12*$G12*$E12,0)` | IF([Ký hiệu]="IW1",[Dài]*[Rộng]*[Số lượng],0) |
| X | ĐÁY VÀ THÀNH BỂ › Cán mặt bê tông | (m2) | công thức | 250.2 | `=+F12*G12*E12` | [Dài]*[Rộng]*[Số lượng] |
| Z | ĐÀO ĐẮP › Cốt hiện trạng/ Cao độ trước khi đào bể › -0.3 | (m) | công thức | -0.3 | `=+Z10` | Z10 |
| AA | ĐÀO ĐẮP › Mở rộng chân › 1.2 | (m) | công thức | 1.2 | `=+AA10` | AA10 |
| AB | ĐÀO ĐẮP › Mở rộng đỉnh › 2 | (m) | công thức | 2 | `=+AB10` | AB10 |
| AC | ĐÀO ĐẮP › FL đỉnh bể | (m) | nhập | -0.1 |  |  |
| AD | ĐÀO ĐẮP › Cao đào | (m) | công thức | 3.25 | `=+H12+I12+J12+Z12-AC12` | [Cao]+[Đáy dày]+[Dày]+[-0.3]-[FL đỉnh bể] |
| AE | ĐÀO ĐẮP › Đào đất | (m3) | công thức | 1190 | `=+((F12+AA12*2)*(G12+AA12*2)+(F12+AB12*2)*(G12+AB12*2))/2*AD12*E12` | (([Dài]+[1.2]*2)*([Rộng]+[1.2]*2)+([Dài]+[2]*2)*([Rộng]+[2]*2))/2*[Cao đào]*[Số lượng] |
| AF | ĐÀO ĐẮP › Đắp đất | (m3) | công thức | 376.7 | `=+AE12-O12-Q12-((F12)*(G12)*(AD12-I12-J12)*E12)` | [Đào đất]-[BT lót]-[ĐÁY VÀ THÀNH BỂ Bê tông]-(([Dài])*([Rộng])*([Cao đào]-[Đáy dày]-[Dày])*[Số lượng]) |
| AG | CỐT THÉP › Ø - 1 › BOT |  | nhập | 14 |  |  |
| AH | CỐT THÉP › Ø - 2 › BOT |  | công thức | 14 | `=+AG12` | [Ø - 1 BOT] |
| AI | CỐT THÉP › Ø - 3 › TOP |  | công thức | 14 | `=+AH12` | [Ø - 2 BOT] |
| AJ | CỐT THÉP › Ø - 4 › TOP |  | công thức | 14 | `=+AI12` | [Ø - 3 TOP] |
| AK | CỐT THÉP › @ - 1 › BOT |  | nhập | 150 |  |  |
| AL | CỐT THÉP › @ - 2 › BOT |  | công thức | 150 | `=+AK12` | [@ - 1 BOT] |
| AM | CỐT THÉP › @ - 3 › TOP |  | công thức | 150 | `=+AL12` | [@ - 2 BOT] |
| AN | CỐT THÉP › @ - 4 › TOP |  | công thức | 150 | `=+AM12` | [@ - 3 TOP] |
| AO | CỐT THÉP › kg/m2 |  | công thức | 32.26 | `=+IF(AG12>0,AG12*AG12/162*(1000/AK12)+AH12*AH12/162*(1000/AL12)+AI12*AI12/162*(1000/AM12)+AJ12*AJ12/162*(1000/AN12),0)` | IF([Ø - 1 BOT]>0,[Ø - 1 BOT]*[Ø - 1 BOT]/162*(1000/[@ - 1 BOT])+[Ø - 2 BOT]*[Ø - 2 BOT]/162*(1000/[@ - 2 BOT])+[Ø - 3 TOP]*[Ø - 3 TOP]/162*(1000/[@ - 3 TOP])+[Ø - 4 TOP]*[Ø - 4 TOP]/162*(1000/[@ - 4 TOP]),0) |
| AP | CỐT THÉP › Hệ số |  | nhập | 1.12 |  |  |
| AQ | CỐT THÉP › Trọng lượng / (kg) |  | công thức | 9041 | `=+F12*G12*E12*AO12*AP12` | [Dài]*[Rộng]*[Số lượng]*[kg/m2]*[Hệ số] |

**Các mục/cấu kiện có trong sheet (cột B):** H= 350 mm; H= 0 mm; Trừ móng (nếu có); F1; F1A; Trừ dầm móng (nếu có); DB1; DB2; DB3; Dầm móng; Trừ giao ván khuôn (Nếu có); Giao mặt cắt dầm phụ; Thành bể; Vách W1; Vách W2; Vát thành (nếu có); Vát chân vách (nếu có); Sàn nắp bể; H= 160 mm; Ván khuôn be biên bể; Ván khuôn be lỗ mở; Trừ nắp thăm; WxH: 800x800; WxH: 0x0; Trừ thành bể; Tổng diện tích; Nắp thăm bê tông; Cột bể; C1; C2; C3; Dầm sàn nắp; B1; B2; B3

## Sheet: Bể XLNT

- Hàng tiêu đề: 6–11; dòng mẫu phân tích: **12** (cấu kiện: `H= 500 mm`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| B | Cấu kiện |  | công thức | H= 500 mm | `="H= "&I12*1000&" mm"` | "H= "&[Đáy dày]*1000&" mm" |
| D | Ký hiệu |  | nhập | IW1 |  |  |
| E | Số lượng |  | nhập | 1 |  |  |
| F | KÍCH THƯỚC BỂ › Dài | (m) | nhập | 30 |  |  |
| G | KÍCH THƯỚC BỂ › Rộng | (m) | nhập | 25 |  |  |
| H | KÍCH THƯỚC BỂ › Cao | (m) | nhập | 4.15 |  |  |
| I | KÍCH THƯỚC BỂ › Đáy dày | (m) | nhập | 0.5 |  |  |
| J | KÍCH THƯỚC BỂ › Bê tôg lót › Dày | (m) | nhập | 0.05 |  |  |
| K | KÍCH THƯỚC BỂ › Bê tôg lót › Mở rộng | (m) | nhập | 0.1 |  |  |
| L | KÍCH THƯỚC BỂ › Nắp  dày | (m) | nhập | 0.16 |  |  |
| N | Hệ số hao hụt › Bê tông |  | công thức | 1 | `=+Móng!$AN$12` | Móng![@ - 4 TOP] |
| O | ĐÁY VÀ THÀNH BỂ › BT lót | (m3) | công thức | 38.05 | `=+(F12+K12*2)*(G12+K12*2)*J12*N12*E12` | ([Dài]+[Mở rộng]*2)*([Rộng]+[Mở rộng]*2)*[Dày]*[Hệ số hao hụt Bê tông]*[Số lượng] |
| P | ĐÁY VÀ THÀNH BỂ › VK BT Lót | (m2) | công thức | 5.54 | `=+((F12+K12*2)+(G12+K12*2))*2*J12*E12` | (([Dài]+[Mở rộng]*2)+([Rộng]+[Mở rộng]*2))*2*[Dày]*[Số lượng] |
| Q | ĐÁY VÀ THÀNH BỂ › Bê tông | (m3) | công thức | 375 | `=+F12*G12*I12*E12*N12` | [Dài]*[Rộng]*[Đáy dày]*[Số lượng]*[Hệ số hao hụt Bê tông] |
| R | ĐÁY VÀ THÀNH BỂ › Ván khuôn | (m2) | công thức | 55 | `=+(F12+G12)*2*I12*E12` | ([Dài]+[Rộng])*2*[Đáy dày]*[Số lượng] |
| U | ĐÁY VÀ THÀNH BỂ › EW1 › Chống thấm / Ngoài | (m2) | công thức | 0 | `=+IF($D12="EW1",$F12*$G12*$E12,0)` | IF([Ký hiệu]="EW1",[Dài]*[Rộng]*[Số lượng],0) |
| V | ĐÁY VÀ THÀNH BỂ › IW1 › Chống thấm / trong | (m2) | công thức | 750 | `=+IF($D12="IW1",$F12*$G12*$E12,0)` | IF([Ký hiệu]="IW1",[Dài]*[Rộng]*[Số lượng],0) |
| X | ĐÁY VÀ THÀNH BỂ › Cán mặt bê tông | (m2) | công thức | 750 | `=+F12*G12*E12` | [Dài]*[Rộng]*[Số lượng] |
| Z | ĐÀO ĐẮP › Cốt hiện trạng/ Cao độ trước khi đào bể › -0.3 | (m) | công thức | -0.3 | `=+Z10` | Z10 |
| AA | ĐÀO ĐẮP › Mở rộng chân › 1.2 | (m) | công thức | 1.2 | `=+AA10` | AA10 |
| AB | ĐÀO ĐẮP › Mở rộng đỉnh › 2 | (m) | công thức | 2 | `=+AB10` | AB10 |
| AC | ĐÀO ĐẮP › FL đỉnh bể | (m) | nhập | -0.1 |  |  |
| AD | ĐÀO ĐẮP › Cao đào | (m) | công thức | 4.5 | `=+H12+I12+J12+Z12-AC12` | [Cao]+[Đáy dày]+[Dày]+[-0.3]-[FL đỉnh bể] |
| AE | ĐÀO ĐẮP › Đào đất | (m3) | công thức | 4216 | `=+((F12+AA12*2)*(G12+AA12*2)+(F12+AB12*2)*(G12+AB12*2))/2*AD12*E12` | (([Dài]+[1.2]*2)*([Rộng]+[1.2]*2)+([Dài]+[2]*2)*([Rộng]+[2]*2))/2*[Cao đào]*[Số lượng] |
| AF | ĐÀO ĐẮP › Đắp đất | (m3) | công thức | 840.4 | `=+AE12-O12-Q12-((F12)*(G12)*(AD12-I12-J12)*E12)` | [Đào đất]-[BT lót]-[ĐÁY VÀ THÀNH BỂ Bê tông]-(([Dài])*([Rộng])*([Cao đào]-[Đáy dày]-[Dày])*[Số lượng]) |
| AG | CỐT THÉP › Ø - 1 › BOT |  | nhập | 18 |  |  |
| AH | CỐT THÉP › Ø - 2 › BOT |  | công thức | 18 | `=+AG12` | [Ø - 1 BOT] |
| AI | CỐT THÉP › Ø - 3 › TOP |  | công thức | 18 | `=+AH12` | [Ø - 2 BOT] |
| AJ | CỐT THÉP › Ø - 4 › TOP |  | công thức | 18 | `=+AI12` | [Ø - 3 TOP] |
| AK | CỐT THÉP › @ - 1 › BOT |  | nhập | 150 |  |  |
| AL | CỐT THÉP › @ - 2 › BOT |  | công thức | 150 | `=+AK12` | [@ - 1 BOT] |
| AM | CỐT THÉP › @ - 3 › TOP |  | công thức | 150 | `=+AL12` | [@ - 2 BOT] |
| AN | CỐT THÉP › @ - 4 › TOP |  | công thức | 150 | `=+AM12` | [@ - 3 TOP] |
| AO | CỐT THÉP › kg/m2 |  | công thức | 53.33 | `=+IF(AG12>0,AG12*AG12/162*(1000/AK12)+AH12*AH12/162*(1000/AL12)+AI12*AI12/162*(1000/AM12)+AJ12*AJ12/162*(1000/AN12),0)` | IF([Ø - 1 BOT]>0,[Ø - 1 BOT]*[Ø - 1 BOT]/162*(1000/[@ - 1 BOT])+[Ø - 2 BOT]*[Ø - 2 BOT]/162*(1000/[@ - 2 BOT])+[Ø - 3 TOP]*[Ø - 3 TOP]/162*(1000/[@ - 3 TOP])+[Ø - 4 TOP]*[Ø - 4 TOP]/162*(1000/[@ - 4 TOP]),0) |
| AP | CỐT THÉP › Hệ số |  | nhập | 1.12 |  |  |
| AQ | CỐT THÉP › Trọng lượng / (kg) |  | công thức | 4.48e+04 | `=+F12*G12*E12*AO12*AP12` | [Dài]*[Rộng]*[Số lượng]*[kg/m2]*[Hệ số] |

**Các mục/cấu kiện có trong sheet (cột B):** H= 500 mm; H= 0 mm; Trừ móng (nếu có); F1; F1A; Trừ dầm móng (nếu có); DB1; DB2; DB3; Dầm móng; Trừ giao ván khuôn (Nếu có); Giao mặt cắt dầm phụ; Thành bể; Vách W1; Vách W2; Vát thành (nếu có); Vát chân vách (nếu có); Sàn nắp bể; H= 160 mm; Ván khuôn be biên bể; Ván khuôn be lỗ mở; Trừ nắp thăm; WxH: 0x0; Trừ thành bể; Tổng diện tích; Nắp thăm bê tông; Cột bể; C1; C2; C3; Dầm sàn nắp; B1; B2; B3

## Sheet: Hàng rào

- Hàng tiêu đề: 6–11; dòng mẫu phân tích: **12** (cấu kiện: `M1`)

| Cột | Tên cột (theo tiêu đề) | Đơn vị | Loại | Giá trị mẫu | Công thức Excel | Đọc nghĩa |
|---|---|---|---|---|---|---|
| A | TT › Hàng rào dài › A |  | nhập | 1 |  |  |
| B | Cấu kiện › Hàng rào dài › Móng - Trụ |  | nhập | M1 |  |  |
| D | Số lượng › Hàng rào dài |  | nhập | 37 |  |  |
| E | Kích thước hình học › L › 117.9 | (m) | nhập | 0.6 |  |  |
| F | Kích thước hình học › W | (m) | nhập | 0.6 |  |  |
| G | Kích thước hình học › H1 | (m) | nhập | 0.15 |  |  |
| H | Kích thước hình học › h / (Vát) | (m) | nhập | 0.1 |  |  |
| I | Kích thước hình học › W1 | (m) | nhập | 0.32 |  |  |
| J | Kích thước hình học › L1 | (m) | nhập | 0.27 |  |  |
| K | Kích thước hình học › w | (m) | nhập | 0.22 |  |  |
| L | Kích thước hình học › l | (m) | nhập | 0.22 |  |  |
| M | Kích thước hình học › H / Móng - đỉnh | (m) | nhập | 1.5 |  |  |
| O | Hao hụt vật liệu |  | công thức | 1 | `=+Móng!$AN$12` | Móng![AN] |
| P | CÔNG TÁC BÊ TÔNG MÓNG › Bê tông lót | (m3) | công thức | 0.9065 | `=+(E12+0.1)*(F12+0.1)*0.05*D12*O12` | ([117.9]+0.1)*([W]+0.1)*0.05*[Số lượng Hàng rào dài]*[Hao hụt vật liệu] |
| Q | CÔNG TÁC BÊ TÔNG MÓNG › Ván khuôn BT lót | (m2) | công thức | 5.18 | `=+((E12+0.1)+(F12+0.1))*2*0.05*D12` | (([117.9]+0.1)+([W]+0.1))*2*0.05*[Số lượng Hàng rào dài] |
| R | CÔNG TÁC BÊ TÔNG MÓNG › Bê tông / (m3) | (m3) | công thức | 2.824 | `=+(E12*F12*G12+(E12*F12+I12*J12)/2*H12)*D12*O12` | ([117.9]*[W]*[H1]+([117.9]*[W]+[W1]*[L1])/2*[h / (Vát)])*[Số lượng Hàng rào dài]*[Hao hụt vật liệu] |
| S | CÔNG TÁC BÊ TÔNG MÓNG › Ván khuôn / (m2) | (m2) | công thức | 13.32 | `=+(E12+F12)*2*G12*D12` | ([117.9]+[W])*2*[H1]*[Số lượng Hàng rào dài] |
| T | TRỤ - GIẰNG › Trụ, giằng / <200 | (md) | công thức | 0 | `=+IF(K12<0.2,M12-G12-H12,0)*D12` | IF([w]<0.2,[H / Móng - đỉnh]-[H1]-[h / (Vát)],0)*[Số lượng Hàng rào dài] |
| U | TRỤ - GIẰNG › Trụ, giằng / ≥200 | (md) | công thức | 46.25 | `=+IF(V12=0,IF(K12>=0.2,M12-G12-H12,0)*D12,0)` | IF([Trụ, giằng / ≥300]=0,IF([w]>=0.2,[H / Móng - đỉnh]-[H1]-[h / (Vát)],0)*[Số lượng Hàng rào dài],0) |
| V | TRỤ - GIẰNG › Trụ, giằng / ≥300 | (md) | công thức | 0 | `=+IF(K12>0.2,IF(K12>=0.3,M12-G12-H12,0),0)*D12` | IF([w]>0.2,IF([w]>=0.3,[H / Móng - đỉnh]-[H1]-[h / (Vát)],0),0)*[Số lượng Hàng rào dài] |
| W | TRỤ - GIẰNG › Bê tông | (m3) | công thức | 2.239 | `=+K12*L12*SUM(T12:V12)*O12` | [w]*[l]*SUM([Trụ, giằng / <200]:[Trụ, giằng / ≥300])*[Hao hụt vật liệu] |
| X | TRỤ - GIẰNG › Ván khuôn | (m2) | công thức | 40.7 | `=+(K12+L12)*2*SUM(T12:V12)` | ([w]+[l])*2*SUM([Trụ, giằng / <200]:[Trụ, giằng / ≥300]) |
| AC | Đào đắp › Cốt hiện trạng › -0.2 | (m) | công thức | -0.2 | `=+$AC$10` | $AC$10 |
| AD | Đào đắp › Mở rộng chân | (m) | nhập | 0.5 |  |  |
| AE | Đào đắp › Mở rộng đỉnh | (m) | nhập | 1 |  |  |
| AF | Đào đắp › Hđáy móng | (m) | nhập | -1 |  |  |
| AG | Đào đắp › Hđào | (m) | công thức | 0.85 | `=+-AF12+AC12+0.05` | -[Hđáy móng]+[-0.2]+0.05 |
| AH | Đào đắp › Đào đất | (m3) | công thức | 146.6 | `=+IF(AG12>0,(((E12+AD12*2)*(F12+AD12*2))+((E12+AE12*2)*(F12+AE12*2)))/2*AG12*D12,0)` | IF([Hđào]>0,((([117.9]+[Mở rộng chân]*2)*([W]+[Mở rộng chân]*2))+(([117.9]+[Mở rộng đỉnh]*2)*([W]+[Mở rộng đỉnh]*2)))/2*[Hđào]*[Số lượng Hàng rào dài],0) |
| AI | Đào đắp › Lất đất | (m3) | công thức | 141.8 | `=+IF(AG12>0,AH12-P12-R12-K12*L12*(-AF12+AC12-G12-H12)*D12,0)` | IF([Hđào]>0,[Đào đất]-[Bê tông lót]-[Bê tông / (m3)]-[w]*[l]*(-[Hđáy móng]+[-0.2]-[H1]-[h / (Vát)])*[Số lượng Hàng rào dài],0) |
| AJ | Đào đắp › Tân đất | (m3) | công thức | 0 | `=+IF(AG12<0,(E12+0.1)*(F12+1)*(-AG12)*D12,0)` | IF([Hđào]<0,([117.9]+0.1)*([W]+1)*(-[Hđào])*[Số lượng Hàng rào dài],0) |

**Các mục/cấu kiện có trong sheet (cột B):** M1; M2; Xây trát; Tường 220; Giằng; DM; G1; CỘNG; Cấu kiện; Móng - Trụ; Tường 110; G2