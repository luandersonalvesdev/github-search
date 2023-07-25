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

  return (
    <button
      className="
        mr-16 py-2
        px-4
        border
        rounded-md
        font-light
        duration-200
        bg-rose-50
        border-rose-200
        hover:bg-rose-100
        hover:border-rose-300
        "
      onClick={ handleLogout }
    >
      Sair
    </button>
  );
}
