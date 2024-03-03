import { test, expect, Page } from '@playwright/test';
import { login } from '../app/login.page';


test('User can buy product', async ({ page }) => {
    const loginPage = login(page);
    await loginPage.doLogin('xotabu4@gmail.com', 'xotabu4@gmail.com');
    await page.getByRole('link', { name: 'Brands ' }).click();
    await page.getByRole('menuitem', { name: 'Nizhyn cannery' }).click();
    await page.getByRole('link', { name: 'CHERRY TOMATOES By Nizhyn' }).click();
    await page.getByRole('button', { name: 'Add To Bag' }).click();
    await page.getByRole('button', { name: 'Place Order' }).click();
    //await expect(page.locator('.order-message').locator('h2')).toContainText('Thank you for your order.');
    await expect(page.locator('h2', {hasText: 'Thank you for your order.'})).toBeVisible();
});