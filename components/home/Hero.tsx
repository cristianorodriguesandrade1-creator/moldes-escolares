import Link from "next/link";
import { Search, Download, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-white py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              5000+ Moldes Escolares
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Encontre moldes para todas as atividades escolares: Festa Junina, Natal, Páscoa, Artes, Educação Infantil e muito mais!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/moldes" className="btn bg-white text-primary-600 hover:bg-gray-50 font-bold">
                <Download className="w-5 h-5" />
                Explorar Moldes
              </Link>
              <Link
                href="/categorias"
                className="btn border-2 border-white text-white hover:bg-white/10 font-bold"
              >
                Ver Categorias
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div>
                <div className="text-2xl font-bold mb-1">5000+</div>
                <div className="text-sm text-white/80">Moldes</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">100+</div>
                <div className="text-sm text-white/80">Categorias</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">10M+</div>
                <div className="text-sm text-white/80">Downloads</div>
              </div>
            </div>
          </div>

          {/* Right - Placeholder */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-80 bg-white/10 rounded-lg border-2 border-white/20 flex items-center justify-center">
              <div className="text-center">
                <Search className="w-16 h-16 mx-auto mb-4 text-white/50" />
                <p className="text-white/50">Milhares de moldes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
