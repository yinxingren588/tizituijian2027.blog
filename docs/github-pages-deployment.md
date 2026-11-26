# GitHub Pages 自动化部署与域名绑定指南 (tizituijian2027.blog)

本项目已内置 `.github/workflows/deploy.yml` 自动化工作流，每次推送到 `main` 分支都会自动构建全站 108 个静态页面并部署到 GitHub Pages，同时在域名上线后自动向 Bing IndexNow 推送全站 `sitemap.xml` URL。

---

## 一、启用 GitHub Pages（仅需设置一次）

1. 打开仓库页面：`https://github.com/yinxingren588/tizituijian2027.blog/settings/pages`
2. 在 **Build and deployment** → **Source** 下拉框选择：**`GitHub Actions`**。
3. （可选）到 **Actions** 标签页查看工作流 `Deploy tizituijian2027.blog to GitHub Pages` 的构建与发布状态。

---

## 二、Cloudflare DNS 解析配置（绑定正式域名 `tizituijian2027.blog`）

因您的域名 `tizituijian2027.blog` NS 已托管在 Cloudflare，请在 Cloudflare DNS 控制台添加以下记录：

| 类型 | 名称 (Name) | 目标内容 (Content) | 代理状态 (Proxy) |
| :--- | :--- | :--- | :--- |
| `A` | `@` | `185.199.108.153` | 仅 DNS 或 已代理（建议先仅 DNS 等证书签发后再开启小黄云） |
| `A` | `@` | `185.199.109.153` | 同上 |
| `A` | `@` | `185.199.110.153` | 同上 |
| `A` | `@` | `185.199.111.153` | 同上 |
| `CNAME` | `www` | `yinxingren588.github.io` | 同上 |

然后在 GitHub 仓库 **Settings → Pages → Custom domain** 中确认填入 `tizituijian2027.blog`（项目已内置 `public/CNAME`）并勾选 **Enforce HTTPS**。

> **SSL 提示**：若开启 Cloudflare 小黄云 CDN 代理，请确认 Cloudflare 的 SSL/TLS 模式设为 **完全 (Full)** 或 **完全 (严格) (Full Strict)**，避免出现重定向循环。

---

## 三、手动触发全站收录推送

DNS 解析生效后，可在 GitHub Actions 页面点击 **Re-run / Run workflow**，或本地运行：
```bash
npm run indexnow
```
即可将全站 107 个可索引页面一键推送到微软 Bing IndexNow。
