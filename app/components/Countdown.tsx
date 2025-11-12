'use client';

import { useState, useEffect } from 'react';
import React from 'react';

const Countdown = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const calculateTimeLeft = () => {
    const year = new Date().getFullYear();
    const difference = +new Date(`11/30/${year}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!hasMounted) return;

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, hasMounted]);

  if (!hasMounted) {
    return null;
  }

  const timerComponents: React.ReactNode[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="text-left">
        <span className="text-4xl font-bold">
          {timeLeft[interval as keyof typeof timeLeft]}
        </span>
        <span className="block text-sm">{interval}</span>
      </div>
    );
  });

  return (
    <div className="grid grid-flow-col gap-5 auto-cols-max justify-start">
      {timerComponents.length ? timerComponents : <span>Registration Closed!</span>}
    </div>
  );
};

export default Countdown;
