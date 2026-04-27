'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { CourseCatalogItem, CourseRecord, CourseTransactionType } from '@/types/courses';
import {
  loadCourseStorageData,
  saveCourseRecords,
  saveCourseCatalog,
  exportCourseRecords,
  importCourseRecords,
} from '@/utils/courseStorage';

const MONTHS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

type CourseSummary = {
  totalProfissionais: number;
  totalPraticas: number;
  totalPacientesModelo: number;
  totalEntradas: number;
  totalCustos: number;
  resultadoLiquido: number;
};

function getTransactionLabel(type: CourseTransactionType): string {
  switch (type) {
    case 'profissional':
      return 'Profissional';
    case 'pratica':
      return 'Prática';
    case 'paciente_modelo':
      return 'Paciente Modelo';
    case 'custo':
      return 'Custo';
    default:
      return type;
  }
}

function getCourseSummary(course: CourseRecord): CourseSummary {
  const totalProfissionais = course.transactions
    .filter((item) => item.type === 'profissional')
    .reduce((sum, item) => sum + item.amount, 0);

  const totalPraticas = course.transactions
    .filter((item) => item.type === 'pratica')
    .reduce((sum, item) => sum + item.amount, 0);

  const totalPacientesModelo = course.transactions
    .filter((item) => item.type === 'paciente_modelo')
    .reduce((sum, item) => sum + item.amount, 0);

  const totalCustos = course.transactions
    .filter((item) => item.type === 'custo')
    .reduce((sum, item) => sum + item.amount, 0);

  const totalEntradas = totalProfissionais + totalPraticas + totalPacientesModelo;

  return {
    totalProfissionais,
    totalPraticas,
    totalPacientesModelo,
    totalEntradas,
    totalCustos,
    resultadoLiquido: totalEntradas - totalCustos,
  };
}

