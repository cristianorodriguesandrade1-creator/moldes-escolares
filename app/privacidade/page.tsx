import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Moldes Escolares",
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold">Política de Privacidade</h1>
        </div>
      </div>

      <div className="container py-12 max-w-4xl">
        <div className="prose prose-gray">
          <p className="text-gray-700 mb-6">
            Última atualização: Junho 2024
          </p>

          <h2 className="text-2xl font-bold mb-4">1. Introdução</h2>
          <p className="text-gray-700 mb-4">
            A Moldes Escolares ("nós", "nosso" ou "a Empresa") opera o site moldescolares.com (o "Site"). Esta página informa você de nossas políticas sobre coleta, uso e divulgação de dados pessoais quando você usa nosso Site e as escolhas que tem associadas com esses dados.
          </p>

          <h2 className="text-2xl font-bold mb-4">2. Coleta de Dados</h2>
          <p className="text-gray-700 mb-4">
            Coletamos dados pessoais que você nos fornece voluntariamente, como:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Email (para inscrição na newsletter)</li>
            <li>Informações de contato (formulário de contato)</li>
            <li>Dados de uso do site (via Google Analytics)</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">3. Uso de Dados</h2>
          <p className="text-gray-700 mb-4">
            Usamos os dados coletados para:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Enviar newsletter e atualizações (se inscrito)</li>
            <li>Responder a suas mensagens de contato</li>
            <li>Melhorar nossa plataforma e serviços</li>
            <li>Análise de uso (Google Analytics)</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">4. Segurança</h2>
          <p className="text-gray-700 mb-4">
            Implementamos medidas técnicas e organizacionais para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>

          <h2 className="text-2xl font-bold mb-4">5. Links para Terceiros</h2>
          <p className="text-gray-700 mb-4">
            Nosso Site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade desses sites. Recomendamos que você leia as políticas de privacidade deles.
          </p>

          <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
          <p className="text-gray-700 mb-4">
            Para detalhes sobre como usamos cookies, veja nossa Política de Cookies.
          </p>

          <h2 className="text-2xl font-bold mb-4">7. Seus Direitos</h2>
          <p className="text-gray-700 mb-4">
            Você tem o direito de:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Acessar seus dados pessoais</li>
            <li>Corrigir dados imprecisos</li>
            <li>Solicitar exclusão de seus dados</li>
            <li>Optar por não receber comunicações</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">8. Contato</h2>
          <p className="text-gray-700">
            Se tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco em contato@moldescolares.com.
          </p>
        </div>
      </div>
    </div>
  );
}
