'use client';

import { useState, useEffect } from 'react';
import Tabs from '@/components/Tabs';
import AuthGuard from '@/components/AuthGuard';
import ChecklistTab from '@/components/tabs/ChecklistTab';
import AdministrationTab from '@/components/tabs/AdministrationTab';
import Image from 'next/image';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('checklist');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verifica autenticação ao carregar
  useEffect(() => {
    const auth = sessionStorage.getItem('admin_authenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const tabs = [
    { id: 'checklist', label: 'Checklist de Rotinas', icon: '✅', requiresAuth: false },
    { id: 'administration', label: 'Administração', icon: '⚙️', requiresAuth: true },
  ];

  const handleTabChange = (tabId: string) => {
    // Permite mudar a aba - o AuthGuard vai mostrar o formulário se necessário
    setActiveTab(tabId);
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'checklist':
        return <ChecklistTab />;
      case 'administration':
        return <AdministrationTab />;
      default:
        return <ChecklistTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Dashboard Administrativo e Financeiro
          </h1>
          <div className="flex justify-center sm:justify-start mb-2">
            <Image
              src="/IOIS.png"
              alt="Instituto IOIS"
              width={180}
              height={72}
              className="h-auto w-auto max-w-[150px] sm:max-w-[180px] md:max-w-[220px]"
              priority
            />
          </div>
        </header>

        {/* Tabs */}
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange}>
          {renderTabContent()}
        </Tabs>
      </div>
    </div>
  );
}

