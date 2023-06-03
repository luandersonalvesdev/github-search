'use client';

import { useRouter } from 'next/navigation';

export default function ButtonLogout() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('githubSearchUser');
    router.push('/');
  };

  return <button onClick={ handleLogout }>Sair</button>;
}
