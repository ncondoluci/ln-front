"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PromoInfo {
  title: string;
  discount: string;
  discountType: string;
}

interface SliderImage {
  url: string;
  name: string;
  promo: PromoInfo;
}

interface SliderProps {
  images: SliderImage[];
  autoplaySpeed?: number;
}

export default function Slider({ images, autoplaySpeed = 5000 }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to go to next slide
  const goToNext = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 500); // Match this with CSS transition duration
    }
  }, [images.length, isTransitioning]);

  // Function to go to previous slide
  const goToPrev = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setTimeout(() => setIsTransitioning(false), 500); // Match this with CSS transition duration
    }
  }, [images.length, isTransitioning]);

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500); // Match this with CSS transition duration
    }
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(goToNext, autoplaySpeed);
    return () => clearInterval(interval);
  }, [goToNext, autoplaySpeed]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={image.url || "/placeholder.svg"}
              alt={image.name}
              fill
              priority={index === currentIndex}
              style={{ objectFit: "cover" }}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
                {/* Promo section */}
                <div className="text-white mb-8 md:mb-0 relative">
                  <div className="border-2 border-white rounded-lg p-4 relative">
                    <div className="absolute -top-6 left-4 bg-transparent text-yellow-500 text-2xl font-bold italic">
                      {image.promo.title}
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-yellow-500 text-7xl font-bold">
                        {image.promo.discount}
                      </span>
                      <span className="text-yellow-500 text-2xl font-bold ml-1">
                        {image.promo.discountType}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Product name */}
                <div className="text-white text-center md:text-right">
                  <h2 className="text-3xl md:text-5xl font-bold uppercase">
                    {image.name.split(" ")[0]}
                  </h2>
                  <h3 className="text-xl md:text-3xl font-medium uppercase">
                    {image.name.split(" ").slice(1).join(" ")}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
