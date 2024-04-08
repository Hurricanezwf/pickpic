import Image from "next/image";
import Banner from "@/components/home/banner/Banner";
import Masonry from "@/components/home/masonry/Masonry";

export default function Home() {
  return (
    <main
      className="flex-1 bg-blue flex flex-col relative"
      data-target="main-home"
    >
      <Banner />
      <Masonry />
    </main>
  );
}
