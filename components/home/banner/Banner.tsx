"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function Banner() {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [opacity, setOpacity] = useState<string>("opacity-0");

  useEffect(() => {
    // 初始化时获取一次页面宽度
    setWindowWidth(window.innerWidth);
    // TODO: 捕获窗口 resize 事件，重新设置 windowWidth
  }, []);

  const i18n = useTranslations("HomeBanner");
  const s = settingsFrom();

  return (
    <div
      className={`relative transition-opacity duration-[1000ms] ease-in ${opacity}`}
      data-target="banner"
    >
      <Image
        src="/banner.jpeg"
        width={windowWidth}
        height={0}
        alt="Banner Image"
        quality="80"
        priority={true}
        onLoad={() => {
          setOpacity("opacity-100");
        }}
      ></Image>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className={`flex flex-col items-center ${s.sloganLineGap}`}>
          <p
            className={`text-white/80 font-light tracking-normal ${s.sloganTextSize}`}
          >
            {i18n("slogan")}
          </p>
          <p
            className={`${s.sloganDescTextSize} text-white/80 font-light tracking-light`}
          >
            {i18n("sloganDesc")}
          </p>
        </div>
      </div>
    </div>
  );
}

interface Settings {
  sloganTextSize: string;
  sloganDescTextSize: string;
  sloganLineGap: string;
}

function settingsFrom(): Settings {
  let s: Settings = {
    sloganTextSize:
      "2xl:text-6xl xl:text-5xl lg:text-4xl md:text-2xl sm:text-lg",
    sloganDescTextSize:
      "2xl:text-base xl:text-base lg:text-sm md:text-xs sm:text-[10px]",
    sloganLineGap: "2xl:gap-6 xl:gap-6 lg:gap-5 md:gap-3 sm:gap-2",
  };
  return s;
}
