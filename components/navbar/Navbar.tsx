"use client";

import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useWindowScroll } from "react-use";

import Logo from "@/components/navbar/Logo";
import Tabs from "@/components/navbar/Tabs";
import SearchBar from "@/components/navbar/SearchBar";
import OptionBar from "@/components/navbar/OptionBar";

export default function Navbar() {
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
      className={`w-screen ${navbarHeight} fixed m-0 p-0 z-50 flex-none flex justify-center items-center transition-opacity duration-[1500ms] ease-in-out delay-[1000ms] ${opastyle} ${navbarDisplayTransition}`}
    >
      <Logo navbarOpacity={navbarOpacity} />
      <Tabs navbarOpacity={navbarOpacity} />
      <SearchBar navbarOpacity={navbarOpacity} />
      <OptionBar navbarOpacity={navbarOpacity} />
    </div>
  );
}
