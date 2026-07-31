import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Building2, Clock } from 'lucide-react';
import imgBannerDecadas from '../assets/banner-decadas.jpg';

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="parceiros" className="relative py-24 lg:py-32 bg-bg-offwhite overflow-hidden">
      <div className="absolute top-0 left-0 right-0 metal-divider" />
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="eyebrow">Credibilidade</span>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-[2.75rem] mt-5 mb-4">PARCEIROS E <span className="text-pz-green">CONFIANÇA</span></h2>
          <p className="text-graphite-400 max-w-2xl mx-auto">Produtos utilizados em projetos de grande porte nos setores de óleo e gás, infraestrutura e indústria naval.</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="card-elevated p-7 text-center group">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-yellow-accent/10 flex items-center justify-center group-hover:scale-105 transition-transform"><Award size={24} className="text-yellow-accent" strokeWidth={1.8} /></div>
            <h3 className="text-lg font-semibold text-graphite mb-1">Petrobras</h3>
            <p className="text-sm text-graphite-400 mb-3">Parceria e fornecimento para o setor de óleo e gás</p>
            <span className="inline-flex px-3 py-1 rounded-full bg-yellow-accent/10 text-yellow-accent text-[11px] font-bold uppercase tracking-wider">Parceiro Estratégico</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="card-elevated p-7 text-center group">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-pz-green-light flex items-center justify-center group-hover:scale-105 transition-transform"><Building2 size={24} className="text-pz-green" strokeWidth={1.8} /></div>
            <h3 className="text-lg font-semibold text-graphite mb-1">Grupo VW</h3>
            <p className="text-sm text-graphite-400 mb-3">Conglomerado com atuação em imobiliário, frotas e indústria</p>
            <span className="inline-flex px-3 py-1 rounded-full bg-pz-green-light text-pz-green text-[11px] font-bold uppercase tracking-wider">Holding</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="card-elevated p-7 text-center group">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-graphite-50 flex items-center justify-center group-hover:scale-105 transition-transform"><Clock size={24} className="text-graphite-500" strokeWidth={1.8} /></div>
            <h3 className="text-lg font-semibold text-graphite mb-1">20+ Anos</h3>
            <p className="text-sm text-graphite-400 mb-3">Experiência consolidada em soluções industriais</p>
            <span className="inline-flex px-3 py-1 rounded-full bg-graphite-50 text-graphite-500 text-[11px] font-bold uppercase tracking-wider border border-graphite-100">Desde 2004</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="mt-16 relative rounded-2xl overflow-hidden h-48 lg:h-64 max-w-4xl mx-auto">
          <img src={imgBannerDecadas} alt="Planta petroquímica industrial" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-pz-green/10 mix-blend-overlay" />
          <div className="absolute bottom-0 left-0 p-6 lg:p-8">
            <div className="font-heading font-bold text-2xl lg:text-3xl text-white uppercase tracking-tight">Proteção que dura <span className="text-pz-green-light">décadas</span></div>
            <p className="text-white/70 text-sm mt-1">Soluções testadas nos ambientes mais agressivos do setor industrial</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
