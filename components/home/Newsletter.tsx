"use client";

import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/newsletters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error || "Erro ao inscrever");
        setTimeout(() => setStatus("idle"), 3000);
        return;
      }

      setStatus("success");
      setMessage(data.message || "Inscrito com sucesso!");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setMessage("Erro ao processar solicitação");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-500 text-white">
      <div className="container max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Fique por dentro</h2>
          <p className="text-white/90">
            Receba novos moldes e dicas de atividades escolares toda semana
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn bg-white text-primary-600 hover:bg-gray-50 font-bold disabled:opacity-50"
          >
            {status === "loading" ? "Inscrever..." : "Inscrever"}
          </button>
        </form>

        {status === "success" && (
          <p className="text-center mt-4 text-white/90">
            ✓ {message}
          </p>
        )}

        {status === "error" && (
          <p className="text-center mt-4 text-red-200">
            ✗ {message}
          </p>
        )}
      </div>
    </section>
  );
}
