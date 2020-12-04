const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://uol.com.br');
  await page.screenshot({ path: './uol.png' });

  await browser.close();
})();
