"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContatoPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      // Simular envio (implementar backend depois)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold">Entre em Contato</h1>
          <p className="text-white/90 mt-4">
            Dúvidas, sugestões ou feedback? Estamos aqui para ajudar!
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
          {/* Informações */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <a
                    href="mailto:contato@moldescolares.com"
                    className="text-primary-600 hover:underline"
                  >
                    contato@moldescolares.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Localização</h3>
                  <p className="text-gray-700">Brasil</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Tempo de Resposta</h3>
                  <p className="text-gray-700">Respondemos em até 24 horas</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-primary-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Horário de Funcionamento</h3>
              <p className="text-gray-700">
                Segunda a Sexta: 8h às 18h<br />
                Sábado e Domingo: Apenas por email
              </p>
            </div>
          </div>

          {/* Formulário */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-semibold mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-semibold mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Assunto"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Sua mensagem..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn btn-primary w-full disabled:opacity-50"
              >
                {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
              </button>

              {status === "success" && (
                <p className="text-center text-green-600 font-semibold">
                  ✓ Mensagem enviada com sucesso! Retornaremos em breve.
                </p>
              )}

              {status === "error" && (
                <p className="text-center text-red-600 font-semibold">
                  ✗ Erro ao enviar. Tente novamente.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
