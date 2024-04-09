import styles from "./navbar.module.css";
import Image from "next/image";

interface LogoProps {
  // navbarOpacity 导航栏透明状态, "on" or "off"
  navbarOpacity: string;
}

export default function Logo({ navbarOpacity }: LogoProps) {
  const height = styles["navbar-logo-height"];
  let logoImage = "/logo-white.svg";
  if (navbarOpacity && navbarOpacity === "off") {
    logoImage = "/logo-black.svg";
  }

  return (
    <div className={`flex-none w-32 ${height}`} data-target="navbar-logo">
      <div className={`w-24 box-content mx-4  ${height}`}>
        <img src={logoImage} className={`${height}`}></img>
      </div>
    </div>
  );
}
