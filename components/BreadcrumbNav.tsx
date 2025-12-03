'use client';

import { BreadcrumbItem } from '@/types/drillDown';

interface BreadcrumbNavProps {
  breadcrumbs: BreadcrumbItem[];
}

export default function BreadcrumbNav({ breadcrumbs }: BreadcrumbNavProps) {
  if (breadcrumbs.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm mb-4">
      <button
        onClick={() => window.location.reload()}
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        Início
      </button>
      {breadcrumbs.map((crumb, index) => (
        <span key={index} className="flex items-center">
          <span className="mx-2 text-gray-400">/</span>
          <button
            onClick={crumb.onClick}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {crumb.label}
          </button>
        </span>
      ))}
    </nav>
  );
}

