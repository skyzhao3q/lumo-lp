# Lumo Landing Site 実装案

**Summary**
- `site/` 配下に Astro の静的サイトを追加し、`/` をアプリ紹介、`/privacy/` を App Store 登録用 Privacy Policy にします。
- 既存アプリの訴求軸は「ランダムに思い出をめくり、写真・スクショ・動画を軽く整理して空き容量を取り戻す」。内容は [README.md](/Users/skyzhao/dev/kspro/lumo/README.md) と実装から抽出します。
- デプロイは Cloudflare Pages の GitHub 連携を採用します。GitHub push/PR で自動ビルド、PR ごとの preview URL、GitHub check run が使えるため、無料枠と低保守のバランスが最も良いです。([developers.cloudflare.com](https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/))

**Key Changes**
- **Webサイト**
  - `site/` に Astro + TypeScript + 静的生成を追加。
  - ページ: `/`、`/privacy/`、必要なら `/en/`、`/en/privacy/`。
  - Landing構成: Hero、主要機能、整理フロー、Privacy-first、FAQ/Support、Privacy Policy導線。
  - 画像は実ユーザー写真を使わず、アプリアイコン・生成/デモ用モック・合成スクリーンショットのみ使用。

- **Privacy Policy**
  - Apple は iOS アプリに Privacy Policy URL を要求しているため、`/privacy/` を安定URLにします。([developer.apple.com](https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy))
  - 内容は「Photos権限を使う」「写真/動画は端末内で処理」「アカウントなし」「追跡なし」「データ収集なし」「削除/お気に入りはiOS Photos権限経由」を明記。
  - 法務文書として最終提出前に人間レビュー前提にします。

- **CI/CD**
  - Cloudflare Pages: root directory `site`、build command `npm ci && npm run build`、output `dist`、production branch `main`。
  - GitHub Actions: `site-ci.yml` で `npm ci`、型チェック、ビルドをPRごとに実行。
  - iOS CI は macOS runner のコストが高くなりやすいため、無料重視で `workflow_dispatch` と `Lumo/**` 変更時のみに限定します。GitHub Actions は private repo では無料分を超えると課金対象です。([docs.github.com](https://docs.github.com/en/billing/concepts/product-billing/github-actions))
  - Cloudflare Pages Free plan の範囲内に収めます。今回の静的サイトは 500 builds/month、20,000 files/site、25 MiB/file の制限に十分収まる想定です。([developers.cloudflare.com](https://developers.cloudflare.com/pages/platform/limits/))

- **AI Agent運用**
  - `AGENTS.md`、PRテンプレート、Issueテンプレート、`docs/site-maintenance.md` を追加。
  - 文言・URL・FAQ・Privacy Policyの編集箇所を `site/src/content/` に集約し、AI Agent が安全に更新しやすい構造にします。
  - Dependabot を npm と GitHub Actions に有効化し、依存更新PRを自動作成します。([docs.github.com](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/auto-update-actions))

**Test Plan**
- `cd site && npm ci && npm run build`
- desktop/mobile で `/` と `/privacy/` の表示崩れ、リンク、言語切替、CTAを確認。
- App Store用URLとして `/privacy/` がログイン不要・公開・200応答であることを確認。
- Cloudflare Pages の PR preview と `main` production deploy を確認。

**Assumptions**
- 言語は未回答のため、日本語＋英語を既定にします。
- App Store は未公開前提で、CTA は「App Store予定/Coming soon」。公開後にURLを差し替えます。
- アクセス解析・問い合わせフォームは入れず、Privacy Policy と保守を最小化します。
- 独自ドメインが未決定の場合、まず `*.pages.dev` で公開し、後から Cloudflare DNS の custom domain を追加します。
