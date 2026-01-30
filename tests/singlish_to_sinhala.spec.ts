import { test, expect } from '@playwright/test';

const testCases = [
  {
    id: 'Neg_Fun_0004',
    description: 'Singlish pragraph with mixed English words ',
    input: 'yaaluvo ekka inna eka nam life ekee best part ekak. loku plans naethi unath podi joke ekak, random trip ekak, late night chaet ekak aethi jiivithee sathutin inna. Exam stress, paudhgalika prashna, failures okkoma yaaluvo ekka share karadhdhi hithata podi relief ekak dhaenenavaa. yaaluvo ekka gevapu kaale share karapu stories, secrets, laughs, arguments pavaa kaalekata passe hoDHa memories venava. Ehema mathakath ekka thamayi jivithee thava thavath sundhara venne. '
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
