const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {

  await page.goto('/');
});

test('Busca por produtos validos', async ({ page }) => {

  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('blouse');
  await page.getByRole('button', { name: '' }).click();
  await page.locator('#product_list').getByText('Blouse', { exact: true }).click();
  await page.getByRole('heading', { name: 'Blouse' }).click();
  await page.click('.logo');
  await page.waitForTimeout(2000);
});

test('Busca por produtos invalidos', async ({ page }) => {

  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('blusa');
  await page.getByRole('button', { name: '' }).click();
  await expect(page.getByText('No results were found for your search "blusa"')).toBeVisible();
});