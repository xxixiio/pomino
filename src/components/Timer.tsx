import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface TimerProps {
  timeRemaining: number;
  sessionType: string;
  isRunning: boolean;
  onStartPause: () => void;
  onReset: () => void;
}

export const Timer: React.FC<TimerProps> = ({
  timeRemaining,
  sessionType,
  isRunning,
  onStartPause,
  onReset,
}) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  const getSessionLabel = () => {
    switch (sessionType) {
      case 'pomodoro':
        return 'Focus Time';
      case 'short-break':
        return 'Short Break';
      case 'long-break':
        return 'Long Break';
      default:
        return 'Pomino';
    }
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <h2 className="text-2xl font-medium text-gray-600 dark:text-gray-300 transition-colors">
        {getSessionLabel()}
      </h2>
      <div className="text-7xl font-light tracking-tight text-gray-800 dark:text-white transition-colors">
        {formatTime(timeRemaining)}
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={onStartPause}
          className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500 
                     hover:bg-indigo-600 text-white transition-colors duration-200 focus:outline-none 
                     focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          {isRunning ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6 ml-1" />
          )}
        </button>
        <button
          onClick={onReset}
          className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 
                     hover:bg-gray-300 text-gray-600 transition-colors duration-200 
                     dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300"
        >
          <RotateCcw className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};