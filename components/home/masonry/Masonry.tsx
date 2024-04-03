"use client";

import { useState, useEffect } from "react";
import ImageCard from "@/components/home/masonry/imagecard/ImageCard";

export default function Masonry() {
  const initImages = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
    "/11.jpg",
    "/12.jpg",
    "/13.jpg",
    "/14.jpg",
    "/15.jpg",
  ];

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadAdmitted, setIsLoadAdmitted] = useState(false);
  const [loadedImageCount, setLoadedImageCount] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    fetchMoreImages();
  }, []);

  useEffect(() => {
    if (isLoadAdmitted) {
      const delay = setTimeout(() => {
        fetchMoreImages();
        clearTimeout(delay);
      }, 400);
    }
  }, [isLoadAdmitted]);

  // handleScroll 处理滚动逻辑;
  const handleScroll = () => {
    if (isLoading) {
      return;
    }

    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop + windowHeight < scrollHeight - 100) {
      setIsLoadAdmitted(false);
    } else {
      setIsLoadAdmitted(true);
    }
  };

  const fetchMoreImages = () => {
    setIsLoading(true);

    let idx = loadedImageCount;
    if (idx > 1000) {
      console.log("no more to fetch");
      setIsLoading(false);
      return;
    }

    const newImages = [...images];
    initImages.forEach((item) => {
      idx = idx + 1;
      newImages.push({ id: idx, src: item });
    });

    setImages(newImages);
    setIsLoading(false);
    setLoadedImageCount(idx);
  };

  return (
    <div className="mt-4 mx-8">
      <div className="columns-2 2xl:columns-6 xl:columns-5 lg:columns-4 md:columns-3 sm:columns-2 gap-x-1 space-y-1">
        {images.map((item) => (
          <ImageCard src={item.src} key={item.id} dataKey={item.id} />
        ))}
      </div>
    </div>
  );
}
