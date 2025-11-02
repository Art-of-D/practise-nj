"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Images({ images }) {
  const [currentImage, setCurrentImage] = useState(images[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Image
        src={`/assets/${currentImage.image}`}
        alt={currentImage.alt}
        fill
        className="object-fill rounded-2xl"
      />
    </>
  );
}
