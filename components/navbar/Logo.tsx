import styles from "./navbar.module.css";
import Image from "next/image";

interface LogoProps {
  // navbarOpacity 导航栏透明状态, "on" or "off"
  navbarOpacity: string;
  // className
  // +optional;
  className: string;
}

export default function Logo(props: LogoProps) {
  let className = props.className;
  if (!className) {
    className = "";
  }

  const navbarOpacity = props.navbarOpacity;
  const height = styles["navbar-logo-height"];
  let logoImage = "/logo-white.svg";
  //if (navbarOpacity && navbarOpacity === "off") {
  //  logoImage = "/logo-black.svg";
  //}

  return (
    <div className={`w-32 ${height} ${className}`} data-target="navbar-logo">
      <div className={`w-24 box-content ${height}`}>
        <img src={logoImage} className={`${height}`}></img>
      </div>
    </div>
  );
}
