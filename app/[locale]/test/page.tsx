import LocaleSelector from "@/components/utils/LocaleSelector";
import Test from "@/components/utils/Test";

interface TestProps {
  params: { locale: string };
}

export default function TestPage({ params }: TestProps) {
  const locales = [
    {
      code: "en-US",
      displayName: "英语",
    },
    {
      code: "zh-CN",
      displayName: "中文简体就开始大家快结束",
    },
  ];
  return (
    <div className="bg-black">
      <LocaleSelector locales={locales}></LocaleSelector>
    </div>
  );
}
