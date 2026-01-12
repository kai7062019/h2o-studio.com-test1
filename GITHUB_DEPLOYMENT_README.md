# H2O Studio MCN Website - GitHub 部署指南

## 🚀 快速开始（5分钟）

这是一个完整的全栈 H2O Studio 网站项目，可以直接部署到 Cloudflare Pages。

### 前置要求

- GitHub 账户
- Cloudflare 账户（免费）
- SendGrid 或 Resend 账户（邮件服务，免费）

---

## 📋 部署步骤

### 第 1 步：创建 GitHub 仓库

1. 访问 https://github.com/new
2. 创建新仓库：
   - 仓库名：`h2o-studio-website`
   - 可见性：Public
3. 点击 `Create repository`

### 第 2 步：上传代码到 GitHub

```bash
# 进入项目目录
cd h2o-studio-website

# 初始化 Git
git init
git add .
git commit -m "Initial commit: H2O Studio MCN website with Cloudflare Workers backend"

# 重命名分支为 main
git branch -M main

# 添加远程仓库（替换 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/h2o-studio-website.git

# 推送到 GitHub
git push -u origin main
```

### 第 3 步：部署到 Cloudflare Pages

1. 访问 https://dash.cloudflare.com
2. 注册或登录
3. 左侧菜单 → `Pages`
4. 点击 `Connect to Git`
5. 选择 `GitHub` 并授权
6. 选择 `h2o-studio-website` 仓库
7. 配置构建设置：
   - **项目名称**：`h2o-studio`
   - **生产分支**：`main`
   - **框架预设**：`Vite`
   - **构建命令**：`pnpm build`
   - **构建输出目录**：`dist`
8. 点击 `Environment variables (advanced)` 添加：
   - `ADMIN_EMAIL` = 您的邮箱
   - `SENDGRID_API_KEY` 或 `RESEND_API_KEY` = 邮件服务 API Key
9. 点击 `Save and Deploy`

### 第 4 步：配置邮件服务

#### 选项 A：SendGrid（推荐）

1. 访问 https://sendgrid.com
2. 注册并验证邮箱
3. 获取 API Key：Settings → API Keys → Create API Key
4. 复制 Key 到 Cloudflare 环境变量：`SENDGRID_API_KEY`

#### 选项 B：Resend

1. 访问 https://resend.com
2. 用 GitHub 或邮箱注册
3. 获取 API Key
4. 复制 Key 到 Cloudflare 环境变量：`RESEND_API_KEY`

### 第 5 步：设置 D1 数据库

```bash
# 安装 wrangler（如果还没有）
npm install -g wrangler

# 创建数据库
wrangler d1 create h2o-studio-db

# 记下 database_id，更新 wrangler.toml 中的 database_id
```

---

## 📁 项目结构

```
h2o-studio-website/
├── client/                    # React 前端应用
│   ├── src/
│   │   ├── pages/            # 页面组件
│   │   ├── components/       # UI 组件
│   │   ├── contexts/         # 语言等上下文
│   │   └── App.tsx           # 主应用
│   ├── index.html            # HTML 入口
│   └── public/               # 静态资源
├── src/
│   └── worker.ts             # Cloudflare Workers 后端
├── .github/
│   └── workflows/
│       └── deploy-cloudflare.yml  # GitHub Actions 工作流
├── wrangler.toml             # Cloudflare Workers 配置
├── package.json              # 依赖配置
├── vite.config.ts            # Vite 配置
├── _redirects                # SPA 路由配置
└── README.md                 # 项目说明
```

---

## 🔧 本地开发

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 http://localhost:3000

### 构建项目

```bash
pnpm build
```

输出在 `dist/` 目录

---

## 📧 API 端点

### 提交表单

**POST** `/api/submit-form`

```json
{
  "type": "creator",
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I want to join H2O Studio"
}
```

### 获取提交记录

**GET** `/api/submissions`

需要授权 header：`Authorization: Bearer YOUR_TOKEN`

### 健康检查

**GET** `/api/health`

---

## 🌐 自定义域名

1. 在 Cloudflare Pages 中配置自定义域名
2. 在您的域名注册商中添加 CNAME 记录：
   - 名称：`www`
   - 值：`h2o-studio.pages.dev`

---

## 📊 环境变量

| 变量名 | 说明 | 示例 |
|--------|------|------|
| `ADMIN_EMAIL` | 接收表单通知的邮箱 | `admin@h2ostudio.com` |
| `SENDGRID_API_KEY` | SendGrid API Key（可选） | `SG.xxxxx` |
| `RESEND_API_KEY` | Resend API Key（可选） | `re_xxxxx` |

---

## 🆘 常见问题

### 部署后样式不显示？

清除浏览器缓存并重新部署：
```bash
git push
```

### 表单提交失败？

检查 Cloudflare Workers 日志：
```bash
wrangler tail
```

### 没有收到邮件？

1. 检查 `ADMIN_EMAIL` 是否正确
2. 检查邮件是否在垃圾箱
3. 确认 API Key 有效

---

## 📚 文档

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Cloudflare Workers 文档](https://developers.cloudflare.com/workers/)
- [D1 数据库文档](https://developers.cloudflare.com/d1/)
- [Vite 文档](https://vitejs.dev/)

---

## 🎯 功能特性

✅ 响应式设计（移动、平板、桌面）  
✅ 多语言支持（英文、西班牙文、中文）  
✅ 表单提交和数据存储  
✅ 邮件通知系统  
✅ 全球 CDN 加速  
✅ 自动 HTTPS  
✅ 完全免费  

---

## 📞 支持

如需帮助，请查看：
- 项目文档：`CLOUDFLARE_COMPLETE_SETUP.md`
- API 文档：`API_DOCUMENTATION.md`
- 快速参考：`CLOUDFLARE_QUICK_REFERENCE.md`

---

**祝部署顺利！** 🚀
