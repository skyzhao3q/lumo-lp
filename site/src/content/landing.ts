import type { LocaleCode } from "./locales";

export type Feature = {
  title: string;
  body: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Screenshot = {
  src: string;
  alt: string;
  label: string;
};

export type LandingContent = {
  metaTitle: string;
  metaDescription: string;
  navPrivacy: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  primaryCta: string;
  secondaryCta: string;
  comingSoonNote: string;
  featuresTitle: string;
  features: Feature[];
  flowTitle: string;
  flowSteps: string[];
  privacyTitle: string;
  privacyBody: string;
  screenshotsTitle: string;
  screenshots: Screenshot[];
  faqTitle: string;
  faq: FaqItem[];
  supportTitle: string;
  supportBody: string;
};

export const landingContent = {
  en: {
    metaTitle: "Lumo - Photo cleanup for spare moments",
    metaDescription:
      "Lumo helps you rediscover random photos, screenshots, and videos, then lightly clean up your library without turning it into a chore.",
    navPrivacy: "Privacy",
    heroEyebrow: "iPhone photo cleanup",
    heroTitle: "Review random memories. Reclaim storage.",
    heroBody:
      "Lumo turns photo cleanup into a light browsing ritual: open a random memory, keep it, favorite it, share it, skip it, or add it to a careful delete review.",
    primaryCta: "Coming soon on the App Store",
    secondaryCta: "Read privacy policy",
    comingSoonNote: "No account, no tracking, no analytics.",
    featuresTitle: "Built for quick, careful review",
    features: [
      {
        title: "Random memory deck",
        body: "Photos, screenshots, and videos appear as simple cards so old moments can resurface naturally.",
      },
      {
        title: "Swipe decisions",
        body: "Swipe up to pass, swipe down to mark for deletion, and long press to favorite a memory.",
      },
      {
        title: "Group delete review",
        body: "Deletion candidates are reviewed as a set before Lumo asks iOS Photos to remove anything.",
      },
      {
        title: "Storage-focused stats",
        body: "See reviewed items, delete candidates, favorites, and estimated space recovered by media type.",
      },
    ],
    flowTitle: "A lighter cleanup flow",
    flowSteps: [
      "Pick a mode: photos, screenshots, or videos.",
      "Browse one memory at a time.",
      "Review deletion candidates before committing changes.",
    ],
    privacyTitle: "Privacy-first by design",
    privacyBody:
      "Lumo does not create accounts, does not track you, and does not collect analytics. Your library is handled through iOS Photos permissions and system controls.",
    screenshotsTitle: "Product preview",
    screenshots: [
      {
        src: "/images/screenshots/photo-review.png",
        alt: "Lumo photo review screen with a memory card and swipe actions.",
        label: "Photo review",
      },
      {
        src: "/images/screenshots/stats.png",
        alt: "Lumo stats screen showing reviewed memories and recovered storage.",
        label: "Stats",
      },
      {
        src: "/images/screenshots/settings.png",
        alt: "Lumo settings screen for language and review set size.",
        label: "Settings",
      },
    ],
    faqTitle: "FAQ",
    faq: [
      {
        question: "Does Lumo delete photos immediately?",
        answer:
          "No. Lumo collects deletion candidates first, then shows a review screen before requesting deletion through iOS Photos.",
      },
      {
        question: "Does Lumo upload my photos?",
        answer:
          "Lumo does not upload your photos to developer-operated servers. Photo access is handled through iOS Photos and system services.",
      },
      {
        question: "Is the app available now?",
        answer:
          "The App Store link will be added when the first public release is ready.",
      },
    ],
    supportTitle: "Support",
    supportBody:
      "For support, use the support link on Lumo's App Store page once the app is listed.",
  },
  ja: {
    metaTitle: "Lumo - すきま時間の写真整理",
    metaDescription:
      "Lumoは、ランダムに表示される写真・スクリーンショット・ビデオを見返しながら、軽くライブラリを整理できるiPhoneアプリです。",
    navPrivacy: "プライバシー",
    heroEyebrow: "iPhone写真整理",
    heroTitle: "思い出をめくりながら、空き容量を取り戻す。",
    heroBody:
      "Lumoは写真整理を小さなブラウズ体験にします。ランダムな思い出を開いて、残す、お気に入りにする、共有する、スキップする、削除候補に入れる操作をすばやく行えます。",
    primaryCta: "App Storeで近日公開",
    secondaryCta: "プライバシーポリシーを見る",
    comingSoonNote: "アカウントなし、追跡なし、解析なし。",
    featuresTitle: "短時間で慎重に見返せる設計",
    features: [
      {
        title: "ランダムな思い出デッキ",
        body: "写真、スクリーンショット、ビデオをカード形式で表示し、昔の思い出を自然に見返せます。",
      },
      {
        title: "スワイプ操作",
        body: "上スワイプで次へ、下スワイプで削除候補、長押しでお気に入りにできます。",
      },
      {
        title: "まとめて削除確認",
        body: "削除候補はセットごとに確認してから、iOS Photos経由で削除を依頼します。",
      },
      {
        title: "容量に注目した統計",
        body: "確認済み、削除候補、お気に入り、推定削減容量をメディア種別ごとに確認できます。",
      },
    ],
    flowTitle: "軽い整理フロー",
    flowSteps: [
      "写真、スクリーンショット、ビデオからモードを選びます。",
      "思い出を1つずつ見返します。",
      "削除候補を確認してから変更を確定します。",
    ],
    privacyTitle: "プライバシーを前提に設計",
    privacyBody:
      "Lumoはアカウントを作らず、追跡も解析も行いません。写真ライブラリはiOS Photosの権限とシステム機能を通じて扱います。",
    screenshotsTitle: "画面プレビュー",
    screenshots: [
      {
        src: "/images/screenshots/photo-review.png",
        alt: "Lumoの写真レビュー画面。思い出カードとスワイプ操作が表示されています。",
        label: "写真レビュー",
      },
      {
        src: "/images/screenshots/stats.png",
        alt: "Lumoの統計画面。確認済みの思い出と削減容量が表示されています。",
        label: "統計",
      },
      {
        src: "/images/screenshots/settings.png",
        alt: "Lumoの設定画面。言語とレビューセット数を変更できます。",
        label: "設定",
      },
    ],
    faqTitle: "FAQ",
    faq: [
      {
        question: "Lumoは写真をすぐ削除しますか？",
        answer:
          "いいえ。削除候補を集めたあと、確認画面を表示し、iOS Photos経由で削除を依頼します。",
      },
      {
        question: "Lumoは写真をアップロードしますか？",
        answer:
          "Lumoは開発者が運営するサーバーへ写真をアップロードしません。写真アクセスはiOS Photosとシステムサービスを通じて行われます。",
      },
      {
        question: "アプリはもう使えますか？",
        answer:
          "最初の公開版の準備ができた時点で、App Storeリンクを追加します。",
      },
    ],
    supportTitle: "サポート",
    supportBody:
      "サポートが必要な場合は、アプリ公開後にLumoのApp Storeページに掲載されるサポートリンクをご利用ください。",
  },
  "zh-Hans": {
    metaTitle: "Lumo - 用碎片时间整理照片",
    metaDescription:
      "Lumo 帮你随机回顾照片、截图和视频，在不把整理变成负担的情况下轻松清理图库。",
    navPrivacy: "隐私",
    heroEyebrow: "iPhone 照片整理",
    heroTitle: "随机回顾回忆，找回存储空间。",
    heroBody:
      "Lumo 把照片整理变成轻松的浏览体验：打开一段随机回忆，保留、收藏、分享、跳过，或加入谨慎的删除复核。",
    primaryCta: "即将登陆 App Store",
    secondaryCta: "阅读隐私政策",
    comingSoonNote: "无需账号，不追踪，不做分析统计。",
    featuresTitle: "为快速而谨慎的回顾而设计",
    features: [
      {
        title: "随机回忆卡片",
        body: "照片、截图和视频以简洁卡片呈现，让旧回忆自然浮现。",
      },
      {
        title: "滑动决策",
        body: "上滑跳过，下滑加入删除候选，长按即可收藏。",
      },
      {
        title: "成组删除复核",
        body: "删除候选会先集中复核，然后才通过 iOS Photos 请求删除。",
      },
      {
        title: "面向空间的统计",
        body: "按媒体类型查看已回顾项目、删除候选、收藏和预计释放空间。",
      },
    ],
    flowTitle: "更轻量的整理流程",
    flowSteps: [
      "选择照片、截图或视频模式。",
      "一次回顾一段回忆。",
      "确认删除候选后再提交更改。",
    ],
    privacyTitle: "以隐私为先",
    privacyBody:
      "Lumo 不创建账号，不追踪你，也不收集分析数据。图库访问通过 iOS Photos 权限和系统控制完成。",
    screenshotsTitle: "产品预览",
    screenshots: [
      {
        src: "/images/screenshots/photo-review.png",
        alt: "Lumo 照片回顾界面，显示回忆卡片和滑动操作。",
        label: "照片回顾",
      },
      {
        src: "/images/screenshots/stats.png",
        alt: "Lumo 统计界面，显示已回顾回忆和释放空间。",
        label: "统计",
      },
      {
        src: "/images/screenshots/settings.png",
        alt: "Lumo 设置界面，可调整语言和每组回顾数量。",
        label: "设置",
      },
    ],
    faqTitle: "常见问题",
    faq: [
      {
        question: "Lumo 会立即删除照片吗？",
        answer:
          "不会。Lumo 会先收集删除候选，再显示复核页面，然后通过 iOS Photos 请求删除。",
      },
      {
        question: "Lumo 会上传我的照片吗？",
        answer:
          "Lumo 不会把你的照片上传到开发者运营的服务器。照片访问由 iOS Photos 和系统服务处理。",
      },
      {
        question: "应用现在可以下载吗？",
        answer:
          "首个公开版本准备好后，这里会加入 App Store 链接。",
      },
    ],
    supportTitle: "支持",
    supportBody:
      "如需支持，请在应用上架后使用 Lumo App Store 页面中的支持链接。",
  },
  "zh-Hant": {
    metaTitle: "Lumo - 用零碎時間整理照片",
    metaDescription:
      "Lumo 幫你隨機回顧照片、截圖和影片，在不把整理變成負擔的情況下輕鬆清理圖庫。",
    navPrivacy: "隱私",
    heroEyebrow: "iPhone 照片整理",
    heroTitle: "隨機回顧回憶，找回儲存空間。",
    heroBody:
      "Lumo 把照片整理變成輕鬆的瀏覽體驗：打開一段隨機回憶，保留、收藏、分享、略過，或加入謹慎的刪除複核。",
    primaryCta: "即將登上 App Store",
    secondaryCta: "閱讀隱私權政策",
    comingSoonNote: "無需帳號，不追蹤，不做分析統計。",
    featuresTitle: "為快速而謹慎的回顧而設計",
    features: [
      {
        title: "隨機回憶卡片",
        body: "照片、截圖和影片以簡潔卡片呈現，讓舊回憶自然浮現。",
      },
      {
        title: "滑動決策",
        body: "上滑略過，下滑加入刪除候選，長按即可收藏。",
      },
      {
        title: "成組刪除複核",
        body: "刪除候選會先集中複核，然後才透過 iOS Photos 請求刪除。",
      },
      {
        title: "面向空間的統計",
        body: "按媒體類型查看已回顧項目、刪除候選、收藏和預估釋放空間。",
      },
    ],
    flowTitle: "更輕量的整理流程",
    flowSteps: [
      "選擇照片、截圖或影片模式。",
      "一次回顧一段回憶。",
      "確認刪除候選後再提交變更。",
    ],
    privacyTitle: "以隱私為先",
    privacyBody:
      "Lumo 不建立帳號，不追蹤你，也不收集分析資料。圖庫存取透過 iOS Photos 權限和系統控制完成。",
    screenshotsTitle: "產品預覽",
    screenshots: [
      {
        src: "/images/screenshots/photo-review.png",
        alt: "Lumo 照片回顧介面，顯示回憶卡片和滑動操作。",
        label: "照片回顧",
      },
      {
        src: "/images/screenshots/stats.png",
        alt: "Lumo 統計介面，顯示已回顧回憶和釋放空間。",
        label: "統計",
      },
      {
        src: "/images/screenshots/settings.png",
        alt: "Lumo 設定介面，可調整語言和每組回顧數量。",
        label: "設定",
      },
    ],
    faqTitle: "常見問題",
    faq: [
      {
        question: "Lumo 會立即刪除照片嗎？",
        answer:
          "不會。Lumo 會先收集刪除候選，再顯示複核頁面，然後透過 iOS Photos 請求刪除。",
      },
      {
        question: "Lumo 會上傳我的照片嗎？",
        answer:
          "Lumo 不會把你的照片上傳到開發者營運的伺服器。照片存取由 iOS Photos 和系統服務處理。",
      },
      {
        question: "App 現在可以下載嗎？",
        answer:
          "首個公開版本準備好後，這裡會加入 App Store 連結。",
      },
    ],
    supportTitle: "支援",
    supportBody:
      "如需支援，請在 App 上架後使用 Lumo App Store 頁面中的支援連結。",
  },
} satisfies Record<LocaleCode, LandingContent>;
