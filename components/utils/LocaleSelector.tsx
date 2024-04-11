interface LocaleSelectorProps {
  // locales 语言包显示选项;
  locales: Array<Locale>;
  // className
  className: string;
}

interface Locale {
  // code: locale 编码;
  code: string;
  // displayName 显示名;
  displayName: string;
}

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
    <div
      className={`flex flex-col items-center ${width} space-y-0.5 ${className} text-white`}
    >
      <button className="w-[80px] h-[36px] flex flex-col justify-items-center items-center -space-y-1">
        <p>中文简体</p>
        <img className="w-[16px] h-[16px]" src="/arrow-down-white.svg"></img>
      </button>
      <div
        className={`${width} ${outerBorder} ${outerBorderColor} ${outerBorderRound} grid grid-cols-1 divide-y`}
      >
        {items}
      </div>
    </div>
  );
}
