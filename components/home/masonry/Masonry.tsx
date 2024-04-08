"use client";

import { useState, useEffect } from "react";
import ImageCard from "@/components/home/masonry/ImageCard";
import ArrowTop from "@/components/home/masonry/ArrowTop";

// TODO: use react-use and javascript to refactor this.
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

    if (scrollTop + windowHeight < scrollHeight - 10) {
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
    <div className="">
      <div className="mt-4 mx-8">
        <div className="grid grid-cols-6 gap-x-1">
          <div className="space-y-1">
            <ImageCard src="1.jpg" key="1" dataKey="1" />
            <ImageCard src="7.jpg" key="7" dataKey="7" />
            <ImageCard src="13.jpg" key="13" dataKey="13" />
          </div>
          <div className="space-y-1">
            <ImageCard src="2.jpg" key="2" dataKey="2" />
            <ImageCard src="8.jpg" key="8" dataKey="8" />
            <ImageCard src="14.jpg" key="14" dataKey="14" />
          </div>
          <div className="space-y-1">
            <ImageCard src="3.jpg" key="3" dataKey="3" />
            <ImageCard src="9.jpg" key="9" dataKey="9" />
            <ImageCard src="15.jpg" key="15" dataKey="15" />
          </div>
          <div className="space-y-1">
            <ImageCard src="4.jpg" key="4" dataKey="4" />
            <ImageCard src="10.jpg" key="10" dataKey="10" />
          </div>
          <div className="space-y-1">
            <ImageCard src="5.jpg" key="5" dataKey="5" />
            <ImageCard src="11.jpg" key="11" dataKey="11" />
          </div>
          <div className="space-y-1">
            <ImageCard src="6.jpg" key="6" dataKey="6" />
            <ImageCard src="12.jpg" key="12" dataKey="12" />
          </div>
        </div>
      </div>
      <ArrowTop />
    </div>
  );
}

/*
{images.map((item) => (
          <ImageCard src={item.src} key={item.id} dataKey={item.id} />
        ))}
*/
