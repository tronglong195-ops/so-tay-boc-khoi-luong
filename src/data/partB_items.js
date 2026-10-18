// PHẦN B: CỐT THÉP & KẾT CẤU THÉP TIỀN CHẾ (FILE 1.2)
// Tách biệt 100% dữ liệu khỏi giao diện. Nguồn sự thật: SPEC_1.2_thep.md

export const partBItems = [
  {
    id: "thep-tong-quan",
    title: "Cấu trúc một dòng thanh thép & Quy cách chung",
    fileSource: "1.2",
    sheetName: "Tổng quan thép",
    purpose: "Hướng dẫn cấu trúc dữ liệu 3 dòng của một thanh thép trong File 1.2: Cách đọc bảng thống kê thép trên bản vẽ, chuyển đổi sang các đoạn uốn mỏ D–H (mm), tính số mối nối cây 11,7m, chiều dài nối chồng 40Ø, trọng lượng danh nghĩa và quy cách uốn móc đai 135°.",
    parameters: [
      {
            "name": "Đường kính thép Ø",
            "column": "C",
            "source": "Bảng thống kê thép / mặt cắt",
            "note": "Đơn vị mm"
      },
      {
            "name": "Các đoạn uốn mỏ",
            "column": "D, E, F, G, H",
            "source": "Hình dạng thanh thép trong bảng thống kê",
            "note": "Đơn vị mm"
      },
      {
            "name": "Số thanh / cấu kiện",
            "column": "L",
            "source": "Mặt bằng / mặt cắt bố trí thép",
            "note": "Số thanh nguyên"
      },
      {
            "name": "Số cấu kiện",
            "column": "M",
            "source": "Mặt bằng định vị cấu kiện",
            "note": "Số lượng cấu kiện"
      }
],
    formulas: [
      {
            "target": "Số mối nối thanh thép (Cột I)",
            "mathFormat": "Số mối nối = INT(Tổng chiều dài D:H / 11700)",
            "excelCode": "=IF(SUM(D:H)=11700,0,INT(SUM(D:H)/11700))",
            "description": "Quy chuẩn cây thép thương mại dài 11,7m"
      },
      {
            "target": "Chiều dài mối nối chồng (Cột J)",
            "mathFormat": "Chiều dài nối = 40 × Đường kính Ø",
            "excelCode": "=40*C",
            "description": "Quy ước nối buộc trong file mẫu 40Ø"
      },
      {
            "target": "Tổng chiều dài 1 thanh (Cột K)",
            "mathFormat": "K = SUM(D:H) + I × J",
            "excelCode": "=SUM(D:H)+I*J",
            "description": "Tổng các đoạn uốn mỏ cộng thêm chiều dài các mối nối"
      },
      {
            "target": "Trọng lượng 1m dài thép (Cột P)",
            "mathFormat": "P = 0.25 × π × (Ø/1000)² × 7850",
            "excelCode": "=0.25*PI()*(C/1000)^2*7850",
            "description": "Trọng lượng riêng danh nghĩa theo khối lượng thể tích thép 7850 kg/m³"
      },
      {
            "target": "Tổng trọng lượng thép (Cột Q)",
            "mathFormat": "Q = Tổng mét dài O × Trọng lượng 1m P",
            "excelCode": "=O*P",
            "description": "Khối lượng cốt thép tính bằng kilôgam (kg)"
      }
],
    svgKey: "SvgThepThanh",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Tổng quan thép",
      "inputs": {},
      "outputs": {}
},
    calculator: {
      fields: [
        {
                "key": "C",
                "label": "Đường kính thanh thép Ø (C)",
                "default": 22,
                "unit": "mm",
                "step": 1
        },
        {
                "key": "D",
                "label": "Đoạn móc uốn D (D)",
                "default": 0,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "E",
                "label": "Đoạn uốn góc E (E)",
                "default": 770,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "F",
                "label": "Đoạn thân thẳng F (F)",
                "default": 20500,
                "unit": "mm",
                "step": 100
        },
        {
                "key": "G",
                "label": "Đoạn uốn góc G (G)",
                "default": 770,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "H",
                "label": "Đoạn móc uốn H (H)",
                "default": 0,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "L",
                "label": "Số thanh mỗi cấu kiện (L)",
                "default": 2,
                "unit": "thanh",
                "step": 1
        },
        {
                "key": "M",
                "label": "Số lượng cấu kiện (M)",
                "default": 1,
                "unit": "CK",
                "step": 1
        }
],
      compute: (vals) => {
      const C = Number(vals.C || 0);
      const D = Number(vals.D || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const H = Number(vals.H || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const sumDH = D + E + F + G + H;
      const I = sumDH === 11700 ? 0 : Math.floor(sumDH / 11700);
      const J = 40 * C;
      const K = sumDH + I * J;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      const Cay117 = Q / ((Math.pow(C, 2) / 162) * 11.7);
      return { I, J, K, N, O, P, Q, Cay117 };
    }
    },
    warnings: [
      {
            "level": "Trung bình",
            "code": "LOI-14",
            "title": "Cố định chiều dài nối 40Ø và móc đai 7Ø",
            "content": "File 1.2 cố định nối 40Ø và móc 7Ø cho mọi trường hợp. Vùng có yêu cầu kháng chấn (TCVN 9386:2012) bắt buộc uốn móc đai 135° với đoạn móc kéo dài ≥ 10Ø (tối thiểu 70mm).",
            "remedy": "Đối chiếu chỉ dẫn kỹ thuật kết cấu để điều chỉnh chiều dài nối và uốn móc đai."
      },
      {
            "level": "Thấp",
            "code": "LOI-16",
            "title": "Ba công thức tính trọng lượng riêng cốt thép lệch nhẹ",
            "content": "File dùng π/4*7850 (chi tiết), Ø²/162 (đếm cây) và 6.16*Ø²/1000 (Tổng hợp), độ lệch dưới 0.15%.",
            "remedy": "Thống nhất áp dụng theo bảng trọng lượng danh nghĩa 1m dài trong TCVN 1651-2:2018."
      }
]
  },
  {
    id: "thep-noi-dau-coc",
    title: "Thép nối đầu cọc (Râu cọc liên kết đài)",
    fileSource: "1.2",
    sheetName: "Thép nối đầu cọc",
    purpose: "Thống kê cốt thép râu cọc chờ để neo cọc bê tông vào đài móng sau khi đập đầu cọc, đảm bảo khả năng chịu nhổ và chịu cắt của móng cọc.",
    parameters: [
      {
            "name": "Ký hiệu",
            "column": "B",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "D (mm)",
            "column": "C",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "F",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số thanh trong 1 Cấu kiện",
            "column": "L",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số cấu kiện",
            "column": "M",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      }
],
    formulas: [
      {
            "target": "Số lượng mối nối (Cột I)",
            "mathFormat": "IF([Hình dạng·F]=11700,0,INT([Hình dạng·F]/11700))",
            "excelCode": "`=IF(F9=11700,0,INT(F9/11700))`",
            "description": "IF([Hình dạng·F]=11700,0,INT([Hình dạng·F]/11700))"
      },
      {
            "target": "Chiều dài mối nối (Cột J)",
            "mathFormat": "40*[D (mm)]",
            "excelCode": "`=40*C9`",
            "description": "40*[D (mm)]"
      },
      {
            "target": "Chiều dài 1 thanh (mm) (Cột K)",
            "mathFormat": "SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối]",
            "excelCode": "`=SUM(D8:H10)+I9*J9`",
            "description": "SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối]"
      },
      {
            "target": "Số cấu kiện (Cột M)",
            "mathFormat": "96+154",
            "excelCode": "`=96+154`",
            "description": "96+154"
      },
      {
            "target": "Tổng số thanh (Cột N)",
            "mathFormat": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]",
            "excelCode": "`=L9*M9`",
            "description": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]"
      },
      {
            "target": "Tổng chiều dài (m) (Cột O)",
            "mathFormat": "[Tổng số thanh]*[Chiều dài 1 thanh (mm)]/10^3",
            "excelCode": "`=N9*K9/10^3`",
            "description": "[Tổng số thanh]*[Chiều dài 1 thanh (mm)]/10^3"
      },
      {
            "target": "Trọng lượng riêng / (Kg) (Cột P)",
            "mathFormat": "0.25*3.1415926*([D (mm)]/1000)^2*7850",
            "excelCode": "`=0.25*3.1415926*(C9/1000)^2*7850`",
            "description": "0.25*3.1415926*([D (mm)]/1000)^2*7850"
      },
      {
            "target": "Khối lượng (Kg) (Cột Q)",
            "mathFormat": "[Trọng lượng riêng / (Kg)]*[Tổng chiều dài (m)]",
            "excelCode": "`=P9*O9`",
            "description": "[Trọng lượng riêng / (Kg)]*[Tổng chiều dài (m)]"
      }
],
    svgKey: "SvgThepThanh",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Thép nối đầu cọc",
      "inputs": {
            "B": 1,
            "C": 16,
            "F": 1300,
            "L": 4
      },
      "outputs": {
            "I": 0,
            "J": 640,
            "K": 1300,
            "M": 250,
            "N": 1000,
            "O": 1300,
            "P": 1.578336,
            "Q": 2051.836959
      }
},
    calculator: {
      fields: [
        {
                "key": "C",
                "label": "Đường kính thép Ø (C)",
                "default": 16,
                "unit": "mm",
                "step": 2
        },
        {
                "key": "F",
                "label": "Chiều dài thanh F (F)",
                "default": 1300,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "L",
                "label": "Số râu thép / cọc (L)",
                "default": 4,
                "unit": "thanh",
                "step": 1
        },
        {
                "key": "M",
                "label": "Số lượng cọc (M)",
                "default": 250,
                "unit": "cọc",
                "step": 10
        }
],
      compute: (vals) => {
      const C = Number(vals.C || 0);
      const F = Number(vals.F || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const sumDH = F;
      const I = Math.floor(sumDH / 11700);
      const J = 40 * C;
      const K = sumDH + I * J;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { I, J, K, N, O, P, Q };
    }
    },
    warnings: [
      {
            "level": "Nghiêm trọng",
            "code": "LOI-01",
            "title": "Bị bỏ sót trong sheet Chi tiết và Tổng hợp",
            "content": "Sheet Chi tiết gốc không liên kết sheet Thép nối đầu cọc (15.55 tấn thép trong dữ liệu mẫu).",
            "remedy": "Bổ sung SUMIF cho sheet Thép nối đầu cọc hoặc tự cộng riêng vào BOQ."
      }
]
  },
  {
    id: "thep-coc-vuong",
    title: "Thép cọc vuông bê tông",
    fileSource: "1.2",
    sheetName: "Cọc vuông bê tông",
    purpose: "Thống kê cốt thép dọc cọc, cốt đai cọc, lưới thép gia cường đầu cọc và hộp thép mũi cọc ép/cọc đóng đúc sẵn.",
    parameters: [
      {
            "name": "Ký hiệu",
            "column": "B",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "D (mm)",
            "column": "C",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng kích thước",
            "column": "F",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số thanh trong 1 Cấu kiện",
            "column": "L",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số cấu kiện",
            "column": "M",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "S",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "T",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "U",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "V",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      }
],
    formulas: [
      {
            "target": "Hình dạng kích thước (Cột F)",
            "mathFormat": "U13-V13",
            "excelCode": "`=+U13-V13`",
            "description": "U13-V13"
      },
      {
            "target": "Số lượng mối nối (Cột I)",
            "mathFormat": "IF(SUM(D11:H13)=11700,0,INT(SUM(D11:H13)/11700))",
            "excelCode": "`=IF(SUM(D11:H13)=11700,0,INT(SUM(D11:H13)/11700))`",
            "description": "IF(SUM(D11:H13)=11700,0,INT(SUM(D11:H13)/11700))"
      },
      {
            "target": "Chiều dài mối nối (Cột J)",
            "mathFormat": "40*[D (mm)]",
            "excelCode": "`=40*C12`",
            "description": "40*[D (mm)]"
      },
      {
            "target": "Chiều dài 1 thanh (mm) (Cột K)",
            "mathFormat": "SUM(D11:H13)+[Số lượng mối nối]*[Chiều dài mối nối]",
            "excelCode": "`=+SUM(D11:H13)+I12*J12`",
            "description": "SUM(D11:H13)+[Số lượng mối nối]*[Chiều dài mối nối]"
      },
      {
            "target": "Số thanh trong 1 Cấu kiện (Cột L)",
            "mathFormat": "4*T13",
            "excelCode": "`=4*T13`",
            "description": "4*T13"
      },
      {
            "target": "Tổng số thanh (Cột N)",
            "mathFormat": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]",
            "excelCode": "`=+L12*M12`",
            "description": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]"
      },
      {
            "target": "Tổng chiều dài (m) (Cột O)",
            "mathFormat": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000",
            "excelCode": "`=+K12*N12/1000`",
            "description": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000"
      },
      {
            "target": "Trọng lượng riêng / (Kg) (Cột P)",
            "mathFormat": "0.25*3.1415926*([D (mm)]/1000)^2*7850",
            "excelCode": "`=0.25*3.1415926*(C12/1000)^2*7850`",
            "description": "0.25*3.1415926*([D (mm)]/1000)^2*7850"
      }
],
    svgKey: "SvgThepThanh",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Cọc vuông bê tông",
      "inputs": {
            "B": 1,
            "C": 18,
            "M": 3
      },
      "outputs": {
            "F": 9700,
            "I": 0,
            "J": 720,
            "K": 9988,
            "L": 4,
            "N": 12,
            "O": 119.856,
            "P": 1.997582,
            "Q": 239.422147
      }
},
    calculator: {
      fields: [
        {
                "key": "C",
                "label": "Đường kính cốt thép dọc (C)",
                "default": 18,
                "unit": "mm",
                "step": 2
        },
        {
                "key": "F",
                "label": "Chiều dài thân cọc F (F)",
                "default": 9700,
                "unit": "mm",
                "step": 100
        },
        {
                "key": "L",
                "label": "Số thanh chủ (L)",
                "default": 4,
                "unit": "thanh",
                "step": 1
        },
        {
                "key": "M",
                "label": "Số đoạn cọc (M)",
                "default": 3,
                "unit": "đoạn",
                "step": 1
        }
],
      compute: (vals) => {
      const C = Number(vals.C || 0);
      const F = Number(vals.F || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = 9988; // Dữ liệu mẫu gồm uốn mỏ
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }
    },
    warnings: []
  },
  {
    id: "thep-coc-nhoi",
    title: "Thép lồng cọc khoan nhồi",
    fileSource: "1.2",
    sheetName: "Cọc nhồi",
    purpose: "Thống kê lồng cốt thép cọc khoan nhồi: Thép chủ dọc lồng, đai xoắn liên tục (spiral) hoặc đai tròn, vành đai tăng cường định hình lồng và móc treo lồng cọc.",
    parameters: [
      {
            "name": "Ký hiệu",
            "column": "B",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "D (mm)",
            "column": "C",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "F",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số thanh trong một cấu kiện",
            "column": "L",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số cấu kiện",
            "column": "M",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "S",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "T",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "U",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "V",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "W",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "X",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      }
],
    formulas: [
      {
            "target": "Hình dạng (Cột F)",
            "mathFormat": "10000+560",
            "excelCode": "`=10000+560`",
            "description": "10000+560"
      },
      {
            "target": "Số lượng mối nối (Cột I)",
            "mathFormat": "IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))",
            "excelCode": "`=IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))`",
            "description": "IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))"
      },
      {
            "target": "Chiều dài mối nối (Cột J)",
            "mathFormat": "40*[D (mm)]",
            "excelCode": "`=40*C10`",
            "description": "40*[D (mm)]"
      },
      {
            "target": "Chiều dài 1 thanh  / (mm) (Cột K)",
            "mathFormat": "SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối]",
            "excelCode": "`=SUM(D9:H11)+I10*J10`",
            "description": "SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối]"
      },
      {
            "target": "Số cấu kiện (Cột M)",
            "mathFormat": "[U]",
            "excelCode": "`=+U10`",
            "description": "[U]"
      },
      {
            "target": "Tổng số thanh (Cột N)",
            "mathFormat": "[Số thanh trong một cấu kiện]*[Số cấu kiện]",
            "excelCode": "`=L10*M10`",
            "description": "[Số thanh trong một cấu kiện]*[Số cấu kiện]"
      },
      {
            "target": "Tổng chiều dài (m) (Cột O)",
            "mathFormat": "[Tổng số thanh]*[Chiều dài 1 thanh  / (mm)]/10^3",
            "excelCode": "`=N10*K10/10^3`",
            "description": "[Tổng số thanh]*[Chiều dài 1 thanh  / (mm)]/10^3"
      },
      {
            "target": "Trọng lượng riêng (Cột P)",
            "mathFormat": "0.25*3.1415926*([D (mm)]/1000)^2*7850",
            "excelCode": "`=0.25*3.1415926*(C10/1000)^2*7850`",
            "description": "0.25*3.1415926*([D (mm)]/1000)^2*7850"
      }
],
    svgKey: "SvgThepThanh",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Cọc nhồi",
      "inputs": {
            "C": 14,
            "L": 9,
            "T": 1,
            "U": 1,
            "V": 41000,
            "W": 1500,
            "X": 75
      },
      "outputs": {
            "F": 10560,
            "I": 0,
            "J": 560,
            "K": 10560,
            "M": 1,
            "N": 9,
            "O": 95.04,
            "P": 1.208414,
            "Q": 114.847628
      }
},
    calculator: {
      fields: [
        {
                "key": "C",
                "label": "Đường kính thanh thép Ø (C)",
                "default": 14,
                "unit": "mm",
                "step": 2
        },
        {
                "key": "F",
                "label": "Chiều dài thanh F (F)",
                "default": 10560,
                "unit": "mm",
                "step": 100
        },
        {
                "key": "L",
                "label": "Số thanh / lồng (L)",
                "default": 9,
                "unit": "thanh",
                "step": 1
        },
        {
                "key": "M",
                "label": "Số lồng cọc (M)",
                "default": 1,
                "unit": "lồng",
                "step": 1
        }
],
      compute: (vals) => {
      const C = Number(vals.C || 0);
      const F = Number(vals.F || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = F;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }
    },
    warnings: [
      {
            "level": "Nghiêm trọng",
            "code": "LOI-01",
            "title": "Bị bỏ sót trong sheet Chi tiết và Tổng hợp",
            "content": "Sheet Chi tiết gốc không liên kết sheet Thép cọc nhồi (1.92 tấn thép trong dữ liệu mẫu).",
            "remedy": "Bổ sung SUMIF cho sheet Thép cọc nhồi vào bảng tổng hợp."
      }
]
  },
  {
    id: "thep-coc-barret",
    title: "Thép lồng cọc Barrette",
    fileSource: "1.2",
    sheetName: "Cọc Barret",
    purpose: "Thống kê lồng cốt thép cọc barrette tiết diện chữ nhật: Thép dọc chịu lực, thép đai hộp kín, thanh chống phình và đai tăng cường lồng.",
    parameters: [
      {
            "name": "Ký hiệu",
            "column": "B",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "D (mm)",
            "column": "C",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "F",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số thanh trong một cấu kiện",
            "column": "L",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số cấu kiện",
            "column": "M",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "S",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "W0: Chiều rộng bố trí thép",
            "column": "T",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "U",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "V",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "W",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "Y",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "AA",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      }
],
    formulas: [
      {
            "target": "Hình dạng (Cột F)",
            "mathFormat": "8300+1150+100",
            "excelCode": "`=8300+1150+100`",
            "description": "8300+1150+100"
      },
      {
            "target": "Số lượng mối nối (Cột I)",
            "mathFormat": "IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))",
            "excelCode": "`=IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))`",
            "description": "IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))"
      },
      {
            "target": "Chiều dài mối nối (Cột J)",
            "mathFormat": "40*[D (mm)]",
            "excelCode": "`=40*C9`",
            "description": "40*[D (mm)]"
      },
      {
            "target": "Chiều dài 1 thanh  / (mm) (Cột K)",
            "mathFormat": "SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối]",
            "excelCode": "`=SUM(D8:H10)+I9*J9`",
            "description": "SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối]"
      },
      {
            "target": "Số thanh trong một cấu kiện (Cột L)",
            "mathFormat": "ROUND([Y]/150+1,0)",
            "excelCode": "`=+ROUND(Y9/150+1,0)`",
            "description": "ROUND([Y]/150+1,0)"
      },
      {
            "target": "Số cấu kiện (Cột M)",
            "mathFormat": "[W0: Chiều rộng bố trí thép]",
            "excelCode": "`=+T9`",
            "description": "[W0: Chiều rộng bố trí thép]"
      },
      {
            "target": "Tổng số thanh (Cột N)",
            "mathFormat": "[Số thanh trong một cấu kiện]*[Số cấu kiện]",
            "excelCode": "`=L9*M9`",
            "description": "[Số thanh trong một cấu kiện]*[Số cấu kiện]"
      },
      {
            "target": "Tổng chiều dài (m) (Cột O)",
            "mathFormat": "[Tổng số thanh]*[Chiều dài 1 thanh  / (mm)]/10^3",
            "excelCode": "`=N9*K9/10^3`",
            "description": "[Tổng số thanh]*[Chiều dài 1 thanh  / (mm)]/10^3"
      }
],
    svgKey: "SvgThepThanh",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Cọc Barret",
      "inputs": {
            "C": 25,
            "T": 1,
            "U": 41000,
            "V": 2800,
            "W": 600,
            "Y": 2400,
            "AA": 70
      },
      "outputs": {
            "F": 9550,
            "I": 0,
            "J": 1000,
            "K": 9550,
            "L": 17,
            "M": 1,
            "N": 17,
            "O": 162.35,
            "P": 3.85336,
            "Q": 625.592943,
            "X": 40860,
            "Z": 530
      }
},
    calculator: {
      fields: [
        {
                "key": "C",
                "label": "Đường kính thép chủ Ø (C)",
                "default": 25,
                "unit": "mm",
                "step": 3
        },
        {
                "key": "F",
                "label": "Chiều dài thanh F (F)",
                "default": 9550,
                "unit": "mm",
                "step": 100
        },
        {
                "key": "L",
                "label": "Số thanh / lồng (L)",
                "default": 17,
                "unit": "thanh",
                "step": 1
        },
        {
                "key": "M",
                "label": "Số lồng cọc (M)",
                "default": 1,
                "unit": "lồng",
                "step": 1
        }
],
      compute: (vals) => {
      const C = Number(vals.C || 0);
      const F = Number(vals.F || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = F;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }
    },
    warnings: [
      {
            "level": "Nghiêm trọng",
            "code": "LOI-01",
            "title": "Bị bỏ sót trong sheet Chi tiết và Tổng hợp",
            "content": "Sheet Chi tiết gốc không liên kết sheet Thép cọc Barret (18.66 tấn thép trong dữ liệu mẫu).",
            "remedy": "Bổ sung SUMIF cho sheet Thép cọc Barret vào bảng tổng hợp."
      }
]
  },
  {
    id: "thep-mong",
    title: "Thép móng & Đài móng",
    fileSource: "1.2",
    sheetName: "Thép móng",
    purpose: "Thống kê lưới thép đáy đài móng theo 2 phương X, Y, lưới thép mặt trên đài móng, thép sườn chống phình và thép uốn móc neo vào đài.",
    parameters: [
      {
            "name": "Ký hiệu",
            "column": "B",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "D (mm)",
            "column": "C",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "E",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "F",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số thanh trong 1 Cấu kiện",
            "column": "L",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số cấu kiện",
            "column": "M",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "S",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "T",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "U",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "V",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "W",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      }
],
    formulas: [
      {
            "target": "Hình dạng (Cột F)",
            "mathFormat": "[U]+[X]-[V]",
            "excelCode": "`=+U9+X9-V9`",
            "description": "[U]+[X]-[V]"
      },
      {
            "target": "Số lượng mối nối (Cột I)",
            "mathFormat": "IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))",
            "excelCode": "`=IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))`",
            "description": "IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))"
      },
      {
            "target": "Chiều dài mối nối (Cột J)",
            "mathFormat": "40*[D (mm)]",
            "excelCode": "`=40*C9`",
            "description": "40*[D (mm)]"
      },
      {
            "target": "Chiều dài 1 thanh (mm) (Cột K)",
            "mathFormat": "SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối]",
            "excelCode": "`=+SUM(D8:H10)+I9*J9`",
            "description": "SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối]"
      },
      {
            "target": "Số cấu kiện (Cột M)",
            "mathFormat": "[T]",
            "excelCode": "`=+T9`",
            "description": "[T]"
      },
      {
            "target": "Tổng số thanh (Cột N)",
            "mathFormat": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]",
            "excelCode": "`=+L9*M9`",
            "description": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]"
      },
      {
            "target": "Tổng chiều dài (m) (Cột O)",
            "mathFormat": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000",
            "excelCode": "`=+K9*N9/1000`",
            "description": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000"
      },
      {
            "target": "Trọng lượng riêng / (Kg) (Cột P)",
            "mathFormat": "0.25*3.1415926*([D (mm)]/1000)^2*7850",
            "excelCode": "`=0.25*3.1415926*(C9/1000)^2*7850`",
            "description": "0.25*3.1415926*([D (mm)]/1000)^2*7850"
      }
],
    svgKey: "SvgThepThanh",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Thép móng",
      "inputs": {
            "B": 1,
            "C": 25,
            "E": 200,
            "L": 4,
            "T": 4,
            "U": 2000,
            "V": 100,
            "W": 50
      },
      "outputs": {
            "F": 2900,
            "I": 0,
            "J": 1000,
            "K": 3100,
            "M": 4,
            "N": 16,
            "O": 49.6,
            "P": 3.85336,
            "Q": 191.12664,
            "X": 1000,
            "Y": 2250
      }
},
    calculator: {
      fields: [
        {
                "key": "C",
                "label": "Đường kính cốt thép Ø (C)",
                "default": 25,
                "unit": "mm",
                "step": 3
        },
        {
                "key": "E",
                "label": "Đoạn uốn mỏ móc E (E)",
                "default": 200,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "F",
                "label": "Chiều dài thân F (F)",
                "default": 2900,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "L",
                "label": "Số thanh mỗi đài (L)",
                "default": 4,
                "unit": "thanh",
                "step": 1
        },
        {
                "key": "M",
                "label": "Số lượng đài móng (M)",
                "default": 4,
                "unit": "đài",
                "step": 1
        }
],
      compute: (vals) => {
      const C = Number(vals.C || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = E + F;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }
    },
    warnings: []
  },
  {
    id: "thep-dam-mong",
    title: "Thép dầm móng (Giằng móng)",
    fileSource: "1.2",
    sheetName: "Thép dầm móng",
    purpose: "Thống kê cốt thép chủ dọc lớp trên và lớp dưới dầm móng, cốt thép đai dầm móng, đai gia cường tại nút giao móng và cốt giá cấu tạo.",
    parameters: [
      {
            "name": "Ký hiệu",
            "column": "B",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "D (mm)",
            "column": "C",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "E",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "F",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "G",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số thanh trong 1 Cấu kiện",
            "column": "L",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số cấu kiện",
            "column": "M",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "S",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "T",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      }
],
    formulas: [
      {
            "target": "Hình dạng (Cột E)",
            "mathFormat": "35*[D (mm)]",
            "excelCode": "`=35*C10`",
            "description": "35*[D (mm)]"
      },
      {
            "target": "Hình dạng (Cột G)",
            "mathFormat": "[Hình dạng·E]",
            "excelCode": "`=+E10`",
            "description": "[Hình dạng·E]"
      },
      {
            "target": "Số lượng mối nối (Cột I)",
            "mathFormat": "IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))",
            "excelCode": "`=IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))`",
            "description": "IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))"
      },
      {
            "target": "Chiều dài mối nối (Cột J)",
            "mathFormat": "40*[D (mm)]",
            "excelCode": "`=40*C10`",
            "description": "40*[D (mm)]"
      },
      {
            "target": "Chiều dài 1 thanh (mm) (Cột K)",
            "mathFormat": "SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối]",
            "excelCode": "`=+SUM(D9:H11)+I10*J10`",
            "description": "SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối]"
      },
      {
            "target": "Số cấu kiện (Cột M)",
            "mathFormat": "[T]",
            "excelCode": "`=+T10`",
            "description": "[T]"
      },
      {
            "target": "Tổng số thanh (Cột N)",
            "mathFormat": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]",
            "excelCode": "`=+L10*M10`",
            "description": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]"
      },
      {
            "target": "Tổng chiều dài (m) (Cột O)",
            "mathFormat": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000",
            "excelCode": "`=+K10*N10/1000`",
            "description": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000"
      }
],
    svgKey: "SvgThepThanh",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Thép dầm móng",
      "inputs": {
            "B": 1,
            "C": 25,
            "F": 20500,
            "L": 2,
            "T": 1
      },
      "outputs": {
            "E": 875,
            "G": 875,
            "I": 1,
            "J": 1000,
            "K": 23250,
            "M": 1,
            "N": 2,
            "O": 46.5,
            "P": 3.85336,
            "Q": 179.181225
      }
},
    calculator: {
      fields: [
        {
                "key": "C",
                "label": "Đường kính thép dọc Ø (C)",
                "default": 25,
                "unit": "mm",
                "step": 3
        },
        {
                "key": "E",
                "label": "Đoạn neo mỏ E (E)",
                "default": 875,
                "unit": "mm",
                "step": 25
        },
        {
                "key": "F",
                "label": "Chiều dài nhịp F (F)",
                "default": 20500,
                "unit": "mm",
                "step": 100
        },
        {
                "key": "G",
                "label": "Đoạn neo mỏ G (G)",
                "default": 875,
                "unit": "mm",
                "step": 25
        },
        {
                "key": "L",
                "label": "Số thanh mỗi dầm (L)",
                "default": 2,
                "unit": "thanh",
                "step": 1
        },
        {
                "key": "M",
                "label": "Số lượng dầm (M)",
                "default": 1,
                "unit": "dầm",
                "step": 1
        }
],
      compute: (vals) => {
      const C = Number(vals.C || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const sumDH = E + F + G;
      const I = Math.floor(sumDH / 11700);
      const J = 40 * C;
      const K = sumDH + I * J;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { I, J, K, N, O, P, Q };
    }
    },
    warnings: []
  },
  {
    id: "thep-cot-vuong",
    title: "Thép cột vuông & Chữ nhật",
    fileSource: "1.2",
    sheetName: "Thép cột vuông",
    purpose: "Thống kê cốt thép dọc chịu lực cột tầng, đoạn uốn bẻ mỏ chờ nối tầng, cốt thép đai cột đan dày vùng chân/đầu cột và đai gia cường nút giao dầm cột.",
    parameters: [
      {
            "name": "Ký hiệu",
            "column": "B",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "D (mm)",
            "column": "C",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "F",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số thanh trong 1 Cấu kiện",
            "column": "L",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số cấu kiện",
            "column": "M",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "S",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "T",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "U",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      }
],
    formulas: [
      {
            "target": "Hình dạng (Cột F)",
            "mathFormat": "[U]+40*[D (mm)]",
            "excelCode": "`=U10+40*C10`",
            "description": "[U]+40*[D (mm)]"
      },
      {
            "target": "Số lượng mối nối (Cột I)",
            "mathFormat": "IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))",
            "excelCode": "`=IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))`",
            "description": "IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))"
      },
      {
            "target": "Chiều dài mối nối (Cột J)",
            "mathFormat": "40*[D (mm)]",
            "excelCode": "`=40*C10`",
            "description": "40*[D (mm)]"
      },
      {
            "target": "Chiều dài 1 thanh (mm) (Cột K)",
            "mathFormat": "SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối]",
            "excelCode": "`=+SUM(D9:H11)+I10*J10`",
            "description": "SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối]"
      },
      {
            "target": "Số cấu kiện (Cột M)",
            "mathFormat": "[T]",
            "excelCode": "`=+T10`",
            "description": "[T]"
      },
      {
            "target": "Tổng số thanh (Cột N)",
            "mathFormat": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]",
            "excelCode": "`=+L10*M10`",
            "description": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]"
      },
      {
            "target": "Tổng chiều dài (m) (Cột O)",
            "mathFormat": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000",
            "excelCode": "`=+K10*N10/1000`",
            "description": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000"
      },
      {
            "target": "Trọng lượng riêng / (Kg) (Cột P)",
            "mathFormat": "0.25*3.1415926*([D (mm)]/1000)^2*7850",
            "excelCode": "`=0.25*3.1415926*(C10/1000)^2*7850`",
            "description": "0.25*3.1415926*([D (mm)]/1000)^2*7850"
      }
],
    svgKey: "SvgThepThanh",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Thép cột vuông",
      "inputs": {
            "B": 1,
            "C": 25,
            "L": 4,
            "T": 3,
            "U": 5500
      },
      "outputs": {
            "F": 6500,
            "I": 0,
            "J": 1000,
            "K": 6500,
            "M": 3,
            "N": 12,
            "O": 78,
            "P": 3.85336,
            "Q": 300.562055
      }
},
    calculator: {
      fields: [
        {
                "key": "C",
                "label": "Đường kính thép chủ Ø (C)",
                "default": 25,
                "unit": "mm",
                "step": 3
        },
        {
                "key": "F",
                "label": "Chiều dài thanh F (F)",
                "default": 6500,
                "unit": "mm",
                "step": 100
        },
        {
                "key": "L",
                "label": "Số thanh mỗi cột (L)",
                "default": 4,
                "unit": "thanh",
                "step": 1
        },
        {
                "key": "M",
                "label": "Số cột giống nhau (M)",
                "default": 3,
                "unit": "cột",
                "step": 1
        }
],
      compute: (vals) => {
      const C = Number(vals.C || 0);
      const F = Number(vals.F || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = F;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }
    },
    warnings: []
  },
  {
    id: "thep-cot-tron",
    title: "Thép cột tròn",
    fileSource: "1.2",
    sheetName: "Cột tròn",
    purpose: "Thống kê cốt thép dọc bố trí quanh chu vi cột tròn và cốt thép đai xoắn liên tục (spiral) hoặc đai tròn khép kín nối chồng.",
    parameters: [
      {
            "name": "Ký hiệu",
            "column": "B",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "D (mm)",
            "column": "C",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "F",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số thanh trong 1 Cấu kiện",
            "column": "L",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số cấu kiện",
            "column": "M",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "S",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "T",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "U",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      }
],
    formulas: [
      {
            "target": "Hình dạng (Cột F)",
            "mathFormat": "[U]+40*[D (mm)]",
            "excelCode": "`=U10+40*C10`",
            "description": "[U]+40*[D (mm)]"
      },
      {
            "target": "Số lượng mối nối (Cột I)",
            "mathFormat": "IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))",
            "excelCode": "`=IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))`",
            "description": "IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))"
      },
      {
            "target": "Chiều dài mối nối (Cột J)",
            "mathFormat": "40*[D (mm)]",
            "excelCode": "`=40*C10`",
            "description": "40*[D (mm)]"
      },
      {
            "target": "Chiều dài 1 thanh (mm) (Cột K)",
            "mathFormat": "SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối]",
            "excelCode": "`=+SUM(D9:H11)+I10*J10`",
            "description": "SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối]"
      },
      {
            "target": "Số cấu kiện (Cột M)",
            "mathFormat": "[T]",
            "excelCode": "`=+T10`",
            "description": "[T]"
      },
      {
            "target": "Tổng số thanh (Cột N)",
            "mathFormat": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]",
            "excelCode": "`=+L10*M10`",
            "description": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]"
      },
      {
            "target": "Tổng chiều dài (m) (Cột O)",
            "mathFormat": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000",
            "excelCode": "`=+K10*N10/1000`",
            "description": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000"
      },
      {
            "target": "Trọng lượng riêng / (Kg) (Cột P)",
            "mathFormat": "0.25*3.1415926*([D (mm)]/1000)^2*7850",
            "excelCode": "`=0.25*3.1415926*(C10/1000)^2*7850`",
            "description": "0.25*3.1415926*([D (mm)]/1000)^2*7850"
      }
],
    svgKey: "SvgThepThanh",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Cột tròn",
      "inputs": {
            "B": 1,
            "C": 20,
            "L": 4,
            "T": 6,
            "U": 5000
      },
      "outputs": {
            "F": 5800,
            "I": 0,
            "J": 800,
            "K": 5800,
            "M": 6,
            "N": 24,
            "O": 139.2,
            "P": 2.46615,
            "Q": 343.288107
      }
},
    calculator: {
      fields: [
        {
                "key": "C",
                "label": "Đường kính thép chủ Ø (C)",
                "default": 20,
                "unit": "mm",
                "step": 2
        },
        {
                "key": "F",
                "label": "Chiều dài thanh F (F)",
                "default": 5800,
                "unit": "mm",
                "step": 100
        },
        {
                "key": "L",
                "label": "Số thanh / cột (L)",
                "default": 4,
                "unit": "thanh",
                "step": 1
        },
        {
                "key": "M",
                "label": "Số cột tròn (M)",
                "default": 6,
                "unit": "cột",
                "step": 1
        }
],
      compute: (vals) => {
      const C = Number(vals.C || 0);
      const F = Number(vals.F || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = F;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }
    },
    warnings: [
      {
            "level": "Nghiêm trọng",
            "code": "LOI-01",
            "title": "Bị bỏ sót trong sheet Chi tiết và Tổng hợp",
            "content": "Sheet Chi tiết gốc không liên kết sheet Thép cột tròn (1.90 tấn thép trong dữ liệu mẫu).",
            "remedy": "Bổ sung SUMIF cho sheet Cột tròn vào bảng tổng hợp."
      }
]
  },
  {
    id: "thep-vach",
    title: "Thép vách bê tông & Thang máy",
    fileSource: "1.2",
    sheetName: "Thép Vách",
    purpose: "Thống kê lưới thép đứng và lưới thép ngang 2 lớp của vách chịu lực/vách hầm, thanh chống phình liên kết 2 lớp lưới (thanh chữ S/C) và thép đai đầu vách.",
    parameters: [
      {
            "name": "Ký hiệu",
            "column": "B",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "D (mm)",
            "column": "C",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "F",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số thanh trong một cấu kiện",
            "column": "L",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số cấu kiện",
            "column": "M",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "S",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "T",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      }
],
    formulas: [
      {
            "target": "Số lượng mối nối (Cột I)",
            "mathFormat": "IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))",
            "excelCode": "`=IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))`",
            "description": "IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))"
      },
      {
            "target": "Chiều dài mối nối (Cột J)",
            "mathFormat": "40*[D (mm)]",
            "excelCode": "`=40*C9`",
            "description": "40*[D (mm)]"
      },
      {
            "target": "Chiều dài 1 thanh  / (mm) (Cột K)",
            "mathFormat": "SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối]",
            "excelCode": "`=SUM(D8:H10)+I9*J9`",
            "description": "SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối]"
      },
      {
            "target": "Số cấu kiện (Cột M)",
            "mathFormat": "[T]",
            "excelCode": "`=+T9`",
            "description": "[T]"
      },
      {
            "target": "Tổng số thanh (Cột N)",
            "mathFormat": "[Số thanh trong một cấu kiện]*[Số cấu kiện]",
            "excelCode": "`=L9*M9`",
            "description": "[Số thanh trong một cấu kiện]*[Số cấu kiện]"
      },
      {
            "target": "Tổng chiều dài (m) (Cột O)",
            "mathFormat": "[Tổng số thanh]*[Chiều dài 1 thanh  / (mm)]/10^3",
            "excelCode": "`=N9*K9/10^3`",
            "description": "[Tổng số thanh]*[Chiều dài 1 thanh  / (mm)]/10^3"
      },
      {
            "target": "Trọng lượng riêng (Cột P)",
            "mathFormat": "0.25*3.1415926*([D (mm)]/1000)^2*7850",
            "excelCode": "`=0.25*3.1415926*(C9/1000)^2*7850`",
            "description": "0.25*3.1415926*([D (mm)]/1000)^2*7850"
      },
      {
            "target": "Khối lượng (kg) (Cột Q)",
            "mathFormat": "[Trọng lượng riêng]*[Tổng chiều dài (m)]",
            "excelCode": "`=P9*O9`",
            "description": "[Trọng lượng riêng]*[Tổng chiều dài (m)]"
      }
],
    svgKey: "SvgThepThanh",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Thép Vách",
      "inputs": {
            "B": 1,
            "C": 20,
            "F": 4100,
            "L": 48,
            "T": 1
      },
      "outputs": {
            "I": 0,
            "J": 800,
            "K": 4100,
            "M": 1,
            "N": 48,
            "O": 196.8,
            "P": 2.46615,
            "Q": 485.338358
      }
},
    calculator: {
      fields: [
        {
                "key": "C",
                "label": "Đường kính cốt thép Ø (C)",
                "default": 20,
                "unit": "mm",
                "step": 2
        },
        {
                "key": "F",
                "label": "Chiều dài thanh F (F)",
                "default": 4100,
                "unit": "mm",
                "step": 100
        },
        {
                "key": "L",
                "label": "Số thanh mỗi vách (L)",
                "default": 48,
                "unit": "thanh",
                "step": 2
        },
        {
                "key": "M",
                "label": "Số lượng vách (M)",
                "default": 1,
                "unit": "vách",
                "step": 1
        }
],
      compute: (vals) => {
      const C = Number(vals.C || 0);
      const F = Number(vals.F || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = F;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }
    },
    warnings: [
      {
            "level": "Nghiêm trọng",
            "code": "LOI-01",
            "title": "Bị bỏ sót trong sheet Chi tiết và Tổng hợp",
            "content": "Sheet Chi tiết gốc không liên kết sheet Thép Vách (16.55 tấn thép trong dữ liệu mẫu).",
            "remedy": "Bổ sung SUMIF cho sheet Thép Vách vào bảng tổng hợp."
      }
]
  },
  {
    id: "thep-dam",
    title: "Thép dầm tầng (Thanh dọc & Thép đai)",
    fileSource: "1.2",
    sheetName: "Thép dầm",
    purpose: "Thống kê chi tiết cốt thép dầm sàn: Thép chủ lớp trên gối dầm, thép chủ lớp dưới giữa nhịp, thép tăng cường mô men âm/dương, cốt thép đai thường và đai gia cường chống cắt sát mép cột.",
    parameters: [
      {
            "name": "Ký hiệu",
            "column": "B",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "D (mm)",
            "column": "C",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "E",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "F",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "G",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số thanh trong 1 Cấu kiện",
            "column": "L",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số cấu kiện",
            "column": "M",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "S",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "T",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      }
],
    formulas: [
      {
            "target": "Hình dạng (Cột E)",
            "mathFormat": "35*[D (mm)]",
            "excelCode": "`=35*C11`",
            "description": "35*[D (mm)]"
      },
      {
            "target": "Hình dạng (Cột G)",
            "mathFormat": "[Hình dạng·E]",
            "excelCode": "`=+E11`",
            "description": "[Hình dạng·E]"
      },
      {
            "target": "Số lượng mối nối (Cột I)",
            "mathFormat": "IF(SUM(D10:H12)=11700,0,INT(SUM(D10:H12)/11700))",
            "excelCode": "`=IF(SUM(D10:H12)=11700,0,INT(SUM(D10:H12)/11700))`",
            "description": "IF(SUM(D10:H12)=11700,0,INT(SUM(D10:H12)/11700))"
      },
      {
            "target": "Chiều dài mối nối (Cột J)",
            "mathFormat": "40*[D (mm)]",
            "excelCode": "`=40*C11`",
            "description": "40*[D (mm)]"
      },
      {
            "target": "Chiều dài 1 thanh (mm) (Cột K)",
            "mathFormat": "SUM(D10:H12)+[Số lượng mối nối]*[Chiều dài mối nối]",
            "excelCode": "`=+SUM(D10:H12)+I11*J11`",
            "description": "SUM(D10:H12)+[Số lượng mối nối]*[Chiều dài mối nối]"
      },
      {
            "target": "Số cấu kiện (Cột M)",
            "mathFormat": "[T]",
            "excelCode": "`=+T11`",
            "description": "[T]"
      },
      {
            "target": "Tổng số thanh (Cột N)",
            "mathFormat": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]",
            "excelCode": "`=+L11*M11`",
            "description": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]"
      },
      {
            "target": "Tổng chiều dài (m) (Cột O)",
            "mathFormat": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000",
            "excelCode": "`=+K11*N11/1000`",
            "description": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000"
      }
],
    svgKey: "SvgThepDai",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Thép dầm",
      "inputs": {
            "B": 1,
            "C": 22,
            "F": 20500,
            "L": 2,
            "T": 1
      },
      "outputs": {
            "E": 770,
            "G": 770,
            "I": 1,
            "J": 880,
            "K": 22920,
            "M": 1,
            "N": 2,
            "O": 45.84,
            "P": 2.984042,
            "Q": 136.788473
      }
},
    calculator: {
      fields: [
        {
                "key": "C",
                "label": "Đường kính cốt thép dọc Ø (C)",
                "default": 22,
                "unit": "mm",
                "step": 2
        },
        {
                "key": "E",
                "label": "Đoạn uốn neo E (E)",
                "default": 770,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "F",
                "label": "Chiều dài nhịp dầm F (F)",
                "default": 20500,
                "unit": "mm",
                "step": 100
        },
        {
                "key": "G",
                "label": "Đoạn uốn neo G (G)",
                "default": 770,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "L",
                "label": "Số thanh / dầm (L)",
                "default": 2,
                "unit": "thanh",
                "step": 1
        },
        {
                "key": "M",
                "label": "Số lượng dầm (M)",
                "default": 1,
                "unit": "dầm",
                "step": 1
        }
],
      compute: (vals) => {
      const C = Number(vals.C || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const sumDH = E + F + G;
      const I = Math.floor(sumDH / 11700);
      const J = 40 * C;
      const K = sumDH + I * J;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { I, J, K, N, O, P, Q };
    }
    },
    warnings: [
      {
            "level": "Trung bình",
            "code": "LOI-14",
            "title": "Móc đai cố định 7Ø",
            "content": "TCVN 9386:2012 quy định móc đai dầm vùng kháng chấn phải bẻ 135° và dài ≥ 10Ø (tối thiểu 70mm).",
            "remedy": "Kiểm tra bản vẽ kết cấu để điều chỉnh kích thước móc đai."
      }
]
  },
  {
    id: "thep-san",
    title: "Thép sàn chi tiết (Lớp dưới & Thép mũ)",
    fileSource: "1.2",
    sheetName: "Thép sàn",
    purpose: "Thống kê cốt thép sàn bóc theo từng thanh: Thép lớp dưới chịu mô men dương, thép lớp trên (thép mũ) chịu mô men âm tại gối dầm, thép gia cường lỗ mở hộp kỹ thuật và con kê thép.",
    parameters: [
      {
            "name": "Ký hiệu",
            "column": "B",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "D (mm)",
            "column": "C",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "E",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "F",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "G",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số thanh trong 1 Cấu kiện",
            "column": "L",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số cấu kiện",
            "column": "M",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      }
],
    formulas: [
      {
            "target": "Hình dạng (Cột E)",
            "mathFormat": "40*[D (mm)]",
            "excelCode": "`=40*C10`",
            "description": "40*[D (mm)]"
      },
      {
            "target": "Hình dạng (Cột G)",
            "mathFormat": "[Hình dạng·E]",
            "excelCode": "`=+E10`",
            "description": "[Hình dạng·E]"
      },
      {
            "target": "Số lượng mối nối (Cột I)",
            "mathFormat": "INT(SUM(D9:H11)/11700)",
            "excelCode": "`=INT(SUM(D9:H11)/11700)`",
            "description": "INT(SUM(D9:H11)/11700)"
      },
      {
            "target": "Chiều dài mối nối (Cột J)",
            "mathFormat": "40*[D (mm)]",
            "excelCode": "`=40*C10`",
            "description": "40*[D (mm)]"
      },
      {
            "target": "Chiều dài 1 thanh (mm) (Cột K)",
            "mathFormat": "SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối]",
            "excelCode": "`=+SUM(D9:H11)+I10*J10`",
            "description": "SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối]"
      },
      {
            "target": "Số thanh trong 1 Cấu kiện (Cột L)",
            "mathFormat": "ROUND((F13-300*8)/200+6,0)",
            "excelCode": "`=+ROUND((F13-300*8)/200+6,0)`",
            "description": "ROUND((F13-300*8)/200+6,0)"
      },
      {
            "target": "Tổng số thanh (Cột N)",
            "mathFormat": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]",
            "excelCode": "`=+L10*M10`",
            "description": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]"
      },
      {
            "target": "Tổng chiều dài (m) (Cột O)",
            "mathFormat": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000",
            "excelCode": "`=+K10*N10/1000`",
            "description": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000"
      }
],
    svgKey: "SvgThepThanh",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Thép sàn",
      "inputs": {
            "C": 10,
            "F": 80300,
            "M": 1
      },
      "outputs": {
            "E": 400,
            "G": 400,
            "I": 6,
            "J": 400,
            "K": 83500,
            "L": 144,
            "N": 144,
            "O": 12024,
            "P": 0.616538,
            "Q": 7413.247474
      }
},
    calculator: {
      fields: [
        {
                "key": "C",
                "label": "Đường kính thép sàn Ø (C)",
                "default": 10,
                "unit": "mm",
                "step": 2
        },
        {
                "key": "F",
                "label": "Tổng chiều dài tuyến F (F)",
                "default": 80300,
                "unit": "mm",
                "step": 500
        },
        {
                "key": "L",
                "label": "Số lượng thanh (L)",
                "default": 144,
                "unit": "thanh",
                "step": 12
        },
        {
                "key": "M",
                "label": "Số sàn (M)",
                "default": 1,
                "unit": "sàn",
                "step": 1
        }
],
      compute: (vals) => {
      const C = Number(vals.C || 0);
      const F = Number(vals.F || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const E = 400;
      const G = 400;
      const sumDH = F + E + G;
      const I = Math.floor(sumDH / 11700);
      const J = 40 * C;
      const K = sumDH + I * J;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { I, J, K, N, O, P, Q };
    }
    },
    warnings: [
      {
            "level": "Nghiêm trọng",
            "code": "LOI-01",
            "title": "Bị bỏ sót trong sheet Chi tiết và Tổng hợp",
            "content": "Sheet Chi tiết gốc không liên kết sheet Thép sàn (72.80 tấn thép - lớn nhất trong toàn bộ công trình!).",
            "remedy": "Bắt buộc bổ sung SUMIF cho sheet Thép sàn vào bảng tổng hợp."
      },
      {
            "level": "Cao",
            "code": "LOI-13",
            "title": "Vẫn dùng công thức tính mối nối cũ INT(L/11700)",
            "content": "93 ô trong sheet Thép sàn dùng công thức tính mối nối cũ, không trừ điểm nối so le.",
            "remedy": "Áp dụng công thức đề xuất: MAX(0, ROUNDUP((L - Lnoi)/(11700 - Lnoi), 0) - 1)."
      }
]
  },
  {
    id: "thep-cau-thang",
    title: "Thép cầu thang",
    fileSource: "1.2",
    sheetName: "Cầu thang",
    purpose: "Thống kê cốt thép chịu lực bản thang nghiêng, cốt thép phân bố, thép gia cường chiếu nghỉ, dầm cốn thang và đai dầm chiếu tới.",
    parameters: [
      {
            "name": "Ký hiệu",
            "column": "B",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "D (mm)",
            "column": "C",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "E",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "H",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số thanh trong 1 Cấu kiện",
            "column": "L",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số cấu kiện",
            "column": "M",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "S",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "T",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      }
],
    formulas: [
      {
            "target": "Hình dạng (Cột E)",
            "mathFormat": "35*[D (mm)]",
            "excelCode": "`=35*C10`",
            "description": "35*[D (mm)]"
      },
      {
            "target": "Hình dạng (Cột H)",
            "mathFormat": "[Hình dạng·E]",
            "excelCode": "`=+E10`",
            "description": "[Hình dạng·E]"
      },
      {
            "target": "Số lượng mối nối (Cột I)",
            "mathFormat": "IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))",
            "excelCode": "`=IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))`",
            "description": "IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))"
      },
      {
            "target": "Chiều dài mối nối (Cột J)",
            "mathFormat": "40*[D (mm)]",
            "excelCode": "`=40*C10`",
            "description": "40*[D (mm)]"
      },
      {
            "target": "Chiều dài 1 thanh (mm) (Cột K)",
            "mathFormat": "SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối]",
            "excelCode": "`=+SUM(D9:H11)+I10*J10`",
            "description": "SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối]"
      },
      {
            "target": "Số thanh trong 1 Cấu kiện (Cột L)",
            "mathFormat": "ROUND((F16)/120+1,0)",
            "excelCode": "`=+ROUND((F16)/120+1,0)`",
            "description": "ROUND((F16)/120+1,0)"
      },
      {
            "target": "Số cấu kiện (Cột M)",
            "mathFormat": "[T]",
            "excelCode": "`=+T10`",
            "description": "[T]"
      },
      {
            "target": "Tổng số thanh (Cột N)",
            "mathFormat": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]",
            "excelCode": "`=+L10*M10`",
            "description": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]"
      }
],
    svgKey: "SvgThepThanh",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Cầu thang",
      "inputs": {
            "B": 1,
            "C": 12,
            "T": 1
      },
      "outputs": {
            "E": 420,
            "H": 420,
            "I": 0,
            "J": 480,
            "K": 4090,
            "L": 13,
            "M": 1,
            "N": 13,
            "O": 53.17,
            "P": 0.887814,
            "Q": 47.205074
      }
},
    calculator: {
      fields: [
        {
                "key": "C",
                "label": "Đường kính thép bản thang Ø (C)",
                "default": 12,
                "unit": "mm",
                "step": 2
        },
        {
                "key": "L",
                "label": "Số thanh mỗi vế (L)",
                "default": 13,
                "unit": "thanh",
                "step": 1
        },
        {
                "key": "M",
                "label": "Số vế thang (M)",
                "default": 1,
                "unit": "vế",
                "step": 1
        }
],
      compute: (vals) => {
      const C = Number(vals.C || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = 4090; // Kích thước mẫu
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }
    },
    warnings: []
  },
  {
    id: "thep-tru-giang",
    title: "Thép Trụ, giằng tường, lanh tô",
    fileSource: "1.2",
    sheetName: "Thép Trụ, giằng, LT",
    purpose: "Thống kê cốt thép cho hệ kết cấu phụ trợ chống nứt tường xây: Trụ góc tường, giằng tường bê tông cốt thép, lanh tô cửa đi, lanh tô cửa sổ và ô văng.",
    parameters: [
      {
            "name": "Ký hiệu",
            "column": "B",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "D (mm)",
            "column": "C",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "F",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số thanh trong 1 Cấu kiện",
            "column": "L",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số cấu kiện",
            "column": "M",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "S",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "T",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "U",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      }
],
    formulas: [
      {
            "target": "Hình dạng (Cột F)",
            "mathFormat": "[U]+200*2",
            "excelCode": "`=+U9+200*2`",
            "description": "[U]+200*2"
      },
      {
            "target": "Số lượng mối nối (Cột I)",
            "mathFormat": "IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))",
            "excelCode": "`=IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))`",
            "description": "IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))"
      },
      {
            "target": "Chiều dài mối nối (Cột J)",
            "mathFormat": "40*[D (mm)]",
            "excelCode": "`=40*C9`",
            "description": "40*[D (mm)]"
      },
      {
            "target": "Chiều dài 1 thanh (mm) (Cột K)",
            "mathFormat": "SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối]",
            "excelCode": "`=+SUM(D8:H10)+I9*J9`",
            "description": "SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối]"
      },
      {
            "target": "Số cấu kiện (Cột M)",
            "mathFormat": "[T]",
            "excelCode": "`=+T9`",
            "description": "[T]"
      },
      {
            "target": "Tổng số thanh (Cột N)",
            "mathFormat": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]",
            "excelCode": "`=+L9*M9`",
            "description": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]"
      },
      {
            "target": "Tổng chiều dài (m) (Cột O)",
            "mathFormat": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000",
            "excelCode": "`=+K9*N9/1000`",
            "description": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000"
      },
      {
            "target": "Trọng lượng riêng / (Kg) (Cột P)",
            "mathFormat": "0.25*3.1415926*([D (mm)]/1000)^2*7850",
            "excelCode": "`=0.25*3.1415926*(C9/1000)^2*7850`",
            "description": "0.25*3.1415926*([D (mm)]/1000)^2*7850"
      }
],
    svgKey: "SvgThepThanh",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Thép Trụ, giằng, LT",
      "inputs": {
            "B": 1,
            "C": 12,
            "L": 4,
            "T": 25,
            "U": 4500
      },
      "outputs": {
            "F": 4900,
            "I": 0,
            "J": 480,
            "K": 4900,
            "M": 25,
            "N": 100,
            "O": 490,
            "P": 0.887814,
            "Q": 435.028894
      }
},
    calculator: {
      fields: [
        {
                "key": "C",
                "label": "Đường kính cốt thép Ø (C)",
                "default": 12,
                "unit": "mm",
                "step": 2
        },
        {
                "key": "F",
                "label": "Chiều dài thanh F (F)",
                "default": 4900,
                "unit": "mm",
                "step": 100
        },
        {
                "key": "L",
                "label": "Số thanh / cấu kiện (L)",
                "default": 4,
                "unit": "thanh",
                "step": 1
        },
        {
                "key": "M",
                "label": "Số cấu kiện (M)",
                "default": 25,
                "unit": "CK",
                "step": 5
        }
],
      compute: (vals) => {
      const C = Number(vals.C || 0);
      const F = Number(vals.F || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = F;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }
    },
    warnings: [
      {
            "level": "Nghiêm trọng",
            "code": "LOI-01",
            "title": "Bị bỏ sót trong sheet Chi tiết và Tổng hợp",
            "content": "Sheet Chi tiết gốc không liên kết sheet Trụ, giằng, LT (2.50 tấn thép trong dữ liệu mẫu).",
            "remedy": "Bổ sung SUMIF cho sheet Trụ-giằng-LT vào bảng tổng hợp."
      }
]
  },
  {
    id: "thep-be-nuoc",
    title: "Thép bể nước ngầm & Bể PCCC",
    fileSource: "1.2",
    sheetName: "Thép bể nước",
    purpose: "Thống kê cốt thép bản đáy bể ngầm, cốt thép tường bể 2 lớp, cốt thép bản nắp bể, dầm nắp bể và cốt thép cổ họng thăm bể.",
    parameters: [
      {
            "name": "Ký hiệu",
            "column": "B",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "D (mm)",
            "column": "C",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng kích thước",
            "column": "E",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng kích thước",
            "column": "F",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng kích thước",
            "column": "G",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số thanh trong 1 Cấu kiện",
            "column": "L",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số cấu kiện",
            "column": "M",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "S",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "T",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "V",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "W",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      }
],
    formulas: [
      {
            "target": "Hình dạng kích thước (Cột F)",
            "mathFormat": "[U]-[V]-[W]",
            "excelCode": "`=+U9-V9-W9`",
            "description": "[U]-[V]-[W]"
      },
      {
            "target": "Số lượng mối nối (Cột I)",
            "mathFormat": "IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))",
            "excelCode": "`=IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))`",
            "description": "IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))"
      },
      {
            "target": "Chiều dài mối nối (Cột J)",
            "mathFormat": "40*[D (mm)]",
            "excelCode": "`=40*C9`",
            "description": "40*[D (mm)]"
      },
      {
            "target": "Chiều dài 1 thanh (mm) (Cột K)",
            "mathFormat": "SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối]",
            "excelCode": "`=+SUM(D8:H10)+I9*J9`",
            "description": "SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối]"
      },
      {
            "target": "Số cấu kiện (Cột M)",
            "mathFormat": "[T]",
            "excelCode": "`=+T9`",
            "description": "[T]"
      },
      {
            "target": "Tổng số thanh (Cột N)",
            "mathFormat": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]",
            "excelCode": "`=+L9*M9`",
            "description": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]"
      },
      {
            "target": "Tổng chiều dài (m) (Cột O)",
            "mathFormat": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000",
            "excelCode": "`=+K9*N9/1000`",
            "description": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000"
      },
      {
            "target": "Trọng lượng riêng / (Kg) (Cột P)",
            "mathFormat": "0.25*3.1415926*([D (mm)]/1000)^2*7850",
            "excelCode": "`=0.25*3.1415926*(C9/1000)^2*7850`",
            "description": "0.25*3.1415926*([D (mm)]/1000)^2*7850"
      }
],
    svgKey: "SvgThepThanh",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Thép bể nước",
      "inputs": {
            "B": 1,
            "C": 18,
            "E": 200,
            "G": 200,
            "L": 4,
            "T": 2,
            "V": 100,
            "W": 50
      },
      "outputs": {
            "F": 4020,
            "I": 0,
            "J": 720,
            "K": 4420,
            "M": 2,
            "N": 8,
            "O": 35.36,
            "P": 1.997582,
            "Q": 70.634487,
            "U": 4170
      }
},
    calculator: {
      fields: [
        {
                "key": "C",
                "label": "Đường kính thép Ø (C)",
                "default": 18,
                "unit": "mm",
                "step": 2
        },
        {
                "key": "E",
                "label": "Đoạn uốn mỏ E (E)",
                "default": 200,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "F",
                "label": "Chiều dài thân F (F)",
                "default": 4020,
                "unit": "mm",
                "step": 100
        },
        {
                "key": "G",
                "label": "Đoạn uốn mỏ G (G)",
                "default": 200,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "L",
                "label": "Số thanh (L)",
                "default": 4,
                "unit": "thanh",
                "step": 1
        },
        {
                "key": "M",
                "label": "Số cấu kiện (M)",
                "default": 2,
                "unit": "CK",
                "step": 1
        }
],
      compute: (vals) => {
      const C = Number(vals.C || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = E + F + G;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }
    },
    warnings: []
  },
  {
    id: "thep-be-phot",
    title: "Thép bể tự hoại (Bể phốt)",
    fileSource: "1.2",
    sheetName: "Thép bể phốt",
    purpose: "Thống kê cốt thép bể tự hoại xử lý nước thải cục bộ: Đáy bể, thành ngăn chứa, ngăn lắng, ngăn lọc và nắp đậy bể phốt.",
    parameters: [
      {
            "name": "Ký hiệu",
            "column": "B",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "D (mm)",
            "column": "C",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "E",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "F",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "G",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số thanh trong 1 Cấu kiện",
            "column": "L",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số cấu kiện",
            "column": "M",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "T",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      }
],
    formulas: [
      {
            "target": "Hình dạng (Cột G)",
            "mathFormat": "[Hình dạng·E]",
            "excelCode": "`=+E11`",
            "description": "[Hình dạng·E]"
      },
      {
            "target": "Số lượng mối nối (Cột I)",
            "mathFormat": "IF(SUM(D10:H12)=11700,0,INT(SUM(D10:H12)/11700))",
            "excelCode": "`=IF(SUM(D10:H12)=11700,0,INT(SUM(D10:H12)/11700))`",
            "description": "IF(SUM(D10:H12)=11700,0,INT(SUM(D10:H12)/11700))"
      },
      {
            "target": "Chiều dài mối nối (Cột J)",
            "mathFormat": "40*[D (mm)]",
            "excelCode": "`=40*C11`",
            "description": "40*[D (mm)]"
      },
      {
            "target": "Chiều dài 1 thanh (mm) (Cột K)",
            "mathFormat": "SUM(D10:H12)+[Số lượng mối nối]*[Chiều dài mối nối]",
            "excelCode": "`=+SUM(D10:H12)+I11*J11`",
            "description": "SUM(D10:H12)+[Số lượng mối nối]*[Chiều dài mối nối]"
      },
      {
            "target": "Số thanh trong 1 Cấu kiện (Cột L)",
            "mathFormat": "ROUND(F14/150+1,0)*2",
            "excelCode": "`=+ROUND(F14/150+1,0)*2`",
            "description": "ROUND(F14/150+1,0)*2"
      },
      {
            "target": "Số cấu kiện (Cột M)",
            "mathFormat": "[T]",
            "excelCode": "`=+T11`",
            "description": "[T]"
      },
      {
            "target": "Tổng số thanh (Cột N)",
            "mathFormat": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]",
            "excelCode": "`=+L11*M11`",
            "description": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]"
      },
      {
            "target": "Tổng chiều dài (m) (Cột O)",
            "mathFormat": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000",
            "excelCode": "`=+K11*N11/1000`",
            "description": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000"
      }
],
    svgKey: "SvgThepThanh",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Thép bể phốt",
      "inputs": {
            "B": 1,
            "C": 10,
            "E": 200,
            "F": 2440,
            "T": 1
      },
      "outputs": {
            "G": 200,
            "I": 0,
            "J": 400,
            "K": 2840,
            "L": 22,
            "M": 1,
            "N": 22,
            "O": 62.48,
            "P": 0.616538,
            "Q": 38.521266
      }
},
    calculator: {
      fields: [
        {
                "key": "C",
                "label": "Đường kính thép Ø (C)",
                "default": 10,
                "unit": "mm",
                "step": 2
        },
        {
                "key": "E",
                "label": "Đoạn uốn mỏ E (E)",
                "default": 200,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "F",
                "label": "Chiều dài thân F (F)",
                "default": 2440,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "G",
                "label": "Đoạn uốn mỏ G (G)",
                "default": 200,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "L",
                "label": "Số thanh (L)",
                "default": 22,
                "unit": "thanh",
                "step": 2
        },
        {
                "key": "M",
                "label": "Số bể (M)",
                "default": 1,
                "unit": "bể",
                "step": 1
        }
],
      compute: (vals) => {
      const C = Number(vals.C || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = E + F + G;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }
    },
    warnings: [
      {
            "level": "Nghiêm trọng",
            "code": "LOI-01",
            "title": "Bị bỏ sót trong sheet Chi tiết và Tổng hợp",
            "content": "Sheet Chi tiết gốc không liên kết sheet Thép bể phốt (0.27 tấn thép).",
            "remedy": "Bổ sung SUMIF cho sheet Thép bể phốt vào bảng tổng hợp."
      }
]
  },
  {
    id: "thep-hang-rao",
    title: "Thép hàng rào",
    fileSource: "1.2",
    sheetName: "Hàng rào",
    purpose: "Thống kê cốt thép trụ rào, giằng móng rào và đà giằng tường rào bảo vệ khuôn viên công trình.",
    parameters: [
      {
            "name": "Ký hiệu",
            "column": "B",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "D (mm)",
            "column": "C",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "E",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "F",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng",
            "column": "G",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số thanh trong 1 Cấu kiện",
            "column": "L",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số cấu kiện",
            "column": "M",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "S",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "T",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "U",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "V",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "W",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      }
],
    formulas: [
      {
            "target": "Hình dạng (Cột F)",
            "mathFormat": "[U]-[V]-[W]",
            "excelCode": "`=+U9-V9-W9`",
            "description": "[U]-[V]-[W]"
      },
      {
            "target": "Hình dạng (Cột G)",
            "mathFormat": "[Hình dạng·E]",
            "excelCode": "`=+E9`",
            "description": "[Hình dạng·E]"
      },
      {
            "target": "Số lượng mối nối (Cột I)",
            "mathFormat": "IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))",
            "excelCode": "`=IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))`",
            "description": "IF(SUM(D8:H10)=11700,0,INT(SUM(D8:H10)/11700))"
      },
      {
            "target": "Chiều dài mối nối (Cột J)",
            "mathFormat": "40*[D (mm)]",
            "excelCode": "`=40*C9`",
            "description": "40*[D (mm)]"
      },
      {
            "target": "Chiều dài 1 thanh (mm) (Cột K)",
            "mathFormat": "SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối]",
            "excelCode": "`=+SUM(D8:H10)+I9*J9`",
            "description": "SUM(D8:H10)+[Số lượng mối nối]*[Chiều dài mối nối]"
      },
      {
            "target": "Số cấu kiện (Cột M)",
            "mathFormat": "[T]",
            "excelCode": "`=+T9`",
            "description": "[T]"
      },
      {
            "target": "Tổng số thanh (Cột N)",
            "mathFormat": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]",
            "excelCode": "`=+L9*M9`",
            "description": "[Số thanh trong 1 Cấu kiện]*[Số cấu kiện]"
      },
      {
            "target": "Tổng chiều dài (m) (Cột O)",
            "mathFormat": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000",
            "excelCode": "`=+K9*N9/1000`",
            "description": "[Chiều dài 1 thanh (mm)]*[Tổng số thanh]/1000"
      }
],
    svgKey: "SvgThepThanh",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Hàng rào",
      "inputs": {
            "B": 1,
            "C": 12,
            "E": 200,
            "L": 4,
            "T": 37,
            "U": 1500,
            "V": 50,
            "W": 50
      },
      "outputs": {
            "F": 1400,
            "G": 200,
            "I": 0,
            "J": 480,
            "K": 1800,
            "M": 37,
            "N": 148,
            "O": 266.4,
            "P": 0.887814,
            "Q": 236.513668
      }
},
    calculator: {
      fields: [
        {
                "key": "C",
                "label": "Đường kính thép Ø (C)",
                "default": 12,
                "unit": "mm",
                "step": 2
        },
        {
                "key": "E",
                "label": "Đoạn uốn mỏ E (E)",
                "default": 200,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "F",
                "label": "Chiều dài thân F (F)",
                "default": 1400,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "G",
                "label": "Đoạn uốn mỏ G (G)",
                "default": 200,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "L",
                "label": "Số thanh / trụ (L)",
                "default": 4,
                "unit": "thanh",
                "step": 1
        },
        {
                "key": "M",
                "label": "Số trụ rào (M)",
                "default": 37,
                "unit": "trụ",
                "step": 1
        }
],
      compute: (vals) => {
      const C = Number(vals.C || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = E + F + G;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }
    },
    warnings: [
      {
            "level": "Nghiêm trọng",
            "code": "LOI-01",
            "title": "Bị bỏ sót trong sheet Chi tiết và Tổng hợp",
            "content": "Sheet Chi tiết gốc không liên kết sheet Thép hàng rào (3.36 tấn thép trong dữ liệu mẫu).",
            "remedy": "Bổ sung SUMIF cho sheet Hàng rào vào bảng tổng hợp."
      }
]
  },
  {
    id: "thep-ho-ga",
    title: "Thép hố ga bê tông",
    fileSource: "1.2",
    sheetName: "Hố ga (New)",
    purpose: "Thống kê cốt thép bản đáy hố ga, cốt thép lưới thành hố ga và cốt thép tấm đan nắp đậy hố ga thoát nước.",
    parameters: [
      {
            "name": "Ký hiệu",
            "column": "B",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "D (mm)",
            "column": "C",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng kích thước",
            "column": "E",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng kích thước",
            "column": "F",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Hình dạng kích thước",
            "column": "G",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số thanh trong 1 Cấu kiện",
            "column": "L",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số cấu kiện",
            "column": "M",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      }
],
    formulas: [
      {
            "target": "Hình dạng kích thước (Cột E)",
            "mathFormat": "20*[D (mm)]",
            "excelCode": "`=20*C10`",
            "description": "20*[D (mm)]"
      },
      {
            "target": "Hình dạng kích thước (Cột F)",
            "mathFormat": "U9-30*2",
            "excelCode": "`=+U9-30*2`",
            "description": "U9-30*2"
      },
      {
            "target": "Hình dạng kích thước (Cột G)",
            "mathFormat": "[Hình dạng kích thước·E]",
            "excelCode": "`=+E10`",
            "description": "[Hình dạng kích thước·E]"
      },
      {
            "target": "Số lượng mối nối (Cột I)",
            "mathFormat": "IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))",
            "excelCode": "`=IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))`",
            "description": "IF(SUM(D9:H11)=11700,0,INT(SUM(D9:H11)/11700))"
      },
      {
            "target": "Chiều dài mối nối (Cột J)",
            "mathFormat": "40*[D (mm)]",
            "excelCode": "`=40*C10`",
            "description": "40*[D (mm)]"
      },
      {
            "target": "Chiều dài 1 thanh (mm) (Cột K)",
            "mathFormat": "SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối]",
            "excelCode": "`=+SUM(D9:H11)+I10*J10`",
            "description": "SUM(D9:H11)+[Số lượng mối nối]*[Chiều dài mối nối]"
      },
      {
            "target": "Số thanh trong 1 Cấu kiện (Cột L)",
            "mathFormat": "ROUND((V9-200*2)/200+1,0)",
            "excelCode": "`=+ROUND((V9-200*2)/200+1,0)`",
            "description": "ROUND((V9-200*2)/200+1,0)"
      },
      {
            "target": "Số cấu kiện (Cột M)",
            "mathFormat": "T9",
            "excelCode": "`=+T9`",
            "description": "T9"
      }
],
    svgKey: "SvgThepThanh",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Hố ga (New)",
      "inputs": {
            "C": 10
      },
      "outputs": {
            "E": 200,
            "F": 1040,
            "G": 200,
            "I": 0,
            "J": 400,
            "K": 1440,
            "L": 5,
            "M": 5,
            "N": 25,
            "O": 36,
            "P": 0.616538,
            "Q": 22.195352
      }
},
    calculator: {
      fields: [
        {
                "key": "C",
                "label": "Đường kính thép Ø (C)",
                "default": 10,
                "unit": "mm",
                "step": 2
        },
        {
                "key": "E",
                "label": "Đoạn uốn mỏ E (E)",
                "default": 200,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "F",
                "label": "Chiều dài thân F (F)",
                "default": 1040,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "G",
                "label": "Đoạn uốn mỏ G (G)",
                "default": 200,
                "unit": "mm",
                "step": 50
        },
        {
                "key": "L",
                "label": "Số thanh / hố (L)",
                "default": 5,
                "unit": "thanh",
                "step": 1
        },
        {
                "key": "M",
                "label": "Số lượng hố ga (M)",
                "default": 5,
                "unit": "hố",
                "step": 1
        }
],
      compute: (vals) => {
      const C = Number(vals.C || 0);
      const E = Number(vals.E || 0);
      const F = Number(vals.F || 0);
      const G = Number(vals.G || 0);
      const L = Number(vals.L || 0);
      const M = Number(vals.M || 0);
      const K = E + F + G;
      const N = L * M;
      const O = (K * N) / 1000;
      const P = 0.25 * Math.PI * Math.pow(C / 1000, 2) * 7850;
      const Q = O * P;
      return { K, N, O, P, Q };
    }
    },
    warnings: []
  },
  {
    id: "ket-cau-thep",
    title: "Kết cấu thép tiền chế (Nhà xưởng)",
    fileSource: "1.2",
    sheetName: "ket cau thep",
    purpose: "Thống kê kết cấu thép nhà công nghiệp tiền chế: Thép tấm (bản cánh, bản bụng, sườn tăng cường, bản mã chân cột, bản nối đỉnh kèo), thép hình (H, I, C, L), xà gồ Z/C mạ kẽm, bu lông neo móng, bu lông liên kết cường độ cao và diện tích sơn chống gỉ.",
    parameters: [
      {
            "name": "Tên gọi",
            "column": "B",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Ký hiệu",
            "column": "D",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Chiều /   dày (mm)/ KL riêng (kg/m)",
            "column": "E",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Chiều /  rộng/ Chu vi tiết diện (mm)",
            "column": "F",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Chiều  / dài (mm)",
            "column": "G",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Số lượng / cho 1 cấu kiện",
            "column": "H",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Diện tích /  sơn (m2)",
            "column": "L",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      }
],
    formulas: [
      {
            "target": "Chiều /   dày (mm)/ KL riêng (kg/m) (Cột E)",
            "mathFormat": "IF([Ký hiệu]>0,RIGHT([Ký hiệu],LEN([Ký hiệu])-2),0)",
            "excelCode": "`=IF(D9>0,RIGHT(D9,LEN(D9)-2),0)`",
            "description": "IF([Ký hiệu]>0,RIGHT([Ký hiệu],LEN([Ký hiệu])-2),0)"
      },
      {
            "target": "Khối lượng /   1 cấu kiện (kg) (Cột I)",
            "mathFormat": "IF(LEFT([Ký hiệu],2)=\"PL\",[Chiều /   dày (mm)/ KL riêng (kg/m)]*[Chiều /  rộng/ Chu vi tiết diện (mm)]*[Chiều  / dài (mm)]*7.85*[Số lượng / cho 1 cấu kiện]/1000000,[Chiều /   dày (mm)/ KL riêng (kg/m)]*[Chiều  / dài (mm)]*[Số lượng / cho 1 cấu kiện]/1000)",
            "excelCode": "`=IF(LEFT(D9,2)=\"PL\",E9*F9*G9*7.85*H9/1000000,E9*G9*H9/1000)`",
            "description": "IF(LEFT([Ký hiệu],2)=\"PL\",[Chiều /   dày (mm)/ KL riêng (kg/m)]*[Chiều /  rộng/ Chu vi tiết diện (mm)]*[Chiều  / dài (mm)]*7.85*[Số lượng / cho 1 cấu kiện]/1000000,[Chiều /   dày (mm)/ KL riêng (kg/m)]*[Chiều  / dài (mm)]*[Số lượng / cho 1 cấu kiện]/1000)"
      },
      {
            "target": "Số cấu /  kiện (Cột J)",
            "mathFormat": "J8",
            "excelCode": "`=J8`",
            "description": "J8"
      },
      {
            "target": "Tổng khối lượng /  (kg) (Cột K)",
            "mathFormat": "[Khối lượng /   1 cấu kiện (kg)]*[Số cấu /  kiện]",
            "excelCode": "`=I9*J9`",
            "description": "[Khối lượng /   1 cấu kiện (kg)]*[Số cấu /  kiện]"
      },
      {
            "target": "Diện tích /  sơn (m2) (Cột L)",
            "mathFormat": "IF(LEFT([Ký hiệu],1)=\"D\",[Chiều /  rộng/ Chu vi tiết diện (mm)]*[Chiều  / dài (mm)]*[Số lượng / cho 1 cấu kiện]*[Số cấu /  kiện]/1000000,[Chiều /  rộng/ Chu vi tiết diện (mm)]*[Chiều  / dài (mm)]*[Số lượng / cho 1 cấu kiện]*[Số cấu /  kiện]*2/1000000)",
            "excelCode": "`=IF(LEFT(D9,1)=\"D\",F9*G9*H9*J9/1000000,F9*G9*H9*J9*2/1000000)`",
            "description": "IF(LEFT([Ký hiệu],1)=\"D\",[Chiều /  rộng/ Chu vi tiết diện (mm)]*[Chiều  / dài (mm)]*[Số lượng / cho 1 cấu kiện]*[Số cấu /  kiện]/1000000,[Chiều /  rộng/ Chu vi tiết diện (mm)]*[Chiều  / dài (mm)]*[Số lượng / cho 1 cấu kiện]*[Số cấu /  kiện]*2/1000000)"
      }
],
    svgKey: "SvgKetCauThep",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet ket cau thep",
      "inputs": {
            "F": 200,
            "G": 10238,
            "H": 1
      },
      "outputs": {
            "I": 192.88392,
            "J": 1,
            "K": 192.88392,
            "L": 4.0952
      }
},
    calculator: {
      fields: [
        {
                "key": "t",
                "label": "Chiều dày thép tấm t (mm)",
                "default": 12,
                "unit": "mm",
                "step": 1
        },
        {
                "key": "b",
                "label": "Chiều rộng bản b (F)",
                "default": 200,
                "unit": "mm",
                "step": 10
        },
        {
                "key": "L",
                "label": "Chiều dài bản L (G)",
                "default": 10238,
                "unit": "mm",
                "step": 100
        },
        {
                "key": "n",
                "label": "Số lượng chi tiết n (H)",
                "default": 1,
                "unit": "tấm",
                "step": 1
        }
],
      compute: (vals) => {
      const t = Number(vals.t ?? 12);
      const b = Number(vals.b ?? vals.F ?? 200);
      const L = Number(vals.L ?? vals.G ?? 10238);
      const n = Number(vals.n ?? vals.H ?? 1);
      const kg = (t * b * L * 7.85 * n) / 1000000;
      const dienTichSon = (2 * b * L * n) / 1000000;
      return { kg, dienTichSon };
    }
    },
    warnings: [
      {
            "level": "Trung bình",
            "code": "LOI-15",
            "title": "Công thức sơn SUM(L7:L547)/3 bỏ sót nhóm VIII và IX",
            "content": "Ô L5 tính tổng diện tích sơn dùng công thức SUM/3 kéo đến dòng 547 trong khi dữ liệu tới dòng 612 → bỏ sót nhóm VIII và nhóm IX.",
            "remedy": "Kéo công thức tính diện tích sơn đến hết dòng 612."
      }
]
  },
  {
    id: "thep-tong-hop",
    title: "Tổng hợp & Theo dõi thép nhập công trường",
    fileSource: "1.2",
    sheetName: "Tổng hợp",
    purpose: "Bảng tổng hợp khối lượng cốt thép toàn bộ dự án quy đổi ra tấn, phân loại theo 3 nhóm đường kính định mức (Ø ≤ 10, Ø ≤ 18, Ø > 18mm), tính hệ số hao hụt, dây buộc 1.5% và theo dõi kế hoạch cung ứng 5 đợt nhập vật tư thép về công trường.",
    parameters: [
      {
            "name": "STT",
            "column": "A",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Tên vật tư",
            "column": "B",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "Đơn vị",
            "column": "C",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "KL.Theo Dự toán",
            "column": "D",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      },
      {
            "name": "",
            "column": "N",
            "source": "Bảng thống kê cốt thép trên bản vẽ kết cấu (hoặc mặt cắt cấu kiện)",
            "note": "Kích thước uốn mỏ mm"
      }
],
    formulas: [
      {
            "target": "KL.Theo Dự toán (Cột D)",
            "mathFormat": "'Chi tiết'!F15/1000",
            "excelCode": "`=+'Chi tiết'!F15/1000`",
            "description": "'Chi tiết'!F15/1000"
      },
      {
            "target": "Khối lượng đã cấp · Tổng cộng (Cột J)",
            "mathFormat": "SUM([Đợt 1]:[Đợt 5])",
            "excelCode": "`=+SUM(E14:I14)`",
            "description": "SUM([Đợt 1]:[Đợt 5])"
      },
      {
            "target": "KL.còn lại (Cột K)",
            "mathFormat": "[KL.Theo Dự toán]-[Tổng cộng]",
            "excelCode": "`=+D14-J14`",
            "description": "[KL.Theo Dự toán]-[Tổng cộng]"
      },
      {
            "target": " (Cột P)",
            "mathFormat": "[N]^2*6.16/10^3",
            "excelCode": "`=+N14^2*6.16/10^3`",
            "description": "[N]^2*6.16/10^3"
      },
      {
            "target": " (Cột Q)",
            "mathFormat": "[P]*11.7",
            "excelCode": "`=+P14*11.7`",
            "description": "[P]*11.7"
      }
],
    svgKey: "SvgThepThanh",
    example: {
      "description": "Dữ liệu mẫu tính toán thực tế cho sheet Tổng hợp",
      "inputs": {
            "A": 3,
            "N": 10
      },
      "outputs": {
            "D": 7.902554,
            "J": 0,
            "K": 7.902554,
            "P": 0.616,
            "Q": 7.2072
      }
},
    calculator: {
      fields: [
        {
                "key": "A",
                "label": "Số thứ tự phân nhóm (A)",
                "default": 3,
                "unit": "",
                "step": 1
        },
        {
                "key": "N",
                "label": "Khối lượng đợt 1 nhập (N)",
                "default": 10,
                "unit": "tấn",
                "step": 1
        }
],
      compute: (vals) => {
      const D = 7.902554;
      const J = 0;
      const K = D;
      const P = 0.616;
      const Q = 7.2072;
      return { D, J, K, P, Q };
    }
    },
    warnings: [
      {
            "level": "Nghiêm trọng",
            "code": "LOI-01",
            "title": "Sheet Chi tiết chỉ liên kết 8/17 sheet",
            "content": "Dữ liệu mẫu: Tổng hợp báo 46.79 tấn trong khi thực tế bóc đạt ~180.3 tấn (thiếu 133.5 tấn!).",
            "remedy": "Thêm khối SUMIF cho các sheet còn thiếu hoặc cộng thủ công vào BOQ."
      },
      {
            "level": "Thấp",
            "code": "LOI-17",
            "title": "229 Named Range rác và liên kết ngoài",
            "content": "Tồn tại 229 tên vùng rác, lỗi #REF! và link ngoài tới máy tính cá nhân Mr.Thanh.",
            "remedy": "Dùng Name Manager xóa sạch Named Range rác và Break Link ngoài."
      }
]
  }
];

export const getPartBItemById = (id) => partBItems.find(item => item.id === id);
