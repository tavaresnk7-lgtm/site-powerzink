import logoImg from '../assets/logo-powerzink.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
  className?: string;
}

const heights = { sm: 'h-9', md: 'h-11', lg: 'h-14', xl: 'h-16' };

export default function Logo({ size = 'md', variant = 'light', className = '' }: LogoProps) {
  return (
    <img
      src={logoImg}
      alt="PowerZink — Linha Industrial"
      className={`${heights[size]} w-auto object-contain ${variant === 'dark' ? 'brightness-0 invert' : ''} ${className}`}
    />
  );
}
