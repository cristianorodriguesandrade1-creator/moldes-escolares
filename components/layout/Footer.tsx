import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-white font-bold mb-4">Moldes Escolares</h4>
            <p className="text-sm text-gray-400">
              O maior portal de moldes escolares do Brasil com mais de 5000 moldes para todas as atividades.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-4">Categorias</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categoria/festa-junina" className="hover:text-white">
                  Festa Junina
                </Link>
              </li>
              <li>
                <Link href="/categoria/natal" className="hover:text-white">
                  Natal
                </Link>
              </li>
              <li>
                <Link href="/categoria/pascoa" className="hover:text-white">
                  Páscoa
                </Link>
              </li>
              <li>
                <Link href="/categoria/educacao-infantil" className="hover:text-white">
                  Educação Infantil
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="hover:text-white">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="hover:text-white">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:text-white">
                  Termos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="mailto:contato@moldescolares.com" className="hover:text-white">
                  contato@moldescolares.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            <p>&copy; 2024 Moldes Escolares. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
