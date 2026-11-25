import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const HOST = 'tizituijian2027.blog';
const KEY = 'e9a8f273b1454c5e89d14f2a781290bc';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = path.join(ROOT_DIR, 'dist', 'sitemap.xml');

async function main() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('未找到 dist/sitemap.xml，请先运行 npm run build。');
    process.exit(1);
  }

  const xml = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

  if (urlList.length === 0) {
    console.error('sitemap.xml 中未提取到有效 URL。');
    process.exit(1);
  }

  console.log(`准备向 Bing / IndexNow 推送 ${urlList.length} 个 URL...`);

  // 先确认正式域名验证文件可达
  try {
    const check = await fetch(KEY_LOCATION);
    if (check.status !== 200) {
      console.error(`域名验证文件尚未在线 (${KEY_LOCATION} 返回 ${check.status})，请先在 Cloudflare 绑定 ${HOST} 后再执行推送。`);
      process.exit(1);
    }
  } catch (err) {
    console.error(`暂无法访问 ${KEY_LOCATION}（${err.message}），请确认 Cloudflare 自定义域与 DNS 已生效后再执行 npm run indexnow。`);
    process.exit(1);
  }

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  console.log('IndexNow 响应状态:', res.status, res.statusText);
  if (!res.ok) {
    const body = await res.text();
    console.error('响应内容:', body);
    process.exit(1);
  }

  console.log('全部 URL 已成功提交至 Bing IndexNow 索引队列！');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
