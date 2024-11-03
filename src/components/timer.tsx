import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number | string
  minutes: number | string
  seconds: number | string
}

export default function CountdownTimer({ targetDate }: CountdownProps) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      const seconds = Math.floor((difference / 1000) % 60);
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: seconds < 10 ? `0${seconds}` : seconds,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // Update every minute

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex space-x-4 justify-center items-center mt-4">
      <div className="bg-Clr007E text-white rounded-lg p-4 w-20 text-center">
        <span className="text-2xl font-bold border-b-2 border-white pb-1 block">
          {timeLeft.days}
        </span>
        <span className="block mt-1 text-base">kun</span>
      </div>
      <div className="bg-Clr007E text-white rounded-lg p-4 w-20 text-center">
        <span className="text-2xl font-bold border-b-2 border-white pb-1 block">
          {timeLeft.hours}
        </span>
        <span className="block mt-1 text-base">soat</span>
      </div>
      <div className="bg-Clr007E text-white rounded-lg p-4 w-20 text-center">
        <span className="text-2xl font-bold border-b-2 border-white pb-1 block">
          {timeLeft.minutes}
        </span>
        <span className="block mt-1 text-base">minut</span>
      </div>
      <div className="bg-Clr007E text-white rounded-lg p-4 w-20 text-center">
        <span className="text-2xl font-bold border-b-2 border-white pb-1 block">
          {timeLeft.seconds}
        </span>
        <span className="block mt-1 text-base">sekund</span>
      </div>
    </div>
  );
}
