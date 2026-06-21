import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Moldes Escolares",
};

export default function TermosPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold">Termos de Uso</h1>
        </div>
      </div>

      <div className="container py-12 max-w-4xl">
        <div className="prose prose-gray">
          <p className="text-gray-700 mb-6">
            Última atualização: Junho 2024
          </p>

          <h2 className="text-2xl font-bold mb-4">1. Aceitar os Termos</h2>
          <p className="text-gray-700 mb-4">
            Ao acessar e usar o Site Moldes Escolares, você concorda em estar vinculado a estes Termos de Uso.
          </p>

          <h2 className="text-2xl font-bold mb-4">2. Licença de Uso</h2>
          <p className="text-gray-700 mb-4">
            Concedemos a você uma licença não-exclusiva, não-transferível e revogável para acessar e usar os moldes do Site para fins educacionais pessoais e não comerciais.
          </p>

          <h2 className="text-2xl font-bold mb-4">3. Restrições</h2>
          <p className="text-gray-700 mb-4">
            Você concorda em não:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Redistribuir moldes sem permissão</li>
            <li>Usar moldes para fins comerciais sem autorização</li>
            <li>Modificar ou criar trabalhos derivados dos moldes</li>
            <li>Remover avisos de direitos autorais</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">4. Isenção de Responsabilidade</h2>
          <p className="text-gray-700 mb-4">
            Os moldes são fornecidos "tal como estão" sem garantias. Não somos responsáveis por danos diretos ou indiretos resultantes do uso dos moldes.
          </p>

          <h2 className="text-2xl font-bold mb-4">5. Limitação de Responsabilidade</h2>
          <p className="text-gray-700 mb-4">
            Em nenhuma circunstância somos responsáveis por danos especiais, incidentais, indiretos ou consequentes que resultam do uso ou impossibilidade de usar nosso Site ou moldes.
          </p>

          <h2 className="text-2xl font-bold mb-4">6. Alterações do Site</h2>
          <p className="text-gray-700 mb-4">
            Reservamos o direito de modificar ou descontinuar o Site (ou partes dele) a qualquer momento.
          </p>

          <h2 className="text-2xl font-bold mb-4">7. Lei Aplicável</h2>
          <p className="text-gray-700 mb-4">
            Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
          </p>

          <h2 className="text-2xl font-bold mb-4">8. Contato</h2>
          <p className="text-gray-700">
            Para questões sobre estes Termos, entre em contato em contato@moldescolares.com.
          </p>
        </div>
      </div>
    </div>
  );
}
