import type { Product, ProductLine, QuizStep, Segment } from '../types';

export const products: Product[] = [
  {
    id: 'pz025', code: 'PZ025', name: 'PowerZink Primer 11', shortName: 'Primer 11',
    category: 'Primer', icon: 'Shield',
    description: 'Primer à base de zinco com altíssima resistência à corrosão. Ideal para estruturas metálicas, tubulações e caldeiras expostas a ambientes agressivos.',
    features: ['Base de zinco de alta pureza', 'Resistência extrema à corrosão', 'Excelente aderência em metais ferrosos', 'Compatível com acabamentos PU e epóxi'],
    applications: ['Estruturas metálicas', 'Tubulações', 'Caldeiras', 'Tanques industriais'],
  },
  {
    id: 'pz503', code: 'PZ503', name: 'PowerPrime Epóxi 5:1', shortName: 'Epóxi 5:1',
    category: 'Primer Multissuperfície', icon: 'Link',
    description: 'Primer epóxi multissuperfície de alta aderência. Formulação 5:1 que adere em metais, alvenaria, concreto e múltiplas superfícies sem necessidade de wash primer.',
    features: ['Multissuperfície — metais, alvenaria, concreto', 'Alta aderência sem wash primer', 'Formulação 5:1 de fácil aplicação', 'Base para sistemas de alto desempenho'],
    applications: ['Alvenaria', 'Concreto', 'Metais diversos', 'Superfícies mistas'],
  },
  {
    id: 'pz710', code: 'PZ710 / 486ac', name: 'Powerthane 3 em 1', shortName: '3 em 1',
    category: 'PU Multissuperfície', icon: 'Anchor',
    description: 'Poliuretano multissuperfície que dispensa wash primer. Ideal para ambientes offshore e marítimos. Resistência química e à névoa salina comprovada.',
    features: ['Dispensa wash primer', 'Resistência à névoa salina', 'Alta resistência química', 'Aplicação direta sobre metal, alumínio e galvanizado'],
    applications: ['Offshore', 'Plataformas marítimas', 'Embarcações', 'Estruturas costeiras'],
  },
  {
    id: 'pz350', code: 'PZ350', name: 'Powerthane Epóxi Auto-Nivelante', shortName: 'Auto-Nivelante',
    category: 'Pisos', icon: 'Factory',
    description: 'Sistema epóxi autonivelante para pisos industriais. Alta lavabilidade, resistência a tráfego pesado e produtos químicos.',
    features: ['Autonivelante de fácil aplicação', 'Alta lavabilidade', 'Resistência a tráfego pesado', 'Resistência a produtos químicos'],
    applications: ['Pisos industriais', 'Galpões', 'Áreas de produção', 'Laboratórios'],
  },
  {
    id: 'pz550', code: 'PZ550', name: 'Powerline Demarcação Viária', shortName: 'Demarcação Viária',
    category: 'Demarcação', icon: 'Cone',
    description: 'Tinta acrílica catalisável para demarcação viária e sinalização de pisos.',
    features: ['Acrílica catalisável', 'Alta visibilidade', 'Resistência ao tráfego', 'Secagem rápida'],
    applications: ['Estradas', 'Estacionamentos', 'Pisos industriais', 'Sinalização'],
  },
  {
    id: 'pz330', code: 'PZ330BR / 836AC', name: 'PowerGalv', shortName: 'PowerGalv',
    category: 'Resina Alquídica', icon: 'Settings',
    description: 'Resina alquídica de alta performance para metais. Excelente custo-benefício para ambientes internos.',
    features: ['Resina alquídica premium', 'Excelente custo-benefício', 'Boa aderência em metais', 'Acabamento brilhante e durável'],
    applications: ['Metais internos', 'Grades', 'Portões', 'Estruturas leves'],
  },
  {
    id: 'pz-titan', code: 'PZ TITAN', name: 'PowerZinc Poliuréia 10:1', shortName: 'Poliuréia TITAN',
    category: 'Poliuréia', icon: 'Diamond',
    description: 'Sistema de poliuréia a frio com aplicação manual. Garantia de 5 anos, durabilidade de até 30 anos.',
    features: ['Aplicação a frio (sem equipamento hot-spray)', 'Garantia de 5 anos', 'Durabilidade de até 30 anos', 'Impermeabilização total'],
    applications: ['Caçambas', 'Veículos', 'Impermeabilização', 'Lajes', 'Reservatórios'],
  },
  {
    id: 'eco-primer', code: 'Ecológico', name: 'Ecológico PowerPrimer', shortName: 'Eco Primer',
    category: 'Sustentável', icon: 'Leaf',
    description: 'Primer ecológico para madeiras e metais com foco em sustentabilidade.',
    features: ['Formulação ecológica', 'Baixo VOC', 'Ideal para madeiras e metais', 'Secagem rápida'],
    applications: ['Madeiras', 'Serralheria', 'Marcenaria', 'Metais leves'],
  },
  {
    id: 'pz85', code: 'PZ85', name: 'Poweroxi Fosfato', shortName: 'Fosfato',
    category: 'Preparação', icon: 'FlaskConical',
    description: 'Solução 3 em 1 para limpeza e preparação de superfícies: decapagem, desengraxe e fosfatização.',
    features: ['Decapagem + desengraxe + fosfatização', 'Solução 3 em 1', 'Prepara a superfície para máxima aderência', 'Economia de tempo e mão de obra'],
    applications: ['Preparação de metais', 'Remoção de ferrugem', 'Desengraxe industrial', 'Fosfatização'],
  },
  {
    id: 'powerfosfato', code: 'POWERFOSFATO', name: 'Powerfosfato Zinco Tripla Ação', shortName: 'Powerfosfato',
    category: 'Preparação', icon: 'Beaker',
    description: 'Fosfato de zinco de tripla ação: antioxidante, decapante e fosfatizante. Diluível em até 20 litros de água (proporção 20:1), oferecendo alta rendimento e economia.',
    features: ['Tripla ação: antioxidante + decapante + fosfatizante', 'Diluição 20:1 em água', 'Alto rendimento por litro', 'Preparação completa da superfície'],
    applications: ['Preparação de metais', 'Tratamento anticorrosivo', 'Fosfatização industrial', 'Pré-pintura'],
  },
];
import imgEstruturas from '../assets/segment-estruturas.jpg';
import imgMaritimo from '../assets/segment-maritimo.jpg';
import imgPisos from '../assets/segment-pisos.jpg';
import imgFrotas from '../assets/segment-frotas.jpg';
import imgConstrucao from '../assets/segment-construcao.jpg';
import imgSerralheria from '../assets/segment-serralheria.jpg';

