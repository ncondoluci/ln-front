"use client";

import { useState, useEffect } from "react";
import { Menu, Search, Bell, Heart, User } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Sección izquierda	- Logo y menu */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white"
              aria-label="Menu"
            >
              <Menu size={20} />
            </button>
            <div className="ml-2 bg-black rounded-full h-8 w-8 flex items-center justify-center">
              <span className="text-white text-xs font-semibold">Club</span>
            </div>
          </div>

          {/*  Buscador */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full flex rounded-full overflow-hidden border border-gray-600">
              <input
                type="text"
                placeholder="Busca un comercio..."
                className="w-1/2 bg-transparent text-white text-sm py-1.5 px-4 outline-none border-r border-gray-600"
              />
              <input
                type="text"
                placeholder="Ingresa una ubicación..."
                className="w-1/2 bg-transparent text-white text-sm py-1.5 px-4 outline-none"
              />
              <button className="absolute right-0 top-0 bottom-0 bg-blue-600 px-3 flex items-center justify-center">
                <Search size={18} className="text-white" />
              </button>
            </div>
          </div>

          {/* Sección derecha - Iconos */}
          <div className="flex items-center space-x-4">
            <button className="text-white" aria-label="Notifications">
              <Bell size={20} />
            </button>
            <button className="text-white" aria-label="Favorites">
              <Heart size={20} />
            </button>
            <div className="h-7 w-7 rounded-full bg-yellow-500 flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
          </div>
        </div>

        {/* Buscador para versión móvil */}
        <div className="md:hidden pb-3">
          <div className="relative w-full flex rounded-full overflow-hidden border border-gray-600">
            <input
              type="text"
              placeholder="Busca un comercio..."
              className="w-1/2 bg-transparent text-white text-sm py-1.5 px-4 outline-none border-r border-gray-600"
            />
            <input
              type="text"
              placeholder="Ingresa una ubicación..."
              className="w-1/2 bg-transparent text-white text-sm py-1.5 px-4 outline-none"
            />
            <button className="absolute right-0 top-0 bottom-0 bg-blue-600 px-3 flex items-center justify-center">
              <Search size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
