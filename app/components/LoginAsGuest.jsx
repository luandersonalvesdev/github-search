'use client';

import { useRouter } from 'next/navigation';

export default function LoginAsGuest() {
  const router = useRouter();

  const handleLoginGuest = () => {
    localStorage.setItem('githubSearchUser', '.');
    router.push('/timeline');
  };
  return (
    <div>
      <p>Não tem uma conta no github?</p>
      <button onClick={ handleLoginGuest }>
        Entrar como convidado
      </button>
    </div>
  );
}
