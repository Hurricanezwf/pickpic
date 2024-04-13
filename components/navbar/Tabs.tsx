import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

interface TabsProps {
  // navbarOpacity 导航栏透明状态, "on" or "off"
  navbarOpacity: string;
  // className
  // +optional;
  className: string;
}

export default function Tabs(props: TabsProps) {
  let className = props.className;
  if (!className) {
    className = "";
  }

  const s = settingsFrom();
  const navbarOpacity = props.navbarOpacity;
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
        item.styles = `focus:text-white/100 focus:underline focus:underline-offset-[9px] focus:decoration-[3px] ${linkStyles} text-white/100 underline underline-offset-[9px] decoration-[3px]`;
      } else {
        // focused & opacity on;
        item.styles = `focus:text-white/100 focus:underline focus:underline-offset-[9px] focus:decoration-[3px] ${linkStyles} text-white/100 underline underline-offset-[9px] decoration-[3px]`;
      }
      return;
    }
    // unfocused;
    if (navbarOpacity && navbarOpacity === "off") {
      // unfocused & opacity off;
      item.styles = `focus:text-white/100 focus:underline focus:underline-offset-[9px] focus:decoration-[3px] ${linkStyles} text-white/70`;
    } else {
      // unfocused & opacity on;
      item.styles = `focus:text-white/100 focus:underline focus:underline-offset-[9px] focus:decoration-[3px] ${linkStyles} text-white/70`;
    }
    return;
  });

  return (
    <div
      className={`flex items-center justify-between ${s.height} ${s.width} ${className}`}
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

interface Settings {
  height: string;
  width: string;
}

function settingsFrom(): Settings {
  let s: Settings = {
    height: "h-[56px]",
    width: "2xl:w-[192px] xl:w-[176px] lg:w-[176px] md:w-[160px] sm:w-[160px]",
  };

  return s;
}
