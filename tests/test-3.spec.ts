import { test, expect } from '@playwright/test';

test('User can google inappropriate stuff', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=natashatop%40gmail.com&oq=natashatop%40gmail.com&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg60gEHNzM3ajBqMqgCALACAA&sourceid=chrome&ie=UTF-8');
  await expect(page.locator('#rso')).toContainText('Female Escorts In Lisbon Portugal');
});