export const segments: Segment[] = [
  {
    id: 'metalicas', title: 'Estruturas Metálicas Industriais',
    description: 'Proteção anticorrosiva para tubulações, tanques, caldeiras e estruturas de aço expostas a ambientes agressivos. Powerzink atua com eficácia também em espaços confinados, como reservatórios, e tubos com passagem de dejetos orgânicos e químicos.',
    icon: 'Wrench', image: imgEstruturas,
    tags: ['Tubulação', 'Tanques', 'Reservatórios'], productIds: ['pz025', 'pz503', 'pz710', 'pz85', 'powerfosfato'],
  },
  {
    id: 'maritimo', title: 'Marítimo e Offshore',
    description: 'Revestimentos com resistência à névoa salina e ambientes de alta agressividade química para embarcações e plataformas.',
    icon: 'Ship', image: imgMaritimo,
    tags: ['Offshore', 'Embarcações', 'Névoa Salina'], productIds: ['pz710', 'pz025', 'pz-titan', 'pz85'],
  },
  {
    id: 'pisos', title: 'Pisos Industriais e Demarcação',
    description: 'Sistemas autonivelantes de nível médio e alta performance, além de demarcação viária para pisos industriais e áreas de tráfego pesado.',
    icon: 'Warehouse', image: imgPisos,
    tags: ['Epóxi', 'Autonivelante', 'Nível Médio', 'Demarcação'], productIds: ['pz350', 'pz550'],
  },
  {
    id: 'frotas', title: 'Frotas e Veículos',
    description: 'Poliuréia e revestimentos de alta durabilidade para caçambas, implementos rodoviários e repintura de frotas.',
    icon: 'Truck', image: imgFrotas,
    tags: ['Caçambas', 'Implementos', '30 Anos'], productIds: ['pz-titan', 'pz025', 'pz85'],
  },
  {
    id: 'civil', title: 'Construção Civil e Alvenaria',
    description: 'Primers multissuperfície e impermeabilizantes para concreto, alvenaria, fachadas e áreas sujeitas à umidade.',
    icon: 'Building2', image: imgConstrucao,
    tags: ['Alvenaria', 'Impermeabilização', 'Concreto'], productIds: ['pz503', 'pz-titan'],
  },
  {
    id: 'serralheria', title: 'Serralheria e Madeiras',
    description: 'Linha ecológica e alquídica para portões, grades, esquadrias e acabamento em marcenaria com baixo impacto ambiental.',
    icon: 'Hammer', image: imgSerralheria,
    tags: ['Portões', 'Esquadrias', 'Ecológico'], productIds: ['eco-primer', 'pz330', 'pz85'],
  },
];

import imgLinePuPoliamina from '../assets/line-pu-poliamina.jpg';
import imgLinePuTripla from '../assets/line-pu-tripla.jpg';
import imgLineEletrostatica from '../assets/line-eletrostatica.jpg';
import imgLineEpoxi from '../assets/line-epoxi.jpg';
import imgLineZinco from '../assets/line-zinco.jpg';

