import React from 'react';
import { Coffee, Battery } from 'lucide-react';

interface BreakSelectorProps {
  onBreakSelect: (breakType: 'short' | 'long') => void;
}

export const BreakSelector: React.FC<BreakSelectorProps> = ({ onBreakSelect }) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <h2 className="text-2xl font-medium text-gray-600 dark:text-gray-300">
        Time for a break
      </h2>
      <div className="flex space-x-4">
        <button
          onClick={() => onBreakSelect('short')}
          className="flex flex-col items-center justify-center p-6 w-48 space-y-4
                     bg-green-50 hover:bg-green-100 dark:bg-gray-800 dark:hover:bg-gray-700
                     rounded-xl transition-colors duration-200 group"
        >
          <Coffee className="w-8 h-8 text-green-600 dark:text-green-400" />
          <div className="text-center">
            <div className="font-medium text-gray-800 dark:text-gray-200">Short Break</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">5 minutes</div>
          </div>
        </button>
        <button
          onClick={() => onBreakSelect('long')}
          className="flex flex-col items-center justify-center p-6 w-48 space-y-4
                     bg-blue-50 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-gray-700
                     rounded-xl transition-colors duration-200 group"
        >
          <Battery className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <div className="text-center">
            <div className="font-medium text-gray-800 dark:text-gray-200">Long Break</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">10 minutes</div>
          </div>
        </button>
      </div>
    </div>
  );
};