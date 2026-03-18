import { useCountUp } from '../hooks/useCountUp';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
  className = '',
}: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollReveal<HTMLSpanElement>();
  const { count } = useCountUp({
    end,
    duration,
    suffix,
    prefix,
    delay: isVisible ? 0 : 999999,
  });

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  );
}
