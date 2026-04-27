'use client';

import { ReactNode } from 'react';

interface SubTab {
  id: string;
  label: string;
  icon?: string;
}

interface SubTabsProps {
  tabs: SubTab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  children: ReactNode;
}

export default function SubTabs({ tabs, activeTab, onTabChange, children }: SubTabsProps) {
  return (
    <div className="w-full">
      {/* Sub-Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
        <nav className="flex flex-wrap gap-2 sm:gap-3 -mb-px" aria-label="Sub-Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                px-3 sm:px-4 py-2 text-sm sm:text-base font-medium border-b-2 transition-colors
                ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }
              `}
            >
              {tab.icon && <span className="mr-1 sm:mr-2">{tab.icon}</span>}
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Sub-Tab Content */}
      <div className="sub-tab-content">
        {children}
      </div>
    </div>
  );
}

