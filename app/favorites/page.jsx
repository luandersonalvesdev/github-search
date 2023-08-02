'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import ListOfFavorites from '../components/ListOfFavorites';
import { verifyLogin } from '../helpers/verifyLogin';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const router = useRouter();

  useEffect(() => {
    verifyLogin(router);
    const getFavsFromLS = JSON.parse(localStorage.getItem('githubSearchFavs'));
    if (!getFavsFromLS) {
      localStorage.setItem('githubSearchFavs', JSON.stringify([]));
      return;
    }
    setFavorites(getFavsFromLS);
  }, [router]);

  return (
    <main className="flex flex-col items-center w-full">
      <NavBar />
      {
        !favorites.length
          ? (
            <p className="text-5xl opacity-25">
              Você ainda não tem usuários favoritados.
            </p>
          )
          : (
            <div>
              <p>Todos os seus favoritos:</p>
              <ListOfFavorites favorites={ favorites } />
            </div>
          )
      }
    </main>
  );
}
