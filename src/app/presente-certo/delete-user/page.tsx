'use client';

import { useState } from 'react';

export default function DeleteUserPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleDeleteUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await fetch('/api/presente-certo/delete-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setError(data.error || 'Ocorreu um erro ao excluir o usuário.');
      }
    } catch {
      setError('Ocorreu um erro ao conectar ao servidor.');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">
          Excluir conta do Presente Certo
        </h1>
        <p className="text-center text-gray-600">
          Digite seu e-mail para solicitar a exclusão da sua conta. Esta ação é
          irreversível.
        </p>
        <form onSubmit={handleDeleteUser} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Excluir minha conta
            </button>
          </div>
        </form>
        {message && (
          <p className="text-center text-green-600">{message}</p>
        )}
        {error && (
          <p className="text-center text-red-600">{error}</p>
        )}
      </div>
    </main>
  );
}
