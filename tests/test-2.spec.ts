import { test, expect } from '@playwright/test';
import { randomUUID } from 'crypto';

test('User can submit contact us form', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Contact Us' }).first().click();
  await page.getByPlaceholder('Your Email Address').fill(`natashatop${randomUUID()}@gmail.com`);
  await page.getByPlaceholder('You Full Name').fill('natashatop');
  await page.getByPlaceholder('Please Describe Your Message').fill('putin huilo lalalla');
  await page.getByRole('button', { name: 'Submit' }).click();
});