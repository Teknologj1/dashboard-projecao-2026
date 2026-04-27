'use client';

import { useState, useEffect, ReactNode } from 'react';

interface AuthGuardProps {
  children: ReactNode;
  onAuthSuccess: () => void;
}

const ADMIN_PASSWORD = 'admin2026'; // Senha padrão - pode ser alterada

export default function AuthGuard({ children, onAuthSuccess }: AuthGuardProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verifica se já está autenticado (sessionStorage)
    const auth = sessionStorage.getItem('admin_authenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
      onAuthSuccess();
    }
  }, [onAuthSuccess]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_authenticated', 'true');
      setError('');
      onAuthSuccess();
    } else {
      setError('Senha incorreta. Tente novamente.');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 max-w-md w-full border border-gray-200 dark:border-gray-700">
        <div className="text-center mb-6">
          <div className="text-4xl mb-4">🔒</div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Acesso Restrito
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Esta área é restrita a administradores. Digite a senha para continuar.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Digite a senha"
              autoFocus
            />
          </div>

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Entrar
          </button>
        </form>

        <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
          A senha é válida apenas para esta sessão do navegador.
        </p>
      </div>
    </div>
  );
}

