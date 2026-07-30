import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { productLines } from '../data/products';
import DynamicIcon from './DynamicIcon';

export default function ProductLines() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="produtos" className="relative py-24 lg:py-32 bg-bg-offwhite overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="eyebrow">Nossas Linhas</span>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-[2.75rem] mt-5 mb-4">
            LINHAS DE <span className="text-pz-green">PRODUTO</span>
          </h2>
          <p className="text-graphite-400 max-w-2xl mx-auto">
            Tintas com dupla função para aplicação de alto desempenho, para superfícies com agressão corrosiva e ambientes com ataques químicos. Para construção, indústria, offshore e marítima, oferecendo alta resistência mecânica.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {productLines.map((line, i) => (
            <motion.a
              key={line.id}
              href="#catalogo"
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="card-dark group relative overflow-hidden cursor-pointer hover:ring-1 hover:ring-pz-green/40 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img src={line.image} alt={line.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[600ms] ease-out" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 via-50% to-transparent" />
              </div>
              <div className="relative p-6 flex flex-col h-full min-h-[200px]">
                <div className="icon-box-dark mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-pz-green/20 transition-all duration-300">
                  <DynamicIcon name={line.icon} size={20} strokeWidth={2} />
                </div>
                <h3 className="font-heading font-bold text-lg text-white uppercase tracking-tight mb-2">{line.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4 flex-1">{line.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {line.tags.map((tag, j) => (
                    <span key={j} className="px-2.5 py-1 text-[10px] font-semibold text-pz-green-light bg-pz-green/20 rounded-full uppercase tracking-wider transition-all duration-300 group-hover:bg-pz-green/30 group-hover:text-white">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
