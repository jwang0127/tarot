# 月隐 Tarot

一个手机优先的中文塔罗自我探索网站。

## 本地运行

```bash
npm.cmd install
npm.cmd run dev
```

## 第一版功能

- 今日一牌和过去 / 现在 / 未来三牌阵
- 78 张牌的随机抽取，不重复
- 正位 / 逆位
- 洗牌、翻牌动画
- 可关闭的轻量合成音效
- 不保存用户问题或历史牌局

## 部署说明

本项目适合 GitHub Pages 静态部署。DeepSeek API Key 不能放进前端代码；GitHub Secrets 只能供 GitHub Actions 构建时使用，不能让公开网页安全地在浏览器中调用 DeepSeek。后续 AI 功能需要一个服务端代理或其他安全后端。
