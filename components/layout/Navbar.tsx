"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <span className="hidden sm:inline font-bold text-xl text-gray-900">
            Moldes Escolares
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/categorias" className="text-gray-700 hover:text-primary-600 transition">
            Categorias
          </Link>
          <Link href="/moldes" className="text-gray-700 hover:text-primary-600 transition">
            Moldes
          </Link>
          <Link href="/sobre" className="text-gray-700 hover:text-primary-600 transition">
            Sobre
          </Link>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/busca"
            className="p-2 hover:bg-gray-100 rounded-lg transition"
            title="Buscar"
          >
            <Search className="w-5 h-5 text-gray-700" />
          </Link>

          <Link href="/admin" className="hidden sm:inline-block btn btn-primary text-sm">
            Admin
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            aria-label="Menu"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container py-4 flex flex-col gap-3">
            <Link href="/categorias" className="text-gray-700 hover:text-primary-600">
              Categorias
            </Link>
            <Link href="/moldes" className="text-gray-700 hover:text-primary-600">
              Moldes
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-primary-600">
              Sobre
            </Link>
            <Link href="/admin" className="btn btn-primary w-full">
              Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
