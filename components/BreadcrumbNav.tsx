'use client';

import { BreadcrumbItem } from '@/types/drillDown';

interface BreadcrumbNavProps {
  breadcrumbs: BreadcrumbItem[];
}

export default function BreadcrumbNav({ breadcrumbs }: BreadcrumbNavProps) {
  if (breadcrumbs.length === 0) return null;

  return (
    <nav className="flex items-center flex-wrap space-x-1 sm:space-x-2 text-xs sm:text-sm mb-2 sm:mb-3 md:mb-4">
      <button
        onClick={() => window.location.reload()}
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        Início
      </button>
      {breadcrumbs.map((crumb, index) => (
        <span key={index} className="flex items-center">
          <span className="mx-1 sm:mx-2 text-gray-400">/</span>
          <button
            onClick={crumb.onClick}
            className="text-blue-600 dark:text-blue-400 hover:underline truncate max-w-[120px] sm:max-w-none"
          >
            {crumb.label}
          </button>
        </span>
      ))}
    </nav>
  );
}

