import { test, expect } from '@playwright/test';

const testCases = [
  {
    id: 'Neg_Fun_0002',
    description: 'Convert a medium daily conversation with a question',
    input: 'api heta koheehari yamudha? gedharata velaa iDHalaa matanam dhaen epa velaa inne anee.'
  }
];

for (const tc of testCases) {
  test(`${tc.id} - ${tc.description}`, async ({ page }) => {

    // 1. Go to the website
    await page.goto('https://www.swifttranslator.com/');

    // 2. Enter Singlish text
    await page.locator('textarea').first().fill(tc.input);

    // 3. Wait a bit for translation to appear
    await page.waitForTimeout(3000);

    // 4. Extract Sinhala output
    const sinhalaOutput = await page.evaluate(() => {
      const bodyText = document.body.innerText;
      return bodyText
        .split('\n')
        .filter(line => /[අ-ෆ]/.test(line))   // Sinhala Unicode range
        .filter(line => line.length > 5)       // Ignore tiny UI texts
        .join(' ')
        .trim();
    });

    // 5. Print result to console
    console.log('--------------------------------------');
    console.log('TEST CASE ID :', tc.id);
    console.log('DESCRIPTION  :', tc.description);
    console.log('Singlish Input :', tc.input);
    console.log('Sinhala Output :', sinhalaOutput);
    console.log('STATUS :', sinhalaOutput.length > 0 ? 'PASS' : 'FAIL');
    console.log('--------------------------------------');

    // 6. Assertion for Playwright test
    expect(sinhalaOutput.length).toBeGreaterThan(0);
  });
}
