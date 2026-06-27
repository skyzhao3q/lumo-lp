export const localeCodes = ["en", "ja", "zh-Hans", "zh-Hant"] as const;

export type LocaleCode = (typeof localeCodes)[number];
export type PageKind = "home" | "privacy";

export type LocaleMeta = {
  code: LocaleCode;
  htmlLang: string;
  label: string;
  nativeLabel: string;
  pathPrefix: string;
};

export const locales = {
  en: {
    code: "en",
    htmlLang: "en",
    label: "English",
    nativeLabel: "English",
    pathPrefix: "",
  },
  ja: {
    code: "ja",
    htmlLang: "ja",
    label: "Japanese",
    nativeLabel: "日本語",
    pathPrefix: "/ja",
  },
  "zh-Hans": {
    code: "zh-Hans",
    htmlLang: "zh-Hans",
    label: "Simplified Chinese",
    nativeLabel: "简体中文",
    pathPrefix: "/zh-Hans",
  },
  "zh-Hant": {
    code: "zh-Hant",
    htmlLang: "zh-Hant",
    label: "Traditional Chinese",
    nativeLabel: "繁體中文",
    pathPrefix: "/zh-Hant",
  },
} satisfies Record<LocaleCode, LocaleMeta>;

export function localizedPath(locale: LocaleCode, page: PageKind): string {
  const prefix = locales[locale].pathPrefix;
  const suffix = page === "privacy" ? "/privacy/" : "/";
  return `${prefix}${suffix}`.replace("//", "/");
}

export function alternateLinks(page: PageKind) {
  return localeCodes.map((locale) => ({
    hreflang: locale,
    href: localizedPath(locale, page),
  }));
}
