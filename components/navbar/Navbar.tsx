"use client";

import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/components/navbar/Logo";
import Tabs from "@/components/navbar/Tabs";
import SearchBar from "@/components/navbar/SearchBar";
import OptionBar from "@/components/navbar/OptionBar";

export default function Navbar() {
  const [navbarOpacity, setNavbarOpacity] = useState<string>(0);

  //const handleScroll = () => {
  //  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //  //console.log("rolling, ", scrollTop);
  //  if (scrollTop == 0) {
  //    setNavbarOpacity(0);
  //  } else if (scrollTop < 26) {
  //    setNavbarOpacity(100);
  //  } else if (scrollTop >= 26 && scrollTop < 52) {
  //    setNavbarOpacity(100);
  //  } else if (scrollTop >= 52 && scrollTop < 78) {
  //    setNavbarOpacity(100);
  //  } else if (scrollTop >= 78 && scrollTop < 104) {
  //    setNavbarOpacity(100);
  //  } else if (scrollTop >= 104 && scrollTop < 130) {
  //    setNavbarOpacity(100);
  //  } else {
  //    setNavbarOpacity(100);
  //  }
  //};

  //useEffect(() => {
  //  window.addEventListener("scroll", handleScroll);
  //  return () => {
  //    window.removeEventListener("scroll", handleScroll);
  //  };
  //}, []);

  const opa = `zwf-opacity-${navbarOpacity}`;
  const opastyle = styles[opa];

  return (
    <div
      className={`w-screen ${styles["navbar-height"]} fixed m-0 p-0 z-50 flex-none flex justify-center items-center ${opastyle}`}
    >
      <Logo height={styles["navbar-logo-height"]} />
      <Tabs height={styles["navbar-tabs-height"]} />
      <SearchBar />
      <OptionBar />
    </div>
  );
}