export const productLines: ProductLine[] = [
  { id: 'pu-poliamina', title: 'PU Poliamina', description: 'Poliuretanos de alta resistência química e mecânica para ambientes industriais exigentes.', icon: 'FlaskConical', products: ['pz710'], image: imgLinePuPoliamina, tags: ['Química', 'Alta Resistência', 'Pintura de Máquinas'] },
  { id: 'pu-tripla', title: 'PU Tripla Ação', description: 'Sistema 3 em 1 que dispensa primer, oferecendo proteção completa em uma única aplicação. Tintas com dupla função para aplicação de alto desempenho, para superfícies com agressão corrosiva e ambientes com ataques químicos.', icon: 'Layers', products: ['pz710'], image: imgLinePuTripla, tags: ['3 em 1', 'Sem Primer', 'Dupla Função'] },
  { id: 'eletrostatica', title: 'Eletrostática', description: 'Tintas para aplicação eletrostática com acabamento premium e eficiência máxima.', icon: 'Zap', products: [], image: imgLineEletrostatica, tags: ['Acabamento', 'Premium'] },
  { id: 'epoxi-auto', title: 'Epóxi Alta Resistência', description: 'Sistemas epóxi autonivelantes para pisos industriais com alta performance e lavabilidade.', icon: 'Warehouse', products: ['pz350', 'pz503'], image: imgLineEpoxi, tags: ['Pisos', 'Autonivelante', 'Industrial'] },
  { id: 'zinco-auto', title: 'Zinco Auto-Mar', description: 'Primers à base de zinco para proteção anticorrosiva em ambientes marítimos e offshore.', icon: 'Ship', products: ['pz025'], image: imgLineZinco, tags: ['Offshore', 'Marítimo', 'Anticorrosivo'] },
  { id: 'poliureia', title: 'Poliuréia a Frio', description: 'Sistema de poliuréia com aplicação a frio, garantia de 5 anos e durabilidade de 30 anos.', icon: 'Diamond', products: ['pz-titan'], image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', tags: ['30 Anos', 'Impermeabilização'] },
  { id: 'altas-temp', title: 'Altas Temperaturas', description: 'Tintas especiais para superfícies expostas a altas temperaturas em caldeiras, fornos e tubulações industriais.', icon: 'Flame', products: ['pz025'], image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80', tags: ['Altas Temperaturas', 'Caldeiras', 'Fornos'] },
];

export const quizSteps: QuizStep[] = [
  {
    id: 'segment', title: 'Seu segmento', subtitle: 'Em qual setor industrial você atua?',
    options: [
      { id: 'metalicas', label: 'Estruturas Metálicas / Caldeiraria', icon: 'Wrench' },
      { id: 'maritimo', label: 'Marítimo / Offshore', icon: 'Ship' },
      { id: 'pisos', label: 'Pisos Industriais', icon: 'Warehouse' },
      { id: 'frotas', label: 'Frotas / Veículos', icon: 'Truck' },
      { id: 'civil', label: 'Construção Civil / Alvenaria', icon: 'Building2' },
      { id: 'serralheria', label: 'Serralheria / Madeiras', icon: 'Hammer' },
    ],
  },
  {
    id: 'surface', title: 'Qual a superfície?', subtitle: 'Selecione o tipo de superfície que precisa de proteção',
    options: [
      { id: 'metal', label: 'Metal / Aço', icon: 'Wrench' },
      { id: 'alvenaria', label: 'Alvenaria / Concreto', icon: 'Landmark' },
      { id: 'madeira', label: 'Madeira', icon: 'TreePine' },
      { id: 'piso', label: 'Piso Industrial', icon: 'Factory' },
      { id: 'tubulacao', label: 'Tubulação / Caldeira', icon: 'Gauge' },
      { id: 'offshore', label: 'Marítimo / Offshore', icon: 'Anchor' },
      { id: 'cacamba', label: 'Caçamba / Veículo', icon: 'Truck' },
    ],
  },
  {
    id: 'corrosion', title: 'Nível de exposição', subtitle: 'Qual o grau de corrosão ou agressividade do ambiente?',
    options: [
      { id: 'baixo', label: 'Baixo', icon: 'CircleDot' },
      { id: 'medio', label: 'Médio', icon: 'CircleDot' },
      { id: 'alto', label: 'Alto / Severo', icon: 'CircleDot' },
    ],
  },
  {
    id: 'environment', title: 'Ambiente de uso', subtitle: 'Onde o produto será aplicado?',
    options: [
      { id: 'interno', label: 'Interno', icon: 'Building2' },
      { id: 'externo', label: 'Externo', icon: 'Sun' },
      { id: 'maritimo', label: 'Marítimo / Offshore', icon: 'Waves' },
    ],
  },
  {
    id: 'priority', title: 'Sua prioridade', subtitle: 'O que é mais importante para este projeto?',
    options: [
      { id: 'custo', label: 'Custo-benefício', icon: 'TrendingDown' },
      { id: 'durabilidade', label: 'Durabilidade máxima', icon: 'Trophy' },
      { id: 'rapidez', label: 'Rapidez de aplicação', icon: 'Zap' },
      { id: 'sustentabilidade', label: 'Sustentabilidade', icon: 'Leaf' },
    ],
  },
];

export const getProductById = (id: string): Product | undefined => products.find((p) => p.id === id);
