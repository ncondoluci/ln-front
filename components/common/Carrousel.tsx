"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
type Props<T> = {
  data: T[];
  element: React.FC<T>;
  show?: number;
};
export default function CustomCarousel<T extends Record<string, any>>({
  data,
  element: Element,
  show = 4,
}: Props<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(show);

  // Carlcular tamaño de las cards en base al screen size
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        let newVisibleCards = 4; // Default for desktop

        if (window.innerWidth < 640) {
          newVisibleCards = 1; // Mobile
        } else if (window.innerWidth < 768) {
          newVisibleCards = 2; // Small tablet
        } else if (window.innerWidth < 1024) {
          newVisibleCards = 3; // Large tablet
        }

        const newCardWidth = containerWidth / newVisibleCards;
        setCardWidth(newCardWidth);
        setVisibleCards(newVisibleCards);

        // Reset position when screen size changes
        setCurrentIndex(0);
        setTranslateX(0);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = data.length;
  const maxIndex = totalSlides - visibleCards;

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setTranslateX(-(newIndex * cardWidth));
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setTranslateX(-(newIndex * cardWidth));
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6">
      {/* Contenedor del carrusel */}
      <div className="relative">
        {/* Viewport */}
        <div ref={carouselRef} className="overflow-hidden relative">
          <ul
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {data.map((item, index) => (
              <li
                key={index}
                className="flex-shrink-0"
                style={{ width: `${cardWidth}px` }}
              >
                <Element
                  {...item}
                  priority={
                    index >= currentIndex && index < currentIndex + visibleCards
                  }
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Navegación */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`absolute top-1/2 left-0 -translate-y-1/2 -ml-2 sm:-ml-4 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white rounded-full shadow-md z-10 ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className={`absolute top-1/2 right-0 -translate-y-1/2 -mr-2 sm:-mr-4 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white rounded-full shadow-md z-10 ${
            currentIndex >= maxIndex
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
