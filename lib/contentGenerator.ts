/**
 * Content Generation Engine
 * Gera automaticamente títulos SEO, descriptions, FAQs, e textos explicativos
 */

interface ContentGenerationParams {
  templateName: string;
  categoryName: string;
  categorySlug: string;
}

interface GeneratedContent {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  description: string;
  faqs: FAQ[];
}

interface FAQ {
  question: string;
  answer: string;
}

/**
 * Gera título SEO otimizado
 * Comprimento: 50-60 caracteres
 * Inclui: nome + contexto + CTA
 */
export function generateSeoTitle(params: ContentGenerationParams): string {
  const templates = [
    `${params.templateName} | Molde para ${params.categoryName}`,
    `${params.templateName} - Molde Grátis | ${params.categoryName}`,
    `Molde ${params.templateName} Pronto para Imprimir`,
    `${params.templateName} - Atividade de ${params.categoryName}`,
    `Baixar Molde ${params.templateName} Gratuitamente`,
  ];

  // Seleciona template com melhor comprimento (50-60 chars)
  return templates.reduce((best, current) => {
    const currentLen = Math.abs(current.length - 55);
    const bestLen = Math.abs(best.length - 55);
    return currentLen < bestLen ? current : best;
  });
}

/**
 * Gera meta description otimizada
 * Comprimento: 150-160 caracteres
 * Inclui: o quê + benefício + CTA
 */
export function generateSeoDescription(
  params: ContentGenerationParams
): string {
  const descriptions = [
    `Baixe gratuitamente o molde ${params.templateName} para atividades de ${params.categoryName}. Pronto para imprimir e usar em sala de aula.`,
    `Molde ${params.templateName} ideal para ${params.categoryName}. Download grátis em alta resolução. Perfeito para educação infantil e escolar.`,
    `${params.templateName} - Molde educativo para ${params.categoryName}. Aproveite nosso recurso gratuito! Imprime fácil, atividades divertidas.`,
  ];

  return descriptions[
    Math.floor(Math.random() * descriptions.length)
  ].substring(0, 160);
}

/**
 * Gera keywords otimizadas
 */
export function generateSeoKeywords(
  params: ContentGenerationParams
): string {
  const keywords = [
    params.templateName.toLowerCase(),
    `molde ${params.templateName.toLowerCase()}`,
    params.categoryName.toLowerCase(),
    `atividades ${params.categoryName.toLowerCase()}`,
    "moldes escolares",
    "educação infantil",
    "moldes para imprimir",
  ];

  return keywords.join(", ");
}

/**
 * Gera descrição expandida do molde
 */
export function generateDescription(
  params: ContentGenerationParams
): string {
  const descriptions = [
    `Este molde de ${params.templateName} é perfeito para atividades escolares de ${params.categoryName}. Ideal para crianças, o molde vem em alta resolução, pronto para imprimir e usar. Você pode plastificar para reutilizar ou usar em papéis coloridos para deixar ainda mais divertido!`,

    `O molde ${params.templateName} foi criado especialmente para ${params.categoryName}. Com design infantil atrativo, este molde é ideal para educação infantil e ensino fundamental. Baixe, imprima, recorte e aproveite em suas atividades escolares!`,

    `Procurando um molde de ${params.templateName} para ${params.categoryName}? Aqui você encontra em alta qualidade e totalmente grátis! Este recurso educativo ajuda professores e educadores a criar atividades interessantes e divertidas para crianças.`,
  ];

  return descriptions[Math.floor(Math.random() * descriptions.length)];
}

/**
 * Gera FAQs automáticas baseadas no tipo de molde
 */
export function generateFAQs(
  params: ContentGenerationParams
): FAQ[] {
  return [
    {
      question: `Como usar o molde ${params.templateName}?`,
      answer: `1. Baixe o arquivo PDF. 2. Abra em um leitor de PDF. 3. Imprima em papel A4. 4. Recorte cuidadosamente. 5. Use em suas atividades de ${params.categoryName}.`,
    },
    {
      question: `Posso reutilizar este molde?`,
      answer: `Sim! Recomendamos plastificar o molde para reutilização. Assim você pode usar múltiplas vezes em diferentes materiais como papéis, EVA, feltro, etc.`,
    },
    {
      question: `Qual é o tamanho do molde?`,
      answer: `O molde é padrão A4 (21x29,7cm) e pode ser ampliado ou reduzido conforme necessário ao imprimir.`,
    },
    {
      question: `Posso compartilhar este molde?`,
      answer: `Este molde é para uso pessoal e educacional. Compartilhe o link do site, mas não republique o arquivo.`,
    },
    {
      question: `O molde é em cores ou preto e branco?`,
      answer: `Temos versões em ambos os formatos. Verifique qual versão você baixou. Preto e branco economiza tinta!`,
    },
  ];
}

/**
 * Gera conteúdo completo
 */
export function generateCompleteContent(
  params: ContentGenerationParams
): GeneratedContent {
  return {
    seoTitle: generateSeoTitle(params),
    seoDescription: generateSeoDescription(params),
    seoKeywords: generateSeoKeywords(params),
    description: generateDescription(params),
    faqs: generateFAQs(params),
  };
}

/**
 * Atualiza template com conteúdo gerado
 */
export async function updateTemplateWithGeneratedContent(
  templateId: string,
  supabase: any,
  params: ContentGenerationParams
): Promise<boolean> {
  try {
    const content = generateCompleteContent(params);

    const { error } = await supabase
      .from("templates")
      .update({
        seo_title: content.seoTitle,
        seo_description: content.seoDescription,
        seo_keywords: content.seoKeywords,
        description: content.description,
      })
      .eq("id", templateId);

    if (error) {
      console.error("Error updating template:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error in updateTemplateWithGeneratedContent:", error);
    return false;
  }
}
