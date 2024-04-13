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
  const navbarHeight = styles["navbar-height"];

  return (
    <div
      className={`w-screen fixed m-0 p-0 z-50 flex-none flex items-center transition-opacity duration-[1500ms] ease-in delay-[1000ms] ${navbarHeight} ${opastyle} ${navbarDisplayTransition}`}
    >
      <div className="flex-none ml-4">
        <Logo navbarOpacity={navbarOpacity} />
      </div>

      <div className="flex-none">
        <Tabs navbarOpacity={navbarOpacity} />
      </div>

      <div className="grow shrink ml-6">
        <SearchBar navbarOpacity={navbarOpacity} />
      </div>

      <div className="flex-none">
        <LocaleSwitch navbarOpacity={navbarOpacity} locale={locale} />
      </div>

      <div className="flex-none mr-8">
        <LoginButton />
      </div>
    </div>
  );
}
