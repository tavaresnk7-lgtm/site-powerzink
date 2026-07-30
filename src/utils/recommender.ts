import type { QuizAnswers, Recommendation } from '../types';
import { products, getProductById, segments } from '../data/products';

export function getRecommendation(answers: QuizAnswers): Recommendation {
  const { surface, corrosion, environment, priority } = answers;
  const primary: typeof products = [];
  const complementary: typeof products = [];
  let preparatory: typeof products[0] | null = null;

  const pz025 = getProductById('pz025')!;
  const pz503 = getProductById('pz503')!;
  const pz710 = getProductById('pz710')!;
  const pz350 = getProductById('pz350')!;
  const pz550 = getProductById('pz550')!;
  const pz330 = getProductById('pz330')!;
  const pzTitan = getProductById('pz-titan')!;
  const ecoPrimer = getProductById('eco-primer')!;
  const pz85 = getProductById('pz85')!;

  if (surface === 'metal' || surface === 'tubulacao') {
    if (corrosion === 'alto') {
      primary.push(pz025);
      if (environment === 'maritimo') complementary.push(pz710);
      else if (priority === 'durabilidade') complementary.push(pzTitan);
    } else if (corrosion === 'medio') {
      if (environment === 'interno') primary.push(pz330);
      else if (environment === 'maritimo') { primary.push(pz025); complementary.push(pz710); }
      else { primary.push(pz503); complementary.push(pz710); }
    } else {
      if (environment === 'interno') primary.push(pz330);
      else primary.push(pz503);
    }
    preparatory = pz85;
  }
  if (surface === 'alvenaria') {
    primary.push(pz503);
    if (priority === 'durabilidade') complementary.push(pz710);
  }
  if (surface === 'madeira') {
    primary.push(ecoPrimer);
    if (corrosion === 'alto' || environment === 'externo') complementary.push(pz710);
  }
  if (surface === 'piso') {
    if (priority === 'rapidez') primary.push(pz550);
    else { primary.push(pz350); if (corrosion === 'alto') complementary.push(pz550); }
  }
  if (surface === 'offshore') {
    primary.push(pz710); complementary.push(pz025); preparatory = pz85;
    if (priority === 'durabilidade') complementary.push(pzTitan);
  }
  if (surface === 'cacamba') {
    primary.push(pzTitan);
    if (corrosion === 'alto') complementary.push(pz025);
    preparatory = pz85;
  }
  if (primary.length === 0) primary.push(pz503);

  return { primary, complementary, preparatory };
}

export function getSegmentMessage(segmentId: string): string {
  const messages: Record<string, string> = {
    metalicas: 'Para o segmento de Estruturas Metálicas, recomendamos também agendar uma visita técnica para avaliação do nível de corrosão in loco.',
    maritimo: 'Para o segmento Marítimo/Offshore, recomendamos agendar uma visita técnica para avaliação das condições de exposição à névoa salina.',
    pisos: 'Para Pisos Industriais, oferecemos serviço de aplicação técnica completa — consulte nossa equipe.',
    frotas: 'Para Frotas e Veículos, a Poliuréia TITAN oferece garantia de 5 anos com durabilidade de até 30 anos.',
    civil: 'Para Construção Civil, oferecemos consultoria técnica gratuita para especificação do sistema ideal.',
    serralheria: 'Para Serralheria, nossa linha ecológica atende às normas ambientais com excelente custo-benefício.',
  };
  return messages[segmentId] || 'Agende uma visita técnica para uma recomendação personalizada.';
}

export function generateWhatsAppMessage(recommendation: Recommendation, segmentId?: string): string {
  const productNames = [...recommendation.primary.map(p => p.name), ...recommendation.complementary.map(p => p.name)].join(', ');
  const segmentInfo = segmentId ? segments.find(s => s.id === segmentId)?.title : '';
  return encodeURIComponent(
    `Olá! Fiz o questionário no site PowerZink${segmentInfo ? ` (segmento: ${segmentInfo})` : ''} e tenho interesse nos seguintes produtos: ${productNames}. Gostaria de mais informações e orçamento.`
  );
}

export function generateEmailSubject(recommendation: Recommendation): string {
  return encodeURIComponent(`Interesse em ${recommendation.primary[0]?.shortName || 'Produtos'} — PowerZink`);
}

export function generateEmailBody(recommendation: Recommendation): string {
  const names = [...recommendation.primary.map(p => `${p.code} - ${p.name}`), ...recommendation.complementary.map(p => `${p.code} - ${p.name} (complementar)`)].join('\n');
  return encodeURIComponent(`Olá,\n\nFiz o questionário no site PowerZink e gostaria de mais informações sobre:\n\n${names}\n\nPor favor, entrem em contato.\n\nAtenciosamente.`);
}
