'use client';

import { useRouter } from 'next/navigation';

export default function LoginAsGuest() {
  const router = useRouter();

  const handleLoginGuest = () => {
    localStorage.setItem('githubSearchUser', '.');
    router.push('/timeline');
  };
  return (
    <div className="flex flex-col mt-14">
      <p className="text-gray-500 mb-3 font-light">Não tem uma conta no github?</p>
      <button
        onClick={ handleLoginGuest }
        className="
          p-3
          font-light
          rounded-md
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
