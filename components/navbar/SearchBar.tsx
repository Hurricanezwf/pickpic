import Image from "next/image";
import React from "react";
import styles from "./navbar.module.css";

interface SearchBarProps {
  // navbarOpacity 导航栏透明状态, "on" or "off"
  navbarOpacity: string;
}

export default function SearchBar({ navbarOpacity }: SearchBarProps) {
  const onSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") {
      return;
    }
    // handle enter key and search;
    const input = document.getElementById("navbar-search-input");
    if (input && input.value) {
      alert("you input:" + input.value);
    }
  };

  const height = "40px";
  const searchIconHeight = 28;
  const searchIconWidth = 28;

  let searchBarDynamicStyles = `bg-white/10 border-white/70 hover:border-white/100`;
  let searchBarIcon = "/search-white.svg";
  let inputDynamicStyles = "text-white caret-white";
  if (navbarOpacity && navbarOpacity === "off") {
    searchBarDynamicStyles = `bg-black/10 border-black/70 hover:border-black/100`;
    searchBarIcon = "/search-black.svg";
    inputDynamicStyles = "text-black caret-black";
  }

  return (
    <div
      className={`grow shrink h-[${height}] mx-16   border-[2px] rounded-md flex transition-colors duration-500 ease-in-out ${searchBarDynamicStyles}`}
      data-target="navbar-searchbar"
    >
      <Image
        className="mx-2 flex-none"
        width={searchIconWidth}
        height={searchIconHeight}
        src={searchBarIcon}
      ></Image>
      <input
        id="navbar-search-input"
        className={`bg-transparent w-full h-[${height}]  text-md  outline-none grow ml-2 mr-6 ${inputDynamicStyles}`}
        autoFocus
        placeholder="输入关键词, 按 Enter 搜索图片"
        onKeyDown={onSearch}
      ></input>
    </div>
  );
}
