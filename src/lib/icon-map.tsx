import {
  Building2,
  ShieldCheck,
  Bird,
  Baby,
  Feather,
  HardHat,
  CircleDot,
  Waves,
  Car,
  Milestone,
  TreePine,
  Trees,
  type LucideIcon,
} from "lucide-react";

export const ICONS: Record<string, LucideIcon> = {
  Building2,
  ShieldCheck,
  Bird,
  Baby,
  Feather,
  HardHat,
  CircleDot,
  Waves,
  Car,
  Milestone,
  TreePine,
  Trees,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? ShieldCheck;
  return <Icon className={className} />;
}
