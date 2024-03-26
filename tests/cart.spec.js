const { test, expect } = require('@playwright/test');
const faker = require('faker');

test.beforeEach(async ({ page }) => {

  await page.goto('/');
});

test('Adicionar produto ao carrinho sem estar Logado', async ({ page }) => {
  //Validação simples

  await page.getByRole('heading', { name: 'Faded Short Sleeves T-shirt' }).getByRole('link').click()
  await page.click('button.exclusive[name="Submit"] > span');
  await page.click('[title="Proceed to checkout"]');

  await expect(page.getByText('01. Summary')).toBeVisible();
  await page.getByRole('link', { name: 'Proceed to checkout ' }).click();

  await expect(page.getByText('02. Sign in')).toBeVisible();
  await page.locator('#email').click();
  await page.locator('#email').fill('desafioqa@gmail.com')
  await page.locator('#passwd').click();
  await page.locator('#passwd').fill('12345')
  await page.locator('#SubmitLogin').click();

  await expect(page.getByText('03. Address')).toBeVisible();
  await expect(page.getByText('Your delivery address')).toBeVisible();
  await expect(page.getByText('Your billing address')).toBeVisible();
  await page.locator('textarea[name="message"]').fill(faker.lorem.word());
  await page.locator('[name="processAddress"]').click();

  await expect(page.getByText('04. Shipping')).toBeVisible();
  await page.click('input#cgv');
  await expect(page.getByText('I agree to the terms of service and will adhere to them unconditionally.')).toBeVisible();
  await page.getByRole('button', { name: 'Proceed to checkout ' }).click();
  await page.waitForTimeout(2000);

  await expect(page.getByText('05. Payment')).toBeVisible();
  await page.getByRole('link', { name: 'Pay by bank wire (order' }).click();
  await page.waitForTimeout(2000);

  await expect(page.getByText('05. Payment')).toBeVisible();
  await page.isVisible('div');
  await page.getByRole('button', { name: 'I confirm my order ' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Your order on My Store is')).toBeVisible();
  await expect(page.getByText('Please send us a bank wire')).toBeVisible();
  await page.getByRole('link', { name: ' View your order history' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Here are the orders you\'ve')).toBeVisible();
  await page.isVisible('div');
  await page.getByRole('link', { name: 'home' }).click();
  await page.waitForTimeout(2000);

  await page.getByTitle('Log me out').click();
  await page.waitForTimeout(2000);
});

