import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface DynamicIconProps extends LucideProps {
  name: string;
}

export default function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>)[name];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
}
