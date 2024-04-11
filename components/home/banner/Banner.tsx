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
        <div className="flex flex-col gap-6 items-center">
          <p className="text-6xl text-white/80 font-light tracking-normal">
            {i18n("slogan")}
          </p>
          <p className="text-white/80 font-light tracking-light">
            {i18n("sloganDesc")}
          </p>
        </div>
      </div>
    </div>
  );
}
