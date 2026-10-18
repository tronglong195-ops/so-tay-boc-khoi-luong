const fs = require('fs');
const path = require('path');

// Read files
const spec1Content = fs.readFileSync(path.join(__dirname, '../spec/SPEC_1.1_khoi_luong.md'), 'utf8');
const spec2Content = fs.readFileSync(path.join(__dirname, '../spec/SPEC_1.2_thep.md'), 'utf8');
const tc1 = JSON.parse(fs.readFileSync(path.join(__dirname, '../spec/testcases_1.1.json'), 'utf8'));
const tc2 = JSON.parse(fs.readFileSync(path.join(__dirname, '../spec/testcases_1.2.json'), 'utf8'));

// Helper to parse sheets from spec markdown
function parseSpecMarkdown(content) {
  const sections = content.split('## Sheet: ').slice(1);
  const sheets = {};
  for (const sec of sections) {
    const lines = sec.split('\n');
    const sheetName = lines[0].trim();
    const rows = [];
    let components = '';
    for (const l of lines) {
      if (l.startsWith('|') && !l.includes('---') && !l.startsWith('| Cột ')) {
        const p = l.split('|').map(x => x.trim());
        if (p.length >= 7) {
          rows.push({
            col: p[1],
            name: p[2],
            unit: p[3],
            type: p[4],
            sample: p[5],
            formula: p[6],
            meaning: p[7] || ''
          });
        }
      }
      if (l.includes('**Các mục/cấu kiện có trong sheet')) {
        components = l.split('**Các mục/cấu kiện có trong sheet (cột B):**')[1]?.trim() || '';
      }
    }
    sheets[sheetName] = { sheetName, rows, components };
  }
  return sheets;
}

const parsed1 = parseSpecMarkdown(spec1Content);
const parsed2 = parseSpecMarkdown(spec2Content);

console.log('Parsed sheets 1.1:', Object.keys(parsed1).length);
console.log('Parsed sheets 1.2:', Object.keys(parsed2).length);
