'use client';

import { useRouter } from 'next/navigation';
import {
  useCurrentSearch,
  initialCurrSearchState,
} from '../context/CurrentSearchContext';

export default function ButtonLogout() {
  const router = useRouter();
  const { setCurrSearch } = useCurrentSearch();

  const handleLogout = () => {
    setCurrSearch(initialCurrSearchState);
    localStorage.removeItem('githubSearchUser');
    router.push('/');
  };

  return <button onClick={ handleLogout }>Sair</button>;
}
