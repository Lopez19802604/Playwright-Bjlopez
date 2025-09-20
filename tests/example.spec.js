<<<<<<< HEAD
import { test, expect } from '@playwright/test';

test('Verificar tÃ­tulo de Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
=======
"import { test, expect } from '@playwright/test';\n\ntest('Verificar t¡tulo de Playwright', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n  await expect(page).toHaveTitle(/Playwright/);\n});" 
>>>>>>> 8ced76316a6d637d3c34bab92b88098673f1d7c3
