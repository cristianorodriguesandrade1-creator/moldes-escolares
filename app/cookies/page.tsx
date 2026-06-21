import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Moldes Escolares",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold">Política de Cookies</h1>
        </div>
      </div>

      <div className="container py-12 max-w-4xl">
        <div className="prose prose-gray">
          <p className="text-gray-700 mb-6">
            Última atualização: Junho 2024
          </p>

          <h2 className="text-2xl font-bold mb-4">1. O que são Cookies?</h2>
          <p className="text-gray-700 mb-4">
            Cookies são pequenos arquivos de texto armazenados no seu navegador. Eles ajudam a melhorar sua experiência ao armazenar informações sobre suas preferências.
          </p>

          <h2 className="text-2xl font-bold mb-4">2. Como Usamos Cookies</h2>
          <p className="text-gray-700 mb-4">
            Usamos cookies para:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Analisar como você usa nosso Site (Google Analytics)</li>
            <li>Lembrar suas preferências</li>
            <li>Segurança da sessão</li>
            <li>Melhorar a experiência do usuário</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">3. Tipos de Cookies</h2>
          <p className="text-gray-700 mb-4">
            <strong>Cookies Essenciais:</strong> Necessários para o funcionamento do Site.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Cookies de Análise:</strong> Ajudam-nos a entender como você usa o Site (Google Analytics).
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Cookies de Marketing:</strong> Usados para anúncios personalizados (Google AdSense).
          </p>

          <h2 className="text-2xl font-bold mb-4">4. Google Analytics</h2>
          <p className="text-gray-700 mb-4">
            Usamos Google Analytics para analisar o tráfego do Site. Google Analytics define seus próprios cookies. Para saber mais sobre como o Google usa seus dados, visite: policies.google.com/privacy
          </p>

          <h2 className="text-2xl font-bold mb-4">5. Google AdSense</h2>
          <p className="text-gray-700 mb-4">
            Exibimos anúncios Google AdSense que usam cookies para mostrar anúncios relevantes. Você pode desabilitar cookies de publicidade através de suas configurações de navegador.
          </p>

          <h2 className="text-2xl font-bold mb-4">6. Controlar Cookies</h2>
          <p className="text-gray-700 mb-4">
            Você pode controlar e/ou deletar cookies através das configurações do seu navegador. A maioria dos navegadores permite que você recuse cookies ou avise quando um cookie está sendo enviado.
          </p>

          <h2 className="text-2xl font-bold mb-4">7. Cookies de Terceiros</h2>
          <p className="text-gray-700 mb-4">
            Alguns cookies podem ser definidos por serviços de terceiros (Google Analytics, Google AdSense). Recomendamos que você verifique as políticas desses serviços.
          </p>

          <h2 className="text-2xl font-bold mb-4">8. Contato</h2>
          <p className="text-gray-700">
            Para dúvidas sobre esta Política de Cookies, entre em contato em contato@moldescolares.com.
          </p>
        </div>
      </div>
    </div>
  );
}
