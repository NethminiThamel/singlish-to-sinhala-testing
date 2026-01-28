import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Simple medium daily conversation', async ({ page }) => {
  
  await page.goto('https://www.swifttranslator.com/');

  
  const beforeText = await page.evaluate(() => document.body.innerText);

  // 3. Type Singlish input
  await page.locator('textarea').fill(
    'heta api eyalage gedhara yanavadha kiyalaa ammaa aehuvaa'
  );

  // 4.translation appears
  await page.waitForFunction(
    (oldText) => document.body.innerText !== oldText,
    beforeText,
    { timeout: 15000 }
  );

  // 5. Capture page text AFTER translation
  const afterText = await page.evaluate(() => document.body.innerText);

  // 6. Extract NEW Sinhala text only
  const newSinhala = afterText
    .replace(beforeText, '')
    .split('\n')
    .filter(line => /[ආ-ෆ]/.test(line))
    .join(' ')
    .trim();

  console.log('Sinhala Output:', newSinhala);

  // 7. PASS condition
  expect(newSinhala.length).toBeGreaterThan(0);
});

test('Pos_Fun_0002 - Medium daily conversation invitation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const beforeText = await page.evaluate(() => document.body.innerText);

  await page.locator('textarea').first().fill(
    'heta school concert eka thiyanavalu. maath yanna kiyalaa hithan inne. oyath kaemathinam Sithumigenuth ahalaa dhennama enna. oyalaa enavanm mata tikak kalin kiyanna.'
  );

  await page.waitForFunction(
    oldText => document.body.innerText !== oldText,
    beforeText,
    { timeout: 15000 }
  );

  const afterText = await page.evaluate(() => document.body.innerText);

  const newSinhala = afterText
    .replace(beforeText, '')
    .split('\n')
    .filter(line => /[ආ-ෆ]/.test(line))
    .join(' ')
    .trim();

  console.log('Sinhala Output:', newSinhala);
  expect(newSinhala.length).toBeGreaterThan(0);
});