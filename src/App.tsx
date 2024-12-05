import React, { useState, useEffect } from 'react';
import { Timer } from './components/Timer';
import { SessionCounter } from './components/SessionCounter';
import { BreakSelector } from './components/BreakSelector';
import { ThemeToggle } from './components/ThemeToggle';
import { playAlarmSound, playBeepSound, stopAlarmSound } from './utils/sound';

type SessionType = 'pomodoro' | 'short-break' | 'long-break' | 'break-selection';

const App: React.FC = () => {
  const POMODORO_DURATION = 20 * 60;
  const SHORT_BREAK_DURATION = 5 * 60;
  const LONG_BREAK_DURATION = 10 * 60;

  const [sessionType, setSessionType] = useState<SessionType>('pomodoro');
  const [isRunning, setIsRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(POMODORO_DURATION);
  const [sessionCount, setSessionCount] = useState(0);
  const [isDark, setIsDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    switch (sessionType) {
      case 'pomodoro':
        setTimeRemaining(POMODORO_DURATION);
        break;
      case 'short-break':
        setTimeRemaining(SHORT_BREAK_DURATION);
        break;
      case 'long-break':
        setTimeRemaining(LONG_BREAK_DURATION);
        break;
      case 'break-selection':
        setIsRunning(false);
        break;
    }
  }, [sessionType]);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (isRunning && timeRemaining > 0) {
      intervalId = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && sessionType !== 'break-selection') {
      handleSessionEnd();
    }

    return () => clearInterval(intervalId);
  }, [isRunning, timeRemaining, sessionType]);

  const handleSessionEnd = () => {
    if (sessionType === 'pomodoro') {
      playAlarmSound();
      setSessionCount((prev) => prev + 1);
      setSessionType('break-selection');
    } else {
      playBeepSound();
      startNextPomodoro();
    }
  };

  const startNextPomodoro = () => {
    setSessionType('pomodoro');
    setTimeRemaining(POMODORO_DURATION);
    setIsRunning(true);
  };

  const handleBreakSelection = (breakType: 'short' | 'long') => {
    stopAlarmSound();
    setSessionType(breakType === 'short' ? 'short-break' : 'long-break');
    setTimeRemaining(
      breakType === 'short' ? SHORT_BREAK_DURATION : LONG_BREAK_DURATION
    );
    setIsRunning(true);
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen space-y-8">
        <h1 className="text-4xl font-light text-gray-800 dark:text-white mb-8">
          pomino.
        </h1>
        {sessionType === 'break-selection' ? (
          <BreakSelector onBreakSelect={handleBreakSelection} />
        ) : (
          <>
            <Timer
              timeRemaining={timeRemaining}
              sessionType={sessionType}
              isRunning={isRunning}
              onStartPause={() => setIsRunning(!isRunning)}
              onReset={() => {
                setIsRunning(false);
                setTimeRemaining(POMODORO_DURATION);
                setSessionType('pomodoro');
              }}
            />
            <SessionCounter count={sessionCount} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
