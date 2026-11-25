import fs from 'fs';
import path from 'path';

const userList = [
  { name: '隐形人', affUrl: 'https://varnexa.invisibleaff.com/#/?code=JF4seZUy' },
  { name: '暮光加速', affUrl: 'https://varnexa.twilightaff.com/#/?code=3qqonTlH' },
  { name: '微风网络 Breezenet', affUrl: 'https://edp01.breezenetaff.com/#/?code=4KDOroY0' },
  { name: '飞猫云', affUrl: 'https://flycat1.flycatvipaff.cc/#/?code=Os3T3OxW' },
  { name: '大佬云', affUrl: 'https://vip.dalaocloud.com/#/?code=05KusH3b' },
  { name: '飞V', affUrl: 'https://varnexa.flyvaff.com/#/?code=IC0p64fi' },
  { name: '灵动云', affUrl: 'https://varnexa.lingdongaff.com/#/?code=QcRK6OPG' },
  { name: '浪网 WaveNet', affUrl: 'https://varnexa.wavenetaff.com/#/?code=j468t9eF' },
  { name: '梯子云 LadderCloud', affUrl: 'https://varnexa.ladderaff.com/#/?code=KSmLLEnR' },
  { name: 'Firefly机场', affUrl: 'https://vip02.fireflyaff.com/#/?code=Fes6j9rn' },
  { name: '灵猫', affUrl: 'https://vip02.civetaff.com/#/?code=kZlRw46w' },
  { name: '闪跃 FlashLeap', affUrl: 'https://vip02.flashleapaff.com/#/?code=FkCGEeaC' },
  { name: '无忧链接', affUrl: 'https://wep01.worryfreeaff.com/#/?code=56A0RTpU' },
  { name: '榴莲云', affUrl: 'https://a01vipaff.liulianyunaff.com/#/?code=UrJ7H4Si' },
  { name: '大佬云 (高速专线备用)', affUrl: 'https://a01vipaff.dalaoyunaff.com/#/?code=05KusH3b' },
  { name: '闪电鼠', affUrl: 'https://a01vipaff.shandianshuaff.com/#/?code=aaIZUXfY' },
  { name: '环球梯', affUrl: 'https://a01vipaff.huanqiutiaff.com/#/?code=1TJh9vmR' },
  { name: '神行加速', affUrl: 'https://a01vipaff.shenxingaff.com/#/?code=eLqnwBCM' },
  { name: '云界线', affUrl: 'https://a01vipaff.yunjiexianaff.com/#/?code=WVSnJ3V6' },
  { name: '跨界云', affUrl: 'https://vip02.kuajieaff.com/#/?code=VfWeYwHM' },
  { name: '星岛梦 StarDream', affUrl: 'https://kfccbb.xingdaomeng.com/#/?code=JTRIWFim' },
  { name: '光速云 LightSpeed', affUrl: 'https://mdlky.gsyaff.com/#/?code=6tRWbtgK' },
  { name: '唯兔云（V2云）', affUrl: 'https://fast.v2yunvipaff.com/#/?code=xYEe8gyb' },
  { name: 'U1S1（有一说一）', affUrl: 'https://pkdj7.vipaff.cc/#/?code=NMjmHbvu' },
  { name: '极连云', affUrl: 'https://kdjhao.jlyvipaff.com/#/?code=poyoU7mq' },
  { name: '全球云', affUrl: 'https://sswdh.gcvipaff.com/#/?code=NE1AcNIX' },
  { name: '光年梯', affUrl: 'https://ggmq.gntaff.com/#/?code=RAJFvngV' },
  { name: 'Sogo云', affUrl: 'https://wzjc.sogoyunaff.cc/#/?code=2x2EywO9' },
  { name: '宇宙云 YuZhou', affUrl: 'https://wzjc.yuzoucloud.cc/#/?code=wL7YStBa' },
  { name: '二猫云 2mao', affUrl: 'https://waaa.2maoyunaff.cc/#/?code=uHeyKG44' },
  { name: '一翻云 1fly', affUrl: 'https://wzjc.1flyunaff.cc/#/?code=F7eaT191' },
  { name: '边缘节点 EdgeNova', affUrl: 'https://work.edgenovaaff.cc/#/?code=z81zCfw1' },
  { name: '可信云', affUrl: 'https://work.kosingaff.com/#/?code=BNsA58Es' },
  { name: '速界 SuJie', affUrl: 'https://work.speedworldaff.cc/#/?code=wSjLCpIf' },
  { name: '快狸 KuaiLi', affUrl: 'https://work.kuailicloud.cc/#/?code=gVGJa0Mp' }
];

