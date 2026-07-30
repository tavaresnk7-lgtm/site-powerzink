import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, TrendingUp, Package, ShieldCheck, Layers } from 'lucide-react';
import PaintCan3D from './PaintCan3D';

function AnimatedNumber({ value, suffix = '', prefix = '', duration = 2.5 }: { value: number; suffix?: string; prefix?: string; duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setDisplayValue(Math.round(eased * value));
      if (elapsed < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>{prefix}{displayValue}{suffix}</span>
  );
}

const stats = [
  { value: 2006, prefix: '', suffix: '', label: 'No mercado desde', icon: TrendingUp, isYear: true },
  { value: 9, prefix: '', suffix: '+', label: 'Linhas de produto', icon: Package, isYear: false },
  { value: 30, prefix: '', suffix: '+', label: 'Anos de durabilidade', icon: ShieldCheck, isYear: false },
  { value: null, display: '3em1', label: 'Dispensa Wash Primer', icon: Layers, isYear: false },
];

export default function Hero() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-40px' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full brushed-metal-bg opacity-[0.06]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <span className="eyebrow">Linha Industrial — POWERZINK</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
              className="heading-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl mt-6 mb-6"
            >
              SOLUÇÕES INDUSTRIAIS QUE{' '}
              <span className="text-pz-green">REDUZEM CUSTO</span> E AUMENTAM{' '}
              <span className="text-pz-green">PRODUTIVIDADE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg text-graphite-500 max-w-lg mb-8 leading-relaxed"
            >
              Produzimos tintas de dupla função para situações que demandam urgência e velocidade,{' '}
              podendo ser aplicado{' '}
              <strong className="text-graphite font-semibold">sem Wash Primer</strong>.
              Reduzem homem-hora e protegem contra os ambientes mais agressivos —
              do chão de fábrica ao offshore.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.65 }} className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5511947897574?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20equipe%20PowerZink."
                target="_blank" rel="noopener noreferrer"
                className="btn-metallic group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl"
              >
                Fale com a Equipe
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
              <a href="#segmentos" className="btn-outline-metallic inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold rounded-xl">
                Conheça os Segmentos
              </a>
            </motion.div>
          </div>

          {/* Hero 3D — lata girando interativa */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="relative hidden lg:block">
            <PaintCan3D />
          </motion.div>
        </div>

        {/* Stats — centered, icons, glow, dividers */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }} animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 pt-10 pb-2"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className={`flex flex-col items-center text-center py-6 px-4 ${
                  i < stats.length - 1 ? 'lg:border-r lg:border-graphite-100' : ''
                } ${i < 2 ? 'border-b lg:border-b-0 border-graphite-100' : ''}`}
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-pz-green-light flex items-center justify-center mb-4">
                  <stat.icon size={20} strokeWidth={1.8} className="text-pz-green" />
                </div>

                {/* Number with glow */}
                <div className="relative mb-1.5">
                  <div className="absolute inset-0 blur-xl opacity-20 bg-pz-green rounded-full scale-150" />
                  <div className="relative font-heading font-bold text-4xl sm:text-5xl lg:text-[3.25rem] text-graphite tracking-tight"
                    style={{ textShadow: '0 0 30px rgba(46, 125, 50, 0.12)' }}
                  >
                    {stat.value !== null ? (
                      <AnimatedNumber value={stat.value} suffix={stat.suffix || ''} prefix={stat.prefix || ''} />
                    ) : (
                      <span className="text-pz-green">{stat.display}</span>
                    )}
                  </div>
                </div>

                {/* Label */}
                <div className="text-xs sm:text-sm text-graphite-400 font-medium uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a href="#segmentos" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-graphite-300 hover:text-graphite-500 transition-colors">
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
