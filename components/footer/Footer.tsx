import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const [opacityTransition, setOpacityTransition] =
    useState<string>("opacity-0");

  useEffect(() => {
    setOpacityTransition("opacity-100");
  }, []);

  const i18n = useTranslations("Footer");

  return (
    <div
      className={`h-10 flex-none flex justify-center items-center transition-opacity duration-[1000ms] ease-in delay-[1500ms] ${opacityTransition}`}
    >
      <div className="text-slate-400 text-xs">{i18n("text")}</div>
    </div>
  );
}
