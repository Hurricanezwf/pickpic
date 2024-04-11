"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Banner from "@/components/home/banner/Banner";
import Masonry from "@/components/home/masonry/Masonry";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

interface HomeProps {
  params: { locale: string };
}

export default function Home({ params }: HomeProps) {
  const [loadNavbar, setLoadNavbar] = useState<boolean>(false);
  const [loadBanner, setLoadBanner] = useState<boolean>(false);
  const [loadMansonry, setLoadMansonry] = useState<boolean>(false);
  const [loadFooter, setLoadFooter] = useState<boolean>(false);

  useEffect(() => {
    setLoadBanner(true);
  }, []);

  useEffect(() => {
    if (loadBanner) {
      setLoadMansonry(true);
    }
  }, [loadBanner]);

  useEffect(() => {
    if (loadBanner && loadMansonry) {
      setLoadNavbar(true);
      setLoadFooter(true);
    }
  }, [loadMansonry]);

  let banner = <h1>hello world</h1>;
  if (loadBanner) {
    banner = <Banner></Banner>;
  }

  let navbar;
  if (loadNavbar) {
    navbar = <Navbar locale={params.locale} />;
  }

  let mansonry;
  if (loadMansonry) {
    mansonry = <Masonry />;
  }

  let footer;
  if (loadFooter) {
    footer = <Footer />;
  }

  return (
    <div>
      {navbar}
      <main
        className="flex-1 bg-blue flex flex-col relative"
        data-target="main-home"
      >
        {banner}
        {mansonry}
      </main>
      {footer}
    </div>
  );
}
