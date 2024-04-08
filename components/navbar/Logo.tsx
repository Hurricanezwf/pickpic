import styles from "./navbar.module.css";
import Image from "next/image";

interface LogoProps {
  height: string;
}

export default function Logo({ height }: LogoProps) {
  return (
    <div className={`flex-none w-32 ${height}`} data-target="navbar-logo">
      <div className={`w-24 box-content mx-4  ${height}`}>
        <img src="/logo.svg" className={`${height}`}></img>
      </div>
    </div>
  );
}
