import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import logoImg from '../assets/logo-powerzink.png';

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress with easing
    const start = performance.now();
    const duration = 2200; // ms

    const tick = (now: number) => {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setProgress(Math.round(eased * 100));

      if (elapsed < 1) {
        requestAnimationFrame(tick);
      } else {
        // Wait for actual page load before fading
        const finish = () => {
          setFadeOut(true);
          setTimeout(onFinish, 600); // match fade-out duration
        };
        if (document.readyState === 'complete') {
          setTimeout(finish, 300);
        } else {
          window.addEventListener('load', () => setTimeout(finish, 300), { once: true });
        }
      }
    };

    requestAnimationFrame(tick);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!fadeOut ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{
            background: 'radial-gradient(ellipse at center, #f5f0e8 0%, #fafafa 50%, #ffffff 100%)',
          }}
        >
          {/* Subtle green glow behind logo */}
          <div
            className="absolute w-64 h-64 rounded-full opacity-15 blur-3xl"
            style={{ background: 'radial-gradient(circle, #2E7D32 0%, transparent 70%)' }}
          />

          {/* Logo */}
          <motion.img
            src={logoImg}
            alt="PowerZink"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="h-24 sm:h-28 w-auto object-contain relative z-10 mb-6"
          />

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="text-center relative z-10 mb-8"
          >
            <div className="font-heading font-bold text-2xl sm:text-3xl text-graphite tracking-tight uppercase">
              POWER<span className="text-pz-green">ZINK</span>
            </div>
            <div className="text-xs sm:text-sm text-graphite-400 mt-1.5 uppercase tracking-[0.15em] font-medium">
              Linha Industrial — POWERZINK
            </div>
          </motion.div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="relative z-10 text-center"
          >
            <div className="text-[11px] text-graphite-300 uppercase tracking-[0.2em] font-medium mb-3">
              Carregando...
            </div>

            {/* Progress bar */}
            <div className="w-48 sm:w-56 h-[3px] bg-graphite-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #1B5E20, #2E7D32, #4CAF50)',
                  width: `${progress}%`,
                }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.15, ease: 'linear' }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
