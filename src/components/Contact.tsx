import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, MessageCircle, User, Phone, Building2, FileText, ChevronDown } from 'lucide-react';
import { segments } from '../data/products';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', company: '', segment: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const segLabel = segments.find(s => s.id === formData.segment)?.title || '';
    const subject = encodeURIComponent(`Contato PowerZink — ${formData.company || formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmpresa: ${formData.company}\nSegmento: ${segLabel}\nTelefone: ${formData.phone}\n\nMensagem:\n${formData.message}`
    );
    window.location.href = `mailto:contato@powerzink.com.br?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contato" className="relative py-24 lg:py-32 bg-bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 metal-divider" />
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="eyebrow">Fale Conosco</span>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-[2.75rem] mt-5 mb-4">
            PRONTO PARA <span className="text-pz-green">REDUZIR CUSTOS</span> E PROCESSOS?
          </h2>
          <p className="text-graphite-400 max-w-xl mx-auto">Agende uma visita técnica ou solicite uma recomendação personalizada.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="c-name" className="flex items-center gap-1.5 text-sm font-medium text-graphite mb-2"><User size={13} className="text-graphite-300" />Nome *</label>
                <input id="c-name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-graphite-100 rounded-xl text-graphite placeholder-graphite-300 focus:outline-none focus:border-pz-green focus:ring-2 focus:ring-pz-green/10 transition-all" placeholder="Seu nome completo" />
              </div>
              <div>
                <label htmlFor="c-company" className="flex items-center gap-1.5 text-sm font-medium text-graphite mb-2"><Building2 size={13} className="text-graphite-300" />Empresa</label>
                <input id="c-company" type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-graphite-100 rounded-xl text-graphite placeholder-graphite-300 focus:outline-none focus:border-pz-green focus:ring-2 focus:ring-pz-green/10 transition-all" placeholder="Nome da empresa" />
              </div>
              <div className="relative">
                <label htmlFor="c-segment" className="flex items-center gap-1.5 text-sm font-medium text-graphite mb-2"><FileText size={13} className="text-graphite-300" />Segmento</label>
                <select id="c-segment" value={formData.segment} onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-graphite-100 rounded-xl text-graphite focus:outline-none focus:border-pz-green focus:ring-2 focus:ring-pz-green/10 transition-all appearance-none cursor-pointer">
                  <option value="">Selecione seu segmento</option>
                  {segments.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                </select>
                <ChevronDown size={16} className="absolute right-4 top-[42px] text-graphite-300 pointer-events-none" />
              </div>
              <div>
                <label htmlFor="c-phone" className="flex items-center gap-1.5 text-sm font-medium text-graphite mb-2"><Phone size={13} className="text-graphite-300" />Telefone *</label>
                <input id="c-phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-graphite-100 rounded-xl text-graphite placeholder-graphite-300 focus:outline-none focus:border-pz-green focus:ring-2 focus:ring-pz-green/10 transition-all" placeholder="(11) 9 0000-0000" />
              </div>
              <div>
                <label htmlFor="c-msg" className="flex items-center gap-1.5 text-sm font-medium text-graphite mb-2"><FileText size={13} className="text-graphite-300" />Mensagem</label>
                <textarea id="c-msg" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-graphite-100 rounded-xl text-graphite placeholder-graphite-300 focus:outline-none focus:border-pz-green focus:ring-2 focus:ring-pz-green/10 transition-all resize-none" placeholder="Descreva sua necessidade..." />
              </div>
              <button type="submit" className="btn-metallic w-full flex items-center justify-center gap-2 py-3.5 text-white font-semibold text-base rounded-xl cursor-pointer">
                <Send size={16} />Enviar Mensagem
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-4">
            <div className="card-elevated p-6">
              <h3 className="text-base font-semibold text-graphite mb-4 uppercase tracking-wide font-heading">Gestor Comercial</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="icon-box !w-10 !h-10 !rounded-lg"><User size={16} /></div>
                  <div><div className="text-graphite font-semibold text-sm">Ronaldo Tavares</div><div className="text-xs text-graphite-400">Gestor Comercial</div></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="icon-box !w-10 !h-10 !rounded-lg"><Phone size={16} /></div>
                  <div><div className="text-graphite font-semibold text-sm">(11) 9 4789-7574</div><div className="text-xs text-graphite-400">WhatsApp disponível</div></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="icon-box !w-10 !h-10 !rounded-lg"><Send size={16} /></div>
                  <div><div className="text-graphite font-semibold text-sm">contato@powerzink.com.br</div><div className="text-xs text-graphite-400">E-mail comercial</div></div>
                </div>
              </div>
            </div>
            <a href="https://wa.me/5511947897574?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20equipe%20PowerZink." target="_blank" rel="noopener noreferrer"
              className="block p-5 rounded-xl bg-[#25D366]/5 border border-[#25D366]/15 hover:bg-[#25D366]/10 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#25D366] flex items-center justify-center group-hover:scale-105 transition-transform"><MessageCircle size={20} className="text-white" /></div>
                <div><div className="text-graphite font-semibold">Fale pelo WhatsApp</div><div className="text-xs text-graphite-400">Resposta rápida em horário comercial</div></div>
              </div>
            </a>
            <a href="https://instagram.com/powerzinktintas" target="_blank" rel="noopener noreferrer"
              className="block p-5 rounded-xl card-elevated !shadow-none hover:!shadow-sm group">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <div><div className="text-graphite font-semibold">@powerzinktintas</div><div className="text-xs text-graphite-400">Siga no Instagram</div></div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
