import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Segmentos', href: '#segmentos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Recomendador', href: '#quiz' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.06)] border-b border-graphite-100'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <a href="#hero" className="shrink-0 flex items-center">
            <Logo size="xl" />
          </a>

          {/* Desktop Nav — pushed closer to logo */}
          <div className="hidden lg:flex items-center gap-1 ml-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-[13px] font-medium text-graphite-500 hover:text-graphite transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-pz-green group-hover:w-5 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/5511947897574"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-metallic hidden lg:inline-flex items-center gap-2 px-5 py-2 text-white text-[13px] font-semibold rounded-full shrink-0"
          >
            <MessageCircle size={14} strokeWidth={2.5} />
            Fale Conosco
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-graphite"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-white border-t border-graphite-100"
      >
        <div className="px-4 py-3 space-y-0.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-graphite-500 hover:text-graphite hover:bg-graphite-50 rounded-lg transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511947897574"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-metallic block mt-2 px-4 py-2.5 text-white text-center text-sm font-semibold rounded-lg"
          >
            Fale no WhatsApp
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
