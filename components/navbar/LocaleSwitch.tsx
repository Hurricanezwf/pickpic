import { useRouter } from "next/navigation";
import i18nJSON from "@/libs/messages/zh-CN.json";
import LocaleSelector from "@/components/utils/LocaleSelector";
import { Theme } from "@/components/utils/LocaleSelector";

interface LocaleSwitch {
  // navbarOpacity 导航栏透明状态, "on" or "off"
  navbarOpacity: string;
  // locale 语言;
  locale: string;
}

export default function LocaleSwitch({ navbarOpacity, locale }: LocaleSwitch) {
  const router = useRouter();

  const onLocaleChange = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=315360000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <LocaleSelector
      locales={newLocales()}
      currentLocaleCode={locale}
      theme={Theme.Dark}
      onLocaleChange={onLocaleChange}
    />
  );
}

interface Locale {
  code: string;
  displayName: string;
}

function newLocales(): Array<Locale> {
  const locales: Array<Locale> = [];
  const localeConfigs = i18nJSON.Locales;
  const localeCodes = Object.keys(localeConfigs);
  localeCodes.forEach((code) => {
    locales.push({
      code: code,
      displayName: localeConfigs[code],
    });
  });
  return locales;
}
