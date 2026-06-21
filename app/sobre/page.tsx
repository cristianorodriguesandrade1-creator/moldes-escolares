import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Moldes Escolares",
  description:
    "Conheça a história do Moldes Escolares, o maior portal de moldes educacionais do Brasil.",
};

export default function SobrePage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold">Sobre Moldes Escolares</h1>
          <p className="text-white/90 mt-4 max-w-2xl">
            Conheça nossa história e missão
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossa Missão</h2>
            <p className="text-gray-700 mb-4">
              Moldes Escolares existe para facilitar a vida de professores,
              educadores e famílias, fornecendo moldes de alta qualidade,
              gratuitos e prontos para usar em atividades escolares.
            </p>
            <p className="text-gray-700">
              Acreditamos que toda criança merece acesso a recursos educacionais
              de qualidade, por isso nossa plataforma foi criada com foco em
              acessibilidade e variedade.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Por que Escolher?</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-accent-500 font-bold mt-1">✓</span>
                <span>
                  <strong>5000+ moldes gratuitos:</strong> Encontre moldes para
                  qualquer ocasião ou disciplina
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 font-bold mt-1">✓</span>
                <span>
                  <strong>Alta qualidade:</strong> Todos os moldes em alta
                  resolução para impressão nítida
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 font-bold mt-1">✓</span>
                <span>
                  <strong>Fácil de usar:</strong> Basta baixar o PDF e imprimir
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 font-bold mt-1">✓</span>
                <span>
                  <strong>Organizado por categorias:</strong> Encontre o molde
                  que você precisa rapidamente
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 font-bold mt-1">✓</span>
                <span>
                  <strong>Atualizado semanalmente:</strong> Novos moldes são
                  adicionados constantemente
                </span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Categorias Disponíveis</h2>
            <p className="text-gray-700 mb-4">
              Com mais de 100 categorias, você encontrará moldes para:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
              <li>• Festa Junina</li>
              <li>• Natal e Ano Novo</li>
              <li>• Páscoa</li>
              <li>• Dia das Mães</li>
              <li>• Dia dos Pais</li>
              <li>• Educação Infantil</li>
              <li>• Alfabetização</li>
              <li>• Artes e Criatividade</li>
              <li>• Ciências</li>
              <li>• Folclore Brasileiro</li>
              <li>• Animais Brasileiros</li>
              <li>• Teatro Escolar</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Contato</h2>
            <p className="text-gray-700 mb-4">
              Tem sugestões ou precisa de ajuda? Entre em contato conosco:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:contato@moldescolares.com"
                  className="text-primary-600 hover:underline"
                >
                  contato@moldescolares.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
