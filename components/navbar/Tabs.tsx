import styles from "./navbar.module.css";

interface TabsProps {
  height: string;
}

export default function Tabs({ height }: TabsProps) {
  return (
    <div
      className={`flex flex-none w-36 ${height} items-center justify-between mx-0`}
      data-target="navbar-tabs"
    >
      <a
        className={`text-white text-base tracking-wider underline underline-offset-[9px] decoration-[3px]`}
        href="#"
      >
        探索
      </a>
      <a className="text-white/70 text-base tracking-wider" href="#">
        创作
      </a>
      <a className="text-white/70 text-base tracking-wider" href="#">
        喜欢
      </a>
    </div>
  );
}
