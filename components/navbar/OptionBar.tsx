import styles from "./navbar.module.css";
import Image from "next/image";

export default function OptionBar() {
  return (
    <div className={`flex-none flex justify-center items-center`}>
      <button
        className="w-[80px] h-[36px] flex flex-col justify-center items-center -space-y-1 text-white/75 hover:bg-white/20 hover:rounded-md"
        onClick={() => {
          alert("you click language selector");
        }}
      >
        <div>中文简体</div>
        <img className="w-[16px] h-[16px]" src="/arrow-down.svg"></img>
      </button>
      <button
        className={`flex-none w-[80px] h-[36px] text-white/80 bg-cyan-500/70 hover:bg-cyan-500/100 hover:text-white/100 rounded-md mx-8 transition ease-in-out duration-500`}
        onClick={() => {
          alert("you click login");
        }}
      >
        登录
      </button>
    </div>
  );
}
