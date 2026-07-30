import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, Check, MessageCircle } from 'lucide-react';
import { products } from '../data/products';
import DynamicIcon from './DynamicIcon';

export default function Catalog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="catalogo" className="relative py-24 lg:py-32 bg-bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 metal-divider" />
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="eyebrow">Catálogo Técnico</span>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-[2.75rem] mt-5 mb-4">
            CATÁLOGO <span className="text-pz-green">DESCRITIVO</span>
          </h2>
          <p className="text-graphite-400 max-w-xl mx-auto">Conheça em detalhes cada produto da nossa linha industrial.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {products.map((product, i) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.05 * i }}>
              <div className={`rounded-2xl transition-all duration-[250ms] ease-out group ${
                expandedId === product.id
                  ? 'bg-[#F6FAF7] shadow-lg shadow-pz-green/8 border-l-[3px] border-l-pz-green border border-pz-green/15'
                  : 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-transparent hover:-translate-y-[3px] hover:shadow-lg hover:shadow-black/8'
              }`}>
                <button onClick={() => setExpandedId(expandedId === product.id ? null : product.id)} className="w-full flex items-center gap-4 p-5 text-left cursor-pointer" style={{ WebkitTapHighlightColor: 'transparent' }}>
                  <div className={`icon-box transition-all duration-[250ms] ease-out group-hover:scale-110 group-hover:shadow-md group-hover:shadow-pz-green/10 ${expandedId === product.id ? '!bg-pz-green !text-white shadow-md shadow-pz-green/20' : ''}`}>
                    <DynamicIcon name={product.icon} size={20} strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 text-[11px] font-mono font-bold text-white bg-graphite-600 rounded-md tracking-wide">{product.code}</span>
                      <span className="text-xs text-graphite-400 font-medium">{product.category}</span>
                    </div>
                    <h3 className="text-base font-semibold text-graphite mt-1.5 truncate">{product.name}</h3>
                  </div>
                  <ChevronDown size={18} className={`text-graphite-300 shrink-0 transition-transform duration-300 ease-out ${expandedId === product.id ? 'rotate-180 text-pz-green' : ''}`} />
                </button>

                <AnimatePresence>
                  {expandedId === product.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ height: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }, opacity: { duration: 0.25, delay: 0.1 } }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pt-1 border-t border-pz-green/10">
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.15 }}
                          className="grid lg:grid-cols-2 gap-6 mt-4"
                        >
                          <div>
                            <p className="text-graphite-500 text-sm leading-relaxed mb-5">{product.description}</p>
                            <h4 className="text-xs font-bold text-graphite uppercase tracking-wider mb-3">Características</h4>
                            <ul className="space-y-2">
                              {product.features.map((feat, j) => (
                                <motion.li
                                  key={j}
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.25, delay: 0.2 + j * 0.05 }}
                                  className="flex items-start gap-2.5 text-sm text-graphite-500"
                                >
                                  <Check size={14} className="text-pz-green mt-0.5 shrink-0" />{feat}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-graphite uppercase tracking-wider mb-3">Aplicações</h4>
                            <div className="flex flex-wrap gap-2 mb-6">
                              {product.applications.map((app, j) => (
                                <motion.span
                                  key={j}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.2, delay: 0.25 + j * 0.04 }}
                                  className="px-3 py-1.5 text-xs font-medium text-graphite-500 bg-graphite-50 rounded-lg border border-graphite-100"
                                >{app}</motion.span>
                              ))}
                            </div>
                            <motion.a
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.35 }}
                              href={`https://wa.me/5511947897574?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o produto ${product.code} - ${product.name}.`)}`} target="_blank" rel="noopener noreferrer"
                              className="btn-metallic inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-semibold rounded-lg"
                            >
                              <MessageCircle size={14} />Solicitar Orçamento
                            </motion.a>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
