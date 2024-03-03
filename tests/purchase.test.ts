import { test, expect } from '@playwright/test';

test('User can buy product', async ({ page }) => {
    await page.goto('https://shopdemo-alex-hot.koyeb.app/');
    await page.getByRole('link', { name: 'Welcome!' }).click();
    await page.getByRole('menuitem', { name: 'Login' }).click();
    await page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill('xotabu4@gmail.com');
    await page.getByPlaceholder('Please Enter Your Password').fill('xotabu4@gmail.com');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Brands ' }).click();
    await page.getByRole('menuitem', { name: 'Nizhyn cannery' }).click();
    await page.getByRole('link', { name: 'CHERRY TOMATOES By Nizhyn' }).click();
    await page.getByRole('button', { name: 'Add To Bag' }).click();
    await page.getByRole('button', { name: 'Place Order' }).click();
    await expect(page.locator('.order-message').locator('h2')).toContainText('Thank you for your order.');
});