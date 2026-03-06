import {
  Calendar,
  Mic,
  Newspaper,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import type { Service } from '@/data/services';
import styles from './ServiceCard.module.scss';

const iconMap: Record<Service['icon'], LucideIcon> = {
  mic: Mic,
  newspaper: Newspaper,
  sparkles: Sparkles,
  calendar: Calendar,
};

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <article className={styles.card}>
      <div className={styles.iconWrap}>
        <Icon size={22} />
      </div>

      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  );
}
