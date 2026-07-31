import { MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { segments } from '../data/products';

const productLinks = [
  { label: 'Catálogo Descritivo', href: '#catalogo' },
  { label: 'Recomendador', href: '#quiz' },
  { label: 'Linhas de Produto', href: '#produtos' },
];
const companyLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Parceiros', href: '#parceiros' },
  { label: 'Como Funciona', href: '#quiz' },
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Logo size="xl" />
            </div>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed mb-3">
              Soluções industriais completas — tintas, serviço técnico e pós-venda do Grupo VW.
            </p>
            <div className="text-xs text-white/25 uppercase tracking-wider">Linha Industrial — Grupo VW</div>
          </div>

          {/* Segmentos */}
          <div>
            <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider mb-4">Segmentos</h4>
            <ul className="space-y-2">
              {segments.map(s => (
                <li key={s.id}><a href="#segmentos" className="text-sm text-white/40 hover:text-white transition-colors">{s.title.split(' e ')[0]}</a></li>
              ))}
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider mb-4">Produtos</h4>
            <ul className="space-y-2">
              {productLinks.map(l => (
                <li key={l.href}><a href={l.href} className="text-sm text-white/40 hover:text-white transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider mb-4">Empresa</h4>
            <ul className="space-y-2">
              {companyLinks.map(l => (
                <li key={l.label}><a href={l.href} className="text-sm text-white/40 hover:text-white transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider mb-4">Contato</h4>
            <ul className="space-y-2">
              <li><a href="https://wa.me/5511947897574" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors">(11) 9 4789-7574</a></li>
              <li><a href="mailto:contato@powerzink.com.br" className="text-sm text-white/40 hover:text-white transition-colors">contato@powerzink.com.br</a></li>
              <li><a href="https://instagram.com/powerzinktintas" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors">@powerzinktintas</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">© {new Date().getFullYear()} PowerZink — Linha Industrial do Grupo VW. Todos os direitos reservados.</p>
          <div className="flex items-center gap-3">
            <a href="https://instagram.com/powerzinktintas" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/30 hover:text-white transition-all" aria-label="Instagram">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://wa.me/5511947897574" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/30 hover:text-white transition-all" aria-label="WhatsApp">
              <MessageCircle size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
