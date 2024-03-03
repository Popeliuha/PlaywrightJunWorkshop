import { Page } from "@playwright/test";

export const login = (page: Page) => ({
    async open() {
        await page.goto('/');
    },

    async doLogin(email: string, password: string) {
        await this.open(page);
        await page.getByRole('link', { name: 'Welcome!' }).click();
        await page.getByRole('menuitem', { name: 'Login' }).click();
        await page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill(email);
        await page.getByPlaceholder('Please Enter Your Password').fill(password);
        await page.getByRole('button', { name: 'Login' }).click();
    }
})