const fs = require('fs');
const path = require('path');

// Read files
const spec1 = fs.readFileSync(path.join(__dirname, '../spec/SPEC_1.1_khoi_luong.md'), 'utf8');
const spec2 = fs.readFileSync(path.join(__dirname, '../spec/SPEC_1.2_thep.md'), 'utf8');
const tc1 = JSON.parse(fs.readFileSync(path.join(__dirname, '../spec/testcases_1.1.json'), 'utf8'));
const tc2 = JSON.parse(fs.readFileSync(path.join(__dirname, '../spec/testcases_1.2.json'), 'utf8'));

// Helper to extract sheet sections
function extractSections(specContent) {
  const sections = specContent.split('## Sheet: ').slice(1);
  const map = {};
  for (const s of sections) {
    const lines = s.split('\n');
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
    map[sheetName] = { sheetName, rows, components };
  }
  return map;
}

const s1Map = extractSections(spec1);
const s2Map = extractSections(spec2);

console.log('Sections extracted.');
