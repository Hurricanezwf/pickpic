import Image from "next/image";

interface LogoProps {
  // navbarOpacity 导航栏透明状态, "on" or "off"
  navbarOpacity: string;
}

export default function Logo(props: LogoProps) {
  const s = settingsFrom();
  const navbarOpacity = props.navbarOpacity;
  let logoImage = "/logo-white.svg";
  //if (navbarOpacity && navbarOpacity === "off") {
  //  logoImage = "/logo-black.svg";
  //}

  return (
    <div className={`box-content ${s.logoHeight}`} data-target="navbar-logo">
      <img src={logoImage} className={`${s.logoHeight}`}></img>
    </div>
  );
}

interface Settings {
  logoHeight: string;
}

function settingsFrom(): Settings {
  let s: Settings = {
    logoHeight: "h-40px",
  };
  return s;
}
