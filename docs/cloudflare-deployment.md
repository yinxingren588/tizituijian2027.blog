# Cloudflare Pages 线上部署与 Bing 收录配置指南 (tizituijian2027.blog)

本站源码已推送至 GitHub 仓库：`https://github.com/yinxingren588/tizituijian2027.blog`

同时已通过 Wrangler 部署免占位线上预览环境：
- **线上即时预览地址**：`https://tizituijian2027-preview.pages.dev/`
- **正式项目推荐保留名称**：`tizituijian2027-blog`（用于控制台连接 Git 自动部署并绑定正式域名）

---

## 一、在 Cloudflare 控制台一键关联 GitHub 并绑定正式域名

1. 登录 [Cloudflare 控制台](https://dash.cloudflare.com/)（当前账号：`Yinxingren588@gmail.com`）。
2. 左侧菜单点击 **Workers 与 Pages** → **创建应用程序** → **Pages** → **连接到 Git**。
3. 选择 GitHub 仓库：`yinxingren588/tizituijian2027.blog`。
4. 填写构建配置（Build Settings）：

| 配置项 | 填写值 | 说明 |
| :--- | :--- | :--- |
| **项目名称** | `tizituijian2027-blog` | 对应 `tizituijian2027-blog.pages.dev` |
| **生产分支** | `main` | 监听 `main` 分支自动触发构建 |
| **框架预设** | `Astro` | 自动识别静态框架 |
| **构建命令** | `npm run build` | 生成 108 个静态页面与 Sitemap |
| **构建输出目录** | `dist` | 输出静态资源根目录 |
| **环境变量** | `NODE_VERSION = 22` | 建议指定 Node 20/22 LTS |

5. 点击 **保存并部署**。

---

## 二、绑定正式域名 `tizituijian2027.blog`

1. 部署完成后进入 `tizituijian2027-blog` 项目 → **自定义域 (Custom domains)** → **设置自定义域**。
2. 依次绑定：
   - `tizituijian2027.blog`
   - `www.tizituijian2027.blog`
3. 因域名 NS 已托管在 Cloudflare，控制台将自动创建 `CNAME` 记录并签发 SSL 证书（建议 SSL/TLS 模式设为 **完全 (严格) / Full (Strict)**）。

---

## 三、提交 Bing Webmaster Tools & IndexNow 极速收录

域名上线后：
1. 在本地项目根目录运行一键推送，即可将 `dist/sitemap.xml` 全部 107 个链接推送至 Bing：
   ```bash
   npm run indexnow
   ```
2. 在 Bing 站长工具提交站点地图：
   - `https://tizituijian2027.blog/sitemap.xml`
   - `https://tizituijian2027.blog/sitemap-index.xml`
