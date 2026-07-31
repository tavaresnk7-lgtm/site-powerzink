import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Recycle, ShieldCheck, HeadsetIcon, Check } from 'lucide-react';
import imgAboutExcelencia from '../assets/about-excelencia.jpg';

const bullets = [
  { icon: Recycle, title: 'POWERZINK e VW', text: 'A Powerzink é a marca para multissegmentos idealizada pelo Grupo VW, com mais de duas décadas de atuação.' },
  { icon: ShieldCheck, title: 'Proteção comprovada', text: 'Resistência testada contra corrosão, névoa salina e ambientes extremos.' },
  { icon: HeadsetIcon, title: 'Suporte Técnico Especializado', text: 'Pré e Pós-venda diferenciado, entendendo e atendendo a necessidade de forma presencial, se destacando da maioria dos concorrentes que hoje são meros distribuidores de tintas.' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="sobre" className="relative py-24 lg:py-32 bg-bg-offwhite overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }} className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={imgAboutExcelencia} alt="Pintura industrial com pulverizador" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-pz-green/8 mix-blend-overlay" />
            </div>
            <div className="absolute -bottom-5 -right-5 sm:right-6 bg-white rounded-xl shadow-lg shadow-black/8 p-5 border border-graphite-100 max-w-[180px]">
              <div className="font-heading font-bold text-3xl text-pz-green leading-none">20+</div>
              <div className="text-xs text-graphite-400 mt-1.5 font-medium uppercase tracking-wide leading-tight">Anos no mercado industrial</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>
            <span className="eyebrow mb-6 inline-flex">Sobre a PowerZink</span>
            <h2 className="heading-display text-3xl sm:text-4xl lg:text-[2.75rem] mt-5 mb-6">
              MAIS DE DUAS DÉCADAS DE <span className="text-pz-green">EXCELÊNCIA INDUSTRIAL</span>
            </h2>
            <div className="space-y-4 text-graphite-500 leading-relaxed">
              <p>
                A <strong className="text-graphite font-semibold">PowerZink</strong> é a marca
                para multissegmentos idealizada pelo <strong className="text-graphite font-semibold">Grupo VW</strong>.
                Acumula experiência de mais de 20 anos trazendo soluções para os segmentos Imobiliários, Frotas e Industriais.
              </p>
              <p>
                Nascemos da necessidade de oferecer ao mercado{' '}
                <strong className="text-pz-green font-semibold">soluções industriais completas</strong> —
                não apenas tinta, mas serviço técnico, consultoria, formulação sob medida e pós-venda real.
              </p>
              <p className="italic text-pz-green font-medium border-l-2 border-pz-green pl-4">
                “Não é somente comercializar tintas, mas trazer soluções eficazes.”
              </p>
            </div>
            <div className="mt-8 space-y-4">
              {bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="icon-box mt-0.5"><b.icon size={20} strokeWidth={2} /></div>
                  <div>
                    <h4 className="font-semibold text-graphite text-[15px]">{b.title}</h4>
                    <p className="text-sm text-graphite-400 mt-0.5">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['POWERZINK e VW', 'Suporte Técnico', 'Produtos On-Demand', 'Pós-venda Real'].map((tag, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-graphite-50 text-graphite-500 text-xs font-medium border border-graphite-100">
                  <Check size={12} className="text-pz-green" />{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
