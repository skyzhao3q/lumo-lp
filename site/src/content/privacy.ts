import type { LocaleCode } from "./locales";

export type PrivacySection = {
  title: string;
  body: string[];
};

export type PrivacyContent = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  effectiveDate: string;
  intro: string;
  sections: PrivacySection[];
  backHome: string;
};

export const privacyContent = {
  en: {
    metaTitle: "Lumo Privacy Policy",
    metaDescription:
      "Privacy policy for Lumo, an iPhone app for reviewing and organizing photos, screenshots, and videos.",
    title: "Privacy Policy",
    effectiveDate: "Effective date: June 27, 2026",
    intro:
      "Lumo is designed to help you review and organize your photo library without accounts, advertising trackers, or analytics.",
    sections: [
      {
        title: "Data collection",
        body: [
          "Lumo does not create user accounts and does not collect analytics, advertising identifiers, or tracking data.",
          "Lumo's current privacy manifest declares no collected data and no tracking.",
        ],
      },
      {
        title: "Photos access",
        body: [
          "Lumo requests access to Photos so it can display photos, screenshots, and videos for review.",
          "Favorite and delete actions are performed through iOS Photos permissions and system controls.",
          "When a photo or video is stored in iCloud Photos, iOS system behavior may download the asset so Lumo can display or share it.",
        ],
      },
      {
        title: "Local storage",
        body: [
          "Lumo stores app settings, language preference, review stats, and review state locally on your device using UserDefaults.",
          "Sharing may create a temporary local file so the iOS share sheet can send the selected item to an app you choose.",
        ],
      },
      {
        title: "Location metadata",
        body: [
          "If a photo has location metadata, Lumo may show a human-readable location label.",
          "Lumo does not send photo or location data to developer-operated servers. Location labels are resolved through Apple system services.",
        ],
      },
      {
        title: "Support",
        body: [
          "For support, use the support link on Lumo's App Store page once the app is listed.",
          "This policy should be reviewed before App Store submission to confirm it matches the submitted app version.",
        ],
      },
    ],
    backHome: "Back to Lumo",
  },
  ja: {
    metaTitle: "Lumo プライバシーポリシー",
    metaDescription:
      "写真、スクリーンショット、ビデオを見返して整理するiPhoneアプリLumoのプライバシーポリシーです。",
    title: "プライバシーポリシー",
    effectiveDate: "施行日: 2026年6月27日",
    intro:
      "Lumoは、アカウント、広告トラッカー、解析なしで写真ライブラリを見返して整理できるように設計されています。",
    sections: [
      {
        title: "データ収集",
        body: [
          "Lumoはユーザーアカウントを作成せず、解析データ、広告識別子、追跡データを収集しません。",
          "現在のLumoのPrivacy Manifestでは、収集データなし、追跡なしと宣言されています。",
        ],
      },
      {
        title: "写真アクセス",
        body: [
          "Lumoは写真、スクリーンショット、ビデオをレビュー表示するためにPhotosへのアクセスを求めます。",
          "お気に入りと削除の操作は、iOS Photosの権限とシステム制御を通じて実行されます。",
          "写真やビデオがiCloud Photosに保存されている場合、表示や共有のためにiOSのシステム動作としてアセットがダウンロードされることがあります。",
        ],
      },
      {
        title: "ローカル保存",
        body: [
          "Lumoはアプリ設定、言語設定、レビュー統計、レビュー状態をUserDefaultsで端末内に保存します。",
          "共有時には、選択した項目をiOS共有シートで送れるように一時的なローカルファイルを作成することがあります。",
        ],
      },
      {
        title: "位置情報メタデータ",
        body: [
          "写真に位置情報メタデータが含まれている場合、Lumoは読みやすい場所ラベルを表示することがあります。",
          "Lumoは写真や位置情報データを開発者が運営するサーバーへ送信しません。場所ラベルはAppleのシステムサービスを通じて解決されます。",
        ],
      },
      {
        title: "サポート",
        body: [
          "サポートが必要な場合は、アプリ公開後にLumoのApp Storeページに掲載されるサポートリンクをご利用ください。",
          "このポリシーは、App Store提出前に提出版アプリと一致していることを確認してください。",
        ],
      },
    ],
    backHome: "Lumoに戻る",
  },
  "zh-Hans": {
    metaTitle: "Lumo 隐私政策",
    metaDescription:
      "Lumo 是一款用于回顾和整理照片、截图与视频的 iPhone 应用。本页面说明其隐私政策。",
    title: "隐私政策",
    effectiveDate: "生效日期：2026 年 6 月 27 日",
    intro:
      "Lumo 的设计目标是在没有账号、广告追踪器或分析统计的情况下，帮助你回顾和整理照片图库。",
    sections: [
      {
        title: "数据收集",
        body: [
          "Lumo 不创建用户账号，也不收集分析数据、广告标识符或追踪数据。",
          "Lumo 当前的隐私清单声明不收集数据，也不进行追踪。",
        ],
      },
      {
        title: "照片访问",
        body: [
          "Lumo 请求访问 Photos，以便显示照片、截图和视频供你回顾。",
          "收藏和删除操作通过 iOS Photos 权限和系统控制完成。",
          "当照片或视频存储在 iCloud Photos 中时，iOS 系统行为可能会下载该资源，以便 Lumo 显示或分享。",
        ],
      },
      {
        title: "本地存储",
        body: [
          "Lumo 使用 UserDefaults 在设备本地存储应用设置、语言偏好、回顾统计和回顾状态。",
          "分享时，Lumo 可能会创建临时本地文件，以便 iOS 分享面板将所选项目发送到你选择的应用。",
        ],
      },
      {
        title: "位置元数据",
        body: [
          "如果照片包含位置元数据，Lumo 可能会显示易读的位置标签。",
          "Lumo 不会将照片或位置数据发送到开发者运营的服务器。位置标签通过 Apple 系统服务解析。",
        ],
      },
      {
        title: "支持",
        body: [
          "如需支持，请在应用上架后使用 Lumo App Store 页面中的支持链接。",
          "提交 App Store 之前，应检查本政策是否与提交的应用版本一致。",
        ],
      },
    ],
    backHome: "返回 Lumo",
  },
  "zh-Hant": {
    metaTitle: "Lumo 隱私權政策",
    metaDescription:
      "Lumo 是一款用於回顧和整理照片、截圖與影片的 iPhone App。本頁面說明其隱私權政策。",
    title: "隱私權政策",
    effectiveDate: "生效日期：2026 年 6 月 27 日",
    intro:
      "Lumo 的設計目標是在沒有帳號、廣告追蹤器或分析統計的情況下，協助你回顧和整理照片圖庫。",
    sections: [
      {
        title: "資料收集",
        body: [
          "Lumo 不建立使用者帳號，也不收集分析資料、廣告識別碼或追蹤資料。",
          "Lumo 目前的隱私清單宣告不收集資料，也不進行追蹤。",
        ],
      },
      {
        title: "照片存取",
        body: [
          "Lumo 請求存取 Photos，以便顯示照片、截圖和影片供你回顧。",
          "收藏和刪除操作透過 iOS Photos 權限和系統控制完成。",
          "當照片或影片儲存在 iCloud Photos 中時，iOS 系統行為可能會下載該資源，以便 Lumo 顯示或分享。",
        ],
      },
      {
        title: "本機儲存",
        body: [
          "Lumo 使用 UserDefaults 在裝置本機儲存 App 設定、語言偏好、回顧統計和回顧狀態。",
          "分享時，Lumo 可能會建立暫時的本機檔案，以便 iOS 分享面板將所選項目傳送到你選擇的 App。",
        ],
      },
      {
        title: "位置中繼資料",
        body: [
          "如果照片包含位置中繼資料，Lumo 可能會顯示易讀的位置標籤。",
          "Lumo 不會將照片或位置資料傳送到開發者營運的伺服器。位置標籤透過 Apple 系統服務解析。",
        ],
      },
      {
        title: "支援",
        body: [
          "如需支援，請在 App 上架後使用 Lumo App Store 頁面中的支援連結。",
          "提交 App Store 之前，應檢查本政策是否與提交的 App 版本一致。",
        ],
      },
    ],
    backHome: "返回 Lumo",
  },
} satisfies Record<LocaleCode, PrivacyContent>;