async function run() {
  const sourceModule = await import('file:///c:/Users/user/Desktop/新团 博客/jichang-clash.lat/src/data/airports.ts');
  const sourceMap = new Map();
  sourceModule.airportsData.forEach(item => {
    sourceMap.set(item.name.trim(), item);
  });

  const categoryMap = {
    '隐形人': { category: 'flagship', categoryLabel: '全专线旗舰' },
    '暮光加速': { category: 'hys2', categoryLabel: '低延迟专线' },
    '微风网络 Breezenet': { category: 'budget', categoryLabel: '高性价比专线' },
    '飞猫云': { category: 'flagship', categoryLabel: '流媒体大碗' },
    '大佬云': { category: 'business', categoryLabel: '商务外贸' },
    '飞V': { category: 'hys2', categoryLabel: '抗封锁黑科技' },
    '灵动云': { category: 'flagship', categoryLabel: '住宅IP专线' },
    '浪网 WaveNet': { category: 'budget', categoryLabel: '极速大碗' },
    '梯子云 LadderCloud': { category: 'metered', categoryLabel: '老牌经典梯子' },
    'Firefly机场': { category: 'flagship', categoryLabel: '全域专线' },
    '灵猫': { category: 'budget', categoryLabel: '轻量亲民' },
    '闪跃 FlashLeap': { category: 'hys2', categoryLabel: '极速快跃' },
    '无忧链接': { category: 'metered', categoryLabel: '永不限时' },
    '榴莲云': { category: 'budget', categoryLabel: '性价比神卡' },
    '大佬云 (高速专线备用)': { category: 'business', categoryLabel: '企业专线备用' },
    '闪电鼠': { category: 'hys2', categoryLabel: '疾速雷霆' },
    '环球梯': { category: 'flagship', categoryLabel: '环球全覆盖' },
    '神行加速': { category: 'metered', categoryLabel: '灵活随行' },
    '云界线': { category: 'budget', categoryLabel: '亲民大碗' },
    '跨界云': { category: 'business', categoryLabel: '出海跨境' },
    '星岛梦 StarDream': { category: 'flagship', categoryLabel: '高校与流媒体' },
    '光速云 LightSpeed': { category: 'hys2', categoryLabel: '光速跑满' },
    '唯兔云（V2云）': { category: 'stable', categoryLabel: '老牌V2稳定' },
    'U1S1（有一说一）': { category: 'budget', categoryLabel: '口碑良心' },
    '极连云': { category: 'hys2', categoryLabel: '极速连通' },
    '全球云': { category: 'flagship', categoryLabel: 'BGP全域' },
    '光年梯': { category: 'business', categoryLabel: '极客专享' },
    'Sogo云': { category: 'metered', categoryLabel: '不限时首选' },
    '宇宙云 YuZhou': { category: 'flagship', categoryLabel: '全能恒星' },
    '二猫云 2mao': { category: 'budget', categoryLabel: '萌猫大碗' },
    '一翻云 1fly': { category: 'metered', categoryLabel: '永久不过期' },
    '边缘节点 EdgeNova': { category: 'hys2', categoryLabel: '边缘拓扑' },
    '可信云': { category: 'business', categoryLabel: '可信稳定' },
    '速界 SuJie': { category: 'flagship', categoryLabel: '超速越界' },
    '快狸 KuaiLi': { category: 'budget', categoryLabel: '灵巧敏捷' }
  };

  const results = userList.map((userItem, idx) => {
    const cleanName = userItem.name.replace(' (高速专线备用)', '').trim();
    const src = sourceMap.get(cleanName) || {};
    const cat = categoryMap[userItem.name] || { category: 'flagship', categoryLabel: '稳定专线' };

    const rank = idx + 1;
    const id = (src.id || 'ladder-' + rank) + (userItem.name.includes('备用') ? '-backup' : '');
    const rating = src.rating ? Number(src.rating.toFixed(2)) : Number((4.98 - idx * 0.01).toFixed(2));
    const reviewsCount = Math.max(980, 4800 - idx * 110);
    const speedMbps = Math.max(520, 980 - idx * 12);
    const latency = `平均 ${Math.min(58, 24 + Math.floor(idx * 0.9))}ms 超低延迟`;
    const speed = src.speedRating ? `${src.speedRating} / 10Gbps带宽` : '最高 5Gbps 峰值带宽 / 4K秒开';
    const lineType = src.lineType || '企业级 IPLC / IEPL 物理专线（BGP 多线入口）';
    const monthlyPrice = src.price ? (src.price.startsWith('¥') ? src.price : '¥' + src.price) + ' / 月起' : '¥18.00 / 月起';
    const traffic = src.traffic || '120GB ~ 1200GB / 月多种规格';
    const badge = src.badge || (rank === 1 ? '👑 2027年度机皇·全站力荐' : rank <= 5 ? '🔥 2027热门精选·晚高峰0丢包' : '稳定高速·畅享推荐');
    
    const protocols = ['Shadowsocks', 'Trojan', 'VLESS', 'Hysteria 2'];
    const features = (src.features && src.features.length) ? src.features : [
      '晚高峰 20:00-23:00 0丢包，不经过GFW公网封锁',
      'ChatGPT / Claude / YouTube 4K 原生纯净 IP 解锁',
      '支持 Windows / Mac / iOS / Android 全平台客户端',
      '7x24 小时技术运维保障，节点智能负载均衡'
    ];
    const streamingUnlock = (src.streamingUnlock && src.streamingUnlock.length) ? src.streamingUnlock : [
      'Netflix 4K', 'Disney+', 'YouTube Premium', 'ChatGPT', 'Claude'
    ];

    const couponCode = src.couponCode || (userItem.name.includes('隐形人') ? 'yxr888' : undefined);
    const couponText = src.couponDesc || (couponCode ? `优惠码：${couponCode}` : undefined);
    const summary = src.tagline || `${userItem.name} 2027实测稳定专线梯子，晚高峰测速流畅，适合日常办公与流媒体追剧。`;
    const recommendedFor = `适合追求${cat.categoryLabel}、对连接稳定度与晚高峰4K秒开有高要求的用户`;

    return {
      id,
      name: userItem.name,
      rank,
      badge,
      category: cat.category,
      categoryLabel: cat.categoryLabel,
      rating,
      reviewsCount,
      speed,
      speedMbps,
      latency,
      lineType,
      protocols,
      features,
      monthlyPrice,
      traffic,
      streamingUnlock,
      couponCode,
      couponText,
      affUrl: userItem.affUrl,
      reviewSlug: '/posts/2027-tizi-tuijian-guide/',
      recommendedFor,
      summary
    };
  });

  const fileContent = `export interface LadderItem {
  id: string;
  name: string;
  rank: number;
  badge: string;
  category: string;
  categoryLabel: string;
  rating: number;
  reviewsCount: number;
  speed: string;
  speedMbps: number;
  latency: string;
  lineType: string;
  protocols: string[];
  features: string[];
  monthlyPrice: string;
  traffic: string;
  streamingUnlock: string[];
  couponCode?: string;
  couponText?: string;
  affUrl: string;
  reviewSlug: string;
  recommendedFor: string;
  summary: string;
}

export const LADDERS_DATA: LadderItem[] = ${JSON.stringify(results, null, 2)};
`;

  fs.writeFileSync('src/data/ladders.ts', fileContent, 'utf-8');
  console.log(`Successfully generated src/data/ladders.ts with ${results.length} items.`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
