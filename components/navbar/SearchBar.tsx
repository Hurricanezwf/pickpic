import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import styles from "./navbar.module.css";

interface SearchBarProps {
  // navbarOpacity 导航栏透明状态, "on" or "off"
  navbarOpacity: string;
}

export default function SearchBar(props: SearchBarProps) {
  const navbarOpacity = props.navbarOpacity;

  const onKeyEnterSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") {
      return;
    }
    // handle enter key and search;
    const input = document.getElementById("navbar-search-input");
    if (input && input.value) {
      alert("you input:" + input.value);
    }
  };

  const onMouseClickSearch = (e) => {
    // handle enter key and search;
    const input = document.getElementById("navbar-search-input");
    if (input && input.value) {
      alert("you input:" + input.value);
    }
  };

  let searchBarDynamicStyles = `bg-white/10 border-white/70 hover:border-white/100`;
  let searchBarIcon = "/search-white.svg";
  let inputDynamicStyles = "text-white caret-white";
  if (navbarOpacity && navbarOpacity === "off") {
    searchBarDynamicStyles = `bg-white/10 border-white/70 hover:border-white/100`;
    searchBarIcon = "/search-white.svg";
    inputDynamicStyles = "text-white caret-white";
  }

  const i18n = useTranslations("HomeNavbar");
  const s = settingsFrom();

  return (
    <div
      className={`w-full border-[2px] rounded-md flex  transition-colors duration-500 ease-in-out ${searchBarDynamicStyles} ${s.height}`}
      data-target="navbar-searchbar"
    >
      <div
        className={`flex-none flex items-center justify-center ${s.iconBoxWidth} ${s.iconBoxHeight}`}
      >
        <button
          onClick={() => {
            alert("you click search");
          }}
          onMouseDown={onMouseClickSearch}
        >
          <img
            className={`mx-1 ${s.iconWidth} ${s.iconHeight}`}
            src={searchBarIcon}
          />
        </button>
      </div>
      <input
        id="navbar-search-input"
        className={`bg-transparent w-full h-full text-md outline-none grow ml-2 mr-6 ${inputDynamicStyles}`}
        autoFocus
        placeholder={i18n("searchBarPlaceholder")}
        onKeyDown={onKeyEnterSearch}
      ></input>
    </div>
  );
}

interface Settings {
  height: string;

  iconBoxWidth: string;
  iconBoxHeight: string;
  iconWidth: string;
  iconHeight: string;
}

function settingsFrom(): Settings {
  let s: Settings = {
    height:
      "h-[28px] 2xl:h-[40px] xl:h-[36px] lg:h-[32px] md:h-[32px] sm:h-[28px]",
    iconBoxWidth:
      "w-[24px] 2xl:w-[36px] xl:w-[32px] lg:w-[28px] md:w-[28px] sm:w-[24px]",
    iconBoxHeight:
      "h-[24px] 2xl:h-[36px] xl:h-[32px] lg:h-[28px] md:h-[28px] sm:h-[24px]",
    iconWidth:
      "w-[20px] 2xl:w-[30px] xl:w-[28px] lg:w-[24px] md:w-[24px] sm:w-[20px]",
    iconHeight:
      "h-[20px] 2xl:h-[30px] xl:h-[28px] lg:h-[24px] md:h-[24px] sm:h-[20px]",
  };
  return s;
}
