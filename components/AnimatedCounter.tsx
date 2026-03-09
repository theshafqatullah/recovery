"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
