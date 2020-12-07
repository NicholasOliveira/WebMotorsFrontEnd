const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto('http://webmotorsfrontend.herokuapp.com/', { waitUntil: 'load' });

    const [button] = await page.$x("//button[contains(., 'VER OFERTAS')]");
    if (button) {
      await button.click();
    }
    await page.waitForSelector('section');
    await browser.close();
    console.log(true);
    return true;
  } catch (err) {
    /* await page.screenshot({ path: './fail.png' }); */
    await browser.close();
    console.log(false);
    return false;
  }
})();