export default function CourseManagement() {
  const currentDate = new Date();
  const [selectedYear, setSelectedYear] = useState<number>(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<number>(currentDate.getMonth() + 1);
  const [records, setRecords] = useState<CourseRecord[]>([]);
  const [courseCatalog, setCourseCatalog] = useState<CourseCatalogItem[]>([]);

  const [selectedCatalogCourseId, setSelectedCatalogCourseId] = useState('');
  const [newCourseNameInput, setNewCourseNameInput] = useState('');
  const [newCatalogCourseName, setNewCatalogCourseName] = useState('');
  const [newCourseNotes, setNewCourseNotes] = useState('');

  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [transactionType, setTransactionType] = useState<CourseTransactionType>('profissional');
  const [transactionDescription, setTransactionDescription] = useState('');
  const [transactionParticipant, setTransactionParticipant] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [transactionDate, setTransactionDate] = useState(
    new Date().toISOString().split('T')[0]
  );

  const [showImport, setShowImport] = useState(false);
  const [importData, setImportData] = useState('');
  const [importError, setImportError] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [loadError, setLoadError] = useState('');

  const refreshData = async () => {
    try {
      setLoadError('');
      const loaded = await loadCourseStorageData();
      setRecords(loaded.records);
      setCourseCatalog(loaded.catalog);
    } catch (error) {
      console.error(error);
      setLoadError('Nao foi possivel carregar os cursos salvos no servidor.');
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  const filteredCourses = useMemo(
    () =>
      records
        .filter((course) => course.year === selectedYear && course.month === selectedMonth)
        .sort((a, b) => a.courseName.localeCompare(b.courseName)),
    [records, selectedYear, selectedMonth]
  );

  const monthlySummary = useMemo(() => {
    return filteredCourses.reduce(
      (acc, course) => {
        const summary = getCourseSummary(course);
        acc.totalProfissionais += summary.totalProfissionais;
        acc.totalPraticas += summary.totalPraticas;
        acc.totalPacientesModelo += summary.totalPacientesModelo;
        acc.totalEntradas += summary.totalEntradas;
        acc.totalCustos += summary.totalCustos;
        acc.resultadoLiquido += summary.resultadoLiquido;
        return acc;
      },
      {
        totalProfissionais: 0,
        totalPraticas: 0,
        totalPacientesModelo: 0,
        totalEntradas: 0,
        totalCustos: 0,
        resultadoLiquido: 0,
      } as CourseSummary
    );
  }, [filteredCourses]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(value);

  const handleAddCourse = async (e: FormEvent) => {
    e.preventDefault();

    const selectedCatalogName = courseCatalog.find(
      (item) => item.id === selectedCatalogCourseId
    )?.name;

    const typedName = newCourseNameInput.trim();
    const courseName = selectedCatalogName || typedName;
    if (!courseName) return;

    const alreadyExistsInPeriod = records.some(
      (course) =>
        course.year === selectedYear &&
        course.month === selectedMonth &&
        course.courseName.toLowerCase() === courseName.toLowerCase()
    );

    if (alreadyExistsInPeriod) {
      window.alert(`O curso "${courseName}" já está cadastrado para este mês.`);
      return;
    }

    const now = new Date().toISOString();
    const nextRecord: CourseRecord = {
      id: crypto.randomUUID(),
      courseName,
      year: selectedYear,
      month: selectedMonth,
      notes: newCourseNotes.trim() || undefined,
      transactions: [],
      createdAt: now,
      updatedAt: now,
    };

    try {
      setIsSaving(true);
      const updated = [...records, nextRecord];
      await saveCourseRecords(updated);
      await refreshData();
      setSelectedCatalogCourseId('');
      setNewCourseNameInput('');
      setNewCourseNotes('');
      setSelectedCourseId(nextRecord.id);
    } catch (error) {
      console.error(error);
      window.alert('Nao foi possivel salvar o curso no servidor.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddCatalogCourse = async (e: FormEvent) => {
    e.preventDefault();
    const name = newCatalogCourseName.trim();
    if (!name) return;

    const exists = courseCatalog.some(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    if (exists) {
      window.alert('Esse curso já existe no catálogo.');
      return;
    }

    const nextItem: CourseCatalogItem = {
      id: crypto.randomUUID(),
      name,
      createdAt: new Date().toISOString(),
    };

    try {
      setIsSaving(true);
      const updatedCatalog = [...courseCatalog, nextItem].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      await saveCourseCatalog(updatedCatalog);
      await refreshData();
      setSelectedCatalogCourseId(nextItem.id);
      setNewCatalogCourseName('');
    } catch (error) {
      console.error(error);
      window.alert('Nao foi possivel salvar o curso no catalogo.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteCourse = async (courseId: string) => {
    const course = records.find((item) => item.id === courseId);
    if (!course) return;

    const shouldDelete = window.confirm(
      `Deseja remover o curso "${course.courseName}" e todos os lançamentos?`
    );
    if (!shouldDelete) return;

    try {
      setIsSaving(true);
      const updated = records.filter((item) => item.id !== courseId);
      await saveCourseRecords(updated);
      await refreshData();
    } catch (error) {
      console.error(error);
      window.alert('Nao foi possivel excluir o curso.');
    } finally {
      setIsSaving(false);
    }

    if (selectedCourseId === courseId) {
      setSelectedCourseId('');
    }
  };

  const handleAddTransaction = async (e: FormEvent) => {
    e.preventDefault();
    if (!selectedCourseId || !transactionDescription.trim()) return;

    const amount = Number(transactionAmount.replace(',', '.'));
    if (Number.isNaN(amount) || amount <= 0) return;

    const now = new Date().toISOString();
    try {
      setIsSaving(true);
      const updated = records.map((course) => {
        if (course.id !== selectedCourseId) return course;

        return {
          ...course,
          updatedAt: now,
          transactions: [
            ...course.transactions,
            {
              id: crypto.randomUUID(),
              type: transactionType,
              description: transactionDescription.trim(),
              participantName: transactionParticipant.trim() || undefined,
              amount,
              date: transactionDate,
              createdAt: now,
            },
          ],
        };
      });

      await saveCourseRecords(updated);
      await refreshData();
      setTransactionDescription('');
      setTransactionParticipant('');
      setTransactionAmount('');
    } catch (error) {
      console.error(error);
      window.alert('Nao foi possivel salvar o lancamento.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleExport = async () => {
    const data = await exportCourseRecords();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cursos-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = async () => {
    setImportError('');
    if (!importData.trim()) {
      setImportError('Cole o JSON exportado para importar.');
      return;
    }
    const success = await importCourseRecords(importData);
    if (!success) {
      setImportError('Formato inválido para importação.');
      return;
    }
    await refreshData();
    setImportData('');
    setShowImport(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Gestão de Cursos
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Controle de entradas, praticas, pacientes modelo, custos e relatorio mensal por curso.
        </p>
        {loadError && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">{loadError}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ano</label>
          <input
            type="number"
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mês</label>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            {MONTHS.map((month, index) => (
              <option key={month} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
            Cadastrar Curso no Mês
          </h3>
          <form onSubmit={handleAddCourse} className="space-y-3 mb-5">
            <select
              value={selectedCatalogCourseId}
              onChange={(e) => setSelectedCatalogCourseId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">Selecione do catálogo (opcional)</option>
              {courseCatalog.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))}
            </select>
            <input
              value={newCourseNameInput}
              onChange={(e) => setNewCourseNameInput(e.target.value)}
              placeholder="Ou digite nome para uso imediato"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <textarea
              value={newCourseNotes}
              onChange={(e) => setNewCourseNotes(e.target.value)}
              placeholder="Observações (opcional)"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <button
              type="submit"
              disabled={isSaving}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
            >
              Adicionar Curso no Mês
            </button>
          </form>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Catálogo de cursos reutilizáveis
            </p>
            <form onSubmit={handleAddCatalogCourse} className="flex gap-2">
              <input
                value={newCatalogCourseName}
                onChange={(e) => setNewCatalogCourseName(e.target.value)}
                placeholder="Novo curso no catálogo"
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <button
                type="submit"
                disabled={isSaving}
                className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm"
              >
                Salvar
              </button>
            </form>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Lançar Movimento</h3>
          <form onSubmit={handleAddTransaction} className="space-y-3">
            <select
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">Selecione o curso</option>
              {filteredCourses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.courseName}
                </option>
              ))}
            </select>
            <select
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value as CourseTransactionType)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="profissional">Entrada - Profissional</option>
              <option value="pratica">Entrada - Prática</option>
              <option value="paciente_modelo">Entrada - Paciente Modelo</option>
              <option value="custo">Custo</option>
            </select>
            <input
              value={transactionDescription}
              onChange={(e) => setTransactionDescription(e.target.value)}
              placeholder="Descrição do lançamento"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <input
              value={transactionParticipant}
              onChange={(e) => setTransactionParticipant(e.target.value)}
              placeholder="Nome do participante/paciente (opcional)"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="date"
                value={transactionDate}
                onChange={(e) => setTransactionDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="number"
                step="0.01"
                min="0"
                value={transactionAmount}
                onChange={(e) => setTransactionAmount(e.target.value)}
                placeholder="Valor"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <button
              type="submit"
              disabled={isSaving}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium"
            >
              Adicionar Lançamento
            </button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
          <p className="text-xs text-green-700 dark:text-green-300">Entradas Totais</p>
          <p className="text-lg font-bold text-green-800 dark:text-green-200">
            {formatCurrency(monthlySummary.totalEntradas)}
          </p>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
          <p className="text-xs text-red-700 dark:text-red-300">Custos Totais</p>
          <p className="text-lg font-bold text-red-800 dark:text-red-200">
            {formatCurrency(monthlySummary.totalCustos)}
          </p>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800 col-span-2 lg:col-span-1">
          <p className="text-xs text-blue-700 dark:text-blue-300">Resultado Líquido</p>
          <p className="text-lg font-bold text-blue-800 dark:text-blue-200">
            {formatCurrency(monthlySummary.resultadoLiquido)}
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Relatório por Curso ({MONTHS[selectedMonth - 1]}/{selectedYear})
          </h3>
          <div className="flex gap-2">
            <button
              onClick={handleExport}
              className="px-3 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
            >
              Exportar
            </button>
            <button
              onClick={() => setShowImport((prev) => !prev)}
              className="px-3 py-2 text-sm bg-teal-600 hover:bg-teal-700 text-white rounded-lg"
            >
              Importar
            </button>
          </div>
        </div>

        {showImport && (
          <div className="mb-4 p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900/40">
            <textarea
              value={importData}
              onChange={(e) => {
                setImportData(e.target.value);
                setImportError('');
              }}
              rows={5}
              placeholder="Cole aqui o JSON exportado de cursos..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-mono text-xs"
            />
            {importError && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">{importError}</p>
            )}
            <div className="flex gap-2 mt-3">
              <button
                onClick={handleImport}
                className="px-3 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded-lg"
              >
                Confirmar Importação
              </button>
            </div>
          </div>
        )}

        {filteredCourses.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Nenhum curso cadastrado para este mês.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                  <th className="py-2 pr-3">Curso</th>
                  <th className="py-2 pr-3">Entradas</th>
                  <th className="py-2 pr-3">Custos</th>
                  <th className="py-2 pr-3">Resultado</th>
                  <th className="py-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((course) => {
                  const summary = getCourseSummary(course);
                  return (
                    <tr key={course.id} className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 pr-3">
                        <p className="font-medium text-gray-900 dark:text-white">{course.courseName}</p>
                        {course.notes && (
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{course.notes}</p>
                        )}
                      </td>
                      <td className="py-2 pr-3 text-green-700 dark:text-green-300">
                        {formatCurrency(summary.totalEntradas)}
                      </td>
                      <td className="py-2 pr-3 text-red-700 dark:text-red-300">
                        {formatCurrency(summary.totalCustos)}
                      </td>
                      <td className="py-2 pr-3 text-blue-700 dark:text-blue-300">
                        {formatCurrency(summary.resultadoLiquido)}
                      </td>
                      <td className="py-2">
                        <button
                          onClick={() => handleDeleteCourse(course.id)}
                          className="px-2 py-1 text-xs bg-red-600 hover:bg-red-700 text-white rounded"
                        >
                          Excluir
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700"
          >
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">{course.courseName}</h4>
            {course.transactions.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">Sem lançamentos.</p>
            ) : (
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {[...course.transactions]
                  .sort((a, b) => b.date.localeCompare(a.date))
                  .map((item) => (
                    <div
                      key={item.id}
                      className="text-sm p-2 rounded border border-gray-200 dark:border-gray-700"
                    >
                      <p className="font-medium text-gray-900 dark:text-white">{item.description}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {getTransactionLabel(item.type)} | {new Date(item.date).toLocaleDateString('pt-BR')}
                        {item.participantName ? ` | ${item.participantName}` : ''}
                      </p>
                      <p
                        className={`text-sm font-semibold ${
                          item.type === 'custo'
                            ? 'text-red-600 dark:text-red-400'
                            : 'text-green-600 dark:text-green-400'
                        }`}
                      >
                        {item.type === 'custo' ? '-' : '+'}
                        {formatCurrency(item.amount)}
                      </p>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
