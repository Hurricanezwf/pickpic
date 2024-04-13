import { useTranslations } from "next-intl";

export enum LoginButtonTheme {
  A,
}

interface LoginButtonProps {
  theme?: LoginButtonTheme;
}

export default function LoginButton(props: LoginButtonProps) {
  // 解析主题配置;
  let theme: LoginButtonTheme = props.theme;
  if (theme === undefined) {
    theme = LoginButtonTheme.A;
  }
  const s = settingsFrom(theme);

  // 解析 i18n;
  const i18n = useTranslations("HomeNavbar");

  return (
    <button
      className={`rounded-md transition ease-in-out duration-500  ${s.width} ${s.height} ${s.backgroundColor} ${s.backgroundColorHover} ${s.textColor} ${s.textColorHover}`}
      onClick={() => {
        alert("you click login");
      }}
    >
      {i18n("loginButton")}
    </button>
  );
}

interface Settings {
  width: string;
  height: string;
  textColor: string;
  textColorHover: string;
  backgroundColor: string;
  backgroundColorHover: string;
}

function settingsFrom(theme: LoginButtonTheme): Settings {
  let s: Settings = {
    width: "w-[80px]",
    height: "h-[36px]",
    textColor: "text-white/80",
    textColorHover: "text-white/100",
  };
  switch (theme) {
    case LoginButtonTheme.A:
      s.backgroundColor = "bg-cyan-500/70";
      s.backgroundColorHover = "hover:bg-cyan-500/100";
      return s;
    default:
      throw new Error(`unknown theme value ${theme}`);
  }
}
