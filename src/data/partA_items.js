// PHẦN A: BÊ TÔNG, VÁN KHUÔN, ĐÀO ĐẮP, HOÀN THIỆN (FILE 1.1)
// Tách biệt 100% dữ liệu khỏi giao diện. Nguồn sự thật: SPEC_1.1_khoi_luong.md

export const partAItems = [
  {
    id: "san-lap",
    title: "San lấp mặt bằng",
    fileSource: "1.1",
    sheetName: "San lấp MB",
    purpose: "Tính toán thể tích san lấp đất/cát đầm chặt, đào đất hạ cốt, bóc bỏ lớp đất hữu cơ bề mặt và các lớp kết cấu áo nền theo cao độ hoàn thiện và hiện trạng.",
    parameters: [
      {
            "name": "Hao hụt",
            "column": "P",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      }
],
    formulas: [
      {
            "target": "Bóc lớp hữu cơ (Cột Q)",
            "mathFormat": "S san lấp*Lớp hữu cơ",
            "excelCode": "`=+O7*J7`",
            "description": "Giải nghĩa: [S san lấp]*[Lớp hữu cơ]"
      },
      {
            "target": "San lấp / Đất / cát (Cột R)",
            "mathFormat": "IF(H san lấp>0,S san lấp*H san lấp*Hao hụt,0)",
            "excelCode": "`=+IF(N7>0,O7*N7*P7,0)`",
            "description": "Giải nghĩa: IF([H san lấp]>0,[S san lấp]*[H san lấp]*[Hao hụt],0)"
      },
      {
            "target": "Đào đất (Cột S)",
            "mathFormat": "IF(H san lấp<0,-S san lấp*H san lấp,0)",
            "excelCode": "`=+IF(N7<0,-O7*N7,0)`",
            "description": "Giải nghĩa: IF([H san lấp]<0,-[S san lấp]*[H san lấp],0)"
      }
],
    svgKey: "SvgSanLap",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet San lấp MB",
      "inputs": {
            "P": 1
      },
      "outputs": {
            "Q": 0,
            "R": 0,
            "S": 0
      }
},
    calculator: {
      fields: [
        {
                "key": "G",
                "label": "Diện tích khu vực (G)",
                "default": 1000,
                "unit": "m²",
                "step": 10
        },
        {
                "key": "H",
                "label": "Cao độ hoàn thiện (H)",
                "default": 0,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "I",
                "label": "Cao độ tự nhiên (I)",
                "default": -0.5,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "J",
                "label": "Chiều dày lớp hữu cơ (J)",
                "default": 0.2,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "K",
                "label": "Chiều dày lớp Base (K)",
                "default": 0.15,
                "unit": "m",
                "step": 0.01
        },
        {
                "key": "L",
                "label": "Chiều dày lót (L)",
                "default": 0.05,
                "unit": "m",
                "step": 0.01
        },
        {
                "key": "M",
                "label": "Chiều dày BT nền (M)",
                "default": 0.15,
                "unit": "m",
                "step": 0.01
        },
        {
                "key": "P",
                "label": "Hao hụt vật liệu (P)",
                "default": 1,
                "unit": "lần",
                "step": 0.01
        }
],
      compute: (vals) => {
      const G = Number(vals.G || 0);
      const H = Number(vals.H || 0);
      const I = Number(vals.I || 0);
      const J = Number(vals.J || 0);
      const K = Number(vals.K || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const P = Number(vals.P ?? 1);
      const N = H - I + J - (K + L + M);
      const Q = G * J;
      const R = N > 0 ? G * N * P : 0;
      const S = N < 0 ? -G * N : 0;
      return { N, Q, R, S };
    }
    },
    warnings: [
      {
            "code": "LOI-09",
            "level": "Trung bình",
            "title": "Cảnh báo LOI-09 - Rà soát khi sử dụng",
            "content": "Lỗi hoặc rủi ro đã biết liên quan tới cấu kiện San lấp mặt bằng trong file 1.1.",
            "remedy": "Xem chi tiết trong mục Kiểm tra chéo (Phần D) và đối chiếu với tiêu chuẩn."
      },
      {
            "code": "LOI-18",
            "level": "Trung bình",
            "title": "Cảnh báo LOI-18 - Rà soát khi sử dụng",
            "content": "Lỗi hoặc rủi ro đã biết liên quan tới cấu kiện San lấp mặt bằng trong file 1.1.",
            "remedy": "Xem chi tiết trong mục Kiểm tra chéo (Phần D) và đối chiếu với tiêu chuẩn."
      }
]
  },
  {
    id: "coc-nhoi",
    title: "Cọc khoan nhồi",
    fileSource: "1.1",
    sheetName: "Cọc nhồi",
    purpose: "Tính toán thể tích bê tông cọc khoan nhồi (trừ đoạn cát đầu cọc), dung dịch bentonite giữ thành vách, diện tích và khối lượng ống vách dẫn hướng, đất đào vận chuyển đổ thải (hệ số 4/3), đập đầu cọc, chiều dài ống siêu âm D60/D110 và ống nối.",
    parameters: [
      {
            "name": "TT",
            "column": "A",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cấu kiện",
            "column": "B",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Kích thước hình học · L / (Tim cọc) /",
            "column": "D",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · D",
            "column": "E",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · L1 / (Đập đầu cọc)",
            "column": "F",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · L3 / (ống vách)",
            "column": "H",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Ống thí nghiệm · D60 · SL",
            "column": "K",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (cái)"
      },
      {
            "name": "Ống thí nghiệm · D110 · L",
            "column": "L",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Ống thí nghiệm · D110 · SL",
            "column": "M",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (cái)"
      },
      {
            "name": "Ống thí nghiệm · Ống nối  / D115",
            "column": "O",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (cái)"
      },
      {
            "name": "Số lượng",
            "column": "V",
            "source": "Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Khối lượng toàn bộ · ống vách",
            "column": "Z",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Đơn vị: (m2)"
      },
      {
            "name": "Cốt thép · Hàm lượng",
            "column": "AD",
            "source": "Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế",
            "note": "Đơn vị: (kg/m3)"
      },
      {
            "name": "Cốt thép · Trọng lượng",
            "column": "AE",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (kg)"
      },
      {
            "name": "Thép cho ống vách · Chiều dày ống vách",
            "column": "AL",
            "source": "Chỉ dẫn kỹ thuật / chi tiết cấu tạo",
            "note": "Đơn vị: (m)"
      }
],
    formulas: [
      {
            "target": "Cấu kiện (Cột C)",
            "mathFormat": "\"D=\"&D*1000&\"\"",
            "excelCode": "`=\"D=\"&E11*1000&\"\"`",
            "description": "Giải nghĩa: \"D=\"&[D]*1000&\"\""
      },
      {
            "target": "Kích thước hình học · L2 / (Cát đầu cọc) (Cột G)",
            "mathFormat": "7.2+1.3",
            "excelCode": "`=7.2+1.3`",
            "description": "Giải nghĩa: 7.2+1.3"
      },
      {
            "target": "Con kê (Cột I)",
            "mathFormat": "13*4",
            "excelCode": "`=13*4`",
            "description": "Giải nghĩa: 13*4"
      },
      {
            "target": "Ống thí nghiệm · D60 · L (Cột J)",
            "mathFormat": "39.3+1",
            "excelCode": "`=39.3+1`",
            "description": "Giải nghĩa: 39.3+1"
      },
      {
            "target": "Ống thí nghiệm · Ống nối  / D64 (Cột N)",
            "mathFormat": "6*2",
            "excelCode": "`=6*2`",
            "description": "Giải nghĩa: 6*2"
      },
      {
            "target": "K.Lượng 1 cấu kiện · Bê tông (Cột P)",
            "mathFormat": "(PI()*D^2)/4*(L / (Tim cọc) /-L2 / (Cát đầu cọc))",
            "excelCode": "`=+(PI()*E11^2)/4*(D11-G11)`",
            "description": "Giải nghĩa: (PI()*[D]^2)/4*([L / (Tim cọc) /]-[L2 / (Cát đầu cọc)])"
      },
      {
            "target": "K.Lượng 1 cấu kiện · ống vách (Cột Q)",
            "mathFormat": "PI()*D*L3 / (ống vách)",
            "excelCode": "`=+PI()*E11*H11`",
            "description": "Giải nghĩa: PI()*[D]*[L3 / (ống vách)]"
      },
      {
            "target": "K.Lượng 1 cấu kiện · Bentonite (Cột R)",
            "mathFormat": "(PI()*D^2)/4*(L / (Tim cọc) /)",
            "excelCode": "`=+(PI()*E11^2)/4*(D11)`",
            "description": "Giải nghĩa: (PI()*[D]^2)/4*([L / (Tim cọc) /])"
      },
      {
            "target": "K.Lượng 1 cấu kiện · Đập dầu cọc (Cột S)",
            "mathFormat": "(PI()*D^2)/4*L1 / (Đập đầu cọc)",
            "excelCode": "`=+(PI()*E11^2)/4*F11`",
            "description": "Giải nghĩa: (PI()*[D]^2)/4*[L1 / (Đập đầu cọc)]"
      },
      {
            "target": "K.Lượng 1 cấu kiện · Vận chuyển đất đào (Cột T)",
            "mathFormat": "K.Lượng 1 cấu kiện Bentonite+K.Lượng 1 cấu kiện Bentonite/3",
            "excelCode": "`=+R11+R11/3`",
            "description": "Giải nghĩa: [K.Lượng 1 cấu kiện Bentonite]+[K.Lượng 1 cấu kiện Bentonite]/3"
      }
],
    svgKey: "SvgCocNhoi",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Cọc nhồi",
      "inputs": {
            "A": 1,
            "D": 42,
            "E": 1,
            "F": 1,
            "H": 6.3,
            "K": 2,
            "L": 39.3,
            "M": 1,
            "O": 6,
            "V": 3,
            "AD": 45,
            "AL": 0.012
      },
      "outputs": {
            "G": 8.5,
            "I": 52,
            "J": 40.3,
            "N": 12,
            "P": 26.310838,
            "Q": 19.792034,
            "R": 32.986723,
            "S": 0.785398,
            "T": 43.982297,
            "U": 6.675884,
            "W": 1,
            "X": 78.932515,
            "Y": 156,
            "Z": 59.376101,
            "AA": 98.960169,
            "AB": 2.356194,
            "AC": 131.946891,
            "AE": 3551.963194,
            "AF": 0,
            "AG": 0,
            "AH": 126,
            "AI": 0,
            "AJ": 0,
            "AK": 0,
            "AM": 5.593229,
            "AN": 241.8,
            "AO": 117.9,
            "AP": 36,
            "AQ": 18
      }
},
    calculator: {
      fields: [
        {
                "key": "D",
                "label": "Chiều dài tim cọc L (D)",
                "default": 42,
                "unit": "m",
                "step": 0.5
        },
        {
                "key": "E",
                "label": "Đường kính cọc D (E)",
                "default": 1,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "F",
                "label": "Đoạn đập đầu cọc L1 (F)",
                "default": 1,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "G",
                "label": "Đoạn cát đầu cọc L2 (G)",
                "default": 8.5,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "H",
                "label": "Chiều dài ống vách L3 (H)",
                "default": 6.3,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "V",
                "label": "Số lượng cọc (V)",
                "default": 3,
                "unit": "cọc",
                "step": 1
        },
        {
                "key": "AD",
                "label": "Hàm lượng thép (AD)",
                "default": 45,
                "unit": "kg/m³",
                "step": 5
        },
        {
                "key": "AL",
                "label": "Bề dày ống vách (AL)",
                "default": 0.012,
                "unit": "m",
                "step": 0.001
        }
],
      compute: (vals) => {
      const D = Number(vals.D || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G ?? 8.5);
      const H = Number(vals.H || 0);
      const V = Number(vals.V || 0);
      const AD = Number(vals.AD ?? 45);
      const AL = Number(vals.AL ?? 0.012);
      const W = 1;
      const P = (Math.PI * Math.pow(E, 2) / 4) * (D - G);
      const Q = Math.PI * E * H;
      const R = (Math.PI * Math.pow(E, 2) / 4) * D;
      const S = (Math.PI * Math.pow(E, 2) / 4) * F;
      const T = R + R / 3;
      const U = (Math.PI * Math.pow(E, 2) / 4) * G;
      const X = P * V * W;
      const AC = T * V;
      const AE = X * AD * W;
      const AM = (Q * V) * AL * 7850 / 1000;
      return { P, Q, R, S, T, U, X, AC, AE, AM };
    }
    },
    warnings: [
      {
            "code": "LOI-10",
            "level": "Cao",
            "title": "Cảnh báo LOI-10 - Rà soát khi sử dụng",
            "content": "Lỗi hoặc rủi ro đã biết liên quan tới cấu kiện Cọc khoan nhồi trong file 1.1.",
            "remedy": "Xem chi tiết trong mục Kiểm tra chéo (Phần D) và đối chiếu với tiêu chuẩn."
      }
]
  },
  {
    id: "coc-vuong",
    title: "Cọc vuông bê tông cốt thép",
    fileSource: "1.1",
    sheetName: "Cọc vuông Bê tông",
    purpose: "Tính toán thể tích bê tông cọc vuông đúc sẵn (đoạn mũi vát nhọn và đoạn thân), diện tích ván khuôn 3 mặt bãi đúc, khối lượng đập đầu cọc để liên kết ngàm vào đài móng và cốt thép ước tính.",
    parameters: [
      {
            "name": "TT",
            "column": "A",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cấu kiện",
            "column": "B",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Kích thước hình học · L",
            "column": "C",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · W",
            "column": "D",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · Mũi cọc",
            "column": "F",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · H1 / Đập đầu cọc",
            "column": "G",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Số mặt  / Be ván khuôn",
            "column": "H",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Number/ / Số lượng",
            "column": "L",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cốt thép · Hàm lượng",
            "column": "R",
            "source": "Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế",
            "note": "Đơn vị: (kg/m3)"
      }
],
    formulas: [
      {
            "target": "Kích thước hình học · H (Cột E)",
            "mathFormat": "W",
            "excelCode": "`=+D11`",
            "description": "Giải nghĩa: [W]"
      },
      {
            "target": "K.Lượng /1 cấu kiện · Bê tông (Cột I)",
            "mathFormat": "IF(Mũi cọc>0,(L-Mũi cọc)*W*H+1/2*W*H*Mũi cọc,(L-Mũi cọc)*W*H)",
            "excelCode": "`=+IF(F11>0,(C11-F11)*D11*E11+1/2*D11*E11*F11,(C11-F11)*D11*E11)`",
            "description": "Giải nghĩa: IF([Mũi cọc]>0,([L]-[Mũi cọc])*[W]*[H]+1/2*[W]*[H]*[Mũi cọc],([L]-[Mũi cọc])*[W]*[H])"
      },
      {
            "target": "K.Lượng /1 cấu kiện · Ván khuôn (Cột J)",
            "mathFormat": "IF(Mũi cọc>0,(W*Số mặt  / Be ván khuôn)*(L-Mũi cọc)+1/2*Mũi cọc*3*W+W*H,(W*Số mặt  / Be ván khuôn)*(L-Mũi cọc)+W*H*2)",
            "excelCode": "`=+IF(F11>0,(D11*H11)*(C11-F11)+1/2*F11*3*D11+D11*E11,(D11*H11)*(C11-F11)+D11*E11*2)`",
            "description": "Giải nghĩa: IF([Mũi cọc]>0,([W]*[Số mặt  / Be ván khuôn])*([L]-[Mũi cọc])+1/2*[Mũi cọc]*3*[W]+[W]*[H],([W]*[Số mặt  / Be ván khuôn])*([L]-[Mũi cọc])+[W]*[H]*2)"
      },
      {
            "target": "K.Lượng /1 cấu kiện · Đập đầu cọc (Cột K)",
            "mathFormat": "W*H*H1 / Đập đầu cọc",
            "excelCode": "`=+D11*E11*G11`",
            "description": "Giải nghĩa: [W]*[H]*[H1 / Đập đầu cọc]"
      },
      {
            "target": "Hao hụt / Vật liệu (Cột M)",
            "mathFormat": "Móng!$AN$12",
            "excelCode": "`=+Móng!$AN$12`",
            "description": "Giải nghĩa: Móng!$AN$12"
      },
      {
            "target": "Khối lượng toàn bộ · Tính (Cột N)",
            "mathFormat": "IF(L>0,L*Number/ / Số lượng,0)",
            "excelCode": "`=+IF(C11>0,C11*L11,0)`",
            "description": "Giải nghĩa: IF([L]>0,[L]*[Number/ / Số lượng],0)"
      },
      {
            "target": "Khối lượng toàn bộ · Bê tông (Cột O)",
            "mathFormat": "IF(L>0,K.Lượng /1 cấu kiện Bê tông*Number/ / Số lượng*Hao hụt / Vật liệu,0)",
            "excelCode": "`=+IF(C11>0,I11*L11*M11,0)`",
            "description": "Giải nghĩa: IF([L]>0,[K.Lượng /1 cấu kiện Bê tông]*[Number/ / Số lượng]*[Hao hụt / Vật liệu],0)"
      },
      {
            "target": "Khối lượng toàn bộ · Ván khuôn (Cột P)",
            "mathFormat": "IF(L>0,K.Lượng /1 cấu kiện Ván khuôn *Number/ / Số lượng,0)",
            "excelCode": "`=+IF(C11>0,J11 *L11,0)`",
            "description": "Giải nghĩa: IF([L]>0,[K.Lượng /1 cấu kiện Ván khuôn] *[Number/ / Số lượng],0)"
      },
      {
            "target": "Khối lượng toàn bộ · Đập đầu cọc (Cột Q)",
            "mathFormat": "K.Lượng /1 cấu kiện Đập đầu cọc*Number/ / Số lượng*Hao hụt / Vật liệu",
            "excelCode": "`=+K11*L11*M11`",
            "description": "Giải nghĩa: [K.Lượng /1 cấu kiện Đập đầu cọc]*[Number/ / Số lượng]*[Hao hụt / Vật liệu]"
      },
      {
            "target": "Cốt thép · Trọng lượng (Cột S)",
            "mathFormat": "Khối lượng toàn bộ Bê tông*Hàm lượng*Hao hụt / Vật liệu",
            "excelCode": "`=+O11*R11*M11`",
            "description": "Giải nghĩa: [Khối lượng toàn bộ Bê tông]*[Hàm lượng]*[Hao hụt / Vật liệu]"
      }
],
    svgKey: "SvgCocVuong",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Cọc vuông Bê tông",
      "inputs": {
            "A": 1,
            "C": 10,
            "D": 0.25,
            "F": 0.3,
            "G": 0.5,
            "H": 3,
            "L": 3,
            "R": 220
      },
      "outputs": {
            "E": 0.25,
            "I": 0.615625,
            "J": 7.45,
            "K": 0.03125,
            "M": 1,
            "N": 30,
            "O": 1.846875,
            "P": 22.35,
            "Q": 0.09375,
            "S": 406.3125
      }
},
    calculator: {
      fields: [
        {
                "key": "C",
                "label": "Chiều dài đoạn cọc L (C)",
                "default": 10,
                "unit": "m",
                "step": 0.5
        },
        {
                "key": "D",
                "label": "Chiều rộng cọc W (D)",
                "default": 0.25,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "F",
                "label": "Chiều dài mũi vát (F)",
                "default": 0.3,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "G",
                "label": "Chiều dài đập đầu cọc (G)",
                "default": 0.5,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "H",
                "label": "Số mặt be ván khuôn (H)",
                "default": 3,
                "unit": "mặt",
                "step": 1
        },
        {
                "key": "L",
                "label": "Số lượng cọc (L)",
                "default": 3,
                "unit": "cọc",
                "step": 1
        },
        {
                "key": "R",
                "label": "Hàm lượng cốt thép (R)",
                "default": 220,
                "unit": "kg/m³",
                "step": 10
        }
],
      compute: (vals) => {
      const C = Number(vals.C || 0);
      const D = Number(vals.D || 0);
      const E = D;
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const H = Number(vals.H ?? 3);
      const L = Number(vals.L || 0);
      const M = 1;
      const R = Number(vals.R ?? 220);
      const I = F > 0 ? (C - F) * D * E + 0.5 * D * E * F : (C - F) * D * E;
      const J = F > 0 ? (D * H) * (C - F) + 0.5 * F * 3 * D + D * E : (D * H) * (C - F) + D * E * 2;
      const K = D * E * G;
      const N = C * L;
      const O = I * L * M;
      const P = J * L;
      const Q = K * L * M;
      const S = O * R * M;
      return { I, J, K, N, O, P, Q, S };
    }
    },
    warnings: [
      {
            "code": "LOI-11",
            "level": "Trung bình",
            "title": "Cảnh báo LOI-11 - Rà soát khi sử dụng",
            "content": "Lỗi hoặc rủi ro đã biết liên quan tới cấu kiện Cọc vuông bê tông cốt thép trong file 1.1.",
            "remedy": "Xem chi tiết trong mục Kiểm tra chéo (Phần D) và đối chiếu với tiêu chuẩn."
      }
]
  },
  {
    id: "coc-barret",
    title: "Cọc Barrette",
    fileSource: "1.1",
    sheetName: "Cọc Barret",
    purpose: "Tính toán thể tích bê tông cọc barrette tiết diện chữ nhật, thể tích dung dịch bentonite giữ thành vách, thể tích đào đất hố barrette, ván khuôn đầu cọc và đập đầu cọc.",
    parameters: [
      {
            "name": "TT",
            "column": "A",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Diễn giải",
            "column": "B",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Kích thước hình học · H",
            "column": "D",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · W",
            "column": "E",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · L",
            "column": "F",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · Số phụ · L1  / Gioăng chống thấm",
            "column": "H",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · Ống siêu âm · D60x2 · Ống/cọc",
            "column": "I",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Đơn vị: (cái)"
      },
      {
            "name": "Kích thước hình học · Ống siêu âm · D60x2 · Chiều dài ống",
            "column": "J",
            "source": "Chỉ dẫn kỹ thuật / chi tiết cấu tạo",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · Con kê bê tông · Con kê/m2",
            "column": "M",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (cái)"
      },
      {
            "name": "Số lượng",
            "column": "O",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Khối lượng toàn bộ · Cốt thép · Hàm lượng",
            "column": "W",
            "source": "Báo cáo địa chất / Bảng 11 TCVN 4447:2012",
            "note": "Đơn vị: (kg/m3)"
      },
      {
            "name": "Khối lượng toàn bộ · Đào đất · Cao độ hiện trạng",
            "column": "Y",
            "source": "Chỉ dẫn kỹ thuật / chi tiết cấu tạo",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Khối lượng toàn bộ · Đào đất · Cao độ  / Đáy cọc",
            "column": "Z",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Ghi chú",
            "column": "AE",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      }
],
    formulas: [
      {
            "target": "Kích thước hình học · Số phụ · W1  / Khớp nối / (Ván khuôn) (Cột G)",
            "mathFormat": "W+0.22*2",
            "excelCode": "`=+E12+0.22*2`",
            "description": "Giải nghĩa: [W]+0.22*2"
      },
      {
            "target": "Kích thước hình học · Con kê bê tông · Số lượng (Cột N)",
            "mathFormat": "IF(Con kê/m2>0,ROUND((W+L)*2*H/Con kê/m2,0),0)",
            "excelCode": "`=+IF(M12>0,ROUND((E12+F12)*2*D12/M12,0),0)`",
            "description": "Giải nghĩa: IF([Con kê/m2]>0,ROUND(([W]+[L])*2*[H]/[Con kê/m2],0),0)"
      },
      {
            "target": "Hao hụt (Cột P)",
            "mathFormat": "Móng!AN",
            "excelCode": "`=+Móng!$AN$12`",
            "description": "Giải nghĩa: Móng![AN]"
      },
      {
            "target": "Khối lượng toàn bộ · Bê tông (Cột Q)",
            "mathFormat": "H*W*L*Số lượng·O*Hao hụt",
            "excelCode": "`=+D12*E12*F12*O12*P12`",
            "description": "Giải nghĩa: [H]*[W]*[L]*[Số lượng·O]*[Hao hụt]"
      },
      {
            "target": "Khối lượng toàn bộ · Ván khuôn (Cột R)",
            "mathFormat": "H*W1  / Khớp nối / (Ván khuôn)*Số lượng·O",
            "excelCode": "`=+D12*G12*O12`",
            "description": "Giải nghĩa: [H]*[W1  / Khớp nối / (Ván khuôn)]*[Số lượng·O]"
      },
      {
            "target": "Khối lượng toàn bộ · Gioăng chống thấm (Cột S)",
            "mathFormat": "L1  / Gioăng chống thấm*Số lượng·O",
            "excelCode": "`=+H12*O12`",
            "description": "Giải nghĩa: [L1  / Gioăng chống thấm]*[Số lượng·O]"
      },
      {
            "target": "Khối lượng toàn bộ · Ống siêu âm · D60x2 (Cột T)",
            "mathFormat": "D60x2 Ống/cọc*D60x2 Chiều dài ống*Số lượng·O",
            "excelCode": "`=+I12*J12*O12`",
            "description": "Giải nghĩa: [D60x2 Ống/cọc]*[D60x2 Chiều dài ống]*[Số lượng·O]"
      },
      {
            "target": "Khối lượng toàn bộ · Ống siêu âm · D80x2 (Cột U)",
            "mathFormat": "D80x2 Ống/cọc*D80x2 Chiều dài ống*Số lượng·O",
            "excelCode": "`=+K12*L12*O12`",
            "description": "Giải nghĩa: [D80x2 Ống/cọc]*[D80x2 Chiều dài ống]*[Số lượng·O]"
      },
      {
            "target": "Khối lượng toàn bộ · Con kê (Cột V)",
            "mathFormat": "Con kê bê tông Số lượng*Số lượng·O",
            "excelCode": "`=+N12*O12`",
            "description": "Giải nghĩa: [Con kê bê tông Số lượng]*[Số lượng·O]"
      },
      {
            "target": "Khối lượng toàn bộ · Cốt thép · Trọng lượng (Cột X)",
            "mathFormat": "Bê tông*Hàm lượng*Hao hụt",
            "excelCode": "`=+Q12*W12*P12`",
            "description": "Giải nghĩa: [Bê tông]*[Hàm lượng]*[Hao hụt]"
      }
],
    svgKey: "SvgCocNhoi",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Cọc Barret",
      "inputs": {
            "A": 1,
            "D": 42,
            "E": 0.6,
            "F": 2.8,
            "H": 10.3,
            "I": 4,
            "J": 42.5,
            "M": 4,
            "O": 1,
            "W": 140,
            "Y": -1.5,
            "Z": -42.3
      },
      "outputs": {
            "G": 1.04,
            "N": 71,
            "P": 1,
            "Q": 70.56,
            "R": 43.68,
            "S": 10.3,
            "T": 170,
            "U": 0,
            "V": 71,
            "X": 9878.4,
            "AA": 40.8,
            "AB": 68.544,
            "AC": 68.544,
            "AD": 82.2528
      }
},
    calculator: {
      fields: [
        {
                "key": "D",
                "label": "Chiều dài cọc L (D)",
                "default": 42,
                "unit": "m",
                "step": 0.5
        },
        {
                "key": "E",
                "label": "Bề dày cọc W (E)",
                "default": 0.6,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "F",
                "label": "Bề rộng cọc L (F)",
                "default": 2.8,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "M",
                "label": "Số lượng cọc (M)",
                "default": 4,
                "unit": "cọc",
                "step": 1
        },
        {
                "key": "W",
                "label": "Hàm lượng cốt thép (W)",
                "default": 140,
                "unit": "kg/m³",
                "step": 10
        }
],
      compute: (vals) => {
      const D = Number(vals.D || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const M = Number(vals.M || 0);
      const W = Number(vals.W ?? 140);
      const G = 1.04;
      const Q = E * F * D;
      const R = E * F * (D - G);
      const X = Q * W;
      return { Q, R, X };
    }
    },
    warnings: []
  },
  {
    id: "mong",
    title: "Móng (Đài móng, Cổ móng, Đào đắp)",
    fileSource: "1.1",
    sheetName: "Móng",
    purpose: "Tính toán thể tích bê tông đài móng (chữ nhật, chóp cụt, quả trám, bầu dục), bê tông lót, ván khuôn đài và cổ móng, khối lượng đào đắp đất hố móng, định mức thép sơ bộ theo hàm lượng.",
    parameters: [
      {
            "name": "No. · TT",
            "column": "A",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Items · Cấu kiện",
            "column": "B",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Number · SL / Móng",
            "column": "D",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Column · Số cổ móng/ / 1móng",
            "column": "E",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Đài Vuông, chữ nhật · L",
            "column": "F",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Đài Vuông, chữ nhật · W",
            "column": "G",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Đài Vuông, chữ nhật · H",
            "column": "H",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Bê tông lót · Dày",
            "column": "Y",
            "source": "Chỉ dẫn kỹ thuật / chi tiết cấu tạo",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Bê tông lót · Mở rộng",
            "column": "Z",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Stump Column (Cổ móng) · w",
            "column": "AA",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Stump Column (Cổ móng) · l",
            "column": "AB",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Stump Column (Cổ móng) · H1 · Móng cao",
            "column": "AC",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Stump Column (Cổ móng) · H2 · nền",
            "column": "AD",
            "source": "Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Stump Column (Cổ móng) · H3 · Cao cổ cột",
            "column": "AE",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Piling (Cọc) · D300",
            "column": "AG",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Hao hụt",
            "column": "AN",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cốt thép · Hàm lượng",
            "column": "AW",
            "source": "Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế",
            "note": "Đơn vị: (kg/m3)"
      },
      {
            "name": "Cọc tre · Chiều dài 1 cọc",
            "column": "BJ",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (md)"
      },
      {
            "name": "Cọc tre · Cọc/m2",
            "column": "BK",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Mở rộng · Chân",
            "column": "BM",
            "source": "Báo cáo địa chất / Bảng 11 TCVN 4447:2012",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Mở rộng · Đỉnh",
            "column": "BN",
            "source": "Báo cáo địa chất / Bảng 11 TCVN 4447:2012",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Cao độ · Hiện trạng",
            "column": "BO",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Cao độ · Đỉnh móng",
            "column": "BP",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "H5 · Chiều cao đào móng",
            "column": "BQ",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m)"
      }
],
    formulas: [
      {
            "target": "Items · Cấu kiện (Cột C)",
            "mathFormat": "\"FL -\"&(Móng cao-Đỉnh móng)*1000&\"\"",
            "excelCode": "`=\"FL -\"&(AC12-BP12)*1000&\"\"`",
            "description": "Giải nghĩa: \"FL -\"&([Móng cao]-[Đỉnh móng])*1000&\"\""
      },
      {
            "target": "Bê tông lót · Mở rộng (Cột Z)",
            "mathFormat": "Dày*2",
            "excelCode": "`=+Y12*2`",
            "description": "Giải nghĩa: [Dày]*2"
      },
      {
            "target": "Stump Column (Cổ móng) · H3 · Cao cổ cột (Cột AE)",
            "mathFormat": "Móng cao-H-Vát",
            "excelCode": "`=AC12-H12-I12`",
            "description": "Giải nghĩa: [Móng cao]-[H]-[Vát]"
      },
      {
            "target": "Foundation/Móng · Concrete · Bê tông (Cột AO)",
            "mathFormat": "IF(a1=0,IF(A=0,IF(a=0,IF(W1=0,L*W*H,L*W*H+((L*W)+(W1*L1))/2*Vát)*SL / Móng*Hao hụt,(L*d+b*((L+a)/2))*H*SL / Móng*Hao hụt),((A+L)/2*B*2+L*C)*H*SL / Móng*Hao hụt),(((L+a1)/2*c1)+((L+b1)/2*(W-c1)))*H*SL / Móng*Hao hụt)",
            "excelCode": "`=+IF(P12=0,IF(U12=0,IF(L12=0,IF(J12=0,F12*G12*H12,F12*G12*H12+((F12*G12)+(J12*K12))/2*I12)*D12*AN12,(F12*O12+M12*((F12+L12)/2))*H12*D12*AN12),((U12+F12)/2*V12*2+F12*W12)*H12*D12*AN12),(((F12+P12)/2*R12)+((F12+Q12)/2*(G12-R12)))*H12*D12*AN12)`",
            "description": "Giải nghĩa: IF([a1]=0,IF([A]=0,IF([a]=0,IF([W1]=0,[L]*[W]*[H],[L]*[W]*[H]+(([L]*[W])+([W1]*[L1]))/2*[Vát])*[SL / Móng]*[Hao hụt],([L]*[d]+[b]*(([L]+[a])/2))*[H]*[SL / Móng]*[Hao hụt]),(([A]+[L])/2*[B]*2+[L]*[C])*[H]*[SL / Móng]*[Hao hụt]),((([L]+[a1])/2*[c1])+(([L]+[b1])/2*([W]-[c1])))*[H]*[SL / Móng]*[Hao hụt])"
      },
      {
            "target": "Foundation/Móng · Lean con. · BT lót (Cột AP)",
            "mathFormat": "IF(L=0,0,IF(a1=0,IF(A=0,IF(a=0,(L+Mở rộng)*(W+Mở rộng)*Dày*SL / Móng*Hao hụt,((L+Mở rộng)*(d+Dày)+((L+Mở rộng)+(a+Mở rộng))/2*(b+Dày))*Dày*SL / Móng*Hao hụt),(((L+Mở rộng)+(A+Mở rộng))/2*(B+Dày)*2+(C+Mở rộng)*(L+Mở rộng))*Dày*SL / Móng*Hao hụt),((L+Mở rộng+a1+Mở rộng)/2*(c1+Dày)+(L+Mở rộng+b1+Mở rộng)*(W-c1+Dày))*Dày*SL / Móng*Hao hụt))",
            "excelCode": "`=+IF(F12=0,0,IF(P12=0,IF(U12=0,IF(L12=0,(F12+Z12)*(G12+Z12)*Y12*D12*AN12,((F12+Z12)*(O12+Y12)+((F12+Z12)+(L12+Z12))/2*(M12+Y12))*Y12*D12*AN12),(((F12+Z12)+(U12+Z12))/2*(V12+Y12)*2+(W12+Z12)*(F12+Z12))*Y12*D12*AN12),((F12+Z12+P12+Z12)/2*(R12+Y12)+(F12+Z12+Q12+Z12)*(G12-R12+Y12))*Y12*D12*AN12))`",
            "description": "Giải nghĩa: IF([L]=0,0,IF([a1]=0,IF([A]=0,IF([a]=0,([L]+[Mở rộng])*([W]+[Mở rộng])*[Dày]*[SL / Móng]*[Hao hụt],(([L]+[Mở rộng])*([d]+[Dày])+(([L]+[Mở rộng])+([a]+[Mở rộng]))/2*([b]+[Dày]))*[Dày]*[SL / Móng]*[Hao hụt]),((([L]+[Mở rộng])+([A]+[Mở rộng]))/2*([B]+[Dày])*2+([C]+[Mở rộng])*([L]+[Mở rộng]))*[Dày]*[SL / Móng]*[Hao hụt]),(([L]+[Mở rộng]+[a1]+[Mở rộng])/2*([c1]+[Dày])+([L]+[Mở rộng]+[b1]+[Mở rộng])*([W]-[c1]+[Dày]))*[Dày]*[SL / Móng]*[Hao hụt]))"
      },
      {
            "target": "Foundation/Móng · Formwork / Ván khuôn · Vk Bt lót (Cột AQ)",
            "mathFormat": "IF(L=0,0,IF(a1=0,IF(A=0,IF(a=0,((L+Mở rộng)+(W+Mở rộng))*2*Dày*SL / Móng,((L+Mở rộng)+(d+Dày)*2+(c VK+Mở rộng)*2+a)*Dày*SL / Móng),((A+Mở rộng)*2+(C+Mở rộng)*2+(D VK+Mở rộng)*4)*Dày*SL / Móng),(a1+d1 VK*2+d2 VK*2+b1)*Dày*SL / Móng))",
            "excelCode": "`=+IF(F12=0,0,IF(P12=0,IF(U12=0,IF(L12=0,((F12+Z12)+(G12+Z12))*2*Y12*D12,((F12+Z12)+(O12+Y12)*2+(N12+Z12)*2+L12)*Y12*D12),((U12+Z12)*2+(W12+Z12)*2+(X12+Z12)*4)*Y12*D12),(P12+S12*2+T12*2+Q12)*Y12*D12))`",
            "description": "Giải nghĩa: IF([L]=0,0,IF([a1]=0,IF([A]=0,IF([a]=0,(([L]+[Mở rộng])+([W]+[Mở rộng]))*2*[Dày]*[SL / Móng],(([L]+[Mở rộng])+([d]+[Dày])*2+([c VK]+[Mở rộng])*2+[a])*[Dày]*[SL / Móng]),(([A]+[Mở rộng])*2+([C]+[Mở rộng])*2+([D VK]+[Mở rộng])*4)*[Dày]*[SL / Móng]),([a1]+[d1 VK]*2+[d2 VK]*2+[b1])*[Dày]*[SL / Móng]))"
      },
      {
            "target": "Foundation/Móng · Formwork / Ván khuôn · Ván khuôn (Cột AR)",
            "mathFormat": "IF(a1=0,IF(A=0,IF(a=0,(L+W)*2*H*SL / Móng,(L+d*2+c VK*2+a)*H*SL / Móng),(A*2+C*2+D VK*4)*H*SL / Móng),(a1+b1+d1 VK*2+d2 VK*2)*H*SL / Móng)",
            "excelCode": "`=+IF(P12=0,IF(U12=0,IF(L12=0,(F12+G12)*2*H12*D12,(F12+O12*2+N12*2+L12)*H12*D12),(U12*2+W12*2+X12*4)*H12*D12),(P12+Q12+S12*2+T12*2)*H12*D12)`",
            "description": "Giải nghĩa: IF([a1]=0,IF([A]=0,IF([a]=0,([L]+[W])*2*[H]*[SL / Móng],([L]+[d]*2+[c VK]*2+[a])*[H]*[SL / Móng]),([A]*2+[C]*2+[D VK]*4)*[H]*[SL / Móng]),([a1]+[b1]+[d1 VK]*2+[d2 VK]*2)*[H]*[SL / Móng])"
      },
      {
            "target": "Stump Column (Cổ móng) · Concrete · Bê tông (Cột AS)",
            "mathFormat": "w*l*(Cao cổ cột-nền)*Số cổ móng/ / 1móng*SL / Móng*Hao hụt",
            "excelCode": "`=+AA12*AB12*(AE12-AD12)*E12*D12*AN12`",
            "description": "Giải nghĩa: [w]*[l]*([Cao cổ cột]-[nền])*[Số cổ móng/ / 1móng]*[SL / Móng]*[Hao hụt]"
      },
      {
            "target": "Stump Column (Cổ móng) · Formwork · Ván khuôn (Cột AT)",
            "mathFormat": "(w+l)*2*(Cao cổ cột-nền)*Số cổ móng/ / 1móng*SL / Móng",
            "excelCode": "`=+(AA12+AB12)*2*(AE12-AD12)*E12*D12`",
            "description": "Giải nghĩa: ([w]+[l])*2*([Cao cổ cột]-[nền])*[Số cổ móng/ / 1móng]*[SL / Móng]"
      },
      {
            "target": "Column · Concrete · Bê tông (Cột AU)",
            "mathFormat": "w*l*Cao cột*SL / Móng",
            "excelCode": "`=AA12*AB12*AF12*D12`",
            "description": "Giải nghĩa: [w]*[l]*[Cao cột]*[SL / Móng]"
      }
],
    svgKey: "SvgMong",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Móng",
      "inputs": {
            "A": 1,
            "D": 3,
            "E": 1,
            "F": 3.6,
            "G": 3.332,
            "H": 0.9,
            "Y": 0.05,
            "AA": 0.65,
            "AB": 0.4,
            "AC": 3,
            "AD": 0.22,
            "AG": 2,
            "AN": 1,
            "AW": 90,
            "BJ": 2,
            "BK": 25,
            "BM": 0.5,
            "BO": -0.5,
            "BP": -0.1
      },
      "outputs": {
            "Z": 0.1,
            "AE": 2.1,
            "AO": 32.38704,
            "AP": 1.90476,
            "AQ": 2.1396,
            "AR": 37.4328,
            "AS": 1.4664,
            "AT": 11.844,
            "AU": 0,
            "AV": 0,
            "AX": 3046.8096,
            "BA": 0,
            "BB": 6,
            "BC": 0,
            "BD": 0,
            "BE": 0,
            "BF": 0,
            "BG": 0,
            "BH": 0,
            "BI": 0.122145,
            "BL": 0,
            "BN": 2.2755,
            "BQ": 2.65,
            "BR": 334.621594,
            "BS": 299.003794,
            "BT": 0
      }
},
    calculator: {
      fields: [
        {
                "key": "D",
                "label": "Số lượng móng (D)",
                "default": 3,
                "unit": "móng",
                "step": 1
        },
        {
                "key": "E",
                "label": "Số cổ/móng (E)",
                "default": 1,
                "unit": "cổ",
                "step": 1
        },
        {
                "key": "F",
                "label": "Chiều dài đài L (F)",
                "default": 3.6,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "G",
                "label": "Chiều rộng đài W (G)",
                "default": 3.332,
                "unit": "m",
                "step": 0.01
        },
        {
                "key": "H",
                "label": "Chiều cao đài H (H)",
                "default": 0.9,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "Y",
                "label": "Chiều dày lót (Y)",
                "default": 0.05,
                "unit": "m",
                "step": 0.01
        },
        {
                "key": "AA",
                "label": "Rộng cổ móng w (AA)",
                "default": 0.65,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "AB",
                "label": "Dài cổ móng l (AB)",
                "default": 0.4,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "AC",
                "label": "Chiều sâu đáy móng (AC)",
                "default": 3,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "AD",
                "label": "Chiều dày sàn nền (AD)",
                "default": 0.22,
                "unit": "m",
                "step": 0.01
        },
        {
                "key": "BO",
                "label": "Cao độ hiện trạng (BO)",
                "default": -0.5,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "BP",
                "label": "Cao độ đỉnh móng (BP)",
                "default": -0.1,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "BM",
                "label": "Mở rộng chân đào (BM)",
                "default": 0.5,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "AW",
                "label": "Hàm lượng thép (AW)",
                "default": 90,
                "unit": "kg/m³",
                "step": 5
        }
],
      compute: (vals) => {
      const D = Number(vals.D || 0);
      const E = Number(vals.E ?? 1);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const H = Number(vals.H || 0);
      const Y = Number(vals.Y || 0);
      const AA = Number(vals.AA || 0);
      const AB = Number(vals.AB || 0);
      const AC = Number(vals.AC || 0);
      const AD = Number(vals.AD || 0);
      const AN = 1;
      const AW = Number(vals.AW ?? 90);
      const BM = Number(vals.BM ?? 0.5);
      const BO = Number(vals.BO ?? -0.5);
      const BP = Number(vals.BP ?? -0.1);
      const Z = Y * 2;
      const AE = AC - H;
      const AO = F * G * H * D * AN;
      const AP = (F + Z) * (G + Z) * Y * D * AN;
      const AQ = ((F + Z) + (G + Z)) * 2 * Y * D;
      const AR = (F + G) * 2 * H * D;
      const AS = AA * AB * (AE - AD) * E * D * AN;
      const AT = (AA + AB) * 2 * (AE - AD) * E * D;
      const AX = (AO + AS) * AW * AN;
      const BQ = AC + Y - BP + BO;
      const m = BQ < 5 ? (BQ <= 1.5 ? 0.25 : 0.67) : 0.85;
      const BN = BQ * m + BM;
      const A1 = (F + 2 * BM) * (G + 2 * BM);
      const A2 = (F + 2 * BN) * (G + 2 * BN);
      const BR = ((A1 + A2) / 2) * BQ * D;
      const V_co = AA * AB * (AC - H + BO - BP) * E * D;
      const BS = BR - AO - AP - V_co;
      return { AO, AP, AQ, AR, AS, AT, AX, BQ, BN, BR, BS };
    }
    },
    warnings: [
      {
            "code": "LOI-04",
            "level": "Cao",
            "title": "Cảnh báo LOI-04 - Rà soát khi sử dụng",
            "content": "Lỗi hoặc rủi ro đã biết liên quan tới cấu kiện Móng (Đài móng, Cổ móng, Đào đắp) trong file 1.1.",
            "remedy": "Xem chi tiết trong mục Kiểm tra chéo (Phần D) và đối chiếu với tiêu chuẩn."
      },
      {
            "code": "LOI-05",
            "level": "Trung bình",
            "title": "Cảnh báo LOI-05 - Rà soát khi sử dụng",
            "content": "Lỗi hoặc rủi ro đã biết liên quan tới cấu kiện Móng (Đài móng, Cổ móng, Đào đắp) trong file 1.1.",
            "remedy": "Xem chi tiết trong mục Kiểm tra chéo (Phần D) và đối chiếu với tiêu chuẩn."
      },
      {
            "code": "LOI-12",
            "level": "Trung bình",
            "title": "Cảnh báo LOI-12 - Rà soát khi sử dụng",
            "content": "Lỗi hoặc rủi ro đã biết liên quan tới cấu kiện Móng (Đài móng, Cổ móng, Đào đắp) trong file 1.1.",
            "remedy": "Xem chi tiết trong mục Kiểm tra chéo (Phần D) và đối chiếu với tiêu chuẩn."
      }
]
  },
  {
    id: "dam-mong",
    title: "Dầm móng (Giằng móng)",
    fileSource: "1.1",
    sheetName: "Dầm móng",
    purpose: "Tính toán thể tích bê tông dầm móng (chiều dài trừ phần giao đài móng/cổ móng), bê tông lót dầm, ván khuôn dầm và ván khuôn lót, thể tích đào đắp rãnh dầm móng.",
    parameters: [
      {
            "name": "TT",
            "column": "A",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Tên cấu kiện",
            "column": "B",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Kích thước hình học · Dài",
            "column": "D",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · Rộng",
            "column": "E",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · Cao",
            "column": "F",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · Bê tông lót dày · Dày",
            "column": "G",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Kích thước hình học · h · Nền",
            "column": "I",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Số lượng",
            "column": "O",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cốt thép · Hàm lượng",
            "column": "U",
            "source": "Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế",
            "note": "Đơn vị: (kg/m3)"
      },
      {
            "name": "Đào đắp · Mở rộng / đáy",
            "column": "W",
            "source": "Báo cáo địa chất / Bảng 11 TCVN 4447:2012",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Đào đắp · Cao độ / đỉnh dầm",
            "column": "Z",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Đào đắp · Tân đất",
            "column": "AE",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m3)"
      }
],
    formulas: [
      {
            "target": "Tên cấu kiện (Cột C)",
            "mathFormat": "\"WxH: \"&Rộng*100&\"x\"&Cao*100&\"\"",
            "excelCode": "`=\"WxH: \"&E10*100&\"x\"&F10*100&\"\"`",
            "description": "Giải nghĩa: \"WxH: \"&[Rộng]*100&\"x\"&[Cao]*100&\"\""
      },
      {
            "target": "Kích thước hình học · Bê tông lót dày · Mở rộng (Cột H)",
            "mathFormat": "Dày*2",
            "excelCode": "`=+G10*2`",
            "description": "Giải nghĩa: [Dày]*2"
      },
      {
            "target": "Trừ · Móng/cổ móng/dầm… · md (Cột J)",
            "mathFormat": "0.4*2",
            "excelCode": "`=0.4*2`",
            "description": "Giải nghĩa: 0.4*2"
      },
      {
            "target": "Khối lượng 1 bộ phận · Bê tông (Cột K)",
            "mathFormat": "(Dài-Móng/cổ móng/dầm… md)*Rộng*(Cao-Nền)",
            "excelCode": "`=+(D10-J10)*E10*(F10-I10)`",
            "description": "Giải nghĩa: ([Dài]-[Móng/cổ móng/dầm… md])*[Rộng]*([Cao]-[Nền])"
      },
      {
            "target": "Khối lượng 1 bộ phận · Bê tông lót (Cột L)",
            "mathFormat": "(Dài-Móng/cổ móng/dầm… md)*(Rộng+Mở rộng)*Dày",
            "excelCode": "`=+(D10-J10)*(E10+H10)*G10`",
            "description": "Giải nghĩa: ([Dài]-[Móng/cổ móng/dầm… md])*([Rộng]+[Mở rộng])*[Dày]"
      },
      {
            "target": "Khối lượng 1 bộ phận · Ván khuôn bê tông lót (Cột M)",
            "mathFormat": "(Dài-Móng/cổ móng/dầm… md)*2*Dày",
            "excelCode": "`=+(D10-J10)*2*G10`",
            "description": "Giải nghĩa: ([Dài]-[Móng/cổ móng/dầm… md])*2*[Dày]"
      },
      {
            "target": "Khối lượng 1 bộ phận · Ván khuôn dầm móng (Cột N)",
            "mathFormat": "(Dài-Móng/cổ móng/dầm… md)*2*(Cao-Nền)",
            "excelCode": "`=+(D10-J10)*2*(F10-I10)`",
            "description": "Giải nghĩa: ([Dài]-[Móng/cổ móng/dầm… md])*2*([Cao]-[Nền])"
      },
      {
            "target": "Hệ số / hao hụt (Cột P)",
            "mathFormat": "Móng!$AN$12",
            "excelCode": "`=+Móng!$AN$12`",
            "description": "Giải nghĩa: Móng!$AN$12"
      },
      {
            "target": "Khối lượng toàn bộ · Bê tông (Cột Q)",
            "mathFormat": "Khối lượng 1 bộ phận Bê tông*Số lượng*Hệ số / hao hụt",
            "excelCode": "`=+K10*O10*P10`",
            "description": "Giải nghĩa: [Khối lượng 1 bộ phận Bê tông]*[Số lượng]*[Hệ số / hao hụt]"
      },
      {
            "target": "Khối lượng toàn bộ · Bê tông lót (Cột R)",
            "mathFormat": "Khối lượng 1 bộ phận Bê tông lót*Số lượng*Hệ số / hao hụt",
            "excelCode": "`=+L10*O10*P10`",
            "description": "Giải nghĩa: [Khối lượng 1 bộ phận Bê tông lót]*[Số lượng]*[Hệ số / hao hụt]"
      }
],
    svgKey: "SvgDamMong",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Dầm móng",
      "inputs": {
            "A": 1,
            "D": 14,
            "E": 0.3,
            "F": 0.6,
            "G": 0.05,
            "I": 0.15,
            "O": 1,
            "U": 160,
            "W": 0.4,
            "Z": 0
      },
      "outputs": {
            "H": 0.1,
            "J": 0.8,
            "K": 1.782,
            "L": 0.264,
            "M": 1.32,
            "N": 11.88,
            "P": 1,
            "Q": 1.782,
            "R": 0.264,
            "S": 1.32,
            "T": 11.88,
            "V": 403.2,
            "X": 0.4375,
            "Y": -0.5,
            "AA": 0.15,
            "AB": 4.75,
            "AC": 1.578281,
            "AD": 1.115781,
            "AE": 0
      }
},
    calculator: {
      fields: [
        {
                "key": "D",
                "label": "Chiều dài dầm L (D)",
                "default": 14,
                "unit": "m",
                "step": 0.5
        },
        {
                "key": "E",
                "label": "Chiều rộng dầm b (E)",
                "default": 0.3,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "F",
                "label": "Chiều cao dầm h (F)",
                "default": 0.6,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "G",
                "label": "Chiều dày lót (G)",
                "default": 0.05,
                "unit": "m",
                "step": 0.01
        },
        {
                "key": "I",
                "label": "Chiều dày sàn nền (I)",
                "default": 0.15,
                "unit": "m",
                "step": 0.01
        },
        {
                "key": "J",
                "label": "Đoạn trừ móng/cột (J)",
                "default": 0.8,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "O",
                "label": "Số lượng dầm (O)",
                "default": 1,
                "unit": "dầm",
                "step": 1
        },
        {
                "key": "U",
                "label": "Hàm lượng thép (U)",
                "default": 160,
                "unit": "kg/m³",
                "step": 10
        }
],
      compute: (vals) => {
      const D = Number(vals.D || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const I = Number(vals.I || 0);
      const J = Number(vals.J ?? 0.8);
      const O = Number(vals.O ?? 1);
      const U = Number(vals.U ?? 160);
      const H = G * 2;
      const K = (D - J) * E * (F - I);
      const L = (D - J) * (E + H) * G;
      const M = (D - J) * 2 * G;
      const N = (D - J) * 2 * (F - I);
      const Q = K * O;
      const R = L * O;
      const S = M * O;
      const T = N * O;
      const V = D * E * F * O * U;
      return { K, L, M, N, Q, R, S, T, V };
    }
    },
    warnings: [
      {
            "code": "LOI-03",
            "level": "Cao",
            "title": "Cảnh báo LOI-03 - Rà soát khi sử dụng",
            "content": "Lỗi hoặc rủi ro đã biết liên quan tới cấu kiện Dầm móng (Giằng móng) trong file 1.1.",
            "remedy": "Xem chi tiết trong mục Kiểm tra chéo (Phần D) và đối chiếu với tiêu chuẩn."
      }
]
  },
  {
    id: "nen",
    title: "Nền nhà xưởng & Tầng trệt",
    fileSource: "1.1",
    sheetName: "Nền",
    purpose: "Tính toán diện tích và thể tích bê tông nền nhà, lớp đá cấp phối dăm base/subbase, bê tông lót nilon/bạt, ván khuôn be cạnh nền và cốt thép lưới hàn nền.",
    parameters: [
      {
            "name": "STT",
            "column": "A",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cấu kiện",
            "column": "B",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Vị trí",
            "column": "C",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Số lượng",
            "column": "D",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Kích thước hình học · Cao · Base",
            "column": "I",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Kích thước hình học · Cao · Bê tông",
            "column": "J",
            "source": "Chỉ dẫn kỹ thuật / chi tiết cấu tạo",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Hệ số lu lèn chặt / (%) · Base",
            "column": "K",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Đắp đất cho nền · Cốt nền",
            "column": "R",
            "source": "Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Cốt thép · D",
            "column": "V",
            "source": "Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế",
            "note": "Đơn vị: (mm)"
      },
      {
            "name": "Cốt thép · @",
            "column": "W",
            "source": "Báo cáo địa chất / Bảng 11 TCVN 4447:2012",
            "note": "Đơn vị: (mm)"
      },
      {
            "name": "Cốt thép · Layer",
            "column": "X",
            "source": "Báo cáo địa chất / Bảng 11 TCVN 4447:2012",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cốt thép · Hệ số",
            "column": "Z",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Nhập số liệu thiết kế"
      }
],
    formulas: [
      {
            "target": "Kích thước hình học · L (Cột E)",
            "mathFormat": "37.48-0.02*2",
            "excelCode": "`=37.48-0.02*2`",
            "description": "Giải nghĩa: 37.48-0.02*2"
      },
      {
            "target": "Kích thước hình học · W (Cột F)",
            "mathFormat": "27.56-0.02*2",
            "excelCode": "`=27.56-0.02*2`",
            "description": "Giải nghĩa: 27.56-0.02*2"
      },
      {
            "target": "Kích thước hình học · Diện tích Nền (Cột G)",
            "mathFormat": "L*W*Số lượng",
            "excelCode": "`=+E10*F10*D10`",
            "description": "Giải nghĩa: [L]*[W]*[Số lượng]"
      },
      {
            "target": "Kích thước hình học · Chu vi (Cột H)",
            "mathFormat": "(L+W)*2",
            "excelCode": "`=+(E10+F10)*2`",
            "description": "Giải nghĩa: ([L]+[W])*2"
      },
      {
            "target": "Hệ số hao hụt / (%) · Bê tông (Cột L)",
            "mathFormat": "Móng!$AN$12",
            "excelCode": "`=+Móng!$AN$12`",
            "description": "Giải nghĩa: Móng!$AN$12"
      },
      {
            "target": "Base (Cột M)",
            "mathFormat": "Diện tích Nền*Cao Base*Hệ số lu lèn chặt / (%) Base",
            "excelCode": "`=+G10*I10*K10`",
            "description": "Giải nghĩa: [Diện tích Nền]*[Cao Base]*[Hệ số lu lèn chặt / (%) Base]"
      },
      {
            "target": "Bê tông (Cột N)",
            "mathFormat": "Diện tích Nền*Cao Bê tông*Hệ số hao hụt / (%) Bê tông",
            "excelCode": "`=+G10*J10*L10`",
            "description": "Giải nghĩa: [Diện tích Nền]*[Cao Bê tông]*[Hệ số hao hụt / (%) Bê tông]"
      },
      {
            "target": "Ván khuôn (Cột O)",
            "mathFormat": "IF(Số lượng>0,Chu vi*Số lượng,0)",
            "excelCode": "`=+IF(D10>0,H10*D10,0)`",
            "description": "Giải nghĩa: IF([Số lượng]>0,[Chu vi]*[Số lượng],0)"
      },
      {
            "target": "Nilon lót (Cột P)",
            "mathFormat": "Diện tích Nền",
            "excelCode": "`=+G10`",
            "description": "Giải nghĩa: [Diện tích Nền]"
      },
      {
            "target": "Đắp đất cho nền · Cốt hiện trạng · -0.5 (Cột Q)",
            "mathFormat": "$Q$9",
            "excelCode": "`=+$Q$9`",
            "description": "Giải nghĩa: $Q$9"
      }
],
    svgKey: "SvgSan",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Nền",
      "inputs": {
            "A": 1,
            "D": 1,
            "I": 0.25,
            "J": 0.22,
            "K": 1,
            "R": 0,
            "V": 10,
            "W": 150,
            "X": 2,
            "Z": 1.15
      },
      "outputs": {
            "E": 37.44,
            "F": 27.52,
            "G": 1030.3488,
            "H": 129.92,
            "L": 1,
            "M": 257.5872,
            "N": 226.676736,
            "O": 129.92,
            "P": 1030.3488,
            "Q": -0.5,
            "S": 0.03,
            "T": 30.910464,
            "U": 0,
            "Y": 16.460905,
            "AA": 19504.545185
      }
},
    calculator: {
      fields: [
        {
                "key": "E",
                "label": "Chiều dài ô sàn nền (E)",
                "default": 37.44,
                "unit": "m",
                "step": 0.5
        },
        {
                "key": "F",
                "label": "Chiều rộng ô sàn nền (F)",
                "default": 27.52,
                "unit": "m",
                "step": 0.5
        },
        {
                "key": "I",
                "label": "Chiều dày lớp Base (I)",
                "default": 0.25,
                "unit": "m",
                "step": 0.01
        },
        {
                "key": "J",
                "label": "Chiều dày BT nền (J)",
                "default": 0.22,
                "unit": "m",
                "step": 0.01
        },
        {
                "key": "D",
                "label": "Số lượng ô sàn (D)",
                "default": 1,
                "unit": "ô",
                "step": 1
        },
        {
                "key": "V",
                "label": "Đường kính thép lưới (V)",
                "default": 10,
                "unit": "mm",
                "step": 1
        },
        {
                "key": "W",
                "label": "Bước thép @ (W)",
                "default": 150,
                "unit": "mm",
                "step": 25
        },
        {
                "key": "X",
                "label": "Số lớp thép (X)",
                "default": 2,
                "unit": "lớp",
                "step": 1
        }
],
      compute: (vals) => {
      const D = Number(vals.D ?? 1);
      const E = Number(vals.E ?? 37.44);
      const F = Number(vals.F ?? 27.52);
      const I = Number(vals.I || 0);
      const J = Number(vals.J || 0);
      const V = Number(vals.V ?? 10);
      const W = Number(vals.W ?? 150);
      const X = Number(vals.X ?? 2);
      const Z = 1.15;
      const G = E * F;
      const H = 2 * (E + F);
      const M = G * J * D;
      const N = G * I * D;
      const O = H * J * D;
      const P = G * D;
      const Y = (Math.pow(V, 2) / 162) * (1000 / W) * 2 * X;
      const AA = G * Y * Z;
      return { G, H, M, N, O, P, Y, AA };
    }
    },
    warnings: []
  },
  {
    id: "cot",
    title: "Cột chịu lực (Vuông, Chữ nhật, Tròn)",
    fileSource: "1.1",
    sheetName: "Cột",
    purpose: "Tính toán thể tích bê tông cột (chiều cao tầng trừ chiều dày sàn/dầm), diện tích ván khuôn 4 mặt cột (cột tròn: pi*G*H), vai cột và thép ước tính theo hàm lượng 220 kg/m³.",
    parameters: [
      {
            "name": "TT",
            "column": "A",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cấu kiện",
            "column": "B",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Kích thước hình học · L",
            "column": "D",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · W",
            "column": "E",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · H",
            "column": "F",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · H / (Sàn/Dầm)",
            "column": "H",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Số Cột/Tầng",
            "column": "Q",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Số tầng giống nhau",
            "column": "R",
            "source": "Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cốt thép · Hàm lượng",
            "column": "V",
            "source": "Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế",
            "note": "Đơn vị: (kg/m3)"
      }
],
    formulas: [
      {
            "target": "Cấu kiện (Cột C)",
            "mathFormat": "IF(Cột tròn / (D=r2)=0,\"LxW: \"&L*100&\"x\"&W*100&\"\",\"D: \"&Cột tròn / (D=r2)*100&\"\")",
            "excelCode": "`=IF(G10=0,\"LxW: \"&D10*100&\"x\"&E10*100&\"\",\"D: \"&G10*100&\"\")`",
            "description": "Giải nghĩa: IF([Cột tròn / (D=r2)]=0,\"LxW: \"&[L]*100&\"x\"&[W]*100&\"\",\"D: \"&[Cột tròn / (D=r2)]*100&\"\")"
      },
      {
            "target": "K.Lượng 1 cấu kiện · Bê tông (Cột O)",
            "mathFormat": "IF(Cột tròn / (D=r2)=0,IF(w=0,L*W*(H-H / (Sàn/Dầm)),L*W*(H-H / (Sàn/Dầm))+(((h1+h2 /  (cổ))+h1)/2*B (cánh)*w)*Số cánh),(3.14159*Cột tròn / (D=r2)^2)/4*(H-H / (Sàn/Dầm)))",
            "excelCode": "`=+IF(G10=0,IF(I10=0,D10*E10*(F10-H10),D10*E10*(F10-H10)+(((L10+M10)+L10)/2*N10*I10)*J10),(3.14159*G10^2)/4*(F10-H10))`",
            "description": "Giải nghĩa: IF([Cột tròn / (D=r2)]=0,IF([w]=0,[L]*[W]*([H]-[H / (Sàn/Dầm)]),[L]*[W]*([H]-[H / (Sàn/Dầm)])+((([h1]+[h2 /  (cổ)])+[h1])/2*[B (cánh)]*[w])*[Số cánh]),(3.14159*[Cột tròn / (D=r2)]^2)/4*([H]-[H / (Sàn/Dầm)]))"
      },
      {
            "target": "K.Lượng 1 cấu kiện · Ván khuôn (Cột P)",
            "mathFormat": "IF(Cột tròn / (D=r2)=0,IF(w=0,(L+W)*2*(H-H / (Sàn/Dầm)),(L+W)*2*(H-H / (Sàn/Dầm))+(w+B (cánh)*2)*((h1*2+h2 /  (cổ))/2)+SQRT(h2 /  (cổ)^2+B (cánh)^2)*w*Số cánh-(h1+h2 /  (cổ))*w*Số cánh),PI()*Cột tròn / (D=r2)*(H-H / (Sàn/Dầm)))",
            "excelCode": "`=IF(G10=0,IF(I10=0,(D10+E10)*2*(F10-H10),(D10+E10)*2*(F10-H10)+(I10+N10*2)*((L10*2+M10)/2)+SQRT(M10^2+N10^2)*I10*J10-(L10+M10)*I10*J10),PI()*G10*(F10-H10))`",
            "description": "Giải nghĩa: IF([Cột tròn / (D=r2)]=0,IF([w]=0,([L]+[W])*2*([H]-[H / (Sàn/Dầm)]),([L]+[W])*2*([H]-[H / (Sàn/Dầm)])+([w]+[B (cánh)]*2)*(([h1]*2+[h2 /  (cổ)])/2)+SQRT([h2 /  (cổ)]^2+[B (cánh)]^2)*[w]*[Số cánh]-([h1]+[h2 /  (cổ)])*[w]*[Số cánh]),PI()*[Cột tròn / (D=r2)]*([H]-[H / (Sàn/Dầm)]))"
      },
      {
            "target": "Hao hụt / Vật liệu (Cột S)",
            "mathFormat": "Móng!$AN$12",
            "excelCode": "`=+Móng!$AN$12`",
            "description": "Giải nghĩa: Móng!$AN$12"
      },
      {
            "target": "Khối lượng toàn bộ · Bê tông (Cột T)",
            "mathFormat": "K.Lượng 1 cấu kiện Bê tông*Số Cột/Tầng*Số tầng giống nhau*Hao hụt / Vật liệu",
            "excelCode": "`=+O10*Q10*R10*S10`",
            "description": "Giải nghĩa: [K.Lượng 1 cấu kiện Bê tông]*[Số Cột/Tầng]*[Số tầng giống nhau]*[Hao hụt / Vật liệu]"
      },
      {
            "target": "Khối lượng toàn bộ · Ván khuôn (Cột U)",
            "mathFormat": "K.Lượng 1 cấu kiện Ván khuôn*Số Cột/Tầng*Số tầng giống nhau",
            "excelCode": "`=+P10*Q10*R10`",
            "description": "Giải nghĩa: [K.Lượng 1 cấu kiện Ván khuôn]*[Số Cột/Tầng]*[Số tầng giống nhau]"
      },
      {
            "target": "Cốt thép · Trọng lượng (Cột W)",
            "mathFormat": "IF(Cột tròn / (D=r2)=0,L*W*H*Số Cột/Tầng*Số tầng giống nhau*Hàm lượng,3.14159*(Cột tròn / (D=r2)^2)/4*H*Số Cột/Tầng*Số tầng giống nhau*Hàm lượng)*Hao hụt / Vật liệu",
            "excelCode": "`=+IF(G10=0,D10*E10*F10*Q10*R10*V10,3.14159*(G10^2)/4*F10*Q10*R10*V10)*S10`",
            "description": "Giải nghĩa: IF([Cột tròn / (D=r2)]=0,[L]*[W]*[H]*[Số Cột/Tầng]*[Số tầng giống nhau]*[Hàm lượng],3.14159*([Cột tròn / (D=r2)]^2)/4*[H]*[Số Cột/Tầng]*[Số tầng giống nhau]*[Hàm lượng])*[Hao hụt / Vật liệu]"
      }
],
    svgKey: "SvgCot",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Cột",
      "inputs": {},
      "outputs": {}
},
    calculator: {
      fields: [
        {
                "key": "D",
                "label": "Kích thước cột b (D)",
                "default": 0.5,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "E",
                "label": "Kích thước cột h (E)",
                "default": 0.4,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "F",
                "label": "Chiều cao tầng (F)",
                "default": 5,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "H",
                "label": "Trừ chiều dày sàn (H)",
                "default": 0.16,
                "unit": "m",
                "step": 0.01
        },
        {
                "key": "Q",
                "label": "Số cột mỗi tầng (Q)",
                "default": 1,
                "unit": "cột",
                "step": 1
        },
        {
                "key": "R",
                "label": "Số tầng giống nhau (R)",
                "default": 1,
                "unit": "tầng",
                "step": 1
        },
        {
                "key": "V",
                "label": "Hàm lượng thép (V)",
                "default": 220,
                "unit": "kg/m³",
                "step": 10
        }
],
      compute: (vals) => {
      const D = Number(vals.D || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const H = Number(vals.H || 0);
      const Q = Number(vals.Q ?? 1);
      const R = Number(vals.R ?? 1);
      const V = Number(vals.V ?? 220);
      const O = D * E * (F - H);
      const P = 2 * (D + E) * (F - H);
      const T = O * Q * R;
      const U = P * Q * R;
      const W = T * V;
      return { O, P, T, U, W };
    }
    },
    warnings: []
  },
  {
    id: "vach-btct",
    title: "Vách bê tông cốt thép & Lõi thang",
    fileSource: "1.1",
    sheetName: "Vách BTCT",
    purpose: "Tính toán thể tích bê tông vách chịu lực, vách tầng hầm, lõi thang máy, diện tích ván khuôn thành vách theo số mặt (I, L, U) và trừ các lỗ mở cửa vách.",
    parameters: [
      {
            "name": "Cấu kiện",
            "column": "B",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Ký hiệu",
            "column": "C",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Kích thước hình học · L",
            "column": "D",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · W",
            "column": "E",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · H",
            "column": "F",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · Số cạnh · VK",
            "column": "G",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Trừ · Dầm/Sàn",
            "column": "J",
            "source": "Chỉ dẫn kỹ thuật / chi tiết cấu tạo",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Số lượng/ 1 Cấu kiện",
            "column": "O",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Số tầng giống nhau",
            "column": "P",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cốt thép · Hàm lượng",
            "column": "V",
            "source": "Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế",
            "note": "Đơn vị: (kg/m3)"
      }
],
    formulas: [
      {
            "target": "Kích thước hình học · h / (trát, sơn) (Cột H)",
            "mathFormat": "H9",
            "excelCode": "`=+H9`",
            "description": "Giải nghĩa: H9"
      },
      {
            "target": "Khối lượng 1 cấu kiện · Bê tông (Cột K)",
            "mathFormat": "(L-Giao vách)*W*(H-Dầm/Sàn)",
            "excelCode": "`=+(D10-I10)*E10*(F10-J10)`",
            "description": "Giải nghĩa: ([L]-[Giao vách])*[W]*([H]-[Dầm/Sàn])"
      },
      {
            "target": "Khối lượng 1 cấu kiện · Ván khuôn (Cột L)",
            "mathFormat": "(L-Giao vách)*2*(H-Dầm/Sàn)+W*(H-Dầm/Sàn)*VK",
            "excelCode": "`=+(D10-I10)*2*(F10-J10)+E10*(F10-J10)*G10`",
            "description": "Giải nghĩa: ([L]-[Giao vách])*2*([H]-[Dầm/Sàn])+[W]*([H]-[Dầm/Sàn])*[VK]"
      },
      {
            "target": "Khối lượng 1 cấu kiện · EW1, EW2 / Trát -Sơn ngoài (Cột M)",
            "mathFormat": "IF(Ký hiệu=\"EW1\",L*H,0)+IF(Ký hiệu=\"EW2\",L*H,0)",
            "excelCode": "`=+IF(C10=\"EW1\",D10*F10,0)+IF(C10=\"EW2\",D10*F10,0)`",
            "description": "Giải nghĩa: IF([Ký hiệu]=\"EW1\",[L]*[H],0)+IF([Ký hiệu]=\"EW2\",[L]*[H],0)"
      },
      {
            "target": "Khối lượng 1 cấu kiện · IW1,IW2,IW3 / Trát - Sơn trong (Cột N)",
            "mathFormat": "IF(Ký hiệu=\"EW1\",(L-Giao vách)*h / (trát, sơn))+IF(Ký hiệu=\"IW1\",(L-Giao vách)*2*h / (trát, sơn))+IF(Ký hiệu=\"IW2\",(L-Giao vách)*h / (trát, sơn))",
            "excelCode": "`=+IF(C10=\"EW1\",(D10-I10)*H10)+IF(C10=\"IW1\",(D10-I10)*2*H10)+IF(C10=\"IW2\",(D10-I10)*H10)`",
            "description": "Giải nghĩa: IF([Ký hiệu]=\"EW1\",([L]-[Giao vách])*[h / (trát, sơn)])+IF([Ký hiệu]=\"IW1\",([L]-[Giao vách])*2*[h / (trát, sơn)])+IF([Ký hiệu]=\"IW2\",([L]-[Giao vách])*[h / (trát, sơn)])"
      },
      {
            "target": "Hệ số Hao hụt VL (Cột Q)",
            "mathFormat": "'Cọc nhồi'!$W$11",
            "excelCode": "`=+'Cọc nhồi'!$W$11`",
            "description": "Giải nghĩa: 'Cọc nhồi'!$W$11"
      },
      {
            "target": "Khối lượng toàn bộ · Bê tông (Cột R)",
            "mathFormat": "Khối lượng 1 cấu kiện Bê tông*Số lượng/ 1 Cấu kiện*Số tầng giống nhau*Hệ số Hao hụt VL",
            "excelCode": "`=+K10*O10*P10*Q10`",
            "description": "Giải nghĩa: [Khối lượng 1 cấu kiện Bê tông]*[Số lượng/ 1 Cấu kiện]*[Số tầng giống nhau]*[Hệ số Hao hụt VL]"
      },
      {
            "target": "Khối lượng toàn bộ · Ván khuôn (Cột S)",
            "mathFormat": "Khối lượng 1 cấu kiện Ván khuôn*Số lượng/ 1 Cấu kiện*Số tầng giống nhau",
            "excelCode": "`=+L10*O10*P10`",
            "description": "Giải nghĩa: [Khối lượng 1 cấu kiện Ván khuôn]*[Số lượng/ 1 Cấu kiện]*[Số tầng giống nhau]"
      },
      {
            "target": "Khối lượng toàn bộ · EW1, EW2 / Sơn ngoài (Cột T)",
            "mathFormat": "EW1, EW2 / Trát -Sơn ngoài*Số lượng/ 1 Cấu kiện*Số tầng giống nhau",
            "excelCode": "`=+M10*O10*P10`",
            "description": "Giải nghĩa: [EW1, EW2 / Trát -Sơn ngoài]*[Số lượng/ 1 Cấu kiện]*[Số tầng giống nhau]"
      },
      {
            "target": "Khối lượng toàn bộ · IW1,IW2,IW3 / Sơn trong (Cột U)",
            "mathFormat": "IW1,IW2,IW3 / Trát - Sơn trong*Số lượng/ 1 Cấu kiện*Số tầng giống nhau",
            "excelCode": "`=+N10*O10*P10`",
            "description": "Giải nghĩa: [IW1,IW2,IW3 / Trát - Sơn trong]*[Số lượng/ 1 Cấu kiện]*[Số tầng giống nhau]"
      }
],
    svgKey: "SvgVachBTCT",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Vách BTCT",
      "inputs": {
            "D": 5,
            "E": 0.2,
            "F": 5,
            "G": 2,
            "J": 0.6,
            "O": 2,
            "P": 1,
            "V": 120
      },
      "outputs": {
            "H": 3.2,
            "K": 4.4,
            "L": 45.76,
            "M": 25,
            "N": 16,
            "Q": 1,
            "R": 8.8,
            "S": 91.52,
            "T": 50,
            "U": 32,
            "W": 1200
      }
},
    calculator: {
      fields: [
        {
                "key": "D",
                "label": "Chiều dài vách (D)",
                "default": 5,
                "unit": "m",
                "step": 0.2
        },
        {
                "key": "E",
                "label": "Bề dày vách (E)",
                "default": 0.2,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "F",
                "label": "Chiều cao vách (F)",
                "default": 5,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "G",
                "label": "Số mặt ván khuôn (G)",
                "default": 2,
                "unit": "mặt",
                "step": 1
        },
        {
                "key": "J",
                "label": "Chiều rộng trừ lỗ mở (J)",
                "default": 0.6,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "O",
                "label": "Số lượng vách (O)",
                "default": 2,
                "unit": "vách",
                "step": 1
        },
        {
                "key": "P",
                "label": "Số tầng (P)",
                "default": 1,
                "unit": "tầng",
                "step": 1
        },
        {
                "key": "V",
                "label": "Hàm lượng cốt thép (V)",
                "default": 120,
                "unit": "kg/m³",
                "step": 10
        }
],
      compute: (vals) => {
      const D = Number(vals.D || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G ?? 2);
      const J = Number(vals.J ?? 0.6);
      const O = Number(vals.O ?? 2);
      const P = Number(vals.P ?? 1);
      const V = Number(vals.V ?? 120);
      const K = D - J;
      const L = (K * F) * G;
      const M = K * E * F;
      const R = M * O * P;
      const S = L * O * P;
      const W = R * V;
      return { K, L, M, R, S, W };
    }
    },
    warnings: []
  },
  {
    id: "san",
    title: "Sàn bê tông cốt thép",
    fileSource: "1.1",
    sheetName: "Sàn",
    purpose: "Tính toán diện tích và thể tích bê tông sàn toàn khối theo diện tích trùm phủ, diện tích ván khuôn đáy sàn, trừ ô thông tầng (dòng âm) và định mức thép lưới sàn (kg/m²).",
    parameters: [
      {
            "name": "TT",
            "column": "A",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cấu kiện",
            "column": "B",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Kích thước hình học · L",
            "column": "D",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · W",
            "column": "E",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · H",
            "column": "F",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Số lượng/1 tầng",
            "column": "K",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Số tầng",
            "column": "L",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cốt thép /Thép lưới hàn · Ø",
            "column": "Q",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (mm)"
      },
      {
            "name": "Cốt thép /Thép lưới hàn · @",
            "column": "R",
            "source": "Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế",
            "note": "Đơn vị: (mm)"
      },
      {
            "name": "Cốt thép /Thép lưới hàn · Layer",
            "column": "S",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cốt thép /Thép lưới hàn · Hệ số",
            "column": "U",
            "source": "Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế",
            "note": "Nhập số liệu thiết kế"
      }
],
    formulas: [
      {
            "target": "Kích thước hình học · Diện tích sàn (Cột G)",
            "mathFormat": "L*W",
            "excelCode": "`=+D13*E13`",
            "description": "Giải nghĩa: [L]*[W]"
      },
      {
            "target": "Khối lượng 1 cấu kiện · Bê tông (Cột H)",
            "mathFormat": "Diện tích sàn*H",
            "excelCode": "`=+G13*F13`",
            "description": "Giải nghĩa: [Diện tích sàn]*[H]"
      },
      {
            "target": "Khối lượng 1 cấu kiện · Ván khuôn (Cột I)",
            "mathFormat": "Diện tích sàn",
            "excelCode": "`=+G13`",
            "description": "Giải nghĩa: [Diện tích sàn]"
      },
      {
            "target": "Khối lượng 1 cấu kiện · Cán mặt (Cột J)",
            "mathFormat": "Khối lượng 1 cấu kiện Ván khuôn",
            "excelCode": "`=+I13`",
            "description": "Giải nghĩa: [Khối lượng 1 cấu kiện Ván khuôn]"
      },
      {
            "target": "Hao hụt (Cột M)",
            "mathFormat": "Móng!$AN$12",
            "excelCode": "`=+Móng!$AN$12`",
            "description": "Giải nghĩa: Móng!$AN$12"
      },
      {
            "target": "Khối lượng tổng · Bê tông (Cột N)",
            "mathFormat": "Khối lượng 1 cấu kiện Bê tông*Số lượng/1 tầng*Số tầng*Hao hụt",
            "excelCode": "`=+H13*K13*L13*M13`",
            "description": "Giải nghĩa: [Khối lượng 1 cấu kiện Bê tông]*[Số lượng/1 tầng]*[Số tầng]*[Hao hụt]"
      },
      {
            "target": "Khối lượng tổng · Ván khuôn (Cột O)",
            "mathFormat": "Khối lượng 1 cấu kiện Ván khuôn*Số lượng/1 tầng*Số tầng",
            "excelCode": "`=+I13*K13*L13`",
            "description": "Giải nghĩa: [Khối lượng 1 cấu kiện Ván khuôn]*[Số lượng/1 tầng]*[Số tầng]"
      },
      {
            "target": "Khối lượng tổng · Cán mặt (Cột P)",
            "mathFormat": "Khối lượng tổng Ván khuôn",
            "excelCode": "`=+O13`",
            "description": "Giải nghĩa: [Khối lượng tổng Ván khuôn]"
      },
      {
            "target": "Cốt thép /Thép lưới hàn · Kg/m2 (Cột T)",
            "mathFormat": "IF(Layer>0,(1000*Ø^2/162*10^6*(1000/@)*2*Layer)/10^9,0)",
            "excelCode": "`=+IF(S13>0,(1000*Q13^2/162*10^6*(1000/R13)*2*S13)/10^9,0)`",
            "description": "Giải nghĩa: IF([Layer]>0,(1000*[Ø]^2/162*10^6*(1000/[@])*2*[Layer])/10^9,0)"
      },
      {
            "target": "Cốt thép /Thép lưới hàn · Trọng lượng (Cột V)",
            "mathFormat": "Diện tích sàn*Kg/m2*Hệ số*Số lượng/1 tầng*Số tầng",
            "excelCode": "`=+G13*T13*U13*K13*L13`",
            "description": "Giải nghĩa: [Diện tích sàn]*[Kg/m2]*[Hệ số]*[Số lượng/1 tầng]*[Số tầng]"
      }
],
    svgKey: "SvgSan",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Sàn",
      "inputs": {
            "A": 1,
            "D": 168,
            "E": 16,
            "F": 0.15,
            "K": 1,
            "L": 1,
            "Q": 8,
            "R": 200,
            "S": 2,
            "U": 1.15
      },
      "outputs": {
            "G": 2688,
            "H": 403.2,
            "I": 2688,
            "J": 2688,
            "M": 1,
            "N": 403.2,
            "O": 2688,
            "P": 2688,
            "T": 7.901235,
            "V": 24424.296296
      }
},
    calculator: {
      fields: [
        {
                "key": "D",
                "label": "Chiều dài ô sàn L (D)",
                "default": 168,
                "unit": "m",
                "step": 1
        },
        {
                "key": "E",
                "label": "Chiều rộng ô sàn W (E)",
                "default": 16,
                "unit": "m",
                "step": 0.5
        },
        {
                "key": "F",
                "label": "Chiều dày sàn h (F)",
                "default": 0.15,
                "unit": "m",
                "step": 0.01
        },
        {
                "key": "Q",
                "label": "Đường kính thép lưới (Q)",
                "default": 8,
                "unit": "mm",
                "step": 1
        },
        {
                "key": "R",
                "label": "Bước bố trí thép @ (R)",
                "default": 200,
                "unit": "mm",
                "step": 25
        },
        {
                "key": "S",
                "label": "Số lớp thép (S)",
                "default": 2,
                "unit": "lớp",
                "step": 1
        }
],
      compute: (vals) => {
      const D = Number(vals.D || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const Q = Number(vals.Q ?? 8);
      const R = Number(vals.R ?? 200);
      const S = Number(vals.S ?? 2);
      const U = 1.15;
      const G = D * E;
      const H = G * F;
      const I = G;
      const T = (Math.pow(Q, 2) / 162) * (1000 / R) * 2 * S;
      const V = G * T * U;
      return { G, H, I, T, V };
    }
    },
    warnings: [
      {
            "code": "LOI-08",
            "level": "Trung bình",
            "title": "Cảnh báo LOI-08 - Rà soát khi sử dụng",
            "content": "Lỗi hoặc rủi ro đã biết liên quan tới cấu kiện Sàn bê tông cốt thép trong file 1.1.",
            "remedy": "Xem chi tiết trong mục Kiểm tra chéo (Phần D) và đối chiếu với tiêu chuẩn."
      }
]
  },
  {
    id: "dam-tang",
    title: "Dầm tầng (Dầm chính & Dầm phụ)",
    fileSource: "1.1",
    sheetName: "Dầm tầng",
    purpose: "Tính toán bê tông sườn dầm (chiều cao dầm trừ chiều dày sàn), ván khuôn thành dầm 2 bên, ván khuôn đáy dầm (trừ phần cột) và trừ giao cắt dầm phụ.",
    parameters: [
      {
            "name": "TT",
            "column": "A",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cấu kiện",
            "column": "B",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Kích thước hình học · L",
            "column": "D",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · W",
            "column": "E",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · H",
            "column": "F",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · h · Sàn",
            "column": "G",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Số cấu kiện/1 tầng",
            "column": "L",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Số tầng giống nhau",
            "column": "M",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cốt thép · Hàm lượng",
            "column": "R",
            "source": "Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế",
            "note": "Đơn vị: (kg)"
      },
      {
            "name": "GIAO CẮT DẦM · Tên",
            "column": "U",
            "source": "Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "GIAO CẮT DẦM · Kích thước",
            "column": "W",
            "source": "Báo cáo địa chất / Bảng 11 TCVN 4447:2012",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "GIAO CẮT DẦM · Kích thước",
            "column": "X",
            "source": "Báo cáo địa chất / Bảng 11 TCVN 4447:2012",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "GIAO CẮT DẦM · SL",
            "column": "Z",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Nhập số liệu thiết kế"
      }
],
    formulas: [
      {
            "target": "Cấu kiện (Cột C)",
            "mathFormat": "\"WxH: \"&W*100&\"x\"&H*100&\"\"",
            "excelCode": "`=\"WxH: \"&E13*100&\"x\"&F13*100&\"\"`",
            "description": "Giải nghĩa: \"WxH: \"&[W]*100&\"x\"&[H]*100&\"\""
      },
      {
            "target": "Trừ · Cột / / dầm … (Cột H)",
            "mathFormat": "0.4*3",
            "excelCode": "`=0.4*3`",
            "description": "Giải nghĩa: 0.4*3"
      },
      {
            "target": "Khối lượng 1 cấu kiện · Bê tông (Cột I)",
            "mathFormat": "(L-Cột / / dầm …)*W*(H-Sàn)",
            "excelCode": "`=+(D13-H13)*E13*(F13-G13)`",
            "description": "Giải nghĩa: ([L]-[Cột / / dầm …])*[W]*([H]-[Sàn])"
      },
      {
            "target": "Khối lượng 1 cấu kiện · Ván khuôn · Thành dầm (Cột J)",
            "mathFormat": "(L-Cột / / dầm …)*(H-Sàn)*2",
            "excelCode": "`=+(D13-H13)*(F13-G13)*2`",
            "description": "Giải nghĩa: ([L]-[Cột / / dầm …])*([H]-[Sàn])*2"
      },
      {
            "target": "Khối lượng 1 cấu kiện · Ván khuôn · Đáy dầm (Cột K)",
            "mathFormat": "(L-Cột / / dầm …)*W",
            "excelCode": "`=+(D13-H13)*E13`",
            "description": "Giải nghĩa: ([L]-[Cột / / dầm …])*[W]"
      },
      {
            "target": "Hao hụt (Cột N)",
            "mathFormat": "Móng!$AN$12",
            "excelCode": "`=+Móng!$AN$12`",
            "description": "Giải nghĩa: Móng!$AN$12"
      },
      {
            "target": "Khối toàn bộ · Bê tông (Cột O)",
            "mathFormat": "Khối lượng 1 cấu kiện Bê tông*Số cấu kiện/1 tầng*Số tầng giống nhau*Hao hụt",
            "excelCode": "`=+I13*L13*M13*N13`",
            "description": "Giải nghĩa: [Khối lượng 1 cấu kiện Bê tông]*[Số cấu kiện/1 tầng]*[Số tầng giống nhau]*[Hao hụt]"
      },
      {
            "target": "Khối toàn bộ · Ván khuôn · Thành dầm (Cột P)",
            "mathFormat": "Ván khuôn Thành dầm*Số cấu kiện/1 tầng*Số tầng giống nhau",
            "excelCode": "`=+J13*L13*M13`",
            "description": "Giải nghĩa: [Ván khuôn Thành dầm]*[Số cấu kiện/1 tầng]*[Số tầng giống nhau]"
      },
      {
            "target": "Khối toàn bộ · Ván khuôn · Đáy dầm (Cột Q)",
            "mathFormat": "Ván khuôn Đáy dầm*Số cấu kiện/1 tầng*Số tầng giống nhau",
            "excelCode": "`=+K13*L13*M13`",
            "description": "Giải nghĩa: [Ván khuôn Đáy dầm]*[Số cấu kiện/1 tầng]*[Số tầng giống nhau]"
      },
      {
            "target": "Cốt thép · Trọng lượng (Cột S)",
            "mathFormat": "L*W*H*Số cấu kiện/1 tầng*Số tầng giống nhau*Hàm lượng*Hao hụt",
            "excelCode": "`=+D13*E13*F13*L13*M13*R13*N13`",
            "description": "Giải nghĩa: [L]*[W]*[H]*[Số cấu kiện/1 tầng]*[Số tầng giống nhau]*[Hàm lượng]*[Hao hụt]"
      }
],
    svgKey: "SvgDamTang",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Dầm tầng",
      "inputs": {
            "A": 1,
            "D": 14.4,
            "E": 0.3,
            "F": 0.7,
            "G": 0.15,
            "L": 1,
            "M": 1,
            "R": 180,
            "W": 0.25,
            "X": 0.5,
            "Z": 2
      },
      "outputs": {
            "H": 1.2,
            "I": 2.178,
            "J": 14.52,
            "K": 3.96,
            "N": 1,
            "O": 2.178,
            "P": 14.52,
            "Q": 3.96,
            "S": 544.32,
            "Y": 0.15,
            "AA": 0.175
      }
},
    calculator: {
      fields: [
        {
                "key": "D",
                "label": "Chiều dài trục dầm L (D)",
                "default": 14.4,
                "unit": "m",
                "step": 0.2
        },
        {
                "key": "E",
                "label": "Chiều rộng dầm b (E)",
                "default": 0.3,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "F",
                "label": "Chiều cao dầm h (F)",
                "default": 0.7,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "G",
                "label": "Chiều dày sàn (G)",
                "default": 0.15,
                "unit": "m",
                "step": 0.01
        },
        {
                "key": "H",
                "label": "Trừ bề rộng cột (H)",
                "default": 1.2,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "L",
                "label": "Số lượng dầm (L)",
                "default": 1,
                "unit": "dầm",
                "step": 1
        },
        {
                "key": "R",
                "label": "Hàm lượng cốt thép (R)",
                "default": 180,
                "unit": "kg/m³",
                "step": 10
        }
],
      compute: (vals) => {
      const D = Number(vals.D || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const H = Number(vals.H ?? 1.2);
      const L = Number(vals.L ?? 1);
      const M = 1;
      const R = Number(vals.R ?? 180);
      const I = (D - H) * E * (F - G);
      const J = (D - H) * (F - G) * 2;
      const K = (D - H) * E;
      const O = I * L * M;
      const P = J * L * M;
      const Q = K * L * M;
      const S = D * E * F * L * M * R;
      return { I, J, K, O, P, Q, S };
    }
    },
    warnings: []
  },
  {
    id: "cau-thang",
    title: "Cầu thang bộ",
    fileSource: "1.1",
    sheetName: "Cầu thang",
    purpose: "Tính toán thể tích bê tông bản thang nghiêng, bản chiếu nghỉ, dầm cốn thang, bậc thang xây/đổ và ván khuôn đáy/thành bản thang.",
    parameters: [
      {
            "name": "TT",
            "column": "A",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cấu kiện",
            "column": "B",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Vị trí",
            "column": "C",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Kích thước hình học · W",
            "column": "E",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · H",
            "column": "F",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Số cấu kiện/1 tầng",
            "column": "I",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Số tầng giống nhau",
            "column": "J",
            "source": "Chỉ dẫn kỹ thuật / chi tiết cấu tạo",
            "note": "Nhập số liệu thiết kế"
      }
],
    formulas: [
      {
            "target": "Kích thước hình học · L (Cột D)",
            "mathFormat": "(3.258+2.917)/2",
            "excelCode": "`=+(3.258+2.917)/2`",
            "description": "Giải nghĩa: (3.258+2.917)/2"
      },
      {
            "target": "Khối lượng 1 cấu kiện · Bê tông · m3 (Cột G)",
            "mathFormat": "L*W*H",
            "excelCode": "`=+D10*E10*F10`",
            "description": "Giải nghĩa: [L]*[W]*[H]"
      },
      {
            "target": "Khối lượng 1 cấu kiện · Ván khuôn · m2 (Cột H)",
            "mathFormat": "L*W+L*H*2",
            "excelCode": "`=+D10*E10+D10*F10*2`",
            "description": "Giải nghĩa: [L]*[W]+[L]*[H]*2"
      },
      {
            "target": "Hao hụt (Cột K)",
            "mathFormat": "Móng!$AN$12",
            "excelCode": "`=+Móng!$AN$12`",
            "description": "Giải nghĩa: Móng!$AN$12"
      },
      {
            "target": "Khối lượng toàn bộ · Bê tông · m3 (Cột L)",
            "mathFormat": "Bê tông m3*Số cấu kiện/1 tầng*Số tầng giống nhau*Hao hụt",
            "excelCode": "`=+G10*I10*J10*K10`",
            "description": "Giải nghĩa: [Bê tông m3]*[Số cấu kiện/1 tầng]*[Số tầng giống nhau]*[Hao hụt]"
      },
      {
            "target": "Khối lượng toàn bộ · Ván khuôn · m2 (Cột M)",
            "mathFormat": "Ván khuôn m2*Số cấu kiện/1 tầng*Số tầng giống nhau",
            "excelCode": "`=+H10*I10*J10`",
            "description": "Giải nghĩa: [Ván khuôn m2]*[Số cấu kiện/1 tầng]*[Số tầng giống nhau]"
      }
],
    svgKey: "SvgCauThang",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Cầu thang",
      "inputs": {
            "A": 1,
            "E": 1.72,
            "F": 0.15,
            "I": 2,
            "J": 1
      },
      "outputs": {
            "D": 3.0875,
            "G": 0.796575,
            "H": 6.23675,
            "K": 1,
            "L": 1.59315,
            "M": 12.4735
      }
},
    calculator: {
      fields: [
        {
                "key": "D",
                "label": "Chiều dài bản nghiêng (D)",
                "default": 3.0875,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "E",
                "label": "Chiều rộng vế thang (E)",
                "default": 1.72,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "F",
                "label": "Chiều dày bản thang (F)",
                "default": 0.15,
                "unit": "m",
                "step": 0.01
        },
        {
                "key": "I",
                "label": "Số vế thang mỗi tầng (I)",
                "default": 2,
                "unit": "vế",
                "step": 1
        },
        {
                "key": "J",
                "label": "Số tầng thang (J)",
                "default": 1,
                "unit": "tầng",
                "step": 1
        }
],
      compute: (vals) => {
      const D = Number(vals.D ?? 3.0875);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const I = Number(vals.I ?? 2);
      const J = Number(vals.J ?? 1);
      const G = D * E * F;
      const H = D * E + 2 * D * F;
      const L = G * I * J;
      const M = H * I * J;
      return { G, H, L, M };
    }
    },
    warnings: []
  },
  {
    id: "hoan-thien",
    title: "Hoàn thiện Sàn - Trần - Tường",
    fileSource: "1.1",
    sheetName: "Hoàn thiện Sàn-Trần",
    purpose: "Tính toán diện tích lát sàn theo từng mã F1–F9, trần thạch cao/sơn C1–C6, ốp tường gạch theo mã W1–W3, len chân tường SK1–SK6 và chống thấm khu vệ sinh.",
    parameters: [
      {
            "name": "FL/ / Số tầng giống nhau",
            "column": "M",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Ceiling/Trần · C4 · Trần thạch cách âm T600x600",
            "column": "Z",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Đơn vị: (m2)"
      },
      {
            "name": "Wall/Tường · W2 · Gạch ốp tường 300x600",
            "column": "AE",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m2)"
      }
],
    formulas: [
      {
            "target": "H · Cao / (Ốp tường) (Cột I)",
            "mathFormat": "IF(Floor/ / Sàn=\"F1\",$I$11,0)",
            "excelCode": "`=IF(C12=\"F1\",$I$11,0)`",
            "description": "Giải nghĩa: IF([Floor/ / Sàn]=\"F1\",$I$11,0)"
      },
      {
            "target": "Floor/ Sàn · F1 · Lát gạch chống trượt 300x300 / (WC, Bếp..) (Cột N)",
            "mathFormat": "IF(Floor/ / Sàn=N$8,Diện tích*Number/Số lượng*FL/ / Số tầng giống nhau,0)",
            "excelCode": "`=+IF($C12=N$8,$J12*$L12*$M12,0)`",
            "description": "Giải nghĩa: IF([Floor/ / Sàn]=N$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0)"
      },
      {
            "target": "Floor/ Sàn · F2 · Lát gạch 300x300  / (Ban công) (Cột O)",
            "mathFormat": "IF(Floor/ / Sàn=O$8,Diện tích*Number/Số lượng*FL/ / Số tầng giống nhau,0)",
            "excelCode": "`=+IF($C12=O$8,$J12*$L12*$M12,0)`",
            "description": "Giải nghĩa: IF([Floor/ / Sàn]=O$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0)"
      },
      {
            "target": "Floor/ Sàn · F3 · Lát gạch 400x400 (Cột P)",
            "mathFormat": "IF(Floor/ / Sàn=P$8,Diện tích*Number/Số lượng*FL/ / Số tầng giống nhau,0)",
            "excelCode": "`=+IF($C12=P$8,$J12*$L12*$M12,0)`",
            "description": "Giải nghĩa: IF([Floor/ / Sàn]=P$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0)"
      },
      {
            "target": "Floor/ Sàn · F4 · Lát gạch 600x600 (Cột Q)",
            "mathFormat": "IF(Floor/ / Sàn=Q$8,Diện tích*Number/Số lượng*FL/ / Số tầng giống nhau,0)",
            "excelCode": "`=+IF($C12=Q$8,$J12*$L12*$M12,0)`",
            "description": "Giải nghĩa: IF([Floor/ / Sàn]=Q$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0)"
      },
      {
            "target": "Floor/ Sàn · F5 · Lát gạch 800x800 (Cột R)",
            "mathFormat": "IF(Floor/ / Sàn=R$8,Diện tích*Number/Số lượng*FL/ / Số tầng giống nhau,0)",
            "excelCode": "`=+IF($C12=R$8,$J12*$L12*$M12,0)`",
            "description": "Giải nghĩa: IF([Floor/ / Sàn]=R$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0)"
      },
      {
            "target": "Floor/ Sàn · F6 · Lát đá granite (Cột S)",
            "mathFormat": "IF(Floor/ / Sàn=S$8,Diện tích*Number/Số lượng*FL/ / Số tầng giống nhau,0)",
            "excelCode": "`=+IF($C12=S$8,$J12*$L12*$M12,0)`",
            "description": "Giải nghĩa: IF([Floor/ / Sàn]=S$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0)"
      },
      {
            "target": "Floor/ Sàn · F7 · Hardener / 4kg/m2 (Cột T)",
            "mathFormat": "IF(Floor/ / Sàn=T$8,Diện tích*Number/Số lượng*FL/ / Số tầng giống nhau,0)",
            "excelCode": "`=+IF($C12=T$8,$J12*$L12*$M12,0)`",
            "description": "Giải nghĩa: IF([Floor/ / Sàn]=T$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0)"
      },
      {
            "target": "Floor/ Sàn · F8 · Epoxy / 1mm (Cột U)",
            "mathFormat": "IF(Floor/ / Sàn=U$8,Diện tích*Number/Số lượng*FL/ / Số tầng giống nhau,0)",
            "excelCode": "`=+IF($C12=U$8,$J12*$L12*$M12,0)`",
            "description": "Giải nghĩa: IF([Floor/ / Sàn]=U$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0)"
      },
      {
            "target": "Floor/ Sàn · F9 · Epoxy tự phẳng / 3mm (Cột V)",
            "mathFormat": "IF(Floor/ / Sàn=V$8,Diện tích*Number/Số lượng*FL/ / Số tầng giống nhau,0)",
            "excelCode": "`=+IF($C12=V$8,$J12*$L12*$M12,0)`",
            "description": "Giải nghĩa: IF([Floor/ / Sàn]=V$8,[Diện tích]*[Number/Số lượng]*[FL/ / Số tầng giống nhau],0)"
      }
],
    svgKey: "SvgSan",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Hoàn thiện Sàn-Trần",
      "inputs": {
            "M": 1
      },
      "outputs": {
            "I": 0,
            "N": 0,
            "O": 0,
            "P": 0,
            "Q": 0,
            "R": 0,
            "S": 0,
            "T": 0,
            "U": 0,
            "V": 0,
            "W": 0,
            "X": 0,
            "Y": 0,
            "Z": 0,
            "AA": 0,
            "AB": 0,
            "AC": 0,
            "AD": 0,
            "AE": 0,
            "AF": 0,
            "AG": 0,
            "AH": 0,
            "AI": 0,
            "AJ": 0,
            "AK": 0,
            "AL": 0
      }
},
    calculator: {
      fields: [
        {
                "key": "J",
                "label": "Diện tích phòng (J)",
                "default": 25,
                "unit": "m²",
                "step": 1
        },
        {
                "key": "K",
                "label": "Chu vi phòng (K)",
                "default": 20,
                "unit": "m",
                "step": 0.5
        },
        {
                "key": "I",
                "label": "Chiều cao ốp tường (I)",
                "default": 2.4,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "L",
                "label": "Số phòng giống nhau (L)",
                "default": 1,
                "unit": "phòng",
                "step": 1
        },
        {
                "key": "M",
                "label": "Số tầng (M)",
                "default": 1,
                "unit": "tầng",
                "step": 1
        }
],
      compute: (vals) => {
      const J = Number(vals.J || 0);
      const K = Number(vals.K || 0);
      const I = Number(vals.I || 0);
      const L = Number(vals.L ?? 1);
      const M = Number(vals.M ?? 1);
      const S_san = J * L * M;
      const S_tran = J * L * M;
      const S_op = K * I * L * M;
      const L_chan_tuong = K * L * M;
      return { S_san, S_tran, S_op, L_chan_tuong };
    }
    },
    warnings: []
  },
  {
    id: "tuong-xay",
    title: "Tường xây gạch & Trát hoàn thiện",
    fileSource: "1.1",
    sheetName: "Tường xây",
    purpose: "Tính toán khối xây tường ngoài (EW) và tường trong (IW) theo bề dày 110, 220, 330mm; trừ diện tích cửa đi, cửa sổ, trụ giằng bê tông và diện tích trát/ốp tường.",
    parameters: [
      {
            "name": "Diễn giải",
            "column": "B",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Ký hiệu",
            "column": "C",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Số lượng",
            "column": "D",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Số tầng giống nhau",
            "column": "E",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Kích thước hình học · L",
            "column": "F",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · W",
            "column": "G",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · H",
            "column": "H",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Sơn tường - ốp tường · Sơn trong nhà",
            "column": "AE",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m2)"
      }
],
    formulas: [
      {
            "target": "Kích thước hình học · h1 / (Chân tường ngoài) (Cột I)",
            "mathFormat": "IF(Ký hiệu=\"EW1\",$I$9,IF(Ký hiệu=\"EW2\",$I$9,0))",
            "excelCode": "`=+IF(C10=\"EW1\",$I$9,IF(C10=\"EW2\",$I$9,0))`",
            "description": "Giải nghĩa: IF([Ký hiệu]=\"EW1\",$I$9,IF([Ký hiệu]=\"EW2\",$I$9,0))"
      },
      {
            "target": "Kích thước hình học · h2 / (Trát trong) (Cột J)",
            "mathFormat": "H-Trừ dầm/ sàn",
            "excelCode": "`=+H10-M10`",
            "description": "Giải nghĩa: [H]-[Trừ dầm/ sàn]"
      },
      {
            "target": "Kích thước hình học · h3 / (ốp gạch) (Cột K)",
            "mathFormat": "IF(Ký hiệu=\"EW2\",$K$9,0)+IF(Ký hiệu=\"IW2\",$K$9,0)+IF(Ký hiệu=\"IW3\",$K$9,0)+IF(Ký hiệu=\"IW5\",$K$9,0)",
            "excelCode": "`=+IF(C10=\"EW2\",$K$9,0)+IF(C10=\"IW2\",$K$9,0)+IF(C10=\"IW3\",$K$9,0)+IF(C10=\"IW5\",$K$9,0)`",
            "description": "Giải nghĩa: IF([Ký hiệu]=\"EW2\",$K$9,0)+IF([Ký hiệu]=\"IW2\",$K$9,0)+IF([Ký hiệu]=\"IW3\",$K$9,0)+IF([Ký hiệu]=\"IW5\",$K$9,0)"
      },
      {
            "target": "EW1,EW2,EW3 / Tường ngoài · 330 (Cột N)",
            "mathFormat": "(IF(W=$N$7/1000,IF(Ký hiệu=\"EW1\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0)+IF(Ký hiệu=\"EW2\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0)+IF(Ký hiệu=\"EW3\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0),0))*Số lượng*Số tầng giống nhau",
            "excelCode": "`=(IF(G10=$N$7/1000,IF(C10=\"EW1\",(F10-L10)*G10*(H10-M10),0)+IF(C10=\"EW2\",(F10-L10)*G10*(H10-M10),0)+IF(C10=\"EW3\",(F10-L10)*G10*(H10-M10),0),0))*D10*E10`",
            "description": "Giải nghĩa: (IF([W]=$N$7/1000,IF([Ký hiệu]=\"EW1\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]=\"EW2\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]=\"EW3\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0),0))*[Số lượng]*[Số tầng giống nhau]"
      },
      {
            "target": "EW1,EW2,EW3 / Tường ngoài · 220 (Cột O)",
            "mathFormat": "(IF(W=$O$7/1000,IF(Ký hiệu=\"EW1\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0)+IF(Ký hiệu=\"EW2\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0)+IF(Ký hiệu=\"EW3\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0),0))*Số lượng*Số tầng giống nhau",
            "excelCode": "`=(IF(G10=$O$7/1000,IF(C10=\"EW1\",(F10-L10)*G10*(H10-M10),0)+IF(C10=\"EW2\",(F10-L10)*G10*(H10-M10),0)+IF(C10=\"EW3\",(F10-L10)*G10*(H10-M10),0),0))*D10*E10`",
            "description": "Giải nghĩa: (IF([W]=$O$7/1000,IF([Ký hiệu]=\"EW1\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]=\"EW2\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]=\"EW3\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0),0))*[Số lượng]*[Số tầng giống nhau]"
      },
      {
            "target": "EW1,EW2,EW3 / Tường ngoài · 110 (Cột P)",
            "mathFormat": "(IF(W=$P$7/1000,IF(Ký hiệu=\"EW1\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0)+IF(Ký hiệu=\"EW2\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0)+IF(Ký hiệu=\"EW3\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0),0))*Số lượng*Số tầng giống nhau",
            "excelCode": "`=(IF(G10=$P$7/1000,IF(C10=\"EW1\",(F10-L10)*G10*(H10-M10),0)+IF(C10=\"EW2\",(F10-L10)*G10*(H10-M10),0)+IF(C10=\"EW3\",(F10-L10)*G10*(H10-M10),0),0))*D10*E10`",
            "description": "Giải nghĩa: (IF([W]=$P$7/1000,IF([Ký hiệu]=\"EW1\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]=\"EW2\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]=\"EW3\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0),0))*[Số lượng]*[Số tầng giống nhau]"
      },
      {
            "target": "IW1,IW2,IW3,IW4,IW5 / Tường trong · 330 (Cột Q)",
            "mathFormat": "(IF(W=$Q$7/1000,IF(Ký hiệu=\"IW1\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0)+IF(Ký hiệu=\"IW2\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0)+IF(Ký hiệu=\"IW3\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0)+IF(Ký hiệu=\"IW4\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0)+IF(Ký hiệu=\"IW5\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0),0))*Số lượng*Số tầng giống nhau",
            "excelCode": "`=(IF(G10=$Q$7/1000,IF(C10=\"IW1\",(F10-L10)*G10*(H10-M10),0)+IF(C10=\"IW2\",(F10-L10)*G10*(H10-M10),0)+IF(C10=\"IW3\",(F10-L10)*G10*(H10-M10),0)+IF(C10=\"IW4\",(F10-L10)*G10*(H10-M10),0)+IF(C10=\"IW5\",(F10-L10)*G10*(H10-M10),0),0))*D10*E10`",
            "description": "Giải nghĩa: (IF([W]=$Q$7/1000,IF([Ký hiệu]=\"IW1\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]=\"IW2\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]=\"IW3\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]=\"IW4\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]=\"IW5\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0),0))*[Số lượng]*[Số tầng giống nhau]"
      },
      {
            "target": "IW1,IW2,IW3,IW4,IW5 / Tường trong · 220 (Cột R)",
            "mathFormat": "(IF(W=$R$7/1000,IF(Ký hiệu=\"IW1\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0)+IF(Ký hiệu=\"IW2\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0)+IF(Ký hiệu=\"IW3\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0)+IF(Ký hiệu=\"IW4\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0)+IF(Ký hiệu=\"IW5\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0),0))*Số lượng*Số tầng giống nhau",
            "excelCode": "`=(IF(G10=$R$7/1000,IF(C10=\"IW1\",(F10-L10)*G10*(H10-M10),0)+IF(C10=\"IW2\",(F10-L10)*G10*(H10-M10),0)+IF(C10=\"IW3\",(F10-L10)*G10*(H10-M10),0)+IF(C10=\"IW4\",(F10-L10)*G10*(H10-M10),0)+IF(C10=\"IW5\",(F10-L10)*G10*(H10-M10),0),0))*D10*E10`",
            "description": "Giải nghĩa: (IF([W]=$R$7/1000,IF([Ký hiệu]=\"IW1\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]=\"IW2\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]=\"IW3\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]=\"IW4\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]=\"IW5\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0),0))*[Số lượng]*[Số tầng giống nhau]"
      },
      {
            "target": "IW1,IW2,IW3,IW4,IW5 / Tường trong · 110 (Cột S)",
            "mathFormat": "(IF(W=$S$7/1000,IF(Ký hiệu=\"IW1\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0)+IF(Ký hiệu=\"IW2\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0)+IF(Ký hiệu=\"IW3\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0)+IF(Ký hiệu=\"IW4\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0)+IF(Ký hiệu=\"IW5\",(L-Trừ cột)*W*(H-Trừ dầm/ sàn),0),0))*Số lượng*Số tầng giống nhau",
            "excelCode": "`=(IF(G10=$S$7/1000,IF(C10=\"IW1\",(F10-L10)*G10*(H10-M10),0)+IF(C10=\"IW2\",(F10-L10)*G10*(H10-M10),0)+IF(C10=\"IW3\",(F10-L10)*G10*(H10-M10),0)+IF(C10=\"IW4\",(F10-L10)*G10*(H10-M10),0)+IF(C10=\"IW5\",(F10-L10)*G10*(H10-M10),0),0))*D10*E10`",
            "description": "Giải nghĩa: (IF([W]=$S$7/1000,IF([Ký hiệu]=\"IW1\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]=\"IW2\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]=\"IW3\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]=\"IW4\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0)+IF([Ký hiệu]=\"IW5\",([L]-[Trừ cột])*[W]*([H]-[Trừ dầm/ sàn]),0),0))*[Số lượng]*[Số tầng giống nhau]"
      },
      {
            "target": "Công tác trát tường · Trát ngoài (Cột T)",
            "mathFormat": "(IF(Ký hiệu=\"EW1\",L*(H+h1 / (Chân tường ngoài)),IF(Ký hiệu=\"EW2\",L*(H+h1 / (Chân tường ngoài)),0)+IF(Ký hiệu=\"EW3\",L*(H+h1 / (Chân tường ngoài))*2,0)))*Số lượng*Số tầng giống nhau",
            "excelCode": "`=+(IF(C10=\"EW1\",F10*(H10+I10),IF(C10=\"EW2\",F10*(H10+I10),0)+IF(C10=\"EW3\",F10*(H10+I10)*2,0)))*D10*E10`",
            "description": "Giải nghĩa: (IF([Ký hiệu]=\"EW1\",[L]*([H]+[h1 / (Chân tường ngoài)]),IF([Ký hiệu]=\"EW2\",[L]*([H]+[h1 / (Chân tường ngoài)]),0)+IF([Ký hiệu]=\"EW3\",[L]*([H]+[h1 / (Chân tường ngoài)])*2,0)))*[Số lượng]*[Số tầng giống nhau]"
      }
],
    svgKey: "SvgTuongXay",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Tường xây",
      "inputs": {
            "D": 1,
            "E": 1,
            "F": 20,
            "G": 0.11,
            "H": 5
      },
      "outputs": {
            "I": 0.5,
            "J": 5,
            "K": 0,
            "N": 0,
            "O": 0,
            "P": 11,
            "Q": 0,
            "R": 0,
            "S": 0,
            "T": 110,
            "U": 100,
            "AD": 110,
            "AE": 100,
            "AF": 0
      }
},
    calculator: {
      fields: [
        {
                "key": "F",
                "label": "Chiều dài tường (F)",
                "default": 20,
                "unit": "m",
                "step": 0.5
        },
        {
                "key": "G",
                "label": "Chiều dày tường (G)",
                "default": 0.11,
                "unit": "m",
                "step": 0.11
        },
        {
                "key": "H",
                "label": "Chiều cao tường (H)",
                "default": 5,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "I",
                "label": "Chân tường trát ngoài (I)",
                "default": 0.5,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "J",
                "label": "Chiều cao trát trong (J)",
                "default": 5,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "D",
                "label": "Số lượng tường (D)",
                "default": 1,
                "unit": "bức",
                "step": 1
        },
        {
                "key": "E",
                "label": "Số tầng (E)",
                "default": 1,
                "unit": "tầng",
                "step": 1
        }
],
      compute: (vals) => {
      const D = Number(vals.D ?? 1);
      const E = Number(vals.E ?? 1);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const H = Number(vals.H || 0);
      const I = Number(vals.I ?? 0.5);
      const J = Number(vals.J ?? 5);
      const P = (Math.abs(G - 0.11) < 0.005 || Math.abs(G - 0.22) < 0.005 || Math.abs(G - 0.33) < 0.005) ? F * G * H * D * E : 0;
      const T = F * (H + I) * D * E;
      const U = F * J * D * E;
      return { P, T, U };
    }
    },
    warnings: [
      {
            "code": "LOI-06",
            "level": "Cao",
            "title": "Cảnh báo LOI-06 - Rà soát khi sử dụng",
            "content": "Lỗi hoặc rủi ro đã biết liên quan tới cấu kiện Tường xây gạch & Trát hoàn thiện trong file 1.1.",
            "remedy": "Xem chi tiết trong mục Kiểm tra chéo (Phần D) và đối chiếu với tiêu chuẩn."
      },
      {
            "code": "LOI-07",
            "level": "Trung bình",
            "title": "Cảnh báo LOI-07 - Rà soát khi sử dụng",
            "content": "Lỗi hoặc rủi ro đã biết liên quan tới cấu kiện Tường xây gạch & Trát hoàn thiện trong file 1.1.",
            "remedy": "Xem chi tiết trong mục Kiểm tra chéo (Phần D) và đối chiếu với tiêu chuẩn."
      }
]
  },
  {
    id: "vach-ngan",
    title: "Vách ngăn nhẹ (Thạch cao, Cemboard)",
    fileSource: "1.1",
    sheetName: "Vách ngăn",
    purpose: "Tính toán diện tích khung xương và tấm vách ngăn nhẹ theo từng hệ W1–W9, chiều cao đến đáy sàn hoặc trần treo, trừ diện tích cửa đi.",
    parameters: [
      {
            "name": "TT",
            "column": "A",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Công tác",
            "column": "B",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Diễn giải",
            "column": "C",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Kí hiệu",
            "column": "D",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Số lượng",
            "column": "E",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Số tầng giống nhau",
            "column": "F",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Kích thước hình học · L",
            "column": "G",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "H  / (Đến đáy sàn BT- Mái)",
            "column": "J",
            "source": "Chỉ dẫn kỹ thuật / chi tiết cấu tạo",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "VÁCH THẠCH CAO · Hộp gia cố vách · Số hộp ngang/ / vách",
            "column": "P",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      }
],
    formulas: [
      {
            "target": "Kích thước hình học · H (Cột I)",
            "mathFormat": "3+0.2",
            "excelCode": "`=3+0.2`",
            "description": "Giải nghĩa: 3+0.2"
      },
      {
            "target": "VÁCH THẠCH CAO · W1 · Vách 1 mặt / (Tấm thường) (Cột K)",
            "mathFormat": "IF(Kí hiệu=$K$7,L*H*Số lượng*Số tầng giống nhau,0)",
            "excelCode": "`=+IF(D11=$K$7,G11*I11*E11*F11,0)`",
            "description": "Giải nghĩa: IF([Kí hiệu]=$K$7,[L]*[H]*[Số lượng]*[Số tầng giống nhau],0)"
      },
      {
            "target": "VÁCH THẠCH CAO · W2 · Vách 2 mặt / (Tấm thường) (Cột L)",
            "mathFormat": "IF(Kí hiệu=$L$7,L*H*Số lượng*Số tầng giống nhau,0)",
            "excelCode": "`=+IF(D11=$L$7,G11*I11*E11*F11,0)`",
            "description": "Giải nghĩa: IF([Kí hiệu]=$L$7,[L]*[H]*[Số lượng]*[Số tầng giống nhau],0)"
      },
      {
            "target": "VÁCH THẠCH CAO · W3 · Vách 1 mặt / (Chống cháy) (Cột M)",
            "mathFormat": "IF(Kí hiệu=$M$7,L*H*Số lượng*Số tầng giống nhau,0)",
            "excelCode": "`=+IF(D11=$M$7,G11*I11*E11*F11,0)`",
            "description": "Giải nghĩa: IF([Kí hiệu]=$M$7,[L]*[H]*[Số lượng]*[Số tầng giống nhau],0)"
      },
      {
            "target": "VÁCH THẠCH CAO · W4 · Vách 2 mặt / (Chống cháy) (Cột N)",
            "mathFormat": "IF(Kí hiệu=$N$7,L*H*Số lượng*Số tầng giống nhau,0)",
            "excelCode": "`=+IF(D11=$N$7,G11*I11*E11*F11,0)`",
            "description": "Giải nghĩa: IF([Kí hiệu]=$N$7,[L]*[H]*[Số lượng]*[Số tầng giống nhau],0)"
      },
      {
            "target": "VÁCH THẠCH CAO · W5 · Vách 2 mặt bông thủy tinh / (Cách âm) (Cột O)",
            "mathFormat": "IF(Kí hiệu=$O$7,L*H*Số lượng*Số tầng giống nhau,0)",
            "excelCode": "`=+IF(D11=$O$7,G11*I11*E11*F11,0)`",
            "description": "Giải nghĩa: IF([Kí hiệu]=$O$7,[L]*[H]*[Số lượng]*[Số tầng giống nhau],0)"
      },
      {
            "target": "VÁCH THẠCH CAO · Hộp gia cố vách · Hộp / (50x50) (Cột Q)",
            "mathFormat": "(IF(Số lượng>0,IF(Kí hiệu=$K$7,(L+L/3*H  / (Đến đáy sàn BT- Mái))*Số lượng*Số tầng giống nhau,0)+IF(Kí hiệu=$L$7,(L+L/3*H  / (Đến đáy sàn BT- Mái))*Số lượng*Số tầng giống nhau,0)+IF(Kí hiệu=$M$7,(L+L/3*H  / (Đến đáy sàn BT- Mái))*Số lượng*Số tầng giống nhau,0)+IF(Kí hiệu=$O$7,(L+L/3*H  / (Đến đáy sàn BT- Mái))*Số lượng*Số tầng giống nhau,0)+IF(Kí hiệu=$N$7,(L+L/3*H  / (Đến đáy sàn BT- Mái))*Số lượng*Số tầng giống nhau,0),0))*Số hộp ngang/ / vách",
            "excelCode": "`=(IF(E11>0,IF(D11=$K$7,(G11+G11/3*J11)*E11*F11,0)+IF(D11=$L$7,(G11+G11/3*J11)*E11*F11,0)+IF(D11=$M$7,(G11+G11/3*J11)*E11*F11,0)+IF(D11=$O$7,(G11+G11/3*J11)*E11*F11,0)+IF(D11=$N$7,(G11+G11/3*J11)*E11*F11,0),0))*P11`",
            "description": "Giải nghĩa: (IF([Số lượng]>0,IF([Kí hiệu]=$K$7,([L]+[L]/3*[H  / (Đến đáy sàn BT- Mái)])*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$L$7,([L]+[L]/3*[H  / (Đến đáy sàn BT- Mái)])*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$M$7,([L]+[L]/3*[H  / (Đến đáy sàn BT- Mái)])*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$O$7,([L]+[L]/3*[H  / (Đến đáy sàn BT- Mái)])*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$N$7,([L]+[L]/3*[H  / (Đến đáy sàn BT- Mái)])*[Số lượng]*[Số tầng giống nhau],0),0))*[Số hộp ngang/ / vách]"
      },
      {
            "target": "VÁCH THẠCH CAO · Sơn vách (Cột R)",
            "mathFormat": "IF(Kí hiệu=$K$7,L*H*Số lượng*Số tầng giống nhau,0)+IF(Kí hiệu=$L$7,L*H*2*Số lượng*Số tầng giống nhau,0)+IF(Kí hiệu=$M$7,L*H*Số lượng*Số tầng giống nhau,0)+IF(Kí hiệu=$N$7,L*H*2*Số lượng*Số tầng giống nhau,0)+IF(Kí hiệu=$O$7,L*H*2*Số lượng*Số tầng giống nhau,0)",
            "excelCode": "`=+IF(D11=$K$7,G11*I11*E11*F11,0)+IF(D11=$L$7,G11*I11*2*E11*F11,0)+IF(D11=$M$7,G11*I11*E11*F11,0)+IF(D11=$N$7,G11*I11*2*E11*F11,0)+IF(D11=$O$7,G11*I11*2*E11*F11,0)`",
            "description": "Giải nghĩa: IF([Kí hiệu]=$K$7,[L]*[H]*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$L$7,[L]*[H]*2*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$M$7,[L]*[H]*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$N$7,[L]*[H]*2*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$O$7,[L]*[H]*2*[Số lượng]*[Số tầng giống nhau],0)"
      },
      {
            "target": "VÁCH THẠCH CAO · Sơn chân vách H=100mm (Cột S)",
            "mathFormat": "IF(Kí hiệu=$K$7,L*Số lượng*Số tầng giống nhau,0)+IF(Kí hiệu=$L$7,L*2*Số lượng*Số tầng giống nhau,0)+IF(Kí hiệu=$M$7,L*Số lượng*Số tầng giống nhau,0)+IF(Kí hiệu=$N$7,L*2*Số lượng*Số tầng giống nhau,0)+IF(Kí hiệu=$O$7,L*2*Số lượng*Số tầng giống nhau,0)",
            "excelCode": "`=+IF(D11=$K$7,G11*E11*F11,0)+IF(D11=$L$7,G11*2*E11*F11,0)+IF(D11=$M$7,G11*E11*F11,0)+IF(D11=$N$7,G11*2*E11*F11,0)+IF(D11=$O$7,G11*2*E11*F11,0)`",
            "description": "Giải nghĩa: IF([Kí hiệu]=$K$7,[L]*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$L$7,[L]*2*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$M$7,[L]*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$N$7,[L]*2*[Số lượng]*[Số tầng giống nhau],0)+IF([Kí hiệu]=$O$7,[L]*2*[Số lượng]*[Số tầng giống nhau],0)"
      },
      {
            "target": "VÁCH KÍNH - VÁCH TOILET · W6 · Vách kính ngoài nhà (Cột T)",
            "mathFormat": "IF(Kí hiệu=$T$7,L*H*Số lượng*Số tầng giống nhau,0)",
            "excelCode": "`=+IF(D11=$T$7,G11*I11*E11*F11,0)`",
            "description": "Giải nghĩa: IF([Kí hiệu]=$T$7,[L]*[H]*[Số lượng]*[Số tầng giống nhau],0)"
      }
],
    svgKey: "SvgTuongXay",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Vách ngăn",
      "inputs": {
            "A": 1,
            "E": 1,
            "F": 1,
            "G": 9.55,
            "J": 5,
            "P": 1
      },
      "outputs": {
            "I": 3.2,
            "K": 0,
            "L": 30.56,
            "M": 0,
            "N": 0,
            "O": 0,
            "Q": 25.466667,
            "R": 61.12,
            "S": 19.1,
            "T": 0,
            "U": 0,
            "V": 0,
            "W": 0
      }
},
    calculator: {
      fields: [
        {
                "key": "G",
                "label": "Chiều dài vách (G)",
                "default": 9.55,
                "unit": "m",
                "step": 0.2
        },
        {
                "key": "J",
                "label": "Chiều cao vách (J)",
                "default": 5,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "K",
                "label": "Trừ diện tích cửa (K)",
                "default": 0,
                "unit": "m²",
                "step": 0.5
        },
        {
                "key": "P",
                "label": "Số lượng vách (P)",
                "default": 1,
                "unit": "vách",
                "step": 1
        }
],
      compute: (vals) => {
      const G = Number(vals.G || 0);
      const J = Number(vals.J || 0);
      const K = Number(vals.K ?? 0);
      const P = Number(vals.P ?? 1);
      const L = (G * J) - K;
      const R = L * P * 2;
      return { L, R };
    }
    },
    warnings: []
  },
  {
    id: "ha-tang-duong",
    title: "Hạ tầng - Đường giao thông nội bộ",
    fileSource: "1.1",
    sheetName: "Hạ tầng- Đường",
    purpose: "Tính toán diện tích mặt đường bê tông/nhựa R1–R3, thể tích bê tông mặt đường, lớp móng đá dăm cấp phối loại 1 và loại 2, lớp cát đệm nền đường (hệ số 1.35) và đào khuôn đường.",
    parameters: [
      {
            "name": "STT · I",
            "column": "A",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Nội dung diễn giải · Đường giao thông chính:",
            "column": "B",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Kí hiệu",
            "column": "C",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Số lượng",
            "column": "E",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Kích thước hình học · Cao · Base",
            "column": "H",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Diện tích",
            "column": "J",
            "source": "Chỉ dẫn kỹ thuật / chi tiết cấu tạo",
            "note": "Đơn vị: (m2)"
      },
      {
            "name": "Hệ số hao hụt / (%) · Bê tông",
            "column": "L",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "ĐƯỜNG BÊ TÔNG · R3 · Cốt thép · Hệ số",
            "column": "X",
            "source": "Báo cáo địa chất / Bảng 11 TCVN 4447:2012",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Hệ số · Đầm lu lèn chặt  cát san lấp",
            "column": "Z",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Xử lý nền đường · Cát san lấp · 0.3",
            "column": "AE",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m3)"
      }
],
    formulas: [
      {
            "target": "Hệ số lu lèn chặt / (%) · Base (Cột K)",
            "mathFormat": "Nền!$K$10",
            "excelCode": "`=+Nền!$K$10`",
            "description": "Giải nghĩa: Nền!$K$10"
      },
      {
            "target": "Base (Cột M)",
            "mathFormat": "IF(Kí hiệu=0,0,Diện tích*Cao Base*Số lượng*Hệ số lu lèn chặt / (%) Base)",
            "excelCode": "`=+IF(C11=0,0,J11*H11*E11*K11)`",
            "description": "Giải nghĩa: IF([Kí hiệu]=0,0,[Diện tích]*[Cao Base]*[Số lượng]*[Hệ số lu lèn chặt / (%) Base])"
      },
      {
            "target": "Đường Asphalt · R1 · Asphalt / (Tải trọng nhẹ) dày 70mm (Cột N)",
            "mathFormat": "IF(Kí hiệu=$N$7,Diện tích*Số lượng,0)",
            "excelCode": "`=+IF(C11=$N$7,J11*E11,0)`",
            "description": "Giải nghĩa: IF([Kí hiệu]=$N$7,[Diện tích]*[Số lượng],0)"
      },
      {
            "target": "Đường Asphalt · R2 · Asphalt / (Tải trọng nặng) (Cột O)",
            "mathFormat": "IF(Kí hiệu=$O$7,Diện tích*Số lượng,0)",
            "excelCode": "`=+IF(C11=$O$7,J11*E11,0)`",
            "description": "Giải nghĩa: IF([Kí hiệu]=$O$7,[Diện tích]*[Số lượng],0)"
      },
      {
            "target": "Đường Asphalt · Nhũ tương / (Đường TT nhẹ) (Cột P)",
            "mathFormat": "Asphalt / (Tải trọng nhẹ) dày 70mm",
            "excelCode": "`=+N11`",
            "description": "Giải nghĩa: [Asphalt / (Tải trọng nhẹ) dày 70mm]"
      },
      {
            "target": "Đường Asphalt · Nhũ tương / (Đường TT nặng) (Cột Q)",
            "mathFormat": "Asphalt / (Tải trọng nặng)",
            "excelCode": "`=+O11`",
            "description": "Giải nghĩa: [Asphalt / (Tải trọng nặng)]"
      },
      {
            "target": "ĐƯỜNG BÊ TÔNG · R3 · Bê tông (Cột R)",
            "mathFormat": "IF(Kí hiệu=$R$7,Diện tích*Cao Bê tông*Số lượng*Hệ số hao hụt / (%) Bê tông,0)",
            "excelCode": "`=+IF(C11=$R$7,J11*I11*E11*L11,0)`",
            "description": "Giải nghĩa: IF([Kí hiệu]=$R$7,[Diện tích]*[Cao Bê tông]*[Số lượng]*[Hệ số hao hụt / (%) Bê tông],0)"
      },
      {
            "target": "ĐƯỜNG BÊ TÔNG · R3 · Nilon lót (Cột S)",
            "mathFormat": "IF(Kí hiệu=$R$7,Diện tích*Số lượng,0)",
            "excelCode": "`=+IF(C11=$R$7,J11*E11,0)`",
            "description": "Giải nghĩa: IF([Kí hiệu]=$R$7,[Diện tích]*[Số lượng],0)"
      },
      {
            "target": "ĐƯỜNG BÊ TÔNG · R3 · Cốt thép · Kg/m2 (Cột W)",
            "mathFormat": "IF(SUM(D:Layer)=0,0,IF(Kí hiệu=\"R3\",(1000*D^2/162*10^6*(1000/@)*2*Layer)/10^9,0))",
            "excelCode": "`=+IF(SUM(T11:V11)=0,0,IF(C11=\"R3\",(1000*T11^2/162*10^6*(1000/U11)*2*V11)/10^9,0))`",
            "description": "Giải nghĩa: IF(SUM([D]:[Layer])=0,0,IF([Kí hiệu]=\"R3\",(1000*[D]^2/162*10^6*(1000/[@])*2*[Layer])/10^9,0))"
      },
      {
            "target": "ĐƯỜNG BÊ TÔNG · R3 · Cốt thép · Trọng lượng (Cột Y)",
            "mathFormat": "Diện tích*Kg/m2*Hệ số*Số lượng",
            "excelCode": "`=+J11*W11*X11*E11`",
            "description": "Giải nghĩa: [Diện tích]*[Kg/m2]*[Hệ số]*[Số lượng]"
      }
],
    svgKey: "SvgHaTangDuong",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Hạ tầng- Đường",
      "inputs": {
            "A": 1,
            "E": 1,
            "H": 0.4,
            "J": 1714.50875,
            "L": 1,
            "X": 1.15,
            "Z": 1.35
      },
      "outputs": {
            "K": 1,
            "M": 685.8035,
            "N": 1714.50875,
            "O": 0,
            "P": 1714.50875,
            "Q": 0,
            "R": 0,
            "S": 0,
            "W": 0,
            "Y": 0,
            "AA": -0.7,
            "AB": -0.36,
            "AC": 0.36,
            "AD": 617.22315,
            "AE": 694.376044,
            "AF": 1714.50875
      }
},
    calculator: {
      fields: [
        {
                "key": "J",
                "label": "Diện tích mặt đường (J)",
                "default": 1714.51,
                "unit": "m²",
                "step": 10
        },
        {
                "key": "H",
                "label": "Chiều dày bê tông mặt (H)",
                "default": 0.4,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "Z",
                "label": "Hệ số đầm nén cát (Z)",
                "default": 1.35,
                "unit": "lần",
                "step": 0.05
        }
],
      compute: (vals) => {
      const H = Number(vals.H || 0);
      const J = Number(vals.J || 0);
      const Z = Number(vals.Z ?? 1.35);
      const M = J * H;
      const P = J;
      return { M, P };
    }
    },
    warnings: [
      {
            "code": "LOI-10",
            "level": "Cao",
            "title": "Cảnh báo LOI-10 - Rà soát khi sử dụng",
            "content": "Lỗi hoặc rủi ro đã biết liên quan tới cấu kiện Hạ tầng - Đường giao thông nội bộ trong file 1.1.",
            "remedy": "Xem chi tiết trong mục Kiểm tra chéo (Phần D) và đối chiếu với tiêu chuẩn."
      }
]
  },
  {
    id: "ha-tang-cong",
    title: "Hạ tầng - Cống tròn thoát nước",
    fileSource: "1.1",
    sheetName: "Hạ tầng- Cống tròn",
    purpose: "Tính toán chiều dài lắp đặt cống tròn bê tông đúc sẵn theo từng đường kính (D300 đến D1500), thể tích đào rãnh cống, bê tông đế cống, cát đệm lưng cống và đắp đất hoàn trả.",
    parameters: [
      {
            "name": "No",
            "column": "A",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Quy cách · From",
            "column": "B",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Quy cách · To",
            "column": "C",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Quy cách · Trừ giao hố ga / (m) · d / (m)",
            "column": "D",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "D / (m)",
            "column": "F",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Kí hiệu",
            "column": "G",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Dài / (m)",
            "column": "H",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "CỐNG BÊ TÔNG CHỊU LỰC (m) · Đường kính cống (D) · 1200",
            "column": "Z",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "CỌC TRE CHO ĐẾ CỐNG · Chiều dài cọc  / (m)",
            "column": "AD",
            "source": "Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "CỌC TRE CHO ĐẾ CỐNG · Số cọc tre/ cọc tràm · 25",
            "column": "AE",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "CÔNG TÁC ĐÀO ĐẮP · Mở rộng chân / (m)",
            "column": "AI",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      }
],
    formulas: [
      {
            "target": "Quy cách · Trừ giao hố ga / (m) · Trừ / (m) (Cột E)",
            "mathFormat": "d / (m)+0.2",
            "excelCode": "`=+D12+0.2`",
            "description": "Giải nghĩa: [d / (m)]+0.2"
      },
      {
            "target": "CỐNG BÊ TÔNG THƯỜNG (m) · Đường kính cống (D) · 200 (Cột I)",
            "mathFormat": "IF(D / (m)=$I$9/1000,IF(Kí hiệu=\"TH\",Dài / (m)-Trừ / (m),0),0)",
            "excelCode": "`=+IF($F12=$I$9/1000,IF($G12=\"TH\",$H12-$E12,0),0)`",
            "description": "Giải nghĩa: IF([D / (m)]=$I$9/1000,IF([Kí hiệu]=\"TH\",[Dài / (m)]-[Trừ / (m)],0),0)"
      },
      {
            "target": "CỐNG BÊ TÔNG THƯỜNG (m) · Đường kính cống (D) · 300 (Cột J)",
            "mathFormat": "IF(D / (m)=$J$9/1000,IF(Kí hiệu=\"TH\",Dài / (m)-Trừ / (m),0),0)",
            "excelCode": "`=+IF($F12=$J$9/1000,IF($G12=\"TH\",$H12-$E12,0),0)`",
            "description": "Giải nghĩa: IF([D / (m)]=$J$9/1000,IF([Kí hiệu]=\"TH\",[Dài / (m)]-[Trừ / (m)],0),0)"
      },
      {
            "target": "CỐNG BÊ TÔNG THƯỜNG (m) · Đường kính cống (D) · 400 (Cột K)",
            "mathFormat": "IF(D / (m)=$K$9/1000,IF(Kí hiệu=\"TH\",Dài / (m)-Trừ / (m),0),0)",
            "excelCode": "`=+IF($F12=$K$9/1000,IF($G12=\"TH\",$H12-$E12,0),0)`",
            "description": "Giải nghĩa: IF([D / (m)]=$K$9/1000,IF([Kí hiệu]=\"TH\",[Dài / (m)]-[Trừ / (m)],0),0)"
      },
      {
            "target": "CỐNG BÊ TÔNG THƯỜNG (m) · Đường kính cống (D) · 500 (Cột L)",
            "mathFormat": "IF(D / (m)=$L$9/1000,IF(Kí hiệu=\"TH\",Dài / (m)-Trừ / (m),0),0)",
            "excelCode": "`=+IF($F12=$L$9/1000,IF($G12=\"TH\",$H12-$E12,0),0)`",
            "description": "Giải nghĩa: IF([D / (m)]=$L$9/1000,IF([Kí hiệu]=\"TH\",[Dài / (m)]-[Trừ / (m)],0),0)"
      },
      {
            "target": "CỐNG BÊ TÔNG THƯỜNG (m) · Đường kính cống (D) · 600 (Cột M)",
            "mathFormat": "IF(D / (m)=$M$9/1000,IF(Kí hiệu=\"TH\",Dài / (m)-Trừ / (m),0),0)",
            "excelCode": "`=+IF($F12=$M$9/1000,IF($G12=\"TH\",$H12-$E12,0),0)`",
            "description": "Giải nghĩa: IF([D / (m)]=$M$9/1000,IF([Kí hiệu]=\"TH\",[Dài / (m)]-[Trừ / (m)],0),0)"
      },
      {
            "target": "CỐNG BÊ TÔNG THƯỜNG (m) · Đường kính cống (D) · 800 (Cột N)",
            "mathFormat": "IF(D / (m)=$N$9/1000,IF(Kí hiệu=\"TH\",Dài / (m)-Trừ / (m),0),0)",
            "excelCode": "`=+IF($F12=$N$9/1000,IF($G12=\"TH\",$H12-$E12,0),0)`",
            "description": "Giải nghĩa: IF([D / (m)]=$N$9/1000,IF([Kí hiệu]=\"TH\",[Dài / (m)]-[Trừ / (m)],0),0)"
      },
      {
            "target": "CỐNG BÊ TÔNG THƯỜNG (m) · Đường kính cống (D) · 1000 (Cột O)",
            "mathFormat": "IF(D / (m)=$O$9/1000,IF(Kí hiệu=\"TH\",Dài / (m)-Trừ / (m),0),0)",
            "excelCode": "`=+IF($F12=$O$9/1000,IF($G12=\"TH\",$H12-$E12,0),0)`",
            "description": "Giải nghĩa: IF([D / (m)]=$O$9/1000,IF([Kí hiệu]=\"TH\",[Dài / (m)]-[Trừ / (m)],0),0)"
      },
      {
            "target": "CỐNG BÊ TÔNG THƯỜNG (m) · Đường kính cống (D) · 1100 (Cột P)",
            "mathFormat": "IF(D / (m)=$P$9/1000,IF(Kí hiệu=\"TH\",Dài / (m)-Trừ / (m),0),0)",
            "excelCode": "`=+IF($F12=$P$9/1000,IF($G12=\"TH\",$H12-$E12,0),0)`",
            "description": "Giải nghĩa: IF([D / (m)]=$P$9/1000,IF([Kí hiệu]=\"TH\",[Dài / (m)]-[Trừ / (m)],0),0)"
      },
      {
            "target": "CỐNG BÊ TÔNG THƯỜNG (m) · Đường kính cống (D) · 1200 (Cột Q)",
            "mathFormat": "IF(D / (m)=$Q$9/1000,IF(Kí hiệu=\"TH\",Dài / (m)-Trừ / (m),0),0)",
            "excelCode": "`=+IF($F12=$Q$9/1000,IF($G12=\"TH\",$H12-$E12,0),0)`",
            "description": "Giải nghĩa: IF([D / (m)]=$Q$9/1000,IF([Kí hiệu]=\"TH\",[Dài / (m)]-[Trừ / (m)],0),0)"
      }
],
    svgKey: "SvgMuongCong",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Hạ tầng- Cống tròn",
      "inputs": {
            "A": 1,
            "D": 0.4,
            "F": 0.3,
            "H": 17.3,
            "AD": 2,
            "AI": 0.5
      },
      "outputs": {
            "E": 0.6,
            "I": 0,
            "J": 0,
            "K": 0,
            "L": 0,
            "M": 0,
            "N": 0,
            "O": 0,
            "P": 0,
            "Q": 0,
            "R": 0,
            "S": 16.7,
            "T": 0,
            "U": 0,
            "V": 0,
            "W": 0,
            "X": 0,
            "Y": 0,
            "Z": 0,
            "AA": 0,
            "AB": 0,
            "AC": 0,
            "AE": 123,
            "AF": 246,
            "AG": -0.5,
            "AH": -2.275,
            "AJ": 1.68925,
            "AK": 1.775,
            "AL": 68.043649,
            "AM": 66.109409,
            "AN": 1.93424
      }
},
    calculator: {
      fields: [
        {
                "key": "H",
                "label": "Chiều dài tuyến cống (H)",
                "default": 17.3,
                "unit": "m",
                "step": 0.5
        },
        {
                "key": "D",
                "label": "Đường kính trong cống (D)",
                "default": 0.4,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "F",
                "label": "Chiều dày thành cống (F)",
                "default": 0.3,
                "unit": "m",
                "step": 0.05
        }
],
      compute: (vals) => {
      const D = Number(vals.D || 0);
      const F = Number(vals.F || 0);
      const H = Number(vals.H || 0);
      const E = D + 2 * F;
      const S = H - 0.6;
      return { E, S };
    }
    },
    warnings: []
  },
  {
    id: "muong",
    title: "Mương thoát nước bê tông",
    fileSource: "1.1",
    sheetName: "Mương",
    purpose: "Tính toán bê tông bản đáy mương, bê tông thành mương, tấm đan bê tông đậy mương, bê tông lót, ván khuôn mương, đào đất và đắp đất rãnh mương.",
    parameters: [
      {
            "name": "SL",
            "column": "D",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "KÍCH THƯỚC HÌNH HỌC · W",
            "column": "F",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "KÍCH THƯỚC HÌNH HỌC · H",
            "column": "G",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "KÍCH THƯỚC HÌNH HỌC · Bê tông lót · Dày",
            "column": "H",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "KÍCH THƯỚC HÌNH HỌC · / Đáy dày",
            "column": "J",
            "source": "Chỉ dẫn kỹ thuật / chi tiết cấu tạo",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "KÍCH THƯỚC HÌNH HỌC · / Thành dày",
            "column": "K",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "KÍCH THƯỚC HÌNH HỌC · / Nắp dày",
            "column": "L",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "CỌC TRE CHO CỐNG · Chiều dài cọc  / (m)",
            "column": "Y",
            "source": "Chỉ dẫn kỹ thuật / chi tiết cấu tạo",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "CỌC TRE CHO CỐNG · Số cọc tre/ / Cọc tràm · 20",
            "column": "Z",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Đơn vị: (cọc)"
      },
      {
            "name": "CÔNG TÁC ĐÀO ĐẮP · Mở rộng đỉnh · 1.2",
            "column": "AE",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Cốt thép · D",
            "column": "AI",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (mm)"
      },
      {
            "name": "Cốt thép · @",
            "column": "AJ",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (mm)"
      },
      {
            "name": "Cốt thép · Layer",
            "column": "AK",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cốt thép · Hệ số",
            "column": "AM",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      }
],
    formulas: [
      {
            "target": "Quy cách ·  B600 - Mương hộp (Cột B)",
            "mathFormat": "\"B= \"&W*1000&\"\"",
            "excelCode": "`=\"B= \"&F12*1000&\"\"`",
            "description": "Giải nghĩa: \"B= \"&[W]*1000&\"\""
      },
      {
            "target": "KÍCH THƯỚC HÌNH HỌC · L · 48.5 (Cột E)",
            "mathFormat": "E10",
            "excelCode": "`=+E10`",
            "description": "Giải nghĩa: E10"
      },
      {
            "target": "KÍCH THƯỚC HÌNH HỌC · Bê tông lót · Mở rộng (Cột I)",
            "mathFormat": "Dày*2",
            "excelCode": "`=+H12*2`",
            "description": "Giải nghĩa: [Dày]*2"
      },
      {
            "target": "Hao hụt BASE (Cột N)",
            "mathFormat": "Nền!$K$10",
            "excelCode": "`=+Nền!$K$10`",
            "description": "Giải nghĩa: Nền!$K$10"
      },
      {
            "target": "Hao hụt BT (Cột O)",
            "mathFormat": "Nền!$L$10",
            "excelCode": "`=+Nền!$L$10`",
            "description": "Giải nghĩa: Nền!$L$10"
      },
      {
            "target": "Base / / Đá dăm (Cột P)",
            "mathFormat": "48.5*(W+/ Thành dày*2+Mở rộng)*H base*SL*Hao hụt BASE",
            "excelCode": "`=+E12*(F12+K12*2+I12)*M12*D12*N12`",
            "description": "Giải nghĩa: [48.5]*([W]+[/ Thành dày]*2+[Mở rộng])*[H base]*[SL]*[Hao hụt BASE]"
      },
      {
            "target": "CÔNG TÁC BÊ TÔNG · Bê tông lót (Cột Q)",
            "mathFormat": "48.5*(W+/ Thành dày*2+Mở rộng)*Dày*SL*Hao hụt BT",
            "excelCode": "`=+E12*(F12+K12*2+I12)*H12*D12*O12`",
            "description": "Giải nghĩa: [48.5]*([W]+[/ Thành dày]*2+[Mở rộng])*[Dày]*[SL]*[Hao hụt BT]"
      },
      {
            "target": "CÔNG TÁC BÊ TÔNG · Bê tông (Cột R)",
            "mathFormat": "48.5*(W+/ Thành dày*2)*/ Đáy dày*SL*Hao hụt BT",
            "excelCode": "`=+E12*(F12+K12*2)*J12*D12*O12`",
            "description": "Giải nghĩa: [48.5]*([W]+[/ Thành dày]*2)*[/ Đáy dày]*[SL]*[Hao hụt BT]"
      },
      {
            "target": "CÔNG TÁC BÊ TÔNG · VK BT lót (Cột S)",
            "mathFormat": "48.5*2*Dày*SL",
            "excelCode": "`=+E12*2*H12*D12`",
            "description": "Giải nghĩa: [48.5]*2*[Dày]*[SL]"
      },
      {
            "target": "CÔNG TÁC BÊ TÔNG · Ván khuôn (Cột T)",
            "mathFormat": "(48.5*2*/ Đáy dày)*SL",
            "excelCode": "`=+(E12*2*J12)*D12`",
            "description": "Giải nghĩa: ([48.5]*2*[/ Đáy dày])*[SL]"
      }
],
    svgKey: "SvgMuongCong",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Mương",
      "inputs": {
            "D": 1,
            "F": 0.6,
            "G": 1.3,
            "H": 0.05,
            "J": 0.15,
            "K": 0.145,
            "L": 0.15,
            "Y": 2.5,
            "AI": 10,
            "AJ": 200,
            "AK": 2,
            "AM": 1.12
      },
      "outputs": {
            "E": 48.5,
            "I": 0.1,
            "N": 1,
            "O": 1,
            "P": 0,
            "Q": 2.40075,
            "R": 6.47475,
            "S": 4.85,
            "T": 14.55,
            "U": 48.015,
            "W": 29.1,
            "Z": 960,
            "AA": 2400,
            "AB": -0.7,
            "AC": -1.35,
            "AD": 0.5,
            "AE": 0.7125,
            "AF": 0.85,
            "AG": 86.675563,
            "AH": 49.742813,
            "AL": 12.345679,
            "AN": 596.849383
      }
},
    calculator: {
      fields: [
        {
                "key": "E",
                "label": "Chiều dài tuyến mương (E)",
                "default": 48.5,
                "unit": "m",
                "step": 1
        },
        {
                "key": "F",
                "label": "Chiều rộng lọt lòng (F)",
                "default": 0.6,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "G",
                "label": "Chiều sâu lọt lòng (G)",
                "default": 1.3,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "J",
                "label": "Chiều dày đáy mương (J)",
                "default": 0.15,
                "unit": "m",
                "step": 0.01
        },
        {
                "key": "K",
                "label": "Chiều dày thành mương (K)",
                "default": 0.145,
                "unit": "m",
                "step": 0.005
        },
        {
                "key": "L",
                "label": "Chiều dày tấm đan (L)",
                "default": 0.15,
                "unit": "m",
                "step": 0.01
        }
],
      compute: (vals) => {
      const E = Number(vals.E ?? 48.5);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const J = Number(vals.J || 0);
      const K = Number(vals.K || 0);
      const L = Number(vals.L || 0);
      const Q = (F + 2 * K) * J * E;
      const R = 2 * K * G * E;
      const S = (F + 2 * K) * L * E;
      return { Q, R, S };
    }
    },
    warnings: []
  },
  {
    id: "ho-ga-1",
    title: "Hố ga bê tông kiểu 1 (Hố ga tiêu chuẩn)",
    fileSource: "1.1",
    sheetName: "Hố ga (Kiểu 1)",
    purpose: "Tính toán bê tông đáy, thành và nắp đan hố ga thu nước mưa/nước thải kiểu 1; ván khuôn trong ngoài, bê tông lót hố ga, đào đất và đắp đất hố ga.",
    parameters: [
      {
            "name": "TT",
            "column": "A",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cấu kiện",
            "column": "B",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Kiểu ga",
            "column": "D",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "SL",
            "column": "E",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "D / (mm)",
            "column": "F",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "KÍCH THƯỚC BAO NGOÀI · Chiều dày BT lót / (mm)",
            "column": "L",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cốt đáy theo thiết  kế / (mm)",
            "column": "M",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Trừ giao cắt cống · D",
            "column": "Q",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Trừ giao cắt cống · Số giao cắt cống",
            "column": "S",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "HỐ GA BÊ TÔNG · Bê tông / (m3)",
            "column": "Z",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "OPENING ( Nắp ga) · Kiểu nắp",
            "column": "AB",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "OPENING ( Nắp ga) · L / (mm)",
            "column": "AE",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "CỌC TRE - CỌC TRÀM · Chiều dài 1 cọc / (m)",
            "column": "AJ",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "ĐÀO ĐẮP · Mở rộng chân / (mm)",
            "column": "AN",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      }
],
    formulas: [
      {
            "target": "KÍCH THƯỚC BAO NGOÀI · L / (mm) (Cột G)",
            "mathFormat": "IF(D / (mm)>0,IF(Kiểu ga=\"Bê tông\",D / (mm)+150*4,D / (mm)+150*2+220*2),0)",
            "excelCode": "`=+IF(F8>0,IF(D8=\"Bê tông\",F8+150*4,F8+150*2+220*2),0)`",
            "description": "Giải nghĩa: IF([D / (mm)]>0,IF([Kiểu ga]=\"Bê tông\",[D / (mm)]+150*4,[D / (mm)]+150*2+220*2),0)"
      },
      {
            "target": "KÍCH THƯỚC BAO NGOÀI · W / (mm) (Cột H)",
            "mathFormat": "KÍCH THƯỚC BAO NGOÀI L / (mm)",
            "excelCode": "`=+G8`",
            "description": "Giải nghĩa: [KÍCH THƯỚC BAO NGOÀI L / (mm)]"
      },
      {
            "target": "KÍCH THƯỚC BAO NGOÀI · H / (mm) (Cột I)",
            "mathFormat": "Cốt đỉnh ga / (mm)-Cốt đáy theo thiết  kế / (mm)",
            "excelCode": "`=O8-M8`",
            "description": "Giải nghĩa: [Cốt đỉnh ga / (mm)]-[Cốt đáy theo thiết  kế / (mm)]"
      },
      {
            "target": "KÍCH THƯỚC BAO NGOÀI · Đáy dày / (mm) (Cột J)",
            "mathFormat": "IF(KÍCH THƯỚC BAO NGOÀI L / (mm)=0,0,IF(Kiểu ga=\"Bê tông\",150,100))",
            "excelCode": "`=+IF(G8=0,0,IF(D8=\"Bê tông\",150,100))`",
            "description": "Giải nghĩa: IF([KÍCH THƯỚC BAO NGOÀI L / (mm)]=0,0,IF([Kiểu ga]=\"Bê tông\",150,100))"
      },
      {
            "target": "KÍCH THƯỚC BAO NGOÀI · Thành dày / (mm) (Cột K)",
            "mathFormat": "IF(KÍCH THƯỚC BAO NGOÀI L / (mm)=0,0,IF(Kiểu ga=\"Bê tông\",150,220))",
            "excelCode": "`=+IF(G8=0,0,IF(D8=\"Bê tông\",150,220))`",
            "description": "Giải nghĩa: IF([KÍCH THƯỚC BAO NGOÀI L / (mm)]=0,0,IF([Kiểu ga]=\"Bê tông\",150,220))"
      },
      {
            "target": "Cốt đào đất / (mm) (Cột N)",
            "mathFormat": "Cốt đáy theo thiết  kế / (mm)-Đáy dày / (mm)-Chiều dày BT lót / (mm)",
            "excelCode": "`=M8-J8-L8`",
            "description": "Giải nghĩa: [Cốt đáy theo thiết  kế / (mm)]-[Đáy dày / (mm)]-[Chiều dày BT lót / (mm)]"
      },
      {
            "target": "Cốt đỉnh ga / (mm) (Cột O)",
            "mathFormat": "-330+150",
            "excelCode": "`=+-330+150`",
            "description": "Giải nghĩa: -330+150"
      },
      {
            "target": "Hao hụt vật liệu (Cột P)",
            "mathFormat": "Móng!$AN$12",
            "excelCode": "`=+Móng!$AN$12`",
            "description": "Giải nghĩa: Móng!$AN$12"
      },
      {
            "target": "Trừ giao cắt cống · DMax / (Cống) (Cột R)",
            "mathFormat": "IF(D=0,0,IF(D<1000,D+50*2,D+100*2))",
            "excelCode": "`=+IF(Q8=0,0,IF(Q8<1000,Q8+50*2,Q8+100*2))`",
            "description": "Giải nghĩa: IF([D]=0,0,IF([D]<1000,[D]+50*2,[D]+100*2))"
      },
      {
            "target": "Bê tông lót (Cột T)",
            "mathFormat": "IF(KÍCH THƯỚC BAO NGOÀI L / (mm)=0,0,((KÍCH THƯỚC BAO NGOÀI L / (mm)+Chiều dày BT lót / (mm)*2)*(KÍCH THƯỚC BAO NGOÀI W / (mm)+Chiều dày BT lót / (mm)*2)*Chiều dày BT lót / (mm))/10^9*SL*Hao hụt vật liệu)",
            "excelCode": "`=+IF(G8=0,0,((G8+L8*2)*(H8+L8*2)*L8)/10^9*E8*P8)`",
            "description": "Giải nghĩa: IF([KÍCH THƯỚC BAO NGOÀI L / (mm)]=0,0,(([KÍCH THƯỚC BAO NGOÀI L / (mm)]+[Chiều dày BT lót / (mm)]*2)*([KÍCH THƯỚC BAO NGOÀI W / (mm)]+[Chiều dày BT lót / (mm)]*2)*[Chiều dày BT lót / (mm)])/10^9*[SL]*[Hao hụt vật liệu])"
      }
],
    svgKey: "SvgHoGaBe",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Hố ga (Kiểu 1)",
      "inputs": {
            "A": 1,
            "E": 1,
            "F": 300,
            "L": 50,
            "M": -900,
            "Q": 300,
            "S": 2,
            "AJ": 2,
            "AN": 500
      },
      "outputs": {
            "G": 900,
            "H": 900,
            "I": 720,
            "J": 150,
            "K": 150,
            "N": -1100,
            "O": -180,
            "P": 1,
            "R": 400,
            "T": 0.05,
            "U": 0.2,
            "V": 0,
            "W": 0,
            "X": 0,
            "Y": 0,
            "Z": 0.407801,
            "AA": 4.734336,
            "AD": 1,
            "AE": 700,
            "AF": 700,
            "AG": 0,
            "AH": 0,
            "AI": 2.8,
            "AK": 30,
            "AL": 60,
            "AM": -500,
            "AO": 650,
            "AP": 600,
            "AQ": 1.45561,
            "AR": 0.96011,
            "AS": 0.4955
      }
},
    calculator: {
      fields: [
        {
                "key": "E",
                "label": "Số lượng hố ga (E)",
                "default": 1,
                "unit": "hố",
                "step": 1
        },
        {
                "key": "F",
                "label": "Đường kính cống vào (F)",
                "default": 300,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "L",
                "label": "Bề dày bản đáy (L)",
                "default": 50,
                "unit": "mm",
                "step": 10
        }
],
      compute: (vals) => {
      const E = Number(vals.E ?? 1);
      const Z = 0.4078 * E;
      const AA = 4.734 * E;
      return { Z, AA };
    }
    },
    warnings: []
  },
  {
    id: "ho-ga-2",
    title: "Hố ga bê tông kiểu 2 (Hố ga lắng cặn)",
    fileSource: "1.1",
    sheetName: "Hố ga (Kiểu 2)",
    purpose: "Tính toán bê tông và ván khuôn hố ga thu kết hợp hố lắng cặn sâu kiểu 2; cổ thu nước và tấm gang/bê tông đậy miệng hố ga.",
    parameters: [
      {
            "name": "TT",
            "column": "A",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cấu kiện",
            "column": "B",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "SL",
            "column": "D",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "D / (mm)",
            "column": "E",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "KÍCH THƯỚC BAO NGOÀI · Đáy dày / (mm)",
            "column": "I",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "KÍCH THƯỚC BAO NGOÀI · Vát chân",
            "column": "J",
            "source": "Chỉ dẫn kỹ thuật / chi tiết cấu tạo",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "KÍCH THƯỚC BAO NGOÀI · W1 / Thành hầm ga / (mm)",
            "column": "K",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "KÍCH THƯỚC BAO NGOÀI · H1  / Nắp hầm ga",
            "column": "L",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "KÍCH THƯỚC BAO NGOÀI · Chiều dày BT lót / (mm)",
            "column": "M",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "KÍCH THƯỚC BAO NGOÀI · W / (mm)",
            "column": "N",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "KÍCH THƯỚC BAO NGOÀI · Nắp đậy dày",
            "column": "P",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "KÍCH THƯỚC BAO NGOÀI · H2 / Cổ ga / (mm)",
            "column": "Q",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "KÍCH THƯỚC BAO NGOÀI · W2 /  Vách cổ dày / (mm)",
            "column": "R",
            "source": "Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cốt đáy theo thiết  kế / (mm)",
            "column": "S",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cốt đỉnh ga / (mm)",
            "column": "U",
            "source": "Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "TRỪ GIAO CỐNG · D",
            "column": "W",
            "source": "Báo cáo địa chất / Bảng 11 TCVN 4447:2012",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "TRỪ GIAO CỐNG · Số giao cắt",
            "column": "Y",
            "source": "Chỉ dẫn kỹ thuật / chi tiết cấu tạo",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "HỐ GA BÊ TÔNG · Bê tông lót / (m3)",
            "column": "Z",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "OPENING ( Nắp ga) · Kiểu nắp",
            "column": "AD",
            "source": "Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "OPENING ( Nắp ga) · LxW / (mm)",
            "column": "AE",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "OPENING ( Nắp ga) · Số nắp / (cái)",
            "column": "AF",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "OPENING ( Nắp ga) · C / (mm)",
            "column": "AI",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "CỌC TRE -CỌC TRÀM · Chiều dài 1 cọc / (m)",
            "column": "AM",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "ĐÀO ĐẮP · Mở rộng chân / (mm)",
            "column": "AQ",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      }
],
    formulas: [
      {
            "target": "KÍCH THƯỚC BAO NGOÀI · DÀI / (mm) (Cột F)",
            "mathFormat": "D / (mm)·E+150*2+W1 / Thành hầm ga / (mm)*2",
            "excelCode": "`=+E8+150*2+K8*2`",
            "description": "Giải nghĩa: [D / (mm)·E]+150*2+[W1 / Thành hầm ga / (mm)]*2"
      },
      {
            "target": "KÍCH THƯỚC BAO NGOÀI · RỘNG / (mm) (Cột G)",
            "mathFormat": "D / (mm)·E+150*2+W1 / Thành hầm ga / (mm)*2",
            "excelCode": "`=+E8+150*2+K8*2`",
            "description": "Giải nghĩa: [D / (mm)·E]+150*2+[W1 / Thành hầm ga / (mm)]*2"
      },
      {
            "target": "KÍCH THƯỚC BAO NGOÀI · CAO / (mm) (Cột H)",
            "mathFormat": "IF(Cốt đáy theo thiết  kế / (mm)+Cốt đỉnh ga / (mm)=0,0,Cốt đỉnh ga / (mm)-Cốt đáy theo thiết  kế / (mm)-H2 / Cổ ga / (mm))",
            "excelCode": "`=+IF(S8+U8=0,0,U8-S8-Q8)`",
            "description": "Giải nghĩa: IF([Cốt đáy theo thiết  kế / (mm)]+[Cốt đỉnh ga / (mm)]=0,0,[Cốt đỉnh ga / (mm)]-[Cốt đáy theo thiết  kế / (mm)]-[H2 / Cổ ga / (mm)])"
      },
      {
            "target": "KÍCH THƯỚC BAO NGOÀI · L / (mm) (Cột O)",
            "mathFormat": "W / (mm)",
            "excelCode": "`=+N8`",
            "description": "Giải nghĩa: [W / (mm)]"
      },
      {
            "target": "Cốt đào đất / (mm) (Cột T)",
            "mathFormat": "IF(Cốt đáy theo thiết  kế / (mm)=0,0,Cốt đáy theo thiết  kế / (mm)-Đáy dày / (mm)-Chiều dày BT lót / (mm))",
            "excelCode": "`=IF(S8=0,0,S8-I8-M8)`",
            "description": "Giải nghĩa: IF([Cốt đáy theo thiết  kế / (mm)]=0,0,[Cốt đáy theo thiết  kế / (mm)]-[Đáy dày / (mm)]-[Chiều dày BT lót / (mm)])"
      },
      {
            "target": "Hao hụt vật liệu (Cột V)",
            "mathFormat": "Móng!$AN$12",
            "excelCode": "`=+Móng!$AN$12`",
            "description": "Giải nghĩa: Móng!$AN$12"
      },
      {
            "target": "TRỪ GIAO CỐNG · Dmax (Cột X)",
            "mathFormat": "IF(D=0,0,IF(D<1000,D+50*2,D+100*2))",
            "excelCode": "`=+IF(W8=0,0,IF(W8<1000,W8+50*2,W8+100*2))`",
            "description": "Giải nghĩa: IF([D]=0,0,IF([D]<1000,[D]+50*2,[D]+100*2))"
      },
      {
            "target": "HỐ GA BÊ TÔNG · Bê tông lót / (m3) (Cột Z)",
            "mathFormat": "IF(DÀI / (mm)=0,0,(DÀI / (mm)+Chiều dày BT lót / (mm)*2)*(RỘNG / (mm)+Chiều dày BT lót / (mm)*2)*Chiều dày BT lót / (mm)*SL*Hao hụt vật liệu/10^9)",
            "excelCode": "`=+IF(F8=0,0,(F8+M8*2)*(G8+M8*2)*M8*D8*V8/10^9)`",
            "description": "Giải nghĩa: IF([DÀI / (mm)]=0,0,([DÀI / (mm)]+[Chiều dày BT lót / (mm)]*2)*([RỘNG / (mm)]+[Chiều dày BT lót / (mm)]*2)*[Chiều dày BT lót / (mm)]*[SL]*[Hao hụt vật liệu]/10^9)"
      },
      {
            "target": "HỐ GA BÊ TÔNG · Bê tông / (m3) (Cột AA)",
            "mathFormat": "IF(Vát chân>0,IF(DÀI / (mm)=0,0,(DÀI / (mm)*RỘNG / (mm)*Đáy dày / (mm)+(DÀI / (mm)-(W1 / Thành hầm ga / (mm)*2)+RỘNG / (mm)-(W1 / Thành hầm ga / (mm)*2))*2*Vát chân*Vát chân/2+(DÀI / (mm)*2+(RỘNG / (mm)-W1 / Thành hầm ga / (mm)*2)*2)*W1 / Thành hầm ga / (mm)*CAO / (mm)+(DÀI / (mm)*RỘNG / (mm)-(W / (mm)-W2 /  Vách cổ dày / (mm)*2)*(L / (mm)-W2 /  Vách cổ dày / (mm)*2))*H1  / Nắp hầm ga+((W / (mm)*2)+(L / (mm)-W2 /  Vách cổ dày / (mm)*2)*2)*W2 /  Vách cổ dày / (mm)*H2 / Cổ ga / (mm)-Dmax^2*PI()/4*W1 / Thành hầm ga / (mm)*Số giao cắt)*SL*Hao hụt vật liệu/10^9),IF(DÀI / (mm)=0,0,(DÀI / (mm)*RỘNG / (mm)*Đáy dày / (mm)+(DÀI / (mm)*2+(RỘNG / (mm)-W1 / Thành hầm ga / (mm)*2)*2)*W1 / Thành hầm ga / (mm)*CAO / (mm)+(DÀI / (mm)*RỘNG / (mm)-(W / (mm)-W2 /  Vách cổ dày / (mm)*2)*(L / (mm)-W2 /  Vách cổ dày / (mm)*2))*H1  / Nắp hầm ga+((W / (mm)*2)+(L / (mm)-W2 /  Vách cổ dày / (mm)*2)*2)*W2 /  Vách cổ dày / (mm)*H2 / Cổ ga / (mm)-Dmax^2*PI()/4*W1 / Thành hầm ga / (mm)*Số giao cắt)*SL*Hao hụt vật liệu/10^9))",
            "excelCode": "`=+IF(J8>0,IF(F8=0,0,(F8*G8*I8+(F8-(K8*2)+G8-(K8*2))*2*J8*J8/2+(F8*2+(G8-K8*2)*2)*K8*H8+(F8*G8-(N8-R8*2)*(O8-R8*2))*L8+((N8*2)+(O8-R8*2)*2)*R8*Q8-X8^2*PI()/4*K8*Y8)*D8*V8/10^9),IF(F8=0,0,(F8*G8*I8+(F8*2+(G8-K8*2)*2)*K8*H8+(F8*G8-(N8-R8*2)*(O8-R8*2))*L8+((N8*2)+(O8-R8*2)*2)*R8*Q8-X8^2*PI()/4*K8*Y8)*D8*V8/10^9))`",
            "description": "Giải nghĩa: IF([Vát chân]>0,IF([DÀI / (mm)]=0,0,([DÀI / (mm)]*[RỘNG / (mm)]*[Đáy dày / (mm)]+([DÀI / (mm)]-([W1 / Thành hầm ga / (mm)]*2)+[RỘNG / (mm)]-([W1 / Thành hầm ga / (mm)]*2))*2*[Vát chân]*[Vát chân]/2+([DÀI / (mm)]*2+([RỘNG / (mm)]-[W1 / Thành hầm ga / (mm)]*2)*2)*[W1 / Thành hầm ga / (mm)]*[CAO / (mm)]+([DÀI / (mm)]*[RỘNG / (mm)]-([W / (mm)]-[W2 /  Vách cổ dày / (mm)]*2)*([L / (mm)]-[W2 /  Vách cổ dày / (mm)]*2))*[H1  / Nắp hầm ga]+(([W / (mm)]*2)+([L / (mm)]-[W2 /  Vách cổ dày / (mm)]*2)*2)*[W2 /  Vách cổ dày / (mm)]*[H2 / Cổ ga / (mm)]-[Dmax]^2*PI()/4*[W1 / Thành hầm ga / (mm)]*[Số giao cắt])*[SL]*[Hao hụt vật liệu]/10^9),IF([DÀI / (mm)]=0,0,([DÀI / (mm)]*[RỘNG / (mm)]*[Đáy dày / (mm)]+([DÀI / (mm)]*2+([RỘNG / (mm)]-[W1 / Thành hầm ga / (mm)]*2)*2)*[W1 / Thành hầm ga / (mm)]*[CAO / (mm)]+([DÀI / (mm)]*[RỘNG / (mm)]-([W / (mm)]-[W2 /  Vách cổ dày / (mm)]*2)*([L / (mm)]-[W2 /  Vách cổ dày / (mm)]*2))*[H1  / Nắp hầm ga]+(([W / (mm)]*2)+([L / (mm)]-[W2 /  Vách cổ dày / (mm)]*2)*2)*[W2 /  Vách cổ dày / (mm)]*[H2 / Cổ ga / (mm)]-[Dmax]^2*PI()/4*[W1 / Thành hầm ga / (mm)]*[Số giao cắt])*[SL]*[Hao hụt vật liệu]/10^9))"
      },
      {
            "target": "HỐ GA BÊ TÔNG · Ván khuôn lót / (m2) (Cột AB)",
            "mathFormat": "IF(DÀI / (mm)=0,0,((DÀI / (mm)+Chiều dày BT lót / (mm)*2)+(RỘNG / (mm)+Chiều dày BT lót / (mm)*2))*2*Chiều dày BT lót / (mm)*SL/10^6)",
            "excelCode": "`=+IF(F8=0,0,((F8+M8*2)+(G8+M8*2))*2*M8*D8/10^6)`",
            "description": "Giải nghĩa: IF([DÀI / (mm)]=0,0,(([DÀI / (mm)]+[Chiều dày BT lót / (mm)]*2)+([RỘNG / (mm)]+[Chiều dày BT lót / (mm)]*2))*2*[Chiều dày BT lót / (mm)]*[SL]/10^6)"
      }
],
    svgKey: "SvgHoGaBe",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Hố ga (Kiểu 2)",
      "inputs": {
            "A": 1,
            "D": 1,
            "E": 800,
            "I": 200,
            "J": 200,
            "K": 200,
            "L": 200,
            "M": 100,
            "N": 900,
            "P": 90,
            "Q": 600,
            "R": 200,
            "S": -1700,
            "U": -150,
            "W": 800,
            "Y": 2,
            "AF": 1,
            "AI": 90,
            "AM": 2.5,
            "AQ": 500
      },
      "outputs": {
            "F": 1500,
            "G": 1500,
            "H": 950,
            "O": 900,
            "T": -2000,
            "V": 1,
            "X": 900,
            "Z": 0.289,
            "AA": 2.007531,
            "AB": 0.68,
            "AC": 15.090283,
            "AG": 600,
            "AH": 600,
            "AJ": 0.0324,
            "AK": 2.4,
            "AL": 2.4,
            "AN": 56,
            "AO": 140,
            "AP": -500,
            "AR": 875,
            "AS": 1500,
            "AT": 7.928125,
            "AU": 4.489125,
            "AV": 3.439
      }
},
    calculator: {
      fields: [
        {
                "key": "D",
                "label": "Số lượng hố ga (D)",
                "default": 1,
                "unit": "hố",
                "step": 1
        },
        {
                "key": "E",
                "label": "Kích thước thông thủy (E)",
                "default": 800,
                "unit": "mm",
                "step": 50
        }
],
      compute: (vals) => {
      const D = Number(vals.D ?? 1);
      const Z = 0.289 * D;
      const AA = 2.0075 * D;
      return { Z, AA };
    }
    },
    warnings: []
  },
  {
    id: "be-pccc",
    title: "Bể nước PCCC ngầm",
    fileSource: "1.1",
    sheetName: "Bể nước PCCC",
    purpose: "Tính toán thể tích bê tông bản đáy, tường bể, cột đỡ và bản nắp bể nước ngầm PCCC; bê tông lót móng bể, ván khuôn trong ngoài và khối lượng đào đất hố móng bể.",
    parameters: [
      {
            "name": "Ký hiệu",
            "column": "D",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Số lượng",
            "column": "E",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "KÍCH THƯỚC BỂ · Dài",
            "column": "F",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "KÍCH THƯỚC BỂ · Rộng",
            "column": "G",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "KÍCH THƯỚC BỂ · Cao",
            "column": "H",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "KÍCH THƯỚC BỂ · Đáy dày",
            "column": "I",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "KÍCH THƯỚC BỂ · Bê tôg lót · Dày",
            "column": "J",
            "source": "Chỉ dẫn kỹ thuật / chi tiết cấu tạo",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "KÍCH THƯỚC BỂ · Bê tôg lót · Mở rộng",
            "column": "K",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "KÍCH THƯỚC BỂ · Nắp  dày",
            "column": "L",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "ĐÀO ĐẮP · Cốt hiện trạng/ Cao độ trước khi đào bể · -0.3",
            "column": "Z",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "ĐÀO ĐẮP · FL đỉnh bể",
            "column": "AC",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "ĐÀO ĐẮP · Đào đất",
            "column": "AE",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m3)"
      },
      {
            "name": "CỐT THÉP · Ø - 1 · BOT",
            "column": "AG",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "CỐT THÉP · @ - 1 · BOT",
            "column": "AK",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "CỐT THÉP · Hệ số",
            "column": "AP",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      }
],
    formulas: [
      {
            "target": "Cấu kiện (Cột B)",
            "mathFormat": "\"H= \"&Đáy dày*1000&\" mm\"",
            "excelCode": "`=\"H= \"&I12*1000&\" mm\"`",
            "description": "Giải nghĩa: \"H= \"&[Đáy dày]*1000&\" mm\""
      },
      {
            "target": "Hệ số hao hụt · Bê tông (Cột N)",
            "mathFormat": "Móng!@ - 4 TOP",
            "excelCode": "`=+Móng!$AN$12`",
            "description": "Giải nghĩa: Móng![@ - 4 TOP]"
      },
      {
            "target": "ĐÁY VÀ THÀNH BỂ · BT lót (Cột O)",
            "mathFormat": "(Dài+Mở rộng*2)*(Rộng+Mở rộng*2)*Dày*Hệ số hao hụt Bê tông*Số lượng",
            "excelCode": "`=+(F12+K12*2)*(G12+K12*2)*J12*N12*E12`",
            "description": "Giải nghĩa: ([Dài]+[Mở rộng]*2)*([Rộng]+[Mở rộng]*2)*[Dày]*[Hệ số hao hụt Bê tông]*[Số lượng]"
      },
      {
            "target": "ĐÁY VÀ THÀNH BỂ · VK BT Lót (Cột P)",
            "mathFormat": "((Dài+Mở rộng*2)+(Rộng+Mở rộng*2))*2*Dày*Số lượng",
            "excelCode": "`=+((F12+K12*2)+(G12+K12*2))*2*J12*E12`",
            "description": "Giải nghĩa: (([Dài]+[Mở rộng]*2)+([Rộng]+[Mở rộng]*2))*2*[Dày]*[Số lượng]"
      },
      {
            "target": "ĐÁY VÀ THÀNH BỂ · Bê tông (Cột Q)",
            "mathFormat": "Dài*Rộng*Đáy dày*Số lượng*Hệ số hao hụt Bê tông",
            "excelCode": "`=+F12*G12*I12*E12*N12`",
            "description": "Giải nghĩa: [Dài]*[Rộng]*[Đáy dày]*[Số lượng]*[Hệ số hao hụt Bê tông]"
      },
      {
            "target": "ĐÁY VÀ THÀNH BỂ · Ván khuôn (Cột R)",
            "mathFormat": "(Dài+Rộng)*2*Đáy dày*Số lượng",
            "excelCode": "`=+(F12+G12)*2*I12*E12`",
            "description": "Giải nghĩa: ([Dài]+[Rộng])*2*[Đáy dày]*[Số lượng]"
      },
      {
            "target": "ĐÁY VÀ THÀNH BỂ · EW1 · Chống thấm / Ngoài (Cột U)",
            "mathFormat": "IF(Ký hiệu=\"EW1\",Dài*Rộng*Số lượng,0)",
            "excelCode": "`=+IF($D12=\"EW1\",$F12*$G12*$E12,0)`",
            "description": "Giải nghĩa: IF([Ký hiệu]=\"EW1\",[Dài]*[Rộng]*[Số lượng],0)"
      },
      {
            "target": "ĐÁY VÀ THÀNH BỂ · IW1 · Chống thấm / trong (Cột V)",
            "mathFormat": "IF(Ký hiệu=\"IW1\",Dài*Rộng*Số lượng,0)",
            "excelCode": "`=+IF($D12=\"IW1\",$F12*$G12*$E12,0)`",
            "description": "Giải nghĩa: IF([Ký hiệu]=\"IW1\",[Dài]*[Rộng]*[Số lượng],0)"
      },
      {
            "target": "ĐÁY VÀ THÀNH BỂ · Cán mặt bê tông (Cột X)",
            "mathFormat": "Dài*Rộng*Số lượng",
            "excelCode": "`=+F12*G12*E12`",
            "description": "Giải nghĩa: [Dài]*[Rộng]*[Số lượng]"
      },
      {
            "target": "ĐÀO ĐẮP · Cốt hiện trạng/ Cao độ trước khi đào bể · -0.3 (Cột Z)",
            "mathFormat": "Z10",
            "excelCode": "`=+Z10`",
            "description": "Giải nghĩa: Z10"
      }
],
    svgKey: "SvgHoGaBe",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Bể nước PCCC",
      "inputs": {
            "E": 1,
            "F": 20.85,
            "G": 12,
            "H": 3.05,
            "I": 0.35,
            "J": 0.05,
            "K": 0.1,
            "L": 0.16,
            "AC": -0.1,
            "AG": 14,
            "AK": 150,
            "AP": 1.12
      },
      "outputs": {
            "N": 1,
            "O": 12.8405,
            "P": 3.325,
            "Q": 87.57,
            "R": 22.995,
            "U": 0,
            "V": 250.2,
            "X": 250.2,
            "Z": -0.3,
            "AA": 1.2,
            "AB": 2,
            "AD": 3.25,
            "AE": 1190.15,
            "AF": 376.6695,
            "AH": 14,
            "AI": 14,
            "AJ": 14,
            "AL": 150,
            "AM": 150,
            "AN": 150,
            "AO": 32.263374,
            "AQ": 9040.971852
      }
},
    calculator: {
      fields: [
        {
                "key": "F",
                "label": "Chiều dài lọt lòng (F)",
                "default": 20.85,
                "unit": "m",
                "step": 0.5
        },
        {
                "key": "G",
                "label": "Chiều rộng lọt lòng (G)",
                "default": 12,
                "unit": "m",
                "step": 0.5
        },
        {
                "key": "H",
                "label": "Chiều cao lọt lòng (H)",
                "default": 3.05,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "I",
                "label": "Chiều dày đáy bể (I)",
                "default": 0.35,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "J",
                "label": "Chiều dày bê tông lót (J)",
                "default": 0.05,
                "unit": "m",
                "step": 0.01
        },
        {
                "key": "L",
                "label": "Chiều dày bản nắp (L)",
                "default": 0.16,
                "unit": "m",
                "step": 0.01
        }
],
      compute: (vals) => {
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const H = Number(vals.H || 0);
      const I = Number(vals.I || 0);
      const J = Number(vals.J || 0);
      const L = Number(vals.L || 0);
      const V_day = F * G * I;
      const V_nap = F * G * L;
      const V_lot = (F + 0.2) * (G + 0.2) * J;
      return { V_day, V_nap, V_lot };
    }
    },
    warnings: []
  },
  {
    id: "be-xlnt",
    title: "Bể xử lý nước thải (XLNT)",
    fileSource: "1.1",
    sheetName: "Bể XLNT",
    purpose: "Tính toán thể tích bê tông đáy bể, các vách ngăn kỹ thuật (ngăn lắng, ngăn kỵ khí, hiếu khí), ván khuôn tiếp xúc nước thải và đào đắp khối lượng lớn.",
    parameters: [
      {
            "name": "Ký hiệu",
            "column": "D",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Số lượng",
            "column": "E",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "KÍCH THƯỚC BỂ · Dài",
            "column": "F",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "KÍCH THƯỚC BỂ · Rộng",
            "column": "G",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "KÍCH THƯỚC BỂ · Cao",
            "column": "H",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "KÍCH THƯỚC BỂ · Đáy dày",
            "column": "I",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "KÍCH THƯỚC BỂ · Bê tôg lót · Dày",
            "column": "J",
            "source": "Chỉ dẫn kỹ thuật / chi tiết cấu tạo",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "KÍCH THƯỚC BỂ · Bê tôg lót · Mở rộng",
            "column": "K",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "KÍCH THƯỚC BỂ · Nắp  dày",
            "column": "L",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "ĐÀO ĐẮP · Cốt hiện trạng/ Cao độ trước khi đào bể · -0.3",
            "column": "Z",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "ĐÀO ĐẮP · FL đỉnh bể",
            "column": "AC",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "ĐÀO ĐẮP · Đào đất",
            "column": "AE",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m3)"
      },
      {
            "name": "CỐT THÉP · Ø - 1 · BOT",
            "column": "AG",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "CỐT THÉP · @ - 1 · BOT",
            "column": "AK",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "CỐT THÉP · Hệ số",
            "column": "AP",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      }
],
    formulas: [
      {
            "target": "Cấu kiện (Cột B)",
            "mathFormat": "\"H= \"&Đáy dày*1000&\" mm\"",
            "excelCode": "`=\"H= \"&I12*1000&\" mm\"`",
            "description": "Giải nghĩa: \"H= \"&[Đáy dày]*1000&\" mm\""
      },
      {
            "target": "Hệ số hao hụt · Bê tông (Cột N)",
            "mathFormat": "Móng!@ - 4 TOP",
            "excelCode": "`=+Móng!$AN$12`",
            "description": "Giải nghĩa: Móng![@ - 4 TOP]"
      },
      {
            "target": "ĐÁY VÀ THÀNH BỂ · BT lót (Cột O)",
            "mathFormat": "(Dài+Mở rộng*2)*(Rộng+Mở rộng*2)*Dày*Hệ số hao hụt Bê tông*Số lượng",
            "excelCode": "`=+(F12+K12*2)*(G12+K12*2)*J12*N12*E12`",
            "description": "Giải nghĩa: ([Dài]+[Mở rộng]*2)*([Rộng]+[Mở rộng]*2)*[Dày]*[Hệ số hao hụt Bê tông]*[Số lượng]"
      },
      {
            "target": "ĐÁY VÀ THÀNH BỂ · VK BT Lót (Cột P)",
            "mathFormat": "((Dài+Mở rộng*2)+(Rộng+Mở rộng*2))*2*Dày*Số lượng",
            "excelCode": "`=+((F12+K12*2)+(G12+K12*2))*2*J12*E12`",
            "description": "Giải nghĩa: (([Dài]+[Mở rộng]*2)+([Rộng]+[Mở rộng]*2))*2*[Dày]*[Số lượng]"
      },
      {
            "target": "ĐÁY VÀ THÀNH BỂ · Bê tông (Cột Q)",
            "mathFormat": "Dài*Rộng*Đáy dày*Số lượng*Hệ số hao hụt Bê tông",
            "excelCode": "`=+F12*G12*I12*E12*N12`",
            "description": "Giải nghĩa: [Dài]*[Rộng]*[Đáy dày]*[Số lượng]*[Hệ số hao hụt Bê tông]"
      },
      {
            "target": "ĐÁY VÀ THÀNH BỂ · Ván khuôn (Cột R)",
            "mathFormat": "(Dài+Rộng)*2*Đáy dày*Số lượng",
            "excelCode": "`=+(F12+G12)*2*I12*E12`",
            "description": "Giải nghĩa: ([Dài]+[Rộng])*2*[Đáy dày]*[Số lượng]"
      },
      {
            "target": "ĐÁY VÀ THÀNH BỂ · EW1 · Chống thấm / Ngoài (Cột U)",
            "mathFormat": "IF(Ký hiệu=\"EW1\",Dài*Rộng*Số lượng,0)",
            "excelCode": "`=+IF($D12=\"EW1\",$F12*$G12*$E12,0)`",
            "description": "Giải nghĩa: IF([Ký hiệu]=\"EW1\",[Dài]*[Rộng]*[Số lượng],0)"
      },
      {
            "target": "ĐÁY VÀ THÀNH BỂ · IW1 · Chống thấm / trong (Cột V)",
            "mathFormat": "IF(Ký hiệu=\"IW1\",Dài*Rộng*Số lượng,0)",
            "excelCode": "`=+IF($D12=\"IW1\",$F12*$G12*$E12,0)`",
            "description": "Giải nghĩa: IF([Ký hiệu]=\"IW1\",[Dài]*[Rộng]*[Số lượng],0)"
      },
      {
            "target": "ĐÁY VÀ THÀNH BỂ · Cán mặt bê tông (Cột X)",
            "mathFormat": "Dài*Rộng*Số lượng",
            "excelCode": "`=+F12*G12*E12`",
            "description": "Giải nghĩa: [Dài]*[Rộng]*[Số lượng]"
      },
      {
            "target": "ĐÀO ĐẮP · Cốt hiện trạng/ Cao độ trước khi đào bể · -0.3 (Cột Z)",
            "mathFormat": "Z10",
            "excelCode": "`=+Z10`",
            "description": "Giải nghĩa: Z10"
      }
],
    svgKey: "SvgHoGaBe",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Bể XLNT",
      "inputs": {
            "E": 1,
            "F": 30,
            "G": 25,
            "H": 4.15,
            "I": 0.5,
            "J": 0.05,
            "K": 0.1,
            "L": 0.16,
            "AC": -0.1,
            "AG": 18,
            "AK": 150,
            "AP": 1.12
      },
      "outputs": {
            "N": 1,
            "O": 38.052,
            "P": 5.54,
            "Q": 375,
            "R": 55,
            "U": 0,
            "V": 750,
            "X": 750,
            "Z": -0.3,
            "AA": 1.2,
            "AB": 2,
            "AD": 4.5,
            "AE": 4215.96,
            "AF": 840.408,
            "AH": 18,
            "AI": 18,
            "AJ": 18,
            "AL": 150,
            "AM": 150,
            "AN": 150,
            "AO": 53.333333,
            "AQ": 44800
      }
},
    calculator: {
      fields: [
        {
                "key": "F",
                "label": "Chiều dài lọt lòng (F)",
                "default": 30,
                "unit": "m",
                "step": 1
        },
        {
                "key": "G",
                "label": "Chiều rộng lọt lòng (G)",
                "default": 25,
                "unit": "m",
                "step": 1
        },
        {
                "key": "H",
                "label": "Chiều sâu bể (H)",
                "default": 4.15,
                "unit": "m",
                "step": 0.1
        },
        {
                "key": "I",
                "label": "Chiều dày bản đáy (I)",
                "default": 0.5,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "L",
                "label": "Chiều dày nắp bể (L)",
                "default": 0.16,
                "unit": "m",
                "step": 0.01
        }
],
      compute: (vals) => {
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const H = Number(vals.H || 0);
      const I = Number(vals.I || 0);
      const L = Number(vals.L || 0);
      const V_day = F * G * I;
      const V_nap = F * G * L;
      return { V_day, V_nap };
    }
    },
    warnings: []
  },
  {
    id: "hang-rao",
    title: "Hàng rào công trình",
    fileSource: "1.1",
    sheetName: "Hàng rào",
    purpose: "Tính toán móng trụ rào M1/M2, bê tông cổ cột rào, giằng móng rào, tường gạch hoa/song sắt rào và ván khuôn giằng.",
    parameters: [
      {
            "name": "TT · Hàng rào dài · A",
            "column": "A",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Cấu kiện · Hàng rào dài · Móng - Trụ",
            "column": "B",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Số lượng · Hàng rào dài",
            "column": "D",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Nhập số liệu thiết kế"
      },
      {
            "name": "Kích thước hình học · L · 117.9",
            "column": "E",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · W",
            "column": "F",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · H1",
            "column": "G",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · h / (Vát)",
            "column": "H",
            "source": "Bản vẽ mặt bằng kết cấu / chi tiết cấu kiện",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · W1",
            "column": "I",
            "source": "Bản vẽ mặt cắt kết cấu / bình đồ hiện trạng",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · L1",
            "column": "J",
            "source": "Chỉ dẫn kỹ thuật / chi tiết cấu tạo",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · w",
            "column": "K",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · l",
            "column": "L",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Kích thước hình học · H / Móng - đỉnh",
            "column": "M",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Đào đắp · Mở rộng chân",
            "column": "AD",
            "source": "Bảng chỉ tiêu hàm lượng / thuyết minh thiết kế",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Đào đắp · Mở rộng đỉnh",
            "column": "AE",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m)"
      },
      {
            "name": "Đào đắp · Hđáy móng",
            "column": "AF",
            "source": "Bản vẽ thiết kế và chỉ dẫn kỹ thuật",
            "note": "Đơn vị: (m)"
      }
],
    formulas: [
      {
            "target": "Hao hụt vật liệu (Cột O)",
            "mathFormat": "Móng!AN",
            "excelCode": "`=+Móng!$AN$12`",
            "description": "Giải nghĩa: Móng![AN]"
      },
      {
            "target": "CÔNG TÁC BÊ TÔNG MÓNG · Bê tông lót (Cột P)",
            "mathFormat": "(117.9+0.1)*(W+0.1)*0.05*Số lượng Hàng rào dài*Hao hụt vật liệu",
            "excelCode": "`=+(E12+0.1)*(F12+0.1)*0.05*D12*O12`",
            "description": "Giải nghĩa: ([117.9]+0.1)*([W]+0.1)*0.05*[Số lượng Hàng rào dài]*[Hao hụt vật liệu]"
      },
      {
            "target": "CÔNG TÁC BÊ TÔNG MÓNG · Ván khuôn BT lót (Cột Q)",
            "mathFormat": "((117.9+0.1)+(W+0.1))*2*0.05*Số lượng Hàng rào dài",
            "excelCode": "`=+((E12+0.1)+(F12+0.1))*2*0.05*D12`",
            "description": "Giải nghĩa: (([117.9]+0.1)+([W]+0.1))*2*0.05*[Số lượng Hàng rào dài]"
      },
      {
            "target": "CÔNG TÁC BÊ TÔNG MÓNG · Bê tông / (m3) (Cột R)",
            "mathFormat": "(117.9*W*H1+(117.9*W+W1*L1)/2*h / (Vát))*Số lượng Hàng rào dài*Hao hụt vật liệu",
            "excelCode": "`=+(E12*F12*G12+(E12*F12+I12*J12)/2*H12)*D12*O12`",
            "description": "Giải nghĩa: ([117.9]*[W]*[H1]+([117.9]*[W]+[W1]*[L1])/2*[h / (Vát)])*[Số lượng Hàng rào dài]*[Hao hụt vật liệu]"
      },
      {
            "target": "CÔNG TÁC BÊ TÔNG MÓNG · Ván khuôn / (m2) (Cột S)",
            "mathFormat": "(117.9+W)*2*H1*Số lượng Hàng rào dài",
            "excelCode": "`=+(E12+F12)*2*G12*D12`",
            "description": "Giải nghĩa: ([117.9]+[W])*2*[H1]*[Số lượng Hàng rào dài]"
      },
      {
            "target": "TRỤ - GIẰNG · Trụ, giằng / <200 (Cột T)",
            "mathFormat": "IF(w<0.2,H / Móng - đỉnh-H1-h / (Vát),0)*Số lượng Hàng rào dài",
            "excelCode": "`=+IF(K12<0.2,M12-G12-H12,0)*D12`",
            "description": "Giải nghĩa: IF([w]<0.2,[H / Móng - đỉnh]-[H1]-[h / (Vát)],0)*[Số lượng Hàng rào dài]"
      },
      {
            "target": "TRỤ - GIẰNG · Trụ, giằng / ≥200 (Cột U)",
            "mathFormat": "IF(Trụ, giằng / ≥300=0,IF(w>=0.2,H / Móng - đỉnh-H1-h / (Vát),0)*Số lượng Hàng rào dài,0)",
            "excelCode": "`=+IF(V12=0,IF(K12>=0.2,M12-G12-H12,0)*D12,0)`",
            "description": "Giải nghĩa: IF([Trụ, giằng / ≥300]=0,IF([w]>=0.2,[H / Móng - đỉnh]-[H1]-[h / (Vát)],0)*[Số lượng Hàng rào dài],0)"
      },
      {
            "target": "TRỤ - GIẰNG · Trụ, giằng / ≥300 (Cột V)",
            "mathFormat": "IF(w>0.2,IF(w>=0.3,H / Móng - đỉnh-H1-h / (Vát),0),0)*Số lượng Hàng rào dài",
            "excelCode": "`=+IF(K12>0.2,IF(K12>=0.3,M12-G12-H12,0),0)*D12`",
            "description": "Giải nghĩa: IF([w]>0.2,IF([w]>=0.3,[H / Móng - đỉnh]-[H1]-[h / (Vát)],0),0)*[Số lượng Hàng rào dài]"
      },
      {
            "target": "TRỤ - GIẰNG · Bê tông (Cột W)",
            "mathFormat": "w*l*SUM(Trụ, giằng / <200:Trụ, giằng / ≥300)*Hao hụt vật liệu",
            "excelCode": "`=+K12*L12*SUM(T12:V12)*O12`",
            "description": "Giải nghĩa: [w]*[l]*SUM([Trụ, giằng / <200]:[Trụ, giằng / ≥300])*[Hao hụt vật liệu]"
      },
      {
            "target": "TRỤ - GIẰNG · Ván khuôn (Cột X)",
            "mathFormat": "(w+l)*2*SUM(Trụ, giằng / <200:Trụ, giằng / ≥300)",
            "excelCode": "`=+(K12+L12)*2*SUM(T12:V12)`",
            "description": "Giải nghĩa: ([w]+[l])*2*SUM([Trụ, giằng / <200]:[Trụ, giằng / ≥300])"
      }
],
    svgKey: "SvgTuongXay",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Hàng rào",
      "inputs": {
            "A": 1,
            "D": 37,
            "E": 0.6,
            "F": 0.6,
            "G": 0.15,
            "H": 0.1,
            "I": 0.32,
            "J": 0.27,
            "K": 0.22,
            "L": 0.22,
            "M": 1.5,
            "AD": 0.5,
            "AE": 1,
            "AF": -1
      },
      "outputs": {
            "O": 1,
            "P": 0.9065,
            "Q": 5.18,
            "R": 2.82384,
            "S": 13.32,
            "T": 0,
            "U": 46.25,
            "V": 0,
            "W": 2.2385,
            "X": 40.7,
            "AC": -0.2,
            "AG": 0.85,
            "AH": 146.557,
            "AI": 141.84172,
            "AJ": 0
      }
},
    calculator: {
      fields: [
        {
                "key": "D",
                "label": "Số lượng móng trụ (D)",
                "default": 37,
                "unit": "trụ",
                "step": 1
        },
        {
                "key": "E",
                "label": "Chiều rộng móng trụ (E)",
                "default": 0.6,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "F",
                "label": "Chiều dài móng trụ (F)",
                "default": 0.6,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "G",
                "label": "Chiều cao móng trụ (G)",
                "default": 0.15,
                "unit": "m",
                "step": 0.05
        },
        {
                "key": "M",
                "label": "Chiều cao cột rào (M)",
                "default": 1.5,
                "unit": "m",
                "step": 0.1
        }
],
      compute: (vals) => {
      const D = Number(vals.D ?? 37);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const V_mong = E * F * G * D;
      return { V_mong };
    }
    },
    warnings: []
  }
];

export const getPartAItemById = (id) => partAItems.find(item => item.id === id);
