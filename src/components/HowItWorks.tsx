import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Stethoscope, PackageCheck, HeadsetIcon } from 'lucide-react';

const steps = [
  { number: '01', Icon: Search, title: 'Diagnóstico', description: 'Análise do ambiente, substrato e nível de exposição do seu projeto.' },
  { number: '02', Icon: Stethoscope, title: 'Recomendação', description: 'Seleção do sistema de pintura ideal — primer + acabamento.' },
  { number: '03', Icon: PackageCheck, title: 'Fornecimento', description: 'Entrega ágil com suporte técnico de aplicação.' },
  { number: '04', Icon: HeadsetIcon, title: 'Pós-venda', description: 'Acompanhamento de performance e suporte contínuo.' },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 lg:py-32 bg-bg-offwhite overflow-hidden">
      <div className="absolute top-0 left-0 right-0 metal-divider" />
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="eyebrow">Processo</span>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-[2.75rem] mt-5 mb-4">
            DO DIAGNÓSTICO À <span className="text-pz-green">APLICAÇÃO</span>
          </h2>
          <p className="text-graphite-400 max-w-xl mx-auto">Acompanhamos cada etapa para garantir o melhor resultado.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.12 * i }}
              className="group relative flex flex-col items-center text-center lg:px-6 cursor-default">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] border-t-2 border-dashed border-graphite-200" />
              )}
              <div className="w-16 h-16 rounded-2xl bg-graphite-50 border border-graphite-100 flex items-center justify-center mb-4 relative z-10 transition-all duration-[250ms] ease-out group-hover:bg-pz-green group-hover:border-pz-green group-hover:shadow-lg group-hover:shadow-pz-green/15 group-hover:scale-105">
                <span className="font-heading font-bold text-xl text-graphite-300 transition-colors duration-[250ms] ease-out group-hover:text-white">{step.number}</span>
              </div>
              <div className="icon-box mb-4 transition-transform duration-[250ms] ease-out group-hover:scale-110"><step.Icon size={20} strokeWidth={2} /></div>
              <h3 className="font-heading font-bold text-base text-graphite uppercase tracking-tight mb-2">{step.title}</h3>
              <p className="text-sm text-graphite-400 leading-relaxed max-w-[200px]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
