const fs = require('fs');
const path = require('path');

const spec1 = fs.readFileSync(path.join(__dirname, '../spec/SPEC_1.1_khoi_luong.md'), 'utf8');
const spec2 = fs.readFileSync(path.join(__dirname, '../spec/SPEC_1.2_thep.md'), 'utf8');
const tc1 = JSON.parse(fs.readFileSync(path.join(__dirname, '../spec/testcases_1.1.json'), 'utf8'));
const tc2 = JSON.parse(fs.readFileSync(path.join(__dirname, '../spec/testcases_1.2.json'), 'utf8'));

// Helper to parse spec table rows
function parseRows(sec) {
  const lines = sec.split('\n');
  const rows = [];
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
  }
  return rows;
}

console.log('Script helper loaded.');
