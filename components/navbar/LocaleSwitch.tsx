import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./navbar.module.css";
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

  let languageStyles = `text-white/75`;
  let arrowDownImage = "/arrow-down-white.svg";
  let buttonStyles = `text-white/80 hover:text-white/100`;
  if (navbarOpacity && navbarOpacity === "off") {
    languageStyles = `text-white/75`;
    arrowDownImage = "/arrow-down-white.svg";
    buttonStyles = `text-white/80 hover:text-white/100`;
  }

  const i18nNavbar = useTranslations("HomeNavbar");
  const i18nLocales = useTranslations("Locales");
  const currentLangugange = i18nLocales(locale);

  const locales = [
    {
      code: "en-US",
      displayName: "英语",
    },
    {
      code: "zh-CN",
      displayName: "中文简体",
    },
  ];

  const onLocaleChange = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=315360000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <div className={`mr-0 flex-none`}>
      <LocaleSelector
        locales={locales}
        currentLocaleCode={locale}
        theme={Theme.Dark}
        onLocaleChange={onLocaleChange}
      />
    </div>
  );
}

/*
      <div className="flex-none w-[80px] h-[36px]">
        <button
          className={`bg-cyan-500/70 hover:bg-cyan-500/100  rounded-md mx-8 transition ease-in-out duration-500 ${buttonStyles}`}
          onClick={() => {
            alert("you click login");
          }}
        >
          {i18nNavbar("loginButton")}
        </button>
      </div>
 */
