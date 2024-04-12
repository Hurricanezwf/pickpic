"use client";

import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useWindowScroll } from "react-use";

import Logo from "@/components/navbar/Logo";
import Tabs from "@/components/navbar/Tabs";
import SearchBar from "@/components/navbar/SearchBar";
import LocaleSwitch from "@/components/navbar/LocaleSwitch";

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

  const opa = `navbar-opacity-${navbarOpacity}`;
  const opastyle = styles[opa];
  const navbarHeight = styles["navbar-height"];

  return (
    <div
      className={`w-screen ${navbarHeight} fixed m-0 p-0 z-50 flex-none flex transition-opacity duration-[1500ms] ease-in delay-[1000ms] ${opastyle} ${navbarDisplayTransition}`}
    >
      <Logo className="self-center" navbarOpacity={navbarOpacity} />
      <Tabs className="self-center" navbarOpacity={navbarOpacity} />
      <SearchBar className="self-center" navbarOpacity={navbarOpacity} />
      <LocaleSwitch navbarOpacity={navbarOpacity} locale={locale} />
    </div>
  );
}
