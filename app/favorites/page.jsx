'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Favorites() {
  const router = useRouter();

  useEffect(() => {
    const getUserFromLS = localStorage.getItem('githubSearchUser');
    // eslint-disable-next-line no-unused-expressions
    !getUserFromLS && router.push('/');
  }, []);

  return <span>Tou em favoritos</span>;
}
