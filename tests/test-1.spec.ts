import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.goto('https://www.google.com/search?q=%D1%8F%D0%BA+%D1%81%D1%82%D0%B0%D1%82%D1%8C+%D0%BF%D1%96%D0%B7%D0%B4%D0%B0%D1%82%D0%B8%D0%BC+%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%96%D1%81%D1%82%D0%BE%D0%BC&sca_esv=781689f199775288&source=hp&ei=KkLkZfrACKvOwPAPxb2aqAs&iflsig=ANes7DEAAAAAZeRQOu2mWok55xXP2E-hEGqPFmz4usKR&udm=&ved=0ahUKEwj6_d2U49eEAxUrJxAIHcWeBrUQ4dUDCA0&uact=5&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEDyAEAmAIAoAIAmAMAkgcA&sclient=gws-wiz');
  await page.getByRole('link', { name: 'З нуля до джуна за 7' }).click();
  await page.getByRole('button', { name: 'Змінити країну або мову' }).click();
  await page.locator('label').filter({ hasText: 'English' }).click();
});