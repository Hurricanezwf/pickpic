"use client";

import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useWindowScroll } from "react-use";

import Logo from "@/components/navbar/Logo";
import Tabs from "@/components/navbar/Tabs";
import SearchBar from "@/components/navbar/SearchBar";
import LocaleSwitch from "@/components/navbar/LocaleSwitch";
import LoginButton from "@/components/navbar/LoginButton";

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const [navbarOpacity, setNavbarOpacity] = useState<string>("on");
  const [navbarDisplayTransition, setNavbarDisplayTransition] =
    useState<string>("opacity-0");
  const { y } = useWindowScroll();

  useEffect(() => {
    setNavbarDisplayTransition("opacity-100");
  }, []);

  useEffect(() => {
    if (y && y > 0) {
      setNavbarOpacity("off");
    } else {
      setNavbarOpacity("on");
    }
  }, [y]);

  let opastyle = "bg-black/80";
  if (navbarOpacity === "on") {
    opastyle = "bg-black/0";
  }
  const s = settingsFrom();

  return (
    <div
      className={`w-screen fixed m-0 p-0 z-50 flex-none flex items-center transition-opacity duration-[1500ms] ease-in delay-[1000ms] ${s.navbarHeight} ${opastyle} ${navbarDisplayTransition}`}
    >
      <div className="flex-none mx-4">
        <Logo navbarOpacity={navbarOpacity} />
      </div>

      <div className={`flex-none ${s.tabsMargin}`}>
        <Tabs navbarOpacity={navbarOpacity} />
      </div>

      <div className={`grow shrink ${s.searchBarMargin}`}>
        <SearchBar navbarOpacity={navbarOpacity} />
      </div>

      <div className="flex-none">
        <LocaleSwitch navbarOpacity={navbarOpacity} locale={locale} />
      </div>

      <div className={`flex-none ${s.loginButtonMargin}`}>
        <LoginButton />
      </div>
    </div>
  );
}

interface Settings {
  navbarHeight: string;
  tabsMargin: string;
  searchBarMargin: string;
  loginButtonMargin: string;
}

function settingsFrom(): Settings {
  let s: Settings = {
    navbarHeight: "h-[56px]",
    tabsMargin: "2xl:ml-6 xl:ml-4 lg:ml-4 md:ml-0 md:mr-3 sm:ml-0 sm:mr-3",
    searchBarMargin: "2xl:ml-6 xl:ml-4 lg:ml-3 md:ml-2 sm:ml-0",
    loginButtonMargin: "2xl:mr-8 xl:mr-8 lg:mr-6 md:mr-4 sm:mr-6",
  };
  return s;
}
