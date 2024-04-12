interface LocaleSelectorProps {
  // locales 语言包显示选项;
  locales: Array<Locale>;
  // mode: dark or light;
  mode: string;
}

interface Locale {
  // code: locale 编码;
  code: string;
  // displayName 显示名;
  displayName: string;
}

// TODO: fix my color;
export default function LocaleSelector(props: LocaleSelectorProps) {
  const locales: Array<Locale> = props.locales;
  if (!locales) {
    throw "locales is undefined in LocaleSelector";
  }

  let className: string = props.className;
  if (!className) {
    className = "";
  }

  const borderColor = "slate-300";

  let width = "w-32";
  let outerBorder = "border";
  let outerBorderColor = "border-" + borderColor;
  let outerBorderRound = "rounded-md";
  let itemHeight = "h-8";
  let itemFontSize = "text-[15px]";
  let divideColor = "divide-" + borderColor;

  const items = locales.map((item) => (
    <div
      key={item.code}
      className={`${width} ${itemHeight} flex justify-center items-center`}
    >
      <p className={`${itemFontSize} truncate mx-2`}>{item.displayName}</p>
    </div>
  ));

  return (
    <div className={`inline-block relative  ${width} space-y-0.5 ${className}`}>
      <button className="w-[80px] h-[36px] mx-auto flex flex-col items-center -space-y-1">
        <p>中文简体</p>
        <img className="w-[16px] h-[16px]" src="/arrow-down-white.svg"></img>
      </button>

      <div
        className={`${width} ${outerBorder} ${outerBorderColor} ${outerBorderRound} grid grid-cols-1 divide-y absolute top-11 bg-white/80`}
      >
        {items}
      </div>
    </div>
  );
}
