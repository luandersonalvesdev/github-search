'use client';

import { useRouter } from 'next/navigation';

export default function LoginAsGuest() {
  const router = useRouter();

  const handleLoginGuest = () => {
    localStorage.setItem('githubSearchUser', '.');
    router.push('/timeline');
  };
  return (
    <div className="flex flex-col mt-20">
      <p className="text-gray-500 mb-3">Não tem uma conta no github?</p>
      <button
        onClick={ handleLoginGuest }
        className="
          p-3
          rounded
          min-w-full
          border-2
          bg-yellow-100
          border-yellow-200
          duration-300"
      >
        Entrar como convidado
      </button>
    </div>
  );
}
