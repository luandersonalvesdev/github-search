'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getUserFromLS = localStorage.getItem('githubSearchUser');
    if (!getUserFromLS) { router.push('/'); }
    const getFavsFromLS = JSON.parse(localStorage.getItem('githubSearchFavs'));
    setFavorites(getFavsFromLS);
  }, []);

  console.log(favorites);

  return <span>Tou em favoritos</span>;
}
