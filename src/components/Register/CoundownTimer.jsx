"use client";
import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 272,
    hours: 10,
    minutes: 55,
    seconds: 47
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                // Timer completed
                clearInterval(timer);
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HRS" },
    { value: timeLeft.minutes, label: "MIN" },
    { value: timeLeft.seconds, label: "SEC" }
  ];

  return (
    <div className="flex gap-5 justify-between self-center mt-10 max-w-full font-semibold text-center text-brand whitespace-nowrap w-[396px]">
      {timeUnits.map((unit, index) => (
        <TimeUnit key={index} value={unit.value} label={unit.label} />
      ))}
    </div>
  );
}

function TimeUnit({ value, label }) {
  return (
    <div className="flex flex-col">
      <span className="text-5xl leading-none max-md:text-4xl">
        {value}
      </span>
      <span className="self-center mt-3.5 text-base">
        {label}
      </span>
    </div>
  );
}

export default CountdownTimer;
