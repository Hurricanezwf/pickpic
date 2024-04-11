import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./navbar.module.css";

interface OptionBarProps {
  // navbarOpacity 导航栏透明状态, "on" or "off"
  navbarOpacity: string;
  // locale 语言;
  locale: string;
}

interface OptionBarParams {
  locale: string;
}

export default function OptionBar({ navbarOpacity, locale }: OptionBarProps) {
  let languageStyles = `text-white/75`;
  let arrowDownImage = "/arrow-down-white.svg";
  let buttonStyles = `text-white/80 hover:text-white/100`;
  if (navbarOpacity && navbarOpacity === "off") {
    languageStyles = `text-black/75`;
    arrowDownImage = "/arrow-down-black.svg";
    buttonStyles = `text-black/80 hover:text-black/100`;
  }

  const i18nNavbar = useTranslations("HomeNavbar");
  const i18nLocales = useTranslations("Locales");
  const currentLangugange = i18nLocales(locale);

  return (
    <div className={`flex-none flex justify-center items-center`}>
      <button
        className={`w-[80px] h-[36px] flex flex-col justify-center items-center -space-y-1 ${languageStyles}`}
        onMouseOver={() => {
          alert("your mouse is over language selector");
        }}
      >
        <div>{currentLangugange}</div>
        <img className="w-[16px] h-[16px]" src={arrowDownImage}></img>
      </button>
      <button
        className={`flex-none w-[80px] h-[36px]  bg-cyan-500/70 hover:bg-cyan-500/100  rounded-md mx-8 transition ease-in-out duration-500 ${buttonStyles}`}
        onClick={() => {
          alert("you click login");
        }}
      >
        {i18nNavbar("loginButton")}
      </button>
    </div>
  );
}
