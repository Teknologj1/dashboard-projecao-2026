'use client';

import { useState, useEffect } from 'react';
import SubTabs from '@/components/SubTabs';
import AuthGuard from '@/components/AuthGuard';
import Results2025Tab from '@/components/tabs/Results2025Tab';
import Projections2026Tab from '@/components/tabs/Projections2026Tab';
import DailyActivityReport from '@/components/DailyActivityReport';
import MonthlyReport from '@/components/MonthlyReport';
import CourseManagement from '@/components/CourseManagement';

export default function AdministrationTab() {
  const [activeSubTab, setActiveSubTab] = useState('results2025');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verifica autenticação ao carregar
  useEffect(() => {
    const auth = sessionStorage.getItem('admin_authenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const subTabs = [
    { id: 'results2025', label: 'Resultados 2025', icon: '📊' },
    { id: 'projections2026', label: 'Projeções 2026', icon: '🔮' },
    { id: 'activityReport', label: 'Relatório de Acompanhamento', icon: '📋' },
    { id: 'monthlyReport', label: 'Relatório Mensal', icon: '📅' },
    { id: 'coursesManagement', label: 'Gestão de Cursos', icon: '🎓' },
  ];

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    setIsAuthenticated(false);
    // Força re-render do AuthGuard
    window.location.reload();
  };

  const renderSubTabContent = () => {
    // Se não estiver autenticado, não renderiza as sub-abas
    if (!isAuthenticated) {
      return null;
    }

    switch (activeSubTab) {
      case 'results2025':
        return <Results2025Tab />;
      case 'projections2026':
        return <Projections2026Tab />;
      case 'activityReport':
        return (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Relatório de Acompanhamento Diário
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Histórico completo de atividades concluídas do checklist
              </p>
            </div>
            <DailyActivityReport />
          </div>
        );
      case 'monthlyReport':
        return (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Relatório Mensal
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Visualização completa de todas as atividades dia a dia do mês
              </p>
            </div>
            <MonthlyReport />
          </div>
        );
      case 'coursesManagement':
        return <CourseManagement />;
      default:
        return <Results2025Tab />;
    }
  };

  return (
    <AuthGuard onAuthSuccess={handleAuthSuccess}>
      {isAuthenticated && (
        <div>
          {/* Botão Sair */}
          <div className="mb-4 sm:mb-6 flex justify-end">
            <button
              onClick={handleLogout}
              className="px-3 sm:px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              <span>🚪</span>
              <span>Sair</span>
            </button>
          </div>
          
          <SubTabs tabs={subTabs} activeTab={activeSubTab} onTabChange={setActiveSubTab}>
            {renderSubTabContent()}
          </SubTabs>
        </div>
      )}
    </AuthGuard>
  );
}

