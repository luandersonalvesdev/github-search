'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProfileFinder from '../components/ProfileFinder';
import NavBar from '../components/NavBar';
import ReposTimeline from '../components/ReposTimeline';
import { verifyLogin } from '../helpers/verifyLogin';

export default function Timeline() {
  const router = useRouter();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    verifyLogin(router);
    const getFavorites = JSON.parse(localStorage.getItem('githubSearchFavs'));
    if (!getFavorites) {
      localStorage.setItem('githubSearchFavs', JSON.stringify([]));
      return;
    }
    setFavorites(getFavorites);
  }, [router]);

  return (
    <main className="flex flex-col items-center w-full h-screen">
      <NavBar />
      <section
        className="
          flex
          flex-row-reverse
          items-start
          px-10
          pt-24
          space-x-4
          w-11/12
          border
          "
      >
        <ProfileFinder goal="profile" />
        <ReposTimeline profiles={ favorites } />
      </section>
    </main>
  );
}
