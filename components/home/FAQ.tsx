"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(0);

  const faqs = [
    {
      id: 0,
      question: "Todos os moldes são grátis?",
      answer:
        "Sim! Todos os moldes disponíveis no Moldes Escolares são completamente gratuitos para download e uso em atividades educacionais.",
    },
    {
      id: 1,
      question: "Como faço para baixar um molde?",
      answer:
        "Basta encontrar o molde desejado, clicar no botão de download e o arquivo PDF será baixado automaticamente para seu computador.",
    },
    {
      id: 2,
      question: "Posso usar os moldes em atividades comerciais?",
      answer:
        "Os moldes são para uso educacional pessoal. Para usos comerciais, favor consultar nossa seção de termos de uso.",
    },
    {
      id: 3,
      question: "Os moldes são de alta qualidade?",
      answer:
        "Sim! Todos os moldes são criados em alta resolução para garantir uma impressão clara e nítida.",
    },
    {
      id: 4,
      question: "Há atualizações com novos moldes?",
      answer:
        "Sim! Adicionamos novos moldes semanalmente. Inscreva-se em nossa newsletter para receber notificações de novos conteúdos.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-3xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Perguntas Frequentes</h2>
          <p className="text-gray-600">
            Dúvidas? Aqui estão as respostas para as perguntas mais comuns
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="card overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <h3 className="font-bold text-gray-900 text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform flex-shrink-0 ml-4 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openId === faq.id && (
                <div className="px-4 py-3 border-t border-gray-200 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
