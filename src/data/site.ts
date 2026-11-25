export interface SiteConfig {
  url: string;
  domain: string;
  title: string;
  name: string;
  slogan: string;
  description: string;
  primaryKeyword: string;
  keywords: string;
  author: string;
  locale: string;
  publishedYear: string;
  indexNowKey: string;
  navLinks: Array<{ text: string; href: string }>;
  footerLinks: Array<{ text: string; href: string }>;
}

export const SITE_CONFIG: SiteConfig = {
  url: 'https://tizituijian2027.blog',
  domain: 'tizituijian2027.blog',
  title: '2027梯子推荐 - 最新稳定好用的高速科学上网梯子测评与选购榜单 | tizituijian2027.blog',
  name: '2027梯子推荐',
  slogan: '真实晚高峰测速 · 拒绝虚标与跑路 · 2027精选稳定高速科学上网梯子指南',
  description: '2027梯子推荐官方测评博客（tizituijian2027.blog），专注2027年最稳定、高速、防封锁的科学上网梯子与翻墙代理节点排行榜。全网精选IEPL内网专线梯子、4K/8K流媒体秒开、ChatGPT/Claude原生解锁节点，提供Windows/Mac/iOS/Android全平台梯子客户端软件下载与配置教程。',
  primaryKeyword: '2027梯子推荐',
  keywords: '2027梯子推荐, 梯子推荐, 2027稳定梯子, 科学上网梯子, 翻墙梯子推荐, 高速梯子, 电脑梯子软件, 手机梯子, 便宜梯子, IPLC专线梯子, Clash梯子, Sing-box订阅, ChatGPT梯子, 外网加速器, tizituijian2027.blog',
  author: '2027梯子推荐评测团队',
  locale: 'zh-CN',
  publishedYear: '2027',
  indexNowKey: 'e9a8f273b1454c5e89d14f2a781290bc',
  navLinks: [
    { text: '首页', href: '/' },
    { text: '梯子推荐榜', href: '/ranking/' },
    { text: '参数对比表', href: '/comparison/' },
    { text: '场景选梯', href: '/scenarios/' },
    { text: '客户端配置', href: '/clients/' },
    { text: '常见疑问 FAQ', href: '/faq/' },
    { text: '评测文章', href: '/posts/' },
    { text: '关于本站', href: '/about/' },
  ],
  footerLinks: [
    { text: '梯子评测文章', href: '/posts/' },
    { text: '关于我们 & 评测原则', href: '/about/' },
    { text: 'HTML 全站地图', href: '/sitemap/' },
    { text: '站点地图 XML', href: '/sitemap.xml' },
    { text: '站点索引 XML', href: '/sitemap-index.xml' },
    { text: 'Bing IndexNow 凭证', href: '/e9a8f273b1454c5e89d14f2a781290bc.txt' },
  ],
};
