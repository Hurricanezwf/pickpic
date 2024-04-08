import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-10 flex-none flex justify-center items-center gap-2">
      <div className="">
        <Link
          className="text-slate-400 text-xs"
          href="https://beian.miit.gov.cn/#/Integrated/index"
        >
          沪ICP备202103xxx0号-2
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <img src="/beian.png"></img>
        <Link
          className="text-slate-400 text-xs"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502020083"
        >
          沪公网安备 31011502xxxxx3号
        </Link>
      </div>
    </div>
  );
}
