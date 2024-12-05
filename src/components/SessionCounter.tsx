import React from 'react';
import { Target } from 'lucide-react';

interface SessionCounterProps {
  count: number;
}

export const SessionCounter: React.FC<SessionCounterProps> = ({ count }) => {
  return (
    <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400">
      <Target className="w-4 h-4" />
      <span className="text-sm font-medium">{count} sessions completed</span>
    </div>
  );
};