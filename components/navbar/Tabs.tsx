import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import styles from "./navbar.module.css";

interface TabsProps {
  // navbarOpacity 导航栏透明状态, "on" or "off"
  navbarOpacity: string;
}

export default function Tabs({ navbarOpacity }: TabsProps) {
  const height = styles["navbar-tabs-height"];
  const i18n = useTranslations("HomeNavbar");

  const tabs = [
    {
      path: "/",
      title: i18n("exploreLink"),
      styles: "",
    },
    {
      path: "/create",
      title: i18n("createLink"),
      styles: "",
    },
    {
      path: "/like",
      title: i18n("likeLink"),
      styles: "",
    },
  ];

  let linkStyles = `text-base tracking-wider`;
  const currentPath = usePathname();
  tabs.map((item) => {
    if (item.path === currentPath) {
      // focused;
      if (navbarOpacity && navbarOpacity === "off") {
        // focused & opacity off;
        item.styles = `focus:text-black/100 focus:underline focus:underline-offset-[9px] focus:decoration-[3px] ${linkStyles} text-black/100 underline underline-offset-[9px] decoration-[3px]`;
      } else {
        // focused & opacity on;
        item.styles = `focus:text-white/100 focus:underline focus:underline-offset-[9px] focus:decoration-[3px] ${linkStyles} text-white/100 underline underline-offset-[9px] decoration-[3px]`;
      }
      return;
    }
    // unfocused;
    if (navbarOpacity && navbarOpacity === "off") {
      // unfocused & opacity off;
      item.styles = `focus:text-black/100 focus:underline focus:underline-offset-[9px] focus:decoration-[3px] ${linkStyles} text-black/70`;
    } else {
      // unfocused & opacity on;
      item.styles = `focus:text-white/100 focus:underline focus:underline-offset-[9px] focus:decoration-[3px] ${linkStyles} text-white/70`;
    }
    return;
  });

  return (
    <div
      className={`flex flex-none w-[192px] ${height} items-center justify-between mx-0`}
      data-target="navbar-tabs"
    >
      {tabs.map((item) => (
        <Link className={item.styles} href={item.path} key={item.title}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}
