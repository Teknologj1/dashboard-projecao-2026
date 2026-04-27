'use client';

import { useState } from 'react';
import { exportChecklistData, importChecklistData, clearChecklistData } from '@/utils/checklistStorage';

export default function ChecklistDataManager() {
  const [showImport, setShowImport] = useState(false);
  const [importData, setImportData] = useState('');
  const [importError, setImportError] = useState('');

  const handleExport = () => {
    const data = exportChecklistData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `checklist-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    setImportError('');
    if (!importData.trim()) {
      setImportError('Por favor, cole os dados JSON para importar.');
      return;
    }

    const success = importChecklistData(importData);
    if (success) {
      setImportData('');
      setShowImport(false);
      window.location.reload(); // Recarrega para atualizar os componentes
    } else {
      setImportError('Erro ao importar dados. Verifique se o formato está correto.');
    }
  };

  const handleClear = () => {
    if (confirm('Tem certeza que deseja limpar todos os dados do checklist? Esta ação não pode ser desfeita.')) {
      clearChecklistData();
      window.location.reload();
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 border border-gray-200 dark:border-gray-700 mb-6">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">
        Gerenciamento de Dados
      </h3>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button
          onClick={handleExport}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm sm:text-base"
        >
          📥 Exportar Dados
        </button>

        <button
          onClick={() => setShowImport(!showImport)}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors text-sm sm:text-base"
        >
          📤 Importar Dados
        </button>

        <button
          onClick={handleClear}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors text-sm sm:text-base"
        >
          🗑️ Limpar Dados
        </button>
      </div>

      {showImport && (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Cole os dados JSON aqui:
          </label>
          <textarea
            value={importData}
            onChange={(e) => {
              setImportData(e.target.value);
              setImportError('');
            }}
            className="w-full h-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm font-mono"
            placeholder="Cole o conteúdo do arquivo JSON exportado aqui..."
          />
          {importError && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{importError}</p>
          )}
          <div className="mt-3 flex gap-2">
            <button
              onClick={handleImport}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors text-sm"
            >
              Confirmar Importação
            </button>
            <button
              onClick={() => {
                setShowImport(false);
                setImportData('');
                setImportError('');
              }}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors text-sm"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      <p className="mt-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        💡 Use a exportação para fazer backup dos seus dados. Os dados são salvos automaticamente no navegador.
      </p>
    </div>
  );
}

