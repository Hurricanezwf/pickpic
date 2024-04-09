import Image from "next/image";
import React from "react";
import styles from "./navbar.module.css";

export default function SearchBar() {
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

  return (
    <div
      className={`grow shrink h-[${height}] mx-16 bg-white/10  border-[2px] border-white/70 rounded-md flex transition-colors duration-500 ease-in-out hover:border-white/100`}
      data-target="navbar-searchbar"
    >
      <Image
        className="mx-2 flex-none"
        width={searchIconWidth}
        height={searchIconHeight}
        src="/search.svg"
      ></Image>
      <input
        id="navbar-search-input"
        className={`bg-transparent w-full h-[${height}] text-white text-md caret-white outline-none grow ml-2 mr-6`}
        autoFocus
        placeholder="输入关键词, 按 Enter 搜索图片"
        onKeyDown={onSearch}
      ></input>
    </div>
  );
}

//  <Image className="mx-2 flex-none" width={`w-[${searchIconWidth}]`} height={`h-[${searchIconHeight}]`} src="/search.svg"></img>
