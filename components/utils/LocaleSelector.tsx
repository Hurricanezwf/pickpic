import { useState, useRef } from "react";

export enum Theme {
  Dark,
  Light,
}

interface LocaleSelectorProps {
  // currentLocaleCode 当前语言码;
  // +required;
  currentLocaleCode: string;
  // locales 语言包显示选项;
  // +required;
  locales: Array<Locale>;
  // theme: dark or light;
  // +optional; default is light;
  theme?: Theme;
  // onLocaleChange locale变化时回调;
  // +optional;
  onLocaleChange?: (locale: string) => void;
}

interface Locale {
  // code: locale 编码;
  code: string;
  // displayName 显示名;
  displayName: string;
}

export default function LocaleSelector(props: LocaleSelectorProps) {
  // 输入校验;
  const locales: Array<Locale> = props.locales;
  if (!locales) {
    throw new Error("locales is undefined");
  }
  if (!props.currentLocaleCode) {
    throw new Error("current locale code is undefined");
  }
  const currentLocaleDisplayName = searchLocaleDisplayName(
    locales,
    props.currentLocaleCode
  );

  let theme: Theme = props.theme;
  if (!theme) {
    theme = Theme.Light;
  }

  // 事件处理与状态流转；
  const [dropDownListHidden, setDropDownListHidden] =
    useState<string>("hidden");
  const [currentLocaleName, setCurrentLocaleName] = useState<string>(
    currentLocaleDisplayName
  );
  const closeDropDownBeforeTimeoutRef = useRef(null);

  const onSwitchLocale = (e) => {
    // close dropdown;
    setDropDownListHidden("hidden");
    // callback event;
    const newLocale = e.currentTarget.dataset.locale;
    const newLocaleDisplayName = searchLocaleDisplayName(locales, newLocale);
    if (newLocaleDisplayName !== currentLocaleName && props.onLocaleChange) {
      props.onLocaleChange(newLocale);
    }
    // update display;
    setCurrentLocaleName(newLocaleDisplayName);
  };

  let s = settingsFrom(theme);
  const items = locales.map((item) => (
    <button
      id={item.code}
      data-locale={item.code}
      key={item.code}
      className={`flex justify-center items-center ${s.dropDownListItemWidth} ${s.dropDownListItemHeight} ${s.dropDownListItemFontSize} ${s.dropDownListItemTextColor} ${s.dropDownListItemTextColorHover}`}
      onClick={onSwitchLocale}
    >
      <p className={`truncate mx-2`}>{item.displayName}</p>
    </button>
  ));

  return (
    <div
      className={`inline-block relative space-y-0.5 ${s.componentWidth} `}
      onClick={() => {
        setDropDownListHidden(dropDownListHidden === "hidden" ? "" : "hidden");
      }}
    >
      <button
        className={`mx-auto flex flex-col items-center -space-y-1 ${s.currentLocaleWidth} ${s.currentLocaleHeight}`}
      >
        <p className={`${s.currentLocaleTextColor}`}>{currentLocaleName}</p>
        <img className="w-[16px] h-[16px]" src="/arrow-down-white.svg"></img>
      </button>

      <div
        className={`grid grid-cols-1 divide-y absolute top-11 ${dropDownListHidden} ${s.dropDownListBorderWidth} ${s.dropDownListBorderColor} ${s.dropDownListBorderRound}  ${s.dropDownListBackgroundColor} ${s.dropDownListDivideColor}`}
      >
        {items}
      </div>
    </div>
  );
}

function searchLocaleDisplayName(
  locales: Array<Locale>,
  localeCode: string
): string {
  let currentLocaleDisplayName;
  locales.forEach((item) => {
    if (item.code === localeCode) {
      currentLocaleDisplayName = item.displayName;
    }
  });
  if (!currentLocaleDisplayName) {
    throw new Error(`no locale ${localeCode} was found in input locales`);
  }
  return currentLocaleDisplayName;
}

interface Settings {
  componentWidth: string;

  currentLocaleWidth: string;
  currentLocaleHeight: string;
  currentLocaleTextColor: string;

  dropDownListBackgroundColor: string;
  dropDownListBorderWidth: string;
  dropDownListBorderColor: string;
  dropDownListBorderRound: string;
  dropDownListDivideColor: string;
  dropDownListItemWidth: string;
  dropDownListItemHeight: string;
  dropDownListItemFontSize: string;
  dropDownListItemTextColor: string;
  dropDownListItemTextColorHover: string;
}

function settingsFrom(theme: Theme): Settings {
  let s: Settings = {
    componentWidth: "w-32",

    currentLocaleWidth: "w-[80px]",
    currentLocaleHeight: "h-[36px]",
    currentLocaleTextColor: "",

    dropDownListBackgroundColor: "",
    dropDownListBorderWidth: "border",
    dropDownListBorderColor: "",
    dropDownListBorderRound: "rounded-md",
    dropDownListDivideColor: "",
    dropDownListItemWidth: "w-32",
    dropDownListItemHeight: "h-8",
    dropDownListItemFontSize: "test-[15px]",
    dropDownListItemTextColor: "",
    dropDownListItemTextColorHover: "",
  };

  switch (theme) {
    case Theme.Dark:
      return s;
    case Theme.Light:
      s.currentLocaleTextColor = "text-white/70";
      s.dropDownListBackgroundColor = "bg-white/0";
      s.dropDownListBorderColor = "border-white/80";
      s.dropDownListDivideColor = "divide-white/80";
      s.dropDownListItemTextColor = "text-white/70";
      s.dropDownListItemTextColorHover = "hover:text-white/100";
      return s;
    default:
      throw new Error(`unknown theme ${theme} value for LocaleSelector`);
  }
}
