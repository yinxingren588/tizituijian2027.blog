export const CORE_SITEMAP_PAGES = [
  { title: '网站首页', badge: '核心', path: '/', desc: '2027梯子推荐官方测评博客总览 · 真实多省市晚高峰实测榜单' },
  { title: '2027 梯子推荐总榜', badge: '榜单', path: '/ranking/', desc: '1 款旗舰大卡 + 34 款一排五个精选梯子矩阵，支持多维筛选与搜索' },
  { title: '35款梯子核心参数横向对比表', badge: '对比', path: '/comparison/', desc: '价格门槛、基础流量、专线架构、晚高峰速率与优惠码一表尽览' },
  { title: '多场景精准选梯指南', badge: '场景', path: '/scenarios/', desc: '4K/8K追剧、ChatGPT/Claude AI、外贸办公、游戏与按量选梯攻略' },
  { title: '全平台客户端官方下载与教程', badge: '下载', path: '/clients/', desc: 'Windows、macOS、Android、iOS 正版开源下载与四步保姆级配置指南' },
  { title: '翻墙常见问答百科 (FAQ 大全)', badge: 'FAQ', path: '/faq/', desc: '58 道精选梯子原理、倍率陷阱、Clash 配置与 AI/流媒体排障解答' },
  { title: '深度测评与实战文章专栏', badge: '专栏', path: '/posts/', desc: '2027梯子选购指南、十大机场晚高峰实测报告与双ISP住宅IP解封科普' },
  { title: '关于本站与实测准则', badge: '准则', path: '/about/', desc: '三网晚高峰物理探针测速标准、透明度披露与合规声明' },
  { title: '全站 HTML 网站地图', badge: '索引', path: '/sitemap/', desc: '全站 100+ 页面结构化索引，方便读者直达与搜索引擎收录' },
];

/**
 * 统一的 Sitemap 权重与更新频率映射规则
 * @param {string} urlOrPath
 * @returns {{ priority: number, changefreq: 'daily' | 'weekly' | 'monthly' }}
 */
export function getSitemapMeta(urlOrPath) {
  let pathname = urlOrPath;
  try {
    if (urlOrPath.startsWith('http')) {
      pathname = new URL(urlOrPath).pathname;
    }
  } catch {
    // keep raw string
  }

  if (pathname === '/' || pathname === '') {
    return { priority: 1.0, changefreq: 'daily' };
  }
  if (pathname === '/ranking/' || pathname === '/comparison/') {
    return { priority: 0.95, changefreq: 'daily' };
  }
  if (pathname.startsWith('/reviews/')) {
    return { priority: 0.9, changefreq: 'weekly' };
  }
  if (
    pathname === '/posts/' ||
    pathname.startsWith('/posts/') ||
    pathname === '/scenarios/' ||
    pathname === '/clients/' ||
    pathname === '/faq/'
  ) {
    return { priority: 0.85, changefreq: 'weekly' };
  }
  if (pathname.startsWith('/faq/')) {
    return { priority: 0.75, changefreq: 'monthly' };
  }
  return { priority: 0.6, changefreq: 'monthly' };
}
