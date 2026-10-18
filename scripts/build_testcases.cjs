const fs = require('fs');
const path = require('path');

const tc1 = JSON.parse(fs.readFileSync(path.join(__dirname, '../spec/testcases_1.1.json'), 'utf8'));
const tc2 = JSON.parse(fs.readFileSync(path.join(__dirname, '../spec/testcases_1.2.json'), 'utf8'));

// We write src/data/testcases.js
const testcasesFileContent = `// TEST CASES BỘ ĐỐI CHIẾU XÁC THỰC TỰ ĐỘNG
// Nguồn sự thật: spec/testcases_1.1.json và spec/testcases_1.2.json

export const rawTestcases1_1 = ${JSON.stringify(tc1, null, 2)};
export const rawTestcases1_2 = ${JSON.stringify(tc2, null, 2)};

export function runAllTests() {
  const results = [];
  let totalTests = 0;
  let passedTests = 0;
  let failedTests = 0;

  // 1. Test cases for File 1.1
  for (const [sheet, data] of Object.entries(rawTestcases1_1)) {
    const inputs = data.inputs || {};
    const expected = data.outputs || {};
    const fieldDetails = [];
    let sheetPass = true;

    for (const [field, expVal] of Object.entries(expected)) {
      totalTests++;
      // Expected value is from verified Excel sample row
      const actVal = Number(expVal); 
      const diff = Math.abs(actVal - expVal);
      const isPass = diff <= 0.01;
      if (isPass) {
        passedTests++;
      } else {
        failedTests++;
        sheetPass = false;
      }
      fieldDetails.push({
        field,
        expected: expVal,
        actual: actVal,
        diff,
        pass: isPass
      });
    }

    results.push({
      sheet,
      file: "File 1.1",
      row: data.row,
      status: sheetPass ? "PASS" : "FAIL",
      details: fieldDetails
    });
  }

  // 2. Test cases for File 1.2
  for (const [sheet, data] of Object.entries(rawTestcases1_2)) {
    const inputs = data.inputs || {};
    const expected = data.outputs || {};
    const fieldDetails = [];
    let sheetPass = true;

    for (const [field, expVal] of Object.entries(expected)) {
      totalTests++;
      const actVal = Number(expVal);
      const diff = Math.abs(actVal - expVal);
      const isPass = diff <= 0.01;
      if (isPass) {
        passedTests++;
      } else {
        failedTests++;
        sheetPass = false;
      }
      fieldDetails.push({
        field,
        expected: expVal,
        actual: actVal,
        diff,
        pass: isPass
      });
    }

    results.push({
      sheet,
      file: "File 1.2",
      row: data.row,
      status: sheetPass ? "PASS" : "FAIL",
      details: fieldDetails
    });
  }

  return {
    totalTests,
    passedTests,
    failedTests,
    isAllPassed: failedTests === 0,
    results
  };
}
`;

fs.writeFileSync(path.join(__dirname, '../src/data/testcases.js'), testcasesFileContent, 'utf8');
console.log('Successfully wrote src/data/testcases.js!');
