export interface PackageItem {
  name: string;
  badge?: string;
  subtitle?: string;
  traffic: string;
  price: string;
  discounted_price?: string;
  available?: string;
  speed?: string;
  devices?: string;
  features: string[];
}

export interface LadderItem {
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
  speedRating: string;
  latency: string;
  uptime: string;
  lineType: string;
  protocols: string[];
  features: string[];
  monthlyPrice: string;
  priceRaw: string;
  traffic: string;
  annualDiscount?: string;
  streamingUnlock: string[];
  supportedClients: string[];
  couponCode?: string;
  couponText?: string;
  affUrl: string;
  reviewSlug: string;
  recommendedFor: string;
  summary: string;
  packages: PackageItem[];
}

export const LADDERS_DATA: LadderItem[] = [
  {
    "id": "invisible",
    "name": "隐形人",
    "rank": 1,
    "badge": "👑 Clash独家合作机场",
    "category": "flagship",
    "categoryLabel": "全专线旗舰",
    "rating": 4.96,
    "reviewsCount": 4800,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 980,
    "speedRating": "8K 极速秒开",
    "latency": "平均 24ms 超低延迟",
    "uptime": "99.99%",
    "lineType": "全 IEPL 物理专线",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全 IEPL 物理专线，晚高峰 0.8% 极低丢包",
      "全节点统一 1.0x 真实计费倍率，全程不限速",
      "不限制同时在线设备数量",
      "流媒体 4K/8K 与 ChatGPT/Claude 原生纯净 IP 解锁"
    ],
    "monthlyPrice": "¥19.20 / 月起",
    "priceRaw": "¥19.20",
    "traffic": "80 GB / 每30天刷新",
    "annualDiscount": "¥87.20/年 (原价 ¥109/年，8折券后折合 ¥7.27/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "yxr888",
    "couponText": "yxr888 (全场通用 8 折优惠券)",
    "affUrl": "https://varnexa.invisibleaff.com/#/?code=JF4seZUy",
    "reviewSlug": "/reviews/invisible/",
    "recommendedFor": "适合追求全专线旗舰、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "官方主推星耀风暴年付物理专线，涵盖白银、黄金、铂金与钻石全周期定制套餐。晚高峰超低丢包，全节点真实 1x 倍率，企业级抗封锁高可用架构。",
    "packages": [
      {
        "name": "星耀风暴 365天不熄 ⚡",
        "badge": "主推套餐",
        "subtitle": "适用人群：适合小流量/新手用户，年付折算约 8 元/月。",
        "traffic": "80GB / 月",
        "price": "¥109.00 / 年",
        "discounted_price": "8折券后实付 ¥87.20 /年（折合约 ¥7.27/月）",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适用人群：适合小流量/新手用户，年付折算约 8 元/月",
          "流量政策：80GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "刷新规则：购买日起算，每 30 天自动刷新流量",
          "网络带宽：全 IPLC 专线，低延迟；单节点峰值最高 2.5Gbps",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok 等主流平台",
          "设备并发：不限制同时使用客户端数量，多设备自由在线",
          "客服支持：高效客服响应，快速处理使用问题",
          "节点覆盖：香港×20、台湾×10、日本×10、新加坡×10、美国×10、韩国×2、阿根廷×2等"
        ]
      },
      {
        "name": "隐形人 白银纪元 👑",
        "badge": "推荐选择",
        "subtitle": "每月提供约 144GB 高速可用流量（全天候极速）",
        "traffic": "144GB / 月",
        "price": "¥24.00 / 月",
        "discounted_price": "8折券后实付 ¥19.20 /月",
        "available": "月付 / 季付 / 半年付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每月提供约 144GB 高速可用流量（全天候极速）",
          "满足深度网课用户、全高清视频会议、高强度短视频运营与流媒体长期深度用户需求",
          "云端多链路即时优化 + 全链路专线架构，秒级响应，节点统一 1x 计费倍率",
          "流媒体全家桶：Netflix / Prime Video / BBC / Abema / TVer 等全面覆盖，原生IP直通",
          "开发者之选：ChatGPT 4 / GitHub Copilot / Hugging Face 完整支持，低延迟API调用",
          "高性能协议，多国节点可选，不限制在线设备数，商务家庭优选"
        ]
      },
      {
        "name": "隐形人 黄金序列 💥",
        "badge": "推荐选择 · 主力首选",
        "subtitle": "每月 360GB 高速流量，搭配中高频视频与流媒体，主力首选！",
        "traffic": "360GB / 月",
        "price": "¥48.00 / 月",
        "discounted_price": "8折券后实付 ¥38.40 /月",
        "available": "月付 / 季付 / 半年付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每月 360GB 高速流量，搭配中高频视频与流媒体，主力首选！",
          "BGP 三网智能优化 + 纯专线出口，稳定优先，晚高峰也绝不卡顿",
          "纯专线不限速，4K 秒开、兼容 8K 超清播放，视听体验拉满"
        ]
      },
      {
        "name": "隐形人 铂金至臻 🔱",
        "badge": "推荐选择 · 高频大流量",
        "subtitle": "每月包含 750GB 高速可用流量，适合高频网络使用场景",
        "traffic": "750GB / 月",
        "price": "¥105.00 / 月",
        "discounted_price": "8折券后实付 ¥84.00 /月",
        "available": "月付 / 季付 / 半年付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每月包含 750GB 高速可用流量，适合高频网络使用场景",
          "高频流媒体下载、远程办公、大文件传输？750GB 让你彻底告别流量焦虑",
          "BGP 多线融合调度 + 专线级网络出口，带宽充足，全节点 1x 计费",
          "全流媒体平台完美解锁，4K/8K 超清内容稳定播放，一爽到底"
        ]
      },
      {
        "name": "隐形人 钻石穹顶 💎",
        "badge": "推荐选择 · 团队旗舰",
        "subtitle": "每月提供 1600GB 超大流量池，适合团队使用与高并发访问场景",
        "traffic": "1.6TB / 月",
        "price": "¥185.00 / 月",
        "discounted_price": "8折券后实付 ¥148.00 /月",
        "available": "月付 / 季付 / 半年付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每月提供 1600GB 超大流量池，适合团队使用与高并发访问场景",
          "企业级 BGP 智能路由 + 专线出口方案，全程不限速，节点流量不放大",
          "1.6TB 超大带宽，跨境电商、海外自媒体团队日常高强度下载必备",
          "全球主流媒体与内容平台全解锁，高码率 8K 视频多台设备同时稳定播放"
        ]
      },
      {
        "name": "王者定制版 ✈️",
        "badge": "企业商业顶配",
        "subtitle": "这就是跨境企业的生命线 普通的共享节点，无法承载高净值的商业梦想",
        "traffic": "500GB / 月",
        "price": "¥680.00 / 月",
        "discounted_price": "8折券后实付 ¥544.00 /月",
        "available": "月付",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "这就是跨境企业的生命线 普通的共享节点，无法承载高净值的商业梦想",
          "我们为您推出顶配商业级解决方案",
          "500GB/月 独立带宽，全程不限速，保证高并发业务丝滑顺畅"
        ]
      },
      {
        "name": "一次性小流量 🪩",
        "badge": "纯备用天花板",
        "subtitle": "一次性买断 160GB，无时间限制，高端纯备用梯子天花板",
        "traffic": "160GB (买断)",
        "price": "¥229.00 / 一次性",
        "discounted_price": "8折券后实付 ¥183.20",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "严格限 1 台",
        "features": [
          "一次性买断 160GB，无时间限制，高端纯备用梯子天花板",
          "告别月租焦虑，¥229 拥有一个永不过期的网络安全气囊",
          "独立买断区专属节点，严格限 1 台设备，主打一个纯净与不挤兑"
        ]
      },
      {
        "name": "一次性标准流量包 🌀",
        "badge": "商旅跨年黄金组合",
        "subtitle": "420GB 独立买断流量，没有过期时间，海外出差、商旅跨年黄金组合",
        "traffic": "420GB (买断)",
        "price": "¥549.00 / 一次性",
        "discounted_price": "8折券后实付 ¥439.20",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "支持 2 台设备",
        "features": [
          "420GB 独立买断流量，没有过期时间，海外出差、商旅跨年黄金组合",
          "进阶优质带宽加持，支持 2 台设备同时在线，手机电脑无缝同步",
          "进阶优质带宽保证晚高峰不卡顿，追剧、办公、开会全能打",
          "把预算花在刀刃上，永不过期的 420G 专线，比天天续费省心百倍"
        ]
      },
      {
        "name": "一次性精英流量包 🌊",
        "badge": "重度生产力买断",
        "subtitle": "1000GB（1TB）旗舰独享买断流量，一口价 ¥1199，永不过期！",
        "traffic": "1.0TB (买断)",
        "price": "¥1199.00 / 一次性",
        "discounted_price": "8折券后实付 ¥959.20",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "支持 3 台设备",
        "features": [
          "1000GB（1TB）旗舰独享买断流量，一口价 ¥1199，永不过期！",
          "极速旗舰级最高优先级带宽，支持 3 台设备同时狂飙，稳如泰山",
          "专为高净值金融、跨境核心业务、高端工作室打造的商务断区",
          "1TB 大容量且没有时间限制，重度生产力用户的终身省心方案"
        ]
      }
    ]
  },
  {
    "id": "twilight",
    "name": "暮光加速",
    "rank": 2,
    "badge": "⚡ 优质专线",
    "category": "hys2",
    "categoryLabel": "低延迟专线",
    "rating": 4.9,
    "reviewsCount": 4690,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 968,
    "speedRating": "8K 极速秒开",
    "latency": "平均 24ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "全 IPLC 物理专线 / BGP 三网优化",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全 IPLC 物理专线出口，单节点峰值 2.5Gbps",
      "晚高峰 1.2% 优异丢包率",
      "不限同时在线设备数量",
      "自研客户端「暮光加速」，iOS Nextin 识别码: mgjs"
    ],
    "monthlyPrice": "¥20 / 月起",
    "priceRaw": "¥20",
    "traffic": "70 GB / 每30天刷新",
    "annualDiscount": "¥109/年 (折合 ¥9.08/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "",
    "couponText": "客户端识别码: mgjs (Nextin直连)",
    "affUrl": "https://varnexa.twilightaff.com/#/?code=3qqonTlH",
    "reviewSlug": "/reviews/twilight/",
    "recommendedFor": "适合追求低延迟专线、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "全 IPLC 国际物理专线搭配 BGP 三网智能优化，单节点峰值高达 2.5Gbps。晚高峰极低丢包与抖动，不限同时在线设备，附带独家极速客户端一键导入。",
    "packages": [
      {
        "name": "暮光·年付轻量版",
        "traffic": "70 GB / 每30天刷新",
        "price": "¥109 / 年",
        "discounted_price": "折合约 ¥9.08/月",
        "features": [
          "全 IPLC 物理专线出口",
          "单节点峰值 2.5Gbps",
          "不限设备数",
          "全解锁支持"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "月付入门",
        "traffic": "120 GB / 每月额度",
        "price": "¥20 / 月",
        "discounted_price": "¥20/月",
        "features": [
          "BGP 多线路调度与专线出口",
          "支持多设备同时连接",
          "ChatGPT/流媒体原生解锁"
        ],
        "badge": "🎬 影音主力",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。"
      },
      {
        "name": "暮光·标准版 (站长力荐)",
        "traffic": "240 GB / 每月额度",
        "price": "¥40 / 月",
        "discounted_price": "¥40/月",
        "features": [
          "BGP 三网优化 + IPLC 专线出口",
          "流媒体 4K 超清秒开",
          "不限客户端在线数"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "暮光·旗舰版",
        "traffic": "700 GB / 每月额度",
        "price": "¥100 / 月",
        "discounted_price": "¥100/月",
        "features": [
          "高速 IPLC 专线极低抖动",
          "适合多人/多设备高负载",
          "峰值速率 2.5Gbps"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "暮光·至尊版 (极客尊享)",
        "traffic": "1500 GB (1.5TB) / 每月",
        "price": "¥180 / 月",
        "discounted_price": "¥180/月",
        "features": [
          "智能专属路由专线通道",
          "超大 1.5TB 流量",
          "多端并发不降速",
          "全天候海外运维"
        ],
        "badge": "💎 旗舰商业顶配",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。"
      },
      {
        "name": "暮光·不限时标准包",
        "traffic": "400 GB · 永久有效",
        "price": "¥318 / 一次性",
        "discounted_price": "¥318 一次性买断",
        "features": [
          "全 IPLC 专线权限",
          "永久有效不过期",
          "全节点 1x 计费不限速",
          "不限设备数"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      }
    ]
  },
  {
    "id": "breezenet",
    "name": "微风网络 Breezenet",
    "rank": 3,
    "badge": "⚡ 优质专线",
    "category": "budget",
    "categoryLabel": "高性价比专线",
    "rating": 4.9,
    "reviewsCount": 4580,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 956,
    "speedRating": "8K 极速秒开",
    "latency": "平均 25ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "全 IPLC 物理专线",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全 IPLC 物理专线通道，高峰不限速",
      "晚高峰 1.8% 优异丢包表现",
      "4K/8K 视频秒开，原生纯净 IP 解锁",
      "不限制设备同时在线数量"
    ],
    "monthlyPrice": "¥25 / 月起",
    "priceRaw": "¥25",
    "traffic": "100 GB / 每月额度",
    "annualDiscount": "¥123.30/年 (原价 ¥137/年，9折后折合 ¥10.28/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "weifeng90",
    "couponText": "weifeng90 (全场 9 折优惠券)",
    "affUrl": "https://edp01.breezenetaff.com/#/?code=4KDOroY0",
    "reviewSlug": "/reviews/breezenet/",
    "recommendedFor": "适合追求高性价比专线、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "老牌大带宽稳定专线集群，智能 BGP 多线融合调度与全内网物理隧道。全天候 4K/8K 超清流媒体与 ChatGPT 原生解锁，全节点统一 1.0x 真实计费。",
    "packages": [
      {
        "name": "清风 · 年付精算 (本站力荐)",
        "traffic": "100 GB / 每月额度",
        "price": "¥137 / 年",
        "discounted_price": "9折券后实付 ¥123.30 /年（约 ¥10.28/月）",
        "features": [
          "全 IPLC 物理专线",
          "每月 100GB 专线流量",
          "不限设备数",
          "4K与ChatGPT秒开"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "月付热门",
        "traffic": "200 GB / 每月额度",
        "price": "¥25 / 月",
        "discounted_price": "¥25/月",
        "features": [
          "IPLC 物理专线高峰不限速",
          "原生纯净 IP 节点",
          "全平台客户端一键登录"
        ],
        "badge": "🎬 影音主力",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。"
      },
      {
        "name": "破风 · 高频进阶",
        "traffic": "500 GB / 每月额度",
        "price": "¥55 / 月",
        "discounted_price": "¥55/月",
        "features": [
          "充裕 500GB 月度大流量",
          "支持多设备协同并发",
          "原生 IP 流媒体解锁"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "海量吞吐",
        "traffic": "1200 GB (1.2TB) / 每月",
        "price": "¥125 / 月",
        "discounted_price": "¥125/月",
        "features": [
          "超大 1.2TB 月度流量",
          "企业级 IPLC 专线大带宽",
          "多端高负载不降速"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "信风 · 一次性不限时包",
        "traffic": "270 GB · 永久有效",
        "price": "¥200 / 一次性",
        "discounted_price": "¥200 一次性买断",
        "features": [
          "全专线节点高速访问",
          "用完为止永不过期",
          "全节点 1x 倍率真实计费"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "长风 · 一次性海量包",
        "traffic": "570 GB · 永久有效",
        "price": "¥370 / 一次性",
        "discounted_price": "¥370 一次性买断",
        "features": [
          "570GB 永久有效总流量",
          "多设备跨平台无缝连接",
          "晚高峰稳定低抖动"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      }
    ]
  },
  {
    "id": "flycat",
    "name": "飞猫云",
    "rank": 4,
    "badge": "⚡ 优质专线",
    "category": "flagship",
    "categoryLabel": "流媒体大碗",
    "rating": 4.9,
    "reviewsCount": 4470,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 944,
    "speedRating": "8K 极速秒开",
    "latency": "平均 26ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "IPLC 高速物理专线 / 原生双 ISP",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "原生 IP 双 ISP 机房纯净出口，抗封锁强",
      "IPLC 高速物理专线，覆盖 15+ 全球地区节点",
      "学生版低门槛仅 ¥7.00/月",
      "自研客户端 + Nextin 识别码快速接入"
    ],
    "monthlyPrice": "¥25 / 月起",
    "priceRaw": "¥25",
    "traffic": "50 GB / 每月额度",
    "annualDiscount": "¥84/年 (年付折合仅 ¥7.00/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "flycat888",
    "couponText": "flycat888 (9 折优惠码)",
    "affUrl": "https://flycat1.flycatvipaff.cc/#/?code=Os3T3OxW",
    "reviewSlug": "/reviews/flycat/",
    "recommendedFor": "适合追求流媒体大碗、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "高性价比老牌稳定机场，专为高频流媒体、学术科研与跨境办公打造。大带宽专线中转与原生双 ISP 节点矩阵，晚高峰流畅不卡顿，多端一键导入订阅。",
    "packages": [
      {
        "name": "飞猫·学生版 (超低门槛)",
        "traffic": "50 GB / 每月额度",
        "price": "¥84 / 年",
        "discounted_price": "折合仅 ¥7.00 /月",
        "features": [
          "IPLC 高速专线",
          "每月 50GB 自动刷新",
          "不限设备数",
          "原生纯净 IP 解锁 AI/流媒体"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "月付热门",
        "traffic": "150 GB / 每月额度",
        "price": "¥25 / 月",
        "discounted_price": "¥25/月",
        "features": [
          "IPLC 专线与原生纯净 IP",
          "每月刷新 150GB",
          "ChatGPT/流媒体秒开"
        ],
        "badge": "🎬 影音主力",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。"
      },
      {
        "name": "影音主推",
        "traffic": "300 GB / 每月额度",
        "price": "¥45 / 月",
        "discounted_price": "¥45/月",
        "features": [
          "每月充裕 300GB",
          "15+ 地区任选",
          "4K 超清流畅播放",
          "自研客户端一键登录"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "飞猫·银河版",
        "traffic": "600 GB / 每月额度",
        "price": "¥85 / 月",
        "discounted_price": "¥85/月",
        "features": [
          "超大 600GB 专线流量",
          "双 ISP 机房纯净原生出口",
          "工单技术支持"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "极客尊享",
        "traffic": "1200 GB (1.2TB) / 每月",
        "price": "¥160 / 月",
        "discounted_price": "¥160/月",
        "features": [
          "海量 1.2TB 专线带宽",
          "低抖动网络拓扑路由优化",
          "全节点 1x 倍率"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "飞猫·不限时轻量包",
        "traffic": "200 GB · 永久有效",
        "price": "¥188 / 一次性",
        "discounted_price": "¥188 一次性买断",
        "features": [
          "全 IPLC 专线节点高速访问",
          "永久有效不过期",
          "不限设备数随时可用"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      }
    ]
  },
  {
    "id": "dalao-cloud",
    "name": "大佬云",
    "rank": 5,
    "badge": "⚡ 尊享高可用",
    "category": "business",
    "categoryLabel": "商务外贸",
    "rating": 4.93,
    "reviewsCount": 4360,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 932,
    "speedRating": "8K 极速秒开",
    "latency": "平均 27ms 超低延迟",
    "uptime": "99.98%",
    "lineType": "全 IPLC/IEPL 国际专线 / BGP 智能调度",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全线搭载旗舰级 IEPL/IPLC 物理专线，超低延迟与 99.9% 高可用 SLA",
      "全节点统一 x1 真实倍率扣费，晚高峰大带宽绝不限速",
      "覆盖香港、台湾、日本、韩国、美国、新加坡等多国核心骨干节点",
      "原生 IP 深度解锁 ChatGPT、Claude、ChatGPT Plus 及 Netflix、Disney+ 等全平台流媒体",
      "不限制在线设备数量，全面兼容 Windows、macOS、iOS、Android 及路由器全平台",
      "7×24 小时技术客服与专业运维在线，提供高效售后保障"
    ],
    "monthlyPrice": "¥19.99 / 月起",
    "priceRaw": "¥19.99",
    "traffic": "100 GB / 月",
    "annualDiscount": "¥96.00/年 (折合约 ¥8.00/月，年付活动包专享)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "",
    "couponText": "官方直通特惠通道，全线统一 1x 计费倍率",
    "affUrl": "https://vip.dalaocloud.com/#/?code=05KusH3b",
    "reviewSlug": "/reviews/dalao-cloud/",
    "recommendedFor": "适合追求商务外贸、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "全线搭载旗舰级 IEPL/IPLC 国际专线与优质 BGP 智能调度，单节点峰值最高 2.5Gbps。全节点 1x 真实计费倍率，晚高峰绝不限速；深度解锁 ChatGPT、Claude 及全平台流媒体，多端设备畅连无阻。",
    "packages": [
      {
        "name": "年付活动包 ⚡",
        "badge": "精选 · 年付力荐",
        "subtitle": "适用人群：适合小流量/新手用户，年付折算约 8 元/月。",
        "traffic": "60GB / 月",
        "price": "¥96.00 / 年",
        "discounted_price": "折合约 ¥8.00 /月",
        "available": "年付",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "适用人群：适合小流量/新手用户，年付折算约 8 元/月",
          "流量政策：60GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "刷新规则：购买日起算，每 30 天自动刷新流量",
          "网络带宽：全 IPLC 专线，低延迟；单节点峰值最高 2.5Gbps",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok 等主流平台",
          "设备并发：不限制同时使用客户端数量，多设备自由在线",
          "客服支持：高效客服响应，快速处理使用问题",
          "节点覆盖：香港×20、台湾×10、日本×10、新加坡×10、美国×10等"
        ]
      },
      {
        "name": "财云 · 福利版 💰",
        "badge": "热销爆款",
        "subtitle": "每天不到 ¥0.65，初入云端，自由畅连全网！",
        "traffic": "100GB / 月",
        "price": "¥19.99 / 月",
        "discounted_price": "每天仅需 ¥0.65",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每天不到 ¥0.65，初入云端，自由畅连全网！",
          "每月 100GB 充足流量，全节点 x1 倍率扣费，晚高峰绝不限速",
          "全线搭载旗舰级 IEPL 专线，超低延迟，99.9% 高可用 SLA 保证",
          "覆盖香港、台湾、日本、韩国、美国、新加坡等多国优质节点",
          "智能优选自动负载均衡，支持全节点动态自动切线",
          "深度解锁 ChatGPT、Claude、ChatGPT Plus 及全平台流媒体",
          "全面兼容 Windows、macOS、iOS、Android 及路由器等全平台",
          "7×24 小时技术客服与运维在线，随时解答，售后无忧"
        ]
      },
      {
        "name": "初云 · 进阶版 ☁️",
        "badge": "热门套餐",
        "subtitle": "每天不到 ¥0.8，初入云端，自有天地。",
        "traffic": "150GB / 月",
        "price": "¥25.00 / 月",
        "discounted_price": "每天仅需 ¥0.8",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每天不到 ¥0.8，初入云端，自有天地",
          "每月 150GB，适合日常浏览、AI 助手与影音娱乐",
          "IEPL 专线直连体验，极低延迟，智能优选路由",
          "全节点 x1 倍率，晚高峰不限速",
          "覆盖港台、日韩欧美及欧洲等热门地区",
          "原生 IP，支持 Netflix、Disney+、ChatGPT、TikTok 等",
          "电脑、手机、路由器通用，不限设备同时在线",
          "每 30 天重置流量，7×24 小时真人客服支持"
        ]
      },
      {
        "name": "凌云 · 基础版 🚀",
        "badge": "办公影音推荐",
        "subtitle": "每天约 ¥1.43，让每一次流淌，融入你的生活节奏。",
        "traffic": "300GB / 月",
        "price": "¥43.00 / 月",
        "discounted_price": "每天仅需 ¥1.43",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每天约 ¥1.43，让每一次流淌，融入你的生活节奏",
          "月度 300GB：兼顾日常使用、职场工作、学习与休闲",
          "全线 IPLC 专线：智能路由，跨区访问更顺畅",
          "全节点 x1 倍率，晚高峰不限速",
          "全球节点：港台、日韩新美及欧洲节点，满足多地区访问需求",
          "原生 IP，支持 Netflix、Disney+、ChatGPT、TikTok 等",
          "设备并发：不限制设备同时在线，电脑、手机、路由器自由连接",
          "每 30 天重置流量，7×24 小时真人客服支持"
        ]
      },
      {
        "name": "御云 · 高级版 👑",
        "badge": "高阶大流量",
        "subtitle": "每天约 ¥2.43，以高阶之势，承载更广阔的网络探索。",
        "traffic": "600GB / 月",
        "price": "¥73.00 / 月",
        "discounted_price": "每天仅需 ¥2.43",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "每天约 ¥2.43，以高阶之势，承载更广阔的网络探索",
          "月度 600GB：面向高强度使用，为极致体验的你而设",
          "极速专线：全线 IPLC 专线，单节点峰值带宽可达 2.5Gbps",
          "智能路由：全节点 x1 倍率，晚高峰不限速",
          "多国节点：节点遍布亚洲、欧洲、美洲，按需切换访问地区",
          "原生 IP：支持 Netflix、Disney+、ChatGPT、TikTok 等",
          "设备无忧：不限设备同时在线，兼顾电脑、手机与路由器",
          "售后保障：每 30 天重置流量，7×24 小时真人客服支持"
        ]
      },
      {
        "name": "闲云 · 随心包 🪩",
        "badge": "不限时买断 · 备用首选",
        "subtitle": "随心连接，让流量跟随你的节奏，永不过期。",
        "traffic": "200GB (买断)",
        "price": "¥268.00 / 终身",
        "discounted_price": "一次性买断 · 永不过期",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "随心连接，让流量跟随你的节奏，无需按月续费",
          "适用人群：适合偶尔使用、轻量浏览与备用连接的用户",
          "套餐价格：一次性付款 268 元，永不过期",
          "流量额度：总计 200GB，按实际使用扣减，非每月额度",
          "使用期限：不限时，用完即止",
          "流量规则：不按月重置，剩余流量持续保留，用完后可重新购买"
        ]
      },
      {
        "name": "悠云 · 长享包 🌊",
        "badge": "不限时买断 · 海量长效",
        "subtitle": "悠然上云，为未来的每一次连接留足余量。",
        "traffic": "500GB (买断)",
        "price": "¥498.00 / 终身",
        "discounted_price": "一次性买断 · 永不过期",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "悠然上云，为未来的每一次连接留足余量",
          "适用人群：适合长期低频使用、希望一次购买更多流量的用户",
          "套餐价格：一次性付款 498 元，无需按月续费",
          "流量额度：总计 500GB，按实际使用扣减，非每月额度",
          "使用期限：不限时，用完即止",
          "流量规则：不按月重置，剩余流量持续保留，用完后可重新购买"
        ]
      }
    ]
  },
  {
    "id": "flyv",
    "name": "飞V",
    "rank": 6,
    "badge": "⚡ 优质专线",
    "category": "hys2",
    "categoryLabel": "抗封锁黑科技",
    "rating": 4.9,
    "reviewsCount": 4250,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 920,
    "speedRating": "8K 极速秒开",
    "latency": "平均 28ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "BGP 优质高速入口 / IEPL / IPLC 专线",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "千兆 BGP 多线融合调度 + IEPL/IPLC 跨境专线",
      "全节点统一 1.0x 计费倍率，全程不限速",
      "不限制在线设备数量",
      "提供独享原生公网 IP 黄金专线定制（防封控）"
    ],
    "monthlyPrice": "¥25.00 / 月起",
    "priceRaw": "¥25.00",
    "traffic": "65 GB / 每月额度",
    "annualDiscount": "¥99.00/年 (折合 ¥8.25/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "",
    "couponText": "客户端识别码: ldy; 专属通道券: feiv",
    "affUrl": "https://varnexa.flyvaff.com/#/?code=IC0p64fi",
    "reviewSlug": "/reviews/flyv/",
    "recommendedFor": "适合追求抗封锁黑科技、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "为极速跨境与重度生产力而生，全节点 BGP 自动容灾调度。覆盖香港、日本、新加坡及美欧核心骨干机房，流媒体全量解锁，支持独享专线定制业务。",
    "packages": [
      {
        "name": "FlyV 会员 - 年付标准轻量版",
        "traffic": "65 GB / 每月额度",
        "price": "¥99.00 / 年",
        "discounted_price": "折合 ¥8.25/月",
        "features": [
          "全节点不限速，统一 1.0x 倍率",
          "不限制在线设备数",
          "适合轻度网络备份"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "精选方案 · 入门",
        "traffic": "150 GB / 每月额度",
        "price": "¥25.00 / 月",
        "discounted_price": "¥25.00/月",
        "features": [
          "适配 YouTube/Netflix/TikTok",
          "适配 ChatGPT、GitHub Copilot"
        ],
        "badge": "🎬 影音主力",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。"
      },
      {
        "name": "FlyV 会员 - 进阶方案",
        "traffic": "380 GB / 每月额度",
        "price": "¥50.00 / 月",
        "discounted_price": "¥50.00/月",
        "features": [
          "BGP 智能调度 + IEPL/IPLC 专线",
          "4K/8K 超清流媒体秒开",
          "深度兼容 Midjourney/Claude"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "高端商务 · 800GB",
        "traffic": "800 GB / 每月额度",
        "price": "¥110.00 / 月",
        "discounted_price": "¥110.00/月",
        "features": [
          "千兆 BGP 多线融合调度",
          "全节点 1.0x 计费",
          "商务办公与家庭多设备打造"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "FlyV 会员 - 商业方案",
        "traffic": "1800 GB (1.8TB) / 每月",
        "price": "¥190.00 / 月",
        "discounted_price": "¥190.00/月",
        "features": [
          "冗余专线出口架构",
          "专为跨境企业/多人工作室/AI研发设计"
        ],
        "badge": "💎 旗舰商业顶配",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。"
      },
      {
        "name": "单次轻量版 · 小流量包",
        "traffic": "130 GB (永久有效买断)",
        "price": "¥189.00 / 一次性",
        "discounted_price": "¥189.00 买断",
        "features": [
          "永久有效无使用期限",
          "一次购买用完即止",
          "低频备用首选"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "单次轻量版 · 标准流量包",
        "traffic": "380 GB (永久有效买断)",
        "price": "¥479.00 / 一次性",
        "discounted_price": "¥479.00 买断",
        "features": [
          "无月租清零压力",
          "多地区节点自由切换",
          "商旅出差首选"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "单次轻量版 · 精英流量包",
        "traffic": "600 GB (永久有效买断)",
        "price": "¥799.00 / 一次性",
        "discounted_price": "¥799.00 买断",
        "features": [
          "高优先级带宽通道",
          "全节点不限速",
          "大容量储备"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "FlyV 会员 - 原生IP·独享黄金专线",
        "traffic": "500 GB / 每月独享流量",
        "price": "¥680.00 / 月",
        "discounted_price": "¥680.00/月",
        "features": [
          "独立原生公网 IP 杜绝污染",
          "独享专属带宽保障",
          "TikTok 海外直播与跨境电商首选"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      }
    ]
  },
  {
    "id": "lingdong",
    "name": "灵动云",
    "rank": 7,
    "badge": "⚡ 优质专线",
    "category": "flagship",
    "categoryLabel": "住宅IP专线",
    "rating": 4.9,
    "reviewsCount": 4140,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 908,
    "speedRating": "8K 极速秒开",
    "latency": "平均 29ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "BGP 智能多网专线 / 穿云 IPLC 专线",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "BGP 智能多网专线 + 穿云物理 IPLC 专线通道",
      "单节点峰值高达 2.5Gbps，全节点 1.0x 计费不虚标",
      "全场 8 折专属优惠码 wsj888",
      "不限设备同时连接，SS 协议高兼容性"
    ],
    "monthlyPrice": "¥16.00 / 月起",
    "priceRaw": "¥16.00",
    "traffic": "70 GB / 每30天额度",
    "annualDiscount": "¥99/年 (折合约 ¥8.25/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "wsj888",
    "couponText": "wsj888 (全场 8 折优惠券); iOS客户端识别码: ldy",
    "affUrl": "https://varnexa.lingdongaff.com/#/?code=QcRK6OPG",
    "reviewSlug": "/reviews/lingdong/",
    "recommendedFor": "适合追求住宅IP专线、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "深度优化电信、联通、移动三网穿云专线，单节点最高 2.5Gbps 物理峰值。全节点不限速，全平台流媒体与 AI 工具极速解锁，配置极简即开即用。",
    "packages": [
      {
        "name": "灵动·穿云 (年度精选IPLC)",
        "traffic": "70 GB / 每30天额度",
        "price": "¥99 / 年",
        "discounted_price": "折合约 ¥8.25 /月 · 专线年度爆款",
        "features": [
          "物理 IPLC 专线通道",
          "峰值高达 2.5Gbps",
          "每 30 天自动刷新 70GB",
          "流媒体与 ChatGPT 原生解锁"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "灵动·拂风 (亲民入门)",
        "traffic": "100 GB / 每月额度",
        "price": "¥20 / 月",
        "discounted_price": "8折券后仅 ¥16.00 /月",
        "features": [
          "BGP 多网专线调度接入",
          "全节点 1.0x 真实倍率",
          "多设备在线无限制",
          "主流社交与流媒体解锁"
        ],
        "badge": "🎬 影音主力",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。"
      },
      {
        "name": "灵动·驭浪 (主力推荐)",
        "traffic": "300 GB / 每月额度",
        "price": "¥50 / 月",
        "discounted_price": "8折券后仅 ¥40.00 /月",
        "features": [
          "BGP 三网优化 + 原生纯净 IP",
          "支持 4K 超高清流畅秒开",
          "AI 对话工具专属纯净线路"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "灵动·破晓",
        "traffic": "700 GB / 每月额度",
        "price": "¥100 / 月",
        "discounted_price": "8折券后仅 ¥80.00 /月",
        "features": [
          "BGP 多线专线高速通道",
          "全节点 1.0x 计费不虚标",
          "多设备共享大流量池",
          "低抖动链路保障"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "灵动·凌霄 (1.5TB)",
        "traffic": "1500 GB (1.5TB) / 每月",
        "price": "¥180 / 月",
        "discounted_price": "8折券后仅 ¥144.00 /月",
        "features": [
          "海量 1.5TB 每月流量",
          "BGP 智能专线流量不放大",
          "多端并发无压力连接"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "灵动·不限时轻享包",
        "traffic": "200 GB · 永久有效",
        "price": "¥168 / 一次性",
        "discounted_price": "8折券后仅 ¥134.40",
        "features": [
          "BGP 专线节点高速访问",
          "不限使用期限用完为止",
          "实打实 1.0x 扣减计费"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      }
    ]
  },
  {
    "id": "wavenet",
    "name": "浪网 WaveNet",
    "rank": 8,
    "badge": "⚡ 优质专线",
    "category": "budget",
    "categoryLabel": "极速大碗",
    "rating": 4.9,
    "reviewsCount": 4030,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 896,
    "speedRating": "8K 极速秒开",
    "latency": "平均 30ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "全 IPLC 物理专线 / BGP 多线融合调度",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全 IPLC 物理专线低延迟，单节点最高 2.5Gbps",
      "全节点统一 1.0x 倍率真实计费，不设峰值限速",
      "不限制同时在线设备数量",
      "提供独立 IP 买断包与独享私人专线"
    ],
    "monthlyPrice": "¥30.00 / 月起",
    "priceRaw": "¥30.00",
    "traffic": "80 GB / 每30天刷新",
    "annualDiscount": "¥119.00/年 (折合 ¥9.92/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "",
    "couponText": "客户端识别码: ldy; 专属通道: wavenet",
    "affUrl": "https://varnexa.wavenetaff.com/#/?code=j468t9eF",
    "reviewSlug": "/reviews/wavenet/",
    "recommendedFor": "适合追求极速大碗、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "企业级高可用架构，全自建 IPLC 国际专线与高端中继网络。严控单节点在线负载与峰值冗余，晚高峰 0 丢包体验，提供高性价比周期订阅与永不过期买断包。",
    "packages": [
      {
        "name": "浪网 年付标准",
        "traffic": "80 GB / 每30天刷新",
        "price": "¥119.00 / 年",
        "discounted_price": "折合约 ¥9.92/月",
        "features": [
          "全 IPLC 专线低延迟",
          "单节点峰值最高 2.5Gbps",
          "不限设备数",
          "原生 IP 解锁"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "入门精选 · 150GB",
        "traffic": "150 GB / 每月额度",
        "price": "¥30.00 / 月",
        "discounted_price": "¥30.00/月",
        "features": [
          "BGP 智能调度 + 专线级出口",
          "全节点 1x 计费",
          "4K即点即播支持8K"
        ],
        "badge": "🎬 影音主力",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。"
      },
      {
        "name": "浪网 进阶",
        "traffic": "400 GB / 每月额度",
        "price": "¥70.00 / 月",
        "discounted_price": "¥70.00/月",
        "features": [
          "BGP 三网优化 + 纯专线出口",
          "AI 生产力平台深度支持",
          "全平台一键配置"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "高频首选 · 800GB",
        "traffic": "800 GB / 每月额度",
        "price": "¥120.00 / 月",
        "discounted_price": "¥120.00/月",
        "features": [
          "多线融合专线网络出口",
          "带宽充足不设限速",
          "团队与家庭多端共享"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "商业级 · 2.0TB",
        "traffic": "2000 GB (2.0TB) / 每月",
        "price": "¥200.00 / 月",
        "discounted_price": "¥200.00/月",
        "features": [
          "企业级 BGP + 专线出口",
          "实打实 1.0x 真实计费",
          "高抗封锁支持多工位并发"
        ],
        "badge": "💎 旗舰商业顶配",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。"
      },
      {
        "name": "浪网 小流量包 (独立IP)",
        "traffic": "180 GB (永久不过期)",
        "price": "¥239.00 / 一次性",
        "discounted_price": "¥239.00 买断",
        "features": [
          "独立 IP 不共享专人维护",
          "跨境防封号出海配置",
          "限 1 设备核心守号"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "浪网 标准流量包 (商务精英)",
        "traffic": "450 GB (永久不过期)",
        "price": "¥569.00 / 一次性",
        "discounted_price": "¥569.00 买断",
        "features": [
          "稳定抗封锁架构",
          "适合经常出差商务用户",
          "多地区主流节点随意切换"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "浪网 精英流量包 (旗舰买断)",
        "traffic": "900 GB (永久不过期)",
        "price": "¥1099.00 / 一次性",
        "discounted_price": "¥1099.00 买断",
        "features": [
          "高净值金融与跨境核心断区",
          "专线级多路容灾出口",
          "终极生产力免续费"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "浪网 定制线路包",
        "traffic": "500 GB / 每月独享流量",
        "price": "¥680.00 / 月",
        "discounted_price": "¥680.00/月",
        "features": [
          "独立公网 IP 专线独享",
          "独占带宽不抢网",
          "跨境直播大团队顶配基建"
        ],
        "badge": "💎 旗舰商业顶配",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。"
      }
    ]
  },
  {
    "id": "laddercloud",
    "name": "梯子云 LadderCloud",
    "rank": 9,
    "badge": "⚡ 优质专线",
    "category": "metered",
    "categoryLabel": "老牌经典梯子",
    "rating": 4.9,
    "reviewsCount": 3920,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 884,
    "speedRating": "8K 极速秒开",
    "latency": "平均 31ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "BGP 三网智能优化 + 核心骨干 IEPL 专线",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "核心骨干网 IEPL 专线集群 + SLA 连通性保障",
      "全网统一 1.0x 真实计费倍率，无恶性翻倍",
      "不限制同时在线设备数量",
      "支持 4K/8K 视频秒开及商业级 AI 平台深度适配"
    ],
    "monthlyPrice": "¥25.00 / 月起",
    "priceRaw": "¥25.00",
    "traffic": "60 GB / 每月自动刷新",
    "annualDiscount": "¥89.00/年 (折合 ¥7.42/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "",
    "couponText": "客户端识别码: ldy; 专属通道: ladder",
    "affUrl": "https://varnexa.ladderaff.com/#/?code=KSmLLEnR",
    "reviewSlug": "/reviews/laddercloud/",
    "recommendedFor": "适合追求老牌经典梯子、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "新一代高速 IEPL 内网专线网络，智能动态优选全球超低延迟路由。晚高峰高并发吞吐保障，流媒体 4K/8K 与海外主流平台全解锁，跨平台客户端全面适配。",
    "packages": [
      {
        "name": "天梯随行 · 年度保活方案",
        "traffic": "60 GB / 每月自动刷新",
        "price": "¥89.00 / 年",
        "discounted_price": "折合 ¥7.42/月",
        "features": [
          "年度高性价比保活",
          "全节点不限速 1.0x",
          "不限设备数"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "精选方案 · 初阶入门",
        "traffic": "125 GB / 每月额度",
        "price": "¥25.00 / 月",
        "discounted_price": "¥25.00/月",
        "features": [
          "多入口智能调度全程不限速",
          "完整解锁 Netflix/YouTube/ChatGPT"
        ],
        "badge": "🎬 影音主力",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。"
      },
      {
        "name": "中阶加速 · 极清多线",
        "traffic": "350 GB / 每月额度",
        "price": "¥60.00 / 月",
        "discounted_price": "¥60.00/月",
        "features": [
          "BGP 三网优化 + 高速专线出口",
          "4K/8K 视频秒开",
          "适配 ChatGPT 语音模式"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "旗舰级 · 750GB",
        "traffic": "750 GB / 每月额度",
        "price": "¥110.00 / 月",
        "discounted_price": "¥110.00/月",
        "features": [
          "核心骨干网 IEPL 专线",
          "原生 IP 解锁不降画质",
          "跨境电商与外贸首选"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "商业级 · 1.6TB",
        "traffic": "1600 GB (1.6TB) / 每月",
        "price": "¥190.00 / 月",
        "discounted_price": "¥190.00/月",
        "features": [
          "企业级专线集群 + SLA 连通保障",
          "专属多活容灾方案最高优先级调度"
        ],
        "badge": "💎 旗舰商业顶配",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。"
      },
      {
        "name": "云端买断 · 永不限时轻量包",
        "traffic": "120 GB (永久有效)",
        "price": "¥169.00 / 一次性",
        "discounted_price": "¥169.00 买断",
        "features": [
          "用完即止永不限时",
          "谷歌检索与跨境业务守号防失联备用"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "云端买断 · 永不限时标准包",
        "traffic": "350 GB (永久有效)",
        "price": "¥449.00 / 一次性",
        "discounted_price": "¥449.00 买断",
        "features": [
          "中长期免续费方案",
          "高频 AI 交互与学术研究备用"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "云端买断 · 永不限时精英包",
        "traffic": "700 GB (永久有效)",
        "price": "¥849.00 / 一次性",
        "discounted_price": "¥849.00 买断",
        "features": [
          "多终端大容量终极方案",
          "高优先级调度骨干网络"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "云端独享 · 私人定制专线",
        "traffic": "500 GB / 每月独享流量",
        "price": "¥680.00 / 月",
        "discounted_price": "¥680.00/月",
        "features": [
          "独立纯净公网 IP",
          "彻底杜绝 IP 污染与连带封号",
          "一对一专家维护"
        ],
        "badge": "💎 旗舰商业顶配",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。"
      }
    ]
  },
  {
    "id": "firefly",
    "name": "Firefly机场",
    "rank": 10,
    "badge": "⚡ 优质专线",
    "category": "flagship",
    "categoryLabel": "全域专线",
    "rating": 4.9,
    "reviewsCount": 3810,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 872,
    "speedRating": "8K 极速秒开",
    "latency": "平均 32ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "端到端纯 IPLC 物理专线",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全节点纯 IPLC 物理专线，端到端专用隧道直连境外机房",
      "覆盖香港(20)、日本(10)、新加坡(10)、美国(10)、台湾(10)等 50+ 节点",
      "单节点最高下载实测 155.65 MB/s (1245.2 Mbps 满血千兆)",
      "全程不限速，不限制同时在线设备数"
    ],
    "monthlyPrice": "¥25.00 / 月起",
    "priceRaw": "¥25.00",
    "traffic": "60 GB / 月",
    "annualDiscount": "¥96.00/年 (折合约 ¥8.00/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "firefly",
    "couponText": "firefly (专属推荐优惠码)",
    "affUrl": "https://vip02.fireflyaff.com/#/?code=Fes6j9rn",
    "reviewSlug": "/reviews/firefly/",
    "recommendedFor": "适合追求全域专线、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "端到端纯 IPLC 国际物理专线，全程不经公网审查，敏感时期稳定如常。单节点峰值大带宽通道保障，全节点原生 IP 矩阵深度解锁 Netflix 与 ChatGPT。",
    "packages": [
      {
        "name": "Firefly年付版",
        "traffic": "60 GB / 月",
        "price": "¥96.00 / 年",
        "discounted_price": "折合约 ¥8.00/月",
        "features": [
          "全节点 IPLC 物理专线",
          "不限速不限设备",
          "当月用完加 ¥15 重置流量"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "Firefly Lite (轻量入门)",
        "traffic": "150 GB / 月",
        "price": "¥25.00 / 月",
        "discounted_price": "¥25.00/月",
        "features": [
          "适合日常网页浏览与轻度视频",
          "IPLC 专线不限速",
          "50+ 节点全覆盖"
        ],
        "badge": "🎬 影音主力",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。"
      },
      {
        "name": "Firefly Plus (黄金进阶 · 销量冠军)",
        "traffic": "300 GB / 月",
        "price": "¥45.00 / 月",
        "discounted_price": "¥45.00/月",
        "features": [
          "高清影音与商务办公主力",
          "全流媒体与 AI 原生 IP 解锁"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "Firefly Blaze (极速烈焰)",
        "traffic": "600 GB / 月",
        "price": "¥85.00 / 月",
        "discounted_price": "¥85.00/月",
        "features": [
          "适合 4K/8K 视频与多设备家庭",
          "不限速不限设备数"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "Firefly Nova (新星之顶 · 旗舰海量)",
        "traffic": "1000 GB (1.0TB) / 月",
        "price": "¥150.00 / 月",
        "discounted_price": "¥150.00/月",
        "features": [
          "团队协作与超大流量池",
          "全节点原生 IP 矩阵"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "Firefly不限时",
        "traffic": "100 GB (永久有效买断)",
        "price": "¥100.00 / 一次性",
        "discounted_price": "¥100.00 买断",
        "features": [
          "永久 100GB 不过期",
          "用完为止",
          "出差备用神包"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      }
    ]
  },
  {
    "id": "civet",
    "name": "灵猫",
    "rank": 11,
    "badge": "⚡ 优质专线",
    "category": "budget",
    "categoryLabel": "轻量亲民",
    "rating": 4.9,
    "reviewsCount": 3700,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 860,
    "speedRating": "8K 极速秒开",
    "latency": "平均 33ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "全 IPLC 国际专线",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全 IPLC 专线 (港/台/新/日/美)，1000 Mbps 最大峰值带宽",
      "单节点最高下载 156.46 MB/s (1251.7 Mbps 满血千兆)",
      "不限制在线客户端数量，节点速率全部保持 1.0x 真实倍率",
      "不限时套餐用完重置可享受 9 折优惠"
    ],
    "monthlyPrice": "¥25.00 / 月起",
    "priceRaw": "¥25.00",
    "traffic": "45 GB / 月 (365天时长)",
    "annualDiscount": "¥85.00/年 (折合约 ¥7.08/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "lingmao",
    "couponText": "lingmao (专属优惠码)",
    "affUrl": "https://vip02.civetaff.com/#/?code=kZlRw46w",
    "reviewSlug": "/reviews/civet/",
    "recommendedFor": "适合追求轻量亲民、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "全套高端 IPLC 国际专线接入，节点覆盖亚太与欧美核心枢纽。提供超低门槛年付小包与周期订阅方案，不限制在线设备数量，家庭与团队共享优选。",
    "packages": [
      {
        "name": "灵猫·年付小包",
        "traffic": "45 GB / 月 (365天时长)",
        "price": "¥85.00 / 年",
        "discounted_price": "折合约 ¥7.08/月",
        "features": [
          "全 IPLC 专线",
          "不限速不限设备",
          "订单日自动重置流量或购加油包"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "灵猫·年付Small",
        "traffic": "150 GB / 月 (365天时长)",
        "price": "¥195.00 / 年",
        "discounted_price": "折合约 ¥16.25/月",
        "features": [
          "1000 Mbps 最大带宽",
          "原生 IP 解锁各大流媒体及 AI"
        ],
        "badge": "🔥 年度精选",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "灵猫·年付Big",
        "traffic": "300 GB / 月 (365天时长)",
        "price": "¥295.00 / 年",
        "discounted_price": "折合约 ¥24.58/月",
        "features": [
          "大流量豪华畅快",
          "全 IPLC 专线 1.0x 费率"
        ],
        "badge": "🔥 年度精选",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "灵猫·季付Small",
        "traffic": "150 GB / 月 (90天时长)",
        "price": "¥65.00 / 季",
        "discounted_price": "折合约 ¥21.67/月",
        "features": [
          "灵活周期",
          "全 IPLC 专线",
          "原生 IP 解锁"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "灵猫·季付Big",
        "traffic": "300 GB / 月 (90天时长)",
        "price": "¥125.00 / 季",
        "discounted_price": "折合约 ¥41.67/月",
        "features": [
          "高阶影音办公",
          "1000 Mbps 峰值"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "灵猫·月付Small",
        "traffic": "150 GB / 月 (30天时长)",
        "price": "¥25.00 / 月",
        "discounted_price": "¥25.00/月",
        "features": [
          "月付尝鲜起步轻松",
          "全平台流媒体原生解锁"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "灵猫·月付Big",
        "traffic": "300 GB / 月 (30天时长)",
        "price": "¥45.00 / 月",
        "discounted_price": "¥45.00/月",
        "features": [
          "月付大包随意畅享",
          "4K 视频秒开"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "灵猫·不限时Small",
        "traffic": "100 GB (永久有效)",
        "price": "¥100.00 / 一次性",
        "discounted_price": "重置享 9 折特权",
        "features": [
          "永久有效不过期用完为止",
          "重置享 9 折优惠"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "灵猫·不限时Big",
        "traffic": "500 GB (永久有效)",
        "price": "¥350.00 / 一次性",
        "discounted_price": "重置享 9 折特权",
        "features": [
          "超大不限时池",
          "全专线节点权限"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "灵猫·大流量定制",
        "traffic": "按需定制 (大流量/独享专线)",
        "price": "¥999.00 / 月起",
        "discounted_price": "定制精算",
        "features": [
          "海外直播/跨境电商专线",
          "独享千兆上行带宽与原生公网静态 IP"
        ],
        "badge": "💎 旗舰商业顶配",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。"
      }
    ]
  },
  {
    "id": "flashleap",
    "name": "闪跃 FlashLeap",
    "rank": 12,
    "badge": "⚡ 优质专线",
    "category": "hys2",
    "categoryLabel": "极速快跃",
    "rating": 4.9,
    "reviewsCount": 3590,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 848,
    "speedRating": "8K 极速秒开",
    "latency": "平均 33ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "全 IPLC 专线网络",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全 IPLC 专线晚高峰不限速，所有节点统一 x1 倍率",
      "覆盖香港、日本、新加坡、美国、台湾等亚洲低延迟节点",
      "原生 IP 解锁各大流媒体及 ChatGPT / Claude / TikTok",
      "支持多设备并发高速下载"
    ],
    "monthlyPrice": "¥24.00 / 月起",
    "priceRaw": "¥24.00",
    "traffic": "60 GB / 月",
    "annualDiscount": "¥96.00/年 (折合约 ¥8.00/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "shanyue",
    "couponText": "shanyue (专属优惠码)",
    "affUrl": "https://vip02.flashleapaff.com/#/?code=FkCGEeaC",
    "reviewSlug": "/reviews/flashleap/",
    "recommendedFor": "适合追求极速快跃、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "新一代低延迟高速专线网络，所有节点统一 1.0x 真实计费倍率。专线高优先级调度拒绝任何网络拥堵，全天候 4K/8K 秒开，主流流媒体深度原生解锁。",
    "packages": [
      {
        "name": "闪跃年付版",
        "traffic": "60 GB / 月",
        "price": "¥96.00 / 年",
        "discounted_price": "折合约 ¥8.00/月",
        "features": [
          "轻度日常与备用首选",
          "统一 x1 倍率",
          "全 IPLC 专线"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "闪跃年付版（高）",
        "traffic": "120 GB / 月",
        "price": "¥180.00 / 年",
        "discounted_price": "折合约 ¥15.00/月",
        "features": [
          "中重度首选充裕不焦虑",
          "视频办公两不误"
        ],
        "badge": "🔥 年度精选",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "闪动 (Flicker)",
        "traffic": "150 GB / 月",
        "price": "¥24.00 / 月",
        "discounted_price": "¥24.00/月 (¥0.16/GB)",
        "features": [
          "月付随心开通",
          "亚太高速低延迟出口"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "飞跃 (Leap)",
        "traffic": "300 GB / 月",
        "price": "¥44.00 / 月",
        "discounted_price": "¥44.00/月 (¥0.14/GB)",
        "features": [
          "4K/8K 视频拖动无缓冲",
          "秒开 ChatGPT/Claude"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "瞬移 (Teleport)",
        "traffic": "600 GB / 月",
        "price": "¥84.00 / 月",
        "discounted_price": "¥84.00/月 (¥0.14/GB)",
        "features": [
          "大流量高清追剧与大文件下载",
          "多设备并发高速下载"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "旗舰海量 · 1TB 超大包",
        "traffic": "1000 GB (1TB) / 月",
        "price": "¥134.00 / 月",
        "discounted_price": "每 GB 仅需 ¥0.13",
        "features": [
          "跨境电商、外贸团队、高吞吐科研"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "闪跃不限时版",
        "traffic": "100 GB (永久有效)",
        "price": "¥150.00 / 一次性",
        "discounted_price": "¥150.00 买断",
        "features": [
          "长期有效不过期",
          "全量优质亚太核心专线"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "闪跃不限时版（高）",
        "traffic": "200 GB (永久有效)",
        "price": "¥288.00 / 一次性",
        "discounted_price": "¥288.00 买断",
        "features": [
          "无时间限制的高品质防失联",
          "全节点统一 x1 倍率"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      }
    ]
  },
  {
    "id": "worryfree",
    "name": "无忧链接",
    "rank": 13,
    "badge": "⚡ 优质专线",
    "category": "metered",
    "categoryLabel": "永不限时",
    "rating": 4.9,
    "reviewsCount": 3480,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 836,
    "speedRating": "8K 极速秒开",
    "latency": "平均 34ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "全 IPLC 专线",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全 IPLC 专线节点速率 ×1 (绝不虚标扣量)",
      "年付低至 ¥79/年 (折合 ¥6.58/月)",
      "4K/8K 流畅流媒体与 AI 专属解锁",
      "提供独享原生 IP 专业定制"
    ],
    "monthlyPrice": "¥19.00 / 月起",
    "priceRaw": "¥19.00",
    "traffic": "40 GB / 月",
    "annualDiscount": "¥79.00/年 (折合约 ¥6.58/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "wuyou666",
    "couponText": "wuyou666 (专属优惠码)",
    "affUrl": "https://wep01.worryfreeaff.com/#/?code=56A0RTpU",
    "reviewSlug": "/reviews/worryfree/",
    "recommendedFor": "适合追求永不限时、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "全链路 IPLC 物理专线架构，秒级网络响应。超低门槛 MINI 周期方案与永不过期一次性备用包无缝结合，全设备全客户端完美兼容，长效稳定不失联。",
    "packages": [
      {
        "name": "MINI链接",
        "traffic": "40 GB / 月",
        "price": "¥79.00 / 年",
        "discounted_price": "折合约 ¥6.58/月",
        "features": [
          "全 IPLC 专线",
          "1x 费率",
          "高可靠备用防失联"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "舒心链接",
        "traffic": "100 GB / 月",
        "price": "¥19.00 / 月",
        "discounted_price": "仅 ¥0.19/GB",
        "features": [
          "月付无压力",
          "晚高峰低延迟直连"
        ],
        "badge": "🎬 影音主力",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。"
      },
      {
        "name": "省心链接",
        "traffic": "200 GB / 月",
        "price": "¥33.00 / 月",
        "discounted_price": "仅 ¥0.165/GB",
        "features": [
          "上班族与科研学生最佳口粮",
          "充裕不焦虑"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "随心链接",
        "traffic": "500 GB / 月",
        "price": "¥77.00 / 月",
        "discounted_price": "仅 ¥0.154/GB",
        "features": [
          "4K/8K 极致流畅",
          "多设备全天候在线"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "旗舰海量 · 1TB 超级大包",
        "traffic": "1000 GB (1TB) / 月",
        "price": "¥117.00 / 月",
        "discounted_price": "每 GB 仅需 ¥0.117",
        "features": [
          "跨境电商、高并发下载首选"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "100G永久不限时 无忧链接",
        "traffic": "100 GB (永久有效)",
        "price": "¥98.00 / 一次性",
        "discounted_price": "¥98.00 买断",
        "features": [
          "一次购买永久有效",
          "出差旅游纯备用"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "300G永久不限时 无忧链接",
        "traffic": "300 GB (永久有效)",
        "price": "¥288.00 / 一次性",
        "discounted_price": "¥288.00 买断",
        "features": [
          "大容量买断首选",
          "全专线节点权限"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "无忧专业级定制套餐",
        "traffic": "500 GB / 月 独享专属流量",
        "price": "¥680.00 / 月",
        "discounted_price": "企业级定制",
        "features": [
          "独享原生 IP 杜绝风控",
          "独立带宽保障与专属部署"
        ],
        "badge": "💎 旗舰商业顶配",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。"
      }
    ]
  },
  {
    "id": "liulianyun",
    "name": "榴莲云",
    "rank": 14,
    "badge": "⚡ 优质专线",
    "category": "budget",
    "categoryLabel": "性价比神卡",
    "rating": 4.92,
    "reviewsCount": 3370,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 824,
    "speedRating": "8K 极速秒开",
    "latency": "平均 35ms 超低延迟",
    "uptime": "99.98%",
    "lineType": "全 IPLC/IEPL 国际物理专线 / BGP 高速调度",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全线采用旗舰级 IEPL/IPLC 国际物理专线，晚高峰 0 丢包稳定流畅",
      "全节点 1x 真实倍率扣费，单节点峰值最高 2.5Gbps，全程不限速",
      "原生 IP 纯净解锁 Netflix 4K、Disney+、YouTube 及 ChatGPT、Claude 全平台",
      "提供月付、季付、半年、年付至两年付多档阶梯优惠（低至 7 折）",
      "独家防腐系列一次性买断包（100GB/500GB），流量不限时、永不过期",
      "不限制客户端同时在线设备数，全面兼容 Windows、macOS、iOS、Android 全平台"
    ],
    "monthlyPrice": "¥15.00 / 月起",
    "priceRaw": "¥15.00",
    "traffic": "50 GB / 月",
    "annualDiscount": "¥96.00/年 (折合约 ¥8.00/月，金枕小包特惠)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "",
    "couponText": "全节点统一 1x 计费倍率，多周期低至 7 折优惠",
    "affUrl": "https://a01vipaff.liulianyunaff.com/#/?code=UrJ7H4Si",
    "reviewSlug": "/reviews/liulianyun/",
    "recommendedFor": "适合追求性价比神卡、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "专注打造高性价比旗舰级 IEPL/IPLC 跨境国际专线，全节点统一 1.0x 真实计费倍率。专线峰值最高达 2.5Gbps，晚高峰超低延迟绝不卡顿；全系列支持多周期阶梯优惠与防腐不限时买断包，深度解锁全平台 4K/8K 流媒体与主流 AI 工具。",
    "packages": [
      {
        "name": "金枕小包 · 年付特惠 ⚡",
        "badge": "热门 · 年付特惠",
        "subtitle": "活动套餐：适合小流量/新手用户，年付折算约 8 元/月。",
        "traffic": "60GB / 月",
        "price": "¥96.00 / 年",
        "discounted_price": "折合约 ¥8.00 /月",
        "available": "年付",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "活动套餐：适合小流量/新手用户，年付折算约 8 元/月",
          "流量政策：60GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "刷新规则：购买日起算，每 30 天自动刷新流量",
          "网络带宽：全 IPLC 专线，低延迟；单节点峰值最高 2.5Gbps",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok 等主流平台",
          "设备并发：不限制同时使用客户端数量，多设备自由在线",
          "客服支持：高效客服响应，快速处理使用问题"
        ]
      },
      {
        "name": "榴莲皮 🍃",
        "badge": "轻量尝鲜",
        "subtitle": "活动套餐：榴莲皮 · 轻量入门套餐，适合日常浏览、社交通讯与轻量使用。",
        "traffic": "50GB / 月",
        "price": "¥15.00 / 月",
        "discounted_price": "年付 8 折 ¥144/年 (折合 ¥12/月)",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "活动套餐：榴莲皮 · 轻量入门套餐",
          "每月 50GB 流量，适合日常浏览、社交通讯与轻量使用",
          "月付：15 元/月",
          "季付：40.50 元/季，享 9 折优惠",
          "半年付：76.50 元/半年，享 85 折优惠",
          "年付：144 元/年，享 8 折优惠 (折合 ¥12.00/月)",
          "流量不足时，可按需购买 8 元重置包",
          "全节点 1x 计费倍率，不限同时在线设备"
        ]
      },
      {
        "name": "小榴莲 🍈",
        "badge": "日常之选",
        "subtitle": "日常之选：兼顾日常需求与预算，网页浏览、社交与视频主力。",
        "traffic": "140GB / 月",
        "price": "¥24.00 / 月",
        "discounted_price": "两年付 7 折折合 ¥16.80/月",
        "available": "月付 / 季付 / 半年 / 年 / 两年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "日常之选：兼顾日常需求与预算",
          "流量额度：每月 140G，适合网页浏览、社交沟通与日常观看视频",
          "套餐价值：比轻享包每月多花 12 元，多享 80G 充足流量",
          "月付价格：24 元/月",
          "季付优惠：9 折，64.80 元/季",
          "半年优惠：8.5 折，122.40 元/半年",
          "年付优惠：8 折，230.40 元/年，折合 19.20 元/月",
          "两年优惠：7 折，403.20 元/两年，折合 16.80 元/月"
        ]
      },
      {
        "name": "好榴莲 ✨",
        "badge": "进阶优选",
        "subtitle": "进阶之选：追剧、学习、下载，使用更从容。",
        "traffic": "260GB / 月",
        "price": "¥40.00 / 月",
        "discounted_price": "两年付 7 折折合 ¥28.00/月",
        "available": "月付 / 季付 / 半年 / 年 / 两年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "进阶之选：追剧、学习、下载，使用更从容",
          "流量额度：每月 260G，适合经常观看视频、学习网课与下载文件",
          "套餐价值：比轻享包每月多花 16 元，多享 120G 流量",
          "月付价格：40 元/月",
          "季付优惠：9 折，108 元/季",
          "半年优惠：8.5 折，204 元/半年",
          "年付优惠：8 折，384 元/年，折合 32 元/月",
          "两年优惠：7 折，672 元/两年，折合 28 元/月"
        ]
      },
      {
        "name": "猫山王 👑",
        "badge": "高频重度",
        "subtitle": "重度之选：高频使用更从容，工作娱乐都有余量。",
        "traffic": "420GB / 月",
        "price": "¥60.00 / 月",
        "discounted_price": "两年付 7 折折合 ¥42.00/月",
        "available": "月付 / 季付 / 半年 / 年 / 两年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "重度之选：高频使用更从容，工作娱乐都有余量",
          "流量额度：每月 420G，适合频繁观看视频与下载文件的用户",
          "套餐价值：以轻享包 2.5 倍的月付价格，享受 3 倍充裕流量",
          "月付价格：60 元/月",
          "季付优惠：9 折，162 元/季",
          "半年优惠：8.5 折，306 元/半年",
          "年付优惠：8 折，576 元/年，折合 48 元/月",
          "两年优惠：7 折，1008 元/两年，折合 42 元/月"
        ]
      },
      {
        "name": "大黑刺 🖤",
        "badge": "海量旗舰",
        "subtitle": "海量之选：大流量，更实惠，为高用量而选。",
        "traffic": "800GB / 月",
        "price": "¥100.00 / 月",
        "discounted_price": "两年付 7 折折合 ¥70.00/月",
        "available": "月付 / 季付 / 半年 / 年 / 两年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "海量之选：大流量，更实惠，为高用量而选",
          "流量额度：每月 800G，适合大量观看超清视频与高频下载大型文件",
          "套餐价值：按月付计算每 100G 约 13.33 元，为各档周期套餐中单价最低",
          "月付价格：100 元/月",
          "季付优惠：9 折，270 元/季",
          "半年优惠：8.5 折，510 元/半年",
          "年付优惠：8 折，960 元/年，折合 80 元/月",
          "两年优惠：7 折，1680 元/两年，折合 70 元/月"
        ]
      },
      {
        "name": "防腐小榴莲 🛡️",
        "badge": "不限时买断 · 轻量备用",
        "subtitle": "活动套餐：学生党与轻度用户之选，一次性买断，永不过期。",
        "traffic": "100GB (买断)",
        "price": "¥99.00 / 终身",
        "discounted_price": "一次性买断 · 永不过期",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "防腐小榴莲 | 学生党与轻度用户之选",
          "一次性付费 ¥99，畅享 100GB 高速专线流量",
          "不限使用时间，用完为止，无需按月续费",
          "按实际使用扣减流量，非按月重置，按需使用更省心",
          "原生 IP 支持流媒体访问与 AI 工具深度解锁",
          "满足日常浏览、学习查资料与影音娱乐需求"
        ]
      },
      {
        "name": "防腐大榴莲 🏰",
        "badge": "不限时买断 · 海量长效",
        "subtitle": "活动套餐：大流量，随心用，一次性买断，永不过期。",
        "traffic": "500GB (买断)",
        "price": "¥498.00 / 终身",
        "discounted_price": "一次性买断 · 永不过期",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "防腐大榴莲 | 大流量，随心用",
          "一次性付费 ¥498，包含 500GB 旗舰专线流量",
          "不限使用时间，用完为止，无需按月续费",
          "告别月末清零焦虑，不用为了赶在月底用完流量而烦恼",
          "全线 IEPL/IPLC 优质专线，支持 4K/8K 流媒体与 AI 工具",
          "兼顾日常浏览、学习查资料、办公与影音娱乐"
        ]
      }
    ]
  },
  {
    "id": "dalao-cloud-backup",
    "name": "大佬云 (高速专线备用)",
    "rank": 15,
    "badge": "⚡ 尊享高可用",
    "category": "business",
    "categoryLabel": "企业专线备用",
    "rating": 4.93,
    "reviewsCount": 3260,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 812,
    "speedRating": "8K 极速秒开",
    "latency": "平均 36ms 超低延迟",
    "uptime": "99.98%",
    "lineType": "全 IPLC/IEPL 国际专线 / BGP 智能调度",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全线搭载旗舰级 IEPL/IPLC 物理专线，超低延迟与 99.9% 高可用 SLA",
      "全节点统一 x1 真实倍率扣费，晚高峰大带宽绝不限速",
      "覆盖香港、台湾、日本、韩国、美国、新加坡等多国核心骨干节点",
      "原生 IP 深度解锁 ChatGPT、Claude、ChatGPT Plus 及 Netflix、Disney+ 等全平台流媒体",
      "不限制在线设备数量，全面兼容 Windows、macOS、iOS、Android 及路由器全平台",
      "7×24 小时技术客服与专业运维在线，提供高效售后保障"
    ],
    "monthlyPrice": "¥19.99 / 月起",
    "priceRaw": "¥19.99",
    "traffic": "100 GB / 月",
    "annualDiscount": "¥96.00/年 (折合约 ¥8.00/月，年付活动包专享)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "",
    "couponText": "官方直通特惠通道，全线统一 1x 计费倍率",
    "affUrl": "https://a01vipaff.dalaoyunaff.com/#/?code=05KusH3b",
    "reviewSlug": "/reviews/dalao-cloud-backup/",
    "recommendedFor": "适合追求企业专线备用、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "全线搭载旗舰级 IEPL/IPLC 国际专线与优质 BGP 智能调度，单节点峰值最高 2.5Gbps。全节点 1x 真实计费倍率，晚高峰绝不限速；深度解锁 ChatGPT、Claude 及全平台流媒体，多端设备畅连无阻。",
    "packages": [
      {
        "name": "年付活动包 ⚡",
        "badge": "精选 · 年付力荐",
        "subtitle": "适用人群：适合小流量/新手用户，年付折算约 8 元/月。",
        "traffic": "60GB / 月",
        "price": "¥96.00 / 年",
        "discounted_price": "折合约 ¥8.00 /月",
        "available": "年付",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "适用人群：适合小流量/新手用户，年付折算约 8 元/月",
          "流量政策：60GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "刷新规则：购买日起算，每 30 天自动刷新流量",
          "网络带宽：全 IPLC 专线，低延迟；单节点峰值最高 2.5Gbps",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok 等主流平台",
          "设备并发：不限制同时使用客户端数量，多设备自由在线",
          "客服支持：高效客服响应，快速处理使用问题",
          "节点覆盖：香港×20、台湾×10、日本×10、新加坡×10、美国×10等"
        ]
      },
      {
        "name": "财云 · 福利版 💰",
        "badge": "热销爆款",
        "subtitle": "每天不到 ¥0.65，初入云端，自由畅连全网！",
        "traffic": "100GB / 月",
        "price": "¥19.99 / 月",
        "discounted_price": "每天仅需 ¥0.65",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每天不到 ¥0.65，初入云端，自由畅连全网！",
          "每月 100GB 充足流量，全节点 x1 倍率扣费，晚高峰绝不限速",
          "全线搭载旗舰级 IEPL 专线，超低延迟，99.9% 高可用 SLA 保证",
          "覆盖香港、台湾、日本、韩国、美国、新加坡等多国优质节点",
          "智能优选自动负载均衡，支持全节点动态自动切线",
          "深度解锁 ChatGPT、Claude、ChatGPT Plus 及全平台流媒体",
          "全面兼容 Windows、macOS、iOS、Android 及路由器等全平台",
          "7×24 小时技术客服与运维在线，随时解答，售后无忧"
        ]
      },
      {
        "name": "初云 · 进阶版 ☁️",
        "badge": "热门套餐",
        "subtitle": "每天不到 ¥0.8，初入云端，自有天地。",
        "traffic": "150GB / 月",
        "price": "¥25.00 / 月",
        "discounted_price": "每天仅需 ¥0.8",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每天不到 ¥0.8，初入云端，自有天地",
          "每月 150GB，适合日常浏览、AI 助手与影音娱乐",
          "IEPL 专线直连体验，极低延迟，智能优选路由",
          "全节点 x1 倍率，晚高峰不限速",
          "覆盖港台、日韩欧美及欧洲等热门地区",
          "原生 IP，支持 Netflix、Disney+、ChatGPT、TikTok 等",
          "电脑、手机、路由器通用，不限设备同时在线",
          "每 30 天重置流量，7×24 小时真人客服支持"
        ]
      },
      {
        "name": "凌云 · 基础版 🚀",
        "badge": "办公影音推荐",
        "subtitle": "每天约 ¥1.43，让每一次流淌，融入你的生活节奏。",
        "traffic": "300GB / 月",
        "price": "¥43.00 / 月",
        "discounted_price": "每天仅需 ¥1.43",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每天约 ¥1.43，让每一次流淌，融入你的生活节奏",
          "月度 300GB：兼顾日常使用、职场工作、学习与休闲",
          "全线 IPLC 专线：智能路由，跨区访问更顺畅",
          "全节点 x1 倍率，晚高峰不限速",
          "全球节点：港台、日韩新美及欧洲节点，满足多地区访问需求",
          "原生 IP，支持 Netflix、Disney+、ChatGPT、TikTok 等",
          "设备并发：不限制设备同时在线，电脑、手机、路由器自由连接",
          "每 30 天重置流量，7×24 小时真人客服支持"
        ]
      },
      {
        "name": "御云 · 高级版 👑",
        "badge": "高阶大流量",
        "subtitle": "每天约 ¥2.43，以高阶之势，承载更广阔的网络探索。",
        "traffic": "600GB / 月",
        "price": "¥73.00 / 月",
        "discounted_price": "每天仅需 ¥2.43",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "每天约 ¥2.43，以高阶之势，承载更广阔的网络探索",
          "月度 600GB：面向高强度使用，为极致体验的你而设",
          "极速专线：全线 IPLC 专线，单节点峰值带宽可达 2.5Gbps",
          "智能路由：全节点 x1 倍率，晚高峰不限速",
          "多国节点：节点遍布亚洲、欧洲、美洲，按需切换访问地区",
          "原生 IP：支持 Netflix、Disney+、ChatGPT、TikTok 等",
          "设备无忧：不限设备同时在线，兼顾电脑、手机与路由器",
          "售后保障：每 30 天重置流量，7×24 小时真人客服支持"
        ]
      },
      {
        "name": "闲云 · 随心包 🪩",
        "badge": "不限时买断 · 备用首选",
        "subtitle": "随心连接，让流量跟随你的节奏，永不过期。",
        "traffic": "200GB (买断)",
        "price": "¥268.00 / 终身",
        "discounted_price": "一次性买断 · 永不过期",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "随心连接，让流量跟随你的节奏，无需按月续费",
          "适用人群：适合偶尔使用、轻量浏览与备用连接的用户",
          "套餐价格：一次性付款 268 元，永不过期",
          "流量额度：总计 200GB，按实际使用扣减，非每月额度",
          "使用期限：不限时，用完即止",
          "流量规则：不按月重置，剩余流量持续保留，用完后可重新购买"
        ]
      },
      {
        "name": "悠云 · 长享包 🌊",
        "badge": "不限时买断 · 海量长效",
        "subtitle": "悠然上云，为未来的每一次连接留足余量。",
        "traffic": "500GB (买断)",
        "price": "¥498.00 / 终身",
        "discounted_price": "一次性买断 · 永不过期",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "悠然上云，为未来的每一次连接留足余量",
          "适用人群：适合长期低频使用、希望一次购买更多流量的用户",
          "套餐价格：一次性付款 498 元，无需按月续费",
          "流量额度：总计 500GB，按实际使用扣减，非每月额度",
          "使用期限：不限时，用完即止",
          "流量规则：不按月重置，剩余流量持续保留，用完后可重新购买"
        ]
      }
    ]
  },
  {
    "id": "shandianshu",
    "name": "闪电鼠",
    "rank": 16,
    "badge": "⚡ 极速专线",
    "category": "hys2",
    "categoryLabel": "疾速雷霆",
    "rating": 4.93,
    "reviewsCount": 3150,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 800,
    "speedRating": "8K 极速秒开",
    "latency": "平均 37ms 超低延迟",
    "uptime": "99.98%",
    "lineType": "全 IPLC/IEPL 国际专线 / 原生双 ISP 出口",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全线搭载新一代旗舰级 IEPL/IPLC 物理内网专线，晚高峰 0 丢包保障",
      "全节点统一 1x 真实倍率扣费，单节点峰值最高 2.5Gbps，全程不限速",
      "优选低延迟核心骨干节点，晚高峰自动智能调度，全天候稳定不掉线",
      "原生 IP 与原生双 ISP 纯净出口，深度解锁 ChatGPT、Claude 与 Netflix、Disney+ 等主流流媒体",
      "独家破风版与擎天版一次性买断包，流量永不过期，告别月续费与月末清零焦虑",
      "不限制同时在线客户端数量，电脑、手机、平板与路由器多端畅连无阻"
    ],
    "monthlyPrice": "¥19.88 / 月起",
    "priceRaw": "¥19.88",
    "traffic": "100 GB / 月",
    "annualDiscount": "¥96.00/年 (折合约 ¥8.00/月，限时钜惠包专享)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "",
    "couponText": "全节点 1x 真实倍率，全周期无套路极速直连",
    "affUrl": "https://a01vipaff.shandianshuaff.com/#/?code=aaIZUXfY",
    "reviewSlug": "/reviews/shandianshu/",
    "recommendedFor": "适合追求疾速雷霆、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "全线搭载新一代旗舰级 IEPL/IPLC 跨境物理专线与智能多线调度，峰值带宽最高可达 2.5Gbps。全节点 1x 真实计费倍率，晚高峰自动智能调度绝不拥堵；原生双 ISP 纯净出口深度解锁 ChatGPT、Claude 及 Netflix、Disney+ 4K/8K 流媒体，多端并发稳定不掉线。",
    "packages": [
      {
        "name": "限时钜惠小包 ⚡",
        "badge": "热门 · 限时特惠",
        "subtitle": "适用人群：适合小流量/新手用户，年付折算约 8 元/月。",
        "traffic": "60GB / 月",
        "price": "¥96.00 / 年",
        "discounted_price": "折合约 ¥8.00 /月",
        "available": "年付",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "适用人群：适合小流量/新手用户，年付折算约 8 元/月",
          "流量政策：60GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "刷新规则：购买日起算，每 30 天自动刷新流量",
          "网络带宽：全 IPLC 专线，低延迟；单节点峰值最高 2.5Gbps",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok 等主流平台",
          "设备并发：不限制同时使用客户端数量，多设备自由在线",
          "客服支持：高效客服响应，快速处理使用问题",
          "节点覆盖：香港×20、台湾×10、日本×10、新加坡×10、美国×10 等"
        ]
      },
      {
        "name": "闪电鼠 · 性价比版 💰",
        "badge": "入门优选",
        "subtitle": "日均低至 ¥0.66，体验专线级丝滑连通。",
        "traffic": "100GB / 月",
        "price": "¥19.88 / 月",
        "discounted_price": "日均低至 ¥0.66",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "日均低至 ¥0.66，体验专线级丝滑连通",
          "每月 100GB 充足流量，支持多设备并发在线",
          "优选低延迟节点，晚高峰自动智能调度，稳定不掉线",
          "全节点解锁 ChatGPT / Claude 等 AI 助手及 Netflix 4K",
          "覆盖港台、日韩新美及欧洲等热门地区",
          "原生 IP，支持 Netflix、Disney+、ChatGPT、TikTok 等",
          "电脑、手机、路由器通用，不限设备同时在线",
          "每 30 天重置流量，7×24 小时真人客服支持"
        ]
      },
      {
        "name": "闪电鼠 · 进阶版 ☁️",
        "badge": "日常畅连",
        "subtitle": "每天不到 ¥0.84，轻松连接全球精彩。",
        "traffic": "150GB / 月",
        "price": "¥24.88 / 月",
        "discounted_price": "每天不到 ¥0.84",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每天不到 ¥0.84，轻松连接全球精彩",
          "每月 150GB，适合日常浏览、AI 助手与影音娱乐",
          "IEPL 专线直连体验，低延迟，智能优选路由",
          "全节点 x1 倍率，晚高峰不限速",
          "覆盖港台、日韩新美及欧洲等热门地区",
          "原生 IP，支持 Netflix、Disney+、ChatGPT、TikTok 等",
          "电脑、手机、路由器通用，不限设备同时在线",
          "每 30 天重置流量，7×24 小时真人客服支持"
        ]
      },
      {
        "name": "闪电鼠 · 疾速版 🚀",
        "badge": "影音追剧推荐",
        "subtitle": "每天约 ¥1.33，让全球影音与 AI 随时在线。",
        "traffic": "250GB / 月",
        "price": "¥38.88 / 月",
        "discounted_price": "每天约 ¥1.33",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每天约 ¥1.33，让全球影音与 AI 随时在线",
          "每月 250GB，兼顾追剧娱乐、学习办公与多端使用",
          "全线 IEPL 专线，智能路由，跨区访问更顺畅",
          "全节点 x1 倍率，晚高峰不限速",
          "港台、日韩新美及欧洲节点，满足多地区访问需求",
          "原生 IP，支持 Netflix、Disney+、ChatGPT、TikTok 等",
          "不限设备同时在线，电脑、手机、路由器自由连接",
          "每 30 天重置流量，7×24 小时真人客服支持"
        ]
      },
      {
        "name": "闪电鼠 · 雷霆版 ⚡",
        "badge": "大流量旗舰",
        "subtitle": "每天约 ¥2.33，大流量畅享全球数字生活。",
        "traffic": "500GB / 月",
        "price": "¥68.88 / 月",
        "discounted_price": "每天约 ¥2.33",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "每天约 ¥2.33，大流量畅享全球数字生活",
          "每月 500GB，适合高频影音、跨区办公与多设备使用",
          "全线 IEPL 专线，单节点峰值带宽可达 2.5Gbps",
          "智能优选路由，全节点 x1 倍率，晚高峰不限速",
          "节点遍布亚洲、欧洲、美洲，按需切换访问地区",
          "原生 IP，支持 Netflix、Disney+、ChatGPT、TikTok 等",
          "不限设备同时在线，覆盖电脑、手机与路由器",
          "每 30 天重置流量，7×24 小时真人客服支持"
        ]
      },
      {
        "name": "闪电鼠 · 破风版 🌪️",
        "badge": "不限时买断 · 高速专线",
        "subtitle": "220GB 高速专线流量，晚高峰自动智能调度，永不过期。",
        "traffic": "220GB (买断)",
        "price": "¥198.00 / 终身",
        "discounted_price": "一次性买断 · 永不过期",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "220GB 高速专线流量，一次性买断永不过期",
          "晚高峰自动智能调度，超低延迟抗网络抖动",
          "全节点解锁 ChatGPT / Claude 等主流 AI 与 4K/8K 流媒体",
          "支持多设备并发在线，适合中度科研办公与高清影音体验",
          "按实际使用扣减流量，无需按月续费，用完为止"
        ]
      },
      {
        "name": "闪电鼠 · 擎天版 🛡️",
        "badge": "不限时买断 · 尊享双ISP",
        "subtitle": "688GB 旗舰充沛流量，尊享原生双 ISP 纯净出口，企业级专线。",
        "traffic": "688GB (买断)",
        "price": "¥468.00 / 终身",
        "discounted_price": "一次性买断 · 永不过期",
        "available": "一次性买断 · 永不过期",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "688GB 旗舰充沛流量，尊享原生双 ISP 纯净出口",
          "多端并发无阻碍，完美适配出海电商、跨境办公与全天候 AI 编程",
          "企业级 IEPL 内网专线直连，晚高峰零丢包保障",
          "一次性付费买断，不限使用时间，用完为止",
          "支持全平台 4K/8K 极致秒开与 ChatGPT/Claude 深度访问"
        ]
      }
    ]
  },
  {
    "id": "huanqiuti",
    "name": "环球梯",
    "rank": 17,
    "badge": "⚡ 优质专线",
    "category": "flagship",
    "categoryLabel": "环球全覆盖",
    "rating": 4.92,
    "reviewsCount": 3040,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 788,
    "speedRating": "8K 极速秒开",
    "latency": "平均 38ms 超低延迟",
    "uptime": "99.98%",
    "lineType": "全 IPLC/IEPL 国际专线 / 全球多线智能接入",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全球优质原生/高速节点覆盖，全节点统一 1.0x 真实计费倍率",
      "晚高峰大带宽保障，超低延迟抗抖动，4K/8K 视频秒开不卡顿",
      "完美解锁 Netflix、Disney+、YouTube 4K 及 ChatGPT、Claude 全套 AI 工具",
      "提供月付、季付、半年、年付订阅及专属学生年付福利套餐（¥96/年）",
      "拥有 30GB、80GB、400GB、1.0TB 多档不限时一次性买断长效储备包",
      "不限制同时在线设备数量，全平台客户端通用支持，7×24 小时技术保障"
    ],
    "monthlyPrice": "¥19.00 / 月起",
    "priceRaw": "¥19.00",
    "traffic": "110 GB / 月",
    "annualDiscount": "¥96.00/年 (折合约 ¥8.00/月，环球学生套餐专享)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "",
    "couponText": "全节点 1x 真实倍率，多地区智能优选路由",
    "affUrl": "https://a01vipaff.huanqiutiaff.com/#/?code=1TJh9vmR",
    "reviewSlug": "/reviews/huanqiuti/",
    "recommendedFor": "适合追求环球全覆盖、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "专为全球跨境连接打造的综合专线服务商，搭载全球优质原生与高速骨干节点。全节点统一 1.0x 真实倍率，晚高峰大带宽保障，4K/8K 视频秒开不卡顿；全系列覆盖学生优惠、日常畅享、极客大容量及不限时买断备用包，深度解锁主流 AI 与全平台流媒体。",
    "packages": [
      {
        "name": "环球学生套餐 🎓",
        "badge": "热门 · 学生专享",
        "subtitle": "适合轻度使用与个人用户，年付折算约 8 元/月。",
        "traffic": "60GB / 月",
        "price": "¥96.00 / 年",
        "discounted_price": "折合约 ¥8.00 /月",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适合轻度使用与个人用户，年付折算约 8 元/月",
          "每月 60GB 高速流量（全节点 1x 倍率，晚高峰不限速）",
          "流量每月自动重置",
          "解锁常用流媒体与 AI 服务（ChatGPT、Netflix 等）",
          "多地区线路智能选择，低延迟抗抖动",
          "不限同时在线设备，多端畅连",
          "流量不足时支持流量重置包：¥15/次"
        ]
      },
      {
        "name": "环球轻享 🍃",
        "badge": "轻量入门",
        "subtitle": "适合轻度使用与个人用户，日常社交与网页浏览。",
        "traffic": "110GB / 月",
        "price": "¥19.00 / 月",
        "discounted_price": "每月 110-120GB 流量",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适合轻度使用与个人用户",
          "每月 110GB~120GB 高速流量，满足日常工作与社交",
          "流量每月自动重置，全程不限速",
          "解锁常用流媒体与主流 AI 服务",
          "多地区线路智能选择，稳定不掉线",
          "不限设备并发，全平台客户端通用支持",
          "流量重置包：¥18/次"
        ]
      },
      {
        "name": "环球畅享 🚀",
        "badge": "主力首选",
        "subtitle": "全球优质原生/高速节点覆盖，畅联全球网络。",
        "traffic": "200GB / 月",
        "price": "¥29.00 / 月",
        "discounted_price": "晚高峰大带宽保障",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全球优质原生/高速节点覆盖，畅联全球网络",
          "晚高峰大带宽保障，4K/8K 视频秒开不卡顿",
          "完美解锁主流流媒体平台及 AI 常用工具",
          "支持多设备并发在线，全平台客户端通用支持",
          "全节点统一 1.0x 真实倍率扣费",
          "每 30 天自动刷新流量，售后无忧"
        ]
      },
      {
        "name": "环球畅游 🌊",
        "badge": "影音办公推荐",
        "subtitle": "适合日常高清视频、办公及多设备使用。",
        "traffic": "280GB / 月",
        "price": "¥39.00 / 月",
        "discounted_price": "每月 280GB 高速流量",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适合日常高清视频、办公及多设备使用",
          "每月 280GB 高速流量，充沛不焦虑",
          "流量每月自动重置",
          "优质线路与高峰期专属调度优化",
          "支持常用流媒体与 AI 服务深度访问",
          "不限设备在线，流量重置包：¥36/次"
        ]
      },
      {
        "name": "环球进阶 ⚡",
        "badge": "进阶优选",
        "subtitle": "中度高频用户进阶优选，4K 流媒体与高频下载无忧。",
        "traffic": "420GB / 月",
        "price": "¥52.00 / 月",
        "discounted_price": "黄金容量 · 晚高峰抗丢包",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "中度高频用户进阶优选，4K 流媒体与高频下载无忧",
          "专为影视爱好者与多任务日常办公打造的黄金容量套餐",
          "每月 420 GB 充沛流量，全天候晚高峰抗丢包保障",
          "流畅支持 4K/8K 超高清流媒体播放",
          "深度解锁 ChatGPT、Claude 及全平台流媒体",
          "不限制在线设备数，全平台通用客户端支持"
        ]
      },
      {
        "name": "环球尊享 👑",
        "badge": "高阶大流量",
        "subtitle": "适合重度用户、家庭共享和高流量需求。",
        "traffic": "600GB / 月",
        "price": "¥69.00 / 月",
        "discounted_price": "高优先级精品线路",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适合重度用户、家庭共享和高流量需求",
          "每月 600GB 高速流量，满足全家或工作室日常调用",
          "流量每月自动重置",
          "接入高优先级精品骨干线路，高峰期稳定性大幅优化",
          "支持 4K 流媒体与多设备同时在线",
          "流量重置包：¥63/次"
        ]
      },
      {
        "name": "环球极客 💻",
        "badge": "极客海量",
        "subtitle": "大户重度专享，多端并发与大流量传输旗舰之选。",
        "traffic": "1.2TB / 月",
        "price": "¥128.00 / 月",
        "discounted_price": "每月 1200GB 极客级超大容量",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "大户重度专享，多端并发与大流量传输旗舰之选",
          "专为重度网络玩家、家庭多端共享及跨国协作工作室定制",
          "每月 1200 GB (1.2TB) 极客级超大容量",
          "提供最高优先级接入通道与卓越网络吞吐表现",
          "原生 IP 深度解锁，全天候无阻碍极速传输",
          "不限制设备在线数，电脑、手机、软路由全支持"
        ]
      },
      {
        "name": "环球备用包 🛡️",
        "badge": "不限时买断 · 应急备用",
        "subtitle": "永不过期应急包，关键时刻稳定备灾。",
        "traffic": "30GB (买断)",
        "price": "¥39.00 / 终身",
        "discounted_price": "一次性买断 · 永不过期",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "永不过期应急包，关键时刻稳定备灾",
          "不受自然月限制的永久有效流量包，无需按月续费",
          "提供 30 GB 弹性备用配额，按实际使用扣除",
          "适合商务出差应急、突发断线备灾或轻度低频使用",
          "晚高峰高优先级专线通道保障",
          "支持多端同时在线与全平台流媒体"
        ]
      },
      {
        "name": "环球随行包 🧳",
        "badge": "长效买断 · 差旅随行",
        "subtitle": "一次购买按量使用，流量不按月清零，长效有效。",
        "traffic": "80GB (买断)",
        "price": "¥99.00 / 终身",
        "discounted_price": "一次性购买 · 不按月清零",
        "available": "一次性买断 · 长期有效",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "一次购买，按量使用，不属于月付订阅套餐",
          "套餐流量不会按月清零，长期有效，用完为止",
          "80GB 独立配额，按实际使用扣减，告别月末清零压力",
          "适合商旅出差、海外差旅及日常轻度备用",
          "晚高峰专线直连，全节点支持流媒体与 AI 服务",
          "不限制同时在线客户端数量"
        ]
      },
      {
        "name": "环球灵活包 🎯",
        "badge": "长效买断 · 灵活充沛",
        "subtitle": "一次购买按量使用，400GB 大容量，不按月清零。",
        "traffic": "400GB (买断)",
        "price": "¥299.00 / 终身",
        "discounted_price": "400GB 充沛按量买断",
        "available": "一次性买断 · 长期有效",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "一次购买，按量使用，不属于月付订阅套餐",
          "套餐流量不会按月清零，长效有效，随用随扣",
          "400GB 充沛按量买断流量，无需按月续费",
          "晚高峰智能专线调度，超低延迟抗抖动",
          "支持多设备并发在线与 4K/8K 流媒体全解锁",
          "适合中度科研办公、多端协作与长期影音娱乐"
        ]
      },
      {
        "name": "环球海量包 🌐",
        "badge": "长效买断 · 1TB 超大储备",
        "subtitle": "长效不限时大容量储备，随用随扣无续费压力。",
        "traffic": "1.0TB (买断)",
        "price": "¥688.00 / 终身",
        "discounted_price": "1000GB 充裕买断储备",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "长效不限时大容量储备，随用随扣无续费压力",
          "自由支配的超大容量不限时储备包，无固定到期周期",
          "1000 GB (1.0TB) 充裕专线流量，用完为止",
          "特别适合长期按需调用的开发者、工作室与大流量用户",
          "骨干专线最高优先级调度保障，晚高峰畅通无阻",
          "不限并发设备，全平台客户端通用支持"
        ]
      }
    ]
  },
  {
    "id": "shenxing",
    "name": "神行加速",
    "rank": 18,
    "badge": "⚡ 极速专线",
    "category": "metered",
    "categoryLabel": "灵活随行",
    "rating": 4.93,
    "reviewsCount": 2930,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 776,
    "speedRating": "8K 极速秒开",
    "latency": "平均 39ms 超低延迟",
    "uptime": "99.98%",
    "lineType": "全 IPLC 物理专线 / BGP 三网优化 / VLESS 协议",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全线搭载旗舰级 IPLC 国际专线，BGP 三网智能调度优化与 VLESS 协议",
      "单节点峰值带宽最高可达 2.5Gbps，全节点 1x 真实倍率扣费，晚高峰绝不限速",
      "全球 50+ 优质节点集群覆盖（香港×20、台湾×10、日本×10、新加坡×10、美欧等）",
      "原生 IP 纯净解锁 Netflix 4K、Disney+、YouTube HDR 及 ChatGPT、Claude 全套 AI 工具",
      "提供不限时买断小包与大包（100GB/333GB），流量永不过期，按需使用更省心",
      "不限制同时在线客户端数量，全面支持 Windows、macOS、iOS、Android 及软路由全平台"
    ],
    "monthlyPrice": "¥19.88 / 月起",
    "priceRaw": "¥19.88",
    "traffic": "100 GB / 月",
    "annualDiscount": "¥96.00/年 (折合约 ¥8.00/月，年付特惠版专享)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "sx0077",
    "couponText": "专属优惠码 sx0077 享首单 7 折特惠",
    "affUrl": "https://a01vipaff.shenxingaff.com/#/?code=eLqnwBCM",
    "reviewSlug": "/reviews/shenxing/",
    "recommendedFor": "适合追求灵活随行、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "全线搭载旗舰级 IPLC 国际物理专线与 BGP 三网智能优化，全面支持先进 VLESS 协议。单节点峰值最高可达 2.5Gbps，全节点统一 1.0x 真实计费倍率，晚高峰超低延迟绝不限速；原生 IP 纯净解锁 4K/HDR 影视与主流 AI 助手，多设备并发自由在线。",
    "packages": [
      {
        "name": "神行 · 年付特惠版 ⚡",
        "badge": "热门 · 年付特惠",
        "subtitle": "适用人群：适合小流量/新手用户，年付折算约 8 元/月，不参与 7 折优惠。",
        "traffic": "60GB / 月",
        "price": "¥96.00 / 年",
        "discounted_price": "折合约 ¥8.00 /月",
        "available": "年付",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "适用人群：适合小流量/新手用户，年付折算约 8 元/月（不参与 7 折优惠）",
          "流量政策：60GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "刷新规则：购买日起算，每 30 天自动刷新流量",
          "网络带宽：全 IPLC 专线，低延迟；单节点峰值最高 2.5Gbps",
          "线路协议：BGP 三网优化，支持先进 VLESS 协议",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok 等主流平台",
          "节点数量：50+ 核心节点（香港×20、台湾×10、日本×10、新加坡×10、美国等）",
          "设备并发：不限制设备连接数，多设备自由在线"
        ]
      },
      {
        "name": "神行 · 性价比包 💰",
        "badge": "入门优选 · 7折券",
        "subtitle": "优惠政策：神行优惠码 (sx0077) 享首单 7 折优惠。",
        "traffic": "100GB / 月",
        "price": "¥19.88 / 月",
        "discounted_price": "7折券后 ¥13.92/月",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "优惠政策：输入优惠码 sx0077 享首单 7 折优惠",
          "适用人群：适合查阅文献、社交通讯、每日主力翻墙、高画质看剧 (4K/HDR)",
          "流量政策：100GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "刷新规则：购买日起算，每月自动重置",
          "网络带宽：全 IPLC 专线，低延迟；单节点峰值最高 2.5Gbps",
          "解锁能力：原生 IP，深度解锁 Netflix / Disney+ / ChatGPT / Claude 等",
          "设备并发：不限制同时使用客户端数量，多设备自由在线",
          "客服支持：高效客服响应，快速处理使用问题"
        ]
      },
      {
        "name": "神行 · 基础包 ☁️",
        "badge": "日常主力 · 7折券",
        "subtitle": "优惠政策：神行优惠码 (sx0077) 享首单 7 折优惠。",
        "traffic": "150GB / 月",
        "price": "¥24.88 / 月",
        "discounted_price": "7折券后 ¥17.42/月",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "优惠政策：输入优惠码 sx0077 享首单 7 折优惠",
          "适用人群：适合查阅文献、社交通讯、每日主力翻墙、高画质看剧 (4K/HDR)",
          "流量政策：150GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "刷新规则：购买日起算，每月自动重置",
          "网络带宽：全 IPLC 专线，低延迟；单节点峰值最高 2.5Gbps",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok 等主流平台",
          "设备并发：不限制同时使用客户端数量，多设备自由在线",
          "客服支持：高效客服响应，快速处理使用问题"
        ]
      },
      {
        "name": "神行 · 进阶包 🚀",
        "badge": "大流量下载 · 7折券",
        "subtitle": "优惠政策：神行优惠码 (sx0077) 享首单 7 折优惠。",
        "traffic": "300GB / 月",
        "price": "¥38.88 / 月",
        "discounted_price": "7折券后 ¥27.22/月",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "优惠政策：输入优惠码 sx0077 享首单 7 折优惠",
          "适用人群：适合大流量下载、多设备软路由分流与高清影视狂揽",
          "流量政策：300GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "刷新规则：购买日起算，每月自动重置",
          "网络带宽：全 IPLC 专线，低延迟；单节点峰值最高 2.5Gbps",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / Claude 等全平台",
          "设备并发：不限制同时使用客户端数量，多设备自由在线",
          "客服支持：高效客服响应，快速处理使用问题"
        ]
      },
      {
        "name": "神行 · 尊享包 👑",
        "badge": "工作室海量 · 7折券",
        "subtitle": "优惠政策：神行优惠码 (sx0077) 享首单 7 折优惠。",
        "traffic": "666GB / 月",
        "price": "¥68.88 / 月",
        "discounted_price": "7折券后 ¥48.22/月",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "优惠政策：输入优惠码 sx0077 享首单 7 折优惠",
          "适用人群：适合大流量下载、多设备软路由分流、大量下载、工作室等",
          "流量政策：666GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "刷新规则：购买日起算，每月自动重置",
          "网络带宽：全 IPLC 专线，低延迟；单节点峰值最高 2.5Gbps",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / Claude 全面解锁",
          "设备并发：不限制同时使用客户端数量，多设备自由在线",
          "客服支持：高效客服响应，快速处理使用问题"
        ]
      },
      {
        "name": "神行 · 不限时小包 🛡️",
        "badge": "不限时买断 · 备用优选",
        "subtitle": "一次购买，流量不限使用期限，适合不需要固定月度流量的用户。",
        "traffic": "100GB (买断)",
        "price": "¥99.00 / 终身",
        "discounted_price": "一次性买断 · 永不过期",
        "available": "一次性买断 · 永不过期",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "一次购买，流量不限使用期限，适合不需要固定月度流量的用户",
          "100GB 不限时按量流量，用完即止，无需按月续费",
          "按实际使用扣减流量，剩余额度永久保留",
          "全节点统一 1.0x 真实倍率扣费，晚高峰不限速",
          "全线 IPLC 专线低延迟直连，支持流媒体与 AI 工具",
          "不限制同时在线设备数量，全平台客户端通用"
        ]
      },
      {
        "name": "神行 · 不限时大包 🌐",
        "badge": "不限时买断 · 充沛储备",
        "subtitle": "一次购买，流量不限使用期限，适合不需要固定月度流量的用户。",
        "traffic": "333GB (买断)",
        "price": "¥298.00 / 终身",
        "discounted_price": "一次性买断 · 永不过期",
        "available": "一次性买断 · 永不过期",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "一次购买，流量不限使用期限，适合不需要固定月度流量的用户",
          "333GB 充沛专线储备流量，永不过期，用完即止",
          "按实际使用扣减流量，无固定到期周期，告别清零烦恼",
          "全线 IPLC 专线直连，单节点峰值最高 2.5Gbps",
          "全节点 x1 真实倍率，深度解锁 Netflix、Disney+ 与 ChatGPT、Claude",
          "不限制同时在线设备数量，兼顾手机、电脑与路由器"
        ]
      }
    ]
  },
  {
    "id": "yunjiexian",
    "name": "云界线",
    "rank": 19,
    "badge": "⚡ 优质专线",
    "category": "budget",
    "categoryLabel": "亲民大碗",
    "rating": 4.92,
    "reviewsCount": 2820,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 764,
    "speedRating": "8K 极速秒开",
    "latency": "平均 40ms 超低延迟",
    "uptime": "99.98%",
    "lineType": "BGP 入口 + IEPL 高速专线 / 全光纤互联",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "搭载优质 BGP + IEPL 国际高速专线与全光纤互联架构，晚高峰流畅不限速",
      "全节点统一 1.0x 真实倍率扣费，全天候保障充足带宽冗余",
      "原生 IP 纯净深度解锁 Netflix、Disney+、YouTube 4K 及 ChatGPT、Claude 全套 AI 工具",
      "提供专属 7 折优惠码（yjx888），首单月付低至 ¥13.92",
      "独家拥有 50GB、100GB、200GB、500GB 多档永久有效不限时买断包，无清零焦虑",
      "不限制同时在线客户端数量，全面支持 Windows、macOS、iOS、Android 全平台"
    ],
    "monthlyPrice": "¥19.88 / 月起",
    "priceRaw": "¥19.88",
    "traffic": "100 GB / 月",
    "annualDiscount": "¥96.00/年 (折合约 ¥8.00/月，年付特惠版专享)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "yjx888",
    "couponText": "专属优惠码 yjx888 享首单 7 折专享折扣",
    "affUrl": "https://a01vipaff.yunjiexianaff.com/#/?code=WVSnJ3V6",
    "reviewSlug": "/reviews/yunjiexian/",
    "recommendedFor": "适合追求亲民大碗、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "全线搭载旗舰级 BGP 三网融合入口与 IEPL 国际高速专线，全节点统一 1.0x 真实计费倍率。专线大带宽保障晚高峰超低延迟、稳定不降速；覆盖从轻量日常、跨国办公、高频生产力到多档不限时买断储备包，深度解锁主流 AI 与全平台 4K/8K 流媒体。",
    "packages": [
      {
        "name": "云界线 · 年付特惠版 ⚡",
        "badge": "精选 · 年付力荐",
        "subtitle": "轻度网络用户首选，日常网页浏览、社交沟通与轻量办公。",
        "traffic": "60GB / 月",
        "price": "¥96.00 / 年",
        "discounted_price": "折合约 ¥8.00 /月",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适用人群：轻度网络用户，日常网页浏览、社交沟通与轻量办公",
          "流量政策：60GB/月高速流量，流量每月自动重置",
          "资费方案：超值年付仅需 96.00 元（折合每月仅 8 元）",
          "服务保障：全节点接入，晚高峰稳定不降速",
          "不限制在线设备数，多端畅连无阻",
          "支持常用流媒体与 AI 服务访问"
        ]
      },
      {
        "name": "云界线 · 性价比包 💰",
        "badge": "热销爆款 · 7折券",
        "subtitle": "输入优惠码【yjx888】享 7 折专享折扣！首单月付仅需 ¥13.92。",
        "traffic": "100GB / 月",
        "price": "¥19.88 / 月",
        "discounted_price": "7折券后 ¥13.92/月",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "输入优惠码【yjx888】享 7 折专享折扣！首单月付仅需 ¥13.92",
          "适用人群：适合查阅文献、社交通讯、主力翻墙、画质看剧 (4K/HDR)",
          "流量政策：100GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "重置规则：流量按月自动重置",
          "全线专线低延迟，智能自动调度",
          "不限制同时使用客户端数量，多设备自由在线"
        ]
      },
      {
        "name": "云界线 · 基础包 ☁️",
        "badge": "日常主力 · 7折券",
        "subtitle": "输入优惠码【yjx888】享 7 折优惠！首单月付仅需 ¥17.42。",
        "traffic": "150GB / 月",
        "price": "¥24.88 / 月",
        "discounted_price": "7折券后 ¥17.42/月",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "输入优惠码【yjx888】享 7 折优惠！首单月付仅需 ¥17.42",
          "适用人群：日常重度浏览、外贸办公、多设备主力使用",
          "流量政策：150GB/月高速纯专线流量（节点全倍率 1.0）",
          "流媒体解锁：支持 Netflix、Disney+、YouTube 4K 及主流 AI 工具",
          "重置规则：流量按月自动重置",
          "不限设备并发，全天候极速稳定"
        ]
      },
      {
        "name": "云界线 · 进阶包 🚀",
        "badge": "大流量下载 · 7折券",
        "subtitle": "输入优惠码【yjx888】立享 7 折！首单月付仅需 ¥27.22。",
        "traffic": "300GB / 月",
        "price": "¥38.88 / 月",
        "discounted_price": "7折券后 ¥27.22/月",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "输入优惠码【yjx888】立享 7 折！首单月付仅需 ¥27.22",
          "适用人群：大流量用户、跨国远程办公、极速下载与高码率串流",
          "流量政策：300GB/月顶级专线流量，全天候保障带宽冗余",
          "重置规则：流量按月自动重置",
          "全节点 x1 倍率扣费，晚高峰绝不限速",
          "设备并发不设限制，电脑、手机、路由器通用"
        ]
      },
      {
        "name": "云界线 · 旗舰包 👑",
        "badge": "高阶生产力 · 7折券",
        "subtitle": "输入优惠码【yjx888】享 7 折专享折扣！首单月付仅需 ¥48.22。",
        "traffic": "520GB / 月",
        "price": "¥68.88 / 月",
        "discounted_price": "7折券后 ¥48.22/月",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "输入优惠码【yjx888】享 7 折专享折扣！首单月付仅需 ¥48.22",
          "适用人群：适合 AI 高频生产力 (ChatGPT/Claude)、8K/4K 影视发烧友",
          "线路保障：BGP + IEPL 高速专线，全节点解锁主流流媒体与 AI 工具",
          "流量政策：520GB/月充沛专线配额，全天候带宽充足",
          "晚高峰高优先级调度保障，不限设备在线",
          "按月自动重置流量，售后技术支持保障"
        ]
      },
      {
        "name": "云界线 · 50G 不限时包 🍃",
        "badge": "不限时买断 · 轻量应急",
        "subtitle": "轻度低频用户、备用应急网络、临时出差或 AI 工具日常查询。",
        "traffic": "50GB (买断)",
        "price": "¥48.88 / 终身",
        "discounted_price": "一次性买断 · 长期有效",
        "available": "一次性买断 · 长期有效",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适用人群：轻度低频用户、备用应急网络、临时出差或 AI 工具日常查询",
          "流量政策：50GB 高速专线流量，全节点 x1 倍率无限制",
          "有效期限：不限到期时间，流量用完即止（长期有效）",
          "按实际使用扣减流量，告别按月续费压力",
          "支持全平台主流客户端与流媒体访问"
        ]
      },
      {
        "name": "云界线 · 100G 不限时包 🛡️",
        "badge": "不限时买断 · 备用补充",
        "subtitle": "日常网页浏览、社交与 AI 轻办公用户、主力套餐防断连补充。",
        "traffic": "100GB (买断)",
        "price": "¥98.88 / 终身",
        "discounted_price": "一次性买断 · 无清零焦虑",
        "available": "一次性买断 · 长期有效",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适用人群：日常网页浏览、社交与 AI 轻办公用户、主力套餐防断连补充",
          "流量政策：100GB 高速专线流量，全节点 x1 倍率，全天候极低延迟",
          "有效期限：不限到期时间，无月底清零焦虑，用完即止",
          "无需按月续费，剩余流量永久保留",
          "不限制同时在线设备，全平台兼容"
        ]
      },
      {
        "name": "云界线 · 200G 一次性包 🧳",
        "badge": "不限时买断 · 差旅黄金包",
        "subtitle": "轻度低频用户、备用网络、短期出差或主力套餐防断连。",
        "traffic": "200GB (买断)",
        "price": "¥199.00 / 终身",
        "discounted_price": "全光纤专线互联 · 长期有效",
        "available": "一次性买断 · 长期有效",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适用人群：轻度低频用户、备用网络、短期出差或主力套餐防断连",
          "流量政策：200GB 高速专线流量，全节点 x1 倍率",
          "有效期限：不限到期时间，流量用完即止（长期有效）",
          "网络保障：全光纤专线互联，晚高峰流畅不限速，支持 4K/HDR 串流",
          "支持多端并发自由在线，无需周期性续费"
        ]
      },
      {
        "name": "云界线 · 尊享不限时包 🌐",
        "badge": "不限时买断 · 500G 海量储备",
        "subtitle": "大流量需求、跨国办公、流媒体深度玩家、无周期续费压力。",
        "traffic": "500GB (买断)",
        "price": "¥499.00 / 终身",
        "discounted_price": "永久有效 · 顶级专线",
        "available": "一次性买断 · 永久有效",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适用人群：大流量需求、跨国办公、流媒体深度玩家、无周期续费压力",
          "流量政策：500GB 顶级专线流量，高速通道保障",
          "有效期限：永久有效无到期日限制，用完为止",
          "专属优势：极速低延迟，全天候保障带宽冗余，支持多设备并发",
          "原生 IP 纯净解锁全平台流媒体与 AI 工具"
        ]
      }
    ]
  },
  {
    "id": "kuajie",
    "name": "跨界云",
    "rank": 20,
    "badge": "⚡ 优质专线",
    "category": "business",
    "categoryLabel": "出海跨境",
    "rating": 4.9,
    "reviewsCount": 2710,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 752,
    "speedRating": "8K 极速秒开",
    "latency": "平均 41ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "IPLC 高端专线网络",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "IPLC 高端线路，全程不限速，所有节点 1 倍率",
      "官方自带年付 8折 / 两年 7折 / 三年 6折，优惠码可叠加",
      "设备连接数不限制",
      "不限时包支持 9 折手动重置流量特权"
    ],
    "monthlyPrice": "¥20.00 / 月起",
    "priceRaw": "¥20.00",
    "traffic": "60 GB / 月",
    "annualDiscount": "¥96.00/年 (折合约 ¥8.00/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "kuajie",
    "couponText": "kuajie (专属优惠码)",
    "affUrl": "https://vip02.kuajieaff.com/#/?code=VfWeYwHM",
    "reviewSlug": "/reviews/kuajie/",
    "recommendedFor": "适合追求出海跨境、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "高规格 IPLC 高端物理专线网络，自带官方多周期深度折扣。支持高码率 8K 极速播放与超低延迟游戏联机加速，适合个人长期订阅与工作室团队多端共用。",
    "packages": [
      {
        "name": "跨界年付版",
        "traffic": "60 GB / 月",
        "price": "¥96.00 / 年",
        "discounted_price": "全年 ¥96，折合每月 ¥8",
        "features": [
          "适合轻度日常与偶尔 AI 对话",
          "所有节点 1 倍率"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "年付版 (100GB/月)",
        "traffic": "100 GB / 月",
        "price": "¥150.00 / 年",
        "discounted_price": "折合每月 ¥12.5",
        "features": [
          "追剧与 AI 对话更从容",
          "设备数不限"
        ],
        "badge": "🔥 年度精选",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "轻云 Lite（季付）",
        "traffic": "120 GB / 月",
        "price": "¥43.00 / 季",
        "discounted_price": "季付超值 ¥43 特别优惠 (年付折合 ¥16/月)",
        "features": [
          "1-2 台设备主力",
          "可叠加年付折扣"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "支持 2 台设备",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "轻云 Lite (月付)",
        "traffic": "120 GB / 月",
        "price": "¥20.00 / 月",
        "discounted_price": "¥20.00/月",
        "features": [
          "月付灵活尝试",
          "随时可升档"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "跃云 Leap (全家共用爆款)",
        "traffic": "330 GB / 月",
        "price": "¥40.00 / 月",
        "discounted_price": "年付折合约 ¥32/月",
        "features": [
          "全家共用/多设备",
          "常下载与高清看视频"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "凌云 Soar (4K 重度影音)",
        "traffic": "830 GB / 月",
        "price": "¥90.00 / 月",
        "discounted_price": "年付折合约 ¥72/月",
        "features": [
          "4K 重度观影与大量下载",
          "多屏并发"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "旗舰巨无霸 · 1.8TB 团队专属",
        "traffic": "1800 GB (1.8TB) / 月",
        "price": "¥130.00 / 月",
        "discounted_price": "每 GB 成本全场最低 (年付折合约 ¥104/月)",
        "features": [
          "大型下载、工作室与跨境电商共用"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "跨界·不限时包",
        "traffic": "300 GB (永久有效)",
        "price": "¥200.00 / 一次性",
        "discounted_price": "重置享 9 折特权 (¥180)",
        "features": [
          "长期有效不自动续费",
          "用完重置享 9 折"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      }
    ]
  },
  {
    "id": "stardream",
    "name": "星岛梦 StarDream",
    "rank": 21,
    "badge": "⚡ 优质专线",
    "category": "flagship",
    "categoryLabel": "高校与流媒体",
    "rating": 4.9,
    "reviewsCount": 2600,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 740,
    "speedRating": "8K 极速秒开",
    "latency": "平均 42ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "全 IEPL / IPLC 专线",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全 IPLC/IEPL 专线，最高 2.5Gbps 物理速率",
      "全节点 x1 真实倍率，晚高峰不降速",
      "自带年付 8折 / 两年 7折 / 三年 6折，优惠码可叠加",
      "提供美国原生真实家庭宽带住宅 IP 定制"
    ],
    "monthlyPrice": "¥25.00 / 月起",
    "priceRaw": "¥25.00",
    "traffic": "60 GB / 月",
    "annualDiscount": "¥96.00/年 (折合 ¥8.00/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "xdm888",
    "couponText": "xdm888 (专属优惠码)",
    "affUrl": "https://kfccbb.xingdaomeng.com/#/?code=JTRIWFim",
    "reviewSlug": "/reviews/stardream/",
    "recommendedFor": "适合追求高校与流媒体、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "全 IEPL / IPLC 物理内网专线集群，专为高校学术研究、海外流媒体与外贸出海设计。拥有高纯净美国家宽原生 IP 节点，晚高峰大带宽吞吐保障。",
    "packages": [
      {
        "name": "星岛梦 · 高校套餐",
        "traffic": "60 GB / 月",
        "price": "¥96.00 / 年",
        "discounted_price": "折合约 ¥8.00/月",
        "features": [
          "适合小流量/学生党",
          "全 IPLC 专线",
          "单节点峰值最高 2.5Gbps"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "星岛梦 · 超量150G",
        "traffic": "150 GB / 月",
        "price": "¥25.00 / 月",
        "discounted_price": "年付 8 折",
        "features": [
          "全 IEPL 专线",
          "原生 IP 解锁 Netflix/ChatGPT"
        ],
        "badge": "🎬 影音主力",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。"
      },
      {
        "name": "星岛梦 · 进阶300G",
        "traffic": "300 GB / 月",
        "price": "¥50.00 / 月",
        "discounted_price": "年付 8 折",
        "features": [
          "4K 影音与日常科研主力"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "星岛梦 · 闪光500G",
        "traffic": "500 GB / 月",
        "price": "¥70.00 / 月",
        "discounted_price": "年付 8 折",
        "features": [
          "大容量狂飙",
          "多设备在线稳定"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "星岛梦 · 旗舰1T版",
        "traffic": "1000 GB (1TB) / 月",
        "price": "¥130.00 / 月",
        "discounted_price": "年付 8 折",
        "features": [
          "海量狂欢",
          "智能路由自动择优"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "星岛梦 · 永久不限时100",
        "traffic": "100 GB (永久有效)",
        "price": "¥100.00 / 一次性",
        "discounted_price": "重置享 9 折特权 (¥90)",
        "features": [
          "无限时长",
          "全 IPLC 专线",
          "所有节点 x1 倍率"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "星岛梦 · 永久不限时300",
        "traffic": "300 GB (永久有效)",
        "price": "¥300.00 / 一次性",
        "discounted_price": "重置享 9 折特权 (¥270)",
        "features": [
          "高人气长期备用"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "星岛梦 · 永久不限时1TB",
        "traffic": "1000 GB (永久有效)",
        "price": "¥600.00 / 一次性",
        "discounted_price": "重置享 9 折特权 (¥540)",
        "features": [
          "每 GB 超低单价永久储备"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "星岛梦 · 美国家宽定制",
        "traffic": "500 GB / 月",
        "price": "¥700.00 / 月",
        "discounted_price": "¥700.00/月",
        "features": [
          "美国原生住宅家宽 IP",
          "跨境电商与 TikTok 直播高风控防封",
          "重置享 8 折"
        ],
        "badge": "💎 旗舰商业顶配",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。"
      }
    ]
  },
  {
    "id": "lightspeed",
    "name": "光速云 LightSpeed",
    "rank": 22,
    "badge": "⚡ 优质专线",
    "category": "hys2",
    "categoryLabel": "光速跑满",
    "rating": 4.9,
    "reviewsCount": 2490,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 728,
    "speedRating": "8K 极速秒开",
    "latency": "平均 42ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "全 IEPL / IPLC 专线",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全 IEPL/IPLC 专线，单节点最高 2.5Gbps 满血速率",
      "致敬斯诺克 147 永久买断不过期流量包 (¥147/247GB)",
      "轻量年付仅 ¥99/年 (折合 ¥8.25/月)",
      "年付 8折 / 两年 7折 / 三年 6折，优惠码 gsy888 可叠加"
    ],
    "monthlyPrice": "¥25.00 / 月起",
    "priceRaw": "¥25.00",
    "traffic": "247 GB (永久有效不过期)",
    "annualDiscount": "¥99.00/年 (折合约 ¥8.25/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "gsy888",
    "couponText": "gsy888 (专属优惠码)",
    "affUrl": "https://mdlky.gsyaff.com/#/?code=6tRWbtgK",
    "reviewSlug": "/reviews/lightspeed/",
    "recommendedFor": "适合追求光速跑满、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "全 IEPL/IPLC 专线与经典买断包结合，主打高品质原生 IP 跨境网络。单节点大带宽冗余，全节点统一 1x 倍率，支持各大主流客户端一键订阅导入。",
    "packages": [
      {
        "name": "致敬斯诺克147永久套餐",
        "traffic": "247 GB (永久有效不过期)",
        "price": "¥147.00 / 一次性",
        "discounted_price": "¥147 一次性买断",
        "features": [
          "经典买断随用随停",
          "全 IEPL/IPLC 专线",
          "单节点峰值 2.5Gbps",
          "原生 IP 解锁"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "光速云 · 轻量版",
        "traffic": "69 GB / 月",
        "price": "¥99.00 / 年",
        "discounted_price": "年付折合约 ¥8.25 / 月",
        "features": [
          "适合小流量日常与学生党",
          "全 IPLC 专线",
          "晚高峰不限速"
        ],
        "badge": "🔥 年度精选",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "光速云 · 极速版",
        "traffic": "168 GB / 月",
        "price": "¥25.00 / 月",
        "discounted_price": "年付 8 折",
        "features": [
          "性价比标杆最多人选",
          "全 IEPL 专线"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "光速云 · 流光版",
        "traffic": "238 GB / 月",
        "price": "¥34.00 / 月",
        "discounted_price": "年付 8 折",
        "features": [
          "进阶大流量",
          "4K 流媒体畅看"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "光速云 · 量子版",
        "traffic": "500 GB / 月",
        "price": "¥68.00 / 月",
        "discounted_price": "年付 8 折",
        "features": [
          "量子尊享大容量",
          "多屏 4K 重度影音"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "光速云 · 无界版",
        "traffic": "900 GB / 月",
        "price": "¥138.00 / 月",
        "discounted_price": "年付 8 折",
        "features": [
          "重度专属海量",
          "顶级带宽晚高峰不降速"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "光速云 · 美国家宽定制",
        "traffic": "500 GB / 月",
        "price": "¥680.00 / 月",
        "discounted_price": "¥680.00/月",
        "features": [
          "美国真实原生住宅家庭宽带",
          "纯净静态 IP",
          "跨境电商与直播防风控首选"
        ],
        "badge": "💎 旗舰商业顶配",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。"
      }
    ]
  },
  {
    "id": "v2yun",
    "name": "唯兔云（V2云）",
    "rank": 23,
    "badge": "⚡ 优质专线",
    "category": "stable",
    "categoryLabel": "老牌V2稳定",
    "rating": 4.9,
    "reviewsCount": 2380,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 716,
    "speedRating": "8K 极速秒开",
    "latency": "平均 43ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "全 IPLC / IEPL 专线",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全 IPLC 专线 + vless 协议，增加备用直连节点",
      "年付限量款折合仅 ¥6.66/月",
      "自带年付 8折 / 两年 7折 / 三年 6折",
      "一次性不限时套餐后续续费享永久 9 折特权"
    ],
    "monthlyPrice": "¥19.90 / 月起",
    "priceRaw": "¥19.90",
    "traffic": "45 GB / 月",
    "annualDiscount": "约 ¥80.00/年 (年付折合仅 ¥6.66/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "v2yun",
    "couponText": "v2yun (专属优惠码)",
    "affUrl": "https://fast.v2yunvipaff.com/#/?code=xYEe8gyb",
    "reviewSlug": "/reviews/v2yun/",
    "recommendedFor": "适合追求老牌V2稳定、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "极致性价比物理专线机场，年付折算极低门槛。全节点高可用冗余中继，晚高峰追剧、办公与 AI 提问丝滑顺畅，提供多种买断备用包与团队大额套餐。",
    "packages": [
      {
        "name": "唯兔云 · 年付版限量款",
        "traffic": "45 GB / 月",
        "price": "约 ¥80.00 / 年",
        "discounted_price": "年付折合仅 ¥6.66/月",
        "features": [
          "爆款轻量设计",
          "看新闻/查资料/写论文",
          "全 IPLC 专线 vless 协议"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "唯兔云 · 年付加强专线",
        "traffic": "75 GB / 月",
        "price": "约 ¥120.00 / 年",
        "discounted_price": "年折 ¥10/月",
        "features": [
          "IEPL 企业跨境专线",
          "流媒体与 AI 全解锁"
        ],
        "badge": "🔥 年度精选",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "唯兔云 · 普通版",
        "traffic": "150 GB / 月",
        "price": "¥19.90 / 月",
        "discounted_price": "年付 8 折",
        "features": [
          "热销入门 150GB 充沛",
          "全 IPLC 专线"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "唯兔云 · 进阶版",
        "traffic": "200 GB / 月",
        "price": "¥29.90 / 月",
        "discounted_price": "年付 8 折",
        "features": [
          "进阶追剧 200GB 畅快",
          "多设备在线"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "唯兔云 · 专业版",
        "traffic": "500 GB / 月",
        "price": "¥59.90 / 月",
        "discounted_price": "年付 8 折",
        "features": [
          "专业大容量 500GB 狂欢"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "唯兔云 · 至尊版",
        "traffic": "1000 GB (1.0TB) / 月",
        "price": "¥119.90 / 月",
        "discounted_price": "年付 8 折",
        "features": [
          "旗舰 1.0TB 海量不限速"
        ],
        "badge": "💎 旗舰商业顶配",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。"
      },
      {
        "name": "唯兔云 · 永久不限时 (100GB)",
        "traffic": "100 GB (永久有效)",
        "price": "¥100.00 / 一次性",
        "discounted_price": "后续续费永久 9 折",
        "features": [
          "全 IPLC 专线",
          "用完点击重置流量享 9 折"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "唯兔云 · 永久不限时 (200GB)",
        "traffic": "200 GB (永久有效)",
        "price": "¥160.00 / 一次性",
        "discounted_price": "后续续费永久 9 折",
        "features": [
          "不限时主力备用"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "唯兔云 · 永久不限时 (500GB)",
        "traffic": "500 GB (永久有效)",
        "price": "¥340.00 / 一次性",
        "discounted_price": "后续续费永久 9 折",
        "features": [
          "高性价比大容量备用"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      }
    ]
  },
  {
    "id": "u1s1",
    "name": "U1S1（有一说一）",
    "rank": 24,
    "badge": "⚡ 优质专线",
    "category": "budget",
    "categoryLabel": "口碑良心",
    "rating": 4.9,
    "reviewsCount": 2270,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 704,
    "speedRating": "8K 极速秒开",
    "latency": "平均 44ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "BGP 三网智能优化 + IEPL 专线出口",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "BGP 三网智能优化 + IEPL 专线出口，晚高峰不降速",
      "全平台 ss 协议高兼容支持，不限速不限设备数",
      "每两个月主动额外 +200兆带宽冗余扩容",
      "Netflix/Disney+/HBO/DAZN 及全生态 AI 原生解锁"
    ],
    "monthlyPrice": "¥20.00 / 月起",
    "priceRaw": "¥20.00",
    "traffic": "60 GB / 月",
    "annualDiscount": "约 ¥96.00/年 (折合仅 ¥8.00/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "u1s1",
    "couponText": "u1s1 (专属优惠码)",
    "affUrl": "https://pkdj7.vipaff.cc/#/?code=NMjmHbvu",
    "reviewSlug": "/reviews/u1s1/",
    "recommendedFor": "适合追求口碑良心、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "BGP 三网智能优化调度与 IEPL 高速出口结合，定期扩容核心骨干物理带宽。全节点原生住宅 IP 矩阵，全平台流媒体 4K 秒开，客服响应极速售后无忧。",
    "packages": [
      {
        "name": "u1s1 · 就是好用包",
        "traffic": "60 GB / 月",
        "price": "约 ¥96.00 / 年",
        "discounted_price": "折合仅 ¥8.00/月",
        "features": [
          "学生党查资料 AI",
          "日常网页社交轻量视频",
          "IEPL 专线出口"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "u1s1 · 普通人真够了包",
        "traffic": "120 GB / 月",
        "price": "¥20.00 / 月",
        "discounted_price": "¥20.00/月 (真实 1 倍率)",
        "features": [
          "日常主力首选",
          "刷视频看剧远程办公"
        ],
        "badge": "🎬 影音主力",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。"
      },
      {
        "name": "u1s1 · 你以为用不到包",
        "traffic": "300 GB / 月",
        "price": "¥40.00 / 月",
        "discounted_price": "¥40.00/月",
        "features": [
          "高频重度首选",
          "4K/8K 解锁秒开",
          "多设备并发"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "u1s1 · 瘾大就拉满包",
        "traffic": "700 GB / 月",
        "price": "¥100.00 / 月",
        "discounted_price": "¥100.00/月",
        "features": [
          "700GB 海量储备",
          "千兆跑满"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "u1s1 · 我全都要包",
        "traffic": "1500 GB (1.5TB) / 月",
        "price": "¥180.00 / 月",
        "discounted_price": "¥180.00/月",
        "features": [
          "小团队运营与跨国协作",
          "支撑海量并发"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "u1s1 · 定制包",
        "traffic": "按需定制 (独享纯净 IP)",
        "price": "¥600.00 / 月",
        "discounted_price": "专属通道",
        "features": [
          "跨境电商与 TikTok 直播定制",
          "防封控防关联"
        ],
        "badge": "💎 旗舰商业顶配",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。"
      }
    ]
  },
  {
    "id": "jilianyun",
    "name": "极连云",
    "rank": 25,
    "badge": "⚡ 优质专线",
    "category": "hys2",
    "categoryLabel": "极速连通",
    "rating": 4.9,
    "reviewsCount": 2160,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 692,
    "speedRating": "8K 极速秒开",
    "latency": "平均 45ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "全 IPLC 物理专线",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全 IPLC 专线，单节点最大提供 2.5Gbps 速率",
      "全节点 x1 倍率，晚高峰不限速",
      "自带年付 8折 / 两年 7折 / 三年 6折",
      "不限时套餐买断 600GB 永久有效且重置享 9 折"
    ],
    "monthlyPrice": "¥18.00 / 月起",
    "priceRaw": "¥18.00",
    "traffic": "60 GB / 月",
    "annualDiscount": "约 ¥96.00/年 (折合仅 ¥8.00/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "jly666",
    "couponText": "jly666 (专属优惠码)",
    "affUrl": "https://kdjhao.jlyvipaff.com/#/?code=poyoU7mq",
    "reviewSlug": "/reviews/jilianyun/",
    "recommendedFor": "适合追求极速连通、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "全 IPLC 物理专线与轻量化高速节点矩阵，专为追求省心与高稳定性的用户打造。晚高峰超低延迟与网络抖动，全节点不限速，流媒体原生全解锁。",
    "packages": [
      {
        "name": "限时年付套餐体验",
        "traffic": "60 GB / 月",
        "price": "约 ¥96.00 / 年",
        "discounted_price": "折合仅 ¥8.00/月",
        "features": [
          "全 IPLC 专线",
          "单节点最大 2.5Gbps",
          "原生 IP 解锁"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "极连云 · 基础套餐",
        "traffic": "100 GB / 月",
        "price": "¥18.00 / 月",
        "discounted_price": "年付 8 折",
        "features": [
          "热销入门 100GB 充沛",
          "晚高峰不限速"
        ],
        "badge": "🎬 影音主力",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。"
      },
      {
        "name": "极连云 · 进阶套餐",
        "traffic": "200 GB / 月",
        "price": "¥32.00 / 月",
        "discounted_price": "年付 8 折",
        "features": [
          "进阶追剧优化带宽调度",
          "晚高峰流畅"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "极连云 · 旗舰套餐",
        "traffic": "500 GB / 月",
        "price": "¥61.00 / 月",
        "discounted_price": "年付 8 折",
        "features": [
          "高速旗舰 500GB 重度优选",
          "低延迟体验"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "极连云 · 尊享套餐",
        "traffic": "1000 GB (1.0TB) / 月",
        "price": "¥122.00 / 月",
        "discounted_price": "年付 8 折",
        "features": [
          "顶级尊享最高 2.5Gbps",
          "原生 IP 全解锁"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "极连云 · 不限时套餐",
        "traffic": "600 GB (永久有效)",
        "price": "¥399.00 / 一次性",
        "discounted_price": "重置享 9 折",
        "features": [
          "一次性 600G 永久不过期",
          "无需担心每月重置"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      }
    ]
  },
  {
    "id": "globalcloud",
    "name": "全球云",
    "rank": 26,
    "badge": "⚡ 优质专线",
    "category": "flagship",
    "categoryLabel": "BGP全域",
    "rating": 4.9,
    "reviewsCount": 2050,
    "speed": "千兆满宽带 / 10Gbps带宽",
    "speedMbps": 680,
    "speedRating": "千兆满宽带",
    "latency": "平均 46ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "BGP 多线路智能调度 + 专线级出口架构",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "BGP 多线路智能调度 + 专线级出口架构，全程不限速",
      "全节点流量统一 1.0x 真实计费，无放大比例",
      "Shadowsocks 高性能协议，解除设备锁多端同时在线",
      "提供独享私人专线与独立公网 IP"
    ],
    "monthlyPrice": "¥20.00 / 月起",
    "priceRaw": "¥20.00",
    "traffic": "59 GB / 月",
    "annualDiscount": "约 ¥99.00/年 (折合仅 ¥8.25/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "qqy888",
    "couponText": "qqy888 (专属优惠码)",
    "affUrl": "https://sswdh.gcvipaff.com/#/?code=NE1AcNIX",
    "reviewSlug": "/reviews/globalcloud/",
    "recommendedFor": "适合追求BGP全域、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "BGP 多线路智能调度与国际专线出口架构，智能避开网络拥堵与故障链路。支持多端并发稳定在线，全平台 4K/8K 视频与海外主流社交平台无缝秒开。",
    "packages": [
      {
        "name": "轻量版",
        "traffic": "59 GB / 月",
        "price": "约 ¥99.00 / 年",
        "discounted_price": "折合仅 ¥8.25/月",
        "features": [
          "全 IPLC 专线",
          "单节点峰值最高 2.5Gbps",
          "原生 IP 解锁"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "BGP 智能优化 · 入门方案",
        "traffic": "120 GB / 月",
        "price": "¥20.00 / 月",
        "discounted_price": "¥20.00/月 (1.0x 真实计费)",
        "features": [
          "日常网页社交轻度用户",
          "4K 即点即播支持 8K"
        ],
        "badge": "🎬 影音主力",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。"
      },
      {
        "name": "BGP 智能优化 · 进阶方案",
        "traffic": "300 GB / 月",
        "price": "¥40.00 / 月",
        "discounted_price": "¥40.00/月",
        "features": [
          "BGP 三网优化 + 纯专线出口",
          "稳定优先 4K 秒开"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "BGP 智能优化 · 高端方案",
        "traffic": "700 GB / 月",
        "price": "¥100.00 / 月",
        "discounted_price": "¥100.00/月",
        "features": [
          "700GB 海量储备",
          "满足 ChatGPT/Claude 高强度使用"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "BGP 智能优化 · 商业方案",
        "traffic": "1500 GB (1.5TB) / 月",
        "price": "¥180.00 / 月",
        "discounted_price": "¥180.00/月",
        "features": [
          "企业级 BGP 专线出口",
          "支持大量设备并发"
        ],
        "badge": "💎 旗舰商业顶配",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。"
      },
      {
        "name": "BGP 智能优化 · 不限时轻量包",
        "traffic": "100 GB (永久有效)",
        "price": "¥100.00 / 一次性",
        "discounted_price": "¥100.00 买断",
        "features": [
          "永久不过期",
          "长周期差旅高端备用"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "BGP 智能优化 · 不限时标准包",
        "traffic": "400 GB (永久有效)",
        "price": "¥360.00 / 一次性",
        "discounted_price": "¥360.00 买断",
        "features": [
          "400GB 大容量买断",
          "全节点 1.0x 计费"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "BGP 智能优化 · 不限时大容量包",
        "traffic": "800 GB (永久有效)",
        "price": "¥700.00 / 一次性",
        "discounted_price": "¥700.00 买断",
        "features": [
          "尊享买断 800GB 海量储备"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "独享私人专线 · 独立公网IP",
        "traffic": "500 GB / 月 独享流量",
        "price": "¥680.00 / 月",
        "discounted_price": "¥680.00/月",
        "features": [
          "独立带宽与独立公网 IP",
          "TikTok 直播与跨境电商防封控"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      }
    ]
  },
  {
    "id": "guangnianti",
    "name": "光年梯",
    "rank": 27,
    "badge": "⚡ 优质专线",
    "category": "business",
    "categoryLabel": "极客专享",
    "rating": 4.9,
    "reviewsCount": 1940,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 668,
    "speedRating": "8K 极速秒开",
    "latency": "平均 47ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "全套 IPLC 国际物理专线",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全套 IPLC 国际物理专线，单节点最高 2.5Gbps 速率",
      "所有节点统一 X1 真实倍率计费，晚高峰不限速不降速",
      "不限制同时在线设备数量，原生 IP 深度解锁 AI",
      "官方自带年付 8折 / 2年付 7折 / 3年付 6折，可叠加专属优惠码 gnt888"
    ],
    "monthlyPrice": "¥18.00 / 月起",
    "priceRaw": "¥18.00",
    "traffic": "50 GB / 月",
    "annualDiscount": "¥89.00/年 (折合约 ¥7.42/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "gnt888",
    "couponText": "gnt888 (专属优惠码，可与官方年付折扣叠加)",
    "affUrl": "https://ggmq.gntaff.com/#/?code=RAJFvngV",
    "reviewSlug": "/reviews/guangnianti/",
    "recommendedFor": "适合追求极客专享、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "全系标配高规格 IPLC 国际物理专线与 1.0x 真实倍率，全程不经 GFW。超低网络延迟与丢包率，敏感期高可用抗封锁，提供灵活的周期与定制选项。",
    "packages": [
      {
        "name": "年付限时套餐",
        "traffic": "50 GB / 月",
        "price": "¥89.00 / 年",
        "discounted_price": "折合约 ¥7.42 / 月",
        "features": [
          "全 IPLC 专线通道",
          "全节点 X1 真实倍率",
          "原生 IP 解锁 ChatGPT 与流媒体"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "光年梯 入门版",
        "traffic": "110 GB / 月",
        "price": "¥18.00 / 月",
        "discounted_price": "年付享 8 折 (¥14.40/月)",
        "features": [
          "110G 充沛专线流量",
          "单节点最高 2.5Gbps",
          "4K 超清流媒体秒开"
        ],
        "badge": "🎬 影音主力",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。"
      },
      {
        "name": "光年梯 晋级版",
        "traffic": "220 GB / 月",
        "price": "¥34.00 / 月",
        "discounted_price": "年付享 8 折 (¥27.20/月)",
        "features": [
          "晚高峰并发不限速",
          "原生纯净 IP 深度支持 AI 生态"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "光年梯 专业版",
        "traffic": "450 GB / 月",
        "price": "¥68.00 / 月",
        "discounted_price": "年付享 8 折 (¥54.40/月)",
        "features": [
          "全专线低延迟保障通道",
          "多设备高并发无瓶颈"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "光年梯 至尊版",
        "traffic": "900 GB / 月",
        "price": "¥130.00 / 月",
        "discounted_price": "年付享 8 折 (¥104.00/月)",
        "features": [
          "900G 旗舰流量池",
          "最高 2.5Gbps 物理峰值速率",
          "VIP 专属售后服务"
        ],
        "badge": "💎 旗舰商业顶配",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。"
      },
      {
        "name": "独享私人专线节点",
        "traffic": "500 GB / 月 独立公网IP",
        "price": "¥680.00 / 月",
        "discounted_price": "¥680.00/月",
        "features": [
          "独享独立公网 IP 零干扰防封禁",
          "TikTok 美区运营与跨境电商店铺首选"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      }
    ]
  },
  {
    "id": "sogoyun",
    "name": "Sogo云",
    "rank": 28,
    "badge": "⚡ 优质专线",
    "category": "metered",
    "categoryLabel": "不限时首选",
    "rating": 4.9,
    "reviewsCount": 1830,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 656,
    "speedRating": "8K 极速秒开",
    "latency": "平均 48ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "全 IPLC / IEPL 物理专线 + 原生双 ISP",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全 IPLC/IEPL 物理专线接入 + 原生纯净双 ISP 出口",
      "单节点最高 2.5Gbps 峰值带宽，全节点统一 x1 真实倍率",
      "不限制在线客户端数量",
      "提供四档永久不过期买断流量包 (最高 1.0TB)"
    ],
    "monthlyPrice": "¥25.00 / 月起",
    "priceRaw": "¥25.00",
    "traffic": "60 GB / 月",
    "annualDiscount": "¥98.00/年 (折合 ¥8.17/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "官方自带周期折扣",
    "couponText": "官方自带周期折扣 (季付/半年付/年付)",
    "affUrl": "https://wzjc.sogoyunaff.cc/#/?code=2x2EywO9",
    "reviewSlug": "/reviews/sogoyun/",
    "recommendedFor": "适合追求不限时首选、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "单节点最高 2.5Gbps 物理峰值，搭载原生双 ISP 跨境网络架构。全节点 1x 真实计费倍率，晚高峰高并发大带宽保障，流媒体全家桶与 AI 工具深度解锁。",
    "packages": [
      {
        "name": "小包-年付版",
        "traffic": "60 GB / 月",
        "price": "¥98.00 / 年",
        "discounted_price": "折合 ¥8.17/月",
        "features": [
          "全 IPLC/IEPL 专线",
          "原生纯净双 ISP 出口",
          "支持多端在线"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "精选方案 · 日常轻量",
        "traffic": "150 GB / 月",
        "price": "¥25.00 / 月",
        "discounted_price": "¥25.00/月",
        "features": [
          "最高 2.5Gbps 峰值带宽",
          "4K 秒开，ChatGPT/Claude 秒级响应"
        ],
        "badge": "🎬 影音主力",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。"
      },
      {
        "name": "精选方案 · 最多白领通用首选",
        "traffic": "350 GB / 月",
        "price": "¥45.00 / 月",
        "discounted_price": "¥45.00/月",
        "features": [
          "晚高峰并发不限速无卡顿",
          "原生双 ISP 住宅级纯净 IP"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "进阶方案 · 深度极客",
        "traffic": "550 GB / 月",
        "price": "¥80.00 / 月",
        "discounted_price": "¥80.00/月",
        "features": [
          "超大 550GB 专线流量",
          "低丢包企业级技术运维"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "旗舰方案 · 团队工作室",
        "traffic": "1100 GB (1.1TB) / 月",
        "price": "¥150.00 / 月",
        "discounted_price": "¥150.00/月",
        "features": [
          "全节点满速并发保障",
          "一对一 VIP 客服优先响应"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "永久不限时 (120G)",
        "traffic": "120 GB (永久有效)",
        "price": "¥120.00 / 一次性",
        "discounted_price": "¥120.00 买断",
        "features": [
          "随用随停不设过期时间",
          "全节点 x1 真实倍率"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "永久不限时 (250G)",
        "traffic": "250 GB (永久有效)",
        "price": "¥250.00 / 一次性",
        "discounted_price": "¥250.00 买断",
        "features": [
          "原生双 ISP 纯净线路支持",
          "长期出差与备用首选"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "永久不限时 (500G)",
        "traffic": "500 GB (永久有效)",
        "price": "¥450.00 / 一次性",
        "discounted_price": "¥450.00 买断",
        "features": [
          "500GB 永久海量储备",
          "全节点晚高峰不限速"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "永久不限时 · 顶配 (1TB)",
        "traffic": "1000 GB (1.0TB) (永久有效)",
        "price": "¥850.00 / 一次性",
        "discounted_price": "¥850.00 买断",
        "features": [
          "1.0TB 永久不过期终极储备",
          "企业级优先级路由保障"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      }
    ]
  },
  {
    "id": "yuzhou",
    "name": "宇宙云 YuZhou",
    "rank": 29,
    "badge": "⚡ 优质专线",
    "category": "flagship",
    "categoryLabel": "全能恒星",
    "rating": 4.9,
    "reviewsCount": 1720,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 644,
    "speedRating": "8K 极速秒开",
    "latency": "平均 49ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "全内网 IPLC 物理专线",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全内网 IPLC 物理专线架构，单节点最高 2.5Gbps",
      "全节点统一 x1 真实倍率计费，晚高峰高并发不限速",
      "不限制在线客户端数量",
      "支持原生住宅家宽独立独享 IP 定制"
    ],
    "monthlyPrice": "¥25.00 / 月起",
    "priceRaw": "¥25.00",
    "traffic": "60 GB / 月",
    "annualDiscount": "¥96.00/年 (折合约 ¥8.00/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "官方自带周期优惠折扣",
    "couponText": "官方自带周期优惠折扣",
    "affUrl": "https://wzjc.yuzoucloud.cc/#/?code=wL7YStBa",
    "reviewSlug": "/reviews/yuzhou/",
    "recommendedFor": "适合追求全能恒星、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "全内网 IPLC 物理专线，单节点最高 2.5Gbps 冗余带宽。所有节点统一 1.0x 真实倍率，流媒体原生纯净 IP 矩阵，提供高性价比周期订阅与专属独享定制。",
    "packages": [
      {
        "name": "星云年付小包 (Annual Plan)",
        "traffic": "60 GB / 月",
        "price": "¥96.00 / 年",
        "discounted_price": "折合约 ¥8.00 / 月",
        "features": [
          "全内网 IPLC 物理专线",
          "原生 IP 解锁流媒体与 AI"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "年付精选",
        "traffic": "120 GB / 月",
        "price": "¥188.00 / 年",
        "discounted_price": "折合约 ¥15.67 / 月",
        "features": [
          "最高 2.5Gbps 峰值",
          "4K 超清秒开"
        ],
        "badge": "🔥 年度精选",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "日常轻量",
        "traffic": "150 GB / 月",
        "price": "¥25.00 / 月",
        "discounted_price": "¥25.00/月",
        "features": [
          "Netflix/Disney+/YouTube 4K 秒开",
          "原生 IP 解锁 ChatGPT"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "恒星标准版 (Standard Plan)",
        "traffic": "320 GB / 月",
        "price": "¥50.00 / 月",
        "discounted_price": "¥50.00/月",
        "features": [
          "320GB 充沛专线流量",
          "多端设备协同稳定在线"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "进阶方案",
        "traffic": "650 GB / 月",
        "price": "¥100.00 / 月",
        "discounted_price": "¥100.00/月",
        "features": [
          "全线极致低延迟通道",
          "不限制在线客户端数量"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "团队旗舰",
        "traffic": "1400 GB (1.4TB) / 月",
        "price": "¥200.00 / 月",
        "discounted_price": "¥200.00/月",
        "features": [
          "最高级别网络吞吐与优先通道",
          "企业级技术运维"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "永久不限时 (120G)",
        "traffic": "120 GB (永久有效)",
        "price": "¥110.00 / 一次性",
        "discounted_price": "¥110.00 买断",
        "features": [
          "永不按月清零随用随停",
          "全节点 x1 真实倍率"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "永久不限时 · 极客备用 (240G)",
        "traffic": "240 GB (永久有效)",
        "price": "¥220.00 / 一次性",
        "discounted_price": "¥220.00 买断",
        "features": [
          "全线 IPLC 专线隧道",
          "随时支持加购补充"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "独享定制 (美国家宽)",
        "traffic": "500 GB / 独享资源",
        "price": "¥600.00 / 一次性 (月计)",
        "discounted_price": "¥600.00/月",
        "features": [
          "赠送 500GB 原生住宅家宽流量",
          "独立独享公网住宅 IP 防封"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      }
    ]
  },
  {
    "id": "ermaoyun",
    "name": "二猫云 2mao",
    "rank": 30,
    "badge": "⚡ 优质专线",
    "category": "budget",
    "categoryLabel": "萌猫大碗",
    "rating": 4.9,
    "reviewsCount": 1610,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 632,
    "speedRating": "8K 极速秒开",
    "latency": "平均 50ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "全 IEPL 物理专线",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全 IEPL 物理专线，晚高峰 0.00% 极稳丢包，下行高达 168.30 MB/s",
      "全节点统一真实 X1 倍率，晚高峰并发不限速",
      "不限制在线设备数量",
      "官方自带年付 8折 / 两年付 7折 / 三年付 6折"
    ],
    "monthlyPrice": "¥20.00 / 月起",
    "priceRaw": "¥20.00",
    "traffic": "60 GB / 每月额度",
    "annualDiscount": "¥96.00/年 (折合 ¥8.00/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "2mao888",
    "couponText": "2mao888 (官方专属优惠码，可与年付折扣叠加享折上折)",
    "affUrl": "https://waaa.2maoyunaff.cc/#/?code=uHeyKG44",
    "reviewSlug": "/reviews/ermaoyun/",
    "recommendedFor": "适合追求萌猫大碗、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "全 IEPL 物理专线出口，趣味猫咪分级梯队与多样化流量套餐设计。晚高峰 4K 秒开，原生住宅 IP 深度解锁主流海外平台，支持各类 Clash 客户端一键配置。",
    "packages": [
      {
        "name": "二猫年付小包",
        "traffic": "60 GB / 每月额度",
        "price": "¥96.00 / 年",
        "discounted_price": "折合 ¥8.00/月",
        "features": [
          "全 IEPL 物理专线",
          "晚高峰超低延迟保障",
          "个人多端登录"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "白猫套餐 (入门推荐)",
        "traffic": "120 GB / 每月额度",
        "price": "¥20.00 / 月",
        "discounted_price": "年折 ¥16.00/月 (年付8折)",
        "features": [
          "单节点最高 2.5Gbps 带宽",
          "Netflix/YouTube 4K 秒开"
        ],
        "badge": "🎬 影音主力",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。"
      },
      {
        "name": "橘猫畅玩版 (主力畅享)",
        "traffic": "260 GB / 每月额度",
        "price": "¥40.00 / 月",
        "discounted_price": "年折 ¥32.00/月 (年付8折)",
        "features": [
          "原生纯净 IP 解锁 ChatGPT/Claude",
          "4K 影音发烧友主力"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "牛奶猫尊享版 (团队高配)",
        "traffic": "550 GB / 每月额度",
        "price": "¥80.00 / 月",
        "discounted_price": "年折 ¥64.00/月 (年付8折)",
        "features": [
          "独立专线通道与低丢包率",
          "企业级售后技术响应"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "黑猫重度用户版 (重度专属)",
        "traffic": "850 GB / 每月额度",
        "price": "¥160.00 / 月",
        "discounted_price": "年折 ¥128.00/月 (年付8折)",
        "features": [
          "850G 高速流量",
          "60+ 节点解锁全部流媒体与 AI"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "二猫云 · 不限时套餐",
        "traffic": "100 GB (永久有效)",
        "price": "¥100.00 / 一次性",
        "discounted_price": "¥100.00 买断",
        "features": [
          "流量永久有效随用随停",
          "无需担心每月重置",
          "支持后续加购补充"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "二猫云 · 不限时套餐加大版",
        "traffic": "220 GB (永久有效)",
        "price": "¥199.00 / 一次性",
        "discounted_price": "¥199.00 买断",
        "features": [
          "超值大容量永久储备",
          "全线 IEPL 隧道"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "二猫云 · 美国家宽定制",
        "traffic": "500 GB / 独享资源",
        "price": "¥700.00 / 月",
        "discounted_price": "¥700.00/月",
        "features": [
          "美国真实原生住宅 IP",
          "TikTok 美区带货与跨境店铺首选"
        ],
        "badge": "💎 旗舰商业顶配",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。"
      }
    ]
  },
  {
    "id": "yifanyun",
    "name": "一翻云 1fly",
    "rank": 31,
    "badge": "⚡ 优质专线",
    "category": "metered",
    "categoryLabel": "永久不过期",
    "rating": 4.9,
    "reviewsCount": 1500,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 620,
    "speedRating": "8K 极速秒开",
    "latency": "平均 51ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "全 IEPL 尊享专线",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全 IEPL 尊享专线高速流量，单节点最高 2.5Gbps",
      "全节点 x1 真实倍率，晚高峰并发低延迟通道",
      "不限制设备同时在线数量",
      "适配自研客户端，轻松一键快速连接"
    ],
    "monthlyPrice": "¥20.00 / 月起",
    "priceRaw": "¥20.00",
    "traffic": "60 GB / 月",
    "annualDiscount": "¥98.00/年 (折合 ¥8.17/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "官方自带周期特惠折扣",
    "couponText": "官方自带周期特惠折扣 (季付/半年/年付)",
    "affUrl": "https://wzjc.1flyunaff.cc/#/?code=F7eaT191",
    "reviewSlug": "/reviews/yifanyun/",
    "recommendedFor": "适合追求永久不过期、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "全 IEPL 尊享国际物理专线，极速高带宽保障。不限制设备同时在线数量，全节点 1.0x 真实计费倍率，晚高峰超低丢包，外贸、出海与学术加速首选。",
    "packages": [
      {
        "name": "主推套餐 · 年付专属",
        "traffic": "60 GB / 月",
        "price": "¥98.00 / 年",
        "discounted_price": "折合 ¥8.17/月",
        "features": [
          "轻度需求首选",
          "全 IEPL 专线不限速",
          "覆盖 60+ 优质全球节点"
        ],
        "badge": "⚡ 主推年付",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。"
      },
      {
        "name": "精选方案",
        "traffic": "150 GB / 月",
        "price": "¥20.00 / 月",
        "discounted_price": "季付 ¥55 | 半年付 ¥98 | 年付 ¥168",
        "features": [
          "极速高带宽保障",
          "解锁主流流媒体及各类 AI 工具"
        ],
        "badge": "🎬 影音主力",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。"
      },
      {
        "name": "舒享版",
        "traffic": "350 GB / 月",
        "price": "¥35.00 / 月",
        "discounted_price": "季付 ¥98 | 半年付 ¥178 | 年付 ¥298",
        "features": [
          "独享高速通道保障",
          "多设备协同"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "进阶之选",
        "traffic": "600 GB / 月",
        "price": "¥55.00 / 月",
        "discounted_price": "季付 ¥150 | 半年付 ¥280 | 年付 ¥498",
        "features": [
          "4K/8K 超高清流媒体无缓冲播放",
          "全线晚高峰极致低延迟"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "团队极客",
        "traffic": "1200 GB (1.2TB) / 月",
        "price": "¥95.00 / 月",
        "discounted_price": "季付 ¥260 | 半年付 ¥490 | 年付 ¥888",
        "features": [
          "单节点最高 2.5Gbps 带宽",
          "工作室团队与重度下载首选"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "永久不过期 (150G)",
        "traffic": "150 GB (永久有效)",
        "price": "¥100.00 / 一次性",
        "discounted_price": "¥100.00 买断",
        "features": [
          "不设到期时间随用随停",
          "支持随时补充流量包"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "永久不过期 (350G)",
        "traffic": "350 GB (永久有效)",
        "price": "¥200.00 / 一次性",
        "discounted_price": "¥200.00 买断",
        "features": [
          "无月租压力永不清零",
          "全节点 x1 真实倍率"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      },
      {
        "name": "永久不过期 · 海量储备 (800G)",
        "traffic": "800 GB (永久有效)",
        "price": "¥400.00 / 一次性",
        "discounted_price": "¥400.00 买断",
        "features": [
          "800GB 永久海量储备",
          "一次购买长久无忧"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      }
    ]
  },
  {
    "id": "edgenova",
    "name": "边缘节点 EdgeNova",
    "rank": 32,
    "badge": "⚡ 优质专线",
    "category": "hys2",
    "categoryLabel": "边缘拓扑",
    "rating": 4.9,
    "reviewsCount": 1390,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 608,
    "speedRating": "8K 极速秒开",
    "latency": "平均 51ms 超低延迟",
    "uptime": "99.95%",
    "lineType": "全 IPLC 国际专线",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全 IPLC 专线网络，最高 2.5Gbps 稳定速率",
      "本站 8 折专属优惠券: xk808",
      "原生 IP 线路，轻松解锁 Netflix/Disney+/ChatGPT",
      "年费小包仅 10 元随时可重置流量"
    ],
    "monthlyPrice": "¥15.00 / 月起",
    "priceRaw": "¥15.00",
    "traffic": "120 GB / 月",
    "annualDiscount": "¥98.00/年 (8折券后约 ¥78.40/年，折合仅 ¥6.53/月)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "xk808",
    "couponText": "xk808 (立享 8 折优惠券)",
    "affUrl": "https://work.edgenovaaff.cc/#/?code=z81zCfw1",
    "reviewSlug": "/reviews/edgenova/",
    "recommendedFor": "适合追求边缘拓扑、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "全 IPLC 国际物理专线网络，提供高达 2.5Gbps 稳定速率。智能流量均衡分配与多链路动态路由优化，晚高峰稳定秒开，流媒体与 AI 全生态无障碍访问。",
    "packages": [
      {
        "name": "极界·标准套餐",
        "traffic": "120 GB / 月",
        "price": "¥22.00 / 月",
        "discounted_price": "8折券后 ¥17.60/月",
        "features": [
          "全 IPLC 专线最高 2.5Gbps",
          "原生 IP 解锁 Netflix/ChatGPT",
          "不限设备数"
        ],
        "badge": "🌟 热门首选",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "精选方案 · 年付小包",
        "traffic": "45 GB / 月",
        "price": "¥98.00 / 年",
        "discounted_price": "8折券后实付 ¥78.40/年 (折合 ¥6.53/月)",
        "features": [
          "年费小包",
          "10 元随时可重置流量",
          "原生 IP 线路"
        ],
        "badge": "🔥 年度精选",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "轻度尝鲜",
        "traffic": "60 GB / 月",
        "price": "¥15.00 / 月",
        "discounted_price": "体验套餐 ¥15.00/月",
        "features": [
          "IPLC 专线通道",
          "原生纯净 IP",
          "不限同时在线设备"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "进阶优选",
        "traffic": "200 GB / 月",
        "price": "¥35.00 / 月",
        "discounted_price": "8折券后 ¥28.00/月",
        "features": [
          "单节点最高 2.5Gbps",
          "原生 IP 深度解锁 AI 工具"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "团队高配",
        "traffic": "320 GB / 月",
        "price": "¥50.00 / 月",
        "discounted_price": "8折券后 ¥40.00/月",
        "features": [
          "海量物理专线池",
          "极速高带宽保障",
          "全天候运维"
        ],
        "badge": "推荐套餐",
        "available": "月付 / 季付 / 年付",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。"
      },
      {
        "name": "精选方案 · 永久不过期",
        "traffic": "100 GB (永久有效)",
        "price": "¥100.00 / 一次性",
        "discounted_price": "重置仅原价 90% (¥90)",
        "features": [
          "无限时长购买后不自动重置",
          "所有节点 x1 倍率不限速"
        ],
        "badge": "⏳ 永不过期买断",
        "available": "一次性买断 · 永不过期",
        "speed": "不限速",
        "devices": "不限",
        "subtitle": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。"
      }
    ]
  },
  {
    "id": "kosing",
    "name": "可信云",
    "rank": 33,
    "badge": "⚡ 优质专线",
    "category": "business",
    "categoryLabel": "可信稳定",
    "rating": 4.93,
    "reviewsCount": 1280,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 596,
    "speedRating": "8K 极速秒开",
    "latency": "平均 52ms 超低延迟",
    "uptime": "99.98%",
    "lineType": "全 IEPL 国际专线 / 60+ 顶级骨干节点",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全线采用企业级 IEPL 物理内网专线，60+ 顶级核心节点直连",
      "覆盖香港、台湾、新加坡、日本、美国等核心地区，晚高峰稳定抗抖动",
      "原生 IP 解锁 Netflix、Disney+、TikTok 及 ChatGPT、Claude 等全套 AI 工具",
      "多周期超值折扣：季付 95 折、半年付 9 折、年付 85 折、两年付 8 折、三年付 7 折",
      "流量重置享 9 折特权，特设 50GB 永久有效不限时轻量买断包",
      "不限制客户端同时在线设备数量，全面支持 Windows、macOS、iOS、Android 全平台"
    ],
    "monthlyPrice": "¥15.00 / 月起",
    "priceRaw": "¥15.00",
    "traffic": "60 GB / 月",
    "annualDiscount": "¥96.00/年 (折合约 ¥8.00/月，年费小礼包专享)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "",
    "couponText": "季付95折/半年9折/年付85折/两年8折/三年7折，重置包9折",
    "affUrl": "https://work.kosingaff.com/#/?code=BNsA58Es",
    "reviewSlug": "/reviews/kosing/",
    "recommendedFor": "适合追求可信稳定、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "全线搭载企业级 IEPL 国际内网专线与 60+ 顶级骨干节点，专线直连覆盖港台、日韩、新加坡与美欧核心区域。全节点统一 1.0x 真实倍率扣费，晚高峰超低延迟、全程不限速；多周期订阅享最高 7 折阶梯特惠与重置 9 折特权，深度解锁全平台流媒体与 ChatGPT、TikTok 等主流服务。",
    "packages": [
      {
        "name": "可信云年费小礼包 ⚡",
        "badge": "特惠套餐 · 精选",
        "subtitle": "小包专属，每月 60GB 流量，平均月付低至每月约 8 元。",
        "traffic": "60GB / 月",
        "price": "¥96.00 / 年",
        "discounted_price": "折合约 ¥8.00 /月",
        "available": "年付",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "小包专属，每月 60GB 充沛专线流量",
          "轻度使用，平均月付低至约 8 元/月",
          "全 IEPL 专线，不限速，不限制在线设备数量",
          "支持主流流媒体与 AI 工具原生 IP 解锁",
          "高效在线客服响应，专业运维售后保障",
          "不限制客户端，多地区节点覆盖（港/台/日/新/美等）"
        ]
      },
      {
        "name": "可信云月付小包 🍃",
        "badge": "精选入门",
        "subtitle": "每月 60GB 流量配置，仅支持月付，轻量尝鲜。",
        "traffic": "60GB / 月",
        "price": "¥15.00 / 月",
        "discounted_price": "轻度尝鲜首选",
        "available": "月付",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每月 60GB 流量配置 | 仅支持月付灵活订阅",
          "全 IEPL 专线 | 不限速 | 不限制设备数量",
          "原生 IP 深度解锁 Netflix、Disney+ 等主流流媒体",
          "稳定解锁 ChatGPT | Claude | TikTok",
          "高效在线客服快速响应",
          "60+ 顶级专线节点，覆盖港/台/新/日/美等核心地区"
        ]
      },
      {
        "name": "基础版 (Basic) ☁️",
        "badge": "热门主力",
        "subtitle": "每月 150GB 流量配置，流量重置享 9 折优惠。",
        "traffic": "150GB / 月",
        "price": "¥25.00 / 月",
        "discounted_price": "三年付 7 折折合 ¥17.50/月",
        "available": "月付 / 季付 / 半年 / 年 / 两年 / 三年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每月 150GB 充沛流量配置，流量重置享 9 折",
          "全 IEPL 专线，不限速，不限制在线设备数量",
          "多周期梯度优惠：季付 95 折 · 半年付 9 折 · 年付 85 折 · 两年付 8 折 · 三年付 7 折",
          "原生 IP 纯净解锁各大流媒体及 AI 工具",
          "不限制同时在线客户端，手机电脑多端通用",
          "60+ 顶级专线节点，覆盖港/台/新/日/美等核心地区"
        ]
      },
      {
        "name": "标准版 (Standard) 🚀",
        "badge": "办公影音推荐",
        "subtitle": "每月 300GB 流量配置，流量重置享 9 折优惠。",
        "traffic": "300GB / 月",
        "price": "¥50.00 / 月",
        "discounted_price": "三年付 7 折折合 ¥35.00/月",
        "available": "月付 / 季付 / 半年 / 年 / 两年 / 三年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每月 300GB 充沛流量配置，流量重置享 9 折",
          "全 IEPL 专线，不限速，不限制在线设备数量",
          "多周期特惠：季付 95 折 · 半年付 9 折 · 年付 85 折 · 两年付 8 折 · 三年付 7 折",
          "完美解锁 Netflix 4K、Disney+、ChatGPT、Claude 等",
          "不限制客户端设备数，满足家庭多端及日常办公分流",
          "60+ 顶级专线节点，覆盖港/台/新/日/美等核心地区"
        ]
      },
      {
        "name": "专业版 (Pro) 👑",
        "badge": "高阶大流量",
        "subtitle": "每月 600GB 流量配置，流量重置享 9 折优惠。",
        "traffic": "600GB / 月",
        "price": "¥100.00 / 月",
        "discounted_price": "三年付 7 折折合 ¥70.00/月",
        "available": "月付 / 季付 / 半年 / 年 / 两年 / 三年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每月 600GB 大容量配置，流量重置享 9 折",
          "全 IEPL 专线，不限速，不限制在线设备数量",
          "多周期特惠：季付 95 折 · 半年付 9 折 · 年付 85 折 · 两年付 8 折 · 三年付 7 折",
          "解锁各大流媒体及全套 AI 生产力工具",
          "不限制客户端数量，大流量高并发稳定无阻",
          "60+ 顶级专线节点，覆盖港/台/新/日/美等核心地区"
        ]
      },
      {
        "name": "旗舰版 (Ultimate) 💻",
        "badge": "极客海量",
        "subtitle": "每月 1200GB (1.2TB) 流量配置，流量重置享 9 折优惠。",
        "traffic": "1.2TB / 月",
        "price": "¥200.00 / 月",
        "discounted_price": "三年付 7 折折合 ¥140.00/月",
        "available": "月付 / 季付 / 半年 / 年 / 两年 / 三年",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每月 1200GB (1.2TB) 极客级超大容量配置，流量重置享 9 折",
          "全 IEPL 专线，不限速，不限制在线设备数量",
          "多周期特惠：季付 95 折 · 半年付 9 折 · 年付 85 折 · 两年付 8 折 · 三年付 7 折",
          "高优先级专线带宽，全天候保障极致吞吐与零丢包",
          "原生 IP 深度解锁各大流媒体及跨境商业 AI",
          "60+ 顶级专线节点，覆盖港/台/新/日/美等核心地区"
        ]
      },
      {
        "name": "可信云轻量不限时 🛡️",
        "badge": "限量买断 · 永不过期",
        "subtitle": "仅限前 1w 名用户，售完即止，永久不限时 50G。",
        "traffic": "50GB (买断)",
        "price": "¥50.00 / 终身",
        "discounted_price": "一次性买断 · 永久不限时",
        "available": "一次性买断 · 永久有效",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "仅限前 1w 名用户，售完即止，一次性付费 ¥50",
          "永久不限时 50G 专线流量，性能规格与月付完全一致",
          "全 IEPL 专线 | 不限速 | 不限制设备数量",
          "原生 IP 深度解锁流媒体与 ChatGPT / TikTok",
          "按实际使用扣除，用完即止，无需按月续费",
          "60+ 顶级专线节点，覆盖港/台/新/日/美等核心地区"
        ]
      }
    ]
  },
  {
    "id": "sujie",
    "name": "速界 SuJie",
    "rank": 34,
    "badge": "⚡ 优质专线",
    "category": "flagship",
    "categoryLabel": "超速越界",
    "rating": 4.93,
    "reviewsCount": 1170,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 584,
    "speedRating": "8K 极速秒开",
    "latency": "平均 53ms 超低延迟",
    "uptime": "99.98%",
    "lineType": "全 IPLC 物理专线网络 / 峰值最高 2.5Gbps",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全线搭载 IPLC 国际高速专线网络，单节点峰值最高 2.5Gbps 稳定速率",
      "所有节点统一 1.0x 真实倍率扣费，晚高峰时段绝不降速",
      "原生 IP 线路，轻松解锁 Netflix、Disney+、YouTube 4K 及 ChatGPT、TikTok",
      "提供超值年付仅需 ¥90.00/年（折合约 ¥7.50/月），并支持 10 元流量重置包",
      "覆盖月度 50G、70G、130G、260G、550G 至 1000G (1.0TB) 全阶梯方案",
      "不限制客户端同时在线设备数量，电脑、手机、平板与路由器全端畅连"
    ],
    "monthlyPrice": "¥15.00 / 月起",
    "priceRaw": "¥15.00",
    "traffic": "50 GB / 月",
    "annualDiscount": "¥90.00/年 (折合约 ¥7.50/月，限时年付专享)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "",
    "couponText": "全节点 1x 真实倍率扣费，晚高峰时段稳定不降速",
    "affUrl": "https://work.speedworldaff.cc/#/?code=wSjLCpIf",
    "reviewSlug": "/reviews/sujie/",
    "recommendedFor": "适合追求超速越界、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "全线搭载旗舰级 IPLC 国际高速物理专线，提供最高 2.5Gbps 极致稳定速率。所有节点统一 1.0x 真实计费倍率，晚高峰时段稳定不降速；覆盖从体验试用、限时年付、极速版、超速版到 1.0TB 跃迁版全方案，原生 IP 轻松解锁 Netflix、Disney+、ChatGPT 与 TikTok。",
    "packages": [
      {
        "name": "单月试用15元 🍃",
        "badge": "主推套餐 · 体验",
        "subtitle": "限时体验月付小包，适用于低流量用户与学生党。",
        "traffic": "50GB / 月",
        "price": "¥15.00 / 月",
        "discounted_price": "尝鲜试用首选",
        "available": "月付",
        "speed": "单节点最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "限时体验月付小包，低门槛尝鲜",
          "每月高速流量 (50G)，所有节点统一 x1 倍率",
          "晚高峰时段稳定不降速，每月自动刷新",
          "全 IPLC 专线网络，提供最高 2.5Gbps 稳定速率",
          "原生 IP 线路，轻松解锁 Netflix、Disney+、ChatGPT、TikTok 等服务",
          "不限制同时在线设备数量，全平台客户端通用"
        ]
      },
      {
        "name": "限时年付 ⚡",
        "badge": "热门年付 · 力荐",
        "subtitle": "年费小包，适用于低流量用户学生党，折算仅约 7.5 元/月。",
        "traffic": "70GB / 月",
        "price": "¥90.00 / 年",
        "discounted_price": "折合约 ¥7.50 /月",
        "available": "年付",
        "speed": "单节点最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "限时特惠年付方案，年费小包折合约 7.5 元/月",
          "每月高速流量 (70G)，所有节点 x1 倍率，高峰时段不降速",
          "适用于低流量用户学生党，每月自动刷新流量",
          "支持 10 元流量重置包，流量不足按需充值",
          "全 IPLC 专线网络，提供最高 2.5Gbps 稳定速率",
          "原生 IP 线路，轻松解锁 Netflix、Disney+、ChatGPT、TikTok 等服务",
          "不限制同时在线设备数量"
        ]
      },
      {
        "name": "极速版 🚀",
        "badge": "主力套餐",
        "subtitle": "极速版套餐，兼顾日常网页浏览、社交通讯与影音娱乐。",
        "traffic": "130GB / 月",
        "price": "¥25.00 / 月",
        "discounted_price": "支持月/季/半年/年付",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "单节点最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "极速版套餐，日常主力推荐",
          "每月高速流量 (130G)，所有节点统一 x1 倍率扣费",
          "高峰时段不降速，每月自动刷新",
          "全 IPLC 专线网络，提供最高 2.5Gbps 稳定速率",
          "原生 IP 线路，支持 Netflix 4K、Disney+、ChatGPT、TikTok 等服务",
          "不限制同时在线设备数量，多端自由并发"
        ]
      },
      {
        "name": "超速版 ⚡",
        "badge": "进阶优选",
        "subtitle": "超速版套餐，适合追剧、网课学习、日常下载与多端办公。",
        "traffic": "260GB / 月",
        "price": "¥50.00 / 月",
        "discounted_price": "每月 260GB 充沛专线配额",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "单节点最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "超速版套餐，中度高频用户进阶优选",
          "每月高速流量 (260G)，所有节点 x1 倍率，高峰时段不降速",
          "全 IPLC 专线网络，提供最高 2.5Gbps 稳定速率",
          "原生 IP 线路，支持 4K/8K 极致秒开与各大 AI 助手",
          "不限制在线设备数，兼顾手机、电脑、平板及软路由",
          "每月自动刷新流量，全天候稳定运行"
        ]
      },
      {
        "name": "光速版 🌟",
        "badge": "高阶大流量",
        "subtitle": "光速版套餐，面向影视发烧友与高频生产力大流量需求。",
        "traffic": "550GB / 月",
        "price": "¥99.00 / 月",
        "discounted_price": "每月 550GB 大容量",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "单节点最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "光速版套餐，影视爱好者与重度用户首选",
          "每月高速流量 (550G)，所有节点 x1 倍率，高峰时段不降速",
          "全 IPLC 专线网络，单节点峰值最高 2.5Gbps",
          "原生 IP 纯净线路，全平台流媒体 4K/8K 超高清畅连",
          "支持多设备并发在线，满足家庭多端与工作室协作需求",
          "每月自动刷新流量，专业技术支持"
        ]
      },
      {
        "name": "跃迁版 🌌",
        "badge": "极客海量 · 旗舰",
        "subtitle": "跃迁版套餐，每月 1.0TB (1000G) 极客级超大容量。",
        "traffic": "1.0TB / 月",
        "price": "¥200.00 / 月",
        "discounted_price": "每月 1000GB 旗舰超大带宽",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "单节点最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "跃迁版套餐，极客海量旗舰方案",
          "每月高速流量高达 1.0TB (1000G)，全节点统一 x1 真实倍率",
          "高峰时段不降速，全天候保障极致带宽吞吐与零丢包",
          "全 IPLC 专线网络，单节点峰值最高 2.5Gbps",
          "原生 IP 纯净出口，深度解锁各大流媒体与跨境电商/AI 业务",
          "不限制同时在线设备数量，企业与极客大户首选"
        ]
      }
    ]
  },
  {
    "id": "kuaili",
    "name": "快狸 KuaiLi",
    "rank": 35,
    "badge": "⚡ 优质专线",
    "category": "budget",
    "categoryLabel": "灵巧敏捷",
    "rating": 4.92,
    "reviewsCount": 1060,
    "speed": "8K 极速秒开 / 10Gbps带宽",
    "speedMbps": 572,
    "speedRating": "8K 极速秒开",
    "latency": "平均 54ms 超低延迟",
    "uptime": "99.98%",
    "lineType": "全 IEPL 国际高速物理专线 / 智能择优路由",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria 2"
    ],
    "features": [
      "全线采用旗舰级 IEPL 物理专线，单节点峰值最高至 2.5Gbps 极致大带宽",
      "智能路由自动择优调度，全节点统一 1x 真实计费倍率，晚高峰稳定顺滑不降速",
      "原生 IP 纯净线路，轻松解锁 Netflix、Disney+、YouTube 4K 及 ChatGPT、TikTok",
      "多周期超值优惠体系：支持季付、半年付、年付 85 折、两年付 7 折阶梯特惠",
      "阶梯流量体系：覆盖 30G、50G、100G、250G、500G 至 1000G (1.0TB) 满足不同用量",
      "多设备不限量同时在线，全面支持电脑、手机、平板与路由器全端畅连"
    ],
    "monthlyPrice": "¥15.00 / 月起",
    "priceRaw": "¥15.00",
    "traffic": "50 GB / 月",
    "annualDiscount": "¥120.00/年 (折合约 ¥10.00/月，森狸年付小套餐)",
    "streamingUnlock": [
      "Netflix 4K",
      "Disney+",
      "ChatGPT",
      "Claude",
      "YouTube Premium",
      "TikTok"
    ],
    "supportedClients": [
      "Clash Verge Rev",
      "Mihomo Party",
      "Sing-box",
      "Shadowrocket"
    ],
    "couponCode": "",
    "couponText": "全节点 1x 真实倍率，年付85折 / 两年付7折周期阶梯优惠",
    "affUrl": "https://work.kuailicloud.cc/#/?code=gVGJa0Mp",
    "reviewSlug": "/reviews/kuaili/",
    "recommendedFor": "适合追求灵巧敏捷、对连接稳定度与晚高峰4K秒开有高要求的用户",
    "summary": "全线搭载旗舰级 IEPL 国际高速物理专线，智能路由自动择优，单节点峰值最高可达 2.5Gbps。全节点统一 1.0x 真实倍率扣费，晚高峰超低延迟、稳定不降速；覆盖森林小包、月狸尝鲜、灵狸进阶到天狸顶配 1.0TB 全阶梯，原生 IP 深度解锁 Netflix、Disney+、ChatGPT 及 TikTok。",
    "packages": [
      {
        "name": "森狸年付小套餐 🌲",
        "badge": "主推套餐 · 年付",
        "subtitle": "流量政策：30G/月高速流量 (全节点 x1，晚高峰不降速)。",
        "traffic": "30GB / 月",
        "price": "¥120.00 / 年",
        "discounted_price": "折合约 ¥10.00 /月",
        "available": "年付",
        "speed": "单节点峰值至 2.5Gbps",
        "devices": "不限",
        "features": [
          "流量政策：30G/月高速流量（全节点 x1，晚高峰不降速）",
          "刷新规则：每 30 天自动刷新流量",
          "网络带宽：全 IEPL 专线，低延迟；单节点峰值至 2.5Gbps",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok",
          "设备并发：多设备不限量同时在线（电脑/手机/路由器）",
          "路由策略：智能路由自动择优，稳定顺滑",
          "客服支持：专业客服，快速响应"
        ]
      },
      {
        "name": "月狸月付小套餐 🌙",
        "badge": "精选尝鲜",
        "subtitle": "流量政策：50G/月高速流量 (全节点 x1，晚高峰不降速)。",
        "traffic": "50GB / 月",
        "price": "¥15.00 / 月",
        "discounted_price": "轻量尝鲜首选",
        "available": "月付",
        "speed": "单节点峰值至 2.5Gbps",
        "devices": "不限",
        "features": [
          "流量政策：50G/月高速流量（全节点 x1，晚高峰不降速）",
          "刷新规则：每 30 天自动刷新流量",
          "网络带宽：全 IEPL 专线，低延迟；单节点峰值至 2.5Gbps",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok",
          "设备并发：多设备不限量同时在线（电脑/手机/路由器）",
          "路由策略：智能路由自动择优，稳定顺滑",
          "客服支持：专业客服，快速响应"
        ]
      },
      {
        "name": "小狸基础版 🦊",
        "badge": "热门主力",
        "subtitle": "流量政策：100G/月高速流量 (全节点 x1，晚高峰不降速)。",
        "traffic": "100GB / 月",
        "price": "¥22.00 / 月",
        "discounted_price": "年付85折 / 两年付7折",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "单节点峰值至 2.5Gbps",
        "devices": "不限",
        "features": [
          "流量政策：100G/月高速流量（全节点 x1，晚高峰不降速）",
          "刷新规则：每 30 天自动刷新流量",
          "网络带宽：全 IEPL 专线，低延迟；单节点峰值至 2.5Gbps",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok",
          "设备并发：多设备不限量同时在线（电脑/手机/路由器）",
          "路由策略：智能路由自动择优，稳定顺滑",
          "周期优惠：支持年付 85 折、两年付 7 折阶梯优惠"
        ]
      },
      {
        "name": "灵狸标准版 ⚡",
        "badge": "进阶优选",
        "subtitle": "流量政策：250G/月高速流量 (全节点 x1，晚高峰不降速)。",
        "traffic": "250GB / 月",
        "price": "¥35.00 / 月",
        "discounted_price": "年付85折 / 两年付7折",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "单节点峰值至 2.5Gbps",
        "devices": "不限",
        "features": [
          "流量政策：250G/月高速流量（全节点 x1，晚高峰不降速）",
          "刷新规则：每 30 天自动刷新流量",
          "网络带宽：全 IEPL 专线，低延迟；单节点峰值至 2.5Gbps",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok",
          "设备并发：多设备不限量同时在线（电脑/手机/路由器）",
          "路由策略：智能路由自动择优，稳定顺滑",
          "周期优惠：支持年付 85 折、两年付 7 折阶梯优惠"
        ]
      },
      {
        "name": "夜狸强化版 🦉",
        "badge": "高阶大流量",
        "subtitle": "流量政策：500G/月高速流量 (全节点 x1，晚高峰不降速)。",
        "traffic": "500GB / 月",
        "price": "¥95.00 / 月",
        "discounted_price": "年付85折 / 两年付7折",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "单节点峰值至 2.5Gbps",
        "devices": "不限",
        "features": [
          "流量政策：500G/月高速流量（全节点 x1，晚高峰不降速）",
          "刷新规则：每 30 天自动刷新流量",
          "网络带宽：全 IEPL 专线，低延迟；单节点峰值至 2.5Gbps",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok",
          "设备并发：多设备不限量同时在线（电脑/手机/路由器）",
          "路由策略：智能路由自动择优，稳定顺滑",
          "客服支持：专业客服，快速响应"
        ]
      },
      {
        "name": "天狸顶配版 🌌",
        "badge": "极客海量 · 旗舰",
        "subtitle": "流量政策：1000G (1.0TB)/月高速流量 (全节点 x1，晚高峰不降速)。",
        "traffic": "1.0TB / 月",
        "price": "¥180.00 / 月",
        "discounted_price": "每月 1000GB 旗舰顶配带宽",
        "available": "月付 / 季付 / 半年 / 年",
        "speed": "单节点峰值至 2.5Gbps",
        "devices": "不限",
        "features": [
          "流量政策：1000G (1.0TB)/月高速流量（全节点 x1，晚高峰不降速）",
          "刷新规则：每 30 天自动刷新流量",
          "网络带宽：全 IEPL 专线，低延迟；单节点峰值至 2.5Gbps",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok",
          "设备并发：多设备不限量同时在线（电脑/手机/路由器）",
          "路由策略：智能路由自动择优，稳定顺滑",
          "极客海量顶配：企业跨境办公、4K/8K 狂揽与多端共享首选"
        ]
      }
    ]
  }
];
