import { chromium } from 'playwright';
import { mkdir, stat } from 'node:fs/promises';

const URL = 'https://fcri.vercel.app/';
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
const results = [
  { label: 'desktop', viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, output: 'assets/digital-twin-desktop.jpg' },
  { label: 'mobile', viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, output: 'assets/digital-twin-mobile.jpg' },
];
await mkdir('assets', { recursive: true });
try {
  for (const item of results) {
    const page = await browser.newPage({
      viewport: item.viewport,
      deviceScaleFactor: item.deviceScaleFactor,
      reducedMotion: 'reduce',
      colorScheme: 'light',
    });
    page.on('pageerror', e => console.log(item.label + ' client error: ' + String(e).slice(0, 150)));
    let response;
    for(let attempt=1;attempt<=3;attempt++){
      try {
        response = await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
        if (!response || response.status() >= 400) throw new Error('HTTP '+(response?.status() ?? 'no response'));
        break;
      } catch(e) {
        if(attempt===3) throw new Error('Live Digital Twin failed to load: '+e);
        await page.waitForTimeout(3000);
      }
    }
    await page.waitForTimeout(13000);
    await page.evaluate(async()=>{ try { await document.fonts.ready; } catch {} });
    const title = await page.title();
    const visibleText = (await page.locator('body').innerText().catch(()=>'')).slice(0,200);
    if (!visibleText.trim()) throw new Error('Page has no visible text; refusing blank screenshot');
    await page.screenshot({ path: item.output, type: 'jpeg', quality: 83, fullPage: false, animations: 'disabled' });
    const size = (await stat(item.output)).size;
    if(size < 14000) throw new Error('Screenshot suspiciously small: '+size);
    console.log(item.label + ': ' + title + ', '+size+' bytes; '+visibleText.replace(/\s+/g, ' ').slice(0,120));
    await page.close();
  }
} finally {
  await browser.close();
}
