"use client";

import styles from "./navbar.module.css";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [navbarOpacity, setNavbarOpacity] = useState<string>(100);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log("rolling, ", scrollTop);
    if (scrollTop == 0) {
      setNavbarOpacity(100);
    } else if (scrollTop < 26) {
      setNavbarOpacity(100);
    } else if (scrollTop >= 26 && scrollTop < 52) {
      setNavbarOpacity(100);
    } else if (scrollTop >= 52 && scrollTop < 78) {
      setNavbarOpacity(100);
    } else if (scrollTop >= 78 && scrollTop < 104) {
      setNavbarOpacity(100);
    } else if (scrollTop >= 104 && scrollTop < 130) {
      setNavbarOpacity(100);
    } else {
      setNavbarOpacity(100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opa = `zwf-opacity-${navbarOpacity}`;
  const opastyle = styles[opa];

  return (
    <div
      className={`w-screen h-10 2xl:h-14 xl:h-12 lg:h-12 md:h-10 sm:h-10 fixed m-0 p-0 z-50 flex-none ${opastyle}`}
    ></div>
  );
}
