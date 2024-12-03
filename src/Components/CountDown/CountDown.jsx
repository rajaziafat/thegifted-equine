import React, { useEffect, useState } from "react";

const Countdown = () => {
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 5);

  const getTimeRemaining = (targetDateTime) => {
    const nowTime = Date.now();
    const complete = nowTime >= targetDateTime;

    if (complete) {
      return { complete, hours: 0, minutes: 0, seconds: 0 };
    }

    const secondsRemaining = Math.floor((targetDateTime - nowTime) / 1000);
    const hours = Math.floor(secondsRemaining / 3600);
    const minutes = Math.floor((secondsRemaining % 3600) / 60);
    const seconds = secondsRemaining % 60;

    return { complete, hours, minutes, seconds };
  };

  const [time, setTime] = useState(getTimeRemaining(targetDate.getTime()));

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = getTimeRemaining(targetDate.getTime());
      setTime(timeLeft);

      if (timeLeft.complete) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatNumber = (number) => number.toString().padStart(2, "0");

  const TimeSegment = ({ value, label }) => (
    <div className="text-center">
      <div className="flex gap-2 text-4xl font-bold">
        {formatNumber(value)
          .split("")
          .map((num, idx) => (
            <div
              key={idx}
              className="w-12 h-20 bg-gray-800 text-white flex items-center justify-center rounded"
            >
              {num}
            </div>
          ))}
      </div>
      <p className="mt-2 text-lg">{label}</p>
    </div>
  );

  return (
    <div className="countdown mx-auto mt-10 flex gap-6 justify-center font-sans">
      <TimeSegment value={time.hours} label="Hours" />
      <TimeSegment value={time.minutes} label="Minutes" />
      <TimeSegment value={time.seconds} label="Seconds" />
    </div>
  );
};

export default Countdown;
