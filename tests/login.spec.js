
const { test, expect } = require('@playwright/test');
const faker = require('faker');
test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.waitForTimeout(2000);
});

test('Criar uma conta com Sucesso', async ({ page }) => {

  await page.locator('#email_create').click();
  await page.locator('#email_create').fill(faker.internet.email());
  await page.getByRole('button', { name: ' Create an account' }).click();
  await page.waitForTimeout(2000)
  await page.click('text=Create an account');
  
  // Pagina de Cadastro
  // Informações Pessoais

  await page.getByRole('heading', { name: 'Your personal information' });
  await page.getByLabel('Mr.').click();
  await page.locator('#customer_firstname').click();
  await page.locator('#customer_firstname').fill(faker.name.firstName());
  await page.locator('#customer_lastname').click();
  await page.locator('#customer_lastname').fill(faker.name.lastName());
  await page.getByLabel('Password *').fill('123456');
  await page.selectOption('select#days', { value: '3' });
  await page.selectOption('select#months', { value: '3' });
  await page.selectOption('select#years', { value: '2023' });
  await page.getByLabel('Sign up for our newsletter!').click();
  await page.getByLabel('Receive special offers from').click();

  // Endereço
  await page.getByRole('heading', { name: 'Your address' });
  await page.locator('#firstname').fill(faker.name.firstName());
  await page.locator('#lastname').fill(faker.name.lastName());
  await page.getByLabel('Company *').fill(faker.company.companyName());
  await page.getByLabel('Address *').fill(faker.address.streetAddress());
  await page.getByLabel('Address (Line 2) *').fill(faker.address.secondaryAddress());
  await page.getByLabel('City *').fill(faker.address.city());
  await page.selectOption('#id_state', { label: 'Florida' });
  await page.getByLabel('Zip/Postal Code *').fill('32789');
  await page.getByLabel('Additional information').fill(faker.lorem.word());
  await page.getByLabel('Home phone').fill(faker.phone.phoneNumberFormat());
  await page.getByLabel('Mobile phone').fill(faker.phone.phoneNumberFormat());
  await page.getByLabel('Assign an address alias for').fill( faker.lorem.word());
  await page.waitForTimeout(2000)
  await page.click('#submitAccount');
  await page.waitForTimeout(2000)
  expect(await page.textContent('.info-account')).toContain('Welcome to your account. Here');

});
test('Tentativa de Login sem preencher o email', async ({ page }) => {

  await page.locator('#passwd').click();
  await page.locator('#passwd').fill('12345')
  await page.getByRole('button', { name: ' Sign in' }).click();
  await expect(page.getByText('An email address required.')).toBeVisible();
});

test('Tentativa de Login sem preencher a senha', async ({ page }) => {

  await page.locator('#email').click();
  await page.locator('#email').fill('desafioqa@gmail.com')
  await page.locator('#SubmitLogin').click();
  await expect(page.getByText('Password is required.')).toBeVisible();
});

test('Login e Logout com sucesso', async ({ page }) => {

  await page.locator('#email').click();
  await page.locator('#email').fill('desafioqa@gmail.com')
  await page.locator('#passwd').click();
  await page.locator('#passwd').fill('12345')
  await page.locator('#SubmitLogin').click();
  await expect(page.getByText('Welcome to your account. Here')).toBeVisible();
  await page.getByTitle('Log me out').click();
  await page.waitForTimeout(2000);
});




